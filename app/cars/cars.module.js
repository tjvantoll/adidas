"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var car_detail_edit_component_1 = require("./car-detail-edit/car-detail-edit.component");
var image_add_remove_component_1 = require("./car-detail-edit/image-add-remove/image-add-remove.component");
var list_selector_modal_view_component_1 = require("./car-detail-edit/list-selector/list-selector-modal-view.component");
var list_selector_component_1 = require("./car-detail-edit/list-selector/list-selector.component");
var car_detail_component_1 = require("./car-detail/car-detail.component");
var car_list_component_1 = require("./car-list.component");
var cars_routing_module_1 = require("./cars-routing.module");
var car_service_1 = require("./shared/car.service");
var CarsModule = (function () {
    function CarsModule() {
    }
    return CarsModule;
}());
CarsModule = __decorate([
    core_1.NgModule({
        imports: [
            cars_routing_module_1.CarsRoutingModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            angular_1.NativeScriptUIListViewModule
        ],
        declarations: [
            car_list_component_1.CarListComponent,
            car_detail_component_1.CarDetailComponent,
            car_detail_edit_component_1.CarDetailEditComponent,
            list_selector_component_1.ListSelectorComponent,
            list_selector_modal_view_component_1.ListSelectorModalViewComponent,
            image_add_remove_component_1.ImageAddRemoveComponent
        ],
        entryComponents: [
            list_selector_modal_view_component_1.ListSelectorModalViewComponent
        ],
        providers: [
            car_service_1.CarService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], CarsModule);
exports.CarsModule = CarsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLG9FQUF3RjtBQUV4Rix5RkFBcUY7QUFDckYsNEdBQXdHO0FBQ3hHLHlIQUFvSDtBQUNwSCxtR0FBZ0c7QUFDaEcsMEVBQXVFO0FBQ3ZFLDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFDMUQsb0RBQWtEO0FBMkJsRCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUF6QnRCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHVDQUFpQjtZQUNqQix3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHNDQUE0QjtTQUMvQjtRQUNELFlBQVksRUFBRTtZQUNWLHFDQUFnQjtZQUNoQix5Q0FBa0I7WUFDbEIsa0RBQXNCO1lBQ3RCLCtDQUFxQjtZQUNyQixtRUFBOEI7WUFDOUIsb0RBQXVCO1NBQzFCO1FBQ0QsZUFBZSxFQUFFO1lBQ2IsbUVBQThCO1NBQ2pDO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asd0JBQVU7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9saXN0dmlldy9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IENhckRldGFpbEVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItZGV0YWlsLWVkaXQvY2FyLWRldGFpbC1lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VBZGRSZW1vdmVDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItZGV0YWlsLWVkaXQvaW1hZ2UtYWRkLXJlbW92ZS9pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY2FyLWRldGFpbC1lZGl0L2xpc3Qtc2VsZWN0b3IvbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyLWRldGFpbC1lZGl0L2xpc3Qtc2VsZWN0b3IvbGlzdC1zZWxlY3Rvci5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhckRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhckxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcnNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY2Fycy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9jYXIuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ2Fyc1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDYXJMaXN0Q29tcG9uZW50LFxuICAgICAgICBDYXJEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIENhckRldGFpbEVkaXRDb21wb25lbnQsXG4gICAgICAgIExpc3RTZWxlY3RvckNvbXBvbmVudCxcbiAgICAgICAgTGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50LFxuICAgICAgICBJbWFnZUFkZFJlbW92ZUNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIExpc3RTZWxlY3Rvck1vZGFsVmlld0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENhclNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyc01vZHVsZSB7IH1cbiJdfQ==