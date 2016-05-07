! function e(n, t, o) {
    function r(a, s) {
        if (!t[a]) {
            if (!n[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (i) return i(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = t[a] = {
                exports: {}
            };
            n[a][0].call(c.exports, function(e) {
                var t = n[a][1][e];
                return r(t ? t : e)
            }, c, c.exports, e, n, t, o)
        }
        return t[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < o.length; a++) r(o[a]);
    return r
}({
    1: [function(e, n, t) {
        ! function(t, o) {
            "object" == typeof n && n.exports && "function" == typeof e ? n.exports = o() : "function" == typeof define && "object" == typeof define.amd ? define(o) : t.log = o()
        }(this, function() {
            function e(e) {
                return typeof console === u ? !1 : void 0 !== console[e] ? n(console, e) : void 0 !== console.log ? n(console, "log") : s
            }

            function n(e, n) {
                var t = e[n];
                if ("function" == typeof t.bind) return t.bind(e);
                try {
                    return Function.prototype.bind.call(t, e)
                } catch (o) {
                    return function() {
                        return Function.prototype.apply.apply(t, [e, arguments])
                    }
                }
            }

            function t(e, n) {
                return function() {
                    typeof console !== u && (o(n), a[e].apply(a, arguments))
                }
            }

            function o(e) {
                for (var n = 0; n < l.length; n++) {
                    var t = l[n];
                    a[t] = e > n ? s : a.methodFactory(t, e)
                }
            }

            function r(e) {
                var n = (l[e] || "silent").toUpperCase();
                try {
                    return void(window.localStorage.loglevel = n)
                } catch (t) {}
                try {
                    window.document.cookie = "loglevel=" + n + ";"
                } catch (t) {}
            }

            function i() {
                var e;
                try {
                    e = window.localStorage.loglevel
                } catch (n) {}
                if (typeof e === u) try {
                    e = /loglevel=([^;]+)/.exec(window.document.cookie)[1]
                } catch (n) {}
                void 0 === a.levels[e] && (e = "WARN"), a.setLevel(a.levels[e])
            }
            var a = {},
                s = function() {},
                u = "undefined",
                l = ["trace", "debug", "info", "warn", "error"];
            a.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
            }, a.methodFactory = function(n, o) {
                return e(n) || t(n, o)
            }, a.setLevel = function(e, n) {
                if ("string" == typeof e && void 0 !== a.levels[e.toUpperCase()] && (e = a.levels[e.toUpperCase()]), !("number" == typeof e && e >= 0 && e <= a.levels.SILENT)) throw "log.setLevel() called with invalid level: " + e;
                return n !== !1 && r(e), o(e), typeof console === u && e < a.levels.SILENT ? "No console available for logging" : void 0
            }, a.enableAll = function(e) {
                a.setLevel(a.levels.TRACE, e)
            }, a.disableAll = function(e) {
                a.setLevel(a.levels.SILENT, e)
            };
            var c = typeof window !== u ? window.log : void 0;
            return a.noConflict = function() {
                return typeof window !== u && window.log === a && (window.log = c), a
            }, i(), a
        })
    }, {}],
    2: [function(e, n, t) {
        ! function(e, o) {
            "use strict";
            var r = "0.7.10",
                i = "",
                a = "?",
                s = "function",
                u = "undefined",
                l = "object",
                c = "string",
                d = "major",
                f = "model",
                p = "name",
                m = "type",
                g = "vendor",
                w = "version",
                v = "architecture",
                h = "console",
                y = "mobile",
                b = "tablet",
                _ = "smarttv",
                x = "wearable",
                E = "embedded",
                L = {
                    extend: function(e, n) {
                        for (var t in n) - 1 !== "browser cpu device engine os".indexOf(t) && n[t].length % 2 === 0 && (e[t] = n[t].concat(e[t]));
                        return e
                    },
                    has: function(e, n) {
                        return "string" == typeof e ? -1 !== n.toLowerCase().indexOf(e.toLowerCase()) : !1
                    },
                    lowerize: function(e) {
                        return e.toLowerCase()
                    },
                    major: function(e) {
                        return typeof e === c ? e.split(".")[0] : o
                    }
                },
                P = {
                    rgx: function() {
                        for (var e, n, t, r, i, a, c, d = 0, f = arguments; d < f.length && !a;) {
                            var p = f[d],
                                m = f[d + 1];
                            if (typeof e === u) {
                                e = {};
                                for (r in m) m.hasOwnProperty(r) && (i = m[r], typeof i === l ? e[i[0]] = o : e[i] = o)
                            }
                            for (n = t = 0; n < p.length && !a;)
                                if (a = p[n++].exec(this.getUA()))
                                    for (r = 0; r < m.length; r++) c = a[++t], i = m[r], typeof i === l && i.length > 0 ? 2 == i.length ? typeof i[1] == s ? e[i[0]] = i[1].call(this, c) : e[i[0]] = i[1] : 3 == i.length ? typeof i[1] !== s || i[1].exec && i[1].test ? e[i[0]] = c ? c.replace(i[1], i[2]) : o : e[i[0]] = c ? i[1].call(this, c, i[2]) : o : 4 == i.length && (e[i[0]] = c ? i[3].call(this, c.replace(i[1], i[2])) : o) : e[i] = c ? c : o;
                            d += 2
                        }
                        return e
                    },
                    str: function(e, n) {
                        for (var t in n)
                            if (typeof n[t] === l && n[t].length > 0) {
                                for (var r = 0; r < n[t].length; r++)
                                    if (L.has(n[t][r], e)) return t === a ? o : t
                            } else if (L.has(n[t], e)) return t === a ? o : t;
                        return e
                    }
                },
                k = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2000: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                A = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [p, w],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [p, "Opera"], w
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                        [p, w],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [p, "IE"], w
                        ],
                        [/(edge)\/((\d+)?[\w\.]+)/i],
                        [p, w],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [p, "Yandex"], w
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [p, /_/g, " "], w
                        ],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [p, w],
                        [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [p, "UCBrowser"], w
                        ],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [p, "Dolphin"], w
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [p, "Chrome"], w
                        ],
                        [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                        [w, [p, "MIUI Browser"]],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                        [w, [p, "Android Browser"]],
                        [/FBAV\/([\w\.]+);/i],
                        [w, [p, "Facebook"]],
                        [/fxios\/([\w\.-]+)/i],
                        [w, [p, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [w, [p, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [w, p],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [p, [w, P.str, k.browser.oldsafari.version]],
                        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                        [p, w],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [p, "Netscape"], w
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [p, w]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [v, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [v, L.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [v, "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [v, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [v, /ower/, "", L.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [v, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            [v, L.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                        [f, g, [m, b]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [f, [g, "Apple"],
                            [m, b]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [f, "Apple TV"],
                            [g, "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [g, f, [m, b]],
                        [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                        [f, [g, "Amazon"],
                            [m, b]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                        [
                            [f, P.str, k.device.amazon.model],
                            [g, "Amazon"],
                            [m, y]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [f, g, [m, y]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [f, [g, "Apple"],
                            [m, y]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [g, f, [m, y]],
                        [/\(bb10;\s(\w+)/i],
                        [f, [g, "BlackBerry"],
                            [m, y]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                        [f, [g, "Asus"],
                            [m, b]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [g, "Sony"],
                            [f, "Xperia Tablet"],
                            [m, b]
                        ],
                        [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                        [
                            [g, "Sony"],
                            [f, "Xperia Phone"],
                            [m, y]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [g, f, [m, h]],
                        [/android.+;\s(shield)\sbuild/i],
                        [f, [g, "Nvidia"],
                            [m, h]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [f, [g, "Sony"],
                            [m, h]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [g, P.str, k.device.sprint.vendor],
                            [f, P.str, k.device.sprint.model],
                            [m, y]
                        ],
                        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                        [g, f, [m, b]],
                        [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                        [g, [f, /_/g, " "],
                            [m, y]
                        ],
                        [/(nexus\s9)/i],
                        [f, [g, "HTC"],
                            [m, b]
                        ],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [f, [g, "Microsoft"],
                            [m, h]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [f, /\./g, " "],
                            [g, "Microsoft"],
                            [m, y]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i],
                        [f, [g, "Motorola"],
                            [m, y]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [f, [g, "Motorola"],
                            [m, b]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [g, "Samsung"], f, [m, b]
                        ],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                        [
                            [g, "Samsung"], f, [m, y]
                        ],
                        [/(samsung);smarttv/i],
                        [g, f, [m, _]],
                        [/\(dtv[\);].+(aquos)/i],
                        [f, [g, "Sharp"],
                            [m, _]
                        ],
                        [/sie-(\w+)*/i],
                        [f, [g, "Siemens"],
                            [m, y]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                        [
                            [g, "Nokia"], f, [m, y]
                        ],
                        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                        [f, [g, "Acer"],
                            [m, b]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [g, "LG"], f, [m, b]
                        ],
                        [/(lg) netcast\.tv/i],
                        [g, f, [m, _]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                        [f, [g, "LG"],
                            [m, y]
                        ],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [f, [g, "Lenovo"],
                            [m, b]
                        ],
                        [/linux;.+((jolla));/i],
                        [g, f, [m, y]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [g, f, [m, x]],
                        [/android.+;\s(glass)\s\d/i],
                        [f, [g, "Google"],
                            [m, x]
                        ],
                        [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
                        [
                            [f, /_/g, " "],
                            [g, "Xiaomi"],
                            [m, y]
                        ],
                        [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i],
                        [
                            [m, L.lowerize], g, f
                        ]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [w, [p, "EdgeHTML"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [p, w],
                        [/rv\:([\w\.]+).*(gecko)/i],
                        [w, p]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [p, w],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [p, [w, P.str, k.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [p, "Windows"],
                            [w, P.str, k.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [p, "BlackBerry"], w
                        ],
                        [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                        [p, w],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                        [
                            [p, "Symbian"], w
                        ],
                        [/\((series40);/i],
                        [p],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [p, "Firefox OS"], w
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                        [p, w],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [p, "Chromium OS"], w
                        ],
                        [/(sunos)\s?([\w\.]+\d)*/i],
                        [
                            [p, "Solaris"], w
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                        [p, w],
                        [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                        [
                            [p, "iOS"],
                            [w, /_/g, "."]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [p, "Mac OS"],
                            [w, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                        [p, w]
                    ]
                },
                B = function(n, t) {
                    if (!(this instanceof B)) return new B(n, t).getResult();
                    var o = n || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : i),
                        r = t ? L.extend(A, t) : A;
                    return this.getBrowser = function() {
                        var e = P.rgx.apply(this, r.browser);
                        return e.major = L.major(e.version), e
                    }, this.getCPU = function() {
                        return P.rgx.apply(this, r.cpu)
                    }, this.getDevice = function() {
                        return P.rgx.apply(this, r.device)
                    }, this.getEngine = function() {
                        return P.rgx.apply(this, r.engine)
                    }, this.getOS = function() {
                        return P.rgx.apply(this, r.os)
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return o
                    }, this.setUA = function(e) {
                        return o = e, this
                    }, this.setUA(o), this
                };
            B.VERSION = r, B.BROWSER = {
                NAME: p,
                MAJOR: d,
                VERSION: w
            }, B.CPU = {
                ARCHITECTURE: v
            }, B.DEVICE = {
                MODEL: f,
                VENDOR: g,
                TYPE: m,
                CONSOLE: h,
                MOBILE: y,
                SMARTTV: _,
                TABLET: b,
                WEARABLE: x,
                EMBEDDED: E
            }, B.ENGINE = {
                NAME: p,
                VERSION: w
            }, B.OS = {
                NAME: p,
                VERSION: w
            }, typeof t !== u ? (typeof n !== u && n.exports && (t = n.exports = B), t.UAParser = B) : typeof define === s && define.amd ? define(function() {
                return B
            }) : e.UAParser = B;
            var T = e.jQuery || e.Zepto;
            if (typeof T !== u) {
                var I = new B;
                T.ua = I.getResult(), T.ua.get = function() {
                    return I.getUA()
                }, T.ua.set = function(e) {
                    I.setUA(e);
                    var n = I.getResult();
                    for (var t in n) T.ua[t] = n[t]
                }
            }
        }("object" == typeof window ? window : this)
    }, {}],
    3: [function(e, n, t) {
        (function(n) {
            var o, r, i, a, s, u, l, c, d, f, p, m, g, w, v, h, y, b, _, x, E;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, s = e("./config"), b = e("storage"), g = e("./registration"), y = g.signUp, v = g.signIn, h = g.signOut, _ = e("./update"), f = e("./page").page, p = e("./popup").popup, r = e("./api_request"), i = e("auth"), w = e("xhr").request, a = e("browser"), d = e("./language").messages, c = e("./url").formatUrlParams, t.updatePassword = x = o.fromEvent(f, "request:updatePassword").flatMapLatest(function(e) {
                var n;
                return n = e.password, r("account", "PUT", {
                    new_password: n.trim()
                })
            }), x.onValue(function() {
                return f.send("response:updatePassword")
            }), t.device = l = o.fromPromise(b.read("device")).skipErrors().merge(y.merge(v).merge(_).map(function(e) {
                var n;
                return n = e.device
            })).filter(function(e) {
                return e
            }).scan({}, function(e, n) {
                var t, o;
                for (t in n) o = n[t], e[t] = o;
                return e
            }).changes().merge(h.map(null)).toProperty(), l.onValue(function(e) {
                return null != e ? (b.write("device", e), i.setCredentials(e.uuid, e.token)) : b["delete"]("device")
            }), t.user = E = o.fromPromise(b.read("user")).skipErrors().merge(y.merge(v).merge(_).map(function(e) {
                var n;
                return n = e.user
            })).filter(function(e) {
                return e
            }).merge(h.map(null)).toProperty(), E.onValue(function(e) {
                return null != e ? b.write("user", e) : b["delete"]("user")
            }), m = E.slidingWindow(2, 2).filter(function(e) {
                var n, t;
                return t = e[0], n = e[1], null != (null != t ? t.is_premium : void 0) && null != (null != n ? n.is_premium : void 0)
            }).filter(function(e) {
                var n, t;
                return t = e[0], n = e[1], t.is_premium !== n.is_premium
            }).map(function(e) {
                var n, t;
                return t = e[0], n = e[1], n.is_premium
            }), m.flatMap(function(e) {
                return o.combineAsArray(l.take(1), d.take(1), e)
            }).map(function(e) {
                var n, t, o, r, i;
                return n = e[0], o = e[1], t = e[2], r = o.notifications.status_change, t ? [r.upgraded_title, r.upgraded_msg, null] : (i = c({
                    url: "https://secure.zenmate.com#/upgrade",
                    params: {
                        utm_source: "crm",
                        utm_medium: "vpn-extension-" + a.getName(),
                        utm_campaign: "[p|" + E.country_code + "-" + a.getLocale() + "]-native-notification-premium2free",
                        uuid: n.uuid,
                        token: n.token
                    }
                }), [r.downgraded_title, r.downgraded_msg, i])
            }).onValues(function(e, n, t) {
                var o, r;
                return o = {
                    type: "basic",
                    title: e,
                    message: n
                }, r = {
                    title: e,
                    text: n,
                    data: {
                        url: t
                    }
                }, a.notify({
                    chrome: {
                        newsItem: o,
                        data: {
                            url: t
                        }
                    },
                    firefox: r
                })
            }), o.fromEventTarget(f, "request:user").flatMapLatest(function() {
                return E.startWith(null)
            }).onValue(function(e) {
                return f.send("response:user", e)
            }), u = o.fromEvent(f, "request:confirmAccount").merge(o.fromEventTarget(p, "request:confirmAccount")).flatMapLatest(function() {
                return l.take(1)
            }).flatMapLatest(function(e) {
                return o.fromPromise(w({
                    url: s.apiURL + "/v2/account/confirmations",
                    method: "POST",
                    responseType: "json",
                    data: {
                        auth_method: "device",
                        auth_id: e.uuid,
                        auth_secret: e.token
                    }
                }))
            }), u.onValue(function() {
                return f.send("response:confirmAccount")
            }), u.onError(function(e) {
                return f.send("error:confirmAccount", e.message)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./api_request": 4,
        "./config": 15,
        "./language": 28,
        "./page": 34,
        "./popup": 36,
        "./registration": 38,
        "./update": 43,
        "./url": 44,
        auth: 6,
        browser: 8,
        storage: 11,
        xhr: 14
    }],
    4: [function(e, n, t) {
        (function(t) {
            var o, r, i, a;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, i = e("xhr").request, a = e("storage"), r = e("./config"), n.exports = function(e, n, t) {
                return null == n && (n = "GET"), null == t && (t = {}), o.fromPromise(a.read("device")).skipErrors().flatMapLatest(function(n) {
                    return t.auth_method = "device", t.auth_id = n.uuid, t.auth_secret = n.token, o.fromPromise(i({
                        url: r.apiURL + "/v2/" + e,
                        responseType: "json",
                        data: t
                    }))
                })
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./config": 15,
        storage: 11,
        xhr: 14
    }],
    5: [function(e, n, t) {
        (function(e) {
            var n;
            n = "undefined" != typeof window ? window.Bacon : "undefined" != typeof e ? e.Bacon : null, n.Property.prototype.triggeredBy = function(e, n) {
                return this.changes().merge(this.sampledBy(e, n))
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    6: [function(e, n, t) {
        var o, r, i, a;
        r = e("loglevel"), a = "no_data_in_plugin", i = "no_data_in_plugin", o = "", t.setCredentials = function(e, n) {
            return a = e, i = n
        }, t.setFeatureFlags = function(e) {
            return o = e
        }, t.authHandler = function(e, n) {
            var t;
            return e.isProxy && ~e.realm.toLowerCase().indexOf("zenmate") ? (t = {
                authCredentials: {
                    username: a + (o ? ";" + o : ""),
                    password: i
                }
            }, n(t)) : n()
        }
    }, {
        loglevel: 1
    }],
    7: [function(e, n, t) {
        (function(n) {
            var o, r, i, a, s = [].indexOf || function(e) {
                for (var n = 0, t = this.length; t > n; n++)
                    if (n in this && this[n] === e) return n;
                return -1
            };
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, i = e("loglevel"), a = o.fromBinder(function(e) {
                return chrome.management.onEnabled.addListener(e), chrome.management.onDisabled.addListener(e), chrome.proxy.settings.onChange.addListener(e)
            }).flatMapLatest(function() {
                return r()
            }), r = function() {
                return o.fromCallback(function(e) {
                    return chrome.proxy.settings.get({
                        incognito: !1
                    }, e)
                })
            }, t.proxyBlocked = r().merge(a).map(function(e) {
                return "controllable_by_this_extension" !== (null != e ? e.levelOfControl : void 0) && "controlled_by_this_extension" !== (null != e ? e.levelOfControl : void 0)
            }).toProperty(!1), t.proxyBlockedBy = t.proxyBlocked.flatMapLatest(function(e) {
                return o.fromCallback(function(n) {
                    return e ? chrome.management.getAll(function(e) {
                        var t, o;
                        return t = function() {
                            var n, t, r, i;
                            for (i = [], n = 0, t = e.length; t > n; n++) o = e[n], chrome.runtime.id !== o.id && o.enabled && s.call(o.permissions, "proxy") >= 0 && i.push({
                                id: o.id,
                                name: o.name,
                                icon: null != (r = o.icons) ? r[0].url : void 0
                            });
                            return i
                        }(), n(t)
                    }) : n([])
                })
            }).toProperty()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        loglevel: 1
    }],
    8: [function(e, n, t) {
        var o, r, i, a, s, u, l, c, d, f, p, m, g, w, v, h, y;
        y = e("../util"), i = e("../config"), d = e("../pacengine"), v = e("./storage"), r = e("./auth").authHandler, u = e("loglevel"), w = e("xhr").request, f = e("./page_api"), o = e("ua-parser-js"), h = new o(navigator.userAgent).getResult(), t.openPage = c = function(e) {
            return chrome.tabs.create({
                url: e,
                active: !0
            }, function(n) {
                return chrome.windows.update(n.windowId, {
                    focused: !0
                }), "page.html" === e.split("#")[0] ? t.closePage(n.url.split("#")[0], n.id) : void 0
            })
        }, t.closePage = function(e, n) {
            return chrome.tabs.query({
                url: e
            }, function(e) {
                var t, o, r, i;
                if (null != e) {
                    for (r = [], t = 0, o = e.length; o > t; t++) i = e[t], i.id !== n && r.push(chrome.tabs.remove(i.id));
                    return r
                }
            })
        }, t.closePopup = function() {
            return !1
        }, t.getExtensionURL = a = function(e) {
            return chrome.extension.getURL(e)
        }, t.setIconAction = function(e) {
            return "popup" === e ? chrome.browserAction.setPopup({
                popup: "popup.html"
            }) : "page" === e ? chrome.browserAction.setPopup({
                popup: ""
            }) : void 0
        }, "undefined" != typeof chrome && null !== chrome && null != (m = chrome.browserAction) && m.onClicked.addListener(function() {
            return c(a("page.html"))
        }), p = function(e) {
            var n;
            try {
                return (n = localStorage.getItem(e)) ? JSON.parse(n) : !1
            } catch (t) {
                return !1
            }
        }, l = function() {
            var e, n, t, o, r, a, s, u;
            if (e = {}, !(localStorage.length > 0)) return !1;
            for (r = Object.keys(localStorage), n = 0, o = r.length; o > n; n++) t = r[n], (u = p(t)) && (e[t] = u);
            return (s = e["UserData-1"]) && (a = e["Session-1"]) && null != (null != s ? s.email : void 0) && null != (null != s ? s.hash : void 0) && (null != a ? a.loggedIn : 0) ? w({
                method: "POST",
                url: i.apiURL + "/v2/sign_in",
                responseType: "json",
                data: {
                    auth_method: "legacy",
                    auth_id: s.email,
                    auth_secret: s.hash
                }
            }).then(function(e) {
                var n, t, o, r, i;
                return i = e.user, t = e.device, o = e.locations, v.write("user", i), v.write("device", t), v.write("install_id", t.install_id), v.write("default_locations", o), (n = null != a && null != (r = a.selectedServer) ? r.country_code : void 0) && v.write("default_location", n), null != (null != a ? a.enabled : void 0) && v.write("enabled", a.enabled), chrome.runtime.reload()
            }) : !1
        }, "undefined" != typeof chrome && null !== chrome && null != (g = chrome.runtime) && g.onInstalled.addListener(function(e) {
            return "update" === e.reason ? w({
                method: "GET",
                url: i.apiURL + "/v2/et/upgrade",
                data: {
                    previous_version: e.previousVersion
                }
            }) : void 0
        }), t.setup = function() {
            return chrome.runtime.onUpdateAvailable.addListener(function() {
                return chrome.runtime.reload()
            }), chrome.runtime.setUninstallURL("https://zenmatefeedback.typeform.com/to/kgyZFr"), chrome.webRequest.onBeforeSendHeaders.addListener(function(e) {
                return {
                    cancel: !0
                }
            }, {
                urls: ["*://www.google.com/searchdomaincheck*"]
            }, ["blocking"]), chrome.proxy.onProxyError.addListener(function(e) {
                return u.warn("Proxy error", e)
            }), Promise.all([v.read("install_id"), v.read("device")]).then(function(e) {
                var n, t;
                return t = e[0], n = e[1], t && n.uuid && n.token ? !0 : l()
            })["catch"](function() {
                return l()
            })
        }, t.hasIncognitoAccess = function(e) {
            return chrome.extension.isAllowedIncognitoAccess(function(n) {
                return e(n)
            })
        }, t.connect = function(e, n, t, o) {
            var a, s, u, l;
            return a = d.getNodeDictFromLocations(n, i.alternativeNodes), s = d.exportPAC(e.country_code, a, t, o), u = {
                value: {
                    mode: "pac_script",
                    pacScript: {
                        data: s
                    }
                },
                scope: "regular"
            }, chrome.proxy.settings.set(u, function(e) {}), "undefined" != typeof chrome && null !== chrome && null != (l = chrome.webRequest) ? l.onAuthRequired.addListener(r, {
                urls: ["<all_urls>"]
            }, ["asyncBlocking"]) : void 0
        }, t.disconnect = function() {
            var e;
            return chrome.proxy.settings.set({
                value: {
                    mode: "direct"
                },
                scope: "regular"
            }, function(e) {}), "undefined" != typeof chrome && null !== chrome && null != (e = chrome.webRequest) ? e.onAuthRequired.removeListener(r) : void 0
        }, s = {
            signedout: {
                38: a("icons/standard-38.png"),
                19: a("icons/standard-19.png")
            },
            enabled: {
                38: a("icons/enabled-38.png"),
                19: a("icons/enabled-19.png")
            },
            disabled: {
                38: a("icons/disabled-38.png"),
                19: a("icons/disabled-19.png")
            }
        }, t.setIconImage = function(e, n) {
            var t;
            return t = {
                path: s[e.toLowerCase()]
            }, null != n && (t.tabId = n), chrome.browserAction.setIcon(t)
        }, t.setIconTitle = function(e, n) {
            var t;
            return t = {
                title: "ZenMate"
            }, null != e && (t.title = t.title + "\n" + e), chrome.browserAction.setTitle(t)
        }, t.setIconBadge = function(e, n, t) {
            return null == t && (t = "#008ace"), chrome.browserAction.setBadgeBackgroundColor({
                color: t
            }), chrome.browserAction.setBadgeText({
                text: e || "",
                tabId: n
            })
        }, t.onUnload = null, t.notify = function(e) {
            var n, t;
            return t = e.chrome.newsItem, n = e.chrome.data, t.iconUrl = a("images/notification_chrome@2x.png"), t.eventTime = Date.now(), t.isClickable = null != n.url, chrome.notifications.create(JSON.stringify(e), t, function(e) {}), null != n.url ? chrome.notifications.onClicked.addListener(function(e) {
                return c(n.url, !1)
            }) : void 0
        }, t.getInstallSource = function(e) {
            var n, t, o;
            o = [{
                name: "website",
                pattern: "*://zenmate.com/*",
                host: "zenmate.com/"
            }, {
                name: "chromestore",
                pattern: "*://chrome.google.com/webstore/detail/*/" + chrome.runtime.id + "*",
                host: "chrome.google.com/"
            }, {
                name: "operastore",
                pattern: "*://addons.opera.com/*/extensions/details/zenmate-for-operatm/",
                host: "addons.opera.com/"
            }];
            try {
                return chrome.tabs.query({
                    url: o.map(function(e) {
                        return e.pattern
                    })
                }, function(n) {
                    var t, r, i, a, s, u, l;
                    for (t = 0, i = n.length; i > t; t++)
                        for (u = n[t], l = y.getUTMSourcesFromURL(u.url), r = 0, a = o.length; a > r; r++)
                            if (s = o[r], u.url.indexOf(s.host) > -1) return e("url=" + s.name + ";" + l);
                    return e("unknown")
                })
            } catch (t) {
                return n = t, u.error(n), e("unknown")
            }
        }, t.fullReset = function() {}, t.getLocale = function() {
            return navigator.language.toString().toLowerCase().split("-")[0] || "en"
        }, t.getName = function() {
            return h.browser.name
        }, t.getVersion = function() {
            return chrome.runtime.getManifest().version
        }, t.unblockProxySettings = function() {
            return null
        }
    }, {
        "../config": 15,
        "../pacengine": 33,
        "../util": 45,
        "./auth": 6,
        "./page_api": 10,
        "./storage": 11,
        loglevel: 1,
        "ua-parser-js": 2,
        xhr: 14
    }],
    9: [function(e, n, t) {
        var o, r, i, a = function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var o in n) s.call(n, o) && (e[o] = n[o]);
                return t.prototype = n.prototype, e.prototype = new t, e.__super__ = n.prototype, e
            },
            s = {}.hasOwnProperty;
        o = e("../emitter"), i = e("loglevel"), r = function(e) {
            function n(e) {
                this.name = e, n.__super__.constructor.call(this), this.port = null, chrome.runtime.onConnect.addListener(function(e) {
                    return function(n) {
                        var t, o, r, i, a;
                        return n.name === e.name ? ((null != (t = e.port) && null != (o = t.sender) && null != (r = o.tab) ? r.id : void 0) && e.port.sender.tab.id !== (null != n && null != (i = n.sender) && null != (a = i.tab) ? a.id : void 0) && chrome.tabs.remove(e.port.sender.tab.id), e.port = n, e.port.onMessage.addListener(function(n) {
                            return e.trigger(n.subject, n.payload)
                        }), e.port.onDisconnect.addListener(function(e) {})) : void 0
                    }
                }(this))
            }
            return a(n, e), n.prototype.send = function(e, n) {
                var t, o, r;
                try {
                    return null != (r = this.port) ? r.postMessage({
                        subject: e,
                        payload: n
                    }) : void 0
                } catch (o) {
                    return void(t = o)
                }
            }, n
        }(o), n.exports = r
    }, {
        "../emitter": 21,
        loglevel: 1
    }],
    10: [function(e, n, t) {
        var o, r, i, a = function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var o in n) s.call(n, o) && (e[o] = n[o]);
                return t.prototype = n.prototype, e.prototype = new t, e.__super__ = n.prototype, e
            },
            s = {}.hasOwnProperty;
        o = e("../emitter"), i = e("loglevel"), r = function(e) {
            function n() {
                n.__super__.constructor.call(this), chrome.runtime.onMessage.addListener(function(e) {
                    return function(n, t) {
                        return null == n.payload && (n.payload = {}), n.payload._sender = t, e.trigger(n.subject, n.payload)
                    }
                }(this))
            }
            return a(n, e), n.prototype.send = function(e, n, t) {
                return chrome.tabs.sendMessage(n.tab.id, {
                    subject: e,
                    payload: t
                })
            }, n
        }(o), n.exports = new r
    }, {
        "../emitter": 21,
        loglevel: 1
    }],
    11: [function(e, n, t) {
        t.read = function(e, n) {
            return null == n && (n = !0), new Promise(function(t, o) {
                return chrome.storage.local.get(e, function(r) {
                    return null != r[e] ? t(r[e]) : n ? o(Error("Element " + e + " not found")) : t()
                })
            })
        }, t.write = function(e, n) {
            return new Promise(function(t, o) {
                var r;
                return r = {}, r[e] = n, chrome.storage.local.set(r, function() {
                    return t()
                })
            })
        }, t["delete"] = function(e) {
            return new Promise(function(n, t) {
                return chrome.storage.local.remove(e, n)
            })
        }
    }, {}],
    12: [function(e, n, t) {
        (function(n) {
            var o, r, i, a;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, a = e("../util"), i = e("loglevel"), t.tabInfo = r = o.fromBinder(function(e) {
                return chrome.tabs.query({
                    active: !0
                }, function(n) {
                    return (null != n ? n.length : void 0) ? e(n[0]) : void 0
                }), chrome.tabs.onActivated.addListener(function(n) {
                    return chrome.tabs.get(n.tabId, function(n) {
                        return e(n)
                    })
                }), chrome.tabs.onUpdated.addListener(function(n, t, o) {
                    return "complete" !== t.status && null != o ? e(o) : void 0
                })
            }).diff(null, function(e, n) {
                var t;
                return t = 0 === n.url.indexOf("chrome-devtools://devtools"), null != n && null != e && t ? void 0 : n
            }).filter(function(e) {
                return e
            }).map(function(e) {
                var n;
                return n = a.parseURL(e.url), e.host = n.host, e.favIconUrl = e.favIconUrl || "chrome://favicon/" + e.url, e
            }).toProperty()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../util": 45,
        loglevel: 1
    }],
    13: [function(e, n, t) {
        var o, r, i, a = function(e, n) {
                function t() {
                    this.constructor = e
                }
                for (var o in n) s.call(n, o) && (e[o] = n[o]);
                return t.prototype = n.prototype, e.prototype = new t, e.__super__ = n.prototype, e
            },
            s = {}.hasOwnProperty;
        o = e("../emitter"), i = chrome.extension.getURL(""), r = function(e) {
            function n() {
                n.__super__.constructor.call(this), this.active = !1, this.showMessage = !0, this.messages = null, chrome.runtime.onMessage.addListener(function(e) {
                    return function(n, t) {
                        return "getWidgetStatus" === n.subject && chrome.tabs.sendMessage(t.tab.id, {
                            subject: "widgetStatus",
                            payload: {
                                active: e.active,
                                extUrl: i
                            }
                        }), "getWidgetMessage" === n.subject && chrome.tabs.sendMessage(t.tab.id, {
                            subject: "widgetMessage",
                            payload: {
                                show: e.showMessage,
                                extUrl: i,
                                messages: e.messages
                            }
                        }), "dismiss" !== n.subject && "hideMessage" !== n.subject || e.trigger(n.subject, t), "getPremium" === n.subject ? e.trigger(n.subject, n.payload) : void 0
                    }
                }(this))
            }
            return a(n, e), n.prototype.toggle = function(e) {
                return e !== this.active && chrome.tabs.query({}, function(n) {
                    var t, o, r, a;
                    for (r = [], t = 0, o = n.length; o > t; t++) a = n[t], r.push(chrome.tabs.sendMessage(a.id, {
                        subject: "widgetStatus",
                        payload: {
                            active: e,
                            extUrl: i
                        }
                    }));
                    return r
                }), this.active = e
            }, n.prototype.toggleMessage = function(e, n) {
                return this.messages = n, this.showMessage = e, chrome.tabs.query({}, function(t) {
                    var o, r, a, s;
                    for (a = [], o = 0, r = t.length; r > o; o++) s = t[o], a.push(chrome.tabs.sendMessage(s.id, {
                        subject: "widgetMessage",
                        payload: {
                            show: e,
                            extUrl: i,
                            messages: n
                        }
                    }));
                    return a
                })
            }, n
        }(o), n.exports = new r
    }, {
        "../emitter": 21
    }],
    14: [function(e, n, t) {
        var o, r, i;
        o = e("ua-parser-js"), i = e("storage"), r = function() {
            return Promise.all([i.read("install_id", !1), i.read("install_source", !1), i.read("enabled", !1), i.read("default_location", !1), i.read("user", !1), i.read("device", !1)]).then(function(e) {
                var n, t, r, i, a, s, u, l;
                return i = e[0], a = e[1], r = e[2], n = e[3], l = e[4], t = e[5], u = new o(navigator.userAgent).getResult(), {
                    real_location: null != l ? l.country_code : void 0,
                    uuid: null != t ? t.uuid : void 0,
                    platform_name: "extension",
                    client_name: u.browser.name,
                    user_agent_string: u.ua,
                    client_env: u.ua,
                    isPremium: null != l ? l.is_premium : void 0,
                    isVerified: null != l ? l.is_verified : void 0,
                    isAnonymous: null != l ? l.is_anonymous : void 0,
                    zm_connected: r,
                    selected_location: n,
                    sku: null != l && null != (s = l.subscription) ? s.sku : void 0,
                    install_source: a,
                    install_id: i,
                    os_name: u.os.name,
                    os_ver: u.os.version,
                    client_ver: chrome.runtime.getManifest().version,
                    app_ver: chrome.runtime.getManifest().version,
                    locations_scope: "full",
                    show_premium: !0
                }
            })
        }, t.request = function(e) {
            return r().then(function(n) {
                var t, o, r, i;
                o = {};
                for (t in n) i = n[t], null != i && (o[t] = i);
                r = e.data;
                for (t in r) i = r[t], o[t] = i;
                return new Promise(function(n, t) {
                    var r, i, a, s, u, l, c, d;
                    if (c = new XMLHttpRequest, u = e.method || "GET", r = "", "GET" === u.toUpperCase() && e.data && (i = function() {
                            var e;
                            e = [];
                            for (s in o) d = o[s], e.push(encodeURIComponent(s) + "=" + encodeURIComponent(d));
                            return e
                        }(), r = "?" + i.join("&")), c.open(u, e.url + r), c.responseType = e.responseType || "", a = null, ("POST" === (l = u.toUpperCase()) || "PUT" === l) && e.data) {
                        a = new FormData;
                        for (s in o) d = o[s], a.append(s, d)
                    }
                    return c.onload = function() {
                        var e;
                        return c.status >= 200 && c.status < 400 ? n(c.response) : (e = Error("Error"), e.type = "onload", e.payload = c.response, e.status = c.status, t(e))
                    }, c.onerror = function() {
                        var e;
                        return e = Error("Network Error"), e.type = "onerror", t(e)
                    }, c.ontimeout = function() {
                        var e;
                        return e = Error("Request timeout"), e.type = "ontimeout", t(e)
                    }, c.send(a)
                })
            })
        }
    }, {
        storage: 11,
        "ua-parser-js": 2
    }],
    15: [function(e, n, t) {
        var o, r;
        r = e("loglevel"), o = {
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
        }, o.setLogLevel = function(e) {
            return null != e ? (o.logLevel = e, r.setLevel(o.logLevel), console.info("logLevel:", o.logLevel)) : void 0
        }, o.setApiURL = function(e) {
            return null != e ? (o.apiURL = e, console.info("api:", o.apiURL)) : void 0
        }, o.setLogLevel("silent"), "undefined" != typeof window && null !== window && (window.config = o), n.exports = o
    }, {
        loglevel: 1
    }],
    16: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l, c, d, f, p, m, g, w;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, r = e("browser"), c = e("./logged_in"), s = e("./enabled"), p = e("./rules"), m = p.rules, g = p.rulesEnabled, f = e("blocked").proxyBlocked, u = e("./locations"), a = e("./default_location"), l = e("loglevel"), d = e("./page_excludes"), n.exports = i = o.combineAsArray(c.and(f.not()).skipDuplicates(), s, a, u, m, g, d).onValues(function(e, n, t, o, i, a, s) {
                var u;
                return e ? (u = a && i.length > 0, null != t.nodes && w(t.nodes), u && !n && (t = {
                    country_code: "DEFAULT"
                }), u || (i = []), n || u ? r.connect(t, o, i, s) : r.disconnect()) : r.disconnect()
            }), w = function(e) {
                var n, t, o;
                for (n = e.length, o = null, t = null; 0 !== n;) t = Math.floor(Math.random() * n), n--, o = e[n], e[n] = e[t], e[t] = o;
                return e
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./default_location": 20,
        "./enabled": 22,
        "./locations": 29,
        "./logged_in": 30,
        "./page_excludes": 35,
        "./rules": 39,
        blocked: 7,
        browser: 8,
        loglevel: 1
    }],
    17: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, i = e("./config"), r = e("browser"), l = e("./account").user, s = e("./language").language, u = e("xhr").request, a = function(e) {
                return e ? "premium" : "free"
            }, n.exports = o.once().merge(o.interval(54e5)).flatMapLatest(function() {
                return o.combineAsArray(l, s)
            }).debounceImmediate(2e3).flatMapLatest(function(e) {
                var n, t, s;
                return s = e[0], n = e[1], o.fromPromise(u({
                    url: "" + i.newsServiceUrl,
                    responseType: "json",
                    data: {
                        locale: n,
                        country_code: null != s ? s.country_code : void 0,
                        platform: null != (t = r.getName()) ? t.toLowerCase() : void 0,
                        version: r.getVersion(),
                        account_type: a(null != s ? s.is_premium : void 0)
                    }
                })).map(function(e) {
                    return e ? e : null
                })
            }).skipErrors()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./config": 15,
        "./language": 28,
        browser: 8,
        xhr: 14
    }],
    18: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, u = e("./tab_state").tabState, a = e("./locations"), i = e("./default_location"), s = e("./rules").rulesEnabled, n.exports = r = o.combineTemplate({
                tabState: u,
                rulesEnabled: s,
                defaultLocation: i,
                locations: a
            }).map(function(e) {
                var n, t, o, r, i;
                return i = e.tabState, r = e.rulesEnabled, n = e.defaultLocation, o = e.locations, r && i.isRuleActive ? i.isDirect ? {
                    country_code: "OFF",
                    location: "ZenMate Off"
                } : function() {
                    var e, n, r;
                    for (r = [], e = 0, n = o.length; n > e; e++) t = o[e], t.country_code === i.customCountry && r.push(t);
                    return r
                }()[0] || n : n
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./default_location": 20,
        "./locations": 29,
        "./rules": 39,
        "./tab_state": 41
    }],
    19: [function(e, n, t) {
        (function(e) {}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./config": 15,
        "./popup": 36,
        browser: 8,
        loglevel: 1,
        message_handler: 9,
        storage: 11
    }],
    20: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, s = e("storage"), a = e("./popup").popup, i = e("./locations"), u = e("./account").user, n.exports = r = o.fromPromise(s.read("default_location")).mapError(function() {
                return "not_a_cc"
            }).merge(o.fromEvent(a, "request:changeLocation")).skipDuplicates().combine(o.combineAsArray(i, u), function(e, n) {
                var t, o, r, i, a, s, u, l, c;
                if (s = n[0], c = n[1], null == s) return null;
                for (t = 0, r = s.length; r > t; t++)
                    if (a = s[t], a.country_code === e && (null != (u = a.nodes) ? u.length : void 0) && (!a.premium_only || c.is_premium)) return a;
                for (o = 0, i = s.length; i > o; o++)
                    if (a = s[o], (null != (l = a.nodes) ? l.length : void 0) && (!a.premium_only || c.is_premium)) return a
            }).filter(function(e) {
                return e
            }).toProperty(), r.onValue(function(e) {
                return s.write("default_location", e.country_code)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./locations": 29,
        "./popup": 36,
        storage: 11
    }],
    21: [function(e, n, t) {
        var o;
        o = function() {
            function e() {
                this.listeners = {}
            }
            return e.prototype.off = function(e, n) {
                var t;
                return this.listeners[e] = null != (t = this.listeners[e]) ? t.filter(function(e) {
                    return e !== n
                }) : void 0
            }, e.prototype.on = function(e, n) {
                return this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(n)
            }, e.prototype.trigger = function(e, n) {
                var t, o, r, i, a;
                if (this.listeners[e]) {
                    for (i = this.listeners[e], a = [], t = 0, o = i.length; o > t; t++) r = i[t], a.push(r(n));
                    return a
                }
            }, e
        }(), n.exports = o
    }, {}],
    22: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, l = e("storage"), u = e("./popup").popup, r = e("./default_location"), a = e("./logged_in"), s = e("page_api"), n.exports = i = o.fromPromise(l.read("enabled")).mapError(function() {
                return !0
            }).merge(o.fromEvent(s, "toggle")).merge(o.fromEvent(u, "request:toggleProxy")).merge(a.skip(1).changes().map(function() {
                return !0
            })).skipDuplicates().toProperty(), i.onValue(function(e) {
                return e === !0 ? l.write("enabled_start", Date.now()) : l.read("enabled_start", !1).then(function(e) {
                    return e ? (l.write("enabled_for", (Date.now() - e) / 1e3), l["delete"]("enabled_start")) : void 0
                }), l.write("enabled", e)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./default_location": 20,
        "./logged_in": 30,
        "./popup": 36,
        page_api: 10,
        storage: 11
    }],
    23: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l, c, d;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, l = e("storage"), u = e("./popup").popup, r = e("auth"), d = e("./account").user, a = {
                malwareBlocking: "m",
                trackingProtection: "t"
            }, s = o.fromEvent(u, "request:toggleMalware"), c = o.fromEvent(u, "request:toggleTracking"), n.exports = i = o.fromPromise(l.read("features")).mapError(function() {
                return {}
            }).flatMap(function(e) {
                return o.combineTemplate({
                    malwareBlocking: s.startWith(e.malwareBlocking || !1),
                    trackingProtection: c.startWith(e.trackingProtection || !1)
                }).combine(d, function(e, n) {
                    return (null != n ? n.is_premium : void 0) ? e : {}
                })
            }), i.onValue(function(e) {
                var n, t, o;
                n = "";
                for (t in e) o = e[t], o && (n += a[t]);
                return r.setFeatureFlags(n), l.write("features", e)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./popup": 36,
        auth: 6,
        storage: 11
    }],
    24: [function(e, n, t) {
        (function(n) {
            var o, r, i, a, s, u, l, c, d, f, p, m, g, w;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, r = e("browser"), p = e("tab_info").tabInfo, g = e("./tab_state").tabState, s = e("./logged_in"), a = e("./enabled"), i = e("./current_location"), f = e("./rules").rulesEnabled, d = e("blocked").proxyBlocked, u = e("./language").messages, w = e("./account").user, c = e("./promo"), l = e("./news"), m = e("./tab_spawns"), t.iconImage = o.combineAsArray(s, a.and(d.not()), g, f).onValues(function(e, n, t, o) {
                return o && t.isRuleActive && t.isDirect ? r.setIconImage("disabled") : e ? n || o && t.isRuleActive ? r.setIconImage("enabled") : r.setIconImage("disabled") : r.setIconImage("signedOut")
            }), t.iconTitle = o.combineAsArray(s, a.and(d.not()), p, g, i, f, u).onValues(function(e, n, t, o, i, a, s) {
                return a && o.isRuleActive ? r.setIconTitle(s.icon_hover.connected.replace("{host}", t.host).replace("{country}", i.country_name)) : a && o.isRuleActive && o.isDirect ? r.setIconTitle(s.icon_hover.disabled_smart) : e ? n ? o.isLocal ? r.setIconTitle(s.icon_hover.local) : r.setIconTitle(s.icon_hover.connected.replace("{host}", t.host).replace("{country}", i.country_name)) : r.setIconTitle(s.icon_hover.disabled) : r.setIconTitle(s.icon_hover.signed_out)
            }), t.iconBadge = o.combineAsArray(p, g, i, f, w, c, l, m).onValues(function(e, n, t, o, i, a, s, u) {
                return o && n.isRuleActive ? r.setIconBadge(t.country_code.toLowerCase(), e.id) : r.setIconBadge("", e.id), o && n.isRuleActive && n.isDirect && r.setIconBadge("off", e.id), a && a.badge && r.setIconBadge(a.badge, e.id, a.color), s && s.isNew && s.showBadge || u ? r.setIconBadge("1", e.id, "#CC3333") : void 0
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./current_location": 18,
        "./enabled": 22,
        "./language": 28,
        "./logged_in": 30,
        "./news": 31,
        "./promo": 37,
        "./rules": 39,
        "./tab_spawns": 40,
        "./tab_state": 41,
        blocked: 7,
        browser: 8,
        tab_info: 12
    }],
    25: [function(e, n, t) {
        (function(n) {
            var o, r, i, a, s, u, l, c, d, f, p, m, g, w, v, h, y, b, _, x, E, L, P, k, A, B, T, I, R;
            e("./bacon.ext"), i = e("./config"), m = e("loglevel"), o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, e("./debug_overrides"), e("./install_source"), e("./logged_in"), e("./registration"), e("./page"), e("./notifications"), e("./tab_spawns"), e("./icon_state"), e("./connect"), e("./widget"), r = e("browser"), A = e("storage"), f = e("./language").language, B = e("tab_info").tabInfo, T = e("./tab_state").tabState, h = e("./popup").popup, w = e("./page").page, c = e("./enabled"), v = e("page_api"), x = e("./account"), R = x.user, l = x.device, p = e("./locations"), y = e("./promo"), u = e("./default_location"), a = e("./current_location"), g = e("./news"), d = e("./features"), E = e("./rules"), P = E.rules, k = E.rulesEnabled, I = e("./url"), L = e("blocked"), b = L.proxyBlocked, _ = L.proxyBlockedBy, s = o.combineTemplate({
                user: R,
                device: l,
                promo: y,
                news: g,
                language: f,
                features: d,
                tabInfo: B,
                tabState: T,
                locations: p,
                currentLocation: a,
                defaultLocation: u,
                enabled: c,
                rules: P,
                rulesEnabled: k,
                proxyBlocked: b,
                proxyBlockedBy: _
            }), s.onValue(function(e) {
                return window.popupData = e
            }), s.triggeredBy(o.fromEvent(h, "request:data")).onValue(function(e) {
                return h.send("response:data", e)
            }), o.fromEventTarget(w, "request:data").flatMapLatest(function() {
                return o.combineAsArray(R.startWith(null), l.startWith(null))
            }).onValue(function(e) {
                var n, t;
                return t = e[0], n = e[1], w.send("response:data", {
                    user: t,
                    device: n
                })
            }), o.fromEvent(v, "request:getData").flatMapLatest(function(e) {
                return o.combineAsArray(e, R, l).take(1)
            }).onValues(function(e, n, t) {
                return v.send("response:getData", e._sender, {
                    timestamp: e.timestamp,
                    user: n,
                    device: t
                })
            }), o.fromEventTarget(h, "request:openPage").merge(o.fromEventTarget(w, "request:openPage")).map(function(e) {
                return I.formatUrlParams(e)
            }).onValue(r.openPage), o.fromEventTarget(h, "request:unblockProxySettings").onValue(function() {
                return r.unblockProxySettings()
            }), t.onUnload = r.onUnload
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./bacon.ext": 5,
        "./config": 15,
        "./connect": 16,
        "./current_location": 18,
        "./debug_overrides": 19,
        "./default_location": 20,
        "./enabled": 22,
        "./features": 23,
        "./icon_state": 24,
        "./install_source": 27,
        "./language": 28,
        "./locations": 29,
        "./logged_in": 30,
        "./news": 31,
        "./notifications": 32,
        "./page": 34,
        "./popup": 36,
        "./promo": 37,
        "./registration": 38,
        "./rules": 39,
        "./tab_spawns": 40,
        "./tab_state": 41,
        "./url": 44,
        "./widget": 46,
        blocked: 7,
        browser: 8,
        loglevel: 1,
        page_api: 10,
        storage: 11,
        tab_info: 12
    }],
    26: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, s = e("storage"), u = e("./util"), r = e("./config"), a = e("xhr").request, n.exports = i = o.fromPromise(s.read("install_id")).mapError(function() {
                var e;
                return e = u.generateInstallId(), a({
                    method: "GET",
                    url: r.apiURL + "/v2/et/install/download",
                    data: {
                        install_id: e
                    }
                }), e
            }).toProperty(), i.onValue(function(e) {
                return s.write("install_id", e)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./config": 15,
        "./util": 45,
        storage: 11,
        xhr: 14
    }],
    27: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, s = e("storage"), r = e("browser"), u = e("./util"), a = e("loglevel"), n.exports = i = o.fromPromise(s.read("install_source")).flatMapError(function(e) {
                return o.fromCallback(function(e) {
                    return r.getInstallSource(e)
                })
            }).toProperty(), i.onValue(function(e) {
                return s.write("install_source", e)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./util": 45,
        browser: 8,
        loglevel: 1,
        storage: 11
    }],
    28: [function(e, n, t) {
        (function(o) {
            var r, i, a, s, u, l, c;
            r = "undefined" != typeof window ? window.Bacon : "undefined" != typeof o ? o.Bacon : null, i = e("browser"), c = e("storage"), l = e("./popup").popup, u = e("./page").page, s = "undefined" != typeof window ? window.locales : "undefined" != typeof o ? o.locales : null, t.language = a = r.fromPromise(c.read("language")).mapError(function() {
                return i.getLocale()
            }).merge(r.fromEvent(l, "request:changeLanguage")).merge(r.fromEvent(u, "request:changeLanguage")).skipDuplicates().toProperty(), n.exports.messages = a.map(function(e) {
                return s.getLocalization(e).messages
            }), a.onValue(function(e) {
                return c.write("language", e)
            }), r.fromEvent(u, "request:language").flatMapLatest(function() {
                return a
            }).onValue(function(e) {
                return u.send("response:language", e)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./page": 34,
        "./popup": 36,
        browser: 8,
        storage: 11
    }],
    29: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l, c, d, f, p, m, g, w, v;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, i = e("./config"), w = e("storage"), d = e("./registration"), g = d.signUp, p = d.signIn, m = d.signOut, l = e("./page").page, c = e("./popup").popup, f = e("xhr").request, r = e("./api_request"), v = e("./update"), u = e("./features"), a = o.fromPromise(w.read("custom_locations")).mapError(function() {
                return []
            }).concat(o.fromEvent(c, "request:addCustomLocation").map(function(e) {
                return [e]
            })).filter(function(e) {
                return e
            }).scan([], ".concat"), a.onValue(function(e) {
                return w.write("custom_locations", e)
            }), s = o.fromPromise(w.read("default_locations")).skipErrors().merge(g.merge(p).merge(v).map(function(e) {
                var n;
                return n = e.locations
            })).filter(function(e) {
                return null != e ? e.length : void 0
            }).map(function(e) {
                return e.filter(function(e) {
                    return e.proxy_available
                })
            }).merge(m.map(function() {
                return null
            })).toProperty(), s.onValue(function(e) {
                return null != e ? w.write("default_locations", e) : w["delete"]("default_locations")
            }), n.exports = s
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./api_request": 4,
        "./config": 15,
        "./features": 23,
        "./page": 34,
        "./popup": 36,
        "./registration": 38,
        "./update": 43,
        storage: 11,
        xhr: 14
    }],
    30: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, r = e("browser"), a = e("./registration"), l = a.signUp, s = a.signIn, u = a.signOut, n.exports = i = o.fromPromise(r.setup()).merge(l.map(function() {
                return !0
            })).merge(s.map(function() {
                return !0
            })).merge(u.map(function() {
                return !1
            })).skipDuplicates().toProperty(), i.onValue(function(e) {
                return e ? r.setIconAction("popup") : (r.setIconAction("page"), r.openPage(r.getExtensionURL("page.html"), !0))
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./registration": 38,
        browser: 8
    }],
    31: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l, c, d, f = [].indexOf || function(e) {
                for (var n = 0, t = this.length; t > n; n++)
                    if (n in this && this[n] === e) return n;
                return -1
            };
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, d = e("storage"), s = e("./popup").popup, r = e("./crm"), c = e("./trial_end_promo").showTrialEndNews, u = o.fromEvent(s, "request:popupOpen"), i = r.map(function(e) {
                return null != e ? e.news : void 0
            }).toProperty(null), a = o.mergeAll(c, i).filter(function(e) {
                return e
            }).toProperty(null), l = o.fromPromise(d.read("previous_news")).mapError(function() {
                return []
            }).flatMapLatest(function(e) {
                return o.fromEvent(s, "request:popupOpen").flatMapLatest(a.take(1)).scan(e, function(e, n) {
                    var t;
                    return !n || (t = n.id, f.call(e, t) >= 0) || e.push(n.id), e
                })
            }).toProperty(), l.onValue(function(e) {
                return d.write("previous_news", e)
            }), n.exports = a.combine(l, function(e, n) {
                var t;
                return !e || (t = e.id, f.call(n, t) >= 0) ? null != e && (e.isNew = !1) : e.isNew = !0, e
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./crm": 17,
        "./popup": 36,
        "./trial_end_promo": 42,
        storage: 11
    }],
    32: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l = [].indexOf || function(e) {
                for (var n = 0, t = this.length; t > n; n++)
                    if (n in this && this[n] === e) return n;
                return -1
            };
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, u = e("storage"), r = e("browser"), s = e("./popup").popup, i = e("./crm"), n.exports = a = i.map(function(e) {
                return null != e ? e.notification : void 0
            }).flatMapLatest(function(e) {
                return o.combineAsArray(e, o.fromPromise(u.read("notifications")).mapError([]))
            }).toProperty(), a.onValues(function(e, n) {
                var t, o, i;
                return (null != e ? !e.id : !0) || (i = e.id, l.call(n, i) >= 0) ? void 0 : (t = {
                    type: "basic",
                    title: e.title,
                    message: e.text
                }, o = {
                    title: e.title,
                    text: e.text,
                    data: {
                        url: e.url
                    }
                }, r.notify({
                    chrome: {
                        newsItem: t,
                        data: {
                            url: e.url
                        }
                    },
                    firefox: o
                }), u.write("notifications", n.concat(e.id)))
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./crm": 17,
        "./popup": 36,
        browser: 8,
        storage: 11
    }],
    33: [function(e, n, t) {
        var o, r, i, a, s, u, l, c, d = {}.hasOwnProperty;
        o = e("./config"), c = e("./util"), a = e("loglevel"), r = {
            localDomains: o.localDomains,
            nodeOverrides: o.nodeOverrides,
            IPv4NotationRE: /^\d+\.\d+\.\d+\.\d+$/g,
            localIPsRE: /(^127\.)|(^192\.168\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)/
        }, i = {
            data: r,
            nodeLookup: function(e, n) {
                return e[n] || !1
            },
            compareHosts: function(e, n) {
                var t, o, r;
                for (o = 0, r = e.length; r > o; o++)
                    if (t = e[o], this.matchWildcardDomain(n, t)) return t
            },
            compareURLs: function(e, n) {
                var t, o, r;
                for (t = 0, o = e.length; o > t; t++)
                    if (r = e[t], r.test(n)) return r
            },
            dnsDomainIs: function(e, n) {
                return e.length >= n.length && e.substring(e.length - n.length) === n
            },
            matchWildcardDomain: function(e, n) {
                var t, o, r;
                return t = e === n, r = e.slice(-n.length) === n, o = "." === e[e.lastIndexOf(n) - 1], t || r && o
            },
            matchNodeOverride: function(e, n) {
                var t, o, r;
                return r = function() {
                    var o, r, i, a;
                    for (i = this.data.nodeOverrides, a = [], o = 0, r = i.length; r > o; o++) t = i[o], t.target_cc === n && this.compareHosts(t.hosts, e) && a.push(t);
                    return a
                }.call(this), (null != r && null != (o = r[0]) ? o.nodes : void 0) || !1
            },
            matchRules: function(e, n, t) {
                var r, i, a, u;
                if ((null != e ? e.length : void 0) > 0)
                    for (null == this.data.rulesWithOverrides && (e = s(e, o.ruleOverrides)), r = i = 0, a = e.length; a > i; r = ++i)
                        if (u = e[r], this.matchWildcardDomain(n, u.domain) || null != u.hosts && this.compareHosts(u.hosts, n)) return r
            },
            _getProxyState: function(e, n, t) {
                var o, r, i, a, s;
                if (e = e.toLowerCase(), this.data.IPv4NotationRE.lastIndex = 0, this.data.localIPsRE.lastIndex = 0, !~n.indexOf(".") && !~n.indexOf(":")) return "LOCAL";
                if (this.data.IPv4NotationRE.test(n) && this.data.localIPsRE.test(n)) return "LOCAL";
                for (s = this.data.localDomains, o = 0, r = s.length; r > o; o++)
                    if (i = s[o], this.matchWildcardDomain(n, i)) return "LOCAL";
                return a = this.matchRules(t, n, e), null != a ? t[a].cc : "DEFAULT"
            }
        }, l = function(e) {
            var n, t, o;
            null == e && (e = i), t = [];
            for (n in e)
                if (d.call(e, n)) switch (o = e[n], typeof e[n]) {
                    case "function":
                        t.push(n + ": " + o.toString());
                        break;
                    case "object":
                        t.push(n + ": " + JSON.stringify(e[n]))
                }
                return "{ " + t.join(",") + " }"
        }, s = function(e, n) {
            var t, o, r, i, a, s;
            if (!((null != e ? e.length : void 0) > 0)) return [];
            if (!((null != n ? n.length : void 0) > 0)) return e;
            for (t = 0, r = e.length; r > t; t++)
                for (s = e[t], o = 0, i = n.length; i > o; o++) a = n[o], a.domains.indexOf(s.domain) > -1 && (s.hosts = c.concatUnique(s.hosts || [], a.hosts || []));
            return e
        }, u = "e.data.IPv4NotationRE = " + r.IPv4NotationRE.toString() + ";\ne.data.localIPsRE = " + r.localIPsRE.toString() + ";", t.exportPAC = function(e, n, t, r) {
            var i;
            return null == t && (t = []), null == r && (r = []), i = "/*ZenMate*/\nfunction FindProxyForURL(url, host) {\n\n  var e = " + l() + ";\n  e.data.localDomains = e.data.localDomains.concat(" + JSON.stringify(r) + ");\n  " + u + "\n\n  e.data.defaultLocation = '" + e + "';\n  e.data.nodeDict = " + JSON.stringify(n) + ";\n  e.data.rulesWithOverrides = " + JSON.stringify(s(t, o.ruleOverrides)) + ";\n\n  var res = e._getProxyState(url, host, e.data.rulesWithOverrides);\n\n  if (res === 'LOCAL' || res === 'DIRECT' || res === 'OFF') {return 'DIRECT'};\n  if (res === 'DEFAULT') {cc = e.data.defaultLocation} else {cc = res};\n\n  var override = e.matchNodeOverride(host, cc);\n  if (override) {cc = override};\n\n  return e.nodeLookup(e.data.nodeDict, cc) || 'DIRECT';\n}"
        }, t.getProxyStateByURL = function(e, n, t) {
            return null == t && (t = []), n = n || c.parseURL(e).host || e, i._getProxyState(e, n, t)
        }, t.getNodeDictFromLocations = function(e, n, t) {
            var r, i, a, s, u;
            for (e = e.concat(o.alternativeNodes), s = {}, r = 0, i = e.length; i > r; r++) a = e[r], u = a.nodes.slice(0, 15).map(function(e) {
                var n;
                return n = e.replace("node.zenmate.io", "zenguard.org").replace("node.zenguard.co", "zenguard.co"), t ? n : "HTTPS " + n + ":443"
            }), s[a.country_code] = u.join(";");
            return s
        }, t.matchRules = function(e, n, t) {
            return i.matchRules(e, n, t)
        }
    }, {
        "./config": 15,
        "./util": 45,
        loglevel: 1
    }],
    34: [function(e, n, t) {
        (function(n) {
            var o, r, i, a;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, r = e("message_handler"), i = e("browser"), t.page = a = new r("page"), o.fromEventTarget(a, "request:closePage").onValue(function() {
                return i.closePage(i.getExtensionURL("page.html"))
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        browser: 8,
        message_handler: 9
    }],
    35: [function(e, n, t) {
        (function(t) {
            var o, r, i;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, i = e("page_api"), r = ["zenmate.com", "d1jr1idae5ms9n.cloudfront.net"], n.exports = o.interval(18e5, r).merge(o.fromEvent(i, "setPageExcludes").map(function(e) {
                return r.concat(e)
            })).toProperty(r)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        page_api: 10
    }],
    36: [function(e, n, t) {
        var o, r;
        o = e("message_handler"), t.popup = r = new o("popup")
    }, {
        message_handler: 9
    }],
    37: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, u = e("storage"), l = e("./account").user, i = e("./popup").popup, r = e("./util").parseDate, a = o.fromPromise(u.read("premium_expires_at")).flatMapError(function() {
                return l.map(function(e) {
                    return (null != e ? e.premium_expires_at : void 0) || null
                })
            }).merge(o.fromEvent(i, "request:hide-trialExpired").map(!1)).toProperty(), a.onValue(function(e) {
                return null != e ? u.write("premium_expires_at", e) : void 0
            }), s = a.combine(l, function(e, n) {
                var t, o;
                return e ? (null != n ? n.is_premium : void 0) ? !1 : (t = new Date, t.setDate(t.getDate() - 14), t < (o = r(e)) && o < Date.now()) : !1
            }), n.exports = s.map(function(e) {
                return e ? {
                    view: "trialExpired",
                    badge: "!",
                    color: "#CC3333"
                } : null
            }).toProperty()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./popup": 36,
        "./util": 45,
        storage: 11
    }],
    38: [function(e, n, t) {
        (function(n) {
            var o, r, i, a, s, u, l, c, d, f, p, m, g, w, v, h, y, b;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, p = e("xhr").request, b = e("./util"), i = e("./config"), c = e("./page").page, f = e("./popup").popup, s = e("./install_source"), l = e("loglevel"), r = e("browser"), y = e("./update"), h = e("storage"), d = e("page_api"), a = function(e) {
                return o.fromPromise(new Promise(function(n, t) {
                    return "onload" === e.type ? t(e) : p({
                        method: "HEAD",
                        url: "http://www.google.com/killer-robots.txt"
                    }).then(function(e) {
                        return t(Error("errors.api_down"))
                    })["catch"](function() {
                        return p({
                            method: "HEAD",
                            url: "http://www.zenmate.com/"
                        }).then(function(e) {
                            return t(Error("errors.api_down"))
                        })["catch"](function() {
                            return t(Error("errors.offline"))
                        })
                    })
                }))
            }, t.signOut = w = o.fromEventTarget(f, "request:signOut").merge(y.errors().mapError(function(e) {
                return 403 === e.status
            }).filter(function(e) {
                return e
            })), w.onValue(function() {
                return r.closePopup()
            }), t.signUp = v = o.fromEventTarget(c, "request:signUp").flatMapLatest(function(e) {
                return o.combineAsArray(o.fromPromise(h.read("device", !1)), s, e)
            }).flatMapLatest(function(e) {
                var n, t, r;
                return t = e[0], r = e[1], n = e[2], n.anonymous && (null != t ? t.uuid : void 0) && (null != t ? t.token : void 0) ? (h.read("user", !1).then(function(e) {
                    return c.send("response:signUp", e)
                }), o.never()) : (null != t && (n.auth_id = t.uuid, n.auth_secret = t.token), n.install_source = r, o.fromPromise(p({
                    method: "POST",
                    url: i.apiURL + "/v2/sign_up",
                    responseType: "json",
                    data: n
                })))
            }).flatMapError(a).flatMapError(function(e) {
                return o.fromPromise(new Promise(function(n, t) {
                    return t("onload" !== e.type ? e : 404 === +e.status ? Error("errors.email.not_found") : 422 === +e.status ? Error(e.payload.error_codes[e.payload.error_codes.length - 1]) : Error("errors.unkown"))
                }))
            }), v.onValue(function(e) {
                var n;
                return n = e.user, c.send("response:signUp", n)
            }), v.onError(function(e) {
                return c.send("error:signUp", e.message)
            }), t.signIn = g = o.fromEventTarget(c, "request:signIn").map(function(e) {
                return {
                    auth_method: "user",
                    auth_id: e.email,
                    auth_secret: e.password
                }
            }).merge(o.fromEvent(d, "updateWithCredentials")).flatMapLatest(function(e) {
                return o.combineAsArray(s, e)
            }).flatMapLatest(function(e) {
                var n, t;
                return t = e[0], n = e[1], n.install_source = t, o.fromPromise(p({
                    method: "POST",
                    url: i.apiURL + "/v2/sign_in",
                    responseType: "json",
                    data: n
                }))
            }).flatMapError(function(e) {
                return a(e)
            }).flatMapError(function(e) {
                return o.fromPromise(new Promise(function(n, t) {
                    return t("onload" !== e.type ? e : 403 === +e.status ? Error("errors.user.unknown_email_password") : 422 === +e.status ? Error(e.payload.error_codes[e.payload.error_codes.length - 1]) : Error("errors.unknown"))
                }))
            }), g.onValue(function(e) {
                var n;
                return n = e.user, c.send("response:signIn", n)
            }), g.onError(function(e) {
                return c.send("error:signIn", e.message)
            }), u = o.fromEventTarget(c, "request:isRegistered").flatMapLatest(function(e) {
                return o.fromPromise(p({
                    url: i.apiURL + "/v2/email_registered",
                    responseType: "json",
                    data: e
                }))
            }).flatMapError(a), u.onValue(function(e) {
                return c.send("response:isRegistered", e)
            }), u.onError(function(e) {
                return c.send("error:isRegistered", e.message)
            }), m = o.fromEventTarget(c, "request:forgotPassword").flatMapLatest(function(e) {
                return o.fromPromise(p({
                    url: i.apiURL + "/v2/account/password_reset",
                    method: "POST",
                    responseType: "json",
                    data: {
                        email: e.email
                    }
                }))
            }).flatMapError(function(e) {
                return a(e)
            }).flatMapError(function(e) {
                return o.fromPromise(new Promise(function(n, t) {
                    return t("onload" !== e.type ? e : 404 === +e.status ? Error("errors.user.email.not_found") : 422 === +e.status ? Error(e.payload.error_codes[e.payload.error_codes.length - 1]) : Error("error.general_api"))
                }))
            }), m.onValue(function() {
                return c.send("response:forgotPassword")
            }), m.onError(function(e) {
                return c.send("error:forgotPassword", e.message)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./config": 15,
        "./install_source": 27,
        "./page": 34,
        "./popup": 36,
        "./update": 43,
        "./util": 45,
        browser: 8,
        loglevel: 1,
        page_api: 10,
        storage: 11,
        xhr: 14
    }],
    39: [function(e, n, t) {
        (function(n) {
            var o, r, i, a, s, u;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, s = e("storage"), r = e("./popup").popup, u = e("./account").user, t.rules = i = o.fromPromise(s.read("rules")).mapError(function() {
                return []
            }).merge(o.fromEvent(r, "request:updateRules")).filter(function(e) {
                return e
            }).toProperty(), i.onValue(function(e) {
                return s.write("rules", e)
            }), t.rulesEnabled = a = o.fromPromise(s.read("rules_enabled")).mapError(function() {
                return !1
            }).merge(o.fromEvent(r, "request:toggleRules")).combine(u, function(e, n) {
                return (null != n ? n.is_premium : void 0) && e
            }).skipDuplicates().toProperty(), a.onValue(function(e) {
                return s.write("rules_enabled", e)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./popup": 36,
        storage: 11
    }],
    40: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s, u, l, c, d, f, p = [].indexOf || function(e) {
                for (var n = 0, t = this.length; t > n; n++)
                    if (n in this && this[n] === e) return n;
                return -1
            };
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, c = e("storage"), s = e("./popup").popup, i = e("./crm"), r = e("browser"), l = e("./trial_end_promo").showTrialEndTab, u = o.fromEvent(s, "request:popupOpen"), a = i.map(function(e) {
                return null != e ? e.tabSpawn : void 0
            }).toProperty(null), f = l.toProperty(null), d = o.combineAsArray(f, a), n.exports = d.flatMapLatest(function(e) {
                return o.combineAsArray(o.fromPromise(c.read("previous_tab_spawns")).mapError([]), e).flatMapLatest(function(e) {
                    var n, t, i, a, s, l;
                    for (i = e[0], l = e[1], n = 0, t = l.length; t > n; n++)
                        if (s = l[n], s && (a = s.id, !(p.call(i, a) >= 0))) return o.once(s).merge(u.take(1).doAction(function() {
                            return c.write("previous_tab_spawns", i.concat(s.id)), r.openPage(null != s ? s.url : void 0)
                        }).map(null));
                    return null
                }).toProperty()
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./crm": 17,
        "./popup": 36,
        "./trial_end_promo": 42,
        browser: 8,
        storage: 11
    }],
    41: [function(e, n, t) {
        (function(n) {
            var o, r, i, a, s, u, l;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, l = e("./util"), s = e("./rules").rules, u = e("tab_info").tabInfo, a = e("./pacengine"), i = e("loglevel"), r = function(e, n) {
                var t, o, r;
                return r = l.parseURL(e.url), t = a.getProxyStateByURL(e.url, r.host, n), o = {
                    isDefault: "DEFAULT" === t,
                    isLocal: "LOCAL" === t,
                    isDirect: "OFF" === t
                }, o.isRuleActive = !(o.isDefault || o.isLocal), o.isRuleActive && !o.isDirect && (o.customCountry = t), o
            }, t.tabState = o.combineTemplate({
                tabInfo: u,
                rules: s
            }).map(function(e) {
                var n, t;
                return t = e.tabInfo, n = e.rules, null != t ? r(t, n) : void 0
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./pacengine": 33,
        "./rules": 39,
        "./util": 45,
        loglevel: 1,
        tab_info: 12
    }],
    42: [function(e, n, t) {
        (function(n) {
            var o, r, i, a, s, u, l, c, d, f, p;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, p = e("./account").user, r = e("./language").language, i = e("./util").parseDate, u = "https://zenmate.com/premium/only-for-me/", l = u + "?utm_source=crm&utm_medium=extension&utm_campaign=%5BA%7CALL_en%5Dpremiumend&utm_content=tabspawn", a = u + "offer/", s = a + "?utm_source=crm&utm_medium=extension&utm_campaign=%5BA%7CALL_en%5Dpremiumend&utm_content=banner", t.showTrialEndTab = d = p.flatMapLatest(function(e) {
                var n, t, o, r;
                if (null != e ? e.premium_expires_at : void 0) {
                    if (t = i(e.premium_expires_at), e.is_premium && !e.has_recurring_subscription && (r = new Date, r.setDate(r.getDate() + 1), r > t)) return {
                        url: u,
                        id: "premium_end_promo"
                    };
                    if (!e.is_premium && (o = new Date, o.setDate(o.getDate() - 7), n = new Date, n.setDate(n.getDate() - 14), t > n && o > t)) return {
                        url: l,
                        id: "premium_end_promo2"
                    }
                }
                return null
            }), f = p.map(function(e) {
                var n, t, o;
                return (null != e ? e.premium_expires_at : void 0) && !(null != e ? e.has_recurring_subscription : void 0) ? (o = new Date, o.setDate(o.getDate() + 1), n = new Date, n.setDate(n.getDate() - 9), n < (t = i(e.premium_expires_at)) && o > t) : !1
            }), t.showTrialEndNews = c = f.flatMapLatest(function(e) {
                return r.first().map(function(n) {
                    return e ? {
                        text: "![" + s + "](http://dpbfef69synh5.cloudfront.net/trial-end-promo/zen_extension_discounts_multilanguage_90px.gif)",
                        id: "premium_end_promo"
                    } : null
                })
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./language": 28,
        "./util": 45
    }],
    43: [function(e, n, t) {
        (function(t) {
            var o, r, i, a, s;
            o = "undefined" != typeof window ? window.Bacon : "undefined" != typeof t ? t.Bacon : null, r = e("./api_request"), i = e("./install_id"), a = e("page_api"), s = e("storage"), n.exports = o.once().merge(o.interval(12e5)).merge(o.fromEvent(a, "update")).flatMap(function() {
                return o.combineAsArray(i.take(1), o.fromPromise(s.read("enabled_for", !1)))
            }).flatMapLatest(function(e) {
                var n, t;
                return t = e[0], n = e[1], r("devices/" + t, "GET", {
                    enabled_for: n
                })
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./api_request": 4,
        "./install_id": 26,
        page_api: 10,
        storage: 11
    }],
    44: [function(e, n, t) {
        var o;
        o = e("browser"), t.formatUrlParams = function(e) {
            var n, t, r;
            return e.ga && (e.params.utm_medium = "vpn-extension-" + o.getName(), e.params.utm_source = "crm", e.params.utm_campaign = e.ga.utm_campaign || "unknown"), t = function() {
                var t, o;
                t = e.params, o = [];
                for (n in t) r = t[n], o.push(n + "=" + r);
                return o
            }(), (null != t ? t.length : void 0) && (e.url += "?" + t.join("&")), e.url.replace("{browser}", o.getName())
        }
    }, {
        browser: 8
    }],
    45: [function(e, n, t) {
        var o;
        o = e("./config"), t.generateInstallId = function() {
            var e;
            return e = function() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }, e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }, t.parseURL = function(e) {
            var n, t, o;
            return o = /^([^:]+):\/\/([^\/:]*)(?::([\d]+))?(?:(\/[^#]*)(?:#(.*))?)?$/i, n = e.match(o), n ? {
                scheme: n[1].toLowerCase(),
                host: n[2].toLowerCase(),
                port: n[3],
                path: n[4] || "/",
                fragment: n[5],
                local: "http" !== (t = n[1].toLowerCase()) && "https" !== t
            } : {}
        }, t.getUTMSourcesFromURL = function(e) {
            var n, o, r, i;
            for (o = t.parseURL(e).path, r = /[?&]([^=#]+)=([^&#]*)/g, i = []; n = r.exec(o);) 0 === n[1].indexOf("utm_") && i.push(n[1] + "=" + n[2]);
            return i.join(";")
        }, t.concatUnique = function(e, n) {
            return e.concat(n).filter(function(e, n, t) {
                return t.indexOf(e) === n
            })
        }, t.parseDate = function(e) {
            var n, t, o, r, i;
            return o = e.split(" "), t = o[0], i = o[1], n = t.split("-"), r = i.split(":"), new Date(n[0], n[1] - 1, n[2], r[0], r[1], r[2])
        }
    }, {
        "./config": 15
    }],
    46: [function(e, n, t) {
        (function(n) {
            var t, o, r, i, a, s, u, l, c, d, f, p, m;
            t = "undefined" != typeof window ? window.Bacon : "undefined" != typeof n ? n.Bacon : null, o = e("browser"), u = e("./account"), p = u.user, r = u.device, m = e("widget_messages"), s = e("./language").messages, i = e("./enabled"), d = e("storage"), l = e("xhr").request, f = e("./url"), c = t.fromPromise(d.read("widget_last_shown")).mapError(function() {
                return 0
            }).flatMapLatest(function(e) {
                return t.later(Math.max(6048e5 + e - Date.now(), 10), !0)
            }).merge(t.interval(36288e6, !0)).merge(t.fromEvent(m, "getPremium").flatMapLatest(function() {
                return p.take(1)
            }).doAction(function(e) {
                return f = "https://secure.zenmate.com/#/?autologin=true&utm_source=extension&utm_medium=chrome&utm_campaign=free_users_widget", o.openPage(f)
            }).map(!1)).merge(t.fromEvent(m, "dismiss").map(!1)).toProperty().flatMapLatest(function(e) {
                return t.combineAsArray(e, p, i)
            }), c.onValues(function(e, n, t) {
                return m.toggle(e && null != n && t && !n.is_premium), e ? d.write("widget_last_shown", Date.now()) : void 0
            }), a = t.combineAsArray(p, s).map(function(e) {
                var n, t;
                return t = e[0], n = e[1], (null != t ? t.is_verified : void 0) ? n.widget.verified : n.widget.unverified
            }).toProperty(), t.once(!0).merge(t.interval(5184e6, !0)).merge(t.fromEvent(m, "hideMessage").map(!1)).combine(a, function(e, n) {
                return [e, n]
            }).onValues(function(e, n) {
                return m.toggleMessage(e, n)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./account": 3,
        "./enabled": 22,
        "./language": 28,
        "./url": 44,
        browser: 8,
        storage: 11,
        widget_messages: 13,
        xhr: 14
    }]
}, {}, [25]);
