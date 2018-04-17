"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _slugify = require("slugify");

var _slugify2 = _interopRequireDefault(_slugify);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var _DropdownLink = require("./DropdownLink");

var _DropdownLink2 = _interopRequireDefault(_DropdownLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var dropdownStyle = [(0, _styledComponents.css)(["background:none;flex-direction:column;display:flex;max-height:99em;opacity:1;height:auto;overflow:hidden;transition:opacity .5s linear,max-height .5s linear;"]), (0, _styledComponents.css)(["background:white;display:none;flex-direction:column;position:absolute;", ";", ";", ";"], function (props) {
	return props.clear && "border-radius: 3px";
}, (0, _codogoUtilityFunctions.shadow)(2), function (props) {
	return props.height && "top: " + props.height.other;
})];

var Dropdown = _styledComponents2.default.div.withConfig({
	displayName: "DropdownLinks__Dropdown"
})(["", ";", ";"], (0, _codogoUtilityFunctions.xs)(_templateObject, dropdownStyle[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, dropdownStyle[1]));

// --------------------------------------------------

var DropdownLinks = function DropdownLinks(props) {
	return _react2.default.createElement(
		Dropdown,
		{
			className: "navlink-dropdown",
			height: props.height,
			clear: props.clear
		},
		props.dropdown.map(function (dropdownLink, i) {
			return _react2.default.createElement(_DropdownLink2.default, {
				key: (0, _slugify2.default)(dropdownLink.content, { lower: true }) + "-" + i,
				as: dropdownLink.as,
				content: dropdownLink.content,
				to: dropdownLink.to,
				underlineColor: props.underlineColor,
				padding: props.padding,
				color: props.highlightColor,
				close: props.close,
				clear: props.clear
			});
		})
	);
};

DropdownLinks.displayName = "DropdownLinks";
exports.default = DropdownLinks;