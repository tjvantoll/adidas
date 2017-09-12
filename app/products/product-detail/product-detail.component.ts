import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import { ObservableArray } from "data/observable-array";

import { Product } from "../shared/product.model";
import { ProductService } from "../shared/product.service";
import { ShoppingCart } from "../shared/shoppingcart.model";
import { ShoppingCartService } from "../shared/shoppingcart.service";

@Component({
    selector: "product-detail",
    moduleId: module.id,
    templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    private _product: Product;
    isLoading;

    // Randomize review data for demo purposes
    reviews = new ObservableArray([
        { Rating: "1 ⭐", Amount: 5 },
        { Rating: "2 ⭐", Amount: 10 },
        { Rating: "3 ⭐", Amount: 5 },
        { Rating: "4 ⭐", Amount: 20 },
        { Rating: "5 ⭐", Amount: 30 }
    ]);

    constructor(
        private _productService: ProductService,
        private _shoppingCartService: ShoppingCartService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) {
        this.isLoading = false;
    }

    ngOnInit(): void {
        let productId = "";
        this._pageRoute.activatedRoute
            .switchMap((activatedRoute) => activatedRoute.params)
            .forEach((params) => {
                productId = params.id;
            });

        this._product = this._productService.getProductById(productId);
    }

    get product(): Product {
        return this._product;
    }

    onBackButtonTap(): void {
        this._routerExtensions.navigate(["/products"], { clearHistory: true });
    }

    addToCart() {
        this.isLoading = true;
        this._shoppingCartService
        .add(this._product._id)
        .then(() => this.isLoading = false);
    }

    preview() {
        this._routerExtensions.navigate(["/products/ar"]);
    }
}
