var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_jquery_3_2_1_min_002 = __commonJS({
  "assets/jquery-3.2.1.min-BR9rINuL.js"(exports, module) {
    /*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
    !function(a, b) {
      "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, true) : function(a2) {
        if (!a2.document) throw new Error("jQuery requires a window with a document");
        return b(a2);
      } : b(a);
    }("undefined" != typeof window ? window : void 0, function(a, b) {
      var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {};
      function p(a2, b2) {
        b2 = b2 || d;
        var c2 = b2.createElement("script");
        c2.text = a2, b2.head.appendChild(c2).parentNode.removeChild(c2);
      }
      var q = "3.2.1", r = function(a2, b2) {
        return new r.fn.init(a2, b2);
      }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function(a2, b2) {
        return b2.toUpperCase();
      };
      r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function() {
        return f.call(this);
      }, get: function(a2) {
        return null == a2 ? f.call(this) : a2 < 0 ? this[a2 + this.length] : this[a2];
      }, pushStack: function(a2) {
        var b2 = r.merge(this.constructor(), a2);
        return b2.prevObject = this, b2;
      }, each: function(a2) {
        return r.each(this, a2);
      }, map: function(a2) {
        return this.pushStack(r.map(this, function(b2, c2) {
          return a2.call(b2, c2, b2);
        }));
      }, slice: function() {
        return this.pushStack(f.apply(this, arguments));
      }, first: function() {
        return this.eq(0);
      }, last: function() {
        return this.eq(-1);
      }, eq: function(a2) {
        var b2 = this.length, c2 = +a2 + (a2 < 0 ? b2 : 0);
        return this.pushStack(c2 >= 0 && c2 < b2 ? [this[c2]] : []);
      }, end: function() {
        return this.prevObject || this.constructor();
      }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function() {
        var a2, b2, c2, d2, e2, f2, g2 = arguments[0] || {}, h2 = 1, i2 = arguments.length, j2 = false;
        for ("boolean" == typeof g2 && (j2 = g2, g2 = arguments[h2] || {}, h2++), "object" == typeof g2 || r.isFunction(g2) || (g2 = {}), h2 === i2 && (g2 = this, h2--); h2 < i2; h2++) if (null != (a2 = arguments[h2])) for (b2 in a2) c2 = g2[b2], d2 = a2[b2], g2 !== d2 && (j2 && d2 && (r.isPlainObject(d2) || (e2 = Array.isArray(d2))) ? (e2 ? (e2 = false, f2 = c2 && Array.isArray(c2) ? c2 : []) : f2 = c2 && r.isPlainObject(c2) ? c2 : {}, g2[b2] = r.extend(j2, f2, d2)) : void 0 !== d2 && (g2[b2] = d2));
        return g2;
      }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: true, error: function(a2) {
        throw new Error(a2);
      }, noop: function() {
      }, isFunction: function(a2) {
        return "function" === r.type(a2);
      }, isWindow: function(a2) {
        return null != a2 && a2 === a2.window;
      }, isNumeric: function(a2) {
        var b2 = r.type(a2);
        return ("number" === b2 || "string" === b2) && !isNaN(a2 - parseFloat(a2));
      }, isPlainObject: function(a2) {
        var b2, c2;
        return !(!a2 || "[object Object]" !== k.call(a2)) && (!(b2 = e(a2)) || (c2 = l.call(b2, "constructor") && b2.constructor, "function" == typeof c2 && m.call(c2) === n));
      }, isEmptyObject: function(a2) {
        var b2;
        for (b2 in a2) return false;
        return true;
      }, type: function(a2) {
        return null == a2 ? a2 + "" : "object" == typeof a2 || "function" == typeof a2 ? j[k.call(a2)] || "object" : typeof a2;
      }, globalEval: function(a2) {
        p(a2);
      }, camelCase: function(a2) {
        return a2.replace(t, "ms-").replace(u, v);
      }, each: function(a2, b2) {
        var c2, d2 = 0;
        if (w(a2)) {
          for (c2 = a2.length; d2 < c2; d2++) if (b2.call(a2[d2], d2, a2[d2]) === false) break;
        } else for (d2 in a2) if (b2.call(a2[d2], d2, a2[d2]) === false) break;
        return a2;
      }, trim: function(a2) {
        return null == a2 ? "" : (a2 + "").replace(s, "");
      }, makeArray: function(a2, b2) {
        var c2 = b2 || [];
        return null != a2 && (w(Object(a2)) ? r.merge(c2, "string" == typeof a2 ? [a2] : a2) : h.call(c2, a2)), c2;
      }, inArray: function(a2, b2, c2) {
        return null == b2 ? -1 : i.call(b2, a2, c2);
      }, merge: function(a2, b2) {
        for (var c2 = +b2.length, d2 = 0, e2 = a2.length; d2 < c2; d2++) a2[e2++] = b2[d2];
        return a2.length = e2, a2;
      }, grep: function(a2, b2, c2) {
        for (var d2, e2 = [], f2 = 0, g2 = a2.length, h2 = !c2; f2 < g2; f2++) d2 = !b2(a2[f2], f2), d2 !== h2 && e2.push(a2[f2]);
        return e2;
      }, map: function(a2, b2, c2) {
        var d2, e2, f2 = 0, h2 = [];
        if (w(a2)) for (d2 = a2.length; f2 < d2; f2++) e2 = b2(a2[f2], f2, c2), null != e2 && h2.push(e2);
        else for (f2 in a2) e2 = b2(a2[f2], f2, c2), null != e2 && h2.push(e2);
        return g.apply([], h2);
      }, guid: 1, proxy: function(a2, b2) {
        var c2, d2, e2;
        if ("string" == typeof b2 && (c2 = a2[b2], b2 = a2, a2 = c2), r.isFunction(a2)) return d2 = f.call(arguments, 2), e2 = function() {
          return a2.apply(b2 || this, d2.concat(f.call(arguments)));
        }, e2.guid = a2.guid = a2.guid || r.guid++, e2;
      }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a2, b2) {
        j["[object " + b2 + "]"] = b2.toLowerCase();
      });
      function w(a2) {
        var b2 = !!a2 && "length" in a2 && a2.length, c2 = r.type(a2);
        return "function" !== c2 && !r.isWindow(a2) && ("array" === c2 || 0 === b2 || "number" == typeof b2 && b2 > 0 && b2 - 1 in a2);
      }
      var x = function(a2) {
        var b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), v2 = a2.document, w2 = 0, x2 = 0, y2 = ha2(), z2 = ha2(), A2 = ha2(), B2 = function(a3, b3) {
          return a3 === b3 && (l2 = true), 0;
        }, C2 = {}.hasOwnProperty, D2 = [], E2 = D2.pop, F2 = D2.push, G2 = D2.push, H2 = D2.slice, I2 = function(a3, b3) {
          for (var c3 = 0, d3 = a3.length; c3 < d3; c3++) if (a3[c3] === b3) return c3;
          return -1;
        }, J2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K2 = "[\\x20\\t\\r\\n\\f]", L2 = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M2 = "\\[" + K2 + "*(" + L2 + ")(?:" + K2 + "*([*^$|!~]?=)" + K2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + L2 + "))|)" + K2 + "*\\]", N2 = ":(" + L2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + M2 + ")*)|.*)\\)|)", O2 = new RegExp(K2 + "+", "g"), P2 = new RegExp("^" + K2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K2 + "+$", "g"), Q2 = new RegExp("^" + K2 + "*," + K2 + "*"), R2 = new RegExp("^" + K2 + "*([>+~]|" + K2 + ")" + K2 + "*"), S2 = new RegExp("=" + K2 + `*([^\\]'"]*?)` + K2 + "*\\]", "g"), T2 = new RegExp(N2), U2 = new RegExp("^" + L2 + "$"), V2 = { ID: new RegExp("^#(" + L2 + ")"), CLASS: new RegExp("^\\.(" + L2 + ")"), TAG: new RegExp("^(" + L2 + "|[*])"), ATTR: new RegExp("^" + M2), PSEUDO: new RegExp("^" + N2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K2 + "*(even|odd|(([+-]|)(\\d*)n|)" + K2 + "*(?:([+-]|)" + K2 + "*(\\d+)|))" + K2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + J2 + ")$", "i"), needsContext: new RegExp("^" + K2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K2 + "*((?:-\\d)?\\d*)" + K2 + "*\\)|)(?=[^-]|$)", "i") }, W2 = /^(?:input|select|textarea|button)$/i, X2 = /^h\d$/i, Y2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $2 = /[+~]/, _2 = new RegExp("\\\\([\\da-f]{1,6}" + K2 + "?|(" + K2 + ")|.)", "ig"), aa2 = function(a3, b3, c3) {
          var d3 = "0x" + b3 - 65536;
          return d3 !== d3 || c3 ? b3 : d3 < 0 ? String.fromCharCode(d3 + 65536) : String.fromCharCode(d3 >> 10 | 55296, 1023 & d3 | 56320);
        }, ba2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca2 = function(a3, b3) {
          return b3 ? "\0" === a3 ? "�" : a3.slice(0, -1) + "\\" + a3.charCodeAt(a3.length - 1).toString(16) + " " : "\\" + a3;
        }, da2 = function() {
          m2();
        }, ea2 = ta2(function(a3) {
          return a3.disabled === true && ("form" in a3 || "label" in a3);
        }, { dir: "parentNode", next: "legend" });
        try {
          G2.apply(D2 = H2.call(v2.childNodes), v2.childNodes), D2[v2.childNodes.length].nodeType;
        } catch (fa2) {
          G2 = { apply: D2.length ? function(a3, b3) {
            F2.apply(a3, H2.call(b3));
          } : function(a3, b3) {
            var c3 = a3.length, d3 = 0;
            while (a3[c3++] = b3[d3++]) ;
            a3.length = c3 - 1;
          } };
        }
        function ga2(a3, b3, d3, e3) {
          var f3, h3, j3, k3, l3, o3, r3, s3 = b3 && b3.ownerDocument, w3 = b3 ? b3.nodeType : 9;
          if (d3 = d3 || [], "string" != typeof a3 || !a3 || 1 !== w3 && 9 !== w3 && 11 !== w3) return d3;
          if (!e3 && ((b3 ? b3.ownerDocument || b3 : v2) !== n2 && m2(b3), b3 = b3 || n2, p2)) {
            if (11 !== w3 && (l3 = Z2.exec(a3))) if (f3 = l3[1]) {
              if (9 === w3) {
                if (!(j3 = b3.getElementById(f3))) return d3;
                if (j3.id === f3) return d3.push(j3), d3;
              } else if (s3 && (j3 = s3.getElementById(f3)) && t2(b3, j3) && j3.id === f3) return d3.push(j3), d3;
            } else {
              if (l3[2]) return G2.apply(d3, b3.getElementsByTagName(a3)), d3;
              if ((f3 = l3[3]) && c2.getElementsByClassName && b3.getElementsByClassName) return G2.apply(d3, b3.getElementsByClassName(f3)), d3;
            }
            if (c2.qsa && !A2[a3 + " "] && (!q2 || !q2.test(a3))) {
              if (1 !== w3) s3 = b3, r3 = a3;
              else if ("object" !== b3.nodeName.toLowerCase()) {
                (k3 = b3.getAttribute("id")) ? k3 = k3.replace(ba2, ca2) : b3.setAttribute("id", k3 = u2), o3 = g2(a3), h3 = o3.length;
                while (h3--) o3[h3] = "#" + k3 + " " + sa2(o3[h3]);
                r3 = o3.join(","), s3 = $2.test(a3) && qa2(b3.parentNode) || b3;
              }
              if (r3) try {
                return G2.apply(d3, s3.querySelectorAll(r3)), d3;
              } catch (x3) {
              } finally {
                k3 === u2 && b3.removeAttribute("id");
              }
            }
          }
          return i2(a3.replace(P2, "$1"), b3, d3, e3);
        }
        function ha2() {
          var a3 = [];
          function b3(c3, e3) {
            return a3.push(c3 + " ") > d2.cacheLength && delete b3[a3.shift()], b3[c3 + " "] = e3;
          }
          return b3;
        }
        function ia2(a3) {
          return a3[u2] = true, a3;
        }
        function ja2(a3) {
          var b3 = n2.createElement("fieldset");
          try {
            return !!a3(b3);
          } catch (c3) {
            return false;
          } finally {
            b3.parentNode && b3.parentNode.removeChild(b3), b3 = null;
          }
        }
        function ka2(a3, b3) {
          var c3 = a3.split("|"), e3 = c3.length;
          while (e3--) d2.attrHandle[c3[e3]] = b3;
        }
        function la2(a3, b3) {
          var c3 = b3 && a3, d3 = c3 && 1 === a3.nodeType && 1 === b3.nodeType && a3.sourceIndex - b3.sourceIndex;
          if (d3) return d3;
          if (c3) {
            while (c3 = c3.nextSibling) if (c3 === b3) return -1;
          }
          return a3 ? 1 : -1;
        }
        function ma2(a3) {
          return function(b3) {
            var c3 = b3.nodeName.toLowerCase();
            return "input" === c3 && b3.type === a3;
          };
        }
        function na2(a3) {
          return function(b3) {
            var c3 = b3.nodeName.toLowerCase();
            return ("input" === c3 || "button" === c3) && b3.type === a3;
          };
        }
        function oa2(a3) {
          return function(b3) {
            return "form" in b3 ? b3.parentNode && b3.disabled === false ? "label" in b3 ? "label" in b3.parentNode ? b3.parentNode.disabled === a3 : b3.disabled === a3 : b3.isDisabled === a3 || b3.isDisabled !== !a3 && ea2(b3) === a3 : b3.disabled === a3 : "label" in b3 && b3.disabled === a3;
          };
        }
        function pa2(a3) {
          return ia2(function(b3) {
            return b3 = +b3, ia2(function(c3, d3) {
              var e3, f3 = a3([], c3.length, b3), g3 = f3.length;
              while (g3--) c3[e3 = f3[g3]] && (c3[e3] = !(d3[e3] = c3[e3]));
            });
          });
        }
        function qa2(a3) {
          return a3 && "undefined" != typeof a3.getElementsByTagName && a3;
        }
        c2 = ga2.support = {}, f2 = ga2.isXML = function(a3) {
          var b3 = a3 && (a3.ownerDocument || a3).documentElement;
          return !!b3 && "HTML" !== b3.nodeName;
        }, m2 = ga2.setDocument = function(a3) {
          var b3, e3, g3 = a3 ? a3.ownerDocument || a3 : v2;
          return g3 !== n2 && 9 === g3.nodeType && g3.documentElement ? (n2 = g3, o2 = n2.documentElement, p2 = !f2(n2), v2 !== n2 && (e3 = n2.defaultView) && e3.top !== e3 && (e3.addEventListener ? e3.addEventListener("unload", da2, false) : e3.attachEvent && e3.attachEvent("onunload", da2)), c2.attributes = ja2(function(a4) {
            return a4.className = "i", !a4.getAttribute("className");
          }), c2.getElementsByTagName = ja2(function(a4) {
            return a4.appendChild(n2.createComment("")), !a4.getElementsByTagName("*").length;
          }), c2.getElementsByClassName = Y2.test(n2.getElementsByClassName), c2.getById = ja2(function(a4) {
            return o2.appendChild(a4).id = u2, !n2.getElementsByName || !n2.getElementsByName(u2).length;
          }), c2.getById ? (d2.filter.ID = function(a4) {
            var b4 = a4.replace(_2, aa2);
            return function(a5) {
              return a5.getAttribute("id") === b4;
            };
          }, d2.find.ID = function(a4, b4) {
            if ("undefined" != typeof b4.getElementById && p2) {
              var c3 = b4.getElementById(a4);
              return c3 ? [c3] : [];
            }
          }) : (d2.filter.ID = function(a4) {
            var b4 = a4.replace(_2, aa2);
            return function(a5) {
              var c3 = "undefined" != typeof a5.getAttributeNode && a5.getAttributeNode("id");
              return c3 && c3.value === b4;
            };
          }, d2.find.ID = function(a4, b4) {
            if ("undefined" != typeof b4.getElementById && p2) {
              var c3, d3, e4, f3 = b4.getElementById(a4);
              if (f3) {
                if (c3 = f3.getAttributeNode("id"), c3 && c3.value === a4) return [f3];
                e4 = b4.getElementsByName(a4), d3 = 0;
                while (f3 = e4[d3++]) if (c3 = f3.getAttributeNode("id"), c3 && c3.value === a4) return [f3];
              }
              return [];
            }
          }), d2.find.TAG = c2.getElementsByTagName ? function(a4, b4) {
            return "undefined" != typeof b4.getElementsByTagName ? b4.getElementsByTagName(a4) : c2.qsa ? b4.querySelectorAll(a4) : void 0;
          } : function(a4, b4) {
            var c3, d3 = [], e4 = 0, f3 = b4.getElementsByTagName(a4);
            if ("*" === a4) {
              while (c3 = f3[e4++]) 1 === c3.nodeType && d3.push(c3);
              return d3;
            }
            return f3;
          }, d2.find.CLASS = c2.getElementsByClassName && function(a4, b4) {
            if ("undefined" != typeof b4.getElementsByClassName && p2) return b4.getElementsByClassName(a4);
          }, r2 = [], q2 = [], (c2.qsa = Y2.test(n2.querySelectorAll)) && (ja2(function(a4) {
            o2.appendChild(a4).innerHTML = "<a id='" + u2 + "'></a><select id='" + u2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", a4.querySelectorAll("[msallowcapture^='']").length && q2.push("[*^$]=" + K2 + `*(?:''|"")`), a4.querySelectorAll("[selected]").length || q2.push("\\[" + K2 + "*(?:value|" + J2 + ")"), a4.querySelectorAll("[id~=" + u2 + "-]").length || q2.push("~="), a4.querySelectorAll(":checked").length || q2.push(":checked"), a4.querySelectorAll("a#" + u2 + "+*").length || q2.push(".#.+[+~]");
          }), ja2(function(a4) {
            a4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var b4 = n2.createElement("input");
            b4.setAttribute("type", "hidden"), a4.appendChild(b4).setAttribute("name", "D"), a4.querySelectorAll("[name=d]").length && q2.push("name" + K2 + "*[*^$|!~]?="), 2 !== a4.querySelectorAll(":enabled").length && q2.push(":enabled", ":disabled"), o2.appendChild(a4).disabled = true, 2 !== a4.querySelectorAll(":disabled").length && q2.push(":enabled", ":disabled"), a4.querySelectorAll("*,:x"), q2.push(",.*:");
          })), (c2.matchesSelector = Y2.test(s2 = o2.matches || o2.webkitMatchesSelector || o2.mozMatchesSelector || o2.oMatchesSelector || o2.msMatchesSelector)) && ja2(function(a4) {
            c2.disconnectedMatch = s2.call(a4, "*"), s2.call(a4, "[s!='']:x"), r2.push("!=", N2);
          }), q2 = q2.length && new RegExp(q2.join("|")), r2 = r2.length && new RegExp(r2.join("|")), b3 = Y2.test(o2.compareDocumentPosition), t2 = b3 || Y2.test(o2.contains) ? function(a4, b4) {
            var c3 = 9 === a4.nodeType ? a4.documentElement : a4, d3 = b4 && b4.parentNode;
            return a4 === d3 || !(!d3 || 1 !== d3.nodeType || !(c3.contains ? c3.contains(d3) : a4.compareDocumentPosition && 16 & a4.compareDocumentPosition(d3)));
          } : function(a4, b4) {
            if (b4) {
              while (b4 = b4.parentNode) if (b4 === a4) return true;
            }
            return false;
          }, B2 = b3 ? function(a4, b4) {
            if (a4 === b4) return l2 = true, 0;
            var d3 = !a4.compareDocumentPosition - !b4.compareDocumentPosition;
            return d3 ? d3 : (d3 = (a4.ownerDocument || a4) === (b4.ownerDocument || b4) ? a4.compareDocumentPosition(b4) : 1, 1 & d3 || !c2.sortDetached && b4.compareDocumentPosition(a4) === d3 ? a4 === n2 || a4.ownerDocument === v2 && t2(v2, a4) ? -1 : b4 === n2 || b4.ownerDocument === v2 && t2(v2, b4) ? 1 : k2 ? I2(k2, a4) - I2(k2, b4) : 0 : 4 & d3 ? -1 : 1);
          } : function(a4, b4) {
            if (a4 === b4) return l2 = true, 0;
            var c3, d3 = 0, e4 = a4.parentNode, f3 = b4.parentNode, g4 = [a4], h3 = [b4];
            if (!e4 || !f3) return a4 === n2 ? -1 : b4 === n2 ? 1 : e4 ? -1 : f3 ? 1 : k2 ? I2(k2, a4) - I2(k2, b4) : 0;
            if (e4 === f3) return la2(a4, b4);
            c3 = a4;
            while (c3 = c3.parentNode) g4.unshift(c3);
            c3 = b4;
            while (c3 = c3.parentNode) h3.unshift(c3);
            while (g4[d3] === h3[d3]) d3++;
            return d3 ? la2(g4[d3], h3[d3]) : g4[d3] === v2 ? -1 : h3[d3] === v2 ? 1 : 0;
          }, n2) : n2;
        }, ga2.matches = function(a3, b3) {
          return ga2(a3, null, null, b3);
        }, ga2.matchesSelector = function(a3, b3) {
          if ((a3.ownerDocument || a3) !== n2 && m2(a3), b3 = b3.replace(S2, "='$1']"), c2.matchesSelector && p2 && !A2[b3 + " "] && (!r2 || !r2.test(b3)) && (!q2 || !q2.test(b3))) try {
            var d3 = s2.call(a3, b3);
            if (d3 || c2.disconnectedMatch || a3.document && 11 !== a3.document.nodeType) return d3;
          } catch (e3) {
          }
          return ga2(b3, n2, null, [a3]).length > 0;
        }, ga2.contains = function(a3, b3) {
          return (a3.ownerDocument || a3) !== n2 && m2(a3), t2(a3, b3);
        }, ga2.attr = function(a3, b3) {
          (a3.ownerDocument || a3) !== n2 && m2(a3);
          var e3 = d2.attrHandle[b3.toLowerCase()], f3 = e3 && C2.call(d2.attrHandle, b3.toLowerCase()) ? e3(a3, b3, !p2) : void 0;
          return void 0 !== f3 ? f3 : c2.attributes || !p2 ? a3.getAttribute(b3) : (f3 = a3.getAttributeNode(b3)) && f3.specified ? f3.value : null;
        }, ga2.escape = function(a3) {
          return (a3 + "").replace(ba2, ca2);
        }, ga2.error = function(a3) {
          throw new Error("Syntax error, unrecognized expression: " + a3);
        }, ga2.uniqueSort = function(a3) {
          var b3, d3 = [], e3 = 0, f3 = 0;
          if (l2 = !c2.detectDuplicates, k2 = !c2.sortStable && a3.slice(0), a3.sort(B2), l2) {
            while (b3 = a3[f3++]) b3 === a3[f3] && (e3 = d3.push(f3));
            while (e3--) a3.splice(d3[e3], 1);
          }
          return k2 = null, a3;
        }, e2 = ga2.getText = function(a3) {
          var b3, c3 = "", d3 = 0, f3 = a3.nodeType;
          if (f3) {
            if (1 === f3 || 9 === f3 || 11 === f3) {
              if ("string" == typeof a3.textContent) return a3.textContent;
              for (a3 = a3.firstChild; a3; a3 = a3.nextSibling) c3 += e2(a3);
            } else if (3 === f3 || 4 === f3) return a3.nodeValue;
          } else while (b3 = a3[d3++]) c3 += e2(b3);
          return c3;
        }, d2 = ga2.selectors = { cacheLength: 50, createPseudo: ia2, match: V2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a3) {
          return a3[1] = a3[1].replace(_2, aa2), a3[3] = (a3[3] || a3[4] || a3[5] || "").replace(_2, aa2), "~=" === a3[2] && (a3[3] = " " + a3[3] + " "), a3.slice(0, 4);
        }, CHILD: function(a3) {
          return a3[1] = a3[1].toLowerCase(), "nth" === a3[1].slice(0, 3) ? (a3[3] || ga2.error(a3[0]), a3[4] = +(a3[4] ? a3[5] + (a3[6] || 1) : 2 * ("even" === a3[3] || "odd" === a3[3])), a3[5] = +(a3[7] + a3[8] || "odd" === a3[3])) : a3[3] && ga2.error(a3[0]), a3;
        }, PSEUDO: function(a3) {
          var b3, c3 = !a3[6] && a3[2];
          return V2.CHILD.test(a3[0]) ? null : (a3[3] ? a3[2] = a3[4] || a3[5] || "" : c3 && T2.test(c3) && (b3 = g2(c3, true)) && (b3 = c3.indexOf(")", c3.length - b3) - c3.length) && (a3[0] = a3[0].slice(0, b3), a3[2] = c3.slice(0, b3)), a3.slice(0, 3));
        } }, filter: { TAG: function(a3) {
          var b3 = a3.replace(_2, aa2).toLowerCase();
          return "*" === a3 ? function() {
            return true;
          } : function(a4) {
            return a4.nodeName && a4.nodeName.toLowerCase() === b3;
          };
        }, CLASS: function(a3) {
          var b3 = y2[a3 + " "];
          return b3 || (b3 = new RegExp("(^|" + K2 + ")" + a3 + "(" + K2 + "|$)")) && y2(a3, function(a4) {
            return b3.test("string" == typeof a4.className && a4.className || "undefined" != typeof a4.getAttribute && a4.getAttribute("class") || "");
          });
        }, ATTR: function(a3, b3, c3) {
          return function(d3) {
            var e3 = ga2.attr(d3, a3);
            return null == e3 ? "!=" === b3 : !b3 || (e3 += "", "=" === b3 ? e3 === c3 : "!=" === b3 ? e3 !== c3 : "^=" === b3 ? c3 && 0 === e3.indexOf(c3) : "*=" === b3 ? c3 && e3.indexOf(c3) > -1 : "$=" === b3 ? c3 && e3.slice(-c3.length) === c3 : "~=" === b3 ? (" " + e3.replace(O2, " ") + " ").indexOf(c3) > -1 : "|=" === b3 && (e3 === c3 || e3.slice(0, c3.length + 1) === c3 + "-"));
          };
        }, CHILD: function(a3, b3, c3, d3, e3) {
          var f3 = "nth" !== a3.slice(0, 3), g3 = "last" !== a3.slice(-4), h3 = "of-type" === b3;
          return 1 === d3 && 0 === e3 ? function(a4) {
            return !!a4.parentNode;
          } : function(b4, c4, i3) {
            var j3, k3, l3, m3, n3, o3, p3 = f3 !== g3 ? "nextSibling" : "previousSibling", q3 = b4.parentNode, r3 = h3 && b4.nodeName.toLowerCase(), s3 = !i3 && !h3, t3 = false;
            if (q3) {
              if (f3) {
                while (p3) {
                  m3 = b4;
                  while (m3 = m3[p3]) if (h3 ? m3.nodeName.toLowerCase() === r3 : 1 === m3.nodeType) return false;
                  o3 = p3 = "only" === a3 && !o3 && "nextSibling";
                }
                return true;
              }
              if (o3 = [g3 ? q3.firstChild : q3.lastChild], g3 && s3) {
                m3 = q3, l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], t3 = n3 && j3[2], m3 = n3 && q3.childNodes[n3];
                while (m3 = ++n3 && m3 && m3[p3] || (t3 = n3 = 0) || o3.pop()) if (1 === m3.nodeType && ++t3 && m3 === b4) {
                  k3[a3] = [w2, n3, t3];
                  break;
                }
              } else if (s3 && (m3 = b4, l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], t3 = n3), t3 === false) {
                while (m3 = ++n3 && m3 && m3[p3] || (t3 = n3 = 0) || o3.pop()) if ((h3 ? m3.nodeName.toLowerCase() === r3 : 1 === m3.nodeType) && ++t3 && (s3 && (l3 = m3[u2] || (m3[u2] = {}), k3 = l3[m3.uniqueID] || (l3[m3.uniqueID] = {}), k3[a3] = [w2, t3]), m3 === b4)) break;
              }
              return t3 -= e3, t3 === d3 || t3 % d3 === 0 && t3 / d3 >= 0;
            }
          };
        }, PSEUDO: function(a3, b3) {
          var c3, e3 = d2.pseudos[a3] || d2.setFilters[a3.toLowerCase()] || ga2.error("unsupported pseudo: " + a3);
          return e3[u2] ? e3(b3) : e3.length > 1 ? (c3 = [a3, a3, "", b3], d2.setFilters.hasOwnProperty(a3.toLowerCase()) ? ia2(function(a4, c4) {
            var d3, f3 = e3(a4, b3), g3 = f3.length;
            while (g3--) d3 = I2(a4, f3[g3]), a4[d3] = !(c4[d3] = f3[g3]);
          }) : function(a4) {
            return e3(a4, 0, c3);
          }) : e3;
        } }, pseudos: { not: ia2(function(a3) {
          var b3 = [], c3 = [], d3 = h2(a3.replace(P2, "$1"));
          return d3[u2] ? ia2(function(a4, b4, c4, e3) {
            var f3, g3 = d3(a4, null, e3, []), h3 = a4.length;
            while (h3--) (f3 = g3[h3]) && (a4[h3] = !(b4[h3] = f3));
          }) : function(a4, e3, f3) {
            return b3[0] = a4, d3(b3, null, f3, c3), b3[0] = null, !c3.pop();
          };
        }), has: ia2(function(a3) {
          return function(b3) {
            return ga2(a3, b3).length > 0;
          };
        }), contains: ia2(function(a3) {
          return a3 = a3.replace(_2, aa2), function(b3) {
            return (b3.textContent || b3.innerText || e2(b3)).indexOf(a3) > -1;
          };
        }), lang: ia2(function(a3) {
          return U2.test(a3 || "") || ga2.error("unsupported lang: " + a3), a3 = a3.replace(_2, aa2).toLowerCase(), function(b3) {
            var c3;
            do
              if (c3 = p2 ? b3.lang : b3.getAttribute("xml:lang") || b3.getAttribute("lang")) return c3 = c3.toLowerCase(), c3 === a3 || 0 === c3.indexOf(a3 + "-");
            while ((b3 = b3.parentNode) && 1 === b3.nodeType);
            return false;
          };
        }), target: function(b3) {
          var c3 = a2.location && a2.location.hash;
          return c3 && c3.slice(1) === b3.id;
        }, root: function(a3) {
          return a3 === o2;
        }, focus: function(a3) {
          return a3 === n2.activeElement && (!n2.hasFocus || n2.hasFocus()) && !!(a3.type || a3.href || ~a3.tabIndex);
        }, enabled: oa2(false), disabled: oa2(true), checked: function(a3) {
          var b3 = a3.nodeName.toLowerCase();
          return "input" === b3 && !!a3.checked || "option" === b3 && !!a3.selected;
        }, selected: function(a3) {
          return a3.parentNode && a3.parentNode.selectedIndex, a3.selected === true;
        }, empty: function(a3) {
          for (a3 = a3.firstChild; a3; a3 = a3.nextSibling) if (a3.nodeType < 6) return false;
          return true;
        }, parent: function(a3) {
          return !d2.pseudos.empty(a3);
        }, header: function(a3) {
          return X2.test(a3.nodeName);
        }, input: function(a3) {
          return W2.test(a3.nodeName);
        }, button: function(a3) {
          var b3 = a3.nodeName.toLowerCase();
          return "input" === b3 && "button" === a3.type || "button" === b3;
        }, text: function(a3) {
          var b3;
          return "input" === a3.nodeName.toLowerCase() && "text" === a3.type && (null == (b3 = a3.getAttribute("type")) || "text" === b3.toLowerCase());
        }, first: pa2(function() {
          return [0];
        }), last: pa2(function(a3, b3) {
          return [b3 - 1];
        }), eq: pa2(function(a3, b3, c3) {
          return [c3 < 0 ? c3 + b3 : c3];
        }), even: pa2(function(a3, b3) {
          for (var c3 = 0; c3 < b3; c3 += 2) a3.push(c3);
          return a3;
        }), odd: pa2(function(a3, b3) {
          for (var c3 = 1; c3 < b3; c3 += 2) a3.push(c3);
          return a3;
        }), lt: pa2(function(a3, b3, c3) {
          for (var d3 = c3 < 0 ? c3 + b3 : c3; --d3 >= 0; ) a3.push(d3);
          return a3;
        }), gt: pa2(function(a3, b3, c3) {
          for (var d3 = c3 < 0 ? c3 + b3 : c3; ++d3 < b3; ) a3.push(d3);
          return a3;
        }) } }, d2.pseudos.nth = d2.pseudos.eq;
        for (b2 in { radio: true, checkbox: true, file: true, password: true, image: true }) d2.pseudos[b2] = ma2(b2);
        for (b2 in { submit: true, reset: true }) d2.pseudos[b2] = na2(b2);
        function ra2() {
        }
        ra2.prototype = d2.filters = d2.pseudos, d2.setFilters = new ra2(), g2 = ga2.tokenize = function(a3, b3) {
          var c3, e3, f3, g3, h3, i3, j3, k3 = z2[a3 + " "];
          if (k3) return b3 ? 0 : k3.slice(0);
          h3 = a3, i3 = [], j3 = d2.preFilter;
          while (h3) {
            c3 && !(e3 = Q2.exec(h3)) || (e3 && (h3 = h3.slice(e3[0].length) || h3), i3.push(f3 = [])), c3 = false, (e3 = R2.exec(h3)) && (c3 = e3.shift(), f3.push({ value: c3, type: e3[0].replace(P2, " ") }), h3 = h3.slice(c3.length));
            for (g3 in d2.filter) !(e3 = V2[g3].exec(h3)) || j3[g3] && !(e3 = j3[g3](e3)) || (c3 = e3.shift(), f3.push({ value: c3, type: g3, matches: e3 }), h3 = h3.slice(c3.length));
            if (!c3) break;
          }
          return b3 ? h3.length : h3 ? ga2.error(a3) : z2(a3, i3).slice(0);
        };
        function sa2(a3) {
          for (var b3 = 0, c3 = a3.length, d3 = ""; b3 < c3; b3++) d3 += a3[b3].value;
          return d3;
        }
        function ta2(a3, b3, c3) {
          var d3 = b3.dir, e3 = b3.next, f3 = e3 || d3, g3 = c3 && "parentNode" === f3, h3 = x2++;
          return b3.first ? function(b4, c4, e4) {
            while (b4 = b4[d3]) if (1 === b4.nodeType || g3) return a3(b4, c4, e4);
            return false;
          } : function(b4, c4, i3) {
            var j3, k3, l3, m3 = [w2, h3];
            if (i3) {
              while (b4 = b4[d3]) if ((1 === b4.nodeType || g3) && a3(b4, c4, i3)) return true;
            } else while (b4 = b4[d3]) if (1 === b4.nodeType || g3) if (l3 = b4[u2] || (b4[u2] = {}), k3 = l3[b4.uniqueID] || (l3[b4.uniqueID] = {}), e3 && e3 === b4.nodeName.toLowerCase()) b4 = b4[d3] || b4;
            else {
              if ((j3 = k3[f3]) && j3[0] === w2 && j3[1] === h3) return m3[2] = j3[2];
              if (k3[f3] = m3, m3[2] = a3(b4, c4, i3)) return true;
            }
            return false;
          };
        }
        function ua2(a3) {
          return a3.length > 1 ? function(b3, c3, d3) {
            var e3 = a3.length;
            while (e3--) if (!a3[e3](b3, c3, d3)) return false;
            return true;
          } : a3[0];
        }
        function va2(a3, b3, c3) {
          for (var d3 = 0, e3 = b3.length; d3 < e3; d3++) ga2(a3, b3[d3], c3);
          return c3;
        }
        function wa2(a3, b3, c3, d3, e3) {
          for (var f3, g3 = [], h3 = 0, i3 = a3.length, j3 = null != b3; h3 < i3; h3++) (f3 = a3[h3]) && (c3 && !c3(f3, d3, e3) || (g3.push(f3), j3 && b3.push(h3)));
          return g3;
        }
        function xa2(a3, b3, c3, d3, e3, f3) {
          return d3 && !d3[u2] && (d3 = xa2(d3)), e3 && !e3[u2] && (e3 = xa2(e3, f3)), ia2(function(f4, g3, h3, i3) {
            var j3, k3, l3, m3 = [], n3 = [], o3 = g3.length, p3 = f4 || va2(b3 || "*", h3.nodeType ? [h3] : h3, []), q3 = !a3 || !f4 && b3 ? p3 : wa2(p3, m3, a3, h3, i3), r3 = c3 ? e3 || (f4 ? a3 : o3 || d3) ? [] : g3 : q3;
            if (c3 && c3(q3, r3, h3, i3), d3) {
              j3 = wa2(r3, n3), d3(j3, [], h3, i3), k3 = j3.length;
              while (k3--) (l3 = j3[k3]) && (r3[n3[k3]] = !(q3[n3[k3]] = l3));
            }
            if (f4) {
              if (e3 || a3) {
                if (e3) {
                  j3 = [], k3 = r3.length;
                  while (k3--) (l3 = r3[k3]) && j3.push(q3[k3] = l3);
                  e3(null, r3 = [], j3, i3);
                }
                k3 = r3.length;
                while (k3--) (l3 = r3[k3]) && (j3 = e3 ? I2(f4, l3) : m3[k3]) > -1 && (f4[j3] = !(g3[j3] = l3));
              }
            } else r3 = wa2(r3 === g3 ? r3.splice(o3, r3.length) : r3), e3 ? e3(null, g3, r3, i3) : G2.apply(g3, r3);
          });
        }
        function ya2(a3) {
          for (var b3, c3, e3, f3 = a3.length, g3 = d2.relative[a3[0].type], h3 = g3 || d2.relative[" "], i3 = g3 ? 1 : 0, k3 = ta2(function(a4) {
            return a4 === b3;
          }, h3, true), l3 = ta2(function(a4) {
            return I2(b3, a4) > -1;
          }, h3, true), m3 = [function(a4, c4, d3) {
            var e4 = !g3 && (d3 || c4 !== j2) || ((b3 = c4).nodeType ? k3(a4, c4, d3) : l3(a4, c4, d3));
            return b3 = null, e4;
          }]; i3 < f3; i3++) if (c3 = d2.relative[a3[i3].type]) m3 = [ta2(ua2(m3), c3)];
          else {
            if (c3 = d2.filter[a3[i3].type].apply(null, a3[i3].matches), c3[u2]) {
              for (e3 = ++i3; e3 < f3; e3++) if (d2.relative[a3[e3].type]) break;
              return xa2(i3 > 1 && ua2(m3), i3 > 1 && sa2(a3.slice(0, i3 - 1).concat({ value: " " === a3[i3 - 2].type ? "*" : "" })).replace(P2, "$1"), c3, i3 < e3 && ya2(a3.slice(i3, e3)), e3 < f3 && ya2(a3 = a3.slice(e3)), e3 < f3 && sa2(a3));
            }
            m3.push(c3);
          }
          return ua2(m3);
        }
        function za2(a3, b3) {
          var c3 = b3.length > 0, e3 = a3.length > 0, f3 = function(f4, g3, h3, i3, k3) {
            var l3, o3, q3, r3 = 0, s3 = "0", t3 = f4 && [], u3 = [], v3 = j2, x3 = f4 || e3 && d2.find.TAG("*", k3), y3 = w2 += null == v3 ? 1 : Math.random() || 0.1, z3 = x3.length;
            for (k3 && (j2 = g3 === n2 || g3 || k3); s3 !== z3 && null != (l3 = x3[s3]); s3++) {
              if (e3 && l3) {
                o3 = 0, g3 || l3.ownerDocument === n2 || (m2(l3), h3 = !p2);
                while (q3 = a3[o3++]) if (q3(l3, g3 || n2, h3)) {
                  i3.push(l3);
                  break;
                }
                k3 && (w2 = y3);
              }
              c3 && ((l3 = !q3 && l3) && r3--, f4 && t3.push(l3));
            }
            if (r3 += s3, c3 && s3 !== r3) {
              o3 = 0;
              while (q3 = b3[o3++]) q3(t3, u3, g3, h3);
              if (f4) {
                if (r3 > 0) while (s3--) t3[s3] || u3[s3] || (u3[s3] = E2.call(i3));
                u3 = wa2(u3);
              }
              G2.apply(i3, u3), k3 && !f4 && u3.length > 0 && r3 + b3.length > 1 && ga2.uniqueSort(i3);
            }
            return k3 && (w2 = y3, j2 = v3), t3;
          };
          return c3 ? ia2(f3) : f3;
        }
        return h2 = ga2.compile = function(a3, b3) {
          var c3, d3 = [], e3 = [], f3 = A2[a3 + " "];
          if (!f3) {
            b3 || (b3 = g2(a3)), c3 = b3.length;
            while (c3--) f3 = ya2(b3[c3]), f3[u2] ? d3.push(f3) : e3.push(f3);
            f3 = A2(a3, za2(e3, d3)), f3.selector = a3;
          }
          return f3;
        }, i2 = ga2.select = function(a3, b3, c3, e3) {
          var f3, i3, j3, k3, l3, m3 = "function" == typeof a3 && a3, n3 = !e3 && g2(a3 = m3.selector || a3);
          if (c3 = c3 || [], 1 === n3.length) {
            if (i3 = n3[0] = n3[0].slice(0), i3.length > 2 && "ID" === (j3 = i3[0]).type && 9 === b3.nodeType && p2 && d2.relative[i3[1].type]) {
              if (b3 = (d2.find.ID(j3.matches[0].replace(_2, aa2), b3) || [])[0], !b3) return c3;
              m3 && (b3 = b3.parentNode), a3 = a3.slice(i3.shift().value.length);
            }
            f3 = V2.needsContext.test(a3) ? 0 : i3.length;
            while (f3--) {
              if (j3 = i3[f3], d2.relative[k3 = j3.type]) break;
              if ((l3 = d2.find[k3]) && (e3 = l3(j3.matches[0].replace(_2, aa2), $2.test(i3[0].type) && qa2(b3.parentNode) || b3))) {
                if (i3.splice(f3, 1), a3 = e3.length && sa2(i3), !a3) return G2.apply(c3, e3), c3;
                break;
              }
            }
          }
          return (m3 || h2(a3, n3))(e3, b3, !p2, c3, !b3 || $2.test(a3) && qa2(b3.parentNode) || b3), c3;
        }, c2.sortStable = u2.split("").sort(B2).join("") === u2, c2.detectDuplicates = !!l2, m2(), c2.sortDetached = ja2(function(a3) {
          return 1 & a3.compareDocumentPosition(n2.createElement("fieldset"));
        }), ja2(function(a3) {
          return a3.innerHTML = "<a href='#'></a>", "#" === a3.firstChild.getAttribute("href");
        }) || ka2("type|href|height|width", function(a3, b3, c3) {
          if (!c3) return a3.getAttribute(b3, "type" === b3.toLowerCase() ? 1 : 2);
        }), c2.attributes && ja2(function(a3) {
          return a3.innerHTML = "<input/>", a3.firstChild.setAttribute("value", ""), "" === a3.firstChild.getAttribute("value");
        }) || ka2("value", function(a3, b3, c3) {
          if (!c3 && "input" === a3.nodeName.toLowerCase()) return a3.defaultValue;
        }), ja2(function(a3) {
          return null == a3.getAttribute("disabled");
        }) || ka2(J2, function(a3, b3, c3) {
          var d3;
          if (!c3) return a3[b3] === true ? b3.toLowerCase() : (d3 = a3.getAttributeNode(b3)) && d3.specified ? d3.value : null;
        }), ga2;
      }(a);
      r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
      var y = function(a2, b2, c2) {
        var d2 = [], e2 = void 0 !== c2;
        while ((a2 = a2[b2]) && 9 !== a2.nodeType) if (1 === a2.nodeType) {
          if (e2 && r(a2).is(c2)) break;
          d2.push(a2);
        }
        return d2;
      }, z = function(a2, b2) {
        for (var c2 = []; a2; a2 = a2.nextSibling) 1 === a2.nodeType && a2 !== b2 && c2.push(a2);
        return c2;
      }, A = r.expr.match.needsContext;
      function B(a2, b2) {
        return a2.nodeName && a2.nodeName.toLowerCase() === b2.toLowerCase();
      }
      var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D = /^.[^:#\[\.,]*$/;
      function E(a2, b2, c2) {
        return r.isFunction(b2) ? r.grep(a2, function(a3, d2) {
          return !!b2.call(a3, d2, a3) !== c2;
        }) : b2.nodeType ? r.grep(a2, function(a3) {
          return a3 === b2 !== c2;
        }) : "string" != typeof b2 ? r.grep(a2, function(a3) {
          return i.call(b2, a3) > -1 !== c2;
        }) : D.test(b2) ? r.filter(b2, a2, c2) : (b2 = r.filter(b2, a2), r.grep(a2, function(a3) {
          return i.call(b2, a3) > -1 !== c2 && 1 === a3.nodeType;
        }));
      }
      r.filter = function(a2, b2, c2) {
        var d2 = b2[0];
        return c2 && (a2 = ":not(" + a2 + ")"), 1 === b2.length && 1 === d2.nodeType ? r.find.matchesSelector(d2, a2) ? [d2] : [] : r.find.matches(a2, r.grep(b2, function(a3) {
          return 1 === a3.nodeType;
        }));
      }, r.fn.extend({ find: function(a2) {
        var b2, c2, d2 = this.length, e2 = this;
        if ("string" != typeof a2) return this.pushStack(r(a2).filter(function() {
          for (b2 = 0; b2 < d2; b2++) if (r.contains(e2[b2], this)) return true;
        }));
        for (c2 = this.pushStack([]), b2 = 0; b2 < d2; b2++) r.find(a2, e2[b2], c2);
        return d2 > 1 ? r.uniqueSort(c2) : c2;
      }, filter: function(a2) {
        return this.pushStack(E(this, a2 || [], false));
      }, not: function(a2) {
        return this.pushStack(E(this, a2 || [], true));
      }, is: function(a2) {
        return !!E(this, "string" == typeof a2 && A.test(a2) ? r(a2) : a2 || [], false).length;
      } });
      var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function(a2, b2, c2) {
        var e2, f2;
        if (!a2) return this;
        if (c2 = c2 || F, "string" == typeof a2) {
          if (e2 = "<" === a2[0] && ">" === a2[a2.length - 1] && a2.length >= 3 ? [null, a2, null] : G.exec(a2), !e2 || !e2[1] && b2) return !b2 || b2.jquery ? (b2 || c2).find(a2) : this.constructor(b2).find(a2);
          if (e2[1]) {
            if (b2 = b2 instanceof r ? b2[0] : b2, r.merge(this, r.parseHTML(e2[1], b2 && b2.nodeType ? b2.ownerDocument || b2 : d, true)), C.test(e2[1]) && r.isPlainObject(b2)) for (e2 in b2) r.isFunction(this[e2]) ? this[e2](b2[e2]) : this.attr(e2, b2[e2]);
            return this;
          }
          return f2 = d.getElementById(e2[2]), f2 && (this[0] = f2, this.length = 1), this;
        }
        return a2.nodeType ? (this[0] = a2, this.length = 1, this) : r.isFunction(a2) ? void 0 !== c2.ready ? c2.ready(a2) : a2(r) : r.makeArray(a2, this);
      };
      H.prototype = r.fn, F = r(d);
      var I = /^(?:parents|prev(?:Until|All))/, J = { children: true, contents: true, next: true, prev: true };
      r.fn.extend({ has: function(a2) {
        var b2 = r(a2, this), c2 = b2.length;
        return this.filter(function() {
          for (var a3 = 0; a3 < c2; a3++) if (r.contains(this, b2[a3])) return true;
        });
      }, closest: function(a2, b2) {
        var c2, d2 = 0, e2 = this.length, f2 = [], g2 = "string" != typeof a2 && r(a2);
        if (!A.test(a2)) {
          for (; d2 < e2; d2++) for (c2 = this[d2]; c2 && c2 !== b2; c2 = c2.parentNode) if (c2.nodeType < 11 && (g2 ? g2.index(c2) > -1 : 1 === c2.nodeType && r.find.matchesSelector(c2, a2))) {
            f2.push(c2);
            break;
          }
        }
        return this.pushStack(f2.length > 1 ? r.uniqueSort(f2) : f2);
      }, index: function(a2) {
        return a2 ? "string" == typeof a2 ? i.call(r(a2), this[0]) : i.call(this, a2.jquery ? a2[0] : a2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function(a2, b2) {
        return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a2, b2))));
      }, addBack: function(a2) {
        return this.add(null == a2 ? this.prevObject : this.prevObject.filter(a2));
      } });
      function K(a2, b2) {
        while ((a2 = a2[b2]) && 1 !== a2.nodeType) ;
        return a2;
      }
      r.each({ parent: function(a2) {
        var b2 = a2.parentNode;
        return b2 && 11 !== b2.nodeType ? b2 : null;
      }, parents: function(a2) {
        return y(a2, "parentNode");
      }, parentsUntil: function(a2, b2, c2) {
        return y(a2, "parentNode", c2);
      }, next: function(a2) {
        return K(a2, "nextSibling");
      }, prev: function(a2) {
        return K(a2, "previousSibling");
      }, nextAll: function(a2) {
        return y(a2, "nextSibling");
      }, prevAll: function(a2) {
        return y(a2, "previousSibling");
      }, nextUntil: function(a2, b2, c2) {
        return y(a2, "nextSibling", c2);
      }, prevUntil: function(a2, b2, c2) {
        return y(a2, "previousSibling", c2);
      }, siblings: function(a2) {
        return z((a2.parentNode || {}).firstChild, a2);
      }, children: function(a2) {
        return z(a2.firstChild);
      }, contents: function(a2) {
        return B(a2, "iframe") ? a2.contentDocument : (B(a2, "template") && (a2 = a2.content || a2), r.merge([], a2.childNodes));
      } }, function(a2, b2) {
        r.fn[a2] = function(c2, d2) {
          var e2 = r.map(this, b2, c2);
          return "Until" !== a2.slice(-5) && (d2 = c2), d2 && "string" == typeof d2 && (e2 = r.filter(d2, e2)), this.length > 1 && (J[a2] || r.uniqueSort(e2), I.test(a2) && e2.reverse()), this.pushStack(e2);
        };
      });
      var L = /[^\x20\t\r\n\f]+/g;
      function M(a2) {
        var b2 = {};
        return r.each(a2.match(L) || [], function(a3, c2) {
          b2[c2] = true;
        }), b2;
      }
      r.Callbacks = function(a2) {
        a2 = "string" == typeof a2 ? M(a2) : r.extend({}, a2);
        var b2, c2, d2, e2, f2 = [], g2 = [], h2 = -1, i2 = function() {
          for (e2 = e2 || a2.once, d2 = b2 = true; g2.length; h2 = -1) {
            c2 = g2.shift();
            while (++h2 < f2.length) f2[h2].apply(c2[0], c2[1]) === false && a2.stopOnFalse && (h2 = f2.length, c2 = false);
          }
          a2.memory || (c2 = false), b2 = false, e2 && (f2 = c2 ? [] : "");
        }, j2 = { add: function() {
          return f2 && (c2 && !b2 && (h2 = f2.length - 1, g2.push(c2)), function d3(b3) {
            r.each(b3, function(b4, c3) {
              r.isFunction(c3) ? a2.unique && j2.has(c3) || f2.push(c3) : c3 && c3.length && "string" !== r.type(c3) && d3(c3);
            });
          }(arguments), c2 && !b2 && i2()), this;
        }, remove: function() {
          return r.each(arguments, function(a3, b3) {
            var c3;
            while ((c3 = r.inArray(b3, f2, c3)) > -1) f2.splice(c3, 1), c3 <= h2 && h2--;
          }), this;
        }, has: function(a3) {
          return a3 ? r.inArray(a3, f2) > -1 : f2.length > 0;
        }, empty: function() {
          return f2 && (f2 = []), this;
        }, disable: function() {
          return e2 = g2 = [], f2 = c2 = "", this;
        }, disabled: function() {
          return !f2;
        }, lock: function() {
          return e2 = g2 = [], c2 || b2 || (f2 = c2 = ""), this;
        }, locked: function() {
          return !!e2;
        }, fireWith: function(a3, c3) {
          return e2 || (c3 = c3 || [], c3 = [a3, c3.slice ? c3.slice() : c3], g2.push(c3), b2 || i2()), this;
        }, fire: function() {
          return j2.fireWith(this, arguments), this;
        }, fired: function() {
          return !!d2;
        } };
        return j2;
      };
      function N(a2) {
        return a2;
      }
      function O(a2) {
        throw a2;
      }
      function P(a2, b2, c2, d2) {
        var e2;
        try {
          a2 && r.isFunction(e2 = a2.promise) ? e2.call(a2).done(b2).fail(c2) : a2 && r.isFunction(e2 = a2.then) ? e2.call(a2, b2, c2) : b2.apply(void 0, [a2].slice(d2));
        } catch (a3) {
          c2.apply(void 0, [a3]);
        }
      }
      r.extend({ Deferred: function(b2) {
        var c2 = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d2 = "pending", e2 = { state: function() {
          return d2;
        }, always: function() {
          return f2.done(arguments).fail(arguments), this;
        }, "catch": function(a2) {
          return e2.then(null, a2);
        }, pipe: function() {
          var a2 = arguments;
          return r.Deferred(function(b3) {
            r.each(c2, function(c3, d3) {
              var e3 = r.isFunction(a2[d3[4]]) && a2[d3[4]];
              f2[d3[1]](function() {
                var a3 = e3 && e3.apply(this, arguments);
                a3 && r.isFunction(a3.promise) ? a3.promise().progress(b3.notify).done(b3.resolve).fail(b3.reject) : b3[d3[0] + "With"](this, e3 ? [a3] : arguments);
              });
            }), a2 = null;
          }).promise();
        }, then: function(b3, d3, e3) {
          var f3 = 0;
          function g2(b4, c3, d4, e4) {
            return function() {
              var h2 = this, i2 = arguments, j2 = function() {
                var a2, j3;
                if (!(b4 < f3)) {
                  if (a2 = d4.apply(h2, i2), a2 === c3.promise()) throw new TypeError("Thenable self-resolution");
                  j3 = a2 && ("object" == typeof a2 || "function" == typeof a2) && a2.then, r.isFunction(j3) ? e4 ? j3.call(a2, g2(f3, c3, N, e4), g2(f3, c3, O, e4)) : (f3++, j3.call(a2, g2(f3, c3, N, e4), g2(f3, c3, O, e4), g2(f3, c3, N, c3.notifyWith))) : (d4 !== N && (h2 = void 0, i2 = [a2]), (e4 || c3.resolveWith)(h2, i2));
                }
              }, k2 = e4 ? j2 : function() {
                try {
                  j2();
                } catch (a2) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a2, k2.stackTrace), b4 + 1 >= f3 && (d4 !== O && (h2 = void 0, i2 = [a2]), c3.rejectWith(h2, i2));
                }
              };
              b4 ? k2() : (r.Deferred.getStackHook && (k2.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k2));
            };
          }
          return r.Deferred(function(a2) {
            c2[0][3].add(g2(0, a2, r.isFunction(e3) ? e3 : N, a2.notifyWith)), c2[1][3].add(g2(0, a2, r.isFunction(b3) ? b3 : N)), c2[2][3].add(g2(0, a2, r.isFunction(d3) ? d3 : O));
          }).promise();
        }, promise: function(a2) {
          return null != a2 ? r.extend(a2, e2) : e2;
        } }, f2 = {};
        return r.each(c2, function(a2, b3) {
          var g2 = b3[2], h2 = b3[5];
          e2[b3[1]] = g2.add, h2 && g2.add(function() {
            d2 = h2;
          }, c2[3 - a2][2].disable, c2[0][2].lock), g2.add(b3[3].fire), f2[b3[0]] = function() {
            return f2[b3[0] + "With"](this === f2 ? void 0 : this, arguments), this;
          }, f2[b3[0] + "With"] = g2.fireWith;
        }), e2.promise(f2), b2 && b2.call(f2, f2), f2;
      }, when: function(a2) {
        var b2 = arguments.length, c2 = b2, d2 = Array(c2), e2 = f.call(arguments), g2 = r.Deferred(), h2 = function(a3) {
          return function(c3) {
            d2[a3] = this, e2[a3] = arguments.length > 1 ? f.call(arguments) : c3, --b2 || g2.resolveWith(d2, e2);
          };
        };
        if (b2 <= 1 && (P(a2, g2.done(h2(c2)).resolve, g2.reject, !b2), "pending" === g2.state() || r.isFunction(e2[c2] && e2[c2].then))) return g2.then();
        while (c2--) P(e2[c2], h2(c2), g2.reject);
        return g2.promise();
      } });
      var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      r.Deferred.exceptionHook = function(b2, c2) {
        a.console && a.console.warn && b2 && Q.test(b2.name) && a.console.warn("jQuery.Deferred exception: " + b2.message, b2.stack, c2);
      }, r.readyException = function(b2) {
        a.setTimeout(function() {
          throw b2;
        });
      };
      var R = r.Deferred();
      r.fn.ready = function(a2) {
        return R.then(a2)["catch"](function(a3) {
          r.readyException(a3);
        }), this;
      }, r.extend({ isReady: false, readyWait: 1, ready: function(a2) {
        (a2 === true ? --r.readyWait : r.isReady) || (r.isReady = true, a2 !== true && --r.readyWait > 0 || R.resolveWith(d, [r]));
      } }), r.ready.then = R.then;
      function S() {
        d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
      }
      "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
      var T = function(a2, b2, c2, d2, e2, f2, g2) {
        var h2 = 0, i2 = a2.length, j2 = null == c2;
        if ("object" === r.type(c2)) {
          e2 = true;
          for (h2 in c2) T(a2, b2, h2, c2[h2], true, f2, g2);
        } else if (void 0 !== d2 && (e2 = true, r.isFunction(d2) || (g2 = true), j2 && (g2 ? (b2.call(a2, d2), b2 = null) : (j2 = b2, b2 = function(a3, b3, c3) {
          return j2.call(r(a3), c3);
        })), b2)) for (; h2 < i2; h2++) b2(a2[h2], c2, g2 ? d2 : d2.call(a2[h2], h2, b2(a2[h2], c2)));
        return e2 ? a2 : j2 ? b2.call(a2) : i2 ? b2(a2[0], c2) : f2;
      }, U = function(a2) {
        return 1 === a2.nodeType || 9 === a2.nodeType || !+a2.nodeType;
      };
      function V() {
        this.expando = r.expando + V.uid++;
      }
      V.uid = 1, V.prototype = { cache: function(a2) {
        var b2 = a2[this.expando];
        return b2 || (b2 = {}, U(a2) && (a2.nodeType ? a2[this.expando] = b2 : Object.defineProperty(a2, this.expando, { value: b2, configurable: true }))), b2;
      }, set: function(a2, b2, c2) {
        var d2, e2 = this.cache(a2);
        if ("string" == typeof b2) e2[r.camelCase(b2)] = c2;
        else for (d2 in b2) e2[r.camelCase(d2)] = b2[d2];
        return e2;
      }, get: function(a2, b2) {
        return void 0 === b2 ? this.cache(a2) : a2[this.expando] && a2[this.expando][r.camelCase(b2)];
      }, access: function(a2, b2, c2) {
        return void 0 === b2 || b2 && "string" == typeof b2 && void 0 === c2 ? this.get(a2, b2) : (this.set(a2, b2, c2), void 0 !== c2 ? c2 : b2);
      }, remove: function(a2, b2) {
        var c2, d2 = a2[this.expando];
        if (void 0 !== d2) {
          if (void 0 !== b2) {
            Array.isArray(b2) ? b2 = b2.map(r.camelCase) : (b2 = r.camelCase(b2), b2 = b2 in d2 ? [b2] : b2.match(L) || []), c2 = b2.length;
            while (c2--) delete d2[b2[c2]];
          }
          (void 0 === b2 || r.isEmptyObject(d2)) && (a2.nodeType ? a2[this.expando] = void 0 : delete a2[this.expando]);
        }
      }, hasData: function(a2) {
        var b2 = a2[this.expando];
        return void 0 !== b2 && !r.isEmptyObject(b2);
      } };
      var W = new V(), X = new V(), Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;
      function $(a2) {
        return "true" === a2 || "false" !== a2 && ("null" === a2 ? null : a2 === +a2 + "" ? +a2 : Y.test(a2) ? JSON.parse(a2) : a2);
      }
      function _(a2, b2, c2) {
        var d2;
        if (void 0 === c2 && 1 === a2.nodeType) if (d2 = "data-" + b2.replace(Z, "-$&").toLowerCase(), c2 = a2.getAttribute(d2), "string" == typeof c2) {
          try {
            c2 = $(c2);
          } catch (e2) {
          }
          X.set(a2, b2, c2);
        } else c2 = void 0;
        return c2;
      }
      r.extend({ hasData: function(a2) {
        return X.hasData(a2) || W.hasData(a2);
      }, data: function(a2, b2, c2) {
        return X.access(a2, b2, c2);
      }, removeData: function(a2, b2) {
        X.remove(a2, b2);
      }, _data: function(a2, b2, c2) {
        return W.access(a2, b2, c2);
      }, _removeData: function(a2, b2) {
        W.remove(a2, b2);
      } }), r.fn.extend({ data: function(a2, b2) {
        var c2, d2, e2, f2 = this[0], g2 = f2 && f2.attributes;
        if (void 0 === a2) {
          if (this.length && (e2 = X.get(f2), 1 === f2.nodeType && !W.get(f2, "hasDataAttrs"))) {
            c2 = g2.length;
            while (c2--) g2[c2] && (d2 = g2[c2].name, 0 === d2.indexOf("data-") && (d2 = r.camelCase(d2.slice(5)), _(f2, d2, e2[d2])));
            W.set(f2, "hasDataAttrs", true);
          }
          return e2;
        }
        return "object" == typeof a2 ? this.each(function() {
          X.set(this, a2);
        }) : T(this, function(b3) {
          var c3;
          if (f2 && void 0 === b3) {
            if (c3 = X.get(f2, a2), void 0 !== c3) return c3;
            if (c3 = _(f2, a2), void 0 !== c3) return c3;
          } else this.each(function() {
            X.set(this, a2, b3);
          });
        }, null, b2, arguments.length > 1, null, true);
      }, removeData: function(a2) {
        return this.each(function() {
          X.remove(this, a2);
        });
      } }), r.extend({ queue: function(a2, b2, c2) {
        var d2;
        if (a2) return b2 = (b2 || "fx") + "queue", d2 = W.get(a2, b2), c2 && (!d2 || Array.isArray(c2) ? d2 = W.access(a2, b2, r.makeArray(c2)) : d2.push(c2)), d2 || [];
      }, dequeue: function(a2, b2) {
        b2 = b2 || "fx";
        var c2 = r.queue(a2, b2), d2 = c2.length, e2 = c2.shift(), f2 = r._queueHooks(a2, b2), g2 = function() {
          r.dequeue(a2, b2);
        };
        "inprogress" === e2 && (e2 = c2.shift(), d2--), e2 && ("fx" === b2 && c2.unshift("inprogress"), delete f2.stop, e2.call(a2, g2, f2)), !d2 && f2 && f2.empty.fire();
      }, _queueHooks: function(a2, b2) {
        var c2 = b2 + "queueHooks";
        return W.get(a2, c2) || W.access(a2, c2, { empty: r.Callbacks("once memory").add(function() {
          W.remove(a2, [b2 + "queue", c2]);
        }) });
      } }), r.fn.extend({ queue: function(a2, b2) {
        var c2 = 2;
        return "string" != typeof a2 && (b2 = a2, a2 = "fx", c2--), arguments.length < c2 ? r.queue(this[0], a2) : void 0 === b2 ? this : this.each(function() {
          var c3 = r.queue(this, a2, b2);
          r._queueHooks(this, a2), "fx" === a2 && "inprogress" !== c3[0] && r.dequeue(this, a2);
        });
      }, dequeue: function(a2) {
        return this.each(function() {
          r.dequeue(this, a2);
        });
      }, clearQueue: function(a2) {
        return this.queue(a2 || "fx", []);
      }, promise: function(a2, b2) {
        var c2, d2 = 1, e2 = r.Deferred(), f2 = this, g2 = this.length, h2 = function() {
          --d2 || e2.resolveWith(f2, [f2]);
        };
        "string" != typeof a2 && (b2 = a2, a2 = void 0), a2 = a2 || "fx";
        while (g2--) c2 = W.get(f2[g2], a2 + "queueHooks"), c2 && c2.empty && (d2++, c2.empty.add(h2));
        return h2(), e2.promise(b2);
      } });
      var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"), ca = ["Top", "Right", "Bottom", "Left"], da = function(a2, b2) {
        return a2 = b2 || a2, "none" === a2.style.display || "" === a2.style.display && r.contains(a2.ownerDocument, a2) && "none" === r.css(a2, "display");
      }, ea = function(a2, b2, c2, d2) {
        var e2, f2, g2 = {};
        for (f2 in b2) g2[f2] = a2.style[f2], a2.style[f2] = b2[f2];
        e2 = c2.apply(a2, []);
        for (f2 in b2) a2.style[f2] = g2[f2];
        return e2;
      };
      function fa(a2, b2, c2, d2) {
        var e2, f2 = 1, g2 = 20, h2 = d2 ? function() {
          return d2.cur();
        } : function() {
          return r.css(a2, b2, "");
        }, i2 = h2(), j2 = c2 && c2[3] || (r.cssNumber[b2] ? "" : "px"), k2 = (r.cssNumber[b2] || "px" !== j2 && +i2) && ba.exec(r.css(a2, b2));
        if (k2 && k2[3] !== j2) {
          j2 = j2 || k2[3], c2 = c2 || [], k2 = +i2 || 1;
          do
            f2 = f2 || ".5", k2 /= f2, r.style(a2, b2, k2 + j2);
          while (f2 !== (f2 = h2() / i2) && 1 !== f2 && --g2);
        }
        return c2 && (k2 = +k2 || +i2 || 0, e2 = c2[1] ? k2 + (c2[1] + 1) * c2[2] : +c2[2], d2 && (d2.unit = j2, d2.start = k2, d2.end = e2)), e2;
      }
      var ga = {};
      function ha(a2) {
        var b2, c2 = a2.ownerDocument, d2 = a2.nodeName, e2 = ga[d2];
        return e2 ? e2 : (b2 = c2.body.appendChild(c2.createElement(d2)), e2 = r.css(b2, "display"), b2.parentNode.removeChild(b2), "none" === e2 && (e2 = "block"), ga[d2] = e2, e2);
      }
      function ia(a2, b2) {
        for (var c2, d2, e2 = [], f2 = 0, g2 = a2.length; f2 < g2; f2++) d2 = a2[f2], d2.style && (c2 = d2.style.display, b2 ? ("none" === c2 && (e2[f2] = W.get(d2, "display") || null, e2[f2] || (d2.style.display = "")), "" === d2.style.display && da(d2) && (e2[f2] = ha(d2))) : "none" !== c2 && (e2[f2] = "none", W.set(d2, "display", c2)));
        for (f2 = 0; f2 < g2; f2++) null != e2[f2] && (a2[f2].style.display = e2[f2]);
        return a2;
      }
      r.fn.extend({ show: function() {
        return ia(this, true);
      }, hide: function() {
        return ia(this);
      }, toggle: function(a2) {
        return "boolean" == typeof a2 ? a2 ? this.show() : this.hide() : this.each(function() {
          da(this) ? r(this).show() : r(this).hide();
        });
      } });
      var ja = /^(?:checkbox|radio)$/i, ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la = /^$|\/(?:java|ecma)script/i, ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
      ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;
      function na(a2, b2) {
        var c2;
        return c2 = "undefined" != typeof a2.getElementsByTagName ? a2.getElementsByTagName(b2 || "*") : "undefined" != typeof a2.querySelectorAll ? a2.querySelectorAll(b2 || "*") : [], void 0 === b2 || b2 && B(a2, b2) ? r.merge([a2], c2) : c2;
      }
      function oa(a2, b2) {
        for (var c2 = 0, d2 = a2.length; c2 < d2; c2++) W.set(a2[c2], "globalEval", !b2 || W.get(b2[c2], "globalEval"));
      }
      var pa = /<|&#?\w+;/;
      function qa(a2, b2, c2, d2, e2) {
        for (var f2, g2, h2, i2, j2, k2, l2 = b2.createDocumentFragment(), m2 = [], n2 = 0, o2 = a2.length; n2 < o2; n2++) if (f2 = a2[n2], f2 || 0 === f2) if ("object" === r.type(f2)) r.merge(m2, f2.nodeType ? [f2] : f2);
        else if (pa.test(f2)) {
          g2 = g2 || l2.appendChild(b2.createElement("div")), h2 = (ka.exec(f2) || ["", ""])[1].toLowerCase(), i2 = ma[h2] || ma._default, g2.innerHTML = i2[1] + r.htmlPrefilter(f2) + i2[2], k2 = i2[0];
          while (k2--) g2 = g2.lastChild;
          r.merge(m2, g2.childNodes), g2 = l2.firstChild, g2.textContent = "";
        } else m2.push(b2.createTextNode(f2));
        l2.textContent = "", n2 = 0;
        while (f2 = m2[n2++]) if (d2 && r.inArray(f2, d2) > -1) e2 && e2.push(f2);
        else if (j2 = r.contains(f2.ownerDocument, f2), g2 = na(l2.appendChild(f2), "script"), j2 && oa(g2), c2) {
          k2 = 0;
          while (f2 = g2[k2++]) la.test(f2.type || "") && c2.push(f2);
        }
        return l2;
      }
      !function() {
        var a2 = d.createDocumentFragment(), b2 = a2.appendChild(d.createElement("div")), c2 = d.createElement("input");
        c2.setAttribute("type", "radio"), c2.setAttribute("checked", "checked"), c2.setAttribute("name", "t"), b2.appendChild(c2), o.checkClone = b2.cloneNode(true).cloneNode(true).lastChild.checked, b2.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b2.cloneNode(true).lastChild.defaultValue;
      }();
      var ra = d.documentElement, sa = /^key/, ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ua = /^([^.]*)(?:\.(.+)|)/;
      function va() {
        return true;
      }
      function wa() {
        return false;
      }
      function xa() {
        try {
          return d.activeElement;
        } catch (a2) {
        }
      }
      function ya(a2, b2, c2, d2, e2, f2) {
        var g2, h2;
        if ("object" == typeof b2) {
          "string" != typeof c2 && (d2 = d2 || c2, c2 = void 0);
          for (h2 in b2) ya(a2, h2, c2, d2, b2[h2], f2);
          return a2;
        }
        if (null == d2 && null == e2 ? (e2 = c2, d2 = c2 = void 0) : null == e2 && ("string" == typeof c2 ? (e2 = d2, d2 = void 0) : (e2 = d2, d2 = c2, c2 = void 0)), e2 === false) e2 = wa;
        else if (!e2) return a2;
        return 1 === f2 && (g2 = e2, e2 = function(a3) {
          return r().off(a3), g2.apply(this, arguments);
        }, e2.guid = g2.guid || (g2.guid = r.guid++)), a2.each(function() {
          r.event.add(this, b2, e2, d2, c2);
        });
      }
      r.event = { global: {}, add: function(a2, b2, c2, d2, e2) {
        var f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2 = W.get(a2);
        if (q2) {
          c2.handler && (f2 = c2, c2 = f2.handler, e2 = f2.selector), e2 && r.find.matchesSelector(ra, e2), c2.guid || (c2.guid = r.guid++), (i2 = q2.events) || (i2 = q2.events = {}), (g2 = q2.handle) || (g2 = q2.handle = function(b3) {
            return "undefined" != typeof r && r.event.triggered !== b3.type ? r.event.dispatch.apply(a2, arguments) : void 0;
          }), b2 = (b2 || "").match(L) || [""], j2 = b2.length;
          while (j2--) h2 = ua.exec(b2[j2]) || [], n2 = p2 = h2[1], o2 = (h2[2] || "").split(".").sort(), n2 && (l2 = r.event.special[n2] || {}, n2 = (e2 ? l2.delegateType : l2.bindType) || n2, l2 = r.event.special[n2] || {}, k2 = r.extend({ type: n2, origType: p2, data: d2, handler: c2, guid: c2.guid, selector: e2, needsContext: e2 && r.expr.match.needsContext.test(e2), namespace: o2.join(".") }, f2), (m2 = i2[n2]) || (m2 = i2[n2] = [], m2.delegateCount = 0, l2.setup && l2.setup.call(a2, d2, o2, g2) !== false || a2.addEventListener && a2.addEventListener(n2, g2)), l2.add && (l2.add.call(a2, k2), k2.handler.guid || (k2.handler.guid = c2.guid)), e2 ? m2.splice(m2.delegateCount++, 0, k2) : m2.push(k2), r.event.global[n2] = true);
        }
      }, remove: function(a2, b2, c2, d2, e2) {
        var f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2 = W.hasData(a2) && W.get(a2);
        if (q2 && (i2 = q2.events)) {
          b2 = (b2 || "").match(L) || [""], j2 = b2.length;
          while (j2--) if (h2 = ua.exec(b2[j2]) || [], n2 = p2 = h2[1], o2 = (h2[2] || "").split(".").sort(), n2) {
            l2 = r.event.special[n2] || {}, n2 = (d2 ? l2.delegateType : l2.bindType) || n2, m2 = i2[n2] || [], h2 = h2[2] && new RegExp("(^|\\.)" + o2.join("\\.(?:.*\\.|)") + "(\\.|$)"), g2 = f2 = m2.length;
            while (f2--) k2 = m2[f2], !e2 && p2 !== k2.origType || c2 && c2.guid !== k2.guid || h2 && !h2.test(k2.namespace) || d2 && d2 !== k2.selector && ("**" !== d2 || !k2.selector) || (m2.splice(f2, 1), k2.selector && m2.delegateCount--, l2.remove && l2.remove.call(a2, k2));
            g2 && !m2.length && (l2.teardown && l2.teardown.call(a2, o2, q2.handle) !== false || r.removeEvent(a2, n2, q2.handle), delete i2[n2]);
          } else for (n2 in i2) r.event.remove(a2, n2 + b2[j2], c2, d2, true);
          r.isEmptyObject(i2) && W.remove(a2, "handle events");
        }
      }, dispatch: function(a2) {
        var b2 = r.event.fix(a2), c2, d2, e2, f2, g2, h2, i2 = new Array(arguments.length), j2 = (W.get(this, "events") || {})[b2.type] || [], k2 = r.event.special[b2.type] || {};
        for (i2[0] = b2, c2 = 1; c2 < arguments.length; c2++) i2[c2] = arguments[c2];
        if (b2.delegateTarget = this, !k2.preDispatch || k2.preDispatch.call(this, b2) !== false) {
          h2 = r.event.handlers.call(this, b2, j2), c2 = 0;
          while ((f2 = h2[c2++]) && !b2.isPropagationStopped()) {
            b2.currentTarget = f2.elem, d2 = 0;
            while ((g2 = f2.handlers[d2++]) && !b2.isImmediatePropagationStopped()) b2.rnamespace && !b2.rnamespace.test(g2.namespace) || (b2.handleObj = g2, b2.data = g2.data, e2 = ((r.event.special[g2.origType] || {}).handle || g2.handler).apply(f2.elem, i2), void 0 !== e2 && (b2.result = e2) === false && (b2.preventDefault(), b2.stopPropagation()));
          }
          return k2.postDispatch && k2.postDispatch.call(this, b2), b2.result;
        }
      }, handlers: function(a2, b2) {
        var c2, d2, e2, f2, g2, h2 = [], i2 = b2.delegateCount, j2 = a2.target;
        if (i2 && j2.nodeType && !("click" === a2.type && a2.button >= 1)) {
          for (; j2 !== this; j2 = j2.parentNode || this) if (1 === j2.nodeType && ("click" !== a2.type || j2.disabled !== true)) {
            for (f2 = [], g2 = {}, c2 = 0; c2 < i2; c2++) d2 = b2[c2], e2 = d2.selector + " ", void 0 === g2[e2] && (g2[e2] = d2.needsContext ? r(e2, this).index(j2) > -1 : r.find(e2, this, null, [j2]).length), g2[e2] && f2.push(d2);
            f2.length && h2.push({ elem: j2, handlers: f2 });
          }
        }
        return j2 = this, i2 < b2.length && h2.push({ elem: j2, handlers: b2.slice(i2) }), h2;
      }, addProp: function(a2, b2) {
        Object.defineProperty(r.Event.prototype, a2, { enumerable: true, configurable: true, get: r.isFunction(b2) ? function() {
          if (this.originalEvent) return b2(this.originalEvent);
        } : function() {
          if (this.originalEvent) return this.originalEvent[a2];
        }, set: function(b3) {
          Object.defineProperty(this, a2, { enumerable: true, configurable: true, writable: true, value: b3 });
        } });
      }, fix: function(a2) {
        return a2[r.expando] ? a2 : new r.Event(a2);
      }, special: { load: { noBubble: true }, focus: { trigger: function() {
        if (this !== xa() && this.focus) return this.focus(), false;
      }, delegateType: "focusin" }, blur: { trigger: function() {
        if (this === xa() && this.blur) return this.blur(), false;
      }, delegateType: "focusout" }, click: { trigger: function() {
        if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), false;
      }, _default: function(a2) {
        return B(a2.target, "a");
      } }, beforeunload: { postDispatch: function(a2) {
        void 0 !== a2.result && a2.originalEvent && (a2.originalEvent.returnValue = a2.result);
      } } } }, r.removeEvent = function(a2, b2, c2) {
        a2.removeEventListener && a2.removeEventListener(b2, c2);
      }, r.Event = function(a2, b2) {
        return this instanceof r.Event ? (a2 && a2.type ? (this.originalEvent = a2, this.type = a2.type, this.isDefaultPrevented = a2.defaultPrevented || void 0 === a2.defaultPrevented && a2.returnValue === false ? va : wa, this.target = a2.target && 3 === a2.target.nodeType ? a2.target.parentNode : a2.target, this.currentTarget = a2.currentTarget, this.relatedTarget = a2.relatedTarget) : this.type = a2, b2 && r.extend(this, b2), this.timeStamp = a2 && a2.timeStamp || r.now(), void (this[r.expando] = true)) : new r.Event(a2, b2);
      }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: false, preventDefault: function() {
        var a2 = this.originalEvent;
        this.isDefaultPrevented = va, a2 && !this.isSimulated && a2.preventDefault();
      }, stopPropagation: function() {
        var a2 = this.originalEvent;
        this.isPropagationStopped = va, a2 && !this.isSimulated && a2.stopPropagation();
      }, stopImmediatePropagation: function() {
        var a2 = this.originalEvent;
        this.isImmediatePropagationStopped = va, a2 && !this.isSimulated && a2.stopImmediatePropagation(), this.stopPropagation();
      } }, r.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: function(a2) {
        var b2 = a2.button;
        return null == a2.which && sa.test(a2.type) ? null != a2.charCode ? a2.charCode : a2.keyCode : !a2.which && void 0 !== b2 && ta.test(a2.type) ? 1 & b2 ? 1 : 2 & b2 ? 3 : 4 & b2 ? 2 : 0 : a2.which;
      } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a2, b2) {
        r.event.special[a2] = { delegateType: b2, bindType: b2, handle: function(a3) {
          var c2, d2 = this, e2 = a3.relatedTarget, f2 = a3.handleObj;
          return e2 && (e2 === d2 || r.contains(d2, e2)) || (a3.type = f2.origType, c2 = f2.handler.apply(this, arguments), a3.type = b2), c2;
        } };
      }), r.fn.extend({ on: function(a2, b2, c2, d2) {
        return ya(this, a2, b2, c2, d2);
      }, one: function(a2, b2, c2, d2) {
        return ya(this, a2, b2, c2, d2, 1);
      }, off: function(a2, b2, c2) {
        var d2, e2;
        if (a2 && a2.preventDefault && a2.handleObj) return d2 = a2.handleObj, r(a2.delegateTarget).off(d2.namespace ? d2.origType + "." + d2.namespace : d2.origType, d2.selector, d2.handler), this;
        if ("object" == typeof a2) {
          for (e2 in a2) this.off(e2, b2, a2[e2]);
          return this;
        }
        return b2 !== false && "function" != typeof b2 || (c2 = b2, b2 = void 0), c2 === false && (c2 = wa), this.each(function() {
          r.event.remove(this, a2, c2, b2);
        });
      } });
      var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/, Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Ea(a2, b2) {
        return B(a2, "table") && B(11 !== b2.nodeType ? b2 : b2.firstChild, "tr") ? r(">tbody", a2)[0] || a2 : a2;
      }
      function Fa(a2) {
        return a2.type = (null !== a2.getAttribute("type")) + "/" + a2.type, a2;
      }
      function Ga(a2) {
        var b2 = Ca.exec(a2.type);
        return b2 ? a2.type = b2[1] : a2.removeAttribute("type"), a2;
      }
      function Ha(a2, b2) {
        var c2, d2, e2, f2, g2, h2, i2, j2;
        if (1 === b2.nodeType) {
          if (W.hasData(a2) && (f2 = W.access(a2), g2 = W.set(b2, f2), j2 = f2.events)) {
            delete g2.handle, g2.events = {};
            for (e2 in j2) for (c2 = 0, d2 = j2[e2].length; c2 < d2; c2++) r.event.add(b2, e2, j2[e2][c2]);
          }
          X.hasData(a2) && (h2 = X.access(a2), i2 = r.extend({}, h2), X.set(b2, i2));
        }
      }
      function Ia(a2, b2) {
        var c2 = b2.nodeName.toLowerCase();
        "input" === c2 && ja.test(a2.type) ? b2.checked = a2.checked : "input" !== c2 && "textarea" !== c2 || (b2.defaultValue = a2.defaultValue);
      }
      function Ja(a2, b2, c2, d2) {
        b2 = g.apply([], b2);
        var e2, f2, h2, i2, j2, k2, l2 = 0, m2 = a2.length, n2 = m2 - 1, q2 = b2[0], s2 = r.isFunction(q2);
        if (s2 || m2 > 1 && "string" == typeof q2 && !o.checkClone && Ba.test(q2)) return a2.each(function(e3) {
          var f3 = a2.eq(e3);
          s2 && (b2[0] = q2.call(this, e3, f3.html())), Ja(f3, b2, c2, d2);
        });
        if (m2 && (e2 = qa(b2, a2[0].ownerDocument, false, a2, d2), f2 = e2.firstChild, 1 === e2.childNodes.length && (e2 = f2), f2 || d2)) {
          for (h2 = r.map(na(e2, "script"), Fa), i2 = h2.length; l2 < m2; l2++) j2 = e2, l2 !== n2 && (j2 = r.clone(j2, true, true), i2 && r.merge(h2, na(j2, "script"))), c2.call(a2[l2], j2, l2);
          if (i2) for (k2 = h2[h2.length - 1].ownerDocument, r.map(h2, Ga), l2 = 0; l2 < i2; l2++) j2 = h2[l2], la.test(j2.type || "") && !W.access(j2, "globalEval") && r.contains(k2, j2) && (j2.src ? r._evalUrl && r._evalUrl(j2.src) : p(j2.textContent.replace(Da, ""), k2));
        }
        return a2;
      }
      function Ka(a2, b2, c2) {
        for (var d2, e2 = b2 ? r.filter(b2, a2) : a2, f2 = 0; null != (d2 = e2[f2]); f2++) c2 || 1 !== d2.nodeType || r.cleanData(na(d2)), d2.parentNode && (c2 && r.contains(d2.ownerDocument, d2) && oa(na(d2, "script")), d2.parentNode.removeChild(d2));
        return a2;
      }
      r.extend({ htmlPrefilter: function(a2) {
        return a2.replace(za, "<$1></$2>");
      }, clone: function(a2, b2, c2) {
        var d2, e2, f2, g2, h2 = a2.cloneNode(true), i2 = r.contains(a2.ownerDocument, a2);
        if (!(o.noCloneChecked || 1 !== a2.nodeType && 11 !== a2.nodeType || r.isXMLDoc(a2))) for (g2 = na(h2), f2 = na(a2), d2 = 0, e2 = f2.length; d2 < e2; d2++) Ia(f2[d2], g2[d2]);
        if (b2) if (c2) for (f2 = f2 || na(a2), g2 = g2 || na(h2), d2 = 0, e2 = f2.length; d2 < e2; d2++) Ha(f2[d2], g2[d2]);
        else Ha(a2, h2);
        return g2 = na(h2, "script"), g2.length > 0 && oa(g2, !i2 && na(a2, "script")), h2;
      }, cleanData: function(a2) {
        for (var b2, c2, d2, e2 = r.event.special, f2 = 0; void 0 !== (c2 = a2[f2]); f2++) if (U(c2)) {
          if (b2 = c2[W.expando]) {
            if (b2.events) for (d2 in b2.events) e2[d2] ? r.event.remove(c2, d2) : r.removeEvent(c2, d2, b2.handle);
            c2[W.expando] = void 0;
          }
          c2[X.expando] && (c2[X.expando] = void 0);
        }
      } }), r.fn.extend({ detach: function(a2) {
        return Ka(this, a2, true);
      }, remove: function(a2) {
        return Ka(this, a2);
      }, text: function(a2) {
        return T(this, function(a3) {
          return void 0 === a3 ? r.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a3);
          });
        }, null, a2, arguments.length);
      }, append: function() {
        return Ja(this, arguments, function(a2) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b2 = Ea(this, a2);
            b2.appendChild(a2);
          }
        });
      }, prepend: function() {
        return Ja(this, arguments, function(a2) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b2 = Ea(this, a2);
            b2.insertBefore(a2, b2.firstChild);
          }
        });
      }, before: function() {
        return Ja(this, arguments, function(a2) {
          this.parentNode && this.parentNode.insertBefore(a2, this);
        });
      }, after: function() {
        return Ja(this, arguments, function(a2) {
          this.parentNode && this.parentNode.insertBefore(a2, this.nextSibling);
        });
      }, empty: function() {
        for (var a2, b2 = 0; null != (a2 = this[b2]); b2++) 1 === a2.nodeType && (r.cleanData(na(a2, false)), a2.textContent = "");
        return this;
      }, clone: function(a2, b2) {
        return a2 = null != a2 && a2, b2 = null == b2 ? a2 : b2, this.map(function() {
          return r.clone(this, a2, b2);
        });
      }, html: function(a2) {
        return T(this, function(a3) {
          var b2 = this[0] || {}, c2 = 0, d2 = this.length;
          if (void 0 === a3 && 1 === b2.nodeType) return b2.innerHTML;
          if ("string" == typeof a3 && !Aa.test(a3) && !ma[(ka.exec(a3) || ["", ""])[1].toLowerCase()]) {
            a3 = r.htmlPrefilter(a3);
            try {
              for (; c2 < d2; c2++) b2 = this[c2] || {}, 1 === b2.nodeType && (r.cleanData(na(b2, false)), b2.innerHTML = a3);
              b2 = 0;
            } catch (e2) {
            }
          }
          b2 && this.empty().append(a3);
        }, null, a2, arguments.length);
      }, replaceWith: function() {
        var a2 = [];
        return Ja(this, arguments, function(b2) {
          var c2 = this.parentNode;
          r.inArray(this, a2) < 0 && (r.cleanData(na(this)), c2 && c2.replaceChild(b2, this));
        }, a2);
      } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a2, b2) {
        r.fn[a2] = function(a3) {
          for (var c2, d2 = [], e2 = r(a3), f2 = e2.length - 1, g2 = 0; g2 <= f2; g2++) c2 = g2 === f2 ? this : this.clone(true), r(e2[g2])[b2](c2), h.apply(d2, c2.get());
          return this.pushStack(d2);
        };
      });
      var La = /^margin/, Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"), Na = function(b2) {
        var c2 = b2.ownerDocument.defaultView;
        return c2 && c2.opener || (c2 = a), c2.getComputedStyle(b2);
      };
      !function() {
        function b2() {
          if (i2) {
            i2.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i2.innerHTML = "", ra.appendChild(h2);
            var b3 = a.getComputedStyle(i2);
            c2 = "1%" !== b3.top, g2 = "2px" === b3.marginLeft, e2 = "4px" === b3.width, i2.style.marginRight = "50%", f2 = "4px" === b3.marginRight, ra.removeChild(h2), i2 = null;
          }
        }
        var c2, e2, f2, g2, h2 = d.createElement("div"), i2 = d.createElement("div");
        i2.style && (i2.style.backgroundClip = "content-box", i2.cloneNode(true).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i2.style.backgroundClip, h2.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h2.appendChild(i2), r.extend(o, { pixelPosition: function() {
          return b2(), c2;
        }, boxSizingReliable: function() {
          return b2(), e2;
        }, pixelMarginRight: function() {
          return b2(), f2;
        }, reliableMarginLeft: function() {
          return b2(), g2;
        } }));
      }();
      function Oa(a2, b2, c2) {
        var d2, e2, f2, g2, h2 = a2.style;
        return c2 = c2 || Na(a2), c2 && (g2 = c2.getPropertyValue(b2) || c2[b2], "" !== g2 || r.contains(a2.ownerDocument, a2) || (g2 = r.style(a2, b2)), !o.pixelMarginRight() && Ma.test(g2) && La.test(b2) && (d2 = h2.width, e2 = h2.minWidth, f2 = h2.maxWidth, h2.minWidth = h2.maxWidth = h2.width = g2, g2 = c2.width, h2.width = d2, h2.minWidth = e2, h2.maxWidth = f2)), void 0 !== g2 ? g2 + "" : g2;
      }
      function Pa(a2, b2) {
        return { get: function() {
          return a2() ? void delete this.get : (this.get = b2).apply(this, arguments);
        } };
      }
      var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = { position: "absolute", visibility: "hidden", display: "block" }, Ta = { letterSpacing: "0", fontWeight: "400" }, Ua = ["Webkit", "Moz", "ms"], Va = d.createElement("div").style;
      function Wa(a2) {
        if (a2 in Va) return a2;
        var b2 = a2[0].toUpperCase() + a2.slice(1), c2 = Ua.length;
        while (c2--) if (a2 = Ua[c2] + b2, a2 in Va) return a2;
      }
      function Xa(a2) {
        var b2 = r.cssProps[a2];
        return b2 || (b2 = r.cssProps[a2] = Wa(a2) || a2), b2;
      }
      function Ya(a2, b2, c2) {
        var d2 = ba.exec(b2);
        return d2 ? Math.max(0, d2[2] - (c2 || 0)) + (d2[3] || "px") : b2;
      }
      function Za(a2, b2, c2, d2, e2) {
        var f2, g2 = 0;
        for (f2 = c2 === (d2 ? "border" : "content") ? 4 : "width" === b2 ? 1 : 0; f2 < 4; f2 += 2) "margin" === c2 && (g2 += r.css(a2, c2 + ca[f2], true, e2)), d2 ? ("content" === c2 && (g2 -= r.css(a2, "padding" + ca[f2], true, e2)), "margin" !== c2 && (g2 -= r.css(a2, "border" + ca[f2] + "Width", true, e2))) : (g2 += r.css(a2, "padding" + ca[f2], true, e2), "padding" !== c2 && (g2 += r.css(a2, "border" + ca[f2] + "Width", true, e2)));
        return g2;
      }
      function $a(a2, b2, c2) {
        var d2, e2 = Na(a2), f2 = Oa(a2, b2, e2), g2 = "border-box" === r.css(a2, "boxSizing", false, e2);
        return Ma.test(f2) ? f2 : (d2 = g2 && (o.boxSizingReliable() || f2 === a2.style[b2]), "auto" === f2 && (f2 = a2["offset" + b2[0].toUpperCase() + b2.slice(1)]), f2 = parseFloat(f2) || 0, f2 + Za(a2, b2, c2 || (g2 ? "border" : "content"), d2, e2) + "px");
      }
      r.extend({ cssHooks: { opacity: { get: function(a2, b2) {
        if (b2) {
          var c2 = Oa(a2, "opacity");
          return "" === c2 ? "1" : c2;
        }
      } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: { "float": "cssFloat" }, style: function(a2, b2, c2, d2) {
        if (a2 && 3 !== a2.nodeType && 8 !== a2.nodeType && a2.style) {
          var e2, f2, g2, h2 = r.camelCase(b2), i2 = Ra.test(b2), j2 = a2.style;
          return i2 || (b2 = Xa(h2)), g2 = r.cssHooks[b2] || r.cssHooks[h2], void 0 === c2 ? g2 && "get" in g2 && void 0 !== (e2 = g2.get(a2, false, d2)) ? e2 : j2[b2] : (f2 = typeof c2, "string" === f2 && (e2 = ba.exec(c2)) && e2[1] && (c2 = fa(a2, b2, e2), f2 = "number"), null != c2 && c2 === c2 && ("number" === f2 && (c2 += e2 && e2[3] || (r.cssNumber[h2] ? "" : "px")), o.clearCloneStyle || "" !== c2 || 0 !== b2.indexOf("background") || (j2[b2] = "inherit"), g2 && "set" in g2 && void 0 === (c2 = g2.set(a2, c2, d2)) || (i2 ? j2.setProperty(b2, c2) : j2[b2] = c2)), void 0);
        }
      }, css: function(a2, b2, c2, d2) {
        var e2, f2, g2, h2 = r.camelCase(b2), i2 = Ra.test(b2);
        return i2 || (b2 = Xa(h2)), g2 = r.cssHooks[b2] || r.cssHooks[h2], g2 && "get" in g2 && (e2 = g2.get(a2, true, c2)), void 0 === e2 && (e2 = Oa(a2, b2, d2)), "normal" === e2 && b2 in Ta && (e2 = Ta[b2]), "" === c2 || c2 ? (f2 = parseFloat(e2), c2 === true || isFinite(f2) ? f2 || 0 : e2) : e2;
      } }), r.each(["height", "width"], function(a2, b2) {
        r.cssHooks[b2] = { get: function(a3, c2, d2) {
          if (c2) return !Qa.test(r.css(a3, "display")) || a3.getClientRects().length && a3.getBoundingClientRect().width ? $a(a3, b2, d2) : ea(a3, Sa, function() {
            return $a(a3, b2, d2);
          });
        }, set: function(a3, c2, d2) {
          var e2, f2 = d2 && Na(a3), g2 = d2 && Za(a3, b2, d2, "border-box" === r.css(a3, "boxSizing", false, f2), f2);
          return g2 && (e2 = ba.exec(c2)) && "px" !== (e2[3] || "px") && (a3.style[b2] = c2, c2 = r.css(a3, b2)), Ya(a3, c2, g2);
        } };
      }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a2, b2) {
        if (b2) return (parseFloat(Oa(a2, "marginLeft")) || a2.getBoundingClientRect().left - ea(a2, { marginLeft: 0 }, function() {
          return a2.getBoundingClientRect().left;
        })) + "px";
      }), r.each({ margin: "", padding: "", border: "Width" }, function(a2, b2) {
        r.cssHooks[a2 + b2] = { expand: function(c2) {
          for (var d2 = 0, e2 = {}, f2 = "string" == typeof c2 ? c2.split(" ") : [c2]; d2 < 4; d2++) e2[a2 + ca[d2] + b2] = f2[d2] || f2[d2 - 2] || f2[0];
          return e2;
        } }, La.test(a2) || (r.cssHooks[a2 + b2].set = Ya);
      }), r.fn.extend({ css: function(a2, b2) {
        return T(this, function(a3, b3, c2) {
          var d2, e2, f2 = {}, g2 = 0;
          if (Array.isArray(b3)) {
            for (d2 = Na(a3), e2 = b3.length; g2 < e2; g2++) f2[b3[g2]] = r.css(a3, b3[g2], false, d2);
            return f2;
          }
          return void 0 !== c2 ? r.style(a3, b3, c2) : r.css(a3, b3);
        }, a2, b2, arguments.length > 1);
      } });
      function _a(a2, b2, c2, d2, e2) {
        return new _a.prototype.init(a2, b2, c2, d2, e2);
      }
      r.Tween = _a, _a.prototype = { constructor: _a, init: function(a2, b2, c2, d2, e2, f2) {
        this.elem = a2, this.prop = c2, this.easing = e2 || r.easing._default, this.options = b2, this.start = this.now = this.cur(), this.end = d2, this.unit = f2 || (r.cssNumber[c2] ? "" : "px");
      }, cur: function() {
        var a2 = _a.propHooks[this.prop];
        return a2 && a2.get ? a2.get(this) : _a.propHooks._default.get(this);
      }, run: function(a2) {
        var b2, c2 = _a.propHooks[this.prop];
        return this.options.duration ? this.pos = b2 = r.easing[this.easing](a2, this.options.duration * a2, 0, 1, this.options.duration) : this.pos = b2 = a2, this.now = (this.end - this.start) * b2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c2 && c2.set ? c2.set(this) : _a.propHooks._default.set(this), this;
      } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function(a2) {
        var b2;
        return 1 !== a2.elem.nodeType || null != a2.elem[a2.prop] && null == a2.elem.style[a2.prop] ? a2.elem[a2.prop] : (b2 = r.css(a2.elem, a2.prop, ""), b2 && "auto" !== b2 ? b2 : 0);
      }, set: function(a2) {
        r.fx.step[a2.prop] ? r.fx.step[a2.prop](a2) : 1 !== a2.elem.nodeType || null == a2.elem.style[r.cssProps[a2.prop]] && !r.cssHooks[a2.prop] ? a2.elem[a2.prop] = a2.now : r.style(a2.elem, a2.prop, a2.now + a2.unit);
      } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function(a2) {
        a2.elem.nodeType && a2.elem.parentNode && (a2.elem[a2.prop] = a2.now);
      } }, r.easing = { linear: function(a2) {
        return a2;
      }, swing: function(a2) {
        return 0.5 - Math.cos(a2 * Math.PI) / 2;
      }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};
      var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/;
      function eb() {
        bb && (d.hidden === false && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
      }
      function fb() {
        return a.setTimeout(function() {
          ab = void 0;
        }), ab = r.now();
      }
      function gb(a2, b2) {
        var c2, d2 = 0, e2 = { height: a2 };
        for (b2 = b2 ? 1 : 0; d2 < 4; d2 += 2 - b2) c2 = ca[d2], e2["margin" + c2] = e2["padding" + c2] = a2;
        return b2 && (e2.opacity = e2.width = a2), e2;
      }
      function hb(a2, b2, c2) {
        for (var d2, e2 = (kb.tweeners[b2] || []).concat(kb.tweeners["*"]), f2 = 0, g2 = e2.length; f2 < g2; f2++) if (d2 = e2[f2].call(c2, b2, a2)) return d2;
      }
      function ib(a2, b2, c2) {
        var d2, e2, f2, g2, h2, i2, j2, k2, l2 = "width" in b2 || "height" in b2, m2 = this, n2 = {}, o2 = a2.style, p2 = a2.nodeType && da(a2), q2 = W.get(a2, "fxshow");
        c2.queue || (g2 = r._queueHooks(a2, "fx"), null == g2.unqueued && (g2.unqueued = 0, h2 = g2.empty.fire, g2.empty.fire = function() {
          g2.unqueued || h2();
        }), g2.unqueued++, m2.always(function() {
          m2.always(function() {
            g2.unqueued--, r.queue(a2, "fx").length || g2.empty.fire();
          });
        }));
        for (d2 in b2) if (e2 = b2[d2], cb.test(e2)) {
          if (delete b2[d2], f2 = f2 || "toggle" === e2, e2 === (p2 ? "hide" : "show")) {
            if ("show" !== e2 || !q2 || void 0 === q2[d2]) continue;
            p2 = true;
          }
          n2[d2] = q2 && q2[d2] || r.style(a2, d2);
        }
        if (i2 = !r.isEmptyObject(b2), i2 || !r.isEmptyObject(n2)) {
          l2 && 1 === a2.nodeType && (c2.overflow = [o2.overflow, o2.overflowX, o2.overflowY], j2 = q2 && q2.display, null == j2 && (j2 = W.get(a2, "display")), k2 = r.css(a2, "display"), "none" === k2 && (j2 ? k2 = j2 : (ia([a2], true), j2 = a2.style.display || j2, k2 = r.css(a2, "display"), ia([a2]))), ("inline" === k2 || "inline-block" === k2 && null != j2) && "none" === r.css(a2, "float") && (i2 || (m2.done(function() {
            o2.display = j2;
          }), null == j2 && (k2 = o2.display, j2 = "none" === k2 ? "" : k2)), o2.display = "inline-block")), c2.overflow && (o2.overflow = "hidden", m2.always(function() {
            o2.overflow = c2.overflow[0], o2.overflowX = c2.overflow[1], o2.overflowY = c2.overflow[2];
          })), i2 = false;
          for (d2 in n2) i2 || (q2 ? "hidden" in q2 && (p2 = q2.hidden) : q2 = W.access(a2, "fxshow", { display: j2 }), f2 && (q2.hidden = !p2), p2 && ia([a2], true), m2.done(function() {
            p2 || ia([a2]), W.remove(a2, "fxshow");
            for (d2 in n2) r.style(a2, d2, n2[d2]);
          })), i2 = hb(p2 ? q2[d2] : 0, d2, m2), d2 in q2 || (q2[d2] = i2.start, p2 && (i2.end = i2.start, i2.start = 0));
        }
      }
      function jb(a2, b2) {
        var c2, d2, e2, f2, g2;
        for (c2 in a2) if (d2 = r.camelCase(c2), e2 = b2[d2], f2 = a2[c2], Array.isArray(f2) && (e2 = f2[1], f2 = a2[c2] = f2[0]), c2 !== d2 && (a2[d2] = f2, delete a2[c2]), g2 = r.cssHooks[d2], g2 && "expand" in g2) {
          f2 = g2.expand(f2), delete a2[d2];
          for (c2 in f2) c2 in a2 || (a2[c2] = f2[c2], b2[c2] = e2);
        } else b2[d2] = e2;
      }
      function kb(a2, b2, c2) {
        var d2, e2, f2 = 0, g2 = kb.prefilters.length, h2 = r.Deferred().always(function() {
          delete i2.elem;
        }), i2 = function() {
          if (e2) return false;
          for (var b3 = ab || fb(), c3 = Math.max(0, j2.startTime + j2.duration - b3), d3 = c3 / j2.duration || 0, f3 = 1 - d3, g3 = 0, i3 = j2.tweens.length; g3 < i3; g3++) j2.tweens[g3].run(f3);
          return h2.notifyWith(a2, [j2, f3, c3]), f3 < 1 && i3 ? c3 : (i3 || h2.notifyWith(a2, [j2, 1, 0]), h2.resolveWith(a2, [j2]), false);
        }, j2 = h2.promise({ elem: a2, props: r.extend({}, b2), opts: r.extend(true, { specialEasing: {}, easing: r.easing._default }, c2), originalProperties: b2, originalOptions: c2, startTime: ab || fb(), duration: c2.duration, tweens: [], createTween: function(b3, c3) {
          var d3 = r.Tween(a2, j2.opts, b3, c3, j2.opts.specialEasing[b3] || j2.opts.easing);
          return j2.tweens.push(d3), d3;
        }, stop: function(b3) {
          var c3 = 0, d3 = b3 ? j2.tweens.length : 0;
          if (e2) return this;
          for (e2 = true; c3 < d3; c3++) j2.tweens[c3].run(1);
          return b3 ? (h2.notifyWith(a2, [j2, 1, 0]), h2.resolveWith(a2, [j2, b3])) : h2.rejectWith(a2, [j2, b3]), this;
        } }), k2 = j2.props;
        for (jb(k2, j2.opts.specialEasing); f2 < g2; f2++) if (d2 = kb.prefilters[f2].call(j2, a2, k2, j2.opts)) return r.isFunction(d2.stop) && (r._queueHooks(j2.elem, j2.opts.queue).stop = r.proxy(d2.stop, d2)), d2;
        return r.map(k2, hb, j2), r.isFunction(j2.opts.start) && j2.opts.start.call(a2, j2), j2.progress(j2.opts.progress).done(j2.opts.done, j2.opts.complete).fail(j2.opts.fail).always(j2.opts.always), r.fx.timer(r.extend(i2, { elem: a2, anim: j2, queue: j2.opts.queue })), j2;
      }
      r.Animation = r.extend(kb, { tweeners: { "*": [function(a2, b2) {
        var c2 = this.createTween(a2, b2);
        return fa(c2.elem, a2, ba.exec(b2), c2), c2;
      }] }, tweener: function(a2, b2) {
        r.isFunction(a2) ? (b2 = a2, a2 = ["*"]) : a2 = a2.match(L);
        for (var c2, d2 = 0, e2 = a2.length; d2 < e2; d2++) c2 = a2[d2], kb.tweeners[c2] = kb.tweeners[c2] || [], kb.tweeners[c2].unshift(b2);
      }, prefilters: [ib], prefilter: function(a2, b2) {
        b2 ? kb.prefilters.unshift(a2) : kb.prefilters.push(a2);
      } }), r.speed = function(a2, b2, c2) {
        var d2 = a2 && "object" == typeof a2 ? r.extend({}, a2) : { complete: c2 || !c2 && b2 || r.isFunction(a2) && a2, duration: a2, easing: c2 && b2 || b2 && !r.isFunction(b2) && b2 };
        return r.fx.off ? d2.duration = 0 : "number" != typeof d2.duration && (d2.duration in r.fx.speeds ? d2.duration = r.fx.speeds[d2.duration] : d2.duration = r.fx.speeds._default), null != d2.queue && d2.queue !== true || (d2.queue = "fx"), d2.old = d2.complete, d2.complete = function() {
          r.isFunction(d2.old) && d2.old.call(this), d2.queue && r.dequeue(this, d2.queue);
        }, d2;
      }, r.fn.extend({ fadeTo: function(a2, b2, c2, d2) {
        return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b2 }, a2, c2, d2);
      }, animate: function(a2, b2, c2, d2) {
        var e2 = r.isEmptyObject(a2), f2 = r.speed(b2, c2, d2), g2 = function() {
          var b3 = kb(this, r.extend({}, a2), f2);
          (e2 || W.get(this, "finish")) && b3.stop(true);
        };
        return g2.finish = g2, e2 || f2.queue === false ? this.each(g2) : this.queue(f2.queue, g2);
      }, stop: function(a2, b2, c2) {
        var d2 = function(a3) {
          var b3 = a3.stop;
          delete a3.stop, b3(c2);
        };
        return "string" != typeof a2 && (c2 = b2, b2 = a2, a2 = void 0), b2 && a2 !== false && this.queue(a2 || "fx", []), this.each(function() {
          var b3 = true, e2 = null != a2 && a2 + "queueHooks", f2 = r.timers, g2 = W.get(this);
          if (e2) g2[e2] && g2[e2].stop && d2(g2[e2]);
          else for (e2 in g2) g2[e2] && g2[e2].stop && db.test(e2) && d2(g2[e2]);
          for (e2 = f2.length; e2--; ) f2[e2].elem !== this || null != a2 && f2[e2].queue !== a2 || (f2[e2].anim.stop(c2), b3 = false, f2.splice(e2, 1));
          !b3 && c2 || r.dequeue(this, a2);
        });
      }, finish: function(a2) {
        return a2 !== false && (a2 = a2 || "fx"), this.each(function() {
          var b2, c2 = W.get(this), d2 = c2[a2 + "queue"], e2 = c2[a2 + "queueHooks"], f2 = r.timers, g2 = d2 ? d2.length : 0;
          for (c2.finish = true, r.queue(this, a2, []), e2 && e2.stop && e2.stop.call(this, true), b2 = f2.length; b2--; ) f2[b2].elem === this && f2[b2].queue === a2 && (f2[b2].anim.stop(true), f2.splice(b2, 1));
          for (b2 = 0; b2 < g2; b2++) d2[b2] && d2[b2].finish && d2[b2].finish.call(this);
          delete c2.finish;
        });
      } }), r.each(["toggle", "show", "hide"], function(a2, b2) {
        var c2 = r.fn[b2];
        r.fn[b2] = function(a3, d2, e2) {
          return null == a3 || "boolean" == typeof a3 ? c2.apply(this, arguments) : this.animate(gb(b2, true), a3, d2, e2);
        };
      }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a2, b2) {
        r.fn[a2] = function(a3, c2, d2) {
          return this.animate(b2, a3, c2, d2);
        };
      }), r.timers = [], r.fx.tick = function() {
        var a2, b2 = 0, c2 = r.timers;
        for (ab = r.now(); b2 < c2.length; b2++) a2 = c2[b2], a2() || c2[b2] !== a2 || c2.splice(b2--, 1);
        c2.length || r.fx.stop(), ab = void 0;
      }, r.fx.timer = function(a2) {
        r.timers.push(a2), r.fx.start();
      }, r.fx.interval = 13, r.fx.start = function() {
        bb || (bb = true, eb());
      }, r.fx.stop = function() {
        bb = null;
      }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b2, c2) {
        return b2 = r.fx ? r.fx.speeds[b2] || b2 : b2, c2 = c2 || "fx", this.queue(c2, function(c3, d2) {
          var e2 = a.setTimeout(c3, b2);
          d2.stop = function() {
            a.clearTimeout(e2);
          };
        });
      }, function() {
        var a2 = d.createElement("input"), b2 = d.createElement("select"), c2 = b2.appendChild(d.createElement("option"));
        a2.type = "checkbox", o.checkOn = "" !== a2.value, o.optSelected = c2.selected, a2 = d.createElement("input"), a2.value = "t", a2.type = "radio", o.radioValue = "t" === a2.value;
      }();
      var lb, mb = r.expr.attrHandle;
      r.fn.extend({ attr: function(a2, b2) {
        return T(this, r.attr, a2, b2, arguments.length > 1);
      }, removeAttr: function(a2) {
        return this.each(function() {
          r.removeAttr(this, a2);
        });
      } }), r.extend({ attr: function(a2, b2, c2) {
        var d2, e2, f2 = a2.nodeType;
        if (3 !== f2 && 8 !== f2 && 2 !== f2) return "undefined" == typeof a2.getAttribute ? r.prop(a2, b2, c2) : (1 === f2 && r.isXMLDoc(a2) || (e2 = r.attrHooks[b2.toLowerCase()] || (r.expr.match.bool.test(b2) ? lb : void 0)), void 0 !== c2 ? null === c2 ? void r.removeAttr(a2, b2) : e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : (a2.setAttribute(b2, c2 + ""), c2) : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : (d2 = r.find.attr(a2, b2), null == d2 ? void 0 : d2));
      }, attrHooks: { type: { set: function(a2, b2) {
        if (!o.radioValue && "radio" === b2 && B(a2, "input")) {
          var c2 = a2.value;
          return a2.setAttribute("type", b2), c2 && (a2.value = c2), b2;
        }
      } } }, removeAttr: function(a2, b2) {
        var c2, d2 = 0, e2 = b2 && b2.match(L);
        if (e2 && 1 === a2.nodeType) while (c2 = e2[d2++]) a2.removeAttribute(c2);
      } }), lb = { set: function(a2, b2, c2) {
        return b2 === false ? r.removeAttr(a2, c2) : a2.setAttribute(c2, c2), c2;
      } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a2, b2) {
        var c2 = mb[b2] || r.find.attr;
        mb[b2] = function(a3, b3, d2) {
          var e2, f2, g2 = b3.toLowerCase();
          return d2 || (f2 = mb[g2], mb[g2] = e2, e2 = null != c2(a3, b3, d2) ? g2 : null, mb[g2] = f2), e2;
        };
      });
      var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i;
      r.fn.extend({ prop: function(a2, b2) {
        return T(this, r.prop, a2, b2, arguments.length > 1);
      }, removeProp: function(a2) {
        return this.each(function() {
          delete this[r.propFix[a2] || a2];
        });
      } }), r.extend({ prop: function(a2, b2, c2) {
        var d2, e2, f2 = a2.nodeType;
        if (3 !== f2 && 8 !== f2 && 2 !== f2) return 1 === f2 && r.isXMLDoc(a2) || (b2 = r.propFix[b2] || b2, e2 = r.propHooks[b2]), void 0 !== c2 ? e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : a2[b2] = c2 : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : a2[b2];
      }, propHooks: { tabIndex: { get: function(a2) {
        var b2 = r.find.attr(a2, "tabindex");
        return b2 ? parseInt(b2, 10) : nb.test(a2.nodeName) || ob.test(a2.nodeName) && a2.href ? 0 : -1;
      } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function(a2) {
        var b2 = a2.parentNode;
        return b2 && b2.parentNode && b2.parentNode.selectedIndex, null;
      }, set: function(a2) {
        var b2 = a2.parentNode;
        b2 && (b2.selectedIndex, b2.parentNode && b2.parentNode.selectedIndex);
      } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this;
      });
      function pb(a2) {
        var b2 = a2.match(L) || [];
        return b2.join(" ");
      }
      function qb(a2) {
        return a2.getAttribute && a2.getAttribute("class") || "";
      }
      r.fn.extend({ addClass: function(a2) {
        var b2, c2, d2, e2, f2, g2, h2, i2 = 0;
        if (r.isFunction(a2)) return this.each(function(b3) {
          r(this).addClass(a2.call(this, b3, qb(this)));
        });
        if ("string" == typeof a2 && a2) {
          b2 = a2.match(L) || [];
          while (c2 = this[i2++]) if (e2 = qb(c2), d2 = 1 === c2.nodeType && " " + pb(e2) + " ") {
            g2 = 0;
            while (f2 = b2[g2++]) d2.indexOf(" " + f2 + " ") < 0 && (d2 += f2 + " ");
            h2 = pb(d2), e2 !== h2 && c2.setAttribute("class", h2);
          }
        }
        return this;
      }, removeClass: function(a2) {
        var b2, c2, d2, e2, f2, g2, h2, i2 = 0;
        if (r.isFunction(a2)) return this.each(function(b3) {
          r(this).removeClass(a2.call(this, b3, qb(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a2 && a2) {
          b2 = a2.match(L) || [];
          while (c2 = this[i2++]) if (e2 = qb(c2), d2 = 1 === c2.nodeType && " " + pb(e2) + " ") {
            g2 = 0;
            while (f2 = b2[g2++]) while (d2.indexOf(" " + f2 + " ") > -1) d2 = d2.replace(" " + f2 + " ", " ");
            h2 = pb(d2), e2 !== h2 && c2.setAttribute("class", h2);
          }
        }
        return this;
      }, toggleClass: function(a2, b2) {
        var c2 = typeof a2;
        return "boolean" == typeof b2 && "string" === c2 ? b2 ? this.addClass(a2) : this.removeClass(a2) : r.isFunction(a2) ? this.each(function(c3) {
          r(this).toggleClass(a2.call(this, c3, qb(this), b2), b2);
        }) : this.each(function() {
          var b3, d2, e2, f2;
          if ("string" === c2) {
            d2 = 0, e2 = r(this), f2 = a2.match(L) || [];
            while (b3 = f2[d2++]) e2.hasClass(b3) ? e2.removeClass(b3) : e2.addClass(b3);
          } else void 0 !== a2 && "boolean" !== c2 || (b3 = qb(this), b3 && W.set(this, "__className__", b3), this.setAttribute && this.setAttribute("class", b3 || a2 === false ? "" : W.get(this, "__className__") || ""));
        });
      }, hasClass: function(a2) {
        var b2, c2, d2 = 0;
        b2 = " " + a2 + " ";
        while (c2 = this[d2++]) if (1 === c2.nodeType && (" " + pb(qb(c2)) + " ").indexOf(b2) > -1) return true;
        return false;
      } });
      var rb = /\r/g;
      r.fn.extend({ val: function(a2) {
        var b2, c2, d2, e2 = this[0];
        {
          if (arguments.length) return d2 = r.isFunction(a2), this.each(function(c3) {
            var e3;
            1 === this.nodeType && (e3 = d2 ? a2.call(this, c3, r(this).val()) : a2, null == e3 ? e3 = "" : "number" == typeof e3 ? e3 += "" : Array.isArray(e3) && (e3 = r.map(e3, function(a3) {
              return null == a3 ? "" : a3 + "";
            })), b2 = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b2 && "set" in b2 && void 0 !== b2.set(this, e3, "value") || (this.value = e3));
          });
          if (e2) return b2 = r.valHooks[e2.type] || r.valHooks[e2.nodeName.toLowerCase()], b2 && "get" in b2 && void 0 !== (c2 = b2.get(e2, "value")) ? c2 : (c2 = e2.value, "string" == typeof c2 ? c2.replace(rb, "") : null == c2 ? "" : c2);
        }
      } }), r.extend({ valHooks: { option: { get: function(a2) {
        var b2 = r.find.attr(a2, "value");
        return null != b2 ? b2 : pb(r.text(a2));
      } }, select: { get: function(a2) {
        var b2, c2, d2, e2 = a2.options, f2 = a2.selectedIndex, g2 = "select-one" === a2.type, h2 = g2 ? null : [], i2 = g2 ? f2 + 1 : e2.length;
        for (d2 = f2 < 0 ? i2 : g2 ? f2 : 0; d2 < i2; d2++) if (c2 = e2[d2], (c2.selected || d2 === f2) && !c2.disabled && (!c2.parentNode.disabled || !B(c2.parentNode, "optgroup"))) {
          if (b2 = r(c2).val(), g2) return b2;
          h2.push(b2);
        }
        return h2;
      }, set: function(a2, b2) {
        var c2, d2, e2 = a2.options, f2 = r.makeArray(b2), g2 = e2.length;
        while (g2--) d2 = e2[g2], (d2.selected = r.inArray(r.valHooks.option.get(d2), f2) > -1) && (c2 = true);
        return c2 || (a2.selectedIndex = -1), f2;
      } } } }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = { set: function(a2, b2) {
          if (Array.isArray(b2)) return a2.checked = r.inArray(r(a2).val(), b2) > -1;
        } }, o.checkOn || (r.valHooks[this].get = function(a2) {
          return null === a2.getAttribute("value") ? "on" : a2.value;
        });
      });
      var sb = /^(?:focusinfocus|focusoutblur)$/;
      r.extend(r.event, { trigger: function(b2, c2, e2, f2) {
        var g2, h2, i2, j2, k2, m2, n2, o2 = [e2 || d], p2 = l.call(b2, "type") ? b2.type : b2, q2 = l.call(b2, "namespace") ? b2.namespace.split(".") : [];
        if (h2 = i2 = e2 = e2 || d, 3 !== e2.nodeType && 8 !== e2.nodeType && !sb.test(p2 + r.event.triggered) && (p2.indexOf(".") > -1 && (q2 = p2.split("."), p2 = q2.shift(), q2.sort()), k2 = p2.indexOf(":") < 0 && "on" + p2, b2 = b2[r.expando] ? b2 : new r.Event(p2, "object" == typeof b2 && b2), b2.isTrigger = f2 ? 2 : 3, b2.namespace = q2.join("."), b2.rnamespace = b2.namespace ? new RegExp("(^|\\.)" + q2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b2.result = void 0, b2.target || (b2.target = e2), c2 = null == c2 ? [b2] : r.makeArray(c2, [b2]), n2 = r.event.special[p2] || {}, f2 || !n2.trigger || n2.trigger.apply(e2, c2) !== false)) {
          if (!f2 && !n2.noBubble && !r.isWindow(e2)) {
            for (j2 = n2.delegateType || p2, sb.test(j2 + p2) || (h2 = h2.parentNode); h2; h2 = h2.parentNode) o2.push(h2), i2 = h2;
            i2 === (e2.ownerDocument || d) && o2.push(i2.defaultView || i2.parentWindow || a);
          }
          g2 = 0;
          while ((h2 = o2[g2++]) && !b2.isPropagationStopped()) b2.type = g2 > 1 ? j2 : n2.bindType || p2, m2 = (W.get(h2, "events") || {})[b2.type] && W.get(h2, "handle"), m2 && m2.apply(h2, c2), m2 = k2 && h2[k2], m2 && m2.apply && U(h2) && (b2.result = m2.apply(h2, c2), b2.result === false && b2.preventDefault());
          return b2.type = p2, f2 || b2.isDefaultPrevented() || n2._default && n2._default.apply(o2.pop(), c2) !== false || !U(e2) || k2 && r.isFunction(e2[p2]) && !r.isWindow(e2) && (i2 = e2[k2], i2 && (e2[k2] = null), r.event.triggered = p2, e2[p2](), r.event.triggered = void 0, i2 && (e2[k2] = i2)), b2.result;
        }
      }, simulate: function(a2, b2, c2) {
        var d2 = r.extend(new r.Event(), c2, { type: a2, isSimulated: true });
        r.event.trigger(d2, null, b2);
      } }), r.fn.extend({ trigger: function(a2, b2) {
        return this.each(function() {
          r.event.trigger(a2, b2, this);
        });
      }, triggerHandler: function(a2, b2) {
        var c2 = this[0];
        if (c2) return r.event.trigger(a2, b2, c2, true);
      } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a2, b2) {
        r.fn[b2] = function(a3, c2) {
          return arguments.length > 0 ? this.on(b2, null, a3, c2) : this.trigger(b2);
        };
      }), r.fn.extend({ hover: function(a2, b2) {
        return this.mouseenter(a2).mouseleave(b2 || a2);
      } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a2, b2) {
        var c2 = function(a3) {
          r.event.simulate(b2, a3.target, r.event.fix(a3));
        };
        r.event.special[b2] = { setup: function() {
          var d2 = this.ownerDocument || this, e2 = W.access(d2, b2);
          e2 || d2.addEventListener(a2, c2, true), W.access(d2, b2, (e2 || 0) + 1);
        }, teardown: function() {
          var d2 = this.ownerDocument || this, e2 = W.access(d2, b2) - 1;
          e2 ? W.access(d2, b2, e2) : (d2.removeEventListener(a2, c2, true), W.remove(d2, b2));
        } };
      });
      var tb = a.location, ub = r.now(), vb = /\?/;
      r.parseXML = function(b2) {
        var c2;
        if (!b2 || "string" != typeof b2) return null;
        try {
          c2 = new a.DOMParser().parseFromString(b2, "text/xml");
        } catch (d2) {
          c2 = void 0;
        }
        return c2 && !c2.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b2), c2;
      };
      var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
      function Ab(a2, b2, c2, d2) {
        var e2;
        if (Array.isArray(b2)) r.each(b2, function(b3, e3) {
          c2 || wb.test(a2) ? d2(a2, e3) : Ab(a2 + "[" + ("object" == typeof e3 && null != e3 ? b3 : "") + "]", e3, c2, d2);
        });
        else if (c2 || "object" !== r.type(b2)) d2(a2, b2);
        else for (e2 in b2) Ab(a2 + "[" + e2 + "]", b2[e2], c2, d2);
      }
      r.param = function(a2, b2) {
        var c2, d2 = [], e2 = function(a3, b3) {
          var c3 = r.isFunction(b3) ? b3() : b3;
          d2[d2.length] = encodeURIComponent(a3) + "=" + encodeURIComponent(null == c3 ? "" : c3);
        };
        if (Array.isArray(a2) || a2.jquery && !r.isPlainObject(a2)) r.each(a2, function() {
          e2(this.name, this.value);
        });
        else for (c2 in a2) Ab(c2, a2[c2], b2, e2);
        return d2.join("&");
      }, r.fn.extend({ serialize: function() {
        return r.param(this.serializeArray());
      }, serializeArray: function() {
        return this.map(function() {
          var a2 = r.prop(this, "elements");
          return a2 ? r.makeArray(a2) : this;
        }).filter(function() {
          var a2 = this.type;
          return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a2) && (this.checked || !ja.test(a2));
        }).map(function(a2, b2) {
          var c2 = r(this).val();
          return null == c2 ? null : Array.isArray(c2) ? r.map(c2, function(a3) {
            return { name: b2.name, value: a3.replace(xb, "\r\n") };
          }) : { name: b2.name, value: c2.replace(xb, "\r\n") };
        }).get();
      } });
      var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {}, Jb = {}, Kb = "*/".concat("*"), Lb = d.createElement("a");
      Lb.href = tb.href;
      function Mb(a2) {
        return function(b2, c2) {
          "string" != typeof b2 && (c2 = b2, b2 = "*");
          var d2, e2 = 0, f2 = b2.toLowerCase().match(L) || [];
          if (r.isFunction(c2)) while (d2 = f2[e2++]) "+" === d2[0] ? (d2 = d2.slice(1) || "*", (a2[d2] = a2[d2] || []).unshift(c2)) : (a2[d2] = a2[d2] || []).push(c2);
        };
      }
      function Nb(a2, b2, c2, d2) {
        var e2 = {}, f2 = a2 === Jb;
        function g2(h2) {
          var i2;
          return e2[h2] = true, r.each(a2[h2] || [], function(a3, h3) {
            var j2 = h3(b2, c2, d2);
            return "string" != typeof j2 || f2 || e2[j2] ? f2 ? !(i2 = j2) : void 0 : (b2.dataTypes.unshift(j2), g2(j2), false);
          }), i2;
        }
        return g2(b2.dataTypes[0]) || !e2["*"] && g2("*");
      }
      function Ob(a2, b2) {
        var c2, d2, e2 = r.ajaxSettings.flatOptions || {};
        for (c2 in b2) void 0 !== b2[c2] && ((e2[c2] ? a2 : d2 || (d2 = {}))[c2] = b2[c2]);
        return d2 && r.extend(true, a2, d2), a2;
      }
      function Pb(a2, b2, c2) {
        var d2, e2, f2, g2, h2 = a2.contents, i2 = a2.dataTypes;
        while ("*" === i2[0]) i2.shift(), void 0 === d2 && (d2 = a2.mimeType || b2.getResponseHeader("Content-Type"));
        if (d2) {
          for (e2 in h2) if (h2[e2] && h2[e2].test(d2)) {
            i2.unshift(e2);
            break;
          }
        }
        if (i2[0] in c2) f2 = i2[0];
        else {
          for (e2 in c2) {
            if (!i2[0] || a2.converters[e2 + " " + i2[0]]) {
              f2 = e2;
              break;
            }
            g2 || (g2 = e2);
          }
          f2 = f2 || g2;
        }
        if (f2) return f2 !== i2[0] && i2.unshift(f2), c2[f2];
      }
      function Qb(a2, b2, c2, d2) {
        var e2, f2, g2, h2, i2, j2 = {}, k2 = a2.dataTypes.slice();
        if (k2[1]) for (g2 in a2.converters) j2[g2.toLowerCase()] = a2.converters[g2];
        f2 = k2.shift();
        while (f2) if (a2.responseFields[f2] && (c2[a2.responseFields[f2]] = b2), !i2 && d2 && a2.dataFilter && (b2 = a2.dataFilter(b2, a2.dataType)), i2 = f2, f2 = k2.shift()) {
          if ("*" === f2) f2 = i2;
          else if ("*" !== i2 && i2 !== f2) {
            if (g2 = j2[i2 + " " + f2] || j2["* " + f2], !g2) {
              for (e2 in j2) if (h2 = e2.split(" "), h2[1] === f2 && (g2 = j2[i2 + " " + h2[0]] || j2["* " + h2[0]])) {
                g2 === true ? g2 = j2[e2] : j2[e2] !== true && (f2 = h2[0], k2.unshift(h2[1]));
                break;
              }
            }
            if (g2 !== true) if (g2 && a2["throws"]) b2 = g2(b2);
            else try {
              b2 = g2(b2);
            } catch (l2) {
              return { state: "parsererror", error: g2 ? l2 : "No conversion from " + i2 + " to " + f2 };
            }
          }
        }
        return { state: "success", data: b2 };
      }
      r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(a2, b2) {
        return b2 ? Ob(Ob(a2, r.ajaxSettings), b2) : Ob(r.ajaxSettings, a2);
      }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function(b2, c2) {
        "object" == typeof b2 && (c2 = b2, b2 = void 0), c2 = c2 || {};
        var e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2 = r.ajaxSetup({}, c2), p2 = o2.context || o2, q2 = o2.context && (p2.nodeType || p2.jquery) ? r(p2) : r.event, s2 = r.Deferred(), t2 = r.Callbacks("once memory"), u2 = o2.statusCode || {}, v2 = {}, w2 = {}, x2 = "canceled", y2 = { readyState: 0, getResponseHeader: function(a2) {
          var b3;
          if (k2) {
            if (!h2) {
              h2 = {};
              while (b3 = Eb.exec(g2)) h2[b3[1].toLowerCase()] = b3[2];
            }
            b3 = h2[a2.toLowerCase()];
          }
          return null == b3 ? null : b3;
        }, getAllResponseHeaders: function() {
          return k2 ? g2 : null;
        }, setRequestHeader: function(a2, b3) {
          return null == k2 && (a2 = w2[a2.toLowerCase()] = w2[a2.toLowerCase()] || a2, v2[a2] = b3), this;
        }, overrideMimeType: function(a2) {
          return null == k2 && (o2.mimeType = a2), this;
        }, statusCode: function(a2) {
          var b3;
          if (a2) if (k2) y2.always(a2[y2.status]);
          else for (b3 in a2) u2[b3] = [u2[b3], a2[b3]];
          return this;
        }, abort: function(a2) {
          var b3 = a2 || x2;
          return e2 && e2.abort(b3), A2(0, b3), this;
        } };
        if (s2.promise(y2), o2.url = ((b2 || o2.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o2.type = c2.method || c2.type || o2.method || o2.type, o2.dataTypes = (o2.dataType || "*").toLowerCase().match(L) || [""], null == o2.crossDomain) {
          j2 = d.createElement("a");
          try {
            j2.href = o2.url, j2.href = j2.href, o2.crossDomain = Lb.protocol + "//" + Lb.host != j2.protocol + "//" + j2.host;
          } catch (z2) {
            o2.crossDomain = true;
          }
        }
        if (o2.data && o2.processData && "string" != typeof o2.data && (o2.data = r.param(o2.data, o2.traditional)), Nb(Ib, o2, c2, y2), k2) return y2;
        l2 = r.event && o2.global, l2 && 0 === r.active++ && r.event.trigger("ajaxStart"), o2.type = o2.type.toUpperCase(), o2.hasContent = !Gb.test(o2.type), f2 = o2.url.replace(Cb, ""), o2.hasContent ? o2.data && o2.processData && 0 === (o2.contentType || "").indexOf("application/x-www-form-urlencoded") && (o2.data = o2.data.replace(Bb, "+")) : (n2 = o2.url.slice(f2.length), o2.data && (f2 += (vb.test(f2) ? "&" : "?") + o2.data, delete o2.data), o2.cache === false && (f2 = f2.replace(Db, "$1"), n2 = (vb.test(f2) ? "&" : "?") + "_=" + ub++ + n2), o2.url = f2 + n2), o2.ifModified && (r.lastModified[f2] && y2.setRequestHeader("If-Modified-Since", r.lastModified[f2]), r.etag[f2] && y2.setRequestHeader("If-None-Match", r.etag[f2])), (o2.data && o2.hasContent && o2.contentType !== false || c2.contentType) && y2.setRequestHeader("Content-Type", o2.contentType), y2.setRequestHeader("Accept", o2.dataTypes[0] && o2.accepts[o2.dataTypes[0]] ? o2.accepts[o2.dataTypes[0]] + ("*" !== o2.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o2.accepts["*"]);
        for (m2 in o2.headers) y2.setRequestHeader(m2, o2.headers[m2]);
        if (o2.beforeSend && (o2.beforeSend.call(p2, y2, o2) === false || k2)) return y2.abort();
        if (x2 = "abort", t2.add(o2.complete), y2.done(o2.success), y2.fail(o2.error), e2 = Nb(Jb, o2, c2, y2)) {
          if (y2.readyState = 1, l2 && q2.trigger("ajaxSend", [y2, o2]), k2) return y2;
          o2.async && o2.timeout > 0 && (i2 = a.setTimeout(function() {
            y2.abort("timeout");
          }, o2.timeout));
          try {
            k2 = false, e2.send(v2, A2);
          } catch (z2) {
            if (k2) throw z2;
            A2(-1, z2);
          }
        } else A2(-1, "No Transport");
        function A2(b3, c3, d2, h3) {
          var j3, m3, n3, v3, w3, x3 = c3;
          k2 || (k2 = true, i2 && a.clearTimeout(i2), e2 = void 0, g2 = h3 || "", y2.readyState = b3 > 0 ? 4 : 0, j3 = b3 >= 200 && b3 < 300 || 304 === b3, d2 && (v3 = Pb(o2, y2, d2)), v3 = Qb(o2, v3, y2, j3), j3 ? (o2.ifModified && (w3 = y2.getResponseHeader("Last-Modified"), w3 && (r.lastModified[f2] = w3), w3 = y2.getResponseHeader("etag"), w3 && (r.etag[f2] = w3)), 204 === b3 || "HEAD" === o2.type ? x3 = "nocontent" : 304 === b3 ? x3 = "notmodified" : (x3 = v3.state, m3 = v3.data, n3 = v3.error, j3 = !n3)) : (n3 = x3, !b3 && x3 || (x3 = "error", b3 < 0 && (b3 = 0))), y2.status = b3, y2.statusText = (c3 || x3) + "", j3 ? s2.resolveWith(p2, [m3, x3, y2]) : s2.rejectWith(p2, [y2, x3, n3]), y2.statusCode(u2), u2 = void 0, l2 && q2.trigger(j3 ? "ajaxSuccess" : "ajaxError", [y2, o2, j3 ? m3 : n3]), t2.fireWith(p2, [y2, x3]), l2 && (q2.trigger("ajaxComplete", [y2, o2]), --r.active || r.event.trigger("ajaxStop")));
        }
        return y2;
      }, getJSON: function(a2, b2, c2) {
        return r.get(a2, b2, c2, "json");
      }, getScript: function(a2, b2) {
        return r.get(a2, void 0, b2, "script");
      } }), r.each(["get", "post"], function(a2, b2) {
        r[b2] = function(a3, c2, d2, e2) {
          return r.isFunction(c2) && (e2 = e2 || d2, d2 = c2, c2 = void 0), r.ajax(r.extend({ url: a3, type: b2, dataType: e2, data: c2, success: d2 }, r.isPlainObject(a3) && a3));
        };
      }), r._evalUrl = function(a2) {
        return r.ajax({ url: a2, type: "GET", dataType: "script", cache: true, async: false, global: false, "throws": true });
      }, r.fn.extend({ wrapAll: function(a2) {
        var b2;
        return this[0] && (r.isFunction(a2) && (a2 = a2.call(this[0])), b2 = r(a2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && b2.insertBefore(this[0]), b2.map(function() {
          var a3 = this;
          while (a3.firstElementChild) a3 = a3.firstElementChild;
          return a3;
        }).append(this)), this;
      }, wrapInner: function(a2) {
        return r.isFunction(a2) ? this.each(function(b2) {
          r(this).wrapInner(a2.call(this, b2));
        }) : this.each(function() {
          var b2 = r(this), c2 = b2.contents();
          c2.length ? c2.wrapAll(a2) : b2.append(a2);
        });
      }, wrap: function(a2) {
        var b2 = r.isFunction(a2);
        return this.each(function(c2) {
          r(this).wrapAll(b2 ? a2.call(this, c2) : a2);
        });
      }, unwrap: function(a2) {
        return this.parent(a2).not("body").each(function() {
          r(this).replaceWith(this.childNodes);
        }), this;
      } }), r.expr.pseudos.hidden = function(a2) {
        return !r.expr.pseudos.visible(a2);
      }, r.expr.pseudos.visible = function(a2) {
        return !!(a2.offsetWidth || a2.offsetHeight || a2.getClientRects().length);
      }, r.ajaxSettings.xhr = function() {
        try {
          return new a.XMLHttpRequest();
        } catch (b2) {
        }
      };
      var Rb = { 0: 200, 1223: 204 }, Sb = r.ajaxSettings.xhr();
      o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b2) {
        var c2, d2;
        if (o.cors || Sb && !b2.crossDomain) return { send: function(e2, f2) {
          var g2, h2 = b2.xhr();
          if (h2.open(b2.type, b2.url, b2.async, b2.username, b2.password), b2.xhrFields) for (g2 in b2.xhrFields) h2[g2] = b2.xhrFields[g2];
          b2.mimeType && h2.overrideMimeType && h2.overrideMimeType(b2.mimeType), b2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest");
          for (g2 in e2) h2.setRequestHeader(g2, e2[g2]);
          c2 = function(a2) {
            return function() {
              c2 && (c2 = d2 = h2.onload = h2.onerror = h2.onabort = h2.onreadystatechange = null, "abort" === a2 ? h2.abort() : "error" === a2 ? "number" != typeof h2.status ? f2(0, "error") : f2(h2.status, h2.statusText) : f2(Rb[h2.status] || h2.status, h2.statusText, "text" !== (h2.responseType || "text") || "string" != typeof h2.responseText ? { binary: h2.response } : { text: h2.responseText }, h2.getAllResponseHeaders()));
            };
          }, h2.onload = c2(), d2 = h2.onerror = c2("error"), void 0 !== h2.onabort ? h2.onabort = d2 : h2.onreadystatechange = function() {
            4 === h2.readyState && a.setTimeout(function() {
              c2 && d2();
            });
          }, c2 = c2("abort");
          try {
            h2.send(b2.hasContent && b2.data || null);
          } catch (i2) {
            if (c2) throw i2;
          }
        }, abort: function() {
          c2 && c2();
        } };
      }), r.ajaxPrefilter(function(a2) {
        a2.crossDomain && (a2.contents.script = false);
      }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a2) {
        return r.globalEval(a2), a2;
      } } }), r.ajaxPrefilter("script", function(a2) {
        void 0 === a2.cache && (a2.cache = false), a2.crossDomain && (a2.type = "GET");
      }), r.ajaxTransport("script", function(a2) {
        if (a2.crossDomain) {
          var b2, c2;
          return { send: function(e2, f2) {
            b2 = r("<script>").prop({ charset: a2.scriptCharset, src: a2.url }).on("load error", c2 = function(a3) {
              b2.remove(), c2 = null, a3 && f2("error" === a3.type ? 404 : 200, a3.type);
            }), d.head.appendChild(b2[0]);
          }, abort: function() {
            c2 && c2();
          } };
        }
      });
      var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/;
      r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
        var a2 = Tb.pop() || r.expando + "_" + ub++;
        return this[a2] = true, a2;
      } }), r.ajaxPrefilter("json jsonp", function(b2, c2, d2) {
        var e2, f2, g2, h2 = b2.jsonp !== false && (Ub.test(b2.url) ? "url" : "string" == typeof b2.data && 0 === (b2.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b2.data) && "data");
        if (h2 || "jsonp" === b2.dataTypes[0]) return e2 = b2.jsonpCallback = r.isFunction(b2.jsonpCallback) ? b2.jsonpCallback() : b2.jsonpCallback, h2 ? b2[h2] = b2[h2].replace(Ub, "$1" + e2) : b2.jsonp !== false && (b2.url += (vb.test(b2.url) ? "&" : "?") + b2.jsonp + "=" + e2), b2.converters["script json"] = function() {
          return g2 || r.error(e2 + " was not called"), g2[0];
        }, b2.dataTypes[0] = "json", f2 = a[e2], a[e2] = function() {
          g2 = arguments;
        }, d2.always(function() {
          void 0 === f2 ? r(a).removeProp(e2) : a[e2] = f2, b2[e2] && (b2.jsonpCallback = c2.jsonpCallback, Tb.push(e2)), g2 && r.isFunction(f2) && f2(g2[0]), g2 = f2 = void 0;
        }), "script";
      }), o.createHTMLDocument = function() {
        var a2 = d.implementation.createHTMLDocument("").body;
        return a2.innerHTML = "<form></form><form></form>", 2 === a2.childNodes.length;
      }(), r.parseHTML = function(a2, b2, c2) {
        if ("string" != typeof a2) return [];
        "boolean" == typeof b2 && (c2 = b2, b2 = false);
        var e2, f2, g2;
        return b2 || (o.createHTMLDocument ? (b2 = d.implementation.createHTMLDocument(""), e2 = b2.createElement("base"), e2.href = d.location.href, b2.head.appendChild(e2)) : b2 = d), f2 = C.exec(a2), g2 = !c2 && [], f2 ? [b2.createElement(f2[1])] : (f2 = qa([a2], b2, g2), g2 && g2.length && r(g2).remove(), r.merge([], f2.childNodes));
      }, r.fn.load = function(a2, b2, c2) {
        var d2, e2, f2, g2 = this, h2 = a2.indexOf(" ");
        return h2 > -1 && (d2 = pb(a2.slice(h2)), a2 = a2.slice(0, h2)), r.isFunction(b2) ? (c2 = b2, b2 = void 0) : b2 && "object" == typeof b2 && (e2 = "POST"), g2.length > 0 && r.ajax({ url: a2, type: e2 || "GET", dataType: "html", data: b2 }).done(function(a3) {
          f2 = arguments, g2.html(d2 ? r("<div>").append(r.parseHTML(a3)).find(d2) : a3);
        }).always(c2 && function(a3, b3) {
          g2.each(function() {
            c2.apply(this, f2 || [a3.responseText, b3, a3]);
          });
        }), this;
      }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a2, b2) {
        r.fn[b2] = function(a3) {
          return this.on(b2, a3);
        };
      }), r.expr.pseudos.animated = function(a2) {
        return r.grep(r.timers, function(b2) {
          return a2 === b2.elem;
        }).length;
      }, r.offset = { setOffset: function(a2, b2, c2) {
        var d2, e2, f2, g2, h2, i2, j2, k2 = r.css(a2, "position"), l2 = r(a2), m2 = {};
        "static" === k2 && (a2.style.position = "relative"), h2 = l2.offset(), f2 = r.css(a2, "top"), i2 = r.css(a2, "left"), j2 = ("absolute" === k2 || "fixed" === k2) && (f2 + i2).indexOf("auto") > -1, j2 ? (d2 = l2.position(), g2 = d2.top, e2 = d2.left) : (g2 = parseFloat(f2) || 0, e2 = parseFloat(i2) || 0), r.isFunction(b2) && (b2 = b2.call(a2, c2, r.extend({}, h2))), null != b2.top && (m2.top = b2.top - h2.top + g2), null != b2.left && (m2.left = b2.left - h2.left + e2), "using" in b2 ? b2.using.call(a2, m2) : l2.css(m2);
      } }, r.fn.extend({ offset: function(a2) {
        if (arguments.length) return void 0 === a2 ? this : this.each(function(b3) {
          r.offset.setOffset(this, a2, b3);
        });
        var b2, c2, d2, e2, f2 = this[0];
        if (f2) return f2.getClientRects().length ? (d2 = f2.getBoundingClientRect(), b2 = f2.ownerDocument, c2 = b2.documentElement, e2 = b2.defaultView, { top: d2.top + e2.pageYOffset - c2.clientTop, left: d2.left + e2.pageXOffset - c2.clientLeft }) : { top: 0, left: 0 };
      }, position: function() {
        if (this[0]) {
          var a2, b2, c2 = this[0], d2 = { top: 0, left: 0 };
          return "fixed" === r.css(c2, "position") ? b2 = c2.getBoundingClientRect() : (a2 = this.offsetParent(), b2 = this.offset(), B(a2[0], "html") || (d2 = a2.offset()), d2 = { top: d2.top + r.css(a2[0], "borderTopWidth", true), left: d2.left + r.css(a2[0], "borderLeftWidth", true) }), { top: b2.top - d2.top - r.css(c2, "marginTop", true), left: b2.left - d2.left - r.css(c2, "marginLeft", true) };
        }
      }, offsetParent: function() {
        return this.map(function() {
          var a2 = this.offsetParent;
          while (a2 && "static" === r.css(a2, "position")) a2 = a2.offsetParent;
          return a2 || ra;
        });
      } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a2, b2) {
        var c2 = "pageYOffset" === b2;
        r.fn[a2] = function(d2) {
          return T(this, function(a3, d3, e2) {
            var f2;
            return r.isWindow(a3) ? f2 = a3 : 9 === a3.nodeType && (f2 = a3.defaultView), void 0 === e2 ? f2 ? f2[b2] : a3[d3] : void (f2 ? f2.scrollTo(c2 ? f2.pageXOffset : e2, c2 ? e2 : f2.pageYOffset) : a3[d3] = e2);
          }, a2, d2, arguments.length);
        };
      }), r.each(["top", "left"], function(a2, b2) {
        r.cssHooks[b2] = Pa(o.pixelPosition, function(a3, c2) {
          if (c2) return c2 = Oa(a3, b2), Ma.test(c2) ? r(a3).position()[b2] + "px" : c2;
        });
      }), r.each({ Height: "height", Width: "width" }, function(a2, b2) {
        r.each({ padding: "inner" + a2, content: b2, "": "outer" + a2 }, function(c2, d2) {
          r.fn[d2] = function(e2, f2) {
            var g2 = arguments.length && (c2 || "boolean" != typeof e2), h2 = c2 || (e2 === true || f2 === true ? "margin" : "border");
            return T(this, function(b3, c3, e3) {
              var f3;
              return r.isWindow(b3) ? 0 === d2.indexOf("outer") ? b3["inner" + a2] : b3.document.documentElement["client" + a2] : 9 === b3.nodeType ? (f3 = b3.documentElement, Math.max(b3.body["scroll" + a2], f3["scroll" + a2], b3.body["offset" + a2], f3["offset" + a2], f3["client" + a2])) : void 0 === e3 ? r.css(b3, c3, h2) : r.style(b3, c3, e3, h2);
            }, b2, g2 ? e2 : void 0, g2);
          };
        });
      }), r.fn.extend({ bind: function(a2, b2, c2) {
        return this.on(a2, null, b2, c2);
      }, unbind: function(a2, b2) {
        return this.off(a2, null, b2);
      }, delegate: function(a2, b2, c2, d2) {
        return this.on(b2, a2, c2, d2);
      }, undelegate: function(a2, b2, c2) {
        return 1 === arguments.length ? this.off(a2, "**") : this.off(b2, a2 || "**", c2);
      } }), r.holdReady = function(a2) {
        a2 ? r.readyWait++ : r.ready(true);
      }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r;
      });
      var Vb = a.jQuery, Wb = a.$;
      return r.noConflict = function(b2) {
        return a.$ === r && (a.$ = Wb), b2 && a.jQuery === r && (a.jQuery = Vb), r;
      }, b || (a.jQuery = a.$ = r), r;
    });
  }
});
export default require_jquery_3_2_1_min_002();
