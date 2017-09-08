import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { RouterExtensions } from "nativescript-angular/router";

import { Product } from "../shared/product.model";
import { CartItem } from "../shared/cart-item.model";
import { ProductService } from "../shared/product.service";
import { ShoppingCartService } from "../shared/shoppingcart.service";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "product-cart",
    moduleId: module.id,
    templateUrl: "./cart.component.html"
})
export class CartComponent implements OnInit {
    private products: Product[];
    cartEntries$: Observable<any[]>;
    isLoading: boolean;


    constructor(
        private _productService: ProductService,
        private _shoppingCartService: ShoppingCartService,
        private _routerExtensions: RouterExtensions
    ) {
        this.isLoading = true;
    }

    ngOnInit() {
        this._productService.load();

        this._productService.products$.first().subscribe((products: Product[]) => {
            this.products = products;
            this.loadCart();
        });

        this.cartEntries$ = new Observable(observer => {
            const subscription = this._shoppingCartService.cartItems$.subscribe(
                cartItems => {
                    const cartEntries = this.findCartEntries(cartItems)
                    observer.next(cartEntries);
                }
            )

            return () => subscription.unsubscribe();
        })
    }

    loadCart() {
        this._shoppingCartService.load()
        .then(() => this.isLoading = false);
    }

    findCartEntries(cartItems: CartItem[]): any[] {
        const result = [];

        cartItems.forEach(item => {
            const product: Product = this.products.find(product => product._id === item.product_id)
            if (product) {
                result.push({
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    imageSource: product.imageSource
                });
            }
        });

        return result;
    }

    checkout() {
        this._routerExtensions.navigate(["/products/checkout"]);
    }

    onBackButtonTap(): void {
        this._routerExtensions.navigate(["/products"], { clearHistory: true });
    }
}
