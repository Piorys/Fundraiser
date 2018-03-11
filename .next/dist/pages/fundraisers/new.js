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

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/piotrryszewski/Desktop/Projekty/Fundraiser/pages/fundraisers/new.js?entry";


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

                _routes.Router.pushRoute('/');

                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                _this.setState({ errorMsg: _context.t0.message });
                console.log('Error was thrown, detailed description below:');
                console.error(_context.t0);

              case 16:
                _this.setState({ loading: false });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
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
          lineNumber: 46
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Create a new fundraiser"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
          lineNumber: 52
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Create!")));
    }
  }]);

  return FundraiserNew;
}(_react.Component);

exports.default = FundraiserNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Z1bmRyYWlzZXJzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkZ1bmRyYWlzZXJOZXciLCJzdGF0ZSIsIm1pbnVtdW1Db250cmlidXRpb24iLCJlcnJvck1zZyIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlRnVuZHJhaXNlciIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztBQUVyQjtBQUNBO0FBQ0E7O0ksQUFFTTs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0o7MkJBQVEsQUFDZSxBQUNyQjtnQkFGTSxBQUVJLEFBQ1Y7ZUFITSxBQUdHLEE7QUFISCxBQUNOLGEsQUFLRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtBQUNBO3NCQUFBLEFBQU0sQUFFTjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sVUFKckIsQUFJVCxBQUFjLEFBQTBCOztnQ0FKL0I7Z0NBQUE7dUJBUWdCLGNBQUEsQUFBSyxJQVJyQixBQVFnQixBQUFTOzttQkFBMUI7QUFSQyxvQ0FBQTtnQ0FBQTt5Q0FTRCxBQUFRLFFBQVIsQUFDSCxpQkFBaUIsTUFBQSxBQUFLLE1BRG5CLEFBQ3lCLHFCQUR6QixBQUVIO3dCQUNPLFNBWkgsQUFTRCxBQUVFLEFBQ0UsQUFBUztBQURYLEFBQ0osaUJBSEU7O21CQU1OOzsrQkFBQSxBQUFPLFVBZkEsQUFlUCxBQUFpQjs7Z0NBZlY7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBa0JQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLFlBQTFCLEFBQWMsQUFBa0IsQUFDaEM7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3QkFBQSxBQUFRLGVBcEJEOzttQkFzQlQ7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0F0Qk4sQUFzQlQsQUFBYyxBQUFVOzttQkF0QmY7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkF5QkY7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLDRDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtxQkFIRixBQUdjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFKZCxBQUlvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLHFCQUFxQixNQUFBLEFBQU0sT0FEbkMsQUFDUixBQUFjLEFBQW9DO0FBTnREOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFVRjtBQVZFO0FBQ0UsMkJBU0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFiRixBQWFFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQWxCTixBQUNFLEFBR0UsQUFjRSxBQUlQOzs7OztBQXZEeUIsQSxBQXlENUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waW90cnJ5c3pld3NraS9EZXNrdG9wL1Byb2pla3R5L0Z1bmRyYWlzZXIifQ==