exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 6808:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ 143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports ConditionalWrapper, CookieConsent, OPTIONS, POSITION_OPTIONS, SAME_SITE_OPTIONS, VISIBILITY_OPTIONS, VISIBLE_OPTIONS, defaultCookieConsentName, getCookieConsentValue, getLegacyCookieName, resetCookieConsentValue */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6808);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(826);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




/**
 * A function to wrap elements with a "wrapper" on a condition
 * @param {object} wrappingOptions
 *  condition == boolean condition, when to wrap
 *  wrapper == style to wrap. e.g <div>{children}</div>
 *  children == react passes whatever is between tags as children. Don't supply this yourself.
 */
var ConditionalWrapper = function ConditionalWrapper(_ref) {
  var condition = _ref.condition,
    wrapper = _ref.wrapper,
    children = _ref.children;
  return condition ? wrapper(children) : children;
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var POSITION_OPTIONS = {
  TOP: "top",
  BOTTOM: "bottom",
  NONE: "none"
};

var SAME_SITE_OPTIONS;
(function (SAME_SITE_OPTIONS) {
  SAME_SITE_OPTIONS["STRICT"] = "strict";
  SAME_SITE_OPTIONS["LAX"] = "lax";
  SAME_SITE_OPTIONS["NONE"] = "none";
})(SAME_SITE_OPTIONS || (SAME_SITE_OPTIONS = {}));

var VISIBILITY_OPTIONS = {
  HIDDEN: "hidden",
  SHOW: "show",
  BY_COOKIE_VALUE: "byCookieValue"
};

var defaultCookieConsentName = "CookieConsent";

var _excluded = ["children"];
var DefaultButtonComponent = function DefaultButtonComponent(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", Object.assign({}, props), children);
};
var defaultCookieConsentProps = {
  disableStyles: false,
  hideOnAccept: true,
  hideOnDecline: true,
  location: POSITION_OPTIONS.BOTTOM,
  visible: VISIBILITY_OPTIONS.BY_COOKIE_VALUE,
  onAccept: function onAccept(_acceptedByScrolling) {},
  onDecline: function onDecline() {},
  cookieName: defaultCookieConsentName,
  cookieValue: "true",
  declineCookieValue: "false",
  setDeclineCookie: true,
  buttonText: "I understand",
  declineButtonText: "I decline",
  debug: false,
  expires: 365,
  containerClasses: "CookieConsent",
  contentClasses: "",
  buttonClasses: "",
  buttonWrapperClasses: "",
  declineButtonClasses: "",
  buttonId: "rcc-confirm-button",
  declineButtonId: "rcc-decline-button",
  extraCookieOptions: {},
  disableButtonStyles: false,
  enableDeclineButton: false,
  flipButtons: false,
  sameSite: SAME_SITE_OPTIONS.LAX,
  ButtonComponent: DefaultButtonComponent,
  overlay: false,
  overlayClasses: "",
  onOverlayClick: function onOverlayClick() {},
  acceptOnOverlayClick: false,
  ariaAcceptLabel: "Accept cookies",
  ariaDeclineLabel: "Decline cookies",
  acceptOnScroll: false,
  acceptOnScrollPercentage: 25,
  customContentAttributes: {},
  customContainerAttributes: {},
  customButtonProps: {},
  customDeclineButtonProps: {},
  customButtonWrapperAttributes: {},
  style: {},
  buttonStyle: {},
  declineButtonStyle: {},
  contentStyle: {},
  overlayStyle: {}
};

var defaultState = {
  visible: false,
  style: {
    alignItems: "baseline",
    background: "#353535",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    left: "0",
    position: "fixed",
    width: "100%",
    zIndex: "999"
  },
  buttonStyle: {
    background: "#ffd42d",
    border: "0",
    borderRadius: "0px",
    boxShadow: "none",
    color: "black",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "5px 10px",
    margin: "15px"
  },
  declineButtonStyle: {
    background: "#c12a2a",
    border: "0",
    borderRadius: "0px",
    boxShadow: "none",
    color: "#e5e5e5",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "5px 10px",
    margin: "15px"
  },
  contentStyle: {
    flex: "1 0 300px",
    margin: "15px"
  },
  overlayStyle: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: "999",
    backgroundColor: "rgba(0,0,0,0.3)"
  }
};

