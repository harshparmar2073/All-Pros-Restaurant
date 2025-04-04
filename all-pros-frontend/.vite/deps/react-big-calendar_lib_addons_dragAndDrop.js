import {
  activeElement,
  addEventListener_default,
  cancel,
  closest,
  closest_exports,
  clsx_m_exports,
  contains,
  contains_exports,
  css_default,
  getComputedStyle,
  getWidth,
  height,
  hyphenate,
  init_activeElement,
  init_addEventListener,
  init_animationFrame,
  init_closest,
  init_clsx_m,
  init_contains,
  init_css,
  init_getComputedStyle,
  init_height,
  init_hyphenate,
  init_isDocument,
  init_isTransform,
  init_isWindow,
  init_listen,
  init_matches,
  init_offset,
  init_offsetParent,
  init_ownerDocument,
  init_ownerWindow,
  init_position,
  init_querySelectorAll,
  init_removeEventListener,
  init_scrollLeft,
  init_scrollTop,
  init_scrollbarSize,
  init_width,
  isDocument,
  isTransform,
  isWindow,
  listen_default,
  listen_exports,
  matches,
  offset,
  offsetParent,
  ownerDocument,
  ownerWindow,
  position,
  qsa,
  removeEventListener_default,
  request,
  require_findIndex,
  require_isEqual,
  scrollLeft_default,
  scrollTop_default,
  scrollbarSize
} from "./chunk-UECUZQER.js";
import {
  addClass,
  hasClass,
  init_addClass,
  init_hasClass,
  init_removeClass,
  removeClass
} from "./chunk-XSYAKRO2.js";
import {
  require_prop_types
} from "./chunk-OABWRIQY.js";
import "./chunk-IIBYWUYD.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import "./chunk-72JO3JMQ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-LK32TJAX.js";

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    function toPrimitive(t, r) {
      if ("object" != _typeof(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey(t) {
      var i = toPrimitive(t, "string");
      return "symbol" == _typeof(i) ? i : i + "";
    }
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(e, r, t) {
      return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectSpread2.js
var require_objectSpread2 = __commonJS({
  "node_modules/@babel/runtime/helpers/objectSpread2.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
          defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose(r, e) {
      if (null == r) return {};
      var t = {};
      for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
      }
      return t;
    }
    module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var require_objectWithoutProperties = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutProperties.js"(exports, module) {
    var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
    function _objectWithoutProperties(e, t) {
      if (null == e) return {};
      var o, r, i = objectWithoutPropertiesLoose(e, t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
      }
      return i;
    }
    module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
    function _classCallCheck(a, n) {
      if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperties(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
      }
    }
    function _createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: false
      }), e;
    }
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/getPrototypeOf.js
var require_getPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/getPrototypeOf.js"(exports, module) {
    function _getPrototypeOf(t) {
      return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
        return t2.__proto__ || Object.getPrototypeOf(t2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
    }
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js
var require_isNativeReflectConstruct = __commonJS({
  "node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js"(exports, module) {
    function _isNativeReflectConstruct() {
      try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (t2) {
      }
      return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct2() {
        return !!t;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
    }
    module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  "node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
    function _assertThisInitialized(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    var assertThisInitialized = require_assertThisInitialized();
    function _possibleConstructorReturn(t, e) {
      if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
      if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
      return assertThisInitialized(t);
    }
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/callSuper.js
var require_callSuper = __commonJS({
  "node_modules/@babel/runtime/helpers/callSuper.js"(exports, module) {
    var getPrototypeOf = require_getPrototypeOf();
    var isNativeReflectConstruct = require_isNativeReflectConstruct();
    var possibleConstructorReturn = require_possibleConstructorReturn();
    function _callSuper(t, o, e) {
      return o = getPrototypeOf(o), possibleConstructorReturn(t, isNativeReflectConstruct() ? Reflect.construct(o, e || [], getPrototypeOf(t).constructor) : o.apply(t, e));
    }
    module.exports = _callSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(t, e) {
      return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
        return t2.__proto__ = e2, t2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/@babel/runtime/helpers/inherits.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(t, "prototype", {
        writable: false
      }), e && setPrototypeOf(t, e);
    }
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/react-big-calendar/lib/utils/constants.js
var require_constants = __commonJS({
  "node_modules/react-big-calendar/lib/utils/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.views = exports.navigate = void 0;
    var navigate = exports.navigate = {
      PREVIOUS: "PREV",
      NEXT: "NEXT",
      TODAY: "TODAY",
      DATE: "DATE"
    };
    var views = exports.views = {
      MONTH: "month",
      WEEK: "week",
      WORK_WEEK: "work_week",
      DAY: "day",
      AGENDA: "agenda"
    };
  }
});

// node_modules/react-big-calendar/lib/utils/propTypes.js
var require_propTypes = __commonJS({
  "node_modules/react-big-calendar/lib/utils/propTypes.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.views = exports.dateRangeFormat = exports.dateFormat = exports.accessor = exports.DayLayoutAlgorithmPropType = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _constants = require_constants();
    var viewNames = Object.keys(_constants.views).map(function(k) {
      return _constants.views[k];
    });
    var accessor = exports.accessor = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);
    var dateFormat = exports.dateFormat = _propTypes.default.any;
    var dateRangeFormat = exports.dateRangeFormat = _propTypes.default.func;
    var views = exports.views = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(viewNames)), _propTypes.default.objectOf(function(prop, key) {
      var isBuiltinView = viewNames.indexOf(key) !== -1 && typeof prop[key] === "boolean";
      if (isBuiltinView) {
        return null;
      } else {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        return _propTypes.default.elementType.apply(_propTypes.default, [prop, key].concat(args));
      }
    })]);
    var DayLayoutAlgorithmPropType = exports.DayLayoutAlgorithmPropType = _propTypes.default.oneOfType([_propTypes.default.oneOf(["overlap", "no-overlap"]), _propTypes.default.func]);
  }
});

// node_modules/react-big-calendar/lib/utils/accessors.js
var require_accessors = __commonJS({
  "node_modules/react-big-calendar/lib/utils/accessors.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.accessor = accessor;
    exports.wrapAccessor = void 0;
    var _typeof2 = _interopRequireDefault(require_typeof());
    function accessor(data, field) {
      var value = null;
      if (typeof field === "function") value = field(data);
      else if (typeof field === "string" && (0, _typeof2.default)(data) === "object" && data != null && field in data) value = data[field];
      return value;
    }
    var wrapAccessor = exports.wrapAccessor = function wrapAccessor2(acc) {
      return function(data) {
        return accessor(data, acc);
      };
    };
  }
});

// node_modules/react-big-calendar/lib/addons/dragAndDrop/DnDContext.js
var require_DnDContext = __commonJS({
  "node_modules/react-big-calendar/lib/addons/dragAndDrop/DnDContext.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DnDContext = void 0;
    var _react = _interopRequireDefault(require_react());
    var DnDContext = exports.DnDContext = _react.default.createContext();
  }
});

// node_modules/react-big-calendar/lib/addons/dragAndDrop/EventWrapper.js
var require_EventWrapper = __commonJS({
  "node_modules/react-big-calendar/lib/addons/dragAndDrop/EventWrapper.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _callSuper2 = _interopRequireDefault(require_callSuper());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _react = _interopRequireDefault(require_react());
    var _clsx = _interopRequireDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var _accessors = require_accessors();
    var _DnDContext = require_DnDContext();
    var EventWrapper = function(_React$Component) {
      function EventWrapper2() {
        var _this;
        (0, _classCallCheck2.default)(this, EventWrapper2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = (0, _callSuper2.default)(this, EventWrapper2, [].concat(args));
        _this.handleResizeUp = function(e) {
          if (e.button !== 0) return;
          _this.context.draggable.onBeginAction(_this.props.event, "resize", "UP");
        };
        _this.handleResizeDown = function(e) {
          if (e.button !== 0) return;
          _this.context.draggable.onBeginAction(_this.props.event, "resize", "DOWN");
        };
        _this.handleResizeLeft = function(e) {
          if (e.button !== 0) return;
          _this.context.draggable.onBeginAction(_this.props.event, "resize", "LEFT");
        };
        _this.handleResizeRight = function(e) {
          if (e.button !== 0) return;
          _this.context.draggable.onBeginAction(_this.props.event, "resize", "RIGHT");
        };
        _this.handleStartDragging = function(e) {
          var _e$target$getAttribut;
          if (e.button !== 0) return;
          var isResizeHandle = (_e$target$getAttribut = e.target.getAttribute("class")) === null || _e$target$getAttribut === void 0 ? void 0 : _e$target$getAttribut.includes("rbc-addons-dnd-resize");
          if (!isResizeHandle) {
            var extendedEvent = (0, _objectSpread2.default)({}, _this.props.event);
            extendedEvent.sourceResource = _this.props.resource;
            _this.context.draggable.onBeginAction(_this.props.event, "move");
          }
        };
        return _this;
      }
      (0, _inherits2.default)(EventWrapper2, _React$Component);
      return (0, _createClass2.default)(EventWrapper2, [{
        key: "renderAnchor",
        value: function renderAnchor(direction) {
          var cls = direction === "Up" || direction === "Down" ? "ns" : "ew";
          return _react.default.createElement("div", {
            className: "rbc-addons-dnd-resize-".concat(cls, "-anchor"),
            onMouseDown: this["handleResize".concat(direction)]
          }, _react.default.createElement("div", {
            className: "rbc-addons-dnd-resize-".concat(cls, "-icon")
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props, event = _this$props.event, type = _this$props.type, continuesPrior = _this$props.continuesPrior, continuesAfter = _this$props.continuesAfter, resizable = _this$props.resizable;
          var children = this.props.children;
          if (event.__isPreview) return _react.default.cloneElement(children, {
            className: (0, _clsx.default)(children.props.className, "rbc-addons-dnd-drag-preview")
          });
          var draggable = this.context.draggable;
          var draggableAccessor = draggable.draggableAccessor, resizableAccessor = draggable.resizableAccessor;
          var isDraggable = draggableAccessor ? !!(0, _accessors.accessor)(event, draggableAccessor) : true;
          if (!isDraggable) {
            return children;
          }
          var isResizable = resizable && (resizableAccessor ? !!(0, _accessors.accessor)(event, resizableAccessor) : true);
          if (isResizable || isDraggable) {
            var newProps = {
              onMouseDown: this.handleStartDragging,
              onTouchStart: this.handleStartDragging
            };
            if (isResizable) {
              var StartAnchor = null;
              var EndAnchor = null;
              if (type === "date") {
                StartAnchor = !continuesPrior && this.renderAnchor("Left");
                EndAnchor = !continuesAfter && this.renderAnchor("Right");
              } else {
                StartAnchor = !continuesPrior && this.renderAnchor("Up");
                EndAnchor = !continuesAfter && this.renderAnchor("Down");
              }
              newProps.children = _react.default.createElement("div", {
                className: "rbc-addons-dnd-resizable"
              }, StartAnchor, children.props.children, EndAnchor);
            }
            if (draggable.dragAndDropAction.interacting && // if an event is being dragged right now
            draggable.dragAndDropAction.event === event) {
              newProps.className = (0, _clsx.default)(children.props.className, "rbc-addons-dnd-dragged-event");
            }
            children = _react.default.cloneElement(children, newProps);
          }
          return children;
        }
      }]);
    }(_react.default.Component);
    EventWrapper.contextType = _DnDContext.DnDContext;
    var _default = exports.default = EventWrapper;
  }
});

// node_modules/@babel/runtime/helpers/interopRequireWildcard.js
var require_interopRequireWildcard = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap) return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        "default": e
      };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e)) return t.get(e);
      var n = {
        __proto__: null
      }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n["default"] = e, t && t.set(e, n), n;
    }
    module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/dom-helpers/esm/triggerEvent.js
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }
  if (cancelable === void 0) {
    cancelable = true;
  }
  if (node) {
    var event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}
