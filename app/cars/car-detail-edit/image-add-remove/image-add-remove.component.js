"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var imagePicker = require("nativescript-imagepicker");
var permissions = require("nativescript-permissions");
var platform = require("tns-core-modules/platform");
/* ***********************************************************
* The ImageAddRemove custom component uses an imagepicker plugin to let the user select
* an image and provides custom logic and design to the process.
*************************************************************/
var ImageAddRemoveComponent = (function () {
    function ImageAddRemoveComponent() {
        this.imageUrl = "";
        this.selectionChanged = new core_1.EventEmitter();
    }
    ImageAddRemoveComponent.prototype.onImageAddRemoveTap = function () {
        var _this = this;
        if (this.imageUrl) {
            this.handleImageChange(null);
            return;
        }
        var context = imagePicker.create({
            mode: "single"
        });
        var queue = Promise.resolve();
        // lower SDK versions will grant permission from AndroidManifest file
        if (platform.device.os === "Android" && Number(platform.device.sdkVersion) >= 23) {
            queue = queue.then(function () { return permissions.requestPermission("android.permission.READ_EXTERNAL_STORAGE"); });
        }
        queue.then(function () { return _this.startSelection(context); })
            .catch(function (errorMessage) { return console.log(errorMessage); });
    };
    ImageAddRemoveComponent.prototype.startSelection = function (context) {
        var _this = this;
        context
            .authorize()
            .then(function () { return context.present(); })
            .then(function (selection) { return selection.forEach(function (selectedImage) { return _this.handleImageChange(selectedImage.fileUri); }); })
            .catch(function (errorMessage) { return console.log(errorMessage); });
    };
    ImageAddRemoveComponent.prototype.handleImageChange = function (newValue) {
        var oldValue = this.imageUrl;
        if (newValue) {
            // iOS simulator fileUri looks like file:///Users/...
            newValue = newValue.replace("file://", "");
        }
        if (oldValue === newValue) {
            return;
        }
        this.imageUrl = newValue;
        this.selectionChanged.emit({ oldValue: oldValue, newValue: newValue });
    };
    return ImageAddRemoveComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageAddRemoveComponent.prototype, "imageUrl", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ImageAddRemoveComponent.prototype, "selectionChanged", void 0);
ImageAddRemoveComponent = __decorate([
    core_1.Component({
        selector: "ImageAddRemove",
        moduleId: module.id,
        templateUrl: "./image-add-remove.component.html",
        styleUrls: ["./image-add-remove.component.css"]
    })
], ImageAddRemoveComponent);
exports.ImageAddRemoveComponent = ImageAddRemoveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUN2RSxzREFBd0Q7QUFDeEQsc0RBQXdEO0FBQ3hELG9EQUFzRDtBQUV0RDs7OzhEQUc4RDtBQU85RCxJQUFhLHVCQUF1QjtJQU5wQztRQU9hLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBK0N2RSxDQUFDO0lBN0NHLHFEQUFtQixHQUFuQjtRQUFBLGlCQW9CQztRQW5CRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFN0IsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTlCLHFFQUFxRTtRQUNyRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsV0FBVyxDQUFDLGlCQUFpQixDQUFDLDBDQUEwQyxDQUFDLEVBQXpFLENBQXlFLENBQUMsQ0FBQztRQUN4RyxDQUFDO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQzthQUN6QyxLQUFLLENBQUMsVUFBQyxZQUFpQixJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnREFBYyxHQUFkLFVBQWUsT0FBTztRQUF0QixpQkFNQztRQUxHLE9BQU87YUFDRixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQzthQUM3QixJQUFJLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQyxFQUFuRixDQUFtRixDQUFDO2FBQ3hHLEtBQUssQ0FBQyxVQUFDLFlBQWlCLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELG1EQUFpQixHQUFqQixVQUFrQixRQUFRO1FBQ3RCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFL0IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLHFEQUFxRDtZQUNyRCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUFoRFk7SUFBUixZQUFLLEVBQUU7O3lEQUF1QjtBQUNyQjtJQUFULGFBQU0sRUFBRTs4QkFBbUIsbUJBQVk7aUVBQTJCO0FBRjFELHVCQUF1QjtJQU5uQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLG1DQUFtQztRQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztLQUNsRCxDQUFDO0dBQ1csdUJBQXVCLENBaURuQztBQWpEWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpbWFnZVBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5pbXBvcnQgKiBhcyBwZXJtaXNzaW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBUaGUgSW1hZ2VBZGRSZW1vdmUgY3VzdG9tIGNvbXBvbmVudCB1c2VzIGFuIGltYWdlcGlja2VyIHBsdWdpbiB0byBsZXQgdGhlIHVzZXIgc2VsZWN0XG4qIGFuIGltYWdlIGFuZCBwcm92aWRlcyBjdXN0b20gbG9naWMgYW5kIGRlc2lnbiB0byB0aGUgcHJvY2Vzcy5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJJbWFnZUFkZFJlbW92ZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2ltYWdlLWFkZC1yZW1vdmUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUFkZFJlbW92ZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgaW1hZ2VVcmw6IHN0cmluZyA9IFwiXCI7XG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgb25JbWFnZUFkZFJlbW92ZVRhcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW1hZ2VDaGFuZ2UobnVsbCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBpbWFnZVBpY2tlci5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcXVldWUgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgICAgICAvLyBsb3dlciBTREsgdmVyc2lvbnMgd2lsbCBncmFudCBwZXJtaXNzaW9uIGZyb20gQW5kcm9pZE1hbmlmZXN0IGZpbGVcbiAgICAgICAgaWYgKHBsYXRmb3JtLmRldmljZS5vcyA9PT0gXCJBbmRyb2lkXCIgJiYgTnVtYmVyKHBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uKSA+PSAyMykge1xuICAgICAgICAgICAgcXVldWUgPSBxdWV1ZS50aGVuKCgpID0+IHBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS50aGVuKCgpID0+IHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yTWVzc2FnZTogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBzdGFydFNlbGVjdGlvbihjb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnRleHRcbiAgICAgICAgICAgIC5hdXRob3JpemUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29udGV4dC5wcmVzZW50KCkpXG4gICAgICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiBzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWRJbWFnZSkgPT4gdGhpcy5oYW5kbGVJbWFnZUNoYW5nZShzZWxlY3RlZEltYWdlLmZpbGVVcmkpKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3JNZXNzYWdlOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSkpO1xuICAgIH1cblxuICAgIGhhbmRsZUltYWdlQ2hhbmdlKG5ld1ZhbHVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5pbWFnZVVybDtcblxuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGlPUyBzaW11bGF0b3IgZmlsZVVyaSBsb29rcyBsaWtlIGZpbGU6Ly8vVXNlcnMvLi4uXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLnJlcGxhY2UoXCJmaWxlOi8vXCIsIFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZWQuZW1pdCh7IG9sZFZhbHVlLCBuZXdWYWx1ZSB9KTtcbiAgICB9XG59XG4iXX0=