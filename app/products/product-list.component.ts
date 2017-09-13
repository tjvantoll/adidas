import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-telerik-ui-pro/listview";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-telerik-ui-pro/sidedrawer/angular";

import { Product } from "./shared/product.model";
import { ProductService } from "./shared/product.service";
import { ShoppingCartService } from "./shared/shoppingcart.service";

@Component({
    selector: "product-list",
    moduleId: module.id,
    templateUrl: "./product-list.component.html"
})
export class ProductListComponent implements OnInit, AfterViewInit {
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    public products$: Observable<any>;
    public isLoading: boolean;
    private pullToRefresh;

    constructor(
        private _productService: ProductService,
        private _cartService: ShoppingCartService,
        private _routerExtensions: RouterExtensions
    ) {
        // Initialize default values.
        this.isLoading = false;
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.products$ = this._productService.products$;
        this.loadProducts();
    }

    loadProducts() {
        this._productService.load()
        .then(() => {
            this.isLoading = false;
            
            if (this.pullToRefresh) {
                this.pullToRefresh.refreshing = false;
            }
        });
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    onProductItemTap(id): void {
        //const tappedProductItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/products/detail", id]);
    }

    onCartTap() {
        this._routerExtensions.navigate(["/products/cart"]);
    }

    onMenuTap() {
        this.drawer.toggleDrawerState();
    }

    refreshList(args) {
        this.pullToRefresh = args.object;
        this.loadProducts();
    }

    demo() {
        this._cartService.reset();
    }
}
