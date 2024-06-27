var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_imagesloaded_pkgd_min_006 = __commonJS({
  "assets/imagesloaded.pkgd.min-DmstJGR6.js"(exports, module) {
    /*!
     * imagesLoaded PACKAGED v4.1.2
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    !function(t, e) {
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
      "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i);
      }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
    }("undefined" != typeof window ? window : void 0, function(t, e) {
      function i(t2, e2) {
        for (var i2 in e2) t2[i2] = e2[i2];
        return t2;
      }
      function n(t2) {
        var e2 = [];
        if (Array.isArray(t2)) e2 = t2;
        else if ("number" == typeof t2.length) for (var i2 = 0; i2 < t2.length; i2++) e2.push(t2[i2]);
        else e2.push(t2);
        return e2;
      }
      function o(t2, e2, r2) {
        return this instanceof o ? ("string" == typeof t2 && (t2 = document.querySelectorAll(t2)), this.elements = n(t2), this.options = i({}, this.options), "function" == typeof e2 ? r2 = e2 : i(this.options, e2), r2 && this.on("always", r2), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout((function() {
          this.check();
        }).bind(this))) : new o(t2, e2, r2);
      }
      function r(t2) {
        this.img = t2;
      }
      function s(t2, e2) {
        this.url = t2, this.element = e2, this.img = new Image();
      }
      var h = t.jQuery, a = t.console;
      o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this);
      }, o.prototype.addElementImages = function(t2) {
        "IMG" == t2.nodeName && this.addImage(t2), this.options.background === true && this.addElementBackgroundImages(t2);
        var e2 = t2.nodeType;
        if (e2 && d[e2]) {
          for (var i2 = t2.querySelectorAll("img"), n2 = 0; n2 < i2.length; n2++) {
            var o2 = i2[n2];
            this.addImage(o2);
          }
          if ("string" == typeof this.options.background) {
            var r2 = t2.querySelectorAll(this.options.background);
            for (n2 = 0; n2 < r2.length; n2++) {
              var s2 = r2[n2];
              this.addElementBackgroundImages(s2);
            }
          }
        }
      };
      var d = { 1: true, 9: true, 11: true };
      return o.prototype.addElementBackgroundImages = function(t2) {
        var e2 = getComputedStyle(t2);
        if (e2) for (var i2 = /url\((['"])?(.*?)\1\)/gi, n2 = i2.exec(e2.backgroundImage); null !== n2; ) {
          var o2 = n2 && n2[2];
          o2 && this.addBackground(o2, t2), n2 = i2.exec(e2.backgroundImage);
        }
      }, o.prototype.addImage = function(t2) {
        var e2 = new r(t2);
        this.images.push(e2);
      }, o.prototype.addBackground = function(t2, e2) {
        var i2 = new s(t2, e2);
        this.images.push(i2);
      }, o.prototype.check = function() {
        function t2(t3, i2, n2) {
          setTimeout(function() {
            e2.progress(t3, i2, n2);
          });
        }
        var e2 = this;
        return this.progressedCount = 0, this.hasAnyBroken = false, this.images.length ? void this.images.forEach(function(e3) {
          e3.once("progress", t2), e3.check();
        }) : void this.complete();
      }, o.prototype.progress = function(t2, e2, i2) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t2.isLoaded, this.emitEvent("progress", [this, t2, e2]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t2), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i2, t2, e2);
      }, o.prototype.complete = function() {
        var t2 = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = true, this.emitEvent(t2, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
          var e2 = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e2](this);
        }
      }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        var t2 = this.getIsImageComplete();
        return t2 ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
      }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }, r.prototype.confirm = function(t2, e2) {
        this.isLoaded = t2, this.emitEvent("progress", [this, this.img, e2]);
      }, r.prototype.handleEvent = function(t2) {
        var e2 = "on" + t2.type;
        this[e2] && this[e2](t2);
      }, r.prototype.onload = function() {
        this.confirm(true, "onload"), this.unbindEvents();
      }, r.prototype.onerror = function() {
        this.confirm(false, "onerror"), this.unbindEvents();
      }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t2 = this.getIsImageComplete();
        t2 && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
      }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
      }, s.prototype.confirm = function(t2, e2) {
        this.isLoaded = t2, this.emitEvent("progress", [this, this.element, e2]);
      }, o.makeJQueryPlugin = function(e2) {
        e2 = e2 || t.jQuery, e2 && (h = e2, h.fn.imagesLoaded = function(t2, e3) {
          var i2 = new o(this, t2, e3);
          return i2.jqDeferred.promise(h(this));
        });
      }, o.makeJQueryPlugin(), o;
    });
  }
});
export default require_imagesloaded_pkgd_min_006();
