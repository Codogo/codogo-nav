"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["padding: 0 1em; "], ["padding: 0 1em; "]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["padding: 0 3em; "], ["padding: 0 3em; "]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t"], ["\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["display: none;"], ["display: none;"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n\t\tposition: absolute;\n\t\tmax-width: 60%;\n\t"], ["\n\t\tposition: absolute;\n\t\tmax-width: 60%;\n\t"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Links = require("./Links");

var _Links2 = _interopRequireDefault(_Links);

var _Burger = require("./Burger");

var _Burger2 = _interopRequireDefault(_Burger);

var _Fade = require("./Fade");

var _Fade2 = _interopRequireDefault(_Fade);

var _codogoUtilityFunctions = require("codogo-utility-functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var NavContainer = _styledComponents2.default.div.withConfig({
	displayName: "Nav__NavContainer"
})(["", ";", ";", " z-index:10;"], function (props) {
	return props.fixed && "\n\t\t\tposition: fixed;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\ttop: 0;\n\t\t";
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("height", props.height);
}, function (props) {
	return props.clear && "height: 0 !important;";
});

var NavWrapper = _styledComponents2.default.nav.withConfig({
	displayName: "Nav__NavWrapper"
})(["z-index:5;left:0;position:absolute;right:0;top:0;", ";", ";", ";", ";", ";"], function (props) {
	return !props.clear && (0, _codogoUtilityFunctions.bpEither)("background-color", props.backgroundColor);
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("height", props.height);
}, (0, _codogoUtilityFunctions.sm)(_templateObject), _codogoUtilityFunctions.bp.md.min(_templateObject2), function (props) {
	return props.shadow && (0, _codogoUtilityFunctions.shadow)(1);
});

var NavInner = _styledComponents2.default.div.withConfig({
	displayName: "Nav__NavInner"
})(["width:100%;height:100%;position:relative;", ";"], _codogoUtilityFunctions.bp.sm.min(_templateObject3));

var MobileContent = _styledComponents2.default.div.withConfig({
	displayName: "Nav__MobileContent"
})(["", ";", ";"], _codogoUtilityFunctions.bp.sm.min(_templateObject4), (0, _codogoUtilityFunctions.contained)());

var Dark = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Dark"
})(["background:", ";position:fixed;", ";"], (0, _codogoUtilityFunctions.transparent)(0.5), (0, _codogoUtilityFunctions.contained)());

var Overlay = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Overlay"
})(["", ";", ";transition:0.3s all ease-out;", ";"], (0, _codogoUtilityFunctions.contained)(), function (_ref) {
	var open = _ref.open;
	return open ? (0, _codogoUtilityFunctions.shadow)(1) : "";
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("background-color", props.backgroundColor);
});

var BurgerWrapper = _styledComponents2.default.div.withConfig({
	displayName: "Nav__BurgerWrapper"
})(["position:absolute;right:0;top:50%;margin-top:-20px;"]);

var Logo = _styledComponents2.default.div.withConfig({
	displayName: "Nav__Logo"
})(["align-items:center;display:flex;font-family:", ";max-width:30%;order:1;padding-left:1em;", ";", ";"], function (props) {
	return props.font;
}, function (props) {
	return (0, _codogoUtilityFunctions.bpEither)("height", props.height);
}, (0, _codogoUtilityFunctions.xs)(_templateObject5));

// -------------------------------

var Nav = function (_React$Component) {
	(0, _inherits3.default)(Nav, _React$Component);

	function Nav(props) {
		(0, _classCallCheck3.default)(this, Nav);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

		_this.state = {
			open: false
		};
		return _this;
	}

	(0, _createClass3.default)(Nav, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				NavContainer,
				{
					height: this.props.height,
					fixed: this.props.fixed || false,
					clear: this.props.clear || false
				},
				_react2.default.createElement(
					NavWrapper,
					{
						height: this.props.height,
						backgroundColor: this.props.backgroundColor,
						clear: this.props.clear || false,
						shadow: this.props.shadow || false
					},
					_react2.default.createElement(
						NavInner,
						null,
						_react2.default.createElement(
							MobileContent,
							null,
							_react2.default.createElement(
								_Fade2.default,
								{ visible: this.state.open },
								_react2.default.createElement(Dark, {
									onClick: function onClick() {
										return _this2.setState({
											open: false
										});
									}
								})
							)
						),
						_react2.default.createElement(
							_Links2.default,
							(0, _extends3.default)({
								close: function close() {
									return _this2.setState({
										open: false
									});
								}
							}, this.props, this.state),
							this.props.children
						),
						_react2.default.createElement(
							MobileContent,
							null,
							_react2.default.createElement(Overlay, (0, _extends3.default)({
								backgroundColor: this.props.backgroundColor
							}, this.state)),
							_react2.default.createElement(
								BurgerWrapper,
								{
									onClick: function onClick() {
										return _this2.setState({
											open: !_this2.state.open
										});
									}
								},
								_react2.default.createElement(_Burger2.default, (0, _extends3.default)({
									highlightColor: this.props.highlightColor,
									backgroundColor: this.props.backgroundColor
								}, this.state))
							)
						),
						_react2.default.createElement(
							Logo,
							{ font: this.props.font, height: this.props.height },
							this.props.logo
						)
					)
				)
			);
		}
	}]);
	return Nav;
}(_react2.default.Component);

Nav.displayName = "Nav";
exports.default = Nav;


Nav.defaultProps = {
	padding: {
		xs: "0.75em",
		other: "1em"
	},
	color: {
		xs: "#333",
		other: "#333"
	},
	highlightColor: {
		xs: "#888",
		other: "#888"
	},
	backgroundColor: {
		xs: "#333",
		other: "#333"
	},
	height: {
		xs: "50px",
		other: "70px"
	},
	font: "sans-serif",
	fontSize: {
		xs: "0.8em",
		other: "1.1em"
	},
	textTransform: {
		xs: "none",
		other: "none"
	},
	topOffset: {
		xs: "50px",
		other: "70px"
	},
	margin: {
		xs: "20px",
		other: "30px"
	}
};