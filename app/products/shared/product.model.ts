import { Kinvey } from "kinvey-nativescript-sdk";

export class Product implements Kinvey.Entity {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageSource: string;

    constructor(options: any) {
        this._id = options._id;
        this.name = options.name;
        this.description = options.description;
        this.price = Number(options.price);
        this.imageSource = options.imageSource;
    }
}
