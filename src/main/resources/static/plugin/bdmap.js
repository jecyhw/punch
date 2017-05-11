/**
 * Created by jecyhw on 1/9/2017.
 */
/**
 * Created by SNNU on 2015/5/8.
 */
window.VTC = {
    "ditu": {
        "normal": {"version": "073", "updateDate": "20150428"},
        "satellite": {"version": "009", "updateDate": "20150504"},
        "normalTraffic": {"version": "069", "updateDate": "20150428"},
        "satelliteTraffic": {"version": "069", "updateDate": "20150428"},
        "mapJS": {"version": "090", "updateDate": "20150428"},
        "satelliteStreet": {"version": "069", "updateDate": "20150428"},
        "panoClick": {"version": "1033", "updateDate": "201400823"},
        "panoUdt": {"version": "20150505", "updateDate": "20150505"},
        "panoSwfAPI": {"version": "20150123", "updateDate": "20150123"},
        "panoSwfPlace": {"version": "20141112", "updateDate": "20141112"}
    },
    "webapp": {
        "high_normal": {"version": "001", "updateDate": "20141209"},
        "lower_normal": {"version": "003", "updateDate": "20150430"}
    },
    "api_for_mobile": {
        "vector": {"version": "003", "updateDate": "20150430"},
        "vectorIcon": {"version": "003", "updateDate": "20150430"}
    }
};
window.BMAP_AUTHENTIC_KEY = "QT9ntk6IBtEHGSy4BG7zOXoU";
(function () {
    function aa(a) {
        throw a;
    }

    var j = void 0, o = !0, p = null, q = !1;

    function s() {
        return function () {
        }
    }

    function ba(a) {
        return function (b) {
            this[a] = b
        }
    }

    function u(a) {
        return function () {
            return this[a]
        }
    }

    function da(a) {
        return function () {
            return a
        }
    }

    var ea, fa = [];

    function ha(a) {
        return function () {
            return fa[a].apply(this, arguments)
        }
    }

    function ia(a, b) {
        return fa[a] = b
    }

    var ja, w = ja = w || {version: "1.3.4"};
    w.Q = "$BAIDU$";
    window[w.Q] = window[w.Q] || {};
    w.object = w.object || {};
    w.extend = w.object.extend = function (a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    w.C = w.C || {};
    w.C.N = function (a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
    };
    w.N = w.pc = w.C.N;
    w.C.J = function (a) {
        a = w.C.N(a);
        a.style.display = "none";
        return a
    };
    w.J = w.C.J;
    w.lang = w.lang || {};
    w.lang.cg = function (a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    w.cg = w.lang.cg;
    w.C.uj = function (a) {
        return w.lang.cg(a) ? document.getElementById(a) : a
    };
    w.uj = w.C.uj;
    w.C.contains = function (a, b) {
        var c = w.C.uj, a = c(a), b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    w.S = w.S || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (w.S.ba = w.ba = document.documentMode || +RegExp.$1);
    var la = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > w.S.ba ? (la["for"] = "htmlFor", la["class"] = "className") : (la.htmlFor = "for", la.className = "class");
    w.C.kF = la;
    w.C.bE = function (a, b, c) {
        a = w.C.N(a);
        if ("style" == b)a.style.cssText = c; else {
            b = w.C.kF[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    w.bE = w.C.bE;
    w.C.cE = function (a, b) {
        var a = w.C.N(a), c;
        for (c in b)w.C.bE(a, c, b[c]);
        return a
    };
    w.cE = w.C.cE;
    w.qk = w.qk || {};
    (function () {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        w.qk.trim = function (b) {
            return ("" + b).replace(a, "")
        }
    })();
    w.trim = w.qk.trim;
    w.qk.Kl = function (a, b) {
        var a = "" + a, c = Array.prototype.slice.call(arguments, 1), d = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function (a, b) {
                var g = c[b];
                "[object Function]" == d.call(g) && (g = g(b));
                return "undefined" == typeof g ? "" : g
            })
        }
        return a
    };
    w.Kl = w.qk.Kl;
    w.C.Ub = function (a, b) {
        for (var a = w.C.N(a), c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
            g = 0;
            for (e = c.length; g < e; ++g)if (c[g] == d[i]) {
                c.splice(g, 1);
                break
            }
        }
        a.className = c.join(" ");
        return a
    };
    w.Ub = w.C.Ub;
    w.C.Fw = function (a, b, c) {
        var a = w.C.N(a), d;
        if (a.insertAdjacentHTML)a.insertAdjacentHTML(b, c); else {
            d = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                d.selectNodeContents(a);
                d.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                d[b ? "setStartBefore" : "setEndAfter"](a);
                d.collapse(b)
            }
            d.insertNode(d.createContextualFragment(c))
        }
        return a
    };
    w.Fw = w.C.Fw;
    w.C.show = function (a) {
        a = w.C.N(a);
        a.style.display = "";
        return a
    };
    w.show = w.C.show;
    w.C.BC = function (a) {
        a = w.C.N(a);
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    };
    w.C.Wa = function (a, b) {
        for (var a = w.C.N(a), c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++)e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
        a.className = d;
        return a
    };
    w.Wa = w.C.Wa;
    w.C.CA = w.C.CA || {};
    w.C.gl = w.C.gl || [];
    w.C.gl.filter = function (a, b, c) {
        for (var d = 0, e = w.C.gl, f; f = e[d]; d++)if (f = f[c])b = f(a, b);
        return b
    };
    w.qk.zM = function (a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
            return a.charAt(1).toUpperCase()
        })
    };
    w.C.q1 = function (a, b) {
        w.C.ds(a, b) ? w.C.Ub(a, b) : w.C.Wa(a, b)
    };
    w.C.ds = function (a) {
        if (arguments.length <= 0 || typeof a === "function")return this;
        if (this.size() <= 0)return q;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
        w.forEach(this, function (a) {
            for (var a = a.className, e = 0; e < b.length; e++)if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                c = q;
                return
            }
            c !== q && (c = o)
        });
        return c
    };
    w.C.Xi = function (a, b) {
        var c = w.C, a = c.N(a), b = w.qk.zM(b), d = a.style[b];
        if (!d)var e = c.CA[b], d = a.currentStyle || (w.S.ba ? a.style : getComputedStyle(a, p)), d = e && e.get ? e.get(a, d) : d[e || b];
        if (e = c.gl)d = e.filter(b, d, "get");
        return d
    };
    w.Xi = w.C.Xi;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (w.S.opera = +RegExp.$1);
    w.S.BK = /webkit/i.test(navigator.userAgent);
    w.S.SV = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    w.S.mD = "CSS1Compat" == document.compatMode;
    w.C.V = function (a) {
        var a = w.C.N(a), b = w.C.BC(a), c = w.S, d = w.C.Xi;
        c.SV > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {left: 0, top: 0}, f;
        if (a == (c.ba && !c.mD ? b.body : b.documentElement))return e;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            e.left = e.left - b.documentElement.clientLeft;
            e.top = e.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(d(a, "borderLeftWidth"));
            d = parseInt(d(a, "borderTopWidth"));
            if (c.ba && !c.mD) {
                e.left = e.left - (isNaN(b) ? 2 : b);
                e.top = e.top - (isNaN(d) ? 2 : d)
            }
        } else {
            f = a;
            do {
                e.left = e.left + f.offsetLeft;
                e.top = e.top + f.offsetTop;
                if (c.BK > 0 && d(f, "position") == "fixed") {
                    e.left = e.left + b.body.scrollLeft;
                    e.top = e.top + b.body.scrollTop;
                    break
                }
                f = f.offsetParent
            } while (f && f != a);
            if (c.opera > 0 || c.BK > 0 && d(a, "position") == "absolute")e.top = e.top - b.body.offsetTop;
            for (f = a.offsetParent; f && f != b.body;) {
                e.left = e.left - f.scrollLeft;
                if (!c.opera || f.tagName != "TR")e.top = e.top - f.scrollTop;
                f = f.offsetParent
            }
        }
        return e
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (w.S.Ig = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (w.S.QZ = o);
    var ma = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ma) && !/chrome/i.test(ma) && (w.S.VL = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (w.S.EI = +RegExp.$1);
    w.Wb = w.Wb || {};
    w.Wb.Db = function (a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b)for (d = 0; d < e; d++) {
            c = a[d];
            c = b.call(a, c, d);
            if (c === q)break
        }
        return a
    };
    w.Db = w.Wb.Db;
    w.lang.Q = function () {
        return "TANGRAM__" + (window[w.Q]._counter++).toString(36)
    };
    window[w.Q]._counter = window[w.Q]._counter || 1;
    window[w.Q]._instances = window[w.Q]._instances || {};
    w.lang.ls = function (a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    w.lang.ra = function (a) {
        this.Q = a || w.lang.Q();
        window[w.Q]._instances[this.Q] = this
    };
    window[w.Q]._instances = window[w.Q]._instances || {};
    w.lang.ra.prototype.Jh = ha(0);
    w.lang.ra.prototype.toString = function () {
        return "[object " + (this.xO || "Object") + "]"
    };
    w.lang.Ux = function (a, b) {
        this.type = a;
        this.returnValue = o;
        this.target = b || p;
        this.currentTarget = p
    };
    w.lang.ra.prototype.addEventListener = function (a, b, c) {
        if (w.lang.ls(b)) {
            !this.ki && (this.ki = {});
            var d = this.ki, e;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                e = b.dK = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof d[a] != "object" && (d[a] = {});
            e = e || w.lang.Q();
            b.dK = e;
            d[a][e] = b
        }
    };
    w.lang.ra.prototype.removeEventListener = function (a, b) {
        if (w.lang.ls(b))b = b.dK; else if (!w.lang.cg(b))return;
        !this.ki && (this.ki = {});
        a.indexOf("on") != 0 && (a = "on" + a);
        var c = this.ki;
        c[a] && c[a][b] && delete c[a][b]
    };
    w.lang.ra.prototype.dispatchEvent = function (a, b) {
        w.lang.cg(a) && (a = new w.lang.Ux(a));
        !this.ki && (this.ki = {});
        var b = b || {}, c;
        for (c in b)a[c] = b[c];
        var d = this.ki, e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        w.lang.ls(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object")for (c in d[e])d[e][c].apply(this, arguments);
        return a.returnValue
    };
    w.lang.ia = function (a, b, c) {
        var d, e, f = a.prototype;
        e = new Function;
        e.prototype = b.prototype;
        e = a.prototype = new e;
        for (d in f)e[d] = f[d];
        a.prototype.constructor = a;
        a.bY = b.prototype;
        if ("string" == typeof c)e.xO = c
    };
    w.ia = w.lang.ia;
    w.lang.Jd = function (a) {
        return window[w.Q]._instances[a] || p
    };
    w.platform = w.platform || {};
    w.platform.uK = /macintosh/i.test(navigator.userAgent);
    w.platform.k0 = /MicroMessenger/i.test(navigator.userAgent);
    w.platform.CK = /windows/i.test(navigator.userAgent);
    w.platform.ZV = /x11/i.test(navigator.userAgent);
    w.platform.bk = /android/i.test(navigator.userAgent);
    /android (\d+\.\d)/i.test(navigator.userAgent) && (w.platform.pI = w.pI = RegExp.$1);
    w.platform.UV = /ipad/i.test(navigator.userAgent);
    w.platform.iD = /iphone/i.test(navigator.userAgent);
    function na(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++)a.touches.push({
                clientX: b.touches[c].clientX,
                clientY: b.touches[c].clientY,
                screenX: b.touches[c].screenX,
                screenY: b.touches[c].screenY,
                pageX: b.touches[c].pageX,
                pageY: b.touches[c].pageY,
                target: b.touches[c].target,
                identifier: b.touches[c].identifier
            })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++)a.changedTouches.push({
                clientX: b.changedTouches[c].clientX,
                clientY: b.changedTouches[c].clientY,
                screenX: b.changedTouches[c].screenX,
                screenY: b.changedTouches[c].screenY,
                pageX: b.changedTouches[c].pageX,
                pageY: b.changedTouches[c].pageY,
                target: b.changedTouches[c].target,
                identifier: b.changedTouches[c].identifier
            })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++)a.targetTouches.push({
                clientX: b.targetTouches[c].clientX,
                clientY: b.targetTouches[c].clientY,
                screenX: b.targetTouches[c].screenX,
                screenY: b.targetTouches[c].screenY,
                pageX: b.targetTouches[c].pageX,
                pageY: b.targetTouches[c].pageY,
                target: b.targetTouches[c].target,
                identifier: b.targetTouches[c].identifier
            })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }

    w.lang.Rv = function (a) {
        var b = window[w.Q];
        b.zQ && delete b.zQ[a]
    };
    w.event = {};
    w.F = w.event.F = function (a, b, c) {
        if (!(a = w.N(a)))return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    w.ge = w.event.ge = function (a, b, c) {
        if (!(a = w.N(a)))return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    w.C.ds = function (a, b) {
        if (!a || !a.className || typeof a.className != "string")return q;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (d) {
            return q
        }
        return c > -1
    };
    w.oJ = function () {
        function a(a) {
            document.addEventListener && (this.element = a, this.rJ = this.Yj ? "touchstart" : "mousedown", this.jC = this.Yj ? "touchmove" : "mousemove", this.iC = this.Yj ? "touchend" : "mouseup", this.Vg = q, this.ct = this.bt = 0, this.element.addEventListener(this.rJ, this, q), ja.F(this.element, "mousedown", s()), this.handleEvent(p))
        }

        a.prototype = {
            Yj: "ontouchstart"in window || "createTouch"in document, start: function (a) {
                oa(a);
                this.Vg = q;
                this.bt = this.Yj ? a.touches[0].clientX : a.clientX;
                this.ct = this.Yj ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.jC, this, q);
                this.element.addEventListener(this.iC, this, q)
            }, move: function (a) {
                pa(a);
                var c = this.Yj ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.Yj ? a.touches[0].clientX : a.clientX) - this.bt) || 10 < Math.abs(c - this.ct))this.Vg = o
            }, end: function (a) {
                pa(a);
                this.Vg || (a = document.createEvent("Event"), a.initEvent("tap", q, o), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.jC, this, q);
                this.element.removeEventListener(this.iC, this, q)
            }, handleEvent: function (a) {
                if (a)switch (a.type) {
                    case this.rJ:
                        this.start(a);
                        break;
                    case this.jC:
                        this.move(a);
                        break;
                    case this.iC:
                        this.end(a)
                }
            }
        };
        return function (b) {
            return new a(b)
        }
    }();
    var z = window.BMap || {};
    z.version = "2.0";
    z.$H = 0.34 > Math.random();
    0 <= z.version.indexOf("#") && (z.version = "2.0");
    z.Iq = [];
    z.Ee = function (a) {
        this.Iq.push(a)
    };
    z.yq = [];
    z.nm = function (a) {
        this.yq.push(a)
    };
    z.LS = z.apiLoad || s();
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = p;
    var ra = window.BMap_loadScriptTime, sa = (new Date).getTime(), ta = p, ua = o, va = p, wa = 5042, xa = 5002, ya = 5003, Aa = "load_mapclick", Ba = 5038, Ca = 5041, Da = 5047, Ea = 5036, Fa = 5039, Ga = 5037, Ha = 5040, Ia = 5011, Ja = 7E3;

    function Ka(a, b) {
        if (a = w.N(a)) {
            var c = this;
            w.lang.ra.call(c);
            b = b || {};
            c.D = {
                hB: 200,
                Pb: o,
                $v: q,
                aC: o,
                Jr: o,
                Mr: q,
                dC: o,
                Kr: o,
                Yv: o,
                Zn: b.enable3DBuilding || q,
                Uc: 25,
                VY: 240,
                zS: 450,
                Hb: E.Hb,
                gd: E.gd,
                Hw: !!b.Hw,
                kd: b.minZoom || 1,
                Wc: b.maxZoom || 19,
                ib: b.mapType || La,
                X0: q,
                Zv: o,
                Wv: 500,
                gU: b.enableHighResolution !== q,
                Qi: b.enableMapClick !== q,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                AE: b.vectorMapLevel || (G() ? 3 : 99),
                ae: b.mapStyle || p,
                gW: b.logoControl === q ? q : o,
                TS: ["chrome"],
                Av: b.beforeClickIcon || p
            };
            c.D.ae && (this.JV(c.D.ae.controls), this.oK(c.D.ae.geotableId));
            c.D.ae && c.D.ae.styleId && c.Y_(c.D.ae.styleId);
            c.D.Bl = {
                dark: {backColor: "#2D2D2D", textColor: "#bfbfbf", iconUrl: "dicons"},
                normal: {backColor: "#F3F1EC", textColor: "#c61b1b", iconUrl: "icons"},
                light: {backColor: "#EBF8FC", textColor: "#017fb4", iconUrl: "licons"}
            };
            b.enableAutoResize && (c.D.Yv = b.enableAutoResize);
            w.platform.bk && 1.5 < window.devicePixelRatio && (c.D.devicePixelRatio = 1.5);
            var d = c.D.TS;
            if (G())for (var e = 0, f = d.length; e < f; e++)if (w.S[d[e]]) {
                c.D.devicePixelRatio = 1;
                break
            }
            d = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || d && e)c.D.AE = 99, c.D.gU = q, c.D.devicePixelRatio = 1;
            c.Ha = a;
            c.vA(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.ma());
            b.size && this.od(b.size);
            d = c.Ib();
            c.width = d.width;
            c.height = d.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.be = c.platform.firstChild;
            c.be.style.width = c.width + "px";
            c.be.style.height = c.height + "px";
            c.Sd = {};
            c.vf = new H(0, 0);
            c.uc = new H(0, 0);
            c.Ba = 3;
            c.yc = 0;
            c.AB = p;
            c.zB = p;
            c.Ob = "";
            c.Ev = "";
            c.qh = {};
            c.qh.custom = {};
            c.Ia = 0;
            c.G = new Na(a, {yf: "api"});
            c.G.J();
            c.G.eE(c);
            b = b || {};
            d = c.ib = c.D.ib;
            c.de = d.mo();
            d === Oa && Pa(xa);
            d === Qa && Pa(ya);
            d = c.D;
            d.SM = b.minZoom;
            d.RM = b.maxZoom;
            c.Yt();
            c.H = {vc: q, Tb: 0, rs: 0, HK: 0, o0: 0, $A: q, PD: -1, ze: []};
            c.platform.style.cursor = c.D.Hb;
            for (e = 0; e < z.Iq.length; e++)z.Iq[e](c);
            c.H.PD = e;
            c.P();
            I.load("map", function () {
                c.ob()
            });
            c.D.Qi && (setTimeout(function () {
                Pa(Aa)
            }, 1E3), I.load("mapclick", function () {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.Q] = new Sa(c)
            }, o));
            Ta() && I.load("oppc", function () {
                c.my()
            });
            G() && I.load("opmb", function () {
                c.my()
            });
            a = p;
            c.JA = []
        }
    }

    w.lang.ia(Ka, w.lang.ra, "Map");
    w.extend(Ka.prototype, {
        ma: function () {
            var a = J("div"), b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = J("div", {"class": "BMap_mask"}), c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        }, vA: function (a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" != Ua(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        }, P: function () {
            var a = this;
            a.er = function () {
                var b = a.Ib();
                if (a.width != b.width || a.height != b.height) {
                    var c = new K(a.width, a.height), d = new L("onbeforeresize");
                    d.size = c;
                    a.dispatchEvent(d);
                    a.Hj((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.be.style.width = (a.width = b.width) + "px";
                    a.be.style.height = (a.height = b.height) + "px";
                    c = new L("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.D.Yv && (a.H.ir = setInterval(a.er, 80))
        }, Hj: function (a, b, c, d) {
            var e = this.ja().lc(this.U()), f = this.de, g = o;
            c && H.tK(c) && (this.vf = new H(c.lng, c.lat), g = q);
            if (c = c && d ? f.em(c, this.Ob) : this.uc)if (this.uc = new H(c.lng + a * e, c.lat - b * e), (a = f.Th(this.uc, this.Ob)) && g)this.vf = a
        }, og: function (a, b) {
            if (Va(a) && (this.Yt(), a = this.fn(a).zoom, a != this.Ba)) {
                this.yc = this.Ba;
                this.Ba = a;
                var c;
                b ? c = b : this.Mg() && (c = this.Mg().V());
                c && (c = this.Rb(c, this.yc), this.Hj(this.width / 2 - c.x, this.height / 2 - c.y, this.kb(c, this.yc), o));
                this.dispatchEvent(new L("onzoomstart"));
                this.dispatchEvent(new L("onzoomstartcode"))
            }
        }, zc: function (a) {
            this.og(a)
        }, EE: function (a) {
            this.og(this.Ba + 1, a)
        }, FE: function (a) {
            this.og(this.Ba - 1, a)
        }, Xh: function (a) {
            a instanceof H && (this.uc = this.de.em(a, this.Ob), this.vf = H.tK(a) ? new H(a.lng, a.lat) : this.de.Th(this.uc, this.Ob))
        }, hg: function (a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.Hj(-a, -b)
        }, qv: function (a) {
            a && Wa(a.Ke) && (a.Ke(this), this.dispatchEvent(new L("onaddcontrol", a)))
        }, LL: function (a) {
            a && Wa(a.remove) && (a.remove(), this.dispatchEvent(new L("onremovecontrol", a)))
        }, In: function (a) {
            a && Wa(a.fa) && (a.fa(this), this.dispatchEvent(new L("onaddcontextmenu", a)))
        }, Jo: function (a) {
            a && Wa(a.remove) && (this.dispatchEvent(new L("onremovecontextmenu", a)), a.remove())
        }, wa: function (a) {
            a && Wa(a.Ke) && (a.Ke(this), this.dispatchEvent(new L("onaddoverlay", a)))
        }, Fb: function (a) {
            a && Wa(a.remove) && (a.remove(), this.dispatchEvent(new L("onremoveoverlay", a)))
        }, HI: function () {
            this.dispatchEvent(new L("onclearoverlays"))
        }, Dg: function (a) {
            a && this.dispatchEvent(new L("onaddtilelayer", a))
        }, $g: function (a) {
            a && this.dispatchEvent(new L("onremovetilelayer", a))
        }, lg: function (a) {
            if (this.ib !== a) {
                var b = new L("onsetmaptype");
                b.O0 = this.ib;
                this.ib = this.D.ib = a;
                this.de = this.ib.mo();
                this.Hj(0, 0, this.ya(), o);
                this.Yt();
                var c = this.fn(this.U()).zoom;
                this.og(c);
                this.dispatchEvent(b);
                b = new L("onmaptypechange");
                b.Ba = c;
                b.ib = a;
                this.dispatchEvent(b);
                (a === Xa || a === Qa) && Pa(ya)
            }
        }, Ff: function (a) {
            var b = this;
            if (a instanceof H)b.Xh(a, {noAnimation: o}); else if (Ya(a))if (b.ib == Oa) {
                var c = E.dB[a];
                c && (pt = c.m, b.Ff(pt))
            } else {
                var d = this.mG();
                d.hE(function (c) {
                    0 == d.Rl() && 2 == d.ua.result.type && (b.Ff(c.Wj(0).point), Oa.Sj(a) && b.dE(a))
                });
                d.search(a, {log: "center"})
            }
        }, Vd: function (a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            va = G() ? Za.ii.Nj(z.$H ? 102 : 101) : Za.ii.Nj(1);
            va.dt();
            va.fy = +new Date;
            va.Xb("script_loaded", sa - ra);
            va.Xb("centerAndZoom");
            var c = this;
            if (Ya(a))if (c.ib == Oa) {
                var d = E.dB[a];
                d && (pt = d.m, c.Vd(pt, b))
            } else {
                var e = c.mG();
                e.hE(function (d) {
                    if (0 == e.Rl() && 2 == e.ua.result.type) {
                        var d = d.Wj(0).point, f = b || N.wC(e.ua.content.level, c);
                        c.Vd(d, f);
                        Oa.Sj(a) && c.dE(a)
                    }
                });
                e.search(a, {log: "center"})
            } else if (a instanceof H && b) {
                b = c.fn(b).zoom;
                c.yc = c.Ba || b;
                c.Ba = b;
                d = c.vf;
                c.vf = new H(a.lng, a.lat);
                c.uc = c.de.em(c.vf, c.Ob);
                c.AB = c.AB || c.Ba;
                c.zB = c.zB || c.vf;
                var f = new L("onload"), g = new L("onloadcode");
                f.point = new H(a.lng, a.lat);
                f.pixel = c.Rb(c.vf, c.Ba);
                f.zoom = b;
                c.loaded || (c.loaded = o, c.dispatchEvent(f), ta || (ta = $a()));
                c.dispatchEvent(g);
                f = new L("onmoveend");
                f.RF = "centerAndZoom";
                d.Xa(c.vf) || c.dispatchEvent(f);
                c.dispatchEvent(new L("onmoveend"));
                c.yc != c.Ba && (d = new L("onzoomend"), d.RF = "centerAndZoom", c.dispatchEvent(d));
                c.D.Zn && c.Zn()
            }
        }, mG: function () {
            this.H.MK || (this.H.MK = new bb(1));
            return this.H.MK
        }, reset: function () {
            this.Vd(this.zB, this.AB, o)
        }, enableDragging: function () {
            this.D.Pb = o
        }, disableDragging: function () {
            this.D.Pb = q
        }, enableInertialDragging: function () {
            this.D.Zv = o
        }, disableInertialDragging: function () {
            this.D.Zv = q
        }, enableScrollWheelZoom: function () {
            this.D.Mr = o
        }, disableScrollWheelZoom: function () {
            this.D.Mr = q
        }, enableContinuousZoom: function () {
            this.D.Jr = o
        }, disableContinuousZoom: function () {
            this.D.Jr = q
        }, enableDoubleClickZoom: function () {
            this.D.aC = o
        }, disableDoubleClickZoom: function () {
            this.D.aC = q
        }, enableKeyboard: function () {
            this.D.$v = o
        }, disableKeyboard: function () {
            this.D.$v = q
        }, enablePinchToZoom: function () {
            this.D.Kr = o
        }, disablePinchToZoom: function () {
            this.D.Kr = q
        }, enableAutoResize: function () {
            this.D.Yv = o;
            this.er();
            this.H.ir || (this.H.ir = setInterval(this.er, 80))
        }, disableAutoResize: function () {
            this.D.Yv = q;
            this.H.ir && (clearInterval(this.H.ir), this.H.ir = p)
        }, Zn: function () {
            this.D.Zn = o;
            this.Wm || (this.Wm = new cb({vJ: o}), this.Dg(this.Wm))
        }, RT: function () {
            this.D.Zn = q;
            this.Wm && (this.$g(this.Wm), this.Wm = p, delete this.Wm)
        }, Ib: function () {
            return this.wr && this.wr instanceof K ? new K(this.wr.width, this.wr.height) : new K(this.Ha.clientWidth, this.Ha.clientHeight)
        }, od: function (a) {
            a && a instanceof K ? (this.wr = a, this.Ha.style.width = a.width + "px", this.Ha.style.height = a.height + "px") : this.wr = p
        }, ya: u("vf"), U: u("Ba"), lT: function () {
            this.er()
        }, fn: function (a) {
            var b = this.D.kd, c = this.D.Wc, d = q;
            a < b && (d = o, a = b);
            a > c && (d = o, a = c);
            return {zoom: a, kC: d}
        }, Ea: u("Ha"), Rb: function (a, b) {
            b = b || this.U();
            return this.de.Rb(a, b, this.uc, this.Ib(), this.Ob)
        }, kb: function (a, b) {
            b = b || this.U();
            return this.de.kb(a, b, this.uc, this.Ib(), this.Ob)
        }, De: function (a, b) {
            if (a) {
                var c = this.Rb(new H(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        }, BL: function (a, b) {
            if (a) {
                var c = new P(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.kb(c, b)
            }
        }, pointToPixelFor3D: function (a, b) {
            var c = map.Ob;
            this.ib == Oa && c && db.NI(a, this, b)
        }, J0: function (a, b) {
            var c = map.Ob;
            this.ib == Oa && c && db.MI(a, this, b)
        }, K0: function (a, b) {
            var c = this, d = map.Ob;
            c.ib == Oa && d && db.NI(a, c, function (a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        }, I0: function (a, b) {
            var c = map.Ob;
            this.ib == Oa && c && (a.x += this.offsetX, a.y += this.offsetY, db.MI(a, this, b))
        }, Id: function (a) {
            if (!this.Gw())return new eb;
            var b = a || {}, a = b.margins || [0, 0, 0, 0], c = b.zoom || p, b = this.kb({
                x: a[3],
                y: this.height - a[2]
            }, c), a = this.kb({x: this.width - a[1], y: a[0]}, c);
            return new eb(b, a)
        }, Gw: function () {
            return !!this.loaded
        }, JP: function (a, b) {
            for (var c = this.ja(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.ho(), i = c = c.Ol(); i >= g; i--) {
                var k = this.ja().lc(i);
                if (a.uE().lng / k < this.width - f && a.uE().lat / k < this.height - d)break
            }
            i += e;
            i < g && (i = g);
            i > c && (i = c);
            return i
        }, cs: function (a, b) {
            var c = {center: this.ya(), zoom: this.U()};
            if (!a || !a instanceof eb && 0 == a.length || a instanceof eb && a.cj())return c;
            var d = [];
            a instanceof eb ? (d.push(a.zf()), d.push(a.Be())) : d = a.slice(0);
            for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++)e.push(this.de.em(d[f], this.Ob));
            d = new eb;
            for (f = e.length - 1; 0 <= f; f--)d.extend(e[f]);
            if (d.cj())return c;
            c = d.ya();
            e = this.JP(d, b);
            b.margins && (d = b.margins, f = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, g = this.ja().lc(e), b.offset && (f = b.offset.width, d = b.offset.height), c.lng += g * f, c.lat += g * d);
            c = this.de.Th(c, this.Ob);
            return {center: c, zoom: e}
        }, bh: function (a, b) {
            var c;
            c = a && a.center ? a : this.cs(a, b);
            var b = b || {}, d = b.delay || 200;
            if (c.zoom == this.Ba && b.enableAnimation != q) {
                var e = this;
                setTimeout(function () {
                    e.Xh(c.center, {duration: 210})
                }, d)
            } else this.Vd(c.center, c.zoom)
        }, Bf: u("Sd"), Mg: function () {
            return this.H.Ya && this.H.Ya.Ja() ? this.H.Ya : p
        }, getDistance: function (a, b) {
            if (a && b) {
                if (a.Xa(b))return 0;
                var c = 0, c = Q.eo(a, b);
                if (c == p || c == j)c = 0;
                return c
            }
        }, MC: function () {
            var a = [], b = this.ka, c = this.je;
            if (b)for (var d in b)b[d]instanceof fb && a.push(b[d]);
            if (c) {
                d = 0;
                for (b = c.length; d < b; d++)a.push(c[d])
            }
            return a
        }, ja: u("ib"), my: function () {
            for (var a = this.H.PD; a < z.Iq.length; a++)z.Iq[a](this);
            this.H.PD = a
        }, dE: function (a) {
            this.Ob = Oa.Sj(a);
            this.Ev = Oa.FJ(this.Ob);
            this.ib == Oa && this.de instanceof gb && (this.de.tB = this.Ob)
        }, setDefaultCursor: function (a) {
            this.D.Hb = a;
            this.platform && (this.platform.style.cursor = this.D.Hb)
        }, getDefaultCursor: function () {
            return this.D.Hb
        }, setDraggingCursor: function (a) {
            this.D.gd = a
        }, getDraggingCursor: function () {
            return this.D.gd
        }, Og: da(q), sv: function (a, b) {
            b ? this.qh[b] || (this.qh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof hb && (this.qh[b][a.Q] = a, a.fa(this));
            var c = this;
            I.load("hotspot", function () {
                c.my()
            }, o)
        }, VW: function (a, b) {
            b || (b = "custom");
            this.qh[b][a.Q] && delete this.qh[b][a.Q]
        }, zl: function (a) {
            a || (a = "custom");
            this.qh[a] = {}
        }, Yt: function () {
            var a = this.Og() ? this.ib.k.BV : this.ib.ho(), b = this.Og() ? this.ib.k.Cw : this.ib.Ol(), c = this.D;
            c.kd = c.SM || a;
            c.Wc = c.RM || b;
            c.kd < a && (c.kd = a);
            c.Wc > b && (c.Wc = b)
        }, setMinZoom: function (a) {
            a > this.D.Wc && (a = this.D.Wc);
            this.D.SM = a;
            this.RH()
        }, setMaxZoom: function (a) {
            a < this.D.kd && (a = this.D.kd);
            this.D.RM = a;
            this.RH()
        }, RH: function () {
            this.Yt();
            var a = this.D;
            this.Ba < a.kd ? this.zc(a.kd) : this.Ba > a.Wc && this.zc(a.Wc);
            var b = new L("onzoomspanchange");
            b.kd = a.kd;
            b.Wc = a.Wc;
            this.dispatchEvent(b)
        }, $_: u("JA"), getKey: function () {
            return qa
        }, Os: function (a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.Q] && window.MPC_Mgr[b.Q].close();
            b.D.Qi = q;
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.ZX(a.styleJson));
                G() && w.S.VL ? setTimeout(function () {
                    b.D.ae = a;
                    b.dispatchEvent(new L("onsetcustomstyles", a))
                }, 50) : (this.D.ae = a, this.dispatchEvent(new L("onsetcustomstyles", a)), this.oK(b.D.ae.geotableId));
                var c = {style: a.style};
                a.features && 0 < a.features.length && (c.features = o);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = o);
                Pa(5050, c);
                a.style && (c = b.D.Bl[a.style] ? b.D.Bl[a.style].backColor : b.D.Bl.normal.backColor) && (this.Ea().style.backgroundColor = c)
            }
        }, JV: function (a) {
            this.controls || (this.controls = {
                navigationControl: new ib,
                scaleControl: new jb,
                overviewMapControl: new lb,
                mapTypeControl: new mb
            });
            var b = this, c;
            for (c in this.controls)b.LL(b.controls[c]);
            a = a || [];
            w.Wb.Db(a, function (a) {
                b.qv(b.controls[a])
            })
        }, oK: function (a) {
            a ? this.ur && this.ur.Of == a || (this.$g(this.ur), this.ur = new ob({geotableId: a}), this.Dg(this.ur)) : this.$g(this.ur)
        }, Mb: function () {
            var a = this.U() >= this.D.AE && this.ja() == La && 18 >= this.U(), b = q;
            try {
                document.createElement("canvas").getContext("2d"), b = o
            } catch (c) {
                b = q
            }
            return a && b
        }, getCurrentCity: function () {
            return {name: this.Rn, code: this.XA}
        }, getPanorama: u("G"), setPanorama: function (a) {
            this.G = a;
            this.G.eE(this)
        }, ZX: function (a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, d = [], e = 0, f; f = a[e]; e++) {
                var g = f.stylers;
                delete f.stylers;
                w.extend(f, g);
                var g = [], i;
                for (i in b)f[i] && ("elementType" == i ? g.push(b[i] + ":" + c[f[i]]) : g.push(b[i] + ":" + f[i]));
                2 < g.length && d.push(g.join("|"))
            }
            return d.join(",")
        }
    });
    function Pa(a, b) {
        if (a) {
            var b = b || {}, c = "", d;
            for (d in b)c = c + "&" + d + "=" + encodeURIComponent(b[d]);
            var e = function (a) {
                a && (pb = o, setTimeout(function () {
                    qb.src = z.tc + "images/blank.gif?" + a.src
                }, 50))
            }, f = function () {
                var a = rb.shift();
                a && e(a)
            };
            d = (1E8 * Math.random()).toFixed(0);
            pb ? rb.push({src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c}) : e({src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c});
            sb || (w.F(qb, "load", function () {
                pb = q;
                f()
            }), w.F(qb, "error", function () {
                pb = q;
                f()
            }), sb = o)
        }
    }

    var pb, sb, rb = [], qb = new Image;
    Pa(5E3, {device_pixel_ratio: window.devicePixelRatio, platform: navigator.platform});
    z.iK = {
        TILE_BASE_URLS: ["ss0.baidu.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"],
        TIlE_PERSPECT_URLS: ["ss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "sp2.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["sp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "sp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_D3",
        iw_pano: "ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "sp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "sp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "sp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {baidu: "sp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3", other: "sapi.map.baidu.com"},
        main_domain_cdn: {
            baidu: ["ss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "ss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "ss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["sapi.map.baidu.com"]
        },
        map_click: "sp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "ss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    z.FV = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com",
        iw_pano: "pcsv0.map.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
        main_domain_nocdn: {baidu: "api.map.baidu.com"},
        main_domain_cdn: {baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"]},
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    z.CY = {
        "0": {proto: "http://", domain: z.FV},
        1: {proto: "https://", domain: z.iK},
        2: {proto: "https://", domain: z.iK}
    };
    z.Kx = window.HOST_TYPE || "0";
    z.url = z.CY[z.Kx];
    z.Ao = z.url.proto + z.url.domain.baidumap + "/";
    z.tc = z.url.proto + ("2" == z.Kx ? z.url.domain.main_domain_nocdn.other : z.url.domain.main_domain_nocdn.baidu) + "/";
    z.da = z.url.proto + ("2" == z.Kx ? z.url.domain.main_domain_cdn.other[0] : z.url.domain.main_domain_cdn.baidu[0]) + "/";
    z.ag = function (a, b) {
        var c, d, b = b || "";
        switch (a) {
            case "main_domain_nocdn":
                c = z.tc + b;
                break;
            case "main_domain_cdn":
                c = z.da + b;
                break;
            default:
                d = z.url.domain[a], "[object Array]" == Object.prototype.toString.call(d) ? (c = [], w.Wb.Db(d, function (a, d) {
                    c[d] = z.url.proto + a + "/" + b
                })) : c = z.url.proto + z.url.domain[a] + "/" + b
        }
        return c
    };
    function tb(a) {
        var b = {duration: 1E3, Uc: 30, Vn: 0, jc: ub.KK, zs: s()};
        this.Kf = [];
        if (a)for (var c in a)b[c] = a[c];
        this.k = b;
        if (Va(b.Vn)) {
            var d = this;
            setTimeout(function () {
                d.start()
            }, b.Vn)
        } else b.Vn != vb && this.start()
    }

    var vb = "INFINITE";
    tb.prototype.start = function () {
        this.Rt = $a();
        this.Uy = this.Rt + this.k.duration;
        wb(this)
    };
    tb.prototype.add = function (a) {
        this.Kf.push(a)
    };
    function wb(a) {
        var b = $a();
        b >= a.Uy ? (Wa(a.k.ma) && a.k.ma(a.k.jc(1)), Wa(a.k.finish) && a.k.finish(), 0 < a.Kf.length && (b = a.Kf[0], b.Kf = [].concat(a.Kf.slice(1)), b.start())) : (a.px = a.k.jc((b - a.Rt) / a.k.duration), Wa(a.k.ma) && a.k.ma(a.px), a.qE || (a.Yq = setTimeout(function () {
            wb(a)
        }, 1E3 / a.k.Uc)))
    }

    tb.prototype.stop = function (a) {
        this.qE = o;
        for (var b = 0; b < this.Kf.length; b++)this.Kf[b].stop(), this.Kf[b] = p;
        this.Kf.length = 0;
        this.Yq && (clearTimeout(this.Yq), this.Yq = p);
        this.k.zs(this.px);
        a && (this.Uy = this.Rt, wb(this))
    };
    tb.prototype.cancel = ha(1);
    var ub = {
        KK: function (a) {
            return a
        }, reverse: function (a) {
            return 1 - a
        }, YB: function (a) {
            return a * a
        }, XB: function (a) {
            return Math.pow(a, 3)
        }, mJ: function (a) {
            return -(a * (a - 2))
        }, lJ: function (a) {
            return Math.pow(a - 1, 3) + 1
        }, kJ: function (a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        }, m_: function (a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        }, n_: function (a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    ub["ease-in"] = ub.YB;
    ub["ease-out"] = ub.mJ;
    var E = {
        IE: 34,
        JE: 21,
        KE: new K(21, 32),
        gN: new K(10, 32),
        fN: new K(24, 36),
        eN: new K(12, 36),
        GE: new K(13, 1),
        ea: z.da + "images/",
        HE: z.da + "images/markers_new.png",
        cN: 24,
        dN: 73,
        dB: {
            "\u5317\u4eac": {fx: "bj", m: new H(116.403874, 39.914889)},
            "\u4e0a\u6d77": {fx: "sh", m: new H(121.487899, 31.249162)},
            "\u6df1\u5733": {fx: "sz", m: new H(114.025974, 22.546054)},
            "\u5e7f\u5dde": {fx: "gz", m: new H(113.30765, 23.120049)}
        },
        fontFamily: "arial,sans-serif"
    };
    w.S.Ig ? (w.extend(E, {
        aJ: "url(" + E.ea + "ruler.cur),crosshair",
        Hb: "-moz-grab",
        gd: "-moz-grabbing"
    }), w.platform.CK && (E.fontFamily = "arial,simsun,sans-serif")) : w.S.EI || w.S.VL ? w.extend(E, {
        aJ: "url(" + E.ea + "ruler.cur) 2 6,crosshair",
        Hb: "url(" + E.ea + "openhand.cur) 8 8,default",
        gd: "url(" + E.ea + "closedhand.cur) 8 8,move"
    }) : w.extend(E, {
        aJ: "url(" + E.ea + "ruler.cur),crosshair",
        Hb: "url(" + E.ea + "openhand.cur),default",
        gd: "url(" + E.ea + "closedhand.cur),move"
    });
    function xb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }

    function yb(a) {
        0 < w.S.ba ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }

    function zb(a) {
        return a && a.parentNode && 11 != a.parentNode.nodeType
    }

    function Ab(a, b) {
        w.C.Fw(a, "beforeEnd", b);
        return a.lastChild
    }

    function Bb(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent;)b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b
    }

    function oa(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = o
    }

    function Cb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = q;
        return q
    }

    function pa(a) {
        oa(a);
        return Cb(a)
    }

    function Db() {
        var a = document.documentElement, b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }

    function Eb(a, b) {
        if (a && b)return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }

    function Fb(a, b) {
        var c = [], b = b || function (a) {
                return a
            }, d;
        for (d in a)c.push(d + "=" + b(a[d]));
        return c.join("&")
    }

    function J(a, b, c) {
        var d = document.createElement(a);
        c && (d = document.createElementNS(c, a));
        return w.C.cE(d, b || {})
    }

    function Ua(a) {
        if (a.currentStyle)return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)return a.ownerDocument.defaultView.getComputedStyle(a, p)
    }

    function Wa(a) {
        return "function" == typeof a
    }

    function Va(a) {
        return "number" == typeof a
    }

    function Ya(a) {
        return "string" == typeof a
    }

    function Gb(a) {
        return "undefined" != typeof a
    }

    function Hb(a) {
        return "object" == typeof a
    }

    var Ib = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Jb(a) {
        var b = "", c, d, e = "", f, g = "", i = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a))return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Ib.indexOf(a.charAt(i++)), d = Ib.indexOf(a.charAt(i++)), f = Ib.indexOf(a.charAt(i++)), g = Ib.indexOf(a.charAt(i++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e)); while (i < a.length);
        return b
    }

    var L = w.lang.Ux;

    function G() {
        return !(!w.platform.iD && !w.platform.UV && !w.platform.bk)
    }

    function Ta() {
        return !(!w.platform.CK && !w.platform.uK && !w.platform.ZV)
    }

    function $a() {
        return (new Date).getTime()
    }

    function Kb() {
        var a = document.body.appendChild(J("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)return q;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" == typeof b.adj : o;
        a.parentNode.removeChild(a);
        return b
    }

    function Lb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }

    function Mb() {
        return !!J("canvas").getContext
    }

    function Nb(a) {
        return a * Math.PI / 180
    }

    z.fW = function () {
        var a = o, b = o, c = o, d = o, e = 0, f = 0, g = 0, i = 0;
        return {
            IO: function () {
                e += 1;
                a && (a = q, setTimeout(function () {
                    Pa(5054, {pic: e});
                    a = o;
                    e = 0
                }, 1E4))
            }, gZ: function () {
                f += 1;
                b && (b = q, setTimeout(function () {
                    Pa(5055, {move: f});
                    b = o;
                    f = 0
                }, 1E4))
            }, iZ: function () {
                g += 1;
                c && (c = q, setTimeout(function () {
                    Pa(5056, {zoom: g});
                    c = o;
                    g = 0
                }, 1E4))
            }, hZ: function (a) {
                i += a;
                d && (d = q, setTimeout(function () {
                    Pa(5057, {tile: i});
                    d = o;
                    i = 0
                }, 5E3))
            }
        }
    }();
    var Za;
    (function () {
        function a(a) {
            this.MS = a;
            this.timing = {};
            this.start = +new Date
        }

        function b(a, b) {
            if (a.length === +a.length)for (var c = 0, d = a.length; c < d && b.call(j, c, a[c], a) !== q; c++); else for (c in a)if (a.hasOwnProperty(c) && b.call(j, c, a[c], a) === q)break
        }

        var c = [], d = {
            push: function (a) {
                c.push(a);
                if (window.localStorage && window.JSON)try {
                    localStorage.setItem("WPO_NR", JSON.stringify(c))
                } catch (b) {
                }
            }, get: function (a) {
                var b = [];
                if (window.localStorage)try {
                    a && localStorage.removeItem("WPO_NR")
                } catch (d) {
                }
                b = c;
                a && (c = []);
                return b
            }
        }, e, f, g, i, k = {};
        (!window.localStorage || !window.JSON) && document.attachEvent && window.attachEvent("onbeforeunload", function () {
            l.send()
        });
        var l = {
            send: function (a) {
                var c = [], e = [], f = a || d.get(o), g;
                0 < f.length && (b(f, function (d, e) {
                    var f = [];
                    b(e.timing, function (a, b) {
                        f.push('"' + a + '":' + b)
                    });
                    c.push('{"t":{' + f.join(",") + '},"a":' + e.MS + "}");
                    !g && (a && e.start) && (g = e.start)
                }), b(k, function (a, b) {
                    e.push(a + "=" + b)
                }), e.push("d=[" + c.join(",") + "]"), g ? e.push("_st=" + g) : e.push("_t=" + +new Date), f = new Image, f.src = "http://static.tieba.baidu.com/tb/pms/img/st.gif?" + e.join("&"), window["___pms_img_" + 1 * new Date] = f)
            }
        };
        a.prototype = {
            Xb: function (a, b) {
                this.timing[a] = 0 <= b ? b : new Date - this.start
            }, dt: function () {
                this.start = +new Date
            }, HM: function () {
                this.Xb("tt")
            }, Lx: function () {
                this.Xb("vt")
            }, rm: function () {
                f && (d.push(this), d.get().length >= g && l.send())
            }, error: s()
        };
        Za = {
            ii: {
                bD: function (a) {
                    var b = navigator.b_ || navigator.x0 || navigator.G1 || {type: 0};
                    f = Math.random() <= (a.eX || 0.01);
                    g = a.max || 5;
                    i = a.w0 || b.type;
                    k = {p: a.RW, mnt: i, b: 50};
                    window.localStorage && (window.JSON && window.addEventListener) && (e = d.get(o), window.addEventListener("load", function () {
                        l.send(e)
                    }, q))
                }, Nj: function (b) {
                    return new a(b)
                }
            }
        }
    })();
    Za.ii.bD({RW: 18, eX: 0.1, max: 1});
    z.op = {WE: "#83a1ff", qp: "#808080"};
    function Ob(a, b, c) {
        b.hm || (b.hm = [], b.handle = {});
        b.hm.push({filter: c, Jl: a});
        b.addEventListener || (b.addEventListener = function (a, c) {
            b.attachEvent("on" + a, c)
        });
        b.handle.click || (b.addEventListener("click", function (a) {
            for (var c = a.target || a.srcElement; c != b;) {
                Pb(b.hm, function (b, g) {
                    RegExp(g.filter).test(c.getAttribute("filter")) && g.Jl.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, q), b.handle.click = o)
    }

    function Pb(a, b) {
        for (var c = 0, d = a.length; c < d; c++)b(c, a[c])
    };
    function Qb(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            z._rd["_cbk" + c] = function (a) {
                b && b(a);
                delete z._rd["_cbk" + c]
            };
            a += "&callback=BMap._rd._cbk" + c
        }
        var d = J("script", {type: "text/javascript"});
        d.charset = "utf-8";
        d.src = a;
        d.addEventListener ? d.addEventListener("load", function (a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, q) : d.attachEvent && d.attachEvent("onreadystatechange", function () {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function () {
            document.getElementsByTagName("head")[0].appendChild(d);
            d = p
        }, 1)
    };
    var Rb = {
        map: "qgm0qb",
        common: "xa3tl5",
        style: "jshvp1",
        tile: "f0ve1s",
        vectordrawlib: "oh4fnw",
        newvectordrawlib: "2qhdzx",
        groundoverlay: "prwysx",
        pointcollection: "mpnucn",
        marker: "wxknj0",
        symbol: "22un4i",
        canvablepath: "hw30ec",
        vmlcontext: "axiocl",
        markeranimation: "ooaup1",
        poly: "jzb33a",
        draw: "uyjkcx",
        drawbysvg: "phpfvq",
        drawbyvml: "yv3uch",
        drawbycanvas: "kyz2fh",
        infowindow: "ftu4rk",
        oppc: "v3n2mk",
        opmb: "u2h5pw",
        menu: "5nbptm",
        control: "f4g2ck",
        navictrl: "02xk3n",
        geoctrl: "j5ykxt",
        copyrightctrl: "ocx4ox",
        scommon: "gquf31",
        local: "qba1sg",
        route: "sas3lk",
        othersearch: "1a31d5",
        mapclick: "xtrdtu",
        buslinesearch: "goqdr4",
        hotspot: "kcn1x3",
        autocomplete: "vcznyr",
        coordtrans: "j3hwrh",
        coordtransutils: "daxalh",
        clayer: "uwlvwi",
        pservice: "fpvkt2",
        pcommon: "myc0ms",
        panorama: "qhcgzc",
        panoramaflash: "0w4gpu",
        vector: "bud5rx"
    };
    w.Ex = function () {
        function a(a) {
            return d && !!c[b + a + "_" + Rb[a]]
        }

        var b = "BMap_", c = window.localStorage, d = "localStorage"in window && c !== p && c !== j;
        return {
            WV: d, set: function (a, f) {
                if (d) {
                    for (var g = b + a + "_", i = c.length, k; i--;)k = c.key(i), -1 < k.indexOf(g) && c.removeItem(k);
                    try {
                        c.setItem(b + a + "_" + Rb[a], f)
                    } catch (l) {
                        c.clear()
                    }
                }
            }, get: function (e) {
                return d && a(e) ? c.getItem(b + e + "_" + Rb[e]) : q
            }, CI: a
        }
    }();
    function I() {
    }

    w.object.extend(I, {
        mj: {YE: -1, MN: 0, jp: 1},
        JJ: function () {
            var a = "drawbysvg", b = "canvablepath", c = z.$H ? "newvectordrawlib" : "vectordrawlib";
            G() && Mb() ? a = "drawbycanvas" : Lb() ? a = "drawbysvg" : Kb() ? (a = "drawbyvml", b = "vmlcontext") : Mb() && (a = "drawbycanvas");
            return {
                tile: [c],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === b ? [] : [b],
                vmlcontext: [],
                style: [],
                poly: ["marker", a],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        N0: {},
        QE: {aO: z.da + "getmodules?v=2.0&t=20140707", qS: 5E3},
        BB: q,
        ud: {Pk: {}, Qm: [], Xu: []},
        load: function (a, b, c) {
            var d = this.Ua(a);
            if (d.ed == this.mj.jp)c && b(); else {
                if (d.ed == this.mj.YE) {
                    this.JI(a);
                    this.IL(a);
                    var e = this;
                    e.BB == q && (e.BB = o, setTimeout(function () {
                        for (var a = [], b = 0, c = e.ud.Qm.length; b < c; b++) {
                            var d = e.ud.Qm[b], l = "";
                            ja.Ex.CI(d) ? l = ja.Ex.get(d) : (l = "", a.push(d + "_" + Rb[d]));
                            e.ud.Xu.push({dL: d, yD: l})
                        }
                        e.BB = q;
                        e.ud.Qm.length = 0;
                        0 == a.length ? e.qJ() : Qb(e.QE.aO + "&mod=" + a.join(","))
                    }, 1));
                    d.ed = this.mj.MN
                }
                d.Vt.push(b)
            }
        },
        JI: function (a) {
            if (a && this.JJ()[a])for (var a = this.JJ()[a], b = 0; b < a.length; b++)this.JI(a[b]), this.ud.Pk[a[b]] || this.IL(a[b])
        },
        IL: function (a) {
            for (var b = 0; b < this.ud.Qm.length; b++)if (this.ud.Qm[b] == a)return;
            this.ud.Qm.push(a)
        },
        dX: function (a, b) {
            var c = this.Ua(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.ed = this.mj.jp;
            for (var e = 0, f = c.Vt.length; e < f; e++)c.Vt[e]();
            c.Vt.length = 0
        },
        CI: function (a, b) {
            var c = this;
            c.timeout = setTimeout(function () {
                c.ud.Pk[a].ed != c.mj.jp ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, c.QE.qS)
        },
        Ua: function (a) {
            this.ud.Pk[a] || (this.ud.Pk[a] = {}, this.ud.Pk[a].ed = this.mj.YE, this.ud.Pk[a].Vt = []);
            return this.ud.Pk[a]
        },
        remove: function (a) {
            delete this.Ua(a)
        },
        iT: function (a, b) {
            for (var c = this.ud.Xu, d = o, e = 0, f = c.length; e < f; e++)"" == c[e].yD && (c[e].dL == a ? c[e].yD = b : d = q);
            d && this.qJ()
        },
        qJ: function () {
            for (var a = this.ud.Xu, b = 0, c = a.length; b < c; b++)this.dX(a[b].dL, a[b].yD);
            this.ud.Xu.length = 0
        }
    });
    function P(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }

    P.prototype.Xa = function (a) {
        return a && a.x == this.x && a.y == this.y
    };
    function K(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }

    K.prototype.Xa = function (a) {
        return a && this.width == a.width && this.height == a.height
    };
    function hb(a, b) {
        a && (this.wb = a, this.Q = "spot" + hb.Q++, b = b || {}, this.Ag = b.text || "", this.Gu = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.TH = b.userData || p, this.uh = b.minZoom || p, this.jf = b.maxZoom || p)
    }

    hb.Q = 0;
    w.extend(hb.prototype, {
        fa: function (a) {
            this.uh == p && (this.uh = a.D.kd);
            this.jf == p && (this.jf = a.D.Wc)
        }, ha: function (a) {
            a instanceof H && (this.wb = a)
        }, V: u("wb"), Ss: ba("Ag"), RC: u("Ag"), setUserData: ba("TH"), getUserData: u("TH")
    });
    function Sb() {
        this.B = p;
        this.xb = "control";
        this.Da = this.wI = o
    }

    w.lang.ia(Sb, w.lang.ra, "Control");
    w.extend(Sb.prototype, {
        initialize: function (a) {
            this.B = a;
            if (this.A)return a.Ha.appendChild(this.A), this.A
        }, Ke: function (a) {
            !this.A && (this.initialize && Wa(this.initialize)) && (this.A = this.initialize(a));
            this.k = this.k || {Xg: q};
            this.vA();
            this.Qu();
            this.A && (this.A.nq = this)
        }, vA: function () {
            var a = this.A;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.qy || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.k.Xg || w.C.Wa(a, "BMap_noprint");
                G() || w.F(a, "contextmenu", pa)
            }
        }, remove: function () {
            this.B = p;
            this.A && (this.A.parentNode && this.A.parentNode.removeChild(this.A), this.A = this.A.nq = p)
        }, qa: function () {
            this.A = Ab(this.B.Ha, "<div unselectable='on'></div>");
            this.Da == q && w.C.J(this.A);
            return this.A
        }, Qu: function () {
            this.fc(this.k.anchor)
        }, fc: function (a) {
            if (this.MZ || !Va(a) || isNaN(a) || a < Tb || 3 < a)a = this.defaultAnchor;
            this.k = this.k || {Xg: q};
            this.k.pa = this.k.pa || this.defaultOffset;
            var b = this.k.anchor;
            this.k.anchor = a;
            if (this.A) {
                var c = this.A, d = this.k.pa.width, e = this.k.pa.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                    case Tb:
                        c.style.top = e + "px";
                        c.style.left = d + "px";
                        break;
                    case Ub:
                        c.style.top = e + "px";
                        c.style.right = d + "px";
                        break;
                    case Vb:
                        c.style.bottom = e + "px";
                        c.style.left = d + "px";
                        break;
                    case 3:
                        c.style.bottom = e + "px", c.style.right = d + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                w.C.Ub(this.A, "anchor" + c[b]);
                w.C.Wa(this.A, "anchor" + c[a])
            }
        }, tC: function () {
            return this.k.anchor
        }, ee: function (a) {
            a instanceof K && (this.k = this.k || {Xg: q}, this.k.pa = new K(a.width, a.height), this.A && this.fc(this.k.anchor))
        }, Af: function () {
            return this.k.pa
        }, jd: u("A"), show: function () {
            this.Da != o && (this.Da = o, this.A && w.C.show(this.A))
        }, J: function () {
            this.Da != q && (this.Da = q, this.A && w.C.J(this.A))
        }, isPrintable: function () {
            return !!this.k.Xg
        }, Rg: function () {
            return !this.A && !this.B ? q : !!this.Da
        }
    });
    var Tb = 0, Ub = 1, Vb = 2;

    function ib(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            Xg: q,
            mE: a.showZoomInfo || o,
            anchor: a.anchor,
            pa: a.offset,
            type: a.type,
            fU: a.enableGeolocation || q
        };
        this.defaultAnchor = G() ? 3 : Tb;
        this.defaultOffset = new K(10, 10);
        this.fc(a.anchor);
        this.Am(a.type);
        this.bf()
    }

    w.lang.ia(ib, Sb, "NavigationControl");
    w.extend(ib.prototype, {
        initialize: function (a) {
            this.B = a;
            return this.A
        }, Am: function (a) {
            this.k.type = Va(a) && 0 <= a && 3 >= a ? a : 0
        }, qo: function () {
            return this.k.type
        }, bf: function () {
            var a = this;
            I.load("navictrl", function () {
                a.qg()
            })
        }
    });
    function Wb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            anchor: a.anchor || Vb,
            pa: a.offset || new K(10, 30),
            g1: a.showAddressBar || q,
            p_: a.enableAutoLocation || q,
            RK: a.locationIcon || p
        };
        var b = this;
        this.qy = 1200;
        b.EY = [];
        this.Ud = [];
        I.load("geoctrl", function () {
            (function d() {
                if (0 !== b.Ud.length) {
                    var a = b.Ud.shift();
                    b[a.method].apply(b, a.arguments);
                    d()
                }
            })();
            b.$N()
        });
        Pa(Ja)
    }

    w.lang.ia(Wb, Sb, "GeolocationControl");
    w.extend(Wb.prototype, {
        location: function () {
            this.Ud.push({method: "location", arguments: arguments})
        }, getAddressComponent: da(p)
    });
    function Xb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {Xg: q, anchor: a.anchor, pa: a.offset};
        this.Nb = [];
        this.defaultAnchor = Vb;
        this.defaultOffset = new K(5, 2);
        this.fc(a.anchor);
        this.wI = q;
        this.bf()
    }

    w.lang.ia(Xb, Sb, "CopyrightControl");
    w.object.extend(Xb.prototype, {
        initialize: function (a) {
            this.B = a;
            return this.A
        }, rv: function (a) {
            if (a && Va(a.id) && !isNaN(a.id)) {
                var b = {bounds: p, content: ""}, c;
                for (c in a)b[c] = a[c];
                if (a = this.Ml(a.id))for (var d in b)a[d] = b[d]; else this.Nb.push(b)
            }
        }, Ml: function (a) {
            for (var b = 0, c = this.Nb.length; b < c; b++)if (this.Nb[b].id == a)return this.Nb[b]
        }, AC: u("Nb"), QD: function (a) {
            for (var b = 0, c = this.Nb.length; b < c; b++)this.Nb[b].id == a && (r = this.Nb.splice(b, 1), b--, c = this.Nb.length)
        }, bf: function () {
            var a = this;
            I.load("copyrightctrl", function () {
                a.qg()
            })
        }
    });
    function lb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            Xg: q,
            size: a.size || new K(150, 150),
            padding: 5,
            Ja: a.isOpen === o ? o : q,
            TY: 4,
            pa: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new K(0, 0);
        this.Fp = this.Gp = 13;
        this.fc(a.anchor);
        this.od(this.k.size);
        this.bf()
    }

    w.lang.ia(lb, Sb, "OverviewMapControl");
    w.extend(lb.prototype, {
        initialize: function (a) {
            this.B = a;
            return this.A
        }, fc: function (a) {
            Sb.prototype.fc.call(this, a)
        }, Wd: function () {
            this.Wd.xn = o;
            this.k.Ja = !this.k.Ja;
            this.A || (this.Wd.xn = q)
        }, od: function (a) {
            a instanceof K || (a = new K(150, 150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.k.size = a
        }, Ib: function () {
            return this.k.size
        }, Ja: function () {
            return this.k.Ja
        }, bf: function () {
            var a = this;
            I.load("control", function () {
                a.qg()
            })
        }
    });
    function jb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {Xg: q, color: "black", Nc: "metric", pa: a.offset};
        this.defaultAnchor = Vb;
        this.defaultOffset = new K(81, 18);
        this.fc(a.anchor);
        this.Dh = {
            metric: {name: "metric", LI: 1, nK: 1E3, LM: "\u7c73", MM: "\u516c\u91cc"},
            us: {name: "us", LI: 3.2808, nK: 5280, LM: "\u82f1\u5c3a", MM: "\u82f1\u91cc"}
        };
        this.Dh[this.k.Nc] || (this.k.Nc = "metric");
        this.rH = p;
        this.SG = {};
        this.bf()
    }

    w.lang.ia(jb, Sb, "ScaleControl");
    w.object.extend(jb.prototype, {
        initialize: function (a) {
            this.B = a;
            return this.A
        }, jk: function (a) {
            this.k.color = a + ""
        }, B_: function () {
            return this.k.color
        }, jE: function (a) {
            this.k.Nc = this.Dh[a] && this.Dh[a].name || this.k.Nc
        }, tV: function () {
            return this.k.Nc
        }, bf: function () {
            var a = this;
            I.load("control", function () {
                a.qg()
            })
        }
    });
    var Yb = 0;

    function mb(a) {
        Sb.call(this);
        a = a || {};
        this.defaultAnchor = Ub;
        this.defaultOffset = new K(10, 10);
        this.k = {
            Xg: q,
            Ug: [La, Xa, Qa, Oa],
            KT: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || Yb,
            pa: a.offset || this.defaultOffset,
            jU: o
        };
        this.fc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.Ug = a.mapTypes.slice(0));
        this.bf()
    }

    w.lang.ia(mb, Sb, "MapTypeControl");
    w.object.extend(mb.prototype, {
        initialize: function (a) {
            this.B = a;
            return this.A
        }, Fx: function (a) {
            this.B.jn = a
        }, bf: function () {
            var a = this;
            I.load("control", function () {
                a.qg()
            }, o)
        }
    });
    function Zb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {Xg: q, pa: a.offset, anchor: a.anchor};
        this.ui = q;
        this.av = p;
        this.aH = new $b({yf: "api"});
        this.bH = new ac(p, {yf: "api"});
        this.defaultAnchor = Ub;
        this.defaultOffset = new K(10, 10);
        this.fc(a.anchor);
        this.bf();
        Pa(wa)
    }

    w.lang.ia(Zb, Sb, "PanoramaControl");
    w.extend(Zb.prototype, {
        initialize: function (a) {
            this.B = a;
            return this.A
        }, bf: function () {
            var a = this;
            I.load("control", function () {
                a.qg()
            })
        }
    });
    function bc(a) {
        w.lang.ra.call(this);
        this.k = {Ha: p, cursor: "default"};
        this.k = w.extend(this.k, a);
        this.xb = "contextmenu";
        this.B = p;
        this.na = [];
        this.nf = [];
        this.ke = [];
        this.Pv = this.rr = p;
        this.rh = q;
        var b = this;
        I.load("menu", function () {
            b.ob()
        })
    }

    w.lang.ia(bc, w.lang.ra, "ContextMenu");
    w.object.extend(bc.prototype, {
        fa: function (a, b) {
            this.B = a;
            this.Tk = b || p
        }, remove: function () {
            this.B = this.Tk = p
        }, tv: function (a) {
            if (a && !("menuitem" != a.xb || "" == a.Ag || 0 >= a.Ei)) {
                for (var b = 0, c = this.na.length; b < c; b++)if (this.na[b] === a)return;
                this.na.push(a);
                this.nf.push(a)
            }
        }, removeItem: function (a) {
            if (a && "menuitem" == a.xb) {
                for (var b = 0, c = this.na.length; b < c; b++)this.na[b] === a && (this.na[b].remove(), this.na.splice(b, 1), c--);
                b = 0;
                for (c = this.nf.length; b < c; b++)this.nf[b] === a && (this.nf[b].remove(), this.nf.splice(b, 1), c--)
            }
        }, PA: function () {
            this.na.push({xb: "divider", sj: this.ke.length});
            this.ke.push({C: p})
        }, SD: function (a) {
            if (this.ke[a]) {
                for (var b = 0, c = this.na.length; b < c; b++)this.na[b] && ("divider" == this.na[b].xb && this.na[b].sj == a) && (this.na.splice(b, 1), c--), this.na[b] && ("divider" == this.na[b].xb && this.na[b].sj > a) && this.na[b].sj--;
                this.ke.splice(a, 1)
            }
        }, jd: u("A"), show: function () {
            this.rh != o && (this.rh = o)
        }, J: function () {
            this.rh != q && (this.rh = q)
        }, tX: function (a) {
            a && (this.k.cursor = a)
        }, getItem: function (a) {
            return this.nf[a]
        }
    });
    var cc = E.ea + "menu_zoom_in.png", dc = E.ea + "menu_zoom_out.png";

    function ec(a, b, c) {
        if (a && Wa(b)) {
            w.lang.ra.call(this);
            this.k = {width: 100, id: "", Yl: ""};
            c = c || {};
            this.k.width = 1 * c.width ? c.width : 100;
            this.k.id = c.id ? c.id : "";
            this.k.Yl = c.iconUrl ? c.iconUrl : "";
            this.Ag = a + "";
            this.vy = b;
            this.B = p;
            this.xb = "menuitem";
            this.Xq = this.tu = this.A = this.ih = p;
            this.mh = o;
            var d = this;
            I.load("menu", function () {
                d.ob()
            })
        }
    }

    w.lang.ia(ec, w.lang.ra, "MenuItem");
    w.object.extend(ec.prototype, {
        fa: function (a, b) {
            this.B = a;
            this.ih = b
        }, remove: function () {
            this.B = this.ih = p
        }, Ss: function (a) {
            a && (this.Ag = a + "")
        }, Kb: function (a) {
            a && (this.k.Yl = a)
        }, jd: u("A"), enable: function () {
            this.mh = o
        }, disable: function () {
            this.mh = q
        }
    });
    function eb(a, b) {
        a && !b && (b = a);
        this.pe = this.oe = this.ue = this.te = this.hl = this.Sk = p;
        a && (this.hl = new H(a.lng, a.lat), this.Sk = new H(b.lng, b.lat), this.ue = a.lng, this.te = a.lat, this.pe = b.lng, this.oe = b.lat)
    }

    w.object.extend(eb.prototype, {
        cj: function () {
            return !this.hl || !this.Sk
        }, Xa: function (a) {
            return !(a instanceof eb) || this.cj() ? q : this.Be().Xa(a.Be()) && this.zf().Xa(a.zf())
        }, Be: u("hl"), zf: u("Sk"), vT: function (a) {
            return !(a instanceof eb) || this.cj() || a.cj() ? q : a.ue > this.ue && a.pe < this.pe && a.te > this.te && a.oe < this.oe
        }, ya: function () {
            return this.cj() ? p : new H((this.ue + this.pe) / 2, (this.te + this.oe) / 2)
        }, is: function (a) {
            if (!(a instanceof eb) || Math.max(a.ue, a.pe) < Math.min(this.ue, this.pe) || Math.min(a.ue, a.pe) > Math.max(this.ue, this.pe) || Math.max(a.te, a.oe) < Math.min(this.te, this.oe) || Math.min(a.te, a.oe) > Math.max(this.te, this.oe))return p;
            var b = Math.max(this.ue, a.ue), c = Math.min(this.pe, a.pe), d = Math.max(this.te, a.te), a = Math.min(this.oe, a.oe);
            return new eb(new H(b, d), new H(c, a))
        }, mr: function (a) {
            return !(a instanceof H) || this.cj() ? q : a.lng >= this.ue && a.lng <= this.pe && a.lat >= this.te && a.lat <= this.oe
        }, extend: function (a) {
            if (a instanceof H) {
                var b = a.lng, a = a.lat;
                this.hl || (this.hl = new H(0, 0));
                this.Sk || (this.Sk = new H(0, 0));
                if (!this.ue || this.ue > b)this.hl.lng = this.ue = b;
                if (!this.pe || this.pe < b)this.Sk.lng = this.pe = b;
                if (!this.te || this.te > a)this.hl.lat = this.te = a;
                if (!this.oe || this.oe < a)this.Sk.lat = this.oe = a
            }
        }, uE: function () {
            return this.cj() ? new H(0, 0) : new H(Math.abs(this.pe - this.ue), Math.abs(this.oe - this.te))
        }
    });
    function H(a, b) {
        isNaN(a) && (a = Jb(a), a = isNaN(a) ? 0 : a);
        Ya(a) && (a = parseFloat(a));
        isNaN(b) && (b = Jb(b), b = isNaN(b) ? 0 : b);
        Ya(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }

    H.tK = function (a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    H.prototype.Xa = function (a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };
    function fc() {
    }

    fc.prototype.Sg = function () {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    fc.prototype.Zh = function () {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    function gc() {
    };
    var db = {
        NI: function (a, b, c) {
            I.load("coordtransutils", function () {
                db.RS(a, b, c)
            }, o)
        }, MI: function (a, b, c) {
            I.load("coordtransutils", function () {
                db.QS(a, b, c)
            }, o)
        }
    };

    function Q() {
    }

    Q.prototype = new fc;
    w.extend(Q, {
        qN: 6370996.81,
        bF: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Gt: [75, 60, 45, 30, 15, 0],
        wN: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        ZE: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        G_: function (a, b) {
            if (!a || !b)return 0;
            var c, d, a = this.qb(a);
            if (!a)return 0;
            c = this.rk(a.lng);
            d = this.rk(a.lat);
            b = this.qb(b);
            return !b ? 0 : this.Se(c, this.rk(b.lng), d, this.rk(b.lat))
        },
        eo: function (a, b) {
            if (!a || !b)return 0;
            a.lng = this.JC(a.lng, -180, 180);
            a.lat = this.OC(a.lat, -74, 74);
            b.lng = this.JC(b.lng, -180, 180);
            b.lat = this.OC(b.lat, -74, 74);
            return this.Se(this.rk(a.lng), this.rk(b.lng), this.rk(a.lat), this.rk(b.lat))
        },
        qb: function (a) {
            if (a === p || a === j)return new H(0, 0);
            var b, c;
            b = new H(Math.abs(a.lng), Math.abs(a.lat));
            for (var d = 0; d < this.bF.length; d++)if (b.lat >= this.bF[d]) {
                c = this.wN[d];
                break
            }
            a = this.OI(a, c);
            return a = new H(a.lng.toFixed(6), a.lat.toFixed(6))
        },
        Bb: function (a) {
            if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)return new H(0, 0);
            var b, c;
            a.lng = this.JC(a.lng, -180, 180);
            a.lat = this.OC(a.lat, -74, 74);
            b = new H(a.lng, a.lat);
            for (var d = 0; d < this.Gt.length; d++)if (b.lat >= this.Gt[d]) {
                c = this.ZE[d];
                break
            }
            if (!c)for (d = this.Gt.length - 1; 0 <= d; d--)if (b.lat <= -this.Gt[d]) {
                c = this.ZE[d];
                break
            }
            a = this.OI(a, c);
            return a = new H(a.lng.toFixed(2), a.lat.toFixed(2))
        },
        OI: function (a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng), d = Math.abs(a.lat) / b[9], d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d, c = c * (0 > a.lng ? -1 : 1), d = d * (0 > a.lat ? -1 : 1);
                return new H(c, d)
            }
        },
        Se: function (a, b, c, d) {
            return this.qN * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
        },
        rk: function (a) {
            return Math.PI * a / 180
        },
        o1: function (a) {
            return 180 * a / Math.PI
        },
        OC: function (a, b, c) {
            b != p && (a = Math.max(a, b));
            c != p && (a = Math.min(a, c));
            return a
        },
        JC: function (a, b, c) {
            for (; a > c;)a -= c - b;
            for (; a < b;)a += c - b;
            return a
        }
    });
    w.extend(Q.prototype, {
        em: function (a) {
            return Q.Bb(a)
        }, Sg: function (a) {
            a = Q.Bb(a);
            return new P(a.lng, a.lat)
        }, Th: function (a) {
            return Q.qb(a)
        }, Zh: function (a) {
            a = new H(a.x, a.y);
            return Q.qb(a)
        }, Rb: function (a, b, c, d, e) {
            if (a)return a = this.em(a, e), b = this.lc(b), new P(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
        }, kb: function (a, b, c, d, e) {
            if (a)return b = this.lc(b), this.Th(new H(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
        }, lc: function (a) {
            return Math.pow(2, 18 - a)
        }
    });
    function gb() {
        this.tB = "bj"
    }

    gb.prototype = new Q;
    w.extend(gb.prototype, {
        em: function (a, b) {
            return this.FO(b, Q.Bb(a))
        }, Th: function (a, b) {
            return Q.qb(this.GO(b, a))
        }, lngLatToPointFor3D: function (a, b) {
            var c = this, d = Q.Bb(a);
            I.load("coordtrans", function () {
                var a = gc.LC(c.tB || "bj", d), a = new P(a.x, a.y);
                b && b(a)
            }, o)
        }, pointToLngLatFor3D: function (a, b) {
            var c = this, d = new H(a.x, a.y);
            I.load("coordtrans", function () {
                var a = gc.KC(c.tB || "bj", d), a = new H(a.lng, a.lat), a = Q.qb(a);
                b && b(a)
            }, o)
        }, FO: function (a, b) {
            if (I.Ua("coordtrans").ed == I.mj.jp) {
                var c = gc.LC(a || "bj", b);
                return new H(c.x, c.y)
            }
            I.load("coordtrans", s());
            return new H(0, 0)
        }, GO: function (a, b) {
            if (I.Ua("coordtrans").ed == I.mj.jp) {
                var c = gc.KC(a || "bj", b);
                return new H(c.lng, c.lat)
            }
            I.load("coordtrans", s());
            return new H(0, 0)
        }, lc: function (a) {
            return Math.pow(2, 20 - a)
        }
    });
    function hc() {
        this.xb = "overlay"
    }

    w.lang.ia(hc, w.lang.ra, "Overlay");
    hc.Ul = function (a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    };
    w.extend(hc.prototype, {
        Ke: function (a) {
            if (!this.K && Wa(this.initialize) && (this.K = this.initialize(a)))this.K.style.WebkitUserSelect = "none";
            this.draw()
        }, initialize: function () {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }, draw: function () {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }, remove: function () {
            this.K && this.K.parentNode && this.K.parentNode.removeChild(this.K);
            this.K = p;
            this.dispatchEvent(new L("onremove"))
        }, J: function () {
            this.K && w.C.J(this.K)
        }, show: function () {
            this.K && w.C.show(this.K)
        }, Rg: function () {
            return !this.K || "none" == this.K.style.display || "hidden" == this.K.style.visibility ? q : o
        }
    });
    z.Ee(function (a) {
        function b(a, b) {
            var c = J("div"), g = c.style;
            g.position = "absolute";
            g.top = g.left = g.width = g.height = "0";
            g.zIndex = b;
            a.appendChild(c);
            return c
        }

        var c = a.H;
        c.Ye = a.Ye = b(a.platform, 200);
        a.Sd.nC = b(c.Ye, 800);
        a.Sd.wD = b(c.Ye, 700);
        a.Sd.xJ = b(c.Ye, 600);
        a.Sd.qD = b(c.Ye, 500);
        a.Sd.WK = b(c.Ye, 400);
        a.Sd.XK = b(c.Ye, 300);
        a.Sd.LY = b(c.Ye, 201);
        a.Sd.ts = b(c.Ye, 200)
    });
    function fb() {
        w.lang.ra.call(this);
        hc.call(this);
        this.map = p;
        this.Da = o;
        this.hb = p;
        this.MF = 0
    }

    w.lang.ia(fb, hc, "OverlayInternal");
    w.extend(fb.prototype, {
        initialize: function (a) {
            this.map = a;
            w.lang.ra.call(this, this.Q);
            return p
        }, mw: u("map"), draw: s(), remove: function () {
            this.map = p;
            w.lang.Rv(this.Q);
            hc.prototype.remove.call(this)
        }, J: function () {
            this.Da != q && (this.Da = q)
        }, show: function () {
            this.Da != o && (this.Da = o)
        }, Rg: function () {
            return !this.K ? q : !!this.Da
        }, Ea: u("K"), ZL: function (a) {
            var a = a || {}, b;
            for (b in a)this.z[b] = a[b]
        }, Ts: ba("zIndex"), Ri: function () {
            this.z.Ri = o
        }, TT: function () {
            this.z.Ri = q
        }, In: ba("Qf"), Jo: function () {
            this.Qf = p
        }
    });
    function ic() {
        this.map = p;
        this.ka = {};
        this.je = []
    }

    z.Ee(function (a) {
        var b = new ic;
        b.map = a;
        a.ka = b.ka;
        a.je = b.je;
        a.addEventListener("load", function (a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function (a) {
            b.draw(a)
        });
        w.S.ba && 8 > w.S.ba || "BackCompat" == document.compatMode ? a.addEventListener("zoomend", function (a) {
            setTimeout(function () {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function (a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function (a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function (a) {
            a = a.target;
            if (a instanceof fb)b.ka[a.Q] || (b.ka[a.Q] = a); else {
                for (var d = q, e = 0, f = b.je.length; e < f; e++)if (b.je[e] === a) {
                    d = o;
                    break
                }
                d || b.je.push(a)
            }
        });
        a.addEventListener("removeoverlay", function (a) {
            a = a.target;
            if (a instanceof fb)delete b.ka[a.Q]; else for (var d = 0, e = b.je.length; d < e; d++)if (b.je[d] === a) {
                b.je.splice(d, 1);
                break
            }
        });
        a.addEventListener("clearoverlays", function () {
            this.Hc();
            for (var a in b.ka)b.ka[a].z.Ri && (b.ka[a].remove(), delete b.ka[a]);
            a = 0;
            for (var d = b.je.length; a < d; a++)b.je[a].Ri != q && (b.je[a].remove(), b.je[a] = p, b.je.splice(a, 1), a--, d--)
        });
        a.addEventListener("infowindowopen", function () {
            var a = this.hb;
            a && (w.C.J(a.cc), w.C.J(a.Lb))
        });
        a.addEventListener("movestart", function () {
            this.Mg() && this.Mg().xH()
        });
        a.addEventListener("moveend", function () {
            this.Mg() && this.Mg().nH()
        })
    });
    ic.prototype.draw = function (a) {
        if (z.np) {
            var b = z.np.Rr(this.map);
            "canvas" == b.xb && b.canvas && b.AO(b.canvas.getContext("2d"))
        }
        for (var c in this.ka)this.ka[c].draw(a);
        w.Wb.Db(this.je, function (a) {
            a.draw()
        });
        this.map.H.Ya && this.map.H.Ya.ha();
        z.np && b.gE()
    };
    function jc(a) {
        fb.call(this);
        a = a || {};
        this.z = {
            strokeColor: a.strokeColor || "#3a6bdb",
            oc: a.strokeWeight || 5,
            sd: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            Ri: a.enableMassClear === q ? q : o,
            Vj: p,
            Pl: p,
            xf: a.enableEditing === o ? o : q,
            eL: 5,
            DY: q,
            Oe: a.enableClicking === q ? q : o,
            Ph: a.icons && 0 < a.icons.length ? a.icons : p
        };
        0 >= this.z.oc && (this.z.oc = 5);
        if (0 > this.z.sd || 1 < this.z.sd)this.z.sd = 0.65;
        if (0 > this.z.Zf || 1 < this.z.Zf)this.z.Zf = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.K = p;
        this.St = new eb(0, 0);
        this.Me = [];
        this.Vb = [];
        this.Fa = {}
    }

    w.lang.ia(jc, fb, "Graph");
    jc.hw = function (a) {
        var b = [];
        if (!a)return b;
        Ya(a) && w.Wb.Db(a.split(";"), function (a) {
            a = a.split(",");
            b.push(new H(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    jc.FD = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    w.extend(jc.prototype, {
        initialize: function (a) {
            this.map = a;
            return p
        }, draw: s(), Rq: function (a) {
            this.Me.length = 0;
            this.W = jc.hw(a).slice(0);
            this.fh()
        }, fe: function (a) {
            this.Rq(a)
        }, fh: function () {
            if (this.W) {
                var a = this;
                a.St = new eb;
                w.Wb.Db(this.W, function (b) {
                    a.St.extend(b)
                })
            }
        }, Zd: u("W"), zm: function (a, b) {
            b && this.W[a] && (this.Me.length = 0, this.W[a] = new H(b.lng, b.lat), this.fh())
        }, setStrokeColor: function (a) {
            this.z.strokeColor = a
        }, jV: function () {
            return this.z.strokeColor
        }, $o: function (a) {
            0 < a && (this.z.oc = a)
        }, WJ: function () {
            return this.z.oc
        }, Yo: function (a) {
            a == j || (1 < a || 0 > a) || (this.z.sd = a)
        }, kV: function () {
            return this.z.sd
        }, Ms: function (a) {
            1 < a || 0 > a || (this.z.Zf = a)
        }, KU: function () {
            return this.z.Zf
        }, Zo: function (a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
        }, VJ: function () {
            return this.z.strokeStyle
        }, setFillColor: function (a) {
            this.z.fillColor = a || ""
        }, JU: function () {
            return this.z.fillColor
        }, Id: u("St"), remove: function () {
            this.map && this.map.removeEventListener("onmousemove", this.qu);
            fb.prototype.remove.call(this);
            this.Me.length = 0
        }, xf: function () {
            if (!(2 > this.W.length)) {
                this.z.xf = o;
                var a = this;
                I.load("poly", function () {
                    a.ol()
                }, o)
            }
        }, ST: function () {
            this.z.xf = q;
            var a = this;
            I.load("poly", function () {
                a.Lj()
            }, o)
        }
    });
    function kc(a) {
        fb.call(this);
        this.K = this.map = p;
        this.z = {
            width: 0,
            height: 0,
            pa: new K(0, 0),
            opacity: 1,
            background: "transparent",
            Mw: 1,
            IK: "#000",
            dW: "solid",
            point: p
        };
        this.ZL(a);
        this.point = this.z.point
    }

    w.lang.ia(kc, fb, "Division");
    w.extend(kc.prototype, {
        yk: function () {
            var a = this.z, b = this.content, c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.Mw + "px " + a.dW + " " + a.IK + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.K = Ab(this.map.Bf().wD, c.join(""))
        }, initialize: function (a) {
            this.map = a;
            this.yk();
            this.K && w.F(this.K, G() ? "touchstart" : "mousedown", function (a) {
                oa(a)
            });
            return this.K
        }, draw: function () {
            var a = this.map.De(this.z.point);
            this.z.pa = new K(-Math.round(this.z.width / 2) - Math.round(this.z.Mw), -Math.round(this.z.height / 2) - Math.round(this.z.Mw));
            this.K.style.left = a.x + this.z.pa.width + "px";
            this.K.style.top = a.y + this.z.pa.height + "px"
        }, V: function () {
            return this.z.point
        }, sZ: function () {
            return this.map.Rb(this.V())
        }, ha: function (a) {
            this.z.point = a;
            this.draw()
        }, uX: function (a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.K && (this.K.style.width = this.z.width + "px", this.K.style.height = this.z.height + "px", this.draw())
        }
    });
    function lc(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new K(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new K(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
    }

    w.extend(lc.prototype, {
        CX: function (a) {
            a && (this.imageUrl = a)
        }, NX: function (a) {
            a && (this.printImageUrl = a)
        }, od: function (a) {
            a && (this.size = new K(a.width, a.height))
        }, fc: function (a) {
            a && (this.anchor = new K(a.width, a.height))
        }, Ns: function (a) {
            a && (this.imageOffset = new K(a.width, a.height))
        }, EX: function (a) {
            a && (this.infoWindowAnchor = new K(a.width, a.height))
        }, AX: function (a) {
            a && (this.imageSize = new K(a.width, a.height))
        }, toString: da("Icon")
    });
    function mc(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new K(0, 0),
                fillColor: b.fillColor || "#000",
                Zf: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                sd: b.strokeOpacity || 1,
                oc: b.strokeWeight
            };
            this.xb = "number" === typeof a ? a : "UserDefined";
            this.li = this.style.anchor;
            this.vq = new K(0, 0);
            this.anchor = p;
            this.hA = a;
            var c = this;
            I.load("symbol", function () {
                c.Vm()
            }, o)
        }
    }

    w.extend(mc.prototype, {
        setPath: ba("hA"), setAnchor: function (a) {
            this.li = this.style.anchor = a
        }, setRotation: function (a) {
            this.style.rotation = a
        }, setScale: function (a) {
            this.style.scale = a
        }, setStrokeWeight: function (a) {
            this.style.oc = a
        }, setStrokeColor: function (a) {
            a = w.lr.oB(a, this.style.sd);
            this.style.strokeColor = a
        }, setStrokeOpacity: function (a) {
            this.style.sd = a
        }, setFillOpacity: function (a) {
            this.style.Zf = a
        }, setFillColor: function (a) {
            this.style.fillColor = a
        }
    });
    function nc(a, b, c, d) {
        a && (this.Ju = {}, this.wJ = d ? !!d : q, this.Fc = [], this.cY = a instanceof mc ? a : p, this.gH = b === j ? o : !!(b.indexOf("%") + 1), this.Bj = isNaN(parseFloat(b)) ? 1 : this.gH ? parseFloat(b) / 100 : parseFloat(b), this.hH = !!(c.indexOf("%") + 1), this.repeat = c != j ? this.hH ? parseFloat(c) / 100 : parseFloat(c) : 0)
    };
    function oc(a, b) {
        w.lang.ra.call(this);
        this.content = a;
        this.map = p;
        b = b || {};
        this.z = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            pa: b.offset || new K(0, 0),
            title: b.title || "",
            xD: b.maxContent || "",
            Gg: b.enableMaximize || q,
            Ir: b.enableAutoPan === q ? q : o,
            $B: b.enableCloseOnClick === q ? q : o,
            margin: b.margin || [10, 10, 40, 10],
            jB: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
            GV: q,
            yW: b.onClosing || da(o),
            cC: b.enableMessage === q ? q : o,
            eC: b.enableParano === o ? o : q,
            message: b.message,
            gC: b.enableSearchTool === o ? o : q,
            yw: b.headerContent || ""
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220), 730 < this.z.width))this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60), 650 < this.z.height))this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth))this.z.maxWidth = 730;
        this.Kd = q;
        this.hi = E.ea;
        this.Qa = p;
        var c = this;
        I.load("infowindow", function () {
            c.ob()
        })
    }

    w.lang.ia(oc, w.lang.ra, "InfoWindow");
    w.extend(oc.prototype, {
        setWidth: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.width = a)
        }, setHeight: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.z.height = a)
        }, bM: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.maxWidth = a)
        }, nc: function (a) {
            this.z.title = a
        }, getTitle: function () {
            return this.z.title
        }, Mc: ba("content"), Tj: u("content"), Ps: function (a) {
            this.z.xD = a + ""
        }, Pd: s(), Ir: function () {
            this.z.Ir = o
        }, disableAutoPan: function () {
            this.z.Ir = q
        }, enableCloseOnClick: function () {
            this.z.$B = o
        }, disableCloseOnClick: function () {
            this.z.$B = q
        }, Gg: function () {
            this.z.Gg = o
        }, Uv: function () {
            this.z.Gg = q
        }, show: function () {
            this.Da = o
        }, J: function () {
            this.Da = q
        }, close: function () {
            this.J()
        }, Qw: function () {
            this.Kd = o
        }, restore: function () {
            this.Kd = q
        }, Rg: function () {
            return this.Ja()
        }, Ja: da(q), V: function () {
            if (this.Qa && this.Qa.V)return this.Qa.V()
        }, Af: function () {
            return this.z.pa
        }
    });
    Ka.prototype.bc = function (a, b) {
        if (a instanceof oc && b instanceof H) {
            var c = this.H;
            c.gm ? c.gm.ha(b) : (c.gm = new R(b, {
                icon: new lc(E.ea + "blank.gif", {width: 1, height: 1}),
                offset: new K(0, 0),
                clickable: q
            }), c.gm.AP = 1);
            this.wa(c.gm);
            c.gm.bc(a)
        }
    };
    Ka.prototype.Hc = function () {
        var a = this.H.Ya || this.H.Jk;
        a && a.Qa && a.Qa.Hc()
    };
    fb.prototype.bc = function (a) {
        this.map && (this.map.Hc(), a.Da = o, this.map.H.Jk = a, a.Qa = this, w.lang.ra.call(a, a.Q))
    };
    fb.prototype.Hc = function () {
        this.map && this.map.H.Jk && (this.map.H.Jk.Da = q, w.lang.Rv(this.map.H.Jk.Q), this.map.H.Jk = p)
    };
    function pc(a, b) {
        fb.call(this);
        this.content = a;
        this.K = this.map = p;
        b = b || {};
        this.z = {
            width: 0,
            pa: b.offset || new K(0, 0),
            bp: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + E.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || p,
            Ri: b.enableMassClear === q ? q : o,
            Oe: o
        };
        0 > this.z.width && (this.z.width = 0);
        Gb(b.enableClicking) && (this.z.Oe = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        I.load("marker", function () {
            c.ob()
        })
    }

    w.lang.ia(pc, fb, "Label");
    w.extend(pc.prototype, {
        V: function () {
            return this.Au ? this.Au.V() : this.point
        }, ha: function (a) {
            a instanceof H && !this.nw() && (this.point = this.z.position = new H(a.lng, a.lat))
        }, Mc: ba("content"), fE: function (a) {
            0 <= a && 1 >= a && (this.z.opacity = a)
        }, ee: function (a) {
            a instanceof K && (this.z.pa = new K(a.width, a.height))
        }, Af: function () {
            return this.z.pa
        }, qd: function (a) {
            a = a || {};
            this.z.bp = w.extend(this.z.bp, a)
        }, ai: function (a) {
            return this.qd(a)
        }, nc: function (a) {
            this.z.title = a || ""
        }, getTitle: function () {
            return this.z.title
        }, aM: function (a) {
            this.point = (this.Au = a) ? this.z.position = a.V() : this.z.position = p
        }, nw: function () {
            return this.Au || p
        }, Tj: u("content")
    });
    function qc(a, b) {
        if (0 !== arguments.length) {
            fb.apply(this, arguments);
            b = b || {};
            this.z = {
                Ta: a,
                opacity: b.opacity || 1,
                $l: b.$l || "",
                Ar: b.displayOnMinLevel || 1,
                zr: b.displayOnMaxLevel || 19
            };
            var c = this;
            I.load("groundoverlay", function () {
                c.ob()
            })
        }
    }

    w.lang.ia(qc, fb, "GroundOverlay");
    w.extend(qc.prototype, {
        setBounds: function (a) {
            this.z.Ta = a
        }, getBounds: function () {
            return this.z.Ta
        }, setOpacity: function (a) {
            this.z.opacity = a
        }, getOpacity: function () {
            return this.z.opacity
        }, setImageURL: function (a) {
            this.z.$l = a
        }, getImageURL: function () {
            return this.z.$l
        }, setDispalyOnMinLevel: function (a) {
            this.z.Ar = a
        }, getDispalyOnMinLevel: function () {
            return this.z.Ar
        }, setDispalyOnMaxLevel: function (a) {
            this.z.zr = a
        }, getDispalyOnMaxLevel: function () {
            return this.z.zr
        }
    });
    var rc = 3, sc = 4;

    function tc() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function uc(a, b) {
        var c = this;
        tc() && (a === j && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, fb.apply(c, arguments), c.R = {W: a}, c.z = {
            shape: b.shape || rc,
            size: b.size || sc,
            color: b.color || "#fa937e",
            Ri: o
        }, this.eA = [], this.Ud = [], I.load("pointcollection", function () {
            for (var a = 0, b; b = c.eA[a]; a++)c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.Ud[a]; a++)c[b.method].apply(c, b.arguments)
        }))
    }

    w.lang.ia(uc, fb, "PointCollection");
    w.extend(uc.prototype, {
        initialize: function (a) {
            this.eA && this.eA.push({method: "initialize", arguments: arguments})
        }, setPoints: function (a) {
            this.Ud && this.Ud.push({method: "setPoints", arguments: arguments})
        }, setStyles: function (a) {
            this.Ud && this.Ud.push({method: "setStyles", arguments: arguments})
        }, clear: function () {
            this.Ud && this.Ud.push({method: "clear", arguments: arguments})
        }, remove: function () {
            this.Ud && this.Ud.push({method: "remove", arguments: arguments})
        }
    });
    var vc = new lc(E.ea + "marker_red_sprite.png", new K(19, 25), {
        anchor: new K(10, 25),
        infoWindowAnchor: new K(10, 0)
    }), wc = new lc(E.ea + "marker_red_sprite.png", new K(20, 11), {
        anchor: new K(6, 11),
        imageOffset: new K(-19, -13)
    });

    function R(a, b) {
        fb.call(this);
        b = b || {};
        this.point = a;
        this.Bp = this.map = p;
        this.z = {
            pa: b.offset || new K(0, 0),
            Qg: b.icon || vc,
            lk: wc,
            title: b.title || "",
            label: p,
            vI: b.baseZIndex || 0,
            Oe: o,
            J1: q,
            nD: q,
            Ri: b.enableMassClear === q ? q : o,
            Pb: q,
            KL: b.raiseOnDrag === o ? o : q,
            QL: q,
            gd: b.draggingCursor || E.gd,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.z.lk = p);
        b.enableDragging && (this.z.Pb = b.enableDragging);
        Gb(b.enableClicking) && (this.z.Oe = b.enableClicking);
        var c = this;
        I.load("marker", function () {
            c.ob()
        })
    }

    R.Lt = hc.Ul(-90) + 1E6;
    R.UE = R.Lt + 1E6;
    w.lang.ia(R, fb, "Marker");
    w.extend(R.prototype, {
        Kb: function (a) {
            if (a instanceof lc || a instanceof mc)this.z.Qg = a
        }, fo: function () {
            return this.z.Qg
        }, vx: function (a) {
            a instanceof lc && (this.z.lk = a)
        }, getShadow: function () {
            return this.z.lk
        }, xm: function (a) {
            this.z.label = a || p
        }, HC: function () {
            return this.z.label
        }, Pb: function () {
            this.z.Pb = o
        }, HB: function () {
            this.z.Pb = q
        }, V: u("point"), ha: function (a) {
            a instanceof H && (this.point = new H(a.lng, a.lat))
        }, bi: function (a, b) {
            this.z.nD = !!a;
            a && (this.pF = b || 0)
        }, nc: function (a) {
            this.z.title = a + ""
        }, getTitle: function () {
            return this.z.title
        }, ee: function (a) {
            a instanceof K && (this.z.pa = a)
        }, Af: function () {
            return this.z.pa
        }, wm: ba("Bp"), Xo: function (a) {
            this.z.rotation = a
        }, TJ: function () {
            return this.z.rotation
        }
    });
    function xc(a, b) {
        jc.call(this, b);
        b = b || {};
        this.z.Zf = b.fillOpacity ? b.fillOpacity : 0.65;
        this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.fe(a);
        var c = this;
        I.load("poly", function () {
            c.ob()
        })
    }

    w.lang.ia(xc, jc, "Polygon");
    w.extend(xc.prototype, {
        fe: function (a, b) {
            this.Fn = jc.hw(a).slice(0);
            var c = jc.hw(a).slice(0);
            1 < c.length && c.push(new H(c[0].lng, c[0].lat));
            jc.prototype.fe.call(this, c, b)
        }, zm: function (a, b) {
            this.Fn[a] && (this.Fn[a] = new H(b.lng, b.lat), this.W[a] = new H(b.lng, b.lat), 0 == a && !this.W[0].Xa(this.W[this.W.length - 1]) && (this.W[this.W.length - 1] = new H(b.lng, b.lat)), this.fh())
        }, Zd: function () {
            var a = this.Fn;
            0 == a.length && (a = this.W);
            return a
        }
    });
    function yc(a, b) {
        jc.call(this, b);
        this.Rq(a);
        var c = this;
        I.load("poly", function () {
            c.ob()
        })
    }

    w.lang.ia(yc, jc, "Polyline");
    function zc(a, b, c) {
        this.point = a;
        this.la = Math.abs(b);
        xc.call(this, [], c)
    }

    zc.FD = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    w.lang.ia(zc, xc, "Circle");
    w.extend(zc.prototype, {
        initialize: function (a) {
            this.map = a;
            this.W = this.nu(this.point, this.la);
            this.fh();
            return p
        }, ya: u("point"), Ff: function (a) {
            a && (this.point = a)
        }, RJ: u("la"), $e: function (a) {
            this.la = Math.abs(a)
        }, nu: function (a, b) {
            if (!a || !b || !this.map)return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var i = Math.PI / 180 * g, k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i)), i = new H(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                c.push(i)
            }
            d = c[0];
            c.push(new H(d.lng, d.lat));
            return c
        }
    });
    var Ac = {};

    function Bc(a) {
        this.map = a;
        this.fm = [];
        this.Gf = [];
        this.ng = [];
        this.eT = 300;
        this.OD = 0;
        this.eg = {};
        this.Ii = {};
        this.Wg = 0;
        this.hD = o;
        this.VI = {};
        this.zu = this.Ym(1);
        this.ve = this.Ym(2);
        this.tq = this.Ym(3);
        a.platform.appendChild(this.zu);
        a.platform.appendChild(this.ve);
        a.platform.appendChild(this.tq)
    }

    z.Ee(function (a) {
        var b = new Bc(a);
        b.fa();
        a.sb = b
    });
    w.extend(Bc.prototype, {
        fa: function () {
            var a = this, b = a.map;
            b.addEventListener("loadcode", function () {
                a.Nw()
            });
            b.addEventListener("addtilelayer", function (b) {
                a.Dg(b)
            });
            b.addEventListener("removetilelayer", function (b) {
                a.$g(b)
            });
            b.addEventListener("setmaptype", function (b) {
                a.lg(b)
            });
            b.addEventListener("zoomstartcode", function (b) {
                a.xc(b)
            });
            b.addEventListener("setcustomstyles", function (b) {
                a.Os(b.target);
                a.gg(o)
            })
        }, Nw: function () {
            var a = this;
            if (w.S.ba)try {
                document.execCommand("BackgroundImageCache", q, o)
            } catch (b) {
            }
            this.loaded || a.Ew();
            a.gg();
            this.loaded || (this.loaded = o, I.load("tile", function () {
                a.ZN()
            }))
        }, Ew: function () {
            for (var a = this.map.ja().oq, b = 0; b < a.length; b++) {
                var c = new Cc;
                w.extend(c, a[b]);
                this.fm.push(c);
                c.fa(this.map, this.zu)
            }
            this.Os()
        }, Ym: function (a) {
            var b = J("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        }, cf: function () {
            this.Wg--;
            var a = this;
            this.hD && (this.map.dispatchEvent(new L("onfirsttileloaded")), this.hD = q);
            0 == this.Wg && (this.oi && (clearTimeout(this.oi), this.oi = p), this.oi = setTimeout(function () {
                if (a.Wg == 0) {
                    a.map.dispatchEvent(new L("ontilesloaded"));
                    a.hD = o
                }
                a.oi = p
            }, 80))
        }, SC: function (a, b) {
            return "TILE-" + b.Q + "-" + a[0] + "-" + a[1] + "-" + a[2]
        }, Bw: function (a) {
            var b = a.rb;
            b && zb(b) && b.parentNode.removeChild(b);
            delete this.eg[a.name];
            a.loaded || (Dc(a), a.rb = p, a.im = p)
        }, Tl: function (a, b, c) {
            var d = this.map, e = d.ja(), f = d.Ba, g = d.uc, i = e.lc(f), k = this.HJ(), l = k[0], m = k[1], n = k[2], t = k[3], v = k[4], c = "undefined" != typeof c ? c : 0, e = e.k.tb, k = d.Q.replace(/^TANGRAM_/, "");
            for (this.Bc ? this.Bc.length = 0 : this.Bc = []; l < n; l++)for (var x = m; x < t; x++) {
                var y = l, B = x;
                this.Bc.push([y, B]);
                y = k + "_" + b + "_" + y + "_" + B + "_" + f;
                this.VI[y] = y
            }
            this.Bc.sort(function (a) {
                return function (b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([v[0] - 1, v[1] - 1]));
            g = [Math.round(-g.lng / i), Math.round(g.lat / i)];
            l = -d.offsetY + d.height / 2;
            a.style.left = -d.offsetX + d.width / 2 + "px";
            a.style.top = l + "px";
            this.we ? this.we.length = 0 : this.we = [];
            l = 0;
            for (d = a.childNodes.length; l < d; l++)x = a.childNodes[l], x.kq = q, this.we.push(x);
            if (l = this.lm)for (var A in l)delete l[A]; else this.lm = {};
            this.xe ? this.xe.length = 0 : this.xe = [];
            l = 0;
            for (d = this.Bc.length; l < d; l++) {
                A = this.Bc[l][0];
                i = this.Bc[l][1];
                x = 0;
                for (m = this.we.length; x < m; x++)if (n = this.we[x], n.id == k + "_" + b + "_" + A + "_" + i + "_" + f) {
                    n.kq = o;
                    this.lm[n.id] = n;
                    break
                }
            }
            l = 0;
            for (d = this.we.length; l < d; l++)n = this.we[l], n.kq || this.xe.push(n);
            this.Em = [];
            x = (e + c) * this.map.D.devicePixelRatio;
            l = 0;
            for (d = this.Bc.length; l < d; l++)A = this.Bc[l][0], i = this.Bc[l][1], t = A * e + g[0] - c / 2, v = (-1 - i) * e + g[1] - c / 2, y = k + "_" + b + "_" + A + "_" + i + "_" + f, m = this.lm[y], n = p, m ? (n = m.style, n.left = t + "px", n.top = v + "px", m.Ie || this.Em.push([A, i, m])) : (0 < this.xe.length ? (m = this.xe.shift(), m.getContext("2d").clearRect(-c / 2, -c / 2, x, x), n = m.style) : (m = document.createElement("canvas"), n = m.style, n.position = "absolute", n.width = e + c + "px", n.height = e + c + "px", this.Iw() && (n.WebkitTransform = "scale(1.001)"), m.setAttribute("width", x), m.setAttribute("height", x), a.appendChild(m)), m.id = y, n.left = t + "px", n.top = v + "px", -1 < y.indexOf("bg") && (t = "#F3F1EC", this.map.D.Nn && (t = this.map.D.Nn), n.background = t ? t : ""), this.Em.push([A, i, m])), m.style.visibility = "";
            l = 0;
            for (d = this.xe.length; l < d; l++)this.xe[l].style.visibility = "hidden";
            return this.Em
        }, Iw: function () {
            return /M040/i.test(navigator.userAgent)
        }, HJ: function () {
            var a = this.map, b = a.ja(), c = a.Ba;
            b.lc(c);
            var c = b.WC(c), d = a.uc, e = Math.ceil(d.lng / c), f = Math.ceil(d.lat / c), b = b.k.tb, c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        }, TX: function (a, b, c, d) {
            var e = this;
            e.XZ = b;
            var f = this.map.ja(), g = e.SC(a, c), i = f.k.tb, b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]], k = this.eg[g];
            k && k.rb ? (xb(k.rb, b), d && (d = new P(a[0], a[1]), f = this.map.D.ae ? this.map.D.ae.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Ec(k, d)), k.loaded ? this.cf() : Fc(k, function () {
                e.cf()
            })) : (k = this.Ii[g]) && k.rb ? (c.Gb.insertBefore(k.rb, c.Gb.lastChild), this.eg[g] = k, xb(k.rb, b), d && (d = new P(a[0], a[1]), f = this.map.D.ae ? this.map.D.ae.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Ec(k, d)), k.loaded ? this.cf() : Fc(k, function () {
                e.cf()
            })) : (k = i * Math.pow(2, f.Ol() - a[2]), new H(a[0] * k, a[1] * k), d = new P(a[0], a[1]), f = this.map.D.ae ? this.map.D.ae.style : "normal", d = c.getTilesUrl(d, a[2], f), k = new Gc(this, d, b, a, c), Fc(k, function () {
                e.cf()
            }), Hc(k), this.eg[g] = k)
        }, cf: function () {
            this.Wg--;
            var a = this;
            0 == this.Wg && (this.oi && (clearTimeout(this.oi), this.oi = p), this.oi = setTimeout(function () {
                if (a.Wg == 0) {
                    a.map.dispatchEvent(new L("ontilesloaded"));
                    if (ua) {
                        if (ra && sa && ta) {
                            var b = $a(), c = a.map.Ib();
                            setTimeout(function () {
                                Pa(5030, {
                                    load_script_time: sa - ra,
                                    load_tiles_time: b - ta,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            va.Xb("img_fisrt_loaded");
                            va.Xb("map_width", c.width);
                            va.Xb("map_height", c.height);
                            va.Xb("map_size", c.width * c.height);
                            va.rm()
                        }
                        ua = q
                    }
                }
                a.oi = p
            }, 80))
        }, SC: function (a, b) {
            return this.map.ja() === Oa ? "TILE-" + b.Q + "-" + this.map.Ev + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.Q + "-" + a[0] + "-" + a[1] + "-" + a[2]
        }, Bw: function (a) {
            var b = a.rb;
            b && (Ic(b), zb(b) && b.parentNode.removeChild(b));
            delete this.eg[a.name];
            a.loaded || (Ic(b), Dc(a), a.rb = p, a.im = p)
        }, gg: function (a) {
            var b = this;
            if (b.map.ja() == Oa)I.load("coordtrans", function () {
                b.map.Ob || (b.map.Ob = Oa.Sj(b.map.Rn), b.map.Ev = Oa.FJ(b.map.Ob));
                b.OG()
            }, o); else {
                if (a && a)for (var c in this.Ii)delete this.Ii[c];
                b.OG(a)
            }
        }, OG: function (a) {
            for (var b = this.fm.concat(this.Gf), c = b.length, d = 0; d < c; d++) {
                var e = b[d];
                if (e.kd && l.Ba < e.kd)break;
                if (e.zv) {
                    var f = this.Gb = e.Gb;
                    if (a) {
                        var g = f;
                        if (g && g.childNodes)for (var i = g.childNodes.length, k = i - 1; 0 <= k; k--)i = g.childNodes[k], g.removeChild(i), i = p
                    }
                    if (this.map.Mb()) {
                        this.ve.style.display = "block";
                        f.style.display = "none";
                        this.map.dispatchEvent(new L("vectorchanged"), {isvector: o});
                        continue
                    } else f.style.display = "block", this.ve.style.display = "none", this.map.dispatchEvent(new L("vectorchanged"), {isvector: q})
                }
                if (!e.FG && !(e.xo && !this.map.Mb() || e.AK && this.map.Mb())) {
                    var l = this.map, m = l.ja(), f = m.mo(), i = l.Ba, n = l.uc;
                    m == Oa && n.Xa(new H(0, 0)) && (n = l.uc = f.em(l.vf, l.Ob));
                    var t = m.lc(i), i = m.WC(i), f = Math.ceil(n.lng / i), g = Math.ceil(n.lat / i), v = m.k.tb, i = [f, g, (n.lng - f * i) / i * v, (n.lat - g * i) / i * v], k = i[0] - Math.ceil((l.width / 2 - i[2]) / v), f = i[1] - Math.ceil((l.height / 2 - i[3]) / v), g = i[0] + Math.ceil((l.width / 2 + i[2]) / v), x = 0;
                    m === Oa && 15 == l.U() && (x = 1);
                    m = i[1] + Math.ceil((l.height / 2 + i[3]) / v) + x;
                    this.sI = new H(n.lng, n.lat);
                    var y = this.eg, v = -this.sI.lng / t, x = this.sI.lat / t, t = [Math.ceil(v), Math.ceil(x)], n = l.U(), B;
                    for (B in y) {
                        var A = y[B], D = A.info;
                        (D[2] != n || D[2] == n && (k > D[0] || g <= D[0] || f > D[1] || m <= D[1])) && this.Bw(A)
                    }
                    y = -l.offsetX + l.width / 2;
                    A = -l.offsetY + l.height / 2;
                    e.Gb && (e.Gb.style.left = Math.ceil(v + y) - t[0] + "px", e.Gb.style.top = Math.ceil(x + A) - t[1] + "px", e.Gb.style.WebkitTransform = "translate3d(0,0,0)");
                    v = [];
                    for (l.JA = []; k < g; k++)for (x = f; x < m; x++)v.push([k, x]), l.JA.push({x: k, y: x});
                    v.sort(function (a) {
                        return function (b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([i[0] - 1, i[1] - 1]));
                    i = v.length;
                    this.Wg += i;
                    for (k = 0; k < i; k++)this.TX([v[k][0], v[k][1], n], t, e, a)
                }
            }
        }, Dg: function (a) {
            var b = this, c = a.target, a = b.map.Mb();
            if (c instanceof cb)a && !c.am && (c.fa(this.map, this.ve), c.am = o); else if (c.Hf && this.map.Dg(c.Hf), c.xo) {
                for (a = 0; a < b.ng.length; a++)if (b.ng[a] == c)return;
                I.load("vector", function () {
                    c.fa(b.map, b.ve);
                    b.ng.push(c)
                }, o)
            } else {
                for (a = 0; a < b.Gf.length; a++)if (b.Gf[a] == c)return;
                c.fa(this.map, this.tq);
                b.Gf.push(c)
            }
        }, $g: function (a) {
            var a = a.target, b = this.map.Mb();
            if (a instanceof cb)b && a.am && (a.remove(), a.am = q); else {
                a.Hf && this.map.$g(a.Hf);
                if (a.xo)for (var b = 0, c = this.ng.length; b < c; b++)a == this.ng[b] && this.ng.splice(b, 1); else {
                    b = 0;
                    for (c = this.Gf.length; b < c; b++)a == this.Gf[b] && this.Gf.splice(b, 1)
                }
                a.remove()
            }
        }, lg: function () {
            for (var a = this.fm, b = 0, c = a.length; b < c; b++)a[b].remove();
            delete this.Gb;
            this.fm = [];
            this.Ii = this.eg = {};
            this.Ew();
            this.gg()
        }, xc: function () {
            var a = this;
            a.Zc && w.C.J(a.Zc);
            setTimeout(function () {
                a.gg();
                a.map.dispatchEvent(new L("onzoomend"))
            }, 10)
        }, y1: s(), Os: function (a) {
            var b = this.map.ja();
            if (!this.map.Mb() && (a ? this.map.D.$X = a : a = this.map.D.$X, a))for (var c = p, c = "2" == z.Kx ? [z.url.proto + z.url.domain.main_domain_cdn.other[0] + "/"] : [z.url.proto + z.url.domain.main_domain_cdn.baidu[0] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[1] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[2] + "/"], d = 0, e; e = this.fm[d]; d++)if (e.PX == o) {
                b.k.Wc = 18;
                this.map.Og() && (b.k.Cw = 18);
                e.getTilesUrl = function (b, d) {
                    var e = b.x, k = b.y, l = "customimage/tile?&x=" + e + "&y=" + k + "&z=" + d + "&udt=20150401", l = a.styleStr ? l + ("&styles=" + encodeURIComponent(a.styleStr)) : l + ("&customid=" + a.style);
                    return c[Math.abs(e + k) % c.length] + l
                };
                break
            }
        }
    });
    function Gc(a, b, c, d, e) {
        this.im = a;
        this.position = c;
        this.Wt = [];
        this.name = a.SC(d, e);
        this.info = d;
        this.QH = e.qs();
        d = J("img");
        yb(d);
        d.zJ = q;
        var f = d.style, a = a.map.ja();
        f.position = "absolute";
        f.border = "none";
        f.width = a.k.tb + "px";
        f.height = a.k.tb + "px";
        f.left = c[0] + "px";
        f.top = c[1] + "px";
        f.maxWidth = "none";
        this.rb = d;
        this.src = b;
        Jc && (this.rb.style.opacity = 0);
        var g = this;
        this.rb.onload = function () {
            z.fW.IO();
            g.loaded = o;
            if (g.im) {
                var a = g.im, b = a.Ii;
                if (!b[g.name]) {
                    a.OD++;
                    b[g.name] = g
                }
                if (g.rb && !zb(g.rb) && e.Gb) {
                    e.Gb.appendChild(g.rb);
                    if (w.S.ba <= 6 && w.S.ba > 0 && g.QH)g.rb.style.cssText = g.rb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
                }
                var c = a.OD - a.eT, d;
                for (d in b) {
                    if (c <= 0)break;
                    if (!a.eg[d]) {
                        b[d].im = p;
                        var f = b[d].rb;
                        if (f && f.parentNode) {
                            f.parentNode.removeChild(f);
                            Ic(f)
                        }
                        f = p;
                        b[d].rb = p;
                        delete b[d];
                        a.OD--;
                        c--
                    }
                }
                Jc && new tb({
                    Uc: 20, duration: 200, ma: function (a) {
                        if (g.rb && g.rb.style)g.rb.style.opacity = a * 1
                    }, finish: function () {
                        g.rb && g.rb.style && delete g.rb.style.opacity
                    }
                });
                Dc(g)
            }
        };
        this.rb.onerror = function () {
            Dc(g);
            if (g.im) {
                var a = g.im.map.ja();
                if (a.k.hC) {
                    g.error = o;
                    g.rb.src = a.k.hC;
                    g.rb && !zb(g.rb) && e.Gb.appendChild(g.rb)
                }
            }
        };
        d = p
    }

    function Fc(a, b) {
        a.Wt.push(b)
    }

    function Hc(a) {
        a.rb.src = 0 < w.S.ba && 6 >= w.S.ba && a.QH ? E.ea + "blank.gif" : "" !== a.src && a.rb.src == a.src ? a.src + "&t = " + Date.now() : a.src
    }

    function Dc(a) {
        for (var b = 0; b < a.Wt.length; b++)a.Wt[b]();
        a.Wt.length = 0
    }

    function Ic(a) {
        if (a) {
            a.onload = a.onerror = p;
            var b = a.attributes, c, d, e;
            if (b) {
                d = b.length;
                for (c = 0; c < d; c += 1)e = b[c].name, Wa(a[e]) && (a[e] = p)
            }
            if (b = a.children) {
                d = b.length;
                for (c = 0; c < d; c += 1)Ic(a.children[c])
            }
        }
    }

    function Ec(a, b) {
        a.src = b;
        Hc(a)
    }

    var Jc = !w.S.ba || 8 < w.S.ba;

    function Cc(a) {
        this.Fo = a || {};
        this.xT = this.Fo.copyright || p;
        this.zY = this.Fo.transparentPng || q;
        this.zv = this.Fo.baseLayer || q;
        this.zIndex = this.Fo.zIndex || 0;
        this.Q = Cc.nQ++
    }

    Cc.nQ = 0;
    w.lang.ia(Cc, w.lang.ra, "TileLayer");
    w.extend(Cc.prototype, {
        fa: function (a, b) {
            this.zv && (this.zIndex = -100);
            this.map = a;
            if (!this.Gb) {
                var c = J("div"), d = c.style;
                d.position = "absolute";
                d.overflow = "visible";
                d.zIndex = this.zIndex;
                d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Gb = c
            }
            c = a.ja();
            a.Og() && c == La && (c.k.tb = 128, d = function (a) {
                return Math.pow(2, 18 - a) * 2
            }, c.lc = d, c.k.de.lc = d)
        }, remove: function () {
            this.Gb && this.Gb.parentNode && (this.Gb.innerHTML = "", this.Gb.parentNode.removeChild(this.Gb));
            delete this.Gb
        }, qs: u("zY"), getTilesUrl: function (a, b) {
            var c = "";
            this.Fo.tileUrlTemplate && (c = this.Fo.tileUrlTemplate.replace(/\{X\}/, a.x), c = c.replace(/\{Y\}/, a.y), c = c.replace(/\{Z\}/, b));
            return c
        }, Ml: u("xT"), ja: function () {
            return this.ib || La
        }
    });
    function Kc(a, b) {
        Hb(a) ? b = a || {} : (b = b || {}, b.databoxId = a);
        this.k = {
            WI: b.databoxId,
            Jg: b.geotableId,
            hx: b.q || "",
            gt: b.tags || "",
            filter: b.filter || "",
            Cx: b.sortby || "",
            YX: b.styleId || "",
            pl: b.ak || qa,
            wv: b.age || 36E5,
            zIndex: 11,
            bW: "VectorCloudLayer",
            $j: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
            KS: "LBS\u4e91\u9ebb\u70b9\u5c42"
        };
        this.xo = o;
        Cc.call(this, this.k);
        this.NT = z.tc + "geosearch/detail/";
        this.OT = z.tc + "geosearch/v2/detail/";
        this.to = {}
    }

    w.ia(Kc, Cc, "VectorCloudLayer");
    function Lc(a) {
        a = a || {};
        this.k = w.extend(a, {zIndex: 1, bW: "VectorTrafficLayer", KS: "\u77e2\u91cf\u8def\u51b5\u5c42"});
        this.xo = o;
        Cc.call(this, this.k);
        this.vY = z.url.proto + z.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
        this.nb = {
            "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
            1: [2, 1354709503, 3, 2, 0, [], 0, 0],
            10: [2, -231722753, 2, 2, 0, [], 0, 0],
            11: [2, -231722753, 3, 2, 0, [], 0, 0],
            12: [2, -231722753, 4, 2, 0, [], 0, 0],
            13: [2, -231722753, 5, 2, 0, [], 0, 0],
            14: [2, -231722753, 6, 2, 0, [], 0, 0],
            15: [2, -1, 4, 0, 0, [], 0, 0],
            16: [2, -1, 5.5, 0, 0, [], 0, 0],
            17: [2, -1, 7, 0, 0, [], 0, 0],
            18: [2, -1, 8.5, 0, 0, [], 0, 0],
            19: [2, -1, 10, 0, 0, [], 0, 0],
            2: [2, 1354709503, 4, 2, 0, [], 0, 0],
            3: [2, 1354709503, 5, 2, 0, [], 0, 0],
            4: [2, 1354709503, 6, 2, 0, [], 0, 0],
            5: [2, -6350337, 2, 2, 0, [], 0, 0],
            6: [2, -6350337, 3, 2, 0, [], 0, 0],
            7: [2, -6350337, 4, 2, 0, [], 0, 0],
            8: [2, -6350337, 5, 2, 0, [], 0, 0],
            9: [2, -6350337, 6, 2, 0, [], 0, 0]
        }
    }

    w.ia(Lc, Cc, "VectorTrafficLayer");
    function cb(a) {
        this.fT = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/gvd/?"];
        this.k = {vJ: q};
        for (var b in a)this.k[b] = a[b];
        this.Ch = this.jh = this.Ka = this.A = this.B = p;
        this.GK = 0;
        var c = this;
        I.load("vector", function () {
            c.bf()
        })
    }

    w.extend(cb.prototype, {
        fa: function (a, b) {
            this.B = a;
            this.A = b
        }, remove: function () {
            this.A = this.B = p
        }
    });
    function Mc(a) {
        Cc.call(this, a);
        this.k = a || {};
        this.AK = o;
        this.Hf = new Lc;
        this.Hf.Ix = this;
        if (this.k.predictDate) {
            if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday)this.k.predictDate = 1;
            if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour)this.k.predictDate.hour = 0
        }
        this.pS = z.url.proto + z.url.domain.traffic + ":8002/traffic/"
    }

    Mc.prototype = new Cc;
    Mc.prototype.fa = function (a, b) {
        Cc.prototype.fa.call(this, a, b);
        this.B = a
    };
    Mc.prototype.qs = da(o);
    Mc.prototype.getTilesUrl = function (a, b) {
        var c = "";
        this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", this.B.Og() || (c += "label=web2D&v=016&"));
        return (this.pS + c + "level=" + b + "&x=" + a.x + "&y=" + a.y).replace(/-(\d+)/gi, "M$1")
    };
    var Nc = [z.url.proto + z.url.domain.TILES_YUN_HOST[0] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[1] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[2] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[3] + "/georender/gss"], Oc = 100;

    function ob(a, b) {
        Cc.call(this);
        var c = this;
        this.AK = o;
        var d = q;
        try {
            document.createElement("canvas").getContext("2d"), d = o
        } catch (e) {
            d = q
        }
        d && (this.Hf = new Kc(a, b), this.Hf.Ix = this);
        Hb(a) ? b = a || {} : (c.Op = a, b = b || {});
        b.geotableId && (c.Of = b.geotableId);
        b.databoxId && (c.Op = b.databoxId);
        d = z.tc + "geosearch";
        c.kc = {
            NW: b.pointDensity || Oc,
            DV: d + "/detail/",
            EV: d + "/v2/detail/",
            wv: b.age || 36E5,
            hx: b.q || "",
            iY: "png",
            e0: [5, 5, 5, 5],
            aW: {backgroundColor: "#FFFFD5", borderColor: "#808080"},
            pl: b.ak || qa,
            gt: b.tags || "",
            filter: b.filter || "",
            Cx: b.sortby || "",
            $j: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0)
        };
        I.load("clayer", function () {
            c.he()
        })
    }

    ob.prototype = new Cc;
    ob.prototype.fa = function (a, b) {
        Cc.prototype.fa.call(this, a, b);
        this.B = a
    };
    ob.prototype.getTilesUrl = function (a, b) {
        var c = a.x, d = a.y, e = this.kc, c = Nc[Math.abs(c + d) % Nc.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.hx + "&tags=" + e.gt + "&filter=" + e.filter + "&sortby=" + e.Cx + "&ak=" + this.kc.pl + "&age=" + e.wv + "&page_size=" + e.NW + "&format=" + e.iY;
        this.Of ? c += "&geotable_id=" + this.Of : this.Op && (c += "&databox_id=" + this.Op);
        return c
    };
    ob.NR = /^point\(|\)$/ig;
    ob.OR = /\s+/;
    ob.QR = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function Pc(a, b, c) {
        this.Le = a;
        this.oq = b instanceof Cc ? [b] : b.slice(0);
        c = c || {};
        this.k = {
            jY: c.tips || "",
            rD: "",
            kd: c.minZoom || 3,
            Wc: c.maxZoom || 18,
            BV: c.minZoom || 3,
            Cw: c.maxZoom || 18,
            tb: 256,
            hY: c.textColor || "black",
            hC: c.errorImageUrl || "",
            de: c.projection || new Q
        };
        1 <= this.oq.length && (this.oq[0].zv = o);
        w.extend(this.k, c)
    }

    w.extend(Pc.prototype, {
        getName: u("Le"), bs: function () {
            return this.k.jY
        }, M_: function () {
            return this.k.rD
        }, pV: function () {
            return this.oq[0]
        }, Z_: u("oq"), qV: function () {
            return this.k.tb
        }, ho: function () {
            return this.k.kd
        }, Ol: function () {
            return this.k.Wc
        }, setMaxZoom: function (a) {
            this.k.Wc = a
        }, as: function () {
            return this.k.hY
        }, mo: function () {
            return this.k.de
        }, H_: function () {
            return this.k.hC
        }, qV: function () {
            return this.k.tb
        }, lc: function (a) {
            return Math.pow(2, 18 - a)
        }, WC: function (a) {
            return this.lc(a) * this.k.tb
        }
    });
    var Qc = [z.url.proto + z.url.domain.TILE_BASE_URLS[0] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[1] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[2] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[3] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[4] + "/it/"], Rc = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[0] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/tile/"], Sc = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    }, Tc = new Cc;
    Tc.PX = o;
    Tc.getTilesUrl = function (a, b, c) {
        var d = a.x, a = a.y, e = "pl", f = 1;
        this.map.Og();
        !G() && 2 <= window.devicePixelRatio && (f = 2);
        e = Sc[c];
        return (Rc[Math.abs(d + a) % Rc.length] + "?qt=tile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + e + "&scaler=" + f + (6 == w.S.ba ? "&color_dep=32&colors=50" : "") + "&udt=20141103").replace(/-(\d+)/gi, "M$1")
    };
    var La = new Pc("\u5730\u56fe", Tc, {tips: "\u663e\u793a\u666e\u901a\u5730\u56fe", maxZoom: 19}), Uc = new Cc;
    Uc.wM = [z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Uc.getTilesUrl = function (a, b) {
        var c = a.x, d = a.y, e = 256 * Math.pow(2, 20 - b), d = Math.round((9998336 - e * d) / e) - 1;
        return url = this.wM[Math.abs(c + d) % this.wM.length] + this.map.Ob + "/" + this.map.Ev + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
    };
    var Oa = new Pc("\u4e09\u7ef4", Uc, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new gb
    });
    Oa.lc = function (a) {
        return Math.pow(2, 20 - a)
    };
    Oa.Sj = function (a) {
        if (!a)return "";
        var b = E.dB, c;
        for (c in b)if (-1 < a.search(c))return b[c].fx;
        return ""
    };
    Oa.FJ = function (a) {
        return {bj: 2, gz: 1, sz: 14, sh: 4}[a]
    };
    var Vc = new Cc({zv: o});
    Vc.getTilesUrl = function (a, b) {
        var c = a.x, d = a.y;
        return (Qc[Math.abs(c + d) % Qc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=20141015").replace(/-(\d+)/gi, "M$1")
    };
    var Xa = new Pc("\u536b\u661f", Vc, {
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    }), Wc = new Cc({transparentPng: o});
    Wc.getTilesUrl = function (a, b) {
        var c = a.x, d = a.y;
        return (Rc[Math.abs(c + d) % Rc.length] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == w.S.ba ? "&color_dep=32&colors=50" : "") + "&udt=20141015").replace(/-(\d+)/gi, "M$1")
    };
    var Qa = new Pc("\u6df7\u5408", [Vc, Wc], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var Xc = 1, S = {};
    window.WY = S;
    function T(a, b) {
        w.lang.ra.call(this);
        this.cd = {};
        this.ym(a);
        b = b || {};
        b.aa = b.renderOptions || {};
        this.k = {
            aa: {
                Ca: b.aa.panel || p,
                map: b.aa.map || p,
                Eg: b.aa.autoViewport || o,
                Js: b.aa.selectFirstResult,
                fs: b.aa.highlightMode,
                Pb: b.aa.enableDragging || q
            },
            Xw: b.onSearchComplete || s(),
            tL: b.onMarkersSet || s(),
            sL: b.onInfoHtmlSet || s(),
            vL: b.onResultsHtmlSet || s(),
            rL: b.onGetBusListComplete || s(),
            qL: b.onGetBusLineComplete || s(),
            oL: b.onBusListHtmlSet || s(),
            nL: b.onBusLineHtmlSet || s(),
            CD: b.onPolylinesSet || s(),
            Ko: b.reqFrom || ""
        };
        this.k.aa.Eg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : o;
        this.k.aa.Ca = w.pc(this.k.aa.Ca)
    }

    w.ia(T, w.lang.ra);
    w.extend(T.prototype, {
        getResults: function () {
            return this.rc ? this.mi : this.$
        }, enableAutoViewport: function () {
            this.k.aa.Eg = o
        }, disableAutoViewport: function () {
            this.k.aa.Eg = q
        }, ym: function (a) {
            a && (this.cd.src = a)
        }, hE: function (a) {
            this.k.Xw = a || s()
        }, setMarkersSetCallback: function (a) {
            this.k.tL = a || s()
        }, setPolylinesSetCallback: function (a) {
            this.k.CD = a || s()
        }, setInfoHtmlSetCallback: function (a) {
            this.k.sL = a || s()
        }, setResultsHtmlSetCallback: function (a) {
            this.k.vL = a || s()
        }, Rl: u("ed")
    });
    var Yc = {
        dF: z.tc, bb: function (a, b, c, d, e) {
            var f = (1E5 * Math.random()).toFixed(0);
            z._rd["_cbk" + f] = function (b) {
                c = c || {};
                a && a(b, c);
                delete z._rd["_cbk" + f]
            };
            d = d || "";
            b = c && c.PM ? Fb(b, encodeURI) : Fb(b, encodeURIComponent);
            this.dF = c && c.Lr ? c.PL ? c.PL : z.Ao : z.tc;
            d = this.dF + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            e || (d += "&res=api");
            Qb(d + ("&callback=BMap._rd._cbk" + f))
        }
    };
    window.cZ = Yc;
    z._rd = {};
    var N = {};
    window.bZ = N;
    N.ML = function (a) {
        return a.replace(/<\/?b>/g, "")
    };
    N.HW = function (a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    N.IW = function (a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    };
    var Zc = 2, $c = 3, ad = 0, bd = "bt", cd = "nav", dd = "walk", ed = "bl", fd = "bsl", gd = 14, hd = 15, id = 18, jd = 20, kd = 31;
    z.I = window.Instance = w.lang.Jd;
    function ld(a, b, c) {
        w.lang.ra.call(this);
        if (a) {
            this.Ha = "object" == typeof a ? a : w.pc(a);
            this.page = 1;
            this.ld = 100;
            this.tI = "pg";
            this.Ef = 4;
            this.yI = b;
            this.update = o;
            a = {page: 1, Fe: 100, ld: 100, Ef: 4, tI: "pg", update: o};
            c || (c = a);
            for (var d in c)"undefined" != typeof c[d] && (this[d] = c[d]);
            this.ma()
        }
    }

    w.extend(ld.prototype, {
        ma: function () {
            this.fa()
        }, fa: function () {
            this.kT();
            this.Ha.innerHTML = this.ET()
        }, kT: function () {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.ld)) && (this.ld = 1);
            1 > this.page && (this.page = 1);
            1 > this.ld && (this.ld = 1);
            this.page > this.ld && (this.page = this.ld);
            this.page = parseInt(this.page);
            this.ld = parseInt(this.ld)
        }, Q_: function () {
            location.search.match(RegExp("[?&]?" + this.tI + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        }, ET: function () {
            var a = [], b = this.page - 1, c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Ef) {
                    var d;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.Q + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.Q + "').toPage(" + b + ");"))
            }
            if (this.page < this.Ef)d = 0 == this.page % this.Ef ? this.page - this.Ef - 1 : this.page - this.page % this.Ef + 1, b = d + this.Ef - 1; else {
                d = Math.floor(this.Ef / 2);
                var e = this.Ef % 2 - 1, b = this.ld > this.page + d ? this.page + d : this.ld;
                d = this.page - d - e
            }
            this.page > this.ld - this.Ef && this.page >= this.Ef && (d = this.ld - this.Ef + 1, b = this.ld);
            for (e = d; e <= b; e++)0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.ld && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>", a.push(d.replace("{temp3}", "BMap.I('" + this.Q + "').toPage(" + e + ");"))));
            c > this.ld || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.Q + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        }, toPage: function (a) {
            a = a ? a : 1;
            "function" == typeof this.yI && (this.yI(a), this.page = a);
            this.update && this.ma()
        }
    });
    function bb(a, b) {
        T.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.Wo(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.IB() : this.bC();
        this.ka = [];
        this.af = [];
        this.La = -1;
        this.Na = [];
        var c = this;
        I.load("local", function () {
            c.zy()
        }, o)
    }

    w.ia(bb, T, "LocalSearch");
    bb.lp = 10;
    bb.$Y = 1;
    bb.Nm = 100;
    bb.TE = 2E3;
    bb.aF = 1E5;
    w.extend(bb.prototype, {
        search: function (a, b) {
            this.Na.push({method: "search", arguments: [a, b]})
        }, vm: function (a, b, c) {
            this.Na.push({method: "searchInBounds", arguments: [a, b, c]})
        }, Ro: function (a, b, c, d) {
            this.Na.push({method: "searchNearby", arguments: [a, b, c, d]})
        }, ye: function () {
            delete this.ua;
            delete this.ed;
            delete this.$;
            delete this.T;
            this.La = -1;
            this.cb();
            this.k.aa.Ca && (this.k.aa.Ca.innerHTML = "")
        }, Vl: s(), bC: function () {
            this.k.aa.Js = o
        }, IB: function () {
            this.k.aa.Js = q
        }, Wo: function (a) {
            this.k.fk = "number" == typeof a && !isNaN(a) ? 1 > a ? bb.lp : a > bb.Nm ? bb.lp : a : bb.lp
        }, Te: function () {
            return this.k.fk
        }, toString: da("LocalSearch")
    });
    var md = bb.prototype;
    U(md, {
        clearResults: md.ye,
        setPageCapacity: md.Wo,
        getPageCapacity: md.Te,
        gotoPage: md.Vl,
        searchNearby: md.Ro,
        searchInBounds: md.vm,
        search: md.search,
        enableFirstResultSelection: md.bC,
        disableFirstResultSelection: md.IB
    });
    function nd(a, b) {
        T.call(this, a, b)
    }

    w.ia(nd, T, "BaseRoute");
    w.extend(nd.prototype, {ye: s()});
    function od(a, b) {
        T.call(this, a, b);
        b = b || {};
        this.Rs(b.policy);
        this.Wo(b.pageCapacity);
        this.$c = bd;
        this.Ht = gd;
        this.It = Xc;
        this.ka = [];
        this.La = -1;
        this.k.Pc = b.enableTraffic || q;
        this.Na = [];
        var c = this;
        I.load("route", function () {
            c.he()
        })
    }

    od.Nm = 100;
    od.sN = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    w.ia(od, nd, "TransitRoute");
    w.extend(od.prototype, {
        Rs: function (a) {
            this.k.Lc = 0 <= a && 4 >= a ? a : 0
        }, zz: function (a, b) {
            this.Na.push({method: "_internalSearch", arguments: [a, b]})
        }, search: function (a, b) {
            this.Na.push({method: "search", arguments: [a, b]})
        }, Wo: function (a) {
            if ("string" == typeof a && (a = parseInt(a), isNaN(a))) {
                this.k.fk = od.Nm;
                return
            }
            this.k.fk = "number" != typeof a ? od.Nm : 1 <= a && a <= od.Nm ? Math.round(a) : od.Nm
        }, toString: da("TransitRoute"), bS: function (a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var pd = od.prototype;
    U(pd, {_internalSearch: pd.zz});
    function qd(a, b) {
        T.call(this, a, b);
        this.ka = [];
        this.La = -1;
        this.Na = [];
        var c = this, d = this.k.aa;
        1 != d.fs && 2 != d.fs && (d.fs = 1);
        this.Ty = this.k.aa.Pb ? o : q;
        I.load("route", function () {
            c.he()
        });
        this.eD && this.eD()
    }

    qd.FN = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    w.ia(qd, nd, "DWRoute");
    w.extend(qd.prototype, {
        search: function (a, b, c) {
            this.Na.push({method: "search", arguments: [a, b, c]})
        }
    });
    function rd(a, b) {
        qd.call(this, a, b);
        b = b || {};
        this.k.Pc = b.enableTraffic || q;
        this.Rs(b.policy);
        this.$c = cd;
        this.Ht = jd;
        this.It = $c
    }

    w.ia(rd, qd, "DrivingRoute");
    rd.prototype.Rs = function (a) {
        this.k.Lc = 0 <= a && 2 >= a ? a : 0
    };
    function sd(a, b) {
        qd.call(this, a, b);
        this.$c = dd;
        this.Ht = kd;
        this.It = Zc;
        this.Ty = q
    }

    w.ia(sd, qd, "WalkingRoute");
    function td(a, b) {
        w.lang.ra.call(this);
        this.Df = [];
        this.om = [];
        this.k = b;
        this.Qb = a;
        this.map = this.k.aa.map || p;
        this.ox = this.k.ox;
        this.hb = p;
        this.Ki = 0;
        this.Dx = "";
        this.Hd = 1;
        this.aw = "";
        this.Lo = [0, 0, 0, 0, 0, 0, 0];
        this.tD = [];
        this.qr = [1, 1, 1, 1, 1, 1, 1];
        this.EM = [1, 1, 1, 1, 1, 1, 1];
        this.Hs = [0, 0, 0, 0, 0, 0, 0];
        this.Mo = [0, 0, 0, 0, 0, 0, 0];
        this.Aa = [{o: "", uf: 0, Gm: 0, x: 0, y: 0, hc: -1}, {o: "", uf: 0, Gm: 0, x: 0, y: 0, hc: -1}, {
            o: "",
            uf: 0,
            Gm: 0,
            x: 0,
            y: 0,
            hc: -1
        }, {o: "", uf: 0, Gm: 0, x: 0, y: 0, hc: -1}, {o: "", uf: 0, Gm: 0, x: 0, y: 0, hc: -1}, {
            o: "",
            uf: 0,
            Gm: 0,
            x: 0,
            y: 0,
            hc: -1
        }, {o: "", uf: 0, Gm: 0, x: 0, y: 0, hc: -1}];
        this.Ih = -1;
        this.it = [];
        this.jt = [];
        I.load("route", s())
    }

    w.lang.ia(td, w.lang.ra, "RouteAddr");
    function ud(a) {
        this.k = {};
        w.extend(this.k, a);
        this.Na = [];
        var b = this;
        I.load("othersearch", function () {
            b.he()
        })
    }

    w.ia(ud, w.lang.ra, "Geocoder");
    w.extend(ud.prototype, {
        Ql: function (a, b, c) {
            this.Na.push({method: "getPoint", arguments: [a, b, c]})
        }, Ur: function (a, b, c) {
            this.Na.push({method: "getLocation", arguments: [a, b, c]})
        }, toString: da("Geocoder")
    });
    var vd = ud.prototype;
    U(vd, {getPoint: vd.Ql, getLocation: vd.Ur});
    function Geolocation(a) {
        a = a || {};
        this.D = {timeout: a.timeout || 1E4, maximumAge: a.maximumAge || 6E5};
        this.Ud = [];
        var b = this;
        I.load("othersearch", function () {
            for (var a = 0, d; d = b.Ud[a]; a++)b[d.method].apply(b, d.arguments)
        })
    }

    w.extend(Geolocation.prototype, {
        getCurrentPosition: function (a, b) {
            this.Ud.push({method: "getCurrentPosition", arguments: arguments})
        }, getStatus: da(2)
    });
    function wd(a) {
        a = a || {};
        a.aa = a.renderOptions || {};
        this.k = {aa: {map: a.aa.map || p}};
        this.Na = [];
        var b = this;
        I.load("othersearch", function () {
            b.he()
        })
    }

    w.ia(wd, w.lang.ra, "LocalCity");
    w.extend(wd.prototype, {
        get: function (a) {
            this.Na.push({method: "get", arguments: [a]})
        }, toString: da("LocalCity")
    });
    function xd() {
        this.Na = [];
        var a = this;
        I.load("othersearch", function () {
            a.he()
        })
    }

    w.ia(xd, w.lang.ra, "Boundary");
    w.extend(xd.prototype, {
        get: function (a, b) {
            this.Na.push({method: "get", arguments: [a, b]})
        }, toString: da("Boundary")
    });
    function yd(a, b) {
        T.call(this, a, b);
        this.CN = ed;
        this.EN = hd;
        this.BN = fd;
        this.DN = id;
        this.Na = [];
        var c = this;
        I.load("buslinesearch", function () {
            c.he()
        })
    }

    yd.uu = E.ea + "iw_plus.gif";
    yd.tQ = E.ea + "iw_minus.gif";
    yd.lS = E.ea + "stop_icon.png";
    w.ia(yd, T);
    w.extend(yd.prototype, {
        getBusList: function (a) {
            this.Na.push({method: "getBusList", arguments: [a]})
        }, getBusLine: function (a) {
            this.Na.push({method: "getBusLine", arguments: [a]})
        }, setGetBusListCompleteCallback: function (a) {
            this.k.rL = a || s()
        }, setGetBusLineCompleteCallback: function (a) {
            this.k.qL = a || s()
        }, setBusListHtmlSetCallback: function (a) {
            this.k.oL = a || s()
        }, setBusLineHtmlSetCallback: function (a) {
            this.k.nL = a || s()
        }, setPolylinesSetCallback: function (a) {
            this.k.CD = a || s()
        }
    });
    function zd(a) {
        T.call(this, a);
        a = a || {};
        this.kc = {input: a.input || p, UA: a.baseDom || p, types: a.types || [], Xw: a.onSearchComplete || s()};
        this.cd.src = a.location || "\u5168\u56fd";
        this.Fi = "";
        this.Vf = p;
        this.BG = "";
        this.ti();
        Pa(Ia);
        var b = this;
        I.load("autocomplete", function () {
            b.he()
        })
    }

    w.ia(zd, T, "Autocomplete");
    w.extend(zd.prototype, {
        ti: s(), show: s(), J: s(), iE: function (a) {
            this.kc.types = a
        }, ym: function (a) {
            this.cd.src = a
        }, search: ba("Fi"), sx: ba("BG")
    });
    var Sa;

    function Na(a, b) {
        this.A = "string" == typeof a ? w.N(a) : a;
        this.k = {
            enableScrollWheelZoom: o,
            panoramaRenderer: "flash",
            swfSrc: z.ag("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: o,
            linksControl: o,
            navigationControl: o,
            closeControl: o,
            indoorSceneSwitchControl: o,
            albumsControl: q,
            albumsControlOptions: {},
            copyrightControlOptions: {}
        };
        var b = b || {}, c;
        for (c in b)this.k[c] = b[c];
        this.xa = {heading: 0, pitch: 0};
        this.kn = [];
        this.wb = this.Oa = p;
        this.Lq = this.wj();
        this.ka = [];
        this.xc = 1;
        this.mf = this.QQ = this.Bk = "";
        this.qe = {};
        this.rf = p;
        this.xg = [];
        this.Bq = [];
        this.Fq = q;
        var d = this;
        "flashRender" === this.wj() ? I.load("panoramaflash", function () {
            d.ti()
        }, o) : I.load("panorama", function () {
            d.ob()
        }, o);
        this.uR(this.A);
        "api" == b.yf ? Pa(Ea) : Pa(Fa);
        this.addEventListener("id_changed", function () {
            Pa(Da, {from: b.yf})
        })
    }

    var Ad = 4, Bd = 1;
    w.lang.ia(Na, w.lang.ra, "Panorama");
    w.extend(Na.prototype, {
        uR: function (a) {
            var b, c;
            b = a.style;
            c = Ua(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c)if (a = Ua(a).zIndex, !a || "auto" === a)b.zIndex = 0
        },
        QU: u("kn"),
        Eb: u("Oa"),
        rV: u("bv"),
        hM: u("bv"),
        V: u("wb"),
        sa: u("xa"),
        U: u("xc"),
        Kg: u("Bk"),
        S_: function () {
            return this.zZ || []
        },
        O_: u("QQ"),
        $r: u("mf"),
        ux: function (a) {
            a !== this.mf && (this.mf = a, this.dispatchEvent(new L("onscene_type_changed")))
        },
        mc: function (a, b, c) {
            "object" === typeof b && (c = b, b = j);
            a != this.Oa && (this.Mk = this.Oa, this.Nk = this.wb, this.Oa = a, this.mf = b || "street", this.wb = p, c && c.pov && this.nd(c.pov))
        },
        ha: function (a) {
            a.Xa(this.wb) || (this.Mk = this.Oa, this.Nk = this.wb, this.wb = a, this.Oa = p)
        },
        nd: function (a) {
            a && (this.xa = a, a = this.xa.pitch, "cvsRender" == this.wj() || Cd() ? (90 < a && (a = 90), -90 > a && (a = -90)) : "cssRender" == this.wj() && (45 < a && (a = 45), -45 > a && (a = -45)), this.Fq = o, this.xa.pitch = a)
        },
        zc: function (a) {
            a != this.xc && (a > Ad && (a = Ad), a < Bd && (a = Bd), a != this.xc && (this.xc = a))
        },
        tA: function () {
            if (this.B)for (var a = this.B.MC(), b = 0; b < a.length; b++)(a[b]instanceof R || a[b]instanceof pc) && a[b].point && this.ka.push(a[b])
        },
        eE: ba("B"),
        Qs: function (a) {
            this.rf = a || "none"
        },
        Vo: function (a) {
            for (var b in a) {
                if ("object" == typeof a[b])for (var c in a[b])this.k[b][c] = a[b][c]; else this.k[b] = a[b];
                switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new L("onlinks_visible_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new L("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new L("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new L("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new L("onalbums_options_changed"));
                        break;
                    case "copyrightControlOptions":
                        this.dispatchEvent(new L("oncopyright_options_changed"))
                }
            }
        },
        Zj: function () {
            this.Uk.style.visibility = "hidden"
        },
        yx: function () {
            this.Uk.style.visibility = "visible"
        },
        iU: function () {
            this.k.enableScrollWheelZoom = o
        },
        UT: function () {
            this.k.enableScrollWheelZoom = q
        },
        show: function () {
            this.k.visible = o
        },
        J: function () {
            this.k.visible = q
        },
        wj: function () {
            return Ta() && !G() && "javascript" != this.k.panoramaRenderer ? "flashRender" : !G() && Mb() ? "cvsRender" : "cssRender"
        },
        wa: function (a) {
            this.qe[a.Rc] = a
        },
        Fb: function (a) {
            delete this.qe[a]
        },
        $J: function () {
            return this.k.visible
        },
        Lh: function () {
            return new K(this.A.clientWidth, this.A.clientHeight)
        },
        Ea: u("A"),
        CJ: function () {
            var a = z.ag("baidumap", "?"), b = this.Eb();
            if (b) {
                var b = {
                    panotype: this.$r(),
                    heading: this.sa().heading,
                    pitch: this.sa().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                }, c;
                for (c in b)a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        zw: function () {
            this.Vo({copyrightControlOptions: {logoVisible: q}})
        },
        lE: function () {
            this.Vo({copyrightControlOptions: {logoVisible: o}})
        },
        OA: function (a) {
            function b(a, b) {
                return function () {
                    a.Bq.push({aL: b, $K: arguments})
                }
            }

            for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++)d = c[e], this[d] = b(this, d);
            this.xg.push(a)
        },
        RD: function (a) {
            for (var b = this.xg.length; b--;)this.xg[b] === a && this.xg.splice(b, 1)
        }
    });
    var Dd = Na.prototype;
    U(Dd, {
        setId: Dd.mc,
        setPosition: Dd.ha,
        setPov: Dd.nd,
        setZoom: Dd.zc,
        setOptions: Dd.Vo,
        getId: Dd.Eb,
        getPosition: Dd.V,
        getPov: Dd.sa,
        getZoom: Dd.U,
        getLinks: Dd.QU,
        getBaiduMapUrl: Dd.CJ,
        hideMapLogo: Dd.zw,
        showMapLogo: Dd.lE,
        enableDoubleClickZoom: Dd.r_,
        disableDoubleClickZoom: Dd.g_,
        enableScrollWheelZoom: Dd.iU,
        disableScrollWheelZoom: Dd.UT,
        show: Dd.show,
        hide: Dd.J,
        addPlugin: Dd.OA,
        removePlugin: Dd.RD,
        getVisible: Dd.$J,
        addOverlay: Dd.wa,
        removeOverlay: Dd.Fb,
        getSceneType: Dd.$r,
        setPanoramaPOIType: Dd.Qs
    });
    U(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function Ed() {
        w.lang.ra.call(this);
        this.Rc = "PanoramaOverlay_" + this.Q;
        this.G = p;
        this.Da = o
    }

    w.lang.ia(Ed, w.lang.ra, "PanoramaOverlayBase");
    w.extend(Ed.prototype, {
        P_: u("Rc"), fa: function () {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }, remove: function () {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }, qf: function () {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    function Fd(a, b) {
        Ed.call(this);
        var c = {position: p, altitude: 2, displayDistance: o}, b = b || {}, d;
        for (d in b)c[d] = b[d];
        this.wb = c.position;
        this.qj = a;
        this.Ap = c.altitude;
        this.cP = c.displayDistance
    }

    w.lang.ia(Fd, Ed, "PanoramaLabel");
    w.extend(Fd.prototype, {
        ha: function (a) {
            this.wb = a;
            this.qf("position", a)
        }, V: u("wb"), Mc: function (a) {
            this.qj = a;
            this.qf("content", a)
        }, Tj: u("qj"), aE: function (a) {
            this.Ap = a;
            this.qf("altitude", a)
        }, ao: u("Ap"), sa: function () {
            var a = this.V(), b = p, c = p;
            this.G && (c = this.G.V());
            if (a && c)if (a.Xa(c))b = this.G.sa(); else {
                b = {};
                b.heading = Gd(a.lng - c.lng, a.lat - c.lat) || 0;
                var a = b, c = this.ao(), d = this.dn();
                a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
            }
            return b
        }, dn: function () {
            var a = 0, b, c;
            this.G && (b = this.G.V(), (c = this.V()) && !c.Xa(b) && (a = Q.eo(b, c)));
            return a
        }, J: function () {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }, show: function () {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }, qf: s()
    });
    var Hd = Fd.prototype;
    U(Hd, {
        setPosition: Hd.ha,
        getPosition: Hd.V,
        setContent: Hd.Mc,
        getContent: Hd.Tj,
        setAltitude: Hd.aE,
        getAltitude: Hd.ao,
        getPov: Hd.sa,
        show: Hd.show,
        hide: Hd.J
    });
    function Id(a, b) {
        Ed.call(this);
        var c = {icon: "", title: "", panoInfo: p, altitude: 2}, b = b || {}, d;
        for (d in b)c[d] = b[d];
        this.wb = a;
        this.wG = c.icon;
        this.OH = c.title;
        this.Ap = c.altitude;
        this.gR = c.panoInfo;
        this.xa = {heading: 0, pitch: 0}
    }

    w.lang.ia(Id, Ed, "PanoramaMarker");
    w.extend(Id.prototype, {
        ha: function (a) {
            this.wb = a;
            this.qf("position", a)
        }, V: u("wb"), nc: function (a) {
            this.OH = a;
            this.qf("title", a)
        }, oo: u("OH"), Kb: function (a) {
            this.wG = icon;
            this.qf("icon", a)
        }, fo: u("wG"), aE: function (a) {
            this.Ap = a;
            this.qf("altitude", a)
        }, ao: u("Ap"), NC: u("gR"), sa: function () {
            var a = p;
            if (this.G) {
                var a = this.G.V(), b = this.V(), a = Gd(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {heading: a, pitch: 0}
            } else a = this.xa;
            return a
        }, qf: s()
    });
    var Jd = Id.prototype;
    U(Jd, {
        setPosition: Jd.ha,
        getPosition: Jd.V,
        setTitle: Jd.nc,
        getTitle: Jd.oo,
        setAltitude: Jd.aE,
        getAltitude: Jd.ao,
        getPanoInfo: Jd.NC,
        getIcon: Jd.fo,
        setIcon: Jd.Kb,
        getPov: Jd.sa
    });
    function Gd(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI), d = 0;
            0 < a && 0 > b && (d = 90);
            0 > a && 0 > b && (d = 180);
            0 > a && 0 < b && (d = 270);
            c = (c + 90) % 90 + d
        } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }

    function Cd() {
        if ("boolean" === typeof Kd)return Kd;
        if (!window.WebGLRenderingContext || w.platform.bk && -1 == navigator.userAgent.indexOf("Android 5"))return Kd = q;
        var a = document.createElement("canvas"), b = p;
        try {
            b = a.getContext("webgl")
        } catch (c) {
            Kd = q
        }
        return Kd = b === p ? q : o
    }

    var Kd;

    function ac(a, b) {
        this.G = a || p;
        var c = this;
        c.G && c.P();
        I.load("pservice", function () {
            c.vO()
        });
        "api" == (b || {}).yf ? Pa(Ga) : Pa(Ha);
        this.ad = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }

    z.nm(function (a) {
        "flashRender" !== a.wj() && new ac(a, {yf: "api"})
    });
    w.extend(ac.prototype, {
        P: function () {
            function a(a) {
                if (a) {
                    if (a.id != b.bv) {
                        b.hM(a.id);
                        b.R = a;
                        b.Oa != p && (b.Nk = b._position);
                        for (var c in a)if (a.hasOwnProperty(c))switch (b["_" + c] = a[c], c) {
                            case "position":
                                b.wb = a[c];
                                break;
                            case "id":
                                b.Oa = a[c];
                                break;
                            case "links":
                                b.kn = a[c];
                                break;
                            case "zoom":
                                b.xc = a[c]
                        }
                        if (b.Nk) {
                            var f = b.Nk, g = b._position;
                            c = f.lat;
                            var i = g.lat, k = Nb(i - c), f = Nb(g.lng - f.lng);
                            c = Math.sin(k / 2) * Math.sin(k / 2) + Math.cos(Nb(c)) * Math.cos(Nb(i)) * Math.sin(f / 2) * Math.sin(f / 2);
                            b.NF = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new L("ondataload");
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new L("onposition_changed"));
                        b.dispatchEvent(new L("onlinks_changed"));
                        b.dispatchEvent(new L("oncopyright_changed"), {copyright: a.copyright});
                        a.xl && b.k.closeControl ? w.C.show(b.gu) : w.C.J(b.gu)
                    }
                } else b.Oa = b.Mk, b.wb = b.Nk, b.dispatchEvent(new L("onnoresult"))
            }

            var b = this.G, c = this;
            b.addEventListener("id_changed", function () {
                c.ko(b.Eb(), a)
            });
            b.addEventListener("iid_changed", function () {
                c.zh(ac.Om + "qt=idata&iid=" + b.oz + "&fn=", function (b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo, e = {};
                        e.xl = b.BreakID;
                        for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++)if (b.Floors[i].Floor == f) {
                            g = b.Floors[i];
                            break
                        }
                        e.id = g.StartID || g.Points[0].PID;
                        c.ko(e.id, a, e)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function () {
                c.Ui(b.V(), a)
            })
        }, ko: function (a, b) {
            this.ad.getPanoramaById.push(arguments)
        }, Ui: function (a, b, c) {
            this.ad.getPanoramaByLocation.push(arguments)
        }, VC: function (a, b, c, d) {
            this.ad.getVisiblePOIs.push(arguments)
        }, uw: function (a, b) {
            this.ad.getRecommendPanosById.push(arguments)
        }, tw: function (a) {
            this.ad.getPanoramaVersions.push(arguments)
        }, bB: function (a, b) {
            this.ad.checkPanoSupportByCityCode.push(arguments)
        }, sw: function (a, b) {
            this.ad.getPanoramaByPOIId.push(arguments)
        }, GJ: function (a) {
            this.ad.getCopyrightProviders.push(arguments)
        }
    });
    var Ld = ac.prototype;
    U(Ld, {getPanoramaById: Ld.ko, getPanoramaByLocation: Ld.Ui, getPanoramaByPOIId: Ld.sw});
    function $b(a) {
        Cc.call(this);
        "api" == (a || {}).yf ? Pa(Ba) : Pa(Ca)
    }

    $b.hF = z.ag("pano", "tile/");
    $b.prototype = new Cc;
    $b.prototype.getTilesUrl = function (a, b) {
        var c = $b.hF[(a.x + a.y) % $b.hF.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        w.S.ba && 6 >= w.S.ba && (c += "&color_dep=32");
        return c
    };
    $b.prototype.qs = da(o);
    Md.Ad = new Q;
    function Md() {
    }

    w.extend(Md, {
        VT: function (a, b, c) {
            c = w.lang.Jd(c);
            b = {data: b};
            "position_changed" == a && (b.data = Md.Ad.Zh(new P(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new L("on" + a), b)
        }
    });
    var Nd = Md;
    U(Nd, {dispatchFlashEvent: Nd.VT});
    var Od = {uN: 50};
    Od.Jt = z.ag("pano")[0];
    Od.Ft = {width: 220, height: 60};
    w.extend(Od, {
        vo: function (a, b, c, d) {
            if (!b || !c || !c.lngLat || !c.panoInstance)d(); else {
                this.tn === j && (this.tn = new ac(p, {yf: "api"}));
                var e = this;
                this.tn.bB(b, function (b) {
                    b ? e.tn.Ui(c.lngLat, Od.uN, function (b) {
                        if (b && b.id) {
                            var f = b.id, k = b.ig, b = b.jg, l = ac.Ad.Sg(c.lngLat), m = e.YP(l, {
                                x: k,
                                y: b
                            }), k = e.PJ(f, m, 0, Od.Ft.width, Od.Ft.height);
                            a.content = e.ZP(a.content, k, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function () {
                                ja.F(w.pc("infoWndPano"), "click", function () {
                                    c.panoInstance.mc(f);
                                    c.panoInstance.show();
                                    c.panoInstance.nd({heading: m, pitch: 0})
                                })
                            })
                        }
                        d()
                    }) : d()
                })
            }
        }, ZP: function (a, b, c, d) {
            var c = c || "", e;
            !d || !a.split(d)[0] ? (d = a, a = "") : (d = a.split(d)[0], e = d.lastIndexOf("<"), d = a.substring(0, e), a = a.substring(e));
            e = [];
            var f = Od.Ft.width, g = Od.Ft.height;
            e.push(d);
            e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
            e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
            e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            e.push("</div>");
            e.push(a);
            return e.join("")
        }, YP: function (a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        }, PJ: function (a, b, c, d, e) {
            var f = {panoId: a, panoHeading: b || 0, panoPitch: c || 0, width: d, height: e};
            return (Od.Jt + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function (a, b) {
                return f[b]
            })
        }
    });
    var Pd = document, Qd = Math, Rd = Pd.createElement("div").style, Sd;
    a:{
        for (var Td = ["t", "webkitT", "MozT", "msT", "OT"], Ud, Wd = 0, Xd = Td.length; Wd < Xd; Wd++)if (Ud = Td[Wd] + "ransform", Ud in Rd) {
            Sd = Td[Wd].substr(0, Td[Wd].length - 1);
            break a
        }
        Sd = q
    }
    var Yd = Sd ? "-" + Sd.toLowerCase() + "-" : "", $d = Zd("transform"), ae = Zd("transitionProperty"), be = Zd("transitionDuration"), ce = Zd("transformOrigin"), de = Zd("transitionTimingFunction"), ee = Zd("transitionDelay"), fe = /android/gi.test(navigator.appVersion), ge = /iphone|ipad/gi.test(navigator.appVersion), he = /hp-tablet/gi.test(navigator.appVersion), ie = Zd("perspective")in Rd, je = "ontouchstart"in window && !he, ke = Sd !== q, le = Zd("transition")in Rd, ne = "onorientationchange"in window ? "orientationchange" : "resize", oe = je ? "touchstart" : "mousedown", pe = je ? "touchmove" : "mousemove", qe = je ? "touchend" : "mouseup", re = je ? "touchcancel" : "mouseup", se = Sd === q ? q : {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "otransitionend",
        ms: "MSTransitionEnd"
    }[Sd], te = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            return setTimeout(a, 1)
        }, ue = window.cancelRequestAnimationFrame || window.F1 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, ve = ie ? " translateZ(0)" : "";

    function we(a, b) {
        var c = this, d;
        c.Im = "object" == typeof a ? a : Pd.getElementById(a);
        c.Im.style.overflow = "hidden";
        c.zb = c.Im.children[0];
        c.options = {
            so: o,
            fp: o,
            x: 0,
            y: 0,
            jr: o,
            bT: q,
            zD: o,
            SK: o,
            sk: o,
            di: q,
            lY: 0,
            aB: q,
            YC: o,
            Yi: o,
            hj: o,
            mC: fe,
            Aw: ge,
            nU: ge && ie,
            YD: "",
            zoom: q,
            tk: 1,
            hp: 4,
            XT: 2,
            aN: "scroll",
            Zs: q,
            Bx: 1,
            uL: p,
            mL: function (a) {
                a.preventDefault()
            },
            xL: p,
            lL: p,
            wL: p,
            kL: p,
            Ww: p,
            yL: p,
            pL: p,
            Eo: p,
            zL: p,
            Do: p
        };
        for (d in b)c.options[d] = b[d];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.sk = ke && c.options.sk;
        c.options.Yi = c.options.so && c.options.Yi;
        c.options.hj = c.options.fp && c.options.hj;
        c.options.zoom = c.options.sk && c.options.zoom;
        c.options.di = le && c.options.di;
        c.options.zoom && fe && (ve = "");
        c.zb.style[ae] = c.options.sk ? Yd + "transform" : "top left";
        c.zb.style[be] = "0";
        c.zb.style[ce] = "0 0";
        c.options.di && (c.zb.style[de] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.sk ? c.zb.style[$d] = "translate(" + c.x + "px," + c.y + "px)" + ve : c.zb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.di && (c.options.mC = o);
        c.refresh();
        c.P(ne, window);
        c.P(oe);
        !je && "none" != c.options.aN && (c.P("DOMMouseScroll"), c.P("mousewheel"));
        c.options.aB && (c.jT = setInterval(function () {
            c.tO()
        }, 500));
        this.options.YC && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function (a, b, c) {
            var d = Node.prototype.removeEventListener;
            a === "click" ? d.call(document.body, a, b.fK || b, c) : d.call(document.body, a, b, c)
        }, document.body.addEventListener = function (a, b, c) {
            var d = Node.prototype.addEventListener;
            a === "click" ? d.call(document.body, a, b.fK || (b.fK = function (a) {
                    a.SW || b(a)
                }), c) : d.call(document.body, a, b, c)
        }), c.P("click", document.body, o))
    }

    we.prototype = {
        enabled: o,
        x: 0,
        y: 0,
        fj: [],
        scale: 1,
        wB: 0,
        xB: 0,
        Ce: [],
        Ze: [],
        TA: p,
        Mx: 0,
        handleEvent: function (a) {
            switch (a.type) {
                case oe:
                    if (!je && 0 !== a.button)break;
                    this.Vu(a);
                    break;
                case pe:
                    this.SQ(a);
                    break;
                case qe:
                case re:
                    this.fu(a);
                    break;
                case ne:
                    this.mA();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    this.wS(a);
                    break;
                case se:
                    this.sS(a);
                    break;
                case "click":
                    this.DO(a)
            }
        },
        tO: function () {
            !this.Vg && (!this.uk && !(this.sl || this.qx == this.zb.offsetWidth * this.scale && this.Qo == this.zb.offsetHeight * this.scale)) && this.refresh()
        },
        Lu: function (a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Pd.createElement("div"), this.options.YD ? b.className = this.options.YD + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.hj ? "7" : "2") + "px" : "width:7px;bottom:" + (this.Yi ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + Yd + "transition-property:opacity;" + Yd + "transition-duration:" + (this.options.nU ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Aw ? "0" : "1"), this.Im.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = Pd.createElement("div"), this.options.YD || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Yd + "background-clip:padding-box;" + Yd + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Yd + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + Yd + "transition-property:" + Yd + "transform;" + Yd + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Yd + "transition-duration:0;" + Yd + "transform: translate(0,0)" + ve, this.options.di && (b.style.cssText += ";" + Yd + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.bK = this.cK.clientWidth, this.zV = Qd.max(Qd.round(this.bK * this.bK / this.qx), 8), this.yV.style.width = this.zV + "px") : (this.TM = this.UM.clientHeight, this.HY = Qd.max(Qd.round(this.TM * this.TM / this.Qo), 8), this.GY.style.height = this.HY + "px"), this.nA(a, o)) : this[a + "ScrollbarWrapper"] && (ke && (this[a + "ScrollbarIndicator"].style[$d] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = p, this[a + "ScrollbarIndicator"] = p)
        },
        mA: function () {
            var a = this;
            setTimeout(function () {
                a.refresh()
            }, fe ? 200 : 0)
        },
        Eq: function (a, b) {
            this.uk || (a = this.so ? a : 0, b = this.fp ? b : 0, this.options.sk ? this.zb.style[$d] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + ve : (a = Qd.round(a), b = Qd.round(b), this.zb.style.left = a + "px", this.zb.style.top = b + "px"), this.x = a, this.y = b, this.nA("h"), this.nA("v"))
        },
        nA: function (a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.mC || (c = this[a + "ScrollbarIndicatorSize"] + Qd.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.mC ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Qd.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[ee] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Aw ? "0" : "1", this[a + "ScrollbarIndicator"].style[$d] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + ve)
        },
        DO: function (a) {
            if (a.wP === o)return this.LA = a.target, this.bw = Date.now(), o;
            if (this.LA && this.bw) {
                if (600 < Date.now() - this.bw)return this.bw = this.LA = p, o
            } else {
                for (var b = a.target; b != this.zb && b != document.body;)b = b.parentNode;
                if (b == document.body)return o
            }
            for (b = a.target; 1 != b.nodeType;)b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b)return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.SW = o, a.stopPropagation(), a.preventDefault(), this.bw = this.LA = p, q
        },
        Vu: function (a) {
            var b = je ? a.touches[0] : a, c, d;
            if (this.enabled) {
                this.options.mL && this.options.mL.call(this, a);
                (this.options.di || this.options.zoom) && this.PH(0);
                this.uk = this.sl = this.Vg = q;
                this.GB = this.FB = this.lv = this.kv = this.KB = this.JB = 0;
                this.options.zoom && (je && 1 < a.touches.length) && (d = Qd.abs(a.touches[0].pageX - a.touches[1].pageX), c = Qd.abs(a.touches[0].pageY - a.touches[1].pageY), this.nY = Qd.sqrt(d * d + c * c), this.Yw = Qd.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.CE) / 2 - this.x, this.Zw = Qd.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.DE) / 2 - this.y, this.options.Eo && this.options.Eo.call(this, a));
                if (this.options.zD && (this.options.sk ? (c = getComputedStyle(this.zb, p)[$d].replace(/[^0-9\-.,]/g, "").split(","), d = +(c[12] || c[4]), c = +(c[13] || c[5])) : (d = +getComputedStyle(this.zb, p).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.zb, p).top.replace(/[^0-9-]/g, "")), d != this.x || c != this.y))this.options.di ? this.Cd(se) : ue(this.TA), this.fj = [], this.Eq(d, c), this.options.Ww && this.options.Ww.call(this);
                this.mv = this.x;
                this.nv = this.y;
                this.bt = this.x;
                this.ct = this.y;
                this.ig = b.pageX;
                this.jg = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.xL && this.options.xL.call(this, a);
                this.P(pe, window);
                this.P(qe, window);
                this.P(re, window)
            }
        },
        SQ: function (a) {
            var b = je ? a.touches[0] : a, c = b.pageX - this.ig, d = b.pageY - this.jg, e = this.x + c, f = this.y + d, g = a.timeStamp || Date.now();
            this.options.lL && this.options.lL.call(this, a);
            if (this.options.zoom && je && 1 < a.touches.length)e = Qd.abs(a.touches[0].pageX - a.touches[1].pageX), f = Qd.abs(a.touches[0].pageY - a.touches[1].pageY), this.mY = Qd.sqrt(e * e + f * f), this.uk = o, b = 1 / this.nY * this.mY * this.scale, b < this.options.tk ? b = 0.5 * this.options.tk * Math.pow(2, b / this.options.tk) : b > this.options.hp && (b = 2 * this.options.hp * Math.pow(0.5, this.options.hp / b)), this.yo = b / this.scale, e = this.Yw - this.Yw * this.yo + this.x, f = this.Zw - this.Zw * this.yo + this.y, this.zb.style[$d] = "translate(" + e + "px," + f + "px) scale(" + b + ")" + ve, this.options.zL && this.options.zL.call(this, a); else {
                this.ig = b.pageX;
                this.jg = b.pageY;
                if (0 < e || e < this.Od)e = this.options.jr ? this.x + c / 2 : 0 <= e || 0 <= this.Od ? 0 : this.Od;
                if (f > this.We || f < this.Vc)f = this.options.jr ? this.y + d / 2 : f >= this.We || 0 <= this.Vc ? this.We : this.Vc;
                this.JB += c;
                this.KB += d;
                this.kv = Qd.abs(this.JB);
                this.lv = Qd.abs(this.KB);
                6 > this.kv && 6 > this.lv || (this.options.SK && (this.kv > this.lv + 5 ? (f = this.y, d = 0) : this.lv > this.kv + 5 && (e = this.x, c = 0)), this.Vg = o, this.Eq(e, f), this.FB = 0 < c ? -1 : 0 > c ? 1 : 0, this.GB = 0 < d ? -1 : 0 > d ? 1 : 0, 300 < g - this.startTime && (this.startTime = g, this.bt = this.x, this.ct = this.y), this.options.wL && this.options.wL.call(this, a))
            }
        },
        fu: function (a) {
            if (!(je && 0 !== a.touches.length)) {
                var b = this, c = je ? a.changedTouches[0] : a, d, e, f = {oa: 0, time: 0}, g = {
                    oa: 0,
                    time: 0
                }, i = (a.timeStamp || Date.now()) - b.startTime;
                d = b.x;
                e = b.y;
                b.Cd(pe, window);
                b.Cd(qe, window);
                b.Cd(re, window);
                b.options.kL && b.options.kL.call(b, a);
                if (b.uk)d = b.scale * b.yo, d = Math.max(b.options.tk, d), d = Math.min(b.options.hp, d), b.yo = d / b.scale, b.scale = d, b.x = b.Yw - b.Yw * b.yo + b.x, b.y = b.Zw - b.Zw * b.yo + b.y, b.zb.style[be] = "200ms", b.zb.style[$d] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + ve, b.uk = q, b.refresh(), b.options.Do && b.options.Do.call(b, a); else {
                    if (b.Vg) {
                        if (300 > i && b.options.zD) {
                            f = d ? b.NG(d - b.bt, i, -b.x, b.qx - b.xt + b.x, b.options.jr ? b.xt : 0) : f;
                            g = e ? b.NG(e - b.ct, i, -b.y, 0 > b.Vc ? b.Qo - b.Jm + b.y - b.We : 0, b.options.jr ? b.Jm : 0) : g;
                            d = b.x + f.oa;
                            e = b.y + g.oa;
                            if (0 < b.x && 0 < d || b.x < b.Od && d < b.Od)f = {oa: 0, time: 0};
                            if (b.y > b.We && e > b.We || b.y < b.Vc && e < b.Vc)g = {oa: 0, time: 0}
                        }
                        f.oa || g.oa ? (c = Qd.max(Qd.max(f.time, g.time), 10), b.options.Zs && (f = d - b.mv, g = e - b.nv, Qd.abs(f) < b.options.Bx && Qd.abs(g) < b.options.Bx ? b.scrollTo(b.mv, b.nv, 200) : (f = b.GH(d, e), d = f.x, e = f.y, c = Qd.max(f.time, c))), b.scrollTo(Qd.round(d), Qd.round(e), c)) : b.options.Zs ? (f = d - b.mv, g = e - b.nv, Qd.abs(f) < b.options.Bx && Qd.abs(g) < b.options.Bx ? b.scrollTo(b.mv, b.nv, 200) : (f = b.GH(b.x, b.y), (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time))) : b.vn(200)
                    } else {
                        if (je)if (b.cJ && b.options.zoom)clearTimeout(b.cJ), b.cJ = p, b.options.Eo && b.options.Eo.call(b, a), b.zoom(b.ig, b.jg, 1 == b.scale ? b.options.XT : 1), b.options.Do && setTimeout(function () {
                            b.options.Do.call(b, a)
                        }, 200); else if (this.options.YC) {
                            for (d = c.target; 1 != d.nodeType;)d = d.parentNode;
                            e = d.tagName.toLowerCase();
                            "select" != e && "input" != e && "textarea" != e ? (e = Pd.createEvent("MouseEvents"), e.initMouseEvent("click", o, o, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, p), e.wP = o, d.dispatchEvent(e)) : d.focus()
                        }
                        b.vn(400)
                    }
                    b.options.yL && b.options.yL.call(b, a)
                }
            }
        },
        vn: function (a) {
            var b = 0 <= this.x ? 0 : this.x < this.Od ? this.Od : this.x, c = this.y >= this.We || 0 < this.Vc ? this.We : this.y < this.Vc ? this.Vc : this.y;
            if (b == this.x && c == this.y) {
                if (this.Vg && (this.Vg = q, this.options.Ww && this.options.Ww.call(this)), this.Yi && this.options.Aw && ("webkit" == Sd && (this.cK.style[ee] = "300ms"), this.cK.style.opacity = "0"), this.hj && this.options.Aw)"webkit" == Sd && (this.UM.style[ee] = "300ms"), this.UM.style.opacity = "0"
            } else this.scrollTo(b, c, a || 0)
        },
        wS: function (a) {
            var b = this, c, d;
            if ("wheelDeltaX"in a)c = a.wheelDeltaX / 12, d = a.wheelDeltaY / 12; else if ("wheelDelta"in a)c = d = a.wheelDelta / 12; else if ("detail"in a)c = d = 3 * -a.detail; else return;
            if ("zoom" == b.options.aN) {
                if (d = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), d < b.options.tk && (d = b.options.tk), d > b.options.hp && (d = b.options.hp), d != b.scale)!b.Mx && b.options.Eo && b.options.Eo.call(b, a), b.Mx++, b.zoom(a.pageX, a.pageY, d, 400), setTimeout(function () {
                    b.Mx--;
                    !b.Mx && b.options.Do && b.options.Do.call(b, a)
                }, 400)
            } else c = b.x + c, d = b.y + d, 0 < c ? c = 0 : c < b.Od && (c = b.Od), d > b.We ? d = b.We : d < b.Vc && (d = b.Vc), 0 > b.Vc && b.scrollTo(c, d, 0)
        },
        sS: function (a) {
            a.target == this.zb && (this.Cd(se), this.zA())
        },
        zA: function () {
            var a = this, b = a.x, c = a.y, d = Date.now(), e, f, g;
            a.sl || (a.fj.length ? (e = a.fj.shift(), e.x == b && e.y == c && (e.time = 0), a.sl = o, a.Vg = o, a.options.di) ? (a.PH(e.time), a.Eq(e.x, e.y), a.sl = q, e.time ? a.P(se) : a.vn(0)) : (g = function () {
                var i = Date.now(), k;
                if (i >= d + e.time) {
                    a.Eq(e.x, e.y);
                    a.sl = q;
                    a.options.xW && a.options.xW.call(a);
                    a.zA()
                } else {
                    i = (i - d) / e.time - 1;
                    f = Qd.sqrt(1 - i * i);
                    i = (e.x - b) * f + b;
                    k = (e.y - c) * f + c;
                    a.Eq(i, k);
                    if (a.sl)a.TA = te(g)
                }
            }, g()) : a.vn(400))
        },
        PH: function (a) {
            a += "ms";
            this.zb.style[be] = a;
            this.Yi && (this.yV.style[be] = a);
            this.hj && (this.GY.style[be] = a)
        },
        NG: function (a, b, c, d, e) {
            var b = Qd.abs(a) / b, f = b * b / 0.0012;
            0 < a && f > c ? (c += e / (6 / (6.0E-4 * (f / b))), b = b * c / f, f = c) : 0 > a && f > d && (d += e / (6 / (6.0E-4 * (f / b))), b = b * d / f, f = d);
            return {oa: f * (0 > a ? -1 : 1), time: Qd.round(b / 6.0E-4)}
        },
        Bj: function (a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;)b -= a.offsetLeft, c -= a.offsetTop;
            a != this.Im && (b *= this.scale, c *= this.scale);
            return {left: b, top: c}
        },
        GH: function (a, b) {
            var c, d, e;
            e = this.Ce.length - 1;
            c = 0;
            for (d = this.Ce.length; c < d; c++)if (a >= this.Ce[c]) {
                e = c;
                break
            }
            e == this.wB && (0 < e && 0 > this.FB) && e--;
            a = this.Ce[e];
            d = (d = Qd.abs(a - this.Ce[this.wB])) ? 500 * (Qd.abs(this.x - a) / d) : 0;
            this.wB = e;
            e = this.Ze.length - 1;
            for (c = 0; c < e; c++)if (b >= this.Ze[c]) {
                e = c;
                break
            }
            e == this.xB && (0 < e && 0 > this.GB) && e--;
            b = this.Ze[e];
            c = (c = Qd.abs(b - this.Ze[this.xB])) ? 500 * (Qd.abs(this.y - b) / c) : 0;
            this.xB = e;
            e = Qd.round(Qd.max(d, c)) || 200;
            return {x: a, y: b, time: e}
        },
        P: function (a, b, c) {
            (b || this.zb).addEventListener(a, this, !!c)
        },
        Cd: function (a, b, c) {
            (b || this.zb).removeEventListener(a, this, !!c)
        },
        CB: ha(2),
        refresh: function () {
            var a, b, c, d = 0;
            b = 0;
            this.scale < this.options.tk && (this.scale = this.options.tk);
            this.xt = this.Im.clientWidth || 1;
            this.Jm = this.Im.clientHeight || 1;
            this.We = -this.options.lY || 0;
            this.qx = Qd.round(this.zb.offsetWidth * this.scale);
            this.Qo = Qd.round((this.zb.offsetHeight + this.We) * this.scale);
            this.Od = this.xt - this.qx;
            this.Vc = this.Jm - this.Qo + this.We;
            this.GB = this.FB = 0;
            this.options.uL && this.options.uL.call(this);
            this.so = this.options.so && 0 > this.Od;
            this.fp = this.options.fp && (!this.options.bT && !this.so || this.Qo > this.Jm);
            this.Yi = this.so && this.options.Yi;
            this.hj = this.fp && this.options.hj && this.Qo > this.Jm;
            a = this.Bj(this.Im);
            this.CE = -a.left;
            this.DE = -a.top;
            if ("string" == typeof this.options.Zs) {
                this.Ce = [];
                this.Ze = [];
                c = this.zb.querySelectorAll(this.options.Zs);
                a = 0;
                for (b = c.length; a < b; a++)d = this.Bj(c[a]), d.left += this.CE, d.top += this.DE, this.Ce[a] = d.left < this.Od ? this.Od : d.left * this.scale, this.Ze[a] = d.top < this.Vc ? this.Vc : d.top * this.scale
            } else if (this.options.Zs) {
                for (this.Ce = []; d >= this.Od;)this.Ce[b] = d, d -= this.xt, b++;
                this.Od % this.xt && (this.Ce[this.Ce.length] = this.Od - this.Ce[this.Ce.length - 1] + this.Ce[this.Ce.length - 1]);
                b = d = 0;
                for (this.Ze = []; d >= this.Vc;)this.Ze[b] = d, d -= this.Jm, b++;
                this.Vc % this.Jm && (this.Ze[this.Ze.length] = this.Vc - this.Ze[this.Ze.length - 1] + this.Ze[this.Ze.length - 1])
            }
            this.Lu("h");
            this.Lu("v");
            this.uk || (this.zb.style[be] = "0", this.vn(400))
        },
        scrollTo: function (a, b, c, d) {
            var e = a;
            this.stop();
            e.length || (e = [{x: a, y: b, time: c, TW: d}]);
            a = 0;
            for (b = e.length; a < b; a++)e[a].TW && (e[a].x = this.x - e[a].x, e[a].y = this.y - e[a].y), this.fj.push({
                x: e[a].x,
                y: e[a].y,
                time: e[a].time || 0
            });
            this.zA()
        },
        disable: function () {
            this.stop();
            this.vn(0);
            this.enabled = q;
            this.Cd(pe, window);
            this.Cd(qe, window);
            this.Cd(re, window)
        },
        enable: function () {
            this.enabled = o
        },
        stop: function () {
            this.options.di ? this.Cd(se) : ue(this.TA);
            this.fj = [];
            this.sl = this.Vg = q
        },
        zoom: function (a, b, c, d) {
            var e = c / this.scale;
            this.options.sk && (this.uk = o, d = d === j ? 200 : d, a = a - this.CE - this.x, b = b - this.DE - this.y, this.x = a - a * e + this.x, this.y = b - b * e + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.Od ? this.Od : this.x, this.y = this.y > this.We ? this.We : this.y < this.Vc ? this.Vc : this.y, this.zb.style[be] = d + "ms", this.zb.style[$d] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + ve, this.uk = q)
        }
    };
    function Zd(a) {
        if ("" === Sd)return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return Sd + a
    }

    Rd = p;
    function xe(a) {
        this.k = {anchor: Vb, offset: new K(0, 0), maxWidth: "100%", imageHeight: 80};
        var a = a || {}, b;
        for (b in a)this.k[b] = a[b];
        this.dl = new ac(p, {yf: "api"});
        this.Cj = [];
        this.G = p;
        this.qi = {height: this.k.imageHeight, width: this.k.imageHeight * ye};
        this.ej = this.oA = this.xl = this.Ic = p
    }

    z.nm(function (a) {
        var b = p;
        a.addEventListener("position_changed", function () {
            a.k.albumsControl === o && (b ? b.kx(a.Eb()) : (b = new xe(a.k.albumsControlOptions), b.fa(a)))
        });
        a.addEventListener("albums_visible_changed", function () {
            a.k.albumsControl === o ? (b ? b.kx(a.Eb()) : (b = new xe(a.k.albumsControlOptions), b.fa(a)), b.show()) : b.J()
        });
        a.addEventListener("albums_options_changed", function () {
            b && b.Vo(a.k.albumsControlOptions)
        })
    });
    var ye = 1.8;
    w.extend(xe.prototype, {
        Vo: function (a) {
            for (var b in a)this.k[b] = a[b];
            a = this.k.imageHeight + "px";
            this.fc(this.k.anchor);
            this.A.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            this.A.style.height = a;
            this.Fj.style.height = a;
            this.Ah.style.height = a;
            this.qi = {height: this.k.imageHeight, width: this.k.imageHeight * ye};
            this.Ej.style.height = this.qi.height - 6 + "px";
            this.Ej.style.width = this.qi.width - 6 + "px";
            this.kx(this.G.Eb(), o)
        }, fa: function (a) {
            this.G = a;
            this.or();
            this.eO();
            this.MV();
            this.kx(a.Eb())
        }, or: function () {
            var a = this.k.imageHeight + "px";
            this.A = J("div");
            var b = this.A.style;
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            b.padding = "8px 0";
            b.background = "white";
            b.visibility = "hidden";
            b.height = a;
            this.Fj = J("div");
            b = this.Fj.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Ah = J("div");
            b = this.Ah.style;
            b.height = a;
            this.Fj.appendChild(this.Ah);
            this.A.appendChild(this.Fj);
            this.G.A.appendChild(this.A);
            this.Ej = J("div", {"class": "pano_photo_item_seleted"});
            this.Ej.style.height = this.qi.height - 6 + "px";
            this.Ej.style.width = this.qi.width - 6 + "px";
            this.fc(this.k.anchor)
        }, hG: function (a) {
            for (var b = this.Cj, c = b.length - 1; 0 <= c; c--)if (b[c].panoId == a)return c;
            return -1
        }, kx: function (a, b) {
            if (b || !this.Cj[this.Ic] || !(this.Cj[this.Ic].panoId == a && 3 !== this.Cj[this.Ic].recoType)) {
                var c = this, d = this.hG(a);
                !b && -1 !== d && this.Cj[d] && 3 !== this.Cj[d].recoType ? this.Uo(d) : this.dV(function (a) {
                    c.Cj = a;
                    c.Jq(a);
                    0 == a.length ? c.J() : c.show()
                })
            }
        }, Jq: function (a) {
            this.Ah.innerHTML = this.OU(a);
            this.Ah.style.width = (this.qi.width + 8) * a.length + 8 + "px";
            var a = this.A.offsetWidth, b = this.Ah.offsetWidth;
            this.ej.Qr && (b += this.ej.Qr());
            b < a ? this.A.style.width = b + "px" : (this.A.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px", b < this.A.offsetWidth && (this.A.style.width = b + "px"));
            this.ej.refresh();
            this.oA = this.Ah.children;
            this.Ah.appendChild(this.Ej);
            this.Ej.style.left = "-100000px";
            a = this.hG(this.G.Eb(), this.DZ);
            -1 !== a && this.Uo(a)
        }, OU: function (a) {
            for (var b, c, d, e, f = [], g = this.qi.height, i = this.qi.width, k = 0; k < a.length; k++)b = a[k], recoType = b.recoType, c = b.panoId, d = b.name, e = b.heading, b = b.pitch, c = Od.PJ(c, e, b, 198, 108), f.push('<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + d + '" src="' + c + '" alt="' + d + '"/><span class="pano_photo_decs" data-index="' + k + '" style="width:' + i + "px;font-size:" + Math.floor(g / 6) + "px; line-height:" + Math.floor(g / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + d + "</span></a>");
            return f.join("")
        }, dV: function (a) {
            var b = this, c = this.G.Eb();
            this.dl.uw(c, function (d) {
                b.G.Eb() === c && a(d)
            })
        }, fc: function (a) {
            if (!Va(a) || isNaN(a) || a < Tb || 3 < a)a = this.defaultAnchor;
            var b = this.A, c = this.k.offset.width, d = this.k.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
                case Tb:
                    b.style.top = d + "px";
                    b.style.left = c + "px";
                    break;
                case Ub:
                    b.style.top = d + "px";
                    b.style.right = c + "px";
                    break;
                case Vb:
                    b.style.bottom = d + "px";
                    b.style.left = c + "px";
                    break;
                case 3:
                    b.style.bottom = d + "px", b.style.right = c + "px"
            }
        }, eO: function () {
            this.cO()
        }, cO: function () {
            var a = this;
            w.F(this.A, "touchstart", function (a) {
                a.stopPropagation()
            });
            w.F(this.Fj, "click", function (b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Ic)a.Uo(b), a.G.mc(a.Cj[b].panoId)
            });
            w.F(this.Ah, "mouseover", function (b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== p && a.KI(b, o)
            });
            this.G.addEventListener("size_changed", function () {
                isNaN(Number(a.k.maxWidth)) && a.Vo({maxWidth: a.k.maxWidth})
            })
        }, Uo: function (a) {
            this.Ej.style.left = this.oA[a].offsetLeft + 8 + "px";
            this.Ej.setAttribute("data-index", this.oA[a].getAttribute("data-index"));
            this.Ic = a;
            this.KI(a)
        }, KI: function (a, b) {
            var c = this.qi.width + 8, d = 0;
            this.ej.Qr && (d = this.ej.Qr() / 2);
            var e = this.Fj.offsetWidth - 2 * d, f = this.Ah.offsetLeft || this.ej.x, f = f - d, g = -a * c;
            g > f && this.ej.scrollTo(g + d);
            c = g - c;
            f -= e;
            c < f && (!b || b && 8 < g - f) && this.ej.scrollTo(c + e + d)
        }, MV: function () {
            this.ej = G() ? new we(this.Fj, {jr: q, zD: o, Yi: q, hj: q, fp: q, SK: o, aB: o, YC: o}) : new ze(this.Fj)
        }, J: function () {
            this.A.style.visibility = "hidden"
        }, show: function () {
            this.A.style.visibility = "visible"
        }
    });
    function ze(a) {
        this.A = a;
        this.zg = a.children[0];
        this.Tq = p;
        this.xk = 20;
        this.fa()
    }

    ze.prototype = {
        fa: function () {
            this.zg.style.position = "relative";
            this.refresh();
            this.or();
            this.vl()
        }, refresh: function () {
            this.nn = this.A.offsetWidth - this.Qr();
            this.Mz = -(this.zg.offsetWidth - this.nn - this.xk);
            this.Bu = this.xk;
            this.zg.style.left = this.Bu + "px";
            this.zg.children[0] && (this.Tq = this.zg.children[0].offsetWidth);
            this.th && (this.th.children[0].style.marginTop = this.Mq.children[0].style.marginTop = this.th.offsetHeight / 2 - this.th.children[0].offsetHeight / 2 + "px")
        }, Qr: function () {
            return 2 * this.xk
        }, or: function () {
            this.Mu = J("div");
            this.Mu.innerHTML = '<a class="pano_photo_arrow_l" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.th = this.Mu.children[0];
            this.Mq = this.Mu.children[1];
            this.A.appendChild(this.Mu);
            this.th.children[0].style.marginTop = this.Mq.children[0].style.marginTop = this.th.offsetHeight / 2 - this.th.children[0].offsetHeight / 2 + "px"
        }, vl: function () {
            var a = this;
            w.F(this.th, "click", function () {
                a.scrollTo(a.zg.offsetLeft + a.nn)
            });
            w.F(this.Mq, "click", function () {
                a.scrollTo(a.zg.offsetLeft - a.nn)
            })
        }, tS: function () {
            w.C.Ub(this.th, "pano_arrow_disable");
            w.C.Ub(this.Mq, "pano_arrow_disable");
            var a = this.zg.offsetLeft;
            a >= this.Bu && w.C.Wa(this.th, "pano_arrow_disable");
            a - this.nn <= this.Mz && w.C.Wa(this.Mq, "pano_arrow_disable")
        }, scrollTo: function (a) {
            a = a < this.zg.offsetLeft ? Math.ceil((a - this.xk - this.nn) / this.Tq) * this.Tq + this.nn + this.xk - 8 : Math.ceil((a - this.xk) / this.Tq) * this.Tq + this.xk;
            a < this.Mz ? a = this.Mz : a > this.Bu && (a = this.Bu);
            var b = this.zg.offsetLeft, c = this;
            new tb({
                Uc: 60, jc: ub.mJ, duration: 300, ma: function (d) {
                    c.zg.style.left = b + (a - b) * d + "px"
                }, finish: function () {
                    c.tS()
                }
            })
        }
    };
    z.Map = Ka;
    z.Hotspot = hb;
    z.MapType = Pc;
    z.Point = H;
    z.Pixel = P;
    z.Size = K;
    z.Bounds = eb;
    z.TileLayer = Cc;
    z.Projection = fc;
    z.MercatorProjection = Q;
    z.PerspectiveProjection = gb;
    z.Copyright = function (a, b, c) {
        this.id = a;
        this.Ta = b;
        this.content = c
    };
    z.Overlay = hc;
    z.Label = pc;
    z.GroundOverlay = qc;
    z.PointCollection = uc;
    z.Marker = R;
    z.Icon = lc;
    z.IconSequence = nc;
    z.Symbol = mc;
    z.Polyline = yc;
    z.Polygon = xc;
    z.InfoWindow = oc;
    z.Circle = zc;
    z.Control = Sb;
    z.NavigationControl = ib;
    z.GeolocationControl = Wb;
    z.OverviewMapControl = lb;
    z.CopyrightControl = Xb;
    z.ScaleControl = jb;
    z.MapTypeControl = mb;
    z.PanoramaControl = Zb;
    z.TrafficLayer = Mc;
    z.CustomLayer = ob;
    z.ContextMenu = bc;
    z.MenuItem = ec;
    z.LocalSearch = bb;
    z.TransitRoute = od;
    z.DrivingRoute = rd;
    z.WalkingRoute = sd;
    z.Autocomplete = zd;
    z.Geocoder = ud;
    z.LocalCity = wd;
    z.Geolocation = Geolocation;
    z.BusLineSearch = yd;
    z.Boundary = xd;
    z.VectorCloudLayer = Kc;
    z.VectorTrafficLayer = Lc;
    z.Panorama = Na;
    z.PanoramaLabel = Fd;
    z.PanoramaService = ac;
    z.PanoramaCoverageLayer = $b;
    z.PanoramaFlashInterface = Md;
    function U(a, b) {
        for (var c in b)a[c] = b[c]
    }

    U(window, {
        BMap: z, _jsload2: function (a, b) {
            ja.Ex.WV && ja.Ex.set(a, b);
            I.iT(a, b)
        }, BMAP_API_VERSION: "2.0"
    });
    var V = Ka.prototype;
    U(V, {
        getBounds: V.Id,
        getCenter: V.ya,
        getMapType: V.ja,
        getSize: V.Ib,
        setSize: V.od,
        getViewport: V.cs,
        getZoom: V.U,
        centerAndZoom: V.Vd,
        panTo: V.Xh,
        panBy: V.hg,
        setCenter: V.Ff,
        setCurrentCity: V.dE,
        setMapType: V.lg,
        setViewport: V.bh,
        setZoom: V.zc,
        highResolutionEnabled: V.Og,
        zoomTo: V.og,
        zoomIn: V.EE,
        zoomOut: V.FE,
        addHotspot: V.sv,
        removeHotspot: V.VW,
        clearHotspots: V.zl,
        checkResize: V.lT,
        addControl: V.qv,
        removeControl: V.LL,
        getContainer: V.Ea,
        addContextMenu: V.In,
        removeContextMenu: V.Jo,
        addOverlay: V.wa,
        removeOverlay: V.Fb,
        clearOverlays: V.HI,
        openInfoWindow: V.bc,
        closeInfoWindow: V.Hc,
        pointToOverlayPixel: V.De,
        overlayPixelToPoint: V.BL,
        getInfoWindow: V.Mg,
        getOverlays: V.MC,
        getPanes: function () {
            return {
                floatPane: this.Sd.nC,
                markerMouseTarget: this.Sd.wD,
                floatShadow: this.Sd.xJ,
                labelPane: this.Sd.qD,
                markerPane: this.Sd.WK,
                markerShadow: this.Sd.XK,
                mapPane: this.Sd.ts
            }
        },
        addTileLayer: V.Dg,
        removeTileLayer: V.$g,
        pixelToPoint: V.kb,
        pointToPixel: V.Rb,
        setFeatureStyle: V.To,
        selectBaseElement: V.a1,
        setMapStyle: V.Os,
        enable3DBuilding: V.Zn,
        disable3DBuilding: V.RT
    });
    var Ae = Pc.prototype;
    U(Ae, {
        getTileLayer: Ae.pV,
        getMinZoom: Ae.ho,
        getMaxZoom: Ae.Ol,
        getProjection: Ae.mo,
        getTextColor: Ae.as,
        getTips: Ae.bs
    });
    U(window, {BMAP_NORMAL_MAP: La, BMAP_PERSPECTIVE_MAP: Oa, BMAP_SATELLITE_MAP: Xa, BMAP_HYBRID_MAP: Qa});
    var Be = Q.prototype;
    U(Be, {lngLatToPoint: Be.Sg, pointToLngLat: Be.Zh});
    var Ce = gb.prototype;
    U(Ce, {lngLatToPoint: Ce.Sg, pointToLngLat: Ce.Zh});
    var De = eb.prototype;
    U(De, {
        equals: De.Xa,
        containsPoint: De.mr,
        containsBounds: De.vT,
        intersects: De.is,
        extend: De.extend,
        getCenter: De.ya,
        isEmpty: De.cj,
        getSouthWest: De.Be,
        getNorthEast: De.zf,
        toSpan: De.uE
    });
    var Ee = hc.prototype;
    U(Ee, {isVisible: Ee.Rg, show: Ee.show, hide: Ee.J});
    hc.getZIndex = hc.Ul;
    var He = fb.prototype;
    U(He, {
        openInfoWindow: He.bc,
        closeInfoWindow: He.Hc,
        enableMassClear: He.Ri,
        disableMassClear: He.TT,
        show: He.show,
        hide: He.J,
        getMap: He.mw,
        addContextMenu: He.In,
        removeContextMenu: He.Jo
    });
    var Ie = R.prototype;
    U(Ie, {
        setIcon: Ie.Kb,
        getIcon: Ie.fo,
        setPosition: Ie.ha,
        getPosition: Ie.V,
        setOffset: Ie.ee,
        getOffset: Ie.Af,
        getLabel: Ie.HC,
        setLabel: Ie.xm,
        setTitle: Ie.nc,
        setTop: Ie.bi,
        enableDragging: Ie.Pb,
        disableDragging: Ie.HB,
        setZIndex: Ie.Ts,
        getMap: Ie.mw,
        setAnimation: Ie.wm,
        setShadow: Ie.vx,
        hide: Ie.J,
        setRotation: Ie.Xo,
        getRotation: Ie.TJ
    });
    U(window, {BMAP_ANIMATION_DROP: 1, BMAP_ANIMATION_BOUNCE: 2});
    var Je = pc.prototype;
    U(Je, {
        setStyle: Je.qd,
        setStyles: Je.ai,
        setContent: Je.Mc,
        setPosition: Je.ha,
        getPosition: Je.V,
        setOffset: Je.ee,
        getOffset: Je.Af,
        setTitle: Je.nc,
        setZIndex: Je.Ts,
        getMap: Je.mw,
        getContent: Je.Tj
    });
    var Ke = lc.prototype;
    U(Ke, {
        setImageUrl: Ke.CX,
        setSize: Ke.od,
        setAnchor: Ke.fc,
        setImageOffset: Ke.Ns,
        setImageSize: Ke.AX,
        setInfoWindowAnchor: Ke.EX,
        setPrintImageUrl: Ke.NX
    });
    var Le = oc.prototype;
    U(Le, {
        redraw: Le.Pd,
        setTitle: Le.nc,
        setContent: Le.Mc,
        getContent: Le.Tj,
        getPosition: Le.V,
        enableMaximize: Le.Gg,
        disableMaximize: Le.Uv,
        isOpen: Le.Ja,
        setMaxContent: Le.Ps,
        maximize: Le.Qw,
        enableAutoPan: Le.Ir
    });
    var Me = jc.prototype;
    U(Me, {
        getPath: Me.Zd,
        setPath: Me.fe,
        setPositionAt: Me.zm,
        getStrokeColor: Me.jV,
        setStrokeWeight: Me.$o,
        getStrokeWeight: Me.WJ,
        setStrokeOpacity: Me.Yo,
        getStrokeOpacity: Me.kV,
        setFillOpacity: Me.Ms,
        getFillOpacity: Me.KU,
        setStrokeStyle: Me.Zo,
        getStrokeStyle: Me.VJ,
        getFillColor: Me.JU,
        getBounds: Me.Id,
        enableEditing: Me.xf,
        disableEditing: Me.ST
    });
    var Ne = zc.prototype;
    U(Ne, {setCenter: Ne.Ff, getCenter: Ne.ya, getRadius: Ne.RJ, setRadius: Ne.$e});
    var Oe = xc.prototype;
    U(Oe, {getPath: Oe.Zd, setPath: Oe.fe, setPositionAt: Oe.zm});
    var Pe = hb.prototype;
    U(Pe, {getPosition: Pe.V, setPosition: Pe.ha, getText: Pe.RC, setText: Pe.Ss});
    H.prototype.equals = H.prototype.Xa;
    P.prototype.equals = P.prototype.Xa;
    K.prototype.equals = K.prototype.Xa;
    U(window, {
        BMAP_ANCHOR_TOP_LEFT: Tb,
        BMAP_ANCHOR_TOP_RIGHT: Ub,
        BMAP_ANCHOR_BOTTOM_LEFT: Vb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var Qe = Sb.prototype;
    U(Qe, {
        setAnchor: Qe.fc,
        getAnchor: Qe.tC,
        setOffset: Qe.ee,
        getOffset: Qe.Af,
        show: Qe.show,
        hide: Qe.J,
        isVisible: Qe.Rg,
        toString: Qe.toString
    });
    var Re = ib.prototype;
    U(Re, {getType: Re.qo, setType: Re.Am});
    U(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Se = lb.prototype;
    U(Se, {changeView: Se.Wd, setSize: Se.od, getSize: Se.Ib});
    var Te = jb.prototype;
    U(Te, {getUnit: Te.tV, setUnit: Te.jE});
    U(window, {BMAP_UNIT_METRIC: "metric", BMAP_UNIT_IMPERIAL: "us"});
    var Ue = Xb.prototype;
    U(Ue, {addCopyright: Ue.rv, removeCopyright: Ue.QD, getCopyright: Ue.Ml, getCopyrightCollection: Ue.AC});
    U(window, {BMAP_MAPTYPE_CONTROL_HORIZONTAL: Yb, BMAP_MAPTYPE_CONTROL_DROPDOWN: 1, BMAP_MAPTYPE_CONTROL_MAP: 2});
    var Ve = Cc.prototype;
    U(Ve, {getMapType: Ve.ja, getCopyright: Ve.Ml, isTransparentPng: Ve.qs});
    var We = bc.prototype;
    U(We, {addItem: We.tv, addSeparator: We.PA, removeSeparator: We.SD});
    var Xe = ec.prototype;
    U(Xe, {setText: Xe.Ss});
    var Ye = T.prototype;
    U(Ye, {
        getStatus: Ye.Rl,
        setSearchCompleteCallback: Ye.hE,
        getPageCapacity: Ye.Te,
        setPageCapacity: Ye.Wo,
        setLocation: Ye.ym,
        disableFirstResultSelection: Ye.IB,
        enableFirstResultSelection: Ye.bC,
        gotoPage: Ye.Vl,
        searchNearby: Ye.Ro,
        searchInBounds: Ye.vm,
        search: Ye.search
    });
    U(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: 2,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: 6,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: 8
    });
    U(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    U(window, {
        BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2
    });
    var Ze = nd.prototype;
    U(Ze, {clearResults: Ze.ye});
    pd = od.prototype;
    U(pd, {setPolicy: pd.Rs, toString: pd.toString, setPageCapacity: pd.Wo});
    U(window, {
        BMAP_DRIVING_POLICY_LEAST_TIME: 0,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
    });
    U(window, {BMAP_HIGHLIGHT_STEP: 1, BMAP_HIGHLIGHT_ROUTE: 2});
    U(window, {BMAP_ROUTE_TYPE_DRIVING: $c, BMAP_ROUTE_TYPE_WALKING: Zc});
    U(window, {BMAP_ROUTE_STATUS_NORMAL: ad, BMAP_ROUTE_STATUS_EMPTY: 1, BMAP_ROUTE_STATUS_ADDRESS: 2});
    var $e = rd.prototype;
    U($e, {setPolicy: $e.Rs});
    var af = zd.prototype;
    U(af, {show: af.show, hide: af.J, setTypes: af.iE, setLocation: af.ym, search: af.search, setInputValue: af.sx});
    U(ob.prototype, {});
    var bf = xd.prototype;
    U(bf, {get: bf.get});
    U($b.prototype, {});
    U(cb.prototype, {});
    U(window, {BMAP_POINT_DENSITY_HIGH: 200, BMAP_POINT_DENSITY_MEDIUM: Oc, BMAP_POINT_DENSITY_LOW: 50});
    U(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: rc,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    U(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: sc,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    U(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    U(window, {BMAP_CONTEXT_MENU_ICON_ZOOMIN: cc, BMAP_CONTEXT_MENU_ICON_ZOOMOUT: dc});
    z.LS();
})()
