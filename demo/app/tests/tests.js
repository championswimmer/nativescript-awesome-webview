var AwesomeWebview = require("nativescript-awesome-webview").AwesomeWebview;
var awesomeWebview = new AwesomeWebview();

describe("greet function", function() {
    it("exists", function() {
        expect(awesomeWebview.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(awesomeWebview.greet()).toEqual("Hello, NS");
    });
});