var init_triggerEvent = __esm({
  "node_modules/dom-helpers/esm/triggerEvent.js"() {
  }
});

// node_modules/dom-helpers/esm/transitionEnd.js
function parseDuration(node) {
  var str = css_default(node, "transitionDuration") || "";
  var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }
  var called = false;
  var handle = setTimeout(function() {
    if (!called) triggerEvent(element, "transitionend", true);
  }, duration + padding);
  var remove2 = listen_default(element, "transitionend", function() {
    called = true;
  }, {
    once: true
  });
  return function() {
    clearTimeout(handle);
    remove2();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove2 = listen_default(element, "transitionend", handler);
  return function() {
    removeEmulate();
    remove2();
  };
}
var init_transitionEnd = __esm({
  "node_modules/dom-helpers/esm/transitionEnd.js"() {
    init_css();
    init_listen();
    init_triggerEvent();
  }
});

// node_modules/dom-helpers/esm/animate.js
function _animate(_ref) {
  var node = _ref.node, properties = _ref.properties, _ref$duration = _ref.duration, duration = _ref$duration === void 0 ? 200 : _ref$duration, easing = _ref.easing, callback = _ref.callback;
  var cssProperties = [];
  var cssValues = {};
  var transforms = "";
  Object.keys(properties).forEach(function(key) {
    var value = properties[key];
    if (isTransform(key)) transforms += key + "(" + value + ") ";
    else {
      cssValues[key] = value;
      cssProperties.push(hyphenate(key));
    }
  });
  if (transforms) {
    cssValues.transform = transforms;
    cssProperties.push("transform");
  }
  function done(event) {
    if (event.target !== event.currentTarget) return;
    css_default(node, reset);
    if (callback) callback.call(this, event);
  }
  if (duration > 0) {
    cssValues.transition = cssProperties.join(", ");
    cssValues["transition-duration"] = duration / 1e3 + "s";
    cssValues["transition-delay"] = "0s";
    cssValues["transition-timing-function"] = easing || "linear";
  }
  var removeListener = transitionEnd(node, done, duration);
  node.clientLeft;
  css_default(node, cssValues);
  return {
    cancel: function cancel2() {
      removeListener();
      css_default(node, reset);
    }
  };
}
function animate(nodeOrOptions, properties, duration, easing, callback) {
  if (!("nodeType" in nodeOrOptions)) {
    return _animate(nodeOrOptions);
  }
  if (!properties) {
    throw new Error("must include properties to animate");
  }
  if (typeof easing === "function") {
    callback = easing;
    easing = "";
  }
  return _animate({
    node: nodeOrOptions,
    properties,
    duration,
    easing,
    callback
  });
}
var reset, animate_default;
var init_animate = __esm({
  "node_modules/dom-helpers/esm/animate.js"() {
    init_css();
    init_hyphenate();
    init_isTransform();
    init_transitionEnd();
    reset = {
      transition: "",
      "transition-duration": "",
      "transition-delay": "",
      "transition-timing-function": ""
    };
    animate_default = animate;
  }
});

// node_modules/dom-helpers/esm/attribute.js
function attribute(node, attr, val) {
  if (node) {
    if (typeof val === "undefined") {
      return node.getAttribute(attr);
    }
    if (!val && val !== "") {
      node.removeAttribute(attr);
    } else {
      node.setAttribute(attr, String(val));
    }
  }
}
var init_attribute = __esm({
  "node_modules/dom-helpers/esm/attribute.js"() {
  }
});

// node_modules/dom-helpers/esm/childElements.js
function childElements(node) {
  return node ? Array.from(node.children) : [];
}
var init_childElements = __esm({
  "node_modules/dom-helpers/esm/childElements.js"() {
  }
});

// node_modules/dom-helpers/esm/clear.js
function clear(node) {
  if (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    return node;
  }
  return null;
}
var init_clear = __esm({
  "node_modules/dom-helpers/esm/clear.js"() {
  }
});

// node_modules/dom-helpers/esm/childNodes.js
function childNodes(node) {
  return node ? toArray(node.childNodes) : [];
}
var toArray;
var init_childNodes = __esm({
  "node_modules/dom-helpers/esm/childNodes.js"() {
    toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
  }
});

// node_modules/dom-helpers/esm/filterEventHandler.js
function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget;
    var target = e.target;
    var matches2 = qsa(top, selector);
    if (matches2.some(function(match) {
      return contains(match, target);
    })) handler.call(this, e);
  };
}
var init_filterEventHandler = __esm({
  "node_modules/dom-helpers/esm/filterEventHandler.js"() {
    init_contains();
    init_querySelectorAll();
  }
});

// node_modules/dom-helpers/esm/insertAfter.js
function insertAfter(node, refNode) {
  if (node && refNode && refNode.parentNode) {
    if (refNode.nextSibling) {
      refNode.parentNode.insertBefore(node, refNode.nextSibling);
    } else {
      refNode.parentNode.appendChild(node);
    }
    return node;
  }
  return null;
}
var init_insertAfter = __esm({
  "node_modules/dom-helpers/esm/insertAfter.js"() {
  }
});

// node_modules/dom-helpers/esm/isInput.js
function isInput(node) {
  return node ? regExpInputs.test(node.nodeName) : false;
}
var regExpInputs;
var init_isInput = __esm({
  "node_modules/dom-helpers/esm/isInput.js"() {
    regExpInputs = /^(?:input|select|textarea|button)$/i;
  }
});

// node_modules/dom-helpers/esm/isVisible.js
function isVisible(node) {
  return node ? !!(node.offsetWidth || node.offsetHeight || node.getClientRects().length) : false;
}
var init_isVisible = __esm({
  "node_modules/dom-helpers/esm/isVisible.js"() {
  }
});

// node_modules/dom-helpers/esm/collectSiblings.js
function collectSiblings(node, refNode, selector) {
  if (refNode === void 0) {
    refNode = null;
  }
  if (selector === void 0) {
    selector = null;
  }
  var siblings2 = [];
  for (; node; node = node.nextElementSibling) {
    if (node !== refNode) {
      if (selector && matches(node, selector)) {
        break;
      }
      siblings2.push(node);
    }
  }
  return siblings2;
}
var init_collectSiblings = __esm({
  "node_modules/dom-helpers/esm/collectSiblings.js"() {
    init_matches();
  }
});

// node_modules/dom-helpers/esm/nextUntil.js
function nextUntil(node, selector) {
  return collectSiblings(node, node, selector);
}
var init_nextUntil = __esm({
  "node_modules/dom-helpers/esm/nextUntil.js"() {
    init_collectSiblings();
  }
});

// node_modules/dom-helpers/esm/collectElements.js
function collectElements(node, direction) {
  var nextNode = null;
  var nodes = [];
  nextNode = node ? node[direction] : null;
  while (nextNode && nextNode.nodeType !== 9) {
    nodes.push(nextNode);
    nextNode = nextNode[direction] || null;
  }
  return nodes;
}
var init_collectElements = __esm({
  "node_modules/dom-helpers/esm/collectElements.js"() {
  }
});

// node_modules/dom-helpers/esm/parents.js
function parents(node) {
  return collectElements(node, "parentElement");
}
var init_parents = __esm({
  "node_modules/dom-helpers/esm/parents.js"() {
    init_collectElements();
  }
});

// node_modules/dom-helpers/esm/prepend.js
function prepend(node, parent) {
  if (node && parent) {
    if (parent.firstElementChild) {
      parent.insertBefore(node, parent.firstElementChild);
    } else {
      parent.appendChild(node);
    }
    return node;
  }
  return null;
}
var init_prepend = __esm({
  "node_modules/dom-helpers/esm/prepend.js"() {
  }
});

// node_modules/dom-helpers/esm/remove.js
function remove(node) {
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
    return node;
  }
  return null;
}
var init_remove = __esm({
  "node_modules/dom-helpers/esm/remove.js"() {
  }
});

// node_modules/dom-helpers/esm/scrollParent.js
function scrollParent(element, firstPossible) {
  var position2 = css_default(element, "position");
  var excludeStatic = position2 === "absolute";
  var ownerDoc = element.ownerDocument;
  if (position2 === "fixed") return ownerDoc || document;
  while ((element = element.parentNode) && !isDocument(element)) {
    var isStatic = excludeStatic && css_default(element, "position") === "static";
    var style = (css_default(element, "overflow") || "") + (css_default(element, "overflow-y") || "") + css_default(element, "overflow-x");
    if (isStatic) continue;
    if (/(auto|scroll)/.test(style) && (firstPossible || height(element) < element.scrollHeight)) {
      return element;
    }
  }
  return ownerDoc || document;
}
var init_scrollParent = __esm({
  "node_modules/dom-helpers/esm/scrollParent.js"() {
    init_css();
    init_height();
    init_isDocument();
  }
});

// node_modules/dom-helpers/esm/scrollTo.js
function scrollTo(selected, scrollParent2) {
  var offset2 = offset(selected);
  var poff = {
    top: 0,
    left: 0
  };
  if (!selected) return void 0;
  var list = scrollParent2 || scrollParent(selected);
  var isWin = isWindow(list);
  var listScrollTop = scrollTop_default(list);
  var listHeight = height(list, true);
  if (!isWin) poff = offset(list);
  offset2 = {
    top: offset2.top - poff.top,
    left: offset2.left - poff.left,
    height: offset2.height,
    width: offset2.width
  };
  var selectedHeight = offset2.height;
  var selectedTop = offset2.top + (isWin ? 0 : listScrollTop);
  var bottom = selectedTop + selectedHeight;
  listScrollTop = listScrollTop > selectedTop ? selectedTop : bottom > listScrollTop + listHeight ? bottom - listHeight : listScrollTop;
  var id = request(function() {
    return scrollTop_default(list, listScrollTop);
  });
  return function() {
    return cancel(id);
  };
}
var init_scrollTo = __esm({
  "node_modules/dom-helpers/esm/scrollTo.js"() {
    init_animationFrame();
    init_height();
    init_isWindow();
    init_offset();
    init_scrollParent();
    init_scrollTop();
  }
});

