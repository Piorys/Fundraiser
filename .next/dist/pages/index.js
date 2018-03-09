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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiRnVuZHJhaXNlckluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImZ1bmRyYWlzZXJzIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJGdW5kcmFpc2VycyIsIm1ldGhvZHMiLCJnZXRGdW5kcmFpc2VycyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7O3dDQU1nQixBQUNsQjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsWUFBWCxBQUF1QixJQUFJLG1CQUFXLEFBQ2xEOztrQkFBTyxBQUNHLEFBQ1I7dUNBQWEsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLFdBQUEsRUFGUixBQUVRLEFBQ2I7aUJBSEYsQUFBTyxBQUdFLEFBRVY7QUFMUSxBQUNMO0FBRkosQUFBYyxBQVFkLE9BUmM7OzJDQVFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBRUEsQUFDUDs2QkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1Q0FBQSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixBQUFnQyxzQkFBcUIsTUFBckQsQUFBMEQsY0FBYSxTQUF2RTtvQkFBQTtzQkFGRixBQUVFLEFBQ0M7QUFERDtlQUpKLEFBQ0EsQUFDRSxBQUdHLEFBQUssQUFJWDs7Ozs7Ozs7Ozs7O3VCQXpCMkIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGlCQUFoQixBQUFpQyxBOzttQkFBckQ7QTtpREFDQyxFQUFFLGFBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhtQixBLEFBOEI5Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9waW90ci5yeXN6ZXdza2kvRG9jdW1lbnRzL1Byb2plY3RzL0Z1bmRyYWlzZXIifQ==