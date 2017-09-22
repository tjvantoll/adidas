import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { ProductsRoutingModule } from "./products-routing.module";

import { CartComponent } from "./cart/cart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ArComponent } from "./ar/ar.component";

import { ProductService } from "./shared/product.service";
import { ShoppingCartService } from "./shared/shoppingcart.service";

import {TNSFontIconModule, TNSFontIconService, TNSFontIconPipe, TNSFontIconPurePipe} from 'nativescript-ngx-fonticon';


@NgModule({
    imports: [
        ProductsRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIChartModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': 'fonts/font-awesome.css'
        })
    ],
    declarations: [
        CartComponent,
        ProductListComponent,
        ProductDetailComponent,
        CheckoutComponent,
        ArComponent
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
