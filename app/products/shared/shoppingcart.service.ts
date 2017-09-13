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
  private rootCart:ShoppingCart = null;

  private dataSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);

  constructor() {
    this.loadCart();
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
      .then(() => this.cartStore.sync())
      .then(() => this.cartStore.find().toPromise())
      .then(data => {
        if (data != null && data.length > 0){
          this.rootCart = new ShoppingCart(data[0]);
        }
        return this.rootCart;
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
    this.rootCart.addProduct(productId);

    return this.cartStore.save({
      _id: this.rootCart._id,
      products: this.rootCart.products
    })
    .then((data) => this.dataSubject.next(data.products))
    .catch(this.handleErrors);
  }

  reset() {
    this.cartStore.clear();
    return this.loadCart()
      .then(cart => {
        return this.cartStore.save({
          _id: this.rootCart._id,
          products: []
        })
        .then((data) => this.dataSubject.next(data.products));
      })
      .catch(this.handleErrors);
  }

  private syncDataStore() {
    return this.cartStore.sync();
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