/**
 * Returns the value of the consent cookie
 * Retrieves the regular value first and if not found the legacy one according
 * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 * @param {*} name optional name of the cookie
 */
var getCookieConsentValue = function getCookieConsentValue(name) {
  if (name === void 0) {
    name = defaultCookieConsentName;
  }
  var cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get(name);
  // if the cookieValue is undefined check for the legacy cookie
  if (cookieValue === undefined) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get(getLegacyCookieName(name));
  }
  return cookieValue;
};
/**
 * Reset the consent cookie
 * Remove the cookie on browser in order to allow user to change their consent
 * @param {*} name optional name of the cookie
 */
var resetCookieConsentValue = function resetCookieConsentValue(name) {
  if (name === void 0) {
    name = defaultCookieConsentName;
  }
  Cookies.remove(name);
};
/**
 * Get the legacy cookie name by the regular cookie name
 * @param {string} name of cookie to get
 */
var getLegacyCookieName = function getLegacyCookieName(name) {
  return name + "-legacy";
};

var CookieConsent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CookieConsent, _Component);
  function CookieConsent() {
    var _this;
    _this = _Component.apply(this, arguments) || this;
    _this.state = defaultState;
    /**
     * checks whether scroll has exceeded set amount and fire accept if so.
     */
    _this.handleScroll = function () {
      var _defaultCookieConsent = _extends({}, defaultCookieConsentProps, _this.props),
        acceptOnScrollPercentage = _defaultCookieConsent.acceptOnScrollPercentage;
      // (top / height) - height * 100
      var rootNode = document.documentElement;
      var body = document.body;
      var top = "scrollTop";
      var height = "scrollHeight";
      var percentage = (rootNode[top] || body[top]) / ((rootNode[height] || body[height]) - rootNode.clientHeight) * 100;
      if (percentage > acceptOnScrollPercentage) {
        _this.accept(true);
      }
    };
    _this.removeScrollListener = function () {
      var acceptOnScroll = _this.props.acceptOnScroll;
      if (acceptOnScroll) {
        window.removeEventListener("scroll", _this.handleScroll);
      }
    };
    return _this;
  }
  var _proto = CookieConsent.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var debug = this.props.debug;
    // if cookie undefined or debug
    if (this.getCookieValue() === undefined || debug) {
      this.setState({
        visible: true
      });
      // if acceptOnScroll is set to true and (cookie is undefined or debug is set to true), add a listener.
      if (this.props.acceptOnScroll) {
        window.addEventListener("scroll", this.handleScroll, {
          passive: true
        });
      }
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    // remove listener if still set
    this.removeScrollListener();
  }
  /**
   * Set a persistent accept cookie
   */;
  _proto.accept = function accept(acceptedByScrolling) {
    var _acceptedByScrolling;
    if (acceptedByScrolling === void 0) {
      acceptedByScrolling = false;
    }
    var _defaultCookieConsent2 = _extends({}, defaultCookieConsentProps, this.props),
      cookieName = _defaultCookieConsent2.cookieName,
      cookieValue = _defaultCookieConsent2.cookieValue,
      hideOnAccept = _defaultCookieConsent2.hideOnAccept,
      onAccept = _defaultCookieConsent2.onAccept;
    this.setCookie(cookieName, cookieValue);
    onAccept((_acceptedByScrolling = acceptedByScrolling) != null ? _acceptedByScrolling : false);
    if (hideOnAccept) {
      this.setState({
        visible: false
      });
      this.removeScrollListener();
    }
  }
  /**
   * Handle a click on the overlay
   */;
  _proto.overlayClick = function overlayClick() {
    var _defaultCookieConsent3 = _extends({}, defaultCookieConsentProps, this.props),
      acceptOnOverlayClick = _defaultCookieConsent3.acceptOnOverlayClick,
      onOverlayClick = _defaultCookieConsent3.onOverlayClick;
    if (acceptOnOverlayClick) {
      this.accept();
    }
    onOverlayClick();
  }
  /**
   * Set a persistent decline cookie
   */;
  _proto.decline = function decline() {
    var _defaultCookieConsent4 = _extends({}, defaultCookieConsentProps, this.props),
      cookieName = _defaultCookieConsent4.cookieName,
      declineCookieValue = _defaultCookieConsent4.declineCookieValue,
      hideOnDecline = _defaultCookieConsent4.hideOnDecline,
      onDecline = _defaultCookieConsent4.onDecline,
      setDeclineCookie = _defaultCookieConsent4.setDeclineCookie;
    if (setDeclineCookie) {
      this.setCookie(cookieName, declineCookieValue);
    }
    onDecline();
    if (hideOnDecline) {
      this.setState({
        visible: false
      });
    }
  }
  /**
   * Function to set the consent cookie based on the provided variables
   * Sets two cookies to handle incompatible browsers, more details:
   * https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
   */;
  _proto.setCookie = function setCookie(cookieName, cookieValue) {
    var _this$props = this.props,
      extraCookieOptions = _this$props.extraCookieOptions,
      expires = _this$props.expires,
      sameSite = _this$props.sameSite;
    var cookieSecurity = this.props.cookieSecurity;
    if (cookieSecurity === undefined) {
      cookieSecurity = window.location ? window.location.protocol === "https:" : true;
    }
    var cookieOptions = _extends({
      expires: expires
    }, extraCookieOptions, {
      sameSite: sameSite,
      secure: cookieSecurity
    });
    // Fallback for older browsers where can not set SameSite=None,
    // SEE: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
    if (sameSite === SAME_SITE_OPTIONS.NONE) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set(getLegacyCookieName(cookieName), cookieValue, cookieOptions);
    }
    // set the regular cookie
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set(cookieName, cookieValue, cookieOptions);
  }
  /**
   * Returns the value of the consent cookie
   * Retrieves the regular value first and if not found the legacy one according
   * to: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
   */;
  _proto.getCookieValue = function getCookieValue() {
    var cookieName = this.props.cookieName;
    return getCookieConsentValue(cookieName);
  };
  _proto.render = function render() {
    var _this2 = this;
    // If the bar shouldn't be visible don't render anything.
    switch (this.props.visible) {
      case VISIBILITY_OPTIONS.HIDDEN:
        return null;
      case VISIBILITY_OPTIONS.BY_COOKIE_VALUE:
        if (!this.state.visible) {
          return null;
        }
        break;
    }
    var _this$props2 = this.props,
      location = _this$props2.location,
      style = _this$props2.style,
      buttonStyle = _this$props2.buttonStyle,
      declineButtonStyle = _this$props2.declineButtonStyle,
      contentStyle = _this$props2.contentStyle,
      disableStyles = _this$props2.disableStyles,
      buttonText = _this$props2.buttonText,
      declineButtonText = _this$props2.declineButtonText,
      containerClasses = _this$props2.containerClasses,
      contentClasses = _this$props2.contentClasses,
      buttonClasses = _this$props2.buttonClasses,
      buttonWrapperClasses = _this$props2.buttonWrapperClasses,
      declineButtonClasses = _this$props2.declineButtonClasses,
      buttonId = _this$props2.buttonId,
      declineButtonId = _this$props2.declineButtonId,
      disableButtonStyles = _this$props2.disableButtonStyles,
      enableDeclineButton = _this$props2.enableDeclineButton,
      flipButtons = _this$props2.flipButtons,
      ButtonComponent = _this$props2.ButtonComponent,
      overlay = _this$props2.overlay,
      overlayClasses = _this$props2.overlayClasses,
      overlayStyle = _this$props2.overlayStyle,
      ariaAcceptLabel = _this$props2.ariaAcceptLabel,
      ariaDeclineLabel = _this$props2.ariaDeclineLabel,
      customContainerAttributes = _this$props2.customContainerAttributes,
      customContentAttributes = _this$props2.customContentAttributes,
      customButtonProps = _this$props2.customButtonProps,
      customDeclineButtonProps = _this$props2.customDeclineButtonProps,
      customButtonWrapperAttributes = _this$props2.customButtonWrapperAttributes;
    var myStyle = {};
    var myButtonStyle = {};
    var myDeclineButtonStyle = {};
    var myContentStyle = {};
    var myOverlayStyle = {};
    if (disableStyles) {
      // if styles are disabled use the provided styles (or none)
      myStyle = Object.assign({}, style);
      myButtonStyle = Object.assign({}, buttonStyle);
      myDeclineButtonStyle = Object.assign({}, declineButtonStyle);
      myContentStyle = Object.assign({}, contentStyle);
      myOverlayStyle = Object.assign({}, overlayStyle);
    } else {
      // if styles aren't disabled merge them with the styles that are provided (or use default styles)
      myStyle = Object.assign({}, _extends({}, this.state.style, style));
      myContentStyle = Object.assign({}, _extends({}, this.state.contentStyle, contentStyle));
      myOverlayStyle = Object.assign({}, _extends({}, this.state.overlayStyle, overlayStyle));
      // switch to disable JUST the button styles
      if (disableButtonStyles) {
        myButtonStyle = Object.assign({}, buttonStyle);
        myDeclineButtonStyle = Object.assign({}, declineButtonStyle);
      } else {
        myButtonStyle = Object.assign({}, _extends({}, this.state.buttonStyle, buttonStyle));
        myDeclineButtonStyle = Object.assign({}, _extends({}, this.state.declineButtonStyle, declineButtonStyle));
      }
    }
    // syntactic sugar to enable user to easily select top / bottom
    switch (location) {
      case POSITION_OPTIONS.TOP:
        myStyle.top = "0";
        break;
      case POSITION_OPTIONS.BOTTOM:
        myStyle.bottom = "0";
        break;
    }
    var buttonsToRender = [];
    // add decline button
    enableDeclineButton && buttonsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ButtonComponent, Object.assign({
      key: "declineButton",
      style: myDeclineButtonStyle,
      className: declineButtonClasses,
      id: declineButtonId,
      "aria-label": ariaDeclineLabel,
      onClick: function onClick() {
        _this2.decline();
      }
    }, customDeclineButtonProps), declineButtonText));
    // add accept button
    buttonsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ButtonComponent, Object.assign({
      key: "acceptButton",
      style: myButtonStyle,
      className: buttonClasses,
      id: buttonId,
      "aria-label": ariaAcceptLabel,
      onClick: function onClick() {
        _this2.accept();
      }
    }, customButtonProps), buttonText));
    if (flipButtons) {
      buttonsToRender.reverse();
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ConditionalWrapper, {
      condition: overlay,
      wrapper: function wrapper(children) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
          style: myOverlayStyle,
          className: overlayClasses,
          onClick: function onClick() {
            _this2.overlayClick();
          }
        }, children);
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
      className: "" + containerClasses,
      style: myStyle
    }, customContainerAttributes), react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
      style: myContentStyle,
      className: contentClasses
    }, customContentAttributes), this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
      className: "" + buttonWrapperClasses
    }, customButtonWrapperAttributes), buttonsToRender.map(function (button) {
      return button;
    }))));
  };
  return CookieConsent;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
CookieConsent.defaultProps = defaultCookieConsentProps;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookieConsent);

//# sourceMappingURL=react-cookie-consent.esm.js.map


/***/ })

};
;
//# sourceMappingURL=143.js.map