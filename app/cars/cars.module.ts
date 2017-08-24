import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";

import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarListComponent } from "./car-list.component";
import { CarsRoutingModule } from "./cars-routing.module";
import { CarService } from "./shared/car.service";

@NgModule({
    imports: [
        CarsRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CarListComponent,
        CarDetailComponent
    ],
    providers: [
        CarService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CarsModule { }
