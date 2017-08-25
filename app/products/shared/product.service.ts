import { Injectable, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import { BehaviorSubject, Observable } from "rxjs/Rx";

import { Kinvey } from "kinvey-nativescript-sdk";
import { Config } from "../../shared/config";
import { Product } from "./product.model";
import { ShoppingCart } from "./shoppingcart.model";

import * as fs from "file-system";

@Injectable()
export class ProductService {
    private allProducts: Array<Product> = [];
    private productsStore = Kinvey.DataStore.collection<Product>("Product");
    private cartStore = Kinvey.DataStore.collection<ShoppingCart>("ShoppingCart");

    static cart: ShoppingCart;
    static rootCartId: "599f41707f2a6ba14eb10ff3";

    constructor(private _ngZone: NgZone) { }

    getProductById(id: string) {
        if (!id) {
            return;
        }

        return this.allProducts.filter((product) => {
            return product._id === id;
        })[0];
    }

    getCart(): Observable<any> {
        return new Observable((observer: any) => {
            this.login().then(() => {
                return this.syncDataStore();
            }).then(() => {
                const stream = this.cartStore.find();

                return stream.toPromise();
            }).then((data) => {
                data.forEach((entry) => {
                    // TODO: Remove this silly hardcoding
                    if (entry._id == ProductService.rootCartId) {
                        ProductService.cart = entry;
                    }
                });
                observer.next(new ShoppingCart(ProductService.cart));
            }).catch(this.handleErrors);
        });
    }

    addToCart(productId: string): Observable<any> {
        let cart = ProductService.cart;
        cart.addProduct(productId);

        return new Observable((observer: any) => {
            this.cartStore.save({
                _id: ProductService.rootCartId,
                products: cart
            }).then((data) => {
                observer.next({});
            }).catch(this.handleErrors);
        });
    }

    load(): Observable<any> {
        return new Observable((observer: any) => {
            this.login().then(() => {
                return this.syncDataStore();
            }).then(() => {
                const stream = this.productsStore.find();

                return stream.toPromise();
            }).then((data) => {
                this.allProducts = [];
                data.forEach((product) => {
                    this.allProducts.push(new Product(product));
                });

                observer.next(this.allProducts);
            }).catch(this.handleErrors);
        });
    }

    update(editObject: Product) {
        return this.productsStore.save(editObject);
    }

    private syncDataStore() {
        return this.productsStore.pendingSyncEntities().then((pendingEntities: any[]) => {
            let queue = Promise.resolve();

            if (pendingEntities && pendingEntities.length) {
                queue = queue
                    .then(() => this.productsStore.push())
                    .then((entities: Kinvey.PushResult<Product>[]) => {

                        /* ***********************************************************
                        * Each item in the array of pushed entities will look like the following
                        * { _id: '<entity id before push>', entity: <entity after push> }
                        * It could also possibly have an error property if the push failed.
                        * { _id: '<entity id before push>', entity: <entity after push>, error: <reason push failed> }
                        * Learn more about in this documentation article:
                        * http://devcenter.kinvey.com/nativescript/guides/datastore#push
                        *************************************************************/
                    });
            }

            return queue;
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
