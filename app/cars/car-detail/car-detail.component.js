"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var car_service_1 = require("../shared/car.service");
/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
var CarDetailComponent = (function () {
    function CarDetailComponent(_carService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarDetailComponent.prototype.ngOnInit = function () {
        var carId = "";
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            carId = params.id;
        });
        this._car = this._carService.getCarById(carId);
    };
    Object.defineProperty(CarDetailComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The back button is essential for a master-detail feature.
    * Note the "clearHistory" option that is used here. It ensures the
    * correct operation of the native OS back navigation.
    *************************************************************/
    CarDetailComponent.prototype.onBackButtonTap = function () {
        this._routerExtensions.navigate(["/cars"], { clearHistory: true });
    };
    /* ***********************************************************
    * The master-detail template comes with an example of an item edit page.
    * Check out the edit page in the /cars/car-detail-edit folder.
    *************************************************************/
    CarDetailComponent.prototype.onEditButtonTap = function () {
        this._routerExtensions.navigate(["/cars/detail-edit", this._car._id]);
    };
    return CarDetailComponent;
}());
CarDetailComponent = __decorate([
    core_1.Component({
        selector: "CarDetail",
        moduleId: module.id,
        templateUrl: "./car-detail.component.html"
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.PageRoute,
        router_1.RouterExtensions])
], CarDetailComponent);
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBMEU7QUFDMUUsdUNBQXFDO0FBR3JDLHFEQUFtRDtBQUVuRDs7Ozs4REFJOEQ7QUFNOUQsSUFBYSxrQkFBa0I7SUFHM0IsNEJBQ1ksV0FBdUIsRUFDdkIsVUFBcUIsRUFDckIsaUJBQW1DO1FBRm5DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUMzQyxDQUFDO0lBRUw7Ozs7a0VBSThEO0lBQzlELHFDQUFRLEdBQVI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZjs7O3NFQUc4RDtRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWM7YUFDekIsU0FBUyxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNwRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ1osS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxzQkFBSSxtQ0FBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRDs7OztrRUFJOEQ7SUFDOUQsNENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O2tFQUc4RDtJQUM5RCw0Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw2QkFBNkI7S0FDN0MsQ0FBQztxQ0FLMkIsd0JBQVU7UUFDWCxrQkFBUztRQUNGLHlCQUFnQjtHQU50QyxrQkFBa0IsQ0FrRDlCO0FBbERZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vc2hhcmVkL2Nhci5tb2RlbFwiO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2FyLnNlcnZpY2VcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVGhpcyBpcyB0aGUgaXRlbSBkZXRhaWxzIGNvbXBvbmVudCBpbiB0aGUgbWFzdGVyLWRldGFpbCBzdHJ1Y3R1cmUuXG4qIFRoaXMgY29tcG9uZW50IHJldHJpZXZlcyB0aGUgcGFzc2VkIHBhcmFtZXRlciBmcm9tIHRoZSBtYXN0ZXIgbGlzdCBjb21wb25lbnQsXG4qIGZpbmRzIHRoZSBkYXRhIGl0ZW0gYnkgdGhpcyBwYXJhbWV0ZXIgYW5kIGRpc3BsYXlzIHRoZSBkZXRhaWxlZCBkYXRhIGl0ZW0gaW5mb3JtYXRpb24uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2FyRGV0YWlsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Nhci1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDYXJEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2NhcjogQ2FyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2NhclNlcnZpY2U6IENhclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3BhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGdldCB0aGUgZGF0YSBpdGVtIGlkIHBhcmFtZXRlciBwYXNzZWQgdGhyb3VnaCBuYXZpZ2F0aW9uLlxuICAgICogR2V0IHRoZSBkYXRhIGl0ZW0gZGV0YWlscyBmcm9tIHRoZSBkYXRhIHNlcnZpY2UgdXNpbmcgdGhpcyBpZCBhbmQgYXNzaWduIGl0IHRvIHRoZVxuICAgICogcHJpdmF0ZSBwcm9wZXJ0eSB0aGF0IGhvbGRzIGl0IGluc2lkZSB0aGUgY29tcG9uZW50LlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBjYXJJZCA9IFwiXCI7XG5cbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBMZWFybiBtb3JlIGFib3V0IGhvdyB0byBnZXQgbmF2aWdhdGlvbiBwYXJhbWV0ZXJzIGluIHRoaXMgZG9jdW1lbnRhdGlvbiBhcnRpY2xlOlxuICAgICAgICAqIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci9jb3JlLWNvbmNlcHRzL2FuZ3VsYXItbmF2aWdhdGlvbi5odG1sI3Bhc3NpbmctcGFyYW1ldGVyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIHRoaXMuX3BhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgLnN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYXJJZCA9IHBhcmFtcy5pZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2NhciA9IHRoaXMuX2NhclNlcnZpY2UuZ2V0Q2FyQnlJZChjYXJJZCk7XG4gICAgfVxuXG4gICAgZ2V0IGNhcigpOiBDYXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgYmFjayBidXR0b24gaXMgZXNzZW50aWFsIGZvciBhIG1hc3Rlci1kZXRhaWwgZmVhdHVyZS5cbiAgICAqIE5vdGUgdGhlIFwiY2xlYXJIaXN0b3J5XCIgb3B0aW9uIHRoYXQgaXMgdXNlZCBoZXJlLiBJdCBlbnN1cmVzIHRoZVxuICAgICogY29ycmVjdCBvcGVyYXRpb24gb2YgdGhlIG5hdGl2ZSBPUyBiYWNrIG5hdmlnYXRpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkJhY2tCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NhcnNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgbWFzdGVyLWRldGFpbCB0ZW1wbGF0ZSBjb21lcyB3aXRoIGFuIGV4YW1wbGUgb2YgYW4gaXRlbSBlZGl0IHBhZ2UuXG4gICAgKiBDaGVjayBvdXQgdGhlIGVkaXQgcGFnZSBpbiB0aGUgL2NhcnMvY2FyLWRldGFpbC1lZGl0IGZvbGRlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uRWRpdEJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2Fycy9kZXRhaWwtZWRpdFwiLCB0aGlzLl9jYXIuX2lkXSk7XG4gICAgfVxufVxuIl19