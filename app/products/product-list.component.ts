import { Color } from "color";
import { isIOS } from "platform";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui-pro/sidedrawer/angular";

import { Product } from "./shared/product.model";
import { ProductService } from "./shared/product.service";

@Component({
    selector: "product-list",
    moduleId: module.id,
    templateUrl: "./product-list.component.html"
})
export class ProductListComponent implements OnInit, AfterViewInit {
    private _isLoading: boolean;
    private _products: ObservableArray<Product>;

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    constructor(
        private _productService: ProductService,
        private _routerExtensions: RouterExtensions
    ) {
        // Initialize default values.
        this._products = new ObservableArray<Product>([]);
        this._isLoading = false;
    }

    ngOnInit(): void {
        this._isLoading = true;

        this._productService.load()
            .finally(() => this._isLoading = false)
            .subscribe((products: Array<Product>) => {
                this._products = new ObservableArray(products);
                this._isLoading = false;
            });
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    get products(): ObservableArray<Product> {
        return this._products;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onProductItemTap(args: ListViewEventData): void {
        const tappedProductItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/products/detail", tappedProductItem._id]);
    }

    onCartTap() {
        this._routerExtensions.navigate(["/products/cart"]);
    }

    onMenuTap() {
        this.drawer.showDrawer();
    }

    changeBackground(args){
        if (isIOS) {
            var newcolor = new Color(100,211,211,211);
            args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
    }
}
