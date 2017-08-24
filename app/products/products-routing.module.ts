import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list.component";

const routes: Routes = [
    { path: "", component: ProductListComponent },
    { path: "detail/:id", component: ProductDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProductsRoutingModule { }
