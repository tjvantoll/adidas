"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("data/observable-array");
var router_1 = require("nativescript-angular/router");
var car_service_1 = require("./shared/car.service");
var CarListComponent = (function () {
    function CarListComponent(_carService, _routerExtensions) {
        this._carService = _carService;
        this._routerExtensions = _routerExtensions;
        // Initialize default values.
        this._cars = new observable_array_1.ObservableArray([]);
        this._isLoading = false;
    }
    CarListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._isLoading = true;
        this._carService.load()
            .finally(function () { return _this._isLoading = false; })
            .subscribe(function (cars) {
            _this._cars = new observable_array_1.ObservableArray(cars);
            _this._isLoading = false;
        });
    };
    Object.defineProperty(CarListComponent.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarListComponent.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        enumerable: true,
        configurable: true
    });
    CarListComponent.prototype.onCarItemTap = function (args) {
        var tappedCarItem = args.view.bindingContext;
        this._routerExtensions.navigate(["/cars/detail", tappedCarItem._id]);
    };
    return CarListComponent;
}());
CarListComponent = __decorate([
    core_1.Component({
        selector: "CarsList",
        moduleId: module.id,
        templateUrl: "./car-list.component.html"
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.RouterExtensions])
], CarListComponent);
exports.CarListComponent = CarListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzREFBK0Q7QUFJL0Qsb0RBQWtEO0FBT2xELElBQWEsZ0JBQWdCO0lBSXpCLDBCQUNZLFdBQXVCLEVBQ3ZCLGlCQUFtQztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBRTNDLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7YUFDbEIsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBdkIsQ0FBdUIsQ0FBQzthQUN0QyxTQUFTLENBQUMsVUFBQyxJQUFnQjtZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQkFBSSxrQ0FBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsSUFBdUI7UUFDaEMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7S0FDM0MsQ0FBQztxQ0FNMkIsd0JBQVU7UUFDSix5QkFBZ0I7R0FOdEMsZ0JBQWdCLENBcUM1QjtBQXJDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXdcIjtcblxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4vc2hhcmVkL2Nhci5tb2RlbFwiO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9jYXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDYXJzTGlzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXItbGlzdC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENhckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9jYXJzOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9jYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgICAgIHRoaXMuX2NhcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENhcj4oW10pO1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9jYXJTZXJ2aWNlLmxvYWQoKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5faXNMb2FkaW5nID0gZmFsc2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChjYXJzOiBBcnJheTxDYXI+KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoY2Fycyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgY2FycygpOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJzO1xuICAgIH1cblxuICAgIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XG4gICAgfVxuXG4gICAgb25DYXJJdGVtVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhcHBlZENhckl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2Fycy9kZXRhaWxcIiwgdGFwcGVkQ2FySXRlbS5faWRdKTtcbiAgICB9XG59XG4iXX0=