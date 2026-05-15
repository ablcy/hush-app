cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "code-push.AcquisitionManager",
      "file": "plugins/code-push/script/acquisition-sdk.js",
      "pluginId": "code-push",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-advanced-http.cookie-handler",
      "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.dependency-validator",
      "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.error-codes",
      "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.global-configs",
      "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.helpers",
      "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.js-util",
      "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.local-storage-store",
      "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.lodash",
      "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.messages",
      "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.ponyfills",
      "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.public-interface",
      "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.tough-cookie",
      "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.url-util",
      "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
      "pluginId": "cordova-plugin-advanced-http"
    },
    {
      "id": "cordova-plugin-advanced-http.http",
      "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
      "pluginId": "cordova-plugin-advanced-http",
      "clobbers": [
        "cordova.plugin.http"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-zip.Zip",
      "file": "plugins/cordova-plugin-zip/zip.js",
      "pluginId": "cordova-plugin-zip",
      "clobbers": [
        "zip"
      ]
    },
    {
      "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
      "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
      "pluginId": "cordova-plugin-firebase-messaging",
      "merges": [
        "cordova.plugins.firebase.messaging"
      ]
    },
    {
      "id": "cordova-plugin-background-mode.BackgroundMode",
      "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
      "pluginId": "cordova-plugin-background-mode",
      "clobbers": [
        "cordova.plugins.backgroundMode",
        "plugin.backgroundMode"
      ]
    },
    {
      "id": "cordova-plugin-android-permissions.Permissions",
      "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
      "pluginId": "cordova-plugin-android-permissions",
      "clobbers": [
        "cordova.plugins.permissions"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-code-push.codePush",
      "file": "plugins/cordova-plugin-code-push/bin/www/codePush.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "codePush"
      ]
    },
    {
      "id": "cordova-plugin-code-push.localPackage",
      "file": "plugins/cordova-plugin-code-push/bin/www/localPackage.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "LocalPackage"
      ]
    },
    {
      "id": "cordova-plugin-code-push.remotePackage",
      "file": "plugins/cordova-plugin-code-push/bin/www/remotePackage.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "RemotePackage"
      ]
    },
    {
      "id": "cordova-plugin-code-push.syncStatus",
      "file": "plugins/cordova-plugin-code-push/bin/www/syncStatus.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "SyncStatus"
      ]
    },
    {
      "id": "cordova-plugin-code-push.installMode",
      "file": "plugins/cordova-plugin-code-push/bin/www/installMode.js",
      "pluginId": "cordova-plugin-code-push",
      "clobbers": [
        "InstallMode"
      ]
    },
    {
      "id": "cordova-plugin-code-push.codePushUtil",
      "file": "plugins/cordova-plugin-code-push/bin/www/codePushUtil.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.fileUtil",
      "file": "plugins/cordova-plugin-code-push/bin/www/fileUtil.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.httpRequester",
      "file": "plugins/cordova-plugin-code-push/bin/www/httpRequester.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.nativeAppInfo",
      "file": "plugins/cordova-plugin-code-push/bin/www/nativeAppInfo.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.package",
      "file": "plugins/cordova-plugin-code-push/bin/www/package.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    },
    {
      "id": "cordova-plugin-code-push.sdk",
      "file": "plugins/cordova-plugin-code-push/bin/www/sdk.js",
      "pluginId": "cordova-plugin-code-push",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "code-push": "3.0.1",
    "cordova-plugin-advanced-http": "3.3.1",
    "cordova-plugin-device": "3.0.0",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-zip": "3.1.0",
    "cordova-support-android-plugin": "2.0.4",
    "cordova-plugin-firebase-messaging": "8.0.1",
    "cordova-plugin-background-mode": "0.7.3",
    "cordova-plugin-android-permissions": "1.1.5",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "4.0.0",
    "cordova-plugin-code-push": "2.0.0"
  };
});