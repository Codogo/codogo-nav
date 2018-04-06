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

var _codogoUtilityFunctions = require("codogo-utility-functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var dropdownStyle = [(0, _styledComponents.css)(["background:none;flex-direction:column;display:flex;width:50%;max-height:99em;opacity:1;height:auto;overflow:hidden;transition:opacity .5s linear,max-height .5s linear;p{padding:10px;margin:0;}> a{color:#fff;}> div{display:flex;flex-direction:column;> a{color:white;padding:0.5em 1em;opacity:0.8;&:hover{text-decoration:underline;}}}"]), (0, _styledComponents.css)(["background:white;border-radius:3px;display:none;flex-direction:column;margin-top:0.5em;position:absolute;", ";top:5em;", ";> a{color:#333;}> div{display:flex;flex-direction:column;> a{color:black;padding:0.5em 1em;&:hover{text-decoration:underline;}}}"], (0, _codogoUtilityFunctions.shadow)(2), function (props) {
	return props.height && "top: " + props.height;
})];

var Dropdown = _styledComponents2.default.div.withConfig({
	displayName: "DropdownLinks__Dropdown"
})(["", ";", ";"], (0, _codogoUtilityFunctions.xs)(_templateObject, dropdownStyle[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, dropdownStyle[1]));

var linkStyle = [(0, _styledComponents.css)(["display:block;padding:", ";border-bottom:1px solid ", ";color:", ";"], function (props) {
	return props.padding.xs;
}, (0, _codogoUtilityFunctions.transparent)(0.1), function (props) {
	return props.highlightColor.xs;
}), (0, _styledComponents.css)(["letter-spacing:0.1em;color:", ";height:100%;display:flex;justify-content:center;align-items:center;> a{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 ", ";", ";&.active{padding-top:", ";border-bottom:", ";}}&:hover{> a{padding-top:", ";text-decoration:", ";border-bottom:", ";}}"], function (props) {
	return props.highlightColor.other;
}, function (props) {
	return props.padding.other;
}, function (props) {
	return props.underlineColor && "height: 100%";
}, function (props) {
	return props.underlineColor && "3px";
}, function (props) {
	return props.underlineColor && "3px solid " + props.underlineColor;
}, function (props) {
	return props.underlineColor && "3px";
}, function (props) {
	return !props.underlineColor && "underline";
}, function (props) {
	return props.underlineColor && "3px solid " + props.underlineColor;
})];

var DropdownLink = _styledComponents2.default.div.withConfig({
	displayName: "DropdownLinks__DropdownLink"
})(["", ";", ";font-family:", " a{", ";", ";}> .active{font-weight:bold;}", ";", ";"], function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("text-transform", props.textTransform);
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("font-size", props.fontSize);
}, function (props) {
	return props.font;
}, _codogoUtilityFunctions.clearfix.link, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("color", props.color);
}, (0, _codogoUtilityFunctions.xs)(_templateObject, linkStyle[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, linkStyle[1]));

// --------------------------------------------------

var DropdownLinks = function DropdownLinks(props) {
	return _react2.default.createElement(
		Dropdown,
		{
			className: "navlink-dropdown",
			height: props.height
		},
		props.dropdown
	);
};

DropdownLinks.displayName = "DropdownLinks";
exports.default = DropdownLinks;