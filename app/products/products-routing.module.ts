import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CartComponent } from "./cart/cart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ArComponent } from "./ar/ar.component";

const routes: Routes = [
    { path: "", component: ProductListComponent },
    { path: "cart", component: CartComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "detail/:id", component: ProductDetailComponent },
    { path: "ar", component: ArComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProductsRoutingModule { }
