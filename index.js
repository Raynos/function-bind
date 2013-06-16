var ERROR_MESSAGE = "Function.prototype.bind called on incompatible "
var slice = Array.prototype.slice

module.exports = bind

function bind(that) {
    var target = this
    if (typeof target !== "function") {
        throw new TypeError(ERROR_MESSAGE + target)
    }
    var args = slice.call(arguments, 1)

    return function bound() {
        if (this instanceof bound) {
            var F = function () {}
            F.prototype = target.prototype
            var self = new F()

            var result = target.apply(
                self,
                args.concat(slice.call(arguments))
            )
            if (Object(result) === result) {
                return result
            }
            return self
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            )
        }
    }
}