// node_modules/dom-helpers/esm/siblings.js
function siblings(node) {
  return collectSiblings(node && node.parentElement ? node.parentElement.firstElementChild : null, node);
}
var init_siblings = __esm({
  "node_modules/dom-helpers/esm/siblings.js"() {
    init_collectSiblings();
  }
});

// node_modules/dom-helpers/esm/text.js
function text(node, trim, singleSpaces) {
  if (trim === void 0) {
    trim = true;
  }
  if (singleSpaces === void 0) {
    singleSpaces = true;
  }
  var elementText = "";
  if (node) {
    elementText = (node.textContent || "").replace(regExpNbspEntity, " ").replace(regExpNbspHex, " ");
    if (trim) {
      elementText = elementText.trim();
    }
    if (singleSpaces) {
      elementText = elementText.replace(regExpSpaces, " $1");
    }
  }
  return elementText;
}
var regExpNbspEntity, regExpNbspHex, regExpSpaces;
var init_text = __esm({
  "node_modules/dom-helpers/esm/text.js"() {
    regExpNbspEntity = /&nbsp;/gi;
    regExpNbspHex = /\xA0/g;
    regExpSpaces = /\s+([^\s])/gm;
  }
});

// node_modules/dom-helpers/esm/toggleClass.js
function toggleClass(element, className) {
  if (element.classList) element.classList.toggle(className);
  else if (hasClass(element, className)) removeClass(element, className);
  else addClass(element, className);
}
var init_toggleClass = __esm({
  "node_modules/dom-helpers/esm/toggleClass.js"() {
    init_addClass();
    init_hasClass();
    init_removeClass();
  }
});

// node_modules/dom-helpers/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  activeElement: () => activeElement,
  addClass: () => addClass,
  addEventListener: () => addEventListener_default,
  animate: () => animate_default,
  attribute: () => attribute,
  cancelAnimationFrame: () => cancel,
  childElements: () => childElements,
  childNodes: () => childNodes,
  clear: () => clear,
  closest: () => closest,
  contains: () => contains,
  default: () => esm_default,
  filter: () => filterEvents,
  getComputedStyle: () => getComputedStyle,
  hasClass: () => hasClass,
  height: () => height,
  insertAfter: () => insertAfter,
  isInput: () => isInput,
  isVisible: () => isVisible,
  listen: () => listen_default,
  matches: () => matches,
  nextUntil: () => nextUntil,
  offset: () => offset,
  offsetParent: () => offsetParent,
  ownerDocument: () => ownerDocument,
  ownerWindow: () => ownerWindow,
  parents: () => parents,
  position: () => position,
  prepend: () => prepend,
  querySelectorAll: () => qsa,
  remove: () => remove,
  removeClass: () => removeClass,
  removeEventListener: () => removeEventListener_default,
  requestAnimationFrame: () => request,
  scrollLeft: () => scrollLeft_default,
  scrollParent: () => scrollParent,
  scrollTo: () => scrollTo,
  scrollTop: () => scrollTop_default,
  scrollbarSize: () => scrollbarSize,
  siblings: () => siblings,
  style: () => css_default,
  text: () => text,
  toggleClass: () => toggleClass,
  transitionEnd: () => transitionEnd,
  triggerEvent: () => triggerEvent,
  width: () => getWidth
});
var esm_default;
var init_esm = __esm({
  "node_modules/dom-helpers/esm/index.js"() {
    init_activeElement();
    init_addClass();
    init_addEventListener();
    init_animate();
    init_animationFrame();
    init_attribute();
    init_childElements();
    init_clear();
    init_closest();
    init_contains();
    init_childNodes();
    init_css();
    init_filterEventHandler();
    init_getComputedStyle();
    init_hasClass();
    init_height();
    init_insertAfter();
    init_isInput();
    init_isVisible();
    init_listen();
    init_matches();
    init_nextUntil();
    init_offset();
    init_offsetParent();
    init_ownerDocument();
    init_ownerWindow();
    init_parents();
    init_position();
    init_prepend();
    init_querySelectorAll();
    init_remove();
    init_removeClass();
    init_removeEventListener();
    init_scrollbarSize();
    init_scrollLeft();
    init_scrollParent();
    init_scrollTo();
    init_scrollTop();
    init_siblings();
    init_text();
    init_toggleClass();
    init_transitionEnd();
    init_triggerEvent();
    init_width();
    esm_default = {
      addEventListener: addEventListener_default,
      removeEventListener: removeEventListener_default,
      triggerEvent,
      animate: animate_default,
      filter: filterEvents,
      listen: listen_default,
      style: css_default,
      getComputedStyle,
      attribute,
      activeElement,
      ownerDocument,
      ownerWindow,
      requestAnimationFrame: request,
      cancelAnimationFrame: cancel,
      matches,
      height,
      width: getWidth,
      offset,
      offsetParent,
      position,
      contains,
      scrollbarSize,
      scrollLeft: scrollLeft_default,
      scrollParent,
      scrollTo,
      scrollTop: scrollTop_default,
      querySelectorAll: qsa,
      closest,
      addClass,
      removeClass,
      hasClass,
      toggleClass,
      transitionEnd,
      childNodes,
      childElements,
      nextUntil,
      parents,
      siblings,
      clear,
      insertAfter,
      isInput,
      isVisible,
      prepend,
      remove,
      text
    };
  }
});

