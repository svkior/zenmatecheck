! function e(t, n, s) {
    function o(r, a) {
        if (!n[r]) {
            if (!t[r]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(r, !0);
                if (i) return i(r, !0);
                var p = new Error("Cannot find module '" + r + "'");
                throw p.code = "MODULE_NOT_FOUND", p
            }
            var c = n[r] = {
                exports: {}
            };
            t[r][0].call(c.exports, function(e) {
                var n = t[r][1][e];
                return o(n ? n : e)
            }, c, c.exports, e, t, n, s)
        }
        return n[r].exports
    }
    for (var i = "function" == typeof require && require, r = 0; r < s.length; r++) o(s[r]);
    return o
}({
    1: [function(e, t, n) {
        ! function(n, s) {
            "object" == typeof t && t.exports && "function" == typeof e ? t.exports = s() : "function" == typeof define && "object" == typeof define.amd ? define(s) : n.log = s()
        }(this, function() {
            function e(e) {
                return typeof console === l ? !1 : void 0 !== console[e] ? t(console, e) : void 0 !== console.log ? t(console, "log") : a
            }

            function t(e, t) {
                var n = e[t];
                if ("function" == typeof n.bind) return n.bind(e);
                try {
                    return Function.prototype.bind.call(n, e)
                } catch (s) {
                    return function() {
                        return Function.prototype.apply.apply(n, [e, arguments])
                    }
                }
            }

            function n(e, t) {
                return function() {
                    typeof console !== l && (s(t), r[e].apply(r, arguments))
                }
            }

            function s(e) {
                for (var t = 0; t < p.length; t++) {
                    var n = p[t];
                    r[n] = e > t ? a : r.methodFactory(n, e)
                }
            }

            function o(e) {
                var t = (p[e] || "silent").toUpperCase();
                try {
                    return void(window.localStorage.loglevel = t)
                } catch (n) {}
                try {
                    window.document.cookie = "loglevel=" + t + ";"
                } catch (n) {}
            }

            function i() {
                var e;
                try {
                    e = window.localStorage.loglevel
                } catch (t) {}
                if (typeof e === l) try {
                    e = /loglevel=([^;]+)/.exec(window.document.cookie)[1]
                } catch (t) {}
                void 0 === r.levels[e] && (e = "WARN"), r.setLevel(r.levels[e])
            }
            var r = {},
                a = function() {},
                l = "undefined",
                p = ["trace", "debug", "info", "warn", "error"];
            r.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
            }, r.methodFactory = function(t, s) {
                return e(t) || n(t, s)
            }, r.setLevel = function(e, t) {
                if ("string" == typeof e && void 0 !== r.levels[e.toUpperCase()] && (e = r.levels[e.toUpperCase()]), !("number" == typeof e && e >= 0 && e <= r.levels.SILENT)) throw "log.setLevel() called with invalid level: " + e;
                return t !== !1 && o(e), s(e), typeof console === l && e < r.levels.SILENT ? "No console available for logging" : void 0
            }, r.enableAll = function(e) {
                r.setLevel(r.levels.TRACE, e)
            }, r.disableAll = function(e) {
                r.setLevel(r.levels.SILENT, e)
            };
            var c = typeof window !== l ? window.log : void 0;
            return r.noConflict = function() {
                return typeof window !== l && window.log === r && (window.log = c), r
            }, i(), r
        })
    }, {}],
    2: [function(e, t, n) {
        (function(e) {
            ! function(s) {
                function o(e) {
                    throw new RangeError(C[e])
                }

                function i(e, t) {
                    for (var n = e.length, s = []; n--;) s[n] = t(e[n]);
                    return s
                }

                function r(e, t) {
                    var n = e.split("@"),
                        s = "";
                    n.length > 1 && (s = n[0] + "@", e = n[1]), e = e.replace(q, ".");
                    var o = e.split("."),
                        r = i(o, t).join(".");
                    return s + r
                }

                function a(e) {
                    for (var t, n, s = [], o = 0, i = e.length; i > o;) t = e.charCodeAt(o++), t >= 55296 && 56319 >= t && i > o ? (n = e.charCodeAt(o++), 56320 == (64512 & n) ? s.push(((1023 & t) << 10) + (1023 & n) + 65536) : (s.push(t), o--)) : s.push(t);
                    return s
                }

                function l(e) {
                    return i(e, function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += A(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += A(e)
                    }).join("")
                }

                function p(e) {
                    return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : _
                }

                function c(e, t) {
                    return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                }

                function u(e, t, n) {
                    var s = 0;
                    for (e = n ? S(e / N) : e >> 1, e += S(e / t); e > j * I >> 1; s += _) e = S(e / j);
                    return S(s + (j + 1) * e / (e + T))
                }

                function d(e) {
                    var t, n, s, i, r, a, c, d, m, f, h = [],
                        g = e.length,
                        y = 0,
                        w = x,
                        v = P;
                    for (n = e.lastIndexOf(k), 0 > n && (n = 0), s = 0; n > s; ++s) e.charCodeAt(s) >= 128 && o("not-basic"), h.push(e.charCodeAt(s));
                    for (i = n > 0 ? n + 1 : 0; g > i;) {
                        for (r = y, a = 1, c = _; i >= g && o("invalid-input"), d = p(e.charCodeAt(i++)), (d >= _ || d > S((E - y) / a)) && o("overflow"), y += d * a, m = v >= c ? R : c >= v + I ? I : c - v, !(m > d); c += _) f = _ - m, a > S(E / f) && o("overflow"), a *= f;
                        t = h.length + 1, v = u(y - r, t, 0 == r), S(y / t) > E - w && o("overflow"), w += S(y / t), y %= t, h.splice(y++, 0, w)
                    }
                    return l(h)
                }

                function m(e) {
                    var t, n, s, i, r, l, p, d, m, f, h, g, y, w, v, b = [];
                    for (e = a(e), g = e.length, t = x, n = 0, r = P, l = 0; g > l; ++l) h = e[l], 128 > h && b.push(A(h));
                    for (s = i = b.length, i && b.push(k); g > s;) {
                        for (p = E, l = 0; g > l; ++l) h = e[l], h >= t && p > h && (p = h);
                        for (y = s + 1, p - t > S((E - n) / y) && o("overflow"), n += (p - t) * y, t = p, l = 0; g > l; ++l)
                            if (h = e[l], t > h && ++n > E && o("overflow"), h == t) {
                                for (d = n, m = _; f = r >= m ? R : m >= r + I ? I : m - r, !(f > d); m += _) v = d - f, w = _ - f, b.push(A(c(f + v % w, 0))), d = S(v / w);
                                b.push(A(c(d, 0))), r = u(n, y, s == i), n = 0, ++s
                            }++n, ++t
                    }
                    return b.join("")
                }

                function f(e) {
                    return r(e, function(e) {
                        return M.test(e) ? d(e.slice(4).toLowerCase()) : e
                    })
                }

                function h(e) {
                    return r(e, function(e) {
                        return L.test(e) ? "xn--" + m(e) : e
                    })
                }
                var g = "object" == typeof n && n && !n.nodeType && n,
                    y = "object" == typeof t && t && !t.nodeType && t,
                    w = "object" == typeof e && e;
                w.global !== w && w.window !== w && w.self !== w || (s = w);
                var v, b, E = 2147483647,
                    _ = 36,
                    R = 1,
                    I = 26,
                    T = 38,
                    N = 700,
                    P = 72,
                    x = 128,
                    k = "-",
                    M = /^xn--/,
                    L = /[^\x20-\x7E]/,
                    q = /[\x2E\u3002\uFF0E\uFF61]/g,
                    C = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    j = _ - R,
                    S = Math.floor,
                    A = String.fromCharCode;
                if (v = {
                        version: "1.3.2",
                        ucs2: {
                            decode: a,
                            encode: l
                        },
                        decode: d,
                        encode: m,
                        toASCII: h,
                        toUnicode: f
                    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
                    return v
                });
                else if (g && y)
                    if (t.exports == g) y.exports = v;
                    else
                        for (b in v) v.hasOwnProperty(b) && (g[b] = v[b]);
                else s.punycode = v
            }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    3: [function(e, t, n) {
        var s, o;
        o = e("loglevel"), s = {
            logLevel: "silent",
            apiURL: "https://api.zenguard.biz",
            newsServiceUrl: "https://crm.zenguard.biz/crm/",
            localDomains: ["zenguard.biz", "local", "dev", "ip", "box", "lvh.me", "ripe", "invalid", "intra", "intranet", "onion", "vcap.me", "zeus.pm", "127.0.0.1.xip.io", "smackaho.st", "localtest.me", "site", "about:addons", "about:newtab", "about:preferences", "about:config"],
            blackList: {
                "jid1-4P0kohSJxU1qGg@jetpack": "hola"
            },
            alternativeNodes: [],
            nodeOverrides: [],
            ruleOverrides: [{
                domains: ["facebook.com"],
                hosts: ["facebook.net", "fbcdn.com", "fbcdn.net", "fbstatic-a.akamaihd.net", "fbcdn-dragon-a.akamaihd.net"]
            }]
        }, s.setLogLevel = function(e) {
            return null != e ? (s.logLevel = e, o.setLevel(s.logLevel), console.info("logLevel:", s.logLevel)) : void 0
        }, s.setApiURL = function(e) {
            return null != e ? (s.apiURL = e, console.info("api:", s.apiURL)) : void 0
        }, s.setLogLevel("silent"), "undefined" != typeof window && null !== window && (window.config = s), t.exports = s
    }, {
        loglevel: 1
    }],
    4: [function(e, t, n) {
        var s;
        s = function() {
            function e() {
                this.listeners = {}
            }
            return e.prototype.off = function(e, t) {
                var n;
                return this.listeners[e] = null != (n = this.listeners[e]) ? n.filter(function(e) {
                    return e !== t
                }) : void 0
            }, e.prototype.on = function(e, t) {
                return this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
            }, e.prototype.trigger = function(e, t) {
                var n, s, o, i, r;
                if (this.listeners[e]) {
                    for (i = this.listeners[e], r = [], n = 0, s = i.length; s > n; n++) o = i[n], r.push(o(t));
                    return r
                }
            }, e
        }(), t.exports = s
    }, {}],
    5: [function(e, t, n) {
        var s, o, i, r, a, l, p, c, u = {}.hasOwnProperty;
        s = e("./config"), c = e("./util"), r = e("loglevel"), o = {
            localDomains: s.localDomains,
            nodeOverrides: s.nodeOverrides,
            IPv4NotationRE: /^\d+\.\d+\.\d+\.\d+$/g,
            localIPsRE: /(^127\.)|(^192\.168\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)/
        }, i = {
            data: o,
            nodeLookup: function(e, t) {
                return e[t] || !1
            },
            compareHosts: function(e, t) {
                var n, s, o;
                for (s = 0, o = e.length; o > s; s++)
                    if (n = e[s], this.matchWildcardDomain(t, n)) return n
            },
            compareURLs: function(e, t) {
                var n, s, o;
                for (n = 0, s = e.length; s > n; n++)
                    if (o = e[n], o.test(t)) return o
            },
            dnsDomainIs: function(e, t) {
                return e.length >= t.length && e.substring(e.length - t.length) === t
            },
            matchWildcardDomain: function(e, t) {
                var n, s, o;
                return n = e === t, o = e.slice(-t.length) === t, s = "." === e[e.lastIndexOf(t) - 1], n || o && s
            },
            matchNodeOverride: function(e, t) {
                var n, s, o;
                return o = function() {
                    var s, o, i, r;
                    for (i = this.data.nodeOverrides, r = [], s = 0, o = i.length; o > s; s++) n = i[s], n.target_cc === t && this.compareHosts(n.hosts, e) && r.push(n);
                    return r
                }.call(this), (null != o && null != (s = o[0]) ? s.nodes : void 0) || !1
            },
            matchRules: function(e, t, n) {
                var o, i, r, l;
                if ((null != e ? e.length : void 0) > 0)
                    for (null == this.data.rulesWithOverrides && (e = a(e, s.ruleOverrides)), o = i = 0, r = e.length; r > i; o = ++i)
                        if (l = e[o], this.matchWildcardDomain(t, l.domain) || null != l.hosts && this.compareHosts(l.hosts, t)) return o
            },
            _getProxyState: function(e, t, n) {
                var s, o, i, r, a;
                if (e = e.toLowerCase(), this.data.IPv4NotationRE.lastIndex = 0, this.data.localIPsRE.lastIndex = 0, !~t.indexOf(".") && !~t.indexOf(":")) return "LOCAL";
                if (this.data.IPv4NotationRE.test(t) && this.data.localIPsRE.test(t)) return "LOCAL";
                for (a = this.data.localDomains, s = 0, o = a.length; o > s; s++)
                    if (i = a[s], this.matchWildcardDomain(t, i)) return "LOCAL";
                return r = this.matchRules(n, t, e), null != r ? n[r].cc : "DEFAULT"
            }
        }, p = function(e) {
            var t, n, s;
            null == e && (e = i), n = [];
            for (t in e)
                if (u.call(e, t)) switch (s = e[t], typeof e[t]) {
                    case "function":
                        n.push(t + ": " + s.toString());
                        break;
                    case "object":
                        n.push(t + ": " + JSON.stringify(e[t]))
                }
                return "{ " + n.join(",") + " }"
        }, a = function(e, t) {
            var n, s, o, i, r, a;
            if (!((null != e ? e.length : void 0) > 0)) return [];
            if (!((null != t ? t.length : void 0) > 0)) return e;
            for (n = 0, o = e.length; o > n; n++)
                for (a = e[n], s = 0, i = t.length; i > s; s++) r = t[s], r.domains.indexOf(a.domain) > -1 && (a.hosts = c.concatUnique(a.hosts || [], r.hosts || []));
            return e
        }, l = "e.data.IPv4NotationRE = " + o.IPv4NotationRE.toString() + ";\ne.data.localIPsRE = " + o.localIPsRE.toString() + ";", n.exportPAC = function(e, t, n, o) {
            var i;
            return null == n && (n = []), null == o && (o = []), i = "/*ZenMate*/\nfunction FindProxyForURL(url, host) {\n\n  var e = " + p() + ";\n  e.data.localDomains = e.data.localDomains.concat(" + JSON.stringify(o) + ");\n  " + l + "\n\n  e.data.defaultLocation = '" + e + "';\n  e.data.nodeDict = " + JSON.stringify(t) + ";\n  e.data.rulesWithOverrides = " + JSON.stringify(a(n, s.ruleOverrides)) + ";\n\n  var res = e._getProxyState(url, host, e.data.rulesWithOverrides);\n\n  if (res === 'LOCAL' || res === 'DIRECT' || res === 'OFF') {return 'DIRECT'};\n  if (res === 'DEFAULT') {cc = e.data.defaultLocation} else {cc = res};\n\n  var override = e.matchNodeOverride(host, cc);\n  if (override) {cc = override};\n\n  return e.nodeLookup(e.data.nodeDict, cc) || 'DIRECT';\n}"
        }, n.getProxyStateByURL = function(e, t, n) {
            return null == n && (n = []), t = t || c.parseURL(e).host || e, i._getProxyState(e, t, n)
        }, n.getNodeDictFromLocations = function(e, t, n) {
            var o, i, r, a, l;
            for (e = e.concat(s.alternativeNodes), a = {}, o = 0, i = e.length; i > o; o++) r = e[o], l = r.nodes.slice(0, 15).map(function(e) {
                var t;
                return t = e.replace("node.zenmate.io", "zenguard.org").replace("node.zenguard.co", "zenguard.co"), n ? t : "HTTPS " + t + ":443"
            }), a[r.country_code] = l.join(";");
            return a
        }, n.matchRules = function(e, t, n) {
            return i.matchRules(e, t, n)
        }
    }, {
        "./config": 3,
        "./util": 6,
        loglevel: 1
    }],
    6: [function(e, t, n) {
        var s;
        s = e("./config"), n.generateInstallId = function() {
            var e;
            return e = function() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }, e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }, n.parseURL = function(e) {
            var t, n, s;
            return s = /^([^:]+):\/\/([^\/:]*)(?::([\d]+))?(?:(\/[^#]*)(?:#(.*))?)?$/i, t = e.match(s), t ? {
                scheme: t[1].toLowerCase(),
                host: t[2].toLowerCase(),
                port: t[3],
                path: t[4] || "/",
                fragment: t[5],
                local: "http" !== (n = t[1].toLowerCase()) && "https" !== n
            } : {}
        }, n.getUTMSourcesFromURL = function(e) {
            var t, s, o, i;
            for (s = n.parseURL(e).path, o = /[?&]([^=#]+)=([^&#]*)/g, i = []; t = o.exec(s);) 0 === t[1].indexOf("utm_") && i.push(t[1] + "=" + t[2]);
            return i.join(";")
        }, n.concatUnique = function(e, t) {
            return e.concat(t).filter(function(e, t, n) {
                return n.indexOf(e) === t
            })
        }, n.parseDate = function(e) {
            var t, n, s, o, i;
            return s = e.split(" "), n = s[0], i = s[1], t = n.split("-"), o = i.split(":"), new Date(t[0], t[1] - 1, t[2], o[0], o[1], o[2])
        }
    }, {
        "./config": 3
    }],
    7: [function(e, t, n) {
        var s;
        s = e("../../background/emitter"), t.exports = new s
    }, {
        "../../background/emitter": 4
    }],
    8: [function(e, t, n) {
        (function(n) {
            var s, o;
            s = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, o = e("./events"), t.exports = s.createClass({
                displayName: "Link",
                _openLink: function(e) {
                    var t;
                    return e.preventDefault(), (null != (t = this.props) ? t.clickAction : void 0) && this.props.clickAction(), o.trigger("openPage", {
                        url: this.props.url,
                        ga: this.props.ga,
                        params: this.props.params
                    })
                },
                render: function() {
                    return s.createElement("a", s.__spread({
                        href: this.props.url,
                        onClick: this._openLink
                    }, this.props), this.props.children)
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./events": 7
    }],
    9: [function(e, t, n) {
        var s, o, i, r = function(e, t) {
                function n() {
                    this.constructor = e
                }
                for (var s in t) a.call(t, s) && (e[s] = t[s]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            },
            a = {}.hasOwnProperty;
        s = e("../../background/emitter"), i = e("loglevel"), o = function(e) {
            function t(e) {
                var n, s;
                this.name = e, t.__super__.constructor.call(this), this.port = null != ("undefined" != typeof chrome && null !== chrome && null != (n = chrome.runtime) ? n.connect : void 0) ? chrome.runtime.connect({
                    name: this.name
                }) : ("undefined" != typeof addon && null !== addon ? addon.port : void 0) ? addon.port : null != ("undefined" != typeof self && null !== self ? self.port : void 0) ? self.port : void 0, null != (null != (s = this.port.onMessage) ? s.addListener : void 0) ? this.port.onMessage.addListener(this.handleMessage.bind(this)) : null != this.port.on && this.port.on(this.name, this.handleMessage.bind(this))
            }
            return r(t, e), t.prototype.handleMessage = function(e) {
                var t;
                return null != (t = this.listeners[e.subject]) ? t.forEach(function(t) {
                    return t(e.payload)
                }) : void 0
            }, t.prototype.send = function(e, t) {
                var n;
                return null == t && (t = null), n = {
                    subject: e,
                    payload: t,
                    timestamp: (new Date).valueOf()
                }, null != this.port.postMessage ? this.port.postMessage(n) : null != this.port.emit ? this.port.emit(this.name, n) : void 0
            }, t
        }(s), t.exports = o
    }, {
        "../../background/emitter": 4,
        loglevel: 1
    }],
    10: [function(e, t, n) {
        (function(t) {
            var n, s, o, i, r, a, l, p, c, u, d, m, f, h, g, y, w;
            n = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, i = "undefined" != typeof window ? window.React : "undefined" != typeof t ? t.React : null, c = e("../events"), o = e("./views/index"), s = e("../message_handler"), u = ("undefined" != typeof window ? window.locales : "undefined" != typeof t ? t.locales : null).getLocalization, h = e("loglevel"), g = e("../../../background/util").parseDate, w = e("../router").router(), r = new s("popup"), m = new n.Bus, l = m.merge(n.fromEvent(r, "response:data")), d = n.fromEvent(c, "header").merge(l.map(function(e) {
                var t;
                return t = e.promo
            }).filter(function(e) {
                return e
            }).map(function(e) {
                return {
                    open: !0,
                    view: e.view
                }
            })).toProperty({
                open: !1
            }), f = l.map(function(e) {
                var t;
                return t = e.language, u(t)
            }).toProperty(), a = l.combine(f, function(e, t) {
                var n, s, o, i, r, a;
                for (i = {}, r = e.locations, n = 0, s = r.length; s > n; n++) o = r[n], i[o.country_code] = t.messages.locations[null != (a = o.country_code) ? a.toLowerCase() : void 0] || o.location;
                return i
            }), y = w.changes().filter(function(e) {
                var t;
                return t = e.current, "home" === t
            }).map(function() {
                return Math.random()
            }).toProperty(Math.random()).combine(l, function(e, t) {
                var n, s, o;
                return s = [], t.user.is_premium && (n = g(t.user.premium_expires_at) - g(t.user.server_time), n = Math.ceil(n / 1e3 / 60 / 60 / 24), 8 > n && !t.user.has_recurring_subscription ? s.push("renew_subscription") : s.push("premium_desktop_clients")), !t.user.is_premium && t.user.is_anonymous ? s.push("free_sign_up") : t.user.is_premium || (s = s.concat(["free_get_premium", "free_faster_speed", "free_desktop_clients", "free_smart_locations", "free_more_locations", "free_malware_blocking", "free_tracking_protection"])), o = Math.floor(e * s.length), s[o]
            }), p = null, n.combineAsArray(l, w, d, p, f, a, y).onValues(function(e, t, n, s, r, a, l) {
                return i.render(i.createElement(o, i.__spread({
                    debug: s,
                    header: n,
                    routes: t,
                    countryNames: a,
                    randomNews: l
                }, r, e)), document.getElementById("app-container"))
            }), n.fromEventTarget(c, "toggleProxy").onValue(r, "send", "request:toggleProxy"), n.fromEventTarget(c, "openPage").onValue(r, "send", "request:openPage"), n.fromEventTarget(c, "signOut").onValue(function() {
                return r.send("request:signOut")
            }), n.fromEventTarget(c, "hideHeader").onValue(function(e) {
                return r.send("request:hide-" + e)
            }), n.fromEventTarget(c, "unblockProxySettings").onValue(function() {
                return r.send("request:unblockProxySettings")
            }), n.fromEventTarget(c, "confirmAccount").onValue(function() {
                return r.send("request:openPage", {
                    url: "page.html#verify"
                }), r.send("request:confirmAccount")
            }), n.fromEventTarget(c, "changeLanguage").onValue(function(e) {
                return r.send("request:changeLanguage", e), location.hash = "home"
            }), n.fromEventTarget(c, "locations:change").onValue(function(e) {
                return location.hash = "home", r.send("request:changeLocation", e)
            }), n.fromEventTarget(c, "toggleMalware").onValue(function(e) {
                return r.send("request:toggleMalware", e)
            }), n.fromEventTarget(c, "toggleTracking").onValue(function(e) {
                return r.send("request:toggleTracking", e)
            }), n.fromEventTarget(c, "updateRules").onValue(function(e) {
                return r.send("request:updateRules", e)
            }), n.fromEventTarget(c, "toggleRules").onValue(function(e) {
                return r.send("request:toggleRules", e)
            }), r.send("request:popupOpen"), m.push(chrome.extension.getBackgroundPage().window.popupData), document.body.addEventListener("contextmenu", function(e) {
                return e.preventDefault()
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../background/util": 6,
        "../events": 7,
        "../message_handler": 9,
        "../router": 49,
        "./views/index": 31,
        loglevel: 1
    }],
    11: [function(e, t, n) {
        (function(n) {
            var s, o;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = e("./header"), t.exports = o.createClass({
                displayName: "DebugPage",
                propTypes: {
                    header: o.PropTypes.object.isRequired,
                    device: o.PropTypes.object.isRequired,
                    routes: o.PropTypes.object.isRequired,
                    defaultLocation: o.PropTypes.object.isRequired,
                    debug: o.PropTypes.object.isRequired,
                    is_premium: o.PropTypes.bool.isRequired
                },
                render: function() {
                    var e, t, n;
                    return o.createElement("div", null, o.createElement(s, {
                        showBack: !0,
                        header: this.props.header,
                        device: this.props.device,
                        routes: this.props.routes,
                        is_premium: this.props.is_premium
                    }), o.createElement("div", {
                        className: "debug-container"
                    }, null != this.props.defaultLocation ? o.createElement("section", null, o.createElement("h3", null, "Connection"), o.createElement("p", null, "Currently connected to ", this.props.defaultLocation.country_name), o.createElement("p", null, "Nodes in order of likeliness to be active:"), o.createElement("ol", null, function() {
                        var e, n, s, i;
                        for (s = this.props.defaultLocation.nodes, i = [], e = 0, n = s.length; n > e; e++) t = s[e], i.push(o.createElement("li", {
                            key: t
                        }, t));
                        return i
                    }.call(this))) : void 0, o.createElement("section", null, o.createElement("h3", null, "Debug Overrides"), o.createElement("ul", null, function() {
                        var t, s;
                        t = this.props.debug, s = [];
                        for (e in t) n = t[e], s.push(o.createElement("li", {
                            key: e
                        }, o.createElement("strong", null, e), ":", o.createElement("span", null, n)));
                        return s
                    }.call(this)))))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./header": 14
    }],
    12: [function(e, t, n) {
        (function(e) {
            var n, s;
            s = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, n = s.addons.PureRenderMixin, t.exports = s.createClass({
                displayName: "FeatureItem",
                mixins: [n],
                propTypes: {
                    onClick: s.PropTypes.func,
                    onChange: s.PropTypes.func,
                    icon: s.PropTypes.string.isRequired,
                    iconRetina: s.PropTypes.string.isRequired,
                    label: s.PropTypes.string.isRequired,
                    description: s.PropTypes.string.isRequired,
                    enabled: s.PropTypes.bool,
                    arrow: s.PropTypes.bool
                },
                render: function() {
                    return s.createElement("li", {
                        onClick: this.props.onClick,
                        className: "feature-item"
                    }, s.createElement("img", {
                        className: "icon " + (this.props.enabled === !1 ? "disabled" : ""),
                        src: this.props.icon,
                        srcSet: this.props.iconRetina + " 2x"
                    }), s.createElement("span", {
                        className: "name"
                    }, this.props.label), this.props.onChange ? s.createElement("label", {
                        className: "flat-switch"
                    }, s.createElement("input", {
                        onChange: this.props.onChange,
                        checked: this.props.enabled,
                        type: "checkbox",
                        className: "flat-switch-checkbox"
                    }), s.createElement("div", {
                        className: "flat-toggle"
                    })) : void 0, this.props.arrow ? s.createElement("span", {
                        className: "arrow"
                    }) : void 0, s.createElement("span", {
                        className: "description"
                    }, this.props.description))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    13: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a;
            r = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, i = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, o = e("../header"), a = e("../../../events"), s = e("./feature_item"), t.exports = r.createClass({
                displayName: "Features",
                mixins: [i],
                propTypes: {
                    routes: r.PropTypes.object.isRequired,
                    header: r.PropTypes.object.isRequired,
                    user: r.PropTypes.object.isRequired,
                    device: r.PropTypes.object.isRequired,
                    features: r.PropTypes.object.isRequired,
                    messages: r.PropTypes.object.isRequired
                },
                toggleMalware: function(e) {
                    return a.trigger("toggleMalware", e.target.checked)
                },
                toggleTracking: function(e) {
                    return a.trigger("toggleTracking", e.target.checked)
                },
                teaser: function(e) {
                    return e.preventDefault(), a.trigger("header", {
                        open: !0
                    })
                },
                render: function() {
                    return this.props.user ? r.createElement("div", {
                        id: "features"
                    }, r.createElement(o, {
                        showBack: !0,
                        header: this.props.header,
                        device: this.props.device,
                        routes: this.props.routes,
                        is_premium: this.props.user.is_premium
                    }), r.createElement("section", {
                        className: "feature-head " + (this.props.header.open ? "fade" : "") + " " + (this.props.user.is_premium ? "" : "teaser")
                    }, r.createElement("div", {
                        className: "premium-title"
                    }, r.createElement("hr", null), r.createElement("span", null, this.getIntlMessage("popup.features.premium_title")), r.createElement("hr", null)), r.createElement("ul", null, r.createElement("a", {
                        href: "#rules"
                    }, r.createElement(s, {
                        icon: "images/smartLocationsIcon.png",
                        iconRetina: "images/smartLocationsIcon@2x.png",
                        label: this.getIntlMessage("popup.features.on_demand"),
                        description: this.getIntlMessage("popup.features.on_demand_description"),
                        arrow: !0
                    })), r.createElement(s, {
                        onClick: this.props.user.is_premium ? null : this.teaser,
                        onChange: this.toggleMalware,
                        icon: "images/antiMalwareIcon.png",
                        iconRetina: "images/antiMalwareIcon@2x.png",
                        label: this.getIntlMessage("popup.features.malware_blocking"),
                        description: this.getIntlMessage("popup.features.malware_blocking_description"),
                        enabled: this.props.features.malwareBlocking
                    }), r.createElement(s, {
                        onClick: this.props.user.is_premium ? null : this.teaser,
                        onChange: this.toggleTracking,
                        icon: "images/trackingProtectionIcon.png",
                        iconRetina: "images/trackingProtectionIcon@2x.png",
                        label: this.getIntlMessage("popup.features.tracking_protection"),
                        description: this.getIntlMessage("popup.features.tracking_protection_description"),
                        enabled: this.props.features.trackingProtection
                    }))), r.createElement("section", {
                        className: "features-section"
                    }, r.createElement("div", {
                        className: "builtin-title"
                    }, r.createElement("span", null, this.getIntlMessage("popup.features.builtin_title")), r.createElement("hr", null)), r.createElement("div", {
                        className: "builtin-container"
                    }, r.createElement("span", {
                        className: "builtin-feature always-on"
                    }, r.createElement("strong", null, this.getIntlMessage("popup.features.always_on.first")), this.getIntlMessage("popup.features.always_on.second")), r.createElement("div", {
                        className: "info-bubble left"
                    }, this.getIntlMessage("popup.features.always_on.description")), r.createElement("span", {
                        className: "builtin-feature nat"
                    }, r.createElement("strong", null, this.getIntlMessage("popup.features.nat_firewall.first")), this.getIntlMessage("popup.features.nat_firewall.second")), r.createElement("div", {
                        className: "info-bubble center"
                    }, this.getIntlMessage("popup.features.nat_firewall.description")), r.createElement("span", {
                        className: "builtin-feature encryption"
                    }, this.getIntlMessage("popup.features.encrypted.first")), r.createElement("div", {
                        className: "info-bubble right"
                    }, this.getIntlMessage("popup.features.encrypted.description"))))) : r.createElement("div", null)
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7,
        "../header": 14,
        "./feature_item": 12
    }],
    14: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, l = e("../../../events"), a = e("./trial"), o = e("./premium"), s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, r = i.addons.CSSTransitionGroup, t.exports = i.createClass({
                displayName: "Header",
                mixins: [s],
                propTypes: {
                    routes: i.PropTypes.object.isRequired,
                    header: i.PropTypes.object.isRequired,
                    device: i.PropTypes.object.isRequired,
                    is_premium: i.PropTypes.bool.isRequired,
                    showBack: i.PropTypes.bool.isRequired
                },
                _close: function() {
                    return l.trigger("hideHeader", this.props.header.view), l.trigger("header", {
                        open: !1
                    })
                },
                render: function() {
                    var e, t, n;
                    return e = {
                        uuid: this.props.device.uuid,
                        token: this.props.device.token,
                        src: "{browser}"
                    }, t = this.props.routes.previous ? this.props.routes.previous + "-" : "", n = "" + t + this.props.routes.current, i.createElement("header", {
                        className: this.props.header.open ? "open" : ""
                    }, this.props.showBack && !this.props.header.open ? i.createElement("a", {
                        className: "back left",
                        href: "#" + this.props.routes.previous
                    }) : this.props.header.open ? i.createElement("button", {
                        className: "close",
                        onClick: this._close
                    }) : void 0, this.props.is_premium || this.props.header.open ? i.createElement("img", {
                        className: "logo",
                        src: "images/zenmate-premium.png",
                        srcSet: "images/zenmate-premium@2x.png 2x"
                    }) : i.createElement("img", {
                        className: "logo",
                        src: "images/zenmateLogo.png",
                        srcSet: "images/zenmateLogo@2x.png 2x"
                    }), i.createElement(r, {
                        component: "div",
                        transitionName: "header-body",
                        transitionEnterTimeout: 800,
                        transitionLeaveTimeout: 800
                    }, function() {
                        if (this.props.header.open) switch (this.props.header.view) {
                            case "trialExpired":
                                return i.createElement(a, {
                                    close: this._close,
                                    params: e
                                });
                            default:
                                return i.createElement(o, {
                                    utm_campaign: n,
                                    params: e
                                })
                        }
                    }.call(this)))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7,
        "./premium": 15,
        "./trial": 16
    }],
    15: [function(e, t, n) {
        (function(n) {
            var s, o, i;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, o = e("../../../link"), t.exports = i.createClass({
                displayName: "PremiumHeader",
                mixins: [s],
                propTypes: {
                    utm_campaign: i.PropTypes.string.isRequired,
                    params: i.PropTypes.shape
                },
                render: function() {
                    return i.createElement("div", {
                        className: "header-body"
                    }, i.createElement("div", {
                        className: "features-container"
                    }, i.createElement("div", {
                        className: "premium-features speed"
                    }, i.createElement("h3", null, this.getIntlMessage("popup.premium.speed.heading")), i.createElement("span", null, this.getIntlMessage("popup.premium.speed.copy"))), i.createElement("div", {
                        className: "premium-features locations"
                    }, i.createElement("h3", null, this.getIntlMessage("popup.premium.locations.heading")), i.createElement("span", null, this.getIntlMessage("popup.premium.locations.copy"))), i.createElement("div", {
                        className: "premium-features clients"
                    }, i.createElement("h3", null, this.getIntlMessage("popup.premium.clients.heading")), i.createElement("span", null, this.getIntlMessage("popup.premium.clients.copy")))), i.createElement(o, {
                        url: "https://secure.zenmate.com#/upgrade",
                        params: this.props.params,
                        ga: {
                            utm_campaign: this.props.utm_campaign
                        },
                        className: "cta-button"
                    }, this.getIntlMessage("popup.premium.cta")))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../link": 8
    }],
    16: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, o = e("../../../link"), r = "https://zenmate.com/premium/only-for-me/offer/", l = r + "?utm_source=crm&utm_medium=extension&utm_campaign=%5BA%7CALL_en%5Dpremiumend&utm_term=monthly&utm_content=popup", a = r + "?utm_source=crm&utm_medium=extension&utm_campaign=%5BA%7CALL_en%5Dpremiumend&utm_term=6month&utm_content=popup", t.exports = i.createClass({
                displayName: "TrialHeader",
                mixins: [s],
                propTypes: {
                    close: i.PropTypes.func.isRequired,
                    params: i.PropTypes.shape,
                    uuid: i.PropTypes.string.isRequired,
                    token: i.PropTypes.string.isRequired
                },
                render: function() {
                    return i.createElement("div", {
                        className: "header-body"
                    }, i.createElement("div", {
                        className: "features-container expired"
                    }, i.createElement("h3", {
                        className: "earlybird-header"
                    }, this.getIntlMessage("popup.header.trial.trial_ended")), i.createElement("div", {
                        className: "expired-copy"
                    }, this.getIntlMessage("popup.header.trial.copy"))), i.createElement("div", {
                        className: "plan-select active"
                    }, i.createElement("img", {
                        className: "plan-icon",
                        src: "images/premium-shield-yearly.png",
                        srcSet: "images/premium-shield-yearly@2x.png 2x"
                    }), i.createElement("div", {
                        className: "plan-price"
                    }, i.createElement("h4", null, this.getIntlMessage("popup.header.trial.monthly.name")), i.createElement("span", null, this.getIntlMessage("popup.header.trial.monthly.price"))), i.createElement("div", {
                        className: "cta-save"
                    }, i.createElement(o, {
                        clickAction: this.props.close,
                        url: l,
                        className: "cta-button plan"
                    }, this.getIntlMessage("popup.header.trial.monthly.cta")), i.createElement("span", null, this.getIntlMessage("popup.header.trial.monthly.save")))), i.createElement("div", {
                        className: "plan-select"
                    }, i.createElement("img", {
                        className: "plan-icon",
                        src: "images/premium-shield-6-months.png",
                        srcSet: "images/premium-shield-6-months@2x.png 2x"
                    }), i.createElement("div", {
                        className: "plan-price"
                    }, i.createElement("h4", null, this.getIntlMessage("popup.header.trial.six_monthly.name")), i.createElement("span", null, this.getIntlMessage("popup.header.trial.six_monthly.price"))), i.createElement(o, {
                        clickAction: this.props.close,
                        url: a,
                        className: "outline-button plan"
                    }, this.getIntlMessage("popup.header.trial.six_monthly.cta"))))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../link": 8
    }],
    17: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l, p, c;
            a = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, r = e("./news"), l = e("../../../events"), i = e("../../../link"), p = e("../../../../../background/util").parseDate, c = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null, o = c.IntlMixin, s = c.FormattedMessage, t.exports = a.createClass({
                displayName: "Bottom",
                mixins: [o],
                propTypes: {
                    randomNews: a.PropTypes.string.isRequired,
                    user: a.PropTypes.object.isRequired,
                    device: a.PropTypes.object.isRequired,
                    rules: a.PropTypes.array.isRequired,
                    news: a.PropTypes.any,
                    language: a.PropTypes.string.isRequired
                },
                _onPremiumClick: function(e) {
                    return e.preventDefault(), l.trigger("header", {
                        open: !0
                    })
                },
                _getMessage: function(e) {
                    var t, n;
                    switch (t = {
                        uuid: this.props.device.uuid,
                        token: this.props.device.token,
                        src: "{browser}"
                    }, e) {
                        case "premium_desktop_clients":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.premium.desktop_clients.copy"),
                                desktop_clients: a.createElement(i, {
                                    url: "https://secure.zenmate.com#/",
                                    params: t,
                                    ga: {
                                        utm_campaign: "home-premium_desktop_clients"
                                    }
                                }, this.getIntlMessage("popup.home.news.premium.desktop_clients.desktop_clients"))
                            });
                        case "renew_subscription":
                            return n = p(this.props.user.premium_expires_at) - p(this.props.user.server_time), n = Math.ceil(n / 1e3 / 60 / 60 / 24), a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.premium.renew_subscription.copy"),
                                num: n,
                                renew_subscription: a.createElement(i, {
                                    url: "https://secure.zenmate.com#/",
                                    params: t,
                                    ga: {
                                        utm_campaign: "home-renew_subscription"
                                    }
                                }, this.getIntlMessage("popup.home.news.premium.renew_subscription.renew_subscription"))
                            });
                        case "free_sign_up":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.free.sign_up.copy"),
                                get_time_free: a.createElement(i, {
                                    url: "page.html#signup"
                                }, this.getIntlMessage("popup.home.news.free.sign_up.get_time_free"))
                            });
                        case "free_get_premium":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.free.get_premium"),
                                zenmate_premium: a.createElement("a", {
                                    href: "#",
                                    onClick: this._onPremiumClick
                                }, this.getIntlMessage("brand.zenmate_premium"))
                            });
                        case "free_faster_speed":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.free.faster_speed"),
                                zenmate_premium: a.createElement(i, {
                                    url: "https://secure.zenmate.com#/upgrade",
                                    params: t,
                                    ga: {
                                        utm_campaign: "home-faster_speed"
                                    }
                                }, this.getIntlMessage("brand.zenmate_premium"))
                            });
                        case "free_smart_locations":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.free.smart_locations"),
                                zenmate_premium: a.createElement(i, {
                                    url: "https://secure.zenmate.com#/upgrade",
                                    params: t,
                                    ga: {
                                        utm_campaign: "home-smart_locations"
                                    }
                                }, this.getIntlMessage("brand.zenmate_premium"))
                            });
                        case "free_more_locations":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.free.more_locations"),
                                zenmate_premium: a.createElement(i, {
                                    url: "https://secure.zenmate.com#/upgrade",
                                    params: t,
                                    ga: {
                                        utm_campaign: "home-more_locations"
                                    }
                                }, this.getIntlMessage("brand.zenmate_premium"))
                            });
                        case "free_malware_blocking":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.free.malware_blocking.copy"),
                                malware_blocking: a.createElement(i, {
                                    url: "https://secure.zenmate.com#/upgrade",
                                    params: t,
                                    ga: {
                                        utm_campaign: "home-malware_blocking"
                                    }
                                }, this.getIntlMessage("popup.home.news.free.malware_blocking.malware_blocking"))
                            });
                        case "free_desktop_clients":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.free.desktop_clients.copy"),
                                desktop_clients: a.createElement(i, {
                                    url: "https://secure.zenmate.com#/upgrade",
                                    params: t,
                                    ga: {
                                        utm_campaign: "home-free_desktop_clients"
                                    }
                                }, this.getIntlMessage("popup.home.news.free.desktop_clients.desktop_clients"))
                            });
                        case "free_tracking_protection":
                            return a.createElement(s, {
                                message: this.getIntlMessage("popup.home.news.free.tracking_protection"),
                                zenmate_premium: a.createElement(i, {
                                    url: "https://secure.zenmate.com#/upgrade",
                                    params: t,
                                    ga: {
                                        utm_campaign: "home-tracking_protection"
                                    }
                                }, this.getIntlMessage("brand.zenmate_premium"))
                            })
                    }
                },
                render: function() {
                    var e;
                    return a.createElement("section", {
                        className: "footer-news"
                    }, (null != (e = this.props.news) ? e.text : void 0) ? a.createElement(r, {
                        content: this.props.news.text
                    }) : a.createElement("div", {
                        className: "news-content"
                    }, this._getMessage(this.props.randomNews)))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../../../background/util": 6,
        "../../../events": 7,
        "../../../link": 8,
        "./news": 27
    }],
    18: [function(e, t, n) {
        (function(e) {
            var n, s;
            s = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, n = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof e ? e.ReactIntl : null).IntlMixin, t.exports = s.createClass({
                displayName: "ConnectionDisplay",
                mixins: [n],
                propTypes: {
                    type: s.PropTypes.string.isRequired,
                    user: s.PropTypes.object.isRequired,
                    tabInfo: s.PropTypes.object.isRequired,
                    countryNames: s.PropTypes.object.isRequired,
                    currentLocation: s.PropTypes.object.isRequired
                },
                componentDidMount: function() {
                    var e;
                    return e = new Image, e.src = this.props.tabInfo.favIconUrl, e.onerror = function(e) {
                        return function() {
                            return e.refs.host.style.backgroundImage = null
                        }
                    }(this)
                },
                render: function() {
                    return s.createElement("div", {
                        className: "connection-details " + this.props.type
                    }, s.createElement("div", {
                        className: "text text-1"
                    }), s.createElement("div", {
                        className: "text text-2"
                    }), s.createElement("div", {
                        className: "mask"
                    }), s.createElement("div", {
                        className: "flag flag-user",
                        style: {
                            backgroundImage: "url('images/flags/" + this.props.user.country_code + ".png')"
                        }
                    }), s.createElement("div", {
                        className: "flag flag-location",
                        style: {
                            backgroundImage: "url('images/flags/" + this.props.currentLocation.country_code + ".png')"
                        }
                    }), s.createElement("div", {
                        className: "host",
                        ref: "host",
                        style: {
                            backgroundImage: "url('" + this.props.tabInfo.favIconUrl + "')"
                        }
                    }), s.createElement("div", {
                        className: "overlay overlay-user tt tt-conn tt-left"
                    }, s.createElement("span", {
                        className: "overlay-content"
                    }, s.createElement("div", null, this.getIntlMessage("popup.home.enabled.overlay.real_location")), s.createElement("div", {
                        className: "space dark"
                    }, this.props.countryNames[this.props.user.country_code] || this.props.user.country_name), s.createElement("div", null, "IP: " + this.props.user.current_ip))), s.createElement("a", {
                        href: "#locations",
                        className: "overlay overlay-location tt tt-conn switchLocation"
                    }, s.createElement("span", {
                        className: "overlay-content"
                    }, s.createElement("div", null, this.getIntlMessage("popup.home.enabled.overlay.public_location")), s.createElement("div", {
                        className: "space dark"
                    }, this.props.countryNames[this.props.currentLocation.country_code]), s.createElement("div", null, "(", this.getIntlMessage("popup.home.enabled.overlay.click_to_change"), ")"))), s.createElement("a", {
                        href: "#rules",
                        className: "overlay overlay-rules tt tt-conn tt-right"
                    }, s.createElement("span", {
                        className: "overlay-content"
                    }, s.createElement("div", null, this.getIntlMessage("popup.home.enabled.overlay.current_page")), s.createElement("div", {
                        className: "space dark hostDomain"
                    }, this.props.tabInfo.host), s.createElement("div", null, "(", this.getIntlMessage("popup.home.enabled.overlay.edit_ondemand"), ")"))))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    19: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l;
            r = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, a = e("../../../../events"), i = e("../../../../link"), l = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null, o = l.IntlMixin, s = l.FormattedMessage, t.exports = r.createClass({
                displayName: "BlockedDescription",
                mixins: [o],
                propTypes: {
                    proxyBlocked: r.PropTypes.bool.isRequired,
                    proxyBlockedBy: r.PropTypes.array
                },
                _unblock: function() {
                    return a.trigger("unblockProxySettings")
                },
                render: function() {
                    var e, t;
                    return r.createElement("div", {
                        className: "fresh-air"
                    }, (t = r.createElement(i, {
                        url: "chrome://extensions"
                    }, this.getIntlMessage("popup.home.blocked.extension_settings")), null != this.props.proxyBlockedBy && this.props.proxyBlockedBy.length ? r.createElement(s, {
                        extension_settings: t,
                        message: this.getIntlMessage("popup.home.blocked.extension")
                    }) : r.createElement(s, {
                        extension_settings: t,
                        message: this.getIntlMessage("popup.home.blocked.unknown")
                    })), function() {
                        var t, n, s, o;
                        if (null != this.props.proxyBlockedBy && this.props.proxyBlockedBy.length) {
                            for (s = this.props.proxyBlockedBy.slice(0, 1), o = [], t = 0, n = s.length; n > t; t++) e = s[t], o.push(r.createElement("div", {
                                className: "blocked-container"
                            }, r.createElement("br", null), e.icon ? r.createElement("img", {
                                className: "blocked-icon",
                                src: "" + e.icon
                            }) : void 0, r.createElement(i, {
                                url: "chrome://extensions/",
                                params: {
                                    id: e.id
                                }
                            }, e.name)));
                            return o
                        }
                        return r.createElement("button", {
                            onClick: this._unblock,
                            className: "unblock-settings"
                        }, this.getIntlMessage("popup.home.blocked.unblock"))
                    }.call(this))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../../events": 7,
        "../../../../link": 8
    }],
    20: [function(e, t, n) {
        (function(e) {
            var n, s, o, i;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, i = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof e ? e.ReactIntl : null, s = i.IntlMixin, n = i.FormattedMessage, t.exports = o.createClass({
                displayName: "CustomDescription",
                mixins: [s],
                propTypes: {
                    rulesEnabled: o.PropTypes.bool.isRequired,
                    tabState: o.PropTypes.object.isRequired,
                    tabInfo: o.PropTypes.object.isRequired,
                    countryNames: o.PropTypes.object.isRequired,
                    currentLocation: o.PropTypes.object.isRequired
                },
                render: function() {
                    return this.props.rulesEnabled && this.props.tabState.isDirect ? o.createElement("span", null, this.getIntlMessage("popup.home.custom.directinfo")) : o.createElement(n, {
                        message: this.getIntlMessage("popup.home.custom.connection"),
                        domain: o.createElement("strong", {
                            className: "hostDomain",
                            title: "" + this.props.tabInfo.host
                        }, this.props.tabInfo.host),
                        location: o.createElement("strong", null, this.props.countryNames[this.props.currentLocation.country_code])
                    })
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    21: [function(e, t, n) {
        (function(e) {
            var n, s, o, i;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, i = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof e ? e.ReactIntl : null, s = i.IntlMixin, n = i.FormattedMessage, t.exports = o.createClass({
                displayName: "CustomDisabledDescription",
                mixins: [s],
                propTypes: {
                    rulesEnabled: o.PropTypes.bool.isRequired,
                    tabState: o.PropTypes.object.isRequired,
                    tabInfo: o.PropTypes.object.isRequired,
                    countryNames: o.PropTypes.object.isRequired,
                    currentLocation: o.PropTypes.object.isRequired
                },
                render: function() {
                    return this.props.rulesEnabled && this.props.tabState.isDirect ? o.createElement("span", null, this.getIntlMessage("popup.home.custom_disabled.directinfo")) : o.createElement(n, {
                        message: this.getIntlMessage("popup.home.custom_disabled.connection"),
                        domain: o.createElement("strong", {
                            className: "hostDomain",
                            title: "" + this.props.tabInfo.host
                        }, this.props.tabInfo.host),
                        location: o.createElement("strong", null, this.props.countryNames[this.props.currentLocation.country_code])
                    })
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    22: [function(e, t, n) {
        (function(e) {
            var n, s, o, i;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, i = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof e ? e.ReactIntl : null, s = i.IntlMixin, n = i.FormattedMessage, t.exports = o.createClass({
                displayName: "DisabledDescription",
                mixins: [s],
                propTypes: {
                    rulesEnabled: o.PropTypes.bool.isRequired,
                    rules: o.PropTypes.array.isRequired
                },
                render: function() {
                    return o.createElement("div", {
                        className: "fresh-air"
                    }, o.createElement("div", null, this.getIntlMessage("popup.home.disabled.copy2")), this.props.rulesEnabled && this.props.rules.length > 0 ? o.createElement("div", null, o.createElement(n, {
                        message: this.getIntlMessage("popup.home.disabled.smart_locations_enabled"),
                        smart_locations: o.createElement("a", {
                            href: "#rules"
                        }, this.getIntlMessage("popup.home.disabled.smart_locations"))
                    })) : o.createElement("div", null, o.createElement(n, {
                        message: this.getIntlMessage("popup.home.disabled.smart_locations_disabled"),
                        smart_locations: o.createElement("a", {
                            href: "#rules"
                        }, this.getIntlMessage("popup.home.disabled.smart_locations"))
                    })))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    23: [function(e, t, n) {
        (function(e) {
            var n, s, o, i;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, i = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof e ? e.ReactIntl : null, s = i.IntlMixin, n = i.FormattedMessage, t.exports = o.createClass({
                displayName: "EnabledDescription",
                mixins: [s],
                propTypes: {
                    tabInfo: o.PropTypes.object.isRequired,
                    countryNames: o.PropTypes.object.isRequired,
                    currentLocation: o.PropTypes.object.isRequired
                },
                render: function() {
                    return o.createElement(n, {
                        message: this.getIntlMessage("popup.home.enabled.connection"),
                        domain: o.createElement("strong", {
                            className: "hostDomain",
                            title: "" + this.props.tabInfo.host
                        }, this.props.tabInfo.host),
                        location: o.createElement("strong", null, this.props.countryNames[this.props.currentLocation.country_code])
                    })
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    24: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l, p, c, u, d;
            u = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = e("./blocked"), a = e("./disabled"), l = e("./enabled"), i = e("./custom"), r = e("./custom_disabled"), o = e("../connection_display"), d = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null, c = d.IntlMixin, p = d.FormattedMessage, t.exports = u.createClass({
                displayName: "Description",
                mixins: [c],
                propTypes: {
                    tabState: u.PropTypes.object.isRequired,
                    tabInfo: u.PropTypes.object.isRequired,
                    currentLocation: u.PropTypes.object.isRequired,
                    proxyBlockedBy: u.PropTypes.array,
                    user: u.PropTypes.object.isRequired,
                    rulesEnabled: u.PropTypes.bool.isRequired,
                    rules: u.PropTypes.array.isRequired,
                    countryNames: u.PropTypes.object.isRequired,
                    type: u.PropTypes.string.isRequired,
                    language: u.PropTypes.string.isRequired
                },
                render: function() {
                    return u.createElement("section", {
                        key: this.props.type,
                        className: "proxy-state " + this.props.type
                    }, u.createElement("div", {
                        className: "connectedTo"
                    }, function() {
                        switch (this.props.type) {
                            case "blocked":
                                return u.createElement(s, {
                                    proxyBlockedBy: this.props.proxyBlockedBy
                                });
                            case "disabled":
                                return u.createElement(a, {
                                    rules: this.props.rules,
                                    rulesEnabled: this.props.rulesEnabled,
                                    language: this.props.language
                                });
                            case "local":
                                return this.getIntlMessage("popup.home.local.connection");
                            case "custom_disabled":
                                return u.createElement(r, {
                                    rulesEnabled: this.props.rulesEnabled,
                                    tabState: this.props.tabState,
                                    tabInfo: this.props.tabInfo,
                                    countryNames: this.props.countryNames,
                                    currentLocation: this.props.currentLocation
                                });
                            case "custom":
                                return u.createElement(i, {
                                    rulesEnabled: this.props.rulesEnabled,
                                    tabState: this.props.tabState,
                                    tabInfo: this.props.tabInfo,
                                    countryNames: this.props.countryNames,
                                    currentLocation: this.props.currentLocation
                                });
                            default:
                                return u.createElement(l, {
                                    tabInfo: this.props.tabInfo,
                                    countryNames: this.props.countryNames,
                                    currentLocation: this.props.currentLocation
                                })
                        }
                    }.call(this)), "disabled" !== this.props.type && "blocked" !== this.props.type ? u.createElement(o, {
                        user: this.props.user,
                        type: this.props.type,
                        tabInfo: this.props.tabInfo,
                        countryNames: this.props.countryNames,
                        currentLocation: this.props.currentLocation
                    }) : void 0)
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../connection_display": 18,
        "./blocked": 19,
        "./custom": 20,
        "./custom_disabled": 21,
        "./disabled": 22,
        "./enabled": 23
    }],
    25: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l;
            r = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, o = e("./news"), a = e("./toggle_button"), l = e("../../../events"), s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, i = r.addons.PureRenderMixin, t.exports = r.createClass({
                displayName: "Footer",
                mixins: [s, i],
                propTypes: {
                    enabled: r.PropTypes.bool.isRequired,
                    language: r.PropTypes.string.isRequired
                },
                render: function() {
                    return r.createElement("footer", null, r.createElement("ul", {
                        className: "nav"
                    }, r.createElement("li", null, r.createElement("a", {
                        href: "#locations"
                    }, r.createElement("img", {
                        className: "nav-icon",
                        src: "images/changeLocationIcon.png",
                        srcSet: "images/changeLocationIcon@2x.png 2x"
                    }), this.getIntlMessage("popup.home.footer.change_location"))), r.createElement("li", null, r.createElement("a", {
                        href: "#features"
                    }, r.createElement("img", {
                        className: "nav-icon",
                        src: "images/featuresIcon.png",
                        srcSet: "images/featuresIcon@2x.png 2x"
                    }), this.getIntlMessage("popup.home.footer.features"))), r.createElement("li", null, r.createElement("a", {
                        href: "#settings",
                        id: "settings-button"
                    }, r.createElement("img", {
                        className: "nav-icon",
                        src: "images/settingsIcon.png",
                        srcSet: "images/settingsIcon@2x.png 2x"
                    }), this.getIntlMessage("popup.home.footer.settings"))), r.createElement(a, {
                        enabled: this.props.enabled
                    })))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7,
        "./news": 27,
        "./toggle_button": 30
    }],
    26: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l, p;
            l = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, a = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, r = e("../header"), p = e("./subhead"), o = e("./description"), s = e("./bottom"), i = e("./footer"), t.exports = l.createClass({
                displayName: "Home",
                mixins: [a],
                propTypes: {
                    routes: l.PropTypes.object.isRequired,
                    enabled: l.PropTypes.bool.isRequired,
                    tabState: l.PropTypes.object.isRequired,
                    tabInfo: l.PropTypes.object.isRequired,
                    currentLocation: l.PropTypes.object.isRequired,
                    proxyBlocked: l.PropTypes.bool.isRequired,
                    proxyBlockedBy: l.PropTypes.array,
                    user: l.PropTypes.object.isRequired,
                    device: l.PropTypes.object.isRequired,
                    news: l.PropTypes.object,
                    rulesEnabled: l.PropTypes.bool.isRequired,
                    rules: l.PropTypes.array.isRequired,
                    features: l.PropTypes.object.isRequired,
                    language: l.PropTypes.string.isRequired
                },
                render: function() {
                    var e;
                    return e = this.props.proxyBlocked ? "blocked" : this.props.rulesEnabled && this.props.tabState.isRuleActive ? this.props.enabled ? "custom" : "custom_disabled" : this.props.enabled ? this.props.tabState.isLocal ? "local" : "enabled" : "disabled", l.createElement("div", {
                        id: "home"
                    }, l.createElement(r, {
                        showBack: !1,
                        header: this.props.header,
                        device: this.props.device,
                        routes: this.props.routes,
                        is_premium: this.props.user.is_premium
                    }), l.createElement(p, {
                        type: e,
                        language: this.props.language
                    }), l.createElement(o, {
                        type: e,
                        user: this.props.user,
                        tabState: this.props.tabState,
                        tabInfo: this.props.tabInfo,
                        countryNames: this.props.countryNames,
                        currentLocation: this.props.currentLocation,
                        rules: this.props.rules,
                        rulesEnabled: this.props.rulesEnabled,
                        proxyBlockedBy: this.props.proxyBlockedBy,
                        language: this.props.language
                    }), l.createElement(s, {
                        randomNews: this.props.randomNews,
                        features: this.props.features,
                        device: this.props.device,
                        rules: this.props.rules,
                        news: this.props.news,
                        user: this.props.user,
                        language: this.props.language
                    }), l.createElement(i, {
                        enabled: this.props.enabled,
                        language: this.props.language
                    }))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../header": 14,
        "./bottom": 17,
        "./description": 24,
        "./footer": 25,
        "./subhead": 29
    }],
    27: [function(e, t, n) {
        (function(n) {
            var s, o, i;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = e("./markdown_converter"), o = i.addons.PureRenderMixin, t.exports = i.createClass({
                displayName: "News",
                mixins: [o],
                propTypes: {
                    content: i.PropTypes.string.isRequired
                },
                render: function() {
                    return i.createElement("div", {
                        className: "news-content"
                    }, i.createElement(s, {
                        content: this.props.content
                    }))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./markdown_converter": 28
    }],
    28: [function(e, t, n) {
        (function(e) {
            var n, s;
            n = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, s = {
                links: /\[(.*?)\]\((.*?)\)/,
                images: /!\[(.*?)\]\((.*?)\)/,
                bold: /\*\*(.*?)\*\*/,
                italic: /\*(.*?)\*/,
                all: /!?\[.*?\]\(.*?\)|\*\*.*?\*\*|\*.*?\*/g
            }, t.exports = n.createClass({
                displayName: "MarkdownConverter",
                propTypes: {
                    content: n.PropTypes.string.isRequired
                },
                _markDownToJSX: function(e) {
                    var t;
                    return (t = e.match(s.images)) ? t[1].length ? n.createElement("a", {
                        className: "img-link",
                        target: "_blank",
                        href: t[1]
                    }, n.createElement("img", {
                        src: t[2],
                        alt: "promotion",
                        style: {
                            maxHeight: "90px"
                        }
                    })) : n.createElement("img", {
                        src: t[2],
                        alt: "promotion",
                        style: {
                            maxHeight: "90px"
                        }
                    }) : (t = e.match(s.links)) ? n.createElement("a", {
                        target: "_blank",
                        style: {
                            color: "#008ace"
                        },
                        href: t[2]
                    }, t[1]) : (t = e.match(s.bold)) ? n.createElement("b", null, t[1]) : (t = e.match(s.italic)) ? n.createElement("em", null, t[1]) : void 0
                },
                render: function() {
                    var e, t;
                    for (e = []; t = s.all.exec(this.props.content);) e.push(t[0]);
                    return n.createElement("div", null, this.props.content.split(s.all).map(function(t) {
                        return function(s, o) {
                            var i, r;
                            return i = e[o] ? t._markDownToJSX(e[o]) : void 0, r = s ? n.createElement("span", null, s) : void 0, [r, i]
                        }
                    }(this)))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    29: [function(e, t, n) {
        (function(e) {
            var n, s, o;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, n = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof e ? e.ReactIntl : null).IntlMixin, s = o.addons.PureRenderMixin, t.exports = o.createClass({
                displayName: "Subhead",
                mixins: [n, s],
                propTypes: {
                    type: o.PropTypes.string.isRequired
                },
                render: function() {
                    return o.createElement("section", {
                        className: "subhead " + this.props.type
                    }, o.createElement("h1", {
                        key: this.props.type,
                        className: "protection-headline"
                    }, this.getIntlMessage("popup.home." + this.props.type + ".heading")), o.createElement("p", null, this.getIntlMessage("popup.home." + this.props.type + ".copy")))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    30: [function(e, t, n) {
        (function(n) {
            var s, o, i;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, i = e("../../../events"), s = o.addons.PureRenderMixin, t.exports = o.createClass({
                displayName: "ToggleButton",
                mixins: [s],
                propTypes: {
                    enabled: o.PropTypes.bool.isRequired
                },
                componentDidMount: function() {
                    return setTimeout(function(e) {
                        return function() {
                            return e.refs["switch"].classList.add("animating")
                        }
                    }(this), 200)
                },
                _toggleProxy: function(e) {
                    return i.trigger("toggleProxy", e.target.checked)
                },
                render: function() {
                    return o.createElement("li", {
                        id: "proxy_toggle_button"
                    }, o.createElement("label", null, o.createElement("input", {
                        ref: "switch",
                        onChange: this._toggleProxy,
                        checked: this.props.enabled,
                        id: "toggle-button",
                        type: "checkbox",
                        className: "ios-switch stateToggle onoffswitch-checkbox"
                    }), o.createElement("div", {
                        className: "switch switch-enabled"
                    })))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7
    }],
    31: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l, p, c, u;
            l = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, u = e("./settings/"), i = e("./home/"), a = e("./locations/"), o = e("./features/"), r = e("./language/"), s = e("./debug_page"), c = e("./rules/"), p = l.addons.CSSTransitionGroup, t.exports = l.createClass({
                displayName: "Popup",
                propTypes: {
                    routes: l.PropTypes.object.isRequired,
                    header: l.PropTypes.object.isRequired,
                    enabled: l.PropTypes.bool.isRequired,
                    tabState: l.PropTypes.object.isRequired,
                    tabInfo: l.PropTypes.object.isRequired,
                    currentLocation: l.PropTypes.object.isRequired,
                    proxyBlocked: l.PropTypes.bool.isRequired,
                    proxyBlockedBy: l.PropTypes.array,
                    user: l.PropTypes.object.isRequired,
                    device: l.PropTypes.object.isRequired,
                    rulesEnabled: l.PropTypes.bool.isRequired,
                    rules: l.PropTypes.array.isRequired,
                    features: l.PropTypes.object.isRequired,
                    countryNames: l.PropTypes.object.isRequired,
                    country_code: l.PropTypes.string.isRequired,
                    debug: l.PropTypes.object.isRequired,
                    defaultLocation: l.PropTypes.object.isRequired,
                    language: l.PropTypes.string.isRequired,
                    locale_name: l.PropTypes.string.isRequired,
                    locations: l.PropTypes.array.isRequired,
                    messages: l.PropTypes.object.isRequired,
                    news: l.PropTypes.any,
                    randomNews: l.PropTypes.string,
                    promo: l.PropTypes.any
                },
                render: function() {
                    var e;
                    return e = function() {
                        switch (this.props.routes.current) {
                            case "settings":
                                return l.createElement(u, {
                                    header: this.props.header,
                                    device: this.props.device,
                                    routes: this.props.routes,
                                    user: this.props.user,
                                    language: this.props.language,
                                    debug: this.props.debug,
                                    messages: this.props.messages
                                });
                            case "locations":
                                return l.createElement(a, {
                                    header: this.props.header,
                                    device: this.props.device,
                                    routes: this.props.routes,
                                    is_premium: this.props.user.is_premium,
                                    locations: this.props.locations,
                                    defaultLocation: this.props.defaultLocation,
                                    rulesEnabled: this.props.rulesEnabled,
                                    tabState: this.props.tabState,
                                    currentLocation: this.props.currentLocation,
                                    countryNames: this.props.countryNames,
                                    messages: this.props.messages
                                });
                            case "features":
                                return l.createElement(o, {
                                    header: this.props.header,
                                    device: this.props.device,
                                    routes: this.props.routes,
                                    user: this.props.user,
                                    features: this.props.features,
                                    messages: this.props.messages
                                });
                            case "language":
                                return l.createElement(r, {
                                    header: this.props.header,
                                    device: this.props.device,
                                    routes: this.props.routes,
                                    is_premium: this.props.user.is_premium,
                                    locale_name: this.props.locale_name,
                                    messages: this.props.messages
                                });
                            case "rules":
                                return l.createElement(c, {
                                    header: this.props.header,
                                    device: this.props.device,
                                    routes: this.props.routes,
                                    is_premium: this.props.user.is_premium,
                                    locations: this.props.locations,
                                    defaultLocation: this.props.defaultLocation,
                                    rules: this.props.rules,
                                    rulesEnabled: this.props.rulesEnabled,
                                    tabState: this.props.tabState,
                                    tabInfo: this.props.tabInfo,
                                    currentLocation: this.props.currentLocation,
                                    countryNames: this.props.countryNames,
                                    messages: this.props.messages
                                });
                            case "debug":
                                return l.createElement(s, {
                                    header: this.props.header,
                                    device: this.props.device,
                                    routes: this.props.routes,
                                    is_premium: this.props.user.is_premium,
                                    defaultLocation: this.props.defaultLocation,
                                    debug: this.props.debug
                                });
                            default:
                                return l.createElement(i, l.__spread({}, this.props))
                        }
                    }.call(this), l.createElement(p, {
                        component: "div",
                        transitionName: "popup-router",
                        transitionEnterTimeout: 400,
                        transitionLeaveTimeout: 400
                    }, l.createElement("div", {
                        key: this.props.routes.current,
                        className: "page " + (this.props.routes.direction || "right")
                    }, e))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./debug_page": 11,
        "./features/": 13,
        "./home/": 26,
        "./language/": 32,
        "./locations/": 33,
        "./rules/": 36,
        "./settings/": 43
    }],
    32: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, o = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, s = e("../header"), r = e("../../../events"), a = ("undefined" != typeof window ? window.locales : "undefined" != typeof n ? n.locales : null).locales, t.exports = i.createClass({
                displayName: "Language",
                mixins: [o],
                propTypes: {
                    routes: i.PropTypes.object.isRequired,
                    header: i.PropTypes.object.isRequired,
                    device: i.PropTypes.object.isRequired,
                    locale_name: i.PropTypes.string.isRequired,
                    is_premium: i.PropTypes.bool.isRequired
                },
                _changeLanguage: function(e) {
                    return r.trigger("changeLanguage", e)
                },
                render: function() {
                    var e, t;
                    return i.createElement("div", {
                        id: "languages"
                    }, i.createElement(s, {
                        showBack: !0,
                        header: this.props.header,
                        device: this.props.device,
                        routes: this.props.routes,
                        is_premium: this.props.is_premium
                    }), i.createElement("section", {
                        className: "subhead"
                    }, i.createElement("div", {
                        className: "text-center"
                    }, i.createElement("h1", {
                        className: "location-headline"
                    }, this.getIntlMessage("popup.languages.heading")), i.createElement("p", {
                        className: "location-copy"
                    }, this.getIntlMessage("popup.languages.copy")))), i.createElement("section", {
                        className: "locale-section"
                    }, i.createElement("ul", null, function() {
                        var n;
                        n = [];
                        for (e in a) t = a[e], n.push(i.createElement("li", {
                            onClick: this._changeLanguage.bind(this, e)
                        }, t.locale_name, t.locale_name === this.props.locale_name ? i.createElement("span", {
                            className: "active-tick"
                        }, "✓") : void 0));
                        return n
                    }.call(this))))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7,
        "../header": 14
    }],
    33: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a;
            r = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, o = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, s = e("../header"), i = e("./location_item"), a = e("../../../events"), t.exports = r.createClass({
                displayName: "Locations",
                mixins: [o],
                propTypes: {
                    routes: r.PropTypes.object.isRequired,
                    header: r.PropTypes.object.isRequired,
                    tabState: r.PropTypes.object.isRequired,
                    currentLocation: r.PropTypes.object.isRequired,
                    device: r.PropTypes.object.isRequired,
                    rulesEnabled: r.PropTypes.bool.isRequired,
                    countryNames: r.PropTypes.object.isRequired,
                    defaultLocation: r.PropTypes.object.isRequired,
                    locations: r.PropTypes.array.isRequired,
                    messages: r.PropTypes.object.isRequired,
                    is_premium: r.PropTypes.bool.isRequired
                },
                getInitialState: function() {
                    return {
                        custom_cc: "_unknown",
                        transitionPending: !1
                    }
                },
                shouldComponentUpdate: function(e, t) {
                    return !(this.state.transitionPending || (null != t ? t.transitionPending : void 0))
                },
                handleChange: function() {
                    return this.setState({
                        custom_cc: this.refs.custom_cc.value || "_unknown"
                    })
                },
                _setTransitionToPending: function() {
                    return this.setState({
                        transitionPending: !0
                    })
                },
                addCustomLocation: function() {
                    var e, t;
                    return e = this.refs.custom_cc, t = this.refs.custom_url, e.value && t.value ? (a.trigger("addCustomLocation", {
                        cc: e.value,
                        url: t.value
                    }), t.value = "", e.value = "", this.setState({
                        custom_cc: "_unknown"
                    })) : void 0
                },
                render: function() {
                    var e, t, n, o, a, l;
                    return o = this.props.locations, l = null, t = this.props.is_premium, e = this.props.defaultLocation.country_code, a = [], o = this.props.locations.filter(function(n) {
                        return n.premium_only && !t ? (a.push(n), !1) : n.country_code === e ? (l = n, !1) : !0
                    }), o = o.concat(a), r.createElement("div", {
                        id: "locations"
                    }, r.createElement(s, {
                        showBack: !0,
                        header: this.props.header,
                        device: this.props.device,
                        routes: this.props.routes,
                        is_premium: this.props.is_premium
                    }), r.createElement("section", {
                        className: "subhead"
                    }, r.createElement("div", {
                        className: "text-center"
                    }, r.createElement("h1", {
                        className: "location-headline"
                    }, this.getIntlMessage("popup.locations.heading")), r.createElement("p", {
                        className: "location-copy"
                    }, this.getIntlMessage("popup.locations.copy")))), r.createElement("section", {
                        className: "scroll-section locations-section"
                    }, o ? void 0 : r.createElement("p", {
                        className: "noLocations"
                    }, this.getIntlMessage("popup.locations.no_locations")), r.createElement("ul", {
                        className: "locations"
                    }, this.props.rulesEnabled && this.props.tabState.isRuleActive ? r.createElement("div", {
                        className: "activerule-hint"
                    }, this.getIntlMessage("popup.locations.smart_locations_enabled")) : void 0, this.props.rulesEnabled && this.props.tabState.isRuleActive ? r.createElement("li", {
                        className: "activerule"
                    }, r.createElement("a", {
                        href: "#rules",
                        style: {
                            backgroundImage: "url('images/flags/" + this.props.currentLocation.country_code + ".png')"
                        }
                    }, r.createElement("span", {
                        className: "location"
                    }, this.props.countryNames[this.props.currentLocation.country_code]), r.createElement("span", {
                        className: "btn btn-rule"
                    }, this.getIntlMessage("popup.locations.location_item.choose")))) : void 0, l ? r.createElement(i, {
                        key: l.country_code,
                        _setTransitionToPending: this._setTransitionToPending,
                        location: l,
                        is_premium: this.props.is_premium,
                        countryNames: this.props.countryNames,
                        defaultLocation: this.props.defaultLocation
                    }) : void 0, function() {
                        var e, t, s;
                        if (o) {
                            for (s = [], e = 0, t = o.length; t > e; e++) n = o[e], s.push(r.createElement(i, {
                                key: n.country_code,
                                _setTransitionToPending: this._setTransitionToPending,
                                location: n,
                                is_premium: this.props.is_premium,
                                countryNames: this.props.countryNames,
                                defaultLocation: this.props.defaultLocation
                            }));
                            return s
                        }
                    }.call(this), void 0)))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7,
        "../header": 14,
        "./location_item": 34
    }],
    34: [function(e, t, n) {
        (function(n) {
            var s, o, i, r;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, i = e("../../../events"), r = e("loglevel"), t.exports = o.createClass({
                displayName: "LocationItem",
                mixins: [s],
                propTypes: {
                    countryNames: o.PropTypes.object.isRequired,
                    location: o.PropTypes.object.isRequired,
                    defaultLocation: o.PropTypes.object.isRequired,
                    is_premium: o.PropTypes.bool.isRequired
                },
                getInitialState: function() {
                    return {
                        premium_disabled: this.props.location.premium_only && !this.props.is_premium
                    }
                },
                _toggleLocation: function() {
                    return this.state.premium_disabled ? i.trigger("header", {
                        open: !0
                    }) : (this.props._setTransitionToPending(), i.trigger("locations:change", this.props.location.country_code), i.trigger("toggleProxy", !0))
                },
                render: function() {
                    var e;
                    return e = this.props.location, o.createElement("li", {
                        className: this.state.premium_disabled ? "premium" : ""
                    }, o.createElement("a", {
                        onClick: this._toggleLocation,
                        style: {
                            backgroundImage: "url('images/flags/" + e.country_code + ".png')"
                        }
                    }, o.createElement("span", {
                        className: "location"
                    }, this.props.countryNames[e.country_code]), this.props.defaultLocation.country_code === e.country_code ? o.createElement("span", {
                        className: "btn btn-primary"
                    }, this.getIntlMessage("popup.locations.location_item.current")) : this.state.premium_disabled ? o.createElement("span", {
                        className: "btn btn-premium"
                    }, this.getIntlMessage("popup.locations.location_item.premium")) : o.createElement("span", {
                        className: "btn btn-success"
                    }, this.getIntlMessage("popup.locations.location_item.choose"))))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7,
        loglevel: 1
    }],
    35: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, r = e("loglevel"), a = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null, o = a.IntlMixin, s = a.FormattedMessage, t.exports = i.createClass({
                displayName: "Hints",
                mixins: [o],
                propTypes: {
                    rulesEnabled: i.PropTypes.bool.isRequired,
                    rules: i.PropTypes.array,
                    active: i.PropTypes.number
                },
                render: function() {
                    var e, t, n, o;
                    return i.createElement("div", {
                        className: "rule-hints-container"
                    }, 0 === (null != (e = this.props.rules) ? e.length : void 0) ? i.createElement("div", {
                        key: 1
                    }, i.createElement("img", {
                        className: "logo",
                        src: "images/smartLocations-emptyState.png",
                        srcSet: "images/smartLocations-emptyState@2x.png"
                    }), i.createElement("h3", null, this.getIntlMessage("popup.rules.hints.empty.heading"), i.createElement("strong", null, " ", this.getIntlMessage("popup.rules.name"))), i.createElement("ol", {
                        className: "circle-list"
                    }, i.createElement("li", null, i.createElement("span", {
                        className: "num"
                    }, "1"), this.getIntlMessage("popup.rules.hints.empty.list_1")), i.createElement("li", null, i.createElement("span", {
                        className: "num"
                    }, "2"), this.getIntlMessage("popup.rules.hints.empty.list_2")), i.createElement("li", null, i.createElement("span", {
                        className: "num"
                    }, "3"), this.getIntlMessage("popup.rules.hints.empty.list_3")))) : 1 === (null != (t = this.props.rules) ? t.length : void 0) && null == this.props.active ? i.createElement("div", {
                        className: "bordered",
                        key: 2
                    }, i.createElement("h4", null, this.getIntlMessage("popup.rules.hints.first.heading")), i.createElement("p", null, this.getIntlMessage("popup.rules.hints.first.copy"))) : 1 === (null != (n = this.props.rules) ? n.length : void 0) && null != this.props.active ? i.createElement("div", {
                        className: "bordered",
                        key: 3
                    }, i.createElement("h4", null, this.getIntlMessage("popup.rules.hints.selected.heading")), i.createElement("p", null, i.createElement(s, {
                        message: this.getIntlMessage("popup.rules.hints.selected.copy"),
                        current_domain: i.createElement("span", {
                            className: "hostDomain"
                        }, this.props.rules[0].domain)
                    }))) : 2 !== (null != (o = this.props.rules) ? o.length : void 0) || this.props.rulesEnabled ? void 0 : i.createElement("div", {
                        className: "bordered",
                        key: 4
                    }, i.createElement("h4", null, this.getIntlMessage("popup.rules.hints.disabled.heading")), i.createElement("p", null, this.getIntlMessage("popup.rules.hints.disabled.copy"))))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        loglevel: 1
    }],
    36: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l, p, c, u, d, m;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, o = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, s = e("../header"), r = e("./rule_box/"), l = e("./list"), a = e("./hints"), p = e("../../../events"), u = e("../../../../../background/pacengine.coffee"), d = e("punycode"), c = e("loglevel"), m = i.addons.update, t.exports = i.createClass({
                displayName: "Rules",
                mixins: [o],
                propTypes: {
                    routes: i.PropTypes.object.isRequired,
                    header: i.PropTypes.object.isRequired,
                    tabState: i.PropTypes.object.isRequired,
                    tabInfo: i.PropTypes.object.isRequired,
                    currentLocation: i.PropTypes.object.isRequired,
                    device: i.PropTypes.object.isRequired,
                    rulesEnabled: i.PropTypes.bool.isRequired,
                    rules: i.PropTypes.array.isRequired,
                    countryNames: i.PropTypes.object.isRequired,
                    defaultLocation: i.PropTypes.object.isRequired,
                    locations: i.PropTypes.array.isRequired,
                    messages: i.PropTypes.object.isRequired,
                    is_premium: i.PropTypes.bool.isRequired
                },
                getInitialState: function() {
                    var e;
                    return {
                        host: this.props.tabState.isLocal ? "" : null != (e = this.props.tabInfo.host) ? e.replace(/^(www\.)/, "") : void 0,
                        selectedLocation: this.props.defaultLocation.country_code,
                        activeRule: null
                    }
                },
                getDefaultProps: function() {
                    return {
                        rules: []
                    }
                },
                componentDidMount: function(e, t) {
                    return this._findRuleByHost(this.state.host)
                },
                componentWillReceiveProps: function(e) {
                    var t;
                    return null != this.state.activeRule && e.rules.length > 0 && (t = this.state.activeRule, t > e.rules.length - 1 && (t = this.state.activeRule - 1), this._setActiveRule(t)), 0 === e.rules.length || e.rules.length > this.props.rules.length ? this._resetActiveRule() : void 0
                },
                _handleHostChange: function(e) {
                    return this.setState({
                        host: e
                    }), this._findRuleByHost(e)
                },
                _handleLocationChange: function(e) {
                    var t;
                    return null == this.state.activeRule ? this.setState({
                        selectedLocation: e
                    }) : (t = this.props.rules.slice(), t[this.state.activeRule].cc = e, p.trigger("updateRules", t))
                },
                _handleActionTrigger: function(e) {
                    return "SPAN" === e.target.tagName || "DIV" === e.target.tagName ? null != this.state.activeRule ? this._deleteActiveRule() : this._addRule() : null != this.state.activeRule ? this._refreshRuleListUI() : this._addRule()
                },
                _deleteActiveRule: function() {
                    var e;
                    if (null != this.state.activeRule) return e = this.props.rules.slice(), e.splice(this.state.activeRule, 1), p.trigger("updateRules", e)
                },
                _addRule: function() {
                    var e, t, n, s;
                    return this.state.host ? (e = this._cleanUpHost(this.state.host), t = {
                        domain: e,
                        cc: this.state.selectedLocation
                    }, s = m(this.props.rules, {
                        $push: [t]
                    }), p.trigger("updateRules", s)) : null != (n = document.querySelector('input[type="text"].rule-host-input')) ? n.focus() : void 0
                },
                _findRuleByHost: function(e) {
                    var t, n;
                    e = this._cleanUpHost(e), n = u.matchRules(this.props.rules, e), t = {
                        activeRule: n
                    }, null != n && (t.selectedLocation = this.props.rules[n].cc), this.setState(t)
                },
                _cleanUpHost: function(e) {
                    var t;
                    return null == e ? "" : (t = e.trim().toLowerCase(), t = this.parseURL(t).host || t, t.indexOf("/") > 0 && (t = this.parseURL("http://" + t).host || t), t = d.toASCII(t))
                },
                _handleRuleToggleChange: function(e) {
                    return this.props.is_premium ? p.trigger("toggleRules", e.target.checked) : p.trigger("header", {
                        open: !0
                    })
                },
                _refreshRuleListUI: function() {
                    return this.setState({
                        activeRule: this.state.activeRule
                    })
                },
                _setActiveRule: function(e) {
                    return null == e ? this._resetActiveRule() : this.setState({
                        host: this.props.rules[e].domain,
                        selectedLocation: this.props.rules[e].cc,
                        activeRule: e
                    })
                },
                _handleBackgroundClick: function() {
                    return null != this.state.activeRule ? this._resetActiveRule() : void 0
                },
                _resetActiveRule: function() {
                    return this.setState({
                        host: null,
                        selectedLocation: this.props.defaultLocation.country_code,
                        activeRule: null
                    })
                },
                parseURL: function(e) {
                    var t, n, s;
                    return s = /^([^:]+):\/\/([^\/:]*)(?::([\d]+))?(?:(\/[^#]*)(?:#(.*))?)?$/i, t = e.match(s), t ? {
                        scheme: t[1].toLowerCase(),
                        host: t[2].toLowerCase(),
                        port: t[3],
                        path: t[4] || "/",
                        fragment: t[5],
                        local: "http" !== (n = t[1].toLowerCase()) && "https" !== n
                    } : {}
                },
                render: function() {
                    return i.createElement("div", {
                        id: "rules"
                    }, i.createElement(s, {
                        showBack: !0,
                        header: this.props.header,
                        device: this.props.device,
                        routes: this.props.routes,
                        is_premium: this.props.is_premium
                    }), i.createElement("div", {
                        className: "rule-container"
                    }, i.createElement(r, {
                        rules: this.props.rules,
                        host: this.state.host,
                        locations: this.props.locations,
                        countryNames: this.props.countryNames,
                        selectedLocation: this.state.selectedLocation,
                        actionIntent: null != this.state.activeRule ? "delete" : "add",
                        onActionTrigger: this._handleActionTrigger,
                        onHostChange: this._handleHostChange,
                        onLocationChange: this._handleLocationChange
                    }), i.createElement("section", {
                        className: "scroll-section rule-list-section " + (this.props.rulesEnabled ? "" : "disabled"),
                        onClick: this._handleBackgroundClick
                    }, i.createElement(l, {
                        rules: this.props.rules,
                        active: this.state.activeRule,
                        setActiveRule: this._setActiveRule,
                        resetActiveRule: this._resetActiveRule
                    }), i.createElement(a, {
                        rulesEnabled: this.props.rulesEnabled,
                        rules: this.props.rules,
                        active: this.state.activeRule
                    })), i.createElement("footer", {
                        className: "rule-footer"
                    }, i.createElement("label", {
                        className: "rule-toggle-label",
                        htmlFor: "rule-toggle"
                    }, this.props.rulesEnabled ? this.getIntlMessage("popup.rules.toggle_on") : this.getIntlMessage("popup.rules.toggle_off")), i.createElement("label", {
                        className: "flat-switch"
                    }, i.createElement("input", {
                        id: "rule-toggle",
                        onChange: this._handleRuleToggleChange,
                        checked: this.props.rulesEnabled,
                        type: "checkbox",
                        className: "flat-switch-checkbox"
                    }), i.createElement("div", {
                        className: "flat-toggle"
                    })))))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../../../background/pacengine.coffee": 5,
        "../../../events": 7,
        "../header": 14,
        "./hints": 35,
        "./list": 37,
        "./rule_box/": 40,
        loglevel: 1,
        punycode: 2
    }],
    37: [function(e, t, n) {
        (function(n) {
            var s, o, i, r;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, r = e("loglevel"), i = o.addons.CSSTransitionGroup, t.exports = o.createClass({
                displayName: "RulesList",
                mixins: [s],
                propTypes: {
                    rules: o.PropTypes.array,
                    active: o.PropTypes.number,
                    setActiveRule: o.PropTypes.func.isRequired,
                    resetActiveRule: o.PropTypes.func.isRequired
                },
                componentDidUpdate: function(e, t) {
                    var n;
                    return n = this.props.active, this.props.rules.length > e.rules.length && (n = this.props.rules.length - 1), null != n && this._scrollToItem(n), null != e.active && null != this.props.active && e.active === this.props.active ? this._markItemAsUpdated(n) : void 0
                },
                _handleClick: function(e, t) {
                    return t.stopPropagation(), this.props.active === e ? this.props.resetActiveRule() : this.props.setActiveRule(e)
                },
                _scrollToItem: function(e) {
                    var t;
                    return t = this.refs[e], null != t.scrollIntoViewIfNeeded ? t.scrollIntoViewIfNeeded() : t.scrollIntoView(!1)
                },
                _markItemAsUpdated: function(e) {
                    var t, n;
                    return t = this.refs[e], n = function(e) {
                        return t.removeEventListener("webkitAnimationEnd", n, !1), t.removeEventListener("animationend", n, !1), t.classList.remove("-updated")
                    }, t.addEventListener("webkitAnimationEnd", n, !1), t.addEventListener("animationend", n, !1), t.classList.add("-updated")
                },
                render: function() {
                    var e, t, n, s;
                    return t = function() {
                        var t, i, r, a;
                        for (r = this.props.rules, a = [], e = t = 0, i = r.length; i > t; e = ++t) n = r[e], s = this.props.active === e ? "-selected" : "", a.push(o.createElement("div", {
                            key: n.domain,
                            className: "list-item"
                        }, o.createElement("div", {
                            key: e,
                            ref: e,
                            className: "rule-item " + s,
                            onClick: this._handleClick.bind(this, e)
                        }, o.createElement("div", {
                            className: "favicon",
                            style: {
                                backgroundImage: "url('https://www.google.com/s2/favicons?domain=" + n.domain + "')"
                            }
                        }, n.domain), o.createElement("div", {
                            className: "flag",
                            style: {
                                backgroundImage: "url('images/flags/" + n.cc + ".png')"
                            }
                        }))));
                        return a
                    }.call(this), o.createElement(i, {
                        component: "div",
                        transitionEnterTimeout: 300,
                        transitionLeaveTimeout: 300,
                        className: "rule-list " + (null != this.props.active ? "hasSelected" : ""),
                        transitionName: "list-item"
                    }, t)
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        loglevel: 1
    }],
    38: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l;
            r = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, l = "undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null, o = l.IntlMixin, s = l.FormattedMessage, a = e("loglevel"), i = r.addons.PureRenderMixin, t.exports = r.createClass({
                displayName: "ActionsRuleBox",
                mixins: [o, i],
                propTypes: {
                    host: r.PropTypes.string,
                    intent: r.PropTypes.string.isRequired,
                    onActionTrigger: r.PropTypes.func.isRequired
                },
                _handleKeyDown: function(e) {
                    return 13 === e.nativeEvent.keyCode ? this.props.onActionTrigger(e) : void 0
                },
                render: function() {
                    var e;
                    return e = this.getIntlMessage("popup.rules.button.add"), null != this.props.host && (e = this.formatMessage(this.getIntlMessage("popup.rules.button.add_host"), {
                        site: this.props.host
                    })), "add" !== this.props.intent && (e = this.formatMessage(this.getIntlMessage("popup.rules.button.remove_host"), {
                        site: this.props.host
                    })), r.createElement("div", {
                        className: "rule-actions"
                    }, r.createElement("div", {
                        className: "fab rule-action-" + this.props.intent,
                        tabIndex: "3",
                        onClick: this.props.onActionTrigger,
                        onKeyDown: this._handleKeyDown,
                        title: e
                    }, r.createElement("span", {
                        className: "icon-add"
                    }, "+")))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        loglevel: 1
    }],
    39: [function(e, t, n) {
        (function(n) {
            var s, o, i, r;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, r = e("loglevel"), o = i.addons.PureRenderMixin, t.exports = i.createClass({
                displayName: "HostRuleBox",
                mixins: [s, o],
                propTypes: {
                    host: i.PropTypes.string,
                    onHostChange: i.PropTypes.func.isRequired,
                    onActionTrigger: i.PropTypes.func.isRequired
                },
                getInitialState: function() {
                    return {
                        inputWidth: 0,
                        maxWidth: 0
                    }
                },
                componentDidMount: function() {
                    return this._updateFavicon(), this._setMaxWidth(), this._setInputWidth(), this._placeCaretAtEnd()
                },
                componentDidUpdate: function(e, t) {
                    var n, s;
                    return e.host !== this.props.host && (this._setInputWidth(), ((null != (n = this.props.host) ? n.indexOf(".") : void 0) > 0 || (null != e && null != (s = e.host) ? s.indexOf(".") : void 0) > 0) && this._updateFavicon()), null == this.props.host && null != e.host ? this._placeCaretAtEnd() : void 0
                },
                _handleKeyDown: function(e) {
                    return 13 === e.nativeEvent.keyCode && this.props.onActionTrigger(e), 32 === e.nativeEvent.keyCode || 13 === e.nativeEvent.keyCode ? e.preventDefault() : void 0
                },
                _handleChange: function(e) {
                    var t;
                    return t = e.target.value, this.props.onHostChange(t)
                },
                _setMaxWidth: function() {
                    var e, t, n, s, o, i, r, a;
                    for (i = this.refs.container.parentElement, o = i.offsetWidth, r = i.children, t = 0, s = r.length; s > t; t++) e = r[t], o -= e.offsetWidth;
                    return this.setState({
                        maxWidth: o
                    }), n = window.getComputedStyle(this.refs.input), a = this.refs.tmp, a.style.fontSize = n.fontSize, a.style.fontFamily = n.fontFamily
                },
                _setInputWidth: function() {
                    var e, t;
                    return e = this.props.host, null != e && "" !== e || (e = this.getIntlMessage("popup.rules.nlp.host.placeholder")), t = this.refs.tmp, t.textContent = e, this.setState({
                        inputWidth: t.offsetWidth + 5
                    })
                },
                _updateFavicon: function() {
                    return this.refs.container.style.backgroundImage = "url('https://www.google.com/s2/favicons?domain=" + (this.props.host || this.getIntlMessage("popup.rules.nlp.host.placeholder")) + "')"
                },
                _placeCaretAtEnd: function() {
                    var e, t;
                    return e = this.refs.input, e.focus(), t = e.value.length, e.setSelectionRange(t, t)
                },
                render: function() {
                    return i.createElement("div", {
                        className: "rule-host",
                        ref: "container"
                    }, i.createElement("input", {
                        type: "text",
                        className: "rule-host-input",
                        spellCheck: "false",
                        placeholder: this.getIntlMessage("popup.rules.nlp.host.placeholder"),
                        onChange: this._handleChange,
                        onKeyDown: this._handleKeyDown,
                        tabIndex: "1",
                        ref: "input",
                        style: {
                            maxWidth: this.state.maxWidth,
                            width: this.state.inputWidth
                        },
                        value: null != this.props.host ? this.props.host.toLowerCase() : this.props.host
                    }), i.createElement("span", {
                        className: "tmpHidden",
                        ref: "tmp"
                    }))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        loglevel: 1
    }],
    40: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, r = e("./host"), a = e("./location"), i = e("./actions"), l = e("loglevel"), t.exports = o.createClass({
                displayName: "RuleBox",
                mixins: [s],
                propTypes: {
                    host: o.PropTypes.string,
                    onHostChange: o.PropTypes.func.isRequired,
                    onLocationChange: o.PropTypes.func.isRequired,
                    onActionTrigger: o.PropTypes.func.isRequired,
                    selectedLocation: o.PropTypes.string.isRequired,
                    locations: o.PropTypes.array.isRequired,
                    actionIntent: o.PropTypes.string.isRequired,
                    countryNames: o.PropTypes.object
                },
                render: function() {
                    return o.createElement("div", {
                        id: "rule-box"
                    }, o.createElement("div", {
                        className: "nlp-container"
                    }, o.createElement("div", {
                        className: "nlp"
                    }, o.createElement("div", {
                        className: "nlp-text"
                    }, this.getIntlMessage("popup.rules.nlp.host._pre")), o.createElement(r, {
                        host: this.props.host,
                        onHostChange: this.props.onHostChange,
                        onActionTrigger: this.props.onActionTrigger
                    }), o.createElement("div", {
                        className: "nlp-text"
                    }, this.getIntlMessage("popup.rules.nlp.host._post"))), o.createElement("div", {
                        className: "nlp"
                    }, o.createElement("div", {
                        className: "nlp-text"
                    }, this.getIntlMessage("popup.rules.nlp.location._pre")), o.createElement(a, {
                        locations: this.props.locations,
                        countryNames: this.props.countryNames,
                        selectedLocation: this.props.selectedLocation,
                        onLocationChange: this.props.onLocationChange,
                        onActionTrigger: this.props.onActionTrigger
                    }), o.createElement("div", {
                        className: "nlp-text"
                    }, this.getIntlMessage("popup.rules.nlp.location._post")))), o.createElement(i, {
                        intent: this.props.actionIntent,
                        host: this.props.host,
                        onActionTrigger: this.props.onActionTrigger
                    }))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./actions": 38,
        "./host": 39,
        "./location": 41,
        loglevel: 1
    }],
    41: [function(e, t, n) {
        (function(n) {
            var s, o, i;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, i = e("loglevel"), t.exports = o.createClass({
                displayName: "LocationRuleBox",
                mixins: [s],
                propTypes: {
                    selectedLocation: o.PropTypes.string.isRequired,
                    locations: o.PropTypes.array.isRequired,
                    onActionTrigger: o.PropTypes.func.isRequired,
                    onLocationChange: o.PropTypes.func,
                    countryNames: o.PropTypes.object
                },
                componentDidMount: function() {
                    return this._updateFlag(), this._setSelectWidth()
                },
                componentDidUpdate: function(e, t) {
                    return e.selectedLocation !== this.props.selectedLocation ? (this._updateFlag(), this._setSelectWidth()) : void 0
                },
                _handleKeyDown: function(e) {
                    return 13 === e.nativeEvent.keyCode ? this.props.onActionTrigger(e) : void 0
                },
                _handleChange: function(e) {
                    var t;
                    return t = e.target.value, this.props.onLocationChange(t)
                },
                _setSelectWidth: function() {
                    var e, t, n;
                    return t = this.refs.select, e = t.options[t.selectedIndex].label, n = this.refs.tmp, n.textContent = e, t.style.width = n.offsetWidth + 10 + "px"
                },
                _updateFlag: function() {
                    var e, t;
                    return t = this.props.selectedLocation, e = "url('images/flags/" + t + ".png')", this.refs.container.style.backgroundImage = e
                },
                render: function() {
                    var e;
                    return o.createElement("div", {
                        className: "rule-location",
                        ref: "container"
                    }, o.createElement("select", {
                        tabIndex: "2",
                        ref: "select",
                        value: this.props.selectedLocation,
                        onKeyDown: this._handleKeyDown,
                        onChange: this._handleChange
                    }, function() {
                        var t, n, s, i;
                        if (this.props.locations) {
                            for (s = this.props.locations, i = [], t = 0, n = s.length; n > t; t++) e = s[t], i.push(o.createElement("option", {
                                key: e.country_code,
                                value: e.country_code
                            }, this.props.countryNames[e.country_code]));
                            return i
                        }
                    }.call(this), o.createElement("option", {
                        disabled: !0,
                        className: "separator"
                    }, "──────────"), o.createElement("option", {
                        value: "OFF"
                    }, this.getIntlMessage("popup.rules.nlp.location.off"))), o.createElement("span", {
                        className: "tmpHidden",
                        ref: "tmp"
                    }))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        loglevel: 1
    }],
    42: [function(e, t, n) {
        (function(e) {
            var n, s;
            s = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, n = s.addons.PureRenderMixin, t.exports = s.createClass({
                displayName: "ClickItem",
                mixins: [n],
                propTypes: {
                    onClick: s.PropTypes.func.isRequired,
                    label: s.PropTypes.string.isRequired
                },
                render: function() {
                    return s.createElement("li", {
                        className: "click-item",
                        onClick: this.props.onClick
                    }, this.props.label)
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    43: [function(e, t, n) {
        (function(n) {
            var s, o, i, r, a, l, p, c, u, d;
            c = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, a = ("undefined" != typeof window ? window.ReactIntl : "undefined" != typeof n ? n.ReactIntl : null).IntlMixin, i = e("../header"), d = e("../../../events"), s = e("./settings_category"), r = e("./input_item"), o = e("./click_item"), u = e("./toggle_item"), l = e("./link_item"), p = e("./nav_item"), t.exports = c.createClass({
                displayName: "Settings",
                mixins: [a],
                propTypes: {
                    routes: c.PropTypes.object.isRequired,
                    header: c.PropTypes.object.isRequired,
                    user: c.PropTypes.object.isRequired,
                    device: c.PropTypes.object.isRequired,
                    debug: c.PropTypes.object.isRequired,
                    messages: c.PropTypes.object.isRequired,
                    language: c.PropTypes.string.isRequired
                },
                changeAPIUrl: function(e) {
                    return d.trigger("changeAPIUrl", e), d.trigger("signOut")
                },
                reset: function() {
                    return d.trigger("reset")
                },
                confirmAccount: function() {
                    return d.trigger("confirmAccount")
                },
                signOut: function() {
                    return d.trigger("signOut")
                },
                render: function() {
                    var e, t;
                    return e = {
                        uuid: this.props.device.uuid,
                        token: this.props.device.token,
                        src: "{browser}"
                    }, t = "[P|" + this.props.user.country_code + "_" + this.props.language + "]-" + this.props.routes.current, c.createElement("div", {
                        id: "settings"
                    }, c.createElement(i, {
                        showBack: !0,
                        header: this.props.header,
                        device: this.props.device,
                        routes: this.props.routes,
                        is_premium: this.props.user.is_premium
                    }), c.createElement("section", {
                        className: "subhead"
                    }, c.createElement("div", {
                        className: "text-center"
                    }, c.createElement("h1", {
                        className: "location-headline"
                    }, this.getIntlMessage("popup.settings.heading")), c.createElement("p", {
                        className: "location-copy"
                    }, this.getIntlMessage("popup.settings.copy")))), c.createElement("section", {
                        className: "settings-section scroll-section"
                    }, c.createElement(s, {
                        title: this.getIntlMessage("popup.settings.account.title") + " " + (this.props.user.is_anonymous ? "" : "(" + this.props.user.email + ")")
                    }, this.props.user.is_anonymous ? c.createElement("div", null, c.createElement(l, {
                        url: "page.html#signup",
                        label: this.getIntlMessage("popup.settings.account.sign_up")
                    }), c.createElement(l, {
                        url: "page.html#login",
                        label: this.getIntlMessage("popup.settings.account.log_in")
                    })) : c.createElement(o, {
                        onClick: this.signOut,
                        label: this.getIntlMessage("popup.settings.account.sign_out")
                    }), this.props.user.is_premium ? void 0 : c.createElement(l, {
                        url: "https://secure.zenmate.com#/upgrade",
                        params: e,
                        ga: {
                            utm_campaign: t
                        },
                        label: this.getIntlMessage("popup.settings.account.get_premium")
                    }), this.props.user.is_anonymous || this.props.user.is_verified ? void 0 : c.createElement(o, {
                        onClick: this.confirmAccount,
                        label: this.getIntlMessage("popup.settings.account.verify")
                    }), this.props.user.is_anonymous ? void 0 : c.createElement(l, {
                        url: "https://secure.zenmate.com#/",
                        params: e,
                        ga: {
                            utm_campaign: t
                        },
                        label: this.getIntlMessage("popup.settings.account.account_dashboard")
                    })), c.createElement(s, {
                        title: this.getIntlMessage("popup.settings.general.title")
                    }, c.createElement(l, {
                        url: "http://go.zenmate.com/3EMEt",
                        label: this.getIntlMessage("popup.settings.general.support")
                    }), c.createElement(p, {
                        link: "#language",
                        label: this.getIntlMessage("popup.settings.general.change_language")
                    })), void 0))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7,
        "../header": 14,
        "./click_item": 42,
        "./input_item": 44,
        "./link_item": 45,
        "./nav_item": 46,
        "./settings_category": 47,
        "./toggle_item": 48
    }],
    44: [function(e, t, n) {
        (function(e) {
            var n;
            n = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, t.exports = n.createClass({
                displayName: "InputItem",
                propTypes: {
                    label: n.PropTypes.string.isRequired,
                    onClick: n.PropTypes.func,
                    button: n.PropTypes.bool,
                    value: n.PropTypes.string
                },
                getInitialState: function() {
                    return {
                        value: this.props.value
                    }
                },
                willReceiveProps: function() {
                    return this.setState({
                        value: this.props.value
                    })
                },
                onChange: function() {
                    return this.setState({
                        value: this.refs.input.value
                    })
                },
                onClick: function() {
                    var e;
                    return "function" == typeof(e = this.props).onClick ? e.onClick(this.refs.input.value) : void 0
                },
                render: function() {
                    return n.createElement("li", null, n.createElement("label", null, this.props.label), n.createElement("input", {
                        value: this.state.value,
                        onChange: this.onChange,
                        ref: "input"
                    }), this.props.button ? n.createElement("button", {
                        onClick: this.onClick
                    }, "Submit") : void 0)
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    45: [function(e, t, n) {
        (function(n) {
            var s, o, i;
            i = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, s = e("../../../link"), o = i.addons.PureRenderMixin, t.exports = i.createClass({
                displayName: "LinkItem",
                mixins: [o],
                propTypes: {
                    label: i.PropTypes.string.isRequired
                },
                render: function() {
                    return i.createElement(s, i.__spread({}, this.props), i.createElement("li", {
                        className: "click-item"
                    }, this.props.label))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../link": 8
    }],
    46: [function(e, t, n) {
        (function(e) {
            var n, s;
            s = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, n = s.addons.PureRenderMixin, t.exports = s.createClass({
                displayName: "NavigationItem",
                mixins: [n],
                propTypes: {
                    link: s.PropTypes.string.isRequired,
                    label: s.PropTypes.string.isRequired
                },
                render: function() {
                    return s.createElement("a", {
                        href: this.props.link
                    }, s.createElement("li", {
                        className: "click-item"
                    }, this.props.label))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    47: [function(e, t, n) {
        (function(e) {
            var n, s;
            s = "undefined" != typeof window ? window.React : "undefined" != typeof e ? e.React : null, n = s.addons.PureRenderMixin, t.exports = s.createClass({
                displayName: "SettingsCategory",
                mixins: [n],
                propTypes: {
                    title: s.PropTypes.string.isRequired
                },
                render: function() {
                    return s.createElement("div", {
                        className: "settings-category"
                    }, s.createElement("h3", null, this.props.title), s.createElement("ul", null, this.props.children))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    48: [function(e, t, n) {
        (function(n) {
            var s, o, i;
            o = "undefined" != typeof window ? window.React : "undefined" != typeof n ? n.React : null, i = e("../../../events"), s = o.addons.PureRenderMixin, t.exports = o.createClass({
                displayName: "ToggleItem",
                mixins: [s],
                propTypes: {
                    label: o.PropTypes.string.isRequired,
                    onChange: o.PropTypes.func.isRequired,
                    enabled: o.PropTypes.bool.isRequired
                },
                render: function() {
                    return o.createElement("li", {
                        className: "toggle-item"
                    }, o.createElement("label", null, this.props.label), o.createElement("label", {
                        className: "toggle"
                    }, o.createElement("input", {
                        onChange: this.props.onChange,
                        checked: this.props.enabled,
                        type: "checkbox",
                        className: "ios-switch stateToggle onoffswitch-checkbox"
                    }), o.createElement("div", {
                        className: "switch " + (this.props.enabled ? "switch-enabled" : "switch-disabled")
                    })))
                }
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../../events": 7
    }],
    49: [function(e, t, n) {
        (function(e) {
            var t;
            t = "undefined" != typeof window ? window.Bacon : "undefined" != typeof e ? e.Bacon : null, n.router = function(e) {
                var n;
                return null == e && (e = "home"), n = t.fromEvent(window, "hashchange").bufferingThrottle(500).merge(t.once()).map(function() {
                    var e;
                    return null != (e = location.hash) ? e.slice(1) : void 0
                }).scan({
                    stack: [e],
                    direction: "right"
                }, function(e, t) {
                    var n;
                    return t = t || "home", n = e.stack.indexOf(t), ~n ? (e.direction = "left", e.stack = e.stack.slice(0, n + 1)) : (e.direction = "right", e.stack.push(t)), e
                }).skip(1), n.map(function(e) {
                    return {
                        direction: e.direction,
                        current: e.stack[e.stack.length - 1],
                        previous: e.stack[e.stack.length - 2]
                    }
                })
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}]
}, {}, [10]);
