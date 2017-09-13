import { startMonitoring, connectionType } from "tns-core-modules/connectivity";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Kinvey } from "kinvey-nativescript-sdk";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject, Observable } from "rxjs/Rx";

import { Config } from "../../shared/config";
import { CartItem } from "./cart-item.model";
import { Product } from "./product.model";
import { ShoppingCart } from "./shoppingcart.model";

@Injectable()
export class ShoppingCartService {
  private cartStore = Kinvey.DataStore.collection<ShoppingCart>("ShoppingCart", Kinvey.DataStoreType.Sync);
  private rootCartId = "59b96359cca6b7d768450225";

  private dataSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);

  constructor() {
    startMonitoring((newConnectionType: number) => {
      if (newConnectionType != connectionType.none) {
        this.syncDataStore();
      }
    });
  }

  public get cartItems$(): Observable<CartItem[]> {
    return this.dataSubject;
  }

  private loadCart(): Promise<ShoppingCart> {
    return this.login()
      .then(() => this.syncDataStore())
      .then(() => this.cartStore.find().toPromise())
      .then(data => {
        let cart: ShoppingCart = null;

        data.forEach(entry => {
          if (entry._id == this.rootCartId) {
            cart = entry;
          }
        });

      return new ShoppingCart(cart);
    });
  }

  load(): Promise<any> {
    return this.loadCart()
    .then(cart => {
      this.dataSubject.next(cart.products);
      return;
    })
    .catch(this.handleErrors);
  }

  add(productId: string): Promise<any> {
    return this.loadCart()
      .then(cart => {
        cart.addProduct(productId);
        
        return this.cartStore.save({
          _id: this.rootCartId,
          products: cart.products
        })
        .then((data) => this.dataSubject.next(data.products));
      })
      .catch(this.handleErrors);
  }

  reset() {
    this.cartStore.clear();
    return this.loadCart()
      .then(cart => {
        return this.cartStore.save({
          _id: this.rootCartId,
          products: []
        })
        .then((data) => this.dataSubject.next(data.products));
      })
      .catch(this.handleErrors);
  }

  private syncDataStore() {
    return this.cartStore.pendingSyncEntities()
      .then((pendingEntities: any[]) => {
        let queue = Promise.resolve();

        if (pendingEntities && pendingEntities.length) {
            queue = queue
                .then(() => this.cartStore.push())
                .then((entities: Kinvey.PushResult<ShoppingCart>[]) => {

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