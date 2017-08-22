"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("nativescript-angular/router");
var car_service_1 = require("../../shared/car.service");
var list_selector_modal_view_component_1 = require("./list-selector-modal-view.component");
var capitalizeFirstLetter = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
/* ***********************************************************
* The ListSelector custom component uses a {N} modal page to let the user select and option
* from a list. You can also check out the list-selector-modal-view.component.ts to see the
* contents of the modal page. Learn more about modal pages in this documentation article:
* https://docs.nativescript.org/angular/code-samples/modal-page
*************************************************************/
var ListSelectorComponent = (function () {
    function ListSelectorComponent(_pageRoute, _modalService, _vcRef, _carService) {
        this._pageRoute = _pageRoute;
        this._modalService = _modalService;
        this._vcRef = _vcRef;
        this._carService = _carService;
    }
    ListSelectorComponent.prototype.ngOnInit = function () {
        var carId = "";
        // use switchMap to get the latest activatedRoute instance
        this._pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            carId = params.id;
        });
        this._car = this._carService.getCarById(carId);
    };
    ListSelectorComponent.prototype.onSelectorTap = function () {
        var _this = this;
        var title = "Select Car " + capitalizeFirstLetter(this.tag);
        var selectedIndex = this.items.indexOf(this.selectedValue);
        var options = {
            viewContainerRef: this._vcRef,
            context: {
                items: this.items,
                title: title,
                selectedIndex: selectedIndex
            },
            fullscreen: false
        };
        this._modalService.showModal(list_selector_modal_view_component_1.ListSelectorModalViewComponent, options)
            .then(function (selectedValue) {
            if (selectedValue) {
                _this._car[_this.tag] = selectedValue;
            }
        });
    };
    return ListSelectorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ListSelectorComponent.prototype, "selectedValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListSelectorComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ListSelectorComponent.prototype, "tag", void 0);
ListSelectorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        providers: [modal_dialog_1.ModalDialogService],
        selector: "ListSelector",
        templateUrl: "./list-selector.component.html"
    }),
    __metadata("design:paramtypes", [router_1.PageRoute,
        modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef,
        car_service_1.CarService])
], ListSelectorComponent);
exports.ListSelectorComponent = ListSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxrRUFBMkY7QUFDM0Ysc0RBQXdEO0FBR3hELHdEQUFzRDtBQUN0RCwyRkFBc0Y7QUFFdEYsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQztBQUU1RTs7Ozs7OERBSzhEO0FBTzlELElBQWEscUJBQXFCO0lBTzlCLCtCQUNZLFVBQXFCLEVBQ3JCLGFBQWlDLEVBQ2pDLE1BQXdCLEVBQ3hCLFdBQXVCO1FBSHZCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUksQ0FBQztJQUV4Qyx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWYsMERBQTBEO1FBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYzthQUN6QixTQUFTLENBQUMsVUFBQyxjQUFjLElBQUssT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ3BELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFBQSxpQkFtQkM7UUFsQkcsSUFBTSxLQUFLLEdBQUcsZ0JBQWMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxDQUFDO1FBQzlELElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDN0IsT0FBTyxFQUFFO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsS0FBSyxPQUFBO2dCQUNMLGFBQWEsZUFBQTthQUNoQjtZQUNELFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxtRUFBOEIsRUFBRSxPQUFPLENBQUM7YUFDaEUsSUFBSSxDQUFDLFVBQUMsYUFBcUI7WUFDeEIsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDO1lBQ3hDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE3Q1k7SUFBUixZQUFLLEVBQUU7OzREQUF1QjtBQUN0QjtJQUFSLFlBQUssRUFBRTs4QkFBUSxLQUFLO29EQUFTO0FBQ3JCO0lBQVIsWUFBSyxFQUFFOztrREFBYTtBQUhaLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFNBQVMsRUFBRSxDQUFDLGlDQUFrQixDQUFDO1FBQy9CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSxnQ0FBZ0M7S0FDaEQsQ0FBQztxQ0FTMEIsa0JBQVM7UUFDTixpQ0FBa0I7UUFDekIsdUJBQWdCO1FBQ1gsd0JBQVU7R0FYMUIscUJBQXFCLENBOENqQztBQTlDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IENhciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY2FyLm1vZGVsXCI7XG5pbXBvcnQgeyBDYXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgTGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudFwiO1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAocykgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoZSBMaXN0U2VsZWN0b3IgY3VzdG9tIGNvbXBvbmVudCB1c2VzIGEge059IG1vZGFsIHBhZ2UgdG8gbGV0IHRoZSB1c2VyIHNlbGVjdCBhbmQgb3B0aW9uXG4qIGZyb20gYSBsaXN0LiBZb3UgY2FuIGFsc28gY2hlY2sgb3V0IHRoZSBsaXN0LXNlbGVjdG9yLW1vZGFsLXZpZXcuY29tcG9uZW50LnRzIHRvIHNlZSB0aGVcbiogY29udGVudHMgb2YgdGhlIG1vZGFsIHBhZ2UuIExlYXJuIG1vcmUgYWJvdXQgbW9kYWwgcGFnZXMgaW4gdGhpcyBkb2N1bWVudGF0aW9uIGFydGljbGU6XG4qIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29kZS1zYW1wbGVzL21vZGFsLXBhZ2VcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczogW01vZGFsRGlhbG9nU2VydmljZV0sXG4gICAgc2VsZWN0b3I6IFwiTGlzdFNlbGVjdG9yXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0LXNlbGVjdG9yLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXRlbXM6IEFycmF5PHN0cmluZz47XG4gICAgQElucHV0KCkgdGFnOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9jYXI6IENhcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9wYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIF9jYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgY2FySWQgPSBcIlwiO1xuXG4gICAgICAgIC8vIHVzZSBzd2l0Y2hNYXAgdG8gZ2V0IHRoZSBsYXRlc3QgYWN0aXZhdGVkUm91dGUgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5fcGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgICAgICAuc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIGNhcklkID0gcGFyYW1zLmlkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fY2FyID0gdGhpcy5fY2FyU2VydmljZS5nZXRDYXJCeUlkKGNhcklkKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdG9yVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGBTZWxlY3QgQ2FyICR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMudGFnKX1gO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZjUmVmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoTGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHNlbGVjdGVkVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nhclt0aGlzLnRhZ10gPSBzZWxlY3RlZFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==