import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";

import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductService } from "./shared/product.service";

@NgModule({
    imports: [
        ProductsRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProductsModule { }
