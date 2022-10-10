/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js":
/*!**********************************************************************!*\
  !*** ./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ _createClass),
/* harmony export */   "a": () => (/* binding */ _classCallCheck),
/* harmony export */   "b": () => (/* binding */ _objectWithoutProperties),
/* harmony export */   "c": () => (/* binding */ _typeof),
/* harmony export */   "d": () => (/* binding */ _inherits),
/* harmony export */   "e": () => (/* binding */ _createSuper),
/* harmony export */   "f": () => (/* binding */ _slicedToArray),
/* harmony export */   "g": () => (/* binding */ _get),
/* harmony export */   "h": () => (/* binding */ _getPrototypeOf),
/* harmony export */   "i": () => (/* binding */ _set)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLContenteditableMaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");





var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(HTMLContenteditableMaskElement, _HTMLMaskElement);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(HTMLContenteditableMaskElement);

  function HTMLContenteditableMaskElement() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, HTMLContenteditableMaskElement);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelectionStart",
    get:
    /**
      Returns HTMLElement selection start
      @override
    */
    function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(_html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLMaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");




/** Bridge between HTMLElement and {@link Masked} */

var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(HTMLMaskElement, _MaskElement);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(HTMLMaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, HTMLMaskElement);

    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(HTMLMaskElement, [{
    key: "rootElement",
    get: function get() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
    /**
      Binds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);

  return HTMLMaskElement;
}(_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLMaskElement = HTMLMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputMask)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../masked/range.js */ "./node_modules/imask/esm/masked/range.js");




















var _excluded = ["mask"];
/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, InputMask);

    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__["default"](el) : new _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__["default"](el);
    this.masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(InputMask, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

      if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].Masked) && this.masked.constructor === (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__.maskedClass)(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      var _this$masked;

      return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
    /**
      Starts listening to element events
      @protected
    */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
    /**
      Stores current selection
      @protected
    */

  }, {
    key: "_saveSelection",
    value: function
      /* ev */
    _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(opts, _excluded);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.objectIncludes)(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT));
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }]);

  return InputMask;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].InputMask = InputMask;




/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskElement)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



/**
  Generic element API to use with mask
  @interface
*/
var MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskElement);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskElement, [{
    key: "selectionStart",
    get:
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */

  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }]);

  return MaskElement;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskElement = MaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-details.js */ "./node_modules/imask/esm/core/change-details.js");




/** Provides details of changing input */

var ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE; // align right if delete at right

      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
      this.oldSelection.end === this.oldSelection.start ? _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT;
    }
  }]);

  return ActionDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");


/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContinuousTailDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");


/** Provides details of continuous extracted tail */
var ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.value.length) return '';
      var shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }]);

  return ContinuousTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IMask)
/* harmony export */ });
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}




/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIRECTION": () => (/* binding */ DIRECTION),
/* harmony export */   "escapeRegExp": () => (/* binding */ escapeRegExp),
/* harmony export */   "forceDirection": () => (/* binding */ forceDirection),
/* harmony export */   "indexInDirection": () => (/* binding */ indexInDirection),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "normalizePrepare": () => (/* binding */ normalizePrepare),
/* harmony export */   "objectIncludes": () => (/* binding */ objectIncludes),
/* harmony export */   "posInDirection": () => (/* binding */ posInDirection)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-details.js */ "./node_modules/imask/esm/core/change-details.js");



/** Checks if value is string */

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */
function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */

function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
function normalizePrepare(prep) {
  return Array.isArray(prep) ? prep : [prep, new _change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]()];
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.c)(a) === 'object' && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.c)(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      // $FlowFixMe ... ???
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLContenteditableMaskElement": () => (/* reexport safe */ _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "HTMLMaskElement": () => (/* reexport safe */ _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "InputMask": () => (/* reexport safe */ _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "MaskElement": () => (/* reexport safe */ _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "Masked": () => (/* reexport safe */ _masked_base_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "MaskedDate": () => (/* reexport safe */ _masked_date_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "MaskedDynamic": () => (/* reexport safe */ _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "MaskedEnum": () => (/* reexport safe */ _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "MaskedFunction": () => (/* reexport safe */ _masked_function_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "MaskedNumber": () => (/* reexport safe */ _masked_number_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "MaskedPattern": () => (/* reexport safe */ _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "MaskedRange": () => (/* reexport safe */ _masked_range_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "MaskedRegExp": () => (/* reexport safe */ _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PIPE_TYPE": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.PIPE_TYPE),
/* harmony export */   "createMask": () => (/* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "createPipe": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.createPipe),
/* harmony export */   "default": () => (/* reexport safe */ _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "pipe": () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__.pipe)
/* harmony export */ });
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");



























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch (e) {}


/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Masked)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






/** Supported mask type */

/** Provides common masking stuff */
var Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */
  function Masked(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return; // $FlowFixMe

      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
    /** Resets value */

  }, {
    key: "reset",
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
    /** Resolve new value */

  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
    /** */

  }, {
    key: "isFilled",
    get: function get() {
      return this.isComplete;
    }
    /** Finds nearest input position in direction */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this._value += ch;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;
      var details;

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.normalizePrepare)(this.doPrepare(ch, flags));

      var _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      details = details.aggregate(this._appendCharRaw(ch, flags));

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            checkTail.unshift(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

          if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            checkTail.shift();
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();
          } // if ok, rollback state after tail


          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends optional eager placeholder at end */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(str)) throw new Error('value should be string');
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var checkTail = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail)) : tail;
      if (flags && flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
        details.aggregate(this._appendEager());
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var oldRawValue;

      if (this.eager) {
        removeDirection = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.forceDirection)(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }

      var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE : removeDirection);
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos));

      if (this.eager && removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_LEFT) {
          var valLength;

          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
            details.aggregate(new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }

      return details.aggregate(this.append(inserted, {
        input: true
      }, tail));
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return this.mask === mask;
    }
  }]);

  return Masked;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].Masked = Masked;




/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDate)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");















/** Date mask */

var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedDate, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedDate);

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedDate);

    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, this.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "typedValue", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask === Date || (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDate.prototype), "maskEquals", this).call(this, mask);
    }
  }]);

  return MaskedDate;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    if (!date) return '';
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1900,
      to: 9999
    }
  };
};

_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedDate = MaskedDate;




/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDynamic)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");








var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedDynamic, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedDynamic);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedDynamic);

    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var details = this._applyDispatch(ch, flags);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();

          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
     @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      var _this$currentMask2;

      (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      var _this$currentMask3;

      return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      var _this$currentMask4;

      return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      if (this.currentMask) {
        var _this$currentMask5;

        details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask6;

      return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask7, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask8, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }, {
    key: "eager",
    get: function get() {
      return this.currentMask ? this.currentMask.eager : (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedDynamic.prototype), "eager", this);
    },
    set: function set(eager) {
      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    }
    /**
      @override
    */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
        var _mask$mi;

        return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
      });
    }
  }]);

  return MaskedDynamic;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;




/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedEnum)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Pattern which validates enum values */

var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedEnum, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedEnum);

  function MaskedEnum() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedEnum);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedEnum, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedEnum = MaskedEnum;




/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMask),
/* harmony export */   "maskedClass": () => (/* binding */ maskedClass)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");





/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp; // $FlowFixMe

  if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask; // $FlowFixMe

  if (mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor; // $FlowFixMe

  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  // $FlowFixMe
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;




/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedFunction)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by custom Function */

var MaskedFunction = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedFunction, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedFunction);

  function MaskedFunction() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedFunction);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedFunction, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedFunction = MaskedFunction;




/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedNumber)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");







/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedNumber, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedNumber);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedNumber);

    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
  }
  /**
    @override
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp)(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.escapeRegExp)(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var _get2;

      ch = ch.replace(this._mapToRadixRegExp, this.radix);

      var noSepCh = this._removeThousandsSeparators(ch);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.normalizePrepare)((_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
          _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2),
          prepCh = _normalizePrepare2[0],
          details = _normalizePrepare2[1];

      if (ch && !noSepCh) details.skip = true;
      return [prepCh, details];
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedNumber = MaskedNumber;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedPattern)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");













var _excluded = ["_blocks"];

/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedPattern, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedPattern);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
  }
  /**
    @override
    @param {Object} opts
  */


  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = (0,_factory_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                eager: _this.eager,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];
        var isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          isInput = false;
        }

        var def = isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          parent: this,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          char: char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFilled;
      });
    }
  }, {
    key: "isFixed",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFixed;
      });
    }
  }, {
    key: "isOptional",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isOptional;
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.i)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var _this$_mapPosToBlock;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

      for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        var d = this._blocks[bi]._appendEager();

        if (!d.inserted) break;
        details.aggregate(d);
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _flags$_beforeTailSta;

        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
        }));

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
      if (!this._blocks.length) return 0;
      var cursor = new _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, cursorPos);

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE) {
        // -------------------------------------------------
        // NONE should only go out from fixed to the right!
        // -------------------------------------------------
        if (cursor.pushRightBeforeInput()) return cursor.pos;
        cursor.popState();
        if (cursor.pushLeftBeforeInput()) return cursor.pos;
        return this.value.length;
      } // FORCE is only about a|* otherwise is 0


      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) {
        // try to break fast when *|a
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT) {
          cursor.pushRightBeforeFilled();
          if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
          cursor.popState();
        } // forward flow


        cursor.pushLeftBeforeInput();
        cursor.pushLeftBeforeRequired();
        cursor.pushLeftBeforeFilled(); // backward flow

        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
        }

        if (cursor.ok) return cursor.pos;
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT) return 0;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos; // cursor.popState();
        // if (
        //   cursor.pushRightBeforeInput() &&
        //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
        //   (!this.lazy || this.extractInput())
        // ) return cursor.pos;

        return 0;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT) {
        // forward flow
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.pushRightBeforeFilled()) return cursor.pos;
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return this.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }]);

  return MaskedPattern;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"];
_core_holder_js__WEBPACK_IMPORTED_MODULE_9__["default"].MaskedPattern = MaskedPattern;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChunksTailDetails)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["chunks"];

var ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tailChunk)) tailChunk = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedPattern)) {
        var tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.toString());
        return tail.appendTo(masked);
      }

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(state, _excluded);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
      var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.unshift(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.chunks.length) return '';
      var ci = this.chunks.length - 1;

      while (0 <= ci) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shift();

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          --ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }]);

  return ChunksTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/cursor.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/cursor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternCursor)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");




var PatternCursor = /*#__PURE__*/function () {
  function PatternCursor(masked, pos) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternCursor);

    this.masked = masked;
    this._log = [];

    var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
    {
      index: 0,
      offset: 0
    } : // last
    {
      index: this.masked._blocks.length,
      offset: 0
    }),
        offset = _ref.offset,
        index = _ref.index;

    this.offset = offset;
    this.index = index;
    this.ok = false;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternCursor, [{
    key: "block",
    get: function get() {
      return this.masked._blocks[this.index];
    }
  }, {
    key: "pos",
    get: function get() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    },
    set: function set(s) {
      Object.assign(this, s);
    }
  }, {
    key: "pushState",
    value: function pushState() {
      this._log.push(this.state);
    }
  }, {
    key: "popState",
    value: function popState() {
      var s = this._log.pop();

      this.state = s;
      return s;
    }
  }, {
    key: "bindBlock",
    value: function bindBlock() {
      if (this.block) return;

      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }

      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.value.length;
      }
    }
  }, {
    key: "_pushLeft",
    value: function _pushLeft(fn) {
      this.pushState();

      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
        var _this$block;

        if (fn()) return this.ok = true;
      }

      return this.ok = false;
    }
  }, {
    key: "_pushRight",
    value: function _pushRight(fn) {
      this.pushState();

      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn()) return this.ok = true;
      }

      return this.ok = false;
    }
  }, {
    key: "pushLeftBeforeFilled",
    value: function pushLeftBeforeFilled() {
      var _this = this;

      return this._pushLeft(function () {
        if (_this.block.isFixed || !_this.block.value) return;
        _this.offset = _this.block.nearestInputPos(_this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT);
        if (_this.offset !== 0) return true;
      });
    }
  }, {
    key: "pushLeftBeforeInput",
    value: function pushLeftBeforeInput() {
      var _this2 = this;

      // cases:
      // filled input: 00|
      // optional empty input: 00[]|
      // nested block: XX<[]>|
      return this._pushLeft(function () {
        if (_this2.block.isFixed) return;
        _this2.offset = _this2.block.nearestInputPos(_this2.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushLeftBeforeRequired",
    value: function pushLeftBeforeRequired() {
      var _this3 = this;

      return this._pushLeft(function () {
        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
        _this3.offset = _this3.block.nearestInputPos(_this3.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushRightBeforeFilled",
    value: function pushRightBeforeFilled() {
      var _this4 = this;

      return this._pushRight(function () {
        if (_this4.block.isFixed || !_this4.block.value) return;
        _this4.offset = _this4.block.nearestInputPos(_this4.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT);
        if (_this4.offset !== _this4.block.value.length) return true;
      });
    }
  }, {
    key: "pushRightBeforeInput",
    value: function pushRightBeforeInput() {
      var _this5 = this;

      return this._pushRight(function () {
        if (_this5.block.isFixed) return; // const o = this.offset;

        _this5.offset = _this5.block.nearestInputPos(_this5.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
        // aa|X
        // aa<X|[]>X_    - this will not work
        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

        return true;
      });
    }
  }, {
    key: "pushRightBeforeRequired",
    value: function pushRightBeforeRequired() {
      var _this6 = this;

      return this._pushRight(function () {
        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

        _this6.offset = _this6.block.nearestInputPos(_this6.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE);
        return true;
      });
    }
  }]);

  return PatternCursor;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternFixedDefinition)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");





var PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
    this.isFixed = true;
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternFixedDefinition, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT:
          return minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return Boolean(this._value);
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      var appended = this.char === ch;
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return this._appendChar(this.char);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str[0], flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_INPUT_DEFINITIONS": () => (/* binding */ DEFAULT_INPUT_DEFINITIONS),
/* harmony export */   "default": () => (/* binding */ PatternInputDefinition)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.b)(opts, _excluded);

    this.masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this.isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(ch, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      // TODO probably should be done via _appendChar
      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.isFilled || this.isOptional) return details;
      this.isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
  }]);

  return PatternInputDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PIPE_TYPE": () => (/* binding */ PIPE_TYPE),
/* harmony export */   "createPipe": () => (/* binding */ createPipe),
/* harmony export */   "pipe": () => (/* binding */ pipe)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");






/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */

function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRange)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Pattern which accepts ranges */

var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedRange, _MaskedPattern);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedRange);

  function MaskedRange() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedRange);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedRange, [{
    key: "_matchFrom",
    get:
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    function get() {
      return this.maxLength - String(this.from).length;
    }
    /**
      @override
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0,
        maxLength: this.maxLength || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    } // TODO str is a single char everytime

    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details;

      var _normalizePrepare = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.normalizePrepare)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

      var _normalizePrepare2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      if (!this.autofix || !ch) return ch;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var nextVal = this.value + ch;
      if (nextVal.length > this.maxLength) return '';

      var _this$boundaries = this.boundaries(nextVal),
          _this$boundaries2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$boundaries, 2),
          minstr = _this$boundaries2[0],
          maxstr = _this$boundaries2[1];

      if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

      if (Number(minstr) > this.to) {
        if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
          return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
        }

        return toStr[nextVal.length - 1];
      }

      return ch;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.f)(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedRange;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedRange = MaskedRange;




/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRegExp)
/* harmony export */ });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by RegExp */

var MaskedRegExp = /*#__PURE__*/function (_Masked) {
  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.d)(MaskedRegExp, _Masked);

  var _super = (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.e)(MaskedRegExp);

  function MaskedRegExp() {
    (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.a)(this, MaskedRegExp);

    return _super.apply(this, arguments);
  }

  (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__._)(MaskedRegExp, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      (0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.g)((0,_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__.h)(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRegExp = MaskedRegExp;




/***/ }),

/***/ "./src/card.blocks/registration/registration.scss":
/*!********************************************************!*\
  !*** ./src/card.blocks/registration/registration.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/button/button.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/button/button.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/footer/footer.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/footer/footer.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/header/header.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/header/header.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/input/input.scss":
/*!********************************************!*\
  !*** ./src/common.blocks/input/input.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/logo/logo.scss":
/*!******************************************!*\
  !*** ./src/common.blocks/logo/logo.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/radio/radio.scss":
/*!********************************************!*\
  !*** ./src/common.blocks/radio/radio.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/social/social.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/social/social.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common.blocks/toggle/toggle.scss":
/*!**********************************************!*\
  !*** ./src/common.blocks/toggle/toggle.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/registration/registration.scss":
/*!**************************************************!*\
  !*** ./src/pages/registration/registration.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/card.blocks/registration/registration.js":
/*!******************************************************!*\
  !*** ./src/card.blocks/registration/registration.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.scss */ "./src/card.blocks/registration/registration.scss");
/* harmony import */ var common_input_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/input/input.js */ "./src/common.blocks/input/input.js");
/* harmony import */ var common_radio_radio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/radio/radio.js */ "./src/common.blocks/radio/radio.js");
/* harmony import */ var common_toggle_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/toggle/toggle.js */ "./src/common.blocks/toggle/toggle.js");
/* harmony import */ var common_button_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/button/button.js */ "./src/common.blocks/button/button.js");







/***/ }),

/***/ "./src/common.blocks/button/button.js":
/*!********************************************!*\
  !*** ./src/common.blocks/button/button.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/common.blocks/button/button.scss");



/***/ }),

/***/ "./src/common.blocks/footer/footer.js":
/*!********************************************!*\
  !*** ./src/common.blocks/footer/footer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./src/common.blocks/footer/footer.scss");
/* harmony import */ var common_input_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/input/input.js */ "./src/common.blocks/input/input.js");
/* harmony import */ var common_social_social_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/social/social.js */ "./src/common.blocks/social/social.js");
/* harmony import */ var common_logo_logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/logo/logo.js */ "./src/common.blocks/logo/logo.js");






/***/ }),

/***/ "./src/common.blocks/header/header.js":
/*!********************************************!*\
  !*** ./src/common.blocks/header/header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/common.blocks/header/header.scss");
/* harmony import */ var common_button_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/button/button.js */ "./src/common.blocks/button/button.js");
/* harmony import */ var common_logo_logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/logo/logo.js */ "./src/common.blocks/logo/logo.js");




let headerElements = document.querySelectorAll('.header');

for (let element of headerElements) {
  let mobileMenu = element.querySelector('.header__mobile-menu');
  let menu = element.querySelector('.header__menu');
  let arrowMenuLinks = Array.from(element.querySelectorAll('.header__menu-link_arrow'));
  let submenuElements = Array.from(element.querySelectorAll('.header__submenu'));

  let switchMenuVisibility = () => {
    if (!menu.classList.contains('header__menu_visible')) {
      menu.classList.add('header__menu_visible');
    } else {
      menu.classList.remove('header__menu_visible');
    };
  };

  let switchSubmenuVisibility = (i) => {
    if (!submenuElements[i].classList.contains('header__submenu_visible')) {
      
      submenuElements[i].classList.add('header__submenu_visible');
    } else {
      submenuElements[i].classList.remove('header__submenu_visible');
    };
  };

  mobileMenu.onmousedown = () => {
    switchMenuVisibility();
  };

  mobileMenu.onkeydown = (e) => {
    e.key == 'Enter' && switchMenuVisibility();
  };

  document.addEventListener('mousedown', (event) => {
    if (!mobileMenu.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove('header__menu_visible');
    };
  });

  for (let i in arrowMenuLinks) {
    arrowMenuLinks[i].onmousedown = () => {
      switchSubmenuVisibility(i);
    };

    arrowMenuLinks[i].onkeydown = (e) => {
      e.key == 'Enter' && switchSubmenuVisibility(i);
    };

    document.body.addEventListener('mousedown', (event) => {
      if (!arrowMenuLinks[i].contains(event.target) && !submenuElements[i].contains(event.target)) {
        submenuElements[i].classList.remove('header__submenu_visible');
      };
    });
  };
};


/***/ }),

/***/ "./src/common.blocks/input/input.js":
/*!******************************************!*\
  !*** ./src/common.blocks/input/input.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.scss */ "./src/common.blocks/input/input.scss");



let inputElements = document.querySelectorAll('.input');
let dateMask = (element) => (0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(element, {
  mask: 'ДД.ММ.ГГГГ',
  blocks: {
    ГГГГ: {
      mask: '0000'
    },
    ММ: {
      mask: imask__WEBPACK_IMPORTED_MODULE_0__["default"].MaskedRange,
      from: 1,
      to: 12
    },
    ДД: {
      mask: imask__WEBPACK_IMPORTED_MODULE_0__["default"].MaskedRange,
      from: 1,
      to: 31
    }
  }
});

for (let element of inputElements) {
  let inputShell = element.querySelector('.input__shell');
  let inputInside = inputShell.querySelector('.input__inside');

  switch (inputInside.dataset.mask) {
    case 'date':
      dateMask(inputInside);
      break;
  };
}


/***/ }),

/***/ "./src/common.blocks/logo/logo.js":
/*!****************************************!*\
  !*** ./src/common.blocks/logo/logo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.scss */ "./src/common.blocks/logo/logo.scss");



/***/ }),

/***/ "./src/common.blocks/radio/radio.js":
/*!******************************************!*\
  !*** ./src/common.blocks/radio/radio.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.scss */ "./src/common.blocks/radio/radio.scss");


let radioElements = document.querySelectorAll('.radio');

for (let element of radioElements) {
  let elementLabels = element.querySelectorAll('.radio__label');
  let fieldGroups = element.querySelectorAll('.radio__fields');

  for (let label of elementLabels) {
    let hiddenField = label.querySelector('.radio__field_hidden');
    let visibleField = label.querySelector('.radio__field_visible');
    let labelFlag = label.querySelector('.radio__flag');

    if (hiddenField.checked === true) {
      visibleField.classList.add('radio__field_checked');
      labelFlag.classList.add('radio__flag_visible');
      label.classList.add('radio__label_checked');
    };

    hiddenField.onchange = () => {
      for (let group of fieldGroups) {
        let visibleField = group.querySelector('.radio__field_visible');
        let labelFlag = group.querySelector('.radio__flag');
        if (visibleField.classList.contains('radio__field_checked')) {
          visibleField.classList.remove('radio__field_checked');
          visibleField.parentElement.parentElement.classList.remove('radio__label_checked');
          labelFlag.classList.remove('radio__flag_visible');
        };
      };
      visibleField.classList.add('radio__field_checked');
      labelFlag.classList.add('radio__flag_visible');
      label.classList.add('radio__label_checked');
    };
  };
};

/***/ }),

/***/ "./src/common.blocks/social/social.js":
/*!********************************************!*\
  !*** ./src/common.blocks/social/social.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.scss */ "./src/common.blocks/social/social.scss");


/***/ }),

/***/ "./src/common.blocks/toggle/toggle.js":
/*!********************************************!*\
  !*** ./src/common.blocks/toggle/toggle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.scss */ "./src/common.blocks/toggle/toggle.scss");


let toggleElements = document.querySelectorAll('.toggle');

for (let element of toggleElements) {
  let elementLabels = element.querySelectorAll('.toggle__label');

  for (let label of elementLabels) {
    let hiddenField = label.querySelector('.toggle__field_hidden');
    let visibleField = label.querySelector('.toggle__field_visible');
    let labelFlag = label.querySelector('.toggle__flag');

    if (hiddenField.checked === true) {
      visibleField.classList.add('toggle__field_active');
      labelFlag.classList.add('toggle__flag_active');
    };

    hiddenField.onchange = () => {
      if (hiddenField.checked) {
        visibleField.classList.add('toggle__field_active');
        labelFlag.classList.add('toggle__flag_active');
      } else {
        visibleField.classList.remove('toggle__field_active');
        labelFlag.classList.remove('toggle__flag_active');
      };
    };
  };
};


/***/ }),

/***/ "./src/assets/images/slide_1.png":
/*!***************************************!*\
  !*** ./src/assets/images/slide_1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/slide_1.85603ede18bbfd367f6e..png";

/***/ }),

/***/ "./src/assets/images/slide_3.png":
/*!***************************************!*\
  !*** ./src/assets/images/slide_3.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/slide_3.c8c17f7d0b54da2fc813..png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/pages/registration/registration.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.scss */ "./src/pages/registration/registration.scss");
