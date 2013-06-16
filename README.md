# function-bind

<!--
    [![build status][1]][2]
    [![NPM version][3]][4]
    [![Coverage Status][5]][6]
    [![gemnasium Dependency Status][7]][8]
    [![Davis Dependency status][9]][10]
-->

<!-- [![browser support][11]][12] -->

Implementation of function.prototype.bind

## Example

I mainly do this for unit tests I run on phantomjs.
PhantomJS does not have Function.prototype.bind :(

```js
Function.prototype.bind = require("function-bind")
```

## Installation

`npm install function-bind`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/function-bind.png
  [2]: https://travis-ci.org/Raynos/function-bind
  [3]: https://badge.fury.io/js/function-bind.png
  [4]: https://badge.fury.io/js/function-bind
  [5]: https://coveralls.io/repos/Raynos/function-bind/badge.png
  [6]: https://coveralls.io/r/Raynos/function-bind
  [7]: https://gemnasium.com/Raynos/function-bind.png
  [8]: https://gemnasium.com/Raynos/function-bind
  [9]: https://david-dm.org/Raynos/function-bind.png
  [10]: https://david-dm.org/Raynos/function-bind
  [11]: https://ci.testling.com/Raynos/function-bind.png
  [12]: https://ci.testling.com/Raynos/function-bind
