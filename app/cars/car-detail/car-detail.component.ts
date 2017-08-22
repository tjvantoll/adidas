import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { Car } from "../shared/car.model";
import { CarService } from "../shared/car.service";

/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
@Component({
    selector: "CarDetail",
    moduleId: module.id,
    templateUrl: "./car-detail.component.html"
})
export class CarDetailComponent implements OnInit {
    private _car: Car;

    constructor(
        private _carService: CarService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    ngOnInit(): void {
        let carId = "";

        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .switchMap((activatedRoute) => activatedRoute.params)
            .forEach((params) => {
                carId = params.id;
            });

        this._car = this._carService.getCarById(carId);
    }

    get car(): Car {
        return this._car;
    }

    /* ***********************************************************
    * The back button is essential for a master-detail feature.
    * Note the "clearHistory" option that is used here. It ensures the
    * correct operation of the native OS back navigation.
    *************************************************************/
    onBackButtonTap(): void {
        this._routerExtensions.navigate(["/cars"], { clearHistory: true });
    }

    /* ***********************************************************
    * The master-detail template comes with an example of an item edit page.
    * Check out the edit page in the /cars/car-detail-edit folder.
    *************************************************************/
    onEditButtonTap(): void {
        this._routerExtensions.navigate(["/cars/detail-edit", this._car._id]);
    }
}
