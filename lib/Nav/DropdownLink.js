"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _codogoUtilityFunctions = require("codogo-utility-functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var LinkStyles = [(0, _styledComponents.css)(["display:block;padding:", ";padding-left:2em;color:", ";padding:0.5em 1em;opacity:0.8;&:hover{color:", ";text-decoration:underline;}"], function (props) {
	return props.padding.xs;
}, function (props) {
	return props.color.xs;
}, function (props) {
	return props.color.xs;
}), (0, _styledComponents.css)(["align-items:center;color:black;display:flex;flex-direction:row;height:100%;justify-content:center;letter-spacing:0.1em;padding:0.5em ", ";justify-content:left;", ";&.active{color:black;padding-top:", ";border-bottom:", ";}&:hover{color:black;text-decoration:underline;padding-top:", ";text-decoration:", ";border-bottom:", ";}"], function (props) {
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

// --------------------------------------------------

var DropdownLink = function (_Component) {
	(0, _inherits3.default)(DropdownLink, _Component);

	function DropdownLink() {
		(0, _classCallCheck3.default)(this, DropdownLink);
		return (0, _possibleConstructorReturn3.default)(this, (DropdownLink.__proto__ || Object.getPrototypeOf(DropdownLink)).apply(this, arguments));
	}

	(0, _createClass3.default)(DropdownLink, [{
		key: "render",
		value: function render() {
			var Link = this.props.as || "a";

			var StyledLink = (0, _styledComponents2.default)(Link).withConfig({
				displayName: "DropdownLink__StyledLink"
			})(["", ";", ";"], (0, _codogoUtilityFunctions.xs)(_templateObject, LinkStyles[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, LinkStyles[1]));

			return _react2.default.createElement(
				StyledLink,
				{
					to: this.props.to,
					href: this.props.to,
					underlineColor: this.props.underlineColor,
					padding: this.props.padding,
					color: this.props.color,
					onclick: this.props.close
				},
				this.props.content
			);
		}
	}]);
	return DropdownLink;
}(_react.Component);

DropdownLink.displayName = "DropdownLink";
exports.default = DropdownLink;