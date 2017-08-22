"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var car_detail_edit_component_1 = require("./car-detail-edit/car-detail-edit.component");
var car_detail_component_1 = require("./car-detail/car-detail.component");
var car_list_component_1 = require("./car-list.component");
var routes = [
    { path: "", component: car_list_component_1.CarListComponent },
    { path: "detail/:id", component: car_detail_component_1.CarDetailComponent },
    { path: "detail-edit/:id", component: car_detail_edit_component_1.CarDetailEditComponent }
];
var CarsRoutingModule = (function () {
    function CarsRoutingModule() {
    }
    return CarsRoutingModule;
}());
CarsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forChild(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], CarsRoutingModule);
exports.CarsRoutingModule = CarsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLHlGQUFxRjtBQUNyRiwwRUFBdUU7QUFDdkUsMkRBQXdEO0FBRXhELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUU7SUFDekMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsa0RBQXNCLEVBQUU7Q0FDakUsQ0FBQztBQU1GLElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFBbEMsSUFBa0M7QUFBckIsaUJBQWlCO0lBSjdCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDYXJEZXRhaWxFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2FyLWRldGFpbC1lZGl0L2Nhci1kZXRhaWwtZWRpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhckRldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhckxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItbGlzdC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IENhckxpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZGV0YWlsLzppZFwiLCBjb21wb25lbnQ6IENhckRldGFpbENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJkZXRhaWwtZWRpdC86aWRcIiwgY29tcG9uZW50OiBDYXJEZXRhaWxFZGl0Q29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJzUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==