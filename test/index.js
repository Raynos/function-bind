var test = require("tape")

var functionBind = require("../index")

test("functionBind is a function", function (assert) {
    assert.equal(typeof functionBind, "function")
    assert.end()
})
