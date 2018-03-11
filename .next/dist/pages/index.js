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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/piotrryszewski/Desktop/Projekty/Fundraiser/pages/index.js?entry";


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
          description: _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          }, "View Fundraiser"),
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
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, " Open Fundraisers "), _react2.default.createElement(_semanticUiReact.Button, { floated: "right", content: "add new fundraiser", icon: "add circle", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), this.renderFundraisers()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJGdW5kcmFpc2VySW5kZXgiLCJpdGVtcyIsInByb3BzIiwiZnVuZHJhaXNlcnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckZ1bmRyYWlzZXJzIiwibWV0aG9kcyIsImdldEZ1bmRyYWlzZXJzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7d0NBTWdCLEFBQ2xCO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLElBQUksbUJBQVcsQUFDbEQ7O2tCQUFPLEFBQ0csQUFDUjt1Q0FBYSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsV0FBQSxFQUZSLEFBRVEsQUFDYjtpQkFIRixBQUFPLEFBR0UsQUFFVjtBQUxRLEFBQ0w7QUFGSixBQUFjLEFBUWQsT0FSYzs7MkNBUVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFFQSxBQUNQOzZCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVDQUFBLEFBQUMseUNBQU8sU0FBUixBQUFnQixTQUFRLFNBQXhCLEFBQWdDLHNCQUFxQixNQUFyRCxBQUEwRCxjQUFhLFNBQXZFO29CQUFBO3NCQUZGLEFBRUUsQUFDQztBQUREO2VBSkosQUFDQSxBQUNFLEFBR0csQUFBSyxBQUlYOzs7Ozs7Ozs7Ozs7dUJBekIyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsaUJBQWhCLEFBQWlDLEE7O21CQUFyRDtBO2lEQUNDLEVBQUUsYUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSG1CLEEsQUE4QjlCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waW90cnJ5c3pld3NraS9EZXNrdG9wL1Byb2pla3R5L0Z1bmRyYWlzZXIifQ==