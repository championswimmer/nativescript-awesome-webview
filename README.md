# nativescript-awesome-webview

<!-- badges here -->

A WebView plugin for NativeScript {N} that uses **Chrome Custom Tabs** in _Android_ and **SFSafariViewController** in _iOS_. 
It is _**awesome**_ because now you can use the system's default browser, letting people maintain active logins 
across websites (instead of having to freshly login to sites in the scope of your app's webview). Which means the custom tabs
(or safari view) loads really fast! Also you can set the color of the title bar and controls of the custom tab / safari view. 

<!-- screenshots here -->

## Prerequisites / Requirements

As of now, there aren't any prerequisites. This should work with any device, any OS. 

## Installation

For `tns` projects (Angular, Typescript, Javascript)

```shell
tns plugin add nativescript-awesome-webview
```

For `vue-cli` projects (Nativescript-Vue)

```shell
npm install nativescript-awesome-webview
```

## Usage 

### Require

Javascript - 

```javascript
const {init, openWebView} = require('nativescript-awesome-webview');
```

Typescript - 

```typescript
import {init, openWebView} from 'nativescript-awesome-webview';
```

### 1. Initialise (optional, only Android) 

```javascript
init()
```

_NOTE: This warms up the Chrome Custom Tab on Android
For details [check this](https://developer.chrome.com/multidevice/android/customtabs#warm-up%20chrome%20to%20make%20pages%20load%20faster)_

Calling `init()` does nothing on iOS. So if you're making for both OS, calling the function doesn't hurt in iOS. 

### 2. Open an URL

```typescript
    openWebView({
      url: 'http://google.com',
      toolbarColor: '#2277aa',
      toolbarControlsColor: '#eebb99'
    });
```

## openWebView options

`AwesomeWebviewOptions` structure (the object you pass into `openWebView`)
    
| Property | Default | Description |
| --- | --- | --- |
| url | **required** | The URL to open |
| showTitle | false | Shows title bar in the webview |
| toolbarColor | undefined | Color of the toolbar |
| toolbarControlsColor | undefined | (only iOS) color of buttons on toolbar |
| isClosed | undefined | callback function that will be called when webview is closed |
    
## License

This is free, open source and do-whatever-you-want-ware. I really don't care. 
But if you need an official license - 

	Apache License Version 2.0, January 2004
