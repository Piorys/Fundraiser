webpackHotUpdate(5,{

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
              lineNumber: 16
            }
          }, 'View Fundraiser'),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), this.renderFundraisers(), _react2.default.createElement(_semanticUiReact.Button, {
        content: 'add new fundraiser',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJmdW5kcmFpc2VySW5kZXgiLCJpdGVtcyIsInByb3BzIiwiZnVuZHJhaXNlcnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckZ1bmRyYWlzZXJzIiwibWV0aG9kcyIsImdldEZ1bmRyYWlzZXJzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFRLEFBQU07Ozs7Ozs7SUFFUixBOzs7Ozs7Ozs7Ozt3Q0FPZSxBQUNqQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixJQUFJLG1CQUFTLEFBQ2hEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQWEsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLFdBQUEsRUFGUixBQUVRLEFBQ2I7aUJBSEYsQUFBTyxBQUdFLEFBRVY7QUFMUSxBQUNMO0FBRkosQUFBYyxBQVFkLE9BUmM7OzJDQVFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFFUjtBQUZRO09BQUE7Ozs7NkJBR0QsQUFDTjs2QkFBTyxjQUFBOztvQkFBQTtzQkFBQSxBQUNQO0FBRE87QUFBQSxPQUFBLDBDQUNELEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFETyxBQUNQLEFBQ0M7QUFERDtlQURPLEFBRU4sQUFBSyxBQUNOLHFDQUFBLEFBQUM7aUJBQUQsQUFDUSxBQUNSO2NBRkEsQUFFSyxBQUNMO2lCQUhBOztvQkFBQTtzQkFIQSxBQUFPLEFBR1AsQUFPRDtBQVBDO0FBQ0E7Ozs7Ozs7Ozs7Ozt1QkFyQjBCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixpQkFBaEIsQUFBaUMsQTs7bUJBQXJEO0E7aURBQ0MsRUFBRSxhQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKbUIsQSxBQWlDOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Bpb3RycnlzemV3c2tpL0Rlc2t0b3AvUHJvamVrdHkvRnVuZHJhaXNlciJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMjQyZGNhMWI0NWVlM2IzYjlmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MzY4NzNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHtDYXJkLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3MgZnVuZHJhaXNlckluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcbiAgICBjb25zdCBmdW5kcmFpc2VycyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXRGdW5kcmFpc2VycygpLmNhbGwoKTtcbiAgICByZXR1cm4geyBmdW5kcmFpc2VycyB9O1xuICB9XG5cbiAgcmVuZGVyRnVuZHJhaXNlcnMoKXtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuZnVuZHJhaXNlcnMubWFwKGFkZHJlc3M9PntcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgRnVuZHJhaXNlcjwvYT4sXG4gICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30vPjtcblxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybiA8ZGl2PlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XG4gICAge3RoaXMucmVuZGVyRnVuZHJhaXNlcnMoKX1cbiAgICA8QnV0dG9uXG4gICAgY29udGVudD0nYWRkIG5ldyBmdW5kcmFpc2VyJ1xuICAgIGljb249J2FkZCBjaXJjbGUnXG4gICAgcHJpbWFyeVxuICAgIC8+XG4gICAgPC9kaXY+O1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuZHJhaXNlckluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBQUE7O0FBR0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRkE7QUFBQTs7OztBQUlBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFIQTs7QUFBQTtBQU9BO0FBUEE7QUFDQTs7Ozs7Ozs7Ozs7O0FBckJBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9