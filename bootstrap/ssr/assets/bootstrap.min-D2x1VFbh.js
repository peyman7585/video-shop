/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function(a) {
  function b() {
    var a2 = document.createElement("bootstrap"), b2 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
    for (var c in b2) if (void 0 !== a2.style[c]) return { end: b2[c] };
    return false;
  }
  a.fn.emulateTransitionEnd = function(b2) {
    var c = false, d = this;
    a(this).one("bsTransitionEnd", function() {
      c = true;
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end);
    };
    return setTimeout(e, b2), this;
  }, a(function() {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b2) {
      if (a(b2.target).is(this)) return b2.handleObj.handler.apply(this, arguments);
    } });
  });
}(jQuery), +function(a) {
  function b(b2) {
    return this.each(function() {
      var c2 = a(this), e2 = c2.data("bs.alert");
      e2 || c2.data("bs.alert", e2 = new d(this)), "string" == typeof b2 && e2[b2].call(c2);
    });
  }
  var c = '[data-dismiss="alert"]', d = function(b2) {
    a(b2).on("click", c, this.close);
  };
  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b2) {
    function c2() {
      g.detach().trigger("closed.bs.alert").remove();
    }
    var e2 = a(this), f = e2.attr("data-target");
    f || (f = e2.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a("#" === f ? [] : f);
    b2 && b2.preventDefault(), g.length || (g = e2.closest(".alert")), g.trigger(b2 = a.Event("close.bs.alert")), b2.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c2).emulateTransitionEnd(d.TRANSITION_DURATION) : c2());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function(a) {
  function b(b2) {
    return this.each(function() {
      var d2 = a(this), e = d2.data("bs.button"), f = "object" == typeof b2 && b2;
      e || d2.data("bs.button", e = new c(this, f)), "toggle" == b2 ? e.toggle() : b2 && e.setState(b2);
    });
  }
  var c = function(b2, d2) {
    this.$element = a(b2), this.options = a.extend({}, c.DEFAULTS, d2), this.isLoading = false;
  };
  c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b2) {
    var c2 = "disabled", d2 = this.$element, e = d2.is("input") ? "val" : "html", f = d2.data();
    b2 += "Text", null == f.resetText && d2.data("resetText", d2[e]()), setTimeout(a.proxy(function() {
      d2[e](null == f[b2] ? this.options[b2] : f[b2]), "loadingText" == b2 ? (this.isLoading = true, d2.addClass(c2).attr(c2, c2).prop(c2, true)) : this.isLoading && (this.isLoading = false, d2.removeClass(c2).removeAttr(c2).prop(c2, false));
    }, this), 0);
  }, c.prototype.toggle = function() {
    var a2 = true, b2 = this.$element.closest('[data-toggle="buttons"]');
    if (b2.length) {
      var c2 = this.$element.find("input");
      "radio" == c2.prop("type") ? (c2.prop("checked") && (a2 = false), b2.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c2.prop("type") && (c2.prop("checked") !== this.$element.hasClass("active") && (a2 = false), this.$element.toggleClass("active")), c2.prop("checked", this.$element.hasClass("active")), a2 && c2.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c2) {
    var d2 = a(c2.target).closest(".btn");
    b.call(d2, "toggle"), a(c2.target).is('input[type="radio"], input[type="checkbox"]') || (c2.preventDefault(), d2.is("input,button") ? d2.trigger("focus") : d2.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b2) {
    a(b2.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b2.type));
  });
}(jQuery), +function(a) {
  function b(b2) {
    return this.each(function() {
      var d2 = a(this), e2 = d2.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d2.data(), "object" == typeof b2 && b2), g = "string" == typeof b2 ? b2 : f.slide;
      e2 || d2.data("bs.carousel", e2 = new c(this, f)), "number" == typeof b2 ? e2.to(b2) : g ? e2[g]() : f.interval && e2.pause().cycle();
    });
  }
  var c = function(b2, c2) {
    this.$element = a(b2), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c2, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: true, keyboard: true }, c.prototype.keydown = function(a2) {
    if (!/input|textarea/i.test(a2.target.tagName)) {
      switch (a2.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return;
      }
      a2.preventDefault();
    }
  }, c.prototype.cycle = function(b2) {
    return b2 || (this.paused = false), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function(a2) {
    return this.$items = a2.parent().children(".item"), this.$items.index(a2 || this.$active);
  }, c.prototype.getItemForDirection = function(a2, b2) {
    var c2 = this.getItemIndex(b2), d2 = "prev" == a2 && 0 === c2 || "next" == a2 && c2 == this.$items.length - 1;
    if (d2 && !this.options.wrap) return b2;
    var e2 = "prev" == a2 ? -1 : 1, f = (c2 + e2) % this.$items.length;
    return this.$items.eq(f);
  }, c.prototype.to = function(a2) {
    var b2 = this, c2 = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(a2 > this.$items.length - 1 || a2 < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      b2.to(a2);
    }) : c2 == a2 ? this.pause().cycle() : this.slide(a2 > c2 ? "next" : "prev", this.$items.eq(a2));
  }, c.prototype.pause = function(b2) {
    return b2 || (this.paused = true), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(true)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function() {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function(b2, d2) {
    var e2 = this.$element.find(".item.active"), f = d2 || this.getItemForDirection(b2, e2), g = this.interval, h = "next" == b2 ? "left" : "right", i = this;
    if (f.hasClass("active")) return this.sliding = false;
    var j = f[0], k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = true, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active");
      }
      var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b2), f[0].offsetWidth, e2.addClass(h), f.addClass(h), e2.one("bsTransitionEnd", function() {
        f.removeClass([b2, h].join(" ")).addClass("active"), e2.removeClass(["active", h].join(" ")), i.sliding = false, setTimeout(function() {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e2.removeClass("active"), f.addClass("active"), this.sliding = false, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
    return a.fn.carousel = d, this;
  };
  var e = function(c2) {
    var d2, e2 = a(this), f = a(e2.attr("data-target") || (d2 = e2.attr("href")) && d2.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e2.data()), h = e2.attr("data-slide-to");
      h && (g.interval = false), b.call(f, g), h && f.data("bs.carousel").to(h), c2.preventDefault();
    }
  };
  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
    a('[data-ride="carousel"]').each(function() {
      var c2 = a(this);
      b.call(c2, c2.data());
    });
  });
}(jQuery), +function(a) {
  function b(b2) {
    var c2, d2 = b2.attr("data-target") || (c2 = b2.attr("href")) && c2.replace(/.*(?=#[^\s]+$)/, "");
    return a(d2);
  }
  function c(b2) {
    return this.each(function() {
      var c2 = a(this), e2 = c2.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c2.data(), "object" == typeof b2 && b2);
      !e2 && f.toggle && /show|hide/.test(b2) && (f.toggle = false), e2 || c2.data("bs.collapse", e2 = new d(this, f)), "string" == typeof b2 && e2[b2]();
    });
  }
  var d = function(b2, c2) {
    this.$element = a(b2), this.options = a.extend({}, d.DEFAULTS, c2), this.$trigger = a('[data-toggle="collapse"][href="#' + b2.id + '"],[data-toggle="collapse"][data-target="#' + b2.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };
  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: true }, d.prototype.dimension = function() {
    var a2 = this.$element.hasClass("width");
    return a2 ? "width" : "height";
  }, d.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b2, e2 = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e2 && e2.length && (b2 = e2.data("bs.collapse"), b2 && b2.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e2 && e2.length && (c.call(e2, "hide"), b2 || e2.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", true), this.$trigger.removeClass("collapsed").attr("aria-expanded", true), this.transitioning = 1;
          var h = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };
          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b2 = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b2), !b2.isDefaultPrevented()) {
        var c2 = this.dimension();
        this.$element[c2](this.$element[c2]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false), this.$trigger.addClass("collapsed").attr("aria-expanded", false), this.transitioning = 1;
        var e2 = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        return a.support.transition ? void this.$element[c2](0).one("bsTransitionEnd", a.proxy(e2, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e2.call(this);
      }
    }
  }, d.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function() {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c2, d2) {
      var e2 = a(d2);
      this.addAriaAndCollapsedClass(b(e2), e2);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function(a2, b2) {
    var c2 = a2.hasClass("in");
    a2.attr("aria-expanded", c2), b2.toggleClass("collapsed", !c2).attr("aria-expanded", c2);
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d2) {
    var e2 = a(this);
    e2.attr("data-target") || d2.preventDefault();
    var f = b(e2), g = f.data("bs.collapse"), h = g ? "toggle" : e2.data();
    c.call(f, h);
  });
}(jQuery), +function(a) {
  function b(b2) {
    var c2 = b2.attr("data-target");
    c2 || (c2 = b2.attr("href"), c2 = c2 && /#[A-Za-z]/.test(c2) && c2.replace(/.*(?=#[^\s]*$)/, ""));
    var d2 = c2 && a(c2);
    return d2 && d2.length ? d2 : b2.parent();
  }
  function c(c2) {
    c2 && 3 === c2.which || (a(e).remove(), a(f).each(function() {
      var d2 = a(this), e2 = b(d2), f2 = { relatedTarget: this };
      e2.hasClass("open") && (c2 && "click" == c2.type && /input|textarea/i.test(c2.target.tagName) && a.contains(e2[0], c2.target) || (e2.trigger(c2 = a.Event("hide.bs.dropdown", f2)), c2.isDefaultPrevented() || (d2.attr("aria-expanded", "false"), e2.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f2)))));
    }));
  }
  function d(b2) {
    return this.each(function() {
      var c2 = a(this), d2 = c2.data("bs.dropdown");
      d2 || c2.data("bs.dropdown", d2 = new g(this)), "string" == typeof b2 && d2[b2].call(c2);
    });
  }
  var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function(b2) {
    a(b2).on("click.bs.dropdown", this.toggle);
  };
  g.VERSION = "3.3.7", g.prototype.toggle = function(d2) {
    var e2 = a(this);
    if (!e2.is(".disabled, :disabled")) {
      var f2 = b(e2), g2 = f2.hasClass("open");
      if (c(), !g2) {
        "ontouchstart" in document.documentElement && !f2.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h2 = { relatedTarget: this };
        if (f2.trigger(d2 = a.Event("show.bs.dropdown", h2)), d2.isDefaultPrevented()) return;
        e2.trigger("focus").attr("aria-expanded", "true"), f2.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h2));
      }
      return false;
    }
  }, g.prototype.keydown = function(c2) {
    if (/(38|40|27|32)/.test(c2.which) && !/input|textarea/i.test(c2.target.tagName)) {
      var d2 = a(this);
      if (c2.preventDefault(), c2.stopPropagation(), !d2.is(".disabled, :disabled")) {
        var e2 = b(d2), g2 = e2.hasClass("open");
        if (!g2 && 27 != c2.which || g2 && 27 == c2.which) return 27 == c2.which && e2.find(f).trigger("focus"), d2.trigger("click");
        var h2 = " li:not(.disabled):visible a", i = e2.find(".dropdown-menu" + h2);
        if (i.length) {
          var j = i.index(c2.target);
          38 == c2.which && j > 0 && j--, 40 == c2.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a2) {
    a2.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function(a) {
  function b(b2, d2) {
    return this.each(function() {
      var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b2 && b2);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b2 ? f[b2](d2) : g.show && f.show(d2);
    });
  }
  var c = function(b2, c2) {
    this.options = c2, this.$body = a(document.body), this.$element = a(b2), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = false, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: true, keyboard: true, show: true }, c.prototype.toggle = function(a2) {
    return this.isShown ? this.hide() : this.show(a2);
  }, c.prototype.show = function(b2) {
    var d2 = this, e = a.Event("show.bs.modal", { relatedTarget: b2 });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = true, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      d2.$element.one("mouseup.dismiss.bs.modal", function(b3) {
        a(b3.target).is(d2.$element) && (d2.ignoreBackdropClick = true);
      });
    }), this.backdrop(function() {
      var e2 = a.support.transition && d2.$element.hasClass("fade");
      d2.$element.parent().length || d2.$element.appendTo(d2.$body), d2.$element.show().scrollTop(0), d2.adjustDialog(), e2 && d2.$element[0].offsetWidth, d2.$element.addClass("in"), d2.enforceFocus();
      var f = a.Event("shown.bs.modal", { relatedTarget: b2 });
      e2 ? d2.$dialog.one("bsTransitionEnd", function() {
        d2.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d2.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function(b2) {
    b2 && b2.preventDefault(), b2 = a.Event("hide.bs.modal"), this.$element.trigger(b2), this.isShown && !b2.isDefaultPrevented() && (this.isShown = false, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function() {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a2) {
      document === a2.target || this.$element[0] === a2.target || this.$element.has(a2.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a2) {
      27 == a2.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function() {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function() {
    var a2 = this;
    this.$element.hide(), this.backdrop(function() {
      a2.$body.removeClass("modal-open"), a2.resetAdjustments(), a2.resetScrollbar(), a2.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function(b2) {
    var d2 = this, e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a2) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = false) : void (a2.target === a2.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b2) return;
      f ? this.$backdrop.one("bsTransitionEnd", b2).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b2();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function() {
        d2.removeBackdrop(), b2 && b2();
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b2 && b2();
  }, c.prototype.handleUpdate = function() {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function() {
    var a2 = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a2 ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a2 ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function() {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function() {
    var a2 = window.innerWidth;
    if (!a2) {
      var b2 = document.documentElement.getBoundingClientRect();
      a2 = b2.right - Math.abs(b2.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < a2, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function() {
    var a2 = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a2 + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function() {
    var a2 = document.createElement("div");
    a2.className = "modal-scrollbar-measure", this.$body.append(a2);
    var b2 = a2.offsetWidth - a2.clientWidth;
    return this.$body[0].removeChild(a2), b2;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c2) {
    var d2 = a(this), e = d2.attr("href"), f = a(d2.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d2.data());
    d2.is("a") && c2.preventDefault(), f.one("show.bs.modal", function(a2) {
      a2.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
        d2.is(":visible") && d2.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function(a) {
  function b(b2) {
    return this.each(function() {
      var d2 = a(this), e = d2.data("bs.tooltip"), f = "object" == typeof b2 && b2;
      !e && /destroy|hide/.test(b2) || (e || d2.data("bs.tooltip", e = new c(this, f)), "string" == typeof b2 && e[b2]());
    });
  }
  var c = function(a2, b2) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a2, b2);
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: true, placement: "top", selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, container: false, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b2, c2, d2) {
    if (this.enabled = true, this.type = b2, this.$element = a(c2), this.options = this.getOptions(d2), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: false, hover: false, focus: false }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function() {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function(b2) {
    return b2 = a.extend({}, this.getDefaults(), this.$element.data(), b2), b2.delay && "number" == typeof b2.delay && (b2.delay = { show: b2.delay, hide: b2.delay }), b2;
  }, c.prototype.getDelegateOptions = function() {
    var b2 = {}, c2 = this.getDefaults();
    return this._options && a.each(this._options, function(a2, d2) {
      c2[a2] != d2 && (b2[a2] = d2);
    }), b2;
  }, c.prototype.enter = function(b2) {
    var c2 = b2 instanceof this.constructor ? b2 : a(b2.currentTarget).data("bs." + this.type);
    return c2 || (c2 = new this.constructor(b2.currentTarget, this.getDelegateOptions()), a(b2.currentTarget).data("bs." + this.type, c2)), b2 instanceof a.Event && (c2.inState["focusin" == b2.type ? "focus" : "hover"] = true), c2.tip().hasClass("in") || "in" == c2.hoverState ? void (c2.hoverState = "in") : (clearTimeout(c2.timeout), c2.hoverState = "in", c2.options.delay && c2.options.delay.show ? void (c2.timeout = setTimeout(function() {
      "in" == c2.hoverState && c2.show();
    }, c2.options.delay.show)) : c2.show());
  }, c.prototype.isInStateTrue = function() {
    for (var a2 in this.inState) if (this.inState[a2]) return true;
    return false;
  }, c.prototype.leave = function(b2) {
    var c2 = b2 instanceof this.constructor ? b2 : a(b2.currentTarget).data("bs." + this.type);
    if (c2 || (c2 = new this.constructor(b2.currentTarget, this.getDelegateOptions()), a(b2.currentTarget).data("bs." + this.type, c2)), b2 instanceof a.Event && (c2.inState["focusout" == b2.type ? "focus" : "hover"] = false), !c2.isInStateTrue()) return clearTimeout(c2.timeout), c2.hoverState = "out", c2.options.delay && c2.options.delay.hide ? void (c2.timeout = setTimeout(function() {
      "out" == c2.hoverState && c2.hide();
    }, c2.options.delay.hide)) : c2.hide();
  }, c.prototype.show = function() {
    var b2 = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b2);
      var d2 = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b2.isDefaultPrevented() || !d2) return;
      var e = this, f = this.tip(), g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
      if (j) {
        var n = h, o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }
      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);
      var q = function() {
        var a2 = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a2 && e.leave(e);
      };
      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function(b2, c2) {
    var d2 = this.tip(), e = d2[0].offsetWidth, f = d2[0].offsetHeight, g = parseInt(d2.css("margin-top"), 10), h = parseInt(d2.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b2.top += g, b2.left += h, a.offset.setOffset(d2[0], a.extend({ using: function(a2) {
      d2.css({ top: Math.round(a2.top), left: Math.round(a2.left) });
    } }, b2), 0), d2.addClass("in");
    var i = d2[0].offsetWidth, j = d2[0].offsetHeight;
    "top" == c2 && j != f && (b2.top = b2.top + f - j);
    var k = this.getViewportAdjustedDelta(c2, b2, i, j);
    k.left ? b2.left += k.left : b2.top += k.top;
    var l = /top|bottom/.test(c2), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
    d2.offset(b2), this.replaceArrow(m, d2[0][n], l);
  }, c.prototype.replaceArrow = function(a2, b2, c2) {
    this.arrow().css(c2 ? "left" : "top", 50 * (1 - a2 / b2) + "%").css(c2 ? "top" : "left", "");
  }, c.prototype.setContent = function() {
    var a2 = this.tip(), b2 = this.getTitle();
    a2.find(".tooltip-inner")[this.options.html ? "html" : "text"](b2), a2.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function(b2) {
    function d2() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b2 && b2();
    }
    var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
    if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d2).emulateTransitionEnd(c.TRANSITION_DURATION) : d2(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function() {
    var a2 = this.$element;
    (a2.attr("title") || "string" != typeof a2.attr("data-original-title")) && a2.attr("data-original-title", a2.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function() {
    return this.getTitle();
  }, c.prototype.getPosition = function(b2) {
    b2 = b2 || this.$element;
    var c2 = b2[0], d2 = "BODY" == c2.tagName, e = c2.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));
    var f = window.SVGElement && c2 instanceof window.SVGElement, g = d2 ? { top: 0, left: 0 } : f ? null : b2.offset(), h = { scroll: d2 ? document.documentElement.scrollTop || document.body.scrollTop : b2.scrollTop() }, i = d2 ? { width: a(window).width(), height: a(window).height() } : null;
    return a.extend({}, e, h, i, g);
  }, c.prototype.getCalculatedOffset = function(a2, b2, c2, d2) {
    return "bottom" == a2 ? { top: b2.top + b2.height, left: b2.left + b2.width / 2 - c2 / 2 } : "top" == a2 ? { top: b2.top - d2, left: b2.left + b2.width / 2 - c2 / 2 } : "left" == a2 ? { top: b2.top + b2.height / 2 - d2 / 2, left: b2.left - c2 } : { top: b2.top + b2.height / 2 - d2 / 2, left: b2.left + b2.width };
  }, c.prototype.getViewportAdjustedDelta = function(a2, b2, c2, d2) {
    var e = { top: 0, left: 0 };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
    if (/right|left/.test(a2)) {
      var h = b2.top - f - g.scroll, i = b2.top + f - g.scroll + d2;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b2.left - f, k = b2.left + f + c2;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }
    return e;
  }, c.prototype.getTitle = function() {
    var b2 = this.$element, c2 = this.options;
    return b2.attr("data-original-title") || ("function" == typeof c2.title ? c2.title.call(b2[0]) : c2.title);
  }, c.prototype.getUID = function(a2) {
    do
      a2 += ~~(1e6 * Math.random());
    while (document.getElementById(a2));
    return a2;
  }, c.prototype.tip = function() {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function() {
    this.enabled = true;
  }, c.prototype.disable = function() {
    this.enabled = false;
  }, c.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function(b2) {
    var c2 = this;
    b2 && (c2 = a(b2.currentTarget).data("bs." + this.type), c2 || (c2 = new this.constructor(b2.currentTarget, this.getDelegateOptions()), a(b2.currentTarget).data("bs." + this.type, c2))), b2 ? (c2.inState.click = !c2.inState.click, c2.isInStateTrue() ? c2.enter(c2) : c2.leave(c2)) : c2.tip().hasClass("in") ? c2.leave(c2) : c2.enter(c2);
  }, c.prototype.destroy = function() {
    var a2 = this;
    clearTimeout(this.timeout), this.hide(function() {
      a2.$element.off("." + a2.type).removeData("bs." + a2.type), a2.$tip && a2.$tip.detach(), a2.$tip = null, a2.$arrow = null, a2.$viewport = null, a2.$element = null;
    });
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function(a) {
  function b(b2) {
    return this.each(function() {
      var d2 = a(this), e = d2.data("bs.popover"), f = "object" == typeof b2 && b2;
      !e && /destroy|hide/.test(b2) || (e || d2.data("bs.popover", e = new c(this, f)), "string" == typeof b2 && e[b2]());
    });
  }
  var c = function(a2, b2) {
    this.init("popover", a2, b2);
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
    return c.DEFAULTS;
  }, c.prototype.setContent = function() {
    var a2 = this.tip(), b2 = this.getTitle(), c2 = this.getContent();
    a2.find(".popover-title")[this.options.html ? "html" : "text"](b2), a2.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c2 ? "html" : "append" : "text"](c2), a2.removeClass("fade top bottom left right in"), a2.find(".popover-title").html() || a2.find(".popover-title").hide();
  }, c.prototype.hasContent = function() {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function() {
    var a2 = this.$element, b2 = this.options;
    return a2.attr("data-content") || ("function" == typeof b2.content ? b2.content.call(a2[0]) : b2.content);
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
    return a.fn.popover = d, this;
  };
}(jQuery), +function(a) {
  function b(c2, d2) {
    this.$body = a(document.body), this.$scrollElement = a(a(c2).is(document.body) ? window : c2), this.options = a.extend({}, b.DEFAULTS, d2), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }
  function c(c2) {
    return this.each(function() {
      var d2 = a(this), e = d2.data("bs.scrollspy"), f = "object" == typeof c2 && c2;
      e || d2.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c2 && e[c2]();
    });
  }
  b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function() {
    var b2 = this, c2 = "offset", d2 = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c2 = "position", d2 = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var b3 = a(this), e = b3.data("target") || b3.attr("href"), f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[c2]().top + d2, e]] || null;
    }).sort(function(a2, b3) {
      return a2[0] - b3[0];
    }).each(function() {
      b2.offsets.push(this[0]), b2.targets.push(this[1]);
    });
  }, b.prototype.process = function() {
    var a2, b2 = this.$scrollElement.scrollTop() + this.options.offset, c2 = this.getScrollHeight(), d2 = this.options.offset + c2 - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
    if (this.scrollHeight != c2 && this.refresh(), b2 >= d2) return g != (a2 = f[f.length - 1]) && this.activate(a2);
    if (g && b2 < e[0]) return this.activeTarget = null, this.clear();
    for (a2 = e.length; a2--; ) g != f[a2] && b2 >= e[a2] && (void 0 === e[a2 + 1] || b2 < e[a2 + 1]) && this.activate(f[a2]);
  }, b.prototype.activate = function(b2) {
    this.activeTarget = b2, this.clear();
    var c2 = this.selector + '[data-target="' + b2 + '"],' + this.selector + '[href="' + b2 + '"]', d2 = a(c2).parents("li").addClass("active");
    d2.parent(".dropdown-menu").length && (d2 = d2.closest("li.dropdown").addClass("active")), d2.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function() {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function() {
    a('[data-spy="scroll"]').each(function() {
      var b2 = a(this);
      c.call(b2, b2.data());
    });
  });
}(jQuery), +function(a) {
  function b(b2) {
    return this.each(function() {
      var d2 = a(this), e2 = d2.data("bs.tab");
      e2 || d2.data("bs.tab", e2 = new c(this)), "string" == typeof b2 && e2[b2]();
    });
  }
  var c = function(b2) {
    this.element = a(b2);
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
    var b2 = this.element, c2 = b2.closest("ul:not(.dropdown-menu)"), d2 = b2.data("target");
    if (d2 || (d2 = b2.attr("href"), d2 = d2 && d2.replace(/.*(?=#[^\s]*$)/, "")), !b2.parent("li").hasClass("active")) {
      var e2 = c2.find(".active:last a"), f = a.Event("hide.bs.tab", { relatedTarget: b2[0] }), g = a.Event("show.bs.tab", { relatedTarget: e2[0] });
      if (e2.trigger(f), b2.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d2);
        this.activate(b2.closest("li"), c2), this.activate(h, h.parent(), function() {
          e2.trigger({ type: "hidden.bs.tab", relatedTarget: b2[0] }), b2.trigger({ type: "shown.bs.tab", relatedTarget: e2[0] });
        });
      }
    }
  }, c.prototype.activate = function(b2, d2, e2) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false), b2.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true), h ? (b2[0].offsetWidth, b2.addClass("in")) : b2.removeClass("fade"), b2.parent(".dropdown-menu").length && b2.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true), e2 && e2();
    }
    var g = d2.find("> .active"), h = e2 && a.support.transition && (g.length && g.hasClass("fade") || !!d2.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
    return a.fn.tab = d, this;
  };
  var e = function(c2) {
    c2.preventDefault(), b.call(a(this), "show");
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function(a) {
  function b(b2) {
    return this.each(function() {
      var d2 = a(this), e = d2.data("bs.affix"), f = "object" == typeof b2 && b2;
      e || d2.data("bs.affix", e = new c(this, f)), "string" == typeof b2 && e[b2]();
    });
  }
  var c = function(b2, d2) {
    this.options = a.extend({}, c.DEFAULTS, d2), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b2), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };
  c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a2, b2, c2, d2) {
    var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
    if (null != c2 && "top" == this.affixed) return e < c2 && "top";
    if ("bottom" == this.affixed) return null != c2 ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a2 - d2) && "bottom";
    var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b2;
    return null != c2 && e <= c2 ? "top" : null != d2 && i + j >= a2 - d2 && "bottom";
  }, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a2 = this.$target.scrollTop(), b2 = this.$element.offset();
    return this.pinnedOffset = b2.top - a2;
  }, c.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var b2 = this.$element.height(), d2 = this.options.offset, e = d2.top, f = d2.bottom, g = Math.max(a(document).height(), a(document.body).height());
      "object" != typeof d2 && (f = e = d2), "function" == typeof e && (e = d2.top(this.$element)), "function" == typeof f && (f = d2.bottom(this.$element));
      var h = this.getState(g, b2, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }
      "bottom" == h && this.$element.offset({ top: g - b2 - f });
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
    return a.fn.affix = d, this;
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var c2 = a(this), d2 = c2.data();
      d2.offset = d2.offset || {}, null != d2.offsetBottom && (d2.offset.bottom = d2.offsetBottom), null != d2.offsetTop && (d2.offset.top = d2.offsetTop), b.call(c2, d2);
    });
  });
}(jQuery);
