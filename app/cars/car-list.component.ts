import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-telerik-ui/listview";

import { Car } from "./shared/car.model";
import { CarService } from "./shared/car.service";

@Component({
    selector: "CarsList",
    moduleId: module.id,
    templateUrl: "./car-list.component.html"
})
export class CarListComponent implements OnInit {
    private _isLoading: boolean;
    private _cars: ObservableArray<Car>;

    constructor(
        private _carService: CarService,
        private _routerExtensions: RouterExtensions
    ) {
        // Initialize default values.
        this._cars = new ObservableArray<Car>([]);
        this._isLoading = false;
    }

    ngOnInit(): void {
        this._isLoading = true;

        this._carService.load()
            .finally(() => this._isLoading = false)
            .subscribe((cars: Array<Car>) => {
                this._cars = new ObservableArray(cars);
                this._isLoading = false;
            });
    }

    get cars(): ObservableArray<Car> {
        return this._cars;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onCarItemTap(args: ListViewEventData): void {
        const tappedCarItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/cars/detail", tappedCarItem._id]);
    }
}
