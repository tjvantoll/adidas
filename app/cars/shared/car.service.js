"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var config_1 = require("../../shared/config");
var car_model_1 = require("./car.model");
var fs = require("file-system");
var imageSource = require("image-source");
var CarService = (function () {
    function CarService(_ngZone) {
        this._ngZone = _ngZone;
        this.allCars = [];
        this.carsStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("cars");
    }
    CarService.prototype.getCarById = function (id) {
        if (!id) {
            return;
        }
        return this.allCars.filter(function (car) {
            return car._id === id;
        })[0];
    };
    CarService.prototype.load = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.login().then(function () {
                return _this.syncDataStore();
            }).then(function () {
                var stream = _this.carsStore.find();
                return stream.toPromise();
            }).then(function (data) {
                _this.allCars = [];
                data.forEach(function (car) {
                    _this.allCars.push(new car_model_1.Car(car));
                });
                observer.next(_this.allCars);
            }).catch(_this.handleErrors);
        });
    };
    CarService.prototype.update = function (editObject) {
        return this.carsStore.save(editObject);
    };
    CarService.prototype.uploadImage = function (remoteFullPath, localFullPath) {
        var imageFile = fs.File.fromPath(localFullPath);
        var binarySource = imageFile.readSync(function (err) { console.log("Error raeding binary:" + err); });
        var metadata = {
            filename: 'image.jpg',
            mimeType: 'image/jpeg',
            public: true
        };
        return kinvey_nativescript_sdk_1.Kinvey.Files.upload(imageFile, metadata);
    };
    CarService.prototype.syncDataStore = function () {
        var _this = this;
        return this.carsStore.pendingSyncEntities().then(function (pendingEntities) {
            var queue = Promise.resolve();
            if (pendingEntities && pendingEntities.length) {
                queue = queue
                    .then(function () { return _this.carsStore.push(); })
                    .then(function (entities) {
                    /* ***********************************************************
                    * Each item in the array of pushed entities will look like the following
                    * { _id: '<entity id before push>', entity: <entity after push> }
                    * It could also possibly have an error property if the push failed.
                    * { _id: '<entity id before push>', entity: <entity after push>, error: <reason push failed> }
                    * Learn more about in this documentation article:
                    * http://devcenter.kinvey.com/nativescript/guides/datastore#push
                    *************************************************************/
                });
            }
            return queue;
        });
    };
    CarService.prototype.login = function () {
        if (!!kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            return Promise.resolve();
        }
        else {
            return kinvey_nativescript_sdk_1.Kinvey.User.login(config_1.Config.kinveyUsername, config_1.Config.kinveyPassword);
        }
    };
    CarService.prototype.handleErrors = function (error) {
        console.log(error);
        return Rx_1.Observable.throw(error);
    };
    return CarService;
}());
CarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUVuRCw4QkFBc0Q7QUFFdEQsbUVBQWlEO0FBQ2pELDhDQUE2QztBQUM3Qyx5Q0FBa0M7QUFFbEMsZ0NBQWtDO0FBRWxDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUxQyxJQUFhLFVBQVU7SUFJbkIsb0JBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBSDNCLFlBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFHLGdDQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBTSxNQUFNLENBQUMsQ0FBQztJQUV0QixDQUFDO0lBRXhDLCtCQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHO1lBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQUEsaUJBa0JDO1FBakJHLE1BQU0sQ0FBQyxJQUFJLGVBQVUsQ0FBQyxVQUFDLFFBQWE7WUFFaEMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDZCxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUVyQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNB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RlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuXG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXIubW9kZWxcIjtcblxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5cbnZhciBpbWFnZVNvdXJjZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIik7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBhbGxDYXJzOiBBcnJheTxDYXI+ID0gW107XG4gICAgcHJpdmF0ZSBjYXJzU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb248Q2FyPihcImNhcnNcIik7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkgeyB9XG5cbiAgICBnZXRDYXJCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsQ2Fycy5maWx0ZXIoKGNhcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhci5faWQgPT09IGlkO1xuICAgICAgICB9KVswXTtcbiAgICB9XG5cbiAgICBsb2FkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3luY0RhdGFTdG9yZSgpO1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5jYXJzU3RvcmUuZmluZCgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmVhbS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbENhcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGNhcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENhcnMucHVzaChuZXcgQ2FyKGNhcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLmFsbENhcnMpO1xuICAgICAgICAgICAgfSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZWRpdE9iamVjdDogQ2FyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnNTdG9yZS5zYXZlKGVkaXRPYmplY3QpO1xuICAgIH1cblxuICAgIHVwbG9hZEltYWdlKHJlbW90ZUZ1bGxQYXRoOiBzdHJpbmcsIGxvY2FsRnVsbFBhdGg6IHN0cmluZykge1xuICAgICAgICBsZXQgaW1hZ2VGaWxlID0gZnMuRmlsZS5mcm9tUGF0aChsb2NhbEZ1bGxQYXRoKTtcbiAgICAgICAgbGV0IGJpbmFyeVNvdXJjZSA9IGltYWdlRmlsZS5yZWFkU3luYyhlcnIgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yIHJhZWRpbmcgYmluYXJ5OlwiICsgZXJyKTsgfSk7XG5cbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgICAgICAgICBmaWxlbmFtZTogJ2ltYWdlLmpwZycsXG4gICAgICAgICAgICBtaW1lVHlwZTogJ2ltYWdlL2pwZWcnLFxuICAgICAgICAgICAgcHVibGljOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEtpbnZleS5GaWxlcy51cGxvYWQoaW1hZ2VGaWxlLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzeW5jRGF0YVN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJzU3RvcmUucGVuZGluZ1N5bmNFbnRpdGllcygpLnRoZW4oKHBlbmRpbmdFbnRpdGllczogYW55W10pID0+IHtcbiAgICAgICAgICAgIGxldCBxdWV1ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICAgICAgICBpZiAocGVuZGluZ0VudGl0aWVzICYmIHBlbmRpbmdFbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZSA9IHF1ZXVlXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuY2Fyc1N0b3JlLnB1c2goKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGVudGl0aWVzOiBLaW52ZXkuUHVzaFJlc3VsdDxDYXI+W10pID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgICAgICogRWFjaCBpdGVtIGluIHRoZSBhcnJheSBvZiBwdXNoZWQgZW50aXRpZXMgd2lsbCBsb29rIGxpa2UgdGhlIGZvbGxvd2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKiB7IF9pZDogJzxlbnRpdHkgaWQgYmVmb3JlIHB1c2g+JywgZW50aXR5OiA8ZW50aXR5IGFmdGVyIHB1c2g+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICogSXQgY291bGQgYWxzbyBwb3NzaWJseSBoYXZlIGFuIGVycm9yIHByb3BlcnR5IGlmIHRoZSBwdXNoIGZhaWxlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICogeyBfaWQ6ICc8ZW50aXR5IGlkIGJlZm9yZSBwdXNoPicsIGVudGl0eTogPGVudGl0eSBhZnRlciBwdXNoPiwgZXJyb3I6IDxyZWFzb24gcHVzaCBmYWlsZWQ+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICogTGVhcm4gbW9yZSBhYm91dCBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICogaHR0cDovL2RldmNlbnRlci5raW52ZXkuY29tL25hdGl2ZXNjcmlwdC9ndWlkZXMvZGF0YXN0b3JlI3B1c2hcbiAgICAgICAgICAgICAgICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcXVldWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKCEhS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9naW4oQ29uZmlnLmtpbnZleVVzZXJuYW1lLCBDb25maWcua2ludmV5UGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufVxuIl19