import { Kinvey } from "kinvey-nativescript-sdk";

export class ShoppingCart implements Kinvey.Entity {
    _id: string;
    products: Array<Object>;

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