// node_modules/dom-helpers/cjs/querySelectorAll.js
var require_querySelectorAll = __commonJS({
  "node_modules/dom-helpers/cjs/querySelectorAll.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports.default = qsa2;
    var toArray2 = Function.prototype.bind.call(Function.prototype.call, [].slice);
    function qsa2(element, selector) {
      return toArray2(element.querySelectorAll(selector));
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-big-calendar/lib/Selection.js
var require_Selection = __commonJS({
  "node_modules/react-big-calendar/lib/Selection.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    exports.getBoundsForNode = getBoundsForNode;
    exports.getEventNodeFromPoint = getEventNodeFromPoint;
    exports.getShowMoreNodeFromPoint = getShowMoreNodeFromPoint;
    exports.isEvent = isEvent;
    exports.isShowMore = isShowMore;
    exports.objectsCollide = objectsCollide;
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _contains = _interopRequireDefault((init_contains(), __toCommonJS(contains_exports)));
    var _closest = _interopRequireDefault((init_closest(), __toCommonJS(closest_exports)));
    var _listen = _interopRequireDefault((init_listen(), __toCommonJS(listen_exports)));
    function addEventListener(type, handler) {
      var target = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
      return (0, _listen.default)(target, type, handler, {
        passive: false
      });
    }
    function isOverContainer(container, x, y) {
      return !container || (0, _contains.default)(container, document.elementFromPoint(x, y));
    }
    function getEventNodeFromPoint(node, _ref) {
      var clientX = _ref.clientX, clientY = _ref.clientY;
      var target = document.elementFromPoint(clientX, clientY);
      return (0, _closest.default)(target, ".rbc-event", node);
    }
    function getShowMoreNodeFromPoint(node, _ref2) {
      var clientX = _ref2.clientX, clientY = _ref2.clientY;
      var target = document.elementFromPoint(clientX, clientY);
      return (0, _closest.default)(target, ".rbc-show-more", node);
    }
    function isEvent(node, bounds) {
      return !!getEventNodeFromPoint(node, bounds);
    }
    function isShowMore(node, bounds) {
      return !!getShowMoreNodeFromPoint(node, bounds);
    }
    function getEventCoordinates(e) {
      var target = e;
      if (e.touches && e.touches.length) {
        target = e.touches[0];
      }
      return {
        clientX: target.clientX,
        clientY: target.clientY,
        pageX: target.pageX,
        pageY: target.pageY
      };
    }
    var clickTolerance = 5;
    var clickInterval = 250;
    var Selection = function() {
      function Selection2(node) {
        var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$global = _ref3.global, global = _ref3$global === void 0 ? false : _ref3$global, _ref3$longPressThresh = _ref3.longPressThreshold, longPressThreshold = _ref3$longPressThresh === void 0 ? 250 : _ref3$longPressThresh, _ref3$validContainers = _ref3.validContainers, validContainers = _ref3$validContainers === void 0 ? [] : _ref3$validContainers;
        (0, _classCallCheck2.default)(this, Selection2);
        this._initialEvent = null;
        this.selecting = false;
        this.isDetached = false;
        this.container = node;
        this.globalMouse = !node || global;
        this.longPressThreshold = longPressThreshold;
        this.validContainers = validContainers;
        this._listeners = /* @__PURE__ */ Object.create(null);
        this._handleInitialEvent = this._handleInitialEvent.bind(this);
        this._handleMoveEvent = this._handleMoveEvent.bind(this);
        this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
        this._keyListener = this._keyListener.bind(this);
        this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
        this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);
        this._removeTouchMoveWindowListener = addEventListener("touchmove", function() {
        }, window);
        this._removeKeyDownListener = addEventListener("keydown", this._keyListener);
        this._removeKeyUpListener = addEventListener("keyup", this._keyListener);
        this._removeDropFromOutsideListener = addEventListener("drop", this._dropFromOutsideListener);
        this._removeDragOverFromOutsideListener = addEventListener("dragover", this._dragOverFromOutsideListener);
        this._addInitialEventListener();
      }
      return (0, _createClass2.default)(Selection2, [{
        key: "on",
        value: function on(type, handler) {
          var handlers = this._listeners[type] || (this._listeners[type] = []);
          handlers.push(handler);
          return {
            remove: function remove2() {
              var idx = handlers.indexOf(handler);
              if (idx !== -1) handlers.splice(idx, 1);
            }
          };
        }
      }, {
        key: "emit",
        value: function emit(type) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var result;
          var handlers = this._listeners[type] || [];
          handlers.forEach(function(fn) {
            if (result === void 0) result = fn.apply(void 0, args);
          });
          return result;
        }
      }, {
        key: "teardown",
        value: function teardown() {
          this._initialEvent = null;
          this._initialEventData = null;
          this._selectRect = null;
          this.selecting = false;
          this._lastClickData = null;
          this.isDetached = true;
          this._listeners = /* @__PURE__ */ Object.create(null);
          this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
          this._removeInitialEventListener && this._removeInitialEventListener();
          this._removeEndListener && this._removeEndListener();
          this._onEscListener && this._onEscListener();
          this._removeMoveListener && this._removeMoveListener();
          this._removeKeyUpListener && this._removeKeyUpListener();
          this._removeKeyDownListener && this._removeKeyDownListener();
          this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
          this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
        }
      }, {
        key: "isSelected",
        value: function isSelected(node) {
          var box = this._selectRect;
          if (!box || !this.selecting) return false;
          return objectsCollide(box, getBoundsForNode(node));
        }
      }, {
        key: "filter",
        value: function filter(items) {
          var box = this._selectRect;
          if (!box || !this.selecting) return [];
          return items.filter(this.isSelected, this);
        }
        // Adds a listener that will call the handler only after the user has pressed on the screen
        // without moving their finger for 250ms.
      }, {
        key: "_addLongPressListener",
        value: function _addLongPressListener(handler, initialEvent) {
          var _this = this;
          var timer = null;
          var removeTouchMoveListener = null;
          var removeTouchEndListener = null;
          var handleTouchStart = function handleTouchStart2(initialEvent2) {
            timer = setTimeout(function() {
              cleanup();
              handler(initialEvent2);
            }, _this.longPressThreshold);
            removeTouchMoveListener = addEventListener("touchmove", function() {
              return cleanup();
            });
            removeTouchEndListener = addEventListener("touchend", function() {
              return cleanup();
            });
          };
          var removeTouchStartListener = addEventListener("touchstart", handleTouchStart);
          var cleanup = function cleanup2() {
            if (timer) {
              clearTimeout(timer);
            }
            if (removeTouchMoveListener) {
              removeTouchMoveListener();
            }
            if (removeTouchEndListener) {
              removeTouchEndListener();
            }
            timer = null;
            removeTouchMoveListener = null;
            removeTouchEndListener = null;
          };
          if (initialEvent) {
            handleTouchStart(initialEvent);
          }
          return function() {
            cleanup();
            removeTouchStartListener();
          };
        }
        // Listen for mousedown and touchstart events. When one is received, disable the other and setup
        // future event handling based on the type of event.
      }, {
        key: "_addInitialEventListener",
        value: function _addInitialEventListener() {
          var _this2 = this;
          var removeMouseDownListener = addEventListener("mousedown", function(e) {
            _this2._removeInitialEventListener();
            _this2._handleInitialEvent(e);
            _this2._removeInitialEventListener = addEventListener("mousedown", _this2._handleInitialEvent);
          });
          var removeTouchStartListener = addEventListener("touchstart", function(e) {
            _this2._removeInitialEventListener();
            _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
          });
          this._removeInitialEventListener = function() {
            removeMouseDownListener();
            removeTouchStartListener();
          };
        }
      }, {
        key: "_dropFromOutsideListener",
        value: function _dropFromOutsideListener(e) {
          var _getEventCoordinates = getEventCoordinates(e), pageX = _getEventCoordinates.pageX, pageY = _getEventCoordinates.pageY, clientX = _getEventCoordinates.clientX, clientY = _getEventCoordinates.clientY;
          this.emit("dropFromOutside", {
            x: pageX,
            y: pageY,
            clientX,
            clientY
          });
          e.preventDefault();
        }
      }, {
        key: "_dragOverFromOutsideListener",
        value: function _dragOverFromOutsideListener(e) {
          var _getEventCoordinates2 = getEventCoordinates(e), pageX = _getEventCoordinates2.pageX, pageY = _getEventCoordinates2.pageY, clientX = _getEventCoordinates2.clientX, clientY = _getEventCoordinates2.clientY;
          this.emit("dragOverFromOutside", {
            x: pageX,
            y: pageY,
            clientX,
            clientY
          });
          e.preventDefault();
        }
      }, {
        key: "_handleInitialEvent",
        value: function _handleInitialEvent(e) {
          this._initialEvent = e;
          if (this.isDetached) {
            return;
          }
          var _getEventCoordinates3 = getEventCoordinates(e), clientX = _getEventCoordinates3.clientX, clientY = _getEventCoordinates3.clientY, pageX = _getEventCoordinates3.pageX, pageY = _getEventCoordinates3.pageY;
          var node = this.container(), collides, offsetData;
          if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;
          if (!this.globalMouse && node && !(0, _contains.default)(node, e.target)) {
            var _normalizeDistance = normalizeDistance(0), top = _normalizeDistance.top, left = _normalizeDistance.left, bottom = _normalizeDistance.bottom, right = _normalizeDistance.right;
            offsetData = getBoundsForNode(node);
            collides = objectsCollide({
              top: offsetData.top - top,
              left: offsetData.left - left,
              bottom: offsetData.bottom + bottom,
              right: offsetData.right + right
            }, {
              top: pageY,
              left: pageX
            });
            if (!collides) return;
          }
          var result = this.emit("beforeSelect", this._initialEventData = {
            isTouch: /^touch/.test(e.type),
            x: pageX,
            y: pageY,
            clientX,
            clientY
          });
          if (result === false) return;
          switch (e.type) {
            case "mousedown":
              this._removeEndListener = addEventListener("mouseup", this._handleTerminatingEvent);
              this._onEscListener = addEventListener("keydown", this._handleTerminatingEvent);
              this._removeMoveListener = addEventListener("mousemove", this._handleMoveEvent);
              break;
            case "touchstart":
              this._handleMoveEvent(e);
              this._removeEndListener = addEventListener("touchend", this._handleTerminatingEvent);
              this._removeMoveListener = addEventListener("touchmove", this._handleMoveEvent);
              break;
            default:
              break;
          }
        }
        // Check whether provided event target element
        // - is contained within a valid container
      }, {
        key: "_isWithinValidContainer",
        value: function _isWithinValidContainer(e) {
          var eventTarget = e.target;
          var containers = this.validContainers;
          if (!containers || !containers.length || !eventTarget) {
            return true;
          }
          return containers.some(function(target) {
            return !!eventTarget.closest(target);
          });
        }
      }, {
        key: "_handleTerminatingEvent",
        value: function _handleTerminatingEvent(e) {
          var selecting = this.selecting;
          var bounds = this._selectRect;
          if (!selecting && e.type.includes("key")) {
            e = this._initialEvent;
          }
          this.selecting = false;
          this._removeEndListener && this._removeEndListener();
          this._removeMoveListener && this._removeMoveListener();
          this._selectRect = null;
          this._initialEvent = null;
          this._initialEventData = null;
          if (!e) return;
          var inRoot = !this.container || (0, _contains.default)(this.container(), e.target);
          var isWithinValidContainer = this._isWithinValidContainer(e);
          if (e.key === "Escape" || !isWithinValidContainer) {
            return this.emit("reset");
          }
          if (!selecting && inRoot) {
            return this._handleClickEvent(e);
          }
          if (selecting) return this.emit("select", bounds);
          return this.emit("reset");
        }
      }, {
        key: "_handleClickEvent",
        value: function _handleClickEvent(e) {
          var _getEventCoordinates4 = getEventCoordinates(e), pageX = _getEventCoordinates4.pageX, pageY = _getEventCoordinates4.pageY, clientX = _getEventCoordinates4.clientX, clientY = _getEventCoordinates4.clientY;
          var now = (/* @__PURE__ */ new Date()).getTime();
          if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
            this._lastClickData = null;
            return this.emit("doubleClick", {
              x: pageX,
              y: pageY,
              clientX,
              clientY
            });
          }
          this._lastClickData = {
            timestamp: now
          };
          return this.emit("click", {
            x: pageX,
            y: pageY,
            clientX,
            clientY
          });
        }
      }, {
        key: "_handleMoveEvent",
        value: function _handleMoveEvent(e) {
          if (this._initialEventData === null || this.isDetached) {
            return;
          }
          var _this$_initialEventDa = this._initialEventData, x = _this$_initialEventDa.x, y = _this$_initialEventDa.y;
          var _getEventCoordinates5 = getEventCoordinates(e), pageX = _getEventCoordinates5.pageX, pageY = _getEventCoordinates5.pageY;
          var w = Math.abs(x - pageX);
          var h = Math.abs(y - pageY);
          var left = Math.min(pageX, x), top = Math.min(pageY, y), old = this.selecting;
          var click = this.isClick(pageX, pageY);
          if (click && !old && !(w || h)) {
            return;
          }
          if (!old && !click) {
            this.emit("selectStart", this._initialEventData);
          }
          if (!click) {
            this.selecting = true;
            this._selectRect = {
              top,
              left,
              x: pageX,
              y: pageY,
              right: left + w,
              bottom: top + h
            };
            this.emit("selecting", this._selectRect);
          }
          e.preventDefault();
        }
      }, {
        key: "_keyListener",
        value: function _keyListener(e) {
          this.ctrl = e.metaKey || e.ctrlKey;
        }
      }, {
        key: "isClick",
        value: function isClick(pageX, pageY) {
          var _this$_initialEventDa2 = this._initialEventData, x = _this$_initialEventDa2.x, y = _this$_initialEventDa2.y, isTouch = _this$_initialEventDa2.isTouch;
          return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
        }
      }]);
    }();
    function normalizeDistance() {
      var distance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if ((0, _typeof2.default)(distance) !== "object") distance = {
        top: distance,
        left: distance,
        right: distance,
        bottom: distance
      };
      return distance;
    }
    function objectsCollide(nodeA, nodeB) {
      var tolerance = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      var _getBoundsForNode = getBoundsForNode(nodeA), aTop = _getBoundsForNode.top, aLeft = _getBoundsForNode.left, _getBoundsForNode$rig = _getBoundsForNode.right, aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig, _getBoundsForNode$bot = _getBoundsForNode.bottom, aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
      var _getBoundsForNode2 = getBoundsForNode(nodeB), bTop = _getBoundsForNode2.top, bLeft = _getBoundsForNode2.left, _getBoundsForNode2$ri = _getBoundsForNode2.right, bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri, _getBoundsForNode2$bo = _getBoundsForNode2.bottom, bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
      return !// 'a' bottom doesn't touch 'b' top
      (aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
      aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
      aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
      aLeft + tolerance > bRight);
    }
    function getBoundsForNode(node) {
      if (!node.getBoundingClientRect) return node;
      var rect = node.getBoundingClientRect(), left = rect.left + pageOffset("left"), top = rect.top + pageOffset("top");
      return {
        top,
        left,
        right: (node.offsetWidth || 0) + left,
        bottom: (node.offsetHeight || 0) + top
      };
    }
    function pageOffset(dir) {
      if (dir === "left") return window.pageXOffset || document.body.scrollLeft || 0;
      if (dir === "top") return window.pageYOffset || document.body.scrollTop || 0;
    }
    var _default = exports.default = Selection;
  }
});

