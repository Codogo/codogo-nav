"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var linksStyle = [(0, _styledComponents.css)(["align-items:center;background:", ";left:0;position:absolute;right:0;top:", ";transform:translateY(", "%);transition:0.3s all ease-out;", ";"], function (props) {
	return props.backgroundColor.xs;
}, function (props) {
	return props.topOffset.xs;
}, function (props) {
	return props.open ? 0 : -150;
}, (0, _codogoUtilityFunctions.shadow)(2)), (0, _styledComponents.css)(["justify-self:flex-end;display:flex;align-items:center;order:2;"])];

var LinksWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Links__LinksWrapper"
})(["", ";", ";"], (0, _codogoUtilityFunctions.xs)(_templateObject, linksStyle[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, linksStyle[1]));

var linkStyle = [(0, _styledComponents.css)(["display:block;padding:", ";border-bottom:1px solid ", ";color:", ";"], function (props) {
	return props.padding.xs;
}, (0, _codogoUtilityFunctions.transparent)(0.1), function (props) {
	return props.color.xs;
}), (0, _styledComponents.css)(["letter-spacing:0.1em;color:", ";height:100%;display:flex;justify-content:center;align-items:center;a{display:flex;height:100%;flex-direction:row;justify-content:center;align-items:center;padding:0 ", ";&.active{padding-top:3px;border-bottom:", ";}}&:hover{a{padding-top:3px;text-decoration:", ";border-bottom:", ";}}"], function (props) {
	return props.color.other;
}, function (props) {
	return props.padding.other;
}, function (props) {
	return props.underlineColor && "3px solid " + props.underlineColor;
}, function (props) {
	return !props.underlineColor && "underline";
}, function (props) {
	return props.underlineColor && "3px solid " + props.underlineColor;
})];

var LinkWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Links__LinkWrapper"
})(["", ";", ";font-family:", ";", ";", ";a{", ";&.active{", ";font-weight:bold;}}"], function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("text-transform", props.textTransform);
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("font-size", props.fontSize);
}, function (props) {
	return props.font;
}, (0, _codogoUtilityFunctions.xs)(_templateObject, linkStyle[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, linkStyle[1]), _codogoUtilityFunctions.clearfix.link, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("color", props.color);
});

// --------------------------------------------------

var Links = function Links(props) {
	return _react2.default.createElement(
		LinksWrapper,
		{
			open: props.open,
			backgroundColor: props.backgroundColor,
			fontSize: props.fontSize,
			font: props.font,
			topOffset: props.topOffset
		},
		props.children.map(function (navlink, i) {
			return navlink.notLink === true ? _react2.default.createElement(
				"div",
				{ key: "navlink" + i },
				navlink
			) : _react2.default.createElement(
				LinkWrapper,
				(0, _extends3.default)({ key: "navlink" + i, underlineColor: "red" }, props),
				navlink
			);
		})
	);
};

Links.displayName = "Links";
exports.default = Links;