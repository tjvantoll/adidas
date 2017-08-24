import { Component, OnInit } from "@angular/core";

import { ProductService } from "../shared/product.service";

@Component({
    selector: "product-cart",
    moduleId: module.id,
    templateUrl: "./cart.component.html"
})
export class CartComponent implements OnInit {

    constructor(
        private _productService: ProductService
    ) {}

    ngOnInit() {
        this._productService.getCart().subscribe(
            () => { console.log("done"); },
            () => { console.log("fail"); }
        );
    }
}
