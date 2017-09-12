import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs/Rx";

import { Kinvey } from "kinvey-nativescript-sdk";
import { Config } from "../../shared/config";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    private productsStore = Kinvey.DataStore.collection<Product>("Product");

    private productsDataSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
    public get products$(): Observable<Product[]> {
        return this.productsDataSubject;
    }

    getProductById(id: string): Product {
        if (!id) {
            return;
        }

        return this.productsDataSubject.value.filter((product) => {
            return product._id === id;
        })[0];
    }

    load(): Promise<any> {
        return this.login()
        .then(() => this.syncDataStore())
        .then(() => {
            const productStream: Observable<Product[]> = this.productsStore.find();
            return productStream.toPromise();
        })
        .then((data: Product[]) => {
            const allProducts: Product[] = [];
            data.forEach((product) => {
                allProducts.push(new Product(product));
            });

            // Temporary hack for testing.
            allProducts.push(new Product({
                name: "Jumbo Stress Cube",
                description: "A NativeScript-themed stress ball that is bigger than your dog. What will you do with this? Buy one and find out!",
                imageSource: "https://i.imgur.com/ORWAyRz.png",
                price: "999",
                _id: "999999"
            }));

            this.productsDataSubject.next(allProducts);
        })
        .catch(this.handleErrors);
    }

    private syncDataStore(): Promise<any> {
        return this.productsStore.pendingSyncEntities()
        .then((pendingEntities: Kinvey.SyncEntity[]) => {
            if (pendingEntities && pendingEntities.length) {
                return this.productsStore.push()
                // .then(entities => {
                    /* ***********************************************************
                    * Each item in the array of pushed entities will look like the following
                    * { _id: '<entity id before push>', entity: <entity after push> }
                    * It could also possibly have an error property if the push failed.
                    * { _id: '<entity id before push>', entity: <entity after push>, error: <reason push failed> }
                    * Learn more about in this documentation article:
                    * http://devcenter.kinvey.com/nativescript/guides/datastore#push
                    *************************************************************/
                //     return;
                // })
            } else {
                return;
            }
        });
    }

    private login(): Promise<any> {
        if (!!Kinvey.User.getActiveUser()) {
            return Promise.resolve();
        } else {
            return Kinvey.User.login(Config.kinveyUsername, Config.kinveyPassword);
        }
    }

    private handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
