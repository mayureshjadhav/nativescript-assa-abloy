var AssaAbloy = require("nativescript-assa-abloy").AssaAbloy;
var assaAbloy = new AssaAbloy();

describe("greet function", function() {
    it("exists", function() {
        expect(assaAbloy.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(assaAbloy.greet()).toEqual("Hello, NS");
    });
});