// node_modules/react-big-calendar/lib/TimeGridEvent.js
var require_TimeGridEvent = __commonJS({
  "node_modules/react-big-calendar/lib/TimeGridEvent.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _objectSpread3 = _interopRequireDefault(require_objectSpread2());
    var _clsx = _interopRequireDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var _react = _interopRequireDefault(require_react());
    function stringifyPercent(v) {
      return typeof v === "string" ? v : v + "%";
    }
    function TimeGridEvent(props) {
      var style = props.style, className = props.className, event = props.event, accessors = props.accessors, rtl = props.rtl, selected = props.selected, label = props.label, continuesPrior = props.continuesPrior, continuesAfter = props.continuesAfter, getters = props.getters, onClick = props.onClick, onDoubleClick = props.onDoubleClick, isBackgroundEvent = props.isBackgroundEvent, onKeyPress = props.onKeyPress, _props$components = props.components, Event = _props$components.event, EventWrapper = _props$components.eventWrapper;
      var title = accessors.title(event);
      var tooltip = accessors.tooltip(event);
      var end = accessors.end(event);
      var start = accessors.start(event);
      var userProps = getters.eventProp(event, start, end, selected);
      var inner = [_react.default.createElement("div", {
        key: "1",
        className: "rbc-event-label"
      }, label), _react.default.createElement("div", {
        key: "2",
        className: "rbc-event-content"
      }, Event ? _react.default.createElement(Event, {
        event,
        title
      }) : title)];
      var height2 = style.height, top = style.top, width = style.width, xOffset = style.xOffset;
      var eventStyle = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, userProps.style), {}, (0, _defineProperty2.default)({
        top: stringifyPercent(top),
        height: stringifyPercent(height2),
        width: stringifyPercent(width)
      }, rtl ? "right" : "left", stringifyPercent(xOffset)));
      return _react.default.createElement(EventWrapper, Object.assign({
        type: "time"
      }, props), _react.default.createElement("div", {
        role: "button",
        tabIndex: 0,
        onClick,
        onDoubleClick,
        style: eventStyle,
        onKeyDown: onKeyPress,
        title: tooltip ? (typeof label === "string" ? label + ": " : "") + tooltip : void 0,
        className: (0, _clsx.default)(isBackgroundEvent ? "rbc-background-event" : "rbc-event", className, userProps.className, {
          "rbc-selected": selected,
          "rbc-event-continues-earlier": continuesPrior,
          "rbc-event-continues-later": continuesAfter
        })
      }, inner));
    }
    var _default = exports.default = TimeGridEvent;
  }
});

// node_modules/react-big-calendar/lib/addons/dragAndDrop/common.js
var require_common = __commonJS({
  "node_modules/react-big-calendar/lib/addons/dragAndDrop/common.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dragAccessors = void 0;
    exports.eventTimes = eventTimes;
    exports.mergeComponents = mergeComponents;
    exports.pointInColumn = pointInColumn;
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _accessors = require_accessors();
    var _react = require_react();
    var _excluded = ["children"];
    var dragAccessors = exports.dragAccessors = {
      start: (0, _accessors.wrapAccessor)(function(e) {
        return e.start;
      }),
      end: (0, _accessors.wrapAccessor)(function(e) {
        return e.end;
      })
    };
    function nest() {
      for (var _len = arguments.length, Components = new Array(_len), _key = 0; _key < _len; _key++) {
        Components[_key] = arguments[_key];
      }
      var factories = Components.filter(Boolean).map(_react.createFactory);
      var Nest = function Nest2(_ref) {
        var children = _ref.children, props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
        return factories.reduceRight(function(child, factory) {
          return factory(props, child);
        }, children);
      };
      return Nest;
    }
    function mergeComponents() {
      var components = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var addons = arguments.length > 1 ? arguments[1] : void 0;
      var keys = Object.keys(addons);
      var result = (0, _objectSpread2.default)({}, components);
      keys.forEach(function(key) {
        result[key] = components[key] ? nest(components[key], addons[key]) : addons[key];
      });
      return result;
    }
    function pointInColumn(bounds, point) {
      var left = bounds.left, right = bounds.right, top = bounds.top;
      var x = point.x, y = point.y;
      return x < right + 10 && x > left && y > top;
    }
    function eventTimes(event, accessors, localizer) {
      var start = accessors.start(event);
      var end = accessors.end(event);
      var isZeroDuration = localizer.eq(start, end, "minutes") && localizer.diff(start, end, "minutes") === 0;
      if (isZeroDuration) end = localizer.add(end, 1, "day");
      var duration = localizer.diff(start, end, "milliseconds");
      return {
        start,
        end,
        duration
      };
    }
  }
});

// node_modules/react-big-calendar/lib/addons/dragAndDrop/EventContainerWrapper.js
var require_EventContainerWrapper = __commonJS({
  "node_modules/react-big-calendar/lib/addons/dragAndDrop/EventContainerWrapper.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard().default;
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _callSuper2 = _interopRequireDefault(require_callSuper());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _react = _interopRequireDefault(require_react());
    var _DnDContext = require_DnDContext();
    var _domHelpers = (init_esm(), __toCommonJS(esm_exports));
    var _querySelectorAll = _interopRequireDefault(require_querySelectorAll());
    var _Selection = _interopRequireWildcard(require_Selection());
    var _TimeGridEvent = _interopRequireDefault(require_TimeGridEvent());
    var _common = require_common();
    var EventContainerWrapper = function(_React$Component) {
      function EventContainerWrapper2() {
        var _this;
        (0, _classCallCheck2.default)(this, EventContainerWrapper2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = (0, _callSuper2.default)(this, EventContainerWrapper2, [].concat(args));
        _this.handleMove = function(point, bounds) {
          if (!(0, _common.pointInColumn)(bounds, point)) return _this.reset();
          var event = _this.context.draggable.dragAndDropAction.event;
          var _this$props = _this.props, accessors = _this$props.accessors, slotMetrics = _this$props.slotMetrics;
          var newSlot = slotMetrics.closestSlotFromPoint({
            y: point.y - _this.eventOffsetTop,
            x: point.x
          }, bounds);
          var _eventTimes = (0, _common.eventTimes)(event, accessors, _this.props.localizer), duration = _eventTimes.duration;
          var newEnd = _this.props.localizer.add(newSlot, duration, "milliseconds");
          _this.update(event, slotMetrics.getRange(newSlot, newEnd, false, true));
        };
        _this.handleDropFromOutside = function(point, boundaryBox) {
          var _this$props2 = _this.props, slotMetrics = _this$props2.slotMetrics, resource = _this$props2.resource;
          var start = slotMetrics.closestSlotFromPoint({
            y: point.y,
            x: point.x
          }, boundaryBox);
          var end = _this._calculateDnDEnd(start);
          _this.context.draggable.onDropFromOutside({
            start,
            end,
            allDay: false,
            resource
          });
        };
        _this.handleDragOverFromOutside = function(point, bounds) {
          var slotMetrics = _this.props.slotMetrics;
          var start = slotMetrics.closestSlotFromPoint({
            y: point.y,
            x: point.x
          }, bounds);
          var end = _this._calculateDnDEnd(start);
          var event = _this.context.draggable.dragFromOutsideItem();
          _this.update(event, slotMetrics.getRange(start, end, false, true));
        };
        _this._calculateDnDEnd = function(start) {
          var _this$props3 = _this.props, accessors = _this$props3.accessors, slotMetrics = _this$props3.slotMetrics, localizer = _this$props3.localizer;
          var event = _this.context.draggable.dragFromOutsideItem();
          var _eventTimes2 = (0, _common.eventTimes)(event, accessors, localizer), eventDuration = _eventTimes2.duration;
          var end = slotMetrics.nextSlot(start);
          var eventHasDuration = !isNaN(eventDuration);
          if (eventHasDuration) {
            var eventEndSlot = localizer.add(start, eventDuration, "milliseconds");
            end = new Date(Math.max(eventEndSlot, end));
          }
          return end;
        };
        _this.updateParentScroll = function(parent, node) {
          setTimeout(function() {
            var draggedEl = (0, _querySelectorAll.default)(node, ".rbc-addons-dnd-drag-preview")[0];
            if (draggedEl) {
              if (draggedEl.offsetTop < parent.scrollTop) {
                (0, _domHelpers.scrollTop)(parent, Math.max(draggedEl.offsetTop, 0));
              } else if (draggedEl.offsetTop + draggedEl.offsetHeight > parent.scrollTop + parent.clientHeight) {
                (0, _domHelpers.scrollTop)(parent, Math.min(draggedEl.offsetTop - parent.offsetHeight + draggedEl.offsetHeight, parent.scrollHeight));
              }
            }
          });
        };
        _this._selectable = function() {
          var wrapper = _this.ref.current;
          var node = wrapper.children[0];
          var isBeingDragged = false;
          var selector = _this._selector = new _Selection.default(function() {
            return wrapper.closest(".rbc-time-view");
          });
          var parent = (0, _domHelpers.scrollParent)(wrapper);
          selector.on("beforeSelect", function(point) {
            var dragAndDropAction = _this.context.draggable.dragAndDropAction;
            if (!dragAndDropAction.action) return false;
            if (dragAndDropAction.action === "resize") {
              return (0, _common.pointInColumn)((0, _Selection.getBoundsForNode)(node), point);
            }
            var eventNode = (0, _Selection.getEventNodeFromPoint)(node, point);
            if (!eventNode) return false;
            _this.eventOffsetTop = point.y - (0, _Selection.getBoundsForNode)(eventNode).top;
          });
          selector.on("selecting", function(box) {
            var bounds = (0, _Selection.getBoundsForNode)(node);
            var dragAndDropAction = _this.context.draggable.dragAndDropAction;
            if (dragAndDropAction.action === "move") {
              _this.updateParentScroll(parent, node);
              _this.handleMove(box, bounds);
            }
            if (dragAndDropAction.action === "resize") {
              _this.updateParentScroll(parent, node);
              _this.handleResize(box, bounds);
            }
          });
          selector.on("dropFromOutside", function(point) {
            if (!_this.context.draggable.onDropFromOutside) return;
            var bounds = (0, _Selection.getBoundsForNode)(node);
            if (!(0, _common.pointInColumn)(bounds, point)) return;
            _this.handleDropFromOutside(point, bounds);
          });
          selector.on("dragOverFromOutside", function(point) {
            var item = _this.context.draggable.dragFromOutsideItem ? _this.context.draggable.dragFromOutsideItem() : null;
            if (!item) return;
            var bounds = (0, _Selection.getBoundsForNode)(node);
            if (!(0, _common.pointInColumn)(bounds, point)) return _this.reset();
            _this.handleDragOverFromOutside(point, bounds);
          });
          selector.on("selectStart", function() {
            isBeingDragged = true;
            _this.context.draggable.onStart();
          });
          selector.on("select", function(point) {
            var bounds = (0, _Selection.getBoundsForNode)(node);
            isBeingDragged = false;
            var dragAndDropAction = _this.context.draggable.dragAndDropAction;
            if (dragAndDropAction.action === "resize") {
              _this.handleInteractionEnd();
            } else if (!_this.state.event || !(0, _common.pointInColumn)(bounds, point)) {
              return;
            } else {
              _this.handleInteractionEnd();
            }
          });
          selector.on("click", function() {
            if (isBeingDragged) _this.reset();
            _this.context.draggable.onEnd(null);
          });
          selector.on("reset", function() {
            _this.reset();
            _this.context.draggable.onEnd(null);
          });
        };
        _this.handleInteractionEnd = function() {
          var resource = _this.props.resource;
          var event = _this.state.event;
          _this.reset();
          _this.context.draggable.onEnd({
            start: event.start,
            end: event.end,
            resourceId: resource
          });
        };
        _this._teardownSelectable = function() {
          if (!_this._selector) return;
          _this._selector.teardown();
          _this._selector = null;
        };
        _this.state = {};
        _this.ref = _react.default.createRef();
        return _this;
      }
      (0, _inherits2.default)(EventContainerWrapper2, _React$Component);
      return (0, _createClass2.default)(EventContainerWrapper2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this._selectable();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._teardownSelectable();
        }
      }, {
        key: "reset",
        value: function reset2() {
          if (this.state.event) this.setState({
            event: null,
            top: null,
            height: null
          });
        }
      }, {
        key: "update",
        value: function update(event, _ref) {
          var startDate = _ref.startDate, endDate = _ref.endDate, top = _ref.top, height2 = _ref.height;
          var lastEvent = this.state.event;
          if (lastEvent && startDate === lastEvent.start && endDate === lastEvent.end) {
            return;
          }
          this.setState({
            top,
            height: height2,
            event: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, event), {}, {
              start: startDate,
              end: endDate
            })
          });
        }
      }, {
        key: "handleResize",
        value: function handleResize(point, bounds) {
          var _this$props4 = this.props, accessors = _this$props4.accessors, slotMetrics = _this$props4.slotMetrics, localizer = _this$props4.localizer;
          var _this$context$draggab = this.context.draggable.dragAndDropAction, event = _this$context$draggab.event, direction = _this$context$draggab.direction;
          var newTime = slotMetrics.closestSlotFromPoint(point, bounds);
          var _eventTimes3 = (0, _common.eventTimes)(event, accessors, localizer), start = _eventTimes3.start, end = _eventTimes3.end;
          var newRange;
          if (direction === "UP") {
            var newStart = localizer.min(newTime, slotMetrics.closestSlotFromDate(end, -1));
            newRange = slotMetrics.getRange(newStart, end);
            newRange = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, newRange), {}, {
              endDate: end
            });
          } else if (direction === "DOWN") {
            var newEnd = localizer.max(newTime, slotMetrics.closestSlotFromDate(start));
            newRange = slotMetrics.getRange(start, newEnd);
            newRange = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, newRange), {}, {
              startDate: start
            });
          }
          this.update(event, newRange);
        }
      }, {
        key: "renderContent",
        value: function renderContent() {
          var _this$props5 = this.props, children = _this$props5.children, accessors = _this$props5.accessors, components = _this$props5.components, getters = _this$props5.getters, slotMetrics = _this$props5.slotMetrics, localizer = _this$props5.localizer;
          var _this$state = this.state, event = _this$state.event, top = _this$state.top, height2 = _this$state.height;
          if (!event) return children;
          var events = children.props.children;
          var start = event.start, end = event.end;
          var label;
          var format = "eventTimeRangeFormat";
          var startsBeforeDay = slotMetrics.startsBeforeDay(start);
          var startsAfterDay = slotMetrics.startsAfterDay(end);
          if (startsBeforeDay) format = "eventTimeRangeEndFormat";
          else if (startsAfterDay) format = "eventTimeRangeStartFormat";
          if (startsBeforeDay && startsAfterDay) label = localizer.messages.allDay;
          else label = localizer.format({
            start,
            end
          }, format);
          return _react.default.cloneElement(children, {
            children: _react.default.createElement(_react.default.Fragment, null, events, event && _react.default.createElement(_TimeGridEvent.default, {
              event,
              label,
              className: "rbc-addons-dnd-drag-preview",
              style: {
                top,
                height: height2,
                width: 100
              },
              getters,
              components,
              accessors: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, accessors), _common.dragAccessors),
              continuesPrior: startsBeforeDay,
              continuesAfter: startsAfterDay
            }))
          });
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            ref: this.ref
          }, this.renderContent());
        }
      }]);
    }(_react.default.Component);
    EventContainerWrapper.contextType = _DnDContext.DnDContext;
    var _default = exports.default = EventContainerWrapper;
  }
});

