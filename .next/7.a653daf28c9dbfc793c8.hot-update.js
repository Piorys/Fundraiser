webpackHotUpdate(7,{

/***/ 616:
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

var _layout = __webpack_require__(617);

var _layout2 = _interopRequireDefault(_layout);

var _fundraiser = __webpack_require__(1151);

var _fundraiser2 = _interopRequireDefault(_fundraiser);

var _semanticUiReact = __webpack_require__(479);

var _web = __webpack_require__(991);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\piotr.ryszewski\\Documents\\Projects\\Fundraiser\\pages\\fundraisers\\show.js?entry";


var FundraiserShow = function (_Component) {
  (0, _inherits3.default)(FundraiserShow, _Component);

  function FundraiserShow() {
    (0, _classCallCheck3.default)(this, FundraiserShow);

    return (0, _possibleConstructorReturn3.default)(this, (FundraiserShow.__proto__ || (0, _getPrototypeOf2.default)(FundraiserShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(FundraiserShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: "Fundraiser is being managed by",
        description: "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" }
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether') + " ETH",
        meta: "Current Balance",
        description: "The amount ether currently in the pool of Fundraiser",
        style: { overflowWrap: "break-word" }
      }, {
        header: minimumContribution + " WEI",
        meta: "Minimum Contribution",
        description: "The minimum amount needed to contribute to Fundraiser",
        style: { overflowWrap: "break-word" }
      }, {
        header: requestsCount,
        meta: "Requests",
        description: "How many requests have been created",
        style: { overflowWrap: "break-word" }
      }, {
        header: approversCount,
        meta: "Contributors",
        description: "How many people have contributed and earned the right to approve requests",
        style: { overflowWrap: "break-word" }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Fundraiser"), this.renderCards());
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var fundraiser, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fundraiser = (0, _fundraiser2.default)(props.query.address);
                _context.next = 3;
                return fundraiser.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return FundraiserShow;
}(_react.Component);

exports.default = FundraiserShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxmdW5kcmFpc2Vyc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZ1bmRyYWlzZXIiLCJDYXJkIiwid2ViMyIsIkZ1bmRyYWlzZXJTaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJmdW5kcmFpc2VyIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFTOztBQUNULEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7a0NBY1U7bUJBT1IsS0FQUSxBQU9IO1VBUEcsQUFFVixpQkFGVSxBQUVWO1VBRlUsQUFHVixpQkFIVSxBQUdWO1VBSFUsQUFJViw2QkFKVSxBQUlWO1VBSlUsQUFLVix1QkFMVSxBQUtWO1VBTFUsQUFNVix3QkFOVSxBQU1WLEFBR0Y7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUUsY0FOQyxBQUNaLEFBS1MsQUFBZ0I7QUFMekIsQUFDRSxPQUZVO2dCQVNGLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUFuQixBQUEyQixXQURyQyxBQUNnRCxBQUM5QztjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBWkMsQUFRWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBTVMsc0JBRFgsQUFDaUMsQUFDL0I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQW5CQyxBQWNaLEFBS1MsQUFBZ0I7QUFMekIsQUFDRTtnQkFNRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQXpCQyxBQXFCWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUUsY0EvQmIsQUFBYyxBQTJCWixBQUlTLEFBQWdCLEFBSTNCO0FBUkUsQUFDRTs7MkNBT0csQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNDLG9CQUhMLEFBQ0UsQUFFRyxBQUFLLEFBR1g7Ozs7OzJHQW5FNEIsQTs7Ozs7bUJBQ3JCO0EsNkJBQWEsMEJBQVcsTUFBQSxBQUFNLE0sQUFBakIsQUFBdUI7O3VCQUNwQixXQUFBLEFBQVcsUUFBWCxBQUFtQixhQUFuQixBQUFnQyxBOzttQkFBaEQ7QTs7dUNBR2lCLFFBRGhCLEFBQ2dCLEFBQVEsQUFDN0I7MkJBQVMsUUFGSixBQUVJLEFBQVEsQUFDakI7aUNBQWUsUUFIVixBQUdVLEFBQVEsQUFDdkI7a0NBQWdCLFFBSlgsQUFJVyxBQUFRLEFBQ3hCOzJCQUFTLFFBQUEsQUFBUSxBLEFBTFo7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTnVCLEEsQUF1RTdCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGlvdHIucnlzemV3c2tpL0RvY3VtZW50cy9Qcm9qZWN0cy9GdW5kcmFpc2VyIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\piotr.ryszewski\\Documents\\Projects\\Fundraiser\\pages\\fundraisers\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\piotr.ryszewski\\Documents\\Projects\\Fundraiser\\pages\\fundraisers\\show.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/fundraisers\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5hNjUzZGFmMjhjOWRiZmM3OTNjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZnVuZHJhaXNlcnMvc2hvdy5qcz83ZjI1Y2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IEZ1bmRyYWlzZXIgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2Z1bmRyYWlzZXJcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5cclxuY2xhc3MgRnVuZHJhaXNlclNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IGZ1bmRyYWlzZXIgPSBGdW5kcmFpc2VyKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGZ1bmRyYWlzZXIubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXHJcbiAgICAgIGJhbGFuY2U6IHN1bW1hcnlbMV0sXHJcbiAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxyXG4gICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzRdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FyZHMoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGJhbGFuY2UsXHJcbiAgICAgIG1hbmFnZXIsXHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIHJlcXVlc3RzQ291bnQsXHJcbiAgICAgIGFwcHJvdmVyc0NvdW50XHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICBtZXRhOiBcIkZ1bmRyYWlzZXIgaXMgYmVpbmcgbWFuYWdlZCBieVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXlcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsJ2V0aGVyJykgKyBcIiBFVEhcIixcclxuICAgICAgICBtZXRhOiBcIkN1cnJlbnQgQmFsYW5jZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBhbW91bnQgZXRoZXIgY3VycmVudGx5IGluIHRoZSBwb29sIG9mIEZ1bmRyYWlzZXJcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogIG1pbmltdW1Db250cmlidXRpb24gKyBcIiBXRUlcIixcclxuICAgICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIlRoZSBtaW5pbXVtIGFtb3VudCBuZWVkZWQgdG8gY29udHJpYnV0ZSB0byBGdW5kcmFpc2VyXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHJlcXVlc3RzQ291bnQsXHJcbiAgICAgICAgbWV0YTogXCJSZXF1ZXN0c1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhvdyBtYW55IHJlcXVlc3RzIGhhdmUgYmVlbiBjcmVhdGVkXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgIG1ldGE6IFwiQ29udHJpYnV0b3JzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSG93IG1hbnkgcGVvcGxlIGhhdmUgY29udHJpYnV0ZWQgYW5kIGVhcm5lZCB0aGUgcmlnaHQgdG8gYXBwcm92ZSByZXF1ZXN0c1wiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+RnVuZHJhaXNlcjwvaDM+XHJcbiAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuZHJhaXNlclNob3c7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Z1bmRyYWlzZXJzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBT0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFFQTtBQUVBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQTlEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=