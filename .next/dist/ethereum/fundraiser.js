"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Fundraiser = require("./Build/Fundraiser.json");

var _Fundraiser2 = _interopRequireDefault(_Fundraiser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Fundraiser2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmdW5kcmFpc2VyLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJGdW5kcmFpc2VyIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBdUIsQUFBdkIsQUFFQTs7Ozs7O2tCQUFlLG1CQUFXLEFBQ3hCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLHFCQUFXLEFBQXRCLEFBQXRCLFlBQXdELEFBQXhELEFBQVAsQUFDRDtBQUZEIiwiZmlsZSI6ImZ1bmRyYWlzZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGlvdHIucnlzemV3c2tpL0RvY3VtZW50cy9Qcm9qZWN0cy9GdW5kcmFpc2VyIn0=