// node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/arrayWithoutHoles.js
var require_arrayWithoutHoles = __commonJS({
  "node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _arrayWithoutHoles(r) {
      if (Array.isArray(r)) return arrayLikeToArray(r);
    }
    module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/iterableToArray.js
var require_iterableToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/iterableToArray.js"(exports, module) {
    function _iterableToArray(r) {
      if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
      }
    }
    module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/nonIterableSpread.js
var require_nonIterableSpread = __commonJS({
  "node_modules/@babel/runtime/helpers/nonIterableSpread.js"(exports, module) {
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toConsumableArray.js
var require_toConsumableArray = __commonJS({
  "node_modules/@babel/runtime/helpers/toConsumableArray.js"(exports, module) {
    var arrayWithoutHoles = require_arrayWithoutHoles();
    var iterableToArray = require_iterableToArray();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    var nonIterableSpread = require_nonIterableSpread();
    function _toConsumableArray(r) {
      return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
    }
    module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/react-big-calendar/lib/EventCell.js
var require_EventCell = __commonJS({
  "node_modules/react-big-calendar/lib/EventCell.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _callSuper2 = _interopRequireDefault(require_callSuper());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _react = _interopRequireDefault(require_react());
    var _clsx = _interopRequireDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var _excluded = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
    var EventCell = function(_React$Component) {
      function EventCell2() {
        (0, _classCallCheck2.default)(this, EventCell2);
        return (0, _callSuper2.default)(this, EventCell2, arguments);
      }
      (0, _inherits2.default)(EventCell2, _React$Component);
      return (0, _createClass2.default)(EventCell2, [{
        key: "render",
        value: function render() {
          var _this$props = this.props, style = _this$props.style, className = _this$props.className, event = _this$props.event, selected = _this$props.selected, isAllDay = _this$props.isAllDay, onSelect = _this$props.onSelect, _onDoubleClick = _this$props.onDoubleClick, onKeyPress = _this$props.onKeyPress, localizer = _this$props.localizer, continuesPrior = _this$props.continuesPrior, continuesAfter = _this$props.continuesAfter, accessors = _this$props.accessors, getters = _this$props.getters, children = _this$props.children, _this$props$component = _this$props.components, Event = _this$props$component.event, EventWrapper = _this$props$component.eventWrapper, slotStart = _this$props.slotStart, slotEnd = _this$props.slotEnd, props = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
          delete props.resizable;
          var title = accessors.title(event);
          var tooltip = accessors.tooltip(event);
          var end = accessors.end(event);
          var start = accessors.start(event);
          var allDay = accessors.allDay(event);
          var showAsAllDay = isAllDay || allDay || localizer.diff(start, localizer.ceil(end, "day"), "day") > 1;
          var userProps = getters.eventProp(event, start, end, selected);
          var content = _react.default.createElement("div", {
            className: "rbc-event-content",
            title: tooltip || void 0
          }, Event ? _react.default.createElement(Event, {
            event,
            continuesPrior,
            continuesAfter,
            title,
            isAllDay: allDay,
            localizer,
            slotStart,
            slotEnd
          }) : title);
          return _react.default.createElement(EventWrapper, Object.assign({}, this.props, {
            type: "date"
          }), _react.default.createElement("div", Object.assign({}, props, {
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, userProps.style), style),
            className: (0, _clsx.default)("rbc-event", className, userProps.className, {
              "rbc-selected": selected,
              "rbc-event-allday": showAsAllDay,
              "rbc-event-continues-prior": continuesPrior,
              "rbc-event-continues-after": continuesAfter
            }),
            onClick: function onClick(e) {
              return onSelect && onSelect(event, e);
            },
            onDoubleClick: function onDoubleClick(e) {
              return _onDoubleClick && _onDoubleClick(event, e);
            },
            onKeyDown: function onKeyDown(e) {
              return onKeyPress && onKeyPress(event, e);
            }
          }), typeof children === "function" ? children(content) : content));
        }
      }]);
    }(_react.default.Component);
    var _default = exports.default = EventCell;
  }
});

// node_modules/react-big-calendar/lib/utils/selection.js
var require_selection = __commonJS({
  "node_modules/react-big-calendar/lib/utils/selection.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dateCellSelection = dateCellSelection;
    exports.getSlotAtX = getSlotAtX;
    exports.isSelected = isSelected;
    exports.pointInBox = pointInBox;
    exports.slotWidth = slotWidth;
    var _isEqual = _interopRequireDefault(require_isEqual());
    function isSelected(event, selected) {
      if (!event || selected == null) return false;
      return (0, _isEqual.default)(event, selected);
    }
    function slotWidth(rowBox, slots) {
      var rowWidth = rowBox.right - rowBox.left;
      var cellWidth = rowWidth / slots;
      return cellWidth;
    }
    function getSlotAtX(rowBox, x, rtl, slots) {
      var cellWidth = slotWidth(rowBox, slots);
      return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
    }
    function pointInBox(box, _ref) {
      var x = _ref.x, y = _ref.y;
      return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
    }
    function dateCellSelection(start, rowBox, box, slots, rtl) {
      var startIdx = -1;
      var endIdx = -1;
      var lastSlotIdx = slots - 1;
      var cellWidth = slotWidth(rowBox, slots);
      var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots);
      var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
      var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y;
      var isAboveStart = start.y > rowBox.bottom;
      var isBelowStart = rowBox.top > start.y;
      var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom;
      if (isBetween) {
        startIdx = 0;
        endIdx = lastSlotIdx;
      }
      if (isCurrentRow) {
        if (isBelowStart) {
          startIdx = 0;
          endIdx = currentSlot;
        } else if (isAboveStart) {
          startIdx = currentSlot;
          endIdx = lastSlotIdx;
        }
      }
      if (isStartRow) {
        startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);
        if (isCurrentRow) {
          if (currentSlot < startIdx) startIdx = currentSlot;
          else endIdx = currentSlot;
        } else if (start.y < box.y) {
          endIdx = lastSlotIdx;
        } else {
          startIdx = 0;
        }
      }
      return {
        startIdx,
        endIdx
      };
    }
  }
});

