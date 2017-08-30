import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIChartModule } from "nativescript-telerik-ui-pro/chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-telerik-ui-pro/dataform/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";

import { ProductsRoutingModule } from "./products-routing.module";

import { CartComponent } from "./cart/cart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { CheckoutComponent } from "./checkout/checkout.component";

import { ProductService } from "./shared/product.service";
import { ShoppingCartService } from "./shared/shoppingcart.service";

@NgModule({
    imports: [
        ProductsRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIChartModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CartComponent,
        ProductListComponent,
        ProductDetailComponent,
        CheckoutComponent
    ],
    providers: [
        ProductService,
        ShoppingCartService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProductsModule { }
