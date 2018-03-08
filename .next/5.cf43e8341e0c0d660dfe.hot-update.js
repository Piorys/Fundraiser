webpackHotUpdate(5,{

/***/ 1120:
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/piotrryszewski/Desktop/Projekty/Fundraiser/node_modules/semantic-ui-css/semantic.min.css Unexpected character '@' (11:0)\nYou may need an appropriate loader to handle this file type.\n|  *\n|  */\n| @import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin);/*!\n|  * # Semantic UI 2.3.0 - Reset\n|  * http://github.com/semantic-org/semantic-ui/");

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(491);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(869);

__webpack_require__(1120);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/piotrryszewski/Desktop/Projekty/Fundraiser/pages/index.js?entry';


var fundraiserIndex = function (_Component) {
  (0, _inherits3.default)(fundraiserIndex, _Component);

  function fundraiserIndex() {
    (0, _classCallCheck3.default)(this, fundraiserIndex);

    return (0, _possibleConstructorReturn3.default)(this, (fundraiserIndex.__proto__ || (0, _getPrototypeOf2.default)(fundraiserIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(fundraiserIndex, [{
    key: 'renderFundraisers',
    value: function renderFundraisers() {
      var items = this.props.fundraisers.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          }, 'View Fundraiser'),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.renderFundraisers());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var fundraisers;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getFundraisers().call();

              case 2:
                fundraisers = _context.sent;
                return _context.abrupt('return', { fundraisers: fundraisers });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return fundraiserIndex;
}(_react.Component);

exports.default = fundraiserIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJmdW5kcmFpc2VySW5kZXgiLCJpdGVtcyIsInByb3BzIiwiZnVuZHJhaXNlcnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckZ1bmRyYWlzZXJzIiwibWV0aG9kcyIsImdldEZ1bmRyYWlzZXJzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFROztBQUNSOzs7Ozs7O0lBRU0sQTs7Ozs7Ozs7Ozs7d0NBT2UsQUFDakI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsSUFBSSxtQkFBUyxBQUNoRDs7a0JBQU8sQUFDRyxBQUNSO3VDQUFhLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxXQUFBLEVBRlIsQUFFUSxBQUNiO2lCQUhGLEFBQU8sQUFHRSxBQUVWO0FBTFEsQUFDTDtBQUZKLEFBQWMsQUFRZCxPQVJjOzsyQ0FRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBRVI7QUFGUTtPQUFBOzs7OzZCQUdELEFBQ047NkJBQU8sY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsT0FBQSxPQUFQLEFBQU8sQUFBTSxBQUFLLEFBRW5COzs7Ozs7Ozs7Ozs7dUJBbkIyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsaUJBQWhCLEEsQUFBaUM7O21CQUFyRDtBO2lEQUNDLEVBQUUsYUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSm1CLEEsQUF5QjlCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waW90cnJ5c3pld3NraS9EZXNrdG9wL1Byb2pla3R5L0Z1bmRyYWlzZXIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/piotrryszewski/Desktop/Projekty/Fundraiser/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/piotrryszewski/Desktop/Projekty/Fundraiser/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZjQzZTgzNDFlMGMwZDY2MGRmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDJhMTBiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHtDYXJkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuY2xhc3MgZnVuZHJhaXNlckluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcbiAgICBjb25zdCBmdW5kcmFpc2VycyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXRGdW5kcmFpc2VycygpLmNhbGwoKTtcbiAgICByZXR1cm4geyBmdW5kcmFpc2VycyB9O1xuICB9XG5cbiAgcmVuZGVyRnVuZHJhaXNlcnMoKXtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuZnVuZHJhaXNlcnMubWFwKGFkZHJlc3M9PntcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgRnVuZHJhaXNlcjwvYT4sXG4gICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30vPjtcblxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2Pnt0aGlzLnJlbmRlckZ1bmRyYWlzZXJzKCl9PC9kaXY+O1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuZHJhaXNlckluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7QUFBQTs7QUFHQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFGQTtBQUFBOzs7O0FBSUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FBakJBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9