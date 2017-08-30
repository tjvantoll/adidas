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

    reviews = new ObservableArray([
        { Country: "Germany", Amount: 15 },
        { Country: "France", Amount: 13 },
        { Country: "Bulgaria", Amount: 24 },
        { Country: "Spain", Amount: 11 },
        { Country: "USA", Amount: 180 }
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
        this._shoppingCartService.add(this._product._id)
            .subscribe(() => {
                this.isLoading = false;
            }, () => {
                this.isLoading = false;
            })
    }
}
