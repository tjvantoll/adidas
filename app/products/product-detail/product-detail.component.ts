import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

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

    constructor(
        private _productService: ProductService,
        private _shoppingCartService: ShoppingCartService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) { }

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
        this._shoppingCartService.add(this._product._id)
            .subscribe(() => {
                alert("yes");
            }, () => {
                alert("no");
            })
    }
}
