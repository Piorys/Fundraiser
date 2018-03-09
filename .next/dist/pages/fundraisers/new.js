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

var _layout = require("../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require("semantic-ui-react");

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\piotr.ryszewski\\Documents\\Projects\\Fundraiser\\pages\\fundraisers\\new.js?entry";

//TODO:
// => WEI - ETH converter
// => Form validation

var FundraiserNew = function (_Component) {
  (0, _inherits3.default)(FundraiserNew, _Component);

  function FundraiserNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FundraiserNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FundraiserNew.__proto__ || (0, _getPrototypeOf2.default)(FundraiserNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minumumContribution: "",
      errorMsg: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //Prevent browser of submitting the form automatically
                event.preventDefault();

                _this.setState({ loading: true, errorMsg: '' });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createFundraiser(_this.state.minumumContribution).send({
                  from: accounts[0]
                });

              case 8:
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMsg: _context.t0.message });
                console.log('Error was thrown, detailed description below:');
                console.error(_context.t0);

              case 15:
                _this.setState({ loading: false });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FundraiserNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Create a new fundraiser"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Minimum contribution"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "Wei",
        labelPosition: "right",
        placeholder: "Minimum contribution value",
        value: this.state.minumumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minumumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Create!")));
    }
  }]);

  return FundraiserNew;
}(_react.Component);

exports.default = FundraiserNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxmdW5kcmFpc2Vyc1xcbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiRnVuZHJhaXNlck5ldyIsInN0YXRlIiwibWludW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTXNnIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVGdW5kcmFpc2VyIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUSxBQUFNLEFBQU87O0FBQzlCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7Ozs7O0FBQ2pCO0FBQ0E7QUFDQTs7SSxBQUNNOzs7Ozs7Ozs7Ozs7Ozs7ME5BQ0osQTsyQkFBUSxBQUNlLEFBQ3JCO2dCQUZNLEFBRUksQUFDVjtlQUhNLEFBR0csQTtBQUhILEFBQ04sYUFLRixBOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO0FBQ0E7c0JBQUEsQUFBTSxBQUVOOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxVQUpyQixBQUlULEFBQWMsQUFBMEI7O2dDQUovQjtnQ0FBQTt1QkFRZ0IsY0FBQSxBQUFLLElBUnJCLEFBUWdCLEFBQVM7O21CQUExQjtBQVJDLG9DQUFBO2dDQUFBO3lDQVNELEFBQVEsUUFBUixBQUNILGlCQUFpQixNQUFBLEFBQUssTUFEbkIsQUFDeUIscUJBRHpCLEFBRUg7d0JBQ08sU0FaSCxBQVNELEFBRUUsQUFDRSxBQUFTO0FBRFgsQUFDSixpQkFIRTs7bUJBVEM7Z0NBQUE7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBZVA7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsWUFBMUIsQUFBYyxBQUFrQixBQUNoQzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFBLEFBQVEsZUFqQkQ7O21CQW1CVDtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQW5CTixBQW1CVCxBQUFjLEFBQVU7O21CQW5CZjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQXNCRjttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBRUEsNENBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUFELEFBQ1EsQUFDTjt1QkFGRixBQUVnQixBQUNkO3FCQUhGLEFBR2MsQUFDWjtlQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQURuQyxBQUNSLEFBQWMsQUFBb0M7QUFOdEQ7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVVGO0FBVkU7QUFDRSwyQkFTSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQWJGLEFBYUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBbEJOLEFBQ0UsQUFHRSxBQWNFLEFBSVA7Ozs7O0FBcER5QixBLEFBc0Q1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGlvdHIucnlzemV3c2tpL0RvY3VtZW50cy9Qcm9qZWN0cy9GdW5kcmFpc2VyIn0=