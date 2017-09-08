import { Kinvey } from "kinvey-nativescript-sdk";
import { CartItem } from "./cart-item.model";

export class ShoppingCart implements Kinvey.Entity {
    _id: string;
    products: CartItem[];

    constructor(options: any) {
        this._id = options._id;
        this.products = options.products;
        if (!this.products) {
            this.products = [];
        }
    }

    addProduct(productId: string) {
        this.products.push({ product_id: productId });
    }
}