/* harmony import */ var common_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/header/header.js */ "./src/common.blocks/header/header.js");
/* harmony import */ var common_footer_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/footer/footer.js */ "./src/common.blocks/footer/footer.js");
/* harmony import */ var cards_registration_registration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cards/registration/registration.js */ "./src/card.blocks/registration/registration.js");
/* harmony import */ var assets_images_slide_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/slide_1.png */ "./src/assets/images/slide_1.png");
/* harmony import */ var assets_images_slide_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/slide_3.png */ "./src/assets/images/slide_3.png");







let pageSlideshow = document.querySelector('.page__slideshow');

pageSlideshow.style.backgroundImage = `url(${assets_images_slide_3_png__WEBPACK_IMPORTED_MODULE_5__})`;

setInterval(() => {
  if (pageSlideshow.style.backgroundImage == `url(${assets_images_slide_1_png__WEBPACK_IMPORTED_MODULE_4__})`) {
    pageSlideshow.style.opacity = 0;
    setTimeout(() => {
      pageSlideshow.style.backgroundImage = `url(${assets_images_slide_3_png__WEBPACK_IMPORTED_MODULE_5__})`;
      pageSlideshow.style.opacity = 1;
    }, 1000);
  } else {
    pageSlideshow.style.opacity = 0;
    setTimeout(() => {
      pageSlideshow.style.backgroundImage = `url(${assets_images_slide_1_png__WEBPACK_IMPORTED_MODULE_4__})`;
      pageSlideshow.style.opacity = 1;
    }, 500);
  };
}, 10000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0k7QUFDQTtBQUNXO0FBQ0c7QUFDQTs7QUFFL0M7O0FBRUEsNkNBQTZDLHNEQUFNLENBQUM7O0FBRXBEO0FBQ0Esb0RBQW9ELHNEQUFNLENBQUM7QUFDM0Q7QUFDQTtBQUNBLG1EQUFtRCxzREFBTSxDQUFDO0FBQzFEO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsbURBQW1ELHNEQUFNLENBQUM7QUFDMUQ7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1jb250ZW50ZWRpdGFibGUtbWFzay1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb250cm9scy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvYWN0aW9uLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2NvcmUvaG9sZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vY29yZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL2VudW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW1hc2svZXNtL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbWFzay9lc20vbWFza2VkL3BpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2VzbS9tYXNrZWQvcmVnZXhwLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkLmJsb2Nrcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnNjc3M/ZmIwMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9idXR0b24vYnV0dG9uLnNjc3M/NTg5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9mb290ZXIvZm9vdGVyLnNjc3M/OWIwMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9oZWFkZXIvaGVhZGVyLnNjc3M/ODk2NCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9pbnB1dC9pbnB1dC5zY3NzPzhmYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvbG9nby9sb2dvLnNjc3M/MzJhMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9yYWRpby9yYWRpby5zY3NzPzJmOGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3Mvc29jaWFsL3NvY2lhbC5zY3NzP2NjOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvdG9nZ2xlL3RvZ2dsZS5zY3NzPzdjMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uc2Nzcz9hMzI0Iiwid2VicGFjazovLy8uL3NyYy9jYXJkLmJsb2Nrcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2lucHV0L2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2xvZ28vbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9yYWRpby9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy90b2dnbGUvdG9nZ2xlLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIF9nZXQoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwoYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiByZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkge1xuICAgIHNldCA9IFJlZmxlY3Quc2V0O1xuICB9IGVsc2Uge1xuICAgIHNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIHZhciBkZXNjO1xuXG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG59XG5cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkge1xuICB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcblxuICBpZiAoIXMgJiYgaXNTdHJpY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZXhwb3J0IHsgX2NyZWF0ZUNsYXNzIGFzIF8sIF9jbGFzc0NhbGxDaGVjayBhcyBhLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgYXMgYiwgX3R5cGVvZiBhcyBjLCBfaW5oZXJpdHMgYXMgZCwgX2NyZWF0ZVN1cGVyIGFzIGUsIF9zbGljZWRUb0FycmF5IGFzIGYsIF9nZXQgYXMgZywgX2dldFByb3RvdHlwZU9mIGFzIGgsIF9zZXQgYXMgaSB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBIVE1MTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLW1hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuL21hc2stZWxlbWVudC5qcyc7XG5cbnZhciBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9IVE1MTWFza0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCwgX0hUTUxNYXNrRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQpO1xuXG4gIGZ1bmN0aW9uIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KTtcblxuICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDpcbiAgICAvKipcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0XG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuICAgICAgdmFyIGFuY2hvck9mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0O1xuICAgICAgdmFyIGZvY3VzT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5mb2N1c09mZnNldDtcblxuICAgICAgaWYgKGZvY3VzT2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yT2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yT2Zmc2V0IDwgZm9jdXNPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGFuY2hvck9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvY3VzT2Zmc2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIGVuZFxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25FbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuICAgICAgdmFyIGFuY2hvck9mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0O1xuICAgICAgdmFyIGZvY3VzT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5mb2N1c09mZnNldDtcblxuICAgICAgaWYgKGZvY3VzT2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yT2Zmc2V0ID09IG51bGwgfHwgYW5jaG9yT2Zmc2V0ID4gZm9jdXNPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGFuY2hvck9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvY3VzT2Zmc2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgIFNldHMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpIHtcbiAgICAgIGlmICghdGhpcy5yb290RWxlbWVudC5jcmVhdGVSYW5nZSkgcmV0dXJuO1xuICAgICAgdmFyIHJhbmdlID0gdGhpcy5yb290RWxlbWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgcmFuZ2Uuc2V0U3RhcnQodGhpcy5pbnB1dC5maXJzdENoaWxkIHx8IHRoaXMuaW5wdXQsIHN0YXJ0KTtcbiAgICAgIHJhbmdlLnNldEVuZCh0aGlzLmlucHV0Lmxhc3RDaGlsZCB8fCB0aGlzLmlucHV0LCBlbmQpO1xuICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uICYmIHJvb3QuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgIEhUTUxFbGVtZW50IHZhbHVlXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnRleHRDb250ZW50O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50O1xufShIVE1MTWFza0VsZW1lbnQpO1xuSU1hc2suSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50ID0gSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50O1xuXG5leHBvcnQgeyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBNYXNrRWxlbWVudCBmcm9tICcuL21hc2stZWxlbWVudC5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuXG4vKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbnZhciBIVE1MTWFza0VsZW1lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTE1hc2tFbGVtZW50LCBfTWFza0VsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTE1hc2tFbGVtZW50KTtcblxuICAvKiogTWFwcGluZyBiZXR3ZWVuIEhUTUxFbGVtZW50IGV2ZW50cyBhbmQgbWFzayBpbnRlcm5hbCBldmVudHMgKi9cblxuICAvKiogSFRNTEVsZW1lbnQgdG8gdXNlIG1hc2sgb24gKi9cblxuICAvKipcbiAgICBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcbiAgKi9cbiAgZnVuY3Rpb24gSFRNTE1hc2tFbGVtZW50KGlucHV0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxNYXNrRWxlbWVudCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgX3RoaXMuX2hhbmRsZXJzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKiAqL1xuICAvLyAkRmxvd0ZpeE1lIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8yODM5XG5cblxuICBfY3JlYXRlQ2xhc3MoSFRNTE1hc2tFbGVtZW50LCBbe1xuICAgIGtleTogXCJyb290RWxlbWVudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJGlucHV0JGdldFJvb3RObywgX3RoaXMkaW5wdXQkZ2V0Um9vdE5vMiwgX3RoaXMkaW5wdXQ7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkaW5wdXQkZ2V0Um9vdE5vID0gKF90aGlzJGlucHV0JGdldFJvb3RObzIgPSAoX3RoaXMkaW5wdXQgPSB0aGlzLmlucHV0KS5nZXRSb290Tm9kZSkgPT09IG51bGwgfHwgX3RoaXMkaW5wdXQkZ2V0Um9vdE5vMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkaW5wdXQkZ2V0Um9vdE5vMi5jYWxsKF90aGlzJGlucHV0KSkgIT09IG51bGwgJiYgX3RoaXMkaW5wdXQkZ2V0Um9vdE5vICE9PSB2b2lkIDAgPyBfdGhpcyRpbnB1dCRnZXRSb290Tm8gOiBkb2N1bWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBJcyBlbGVtZW50IGluIGZvY3VzXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNBY3RpdmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQgPT09IHRoaXMucm9vdEVsZW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvbkVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFNldHMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgSFRNTEVsZW1lbnQgdmFsdWVcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50c1xuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cyhoYW5kbGVycykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKGhhbmRsZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLl90b2dnbGVFdmVudEhhbmRsZXIoSFRNTE1hc2tFbGVtZW50LkVWRU5UU19NQVBbZXZlbnRdLCBoYW5kbGVyc1tldmVudF0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgVW5iaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2hhbmRsZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLl90b2dnbGVFdmVudEhhbmRsZXIoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3RvZ2dsZUV2ZW50SGFuZGxlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbZXZlbnRdKSB7XG4gICAgICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy5faGFuZGxlcnNbZXZlbnRdKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2hhbmRsZXJzW2V2ZW50XTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbZXZlbnRdID0gaGFuZGxlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSFRNTE1hc2tFbGVtZW50O1xufShNYXNrRWxlbWVudCk7XG5IVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUCA9IHtcbiAgc2VsZWN0aW9uQ2hhbmdlOiAna2V5ZG93bicsXG4gIGlucHV0OiAnaW5wdXQnLFxuICBkcm9wOiAnZHJvcCcsXG4gIGNsaWNrOiAnY2xpY2snLFxuICBmb2N1czogJ2ZvY3VzJyxcbiAgY29tbWl0OiAnYmx1cidcbn07XG5JTWFzay5IVE1MTWFza0VsZW1lbnQgPSBIVE1MTWFza0VsZW1lbnQ7XG5cbmV4cG9ydCB7IEhUTUxNYXNrRWxlbWVudCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgeyBvYmplY3RJbmNsdWRlcywgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQWN0aW9uRGV0YWlscyBmcm9tICcuLi9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL2RhdGUuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2ssIHsgbWFza2VkQ2xhc3MgfSBmcm9tICcuLi9tYXNrZWQvZmFjdG9yeS5qcyc7XG5pbXBvcnQgTWFza0VsZW1lbnQgZnJvbSAnLi9tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IEhUTUxNYXNrRWxlbWVudCBmcm9tICcuL2h0bWwtbWFzay1lbGVtZW50LmpzJztcbmltcG9ydCBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgZnJvbSAnLi9odG1sLWNvbnRlbnRlZGl0YWJsZS1tYXNrLWVsZW1lbnQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL2Jhc2UuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4uL21hc2tlZC9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0ICcuLi9tYXNrZWQvcmVnZXhwLmpzJztcbmltcG9ydCAnLi4vbWFza2VkL3JhbmdlLmpzJztcblxudmFyIF9leGNsdWRlZCA9IFtcIm1hc2tcIl07XG4vKiogTGlzdGVucyB0byBlbGVtZW50IGV2ZW50cyBhbmQgY29udHJvbHMgY2hhbmdlcyBiZXR3ZWVuIGVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbnZhciBJbnB1dE1hc2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICBWaWV3IGVsZW1lbnRcbiAgICBAcmVhZG9ubHlcbiAgKi9cblxuICAvKipcbiAgICBJbnRlcm5hbCB7QGxpbmsgTWFza2VkfSBtb2RlbFxuICAgIEByZWFkb25seVxuICAqL1xuXG4gIC8qKlxuICAgIEBwYXJhbSB7TWFza0VsZW1lbnR8SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBlbFxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICovXG4gIGZ1bmN0aW9uIElucHV0TWFzayhlbCwgb3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dE1hc2spO1xuXG4gICAgdGhpcy5lbCA9IGVsIGluc3RhbmNlb2YgTWFza0VsZW1lbnQgPyBlbCA6IGVsLmlzQ29udGVudEVkaXRhYmxlICYmIGVsLnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZWwudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyA/IG5ldyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQoZWwpIDogbmV3IEhUTUxNYXNrRWxlbWVudChlbCk7XG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKG9wdHMpO1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24gPSB0aGlzLl9zYXZlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ecm9wID0gdGhpcy5fb25Ecm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3IgPSB0aGlzLmFsaWduQ3Vyc29yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5ID0gdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7IC8vIHJlZnJlc2hcblxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuICAvKiogUmVhZCBvciB1cGRhdGUgbWFzayAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0TWFzaywgW3tcbiAgICBrZXk6IFwibWFza1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChtYXNrKSB7XG4gICAgICBpZiAodGhpcy5tYXNrRXF1YWxzKG1hc2spKSByZXR1cm47IC8vICRGbG93Rml4TWUgTm8gaWRlYXMgLi4uIGFmdGVyIHVwZGF0ZVxuXG4gICAgICBpZiAoIShtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSAmJiB0aGlzLm1hc2tlZC5jb25zdHJ1Y3RvciA9PT0gbWFza2VkQ2xhc3MobWFzaykpIHtcbiAgICAgICAgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWFza2VkID0gY3JlYXRlTWFzayh7XG4gICAgICAgIG1hc2s6IG1hc2tcbiAgICAgIH0pO1xuICAgICAgbWFza2VkLnVubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgICAgdGhpcy5tYXNrZWQgPSBtYXNrZWQ7XG4gICAgfVxuICAgIC8qKiBSYXcgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tFcXVhbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza0VxdWFscyhtYXNrKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkO1xuXG4gICAgICByZXR1cm4gbWFzayA9PSBudWxsIHx8ICgoX3RoaXMkbWFza2VkID0gdGhpcy5tYXNrZWQpID09PSBudWxsIHx8IF90aGlzJG1hc2tlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkbWFza2VkLm1hc2tFcXVhbHMobWFzaykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHN0cjtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogVW5tYXNrZWQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl91bm1hc2tlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlID0gc3RyO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBUeXBlZCB1bm1hc2tlZCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgIHRoaXMubWFza2VkLnR5cGVkVmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBTdGFydHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9iaW5kRXZlbnRzKCkge1xuICAgICAgdGhpcy5lbC5iaW5kRXZlbnRzKHtcbiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLl9zYXZlU2VsZWN0aW9uLFxuICAgICAgICBpbnB1dDogdGhpcy5fb25JbnB1dCxcbiAgICAgICAgZHJvcDogdGhpcy5fb25Ecm9wLFxuICAgICAgICBjbGljazogdGhpcy5fb25DbGljayxcbiAgICAgICAgZm9jdXM6IHRoaXMuX29uRm9jdXMsXG4gICAgICAgIGNvbW1pdDogdGhpcy5fb25DaGFuZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFN0b3BzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xuICAgICAgQHByb3RlY3RlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5iaW5kRXZlbnRzKCkge1xuICAgICAgaWYgKHRoaXMuZWwpIHRoaXMuZWwudW5iaW5kRXZlbnRzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgRmlyZXMgY3VzdG9tIGV2ZW50XG4gICAgICBAcHJvdGVjdGVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZmlyZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maXJlRXZlbnQoZXYpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xuICAgICAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBDdXJyZW50IHNlbGVjdGlvbiBzdGFydFxuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdGlvblN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPyB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6IHRoaXMuZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgfVxuICAgIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY3Vyc29yUG9zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPyB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6IHRoaXMuZWwuc2VsZWN0aW9uRW5kO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocG9zKSB7XG4gICAgICBpZiAoIXRoaXMuZWwgfHwgIXRoaXMuZWwuaXNBY3RpdmUpIHJldHVybjtcbiAgICAgIHRoaXMuZWwuc2VsZWN0KHBvcywgcG9zKTtcblxuICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFN0b3JlcyBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2F2ZVNlbGVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvblxuICAgICAgLyogZXYgKi9cbiAgICBfc2F2ZVNlbGVjdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRWxlbWVudCB2YWx1ZSB3YXMgY2hhbmdlZCBvdXRzaWRlIG9mIG1hc2suIFN5bmNyb25pemUgbWFzayB1c2luZyBgbWFzay51cGRhdGVWYWx1ZSgpYCB0byB3b3JrIHByb3Blcmx5LicpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VsZWN0aW9uID0ge1xuICAgICAgICBzdGFydDogdGhpcy5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgZW5kOiB0aGlzLmN1cnNvclBvc1xuICAgICAgfTtcbiAgICB9XG4gICAgLyoqIFN5bmNyb25pemVzIG1vZGVsIHZhbHVlIGZyb20gdmlldyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVmFsdWUoKSB7XG4gICAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHRoaXMuZWwudmFsdWU7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xuICAgIH1cbiAgICAvKiogU3luY3Jvbml6ZXMgdmlldyBmcm9tIG1vZGVsIHZhbHVlLCBmaXJlcyBjaGFuZ2UgZXZlbnRzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVDb250cm9sXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUNvbnRyb2woKSB7XG4gICAgICB2YXIgbmV3VW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcbiAgICAgIHZhciBpc0NoYW5nZWQgPSB0aGlzLnVubWFza2VkVmFsdWUgIT09IG5ld1VubWFza2VkVmFsdWUgfHwgdGhpcy52YWx1ZSAhPT0gbmV3VmFsdWU7XG4gICAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gbmV3VW5tYXNrZWRWYWx1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBpZiAodGhpcy5lbC52YWx1ZSAhPT0gbmV3VmFsdWUpIHRoaXMuZWwudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGlmIChpc0NoYW5nZWQpIHRoaXMuX2ZpcmVDaGFuZ2VFdmVudHMoKTtcbiAgICB9XG4gICAgLyoqIFVwZGF0ZXMgb3B0aW9ucyB3aXRoIGRlZXAgZXF1YWwgY2hlY2ssIHJlY3JlYXRlcyBAe2xpbmsgTWFza2VkfSBtb2RlbCBpZiBtYXNrIHR5cGUgY2hhbmdlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICAgIHZhciBtYXNrID0gb3B0cy5tYXNrLFxuICAgICAgICAgIHJlc3RPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIF9leGNsdWRlZCk7XG5cbiAgICAgIHZhciB1cGRhdGVNYXNrID0gIXRoaXMubWFza0VxdWFscyhtYXNrKTtcbiAgICAgIHZhciB1cGRhdGVPcHRzID0gIW9iamVjdEluY2x1ZGVzKHRoaXMubWFza2VkLCByZXN0T3B0cyk7XG4gICAgICBpZiAodXBkYXRlTWFzaykgdGhpcy5tYXNrID0gbWFzaztcbiAgICAgIGlmICh1cGRhdGVPcHRzKSB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHJlc3RPcHRzKTtcbiAgICAgIGlmICh1cGRhdGVNYXNrIHx8IHVwZGF0ZU9wdHMpIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIH1cbiAgICAvKiogVXBkYXRlcyBjdXJzb3IgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICBpZiAoY3Vyc29yUG9zID09IG51bGwpIHJldHVybjtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zOyAvLyBhbHNvIHF1ZXVlIGNoYW5nZSBjdXJzb3IgZm9yIG1vYmlsZSBicm93c2Vyc1xuXG4gICAgICB0aGlzLl9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIERlbGF5cyBjdXJzb3IgdXBkYXRlIHRvIHN1cHBvcnQgbW9iaWxlIGJyb3dzZXJzXG4gICAgICBAcHJpdmF0ZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZGVsYXlVcGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcblxuICAgICAgdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG4gICAgICB0aGlzLl9jdXJzb3JDaGFuZ2luZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLmVsKSByZXR1cm47IC8vIGlmIHdhcyBkZXN0cm95ZWRcblxuICAgICAgICBfdGhpcy5jdXJzb3JQb3MgPSBfdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3M7XG5cbiAgICAgICAgX3RoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgRmlyZXMgY3VzdG9tIGV2ZW50c1xuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZmlyZUNoYW5nZUV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUNoYW5nZUV2ZW50cygpIHtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCgnYWNjZXB0JywgdGhpcy5faW5wdXRFdmVudCk7XG5cbiAgICAgIGlmICh0aGlzLm1hc2tlZC5pc0NvbXBsZXRlKSB0aGlzLl9maXJlRXZlbnQoJ2NvbXBsZXRlJywgdGhpcy5faW5wdXRFdmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQWJvcnRzIGRlbGF5ZWQgY3Vyc29yIHVwZGF0ZVxuICAgICAgQHByaXZhdGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2Fib3J0VXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hYm9ydFVwZGF0ZUN1cnNvcigpIHtcbiAgICAgIGlmICh0aGlzLl9jdXJzb3JDaGFuZ2luZykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fY3Vyc29yQ2hhbmdpbmcpO1xuICAgICAgICBkZWxldGUgdGhpcy5fY3Vyc29yQ2hhbmdpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBBbGlnbnMgY3Vyc29yIHRvIG5lYXJlc3QgYXZhaWxhYmxlIHBvc2l0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGlnbkN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvcigpIHtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLmN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpKTtcbiAgICB9XG4gICAgLyoqIEFsaWducyBjdXJzb3Igb25seSBpZiBzZWxlY3Rpb24gaXMgZW1wdHkgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsaWduQ3Vyc29yRnJpZW5kbHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxpZ25DdXJzb3JGcmllbmRseSgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG5cbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqIEFkZHMgbGlzdGVuZXIgb24gY3VzdG9tIGV2ZW50ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldiwgaGFuZGxlcikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSB0aGlzLl9saXN0ZW5lcnNbZXZdID0gW107XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldl0ucHVzaChoYW5kbGVyKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBSZW1vdmVzIGN1c3RvbSBldmVudCBsaXN0ZW5lciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2ZmXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZihldiwgaGFuZGxlcikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIGhJbmRleCA9IHRoaXMuX2xpc3RlbmVyc1tldl0uaW5kZXhPZihoYW5kbGVyKTtcblxuICAgICAgaWYgKGhJbmRleCA+PSAwKSB0aGlzLl9saXN0ZW5lcnNbZXZdLnNwbGljZShoSW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBIYW5kbGVzIHZpZXcgaW5wdXQgZXZlbnQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbklucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbklucHV0KGUpIHtcbiAgICAgIHRoaXMuX2lucHV0RXZlbnQgPSBlO1xuXG4gICAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpOyAvLyBmaXggc3RyYW5nZSBJRSBiZWhhdmlvclxuXG5cbiAgICAgIGlmICghdGhpcy5fc2VsZWN0aW9uKSByZXR1cm4gdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQWN0aW9uRGV0YWlscyggLy8gbmV3IHN0YXRlXG4gICAgICB0aGlzLmVsLnZhbHVlLCB0aGlzLmN1cnNvclBvcywgLy8gb2xkIHN0YXRlXG4gICAgICB0aGlzLnZhbHVlLCB0aGlzLl9zZWxlY3Rpb24pO1xuICAgICAgdmFyIG9sZFJhd1ZhbHVlID0gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZTtcbiAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm1hc2tlZC5zcGxpY2UoZGV0YWlscy5zdGFydENoYW5nZVBvcywgZGV0YWlscy5yZW1vdmVkLmxlbmd0aCwgZGV0YWlscy5pbnNlcnRlZCwgZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24pLm9mZnNldDsgLy8gZm9yY2UgYWxpZ24gaW4gcmVtb3ZlIGRpcmVjdGlvbiBvbmx5IGlmIG5vIGlucHV0IGNoYXJzIHdlcmUgcmVtb3ZlZFxuICAgICAgLy8gb3RoZXJ3aXNlIHdlIHN0aWxsIG5lZWQgdG8gYWxpZ24gd2l0aCBOT05FICh0byBnZXQgb3V0IGZyb20gZml4ZWQgc3ltYm9scyBmb3IgaW5zdGFuY2UpXG5cbiAgICAgIHZhciByZW1vdmVEaXJlY3Rpb24gPSBvbGRSYXdWYWx1ZSA9PT0gdGhpcy5tYXNrZWQucmF3SW5wdXRWYWx1ZSA/IGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MgKyBvZmZzZXQsIHJlbW92ZURpcmVjdGlvbik7XG4gICAgICBpZiAocmVtb3ZlRGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSkgY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgRElSRUNUSU9OLk5PTkUpO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgICAgZGVsZXRlIHRoaXMuX2lucHV0RXZlbnQ7XG4gICAgfVxuICAgIC8qKiBIYW5kbGVzIHZpZXcgY2hhbmdlIGV2ZW50IGFuZCBjb21taXRzIG1vZGVsIHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25DaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uQ2hhbmdlKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1hc2tlZC5kb0NvbW1pdCgpO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG5cbiAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gICAgLyoqIEhhbmRsZXMgdmlldyBkcm9wIGV2ZW50LCBwcmV2ZW50cyBieSBkZWZhdWx0ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25Ecm9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRyb3AoZXYpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkZvY3VzKGV2KSB7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkoKTtcbiAgICB9XG4gICAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkNsaWNrKGV2KSB7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkoKTtcbiAgICB9XG4gICAgLyoqIFVuYmluZCB2aWV3IGV2ZW50cyBhbmQgcmVtb3ZlcyBlbGVtZW50IHJlZmVyZW5jZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy5fdW5iaW5kRXZlbnRzKCk7IC8vICRGbG93Rml4TWUgd2h5IG5vdCBkbyBzbz9cblxuXG4gICAgICB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID0gMDsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBkZWxldGUgdGhpcy5lbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXRNYXNrO1xufSgpO1xuSU1hc2suSW5wdXRNYXNrID0gSW5wdXRNYXNrO1xuXG5leHBvcnQgeyBJbnB1dE1hc2sgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuXG4vKipcbiAgR2VuZXJpYyBlbGVtZW50IEFQSSB0byB1c2Ugd2l0aCBtYXNrXG4gIEBpbnRlcmZhY2VcbiovXG52YXIgTWFza0VsZW1lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXNrRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza0VsZW1lbnQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tFbGVtZW50LCBbe1xuICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDpcbiAgICAvKiogKi9cblxuICAgIC8qKiAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogU2FmZWx5IHJldHVybnMgc2VsZWN0aW9uIHN0YXJ0ICovXG4gICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHN0YXJ0O1xuXG4gICAgICB0cnkge1xuICAgICAgICBzdGFydCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvblN0YXJ0O1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuIHN0YXJ0ICE9IG51bGwgPyBzdGFydCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICAvKiogU2FmZWx5IHJldHVybnMgc2VsZWN0aW9uIGVuZCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0aW9uRW5kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgZW5kO1xuXG4gICAgICB0cnkge1xuICAgICAgICBlbmQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25FbmQ7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICByZXR1cm4gZW5kICE9IG51bGwgPyBlbmQgOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqIFNhZmVseSBzZXRzIGVsZW1lbnQgc2VsZWN0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KHN0YXJ0LCBlbmQpIHtcbiAgICAgIGlmIChzdGFydCA9PSBudWxsIHx8IGVuZCA9PSBudWxsIHx8IHN0YXJ0ID09PSB0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIGVuZCA9PT0gdGhpcy5zZWxlY3Rpb25FbmQpIHJldHVybjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpIHt9XG4gICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNBY3RpdmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRXZlbnRzKGhhbmRsZXJzKSB7fVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7fVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tFbGVtZW50O1xufSgpO1xuSU1hc2suTWFza0VsZW1lbnQgPSBNYXNrRWxlbWVudDtcblxuZXhwb3J0IHsgTWFza0VsZW1lbnQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCAnLi9jaGFuZ2UtZGV0YWlscy5qcyc7XG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIGlucHV0ICovXG5cbnZhciBBY3Rpb25EZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqIEN1cnJlbnQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICAvKiogT2xkIGlucHV0IHZhbHVlICovXG5cbiAgLyoqIE9sZCBzZWxlY3Rpb24gKi9cbiAgZnVuY3Rpb24gQWN0aW9uRGV0YWlscyh2YWx1ZSwgY3Vyc29yUG9zLCBvbGRWYWx1ZSwgb2xkU2VsZWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkRldGFpbHMpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcbiAgICB0aGlzLm9sZFNlbGVjdGlvbiA9IG9sZFNlbGVjdGlvbjsgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcblxuICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XG4gICAgICAtLXRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0O1xuICAgIH1cbiAgfVxuICAvKipcbiAgICBTdGFydCBjaGFuZ2luZyBwb3NpdGlvblxuICAgIEByZWFkb25seVxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEFjdGlvbkRldGFpbHMsIFt7XG4gICAga2V5OiBcInN0YXJ0Q2hhbmdlUG9zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jdXJzb3JQb3MsIHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBJbnNlcnRlZCBzeW1ib2xzIGNvdW50XG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcbiAgICB9XG4gICAgLyoqXG4gICAgICBJbnNlcnRlZCBzeW1ib2xzXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLmluc2VydGVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFJlbW92ZWQgc3ltYm9scyBjb3VudFxuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gTWF0aC5tYXggZm9yIG9wcG9zaXRlIG9wZXJhdGlvblxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMub2xkU2VsZWN0aW9uLmVuZCAtIHRoaXMuc3RhcnRDaGFuZ2VQb3MgfHwgLy8gZm9yIERlbGV0ZVxuICAgICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUmVtb3ZlZCBzeW1ib2xzXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub2xkVmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMucmVtb3ZlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBVbmNoYW5nZWQgaGVhZCBzeW1ib2xzXG4gICAgICBAcmVhZG9ubHlcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGVhZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIFVuY2hhbmdlZCB0YWlsIHN5bWJvbHNcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0YWlsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgUmVtb3ZlIGRpcmVjdGlvblxuICAgICAgQHJlYWRvbmx5XG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZURpcmVjdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDb3VudCB8fCB0aGlzLmluc2VydGVkQ291bnQpIHJldHVybiBESVJFQ1RJT04uTk9ORTsgLy8gYWxpZ24gcmlnaHQgaWYgZGVsZXRlIGF0IHJpZ2h0XG5cbiAgICAgIHJldHVybiAodGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLmN1cnNvclBvcyB8fCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA9PT0gdGhpcy5jdXJzb3JQb3MpICYmIC8vIGlmIG5vdCByYW5nZSByZW1vdmVkIChldmVudCB3aXRoIGJhY2tzcGFjZSlcbiAgICAgIHRoaXMub2xkU2VsZWN0aW9uLmVuZCA9PT0gdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQgPyBESVJFQ1RJT04uUklHSFQgOiBESVJFQ1RJT04uTEVGVDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWN0aW9uRGV0YWlscztcbn0oKTtcblxuZXhwb3J0IHsgQWN0aW9uRGV0YWlscyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2sgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcblxuLyoqXG4gIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgbW9kZWwgdmFsdWVcbiAgQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzXVxuICBAcGFyYW0ge3N0cmluZ30gW2RldGFpbHMuaW5zZXJ0ZWRdIC0gSW5zZXJ0ZWQgc3ltYm9sc1xuICBAcGFyYW0ge2Jvb2xlYW59IFtkZXRhaWxzLnNraXBdIC0gQ2FuIHNraXAgY2hhcnNcbiAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnJlbW92ZUNvdW50XSAtIFJlbW92ZWQgc3ltYm9scyBjb3VudFxuICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMudGFpbFNoaWZ0XSAtIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsXG4qL1xudmFyIENoYW5nZURldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogSW5zZXJ0ZWQgc3ltYm9scyAqL1xuXG4gIC8qKiBDYW4gc2tpcCBjaGFycyAqL1xuXG4gIC8qKiBBZGRpdGlvbmFsIG9mZnNldCBpZiBhbnkgY2hhbmdlcyBvY2N1cnJlZCBiZWZvcmUgdGFpbCAqL1xuXG4gIC8qKiBSYXcgaW5zZXJ0ZWQgaXMgdXNlZCBieSBkeW5hbWljIG1hc2sgKi9cbiAgZnVuY3Rpb24gQ2hhbmdlRGV0YWlscyhkZXRhaWxzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5nZURldGFpbHMpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpbnNlcnRlZDogJycsXG4gICAgICByYXdJbnNlcnRlZDogJycsXG4gICAgICBza2lwOiBmYWxzZSxcbiAgICAgIHRhaWxTaGlmdDogMFxuICAgIH0sIGRldGFpbHMpO1xuICB9XG4gIC8qKlxuICAgIEFnZ3JlZ2F0ZSBjaGFuZ2VzXG4gICAgQHJldHVybnMge0NoYW5nZURldGFpbHN9IGB0aGlzYFxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENoYW5nZURldGFpbHMsIFt7XG4gICAga2V5OiBcImFnZ3JlZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZ2dyZWdhdGUoZGV0YWlscykge1xuICAgICAgdGhpcy5yYXdJbnNlcnRlZCArPSBkZXRhaWxzLnJhd0luc2VydGVkO1xuICAgICAgdGhpcy5za2lwID0gdGhpcy5za2lwIHx8IGRldGFpbHMuc2tpcDtcbiAgICAgIHRoaXMuaW5zZXJ0ZWQgKz0gZGV0YWlscy5pbnNlcnRlZDtcbiAgICAgIHRoaXMudGFpbFNoaWZ0ICs9IGRldGFpbHMudGFpbFNoaWZ0O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBUb3RhbCBvZmZzZXQgY29uc2lkZXJpbmcgYWxsIGNoYW5nZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZnNldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFpbFNoaWZ0ICsgdGhpcy5pbnNlcnRlZC5sZW5ndGg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENoYW5nZURldGFpbHM7XG59KCk7XG5cbmV4cG9ydCB7IENoYW5nZURldGFpbHMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgXyBhcyBfY3JlYXRlQ2xhc3MsIGEgYXMgX2NsYXNzQ2FsbENoZWNrIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNvbnRpbnVvdXMgZXh0cmFjdGVkIHRhaWwgKi9cbnZhciBDb250aW51b3VzVGFpbERldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogVGFpbCB2YWx1ZSBhcyBzdHJpbmcgKi9cblxuICAvKiogVGFpbCBzdGFydCBwb3NpdGlvbiAqL1xuXG4gIC8qKiBTdGFydCBwb3NpdGlvbiAqL1xuICBmdW5jdGlvbiBDb250aW51b3VzVGFpbERldGFpbHMoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICB2YXIgc3RvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRpbnVvdXNUYWlsRGV0YWlscyk7XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICB0aGlzLnN0b3AgPSBzdG9wO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRpbnVvdXNUYWlsRGV0YWlscywgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsKSB7XG4gICAgICB0aGlzLnZhbHVlICs9IFN0cmluZyh0YWlsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG8obWFza2VkKSB7XG4gICAgICByZXR1cm4gbWFza2VkLmFwcGVuZCh0aGlzLnRvU3RyaW5nKCksIHtcbiAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgfSkuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tLFxuICAgICAgICBzdG9wOiB0aGlzLnN0b3BcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuc2hpZnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5zaGlmdChiZWZvcmVQb3MpIHtcbiAgICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGggfHwgYmVmb3JlUG9zICE9IG51bGwgJiYgdGhpcy5mcm9tID49IGJlZm9yZVBvcykgcmV0dXJuICcnO1xuICAgICAgdmFyIHNoaWZ0Q2hhciA9IHRoaXMudmFsdWVbMF07XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgxKTtcbiAgICAgIHJldHVybiBzaGlmdENoYXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNoaWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgdmFyIHNoaWZ0Q2hhciA9IHRoaXMudmFsdWVbdGhpcy52YWx1ZS5sZW5ndGggLSAxXTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgIHJldHVybiBzaGlmdENoYXI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRpbnVvdXNUYWlsRGV0YWlscztcbn0oKTtcblxuZXhwb3J0IHsgQ29udGludW91c1RhaWxEZXRhaWxzIGFzIGRlZmF1bHQgfTtcbiIsIi8qKlxuICogQXBwbGllcyBtYXNrIG9uIGVsZW1lbnQuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fE1hc2tFbGVtZW50fSBlbCAtIEVsZW1lbnQgdG8gYXBwbHkgbWFza1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBDdXN0b20gbWFzayBvcHRpb25zXG4gKiBAcmV0dXJuIHtJbnB1dE1hc2t9XG4gKi9cbmZ1bmN0aW9uIElNYXNrKGVsKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgLy8gY3VycmVudGx5IGF2YWlsYWJsZSBvbmx5IGZvciBpbnB1dC1saWtlIGVsZW1lbnRzXG4gIHJldHVybiBuZXcgSU1hc2suSW5wdXRNYXNrKGVsLCBvcHRzKTtcbn1cblxuZXhwb3J0IHsgSU1hc2sgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgYyBhcyBfdHlwZW9mIH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuL2NoYW5nZS1kZXRhaWxzLmpzJztcblxuLyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cblxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fCBzdHIgaW5zdGFuY2VvZiBTdHJpbmc7XG59XG4vKipcbiAgRGlyZWN0aW9uXG4gIEBwcm9wIHtzdHJpbmd9IE5PTkVcbiAgQHByb3Age3N0cmluZ30gTEVGVFxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9MRUZUXG4gIEBwcm9wIHtzdHJpbmd9IFJJR0hUXG4gIEBwcm9wIHtzdHJpbmd9IEZPUkNFX1JJR0hUXG4qL1xuXG52YXIgRElSRUNUSU9OID0ge1xuICBOT05FOiAnTk9ORScsXG4gIExFRlQ6ICdMRUZUJyxcbiAgRk9SQ0VfTEVGVDogJ0ZPUkNFX0xFRlQnLFxuICBSSUdIVDogJ1JJR0hUJyxcbiAgRk9SQ0VfUklHSFQ6ICdGT1JDRV9SSUdIVCdcbn07XG4vKipcbiAgRGlyZWN0aW9uXG4gIEBlbnVtIHtzdHJpbmd9XG4qL1xuXG4vKiogUmV0dXJucyBuZXh0IGNoYXIgaW5kZXggaW4gZGlyZWN0aW9uICovXG5mdW5jdGlvbiBpbmRleEluRGlyZWN0aW9uKHBvcywgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSAtLXBvcztcbiAgcmV0dXJuIHBvcztcbn1cbi8qKiBSZXR1cm5zIG5leHQgY2hhciBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cblxuZnVuY3Rpb24gcG9zSW5EaXJlY3Rpb24ocG9zLCBkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICByZXR1cm4gLS1wb3M7XG5cbiAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgIHJldHVybiArK3BvcztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcG9zO1xuICB9XG59XG4vKiogKi9cblxuZnVuY3Rpb24gZm9yY2VEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfTEVGVDtcblxuICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9SSUdIVDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG59XG4vKiogRXNjYXBlcyByZWd1bGFyIGV4cHJlc3Npb24gY29udHJvbCBjaGFycyAqL1xuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUHJlcGFyZShwcmVwKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHByZXApID8gcHJlcCA6IFtwcmVwLCBuZXcgQ2hhbmdlRGV0YWlscygpXTtcbn0gLy8gY2xvbmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Vwb2JlcmV6a2luL2Zhc3QtZGVlcC1lcXVhbCB3aXRoIHNtYWxsIGNoYW5nZXNcblxuZnVuY3Rpb24gb2JqZWN0SW5jbHVkZXMoYiwgYSkge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gIHZhciBhcnJBID0gQXJyYXkuaXNBcnJheShhKSxcbiAgICAgIGFyckIgPSBBcnJheS5pc0FycmF5KGIpLFxuICAgICAgaTtcblxuICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmplY3RJbmNsdWRlcyhhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhICYmIGIgJiYgX3R5cGVvZihhKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihiKSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZSxcbiAgICAgICAgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHAsXG4gICAgICAgIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgIGlmIChyZWdleHBBICYmIHJlZ2V4cEIpIHJldHVybiBhLnRvU3RyaW5nKCkgPT0gYi50b1N0cmluZygpO1xuICAgIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpOyAvLyBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWUgLi4uID8/P1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmplY3RJbmNsdWRlcyhiW2tleXNbaV1dLCBhW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKiBTZWxlY3Rpb24gcmFuZ2UgKi9cblxuZXhwb3J0IHsgRElSRUNUSU9OLCBlc2NhcGVSZWdFeHAsIGZvcmNlRGlyZWN0aW9uLCBpbmRleEluRGlyZWN0aW9uLCBpc1N0cmluZywgbm9ybWFsaXplUHJlcGFyZSwgb2JqZWN0SW5jbHVkZXMsIHBvc0luRGlyZWN0aW9uIH07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIElucHV0TWFzayB9IGZyb20gJy4vY29udHJvbHMvaW5wdXQuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4vY29yZS9ob2xkZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vY29yZS9ob2xkZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWQgfSBmcm9tICcuL21hc2tlZC9iYXNlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza2VkUGF0dGVybiB9IGZyb20gJy4vbWFza2VkL3BhdHRlcm4uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWRFbnVtIH0gZnJvbSAnLi9tYXNrZWQvZW51bS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFJhbmdlIH0gZnJvbSAnLi9tYXNrZWQvcmFuZ2UuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWROdW1iZXIgfSBmcm9tICcuL21hc2tlZC9udW1iZXIuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWREYXRlIH0gZnJvbSAnLi9tYXNrZWQvZGF0ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZFJlZ0V4cCB9IGZyb20gJy4vbWFza2VkL3JlZ2V4cC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2tlZEZ1bmN0aW9uIH0gZnJvbSAnLi9tYXNrZWQvZnVuY3Rpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrZWREeW5hbWljIH0gZnJvbSAnLi9tYXNrZWQvZHluYW1pYy5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZU1hc2sgfSBmcm9tICcuL21hc2tlZC9mYWN0b3J5LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL21hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhUTUxNYXNrRWxlbWVudCB9IGZyb20gJy4vY29udHJvbHMvaHRtbC1tYXNrLWVsZW1lbnQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgfSBmcm9tICcuL2NvbnRyb2xzL2h0bWwtY29udGVudGVkaXRhYmxlLW1hc2stZWxlbWVudC5qcyc7XG5leHBvcnQgeyBQSVBFX1RZUEUsIGNyZWF0ZVBpcGUsIHBpcGUgfSBmcm9tICcuL21hc2tlZC9waXBlLmpzJztcbmltcG9ydCAnLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCAnLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9jb3JlL2FjdGlvbi1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9tYXNrZWQvcGF0dGVybi9jaHVuay10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL21hc2tlZC9wYXR0ZXJuL2N1cnNvci5qcyc7XG5cbnRyeSB7XG4gIGdsb2JhbFRoaXMuSU1hc2sgPSBJTWFzaztcbn0gY2F0Y2ggKGUpIHt9XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGYgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IENvbnRpbnVvdXNUYWlsRGV0YWlscyBmcm9tICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBub3JtYWxpemVQcmVwYXJlLCBmb3JjZURpcmVjdGlvbiwgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuXG4vKiogU3VwcG9ydGVkIG1hc2sgdHlwZSAqL1xuXG4vKiogUHJvdmlkZXMgY29tbW9uIG1hc2tpbmcgc3R1ZmYgKi9cbnZhciBNYXNrZWQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyAkU2hhcGU8TWFza2VkT3B0aW9ucz47IFRPRE8gYWZ0ZXIgZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy80NzczXG5cbiAgLyoqIEB0eXBlIHtNYXNrfSAqL1xuXG4gIC8qKiAqL1xuICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgLyoqIFRyYW5zZm9ybXMgdmFsdWUgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZyAqL1xuXG4gIC8qKiBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZSAqL1xuXG4gIC8qKiBEb2VzIGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cblxuICAvKiogRm9ybWF0IHR5cGVkIHZhbHVlIHRvIHN0cmluZyAqL1xuXG4gIC8qKiBQYXJzZSBzdHJnaW4gdG8gZ2V0IHR5cGVkIHZhbHVlICovXG5cbiAgLyoqIEVuYWJsZSBjaGFyYWN0ZXJzIG92ZXJ3cml0aW5nICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG4gIGZ1bmN0aW9uIE1hc2tlZChvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZCk7XG5cbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5fdXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZC5ERUZBVUxUUywgb3B0cykpO1xuXG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICAvKiogU2V0cyBhbmQgYXBwbGllcyBuZXcgb3B0aW9ucyAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZCwgW3tcbiAgICBrZXk6IFwidXBkYXRlT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICAgIGlmICghT2JqZWN0LmtleXMob3B0cykubGVuZ3RoKSByZXR1cm47IC8vICRGbG93Rml4TWVcblxuICAgICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBTZXRzIG5ldyBvcHRpb25zXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKiogTWFzayBzdGF0ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF92YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHN0YXRlLl92YWx1ZTtcbiAgICB9XG4gICAgLyoqIFJlc2V0cyB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gICAgLyoqIFJlc29sdmUgbmV3IHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNvbHZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7XG4gICAgICAgIGlucHV0OiB0cnVlXG4gICAgICB9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge30sICcnKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kb1BhcnNlKHRoaXMudmFsdWUpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmRvRm9ybWF0KHZhbHVlKTtcbiAgICB9XG4gICAgLyoqIFZhbHVlIHRoYXQgaW5jbHVkZXMgcmF3IHVzZXIgaW5wdXQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJhd0lucHV0VmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RJbnB1dCgwLCB0aGlzLnZhbHVlLmxlbmd0aCwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzRmlsbGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICAgIH1cbiAgICAvKiogRmluZHMgbmVhcmVzdCBpbnB1dCBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgfVxuICAgIC8qKiBFeHRyYWN0cyB2YWx1ZSBpbiByYW5nZSBjb25zaWRlcmluZyBmbGFncyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICB9XG4gICAgLyoqIEV4dHJhY3RzIHRhaWwgaW4gcmFuZ2UgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MpLCBmcm9tUG9zKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgdGFpbCAqL1xuICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgY2hhciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIGlmICghY2gpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdGhpcy5fdmFsdWUgKz0gY2g7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICBpbnNlcnRlZDogY2gsXG4gICAgICAgIHJhd0luc2VydGVkOiBjaFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGNoZWNrVGFpbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIGNvbnNpc3RlbnRTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgZGV0YWlscztcblxuICAgICAgdmFyIF9ub3JtYWxpemVQcmVwYXJlID0gbm9ybWFsaXplUHJlcGFyZSh0aGlzLmRvUHJlcGFyZShjaCwgZmxhZ3MpKTtcblxuICAgICAgdmFyIF9ub3JtYWxpemVQcmVwYXJlMiA9IF9zbGljZWRUb0FycmF5KF9ub3JtYWxpemVQcmVwYXJlLCAyKTtcblxuICAgICAgY2ggPSBfbm9ybWFsaXplUHJlcGFyZTJbMF07XG4gICAgICBkZXRhaWxzID0gX25vcm1hbGl6ZVByZXBhcmUyWzFdO1xuICAgICAgZGV0YWlscyA9IGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKSk7XG5cbiAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkKSB7XG4gICAgICAgIHZhciBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGFwcGVuZGVkICYmIGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gdmFsaWRhdGlvbiBvaywgY2hlY2sgdGFpbFxuICAgICAgICAgIHZhciBiZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3ZlcndyaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICAgIGNoZWNrVGFpbC51bnNoaWZ0KHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKTtcbiAgICAgICAgICBhcHBlbmRlZCA9IHRhaWxEZXRhaWxzLnJhd0luc2VydGVkID09PSBjaGVja1RhaWwudG9TdHJpbmcoKTsgLy8gbm90IG9rLCB0cnkgc2hpZnRcblxuICAgICAgICAgIGlmICghKGFwcGVuZGVkICYmIHRhaWxEZXRhaWxzLmluc2VydGVkKSAmJiB0aGlzLm92ZXJ3cml0ZSA9PT0gJ3NoaWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGJlZm9yZVRhaWxTdGF0ZTtcbiAgICAgICAgICAgIGNvbnNpc3RlbnRUYWlsID0gY2hlY2tUYWlsLnN0YXRlO1xuICAgICAgICAgICAgY2hlY2tUYWlsLnNoaWZ0KCk7XG4gICAgICAgICAgICB0YWlsRGV0YWlscyA9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpO1xuICAgICAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZCA9PT0gY2hlY2tUYWlsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSAvLyBpZiBvaywgcm9sbGJhY2sgc3RhdGUgYWZ0ZXIgdGFpbFxuXG5cbiAgICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuc3RhdGUgPSBiZWZvcmVUYWlsU3RhdGU7XG4gICAgICAgIH0gLy8gcmV2ZXJ0IGFsbCBpZiBzb21ldGhpbmcgd2VudCB3cm9uZ1xuXG5cbiAgICAgICAgaWYgKCFhcHBlbmRlZCkge1xuICAgICAgICAgIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBjb25zaXN0ZW50U3RhdGU7XG4gICAgICAgICAgaWYgKGNoZWNrVGFpbCAmJiBjb25zaXN0ZW50VGFpbCkgY2hlY2tUYWlsLnN0YXRlID0gY29uc2lzdGVudFRhaWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIG9wdGlvbmFsIHBsYWNlaG9sZGVyIGF0IGVuZCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBvcHRpb25hbCBlYWdlciBwbGFjZWhvbGRlciBhdCBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRFYWdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kRWFnZXIoKSB7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgc3ltYm9scyBjb25zaWRlcmluZyBmbGFncyAqL1xuICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgaWYgKCFpc1N0cmluZyhzdHIpKSB0aHJvdyBuZXcgRXJyb3IoJ3ZhbHVlIHNob3VsZCBiZSBzdHJpbmcnKTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHZhciBjaGVja1RhaWwgPSBpc1N0cmluZyh0YWlsKSA/IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKSA6IHRhaWw7XG4gICAgICBpZiAoZmxhZ3MgJiYgZmxhZ3MudGFpbCkgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCBzdHIubGVuZ3RoOyArK2NpKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZENoYXIoc3RyW2NpXSwgZmxhZ3MsIGNoZWNrVGFpbCkpO1xuICAgICAgfSAvLyBhcHBlbmQgdGFpbCBidXQgYWdncmVnYXRlIG9ubHkgdGFpbFNoaWZ0XG5cblxuICAgICAgaWYgKGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpLnRhaWxTaGlmdDsgLy8gVE9ETyBpdCdzIGEgZ29vZCBpZGVhIHRvIGNsZWFyIHN0YXRlIGFmdGVyIGFwcGVuZGluZyBlbmRzXG4gICAgICAgIC8vIGJ1dCBpdCBjYXVzZXMgYnVncyB3aGVuIG9uZSBhcHBlbmQgY2FsbHMgYW5vdGhlciAod2hlbiBkeW5hbWljIGRpc3BhdGNoIHNldCByYXdJbnB1dFZhbHVlKVxuICAgICAgICAvLyB0aGlzLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lYWdlciAmJiBmbGFncyAhPT0gbnVsbCAmJiBmbGFncyAhPT0gdm9pZCAwICYmIGZsYWdzLmlucHV0ICYmIHN0cikge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRFYWdlcigpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICAgIC8qKiBDYWxscyBmdW5jdGlvbiBhbmQgcmVhcHBsaWVzIGN1cnJlbnQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndpdGhWYWx1ZVJlZnJlc2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aFZhbHVlUmVmcmVzaChmbikge1xuICAgICAgaWYgKHRoaXMuX3JlZnJlc2hpbmcgfHwgIXRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuIGZuKCk7XG4gICAgICB0aGlzLl9yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciByYXdJbnB1dCA9IHRoaXMucmF3SW5wdXRWYWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgcmV0ID0gZm4oKTtcbiAgICAgIHRoaXMucmF3SW5wdXRWYWx1ZSA9IHJhd0lucHV0OyAvLyBhcHBlbmQgbG9zdCB0cmFpbGluZyBjaGFycyBhdCBlbmRcblxuICAgICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZSAhPT0gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZih0aGlzLnZhbHVlKSA9PT0gMCkge1xuICAgICAgICB0aGlzLmFwcGVuZCh2YWx1ZS5zbGljZSh0aGlzLnZhbHVlLmxlbmd0aCksIHt9LCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9yZWZyZXNoaW5nO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJydW5Jc29sYXRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydW5Jc29sYXRlZChmbikge1xuICAgICAgaWYgKHRoaXMuX2lzb2xhdGVkIHx8ICF0aGlzLmlzSW5pdGlhbGl6ZWQpIHJldHVybiBmbih0aGlzKTtcbiAgICAgIHRoaXMuX2lzb2xhdGVkID0gdHJ1ZTtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgcmV0ID0gZm4odGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICBkZWxldGUgdGhpcy5faXNvbGF0ZWQ7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcbiAgICAgIFByZXBhcmVzIHN0cmluZyBiZWZvcmUgbWFzayBwcm9jZXNzaW5nXG4gICAgICBAcHJvdGVjdGVkXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZSA/IHRoaXMucHJlcGFyZShzdHIsIHRoaXMsIGZsYWdzKSA6IHN0cjtcbiAgICB9XG4gICAgLyoqXG4gICAgICBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZVxuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICAgIHJldHVybiAoIXRoaXMudmFsaWRhdGUgfHwgdGhpcy52YWxpZGF0ZSh0aGlzLnZhbHVlLCB0aGlzLCBmbGFncykpICYmICghdGhpcy5wYXJlbnQgfHwgdGhpcy5wYXJlbnQuZG9WYWxpZGF0ZShmbGFncykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZ1xuICAgICAgQHByb3RlY3RlZFxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbW1pdCkgdGhpcy5jb21taXQodGhpcy52YWx1ZSwgdGhpcyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Gb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Gb3JtYXQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0KHZhbHVlLCB0aGlzKSA6IHZhbHVlO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9QYXJzZShzdHIpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlID8gdGhpcy5wYXJzZShzdHIsIHRoaXMpIDogc3RyO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNwbGljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBpbnNlcnRlZCwgcmVtb3ZlRGlyZWN0aW9uKSB7XG4gICAgICB2YXIgdGFpbFBvcyA9IHN0YXJ0ICsgZGVsZXRlQ291bnQ7XG4gICAgICB2YXIgdGFpbCA9IHRoaXMuZXh0cmFjdFRhaWwodGFpbFBvcyk7XG4gICAgICB2YXIgb2xkUmF3VmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLmVhZ2VyKSB7XG4gICAgICAgIHJlbW92ZURpcmVjdGlvbiA9IGZvcmNlRGlyZWN0aW9uKHJlbW92ZURpcmVjdGlvbik7XG4gICAgICAgIG9sZFJhd1ZhbHVlID0gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGFpbFBvcywge1xuICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0Q2hhbmdlUG9zID0gdGhpcy5uZWFyZXN0SW5wdXRQb3Moc3RhcnQsIGRlbGV0ZUNvdW50ID4gMSAmJiBzdGFydCAhPT0gMCAmJiAhdGhpcy5lYWdlciA/IERJUkVDVElPTi5OT05FIDogcmVtb3ZlRGlyZWN0aW9uKTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICB0YWlsU2hpZnQ6IHN0YXJ0Q2hhbmdlUG9zIC0gc3RhcnQgLy8gYWRqdXN0IHRhaWxTaGlmdCBpZiBzdGFydCB3YXMgYWxpZ25lZFxuXG4gICAgICB9KS5hZ2dyZWdhdGUodGhpcy5yZW1vdmUoc3RhcnRDaGFuZ2VQb3MpKTtcblxuICAgICAgaWYgKHRoaXMuZWFnZXIgJiYgcmVtb3ZlRGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSAmJiBvbGRSYXdWYWx1ZSA9PT0gdGhpcy5yYXdJbnB1dFZhbHVlKSB7XG4gICAgICAgIGlmIChyZW1vdmVEaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgICAgdmFyIHZhbExlbmd0aDtcblxuICAgICAgICAgIHdoaWxlIChvbGRSYXdWYWx1ZSA9PT0gdGhpcy5yYXdJbnB1dFZhbHVlICYmICh2YWxMZW5ndGggPSB0aGlzLnZhbHVlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgICAgICAgdGFpbFNoaWZ0OiAtMVxuICAgICAgICAgICAgfSkpLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZSh2YWxMZW5ndGggLSAxKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlbW92ZURpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSB7XG4gICAgICAgICAgdGFpbC51bnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuYXBwZW5kKGluc2VydGVkLCB7XG4gICAgICAgIGlucHV0OiB0cnVlXG4gICAgICB9LCB0YWlsKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tFcXVhbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza0VxdWFscyhtYXNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrID09PSBtYXNrO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWQ7XG59KCk7XG5NYXNrZWQuREVGQVVMVFMgPSB7XG4gIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KHYpIHtcbiAgICByZXR1cm4gdjtcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHYpIHtcbiAgICByZXR1cm4gdjtcbiAgfVxufTtcbklNYXNrLk1hc2tlZCA9IE1hc2tlZDtcblxuZXhwb3J0IHsgTWFza2VkIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBmIGFzIF9zbGljZWRUb0FycmF5LCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBpIGFzIF9zZXQgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgTWFza2VkUmFuZ2UgZnJvbSAnLi9yYW5nZS5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vYmFzZS5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vaW5wdXQtZGVmaW5pdGlvbi5qcyc7XG5pbXBvcnQgJy4vZmFjdG9yeS5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2NodW5rLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0ICcuL3JlZ2V4cC5qcyc7XG5cbi8qKiBEYXRlIG1hc2sgKi9cblxudmFyIE1hc2tlZERhdGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWREYXRlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWREYXRlKTtcblxuICAvKiogUGF0dGVybiBtYXNrIGZvciBkYXRlIGFjY29yZGluZyB0byB7QGxpbmsgTWFza2VkRGF0ZSNmb3JtYXR9ICovXG5cbiAgLyoqIFN0YXJ0IGRhdGUgKi9cblxuICAvKiogRW5kIGRhdGUgKi9cblxuICAvKiogKi9cblxuICAvKipcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAqL1xuICBmdW5jdGlvbiBNYXNrZWREYXRlKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRGF0ZSk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRGF0ZS5ERUZBVUxUUywgb3B0cykpO1xuICB9XG4gIC8qKlxuICAgIEBvdmVycmlkZVxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZERhdGUsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBpZiAob3B0cy5tYXNrID09PSBEYXRlKSBkZWxldGUgb3B0cy5tYXNrO1xuICAgICAgaWYgKG9wdHMucGF0dGVybikgb3B0cy5tYXNrID0gb3B0cy5wYXR0ZXJuO1xuICAgICAgdmFyIGJsb2NrcyA9IG9wdHMuYmxvY2tzO1xuICAgICAgb3B0cy5ibG9ja3MgPSBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUygpKTsgLy8gYWRqdXN0IHllYXIgYmxvY2tcblxuICAgICAgaWYgKG9wdHMubWluKSBvcHRzLmJsb2Nrcy5ZLmZyb20gPSBvcHRzLm1pbi5nZXRGdWxsWWVhcigpO1xuICAgICAgaWYgKG9wdHMubWF4KSBvcHRzLmJsb2Nrcy5ZLnRvID0gb3B0cy5tYXguZ2V0RnVsbFllYXIoKTtcblxuICAgICAgaWYgKG9wdHMubWluICYmIG9wdHMubWF4ICYmIG9wdHMuYmxvY2tzLlkuZnJvbSA9PT0gb3B0cy5ibG9ja3MuWS50bykge1xuICAgICAgICBvcHRzLmJsb2Nrcy5tLmZyb20gPSBvcHRzLm1pbi5nZXRNb250aCgpICsgMTtcbiAgICAgICAgb3B0cy5ibG9ja3MubS50byA9IG9wdHMubWF4LmdldE1vbnRoKCkgKyAxO1xuXG4gICAgICAgIGlmIChvcHRzLmJsb2Nrcy5tLmZyb20gPT09IG9wdHMuYmxvY2tzLm0udG8pIHtcbiAgICAgICAgICBvcHRzLmJsb2Nrcy5kLmZyb20gPSBvcHRzLm1pbi5nZXREYXRlKCk7XG4gICAgICAgICAgb3B0cy5ibG9ja3MuZC50byA9IG9wdHMubWF4LmdldERhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKG9wdHMuYmxvY2tzLCB0aGlzLmJsb2NrcywgYmxvY2tzKTsgLy8gYWRkIGF1dG9maXhcblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5ibG9ja3MpLmZvckVhY2goZnVuY3Rpb24gKGJrKSB7XG4gICAgICAgIHZhciBiID0gb3B0cy5ibG9ja3NbYmtdO1xuICAgICAgICBpZiAoISgnYXV0b2ZpeCcgaW4gYikgJiYgJ2F1dG9maXgnIGluIG9wdHMpIGIuYXV0b2ZpeCA9IG9wdHMuYXV0b2ZpeDtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIHZhciBkYXRlID0gdGhpcy5kYXRlO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSAmJiAoIXRoaXMuaXNDb21wbGV0ZSB8fCB0aGlzLmlzRGF0ZUV4aXN0KHRoaXMudmFsdWUpICYmIGRhdGUgIT0gbnVsbCAmJiAodGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA8PSBkYXRlKSAmJiAodGhpcy5tYXggPT0gbnVsbCB8fCBkYXRlIDw9IHRoaXMubWF4KSk7XG4gICAgfVxuICAgIC8qKiBDaGVja3MgaWYgZGF0ZSBpcyBleGlzdHMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzRGF0ZUV4aXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRGF0ZUV4aXN0KHN0cikge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMucGFyc2Uoc3RyLCB0aGlzKSwgdGhpcykuaW5kZXhPZihzdHIpID49IDA7XG4gICAgfVxuICAgIC8qKiBQYXJzZWQgRGF0ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudHlwZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGRhdGUpIHtcbiAgICAgIHRoaXMudHlwZWRWYWx1ZSA9IGRhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwidHlwZWRWYWx1ZVwiLCB0aGlzKSA6IG51bGw7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcInR5cGVkVmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrRXF1YWxzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tFcXVhbHMobWFzaykge1xuICAgICAgcmV0dXJuIG1hc2sgPT09IERhdGUgfHwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcIm1hc2tFcXVhbHNcIiwgdGhpcykuY2FsbCh0aGlzLCBtYXNrKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRGF0ZTtcbn0oTWFza2VkUGF0dGVybik7XG5NYXNrZWREYXRlLkRFRkFVTFRTID0ge1xuICBwYXR0ZXJuOiAnZHsufWBtey59YFknLFxuICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdChkYXRlKSB7XG4gICAgaWYgKCFkYXRlKSByZXR1cm4gJyc7XG4gICAgdmFyIGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB2YXIgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdLmpvaW4oJy4nKTtcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICAgIHZhciBfc3RyJHNwbGl0ID0gc3RyLnNwbGl0KCcuJyksXG4gICAgICAgIF9zdHIkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3N0ciRzcGxpdCwgMyksXG4gICAgICAgIGRheSA9IF9zdHIkc3BsaXQyWzBdLFxuICAgICAgICBtb250aCA9IF9zdHIkc3BsaXQyWzFdLFxuICAgICAgICB5ZWFyID0gX3N0ciRzcGxpdDJbMl07XG5cbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICB9XG59O1xuXG5NYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDEsXG4gICAgICB0bzogMzEsXG4gICAgICBtYXhMZW5ndGg6IDJcbiAgICB9LFxuICAgIG06IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAxMixcbiAgICAgIG1heExlbmd0aDogMlxuICAgIH0sXG4gICAgWToge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxOTAwLFxuICAgICAgdG86IDk5OTlcbiAgICB9XG4gIH07XG59O1xuXG5JTWFzay5NYXNrZWREYXRlID0gTWFza2VkRGF0ZTtcblxuZXhwb3J0IHsgTWFza2VkRGF0ZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiwgaSBhcyBfc2V0LCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuL2ZhY3RvcnkuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IElNYXNrIGZyb20gJy4uL2NvcmUvaG9sZGVyLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiY29tcGlsZWRNYXNrc1wiLCBcImN1cnJlbnRNYXNrUmVmXCIsIFwiY3VycmVudE1hc2tcIl07XG5cbi8qKiBEeW5hbWljIG1hc2sgZm9yIGNob29zaW5nIGFwcm9wcmlhdGUgbWFzayBpbiBydW4tdGltZSAqL1xudmFyIE1hc2tlZER5bmFtaWMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZER5bmFtaWMsIF9NYXNrZWQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRHluYW1pYyk7XG5cbiAgLyoqIEN1cnJlbnRseSBjaG9zZW4gbWFzayAqL1xuXG4gIC8qKiBDb21wbGlsZWQge0BsaW5rIE1hc2tlZH0gb3B0aW9ucyAqL1xuXG4gIC8qKiBDaG9vc2VzIHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBpbnB1dCB2YWx1ZSAqL1xuXG4gIC8qKlxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICovXG4gIGZ1bmN0aW9uIE1hc2tlZER5bmFtaWMob3B0cykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWREeW5hbWljKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRHluYW1pYy5ERUZBVUxUUywgb3B0cykpO1xuICAgIF90aGlzLmN1cnJlbnRNYXNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAgQG92ZXJyaWRlXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRHluYW1pYywgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgIGlmICgnbWFzaycgaW4gb3B0cykge1xuICAgICAgICAvLyBtYXNrIGNvdWxkIGJlIHRvdGFsbHkgZHluYW1pYyB3aXRoIG9ubHkgYGRpc3BhdGNoYCBvcHRpb25cbiAgICAgICAgdGhpcy5jb21waWxlZE1hc2tzID0gQXJyYXkuaXNBcnJheShvcHRzLm1hc2spID8gb3B0cy5tYXNrLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVNYXNrKG0pO1xuICAgICAgICB9KSA6IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoKGNoLCBmbGFncyk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZENoYXIoY2gsIGZsYWdzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwbHlEaXNwYXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwbHlEaXNwYXRjaCgpIHtcbiAgICAgIHZhciBhcHBlbmRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIHByZXZWYWx1ZUJlZm9yZVRhaWwgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy52YWx1ZTtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xuICAgICAgdmFyIGluc2VydFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlICE9IG51bGwgPyAvLyAkRmxvd0ZpeE1lIC0gdGlyZWQgdG8gZmlnaHQgd2l0aCB0eXBlIHN5c3RlbVxuICAgICAgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fcmF3SW5wdXRWYWx1ZSA6IGlucHV0VmFsdWU7XG4gICAgICB2YXIgdGFpbFZhbHVlID0gaW5wdXRWYWx1ZS5zbGljZShpbnNlcnRWYWx1ZS5sZW5ndGgpO1xuICAgICAgdmFyIHByZXZNYXNrID0gdGhpcy5jdXJyZW50TWFzaztcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHZhciBwcmV2TWFza1N0YXRlID0gcHJldk1hc2sgJiYgcHJldk1hc2suc3RhdGU7IC8vIGNsb25lIGZsYWdzIHRvIHByZXZlbnQgb3ZlcndyaXRpbmcgYF9iZWZvcmVUYWlsU3RhdGVgXG5cbiAgICAgIHRoaXMuY3VycmVudE1hc2sgPSB0aGlzLmRvRGlzcGF0Y2goYXBwZW5kZWQsIE9iamVjdC5hc3NpZ24oe30sIGZsYWdzKSk7IC8vIHJlc3RvcmUgc3RhdGUgYWZ0ZXIgZGlzcGF0Y2hcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2sgIT09IHByZXZNYXNrKSB7XG4gICAgICAgICAgLy8gaWYgbWFzayBjaGFuZ2VkIHJlYXBwbHkgaW5wdXRcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnJlc2V0KCk7XG5cbiAgICAgICAgICBpZiAoaW5zZXJ0VmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWUgLSBpdCdzIG9rLCB3ZSBkb24ndCBjaGFuZ2UgY3VycmVudCBtYXNrIGFib3ZlXG4gICAgICAgICAgICB2YXIgZCA9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKGluc2VydFZhbHVlLCB7XG4gICAgICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCA9IGQuaW5zZXJ0ZWQubGVuZ3RoIC0gcHJldlZhbHVlQmVmb3JlVGFpbC5sZW5ndGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRhaWxWYWx1ZSkge1xuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcbiAgICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKHRhaWxWYWx1ZSwge1xuICAgICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICAgIH0pLnRhaWxTaGlmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggY2FuIGRvIHNvbWV0aGluZyBiYWQgd2l0aCBzdGF0ZSwgc29cbiAgICAgICAgICAvLyByZXN0b3JlIHByZXYgbWFzayBzdGF0ZVxuICAgICAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBwcmV2TWFza1N0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqXG4gICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kRWFnZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZEVhZ2VyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZEVhZ2VyKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9EaXNwYXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0Rpc3BhdGNoKGFwcGVuZGVkKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goYXBwZW5kZWQsIHRoaXMsIGZsYWdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyLCBfdGhpcyRjdXJyZW50TWFzaztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkgJiYgKCF0aGlzLmN1cnJlbnRNYXNrIHx8IChfdGhpcyRjdXJyZW50TWFzayA9IHRoaXMuY3VycmVudE1hc2spLmRvVmFsaWRhdGUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2ssIGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2syO1xuXG4gICAgICAoX3RoaXMkY3VycmVudE1hc2syID0gdGhpcy5jdXJyZW50TWFzaykgPT09IG51bGwgfHwgX3RoaXMkY3VycmVudE1hc2syID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TWFzazIucmVzZXQoKTtcbiAgICAgIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay52YWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJ2YWx1ZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlIDogJyc7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgOiAnJztcbiAgICB9IC8vIHByb2JhYmx5IHR5cGVkVmFsdWUgc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggZHluYW1pY1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsdWUpOyAvLyBkb3VibGUgY2hlY2sgaXRcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHVubWFza2VkVmFsdWUgPSB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazM7XG5cbiAgICAgIHJldHVybiBCb29sZWFuKChfdGhpcyRjdXJyZW50TWFzazMgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PT0gbnVsbCB8fCBfdGhpcyRjdXJyZW50TWFzazMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrMy5pc0NvbXBsZXRlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNGaWxsZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazQ7XG5cbiAgICAgIHJldHVybiBCb29sZWFuKChfdGhpcyRjdXJyZW50TWFzazQgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PT0gbnVsbCB8fCBfdGhpcyRjdXJyZW50TWFzazQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrNC5pc0ZpbGxlZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazU7XG5cbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoKF90aGlzJGN1cnJlbnRNYXNrNSA9IHRoaXMuY3VycmVudE1hc2spLnJlbW92ZS5hcHBseShfdGhpcyRjdXJyZW50TWFzazUsIGFyZ3VtZW50cykpIC8vIHVwZGF0ZSB3aXRoIGRpc3BhdGNoXG4gICAgICAgIC5hZ2dyZWdhdGUodGhpcy5fYXBwbHlEaXNwYXRjaCgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInN0YXRlXCIsIHRoaXMpLCB7XG4gICAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWUsXG4gICAgICAgIGNvbXBpbGVkTWFza3M6IHRoaXMuY29tcGlsZWRNYXNrcy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5zdGF0ZTtcbiAgICAgICAgfSksXG4gICAgICAgIGN1cnJlbnRNYXNrUmVmOiB0aGlzLmN1cnJlbnRNYXNrLFxuICAgICAgICBjdXJyZW50TWFzazogdGhpcy5jdXJyZW50TWFzayAmJiB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB2YXIgY29tcGlsZWRNYXNrcyA9IHN0YXRlLmNvbXBpbGVkTWFza3MsXG4gICAgICAgICAgY3VycmVudE1hc2tSZWYgPSBzdGF0ZS5jdXJyZW50TWFza1JlZixcbiAgICAgICAgICBjdXJyZW50TWFzayA9IHN0YXRlLmN1cnJlbnRNYXNrLFxuICAgICAgICAgIG1hc2tlZFN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBfZXhjbHVkZWQpO1xuXG4gICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSwgbWkpIHtcbiAgICAgICAgcmV0dXJuIG0uc3RhdGUgPSBjb21waWxlZE1hc2tzW21pXTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY3VycmVudE1hc2tSZWYgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gY3VycmVudE1hc2tSZWY7XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBjdXJyZW50TWFzaztcbiAgICAgIH1cblxuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInN0YXRlXCIsIG1hc2tlZFN0YXRlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazY7XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNiA9IHRoaXMuY3VycmVudE1hc2spLmV4dHJhY3RJbnB1dC5hcHBseShfdGhpcyRjdXJyZW50TWFzazYsIGFyZ3VtZW50cykgOiAnJztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s3LCBfZ2V0MztcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyAoX3RoaXMkY3VycmVudE1hc2s3ID0gdGhpcy5jdXJyZW50TWFzaykuZXh0cmFjdFRhaWwuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s3LCBhcmdzKSA6IChfZ2V0MyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJleHRyYWN0VGFpbFwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MywgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2suZG9Db21taXQoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s4LCBfZ2V0NDtcblxuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyAoX3RoaXMkY3VycmVudE1hc2s4ID0gdGhpcy5jdXJyZW50TWFzaykubmVhcmVzdElucHV0UG9zLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrOCwgYXJncykgOiAoX2dldDQgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwibmVhcmVzdElucHV0UG9zXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQ0LCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib3ZlcndyaXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sub3ZlcndyaXRlIDogX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm92ZXJ3cml0ZVwiLCB0aGlzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG92ZXJ3cml0ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdcIm92ZXJ3cml0ZVwiIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIGluIGR5bmFtaWMgbWFzaywgdXNlIHRoaXMgb3B0aW9uIGluIHNpYmxpbmdzJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVhZ2VyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suZWFnZXIgOiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZWFnZXJcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChlYWdlcikge1xuICAgICAgY29uc29sZS53YXJuKCdcImVhZ2VyXCIgb3B0aW9uIGlzIG5vdCBhdmFpbGFibGUgaW4gZHluYW1pYyBtYXNrLCB1c2UgdGhpcyBvcHRpb24gaW4gc2libGluZ3MnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG1hc2spICYmIHRoaXMuY29tcGlsZWRNYXNrcy5ldmVyeShmdW5jdGlvbiAobSwgbWkpIHtcbiAgICAgICAgdmFyIF9tYXNrJG1pO1xuXG4gICAgICAgIHJldHVybiBtLm1hc2tFcXVhbHMoKF9tYXNrJG1pID0gbWFza1ttaV0pID09PSBudWxsIHx8IF9tYXNrJG1pID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbWFzayRtaS5tYXNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWREeW5hbWljO1xufShNYXNrZWQpO1xuTWFza2VkRHluYW1pYy5ERUZBVUxUUyA9IHtcbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFwcGVuZGVkLCBtYXNrZWQsIGZsYWdzKSB7XG4gICAgaWYgKCFtYXNrZWQuY29tcGlsZWRNYXNrcy5sZW5ndGgpIHJldHVybjtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IG1hc2tlZC5yYXdJbnB1dFZhbHVlOyAvLyBzaW11bGF0ZSBpbnB1dFxuXG4gICAgdmFyIGlucHV0cyA9IG1hc2tlZC5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSwgaW5kZXgpIHtcbiAgICAgIG0ucmVzZXQoKTtcbiAgICAgIG0uYXBwZW5kKGlucHV0VmFsdWUsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG0uYXBwZW5kKGFwcGVuZGVkLCBmbGFncyk7XG4gICAgICB2YXIgd2VpZ2h0ID0gbS5yYXdJbnB1dFZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdlaWdodDogd2VpZ2h0LFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH07XG4gICAgfSk7IC8vIHBvcCBtYXNrcyB3aXRoIGxvbmdlciB2YWx1ZXMgZmlyc3RcblxuICAgIGlucHV0cy5zb3J0KGZ1bmN0aW9uIChpMSwgaTIpIHtcbiAgICAgIHJldHVybiBpMi53ZWlnaHQgLSBpMS53ZWlnaHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hc2tlZC5jb21waWxlZE1hc2tzW2lucHV0c1swXS5pbmRleF07XG4gIH1cbn07XG5JTWFzay5NYXNrZWREeW5hbWljID0gTWFza2VkRHluYW1pYztcblxuZXhwb3J0IHsgTWFza2VkRHluYW1pYyBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBkIGFzIF9pbmhlcml0cywgZSBhcyBfY3JlYXRlU3VwZXIsIGEgYXMgX2NsYXNzQ2FsbENoZWNrLCBfIGFzIF9jcmVhdGVDbGFzcywgZyBhcyBfZ2V0LCBoIGFzIF9nZXRQcm90b3R5cGVPZiB9IGZyb20gJy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IE1hc2tlZFBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIFBhdHRlcm4gd2hpY2ggdmFsaWRhdGVzIGVudW0gdmFsdWVzICovXG5cbnZhciBNYXNrZWRFbnVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkRW51bSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRW51bSk7XG5cbiAgZnVuY3Rpb24gTWFza2VkRW51bSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRW51bSk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRW51bSwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICovXG4gICAgZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAvLyBUT0RPIHR5cGVcbiAgICAgIGlmIChvcHRzLmVudW0pIG9wdHMubWFzayA9ICcqJy5yZXBlYXQob3B0cy5lbnVtWzBdLmxlbmd0aCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEVudW0ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICAgX2dldDI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lbnVtLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaW5kZXhPZihfdGhpcy51bm1hc2tlZFZhbHVlKSA+PSAwO1xuICAgICAgfSkgJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRFbnVtO1xufShNYXNrZWRQYXR0ZXJuKTtcbklNYXNrLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xuXG5leHBvcnQgeyBNYXNrZWRFbnVtIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5cbi8qKiBHZXQgTWFza2VkIGNsYXNzIGJ5IG1hc2sgdHlwZSAqL1xuXG5mdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrKSB7XG4gIGlmIChtYXNrID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21hc2sgcHJvcGVydHkgc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICBpZiAobWFzayBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIElNYXNrLk1hc2tlZFJlZ0V4cDsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChpc1N0cmluZyhtYXNrKSkgcmV0dXJuIElNYXNrLk1hc2tlZFBhdHRlcm47IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIERhdGUgfHwgbWFzayA9PT0gRGF0ZSkgcmV0dXJuIElNYXNrLk1hc2tlZERhdGU7IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIE51bWJlciB8fCB0eXBlb2YgbWFzayA9PT0gJ251bWJlcicgfHwgbWFzayA9PT0gTnVtYmVyKSByZXR1cm4gSU1hc2suTWFza2VkTnVtYmVyOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFzaykgfHwgbWFzayA9PT0gQXJyYXkpIHJldHVybiBJTWFzay5NYXNrZWREeW5hbWljOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBtYXNrLnByb3RvdHlwZSBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2suY29uc3RydWN0b3I7IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSByZXR1cm4gSU1hc2suTWFza2VkRnVuY3Rpb247XG4gIGNvbnNvbGUud2FybignTWFzayBub3QgZm91bmQgZm9yIG1hc2snLCBtYXNrKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIC8vICRGbG93Rml4TWVcblxuICByZXR1cm4gSU1hc2suTWFza2VkO1xufVxuLyoqIENyZWF0ZXMgbmV3IHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBtYXNrIHR5cGUgKi9cblxuZnVuY3Rpb24gY3JlYXRlTWFzayhvcHRzKSB7XG4gIC8vICRGbG93Rml4TWVcbiAgaWYgKElNYXNrLk1hc2tlZCAmJiBvcHRzIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gb3B0cztcbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpO1xuICB2YXIgbWFzayA9IG9wdHMubWFzazsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChJTWFzay5NYXNrZWQgJiYgbWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7XG4gIHZhciBNYXNrZWRDbGFzcyA9IG1hc2tlZENsYXNzKG1hc2spO1xuICBpZiAoIU1hc2tlZENsYXNzKSB0aHJvdyBuZXcgRXJyb3IoJ01hc2tlZCBjbGFzcyBpcyBub3QgZm91bmQgZm9yIHByb3ZpZGVkIG1hc2ssIGFwcHJvcHJpYXRlIG1vZHVsZSBuZWVkcyB0byBiZSBpbXBvcnQgbWFudWFsbHkgYmVmb3JlIGNyZWF0aW5nIG1hc2suJyk7XG4gIHJldHVybiBuZXcgTWFza2VkQ2xhc3Mob3B0cyk7XG59XG5JTWFzay5jcmVhdGVNYXNrID0gY3JlYXRlTWFzaztcblxuZXhwb3J0IHsgY3JlYXRlTWFzayBhcyBkZWZhdWx0LCBtYXNrZWRDbGFzcyB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5cbi8qKiBNYXNraW5nIGJ5IGN1c3RvbSBGdW5jdGlvbiAqL1xuXG52YXIgTWFza2VkRnVuY3Rpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZEZ1bmN0aW9uLCBfTWFza2VkKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZEZ1bmN0aW9uKTtcblxuICBmdW5jdGlvbiBNYXNrZWRGdW5jdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRnVuY3Rpb24pO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZEZ1bmN0aW9uLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgKi9cbiAgICBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSBvcHRzLm1hc2s7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEZ1bmN0aW9uLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRGdW5jdGlvbjtcbn0oTWFza2VkKTtcbklNYXNrLk1hc2tlZEZ1bmN0aW9uID0gTWFza2VkRnVuY3Rpb247XG5cbmV4cG9ydCB7IE1hc2tlZEZ1bmN0aW9uIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBmIGFzIF9zbGljZWRUb0FycmF5LCBpIGFzIF9zZXQgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCB7IGVzY2FwZVJlZ0V4cCwgbm9ybWFsaXplUHJlcGFyZSwgRElSRUNUSU9OIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ2hhbmdlRGV0YWlscyBmcm9tICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG4vKipcbiAgTnVtYmVyIG1hc2tcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucmFkaXggLSBTaW5nbGUgY2hhclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy50aG91c2FuZHNTZXBhcmF0b3IgLSBTaW5nbGUgY2hhclxuICBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdHMubWFwVG9SYWRpeCAtIEFycmF5IG9mIHNpbmdsZSBjaGFyc1xuICBAcGFyYW0ge251bWJlcn0gb3B0cy5taW5cbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWF4XG4gIEBwYXJhbSB7bnVtYmVyfSBvcHRzLnNjYWxlIC0gRGlnaXRzIGFmdGVyIHBvaW50XG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5zaWduZWQgLSBBbGxvdyBuZWdhdGl2ZVxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubm9ybWFsaXplWmVyb3MgLSBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLnBhZEZyYWN0aW9uYWxaZXJvcyAtIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZ1xuKi9cbnZhciBNYXNrZWROdW1iZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZE51bWJlciwgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWROdW1iZXIpO1xuXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gIC8qKiBBcnJheSBvZiBzaW5nbGUgY2hhcnMgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogRGlnaXRzIGFmdGVyIHBvaW50ICovXG5cbiAgLyoqICovXG5cbiAgLyoqIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGbGFnIHRvIHBhZCB0cmFpbGluZyB6ZXJvcyBhZnRlciBwb2ludCBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cbiAgZnVuY3Rpb24gTWFza2VkTnVtYmVyKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkTnVtYmVyKTtcblxuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWROdW1iZXIuREVGQVVMVFMsIG9wdHMpKTtcbiAgfVxuICAvKipcbiAgICBAb3ZlcnJpZGVcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWROdW1iZXIsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgIHRoaXMuX3VwZGF0ZVJlZ0V4cHMoKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdXBkYXRlUmVnRXhwc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUmVnRXhwcygpIHtcbiAgICAgIC8vIHVzZSBkaWZmZXJlbnQgcmVnZXhwIHRvIHByb2Nlc3MgdXNlciBpbnB1dCAobW9yZSBzdHJpY3QsIGlucHV0IHN1ZmZpeCkgYW5kIHRhaWwgc2hpZnRpbmdcbiAgICAgIHZhciBzdGFydCA9ICdeJyArICh0aGlzLmFsbG93TmVnYXRpdmUgPyAnWyt8XFxcXC1dPycgOiAnJyk7XG4gICAgICB2YXIgbWlkSW5wdXQgPSAnKDB8KFsxLTldK1xcXFxkKikpPyc7XG4gICAgICB2YXIgbWlkID0gJ1xcXFxkKic7XG4gICAgICB2YXIgZW5kID0gKHRoaXMuc2NhbGUgPyAnKCcgKyBlc2NhcGVSZWdFeHAodGhpcy5yYWRpeCkgKyAnXFxcXGR7MCwnICsgdGhpcy5zY2FsZSArICd9KT8nIDogJycpICsgJyQnO1xuICAgICAgdGhpcy5fbnVtYmVyUmVnRXhwSW5wdXQgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkSW5wdXQgKyBlbmQpO1xuICAgICAgdGhpcy5fbnVtYmVyUmVnRXhwID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZCArIGVuZCk7XG4gICAgICB0aGlzLl9tYXBUb1JhZGl4UmVnRXhwID0gbmV3IFJlZ0V4cCgnWycgKyB0aGlzLm1hcFRvUmFkaXgubWFwKGVzY2FwZVJlZ0V4cCkuam9pbignJykgKyAnXScsICdnJyk7XG4gICAgICB0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0aGlzLnRob3VzYW5kc1NlcGFyYXRvciksICdnJyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCwgJycpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKSB7XG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTAxMTAyL2hvdy10by1wcmludC1hLW51bWJlci13aXRoLWNvbW1hcy1hcy10aG91c2FuZHMtc2VwYXJhdG9ycy1pbi1qYXZhc2NyaXB0XG4gICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpO1xuICAgICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoY2gpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgY2ggPSBjaC5yZXBsYWNlKHRoaXMuX21hcFRvUmFkaXhSZWdFeHAsIHRoaXMucmFkaXgpO1xuXG4gICAgICB2YXIgbm9TZXBDaCA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoY2gpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmUgPSBub3JtYWxpemVQcmVwYXJlKChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXMsIG5vU2VwQ2hdLmNvbmNhdChhcmdzKSkpLFxuICAgICAgICAgIF9ub3JtYWxpemVQcmVwYXJlMiA9IF9zbGljZWRUb0FycmF5KF9ub3JtYWxpemVQcmVwYXJlLCAyKSxcbiAgICAgICAgICBwcmVwQ2ggPSBfbm9ybWFsaXplUHJlcGFyZTJbMF0sXG4gICAgICAgICAgZGV0YWlscyA9IF9ub3JtYWxpemVQcmVwYXJlMlsxXTtcblxuICAgICAgaWYgKGNoICYmICFub1NlcENoKSBkZXRhaWxzLnNraXAgPSB0cnVlO1xuICAgICAgcmV0dXJuIFtwcmVwQ2gsIGRldGFpbHNdO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9zZXBhcmF0b3JzQ291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NlcGFyYXRvcnNDb3VudCh0bykge1xuICAgICAgdmFyIGV4dGVuZE9uU2VwYXJhdG9ycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCB0bzsgKytwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgaWYgKGV4dGVuZE9uU2VwYXJhdG9ycykgdG8gKz0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoKSB7XG4gICAgICB2YXIgc2xpY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMuX3ZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcnNDb3VudCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHNsaWNlKS5sZW5ndGgsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRfYWRqdXN0UmFuZ2VXaXQsIDIpO1xuXG4gICAgICBmcm9tUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlswXTtcbiAgICAgIHRvUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlsxXTtcbiAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImV4dHJhY3RJbnB1dFwiLCB0aGlzKS5jYWxsKHRoaXMsIGZyb21Qb3MsIHRvUG9zLCBmbGFncykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShwcmV2QmVmb3JlVGFpbFZhbHVlKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpO1xuXG4gICAgICB2YXIgYXBwZW5kRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHZhciBiZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShiZWZvcmVUYWlsVmFsdWUpO1xuXG4gICAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgIGFwcGVuZERldGFpbHMuc2tpcCA9ICFhcHBlbmREZXRhaWxzLnJhd0luc2VydGVkICYmIGNoID09PSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcjtcbiAgICAgIHJldHVybiBhcHBlbmREZXRhaWxzO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU2VwYXJhdG9yQXJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xuICAgICAgaWYgKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSB7XG4gICAgICAgIHZhciBzZWFyY2hGcm9tID0gcG9zIC0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XG4gICAgICAgIGlmIChzZXBhcmF0b3JQb3MgPD0gcG9zKSByZXR1cm4gc2VwYXJhdG9yUG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb20sIHRvKSB7XG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoZnJvbSk7XG5cbiAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRGcm9tUG9zID49IDApIGZyb20gPSBzZXBhcmF0b3JBcm91bmRGcm9tUG9zO1xuXG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKHRvKTtcblxuICAgICAgaWYgKHNlcGFyYXRvckFyb3VuZFRvUG9zID49IDApIHRvID0gc2VwYXJhdG9yQXJvdW5kVG9Qb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDMgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzLCAyKTtcblxuICAgICAgZnJvbVBvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDRbMF07XG4gICAgICB0b1BvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDRbMV07XG4gICAgICB2YXIgdmFsdWVCZWZvcmVQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpO1xuICAgICAgdmFyIHZhbHVlQWZ0ZXJQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKHRvUG9zKTtcblxuICAgICAgdmFyIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHZhbHVlQmVmb3JlUG9zLmxlbmd0aCk7XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlQmVmb3JlUG9zICsgdmFsdWVBZnRlclBvcykpO1xuXG4gICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSh2YWx1ZUJlZm9yZVBvcyk7XG5cbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIHRhaWxTaGlmdDogKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gY3Vyc29yUG9zO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRMZWZ0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0TGVmdEVuZFBvcyA9IHNlcGFyYXRvckF0TGVmdFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcblxuICAgICAgICAgICAgICBpZiAoY3Vyc29yUG9zIDwgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IHRoaXMudmFsdWUubGVuZ3RoIDw9IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0TGVmdFBvcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdFJpZ2h0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MpO1xuXG4gICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRSaWdodFBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdFJpZ2h0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgICB2YXIgcmVnZXhwID0gZmxhZ3MuaW5wdXQgPyB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA6IHRoaXMuX251bWJlclJlZ0V4cDsgLy8gdmFsaWRhdGUgYXMgc3RyaW5nXG5cbiAgICAgIHZhciB2YWxpZCA9IHJlZ2V4cC50ZXN0KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSkpO1xuXG4gICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgLy8gdmFsaWRhdGUgYXMgbnVtYmVyXG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlcjtcbiAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOYU4obnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1pbiBib3VuZCBmb3IgbmVnYXRpdmUgdmFsdWVzXG4gICAgICAgIHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPj0gMCB8fCB0aGlzLm1pbiA8PSB0aGlzLm51bWJlcikgJiYgKCAvLyBjaGVjayBtYXggYm91bmQgZm9yIHBvc2l0aXZlIHZhbHVlc1xuICAgICAgICB0aGlzLm1heCA9PSBudWxsIHx8IHRoaXMubWF4IDw9IDAgfHwgdGhpcy5udW1iZXIgPD0gdGhpcy5tYXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWQgJiYgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZsYWdzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5udW1iZXI7XG4gICAgICAgIHZhciB2YWxpZG51bSA9IG51bWJlcjsgLy8gY2hlY2sgYm91bmRzXG5cbiAgICAgICAgaWYgKHRoaXMubWluICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5tYXgodmFsaWRudW0sIHRoaXMubWluKTtcbiAgICAgICAgaWYgKHRoaXMubWF4ICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5taW4odmFsaWRudW0sIHRoaXMubWF4KTtcbiAgICAgICAgaWYgKHZhbGlkbnVtICE9PSBudW1iZXIpIHRoaXMudW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh2YWxpZG51bSk7XG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodGhpcy5ub3JtYWxpemVaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fbm9ybWFsaXplWmVyb3MoZm9ybWF0dGVkKTtcbiAgICAgICAgaWYgKHRoaXMucGFkRnJhY3Rpb25hbFplcm9zICYmIHRoaXMuc2NhbGUgPiAwKSBmb3JtYXR0ZWQgPSB0aGlzLl9wYWRGcmFjdGlvbmFsWmVyb3MoZm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBmb3JtYXR0ZWQ7XG4gICAgICB9XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX25vcm1hbGl6ZVplcm9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ub3JtYWxpemVaZXJvcyh2YWx1ZSkge1xuICAgICAgdmFyIHBhcnRzID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkuc3BsaXQodGhpcy5yYWRpeCk7IC8vIHJlbW92ZSBsZWFkaW5nIHplcm9zXG5cblxuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9eKFxcRCopKDAqKShcXGQqKS8sIGZ1bmN0aW9uIChtYXRjaCwgc2lnbiwgemVyb3MsIG51bSkge1xuICAgICAgICByZXR1cm4gc2lnbiArIG51bTtcbiAgICAgIH0pOyAvLyBhZGQgbGVhZGluZyB6ZXJvXG5cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggJiYgIS9cXGQkLy50ZXN0KHBhcnRzWzBdKSkgcGFydHNbMF0gPSBwYXJ0c1swXSArICcwJztcblxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKC8wKiQvLCAnJyk7IC8vIHJlbW92ZSB0cmFpbGluZyB6ZXJvc1xuXG4gICAgICAgIGlmICghcGFydHNbMV0ubGVuZ3RoKSBwYXJ0cy5sZW5ndGggPSAxOyAvLyByZW1vdmUgZnJhY3Rpb25hbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyhwYXJ0cy5qb2luKHRoaXMucmFkaXgpKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcGFkRnJhY3Rpb25hbFplcm9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYWRGcmFjdGlvbmFsWmVyb3ModmFsdWUpIHtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcbiAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHBhcnRzLnB1c2goJycpO1xuICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5wYWRFbmQodGhpcy5zY2FsZSwgJzAnKTtcbiAgICAgIHJldHVybiBwYXJ0cy5qb2luKHRoaXMucmFkaXgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9ub3JtYWxpemVaZXJvcyh0aGlzLnZhbHVlKSkucmVwbGFjZSh0aGlzLnJhZGl4LCAnLicpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLnJlcGxhY2UoJy4nLCB0aGlzLnJhZGl4KSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodGhpcy51bm1hc2tlZFZhbHVlKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG4pIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgU3RyaW5nKG4pLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqIFBhcnNlZCBOdW1iZXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudHlwZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG51bWJlcikge1xuICAgICAgdGhpcy50eXBlZFZhbHVlID0gbnVtYmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgIElzIG5lZ2F0aXZlIGFsbG93ZWRcbiAgICAgIEByZWFkb25seVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGxvd05lZ2F0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduZWQgfHwgdGhpcy5taW4gIT0gbnVsbCAmJiB0aGlzLm1pbiA8IDAgfHwgdGhpcy5tYXggIT0gbnVsbCAmJiB0aGlzLm1heCA8IDA7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZE51bWJlcjtcbn0oTWFza2VkKTtcbk1hc2tlZE51bWJlci5ERUZBVUxUUyA9IHtcbiAgcmFkaXg6ICcsJyxcbiAgdGhvdXNhbmRzU2VwYXJhdG9yOiAnJyxcbiAgbWFwVG9SYWRpeDogWycuJ10sXG4gIHNjYWxlOiAyLFxuICBzaWduZWQ6IGZhbHNlLFxuICBub3JtYWxpemVaZXJvczogdHJ1ZSxcbiAgcGFkRnJhY3Rpb25hbFplcm9zOiBmYWxzZVxufTtcbklNYXNrLk1hc2tlZE51bWJlciA9IE1hc2tlZE51bWJlcjtcblxuZXhwb3J0IHsgTWFza2VkTnVtYmVyIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGQgYXMgX2luaGVyaXRzLCBlIGFzIF9jcmVhdGVTdXBlciwgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIF8gYXMgX2NyZWF0ZUNsYXNzLCBnIGFzIF9nZXQsIGggYXMgX2dldFByb3RvdHlwZU9mLCBiIGFzIF9vYmplY3RXaXRob3V0UHJvcGVydGllcywgaSBhcyBfc2V0IH0gZnJvbSAnLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04gfSBmcm9tICcuLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IE1hc2tlZCBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IFBhdHRlcm5JbnB1dERlZmluaXRpb24sIHsgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUyB9IGZyb20gJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uIGZyb20gJy4vcGF0dGVybi9maXhlZC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCBDaHVua3NUYWlsRGV0YWlscyBmcm9tICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCBQYXR0ZXJuQ3Vyc29yIGZyb20gJy4vcGF0dGVybi9jdXJzb3IuanMnO1xuaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJfYmxvY2tzXCJdO1xuXG4vKipcbiAgUGF0dGVybiBtYXNrXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmJsb2Nrc1xuICBAcGFyYW0ge09iamVjdH0gb3B0cy5kZWZpbml0aW9uc1xuICBAcGFyYW0ge3N0cmluZ30gb3B0cy5wbGFjZWhvbGRlckNoYXJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLmxhenlcbiovXG52YXIgTWFza2VkUGF0dGVybiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkUGF0dGVybiwgX01hc2tlZCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRQYXR0ZXJuKTtcblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogU2luZ2xlIGNoYXIgZm9yIGVtcHR5IGlucHV0ICovXG5cbiAgLyoqIFNob3cgcGxhY2Vob2xkZXIgb25seSB3aGVuIG5lZWRlZCAqL1xuICBmdW5jdGlvbiBNYXNrZWRQYXR0ZXJuKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRQYXR0ZXJuKTtcblxuICAgIC8vIFRPRE8gdHlwZSAkU2hhcGU8TWFza2VkUGF0dGVybk9wdGlvbnM+PXt9IGRvZXMgbm90IHdvcmtcbiAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgb3B0cy5kZWZpbml0aW9ucyk7XG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZFBhdHRlcm4uREVGQVVMVFMsIG9wdHMpKTtcbiAgfVxuICAvKipcbiAgICBAb3ZlcnJpZGVcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFBhdHRlcm4sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZSgpIHtcbiAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmluaXRpb25zLCBvcHRzLmRlZmluaXRpb25zKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fcmVidWlsZE1hc2soKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcmVidWlsZE1hc2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYnVpbGRNYXNrKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGRlZnMgPSB0aGlzLmRlZmluaXRpb25zO1xuICAgICAgdGhpcy5fYmxvY2tzID0gW107XG4gICAgICB0aGlzLl9zdG9wcyA9IFtdO1xuICAgICAgdGhpcy5fbWFza2VkQmxvY2tzID0ge307XG4gICAgICB2YXIgcGF0dGVybiA9IHRoaXMubWFzaztcbiAgICAgIGlmICghcGF0dGVybiB8fCAhZGVmcykgcmV0dXJuO1xuICAgICAgdmFyIHVubWFza2luZ0Jsb2NrID0gZmFsc2U7XG4gICAgICB2YXIgb3B0aW9uYWxCbG9jayA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdHRlcm4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tzKSB7XG4gICAgICAgICAgdmFyIF9yZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHBhdHRlcm4uc2xpY2UoaSk7XG4gICAgICAgICAgICB2YXIgYk5hbWVzID0gT2JqZWN0LmtleXMoX3RoaXMuYmxvY2tzKS5maWx0ZXIoZnVuY3Rpb24gKGJOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwLmluZGV4T2YoYk5hbWUpID09PSAwO1xuICAgICAgICAgICAgfSk7IC8vIG9yZGVyIGJ5IGtleSBsZW5ndGhcblxuICAgICAgICAgICAgYk5hbWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgICAgICAgICB9KTsgLy8gdXNlIGJsb2NrIG5hbWUgd2l0aCBtYXggbGVuZ3RoXG5cbiAgICAgICAgICAgIHZhciBiTmFtZSA9IGJOYW1lc1swXTtcblxuICAgICAgICAgICAgaWYgKGJOYW1lKSB7XG4gICAgICAgICAgICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcbiAgICAgICAgICAgICAgdmFyIG1hc2tlZEJsb2NrID0gY3JlYXRlTWFzayhPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IF90aGlzLFxuICAgICAgICAgICAgICAgIGxhenk6IF90aGlzLmxhenksXG4gICAgICAgICAgICAgICAgZWFnZXI6IF90aGlzLmVhZ2VyLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogX3RoaXMucGxhY2Vob2xkZXJDaGFyLFxuICAgICAgICAgICAgICAgIG92ZXJ3cml0ZTogX3RoaXMub3ZlcndyaXRlXG4gICAgICAgICAgICAgIH0sIF90aGlzLmJsb2Nrc1tiTmFtZV0pKTtcblxuICAgICAgICAgICAgICBpZiAobWFza2VkQmxvY2spIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fYmxvY2tzLnB1c2gobWFza2VkQmxvY2spOyAvLyBzdG9yZSBibG9jayBpbmRleFxuXG5cbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdKSBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0ucHVzaChfdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaSArPSBiTmFtZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0oKTtcblxuICAgICAgICAgIGlmIChfcmV0ID09PSBcImNvbnRpbnVlXCIpIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYXIgPSBwYXR0ZXJuW2ldO1xuICAgICAgICB2YXIgaXNJbnB1dCA9IChjaGFyIGluIGRlZnMpO1xuXG4gICAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUikge1xuICAgICAgICAgIHRoaXMuX3N0b3BzLnB1c2godGhpcy5fYmxvY2tzLmxlbmd0aCk7XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSAneycgfHwgY2hhciA9PT0gJ30nKSB7XG4gICAgICAgICAgdW5tYXNraW5nQmxvY2sgPSAhdW5tYXNraW5nQmxvY2s7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gJ1snIHx8IGNoYXIgPT09ICddJykge1xuICAgICAgICAgIG9wdGlvbmFsQmxvY2sgPSAhb3B0aW9uYWxCbG9jaztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSKSB7XG4gICAgICAgICAgKytpO1xuICAgICAgICAgIGNoYXIgPSBwYXR0ZXJuW2ldO1xuICAgICAgICAgIGlmICghY2hhcikgYnJlYWs7XG4gICAgICAgICAgaXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZiA9IGlzSW5wdXQgPyBuZXcgUGF0dGVybklucHV0RGVmaW5pdGlvbih7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgIGxhenk6IHRoaXMubGF6eSxcbiAgICAgICAgICBlYWdlcjogdGhpcy5lYWdlcixcbiAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IHRoaXMucGxhY2Vob2xkZXJDaGFyLFxuICAgICAgICAgIG1hc2s6IGRlZnNbY2hhcl0sXG4gICAgICAgICAgaXNPcHRpb25hbDogb3B0aW9uYWxCbG9ja1xuICAgICAgICB9KSA6IG5ldyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKHtcbiAgICAgICAgICBjaGFyOiBjaGFyLFxuICAgICAgICAgIGVhZ2VyOiB0aGlzLmVhZ2VyLFxuICAgICAgICAgIGlzVW5tYXNraW5nOiB1bm1hc2tpbmdCbG9ja1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChkZWYpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCB0aGlzKSwge1xuICAgICAgICBfYmxvY2tzOiB0aGlzLl9ibG9ja3MubWFwKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgcmV0dXJuIGIuc3RhdGU7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB2YXIgX2Jsb2NrcyA9IHN0YXRlLl9ibG9ja3MsXG4gICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIF9leGNsdWRlZCk7XG5cbiAgICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChiLCBiaSkge1xuICAgICAgICByZXR1cm4gYi5zdGF0ZSA9IF9ibG9ja3NbYmldO1xuICAgICAgfSk7XG5cbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCBtYXNrZWRTdGF0ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInJlc2V0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5pc0NvbXBsZXRlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzRmlsbGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmlzRmlsbGVkO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzRml4ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaXNGaXhlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc09wdGlvbmFsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmlzT3B0aW9uYWw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5kb0NvbW1pdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBiKSB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYi51bm1hc2tlZFZhbHVlO1xuICAgICAgfSwgJycpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyBUT0RPIHJldHVybiBfdmFsdWUgd2hlbiBub3QgaW4gY2hhbmdlP1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICByZXR1cm4gc3RyICs9IGIudmFsdWU7XG4gICAgICB9LCAnJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiYXBwZW5kVGFpbFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRhaWwpLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZEVhZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRFYWdlcigpIHtcbiAgICAgIHZhciBfdGhpcyRfbWFwUG9zVG9CbG9jaztcblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHN0YXJ0QmxvY2tJbmRleCA9IChfdGhpcyRfbWFwUG9zVG9CbG9jayA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpKSA9PT0gbnVsbCB8fCBfdGhpcyRfbWFwUG9zVG9CbG9jayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkX21hcFBvc1RvQmxvY2suaW5kZXg7XG4gICAgICBpZiAoc3RhcnRCbG9ja0luZGV4ID09IG51bGwpIHJldHVybiBkZXRhaWxzOyAvLyBUT0RPIHRlc3QgaWYgaXQgd29ya3MgZm9yIG5lc3RlZCBwYXR0ZXJuIG1hc2tzXG5cbiAgICAgIGlmICh0aGlzLl9ibG9ja3Nbc3RhcnRCbG9ja0luZGV4XS5pc0ZpbGxlZCkgKytzdGFydEJsb2NrSW5kZXg7XG5cbiAgICAgIGZvciAodmFyIGJpID0gc3RhcnRCbG9ja0luZGV4OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgdmFyIGQgPSB0aGlzLl9ibG9ja3NbYmldLl9hcHBlbmRFYWdlcigpO1xuXG4gICAgICAgIGlmICghZC5pbnNlcnRlZCkgYnJlYWs7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIHZhciBibG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKTtcblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKCFibG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgICBmb3IgKHZhciBiaSA9IGJsb2NrSXRlci5pbmRleDs7ICsrYmkpIHtcbiAgICAgICAgdmFyIF9mbGFncyRfYmVmb3JlVGFpbFN0YTtcblxuICAgICAgICB2YXIgX2Jsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICAgICAgaWYgKCFfYmxvY2spIGJyZWFrO1xuXG4gICAgICAgIHZhciBibG9ja0RldGFpbHMgPSBfYmxvY2suX2FwcGVuZENoYXIoY2gsIE9iamVjdC5hc3NpZ24oe30sIGZsYWdzLCB7XG4gICAgICAgICAgX2JlZm9yZVRhaWxTdGF0ZTogKF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUpID09PSBudWxsIHx8IF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZsYWdzJF9iZWZvcmVUYWlsU3RhLl9ibG9ja3NbYmldXG4gICAgICAgIH0pKTtcblxuICAgICAgICB2YXIgc2tpcCA9IGJsb2NrRGV0YWlscy5za2lwO1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShibG9ja0RldGFpbHMpO1xuICAgICAgICBpZiAoc2tpcCB8fCBibG9ja0RldGFpbHMucmF3SW5zZXJ0ZWQpIGJyZWFrOyAvLyBnbyBuZXh0IGNoYXJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBjaHVua1RhaWwgPSBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKTtcbiAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuIGNodW5rVGFpbDtcblxuICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZ1bmN0aW9uIChiLCBiaSwgYkZyb21Qb3MsIGJUb1Bvcykge1xuICAgICAgICB2YXIgYmxvY2tDaHVuayA9IGIuZXh0cmFjdFRhaWwoYkZyb21Qb3MsIGJUb1Bvcyk7XG4gICAgICAgIGJsb2NrQ2h1bmsuc3RvcCA9IF90aGlzMi5fZmluZFN0b3BCZWZvcmUoYmkpO1xuICAgICAgICBibG9ja0NodW5rLmZyb20gPSBfdGhpczIuX2Jsb2NrU3RhcnRQb3MoYmkpO1xuICAgICAgICBpZiAoYmxvY2tDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSBibG9ja0NodW5rLmJsb2NrSW5kZXggPSBiaTtcbiAgICAgICAgY2h1bmtUYWlsLmV4dGVuZChibG9ja0NodW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY2h1bmtUYWlsO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuICcnO1xuICAgICAgdmFyIGlucHV0ID0gJyc7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgZnJvbVBvcywgdG9Qb3MpIHtcbiAgICAgICAgaW5wdXQgKz0gYi5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU3RvcEJlZm9yZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFN0b3BCZWZvcmUoYmxvY2tJbmRleCkge1xuICAgICAgdmFyIHN0b3BCZWZvcmU7XG5cbiAgICAgIGZvciAodmFyIHNpID0gMDsgc2kgPCB0aGlzLl9zdG9wcy5sZW5ndGg7ICsrc2kpIHtcbiAgICAgICAgdmFyIHN0b3AgPSB0aGlzLl9zdG9wc1tzaV07XG4gICAgICAgIGlmIChzdG9wIDw9IGJsb2NrSW5kZXgpIHN0b3BCZWZvcmUgPSBzdG9wO2Vsc2UgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9wQmVmb3JlO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBwbGFjZWhvbGRlciBkZXBlbmRpbmcgb24gbGF6aW5lc3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIodG9CbG9ja0luZGV4KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMubGF6eSAmJiB0b0Jsb2NrSW5kZXggPT0gbnVsbCkgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAgIHZhciBzdGFydEJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICBpZiAoIXN0YXJ0QmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHZhciBzdGFydEJsb2NrSW5kZXggPSBzdGFydEJsb2NrSXRlci5pbmRleDtcbiAgICAgIHZhciBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xuXG4gICAgICB0aGlzLl9ibG9ja3Muc2xpY2Uoc3RhcnRCbG9ja0luZGV4LCBlbmRCbG9ja0luZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICghYi5sYXp5IHx8IHRvQmxvY2tJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBgX2Jsb2Nrc2AgbWF5IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgdmFyIGFyZ3MgPSBiLl9ibG9ja3MgIT0gbnVsbCA/IFtiLl9ibG9ja3MubGVuZ3RoXSA6IFtdO1xuXG4gICAgICAgICAgdmFyIGJEZXRhaWxzID0gYi5fYXBwZW5kUGxhY2Vob2xkZXIuYXBwbHkoYiwgYXJncyk7XG5cbiAgICAgICAgICBfdGhpczMuX3ZhbHVlICs9IGJEZXRhaWxzLmluc2VydGVkO1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJEZXRhaWxzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogRmluZHMgYmxvY2sgaW4gcG9zICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbWFwUG9zVG9CbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFwUG9zVG9CbG9jayhwb3MpIHtcbiAgICAgIHZhciBhY2NWYWwgPSAnJztcblxuICAgICAgZm9yICh2YXIgYmkgPSAwOyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgdmFyIF9ibG9jazIgPSB0aGlzLl9ibG9ja3NbYmldO1xuICAgICAgICB2YXIgYmxvY2tTdGFydFBvcyA9IGFjY1ZhbC5sZW5ndGg7XG4gICAgICAgIGFjY1ZhbCArPSBfYmxvY2syLnZhbHVlO1xuXG4gICAgICAgIGlmIChwb3MgPD0gYWNjVmFsLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogYmksXG4gICAgICAgICAgICBvZmZzZXQ6IHBvcyAtIGJsb2NrU3RhcnRQb3NcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2Jsb2NrU3RhcnRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Jsb2NrU3RhcnRQb3MoYmxvY2tJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5zbGljZSgwLCBibG9ja0luZGV4KS5yZWR1Y2UoZnVuY3Rpb24gKHBvcywgYikge1xuICAgICAgICByZXR1cm4gcG9zICs9IGIudmFsdWUubGVuZ3RoO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZvckVhY2hCbG9ja3NJblJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zKSB7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBmcm9tQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayhmcm9tUG9zKTtcblxuICAgICAgaWYgKGZyb21CbG9ja0l0ZXIpIHtcbiAgICAgICAgdmFyIHRvQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0b1Bvcyk7IC8vIHByb2Nlc3MgZmlyc3QgYmxvY2tcblxuXG4gICAgICAgIHZhciBpc1NhbWVCbG9jayA9IHRvQmxvY2tJdGVyICYmIGZyb21CbG9ja0l0ZXIuaW5kZXggPT09IHRvQmxvY2tJdGVyLmluZGV4O1xuICAgICAgICB2YXIgZnJvbUJsb2NrU3RhcnRQb3MgPSBmcm9tQmxvY2tJdGVyLm9mZnNldDtcbiAgICAgICAgdmFyIGZyb21CbG9ja0VuZFBvcyA9IHRvQmxvY2tJdGVyICYmIGlzU2FtZUJsb2NrID8gdG9CbG9ja0l0ZXIub2Zmc2V0IDogdGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgZm4odGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLCBmcm9tQmxvY2tJdGVyLmluZGV4LCBmcm9tQmxvY2tTdGFydFBvcywgZnJvbUJsb2NrRW5kUG9zKTtcblxuICAgICAgICBpZiAodG9CbG9ja0l0ZXIgJiYgIWlzU2FtZUJsb2NrKSB7XG4gICAgICAgICAgLy8gcHJvY2VzcyBpbnRlcm1lZGlhdGUgYmxvY2tzXG4gICAgICAgICAgZm9yICh2YXIgYmkgPSBmcm9tQmxvY2tJdGVyLmluZGV4ICsgMTsgYmkgPCB0b0Jsb2NrSXRlci5pbmRleDsgKytiaSkge1xuICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW2JpXSwgYmksIDAsIHRoaXMuX2Jsb2Nrc1tiaV0udmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICB9IC8vIHByb2Nlc3MgbGFzdCBibG9ja1xuXG5cbiAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbdG9CbG9ja0l0ZXIuaW5kZXhdLCB0b0Jsb2NrSXRlci5pbmRleCwgMCwgdG9CbG9ja0l0ZXIub2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICB2YXIgcmVtb3ZlRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJyZW1vdmVcIiwgdGhpcykuY2FsbCh0aGlzLCBmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgYkZyb21Qb3MsIGJUb1Bvcykge1xuICAgICAgICByZW1vdmVEZXRhaWxzLmFnZ3JlZ2F0ZShiLnJlbW92ZShiRnJvbVBvcywgYlRvUG9zKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlbW92ZURldGFpbHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIGlmICghdGhpcy5fYmxvY2tzLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgICB2YXIgY3Vyc29yID0gbmV3IFBhdHRlcm5DdXJzb3IodGhpcywgY3Vyc29yUG9zKTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBOT05FIHNob3VsZCBvbmx5IGdvIG91dCBmcm9tIGZpeGVkIHRvIHRoZSByaWdodCFcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBpZiAoY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCkpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgaWYgKGN1cnNvci5wdXNoTGVmdEJlZm9yZUlucHV0KCkpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB9IC8vIEZPUkNFIGlzIG9ubHkgYWJvdXQgYXwqIG90aGVyd2lzZSBpcyAwXG5cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICAvLyB0cnkgdG8gYnJlYWsgZmFzdCB3aGVuICp8YVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVGaWxsZWQoKTtcbiAgICAgICAgICBpZiAoY3Vyc29yLm9rICYmIGN1cnNvci5wb3MgPT09IGN1cnNvclBvcykgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgfSAvLyBmb3J3YXJkIGZsb3dcblxuXG4gICAgICAgIGN1cnNvci5wdXNoTGVmdEJlZm9yZUlucHV0KCk7XG4gICAgICAgIGN1cnNvci5wdXNoTGVmdEJlZm9yZVJlcXVpcmVkKCk7XG4gICAgICAgIGN1cnNvci5wdXNoTGVmdEJlZm9yZUZpbGxlZCgpOyAvLyBiYWNrd2FyZCBmbG93XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIHtcbiAgICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlSW5wdXQoKTtcbiAgICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlUmVxdWlyZWQoKTtcbiAgICAgICAgICBpZiAoY3Vyc29yLm9rICYmIGN1cnNvci5wb3MgPD0gY3Vyc29yUG9zKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgICBpZiAoY3Vyc29yLm9rICYmIGN1cnNvci5wb3MgPD0gY3Vyc29yUG9zKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkgcmV0dXJuIDA7XG4gICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zOyAvLyBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgLy8gaWYgKFxuICAgICAgICAvLyAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVJbnB1dCgpICYmXG4gICAgICAgIC8vICAgLy8gVE9ETyBIQUNLIGZvciBsYXp5IGlmIGhhcyBhbGlnbmVkIGxlZnQgaW5zaWRlIGZpeGVkIGFuZCBoYXMgY2FtZSB0byB0aGUgc3RhcnQgLSB1c2Ugc3RhcnQgcG9zaXRpb25cbiAgICAgICAgLy8gICAoIXRoaXMubGF6eSB8fCB0aGlzLmV4dHJhY3RJbnB1dCgpKVxuICAgICAgICAvLyApIHJldHVybiBjdXJzb3IucG9zO1xuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uUklHSFQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQpIHtcbiAgICAgICAgLy8gZm9yd2FyZCBmbG93XG4gICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVJbnB1dCgpO1xuICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlUmVxdWlyZWQoKTtcbiAgICAgICAgaWYgKGN1cnNvci5wdXNoUmlnaHRCZWZvcmVGaWxsZWQoKSkgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkgcmV0dXJuIHRoaXMudmFsdWUubGVuZ3RoOyAvLyBiYWNrd2FyZCBmbG93XG5cbiAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgIHJldHVybiB0aGlzLm5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICB9XG4gICAgLyoqIEdldCBibG9jayBieSBuYW1lICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrZWRCbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrZWRCbG9jayhuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWRCbG9ja3MobmFtZSlbMF07XG4gICAgfVxuICAgIC8qKiBHZXQgYWxsIGJsb2NrcyBieSBuYW1lICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrZWRCbG9ja3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2tzKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgaW5kaWNlcyA9IHRoaXMuX21hc2tlZEJsb2Nrc1tuYW1lXTtcbiAgICAgIGlmICghaW5kaWNlcykgcmV0dXJuIFtdO1xuICAgICAgcmV0dXJuIGluZGljZXMubWFwKGZ1bmN0aW9uIChnaSkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Ll9ibG9ja3NbZ2ldO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZFBhdHRlcm47XG59KE1hc2tlZCk7XG5NYXNrZWRQYXR0ZXJuLkRFRkFVTFRTID0ge1xuICBsYXp5OiB0cnVlLFxuICBwbGFjZWhvbGRlckNoYXI6ICdfJ1xufTtcbk1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSID0gJ2AnO1xuTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUiA9ICdcXFxcJztcbk1hc2tlZFBhdHRlcm4uSW5wdXREZWZpbml0aW9uID0gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbk1hc2tlZFBhdHRlcm4uRml4ZWREZWZpbml0aW9uID0gUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcbklNYXNrLk1hc2tlZFBhdHRlcm4gPSBNYXNrZWRQYXR0ZXJuO1xuXG5leHBvcnQgeyBNYXNrZWRQYXR0ZXJuIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgYiBhcyBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzLmpzJztcbmltcG9ydCBDb250aW51b3VzVGFpbERldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vLi4vY29yZS9ob2xkZXIuanMnO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiY2h1bmtzXCJdO1xuXG52YXIgQ2h1bmtzVGFpbERldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKiogKi9cbiAgZnVuY3Rpb24gQ2h1bmtzVGFpbERldGFpbHMoKSB7XG4gICAgdmFyIGNodW5rcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gICAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2h1bmtzVGFpbERldGFpbHMpO1xuXG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDaHVua3NUYWlsRGV0YWlscywgW3tcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaHVua3MubWFwKFN0cmluZykuam9pbignJyk7XG4gICAgfSAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKHRhaWxDaHVuaykge1xuICAgICAgaWYgKCFTdHJpbmcodGFpbENodW5rKSkgcmV0dXJuO1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWxDaHVuaykpIHRhaWxDaHVuayA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWxDaHVuaykpO1xuICAgICAgdmFyIGxhc3RDaHVuayA9IHRoaXMuY2h1bmtzW3RoaXMuY2h1bmtzLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIGV4dGVuZExhc3QgPSBsYXN0Q2h1bmsgJiYgKCAvLyBpZiBzdG9wcyBhcmUgc2FtZSBvciB0YWlsIGhhcyBubyBzdG9wXG4gICAgICBsYXN0Q2h1bmsuc3RvcCA9PT0gdGFpbENodW5rLnN0b3AgfHwgdGFpbENodW5rLnN0b3AgPT0gbnVsbCkgJiYgLy8gaWYgdGFpbCBjaHVuayBnb2VzIGp1c3QgYWZ0ZXIgbGFzdCBjaHVua1xuICAgICAgdGFpbENodW5rLmZyb20gPT09IGxhc3RDaHVuay5mcm9tICsgbGFzdENodW5rLnRvU3RyaW5nKCkubGVuZ3RoO1xuXG4gICAgICBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ29udGludW91c1RhaWxEZXRhaWxzKSB7XG4gICAgICAgIC8vIGNoZWNrIHRoZSBhYmlsaXR5IHRvIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICBpZiAoZXh0ZW5kTGFzdCkge1xuICAgICAgICAgIC8vIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICAgIGxhc3RDaHVuay5leHRlbmQodGFpbENodW5rLnRvU3RyaW5nKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFwcGVuZCBuZXcgY2h1bmtcbiAgICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFpbENodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIHtcbiAgICAgICAgaWYgKHRhaWxDaHVuay5zdG9wID09IG51bGwpIHtcbiAgICAgICAgICAvLyB1bndyYXAgZmxvYXRpbmcgY2h1bmtzIHRvIHBhcmVudCwga2VlcGluZyBgZnJvbWAgcG9zXG4gICAgICAgICAgdmFyIGZpcnN0VGFpbENodW5rO1xuXG4gICAgICAgICAgd2hpbGUgKHRhaWxDaHVuay5jaHVua3MubGVuZ3RoICYmIHRhaWxDaHVuay5jaHVua3NbMF0uc3RvcCA9PSBudWxsKSB7XG4gICAgICAgICAgICBmaXJzdFRhaWxDaHVuayA9IHRhaWxDaHVuay5jaHVua3Muc2hpZnQoKTtcbiAgICAgICAgICAgIGZpcnN0VGFpbENodW5rLmZyb20gKz0gdGFpbENodW5rLmZyb207XG4gICAgICAgICAgICB0aGlzLmV4dGVuZChmaXJzdFRhaWxDaHVuayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGlmIHRhaWwgY2h1bmsgc3RpbGwgaGFzIHZhbHVlXG5cblxuICAgICAgICBpZiAodGFpbENodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBpZiBjaHVua3MgY29udGFpbnMgc3RvcHMsIHRoZW4gcG9wdXAgc3RvcCB0byBjb250YWluZXJcbiAgICAgICAgICB0YWlsQ2h1bmsuc3RvcCA9IHRhaWxDaHVuay5ibG9ja0luZGV4O1xuICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGlmICghKG1hc2tlZCBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZFBhdHRlcm4pKSB7XG4gICAgICAgIHZhciB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyhtYXNrZWQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCB0aGlzLmNodW5rcy5sZW5ndGggJiYgIWRldGFpbHMuc2tpcDsgKytjaSkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG5cbiAgICAgICAgdmFyIGxhc3RCbG9ja0l0ZXIgPSBtYXNrZWQuX21hcFBvc1RvQmxvY2sobWFza2VkLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgdmFyIHN0b3AgPSBjaHVuay5zdG9wO1xuICAgICAgICB2YXIgY2h1bmtCbG9jayA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoc3RvcCAhPSBudWxsICYmICggLy8gaWYgYmxvY2sgbm90IGZvdW5kIG9yIHN0b3AgaXMgYmVoaW5kIGxhc3RCbG9ja1xuICAgICAgICAhbGFzdEJsb2NrSXRlciB8fCBsYXN0QmxvY2tJdGVyLmluZGV4IDw9IHN0b3ApKSB7XG4gICAgICAgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgfHwgLy8gZm9yIGNvbnRpbnVvdXMgYmxvY2sgYWxzbyBjaGVjayBpZiBzdG9wIGlzIGV4aXN0XG4gICAgICAgICAgbWFza2VkLl9zdG9wcy5pbmRleE9mKHN0b3ApID49IDApIHtcbiAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoc3RvcCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNodW5rQmxvY2sgPSBjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzICYmIG1hc2tlZC5fYmxvY2tzW3N0b3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNodW5rQmxvY2spIHtcbiAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSBjaHVua0Jsb2NrLmFwcGVuZFRhaWwoY2h1bmspO1xuICAgICAgICAgIHRhaWxEZXRhaWxzLnNraXAgPSBmYWxzZTsgLy8gYWx3YXlzIGlnbm9yZSBza2lwLCBpdCB3aWxsIGJlIHNldCBvbiBsYXN0XG5cbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0YWlsRGV0YWlscyk7XG4gICAgICAgICAgbWFza2VkLl92YWx1ZSArPSB0YWlsRGV0YWlscy5pbnNlcnRlZDsgLy8gZ2V0IG5vdCBpbnNlcnRlZCBjaGFyc1xuXG4gICAgICAgICAgdmFyIHJlbWFpbkNoYXJzID0gY2h1bmsudG9TdHJpbmcoKS5zbGljZSh0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGgpO1xuICAgICAgICAgIGlmIChyZW1haW5DaGFycykgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChyZW1haW5DaGFycywge1xuICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKGNodW5rLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2h1bmtzOiB0aGlzLmNodW5rcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy5zdGF0ZTtcbiAgICAgICAgfSksXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgICAgc3RvcDogdGhpcy5zdG9wLFxuICAgICAgICBibG9ja0luZGV4OiB0aGlzLmJsb2NrSW5kZXhcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIGNodW5rcyA9IHN0YXRlLmNodW5rcyxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgX2V4Y2x1ZGVkKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcyk7XG4gICAgICB0aGlzLmNodW5rcyA9IGNodW5rcy5tYXAoZnVuY3Rpb24gKGNzdGF0ZSkge1xuICAgICAgICB2YXIgY2h1bmsgPSBcImNodW5rc1wiIGluIGNzdGF0ZSA/IG5ldyBDaHVua3NUYWlsRGV0YWlscygpIDogbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygpOyAvLyAkRmxvd0ZpeE1lIGFscmVhZHkgY2hlY2tlZCBhYm92ZVxuXG4gICAgICAgIGNodW5rLnN0YXRlID0gY3N0YXRlO1xuICAgICAgICByZXR1cm4gY2h1bms7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5zaGlmdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnNoaWZ0KGJlZm9yZVBvcykge1xuICAgICAgaWYgKCF0aGlzLmNodW5rcy5sZW5ndGggfHwgYmVmb3JlUG9zICE9IG51bGwgJiYgdGhpcy5mcm9tID49IGJlZm9yZVBvcykgcmV0dXJuICcnO1xuICAgICAgdmFyIGNodW5rU2hpZnRQb3MgPSBiZWZvcmVQb3MgIT0gbnVsbCA/IGJlZm9yZVBvcyAtIHRoaXMuZnJvbSA6IGJlZm9yZVBvcztcbiAgICAgIHZhciBjaSA9IDA7XG5cbiAgICAgIHdoaWxlIChjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICAgIHZhciBzaGlmdENoYXIgPSBjaHVuay51bnNoaWZ0KGNodW5rU2hpZnRQb3MpO1xuXG4gICAgICAgIGlmIChjaHVuay50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gY2h1bmsgc3RpbGwgY29udGFpbnMgdmFsdWVcbiAgICAgICAgICAvLyBidXQgbm90IHNoaWZ0ZWQgLSBtZWFucyBubyBtb3JlIGF2YWlsYWJsZSBjaGFycyB0byBzaGlmdFxuICAgICAgICAgIGlmICghc2hpZnRDaGFyKSBicmVhaztcbiAgICAgICAgICArK2NpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNsZWFuIGlmIGNodW5rIGhhcyBubyB2YWx1ZVxuICAgICAgICAgIHRoaXMuY2h1bmtzLnNwbGljZShjaSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hpZnRDaGFyKSByZXR1cm4gc2hpZnRDaGFyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNoaWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgICAgaWYgKCF0aGlzLmNodW5rcy5sZW5ndGgpIHJldHVybiAnJztcbiAgICAgIHZhciBjaSA9IHRoaXMuY2h1bmtzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlICgwIDw9IGNpKSB7XG4gICAgICAgIHZhciBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcbiAgICAgICAgdmFyIHNoaWZ0Q2hhciA9IGNodW5rLnNoaWZ0KCk7XG5cbiAgICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBjaHVuayBzdGlsbCBjb250YWlucyB2YWx1ZVxuICAgICAgICAgIC8vIGJ1dCBub3Qgc2hpZnRlZCAtIG1lYW5zIG5vIG1vcmUgYXZhaWxhYmxlIGNoYXJzIHRvIHNoaWZ0XG4gICAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICAgIC0tY2k7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2h1bmtzVGFpbERldGFpbHM7XG59KCk7XG5cbmV4cG9ydCB7IENodW5rc1RhaWxEZXRhaWxzIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uLy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuXG52YXIgUGF0dGVybkN1cnNvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhdHRlcm5DdXJzb3IobWFza2VkLCBwb3MpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF0dGVybkN1cnNvcik7XG5cbiAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcbiAgICB0aGlzLl9sb2cgPSBbXTtcblxuICAgIHZhciBfcmVmID0gbWFza2VkLl9tYXBQb3NUb0Jsb2NrKHBvcykgfHwgKHBvcyA8IDAgPyAvLyBmaXJzdFxuICAgIHtcbiAgICAgIGluZGV4OiAwLFxuICAgICAgb2Zmc2V0OiAwXG4gICAgfSA6IC8vIGxhc3RcbiAgICB7XG4gICAgICBpbmRleDogdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGgsXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9KSxcbiAgICAgICAgb2Zmc2V0ID0gX3JlZi5vZmZzZXQsXG4gICAgICAgIGluZGV4ID0gX3JlZi5pbmRleDtcblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLm9rID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGF0dGVybkN1cnNvciwgW3tcbiAgICBrZXk6IFwiYmxvY2tcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5fYmxvY2tzW3RoaXMuaW5kZXhdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwb3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5fYmxvY2tTdGFydFBvcyh0aGlzLmluZGV4KSArIHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgIG9rOiB0aGlzLm9rXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaFN0YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hTdGF0ZSgpIHtcbiAgICAgIHRoaXMuX2xvZy5wdXNoKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwb3BTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcbiAgICAgIHZhciBzID0gdGhpcy5fbG9nLnBvcCgpO1xuXG4gICAgICB0aGlzLnN0YXRlID0gcztcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiaW5kQmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEJsb2NrKCkge1xuICAgICAgaWYgKHRoaXMuYmxvY2spIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuaW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5ibG9jay52YWx1ZS5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wdXNoTGVmdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVzaExlZnQoZm4pIHtcbiAgICAgIHRoaXMucHVzaFN0YXRlKCk7XG5cbiAgICAgIGZvciAodGhpcy5iaW5kQmxvY2soKTsgMCA8PSB0aGlzLmluZGV4OyAtLXRoaXMuaW5kZXgsIHRoaXMub2Zmc2V0ID0gKChfdGhpcyRibG9jayA9IHRoaXMuYmxvY2spID09PSBudWxsIHx8IF90aGlzJGJsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRibG9jay52YWx1ZS5sZW5ndGgpIHx8IDApIHtcbiAgICAgICAgdmFyIF90aGlzJGJsb2NrO1xuXG4gICAgICAgIGlmIChmbigpKSByZXR1cm4gdGhpcy5vayA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLm9rID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9wdXNoUmlnaHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3B1c2hSaWdodChmbikge1xuICAgICAgdGhpcy5wdXNoU3RhdGUoKTtcblxuICAgICAgZm9yICh0aGlzLmJpbmRCbG9jaygpOyB0aGlzLmluZGV4IDwgdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGg7ICsrdGhpcy5pbmRleCwgdGhpcy5vZmZzZXQgPSAwKSB7XG4gICAgICAgIGlmIChmbigpKSByZXR1cm4gdGhpcy5vayA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLm9rID0gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1c2hMZWZ0QmVmb3JlRmlsbGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hMZWZ0QmVmb3JlRmlsbGVkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuX3B1c2hMZWZ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLmJsb2NrLmlzRml4ZWQgfHwgIV90aGlzLmJsb2NrLnZhbHVlKSByZXR1cm47XG4gICAgICAgIF90aGlzLm9mZnNldCA9IF90aGlzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyhfdGhpcy5vZmZzZXQsIERJUkVDVElPTi5GT1JDRV9MRUZUKTtcbiAgICAgICAgaWYgKF90aGlzLm9mZnNldCAhPT0gMCkgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaExlZnRCZWZvcmVJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoTGVmdEJlZm9yZUlucHV0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIGNhc2VzOlxuICAgICAgLy8gZmlsbGVkIGlucHV0OiAwMHxcbiAgICAgIC8vIG9wdGlvbmFsIGVtcHR5IGlucHV0OiAwMFtdfFxuICAgICAgLy8gbmVzdGVkIGJsb2NrOiBYWDxbXT58XG4gICAgICByZXR1cm4gdGhpcy5fcHVzaExlZnQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMyLmJsb2NrLmlzRml4ZWQpIHJldHVybjtcbiAgICAgICAgX3RoaXMyLm9mZnNldCA9IF90aGlzMi5ibG9jay5uZWFyZXN0SW5wdXRQb3MoX3RoaXMyLm9mZnNldCwgRElSRUNUSU9OLkxFRlQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoTGVmdEJlZm9yZVJlcXVpcmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hMZWZ0QmVmb3JlUmVxdWlyZWQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuX3B1c2hMZWZ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzMy5ibG9jay5pc0ZpeGVkIHx8IF90aGlzMy5ibG9jay5pc09wdGlvbmFsICYmICFfdGhpczMuYmxvY2sudmFsdWUpIHJldHVybjtcbiAgICAgICAgX3RoaXMzLm9mZnNldCA9IF90aGlzMy5ibG9jay5uZWFyZXN0SW5wdXRQb3MoX3RoaXMzLm9mZnNldCwgRElSRUNUSU9OLkxFRlQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoUmlnaHRCZWZvcmVGaWxsZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaFJpZ2h0QmVmb3JlRmlsbGVkKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLl9wdXNoUmlnaHQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM0LmJsb2NrLmlzRml4ZWQgfHwgIV90aGlzNC5ibG9jay52YWx1ZSkgcmV0dXJuO1xuICAgICAgICBfdGhpczQub2Zmc2V0ID0gX3RoaXM0LmJsb2NrLm5lYXJlc3RJbnB1dFBvcyhfdGhpczQub2Zmc2V0LCBESVJFQ1RJT04uRk9SQ0VfUklHSFQpO1xuICAgICAgICBpZiAoX3RoaXM0Lm9mZnNldCAhPT0gX3RoaXM0LmJsb2NrLnZhbHVlLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaFJpZ2h0QmVmb3JlSW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaFJpZ2h0QmVmb3JlSW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuX3B1c2hSaWdodChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpczUuYmxvY2suaXNGaXhlZCkgcmV0dXJuOyAvLyBjb25zdCBvID0gdGhpcy5vZmZzZXQ7XG5cbiAgICAgICAgX3RoaXM1Lm9mZnNldCA9IF90aGlzNS5ibG9jay5uZWFyZXN0SW5wdXRQb3MoX3RoaXM1Lm9mZnNldCwgRElSRUNUSU9OLk5PTkUpOyAvLyBIQUNLIGNhc2VzIGxpa2UgKFNUSUxMIERPRVMgTk9UIFdPUksgRk9SIE5FU1RFRClcbiAgICAgICAgLy8gYWF8WFxuICAgICAgICAvLyBhYTxYfFtdPlhfICAgIC0gdGhpcyB3aWxsIG5vdCB3b3JrXG4gICAgICAgIC8vIGlmIChvICYmIG8gPT09IHRoaXMub2Zmc2V0ICYmIHRoaXMuYmxvY2sgaW5zdGFuY2VvZiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKSBjb250aW51ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoUmlnaHRCZWZvcmVSZXF1aXJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoUmlnaHRCZWZvcmVSZXF1aXJlZCgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcHVzaFJpZ2h0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzNi5ibG9jay5pc0ZpeGVkIHx8IF90aGlzNi5ibG9jay5pc09wdGlvbmFsICYmICFfdGhpczYuYmxvY2sudmFsdWUpIHJldHVybjsgLy8gVE9ETyBjaGVjayB8WypdWFhfXG5cbiAgICAgICAgX3RoaXM2Lm9mZnNldCA9IF90aGlzNi5ibG9jay5uZWFyZXN0SW5wdXRQb3MoX3RoaXM2Lm9mZnNldCwgRElSRUNUSU9OLk5PTkUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYXR0ZXJuQ3Vyc29yO1xufSgpO1xuXG5leHBvcnQgeyBQYXR0ZXJuQ3Vyc29yIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IF8gYXMgX2NyZWF0ZUNsYXNzLCBhIGFzIF9jbGFzc0NhbGxDaGVjayB9IGZyb20gJy4uLy4uL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMtYjA1NGVjZDIuanMnO1xuaW1wb3J0IENoYW5nZURldGFpbHMgZnJvbSAnLi4vLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5pbXBvcnQgeyBESVJFQ1RJT04sIGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgQ29udGludW91c1RhaWxEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY29udGludW91cy10YWlsLWRldGFpbHMuanMnO1xuXG52YXIgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuICBmdW5jdGlvbiBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF0dGVybkZpeGVkRGVmaW5pdGlvbik7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5pc0ZpeGVkID0gdHJ1ZTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCBbe1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1VubWFza2luZyA/IHRoaXMudmFsdWUgOiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fdmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLl92YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgICBpZiAoIXRoaXMuX3ZhbHVlKSB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgdmFyIG1pblBvcyA9IDA7XG4gICAgICB2YXIgbWF4UG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHJldHVybiBtaW5Qb3M7XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXhQb3M7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHJldHVybiBmbGFncy5yYXcgJiYgdGhpcy5faXNSYXdJbnB1dCAmJiB0aGlzLl92YWx1ZS5zbGljZShmcm9tUG9zLCB0b1BvcykgfHwgJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0ZpbGxlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSkgcmV0dXJuIGRldGFpbHM7XG4gICAgICB2YXIgYXBwZW5kZWQgPSB0aGlzLmNoYXIgPT09IGNoO1xuICAgICAgdmFyIGlzUmVzb2x2ZWQgPSBhcHBlbmRlZCAmJiAodGhpcy5pc1VubWFza2luZyB8fCBmbGFncy5pbnB1dCB8fCBmbGFncy5yYXcpICYmICF0aGlzLmVhZ2VyICYmICFmbGFncy50YWlsO1xuICAgICAgaWYgKGlzUmVzb2x2ZWQpIGRldGFpbHMucmF3SW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICB0aGlzLl9pc1Jhd0lucHV0ID0gaXNSZXNvbHZlZCAmJiAoZmxhZ3MucmF3IHx8IGZsYWdzLmlucHV0KTtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kRWFnZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZEVhZ2VyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FwcGVuZENoYXIodGhpcy5jaGFyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSkgcmV0dXJuIGRldGFpbHM7XG4gICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoJycpO1xuICAgIH0gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICAgIGlmIChpc1N0cmluZyh0YWlsKSkgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKTtcbiAgICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwZW5kQ2hhcihzdHJbMF0sIGZsYWdzKTtcblxuICAgICAgaWYgKHRhaWwgIT0gbnVsbCkge1xuICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwodGFpbCkudGFpbFNoaWZ0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgICBfaXNSYXdJbnB1dDogdGhpcy5faXNSYXdJbnB1dFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcbn0oKTtcblxuZXhwb3J0IHsgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgeyBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGIgYXMgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy1iMDU0ZWNkMi5qcyc7XG5pbXBvcnQgY3JlYXRlTWFzayBmcm9tICcuLi9mYWN0b3J5LmpzJztcbmltcG9ydCBDaGFuZ2VEZXRhaWxzIGZyb20gJy4uLy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0IHsgRElSRUNUSU9OIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgJy4uLy4uL2NvcmUvaG9sZGVyLmpzJztcblxudmFyIF9leGNsdWRlZCA9IFtcIm1hc2tcIl07XG52YXIgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUyA9IHtcbiAgJzAnOiAvXFxkLyxcbiAgJ2EnOiAvW1xcdTAwNDEtXFx1MDA1QVxcdTAwNjEtXFx1MDA3QVxcdTAwQUFcXHUwMEI1XFx1MDBCQVxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDUyN1xcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3QTVcXHUwN0IxXFx1MDdDQS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBXFx1MDgwMC1cXHUwODE1XFx1MDgxQVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhBMFxcdTA4QTItXFx1MDhBQ1xcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdGXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNEXFx1MEM1OFxcdTBDNTlcXHUwQzYwXFx1MEM2MVxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ2MFxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEUwMS1cXHUwRTMwXFx1MEUzMlxcdTBFMzNcXHUwRTQwLVxcdTBFNDZcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZDXFx1MEY4OC1cXHUwRjhDXFx1MTAwMC1cXHUxMDJBXFx1MTAzRlxcdTEwNTAtXFx1MTA1NVxcdTEwNUEtXFx1MTA1RFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNkUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOEVcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y0XFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc4MC1cXHUxN0IzXFx1MTdEN1xcdTE3RENcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QThcXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFDXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlDMS1cXHUxOUM3XFx1MUEwMC1cXHUxQTE2XFx1MUEyMC1cXHUxQTU0XFx1MUFBN1xcdTFCMDUtXFx1MUIzM1xcdTFCNDUtXFx1MUI0QlxcdTFCODMtXFx1MUJBMFxcdTFCQUVcXHUxQkFGXFx1MUJCQS1cXHUxQkU1XFx1MUMwMC1cXHUxQzIzXFx1MUM0RC1cXHUxQzRGXFx1MUM1QS1cXHUxQzdEXFx1MUNFOS1cXHUxQ0VDXFx1MUNFRS1cXHUxQ0YxXFx1MUNGNVxcdTFDRjZcXHUxRDAwLVxcdTFEQkZcXHUxRTAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMkRcXHUyMTJGLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE4M1xcdTIxODRcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyQ0YyXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJFMkZcXHUzMDA1XFx1MzAwNlxcdTMwMzEtXFx1MzAzNVxcdTMwM0JcXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5RC1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OTdcXHVBNkEwLVxcdUE2RTVcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3OEVcXHVBNzkwLVxcdUE3OTNcXHVBN0EwLVxcdUE3QUFcXHVBN0Y4LVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFBNjAtXFx1QUE3NlxcdUFBN0FcXHVBQTgwLVxcdUFBQUZcXHVBQUIxXFx1QUFCNVxcdUFBQjZcXHVBQUI5LVxcdUFBQkRcXHVBQUMwXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFQVxcdUFBRjItXFx1QUFGNFxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCQzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10vLFxuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjA3NTA3MFxuICAnKic6IC8uL1xufTtcbi8qKiAqL1xuXG52YXIgUGF0dGVybklucHV0RGVmaW5pdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuICBmdW5jdGlvbiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF0dGVybklucHV0RGVmaW5pdGlvbik7XG5cbiAgICB2YXIgbWFzayA9IG9wdHMubWFzayxcbiAgICAgICAgYmxvY2tPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIF9leGNsdWRlZCk7XG5cbiAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2soe1xuICAgICAgbWFzazogbWFza1xuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgYmxvY2tPcHRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXR0ZXJuSW5wdXREZWZpbml0aW9uLCBbe1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubWFza2VkLnJlc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIGlmIChmcm9tUG9zID09PSAwICYmIHRvUG9zID49IDEpIHtcbiAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXNrZWQucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudmFsdWUgfHwgKHRoaXMuaXNGaWxsZWQgJiYgIXRoaXMuaXNPcHRpb25hbCA/IHRoaXMucGxhY2Vob2xkZXJDaGFyIDogJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tYXNrZWQudmFsdWUpIHx8IHRoaXMuaXNPcHRpb25hbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBpZiAodGhpcy5pc0ZpbGxlZCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLm1hc2tlZC5zdGF0ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLm1hc2tlZC5fYXBwZW5kQ2hhcihjaCwgZmxhZ3MpO1xuXG4gICAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCAmJiB0aGlzLmRvVmFsaWRhdGUoZmxhZ3MpID09PSBmYWxzZSkge1xuICAgICAgICBkZXRhaWxzLmluc2VydGVkID0gZGV0YWlscy5yYXdJbnNlcnRlZCA9ICcnO1xuICAgICAgICB0aGlzLm1hc2tlZC5zdGF0ZSA9IHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbCAmJiAhdGhpcy5sYXp5ICYmICFmbGFncy5pbnB1dCkge1xuICAgICAgICBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5wbGFjZWhvbGRlckNoYXI7XG4gICAgICB9XG5cbiAgICAgIGRldGFpbHMuc2tpcCA9ICFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWw7XG4gICAgICB0aGlzLmlzRmlsbGVkID0gQm9vbGVhbihkZXRhaWxzLmluc2VydGVkKTtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDtcblxuICAgICAgLy8gVE9ETyBwcm9iYWJseSBzaG91bGQgYmUgZG9uZSB2aWEgX2FwcGVuZENoYXJcbiAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkID0gdGhpcy5tYXNrZWQpLmFwcGVuZC5hcHBseShfdGhpcyRtYXNrZWQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5pc0ZpbGxlZCB8fCB0aGlzLmlzT3B0aW9uYWwpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XG4gICAgICBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5wbGFjZWhvbGRlckNoYXI7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZEVhZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRFYWdlcigpIHtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrZWQyO1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDIgPSB0aGlzLm1hc2tlZCkuZXh0cmFjdFRhaWwuYXBwbHkoX3RoaXMkbWFza2VkMiwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDM7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkMyA9IHRoaXMubWFza2VkKS5hcHBlbmRUYWlsLmFwcGx5KF90aGlzJG1hc2tlZDMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgdmFyIG1pblBvcyA9IDA7XG4gICAgICB2YXIgbWF4UG9zID0gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgYm91bmRQb3MgPSBNYXRoLm1pbihNYXRoLm1heChjdXJzb3JQb3MsIG1pblBvcyksIG1heFBvcyk7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWluUG9zO1xuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gYm91bmRQb3MgOiBtYXhQb3M7XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gYm91bmRQb3M7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrZWQ0LCBfdGhpcyRwYXJlbnQ7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkNCA9IHRoaXMubWFza2VkKS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJG1hc2tlZDQsIGFyZ3VtZW50cykgJiYgKCF0aGlzLnBhcmVudCB8fCAoX3RoaXMkcGFyZW50ID0gdGhpcy5wYXJlbnQpLmRvVmFsaWRhdGUuYXBwbHkoX3RoaXMkcGFyZW50LCBhcmd1bWVudHMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICB0aGlzLm1hc2tlZC5kb0NvbW1pdCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWFza2VkOiB0aGlzLm1hc2tlZC5zdGF0ZSxcbiAgICAgICAgaXNGaWxsZWQ6IHRoaXMuaXNGaWxsZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZS5tYXNrZWQ7XG4gICAgICB0aGlzLmlzRmlsbGVkID0gc3RhdGUuaXNGaWxsZWQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5JbnB1dERlZmluaXRpb247XG59KCk7XG5cbmV4cG9ydCB7IERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMsIFBhdHRlcm5JbnB1dERlZmluaXRpb24gYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGNyZWF0ZU1hc2sgZnJvbSAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvdXRpbHMuanMnO1xuaW1wb3J0ICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCAnLi4vY29yZS9jaGFuZ2UtZGV0YWlscy5qcyc7XG5cbi8qKiBNYXNrIHBpcGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyAqL1xuXG52YXIgUElQRV9UWVBFID0ge1xuICBNQVNLRUQ6ICd2YWx1ZScsXG4gIFVOTUFTS0VEOiAndW5tYXNrZWRWYWx1ZScsXG4gIFRZUEVEOiAndHlwZWRWYWx1ZSdcbn07XG4vKiogQ3JlYXRlcyBuZXcgcGlwZSBmdW5jdGlvbiBkZXBlbmRpbmcgb24gbWFzayB0eXBlLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG9wdGlvbnMgKi9cblxuZnVuY3Rpb24gY3JlYXRlUGlwZShtYXNrKSB7XG4gIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBQSVBFX1RZUEUuTUFTS0VEO1xuICB2YXIgdG8gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFBJUEVfVFlQRS5NQVNLRUQ7XG4gIHZhciBtYXNrZWQgPSBjcmVhdGVNYXNrKG1hc2spO1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIG1hc2tlZC5ydW5Jc29sYXRlZChmdW5jdGlvbiAobSkge1xuICAgICAgbVtmcm9tXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIG1bdG9dO1xuICAgIH0pO1xuICB9O1xufVxuLyoqIFBpcGVzIHZhbHVlIHRocm91Z2ggbWFzayBkZXBlbmRpbmcgb24gbWFzayB0eXBlLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG9wdGlvbnMgKi9cblxuZnVuY3Rpb24gcGlwZSh2YWx1ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGlwZUFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBpcGVBcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQaXBlLmFwcGx5KHZvaWQgMCwgcGlwZUFyZ3MpKHZhbHVlKTtcbn1cbklNYXNrLlBJUEVfVFlQRSA9IFBJUEVfVFlQRTtcbklNYXNrLmNyZWF0ZVBpcGUgPSBjcmVhdGVQaXBlO1xuSU1hc2sucGlwZSA9IHBpcGU7XG5cbmV4cG9ydCB7IFBJUEVfVFlQRSwgY3JlYXRlUGlwZSwgcGlwZSB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBhIGFzIF9jbGFzc0NhbGxDaGVjaywgXyBhcyBfY3JlYXRlQ2xhc3MsIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YsIGYgYXMgX3NsaWNlZFRvQXJyYXkgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBNYXNrZWRQYXR0ZXJuIGZyb20gJy4vcGF0dGVybi5qcyc7XG5pbXBvcnQgeyBub3JtYWxpemVQcmVwYXJlIH0gZnJvbSAnLi4vY29yZS91dGlscy5qcyc7XG5pbXBvcnQgSU1hc2sgZnJvbSAnLi4vY29yZS9ob2xkZXIuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NoYW5nZS1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9iYXNlLmpzJztcbmltcG9ydCAnLi4vY29yZS9jb250aW51b3VzLXRhaWwtZGV0YWlscy5qcyc7XG5pbXBvcnQgJy4vcGF0dGVybi9pbnB1dC1kZWZpbml0aW9uLmpzJztcbmltcG9ydCAnLi9mYWN0b3J5LmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2ZpeGVkLWRlZmluaXRpb24uanMnO1xuaW1wb3J0ICcuL3BhdHRlcm4vY2h1bmstdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi9wYXR0ZXJuL2N1cnNvci5qcyc7XG5pbXBvcnQgJy4vcmVnZXhwLmpzJztcblxuLyoqIFBhdHRlcm4gd2hpY2ggYWNjZXB0cyByYW5nZXMgKi9cblxudmFyIE1hc2tlZFJhbmdlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkUmFuZ2UsIF9NYXNrZWRQYXR0ZXJuKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFJhbmdlKTtcblxuICBmdW5jdGlvbiBNYXNrZWRSYW5nZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUmFuZ2UpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJhbmdlLCBbe1xuICAgIGtleTogXCJfbWF0Y2hGcm9tXCIsXG4gICAgZ2V0OlxuICAgIC8qKlxuICAgICAgT3B0aW9uYWxseSBzZXRzIG1heCBsZW5ndGggb2YgcGF0dGVybi5cbiAgICAgIFVzZWQgd2hlbiBwYXR0ZXJuIGxlbmd0aCBpcyBsb25nZXIgdGhlbiBgdG9gIHBhcmFtIGxlbmd0aC4gUGFkcyB6ZXJvcyBhdCBzdGFydCBpbiB0aGlzIGNhc2UuXG4gICAgKi9cblxuICAgIC8qKiBNaW4gYm91bmQgKi9cblxuICAgIC8qKiBNYXggYm91bmQgKi9cblxuICAgIC8qKiAqL1xuICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aCAtIFN0cmluZyh0aGlzLmZyb20pLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIC8vIFRPRE8gdHlwZVxuICAgICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB0bzogdGhpcy50byB8fCAwLFxuICAgICAgICBmcm9tOiB0aGlzLmZyb20gfHwgMCxcbiAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCB8fCAwXG4gICAgICB9LCBvcHRzKTtcbiAgICAgIHZhciBtYXhMZW5ndGggPSBTdHJpbmcob3B0cy50bykubGVuZ3RoO1xuICAgICAgaWYgKG9wdHMubWF4TGVuZ3RoICE9IG51bGwpIG1heExlbmd0aCA9IE1hdGgubWF4KG1heExlbmd0aCwgb3B0cy5tYXhMZW5ndGgpO1xuICAgICAgb3B0cy5tYXhMZW5ndGggPSBtYXhMZW5ndGg7XG4gICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyhvcHRzLmZyb20pLnBhZFN0YXJ0KG1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciB0b1N0ciA9IFN0cmluZyhvcHRzLnRvKS5wYWRTdGFydChtYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgc2FtZUNoYXJzQ291bnQgPSAwO1xuXG4gICAgICB3aGlsZSAoc2FtZUNoYXJzQ291bnQgPCB0b1N0ci5sZW5ndGggJiYgdG9TdHJbc2FtZUNoYXJzQ291bnRdID09PSBmcm9tU3RyW3NhbWVDaGFyc0NvdW50XSkge1xuICAgICAgICArK3NhbWVDaGFyc0NvdW50O1xuICAgICAgfVxuXG4gICAgICBvcHRzLm1hc2sgPSB0b1N0ci5zbGljZSgwLCBzYW1lQ2hhcnNDb3VudCkucmVwbGFjZSgvMC9nLCAnXFxcXDAnKSArICcwJy5yZXBlYXQobWF4TGVuZ3RoIC0gc2FtZUNoYXJzQ291bnQpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiaXNDb21wbGV0ZVwiLCB0aGlzKSAmJiBCb29sZWFuKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJib3VuZGFyaWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJvdW5kYXJpZXMoc3RyKSB7XG4gICAgICB2YXIgbWluc3RyID0gJyc7XG4gICAgICB2YXIgbWF4c3RyID0gJyc7XG5cbiAgICAgIHZhciBfcmVmID0gc3RyLm1hdGNoKC9eKFxcRCopKFxcZCopKFxcRCopLykgfHwgW10sXG4gICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAzKSxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWYyWzFdLFxuICAgICAgICAgIG51bSA9IF9yZWYyWzJdO1xuXG4gICAgICBpZiAobnVtKSB7XG4gICAgICAgIG1pbnN0ciA9ICcwJy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgICAgbWF4c3RyID0gJzknLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xuICAgICAgfVxuXG4gICAgICBtaW5zdHIgPSBtaW5zdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgbWF4c3RyID0gbWF4c3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzknKTtcbiAgICAgIHJldHVybiBbbWluc3RyLCBtYXhzdHJdO1xuICAgIH0gLy8gVE9ETyBzdHIgaXMgYSBzaW5nbGUgY2hhciBldmVyeXRpbWVcblxuICAgIC8qKlxuICAgICAgQG92ZXJyaWRlXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgZGV0YWlscztcblxuICAgICAgdmFyIF9ub3JtYWxpemVQcmVwYXJlID0gbm9ybWFsaXplUHJlcGFyZShfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLnJlcGxhY2UoL1xcRC9nLCAnJyksIGZsYWdzKSk7XG5cbiAgICAgIHZhciBfbm9ybWFsaXplUHJlcGFyZTIgPSBfc2xpY2VkVG9BcnJheShfbm9ybWFsaXplUHJlcGFyZSwgMik7XG5cbiAgICAgIGNoID0gX25vcm1hbGl6ZVByZXBhcmUyWzBdO1xuICAgICAgZGV0YWlscyA9IF9ub3JtYWxpemVQcmVwYXJlMlsxXTtcbiAgICAgIGlmICghdGhpcy5hdXRvZml4IHx8ICFjaCkgcmV0dXJuIGNoO1xuICAgICAgdmFyIGZyb21TdHIgPSBTdHJpbmcodGhpcy5mcm9tKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciB0b1N0ciA9IFN0cmluZyh0aGlzLnRvKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciBuZXh0VmFsID0gdGhpcy52YWx1ZSArIGNoO1xuICAgICAgaWYgKG5leHRWYWwubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGgpIHJldHVybiAnJztcblxuICAgICAgdmFyIF90aGlzJGJvdW5kYXJpZXMgPSB0aGlzLmJvdW5kYXJpZXMobmV4dFZhbCksXG4gICAgICAgICAgX3RoaXMkYm91bmRhcmllczIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzLCAyKSxcbiAgICAgICAgICBtaW5zdHIgPSBfdGhpcyRib3VuZGFyaWVzMlswXSxcbiAgICAgICAgICBtYXhzdHIgPSBfdGhpcyRib3VuZGFyaWVzMlsxXTtcblxuICAgICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSByZXR1cm4gZnJvbVN0cltuZXh0VmFsLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoTnVtYmVyKG1pbnN0cikgPiB0aGlzLnRvKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9maXggPT09ICdwYWQnICYmIG5leHRWYWwubGVuZ3RoIDwgdGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gWycnLCBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmFwcGVuZChmcm9tU3RyW25leHRWYWwubGVuZ3RoIC0gMV0gKyBjaCwgZmxhZ3MpKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG9TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoO1xuICAgIH1cbiAgICAvKipcbiAgICAgIEBvdmVycmlkZVxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIHZhciBzdHIgPSB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGZpcnN0Tm9uWmVybyA9IHN0ci5zZWFyY2goL1teMF0vKTtcbiAgICAgIGlmIChmaXJzdE5vblplcm8gPT09IC0xICYmIHN0ci5sZW5ndGggPD0gdGhpcy5fbWF0Y2hGcm9tKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgdmFyIF90aGlzJGJvdW5kYXJpZXMzID0gdGhpcy5ib3VuZGFyaWVzKHN0ciksXG4gICAgICAgICAgX3RoaXMkYm91bmRhcmllczQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzMywgMiksXG4gICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczRbMF0sXG4gICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczRbMV07XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mcm9tIDw9IE51bWJlcihtYXhzdHIpICYmIE51bWJlcihtaW5zdHIpIDw9IHRoaXMudG8gJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUmFuZ2U7XG59KE1hc2tlZFBhdHRlcm4pO1xuSU1hc2suTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcblxuZXhwb3J0IHsgTWFza2VkUmFuZ2UgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZCBhcyBfaW5oZXJpdHMsIGUgYXMgX2NyZWF0ZVN1cGVyLCBfIGFzIF9jcmVhdGVDbGFzcywgYSBhcyBfY2xhc3NDYWxsQ2hlY2ssIGcgYXMgX2dldCwgaCBhcyBfZ2V0UHJvdG90eXBlT2YgfSBmcm9tICcuLi9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLWIwNTRlY2QyLmpzJztcbmltcG9ydCBNYXNrZWQgZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCBJTWFzayBmcm9tICcuLi9jb3JlL2hvbGRlci5qcyc7XG5pbXBvcnQgJy4uL2NvcmUvY2hhbmdlLWRldGFpbHMuanMnO1xuaW1wb3J0ICcuLi9jb3JlL2NvbnRpbnVvdXMtdGFpbC1kZXRhaWxzLmpzJztcbmltcG9ydCAnLi4vY29yZS91dGlscy5qcyc7XG5cbi8qKiBNYXNraW5nIGJ5IFJlZ0V4cCAqL1xuXG52YXIgTWFza2VkUmVnRXhwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRSZWdFeHAsIF9NYXNrZWQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkUmVnRXhwKTtcblxuICBmdW5jdGlvbiBNYXNrZWRSZWdFeHAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFJlZ0V4cCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkUmVnRXhwLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICBAb3ZlcnJpZGVcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgKi9cbiAgICBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNlYXJjaChvcHRzLm1hc2spID49IDA7XG4gICAgICB9O1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSZWdFeHAucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZFJlZ0V4cDtcbn0oTWFza2VkKTtcbklNYXNrLk1hc2tlZFJlZ0V4cCA9IE1hc2tlZFJlZ0V4cDtcblxuZXhwb3J0IHsgTWFza2VkUmVnRXhwIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9yZWdpc3RyYXRpb24uc2Nzcyc7XG5pbXBvcnQgJ2NvbW1vbi9pbnB1dC9pbnB1dC5qcyc7XG5pbXBvcnQgJ2NvbW1vbi9yYWRpby9yYWRpby5qcyc7XG5pbXBvcnQgJ2NvbW1vbi90b2dnbGUvdG9nZ2xlLmpzJztcbmltcG9ydCAnY29tbW9uL2J1dHRvbi9idXR0b24uanMnO1xuIiwiaW1wb3J0ICcuL2J1dHRvbi5zY3NzJztcbiIsImltcG9ydCAnLi9mb290ZXIuc2Nzcyc7XG5pbXBvcnQgJ2NvbW1vbi9pbnB1dC9pbnB1dC5qcyc7XG5pbXBvcnQgJ2NvbW1vbi9zb2NpYWwvc29jaWFsLmpzJztcbmltcG9ydCAnY29tbW9uL2xvZ28vbG9nby5qcyc7XG4iLCJpbXBvcnQgJy4vaGVhZGVyLnNjc3MnO1xuaW1wb3J0ICdjb21tb24vYnV0dG9uL2J1dHRvbi5qcyc7XG5pbXBvcnQgJ2NvbW1vbi9sb2dvL2xvZ28uanMnO1xuXG5sZXQgaGVhZGVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyJyk7XG5cbmZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyRWxlbWVudHMpIHtcbiAgbGV0IG1vYmlsZU1lbnUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21vYmlsZS1tZW51Jyk7XG4gIGxldCBtZW51ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51Jyk7XG4gIGxldCBhcnJvd01lbnVMaW5rcyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19tZW51LWxpbmtfYXJyb3cnKSk7XG4gIGxldCBzdWJtZW51RWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fc3VibWVudScpKTtcblxuICBsZXQgc3dpdGNoTWVudVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgaWYgKCFtZW51LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19tZW51X3Zpc2libGUnKSkge1xuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX21lbnVfdmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbWVudV92aXNpYmxlJyk7XG4gICAgfTtcbiAgfTtcblxuICBsZXQgc3dpdGNoU3VibWVudVZpc2liaWxpdHkgPSAoaSkgPT4ge1xuICAgIGlmICghc3VibWVudUVsZW1lbnRzW2ldLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyX19zdWJtZW51X3Zpc2libGUnKSkge1xuICAgICAgXG4gICAgICBzdWJtZW51RWxlbWVudHNbaV0uY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19zdWJtZW51X3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VibWVudUVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc3VibWVudV92aXNpYmxlJyk7XG4gICAgfTtcbiAgfTtcblxuICBtb2JpbGVNZW51Lm9ubW91c2Vkb3duID0gKCkgPT4ge1xuICAgIHN3aXRjaE1lbnVWaXNpYmlsaXR5KCk7XG4gIH07XG5cbiAgbW9iaWxlTWVudS5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgIGUua2V5ID09ICdFbnRlcicgJiYgc3dpdGNoTWVudVZpc2liaWxpdHkoKTtcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoIW1vYmlsZU1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhbWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbWVudV92aXNpYmxlJyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSBpbiBhcnJvd01lbnVMaW5rcykge1xuICAgIGFycm93TWVudUxpbmtzW2ldLm9ubW91c2Vkb3duID0gKCkgPT4ge1xuICAgICAgc3dpdGNoU3VibWVudVZpc2liaWxpdHkoaSk7XG4gICAgfTtcblxuICAgIGFycm93TWVudUxpbmtzW2ldLm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgICBlLmtleSA9PSAnRW50ZXInICYmIHN3aXRjaFN1Ym1lbnVWaXNpYmlsaXR5KGkpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFhcnJvd01lbnVMaW5rc1tpXS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFzdWJtZW51RWxlbWVudHNbaV0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBzdWJtZW51RWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19zdWJtZW51X3Zpc2libGUnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG59O1xuIiwiaW1wb3J0IElNYXNrIGZyb20gJ2ltYXNrJztcbmltcG9ydCAnLi9pbnB1dC5zY3NzJztcblxubGV0IGlucHV0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQnKTtcbmxldCBkYXRlTWFzayA9IChlbGVtZW50KSA9PiBJTWFzayhlbGVtZW50LCB7XG4gIG1hc2s6ICfQlNCULtCc0Jwu0JPQk9CT0JMnLFxuICBibG9ja3M6IHtcbiAgICDQk9CT0JPQkzoge1xuICAgICAgbWFzazogJzAwMDAnXG4gICAgfSxcbiAgICDQnNCcOiB7XG4gICAgICBtYXNrOiBJTWFzay5NYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDEsXG4gICAgICB0bzogMTJcbiAgICB9LFxuICAgINCU0JQ6IHtcbiAgICAgIG1hc2s6IElNYXNrLk1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAzMVxuICAgIH1cbiAgfVxufSk7XG5cbmZvciAobGV0IGVsZW1lbnQgb2YgaW5wdXRFbGVtZW50cykge1xuICBsZXQgaW5wdXRTaGVsbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0X19zaGVsbCcpO1xuICBsZXQgaW5wdXRJbnNpZGUgPSBpbnB1dFNoZWxsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dF9faW5zaWRlJyk7XG5cbiAgc3dpdGNoIChpbnB1dEluc2lkZS5kYXRhc2V0Lm1hc2spIHtcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIGRhdGVNYXNrKGlucHV0SW5zaWRlKTtcbiAgICAgIGJyZWFrO1xuICB9O1xufVxuIiwiaW1wb3J0ICcuL2xvZ28uc2Nzcyc7XG4iLCJpbXBvcnQgJy4vcmFkaW8uc2Nzcyc7XG5cbmxldCByYWRpb0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvJyk7XG5cbmZvciAobGV0IGVsZW1lbnQgb2YgcmFkaW9FbGVtZW50cykge1xuICBsZXQgZWxlbWVudExhYmVscyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvX19sYWJlbCcpO1xuICBsZXQgZmllbGRHcm91cHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWRpb19fZmllbGRzJyk7XG5cbiAgZm9yIChsZXQgbGFiZWwgb2YgZWxlbWVudExhYmVscykge1xuICAgIGxldCBoaWRkZW5GaWVsZCA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJy5yYWRpb19fZmllbGRfaGlkZGVuJyk7XG4gICAgbGV0IHZpc2libGVGaWVsZCA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJy5yYWRpb19fZmllbGRfdmlzaWJsZScpO1xuICAgIGxldCBsYWJlbEZsYWcgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKCcucmFkaW9fX2ZsYWcnKTtcblxuICAgIGlmIChoaWRkZW5GaWVsZC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICB2aXNpYmxlRmllbGQuY2xhc3NMaXN0LmFkZCgncmFkaW9fX2ZpZWxkX2NoZWNrZWQnKTtcbiAgICAgIGxhYmVsRmxhZy5jbGFzc0xpc3QuYWRkKCdyYWRpb19fZmxhZ192aXNpYmxlJyk7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdyYWRpb19fbGFiZWxfY2hlY2tlZCcpO1xuICAgIH07XG5cbiAgICBoaWRkZW5GaWVsZC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGZvciAobGV0IGdyb3VwIG9mIGZpZWxkR3JvdXBzKSB7XG4gICAgICAgIGxldCB2aXNpYmxlRmllbGQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcucmFkaW9fX2ZpZWxkX3Zpc2libGUnKTtcbiAgICAgICAgbGV0IGxhYmVsRmxhZyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5yYWRpb19fZmxhZycpO1xuICAgICAgICBpZiAodmlzaWJsZUZpZWxkLmNsYXNzTGlzdC5jb250YWlucygncmFkaW9fX2ZpZWxkX2NoZWNrZWQnKSkge1xuICAgICAgICAgIHZpc2libGVGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdyYWRpb19fZmllbGRfY2hlY2tlZCcpO1xuICAgICAgICAgIHZpc2libGVGaWVsZC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmFkaW9fX2xhYmVsX2NoZWNrZWQnKTtcbiAgICAgICAgICBsYWJlbEZsYWcuY2xhc3NMaXN0LnJlbW92ZSgncmFkaW9fX2ZsYWdfdmlzaWJsZScpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHZpc2libGVGaWVsZC5jbGFzc0xpc3QuYWRkKCdyYWRpb19fZmllbGRfY2hlY2tlZCcpO1xuICAgICAgbGFiZWxGbGFnLmNsYXNzTGlzdC5hZGQoJ3JhZGlvX19mbGFnX3Zpc2libGUnKTtcbiAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3JhZGlvX19sYWJlbF9jaGVja2VkJyk7XG4gICAgfTtcbiAgfTtcbn07IiwiaW1wb3J0ICcuL3RvZ2dsZS5zY3NzJztcblxubGV0IHRvZ2dsZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZScpO1xuXG5mb3IgKGxldCBlbGVtZW50IG9mIHRvZ2dsZUVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50TGFiZWxzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlX19sYWJlbCcpO1xuXG4gIGZvciAobGV0IGxhYmVsIG9mIGVsZW1lbnRMYWJlbHMpIHtcbiAgICBsZXQgaGlkZGVuRmllbGQgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlX19maWVsZF9oaWRkZW4nKTtcbiAgICBsZXQgdmlzaWJsZUZpZWxkID0gbGFiZWwucXVlcnlTZWxlY3RvcignLnRvZ2dsZV9fZmllbGRfdmlzaWJsZScpO1xuICAgIGxldCBsYWJlbEZsYWcgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlX19mbGFnJyk7XG5cbiAgICBpZiAoaGlkZGVuRmllbGQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgdmlzaWJsZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZV9fZmllbGRfYWN0aXZlJyk7XG4gICAgICBsYWJlbEZsYWcuY2xhc3NMaXN0LmFkZCgndG9nZ2xlX19mbGFnX2FjdGl2ZScpO1xuICAgIH07XG5cbiAgICBoaWRkZW5GaWVsZC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmIChoaWRkZW5GaWVsZC5jaGVja2VkKSB7XG4gICAgICAgIHZpc2libGVGaWVsZC5jbGFzc0xpc3QuYWRkKCd0b2dnbGVfX2ZpZWxkX2FjdGl2ZScpO1xuICAgICAgICBsYWJlbEZsYWcuY2xhc3NMaXN0LmFkZCgndG9nZ2xlX19mbGFnX2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlzaWJsZUZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZV9fZmllbGRfYWN0aXZlJyk7XG4gICAgICAgIGxhYmVsRmxhZy5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVfX2ZsYWdfYWN0aXZlJyk7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7IiwiaW1wb3J0ICcuL3JlZ2lzdHJhdGlvbi5zY3NzJztcbmltcG9ydCAnY29tbW9uL2hlYWRlci9oZWFkZXIuanMnO1xuaW1wb3J0ICdjb21tb24vZm9vdGVyL2Zvb3Rlci5qcyc7XG5pbXBvcnQgJ2NhcmRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uanMnO1xuaW1wb3J0IHNsaWRlMSBmcm9tICdhc3NldHMvaW1hZ2VzL3NsaWRlXzEucG5nJztcbmltcG9ydCBzbGlkZTMgZnJvbSAnYXNzZXRzL2ltYWdlcy9zbGlkZV8zLnBuZyc7XG5cbmxldCBwYWdlU2xpZGVzaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3NsaWRlc2hvdycpO1xuXG5wYWdlU2xpZGVzaG93LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzbGlkZTN9KWA7XG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgaWYgKHBhZ2VTbGlkZXNob3cuc3R5bGUuYmFja2dyb3VuZEltYWdlID09IGB1cmwoJHtzbGlkZTF9KWApIHtcbiAgICBwYWdlU2xpZGVzaG93LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGFnZVNsaWRlc2hvdy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c2xpZGUzfSlgO1xuICAgICAgcGFnZVNsaWRlc2hvdy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9LCAxMDAwKTtcbiAgfSBlbHNlIHtcbiAgICBwYWdlU2xpZGVzaG93LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGFnZVNsaWRlc2hvdy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c2xpZGUxfSlgO1xuICAgICAgcGFnZVNsaWRlc2hvdy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9LCA1MDApO1xuICB9O1xufSwgMTAwMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9