// node_modules/react-big-calendar/lib/EventRowMixin.js
var require_EventRowMixin = __commonJS({
  "node_modules/react-big-calendar/lib/EventRowMixin.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _EventCell = _interopRequireDefault(require_EventCell());
    var _selection = require_selection();
    var _default = exports.default = {
      propTypes: {
        slotMetrics: _propTypes.default.object.isRequired,
        selected: _propTypes.default.object,
        isAllDay: _propTypes.default.bool,
        accessors: _propTypes.default.object.isRequired,
        localizer: _propTypes.default.object.isRequired,
        components: _propTypes.default.object.isRequired,
        getters: _propTypes.default.object.isRequired,
        onSelect: _propTypes.default.func,
        onDoubleClick: _propTypes.default.func,
        onKeyPress: _propTypes.default.func
      },
      defaultProps: {
        segments: [],
        selected: {}
      },
      renderEvent: function renderEvent(props, event) {
        var selected = props.selected, _ = props.isAllDay, accessors = props.accessors, getters = props.getters, onSelect = props.onSelect, onDoubleClick = props.onDoubleClick, onKeyPress = props.onKeyPress, localizer = props.localizer, slotMetrics = props.slotMetrics, components = props.components, resizable = props.resizable;
        var continuesPrior = slotMetrics.continuesPrior(event);
        var continuesAfter = slotMetrics.continuesAfter(event);
        return _react.default.createElement(_EventCell.default, {
          event,
          getters,
          localizer,
          accessors,
          components,
          onSelect,
          onDoubleClick,
          onKeyPress,
          continuesPrior,
          continuesAfter,
          slotStart: slotMetrics.first,
          slotEnd: slotMetrics.last,
          selected: (0, _selection.isSelected)(event, selected),
          resizable
        });
      },
      renderSpan: function renderSpan(slots, len, key) {
        var content = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ";
        var per = Math.abs(len) / slots * 100 + "%";
        return _react.default.createElement("div", {
          key,
          className: "rbc-row-segment",
          style: {
            WebkitFlexBasis: per,
            flexBasis: per,
            maxWidth: per
          }
        }, content);
      }
    };
  }
});

// node_modules/react-big-calendar/lib/EventRow.js
var require_EventRow = __commonJS({
  "node_modules/react-big-calendar/lib/EventRow.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _callSuper2 = _interopRequireDefault(require_callSuper());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _clsx = _interopRequireDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var _react = _interopRequireDefault(require_react());
    var _EventRowMixin = _interopRequireDefault(require_EventRowMixin());
    var EventRow = function(_React$Component) {
      function EventRow2() {
        (0, _classCallCheck2.default)(this, EventRow2);
        return (0, _callSuper2.default)(this, EventRow2, arguments);
      }
      (0, _inherits2.default)(EventRow2, _React$Component);
      return (0, _createClass2.default)(EventRow2, [{
        key: "render",
        value: function render() {
          var _this = this;
          var _this$props = this.props, segments = _this$props.segments, slots = _this$props.slotMetrics.slots, className = _this$props.className;
          var lastEnd = 1;
          return _react.default.createElement("div", {
            className: (0, _clsx.default)(className, "rbc-row")
          }, segments.reduce(function(row, _ref, li) {
            var event = _ref.event, left = _ref.left, right = _ref.right, span = _ref.span;
            var key = "_lvl_" + li;
            var gap = left - lastEnd;
            var content = _EventRowMixin.default.renderEvent(_this.props, event);
            if (gap) row.push(_EventRowMixin.default.renderSpan(slots, gap, "".concat(key, "_gap")));
            row.push(_EventRowMixin.default.renderSpan(slots, span, key, content));
            lastEnd = right + 1;
            return row;
          }, []));
        }
      }]);
    }(_react.default.Component);
    EventRow.defaultProps = (0, _objectSpread2.default)({}, _EventRowMixin.default.defaultProps);
    var _default = exports.default = EventRow;
  }
});

// node_modules/react-big-calendar/lib/utils/eventLevels.js
var require_eventLevels = __commonJS({
  "node_modules/react-big-calendar/lib/utils/eventLevels.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.endOfRange = endOfRange;
    exports.eventLevels = eventLevels;
    exports.eventSegments = eventSegments;
    exports.inRange = inRange;
    exports.segsOverlap = segsOverlap;
    exports.sortEvents = sortEvents;
    exports.sortWeekEvents = sortWeekEvents;
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var _findIndex = _interopRequireDefault(require_findIndex());
    function endOfRange(_ref) {
      var dateRange = _ref.dateRange, _ref$unit = _ref.unit, unit = _ref$unit === void 0 ? "day" : _ref$unit, localizer = _ref.localizer;
      return {
        first: dateRange[0],
        last: localizer.add(dateRange[dateRange.length - 1], 1, unit)
      };
    }
    function eventSegments(event, range, accessors, localizer) {
      var _endOfRange = endOfRange({
        dateRange: range,
        localizer
      }), first = _endOfRange.first, last = _endOfRange.last;
      var slots = localizer.diff(first, last, "day");
      var start = localizer.max(localizer.startOf(accessors.start(event), "day"), first);
      var end = localizer.min(localizer.ceil(accessors.end(event), "day"), last);
      var padding = (0, _findIndex.default)(range, function(x) {
        return localizer.isSameDate(x, start);
      });
      var span = localizer.diff(start, end, "day");
      span = Math.min(span, slots);
      span = Math.max(span - localizer.segmentOffset, 1);
      return {
        event,
        span,
        left: padding + 1,
        right: Math.max(padding + span, 1)
      };
    }
    function eventLevels(rowSegments) {
      var limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var i, j, seg, levels = [], extra = [];
      for (i = 0; i < rowSegments.length; i++) {
        seg = rowSegments[i];
        for (j = 0; j < levels.length; j++) if (!segsOverlap(seg, levels[j])) break;
        if (j >= limit) {
          extra.push(seg);
        } else {
          ;
          (levels[j] || (levels[j] = [])).push(seg);
        }
      }
      for (i = 0; i < levels.length; i++) {
        levels[i].sort(function(a, b) {
          return a.left - b.left;
        });
      }
      return {
        levels,
        extra
      };
    }
    function inRange(e, start, end, accessors, localizer) {
      var event = {
        start: accessors.start(e),
        end: accessors.end(e)
      };
      var range = {
        start,
        end
      };
      return localizer.inEventRange({
        event,
        range
      });
    }
    function segsOverlap(seg, otherSegs) {
      return otherSegs.some(function(otherSeg) {
        return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
      });
    }
    function sortWeekEvents(events, accessors, localizer) {
      var base = (0, _toConsumableArray2.default)(events);
      var multiDayEvents = [];
      var standardEvents = [];
      base.forEach(function(event) {
        var startCheck = accessors.start(event);
        var endCheck = accessors.end(event);
        if (localizer.daySpan(startCheck, endCheck) > 1) {
          multiDayEvents.push(event);
        } else {
          standardEvents.push(event);
        }
      });
      var multiSorted = multiDayEvents.sort(function(a, b) {
        return sortEvents(a, b, accessors, localizer);
      });
      var standardSorted = standardEvents.sort(function(a, b) {
        return sortEvents(a, b, accessors, localizer);
      });
      return [].concat((0, _toConsumableArray2.default)(multiSorted), (0, _toConsumableArray2.default)(standardSorted));
    }
    function sortEvents(eventA, eventB, accessors, localizer) {
      var evtA = {
        start: accessors.start(eventA),
        end: accessors.end(eventA),
        allDay: accessors.allDay(eventA)
      };
      var evtB = {
        start: accessors.start(eventB),
        end: accessors.end(eventB),
        allDay: accessors.allDay(eventB)
      };
      return localizer.sortEvents({
        evtA,
        evtB
      });
    }
  }
});

