"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ListSelectorModalViewComponent = (function () {
    function ListSelectorModalViewComponent(_params) {
        this._params = _params;
        this._title = _params.context.title;
        this._selectedIndex = _params.context.selectedIndex;
        this._items = [];
        for (var i = 0; i < _params.context.items.length; i++) {
            this._items.push({
                value: _params.context.items[i],
                isSelected: i === this._selectedIndex ? true : false
            });
        }
    }
    ListSelectorModalViewComponent.prototype.onItemSelected = function (args) {
        var oldSelectedItem = this._items[this._selectedIndex];
        oldSelectedItem.isSelected = false;
        var newSelectedItem = this._items[args.index];
        newSelectedItem.isSelected = true;
        this._selectedIndex = args.index;
        this._params.closeCallback(newSelectedItem.value);
    };
    ListSelectorModalViewComponent.prototype.onCancelButtonTap = function () {
        this._params.closeCallback(null);
    };
    Object.defineProperty(ListSelectorModalViewComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSelectorModalViewComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    return ListSelectorModalViewComponent;
}());
ListSelectorModalViewComponent = __decorate([
    core_1.Component({
        selector: "ListSelectorModalView",
        moduleId: module.id,
        templateUrl: "./list-selector-modal-view.component.html",
        styleUrls: ["./list-selector-modal-view.component.css"]
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
], ListSelectorModalViewComponent);
exports.ListSelectorModalViewComponent = ListSelectorModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3Qtc2VsZWN0b3ItbW9kYWwtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0VBQXNFO0FBUXRFLElBQWEsOEJBQThCO0lBS3ZDLHdDQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixVQUFVLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxHQUFHLEtBQUs7YUFDdkQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFRCx1REFBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELGVBQWUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5DLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELGVBQWUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDBEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQkFBSSxpREFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpREFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDTCxxQ0FBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksOEJBQThCO0lBTjFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMkNBQTJDO1FBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO0tBQzFELENBQUM7cUNBTStCLGdDQUFpQjtHQUxyQyw4QkFBOEIsQ0F3QzFDO0FBeENZLHdFQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTGlzdFNlbGVjdG9yTW9kYWxWaWV3XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3Qtc2VsZWN0b3ItbW9kYWwtdmlldy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9saXN0LXNlbGVjdG9yLW1vZGFsLXZpZXcuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VsZWN0b3JNb2RhbFZpZXdDb21wb25lbnQge1xuICAgIHByaXZhdGUgX2l0ZW1zOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgICAgICB0aGlzLl90aXRsZSA9IF9wYXJhbXMuY29udGV4dC50aXRsZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IF9wYXJhbXMuY29udGV4dC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhcmFtcy5jb250ZXh0Lml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3BhcmFtcy5jb250ZXh0Lml0ZW1zW2ldLFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGkgPT09IHRoaXMuX3NlbGVjdGVkSW5kZXggPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtU2VsZWN0ZWQoYXJncyk6IHZvaWQge1xuICAgICAgICBjb25zdCBvbGRTZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtc1t0aGlzLl9zZWxlY3RlZEluZGV4XTtcbiAgICAgICAgb2xkU2VsZWN0ZWRJdGVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBuZXdTZWxlY3RlZEl0ZW0gPSB0aGlzLl9pdGVtc1thcmdzLmluZGV4XTtcbiAgICAgICAgbmV3U2VsZWN0ZWRJdGVtLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gYXJncy5pbmRleDtcblxuICAgICAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayhuZXdTZWxlY3RlZEl0ZW0udmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXJhbXMuY2xvc2VDYWxsYmFjayhudWxsKTtcbiAgICB9XG5cbiAgICBnZXQgaXRlbXMoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbn1cbiJdfQ==