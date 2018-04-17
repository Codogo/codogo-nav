"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Fader = undefined;

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

var _reactAddonsTransitionGroup = require("react-addons-transition-group");

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _velocityAnimate = require("velocity-animate");

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var FadeBox = _styledComponents2.default.div.withConfig({
	displayName: "Fade__FadeBox"
})(["height:100vh;background-color:black;"]);

var Fader = exports.Fader = function (_React$Component) {
	(0, _inherits3.default)(Fader, _React$Component);

	function Fader(props) {
		(0, _classCallCheck3.default)(this, Fader);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Fader.__proto__ || Object.getPrototypeOf(Fader)).call(this, props));

		_this.defaultProps = {
			fadeDuration: 300
		};

		_this.ref = _this.ref.bind(_this);
		["fadeIn", "fadeOut", "slideDown", "slideUp"].map(function (name) {
			return _this[name] = _this[name].bind(_this);
		});
		return _this;
	}

	(0, _createClass3.default)(Fader, [{
		key: "fadeIn",
		value: function fadeIn(cb) {
			(0, _velocityAnimate2.default)(this._wrapper, {
				opacity: 1
			}, {
				duration: this.props.fadeDuration,
				complete: cb,
				mobileHA: false
			});
		}
	}, {
		key: "fadeOut",
		value: function fadeOut(cb) {
			(0, _velocityAnimate2.default)(this._wrapper, {
				opacity: 0
			}, {
				duration: this.props.fadeDuration,
				complete: cb,
				mobileHA: false
			});
		}
	}, {
		key: "slideDown",
		value: function slideDown(cb) {
			(0, _velocityAnimate2.default)(this._wrapper, {
				maxHeight: "1000px"
			}, {
				duration: this.props.fadeDuration,
				complete: cb
			});
		}
	}, {
		key: "slideUp",
		value: function slideUp(cb) {
			(0, _velocityAnimate2.default)(this._wrapper, {
				maxHeight: 0
			}, {
				duration: this.props.fadeDuration,
				complete: cb
			});
		}
	}, {
		key: "componentWillEnter",
		value: function componentWillEnter(cb) {
			var _this2 = this;

			try {
				// this._wrapper.style.opacity = 0;
				// Velocity(
				// 	this._wrapper,
				// 	{
				// 		opacity: 1,
				// 	},
				// 	{
				// 		duration: this.props.fadeDuration,
				// 		complete: cb,
				// 		mobileHA: false,
				// 	}
				// );

				this._wrapper.style.opacity = 0;
				if (this.props.slide) {
					this._wrapper.style.maxHeight = 0;
					this.slideDown(function () {
						return _this2.fadeIn(cb);
					});
				} else {
					this.fadeIn(cb);
				}
			} catch (err) {
				console.log("something went wrong with componentWillEnter");
				cb();
			}
		}
	}, {
		key: "componentWillLeave",
		value: function componentWillLeave(cb) {
			var _this3 = this;

			try {
				if (this.props.slide) {
					this.fadeOut(function () {
						return _this3.slideUp(cb);
					});
				} else {
					this.fadeOut(cb);
				}
			} catch (err) {
				console.log("something went wrong with componentWillLeave");
				cb();
			}
		}
	}, {
		key: "ref",
		value: function ref(comp) {
			this._wrapper = comp || this._wrapper;
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				FadeBox,
				{ ref: this.ref },
				this.props.children
			);
		}
	}]);
	return Fader;
}(_react2.default.Component);

Fader.displayName = "Fader";


// --------------------------------------------------

var FirstChild = function FirstChild(props) {
	return _react2.default.Children.toArray(props.children)[0] || null;
};

// --------------------------------------------------

exports.default = function (props) {
	return _react2.default.createElement(
		_reactAddonsTransitionGroup2.default,
		{ component: FirstChild },
		props.visible ? _react2.default.createElement(
			Fader,
			{ fadeDuration: props.fadeDuration, slide: props.slide },
			props.children
		) : null
	);
};