// node_modules/react-big-calendar/lib/addons/dragAndDrop/WeekWrapper.js
var require_WeekWrapper = __commonJS({
  "node_modules/react-big-calendar/lib/addons/dragAndDrop/WeekWrapper.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard().default;
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _callSuper2 = _interopRequireDefault(require_callSuper());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _react = _interopRequireDefault(require_react());
    var _EventRow = _interopRequireDefault(require_EventRow());
    var _Selection = _interopRequireWildcard(require_Selection());
    var _eventLevels = require_eventLevels();
    var _selection = require_selection();
    var _common = require_common();
    var _DnDContext = require_DnDContext();
    var WeekWrapper = function(_React$Component) {
      function WeekWrapper2() {
        var _this;
        (0, _classCallCheck2.default)(this, WeekWrapper2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = (0, _callSuper2.default)(this, WeekWrapper2, [].concat(args));
        _this.handleMove = function(point, bounds, draggedEvent) {
          if (!(0, _selection.pointInBox)(bounds, point)) return _this.reset();
          var event = _this.context.draggable.dragAndDropAction.event || draggedEvent;
          var _this$props = _this.props, accessors = _this$props.accessors, slotMetrics = _this$props.slotMetrics, rtl = _this$props.rtl, localizer = _this$props.localizer;
          var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
          var date = slotMetrics.getDateForSlot(slot);
          var _eventTimes = (0, _common.eventTimes)(event, accessors, localizer), start = _eventTimes.start, duration = _eventTimes.duration;
          start = localizer.merge(date, start);
          var end = localizer.add(start, duration, "milliseconds");
          _this.update(event, start, end);
        };
        _this.handleDropFromOutside = function(point, bounds) {
          if (!_this.context.draggable.onDropFromOutside) return;
          var _this$props2 = _this.props, slotMetrics = _this$props2.slotMetrics, rtl = _this$props2.rtl, localizer = _this$props2.localizer;
          var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
          var start = slotMetrics.getDateForSlot(slot);
          _this.context.draggable.onDropFromOutside({
            start,
            end: localizer.add(start, 1, "day"),
            allDay: false
          });
        };
        _this.handleDragOverFromOutside = function(point, node) {
          var item = _this.context.draggable.dragFromOutsideItem ? _this.context.draggable.dragFromOutsideItem() : null;
          if (!item) return;
          _this.handleMove(point, node, item);
        };
        _this._selectable = function() {
          var node = _this.ref.current.closest(".rbc-month-row, .rbc-allday-cell");
          var container = node.closest(".rbc-month-view, .rbc-time-view");
          var isMonthRow = node.classList.contains("rbc-month-row");
          var selector = _this._selector = new _Selection.default(function() {
            return container;
          }, {
            validContainers: (0, _toConsumableArray2.default)(!isMonthRow ? [".rbc-day-slot", ".rbc-allday-cell"] : [])
          });
          selector.on("beforeSelect", function(point) {
            var isAllDay = _this.props.isAllDay;
            var action = _this.context.draggable.dragAndDropAction.action;
            var bounds = (0, _Selection.getBoundsForNode)(node);
            var isInBox = (0, _selection.pointInBox)(bounds, point);
            return action === "move" || action === "resize" && (!isAllDay || isInBox);
          });
          selector.on("selecting", function(box) {
            var bounds = (0, _Selection.getBoundsForNode)(node);
            var dragAndDropAction = _this.context.draggable.dragAndDropAction;
            if (dragAndDropAction.action === "move") _this.handleMove(box, bounds);
            if (dragAndDropAction.action === "resize") _this.handleResize(box, bounds);
          });
          selector.on("selectStart", function() {
            return _this.context.draggable.onStart();
          });
          selector.on("select", function(point) {
            var bounds = (0, _Selection.getBoundsForNode)(node);
            if (!_this.state.segment) return;
            if (!(0, _selection.pointInBox)(bounds, point)) {
              _this.reset();
            } else {
              _this.handleInteractionEnd();
            }
          });
          selector.on("dropFromOutside", function(point) {
            if (!_this.context.draggable.onDropFromOutside) return;
            var bounds = (0, _Selection.getBoundsForNode)(node);
            if (!(0, _selection.pointInBox)(bounds, point)) return;
            _this.handleDropFromOutside(point, bounds);
          });
          selector.on("dragOverFromOutside", function(point) {
            if (!_this.context.draggable.dragFromOutsideItem) return;
            var bounds = (0, _Selection.getBoundsForNode)(node);
            _this.handleDragOverFromOutside(point, bounds);
          });
          selector.on("click", function() {
            return _this.context.draggable.onEnd(null);
          });
          selector.on("reset", function() {
            _this.reset();
            _this.context.draggable.onEnd(null);
          });
        };
        _this.handleInteractionEnd = function() {
          var _this$props3 = _this.props, resourceId = _this$props3.resourceId, isAllDay = _this$props3.isAllDay;
          var event = _this.state.segment.event;
          _this.reset();
          _this.context.draggable.onEnd({
            start: event.start,
            end: event.end,
            resourceId,
            isAllDay
          });
        };
        _this._teardownSelectable = function() {
          if (!_this._selector) return;
          _this._selector.teardown();
          _this._selector = null;
        };
        _this.state = {};
        _this.ref = _react.default.createRef();
        return _this;
      }
      (0, _inherits2.default)(WeekWrapper2, _React$Component);
      return (0, _createClass2.default)(WeekWrapper2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this._selectable();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._teardownSelectable();
        }
      }, {
        key: "reset",
        value: function reset2() {
          if (this.state.segment) this.setState({
            segment: null
          });
        }
      }, {
        key: "update",
        value: function update(event, start, end) {
          var segment = (0, _eventLevels.eventSegments)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, event), {}, {
            end,
            start,
            __isPreview: true
          }), this.props.slotMetrics.range, _common.dragAccessors, this.props.localizer);
          var lastSegment = this.state.segment;
          if (lastSegment && segment.span === lastSegment.span && segment.left === lastSegment.left && segment.right === lastSegment.right) {
            return;
          }
          this.setState({
            segment
          });
        }
      }, {
        key: "handleResize",
        value: function handleResize(point, bounds) {
          var _this$context$draggab = this.context.draggable.dragAndDropAction, event = _this$context$draggab.event, direction = _this$context$draggab.direction;
          var _this$props4 = this.props, accessors = _this$props4.accessors, slotMetrics = _this$props4.slotMetrics, rtl = _this$props4.rtl, localizer = _this$props4.localizer;
          var _eventTimes2 = (0, _common.eventTimes)(event, accessors, localizer), start = _eventTimes2.start, end = _eventTimes2.end;
          var slot = (0, _selection.getSlotAtX)(bounds, point.x, rtl, slotMetrics.slots);
          var date = slotMetrics.getDateForSlot(slot);
          var cursorInRow = (0, _selection.pointInBox)(bounds, point);
          if (direction === "RIGHT") {
            if (cursorInRow) {
              if (slotMetrics.last < start) return this.reset();
              if (localizer.eq(localizer.startOf(end, "day"), end)) end = localizer.add(date, 1, "day");
              else end = date;
            } else if (localizer.inRange(start, slotMetrics.first, slotMetrics.last) || bounds.bottom < point.y && +slotMetrics.first > +start) {
              end = localizer.add(slotMetrics.last, 1, "milliseconds");
            } else {
              this.setState({
                segment: null
              });
              return;
            }
            var originalEnd = accessors.end(event);
            end = localizer.merge(end, originalEnd);
            if (localizer.lt(end, start)) {
              end = originalEnd;
            }
          } else if (direction === "LEFT") {
            if (cursorInRow) {
              if (slotMetrics.first > end) return this.reset();
              start = date;
            } else if (localizer.inRange(end, slotMetrics.first, slotMetrics.last) || bounds.top > point.y && localizer.lt(slotMetrics.last, end)) {
              start = localizer.add(slotMetrics.first, -1, "milliseconds");
            } else {
              this.reset();
              return;
            }
            var originalStart = accessors.start(event);
            start = localizer.merge(start, originalStart);
            if (localizer.gt(start, end)) {
              start = originalStart;
            }
          }
          this.update(event, start, end);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props5 = this.props, children = _this$props5.children, accessors = _this$props5.accessors;
          var segment = this.state.segment;
          return _react.default.createElement("div", {
            ref: this.ref,
            className: "rbc-addons-dnd-row-body"
          }, children, segment && _react.default.createElement(_EventRow.default, Object.assign({}, this.props, {
            selected: null,
            className: "rbc-addons-dnd-drag-row",
            segments: [segment],
            accessors: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, accessors), _common.dragAccessors)
          })));
        }
      }]);
    }(_react.default.Component);
    WeekWrapper.contextType = _DnDContext.DnDContext;
    var _default = exports.default = WeekWrapper;
  }
});

// node_modules/react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop.js
var require_withDragAndDrop = __commonJS({
  "node_modules/react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = withDragAndDrop;
    var _objectSpread2 = _interopRequireDefault(require_objectSpread2());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _callSuper2 = _interopRequireDefault(require_callSuper());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _react = _interopRequireDefault(require_react());
    var _clsx = _interopRequireDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var _propTypes = require_propTypes();
    var _EventWrapper = _interopRequireDefault(require_EventWrapper());
    var _EventContainerWrapper = _interopRequireDefault(require_EventContainerWrapper());
    var _WeekWrapper = _interopRequireDefault(require_WeekWrapper());
    var _common = require_common();
    var _DnDContext = require_DnDContext();
    var _excluded = ["selectable", "elementProps", "components"];
    function withDragAndDrop(Calendar) {
      var DragAndDropCalendar = function(_React$Component) {
        function DragAndDropCalendar2() {
          var _this;
          (0, _classCallCheck2.default)(this, DragAndDropCalendar2);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = (0, _callSuper2.default)(this, DragAndDropCalendar2, [].concat(args));
          _this.defaultOnDragOver = function(event) {
            event.preventDefault();
          };
          _this.handleBeginAction = function(event, action, direction) {
            _this.setState({
              event,
              action,
              direction
            });
            var onDragStart = _this.props.onDragStart;
            if (onDragStart) onDragStart({
              event,
              action,
              direction
            });
          };
          _this.handleInteractionStart = function() {
            if (_this.state.interacting === false) _this.setState({
              interacting: true
            });
          };
          _this.handleInteractionEnd = function(interactionInfo) {
            var _this$state = _this.state, action = _this$state.action, event = _this$state.event;
            if (!action) return;
            _this.setState({
              action: null,
              event: null,
              interacting: false,
              direction: null
            });
            if (interactionInfo == null) return;
            interactionInfo.event = event;
            var _this$props = _this.props, onEventDrop = _this$props.onEventDrop, onEventResize = _this$props.onEventResize;
            if (action === "move" && onEventDrop) onEventDrop(interactionInfo);
            if (action === "resize" && onEventResize) onEventResize(interactionInfo);
          };
          _this.state = {
            interacting: false
          };
          return _this;
        }
        (0, _inherits2.default)(DragAndDropCalendar2, _React$Component);
        return (0, _createClass2.default)(DragAndDropCalendar2, [{
          key: "getDnDContextValue",
          value: function getDnDContextValue() {
            return {
              draggable: {
                onStart: this.handleInteractionStart,
                onEnd: this.handleInteractionEnd,
                onBeginAction: this.handleBeginAction,
                onDropFromOutside: this.props.onDropFromOutside,
                dragFromOutsideItem: this.props.dragFromOutsideItem,
                draggableAccessor: this.props.draggableAccessor,
                resizableAccessor: this.props.resizableAccessor,
                dragAndDropAction: this.state
              }
            };
          }
        }, {
          key: "render",
          value: function render() {
            var _this$props2 = this.props, selectable = _this$props2.selectable, elementProps = _this$props2.elementProps, components = _this$props2.components, props = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
            var interacting = this.state.interacting;
            delete props.onEventDrop;
            delete props.onEventResize;
            props.selectable = selectable ? "ignoreEvents" : false;
            this.components = (0, _common.mergeComponents)(components, {
              eventWrapper: _EventWrapper.default,
              eventContainerWrapper: _EventContainerWrapper.default,
              weekWrapper: _WeekWrapper.default
            });
            var elementPropsWithDropFromOutside = this.props.onDropFromOutside ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, elementProps), {}, {
              onDragOver: this.props.onDragOver || this.defaultOnDragOver
            }) : elementProps;
            props.className = (0, _clsx.default)(props.className, "rbc-addons-dnd", !!interacting && "rbc-addons-dnd-is-dragging");
            var context = this.getDnDContextValue();
            return _react.default.createElement(_DnDContext.DnDContext.Provider, {
              value: context
            }, _react.default.createElement(Calendar, Object.assign({}, props, {
              elementProps: elementPropsWithDropFromOutside,
              components: this.components
            })));
          }
        }]);
      }(_react.default.Component);
      DragAndDropCalendar.defaultProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, Calendar.defaultProps), {}, {
        draggableAccessor: null,
        resizableAccessor: null,
        resizable: true
      });
      return DragAndDropCalendar;
    }
  }
});

// node_modules/react-big-calendar/lib/addons/dragAndDrop/index.js
var require_dragAndDrop = __commonJS({
  "node_modules/react-big-calendar/lib/addons/dragAndDrop/index.js"(exports) {
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _withDragAndDrop = _interopRequireDefault(require_withDragAndDrop());
    var _default = exports.default = _withDragAndDrop.default;
  }
});
export default require_dragAndDrop();
//# sourceMappingURL=react-big-calendar_lib_addons_dragAndDrop.js.map
