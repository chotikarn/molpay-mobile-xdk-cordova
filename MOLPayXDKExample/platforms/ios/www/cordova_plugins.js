cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-save-image-gallery.saveImageGallery",
        "file": "plugins/cordova-save-image-gallery/www/saveImageGallery.js",
        "pluginId": "cordova-save-image-gallery",
        "clobbers": [
            "cordova.saveImageGallery"
        ]
    },
    {
        "id": "cordova-plugin-x-toast.Toast",
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "id": "cordova-plugin-x-toast.tests",
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "pluginId": "cordova-plugin-x-toast"
    },
    {
        "id": "molpay-mobile-xdk-cordova.MOLPay",
        "file": "plugins/molpay-mobile-xdk-cordova/molpay.js",
        "pluginId": "molpay-mobile-xdk-cordova",
        "clobbers": [
            "molpay"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-inappbrowser": "1.7.0",
    "cordova-plugin-privacyscreen": "0.3.1",
    "cordova-save-image-gallery": "0.0.26",
    "cordova-plugin-x-toast": "2.6.0",
    "cordova-plugin-android-permissions": "0.10.0",
    "molpay-mobile-xdk-cordova": "3.10.0"
};
// BOTTOM OF METADATA
});