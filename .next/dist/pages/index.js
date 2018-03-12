"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\piotr.ryszewski\\Documents\\Projects\\Fundraiser\\pages\\index.js?entry";


var FundraiserIndex = function (_Component) {
  (0, _inherits3.default)(FundraiserIndex, _Component);

  function FundraiserIndex() {
    (0, _classCallCheck3.default)(this, FundraiserIndex);

    return (0, _possibleConstructorReturn3.default)(this, (FundraiserIndex.__proto__ || (0, _getPrototypeOf2.default)(FundraiserIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(FundraiserIndex, [{
    key: "renderFundraisers",
    value: function renderFundraisers() {
      var items = this.props.fundraisers.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/fundraisers/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, "View Fundraiser")),
          fluid: true
          //TODO Add a short description of a fundraiser
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, " Open Fundraisers "), _react2.default.createElement(_routes.Link, { route: "/fundraisers/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("a", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", content: "add new fundraiser", icon: "add circle", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }))), this.renderFundraisers()));
    }
  }], [{
    key: "getInitialProps",
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
                return _context.abrupt("return", { fundraisers: fundraisers });

              case 4:
              case "end":
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

  return FundraiserIndex;
}(_react.Component);

exports.default = FundraiserIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkZ1bmRyYWlzZXJJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJmdW5kcmFpc2VycyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyRnVuZHJhaXNlcnMiLCJtZXRob2RzIiwiZ2V0RnVuZHJhaXNlcnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O3dDQU1nQixBQUNsQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixJQUFJLG1CQUFXLEFBQ2xEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyx5QkFBTixBQUE2Qjt3QkFBN0I7MEJBQUEsQUFDQTtBQURBO1dBQUEsa0JBQ0EsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkcsQUFHSCxBQUNBLEFBR0Y7aUJBQU8sQUFDUDtBQVJGLEFBQU8sQUFVUjtBQVZRLEFBQ0w7QUFGSixBQUFjLEFBWWQsT0FaYzsyQ0FZUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUVBLEFBQ1A7NkJBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sU0FBUixBQUFnQixTQUFRLFNBQXhCLEFBQWdDLHNCQUFxQixNQUFyRCxBQUEwRCxjQUFhLFNBQXZFO29CQUFBO3NCQUpOLEFBRUUsQUFDRSxBQUNFLEFBR0g7QUFIRztpQkFOUixBQUNBLEFBQ0UsQUFPRyxBQUFLLEFBSVg7Ozs7Ozs7Ozs7Ozt1QkFqQzJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixpQkFBaEIsQUFBaUMsQTs7bUJBQXJEO0E7aURBQ0MsRUFBRSxhQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIbUIsQSxBQXNDOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGlvdHIucnlzemV3c2tpL0RvY3VtZW50cy9Qcm9qZWN0cy9GdW5kcmFpc2VyIn0=