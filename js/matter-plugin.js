!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("phaser")) : "function" == typeof define && define.amd ? define(["phaser"], t) : "object" == typeof exports ? exports.PhaserMatterCollisionPlugin = t(require("phaser")) : e.PhaserMatterCollisionPlugin = t(e.Phaser) }(window, function (e) { return function (e) { var t = {}; function n(o) { if (t[o]) return t[o].exports; var i = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports } return n.m = e, n.c = t, n.d = function (e, t, o) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var o = Object.create(null); if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function (t) { return e[t] }.bind(null, i)); return o }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 1) }([function (t, n) { t.exports = e }, function (e, t, n) { "use strict"; n.r(t); var o = n(0), i = n.n(o), r = { log: console.log, warn: console.warn, error: console.error }; function l(e) { for (; e.parent !== e;)e = e.parent; return e } function s(e) { return function (e) { return e.hasOwnProperty("collisionFilter") && e.hasOwnProperty("parts") && e.hasOwnProperty("slop") }(e) || e.body || e instanceof i.a.Tilemaps.Tile } function c(e) { r.warn("Expected a Matter body, Tile or an object with a body property, but instead, recieved: " + e) } var a = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var o = t[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } return function (t, n, o) { return n && e(t.prototype, n), o && e(t, o), t } }(); var u = function (e) { function t(e, n) { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var o = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n)); return o.scene = e, o.events = new i.a.Events.EventEmitter, o.collisionStartListeners = new Map, o.collisionEndListeners = new Map, o.collisionActiveListeners = new Map, o.onCollisionStart = o.onCollisionEvent.bind(o, o.collisionStartListeners, "collisionstart"), o.onCollisionEnd = o.onCollisionEvent.bind(o, o.collisionEndListeners, "collisionend"), o.onCollisionActive = o.onCollisionEvent.bind(o, o.collisionActiveListeners, "collisionactive"), o.scene.events.once("start", o.start, o), o.scene.events.once("destroy", o.destroy, o), o } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.a.Plugins.ScenePlugin), a(t, [{ key: "addOnCollideStart", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectA, n = e.objectB, o = e.callback, i = e.context; return this.addOnCollide(this.collisionStartListeners, t, n, o, i), this.removeOnCollideStart.bind(this, { objectA: t, objectB: n, callback: o, context: i }) } }, { key: "addOnCollideEnd", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectA, n = e.objectB, o = e.callback, i = e.context; return this.addOnCollide(this.collisionEndListeners, t, n, o, i), this.removeOnCollideEnd.bind(this, { objectA: t, objectB: n, callback: o, context: i }) } }, { key: "addOnCollideActive", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectA, n = e.objectB, o = e.callback, i = e.context; return this.addOnCollide(this.collisionActiveListeners, t, n, o, i), this.removeOnCollideActive.bind(this, { objectA: t, objectB: n, callback: o, context: i }) } }, { key: "removeOnCollideStart", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectA, n = e.objectB, o = e.callback, i = e.context; this.removeOnCollide(this.collisionStartListeners, t, n, o, i) } }, { key: "removeOnCollideEnd", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectA, n = e.objectB, o = e.callback, i = e.context; this.removeOnCollide(this.collisionEndListeners, t, n, o, i) } }, { key: "removeOnCollideActive", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.objectA, n = e.objectB, o = e.callback, i = e.context; this.removeOnCollide(this.collisionActiveListeners, t, n, o, i) } }, { key: "removeAllCollideStartListeners", value: function () { this.collisionStartListeners.clear() } }, { key: "removeAllCollideActiveListeners", value: function () { this.collisionActiveListeners.clear() } }, { key: "removeAllCollideEndListeners", value: function () { this.collisionEndListeners.clear() } }, { key: "removeAllCollideListeners", value: function () { this.removeAllCollideStartListeners(), this.removeAllCollideActiveListeners(), this.removeAllCollideEndListeners() } }, { key: "addOnCollide", value: function (e, t, n, o, i) { var l = this; if (o && "function" == typeof o) { var s = Array.isArray(t) ? t : [t], c = Array.isArray(n) ? n : [n]; s.forEach(function (t) { c.forEach(function (n) { l.addOnCollideObjectVsObject(e, t, n, o, i) }) }) } else r.warn("No valid callback specified. Received: " + o) } }, { key: "removeOnCollide", value: function (e, t, n, o, i) { var r = Array.isArray(t) ? t : [t], l = Array.isArray(n) ? n : [n]; r.forEach(function (t) { if (n) { var r = (e.get(t) || []).filter(function (e) { return !(l.includes(e.target) && (!o || e.callback === o) && (!i || e.context === i)) }); r.length > 0 ? e.set(t, r) : e.delete(t) } else e.delete(t) }) } }, { key: "addOnCollideObjectVsObject", value: function (e, t, n, o, i) { if (t && s(t)) if (!n || s(n)) { var r = e.get(t) || []; r.push({ target: n, callback: o, context: i }), e.set(t, r) } else c(t); else c(t) } }, { key: "onCollisionEvent", value: function (e, t, n) { var o = this, i = n.pairs, r = "pair" + t, s = {}, c = { isReversed: !0 }; i.map(function (t, n) { var a = t.bodyA, u = t.bodyB, d = l(a).gameObject, f = l(u).gameObject; d && d.tile && (d = d.tile), f && f.tile && (f = f.tile), i[n].gameObjectA = d, i[n].gameObjectB = f, s.bodyA = a, s.bodyB = u, s.gameObjectA = d, s.gameObjectB = f, s.pair = t, o.events.emit(r, s), e.size && (c.bodyB = a, c.bodyA = u, c.gameObjectB = d, c.gameObjectA = f, c.pair = t, o.checkPairAndEmit(e, a, u, f, s), o.checkPairAndEmit(e, u, a, d, c), d && o.checkPairAndEmit(e, d, u, f, s), f && o.checkPairAndEmit(e, f, a, d, c)) }), this.events.emit(t, n) } }, { key: "checkPairAndEmit", value: function (e, t, n, o, i) { var r = e.get(t); r && r.forEach(function (e) { var t = e.target, r = e.callback, l = e.context; t && t !== n && t !== o || r.call(l, i) }) } }, { key: "subscribeMatterEvents", value: function () { var e = this.scene.matter; e && e.world ? (e.world.on("collisionstart", this.onCollisionStart), e.world.on("collisionactive", this.onCollisionActive), e.world.on("collisionend", this.onCollisionEnd)) : r.warn("Plugin requires matter!") } }, { key: "unsubscribeMatterEvents", value: function () { var e = this.scene.matter; e && e.world && (e.world.off("collisionstart", this.onCollisionStart), e.world.off("collisionactive", this.onCollisionActive), e.world.off("collisionend", this.onCollisionEnd)) } }, { key: "start", value: function () { this.scene.events.off("shutdown", this.shutdown, this), this.scene.events.on("shutdown", this.shutdown, this), this.subscribeMatterEvents() } }, { key: "shutdown", value: function () { this.removeAllCollideListeners(), this.unsubscribeMatterEvents(), this.scene.events.once("start", this.start, this) } }, { key: "destroy", value: function () { this.scene.events.off("start", this.start, this), this.scene.events.off("shutdown", this.shutdown, this), this.removeAllCollideListeners(), this.unsubscribeMatterEvents(), this.scene = void 0 } }]), t }(); t.default = u }]).default });
//# sourceMappingURL=phaser-matter-collision-plugin.min.js.map
