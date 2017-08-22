"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var config_1 = require("./config");
/* ***********************************************************
* The {N} Kinvey plugin initialization is explained in the plugin readme here:
* http://devcenter.kinvey.com/nativescript/guides/getting-started#ConfigureYourApp
* In this template, Kinvey is set up with a custom existing project, so that
* You can build and run this template without creating your own Kinvey project.
*************************************************************/
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: config_1.Config.kinveyAppKey,
    appSecret: config_1.Config.kinveyAppSecret
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ludmV5LmNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtpbnZleS5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBaUQ7QUFFakQsbUNBQWtDO0FBRWxDOzs7Ozs4REFLOEQ7QUFFOUQsZ0NBQU0sQ0FBQyxJQUFJLENBQUM7SUFDUixNQUFNLEVBQUUsZUFBTSxDQUFDLFlBQVk7SUFDM0IsU0FBUyxFQUFFLGVBQU0sQ0FBQyxlQUFlO0NBQ3BDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoZSB7Tn0gS2ludmV5IHBsdWdpbiBpbml0aWFsaXphdGlvbiBpcyBleHBsYWluZWQgaW4gdGhlIHBsdWdpbiByZWFkbWUgaGVyZTpcbiogaHR0cDovL2RldmNlbnRlci5raW52ZXkuY29tL25hdGl2ZXNjcmlwdC9ndWlkZXMvZ2V0dGluZy1zdGFydGVkI0NvbmZpZ3VyZVlvdXJBcHBcbiogSW4gdGhpcyB0ZW1wbGF0ZSwgS2ludmV5IGlzIHNldCB1cCB3aXRoIGEgY3VzdG9tIGV4aXN0aW5nIHByb2plY3QsIHNvIHRoYXRcbiogWW91IGNhbiBidWlsZCBhbmQgcnVuIHRoaXMgdGVtcGxhdGUgd2l0aG91dCBjcmVhdGluZyB5b3VyIG93biBLaW52ZXkgcHJvamVjdC5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbktpbnZleS5pbml0KHtcbiAgICBhcHBLZXk6IENvbmZpZy5raW52ZXlBcHBLZXksXG4gICAgYXBwU2VjcmV0OiBDb25maWcua2ludmV5QXBwU2VjcmV0XG59KTsiXX0=