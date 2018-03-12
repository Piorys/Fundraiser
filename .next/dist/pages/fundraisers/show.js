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

var _fundraiser = require("../../ethereum/fundraiser");

var _fundraiser2 = _interopRequireDefault(_fundraiser);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

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
          lineNumber: 66
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Fundraiser"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_ContributeForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxmdW5kcmFpc2Vyc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZ1bmRyYWlzZXIiLCJDYXJkIiwiR3JpZCIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkZ1bmRyYWlzZXJTaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJmdW5kcmFpc2VyIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBRXJCOzs7Ozs7Ozs7OztrQ0FjVTttQkFPUixLQVBRLEFBT0g7VUFQRyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLDZCQUpVLEFBSVY7VUFKVSxBQUtWLHVCQUxVLEFBS1Y7VUFMVSxBQU1WLHdCQU5VLEFBTVYsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQU5DLEFBQ1osQUFLUyxBQUFnQjtBQUx6QixBQUNFLE9BRlU7Z0JBU0YsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBQW5CLEFBQTJCLFdBRHJDLEFBQ2dELEFBQzlDO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUUsY0FaQyxBQVFaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFNUyxzQkFEWCxBQUNpQyxBQUMvQjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUlJLEFBQ0Y7ZUFBTyxFQUFFLGNBbkJDLEFBY1osQUFLUyxBQUFnQjtBQUx6QixBQUNFO2dCQU1GLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBekJDLEFBcUJaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQS9CYixBQUFjLEFBMkJaLEFBSVMsQUFBZ0IsQUFJM0I7QUFSRSxBQUNFOzsyQ0FPRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsK0JBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRztBQURIO2NBREYsQUFDRSxBQUNHLEFBQUssQUFFUixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBUlIsQUFDRSxBQUVFLEFBSUUsQUFDRSxBQU1UO0FBTlM7QUFBQTs7Ozs7MkdBckVtQixBOzs7OzttQkFDckI7QSw2QkFBYSwwQkFBVyxNQUFBLEFBQU0sTUFBakIsQUFBdUIsQTs7dUJBQ3BCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGEsQUFBbkIsQUFBZ0M7O21CQUFoRDtBOzt1Q0FHaUIsUUFEaEIsQUFDZ0IsQUFBUSxBQUM3QjsyQkFBUyxRQUZKLEFBRUksQUFBUSxBQUNqQjtpQ0FBZSxRQUhWLEFBR1UsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFKWCxBQUlXLEFBQVEsQUFDeEI7MkJBQVMsUUFMSixBQUtJLEFBQVEsQTtBQUxaLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOdUIsQSxBQStFN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9waW90ci5yeXN6ZXdza2kvRG9jdW1lbnRzL1Byb2plY3RzL0Z1bmRyYWlzZXIifQ==