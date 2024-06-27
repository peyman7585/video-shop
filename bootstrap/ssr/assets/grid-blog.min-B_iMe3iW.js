var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_grid_blog_min_007 = __commonJS({
  "assets/grid-blog.min-B_iMe3iW.js"(exports, module) {
    /*!
     * Masonry PACKAGED v4.1.1
     * Cascading grid layout library
     * http://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    !function(t, e) {
      "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i);
      }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
    }(window, function(t, e) {
      function i(i2, r2, a) {
        function h(t2, e2, n2) {
          var o2, r3 = "$()." + i2 + '("' + e2 + '")';
          return t2.each(function(t3, h2) {
            var u2 = a.data(h2, i2);
            if (!u2) return void s(i2 + " not initialized. Cannot call methods, i.e. " + r3);
            var d = u2[e2];
            if (!d || "_" == e2.charAt(0)) return void s(r3 + " is not a valid method");
            var l = d.apply(u2, n2);
            o2 = void 0 === o2 ? l : o2;
          }), void 0 !== o2 ? o2 : t2;
        }
        function u(t2, e2) {
          t2.each(function(t3, n2) {
            var o2 = a.data(n2, i2);
            o2 ? (o2.option(e2), o2._init()) : (o2 = new r2(n2, e2), a.data(n2, i2, o2));
          });
        }
        a = a || e || t.jQuery, a && (r2.prototype.option || (r2.prototype.option = function(t2) {
          a.isPlainObject(t2) && (this.options = a.extend(true, this.options, t2));
        }), a.fn[i2] = function(t2) {
          if ("string" == typeof t2) {
            var e2 = o.call(arguments, 1);
            return h(this, t2, e2);
          }
          return u(this, t2), this;
        }, n(a));
      }
      function n(t2) {
        !t2 || t2 && t2.bridget || (t2.bridget = i);
      }
      var o = Array.prototype.slice, r = t.console, s = "undefined" == typeof r ? function() {
      } : function(t2) {
        r.error(t2);
      };
      return n(e || t.jQuery), i;
    }), function(t, e) {
      "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
    }("undefined" != typeof window ? window : void 0, function() {
      function t() {
      }
      var e = t.prototype;
      return e.on = function(t2, e2) {
        if (t2 && e2) {
          var i = this._events = this._events || {}, n = i[t2] = i[t2] || [];
          return -1 == n.indexOf(e2) && n.push(e2), this;
        }
      }, e.once = function(t2, e2) {
        if (t2 && e2) {
          this.on(t2, e2);
          var i = this._onceEvents = this._onceEvents || {}, n = i[t2] = i[t2] || {};
          return n[e2] = true, this;
        }
      }, e.off = function(t2, e2) {
        var i = this._events && this._events[t2];
        if (i && i.length) {
          var n = i.indexOf(e2);
          return -1 != n && i.splice(n, 1), this;
        }
      }, e.emitEvent = function(t2, e2) {
        var i = this._events && this._events[t2];
        if (i && i.length) {
          var n = 0, o = i[n];
          e2 = e2 || [];
          for (var r = this._onceEvents && this._onceEvents[t2]; o; ) {
            var s = r && r[o];
            s && (this.off(t2, o), delete r[o]), o.apply(this, e2), n += s ? 0 : 1, o = i[n];
          }
          return this;
        }
      }, t;
    }), function(t, e) {
      "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e();
      }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
    }(window, function() {
      function t(t2) {
        var e2 = parseFloat(t2), i2 = -1 == t2.indexOf("%") && !isNaN(e2);
        return i2 && e2;
      }
      function e() {
      }
      function i() {
        for (var t2 = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e2 = 0; u > e2; e2++) {
          var i2 = h[e2];
          t2[i2] = 0;
        }
        return t2;
      }
      function n(t2) {
        var e2 = getComputedStyle(t2);
        return e2 || a("Style returned " + e2 + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e2;
      }
      function o() {
        if (!d) {
          d = true;
          var e2 = document.createElement("div");
          e2.style.width = "200px", e2.style.padding = "1px 2px 3px 4px", e2.style.borderStyle = "solid", e2.style.borderWidth = "1px 2px 3px 4px", e2.style.boxSizing = "border-box";
          var i2 = document.body || document.documentElement;
          i2.appendChild(e2);
          var o2 = n(e2);
          r.isBoxSizeOuter = s = 200 == t(o2.width), i2.removeChild(e2);
        }
      }
      function r(e2) {
        if (o(), "string" == typeof e2 && (e2 = document.querySelector(e2)), e2 && "object" == typeof e2 && e2.nodeType) {
          var r2 = n(e2);
          if ("none" == r2.display) return i();
          var a2 = {};
          a2.width = e2.offsetWidth, a2.height = e2.offsetHeight;
          for (var d2 = a2.isBorderBox = "border-box" == r2.boxSizing, l = 0; u > l; l++) {
            var c = h[l], f = r2[c], m = parseFloat(f);
            a2[c] = isNaN(m) ? 0 : m;
          }
          var p = a2.paddingLeft + a2.paddingRight, g = a2.paddingTop + a2.paddingBottom, y = a2.marginLeft + a2.marginRight, v = a2.marginTop + a2.marginBottom, _ = a2.borderLeftWidth + a2.borderRightWidth, E = a2.borderTopWidth + a2.borderBottomWidth, z = d2 && s, b = t(r2.width);
          b !== false && (a2.width = b + (z ? 0 : p + _));
          var x = t(r2.height);
          return x !== false && (a2.height = x + (z ? 0 : g + E)), a2.innerWidth = a2.width - (p + _), a2.innerHeight = a2.height - (g + E), a2.outerWidth = a2.width + y, a2.outerHeight = a2.height + v, a2;
        }
      }
      var s, a = "undefined" == typeof console ? e : function(t2) {
        console.error(t2);
      }, h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], u = h.length, d = false;
      return r;
    }), function(t, e) {
      "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
    }(window, function() {
      var t = function() {
        var t2 = Element.prototype;
        if (t2.matches) return "matches";
        if (t2.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
          var n = e[i], o = n + "MatchesSelector";
          if (t2[o]) return o;
        }
      }();
      return function(e, i) {
        return e[t](i);
      };
    }), function(t, e) {
      "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i);
      }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
    }(window, function(t, e) {
      var i = {};
      i.extend = function(t2, e2) {
        for (var i2 in e2) t2[i2] = e2[i2];
        return t2;
      }, i.modulo = function(t2, e2) {
        return (t2 % e2 + e2) % e2;
      }, i.makeArray = function(t2) {
        var e2 = [];
        if (Array.isArray(t2)) e2 = t2;
        else if (t2 && "number" == typeof t2.length) for (var i2 = 0; i2 < t2.length; i2++) e2.push(t2[i2]);
        else e2.push(t2);
        return e2;
      }, i.removeFrom = function(t2, e2) {
        var i2 = t2.indexOf(e2);
        -1 != i2 && t2.splice(i2, 1);
      }, i.getParent = function(t2, i2) {
        for (; t2 != document.body; ) if (t2 = t2.parentNode, e(t2, i2)) return t2;
      }, i.getQueryElement = function(t2) {
        return "string" == typeof t2 ? document.querySelector(t2) : t2;
      }, i.handleEvent = function(t2) {
        var e2 = "on" + t2.type;
        this[e2] && this[e2](t2);
      }, i.filterFindElements = function(t2, n2) {
        t2 = i.makeArray(t2);
        var o = [];
        return t2.forEach(function(t3) {
          if (t3 instanceof HTMLElement) {
            if (!n2) return void o.push(t3);
            e(t3, n2) && o.push(t3);
            for (var i2 = t3.querySelectorAll(n2), r = 0; r < i2.length; r++) o.push(i2[r]);
          }
        }), o;
      }, i.debounceMethod = function(t2, e2, i2) {
        var n2 = t2.prototype[e2], o = e2 + "Timeout";
        t2.prototype[e2] = function() {
          var t3 = this[o];
          t3 && clearTimeout(t3);
          var e3 = arguments, r = this;
          this[o] = setTimeout(function() {
            n2.apply(r, e3), delete r[o];
          }, i2 || 100);
        };
      }, i.docReady = function(t2) {
        var e2 = document.readyState;
        "complete" == e2 || "interactive" == e2 ? t2() : document.addEventListener("DOMContentLoaded", t2);
      }, i.toDashed = function(t2) {
        return t2.replace(/(.)([A-Z])/g, function(t3, e2, i2) {
          return e2 + "-" + i2;
        }).toLowerCase();
      };
      var n = t.console;
      return i.htmlInit = function(e2, o) {
        i.docReady(function() {
          var r = i.toDashed(o), s = "data-" + r, a = document.querySelectorAll("[" + s + "]"), h = document.querySelectorAll(".js-" + r), u = i.makeArray(a).concat(i.makeArray(h)), d = s + "-options", l = t.jQuery;
          u.forEach(function(t2) {
            var i2, r2 = t2.getAttribute(s) || t2.getAttribute(d);
            try {
              i2 = r2 && JSON.parse(r2);
            } catch (a2) {
              return void (n && n.error("Error parsing " + s + " on " + t2.className + ": " + a2));
            }
            var h2 = new e2(t2, i2);
            l && l.data(t2, o, h2);
          });
        });
      }, i;
    }), function(t, e) {
      "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
    }(window, function(t, e) {
      function i(t2) {
        for (var e2 in t2) return false;
        return e2 = null, true;
      }
      function n(t2, e2) {
        t2 && (this.element = t2, this.layout = e2, this.position = { x: 0, y: 0 }, this._create());
      }
      function o(t2) {
        return t2.replace(/([A-Z])/g, function(t3) {
          return "-" + t3.toLowerCase();
        });
      }
      var r = document.documentElement.style, s = "string" == typeof r.transition ? "transition" : "WebkitTransition", a = "string" == typeof r.transform ? "transform" : "WebkitTransform", h = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s], u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" }, d = n.prototype = Object.create(t.prototype);
      d.constructor = n, d._create = function() {
        this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
      }, d.handleEvent = function(t2) {
        var e2 = "on" + t2.type;
        this[e2] && this[e2](t2);
      }, d.getSize = function() {
        this.size = e(this.element);
      }, d.css = function(t2) {
        var e2 = this.element.style;
        for (var i2 in t2) {
          var n2 = u[i2] || i2;
          e2[n2] = t2[i2];
        }
      }, d.getPosition = function() {
        var t2 = getComputedStyle(this.element), e2 = this.layout._getOption("originLeft"), i2 = this.layout._getOption("originTop"), n2 = t2[e2 ? "left" : "right"], o2 = t2[i2 ? "top" : "bottom"], r2 = this.layout.size, s2 = -1 != n2.indexOf("%") ? parseFloat(n2) / 100 * r2.width : parseInt(n2, 10), a2 = -1 != o2.indexOf("%") ? parseFloat(o2) / 100 * r2.height : parseInt(o2, 10);
        s2 = isNaN(s2) ? 0 : s2, a2 = isNaN(a2) ? 0 : a2, s2 -= e2 ? r2.paddingLeft : r2.paddingRight, a2 -= i2 ? r2.paddingTop : r2.paddingBottom, this.position.x = s2, this.position.y = a2;
      }, d.layoutPosition = function() {
        var t2 = this.layout.size, e2 = {}, i2 = this.layout._getOption("originLeft"), n2 = this.layout._getOption("originTop"), o2 = i2 ? "paddingLeft" : "paddingRight", r2 = i2 ? "left" : "right", s2 = i2 ? "right" : "left", a2 = this.position.x + t2[o2];
        e2[r2] = this.getXValue(a2), e2[s2] = "";
        var h2 = n2 ? "paddingTop" : "paddingBottom", u2 = n2 ? "top" : "bottom", d2 = n2 ? "bottom" : "top", l2 = this.position.y + t2[h2];
        e2[u2] = this.getYValue(l2), e2[d2] = "", this.css(e2), this.emitEvent("layout", [this]);
      }, d.getXValue = function(t2) {
        var e2 = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e2 ? t2 / this.layout.size.width * 100 + "%" : t2 + "px";
      }, d.getYValue = function(t2) {
        var e2 = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e2 ? t2 / this.layout.size.height * 100 + "%" : t2 + "px";
      }, d._transitionTo = function(t2, e2) {
        this.getPosition();
        var i2 = this.position.x, n2 = this.position.y, o2 = parseInt(t2, 10), r2 = parseInt(e2, 10), s2 = o2 === this.position.x && r2 === this.position.y;
        if (this.setPosition(t2, e2), s2 && !this.isTransitioning) return void this.layoutPosition();
        var a2 = t2 - i2, h2 = e2 - n2, u2 = {};
        u2.transform = this.getTranslate(a2, h2), this.transition({ to: u2, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: true });
      }, d.getTranslate = function(t2, e2) {
        var i2 = this.layout._getOption("originLeft"), n2 = this.layout._getOption("originTop");
        return t2 = i2 ? t2 : -t2, e2 = n2 ? e2 : -e2, "translate3d(" + t2 + "px, " + e2 + "px, 0)";
      }, d.goTo = function(t2, e2) {
        this.setPosition(t2, e2), this.layoutPosition();
      }, d.moveTo = d._transitionTo, d.setPosition = function(t2, e2) {
        this.position.x = parseInt(t2, 10), this.position.y = parseInt(e2, 10);
      }, d._nonTransition = function(t2) {
        this.css(t2.to), t2.isCleaning && this._removeStyles(t2.to);
        for (var e2 in t2.onTransitionEnd) t2.onTransitionEnd[e2].call(this);
      }, d.transition = function(t2) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t2);
        var e2 = this._transn;
        for (var i2 in t2.onTransitionEnd) e2.onEnd[i2] = t2.onTransitionEnd[i2];
        for (i2 in t2.to) e2.ingProperties[i2] = true, t2.isCleaning && (e2.clean[i2] = true);
        if (t2.from) {
          this.css(t2.from);
          this.element.offsetHeight;
        }
        this.enableTransition(t2.to), this.css(t2.to), this.isTransitioning = true;
      };
      var l = "opacity," + o(a);
      d.enableTransition = function() {
        if (!this.isTransitioning) {
          var t2 = this.layout.options.transitionDuration;
          t2 = "number" == typeof t2 ? t2 + "ms" : t2, this.css({ transitionProperty: l, transitionDuration: t2, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(h, this, false);
        }
      }, d.onwebkitTransitionEnd = function(t2) {
        this.ontransitionend(t2);
      }, d.onotransitionend = function(t2) {
        this.ontransitionend(t2);
      };
      var c = { "-webkit-transform": "transform" };
      d.ontransitionend = function(t2) {
        if (t2.target === this.element) {
          var e2 = this._transn, n2 = c[t2.propertyName] || t2.propertyName;
          if (delete e2.ingProperties[n2], i(e2.ingProperties) && this.disableTransition(), n2 in e2.clean && (this.element.style[t2.propertyName] = "", delete e2.clean[n2]), n2 in e2.onEnd) {
            var o2 = e2.onEnd[n2];
            o2.call(this), delete e2.onEnd[n2];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(h, this, false), this.isTransitioning = false;
      }, d._removeStyles = function(t2) {
        var e2 = {};
        for (var i2 in t2) e2[i2] = "";
        this.css(e2);
      };
      var f = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
      return d.removeTransitionStyles = function() {
        this.css(f);
      }, d.stagger = function(t2) {
        t2 = isNaN(t2) ? 0 : t2, this.staggerDelay = t2 + "ms";
      }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
      }, d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
          this.removeElem();
        }), void this.hide()) : void this.removeElem();
      }, d.reveal = function() {
        delete this.isHidden, this.css({ display: "" });
        var t2 = this.layout.options, e2 = {}, i2 = this.getHideRevealTransitionEndProperty("visibleStyle");
        e2[i2] = this.onRevealTransitionEnd, this.transition({ from: t2.hiddenStyle, to: t2.visibleStyle, isCleaning: true, onTransitionEnd: e2 });
      }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal");
      }, d.getHideRevealTransitionEndProperty = function(t2) {
        var e2 = this.layout.options[t2];
        if (e2.opacity) return "opacity";
        for (var i2 in e2) return i2;
      }, d.hide = function() {
        this.isHidden = true, this.css({ display: "" });
        var t2 = this.layout.options, e2 = {}, i2 = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e2[i2] = this.onHideTransitionEnd, this.transition({ from: t2.visibleStyle, to: t2.hiddenStyle, isCleaning: true, onTransitionEnd: e2 });
      }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
      }, d.destroy = function() {
        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
      }, n;
    }), function(t, e) {
      "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r);
      }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
    }(window, function(t, e, i, n, o) {
      function r(t2, e2) {
        var i2 = n.getQueryElement(t2);
        if (!i2) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i2 || t2)));
        this.element = i2, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e2);
        var o2 = ++l;
        this.element.outlayerGUID = o2, c[o2] = this, this._create();
        var r2 = this._getOption("initLayout");
        r2 && this.layout();
      }
      function s(t2) {
        function e2() {
          t2.apply(this, arguments);
        }
        return e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2;
      }
      function a(t2) {
        if ("number" == typeof t2) return t2;
        var e2 = t2.match(/(^\d*\.?\d*)(\w*)/), i2 = e2 && e2[1], n2 = e2 && e2[2];
        if (!i2.length) return 0;
        i2 = parseFloat(i2);
        var o2 = m[n2] || 1;
        return i2 * o2;
      }
      var h = t.console, u = t.jQuery, d = function() {
      }, l = 0, c = {};
      r.namespace = "outlayer", r.Item = o, r.defaults = { containerStyle: { position: "relative" }, initLayout: true, originLeft: true, originTop: true, resize: true, resizeContainer: true, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
      var f = r.prototype;
      n.extend(f, e.prototype), f.option = function(t2) {
        n.extend(this.options, t2);
      }, f._getOption = function(t2) {
        var e2 = this.constructor.compatOptions[t2];
        return e2 && void 0 !== this.options[e2] ? this.options[e2] : this.options[t2];
      }, r.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, f._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t2 = this._getOption("resize");
        t2 && this.bindResize();
      }, f.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      }, f._itemize = function(t2) {
        for (var e2 = this._filterFindItemElements(t2), i2 = this.constructor.Item, n2 = [], o2 = 0; o2 < e2.length; o2++) {
          var r2 = e2[o2], s2 = new i2(r2, this);
          n2.push(s2);
        }
        return n2;
      }, f._filterFindItemElements = function(t2) {
        return n.filterFindElements(t2, this.options.itemSelector);
      }, f.getItemElements = function() {
        return this.items.map(function(t2) {
          return t2.element;
        });
      }, f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t2 = this._getOption("layoutInstant"), e2 = void 0 !== t2 ? t2 : !this._isLayoutInited;
        this.layoutItems(this.items, e2), this._isLayoutInited = true;
      }, f._init = f.layout, f._resetLayout = function() {
        this.getSize();
      }, f.getSize = function() {
        this.size = i(this.element);
      }, f._getMeasurement = function(t2, e2) {
        var n2, o2 = this.options[t2];
        o2 ? ("string" == typeof o2 ? n2 = this.element.querySelector(o2) : o2 instanceof HTMLElement && (n2 = o2), this[t2] = n2 ? i(n2)[e2] : o2) : this[t2] = 0;
      }, f.layoutItems = function(t2, e2) {
        t2 = this._getItemsForLayout(t2), this._layoutItems(t2, e2), this._postLayout();
      }, f._getItemsForLayout = function(t2) {
        return t2.filter(function(t3) {
          return !t3.isIgnored;
        });
      }, f._layoutItems = function(t2, e2) {
        if (this._emitCompleteOnItems("layout", t2), t2 && t2.length) {
          var i2 = [];
          t2.forEach(function(t3) {
            var n2 = this._getItemLayoutPosition(t3);
            n2.item = t3, n2.isInstant = e2 || t3.isLayoutInstant, i2.push(n2);
          }, this), this._processLayoutQueue(i2);
        }
      }, f._getItemLayoutPosition = function() {
        return { x: 0, y: 0 };
      }, f._processLayoutQueue = function(t2) {
        this.updateStagger(), t2.forEach(function(t3, e2) {
          this._positionItem(t3.item, t3.x, t3.y, t3.isInstant, e2);
        }, this);
      }, f.updateStagger = function() {
        var t2 = this.options.stagger;
        return null === t2 || void 0 === t2 ? void (this.stagger = 0) : (this.stagger = a(t2), this.stagger);
      }, f._positionItem = function(t2, e2, i2, n2, o2) {
        n2 ? t2.goTo(e2, i2) : (t2.stagger(o2 * this.stagger), t2.moveTo(e2, i2));
      }, f._postLayout = function() {
        this.resizeContainer();
      }, f.resizeContainer = function() {
        var t2 = this._getOption("resizeContainer");
        if (t2) {
          var e2 = this._getContainerSize();
          e2 && (this._setContainerMeasure(e2.width, true), this._setContainerMeasure(e2.height, false));
        }
      }, f._getContainerSize = d, f._setContainerMeasure = function(t2, e2) {
        if (void 0 !== t2) {
          var i2 = this.size;
          i2.isBorderBox && (t2 += e2 ? i2.paddingLeft + i2.paddingRight + i2.borderLeftWidth + i2.borderRightWidth : i2.paddingBottom + i2.paddingTop + i2.borderTopWidth + i2.borderBottomWidth), t2 = Math.max(t2, 0), this.element.style[e2 ? "width" : "height"] = t2 + "px";
        }
      }, f._emitCompleteOnItems = function(t2, e2) {
        function i2() {
          o2.dispatchEvent(t2 + "Complete", null, [e2]);
        }
        function n2() {
          s2++, s2 == r2 && i2();
        }
        var o2 = this, r2 = e2.length;
        if (!e2 || !r2) return void i2();
        var s2 = 0;
        e2.forEach(function(e3) {
          e3.once(t2, n2);
        });
      }, f.dispatchEvent = function(t2, e2, i2) {
        var n2 = e2 ? [e2].concat(i2) : i2;
        if (this.emitEvent(t2, n2), u) if (this.$element = this.$element || u(this.element), e2) {
          var o2 = u.Event(e2);
          o2.type = t2, this.$element.trigger(o2, i2);
        } else this.$element.trigger(t2, i2);
      }, f.ignore = function(t2) {
        var e2 = this.getItem(t2);
        e2 && (e2.isIgnored = true);
      }, f.unignore = function(t2) {
        var e2 = this.getItem(t2);
        e2 && delete e2.isIgnored;
      }, f.stamp = function(t2) {
        t2 = this._find(t2), t2 && (this.stamps = this.stamps.concat(t2), t2.forEach(this.ignore, this));
      }, f.unstamp = function(t2) {
        t2 = this._find(t2), t2 && t2.forEach(function(t3) {
          n.removeFrom(this.stamps, t3), this.unignore(t3);
        }, this);
      }, f._find = function(t2) {
        return t2 ? ("string" == typeof t2 && (t2 = this.element.querySelectorAll(t2)), t2 = n.makeArray(t2)) : void 0;
      }, f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
      }, f._getBoundingRect = function() {
        var t2 = this.element.getBoundingClientRect(), e2 = this.size;
        this._boundingRect = { left: t2.left + e2.paddingLeft + e2.borderLeftWidth, top: t2.top + e2.paddingTop + e2.borderTopWidth, right: t2.right - (e2.paddingRight + e2.borderRightWidth), bottom: t2.bottom - (e2.paddingBottom + e2.borderBottomWidth) };
      }, f._manageStamp = d, f._getElementOffset = function(t2) {
        var e2 = t2.getBoundingClientRect(), n2 = this._boundingRect, o2 = i(t2), r2 = { left: e2.left - n2.left - o2.marginLeft, top: e2.top - n2.top - o2.marginTop, right: n2.right - e2.right - o2.marginRight, bottom: n2.bottom - e2.bottom - o2.marginBottom };
        return r2;
      }, f.handleEvent = n.handleEvent, f.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = true;
      }, f.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = false;
      }, f.onresize = function() {
        this.resize();
      }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }, f.needsResizeLayout = function() {
        var t2 = i(this.element), e2 = this.size && t2;
        return e2 && t2.innerWidth !== this.size.innerWidth;
      }, f.addItems = function(t2) {
        var e2 = this._itemize(t2);
        return e2.length && (this.items = this.items.concat(e2)), e2;
      }, f.appended = function(t2) {
        var e2 = this.addItems(t2);
        e2.length && (this.layoutItems(e2, true), this.reveal(e2));
      }, f.prepended = function(t2) {
        var e2 = this._itemize(t2);
        if (e2.length) {
          var i2 = this.items.slice(0);
          this.items = e2.concat(i2), this._resetLayout(), this._manageStamps(), this.layoutItems(e2, true), this.reveal(e2), this.layoutItems(i2);
        }
      }, f.reveal = function(t2) {
        if (this._emitCompleteOnItems("reveal", t2), t2 && t2.length) {
          var e2 = this.updateStagger();
          t2.forEach(function(t3, i2) {
            t3.stagger(i2 * e2), t3.reveal();
          });
        }
      }, f.hide = function(t2) {
        if (this._emitCompleteOnItems("hide", t2), t2 && t2.length) {
          var e2 = this.updateStagger();
          t2.forEach(function(t3, i2) {
            t3.stagger(i2 * e2), t3.hide();
          });
        }
      }, f.revealItemElements = function(t2) {
        var e2 = this.getItems(t2);
        this.reveal(e2);
      }, f.hideItemElements = function(t2) {
        var e2 = this.getItems(t2);
        this.hide(e2);
      }, f.getItem = function(t2) {
        for (var e2 = 0; e2 < this.items.length; e2++) {
          var i2 = this.items[e2];
          if (i2.element == t2) return i2;
        }
      }, f.getItems = function(t2) {
        t2 = n.makeArray(t2);
        var e2 = [];
        return t2.forEach(function(t3) {
          var i2 = this.getItem(t3);
          i2 && e2.push(i2);
        }, this), e2;
      }, f.remove = function(t2) {
        var e2 = this.getItems(t2);
        this._emitCompleteOnItems("remove", e2), e2 && e2.length && e2.forEach(function(t3) {
          t3.remove(), n.removeFrom(this.items, t3);
        }, this);
      }, f.destroy = function() {
        var t2 = this.element.style;
        t2.height = "", t2.position = "", t2.width = "", this.items.forEach(function(t3) {
          t3.destroy();
        }), this.unbindResize();
        var e2 = this.element.outlayerGUID;
        delete c[e2], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
      }, r.data = function(t2) {
        t2 = n.getQueryElement(t2);
        var e2 = t2 && t2.outlayerGUID;
        return e2 && c[e2];
      }, r.create = function(t2, e2) {
        var i2 = s(r);
        return i2.defaults = n.extend({}, r.defaults), n.extend(i2.defaults, e2), i2.compatOptions = n.extend({}, r.compatOptions), i2.namespace = t2, i2.data = r.data, i2.Item = s(o), n.htmlInit(i2, t2), u && u.bridget && u.bridget(t2, i2), i2;
      };
      var m = { ms: 1, s: 1e3 };
      return r.Item = o, r;
    }), function(t, e) {
      "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
    }(window, function(t, e) {
      var i = t.create("masonry");
      return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t2 = 0; t2 < this.cols; t2++) this.colYs.push(0);
        this.maxY = 0;
      }, i.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
          var t2 = this.items[0], i2 = t2 && t2.element;
          this.columnWidth = i2 && e(i2).outerWidth || this.containerWidth;
        }
        var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / n, s = n - o % n, a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1);
      }, i.prototype.getContainerWidth = function() {
        var t2 = this._getOption("fitWidth"), i2 = t2 ? this.element.parentNode : this.element, n = e(i2);
        this.containerWidth = n && n.innerWidth;
      }, i.prototype._getItemLayoutPosition = function(t2) {
        t2.getSize();
        var e2 = t2.size.outerWidth % this.columnWidth, i2 = e2 && 1 > e2 ? "round" : "ceil", n = Math[i2](t2.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = { x: this.columnWidth * s, y: r }, h = r + t2.size.outerHeight, u = this.cols + 1 - o.length, d = 0; u > d; d++) this.colYs[s + d] = h;
        return a;
      }, i.prototype._getColGroup = function(t2) {
        if (2 > t2) return this.colYs;
        for (var e2 = [], i2 = this.cols + 1 - t2, n = 0; i2 > n; n++) {
          var o = this.colYs.slice(n, n + t2);
          e2[n] = Math.max.apply(Math, o);
        }
        return e2;
      }, i.prototype._manageStamp = function(t2) {
        var i2 = e(t2), n = this._getElementOffset(t2), o = this._getOption("originLeft"), r = o ? n.left : n.right, s = r + i2.outerWidth, a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i2.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
      }, i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t2 = { height: this.maxY };
        return this._getOption("fitWidth") && (t2.width = this._getContainerFitWidth()), t2;
      }, i.prototype._getContainerFitWidth = function() {
        for (var t2 = 0, e2 = this.cols; --e2 && 0 === this.colYs[e2]; ) t2++;
        return (this.cols - t2) * this.columnWidth - this.gutter;
      }, i.prototype.needsResizeLayout = function() {
        var t2 = this.containerWidth;
        return this.getContainerWidth(), t2 != this.containerWidth;
      }, i;
    });
  }
});
export default require_grid_blog_min_007();
