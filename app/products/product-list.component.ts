import { Color } from "color";
import { isIOS } from "platform";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { Observable } from "rxjs/Observable";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui-pro/sidedrawer/angular";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

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
    public products$: Observable<any>;

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
            .subscribe((products: Observable<Product>) => {
                this.products$ = products;
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

    onProductItemTap(id): void {
        //const tappedProductItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/products/detail", id]);
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

    refreshList() {
        console.log("oh hi!");
    }
}
