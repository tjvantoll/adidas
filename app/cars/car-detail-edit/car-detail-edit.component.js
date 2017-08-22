"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var platform_1 = require("tns-core-modules/platform");
var dialogs_1 = require("ui/dialogs");
var car_service_1 = require("../shared/car.service");
var constants_1 = require("./constants");
var CarDetailEditComponent = (function () {
    function CarDetailEditComponent(_carService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
        this._carClasses = [];
        for (var _i = 0, carClassList_1 = constants_1.carClassList; _i < carClassList_1.length; _i++) {
            var classItem = carClassList_1[_i];
            this._carClasses.push(classItem);
        }
        this._carDoors = [];
        for (var _a = 0, carDoorList_1 = constants_1.carDoorList; _a < carDoorList_1.length; _a++) {
            var doorItem = carDoorList_1[_a];
            this._carDoors.push(doorItem);
        }
        this._carSeats = [];
        for (var _b = 0, carSeatList_1 = constants_1.carSeatList; _b < carSeatList_1.length; _b++) {
            var seatItem = carSeatList_1[_b];
            this._carSeats.push(seatItem);
        }
        this._carTransmissions = [];
        for (var _c = 0, carTransmissionList_1 = constants_1.carTransmissionList; _c < carTransmissionList_1.length; _c++) {
            var transmissionItem = carTransmissionList_1[_c];
            this._carTransmissions.push(transmissionItem);
        }
        this._isUpdating = false;
        this._isCarImageDirty = false;
        this._carImageUriToUpload = null;
    }
    CarDetailEditComponent.prototype.ngOnInit = function () {
        var carId = "";
        // use switchMap to get the latest activatedRoute instance
        this._pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            carId = params.id;
        });
        this._car = this._carService.getCarById(carId);
    };
    CarDetailEditComponent.prototype.ngAfterViewInit = function () {
        this._carLuggageMinValue = 0;
        this._carLuggageMaxValue = 5;
    };
    Object.defineProperty(CarDetailEditComponent.prototype, "isAndroid", {
        get: function () {
            return platform_1.isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "isUpdating", {
        get: function () {
            return this._isUpdating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "pricePerDay", {
        get: function () {
            return this._car.price;
        },
        set: function (value) {
            // force iOS UISlider to work with discrete steps
            this._car.price = Math.round(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "luggageValue", {
        get: function () {
            return this._car.luggage;
        },
        set: function (value) {
            // force iOS UISlider to work with discrete steps
            this._car.luggage = Math.round(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carClasses", {
        get: function () {
            return this._carClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carDoors", {
        get: function () {
            return this._carDoors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carSeats", {
        get: function () {
            return this._carSeats;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carTransmissions", {
        get: function () {
            return this._carTransmissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carLuggageMinValue", {
        get: function () {
            return this._carLuggageMinValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carLuggageMaxValue", {
        get: function () {
            return this._carLuggageMaxValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carLuggageValue", {
        set: function (value) {
            this._car.luggage = value;
        },
        enumerable: true,
        configurable: true
    });
    CarDetailEditComponent.prototype.onCancelButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    CarDetailEditComponent.prototype.onDoneButtonTap = function () {
        var _this = this;
        var queue = Promise.resolve();
        this._isUpdating = true;
        // TODO: car image should be required field
        if (this._isCarImageDirty && this._carImageUriToUpload) {
            // no need to explicitly delete old image as upload to an existing remote path overwrites it
            queue = queue
                .then(function () { return _this._carService.uploadImage(_this._car.imageStoragePath, _this._carImageUriToUpload); })
                .then(function (uploadedFile) {
                _this._car.imageUrl = uploadedFile.url;
            });
        }
        queue.then(function () { return _this._carService.update(_this._car); })
            .then(function () {
            _this._isUpdating = false;
            _this._routerExtensions.navigate(["/cars"], { clearHistory: true });
        })
            .catch(function (errorMessage) {
            _this._isUpdating = false;
            dialogs_1.alert({ title: "Oops!", message: "Something went wrong. Please try again.", okButtonText: "Ok" });
        });
    };
    CarDetailEditComponent.prototype.onImageAddRemove = function (args) {
        if (args.newValue) {
            this._isCarImageDirty = true;
            this._carImageUriToUpload = args.newValue;
        }
    };
    return CarDetailEditComponent;
}());
CarDetailEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "CarDetailEdit",
        templateUrl: "./car-detail-edit.component.html",
        styleUrls: ["./car-detail-edit.component.css"]
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.PageRoute,
        router_1.RouterExtensions])
], CarDetailEditComponent);
exports.CarDetailEditComponent = CarDetailEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci1kZXRhaWwtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFDakUsc0RBQTBFO0FBQzFFLHVDQUFxQztBQUNyQyxzREFBc0Q7QUFDdEQsc0NBQW1DO0FBR25DLHFEQUFtRDtBQUNuRCx5Q0FBMEY7QUFRMUYsSUFBYSxzQkFBc0I7SUFZL0IsZ0NBQ1ksV0FBdUIsRUFDdkIsVUFBcUIsRUFDckIsaUJBQW1DO1FBRm5DLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUUzQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsQ0FBb0IsVUFBWSxFQUFaLHlDQUFZLEVBQVosMEJBQVksRUFBWixJQUFZO1lBQS9CLElBQU0sU0FBUyxxQkFBQTtZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxDQUFtQixVQUFXLEVBQVgsdUNBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVc7WUFBN0IsSUFBTSxRQUFRLG9CQUFBO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixHQUFHLENBQUMsQ0FBbUIsVUFBVyxFQUFYLHVDQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXO1lBQTdCLElBQU0sUUFBUSxvQkFBQTtZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxD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YUFDRCxLQUFLLENBQUMsVUFBQyxZQUFpQjtZQUNyQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixlQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0RyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxpREFBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBMUpELElBMEpDO0FBMUpZLHNCQUFzQjtJQU5sQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7S0FDakQsQ0FBQztxQ0FjMkIsd0JBQVU7UUFDWCxrQkFBUztRQUNGLHlCQUFnQjtHQWZ0QyxzQkFBc0IsQ0EwSmxDO0FBMUpZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXIubW9kZWxcIjtcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2Nhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBjYXJDbGFzc0xpc3QsIGNhckRvb3JMaXN0LCBjYXJTZWF0TGlzdCwgY2FyVHJhbnNtaXNzaW9uTGlzdCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIkNhckRldGFpbEVkaXRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Nhci1kZXRhaWwtZWRpdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9jYXItZGV0YWlsLWVkaXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJEZXRhaWxFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBwcml2YXRlIF9jYXI6IENhcjtcbiAgICBwcml2YXRlIF9jYXJDbGFzc2VzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgX2NhckRvb3JzOiBBcnJheTxudW1iZXI+O1xuICAgIHByaXZhdGUgX2NhclNlYXRzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgX2NhclRyYW5zbWlzc2lvbnM6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBfY2FyTHVnZ2FnZU1pblZhbHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FyTHVnZ2FnZU1heFZhbHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY2FySW1hZ2VVcmlUb1VwbG9hZDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2lzQ2FySW1hZ2VEaXJ0eTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9pc1VwZGF0aW5nOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2NhclNlcnZpY2U6IENhclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3BhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2NhckNsYXNzZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBjbGFzc0l0ZW0gb2YgY2FyQ2xhc3NMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLl9jYXJDbGFzc2VzLnB1c2goY2xhc3NJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NhckRvb3JzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZG9vckl0ZW0gb2YgY2FyRG9vckxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhckRvb3JzLnB1c2goZG9vckl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2FyU2VhdHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzZWF0SXRlbSBvZiBjYXJTZWF0TGlzdCkge1xuICAgICAgICAgICAgdGhpcy5fY2FyU2VhdHMucHVzaChzZWF0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYXJUcmFuc21pc3Npb25zID0gW107XG4gICAgICAgIGZvciAoY29uc3QgdHJhbnNtaXNzaW9uSXRlbSBvZiBjYXJUcmFuc21pc3Npb25MaXN0KSB7XG4gICAgICAgICAgICB0aGlzLl9jYXJUcmFuc21pc3Npb25zLnB1c2godHJhbnNtaXNzaW9uSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzQ2FySW1hZ2VEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jYXJJbWFnZVVyaVRvVXBsb2FkID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNhcklkID0gXCJcIjtcblxuICAgICAgICAvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXG4gICAgICAgIHRoaXMuX3BhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgLnN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYXJJZCA9IHBhcmFtcy5pZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2NhciA9IHRoaXMuX2NhclNlcnZpY2UuZ2V0Q2FyQnlJZChjYXJJZCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jYXJMdWdnYWdlTWluVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLl9jYXJMdWdnYWdlTWF4VmFsdWUgPSA1O1xuICAgIH1cblxuICAgIGdldCBpc0FuZHJvaWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc0FuZHJvaWQ7XG4gICAgfVxuXG4gICAgZ2V0IGlzVXBkYXRpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VwZGF0aW5nO1xuICAgIH1cblxuICAgIGdldCBjYXIoKTogQ2FyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcjtcbiAgICB9XG5cbiAgICBnZXQgcHJpY2VQZXJEYXkoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhci5wcmljZTtcbiAgICB9XG5cbiAgICBzZXQgcHJpY2VQZXJEYXkodmFsdWU6IG51bWJlcikge1xuICAgICAgICAvLyBmb3JjZSBpT1MgVUlTbGlkZXIgdG8gd29yayB3aXRoIGRpc2NyZXRlIHN0ZXBzXG4gICAgICAgIHRoaXMuX2Nhci5wcmljZSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBsdWdnYWdlVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhci5sdWdnYWdlO1xuICAgIH1cblxuICAgIHNldCBsdWdnYWdlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICAvLyBmb3JjZSBpT1MgVUlTbGlkZXIgdG8gd29yayB3aXRoIGRpc2NyZXRlIHN0ZXBzXG4gICAgICAgIHRoaXMuX2Nhci5sdWdnYWdlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNhckNsYXNzZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJDbGFzc2VzO1xuICAgIH1cblxuICAgIGdldCBjYXJEb29ycygpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhckRvb3JzO1xuICAgIH1cblxuICAgIGdldCBjYXJTZWF0cygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhclNlYXRzO1xuICAgIH1cblxuICAgIGdldCBjYXJUcmFuc21pc3Npb25zKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyVHJhbnNtaXNzaW9ucztcbiAgICB9XG5cbiAgICBnZXQgY2FyTHVnZ2FnZU1pblZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJMdWdnYWdlTWluVmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGNhckx1Z2dhZ2VNYXhWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyTHVnZ2FnZU1heFZhbHVlO1xuICAgIH1cblxuICAgIHNldCBjYXJMdWdnYWdlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jYXIubHVnZ2FnZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIG9uRG9uZUJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICAgICAgdGhpcy5faXNVcGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgLy8gVE9ETzogY2FyIGltYWdlIHNob3VsZCBiZSByZXF1aXJlZCBmaWVsZFxuICAgICAgICBpZiAodGhpcy5faXNDYXJJbWFnZURpcnR5ICYmIHRoaXMuX2NhckltYWdlVXJpVG9VcGxvYWQpIHtcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZXhwbGljaXRseSBkZWxldGUgb2xkIGltYWdlIGFzIHVwbG9hZCB0byBhbiBleGlzdGluZyByZW1vdGUgcGF0aCBvdmVyd3JpdGVzIGl0XG4gICAgICAgICAgICBxdWV1ZSA9IHF1ZXVlXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fY2FyU2VydmljZS51cGxvYWRJbWFnZSh0aGlzLl9jYXIuaW1hZ2VTdG9yYWdlUGF0aCwgdGhpcy5fY2FySW1hZ2VVcmlUb1VwbG9hZCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHVwbG9hZGVkRmlsZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nhci5pbWFnZVVybCA9IHVwbG9hZGVkRmlsZS51cmw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS50aGVuKCgpID0+IHRoaXMuX2NhclNlcnZpY2UudXBkYXRlKHRoaXMuX2NhcikpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NhcnNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWxlcnQoeyB0aXRsZTogXCJPb3BzIVwiLCBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiLCBva0J1dHRvblRleHQ6IFwiT2tcIiB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSW1hZ2VBZGRSZW1vdmUoYXJncyk6IHZvaWQge1xuICAgICAgICBpZiAoYXJncy5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNDYXJJbWFnZURpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NhckltYWdlVXJpVG9VcGxvYWQgPSBhcmdzLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19