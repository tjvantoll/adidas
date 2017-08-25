import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";

import { Product } from "../shared/product.model";
import { ProductService } from "../shared/product.service";

@Component({
    selector: "product-cart",
    moduleId: module.id,
    templateUrl: "./cart.component.html"
})
export class CartComponent implements OnInit {
    products: Array<Product>;
    cartEntries: ObservableArray<any>;
    isLoading: boolean;

    constructor(
        private _productService: ProductService
    ) {
        this.isLoading = true;
    }

    ngOnInit() {
        this.cartEntries = new ObservableArray([]);

        this._productService.load()
            .subscribe((products: Array<Product>) => {
                this.products = products;
                this.loadCart();
            });
    }

    loadCart() {
        this._productService.getCart().subscribe(
            (cart) => {
                cart.products.forEach((entry) => {
                    this.products.forEach((product) => {
                        if (product._id == entry.product_id) {
                            this.cartEntries.push({
                                name: product.name
                            });
                        }
                    });
                });
                this.isLoading = false;
            }
        );
    }
}
