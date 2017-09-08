import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Subject, Observable } from "rxjs/Rx";

import { Kinvey } from "kinvey-nativescript-sdk";
import { Config } from "../../shared/config";
import { ShoppingCart } from "./shoppingcart.model";
import { Product } from "./product.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { CartItem } from "./cart-item.model";

@Injectable()
export class ShoppingCartService {
  private cartStore = Kinvey.DataStore.collection<ShoppingCart>("ShoppingCart2");
  private rootCartId = "59a5951f6e911be44f0e266a";

  private dataSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);

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