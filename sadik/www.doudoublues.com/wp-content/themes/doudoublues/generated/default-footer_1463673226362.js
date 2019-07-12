(function() {
	function a(a, b, c) {
		c = (c || 0) - 1;
		for (var d = a ? a.length : 0; ++c < d; ) if (a[c] === b) return c;
		return -1;
	}
	function b(a, b) {
		for (var c = a.m, d = b.m, e = -1, f = c.length; ++e < f; ) {
			var g = c[e],
				h = d[e];
			if (g !== h) {
				if (g > h || "undefined" == typeof g) return 1;
				if (h > g || "undefined" == typeof h) return -1;
			}
		}
		return a.n - b.n;
	}
	function c(a) {
		return "\\" + qa[a];
	}
	function d(a, b, c) {
		b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
		var d = -1;
		c = c - b || 0;
		for (var e = Array(0 > c ? 0 : c); ++d < c; ) e[d] = a[b + d];
		return e;
	}
	function e(a) {
		return a instanceof e ? a : new f(a);
	}
	function f(a, b) {
		(this.__chain__ = !!b), (this.__wrapped__ = a);
	}
	function g(a) {
		function b() {
			if (e) {
				var a = d(e);
				Ea.apply(a, arguments);
			}
			if (this instanceof b) {
				var g = h(c.prototype),
					a = c.apply(g, a || arguments);
				return B(a) ? a : g;
			}
			return c.apply(f, a || arguments);
		}
		var c = a[0],
			e = a[2],
			f = a[4];
		return b;
	}
	function h(a) {
		return B(a) ? Ga(a) : {};
	}
	function i(a, b, c) {
		if ("function" != typeof a) return $;
		if ("undefined" == typeof b || !("prototype" in a)) return a;
		switch (c) {
			case 1:
				return function(c) {
					return a.call(b, c);
				};
			case 2:
				return function(c, d) {
					return a.call(b, c, d);
				};
			case 3:
				return function(c, d, e) {
					return a.call(b, c, d, e);
				};
			case 4:
				return function(c, d, e, f) {
					return a.call(b, c, d, e, f);
				};
		}
		return X(a, b);
	}
	function j(a) {
		function b() {
			var a = l ? i : this;
			if (f) {
				var q = d(f);
				Ea.apply(q, arguments);
			}
			return (g || n) &&
				(q || (q = d(arguments)),
				g && Ea.apply(q, g),
				n && q.length < k)
				? ((e |= 16), j([c, o ? e : -4 & e, q, null, i, k]))
				: (q || (q = arguments),
					m && (c = a[p]),
					this instanceof b
						? ((a = h(c.prototype)),
							(q = c.apply(a, q)),
							B(q) ? q : a)
						: c.apply(a, q));
		}
		var c = a[0],
			e = a[1],
			f = a[2],
			g = a[3],
			i = a[4],
			k = a[5],
			l = 1 & e,
			m = 2 & e,
			n = 4 & e,
			o = 8 & e,
			p = c;
		return b;
	}
	function k(a, b) {
		for (var c = -1, d = r(), e = a ? a.length : 0, f = []; ++c < e; ) {
			var g = a[c];
			0 > d(b, g) && f.push(g);
		}
		return f;
	}
	function l(a, b, c, d) {
		d = (d || 0) - 1;
		for (var e = a ? a.length : 0, f = []; ++d < e; ) {
			var g = a[d];
			if (
				g &&
				"object" == typeof g &&
				"number" == typeof g.length &&
				(Pa(g) || u(g))
			) {
				b || (g = l(g, b, c));
				var h = -1,
					i = g.length,
					j = f.length;
				for (f.length += i; ++h < i; ) f[j++] = g[h];
			} else c || f.push(g);
		}
		return f;
	}
	function m(a, b, c, d) {
		if (a === b) return 0 !== a || 1 / a == 1 / b;
		if (a === a && !((a && pa[typeof a]) || (b && pa[typeof b]))) return !1;
		if (null == a || null == b) return a === b;
		var f = za.call(a),
			g = za.call(b);
		if (f != g) return !1;
		switch (f) {
			case ja:
			case ka:
				return +a == +b;
			case la:
				return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
			case na:
			case oa:
				return a == b + "";
		}
		if (((g = f == ia), !g)) {
			var h = a instanceof e,
				i = b instanceof e;
			if (h || i)
				return m(h ? a.__wrapped__ : a, i ? b.__wrapped__ : b, c, d);
			if (f != ma) return !1;
			if (
				((f = a.constructor),
				(h = b.constructor),
				f != h &&
					!(A(f) && f instanceof f && A(h) && h instanceof h) &&
					"constructor" in a &&
					"constructor" in b)
			)
				return !1;
		}
		for (c || (c = []), d || (d = []), f = c.length; f--; )
			if (c[f] == a) return d[f] == b;
		var j = !0,
			k = 0;
		if ((c.push(a), d.push(b), g)) {
			if (((k = b.length), (j = k == a.length)))
				for (; k-- && (j = m(a[k], b[k], c, d)); );
		} else
			Wa(b, function(b, e, f) {
				return Da.call(f, e)
					? (k++, !(j = Da.call(a, e) && m(a[e], b, c, d)) && da)
					: void 0;
			}),
				j &&
					Wa(a, function(a, b, c) {
						return Da.call(c, b) ? !(j = -1 < --k) && da : void 0;
					});
		return c.pop(), d.pop(), j;
	}
	function n(a, b, c) {
		for (
			var d = -1, e = r(), f = a ? a.length : 0, g = [], h = c ? [] : g;
			++d < f;

		) {
			var i = a[d],
				j = c ? c(i, d, a) : i;
			(b ? !d || h[h.length - 1] !== j : 0 > e(h, j)) &&
				(c && h.push(j), g.push(i));
		}
		return g;
	}
	function o(a) {
		return function(b, c, d) {
			var e = {};
			(c = Z(c, d, 3)), (d = -1);
			var f = b ? b.length : 0;
			if ("number" == typeof f)
				for (; ++d < f; ) {
					var g = b[d];
					a(e, g, c(g, d, b), b);
				}
			else
				Xa(b, function(b, d, f) {
					a(e, b, c(b, d, f), f);
				});
			return e;
		};
	}
	function p(a, b, c, d, e, f) {
		var h = 16 & b,
			i = 32 & b;
		if (!(2 & b || A(a))) throw new TypeError();
		return (
			h && !c.length && ((b &= -17), (c = !1)),
			i && !d.length && ((b &= -33), (d = !1)),
			(1 == b || 17 === b ? g : j)([a, b, c, d, e, f])
		);
	}
	function q(a) {
		return Sa[a];
	}
	function r() {
		var b = (b = e.indexOf) === T ? a : b;
		return b;
	}
	function s(a) {
		return "function" == typeof a && Aa.test(a);
	}
	function t(a) {
		return Ta[a];
	}
	function u(a) {
		return (
			(a &&
				"object" == typeof a &&
				"number" == typeof a.length &&
				za.call(a) == ha) ||
			!1
		);
	}
	function v(a) {
		if (!a) return a;
		for (var b = 1, c = arguments.length; c > b; b++) {
			var d = arguments[b];
			if (d) for (var e in d) a[e] = d[e];
		}
		return a;
	}
	function w(a) {
		if (!a) return a;
		for (var b = 1, c = arguments.length; c > b; b++) {
			var d = arguments[b];
			if (d) for (var e in d) "undefined" == typeof a[e] && (a[e] = d[e]);
		}
		return a;
	}
	function x(a) {
		var b = [];
		return (
			Wa(a, function(a, c) {
				A(a) && b.push(c);
			}),
			b.sort()
		);
	}
	function y(a) {
		for (var b = -1, c = Ra(a), d = c.length, e = {}; ++b < d; ) {
			var f = c[b];
			e[a[f]] = f;
		}
		return e;
	}
	function z(a) {
		if (!a) return !0;
		if (Pa(a) || D(a)) return !a.length;
		for (var b in a) if (Da.call(a, b)) return !1;
		return !0;
	}
	function A(a) {
		return "function" == typeof a;
	}
	function B(a) {
		return !(!a || !pa[typeof a]);
	}
	function C(a) {
		return (
			"number" == typeof a ||
			(a && "object" == typeof a && za.call(a) == la) ||
			!1
		);
	}
	function D(a) {
		return (
			"string" == typeof a ||
			(a && "object" == typeof a && za.call(a) == oa) ||
			!1
		);
	}
	function E(a) {
		for (var b = -1, c = Ra(a), d = c.length, e = Array(d); ++b < d; )
			e[b] = a[c[b]];
		return e;
	}
	function F(a, b) {
		var c = r(),
			d = a ? a.length : 0,
			e = !1;
		return (
			d && "number" == typeof d
				? (e = -1 < c(a, b))
				: Xa(a, function(a) {
						return (e = a === b) && da;
					}),
			e
		);
	}
	function G(a, b, c) {
		var d = !0;
		(b = Z(b, c, 3)), (c = -1);
		var e = a ? a.length : 0;
		if ("number" == typeof e) for (; ++c < e && (d = !!b(a[c], c, a)); );
		else
			Xa(a, function(a, c, e) {
				return !(d = !!b(a, c, e)) && da;
			});
		return d;
	}
	function H(a, b, c) {
		var d = [];
		(b = Z(b, c, 3)), (c = -1);
		var e = a ? a.length : 0;
		if ("number" == typeof e)
			for (; ++c < e; ) {
				var f = a[c];
				b(f, c, a) && d.push(f);
			}
		else
			Xa(a, function(a, c, e) {
				b(a, c, e) && d.push(a);
			});
		return d;
	}
	function I(a, b, c) {
		(b = Z(b, c, 3)), (c = -1);
		var d = a ? a.length : 0;
		if ("number" != typeof d) {
			var e;
			return (
				Xa(a, function(a, c, d) {
					return b(a, c, d) ? ((e = a), da) : void 0;
				}),
				e
			);
		}
		for (; ++c < d; ) {
			var f = a[c];
			if (b(f, c, a)) return f;
		}
	}
	function J(a, b, c) {
		var d = -1,
			e = a ? a.length : 0;
		if (
			((b = b && "undefined" == typeof c ? b : i(b, c, 3)),
			"number" == typeof e)
		)
			for (; ++d < e && b(a[d], d, a) !== da; );
		else Xa(a, b);
	}
	function K(a, b) {
		var c = a ? a.length : 0;
		if ("number" == typeof c) for (; c-- && !1 !== b(a[c], c, a); );
		else {
			var d = Ra(a),
				c = d.length;
			Xa(a, function(a, e, f) {
				return (e = d ? d[--c] : --c), !1 === b(f[e], e, f) && da;
			});
		}
	}
	function L(a, b, c) {
		var d = -1,
			e = a ? a.length : 0;
		if (((b = Z(b, c, 3)), "number" == typeof e))
			for (var f = Array(e); ++d < e; ) f[d] = b(a[d], d, a);
		else
			(f = []),
				Xa(a, function(a, c, e) {
					f[++d] = b(a, c, e);
				});
		return f;
	}
	function M(a, b, c) {
		var d = -1 / 0,
			e = d;
		"function" != typeof b && c && c[b] === a && (b = null);
		var f = -1,
			g = a ? a.length : 0;
		if (null == b && "number" == typeof g)
			for (; ++f < g; ) (c = a[f]), c > e && (e = c);
		else
			(b = Z(b, c, 3)),
				J(a, function(a, c, f) {
					(c = b(a, c, f)), c > d && ((d = c), (e = a));
				});
		return e;
	}
	function N(a, b, c, d) {
		if (!a) return c;
		var e = 3 > arguments.length;
		b = Z(b, d, 4);
		var f = -1,
			g = a.length;
		if ("number" == typeof g)
			for (e && (c = a[++f]); ++f < g; ) c = b(c, a[f], f, a);
		else
			Xa(a, function(a, d, f) {
				c = e ? ((e = !1), a) : b(c, a, d, f);
			});
		return c;
	}
	function O(a, b, c, d) {
		var e = 3 > arguments.length;
		return (
			(b = Z(b, d, 4)),
			K(a, function(a, d, f) {
				c = e ? ((e = !1), a) : b(c, a, d, f);
			}),
			c
		);
	}
	function P(a) {
		var b = -1,
			c = a ? a.length : 0,
			d = Array("number" == typeof c ? c : 0);
		return (
			J(a, function(a) {
				var c;
				(c = ++b),
					(c = 0 + Ca(Na() * (c - 0 + 1))),
					(d[b] = d[c]),
					(d[c] = a);
			}),
			d
		);
	}
	function Q(a, b, c) {
		var d;
		(b = Z(b, c, 3)), (c = -1);
		var e = a ? a.length : 0;
		if ("number" == typeof e) for (; ++c < e && !(d = b(a[c], c, a)); );
		else
			Xa(a, function(a, c, e) {
				return (d = b(a, c, e)) && da;
			});
		return !!d;
	}
	function R(a, b, c) {
		return c && z(b) ? ba : (c ? I : H)(a, b);
	}
	function S(a, b, c) {
		var e = 0,
			f = a ? a.length : 0;
		if ("number" != typeof b && null != b) {
			var g = -1;
			for (b = Z(b, c, 3); ++g < f && b(a[g], g, a); ) e++;
		} else if (((e = b), null == e || c)) return a ? a[0] : ba;
		return d(a, 0, Ma(La(0, e), f));
	}
	function T(b, c, d) {
		if ("number" == typeof d) {
			var e = b ? b.length : 0;
			d = 0 > d ? La(0, e + d) : d || 0;
		} else if (d) return (d = V(b, c)), b[d] === c ? d : -1;
		return a(b, c, d);
	}
	function U(a, b, c) {
		if ("number" != typeof b && null != b) {
			var e = 0,
				f = -1,
				g = a ? a.length : 0;
			for (b = Z(b, c, 3); ++f < g && b(a[f], f, a); ) e++;
		} else e = null == b || c ? 1 : La(0, b);
		return d(a, e);
	}
	function V(a, b, c, d) {
		var e = 0,
			f = a ? a.length : e;
		for (c = c ? Z(c, d, 1) : $, b = c(b); f > e; )
			(d = (e + f) >>> 1), c(a[d]) < b ? (e = d + 1) : (f = d);
		return e;
	}
	function W(a, b, c, d) {
		return (
			"boolean" != typeof b &&
				null != b &&
				((d = c),
				(c = "function" != typeof b && d && d[b] === a ? null : b),
				(b = !1)),
			null != c && (c = Z(c, d, 3)),
			n(a, b, c)
		);
	}
	function X(a, b) {
		return 2 < arguments.length
			? p(a, 17, d(arguments, 2), null, b)
			: p(a, 1, null, null, b);
	}
	function Y(a, b, c) {
		var d,
			e,
			f,
			g,
			h,
			i,
			j,
			k = 0,
			l = !1,
			m = !0;
		if (!A(a)) throw new TypeError();
		if (((b = La(0, b) || 0), !0 === c))
			var n = !0,
				m = !1;
		else
			B(c) &&
				((n = c.leading),
				(l = "maxWait" in c && (La(b, c.maxWait) || 0)),
				(m = "trailing" in c ? c.trailing : m));
		var o = function() {
				var c = b - (ab() - g);
				c > 0
					? (i = setTimeout(o, c))
					: (e && clearTimeout(e),
						(c = j),
						(e = i = j = ba),
						c &&
							((k = ab()),
							(f = a.apply(h, d)),
							i || e || (d = h = null)));
			},
			p = function() {
				i && clearTimeout(i),
					(e = i = j = ba),
					(m || l !== b) &&
						((k = ab()),
						(f = a.apply(h, d)),
						i || e || (d = h = null));
			};
		return function() {
			if (
				((d = arguments),
				(g = ab()),
				(h = this),
				(j = m && (i || !n)),
				!1 === l)
			)
				var c = n && !i;
			else {
				e || n || (k = g);
				var q = l - (g - k),
					r = 0 >= q;
				r
					? (e && (e = clearTimeout(e)), (k = g), (f = a.apply(h, d)))
					: e || (e = setTimeout(p, q));
			}
			return (
				r && i
					? (i = clearTimeout(i))
					: i || b === l || (i = setTimeout(o, b)),
				c && ((r = !0), (f = a.apply(h, d))),
				!r || i || e || (d = h = null),
				f
			);
		};
	}
	function Z(a, b, c) {
		var d = typeof a;
		if (null == a || "function" == d) return i(a, b, c);
		if ("object" != d) return aa(a);
		var e = Ra(a);
		return function(b) {
			for (var c = e.length, d = !1; c-- && (d = b[e[c]] === a[e[c]]); );
			return d;
		};
	}
	function $(a) {
		return a;
	}
	function _(a) {
		J(x(a), function(b) {
			var c = (e[b] = a[b]);
			e.prototype[b] = function() {
				var a = [this.__wrapped__];
				return (
					Ea.apply(a, arguments),
					(a = c.apply(e, a)),
					this.__chain__ ? new f(a, !0) : a
				);
			};
		});
	}
	function aa(a) {
		return function(b) {
			return b[a];
		};
	}
	var ba,
		ca = 0,
		da = {},
		ea = +new Date() + "",
		fa = /($^)/,
		ga = /['\n\r\t\u2028\u2029\\]/g,
		ha = "[object Arguments]",
		ia = "[object Array]",
		ja = "[object Boolean]",
		ka = "[object Date]",
		la = "[object Number]",
		ma = "[object Object]",
		na = "[object RegExp]",
		oa = "[object String]",
		pa = {
			boolean: !1,
			function: !0,
			object: !0,
			number: !1,
			string: !1,
			undefined: !1
		},
		qa = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"	": "t",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		ra = (pa[typeof window] && window) || this,
		sa = pa[typeof exports] && exports && !exports.nodeType && exports,
		ta = pa[typeof module] && module && !module.nodeType && module,
		ua = ta && ta.exports === sa && sa,
		va = pa[typeof global] && global;
	!va || (va.global !== va && va.window !== va) || (ra = va);
	var wa = [],
		xa = Object.prototype,
		ya = ra._,
		za = xa.toString,
		Aa = RegExp(
			"^" +
				(za + "")
					.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
					.replace(/toString| for [^\]]+/g, ".*?") +
				"$"
		),
		Ba = Math.ceil,
		Ca = Math.floor,
		Da = xa.hasOwnProperty,
		Ea = wa.push,
		Fa = xa.propertyIsEnumerable,
		Ga = s((Ga = Object.create)) && Ga,
		Ha = s((Ha = Array.isArray)) && Ha,
		Ia = ra.isFinite,
		Ja = ra.isNaN,
		Ka = s((Ka = Object.keys)) && Ka,
		La = Math.max,
		Ma = Math.min,
		Na = Math.random;
	f.prototype = e.prototype;
	var Oa = {};
	!(function() {
		var a = { 0: 1, length: 1 };
		Oa.spliceObjects = (wa.splice.call(a, 0, 1), !a[0]);
	})(1),
		(e.templateSettings = {
			escape: /<%-([\s\S]+?)%>/g,
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: /<%=([\s\S]+?)%>/g,
			variable: ""
		}),
		Ga ||
			(h = (function() {
				function a() {}
				return function(b) {
					if (B(b)) {
						a.prototype = b;
						var c = new a();
						a.prototype = null;
					}
					return c || ra.Object();
				};
			})()),
		u(arguments) ||
			(u = function(a) {
				return (
					(a &&
						"object" == typeof a &&
						"number" == typeof a.length &&
						Da.call(a, "callee") &&
						!Fa.call(a, "callee")) ||
					!1
				);
			});
	var Pa =
			Ha ||
			function(a) {
				return (
					(a &&
						"object" == typeof a &&
						"number" == typeof a.length &&
						za.call(a) == ia) ||
					!1
				);
			},
		Qa = function(a) {
			var b,
				c = [];
			if (!a || !pa[typeof a]) return c;
			for (b in a) Da.call(a, b) && c.push(b);
			return c;
		},
		Ra = Ka
			? function(a) {
					return B(a) ? Ka(a) : [];
				}
			: Qa,
		Sa = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;"
		},
		Ta = y(Sa),
		Ua = RegExp("(" + Ra(Ta).join("|") + ")", "g"),
		Va = RegExp("[" + Ra(Sa).join("") + "]", "g"),
		Wa = function(a, b) {
			var c;
			if (!a || !pa[typeof a]) return a;
			for (c in a) if (b(a[c], c, a) === da) break;
			return a;
		},
		Xa = function(a, b) {
			var c;
			if (!a || !pa[typeof a]) return a;
			for (c in a) if (Da.call(a, c) && b(a[c], c, a) === da) break;
			return a;
		};
	A(/x/) &&
		(A = function(a) {
			return "function" == typeof a && "[object Function]" == za.call(a);
		});
	var Ya = o(function(a, b, c) {
			Da.call(a, c) ? a[c]++ : (a[c] = 1);
		}),
		Za = o(function(a, b, c) {
			(Da.call(a, c) ? a[c] : (a[c] = [])).push(b);
		}),
		$a = o(function(a, b, c) {
			a[c] = b;
		}),
		_a = L,
		ab =
			(s((ab = Date.now)) && ab) ||
			function() {
				return new Date().getTime();
			};
	(e.after = function(a, b) {
		if (!A(b)) throw new TypeError();
		return function() {
			return 1 > --a ? b.apply(this, arguments) : void 0;
		};
	}),
		(e.bind = X),
		(e.bindAll = function(a) {
			for (
				var b = 1 < arguments.length ? l(arguments, !0, !1, 1) : x(a),
					c = -1,
					d = b.length;
				++c < d;

			) {
				var e = b[c];
				a[e] = p(a[e], 1, null, null, a);
			}
			return a;
		}),
		(e.chain = function(a) {
			return (a = new f(a)), (a.__chain__ = !0), a;
		}),
		(e.compact = function(a) {
			for (var b = -1, c = a ? a.length : 0, d = []; ++b < c; ) {
				var e = a[b];
				e && d.push(e);
			}
			return d;
		}),
		(e.compose = function() {
			for (var a = arguments, b = a.length; b--; )
				if (!A(a[b])) throw new TypeError();
			return function() {
				for (var b = arguments, c = a.length; c--; )
					b = [a[c].apply(this, b)];
				return b[0];
			};
		}),
		(e.countBy = Ya),
		(e.debounce = Y),
		(e.defaults = w),
		(e.defer = function(a) {
			if (!A(a)) throw new TypeError();
			var b = d(arguments, 1);
			return setTimeout(function() {
				a.apply(ba, b);
			}, 1);
		}),
		(e.delay = function(a, b) {
			if (!A(a)) throw new TypeError();
			var c = d(arguments, 2);
			return setTimeout(function() {
				a.apply(ba, c);
			}, b);
		}),
		(e.difference = function(a) {
			return k(a, l(arguments, !0, !0, 1));
		}),
		(e.filter = H),
		(e.flatten = function(a, b) {
			return l(a, b);
		}),
		(e.forEach = J),
		(e.functions = x),
		(e.groupBy = Za),
		(e.indexBy = $a),
		(e.initial = function(a, b, c) {
			var e = 0,
				f = a ? a.length : 0;
			if ("number" != typeof b && null != b) {
				var g = f;
				for (b = Z(b, c, 3); g-- && b(a[g], g, a); ) e++;
			} else e = null == b || c ? 1 : b || e;
			return d(a, 0, Ma(La(0, f - e), f));
		}),
		(e.intersection = function() {
			for (var a = [], b = -1, c = arguments.length; ++b < c; ) {
				var d = arguments[b];
				(Pa(d) || u(d)) && a.push(d);
			}
			var e = a[0],
				f = -1,
				g = r(),
				h = e ? e.length : 0,
				i = [];
			a: for (; ++f < h; )
				if (((d = e[f]), 0 > g(i, d))) {
					for (b = c; --b; ) if (0 > g(a[b], d)) continue a;
					i.push(d);
				}
			return i;
		}),
		(e.invert = y),
		(e.invoke = function(a, b) {
			var c = d(arguments, 2),
				e = -1,
				f = "function" == typeof b,
				g = a ? a.length : 0,
				h = Array("number" == typeof g ? g : 0);
			return (
				J(a, function(a) {
					h[++e] = (f ? b : a[b]).apply(a, c);
				}),
				h
			);
		}),
		(e.keys = Ra),
		(e.map = L),
		(e.max = M),
		(e.memoize = function(a, b) {
			var c = {};
			return function() {
				var d = b ? b.apply(this, arguments) : ea + arguments[0];
				return Da.call(c, d) ? c[d] : (c[d] = a.apply(this, arguments));
			};
		}),
		(e.min = function(a, b, c) {
			var d = 1 / 0,
				e = d;
			"function" != typeof b && c && c[b] === a && (b = null);
			var f = -1,
				g = a ? a.length : 0;
			if (null == b && "number" == typeof g)
				for (; ++f < g; ) (c = a[f]), e > c && (e = c);
			else
				(b = Z(b, c, 3)),
					J(a, function(a, c, f) {
						(c = b(a, c, f)), d > c && ((d = c), (e = a));
					});
			return e;
		}),
		(e.omit = function(a) {
			var b = [];
			Wa(a, function(a, c) {
				b.push(c);
			});
			for (
				var b = k(b, l(arguments, !0, !1, 1)),
					c = -1,
					d = b.length,
					e = {};
				++c < d;

			) {
				var f = b[c];
				e[f] = a[f];
			}
			return e;
		}),
		(e.once = function(a) {
			var b, c;
			if (!A(a)) throw new TypeError();
			return function() {
				return b
					? c
					: ((b = !0), (c = a.apply(this, arguments)), (a = null), c);
			};
		}),
		(e.pairs = function(a) {
			for (var b = -1, c = Ra(a), d = c.length, e = Array(d); ++b < d; ) {
				var f = c[b];
				e[b] = [f, a[f]];
			}
			return e;
		}),
		(e.partial = function(a) {
			return p(a, 16, d(arguments, 1));
		}),
		(e.pick = function(a) {
			for (
				var b = -1, c = l(arguments, !0, !1, 1), d = c.length, e = {};
				++b < d;

			) {
				var f = c[b];
				f in a && (e[f] = a[f]);
			}
			return e;
		}),
		(e.pluck = _a),
		(e.range = function(a, b, c) {
			(a = +a || 0), (c = +c || 1), null == b && ((b = a), (a = 0));
			var d = -1;
			b = La(0, Ba((b - a) / c));
			for (var e = Array(b); ++d < b; ) (e[d] = a), (a += c);
			return e;
		}),
		(e.reject = function(a, b, c) {
			return (
				(b = Z(b, c, 3)),
				H(a, function(a, c, d) {
					return !b(a, c, d);
				})
			);
		}),
		(e.rest = U),
		(e.shuffle = P),
		(e.sortBy = function(a, c, d) {
			var e = -1,
				f = a ? a.length : 0,
				g = Array("number" == typeof f ? f : 0);
			for (
				c = Z(c, d, 3),
					J(a, function(a, b, d) {
						g[++e] = { m: [c(a, b, d)], n: e, o: a };
					}),
					f = g.length,
					g.sort(b);
				f--;

			)
				g[f] = g[f].o;
			return g;
		}),
		(e.tap = function(a, b) {
			return b(a), a;
		}),
		(e.throttle = function(a, b, c) {
			var d = !0,
				e = !0;
			if (!A(a)) throw new TypeError();
			return (
				!1 === c
					? (d = !1)
					: B(c) &&
						((d = "leading" in c ? c.leading : d),
						(e = "trailing" in c ? c.trailing : e)),
				(c = {}),
				(c.leading = d),
				(c.maxWait = b),
				(c.trailing = e),
				Y(a, b, c)
			);
		}),
		(e.times = function(a, b, c) {
			a = -1 < (a = +a) ? a : 0;
			var d = -1,
				e = Array(a);
			for (b = i(b, c, 1); ++d < a; ) e[d] = b(d);
			return e;
		}),
		(e.toArray = function(a) {
			return Pa(a)
				? d(a)
				: a && "number" == typeof a.length ? L(a) : E(a);
		}),
		(e.union = function() {
			return n(l(arguments, !0, !0));
		}),
		(e.uniq = W),
		(e.values = E),
		(e.where = R),
		(e.without = function(a) {
			return k(a, d(arguments, 1));
		}),
		(e.wrap = function(a, b) {
			return p(b, 16, [a]);
		}),
		(e.zip = function() {
			for (
				var a = -1,
					b = M(_a(arguments, "length")),
					c = Array(0 > b ? 0 : b);
				++a < b;

			)
				c[a] = _a(arguments, a);
			return c;
		}),
		(e.collect = L),
		(e.drop = U),
		(e.each = J),
		(e.extend = v),
		(e.methods = x),
		(e.object = function(a, b) {
			var c = -1,
				d = a ? a.length : 0,
				e = {};
			for (b || !d || Pa(a[0]) || (b = []); ++c < d; ) {
				var f = a[c];
				b ? (e[f] = b[c]) : f && (e[f[0]] = f[1]);
			}
			return e;
		}),
		(e.select = H),
		(e.tail = U),
		(e.unique = W),
		(e.clone = function(a) {
			return B(a) ? (Pa(a) ? d(a) : v({}, a)) : a;
		}),
		(e.contains = F),
		(e.escape = function(a) {
			return null == a ? "" : (a + "").replace(Va, q);
		}),
		(e.every = G),
		(e.find = I),
		(e.has = function(a, b) {
			return a ? Da.call(a, b) : !1;
		}),
		(e.identity = $),
		(e.indexOf = T),
		(e.isArguments = u),
		(e.isArray = Pa),
		(e.isBoolean = function(a) {
			return (
				!0 === a ||
				!1 === a ||
				(a && "object" == typeof a && za.call(a) == ja) ||
				!1
			);
		}),
		(e.isDate = function(a) {
			return (a && "object" == typeof a && za.call(a) == ka) || !1;
		}),
		(e.isElement = function(a) {
			return (a && 1 === a.nodeType) || !1;
		}),
		(e.isEmpty = z),
		(e.isEqual = function(a, b) {
			return m(a, b);
		}),
		(e.isFinite = function(a) {
			return Ia(a) && !Ja(parseFloat(a));
		}),
		(e.isFunction = A),
		(e.isNaN = function(a) {
			return C(a) && a != +a;
		}),
		(e.isNull = function(a) {
			return null === a;
		}),
		(e.isNumber = C),
		(e.isObject = B),
		(e.isRegExp = function(a) {
			return (a && pa[typeof a] && za.call(a) == na) || !1;
		}),
		(e.isString = D),
		(e.isUndefined = function(a) {
			return "undefined" == typeof a;
		}),
		(e.lastIndexOf = function(a, b, c) {
			var d = a ? a.length : 0;
			for (
				"number" == typeof c &&
				(d = (0 > c ? La(0, d + c) : Ma(c, d - 1)) + 1);
				d--;

			)
				if (a[d] === b) return d;
			return -1;
		}),
		(e.mixin = _),
		(e.noConflict = function() {
			return (ra._ = ya), this;
		}),
		(e.random = function(a, b) {
			return (
				null == a && null == b && (b = 1),
				(a = +a || 0),
				null == b ? ((b = a), (a = 0)) : (b = +b || 0),
				a + Ca(Na() * (b - a + 1))
			);
		}),
		(e.reduce = N),
		(e.reduceRight = O),
		(e.result = function(a, b) {
			if (a) {
				var c = a[b];
				return A(c) ? a[b]() : c;
			}
		}),
		(e.size = function(a) {
			var b = a ? a.length : 0;
			return "number" == typeof b ? b : Ra(a).length;
		}),
		(e.some = Q),
		(e.sortedIndex = V),
		(e.template = function(a, b, d) {
			var f = e,
				g = f.templateSettings;
			(a = (a || "") + ""), (d = w({}, d, g));
			var h = 0,
				i = "__p+='",
				g = d.variable;
			a.replace(
				RegExp(
					(d.escape || fa).source +
						"|" +
						(d.interpolate || fa).source +
						"|" +
						(d.evaluate || fa).source +
						"|$",
					"g"
				),
				function(b, d, e, f, g) {
					return (
						(i += a.slice(h, g).replace(ga, c)),
						d && (i += "'+_.escape(" + d + ")+'"),
						f && (i += "';" + f + ";\n__p+='"),
						e && (i += "'+((__t=(" + e + "))==null?'':__t)+'"),
						(h = g + b.length),
						b
					);
				}
			),
				(i += "';"),
				g || ((g = "obj"), (i = "with(" + g + "||{}){" + i + "}")),
				(i =
					"function(" +
					g +
					"){var __t,__p='',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" +
					i +
					"return __p}");
			try {
				var j = Function("_", "return " + i)(f);
			} catch (k) {
				throw ((k.source = i), k);
			}
			return b ? j(b) : ((j.source = i), j);
		}),
		(e.unescape = function(a) {
			return null == a ? "" : (a + "").replace(Ua, t);
		}),
		(e.uniqueId = function(a) {
			var b = ++ca + "";
			return a ? a + b : b;
		}),
		(e.all = G),
		(e.any = Q),
		(e.detect = I),
		(e.findWhere = function(a, b) {
			return R(a, b, !0);
		}),
		(e.foldl = N),
		(e.foldr = O),
		(e.include = F),
		(e.inject = N),
		(e.first = S),
		(e.last = function(a, b, c) {
			var e = 0,
				f = a ? a.length : 0;
			if ("number" != typeof b && null != b) {
				var g = f;
				for (b = Z(b, c, 3); g-- && b(a[g], g, a); ) e++;
			} else if (((e = b), null == e || c)) return a ? a[f - 1] : ba;
			return d(a, La(0, f - e));
		}),
		(e.sample = function(a, b, c) {
			return (
				a && "number" != typeof a.length && (a = E(a)),
				null == b || c
					? a ? a[0 + Ca(Na() * (a.length - 1 - 0 + 1))] : ba
					: ((a = P(a)), (a.length = Ma(La(0, b), a.length)), a)
			);
		}),
		(e.take = S),
		(e.head = S),
		_(e),
		(e.VERSION = "2.4.1"),
		(e.prototype.chain = function() {
			return (this.__chain__ = !0), this;
		}),
		(e.prototype.value = function() {
			return this.__wrapped__;
		}),
		J("pop push reverse shift sort splice unshift".split(" "), function(a) {
			var b = wa[a];
			e.prototype[a] = function() {
				var a = this.__wrapped__;
				return (
					b.apply(a, arguments),
					Oa.spliceObjects || 0 !== a.length || delete a[0],
					this
				);
			};
		}),
		J(["concat", "join", "slice"], function(a) {
			var b = wa[a];
			e.prototype[a] = function() {
				var a = b.apply(this.__wrapped__, arguments);
				return (
					this.__chain__ && ((a = new f(a)), (a.__chain__ = !0)), a
				);
			};
		}),
		"function" == typeof define &&
		"object" == typeof define.amd &&
		define.amd
			? ((ra._ = e),
				define(function() {
					return e;
				}))
			: sa && ta
				? ua ? ((ta.exports = e)._ = e) : (sa._ = e)
				: (ra._ = e);
}.call(this),
	(function(a, b) {
		if ("function" == typeof define && define.amd)
			define(["underscore", "jquery", "exports"], function(c, d, e) {
				a.Backbone = b(a, e, c, d);
			});
		else if ("undefined" != typeof exports) {
			var c = require("underscore");
			b(a, exports, c);
		} else
			a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$);
	})(this, function(a, b, c, d) {
		var e = a.Backbone,
			f = [],
			g = (f.push, f.slice);
		f.splice;
		(b.VERSION = "1.1.2"),
			(b.$ = d),
			(b.noConflict = function() {
				return (a.Backbone = e), this;
			}),
			(b.emulateHTTP = !1),
			(b.emulateJSON = !1);
		var h = (b.Events = {
				on: function(a, b, c) {
					if (!j(this, "on", a, [b, c]) || !b) return this;
					this._events || (this._events = {});
					var d = this._events[a] || (this._events[a] = []);
					return (
						d.push({ callback: b, context: c, ctx: c || this }),
						this
					);
				},
				once: function(a, b, d) {
					if (!j(this, "once", a, [b, d]) || !b) return this;
					var e = this,
						f = c.once(function() {
							e.off(a, f), b.apply(this, arguments);
						});
					return (f._callback = b), this.on(a, f, d);
				},
				off: function(a, b, d) {
					var e, f, g, h, i, k, l, m;
					if (!this._events || !j(this, "off", a, [b, d]))
						return this;
					if (!a && !b && !d) return (this._events = void 0), this;
					for (
						h = a ? [a] : c.keys(this._events), i = 0, k = h.length;
						k > i;
						i++
					)
						if (((a = h[i]), (g = this._events[a]))) {
							if (((this._events[a] = e = []), b || d))
								for (l = 0, m = g.length; m > l; l++)
									(f = g[l]),
										((b &&
											b !== f.callback &&
											b !== f.callback._callback) ||
											(d && d !== f.context)) &&
											e.push(f);
							e.length || delete this._events[a];
						}
					return this;
				},
				trigger: function(a) {
					if (!this._events) return this;
					var b = g.call(arguments, 1);
					if (!j(this, "trigger", a, b)) return this;
					var c = this._events[a],
						d = this._events.all;
					return c && k(c, b), d && k(d, arguments), this;
				},
				stopListening: function(a, b, d) {
					var e = this._listeningTo;
					if (!e) return this;
					var f = !b && !d;
					d || "object" != typeof b || (d = this),
						a && ((e = {})[a._listenId] = a);
					for (var g in e)
						(a = e[g]),
							a.off(b, d, this),
							(f || c.isEmpty(a._events)) &&
								delete this._listeningTo[g];
					return this;
				}
			}),
			i = /\s+/,
			j = function(a, b, c, d) {
				if (!c) return !0;
				if ("object" == typeof c) {
					for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
					return !1;
				}
				if (i.test(c)) {
					for (var f = c.split(i), g = 0, h = f.length; h > g; g++)
						a[b].apply(a, [f[g]].concat(d));
					return !1;
				}
				return !0;
			},
			k = function(a, b) {
				var c,
					d = -1,
					e = a.length,
					f = b[0],
					g = b[1],
					h = b[2];
				switch (b.length) {
					case 0:
						for (; ++d < e; ) (c = a[d]).callback.call(c.ctx);
						return;
					case 1:
						for (; ++d < e; ) (c = a[d]).callback.call(c.ctx, f);
						return;
					case 2:
						for (; ++d < e; ) (c = a[d]).callback.call(c.ctx, f, g);
						return;
					case 3:
						for (; ++d < e; )
							(c = a[d]).callback.call(c.ctx, f, g, h);
						return;
					default:
						for (; ++d < e; ) (c = a[d]).callback.apply(c.ctx, b);
						return;
				}
			},
			l = { listenTo: "on", listenToOnce: "once" };
		c.each(l, function(a, b) {
			h[b] = function(b, d, e) {
				var f = this._listeningTo || (this._listeningTo = {}),
					g = b._listenId || (b._listenId = c.uniqueId("l"));
				return (
					(f[g] = b),
					e || "object" != typeof d || (e = this),
					b[a](d, e, this),
					this
				);
			};
		}),
			(h.bind = h.on),
			(h.unbind = h.off),
			c.extend(b, h);
		var m = (b.Model = function(a, b) {
			var d = a || {};
			b || (b = {}),
				(this.cid = c.uniqueId("c")),
				(this.attributes = {}),
				b.collection && (this.collection = b.collection),
				b.parse && (d = this.parse(d, b) || {}),
				(d = c.defaults({}, d, c.result(this, "defaults"))),
				this.set(d, b),
				(this.changed = {}),
				this.initialize.apply(this, arguments);
		});
		c.extend(m.prototype, h, {
			changed: null,
			validationError: null,
			idAttribute: "id",
			initialize: function() {},
			toJSON: function(a) {
				return c.clone(this.attributes);
			},
			sync: function() {
				return b.sync.apply(this, arguments);
			},
			get: function(a) {
				return this.attributes[a];
			},
			escape: function(a) {
				return c.escape(this.get(a));
			},
			has: function(a) {
				return null != this.get(a);
			},
			set: function(a, b, d) {
				var e, f, g, h, i, j, k, l;
				if (null == a) return this;
				if (
					("object" == typeof a
						? ((f = a), (d = b))
						: ((f = {})[a] = b),
					d || (d = {}),
					!this._validate(f, d))
				)
					return !1;
				(g = d.unset),
					(i = d.silent),
					(h = []),
					(j = this._changing),
					(this._changing = !0),
					j ||
						((this._previousAttributes = c.clone(this.attributes)),
						(this.changed = {})),
					(l = this.attributes),
					(k = this._previousAttributes),
					this.idAttribute in f && (this.id = f[this.idAttribute]);
				for (e in f)
					(b = f[e]),
						c.isEqual(l[e], b) || h.push(e),
						c.isEqual(k[e], b)
							? delete this.changed[e]
							: (this.changed[e] = b),
						g ? delete l[e] : (l[e] = b);
				if (!i) {
					h.length && (this._pending = d);
					for (var m = 0, n = h.length; n > m; m++)
						this.trigger("change:" + h[m], this, l[h[m]], d);
				}
				if (j) return this;
				if (!i)
					for (; this._pending; )
						(d = this._pending),
							(this._pending = !1),
							this.trigger("change", this, d);
				return (this._pending = !1), (this._changing = !1), this;
			},
			unset: function(a, b) {
				return this.set(a, void 0, c.extend({}, b, { unset: !0 }));
			},
			clear: function(a) {
				var b = {};
				for (var d in this.attributes) b[d] = void 0;
				return this.set(b, c.extend({}, a, { unset: !0 }));
			},
			hasChanged: function(a) {
				return null == a
					? !c.isEmpty(this.changed)
					: c.has(this.changed, a);
			},
			changedAttributes: function(a) {
				if (!a) return this.hasChanged() ? c.clone(this.changed) : !1;
				var b,
					d = !1,
					e = this._changing
						? this._previousAttributes
						: this.attributes;
				for (var f in a)
					c.isEqual(e[f], (b = a[f])) || ((d || (d = {}))[f] = b);
				return d;
			},
			previous: function(a) {
				return null != a && this._previousAttributes
					? this._previousAttributes[a]
					: null;
			},
			previousAttributes: function() {
				return c.clone(this._previousAttributes);
			},
			fetch: function(a) {
				(a = a ? c.clone(a) : {}), void 0 === a.parse && (a.parse = !0);
				var b = this,
					d = a.success;
				return (
					(a.success = function(c) {
						return b.set(b.parse(c, a), a)
							? (d && d(b, c, a), void b.trigger("sync", b, c, a))
							: !1;
					}),
					L(this, a),
					this.sync("read", this, a)
				);
			},
			save: function(a, b, d) {
				var e,
					f,
					g,
					h = this.attributes;
				if (
					(null == a || "object" == typeof a
						? ((e = a), (d = b))
						: ((e = {})[a] = b),
					(d = c.extend({ validate: !0 }, d)),
					e && !d.wait)
				) {
					if (!this.set(e, d)) return !1;
				} else if (!this._validate(e, d)) return !1;
				e && d.wait && (this.attributes = c.extend({}, h, e)),
					void 0 === d.parse && (d.parse = !0);
				var i = this,
					j = d.success;
				return (
					(d.success = function(a) {
						i.attributes = h;
						var b = i.parse(a, d);
						return (
							d.wait && (b = c.extend(e || {}, b)),
							c.isObject(b) && !i.set(b, d)
								? !1
								: (j && j(i, a, d),
									void i.trigger("sync", i, a, d))
						);
					}),
					L(this, d),
					(f = this.isNew()
						? "create"
						: d.patch ? "patch" : "update"),
					"patch" === f && (d.attrs = e),
					(g = this.sync(f, this, d)),
					e && d.wait && (this.attributes = h),
					g
				);
			},
			destroy: function(a) {
				a = a ? c.clone(a) : {};
				var b = this,
					d = a.success,
					e = function() {
						b.trigger("destroy", b, b.collection, a);
					};
				if (
					((a.success = function(c) {
						(a.wait || b.isNew()) && e(),
							d && d(b, c, a),
							b.isNew() || b.trigger("sync", b, c, a);
					}),
					this.isNew())
				)
					return a.success(), !1;
				L(this, a);
				var f = this.sync("delete", this, a);
				return a.wait || e(), f;
			},
			url: function() {
				var a =
					c.result(this, "urlRoot") ||
					c.result(this.collection, "url") ||
					K();
				return this.isNew()
					? a
					: a.replace(/([^\/])$/, "$1/") +
							encodeURIComponent(this.id);
			},
			parse: function(a, b) {
				return a;
			},
			clone: function() {
				return new this.constructor(this.attributes);
			},
			isNew: function() {
				return !this.has(this.idAttribute);
			},
			isValid: function(a) {
				return this._validate({}, c.extend(a || {}, { validate: !0 }));
			},
			_validate: function(a, b) {
				if (!b.validate || !this.validate) return !0;
				a = c.extend({}, this.attributes, a);
				var d = (this.validationError = this.validate(a, b) || null);
				return d
					? (this.trigger(
							"invalid",
							this,
							d,
							c.extend(b, { validationError: d })
						),
						!1)
					: !0;
			}
		});
		var n = ["keys", "values", "pairs", "invert", "pick", "omit"];
		c.each(n, function(a) {
			m.prototype[a] = function() {
				var b = g.call(arguments);
				return b.unshift(this.attributes), c[a].apply(c, b);
			};
		});
		var o = (b.Collection = function(a, b) {
				b || (b = {}),
					b.model && (this.model = b.model),
					void 0 !== b.comparator && (this.comparator = b.comparator),
					this._reset(),
					this.initialize.apply(this, arguments),
					a && this.reset(a, c.extend({ silent: !0 }, b));
			}),
			p = { add: !0, remove: !0, merge: !0 },
			q = { add: !0, remove: !1 };
		c.extend(o.prototype, h, {
			model: m,
			initialize: function() {},
			toJSON: function(a) {
				return this.map(function(b) {
					return b.toJSON(a);
				});
			},
			sync: function() {
				return b.sync.apply(this, arguments);
			},
			add: function(a, b) {
				return this.set(a, c.extend({ merge: !1 }, b, q));
			},
			remove: function(a, b) {
				var d = !c.isArray(a);
				(a = d ? [a] : c.clone(a)), b || (b = {});
				var e, f, g, h;
				for (e = 0, f = a.length; f > e; e++)
					(h = a[e] = this.get(a[e])),
						h &&
							(delete this._byId[h.id],
							delete this._byId[h.cid],
							(g = this.indexOf(h)),
							this.models.splice(g, 1),
							this.length--,
							b.silent ||
								((b.index = g),
								h.trigger("remove", h, this, b)),
							this._removeReference(h, b));
				return d ? a[0] : a;
			},
			set: function(a, b) {
				(b = c.defaults({}, b, p)), b.parse && (a = this.parse(a, b));
				var d = !c.isArray(a);
				a = d ? (a ? [a] : []) : c.clone(a);
				var e,
					f,
					g,
					h,
					i,
					j,
					k,
					l = b.at,
					n = this.model,
					o = this.comparator && null == l && b.sort !== !1,
					q = c.isString(this.comparator) ? this.comparator : null,
					r = [],
					s = [],
					t = {},
					u = b.add,
					v = b.merge,
					w = b.remove,
					x = !o && u && w ? [] : !1;
				for (e = 0, f = a.length; f > e; e++) {
					if (
						((i = a[e] || {}),
						(g =
							i instanceof m
								? (h = i)
								: i[n.prototype.idAttribute || "id"]),
						(j = this.get(g)))
					)
						w && (t[j.cid] = !0),
							v &&
								((i = i === h ? h.attributes : i),
								b.parse && (i = j.parse(i, b)),
								j.set(i, b),
								o && !k && j.hasChanged(q) && (k = !0)),
							(a[e] = j);
					else if (u) {
						if (((h = a[e] = this._prepareModel(i, b)), !h))
							continue;
						r.push(h), this._addReference(h, b);
					}
					(h = j || h),
						!x || (!h.isNew() && t[h.id]) || x.push(h),
						(t[h.id] = !0);
				}
				if (w) {
					for (e = 0, f = this.length; f > e; ++e)
						t[(h = this.models[e]).cid] || s.push(h);
					s.length && this.remove(s, b);
				}
				if (r.length || (x && x.length))
					if ((o && (k = !0), (this.length += r.length), null != l))
						for (e = 0, f = r.length; f > e; e++)
							this.models.splice(l + e, 0, r[e]);
					else {
						x && (this.models.length = 0);
						var y = x || r;
						for (e = 0, f = y.length; f > e; e++)
							this.models.push(y[e]);
					}
				if ((k && this.sort({ silent: !0 }), !b.silent)) {
					for (e = 0, f = r.length; f > e; e++)
						(h = r[e]).trigger("add", h, this, b);
					(k || (x && x.length)) && this.trigger("sort", this, b);
				}
				return d ? a[0] : a;
			},
			reset: function(a, b) {
				b || (b = {});
				for (var d = 0, e = this.models.length; e > d; d++)
					this._removeReference(this.models[d], b);
				return (
					(b.previousModels = this.models),
					this._reset(),
					(a = this.add(a, c.extend({ silent: !0 }, b))),
					b.silent || this.trigger("reset", this, b),
					a
				);
			},
			push: function(a, b) {
				return this.add(a, c.extend({ at: this.length }, b));
			},
			pop: function(a) {
				var b = this.at(this.length - 1);
				return this.remove(b, a), b;
			},
			unshift: function(a, b) {
				return this.add(a, c.extend({ at: 0 }, b));
			},
			shift: function(a) {
				var b = this.at(0);
				return this.remove(b, a), b;
			},
			slice: function() {
				return g.apply(this.models, arguments);
			},
			get: function(a) {
				return null != a
					? this._byId[a] || this._byId[a.id] || this._byId[a.cid]
					: void 0;
			},
			at: function(a) {
				return this.models[a];
			},
			where: function(a, b) {
				return c.isEmpty(a)
					? b ? void 0 : []
					: this[b ? "find" : "filter"](function(b) {
							for (var c in a) if (a[c] !== b.get(c)) return !1;
							return !0;
						});
			},
			findWhere: function(a) {
				return this.where(a, !0);
			},
			sort: function(a) {
				if (!this.comparator)
					throw new Error("Cannot sort a set without a comparator");
				return (
					a || (a = {}),
					c.isString(this.comparator) || 1 === this.comparator.length
						? (this.models = this.sortBy(this.comparator, this))
						: this.models.sort(c.bind(this.comparator, this)),
					a.silent || this.trigger("sort", this, a),
					this
				);
			},
			pluck: function(a) {
				return c.invoke(this.models, "get", a);
			},
			fetch: function(a) {
				(a = a ? c.clone(a) : {}), void 0 === a.parse && (a.parse = !0);
				var b = a.success,
					d = this;
				return (
					(a.success = function(c) {
						var e = a.reset ? "reset" : "set";
						d[e](c, a), b && b(d, c, a), d.trigger("sync", d, c, a);
					}),
					L(this, a),
					this.sync("read", this, a)
				);
			},
			create: function(a, b) {
				if (
					((b = b ? c.clone(b) : {}), !(a = this._prepareModel(a, b)))
				)
					return !1;
				b.wait || this.add(a, b);
				var d = this,
					e = b.success;
				return (
					(b.success = function(a, c) {
						b.wait && d.add(a, b), e && e(a, c, b);
					}),
					a.save(null, b),
					a
				);
			},
			parse: function(a, b) {
				return a;
			},
			clone: function() {
				return new this.constructor(this.models);
			},
			_reset: function() {
				(this.length = 0), (this.models = []), (this._byId = {});
			},
			_prepareModel: function(a, b) {
				if (a instanceof m) return a;
				(b = b ? c.clone(b) : {}), (b.collection = this);
				var d = new this.model(a, b);
				return d.validationError
					? (this.trigger("invalid", this, d.validationError, b), !1)
					: d;
			},
			_addReference: function(a, b) {
				(this._byId[a.cid] = a),
					null != a.id && (this._byId[a.id] = a),
					a.collection || (a.collection = this),
					a.on("all", this._onModelEvent, this);
			},
			_removeReference: function(a, b) {
				this === a.collection && delete a.collection,
					a.off("all", this._onModelEvent, this);
			},
			_onModelEvent: function(a, b, c, d) {
				(("add" !== a && "remove" !== a) || c === this) &&
					("destroy" === a && this.remove(b, d),
					b &&
						a === "change:" + b.idAttribute &&
						(delete this._byId[b.previous(b.idAttribute)],
						null != b.id && (this._byId[b.id] = b)),
					this.trigger.apply(this, arguments));
			}
		});
		var r = [
			"forEach",
			"each",
			"map",
			"collect",
			"reduce",
			"foldl",
			"inject",
			"reduceRight",
			"foldr",
			"find",
			"detect",
			"filter",
			"select",
			"reject",
			"every",
			"all",
			"some",
			"any",
			"include",
			"contains",
			"invoke",
			"max",
			"min",
			"toArray",
			"size",
			"first",
			"head",
			"take",
			"initial",
			"rest",
			"tail",
			"drop",
			"last",
			"without",
			"difference",
			"indexOf",
			"shuffle",
			"lastIndexOf",
			"isEmpty",
			"chain",
			"sample"
		];
		c.each(r, function(a) {
			o.prototype[a] = function() {
				var b = g.call(arguments);
				return b.unshift(this.models), c[a].apply(c, b);
			};
		});
		var s = ["groupBy", "countBy", "sortBy", "indexBy"];
		c.each(s, function(a) {
			o.prototype[a] = function(b, d) {
				var e = c.isFunction(b)
					? b
					: function(a) {
							return a.get(b);
						};
				return c[a](this.models, e, d);
			};
		});
		var t = (b.View = function(a) {
				(this.cid = c.uniqueId("view")),
					a || (a = {}),
					c.extend(this, c.pick(a, v)),
					this._ensureElement(),
					this.initialize.apply(this, arguments),
					this.delegateEvents();
			}),
			u = /^(\S+)\s*(.*)$/,
			v = [
				"model",
				"collection",
				"el",
				"id",
				"attributes",
				"className",
				"tagName",
				"events"
			];
		c.extend(t.prototype, h, {
			tagName: "div",
			$: function(a) {
				return this.$el.find(a);
			},
			initialize: function() {},
			render: function() {
				return this;
			},
			remove: function() {
				return this.$el.remove(), this.stopListening(), this;
			},
			setElement: function(a, c) {
				return (
					this.$el && this.undelegateEvents(),
					(this.$el = a instanceof b.$ ? a : b.$(a)),
					(this.el = this.$el[0]),
					c !== !1 && this.delegateEvents(),
					this
				);
			},
			delegateEvents: function(a) {
				if (!a && !(a = c.result(this, "events"))) return this;
				this.undelegateEvents();
				for (var b in a) {
					var d = a[b];
					if ((c.isFunction(d) || (d = this[a[b]]), d)) {
						var e = b.match(u),
							f = e[1],
							g = e[2];
						(d = c.bind(d, this)),
							(f += ".delegateEvents" + this.cid),
							"" === g ? this.$el.on(f, d) : this.$el.on(f, g, d);
					}
				}
				return this;
			},
			undelegateEvents: function() {
				return this.$el.off(".delegateEvents" + this.cid), this;
			},
			_ensureElement: function() {
				if (this.el) this.setElement(c.result(this, "el"), !1);
				else {
					var a = c.extend({}, c.result(this, "attributes"));
					this.id && (a.id = c.result(this, "id")),
						this.className &&
							(a["class"] = c.result(this, "className"));
					var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
					this.setElement(d, !1);
				}
			}
		}),
			(b.sync = function(a, d, e) {
				var f = x[a];
				c.defaults(e || (e = {}), {
					emulateHTTP: b.emulateHTTP,
					emulateJSON: b.emulateJSON
				});
				var g = { type: f, dataType: "json" };
				if (
					(e.url || (g.url = c.result(d, "url") || K()),
					null != e.data ||
						!d ||
						("create" !== a && "update" !== a && "patch" !== a) ||
						((g.contentType = "application/json"),
						(g.data = JSON.stringify(e.attrs || d.toJSON(e)))),
					e.emulateJSON &&
						((g.contentType = "application/x-www-form-urlencoded"),
						(g.data = g.data ? { model: g.data } : {})),
					e.emulateHTTP &&
						("PUT" === f || "DELETE" === f || "PATCH" === f))
				) {
					(g.type = "POST"), e.emulateJSON && (g.data._method = f);
					var h = e.beforeSend;
					e.beforeSend = function(a) {
						return (
							a.setRequestHeader("X-HTTP-Method-Override", f),
							h ? h.apply(this, arguments) : void 0
						);
					};
				}
				"GET" === g.type || e.emulateJSON || (g.processData = !1),
					"PATCH" === g.type &&
						w &&
						(g.xhr = function() {
							return new ActiveXObject("Microsoft.XMLHTTP");
						});
				var i = (e.xhr = b.ajax(c.extend(g, e)));
				return d.trigger("request", d, i, e), i;
			});
		var w = !(
				"undefined" == typeof window ||
				!window.ActiveXObject ||
				(window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
			),
			x = {
				create: "POST",
				update: "PUT",
				patch: "PATCH",
				delete: "DELETE",
				read: "GET"
			};
		b.ajax = function() {
			return b.$.ajax.apply(b.$, arguments);
		};
		var y = (b.Router = function(a) {
				a || (a = {}),
					a.routes && (this.routes = a.routes),
					this._bindRoutes(),
					this.initialize.apply(this, arguments);
			}),
			z = /\((.*?)\)/g,
			A = /(\(\?)?:\w+/g,
			B = /\*\w+/g,
			C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
		c.extend(y.prototype, h, {
			initialize: function() {},
			route: function(a, d, e) {
				c.isRegExp(a) || (a = this._routeToRegExp(a)),
					c.isFunction(d) && ((e = d), (d = "")),
					e || (e = this[d]);
				var f = this;
				return (
					b.history.route(a, function(c) {
						var g = f._extractParameters(a, c);
						f.execute(e, g),
							f.trigger.apply(f, ["route:" + d].concat(g)),
							f.trigger("route", d, g),
							b.history.trigger("route", f, d, g);
					}),
					this
				);
			},
			execute: function(a, b) {
				a && a.apply(this, b);
			},
			navigate: function(a, c) {
				return b.history.navigate(a, c), this;
			},
			_bindRoutes: function() {
				if (this.routes) {
					this.routes = c.result(this, "routes");
					for (
						var a, b = c.keys(this.routes);
						null != (a = b.pop());

					)
						this.route(a, this.routes[a]);
				}
			},
			_routeToRegExp: function(a) {
				return (
					(a = a
						.replace(C, "\\$&")
						.replace(z, "(?:$1)?")
						.replace(A, function(a, b) {
							return b ? a : "([^/?]+)";
						})
						.replace(B, "([^?]*?)")),
					new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
				);
			},
			_extractParameters: function(a, b) {
				var d = a.exec(b).slice(1);
				return c.map(d, function(a, b) {
					return b === d.length - 1
						? a || null
						: a ? decodeURIComponent(a) : null;
				});
			}
		});
		var D = (b.History = function() {
				(this.handlers = []),
					c.bindAll(this, "checkUrl"),
					"undefined" != typeof window &&
						((this.location = window.location),
						(this.history = window.history));
			}),
			E = /^[#\/]|\s+$/g,
			F = /^\/+|\/+$/g,
			G = /msie [\w.]+/,
			H = /\/$/,
			I = /#.*$/;
		(D.started = !1),
			c.extend(D.prototype, h, {
				interval: 50,
				atRoot: function() {
					return (
						this.location.pathname.replace(/[^\/]$/, "$&/") ===
						this.root
					);
				},
				getHash: function(a) {
					var b = (a || this).location.href.match(/#(.*)$/);
					return b ? b[1] : "";
				},
				getFragment: function(a, b) {
					if (null == a)
						if (this._hasPushState || !this._wantsHashChange || b) {
							a = decodeURI(
								this.location.pathname + this.location.search
							);
							var c = this.root.replace(H, "");
							a.indexOf(c) || (a = a.slice(c.length));
						} else a = this.getHash();
					return a.replace(E, "");
				},
				start: function(a) {
					if (D.started)
						throw new Error(
							"Backbone.history has already been started"
						);
					(D.started = !0),
						(this.options = c.extend(
							{ root: "/" },
							this.options,
							a
						)),
						(this.root = this.options.root),
						(this._wantsHashChange =
							this.options.hashChange !== !1),
						(this._wantsPushState = !!this.options.pushState),
						(this._hasPushState = !!(
							this.options.pushState &&
							this.history &&
							this.history.pushState
						));
					var d = this.getFragment(),
						e = document.documentMode,
						f =
							G.exec(navigator.userAgent.toLowerCase()) &&
							(!e || 7 >= e);
					if (
						((this.root = ("/" + this.root + "/").replace(F, "/")),
						f && this._wantsHashChange)
					) {
						var g = b.$(
							'<iframe src="javascript:0" tabindex="-1">'
						);
						(this.iframe = g
							.hide()
							.appendTo("body")[0].contentWindow),
							this.navigate(d);
					}
					this._hasPushState
						? b.$(window).on("popstate", this.checkUrl)
						: this._wantsHashChange &&
							"onhashchange" in window &&
							!f
							? b.$(window).on("hashchange", this.checkUrl)
							: this._wantsHashChange &&
								(this._checkUrlInterval = setInterval(
									this.checkUrl,
									this.interval
								)),
						(this.fragment = d);
					var h = this.location;
					if (this._wantsHashChange && this._wantsPushState) {
						if (!this._hasPushState && !this.atRoot())
							return (
								(this.fragment = this.getFragment(null, !0)),
								this.location.replace(
									this.root + "#" + this.fragment
								),
								!0
							);
						this._hasPushState &&
							this.atRoot() &&
							h.hash &&
							((this.fragment = this.getHash().replace(E, "")),
							this.history.replaceState(
								{},
								document.title,
								this.root + this.fragment
							));
					}
					return this.options.silent ? void 0 : this.loadUrl();
				},
				stop: function() {
					b
						.$(window)
						.off("popstate", this.checkUrl)
						.off("hashchange", this.checkUrl),
						this._checkUrlInterval &&
							clearInterval(this._checkUrlInterval),
						(D.started = !1);
				},
				route: function(a, b) {
					this.handlers.unshift({ route: a, callback: b });
				},
				checkUrl: function(a) {
					var b = this.getFragment();
					return (
						b === this.fragment &&
							this.iframe &&
							(b = this.getFragment(this.getHash(this.iframe))),
						b === this.fragment
							? !1
							: (this.iframe && this.navigate(b),
								void this.loadUrl())
					);
				},
				loadUrl: function(a) {
					return (
						(a = this.fragment = this.getFragment(a)),
						c.any(this.handlers, function(b) {
							return b.route.test(a)
								? (b.callback(a), !0)
								: void 0;
						})
					);
				},
				navigate: function(a, b) {
					if (!D.started) return !1;
					(b && b !== !0) || (b = { trigger: !!b });
					var c = this.root + (a = this.getFragment(a || ""));
					if (((a = a.replace(I, "")), this.fragment !== a)) {
						if (
							((this.fragment = a),
							"" === a && "/" !== c && (c = c.slice(0, -1)),
							this._hasPushState)
						)
							this.history[
								b.replace ? "replaceState" : "pushState"
							]({}, document.title, c);
						else {
							if (!this._wantsHashChange)
								return this.location.assign(c);
							this._updateHash(this.location, a, b.replace),
								this.iframe &&
									a !==
										this.getFragment(
											this.getHash(this.iframe)
										) &&
									(b.replace ||
										this.iframe.document.open().close(),
									this._updateHash(
										this.iframe.location,
										a,
										b.replace
									));
						}
						return b.trigger ? this.loadUrl(a) : void 0;
					}
				},
				_updateHash: function(a, b, c) {
					if (c) {
						var d = a.href.replace(/(javascript:|#).*$/, "");
						a.replace(d + "#" + b);
					} else a.hash = "#" + b;
				}
			}),
			(b.history = new D());
		var J = function(a, b) {
			var d,
				e = this;
			(d =
				a && c.has(a, "constructor")
					? a.constructor
					: function() {
							return e.apply(this, arguments);
						}),
				c.extend(d, e, b);
			var f = function() {
				this.constructor = d;
			};
			return (
				(f.prototype = e.prototype),
				(d.prototype = new f()),
				a && c.extend(d.prototype, a),
				(d.__super__ = e.prototype),
				d
			);
		};
		m.extend = o.extend = y.extend = t.extend = D.extend = J;
		var K = function() {
				throw new Error(
					'A "url" property or function must be specified'
				);
			},
			L = function(a, b) {
				var c = b.error;
				b.error = function(d) {
					c && c(a, d, b), a.trigger("error", a, d, b);
				};
			};
		return b;
	}),
	(function(a) {
		"function" == typeof define && define.amd
			? define(["jquery"], a)
			: "object" == typeof exports ? (module.exports = a) : a(jQuery);
	})(function(a) {
		function b(b) {
			var g = b || window.event,
				h = i.call(arguments, 1),
				j = 0,
				l = 0,
				m = 0,
				n = 0,
				o = 0,
				p = 0;
			if (
				((b = a.event.fix(g)),
				(b.type = "mousewheel"),
				"detail" in g && (m = -1 * g.detail),
				"wheelDelta" in g && (m = g.wheelDelta),
				"wheelDeltaY" in g && (m = g.wheelDeltaY),
				"wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
				"axis" in g &&
					g.axis === g.HORIZONTAL_AXIS &&
					((l = -1 * m), (m = 0)),
				(j = 0 === m ? l : m),
				"deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
				"deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
				0 !== m || 0 !== l)
			) {
				if (1 === g.deltaMode) {
					var q = a.data(this, "mousewheel-line-height");
					(j *= q), (m *= q), (l *= q);
				} else if (2 === g.deltaMode) {
					var r = a.data(this, "mousewheel-page-height");
					(j *= r), (m *= r), (l *= r);
				}
				if (
					((n = Math.max(Math.abs(m), Math.abs(l))),
					(!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
					d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
					(j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
					(l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
					(m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
					k.settings.normalizeOffset && this.getBoundingClientRect)
				) {
					var s = this.getBoundingClientRect();
					(o = b.clientX - s.left), (p = b.clientY - s.top);
				}
				return (
					(b.deltaX = l),
					(b.deltaY = m),
					(b.deltaFactor = f),
					(b.offsetX = o),
					(b.offsetY = p),
					(b.deltaMode = 0),
					h.unshift(b, j, l, m),
					e && clearTimeout(e),
					(e = setTimeout(c, 200)),
					(a.event.dispatch || a.event.handle).apply(this, h)
				);
			}
		}
		function c() {
			f = null;
		}
		function d(a, b) {
			return (
				k.settings.adjustOldDeltas &&
				"mousewheel" === a.type &&
				b % 120 === 0
			);
		}
		var e,
			f,
			g = [
				"wheel",
				"mousewheel",
				"DOMMouseScroll",
				"MozMousePixelScroll"
			],
			h =
				"onwheel" in document || document.documentMode >= 9
					? ["wheel"]
					: ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
			i = Array.prototype.slice;
		if (a.event.fixHooks)
			for (var j = g.length; j; )
				a.event.fixHooks[g[--j]] = a.event.mouseHooks;
		var k = (a.event.special.mousewheel = {
			version: "3.1.12",
			setup: function() {
				if (this.addEventListener)
					for (var c = h.length; c; )
						this.addEventListener(h[--c], b, !1);
				else this.onmousewheel = b;
				a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
					a.data(
						this,
						"mousewheel-page-height",
						k.getPageHeight(this)
					);
			},
			teardown: function() {
				if (this.removeEventListener)
					for (var c = h.length; c; )
						this.removeEventListener(h[--c], b, !1);
				else this.onmousewheel = null;
				a.removeData(this, "mousewheel-line-height"),
					a.removeData(this, "mousewheel-page-height");
			},
			getLineHeight: function(b) {
				var c = a(b),
					d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
				return (
					d.length || (d = a("body")),
					parseInt(d.css("fontSize"), 10) ||
						parseInt(c.css("fontSize"), 10) ||
						16
				);
			},
			getPageHeight: function(b) {
				return a(b).height();
			},
			settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
		});
		a.fn.extend({
			mousewheel: function(a) {
				return a
					? this.bind("mousewheel", a)
					: this.trigger("mousewheel");
			},
			unmousewheel: function(a) {
				return this.unbind("mousewheel", a);
			}
		});
	}),
	(function(a, b, c) {
		function d(a, c) {
			(this.wrapper = "string" == typeof a ? b.querySelector(a) : a),
				(this.scroller = this.wrapper.children[0]),
				(this.scrollerStyle = this.scroller.style),
				(this.options = {
					resizeScrollbars: !0,
					mouseWheelSpeed: 20,
					snapThreshold: 0.334,
					startX: 0,
					startY: 0,
					scrollY: !0,
					directionLockThreshold: 5,
					momentum: !0,
					bounce: !0,
					bounceTime: 600,
					bounceEasing: "",
					preventDefault: !0,
					preventDefaultException: {
						tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
					},
					HWCompositing: !0,
					useTransition: !0,
					useTransform: !0
				});
			for (var d in c) this.options[d] = c[d];
			(this.translateZ =
				this.options.HWCompositing && h.hasPerspective
					? " translateZ(0)"
					: ""),
				(this.options.useTransition =
					h.hasTransition && this.options.useTransition),
				(this.options.useTransform =
					h.hasTransform && this.options.useTransform),
				(this.options.eventPassthrough =
					this.options.eventPassthrough === !0
						? "vertical"
						: this.options.eventPassthrough),
				(this.options.preventDefault =
					!this.options.eventPassthrough &&
					this.options.preventDefault),
				(this.options.scrollY =
					"vertical" == this.options.eventPassthrough
						? !1
						: this.options.scrollY),
				(this.options.scrollX =
					"horizontal" == this.options.eventPassthrough
						? !1
						: this.options.scrollX),
				(this.options.freeScroll =
					this.options.freeScroll && !this.options.eventPassthrough),
				(this.options.directionLockThreshold = this.options
					.eventPassthrough
					? 0
					: this.options.directionLockThreshold),
				(this.options.bounceEasing =
					"string" == typeof this.options.bounceEasing
						? h.ease[this.options.bounceEasing] || h.ease.circular
						: this.options.bounceEasing),
				(this.options.resizePolling =
					void 0 === this.options.resizePolling
						? 60
						: this.options.resizePolling),
				this.options.tap === !0 && (this.options.tap = "tap"),
				"scale" == this.options.shrinkScrollbars &&
					(this.options.useTransition = !1),
				(this.options.invertWheelDirection = this.options
					.invertWheelDirection
					? -1
					: 1),
				3 == this.options.probeType &&
					(this.options.useTransition = !1),
				(this.x = 0),
				(this.y = 0),
				(this.directionX = 0),
				(this.directionY = 0),
				(this._events = {}),
				this._init(),
				this.refresh(),
				this.scrollTo(this.options.startX, this.options.startY),
				this.enable();
		}
		function e(a, c, d) {
			var e = b.createElement("div"),
				f = b.createElement("div");
			return (
				d === !0 &&
					((e.style.cssText = "position:absolute;z-index:9999"),
					(f.style.cssText =
						"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
				(f.className = "iScrollIndicator"),
				"h" == a
					? (d === !0 &&
							((e.style.cssText +=
								";height:7px;left:2px;right:2px;bottom:0"),
							(f.style.height = "100%")),
						(e.className = "iScrollHorizontalScrollbar"))
					: (d === !0 &&
							((e.style.cssText +=
								";width:7px;bottom:2px;top:2px;right:1px"),
							(f.style.width = "100%")),
						(e.className = "iScrollVerticalScrollbar")),
				(e.style.cssText += ";overflow:hidden"),
				c || (e.style.pointerEvents = "none"),
				e.appendChild(f),
				e
			);
		}
		function f(c, d) {
			(this.wrapper =
				"string" == typeof d.el ? b.querySelector(d.el) : d.el),
				(this.wrapperStyle = this.wrapper.style),
				(this.indicator = this.wrapper.children[0]),
				(this.indicatorStyle = this.indicator.style),
				(this.scroller = c),
				(this.options = {
					listenX: !0,
					listenY: !0,
					interactive: !1,
					resize: !0,
					defaultScrollbars: !1,
					shrink: !1,
					fade: !1,
					speedRatioX: 0,
					speedRatioY: 0
				});
			for (var e in d) this.options[e] = d[e];
			(this.sizeRatioX = 1),
				(this.sizeRatioY = 1),
				(this.maxPosX = 0),
				(this.maxPosY = 0),
				this.options.interactive &&
					(this.options.disableTouch ||
						(h.addEvent(this.indicator, "touchstart", this),
						h.addEvent(a, "touchend", this)),
					this.options.disablePointer ||
						(h.addEvent(
							this.indicator,
							h.prefixPointerEvent("pointerdown"),
							this
						),
						h.addEvent(a, h.prefixPointerEvent("pointerup"), this)),
					this.options.disableMouse ||
						(h.addEvent(this.indicator, "mousedown", this),
						h.addEvent(a, "mouseup", this))),
				this.options.fade &&
					((this.wrapperStyle[
						h.style.transform
					] = this.scroller.translateZ),
					(this.wrapperStyle[
						h.style.transitionDuration
					] = h.isBadAndroid ? "0.001s" : "0ms"),
					(this.wrapperStyle.opacity = "0"));
		}
		var g =
				a.requestAnimationFrame ||
				a.webkitRequestAnimationFrame ||
				a.mozRequestAnimationFrame ||
				a.oRequestAnimationFrame ||
				a.msRequestAnimationFrame ||
				function(b) {
					a.setTimeout(b, 1e3 / 60);
				},
			h = (function() {
				function d(a) {
					return g === !1
						? !1
						: "" === g
							? a
							: g + a.charAt(0).toUpperCase() + a.substr(1);
				}
				var e = {},
					f = b.createElement("div").style,
					g = (function() {
						for (
							var a,
								b = ["t", "webkitT", "MozT", "msT", "OT"],
								c = 0,
								d = b.length;
							d > c;
							c++
						)
							if (((a = b[c] + "ransform"), a in f))
								return b[c].substr(0, b[c].length - 1);
						return !1;
					})();
				(e.getTime =
					Date.now ||
					function() {
						return new Date().getTime();
					}),
					(e.extend = function(a, b) {
						for (var c in b) a[c] = b[c];
					}),
					(e.addEvent = function(a, b, c, d) {
						a.addEventListener(b, c, !!d);
					}),
					(e.removeEvent = function(a, b, c, d) {
						a.removeEventListener(b, c, !!d);
					}),
					(e.prefixPointerEvent = function(b) {
						return a.MSPointerEvent
							? "MSPointer" +
									b.charAt(9).toUpperCase() +
									b.substr(10)
							: b;
					}),
					(e.momentum = function(a, b, d, e, f, g) {
						var h,
							i,
							j = a - b,
							k = c.abs(j) / d;
						return (
							(g = void 0 === g ? 6e-4 : g),
							(h = a + k * k / (2 * g) * (0 > j ? -1 : 1)),
							(i = k / g),
							e > h
								? ((h = f ? e - f / 2.5 * (k / 8) : e),
									(j = c.abs(h - a)),
									(i = j / k))
								: h > 0 &&
									((h = f ? f / 2.5 * (k / 8) : 0),
									(j = c.abs(a) + h),
									(i = j / k)),
							{ destination: c.round(h), duration: i }
						);
					});
				var h = d("transform");
				return (
					e.extend(e, {
						hasTransform: h !== !1,
						hasPerspective: d("perspective") in f,
						hasTouch: "ontouchstart" in a,
						hasPointer: a.PointerEvent || a.MSPointerEvent,
						hasTransition: d("transition") in f
					}),
					(e.isBadAndroid =
						/Android /.test(a.navigator.appVersion) &&
						!/Chrome\/\d/.test(a.navigator.appVersion)),
					e.extend((e.style = {}), {
						transform: h,
						transitionTimingFunction: d("transitionTimingFunction"),
						transitionDuration: d("transitionDuration"),
						transitionDelay: d("transitionDelay"),
						transformOrigin: d("transformOrigin")
					}),
					(e.hasClass = function(a, b) {
						var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
						return c.test(a.className);
					}),
					(e.addClass = function(a, b) {
						if (!e.hasClass(a, b)) {
							var c = a.className.split(" ");
							c.push(b), (a.className = c.join(" "));
						}
					}),
					(e.removeClass = function(a, b) {
						if (e.hasClass(a, b)) {
							var c = new RegExp("(^|\\s)" + b + "(\\s|$)", "g");
							a.className = a.className.replace(c, " ");
						}
					}),
					(e.offset = function(a) {
						for (
							var b = -a.offsetLeft, c = -a.offsetTop;
							(a = a.offsetParent);

						)
							(b -= a.offsetLeft), (c -= a.offsetTop);
						return { left: b, top: c };
					}),
					(e.preventDefaultException = function(a, b) {
						for (var c in b) if (b[c].test(a[c])) return !0;
						return !1;
					}),
					e.extend((e.eventType = {}), {
						touchstart: 1,
						touchmove: 1,
						touchend: 1,
						mousedown: 2,
						mousemove: 2,
						mouseup: 2,
						pointerdown: 3,
						pointermove: 3,
						pointerup: 3,
						MSPointerDown: 3,
						MSPointerMove: 3,
						MSPointerUp: 3
					}),
					e.extend((e.ease = {}), {
						quadratic: {
							style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
							fn: function(a) {
								return a * (2 - a);
							}
						},
						circular: {
							style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
							fn: function(a) {
								return c.sqrt(1 - --a * a);
							}
						},
						back: {
							style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
							fn: function(a) {
								var b = 4;
								return (a -= 1) * a * ((b + 1) * a + b) + 1;
							}
						},
						bounce: {
							style: "",
							fn: function(a) {
								return (a /= 1) < 1 / 2.75
									? 7.5625 * a * a
									: 2 / 2.75 > a
										? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
										: 2.5 / 2.75 > a
											? 7.5625 * (a -= 2.25 / 2.75) * a +
												0.9375
											: 7.5625 * (a -= 2.625 / 2.75) * a +
												0.984375;
							}
						},
						elastic: {
							style: "",
							fn: function(a) {
								var b = 0.22,
									d = 0.4;
								return 0 === a
									? 0
									: 1 == a
										? 1
										: d *
												c.pow(2, -10 * a) *
												c.sin(
													(a - b / 4) * (2 * c.PI) / b
												) +
											1;
							}
						}
					}),
					(e.tap = function(a, c) {
						var d = b.createEvent("Event");
						d.initEvent(c, !0, !0),
							(d.pageX = a.pageX),
							(d.pageY = a.pageY),
							a.target.dispatchEvent(d);
					}),
					(e.click = function(a) {
						var c,
							d = a.target;
						/(SELECT|INPUT|TEXTAREA)/i.test(d.tagName) ||
							((c = b.createEvent("MouseEvents")),
							c.initMouseEvent(
								"click",
								!0,
								!0,
								a.view,
								1,
								d.screenX,
								d.screenY,
								d.clientX,
								d.clientY,
								a.ctrlKey,
								a.altKey,
								a.shiftKey,
								a.metaKey,
								0,
								null
							),
							(c._constructed = !0),
							d.dispatchEvent(c));
					}),
					e
				);
			})();
		(d.prototype = {
			version: "5.1.3",
			_init: function() {
				this._initEvents(),
					(this.options.scrollbars || this.options.indicators) &&
						this._initIndicators(),
					this.options.mouseWheel && this._initWheel(),
					this.options.snap && this._initSnap(),
					this.options.keyBindings && this._initKeys();
			},
			destroy: function() {
				this._initEvents(!0), this._execEvent("destroy");
			},
			_transitionEnd: function(a) {
				a.target == this.scroller &&
					this.isInTransition &&
					(this._transitionTime(),
					this.resetPosition(this.options.bounceTime) ||
						((this.isInTransition = !1),
						this._execEvent("scrollEnd")));
			},
			_start: function(a) {
				if (
					(1 == h.eventType[a.type] || 0 === a.button) &&
					this.enabled &&
					(!this.initiated || h.eventType[a.type] === this.initiated)
				) {
					!this.options.preventDefault ||
						h.isBadAndroid ||
						h.preventDefaultException(
							a.target,
							this.options.preventDefaultException
						) ||
						a.preventDefault();
					var b,
						d = a.touches ? a.touches[0] : a;
					(this.initiated = h.eventType[a.type]),
						(this.moved = !1),
						(this.distX = 0),
						(this.distY = 0),
						(this.directionX = 0),
						(this.directionY = 0),
						(this.directionLocked = 0),
						this._transitionTime(),
						(this.startTime = h.getTime()),
						this.options.useTransition && this.isInTransition
							? ((this.isInTransition = !1),
								(b = this.getComputedPosition()),
								this._translate(c.round(b.x), c.round(b.y)),
								this._execEvent("scrollEnd"))
							: !this.options.useTransition &&
								this.isAnimating &&
								((this.isAnimating = !1),
								this._execEvent("scrollEnd")),
						(this.startX = this.x),
						(this.startY = this.y),
						(this.absStartX = this.x),
						(this.absStartY = this.y),
						(this.pointX = d.pageX),
						(this.pointY = d.pageY),
						this._execEvent("beforeScrollStart");
				}
			},
			_move: function(a) {
				if (this.enabled && h.eventType[a.type] === this.initiated) {
					this.options.preventDefault && a.preventDefault();
					var b,
						d,
						e,
						f,
						g = a.touches ? a.touches[0] : a,
						i = g.pageX - this.pointX,
						j = g.pageY - this.pointY,
						k = h.getTime();
					if (
						((this.pointX = g.pageX),
						(this.pointY = g.pageY),
						(this.distX += i),
						(this.distY += j),
						(e = c.abs(this.distX)),
						(f = c.abs(this.distY)),
						!(k - this.endTime > 300 && 10 > e && 10 > f))
					) {
						if (
							(this.directionLocked ||
								this.options.freeScroll ||
								(e > f + this.options.directionLockThreshold
									? (this.directionLocked = "h")
									: f >=
										e + this.options.directionLockThreshold
										? (this.directionLocked = "v")
										: (this.directionLocked = "n")),
							"h" == this.directionLocked)
						) {
							if ("vertical" == this.options.eventPassthrough)
								a.preventDefault();
							else if (
								"horizontal" == this.options.eventPassthrough
							)
								return void (this.initiated = !1);
							j = 0;
						} else if ("v" == this.directionLocked) {
							if ("horizontal" == this.options.eventPassthrough)
								a.preventDefault();
							else if (
								"vertical" == this.options.eventPassthrough
							)
								return void (this.initiated = !1);
							i = 0;
						}
						(i = this.hasHorizontalScroll ? i : 0),
							(j = this.hasVerticalScroll ? j : 0),
							(b = this.x + i),
							(d = this.y + j),
							(b > 0 || b < this.maxScrollX) &&
								(b = this.options.bounce
									? this.x + i / 3
									: b > 0 ? 0 : this.maxScrollX),
							(d > 0 || d < this.maxScrollY) &&
								(d = this.options.bounce
									? this.y + j / 3
									: d > 0 ? 0 : this.maxScrollY),
							(this.directionX = i > 0 ? -1 : 0 > i ? 1 : 0),
							(this.directionY = j > 0 ? -1 : 0 > j ? 1 : 0),
							this.moved || this._execEvent("scrollStart"),
							(this.moved = !0),
							this._translate(b, d),
							k - this.startTime > 300 &&
								((this.startTime = k),
								(this.startX = this.x),
								(this.startY = this.y),
								1 == this.options.probeType &&
									this._execEvent("scroll")),
							this.options.probeType > 1 &&
								this._execEvent("scroll");
					}
				}
			},
			_end: function(a) {
				if (this.enabled && h.eventType[a.type] === this.initiated) {
					this.options.preventDefault &&
						!h.preventDefaultException(
							a.target,
							this.options.preventDefaultException
						) &&
						a.preventDefault();
					var b,
						d,
						e = (a.changedTouches ? a.changedTouches[0] : a,
						h.getTime() - this.startTime),
						f = c.round(this.x),
						g = c.round(this.y),
						i = c.abs(f - this.startX),
						j = c.abs(g - this.startY),
						k = 0,
						l = "";
					if (
						((this.isInTransition = 0),
						(this.initiated = 0),
						(this.endTime = h.getTime()),
						!this.resetPosition(this.options.bounceTime))
					) {
						if ((this.scrollTo(f, g), !this.moved))
							return (
								this.options.tap && h.tap(a, this.options.tap),
								this.options.click && h.click(a),
								void this._execEvent("scrollCancel")
							);
						if (this._events.flick && 200 > e && 100 > i && 100 > j)
							return void this._execEvent("flick");
						if (
							(this.options.momentum &&
								300 > e &&
								((b = this.hasHorizontalScroll
									? h.momentum(
											this.x,
											this.startX,
											e,
											this.maxScrollX,
											this.options.bounce
												? this.wrapperWidth
												: 0,
											this.options.deceleration
										)
									: { destination: f, duration: 0 }),
								(d = this.hasVerticalScroll
									? h.momentum(
											this.y,
											this.startY,
											e,
											this.maxScrollY,
											this.options.bounce
												? this.wrapperHeight
												: 0,
											this.options.deceleration
										)
									: { destination: g, duration: 0 }),
								(f = b.destination),
								(g = d.destination),
								(k = c.max(b.duration, d.duration)),
								(this.isInTransition = 1)),
							this.options.snap)
						) {
							var m = this._nearestSnap(f, g);
							(this.currentPage = m),
								(k =
									this.options.snapSpeed ||
									c.max(
										c.max(
											c.min(c.abs(f - m.x), 1e3),
											c.min(c.abs(g - m.y), 1e3)
										),
										300
									)),
								(f = m.x),
								(g = m.y),
								(this.directionX = 0),
								(this.directionY = 0),
								(l = this.options.bounceEasing);
						}
						return f != this.x || g != this.y
							? ((f > 0 ||
									f < this.maxScrollX ||
									g > 0 ||
									g < this.maxScrollY) &&
									(l = h.ease.quadratic),
								void this.scrollTo(f, g, k, l))
							: void this._execEvent("scrollEnd");
					}
				}
			},
			_resize: function() {
				var a = this;
				clearTimeout(this.resizeTimeout),
					(this.resizeTimeout = setTimeout(function() {
						a.refresh();
					}, this.options.resizePolling));
			},
			resetPosition: function(a) {
				var b = this.x,
					c = this.y;
				return (
					(a = a || 0),
					!this.hasHorizontalScroll || this.x > 0
						? (b = 0)
						: this.x < this.maxScrollX && (b = this.maxScrollX),
					!this.hasVerticalScroll || this.y > 0
						? (c = 0)
						: this.y < this.maxScrollY && (c = this.maxScrollY),
					b == this.x && c == this.y
						? !1
						: (this.scrollTo(b, c, a, this.options.bounceEasing),
							!0)
				);
			},
			disable: function() {
				this.enabled = !1;
			},
			enable: function() {
				this.enabled = !0;
			},
			refresh: function() {
				this.wrapper.offsetHeight;
				(this.wrapperWidth = this.wrapper.clientWidth),
					(this.wrapperHeight = this.wrapper.clientHeight),
					(this.scrollerWidth = this.scroller.offsetWidth),
					(this.scrollerHeight = this.scroller.offsetHeight),
					(this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
					(this.maxScrollY =
						this.wrapperHeight - this.scrollerHeight),
					(this.hasHorizontalScroll =
						this.options.scrollX && this.maxScrollX < 0),
					(this.hasVerticalScroll =
						this.options.scrollY && this.maxScrollY < 0),
					this.hasHorizontalScroll ||
						((this.maxScrollX = 0),
						(this.scrollerWidth = this.wrapperWidth)),
					this.hasVerticalScroll ||
						((this.maxScrollY = 0),
						(this.scrollerHeight = this.wrapperHeight)),
					(this.endTime = 0),
					(this.directionX = 0),
					(this.directionY = 0),
					(this.wrapperOffset = h.offset(this.wrapper)),
					this._execEvent("refresh"),
					this.resetPosition();
			},
			on: function(a, b) {
				this._events[a] || (this._events[a] = []),
					this._events[a].push(b);
			},
			off: function(a, b) {
				if (this._events[a]) {
					var c = this._events[a].indexOf(b);
					c > -1 && this._events[a].splice(c, 1);
				}
			},
			_execEvent: function(a) {
				if (this._events[a]) {
					var b = 0,
						c = this._events[a].length;
					if (c)
						for (; c > b; b++)
							this._events[a][b].apply(
								this,
								[].slice.call(arguments, 1)
							);
				}
			},
			scrollBy: function(a, b, c, d) {
				(a = this.x + a),
					(b = this.y + b),
					(c = c || 0),
					this.scrollTo(a, b, c, d);
			},
			scrollTo: function(a, b, c, d) {
				(d = d || h.ease.circular),
					(this.isInTransition = this.options.useTransition && c > 0),
					!c || (this.options.useTransition && d.style)
						? (this._transitionTimingFunction(d.style),
							this._transitionTime(c),
							this._translate(a, b))
						: this._animate(a, b, c, d.fn);
			},
			scrollToElement: function(a, b, d, e, f) {
				if ((a = a.nodeType ? a : this.scroller.querySelector(a))) {
					var g = h.offset(a);
					(g.left -= this.wrapperOffset.left),
						(g.top -= this.wrapperOffset.top),
						d === !0 &&
							(d = c.round(
								a.offsetWidth / 2 - this.wrapper.offsetWidth / 2
							)),
						e === !0 &&
							(e = c.round(
								a.offsetHeight / 2 -
									this.wrapper.offsetHeight / 2
							)),
						(g.left -= d || 0),
						(g.top -= e || 0),
						(g.left =
							g.left > 0
								? 0
								: g.left < this.maxScrollX
									? this.maxScrollX
									: g.left),
						(g.top =
							g.top > 0
								? 0
								: g.top < this.maxScrollY
									? this.maxScrollY
									: g.top),
						(b =
							void 0 === b || null === b || "auto" === b
								? c.max(
										c.abs(this.x - g.left),
										c.abs(this.y - g.top)
									)
								: b),
						this.scrollTo(g.left, g.top, b, f);
				}
			},
			_transitionTime: function(a) {
				if (
					((a = a || 0),
					(this.scrollerStyle[h.style.transitionDuration] = a + "ms"),
					!a &&
						h.isBadAndroid &&
						(this.scrollerStyle[h.style.transitionDuration] =
							"0.001s"),
					this.indicators)
				)
					for (var b = this.indicators.length; b--; )
						this.indicators[b].transitionTime(a);
			},
			_transitionTimingFunction: function(a) {
				if (
					((this.scrollerStyle[h.style.transitionTimingFunction] = a),
					this.indicators)
				)
					for (var b = this.indicators.length; b--; )
						this.indicators[b].transitionTimingFunction(a);
			},
			_translate: function(a, b) {
				if (
					(this.options.useTransform
						? (this.scrollerStyle[h.style.transform] =
								"translate(" +
								a +
								"px," +
								b +
								"px)" +
								this.translateZ)
						: ((a = c.round(a)),
							(b = c.round(b)),
							(this.scrollerStyle.left = a + "px"),
							(this.scrollerStyle.top = b + "px")),
					(this.x = a),
					(this.y = b),
					this.indicators)
				)
					for (var d = this.indicators.length; d--; )
						this.indicators[d].updatePosition();
			},
			_initEvents: function(b) {
				var c = b ? h.removeEvent : h.addEvent,
					d = this.options.bindToWrapper ? this.wrapper : a;
				c(a, "orientationchange", this),
					c(a, "resize", this),
					this.options.click && c(this.wrapper, "click", this, !0),
					this.options.disableMouse ||
						(c(this.wrapper, "mousedown", this),
						c(d, "mousemove", this),
						c(d, "mousecancel", this),
						c(d, "mouseup", this)),
					h.hasPointer &&
						!this.options.disablePointer &&
						(c(
							this.wrapper,
							h.prefixPointerEvent("pointerdown"),
							this
						),
						c(d, h.prefixPointerEvent("pointermove"), this),
						c(d, h.prefixPointerEvent("pointercancel"), this),
						c(d, h.prefixPointerEvent("pointerup"), this)),
					h.hasTouch &&
						!this.options.disableTouch &&
						(c(this.wrapper, "touchstart", this),
						c(d, "touchmove", this),
						c(d, "touchcancel", this),
						c(d, "touchend", this)),
					c(this.scroller, "transitionend", this),
					c(this.scroller, "webkitTransitionEnd", this),
					c(this.scroller, "oTransitionEnd", this),
					c(this.scroller, "MSTransitionEnd", this);
			},
			getComputedPosition: function() {
				var b,
					c,
					d = a.getComputedStyle(this.scroller, null);
				return (
					this.options.useTransform
						? ((d = d[h.style.transform].split(")")[0].split(", ")),
							(b = +(d[12] || d[4])),
							(c = +(d[13] || d[5])))
						: ((b = +d.left.replace(/[^-\d.]/g, "")),
							(c = +d.top.replace(/[^-\d.]/g, ""))),
					{ x: b, y: c }
				);
			},
			_initIndicators: function() {
				function a(a) {
					for (var b = h.indicators.length; b--; )
						a.call(h.indicators[b]);
				}
				var b,
					c = this.options.interactiveScrollbars,
					d = "string" != typeof this.options.scrollbars,
					g = [],
					h = this;
				(this.indicators = []),
					this.options.scrollbars &&
						(this.options.scrollY &&
							((b = {
								el: e("v", c, this.options.scrollbars),
								interactive: c,
								defaultScrollbars: !0,
								customStyle: d,
								resize: this.options.resizeScrollbars,
								shrink: this.options.shrinkScrollbars,
								fade: this.options.fadeScrollbars,
								listenX: !1
							}),
							this.wrapper.appendChild(b.el),
							g.push(b)),
						this.options.scrollX &&
							((b = {
								el: e("h", c, this.options.scrollbars),
								interactive: c,
								defaultScrollbars: !0,
								customStyle: d,
								resize: this.options.resizeScrollbars,
								shrink: this.options.shrinkScrollbars,
								fade: this.options.fadeScrollbars,
								listenY: !1
							}),
							this.wrapper.appendChild(b.el),
							g.push(b))),
					this.options.indicators &&
						(g = g.concat(this.options.indicators));
				for (var i = g.length; i--; )
					this.indicators.push(new f(this, g[i]));
				this.options.fadeScrollbars &&
					(this.on("scrollEnd", function() {
						a(function() {
							this.fade();
						});
					}),
					this.on("scrollCancel", function() {
						a(function() {
							this.fade();
						});
					}),
					this.on("scrollStart", function() {
						a(function() {
							this.fade(1);
						});
					}),
					this.on("beforeScrollStart", function() {
						a(function() {
							this.fade(1, !0);
						});
					})),
					this.on("refresh", function() {
						a(function() {
							this.refresh();
						});
					}),
					this.on("destroy", function() {
						a(function() {
							this.destroy();
						}),
							delete this.indicators;
					});
			},
			_initWheel: function() {
				h.addEvent(this.wrapper, "wheel", this),
					h.addEvent(this.wrapper, "mousewheel", this),
					h.addEvent(this.wrapper, "DOMMouseScroll", this),
					this.on("destroy", function() {
						h.removeEvent(this.wrapper, "wheel", this),
							h.removeEvent(this.wrapper, "mousewheel", this),
							h.removeEvent(this.wrapper, "DOMMouseScroll", this);
					});
			},
			_wheel: function(a) {
				if (this.enabled) {
					a.preventDefault(), a.stopPropagation();
					var b,
						d,
						e,
						f,
						g = this;
					if (
						(void 0 === this.wheelTimeout &&
							g._execEvent("scrollStart"),
						clearTimeout(this.wheelTimeout),
						(this.wheelTimeout = setTimeout(function() {
							g._execEvent("scrollEnd"),
								(g.wheelTimeout = void 0);
						}, 400)),
						"deltaX" in a)
					)
						1 === a.deltaMode
							? ((b = -a.deltaX * this.options.mouseWheelSpeed),
								(d = -a.deltaY * this.options.mouseWheelSpeed))
							: ((b = -a.deltaX), (d = -a.deltaY));
					else if ("wheelDeltaX" in a)
						(b =
							a.wheelDeltaX / 120 * this.options.mouseWheelSpeed),
							(d =
								a.wheelDeltaY /
								120 *
								this.options.mouseWheelSpeed);
					else if ("wheelDelta" in a)
						b = d =
							a.wheelDelta / 120 * this.options.mouseWheelSpeed;
					else {
						if (!("detail" in a)) return;
						b = d = -a.detail / 3 * this.options.mouseWheelSpeed;
					}
					if (
						((b *= this.options.invertWheelDirection),
						(d *= this.options.invertWheelDirection),
						this.hasVerticalScroll || ((b = d), (d = 0)),
						this.options.snap)
					)
						return (
							(e = this.currentPage.pageX),
							(f = this.currentPage.pageY),
							b > 0 ? e-- : 0 > b && e++,
							d > 0 ? f-- : 0 > d && f++,
							void this.goToPage(e, f)
						);
					(e = this.x + c.round(this.hasHorizontalScroll ? b : 0)),
						(f = this.y + c.round(this.hasVerticalScroll ? d : 0)),
						e > 0
							? (e = 0)
							: e < this.maxScrollX && (e = this.maxScrollX),
						f > 0
							? (f = 0)
							: f < this.maxScrollY && (f = this.maxScrollY),
						this.scrollTo(e, f, 0),
						this.options.probeType > 1 && this._execEvent("scroll");
				}
			},
			_initSnap: function() {
				(this.currentPage = {}),
					"string" == typeof this.options.snap &&
						(this.options.snap = this.scroller.querySelectorAll(
							this.options.snap
						)),
					this.on("refresh", function() {
						var a,
							b,
							d,
							e,
							f,
							g,
							h = 0,
							i = 0,
							j = 0,
							k = this.options.snapStepX || this.wrapperWidth,
							l = this.options.snapStepY || this.wrapperHeight;
						if (
							((this.pages = []),
							this.wrapperWidth &&
								this.wrapperHeight &&
								this.scrollerWidth &&
								this.scrollerHeight)
						) {
							if (this.options.snap === !0)
								for (
									d = c.round(k / 2), e = c.round(l / 2);
									j > -this.scrollerWidth;

								) {
									for (
										this.pages[h] = [], a = 0, f = 0;
										f > -this.scrollerHeight;

									)
										(this.pages[h][a] = {
											x: c.max(j, this.maxScrollX),
											y: c.max(f, this.maxScrollY),
											width: k,
											height: l,
											cx: j - d,
											cy: f - e
										}),
											(f -= l),
											a++;
									(j -= k), h++;
								}
							else
								for (
									g = this.options.snap, a = g.length, b = -1;
									a > h;
									h++
								)
									(0 === h ||
										g[h].offsetLeft <=
											g[h - 1].offsetLeft) &&
										((i = 0), b++),
										this.pages[i] || (this.pages[i] = []),
										(j = c.max(
											-g[h].offsetLeft,
											this.maxScrollX
										)),
										(f = c.max(
											-g[h].offsetTop,
											this.maxScrollY
										)),
										(d = j - c.round(g[h].offsetWidth / 2)),
										(e =
											f - c.round(g[h].offsetHeight / 2)),
										(this.pages[i][b] = {
											x: j,
											y: f,
											width: g[h].offsetWidth,
											height: g[h].offsetHeight,
											cx: d,
											cy: e
										}),
										j > this.maxScrollX && i++;
							this.goToPage(
								this.currentPage.pageX || 0,
								this.currentPage.pageY || 0,
								0
							),
								this.options.snapThreshold % 1 === 0
									? ((this.snapThresholdX = this.options.snapThreshold),
										(this.snapThresholdY = this.options.snapThreshold))
									: ((this.snapThresholdX = c.round(
											this.pages[this.currentPage.pageX][
												this.currentPage.pageY
											].width * this.options.snapThreshold
										)),
										(this.snapThresholdY = c.round(
											this.pages[this.currentPage.pageX][
												this.currentPage.pageY
											].height * this.options.snapThreshold
										)));
						}
					}),
					this.on("flick", function() {
						var a =
							this.options.snapSpeed ||
							c.max(
								c.max(
									c.min(c.abs(this.x - this.startX), 1e3),
									c.min(c.abs(this.y - this.startY), 1e3)
								),
								300
							);
						this.goToPage(
							this.currentPage.pageX + this.directionX,
							this.currentPage.pageY + this.directionY,
							a
						);
					});
			},
			_nearestSnap: function(a, b) {
				if (!this.pages.length)
					return { x: 0, y: 0, pageX: 0, pageY: 0 };
				var d = 0,
					e = this.pages.length,
					f = 0;
				if (
					c.abs(a - this.absStartX) < this.snapThresholdX &&
					c.abs(b - this.absStartY) < this.snapThresholdY
				)
					return this.currentPage;
				for (
					a > 0
						? (a = 0)
						: a < this.maxScrollX && (a = this.maxScrollX),
						b > 0
							? (b = 0)
							: b < this.maxScrollY && (b = this.maxScrollY);
					e > d;
					d++
				)
					if (a >= this.pages[d][0].cx) {
						a = this.pages[d][0].x;
						break;
					}
				for (e = this.pages[d].length; e > f; f++)
					if (b >= this.pages[0][f].cy) {
						b = this.pages[0][f].y;
						break;
					}
				return (
					d == this.currentPage.pageX &&
						((d += this.directionX),
						0 > d
							? (d = 0)
							: d >= this.pages.length &&
								(d = this.pages.length - 1),
						(a = this.pages[d][0].x)),
					f == this.currentPage.pageY &&
						((f += this.directionY),
						0 > f
							? (f = 0)
							: f >= this.pages[0].length &&
								(f = this.pages[0].length - 1),
						(b = this.pages[0][f].y)),
					{ x: a, y: b, pageX: d, pageY: f }
				);
			},
			goToPage: function(a, b, d, e) {
				(e = e || this.options.bounceEasing),
					a >= this.pages.length
						? (a = this.pages.length - 1)
						: 0 > a && (a = 0),
					b >= this.pages[a].length
						? (b = this.pages[a].length - 1)
						: 0 > b && (b = 0);
				var f = this.pages[a][b].x,
					g = this.pages[a][b].y;
				(d =
					void 0 === d
						? this.options.snapSpeed ||
							c.max(
								c.max(
									c.min(c.abs(f - this.x), 1e3),
									c.min(c.abs(g - this.y), 1e3)
								),
								300
							)
						: d),
					(this.currentPage = { x: f, y: g, pageX: a, pageY: b }),
					this.scrollTo(f, g, d, e);
			},
			next: function(a, b) {
				var c = this.currentPage.pageX,
					d = this.currentPage.pageY;
				c++,
					c >= this.pages.length &&
						this.hasVerticalScroll &&
						((c = 0), d++),
					this._execEvent("scrollStart"),
					this.goToPage(c, d, a, b);
			},
			prev: function(a, b) {
				var c = this.currentPage.pageX,
					d = this.currentPage.pageY;
				c--,
					0 > c && this.hasVerticalScroll && ((c = 0), d--),
					this._execEvent("scrollStart"),
					this.goToPage(c, d, a, b);
			},
			_initKeys: function(b) {
				var c,
					d = {
						pageUp: 33,
						pageDown: 34,
						end: 35,
						home: 36,
						left: 37,
						up: 38,
						right: 39,
						down: 40
					};
				if ("object" == typeof this.options.keyBindings)
					for (c in this.options.keyBindings)
						"string" == typeof this.options.keyBindings[c] &&
							(this.options.keyBindings[
								c
							] = this.options.keyBindings[c]
								.toUpperCase()
								.charCodeAt(0));
				else this.options.keyBindings = {};
				for (c in d)
					this.options.keyBindings[c] =
						this.options.keyBindings[c] || d[c];
				h.addEvent(a, "keydown", this),
					this.on("destroy", function() {
						h.removeEvent(a, "keydown", this);
					});
			},
			_key: function(a) {
				if (this.enabled) {
					var b,
						d = this.options.snap,
						e = d ? this.currentPage.pageX : this.x,
						f = d ? this.currentPage.pageY : this.y,
						g = h.getTime(),
						i = this.keyTime || 0,
						j = 0.25;
					switch ((this.options.useTransition &&
						this.isInTransition &&
						((b = this.getComputedPosition()),
						this._translate(c.round(b.x), c.round(b.y)),
						(this.isInTransition = !1)),
					(this.keyAcceleration =
						200 > g - i ? c.min(this.keyAcceleration + j, 50) : 0),
					a.keyCode)) {
						case this.options.keyBindings.pageUp:
							this.hasHorizontalScroll && !this.hasVerticalScroll
								? (e += d ? 1 : this.wrapperWidth)
								: (f += d ? 1 : this.wrapperHeight);
							break;
						case this.options.keyBindings.pageDown:
							this.hasHorizontalScroll && !this.hasVerticalScroll
								? (e -= d ? 1 : this.wrapperWidth)
								: (f -= d ? 1 : this.wrapperHeight);
							break;
						case this.options.keyBindings.end:
							(e = d ? this.pages.length - 1 : this.maxScrollX),
								(f = d
									? this.pages[0].length - 1
									: this.maxScrollY);
							break;
						case this.options.keyBindings.home:
							(e = 0), (f = 0);
							break;
						case this.options.keyBindings.left:
							e += d ? -1 : (5 + this.keyAcceleration) >> 0;
							break;
						case this.options.keyBindings.up:
							f += d ? 1 : (5 + this.keyAcceleration) >> 0;
							break;
						case this.options.keyBindings.right:
							e -= d ? -1 : (5 + this.keyAcceleration) >> 0;
							break;
						case this.options.keyBindings.down:
							f -= d ? 1 : (5 + this.keyAcceleration) >> 0;
							break;
						default:
							return;
					}
					if (d) return void this.goToPage(e, f);
					e > 0
						? ((e = 0), (this.keyAcceleration = 0))
						: e < this.maxScrollX &&
							((e = this.maxScrollX), (this.keyAcceleration = 0)),
						f > 0
							? ((f = 0), (this.keyAcceleration = 0))
							: f < this.maxScrollY &&
								((f = this.maxScrollY),
								(this.keyAcceleration = 0)),
						this.scrollTo(e, f, 0),
						(this.keyTime = g);
				}
			},
			_animate: function(a, b, c, d) {
				function e() {
					var m,
						n,
						o,
						p = h.getTime();
					return p >= l
						? ((f.isAnimating = !1),
							f._translate(a, b),
							void (
								f.resetPosition(f.options.bounceTime) ||
								f._execEvent("scrollEnd")
							))
						: ((p = (p - k) / c),
							(o = d(p)),
							(m = (a - i) * o + i),
							(n = (b - j) * o + j),
							f._translate(m, n),
							f.isAnimating && g(e),
							void (
								3 == f.options.probeType && f._execEvent("scroll")
							));
				}
				var f = this,
					i = this.x,
					j = this.y,
					k = h.getTime(),
					l = k + c;
				(this.isAnimating = !0), e();
			},
			handleEvent: function(a) {
				switch (a.type) {
					case "touchstart":
					case "pointerdown":
					case "MSPointerDown":
					case "mousedown":
						this._start(a);
						break;
					case "touchmove":
					case "pointermove":
					case "MSPointerMove":
					case "mousemove":
						this._move(a);
						break;
					case "touchend":
					case "pointerup":
					case "MSPointerUp":
					case "mouseup":
					case "touchcancel":
					case "pointercancel":
					case "MSPointerCancel":
					case "mousecancel":
						this._end(a);
						break;
					case "orientationchange":
					case "resize":
						this._resize();
						break;
					case "transitionend":
					case "webkitTransitionEnd":
					case "oTransitionEnd":
					case "MSTransitionEnd":
						this._transitionEnd(a);
						break;
					case "wheel":
					case "DOMMouseScroll":
					case "mousewheel":
						this._wheel(a);
						break;
					case "keydown":
						this._key(a);
						break;
					case "click":
						a._constructed ||
							(a.preventDefault(), a.stopPropagation());
				}
			}
		}),
			(f.prototype = {
				handleEvent: function(a) {
					switch (a.type) {
						case "touchstart":
						case "pointerdown":
						case "MSPointerDown":
						case "mousedown":
							this._start(a);
							break;
						case "touchmove":
						case "pointermove":
						case "MSPointerMove":
						case "mousemove":
							this._move(a);
							break;
						case "touchend":
						case "pointerup":
						case "MSPointerUp":
						case "mouseup":
						case "touchcancel":
						case "pointercancel":
						case "MSPointerCancel":
						case "mousecancel":
							this._end(a);
					}
				},
				destroy: function() {
					this.options.interactive &&
						(h.removeEvent(this.indicator, "touchstart", this),
						h.removeEvent(
							this.indicator,
							h.prefixPointerEvent("pointerdown"),
							this
						),
						h.removeEvent(this.indicator, "mousedown", this),
						h.removeEvent(a, "touchmove", this),
						h.removeEvent(
							a,
							h.prefixPointerEvent("pointermove"),
							this
						),
						h.removeEvent(a, "mousemove", this),
						h.removeEvent(a, "touchend", this),
						h.removeEvent(
							a,
							h.prefixPointerEvent("pointerup"),
							this
						),
						h.removeEvent(a, "mouseup", this)),
						this.options.defaultScrollbars &&
							this.wrapper.parentNode.removeChild(this.wrapper);
				},
				_start: function(b) {
					var c = b.touches ? b.touches[0] : b;
					b.preventDefault(),
						b.stopPropagation(),
						this.transitionTime(),
						(this.initiated = !0),
						(this.moved = !1),
						(this.lastPointX = c.pageX),
						(this.lastPointY = c.pageY),
						(this.startTime = h.getTime()),
						this.options.disableTouch ||
							h.addEvent(a, "touchmove", this),
						this.options.disablePointer ||
							h.addEvent(
								a,
								h.prefixPointerEvent("pointermove"),
								this
							),
						this.options.disableMouse ||
							h.addEvent(a, "mousemove", this),
						this.scroller._execEvent("beforeScrollStart");
				},
				_move: function(a) {
					var b,
						c,
						d,
						e,
						f = a.touches ? a.touches[0] : a,
						g = h.getTime();
					this.moved || this.scroller._execEvent("scrollStart"),
						(this.moved = !0),
						(b = f.pageX - this.lastPointX),
						(this.lastPointX = f.pageX),
						(c = f.pageY - this.lastPointY),
						(this.lastPointY = f.pageY),
						(d = this.x + b),
						(e = this.y + c),
						this._pos(d, e),
						1 == this.scroller.options.probeType &&
						g - this.startTime > 300
							? ((this.startTime = g),
								this.scroller._execEvent("scroll"))
							: this.scroller.options.probeType > 1 &&
								this.scroller._execEvent("scroll"),
						a.preventDefault(),
						a.stopPropagation();
				},
				_end: function(b) {
					if (this.initiated) {
						if (
							((this.initiated = !1),
							b.preventDefault(),
							b.stopPropagation(),
							h.removeEvent(a, "touchmove", this),
							h.removeEvent(
								a,
								h.prefixPointerEvent("pointermove"),
								this
							),
							h.removeEvent(a, "mousemove", this),
							this.scroller.options.snap)
						) {
							var d = this.scroller._nearestSnap(
									this.scroller.x,
									this.scroller.y
								),
								e =
									this.options.snapSpeed ||
									c.max(
										c.max(
											c.min(
												c.abs(this.scroller.x - d.x),
												1e3
											),
											c.min(
												c.abs(this.scroller.y - d.y),
												1e3
											)
										),
										300
									);
							(this.scroller.x != d.x ||
								this.scroller.y != d.y) &&
								((this.scroller.directionX = 0),
								(this.scroller.directionY = 0),
								(this.scroller.currentPage = d),
								this.scroller.scrollTo(
									d.x,
									d.y,
									e,
									this.scroller.options.bounceEasing
								));
						}
						this.moved && this.scroller._execEvent("scrollEnd");
					}
				},
				transitionTime: function(a) {
					(a = a || 0),
						(this.indicatorStyle[h.style.transitionDuration] =
							a + "ms"),
						!a &&
							h.isBadAndroid &&
							(this.indicatorStyle[h.style.transitionDuration] =
								"0.001s");
				},
				transitionTimingFunction: function(a) {
					this.indicatorStyle[h.style.transitionTimingFunction] = a;
				},
				refresh: function() {
					this.transitionTime(),
						this.options.listenX && !this.options.listenY
							? (this.indicatorStyle.display = this.scroller
									.hasHorizontalScroll
									? "block"
									: "none")
							: this.options.listenY && !this.options.listenX
								? (this.indicatorStyle.display = this.scroller
										.hasVerticalScroll
										? "block"
										: "none")
								: (this.indicatorStyle.display =
										this.scroller.hasHorizontalScroll ||
										this.scroller.hasVerticalScroll
											? "block"
											: "none"),
						this.scroller.hasHorizontalScroll &&
						this.scroller.hasVerticalScroll
							? (h.addClass(
									this.wrapper,
									"iScrollBothScrollbars"
								),
								h.removeClass(
									this.wrapper,
									"iScrollLoneScrollbar"
								),
								this.options.defaultScrollbars &&
									this.options.customStyle &&
									(this.options.listenX
										? (this.wrapper.style.right = "8px")
										: (this.wrapper.style.bottom = "8px")))
							: (h.removeClass(
									this.wrapper,
									"iScrollBothScrollbars"
								),
								h.addClass(this.wrapper, "iScrollLoneScrollbar"),
								this.options.defaultScrollbars &&
									this.options.customStyle &&
									(this.options.listenX
										? (this.wrapper.style.right = "2px")
										: (this.wrapper.style.bottom = "2px")));
					this.wrapper.offsetHeight;
					this.options.listenX &&
						((this.wrapperWidth = this.wrapper.clientWidth),
						this.options.resize
							? ((this.indicatorWidth = c.max(
									c.round(
										this.wrapperWidth *
											this.wrapperWidth /
											(this.scroller.scrollerWidth ||
												this.wrapperWidth ||
												1)
									),
									8
								)),
								(this.indicatorStyle.width =
									this.indicatorWidth + "px"))
							: (this.indicatorWidth = this.indicator.clientWidth),
						(this.maxPosX =
							this.wrapperWidth - this.indicatorWidth),
						"clip" == this.options.shrink
							? ((this.minBoundaryX = -this.indicatorWidth + 8),
								(this.maxBoundaryX = this.wrapperWidth - 8))
							: ((this.minBoundaryX = 0),
								(this.maxBoundaryX = this.maxPosX)),
						(this.sizeRatioX =
							this.options.speedRatioX ||
							(this.scroller.maxScrollX &&
								this.maxPosX / this.scroller.maxScrollX))),
						this.options.listenY &&
							((this.wrapperHeight = this.wrapper.clientHeight),
							this.options.resize
								? ((this.indicatorHeight = c.max(
										c.round(
											this.wrapperHeight *
												this.wrapperHeight /
												(this.scroller.scrollerHeight ||
													this.wrapperHeight ||
													1)
										),
										8
									)),
									(this.indicatorStyle.height =
										this.indicatorHeight + "px"))
								: (this.indicatorHeight = this.indicator.clientHeight),
							(this.maxPosY =
								this.wrapperHeight - this.indicatorHeight),
							"clip" == this.options.shrink
								? ((this.minBoundaryY =
										-this.indicatorHeight + 8),
									(this.maxBoundaryY = this.wrapperHeight - 8))
								: ((this.minBoundaryY = 0),
									(this.maxBoundaryY = this.maxPosY)),
							(this.maxPosY =
								this.wrapperHeight - this.indicatorHeight),
							(this.sizeRatioY =
								this.options.speedRatioY ||
								(this.scroller.maxScrollY &&
									this.maxPosY / this.scroller.maxScrollY))),
						this.updatePosition();
				},
				updatePosition: function() {
					var a =
							(this.options.listenX &&
								c.round(this.sizeRatioX * this.scroller.x)) ||
							0,
						b =
							(this.options.listenY &&
								c.round(this.sizeRatioY * this.scroller.y)) ||
							0;
					this.options.ignoreBoundaries ||
						(a < this.minBoundaryX
							? ("scale" == this.options.shrink &&
									((this.width = c.max(
										this.indicatorWidth + a,
										8
									)),
									(this.indicatorStyle.width =
										this.width + "px")),
								(a = this.minBoundaryX))
							: a > this.maxBoundaryX
								? "scale" == this.options.shrink
									? ((this.width = c.max(
											this.indicatorWidth - (a - this.maxPosX),
											8
										)),
										(this.indicatorStyle.width =
											this.width + "px"),
										(a =
											this.maxPosX +
											this.indicatorWidth -
											this.width))
									: (a = this.maxBoundaryX)
								: "scale" == this.options.shrink &&
									this.width != this.indicatorWidth &&
									((this.width = this.indicatorWidth),
									(this.indicatorStyle.width =
										this.width + "px")),
						b < this.minBoundaryY
							? ("scale" == this.options.shrink &&
									((this.height = c.max(
										this.indicatorHeight + 3 * b,
										8
									)),
									(this.indicatorStyle.height =
										this.height + "px")),
								(b = this.minBoundaryY))
							: b > this.maxBoundaryY
								? "scale" == this.options.shrink
									? ((this.height = c.max(
											this.indicatorHeight -
												3 * (b - this.maxPosY),
											8
										)),
										(this.indicatorStyle.height =
											this.height + "px"),
										(b =
											this.maxPosY +
											this.indicatorHeight -
											this.height))
									: (b = this.maxBoundaryY)
								: "scale" == this.options.shrink &&
									this.height != this.indicatorHeight &&
									((this.height = this.indicatorHeight),
									(this.indicatorStyle.height =
										this.height + "px"))),
						(this.x = a),
						(this.y = b),
						this.scroller.options.useTransform
							? (this.indicatorStyle[h.style.transform] =
									"translate(" +
									a +
									"px," +
									b +
									"px)" +
									this.scroller.translateZ)
							: ((this.indicatorStyle.left = a + "px"),
								(this.indicatorStyle.top = b + "px"));
				},
				_pos: function(a, b) {
					0 > a ? (a = 0) : a > this.maxPosX && (a = this.maxPosX),
						0 > b
							? (b = 0)
							: b > this.maxPosY && (b = this.maxPosY),
						(a = this.options.listenX
							? c.round(a / this.sizeRatioX)
							: this.scroller.x),
						(b = this.options.listenY
							? c.round(b / this.sizeRatioY)
							: this.scroller.y),
						this.scroller.scrollTo(a, b);
				},
				fade: function(a, b) {
					if (!b || this.visible) {
						clearTimeout(this.fadeTimeout),
							(this.fadeTimeout = null);
						var c = a ? 250 : 500,
							d = a ? 0 : 300;
						(a = a ? "1" : "0"),
							(this.wrapperStyle[h.style.transitionDuration] =
								c + "ms"),
							(this.fadeTimeout = setTimeout(
								function(a) {
									(this.wrapperStyle.opacity = a),
										(this.visible = +a);
								}.bind(this, a),
								d
							));
					}
				}
			}),
			(d.utils = h),
			"undefined" != typeof module && module.exports
				? (module.exports = d)
				: (a.IScroll = d);
	})(window, document, Math));
var _gsScope =
	"undefined" != typeof module &&
	module.exports &&
	"undefined" != typeof global
		? global
		: this || window;
!(function(a) {
	"use strict";
	var b = a.GreenSockGlobals || a,
		c = function(a) {
			var c,
				d = a.split("."),
				e = b;
			for (c = 0; d.length > c; c++) e[d[c]] = e = e[d[c]] || {};
			return e;
		},
		d = c("com.greensock.utils"),
		e = function(a) {
			var b = a.nodeType,
				c = "";
			if (1 === b || 9 === b || 11 === b) {
				if ("string" == typeof a.textContent) return a.textContent;
				for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
			} else if (3 === b || 4 === b) return a.nodeValue;
			return c;
		},
		f = document,
		g = f.defaultView ? f.defaultView.getComputedStyle : function() {},
		h = /([A-Z])/g,
		i = function(a, b, c, d) {
			var e;
			return (
				(c = c || g(a, null))
					? ((a = c.getPropertyValue(
							b.replace(h, "-$1").toLowerCase()
						)),
						(e = a || c.length ? a : c[b]))
					: a.currentStyle && ((c = a.currentStyle), (e = c[b])),
				d ? e : parseInt(e, 10) || 0
			);
		},
		j = function(a) {
			return a.length &&
				a[0] &&
				((a[0].nodeType && a[0].style && !a.nodeType) ||
					(a[0].length && a[0][0]))
				? !0
				: !1;
		},
		k = function(a) {
			var b,
				c,
				d,
				e = [],
				f = a.length;
			for (b = 0; f > b; b++)
				if (((c = a[b]), j(c)))
					for (d = c.length, d = 0; c.length > d; d++) e.push(c[d]);
				else e.push(c);
			return e;
		},
		l = ")eefec303079ad17405c",
		m = /(?:<br>|<br\/>|<br \/>)/gi,
		n = f.all && !f.addEventListener,
		o =
			"<div style='position:relative;display:inline-block;" +
			(n ? "*display:inline;*zoom:1;'" : "'"),
		p = function(a) {
			a = a || "";
			var b = -1 !== a.indexOf("++"),
				c = 1;
			return (
				b && (a = a.split("++").join("")),
				function() {
					return (
						o + (a ? " class='" + a + (b ? c++ : "") + "'>" : ">")
					);
				}
			);
		},
		q = (d.SplitText = b.SplitText = function(a, b) {
			if (("string" == typeof a && (a = q.selector(a)), !a))
				throw "cannot split a null element.";
			(this.elements = j(a) ? k(a) : [a]),
				(this.chars = []),
				(this.words = []),
				(this.lines = []),
				(this._originals = []),
				(this.vars = b || {}),
				this.split(b);
		}),
		r = function(a, b, c) {
			var d = a.nodeType;
			if (1 === d || 9 === d || 11 === d)
				for (a = a.firstChild; a; a = a.nextSibling) r(a, b, c);
			else
				(3 === d || 4 === d) &&
					(a.nodeValue = a.nodeValue.split(b).join(c));
		},
		s = function(a, b) {
			for (var c = b.length; --c > -1; ) a.push(b[c]);
		},
		t = function(a, b, c, d, h) {
			m.test(a.innerHTML) && (a.innerHTML = a.innerHTML.replace(m, l));
			var j,
				k,
				n,
				o,
				q,
				t,
				u,
				v,
				w,
				x,
				y,
				z,
				A,
				B,
				C = e(a),
				D = b.type || b.split || "chars,words,lines",
				E = -1 !== D.indexOf("lines") ? [] : null,
				F = -1 !== D.indexOf("words"),
				G = -1 !== D.indexOf("chars"),
				H = "absolute" === b.position || b.absolute === !0,
				I = H ? "&#173; " : " ",
				J = -999,
				K = g(a),
				L = i(a, "paddingLeft", K),
				M = i(a, "borderBottomWidth", K) + i(a, "borderTopWidth", K),
				N = i(a, "borderLeftWidth", K) + i(a, "borderRightWidth", K),
				O = i(a, "paddingTop", K) + i(a, "paddingBottom", K),
				P = i(a, "paddingLeft", K) + i(a, "paddingRight", K),
				Q = i(a, "textAlign", K, !0),
				R = a.clientHeight,
				S = a.clientWidth,
				T = "</div>",
				U = p(b.wordsClass),
				V = p(b.charsClass),
				W = -1 !== (b.linesClass || "").indexOf("++"),
				X = b.linesClass,
				Y = -1 !== C.indexOf("<"),
				Z = !0,
				$ = [],
				_ = [],
				aa = [];
			for (
				W && (X = X.split("++").join("")),
					Y && (C = C.split("<").join("{{LT}}")),
					j = C.length,
					o = U(),
					q = 0;
				j > q;
				q++
			)
				if (((u = C.charAt(q)), ")" === u && C.substr(q, 20) === l))
					(o += (Z ? T : "") + "<BR/>"),
						(Z = !1),
						q !== j - 20 &&
							C.substr(q + 20, 20) !== l &&
							((o += " " + U()), (Z = !0)),
						(q += 19);
				else if (
					" " === u &&
					" " !== C.charAt(q - 1) &&
					q !== j - 1 &&
					C.substr(q - 20, 20) !== l
				) {
					for (o += Z ? T : "", Z = !1; " " === C.charAt(q + 1); )
						(o += I), q++;
					(")" !== C.charAt(q + 1) || C.substr(q + 1, 20) !== l) &&
						((o += I + U()), (Z = !0));
				} else
					"{" === u && "{{LT}}" === C.substr(q, 6)
						? ((o += G ? V() + "{{LT}}</div>" : "{{LT}}"), (q += 5))
						: (o += G && " " !== u ? V() + u + "</div>" : u);
			for (
				a.innerHTML = o + (Z ? T : ""),
					Y && r(a, "{{LT}}", "<"),
					t = a.getElementsByTagName("*"),
					j = t.length,
					v = [],
					q = 0;
				j > q;
				q++
			)
				v[q] = t[q];
			if (E || H)
				for (q = 0; j > q; q++)
					(w = v[q]),
						(n = w.parentNode === a),
						(n || H || (G && !F)) &&
							((x = w.offsetTop),
							E &&
								n &&
								x !== J &&
								"BR" !== w.nodeName &&
								((k = []), E.push(k), (J = x)),
							H &&
								((w._x = w.offsetLeft),
								(w._y = x),
								(w._w = w.offsetWidth),
								(w._h = w.offsetHeight)),
							E &&
								((F !== n && G) || (k.push(w), (w._x -= L)),
								n && q && (v[q - 1]._wordEnd = !0),
								"BR" === w.nodeName &&
									w.nextSibling &&
									"BR" === w.nextSibling.nodeName &&
									E.push([])));
			for (q = 0; j > q; q++)
				(w = v[q]),
					(n = w.parentNode === a),
					"BR" !== w.nodeName
						? (H &&
								((z = w.style),
								F ||
									n ||
									((w._x += w.parentNode._x),
									(w._y += w.parentNode._y)),
								(z.left = w._x + "px"),
								(z.top = w._y + "px"),
								(z.position = "absolute"),
								(z.display = "block"),
								(z.width = w._w + 1 + "px"),
								(z.height = w._h + "px")),
							F
								? n && "" !== w.innerHTML
									? _.push(w)
									: G && $.push(w)
								: n
									? (a.removeChild(w), v.splice(q--, 1), j--)
									: !n &&
										G &&
										((x = !E && !H && w.nextSibling),
										a.appendChild(w),
										x || a.appendChild(f.createTextNode(" ")),
										$.push(w)))
						: E || H
							? (a.removeChild(w), v.splice(q--, 1), j--)
							: F || a.appendChild(w);
			if (E) {
				for (
					H &&
						((y = f.createElement("div")),
						a.appendChild(y),
						(A = y.offsetWidth + "px"),
						(x = y.offsetParent === a ? 0 : a.offsetLeft),
						a.removeChild(y)),
						z = a.style.cssText,
						a.style.cssText = "display:none;";
					a.firstChild;

				)
					a.removeChild(a.firstChild);
				for (B = !H || (!F && !G), q = 0; E.length > q; q++) {
					for (
						k = E[q],
							y = f.createElement("div"),
							y.style.cssText =
								"display:block;text-align:" +
								Q +
								";position:" +
								(H ? "absolute;" : "relative;"),
							X && (y.className = X + (W ? q + 1 : "")),
							aa.push(y),
							j = k.length,
							t = 0;
						j > t;
						t++
					)
						"BR" !== k[t].nodeName &&
							((w = k[t]),
							y.appendChild(w),
							B &&
								(w._wordEnd || F) &&
								y.appendChild(f.createTextNode(" ")),
							H &&
								(0 === t &&
									((y.style.top = w._y + "px"),
									(y.style.left = L + x + "px")),
								(w.style.top = "0px"),
								x && (w.style.left = w._x - x + "px")));
					0 === j && (y.innerHTML = "&nbsp;"),
						F ||
							G ||
							(y.innerHTML = e(y)
								.split(String.fromCharCode(160))
								.join(" ")),
						H &&
							((y.style.width = A),
							(y.style.height = w._h + "px")),
						a.appendChild(y);
				}
				a.style.cssText = z;
			}
			H &&
				(R > a.clientHeight &&
					((a.style.height = R - O + "px"),
					R > a.clientHeight && (a.style.height = R + M + "px")),
				S > a.clientWidth &&
					((a.style.width = S - P + "px"),
					S > a.clientWidth && (a.style.width = S + N + "px"))),
				s(c, $),
				s(d, _),
				s(h, aa);
		},
		u = q.prototype;
	(u.split = function(a) {
		this.isSplit && this.revert(),
			(this.vars = a || this.vars),
			(this._originals.length = this.chars.length = this.words.length = this.lines.length = 0);
		for (var b = this.elements.length; --b > -1; )
			(this._originals[b] = this.elements[b].innerHTML),
				t(
					this.elements[b],
					this.vars,
					this.chars,
					this.words,
					this.lines
				);
		return (
			this.chars.reverse(),
			this.words.reverse(),
			this.lines.reverse(),
			(this.isSplit = !0),
			this
		);
	}),
		(u.revert = function() {
			if (!this._originals) throw "revert() call wasn't scoped properly.";
			for (var a = this._originals.length; --a > -1; )
				this.elements[a].innerHTML = this._originals[a];
			return (
				(this.chars = []),
				(this.words = []),
				(this.lines = []),
				(this.isSplit = !1),
				this
			);
		}),
		(q.selector =
			a.$ ||
			a.jQuery ||
			function(b) {
				var c = a.$ || a.jQuery;
				return c
					? ((q.selector = c), c(b))
					: "undefined" == typeof document
						? b
						: document.querySelectorAll
							? document.querySelectorAll(b)
							: document.getElementById(
									"#" === b.charAt(0) ? b.substr(1) : b
								);
			}),
		(q.version = "0.3.4");
})(_gsScope),
	(function(a) {
		"use strict";
		var b = function() {
			return (_gsScope.GreenSockGlobals || _gsScope)[a];
		};
		"function" == typeof define && define.amd
			? define(["TweenLite"], b)
			: "undefined" != typeof module &&
				module.exports &&
				(module.exports = b());
	})("SplitText"),
	!(function(a) {
		var b = {},
			c = {
				mode: "horizontal",
				slideSelector: "",
				infiniteLoop: !0,
				hideControlOnEnd: !1,
				speed: 500,
				easing: null,
				slideMargin: 0,
				startSlide: 0,
				randomStart: !1,
				captions: !1,
				ticker: !1,
				tickerHover: !1,
				adaptiveHeight: !1,
				adaptiveHeightSpeed: 500,
				video: !1,
				useCSS: !0,
				preloadImages: "visible",
				responsive: !0,
				slideZIndex: 50,
				touchEnabled: !0,
				swipeThreshold: 50,
				oneToOneTouch: !0,
				preventDefaultSwipeX: !0,
				preventDefaultSwipeY: !1,
				pager: !0,
				pagerType: "full",
				pagerShortSeparator: " / ",
				pagerSelector: null,
				buildPager: null,
				pagerCustom: null,
				controls: !0,
				nextText: "Next",
				prevText: "Prev",
				nextSelector: null,
				prevSelector: null,
				autoControls: !1,
				startText: "Start",
				stopText: "Stop",
				autoControlsCombine: !1,
				autoControlsSelector: null,
				auto: !1,
				pause: 4e3,
				autoStart: !0,
				autoDirection: "next",
				autoHover: !1,
				autoDelay: 0,
				minSlides: 1,
				maxSlides: 1,
				moveSlides: 0,
				slideWidth: 0,
				onSliderLoad: function() {},
				onSlideBefore: function() {},
				onSlideAfter: function() {},
				onSlideNext: function() {},
				onSlidePrev: function() {},
				onSliderResize: function() {}
			};
		a.fn.bxSlider = function(d) {
			if (0 == this.length) return this;
			if (this.length > 1)
				return (
					this.each(function() {
						a(this).bxSlider(d);
					}),
					this
				);
			var e = {},
				f = this;
			b.el = this;
			var g = a(window).width(),
				h = a(window).height(),
				j = function() {
					(e.settings = a.extend({}, c, d)),
						(e.settings.slideWidth = parseInt(
							e.settings.slideWidth
						)),
						(e.children = f.children(e.settings.slideSelector)),
						e.children.length < e.settings.minSlides &&
							(e.settings.minSlides = e.children.length),
						e.children.length < e.settings.maxSlides &&
							(e.settings.maxSlides = e.children.length),
						e.settings.randomStart &&
							(e.settings.startSlide = Math.floor(
								Math.random() * e.children.length
							)),
						(e.active = { index: e.settings.startSlide }),
						(e.carousel =
							e.settings.minSlides > 1 ||
							e.settings.maxSlides > 1),
						e.carousel && (e.settings.preloadImages = "all"),
						(e.minThreshold =
							e.settings.minSlides * e.settings.slideWidth +
							(e.settings.minSlides - 1) *
								e.settings.slideMargin),
						(e.maxThreshold =
							e.settings.maxSlides * e.settings.slideWidth +
							(e.settings.maxSlides - 1) *
								e.settings.slideMargin),
						(e.working = !1),
						(e.controls = {}),
						(e.interval = null),
						(e.animProp =
							"vertical" == e.settings.mode ? "top" : "left"),
						(e.usingCSS =
							e.settings.useCSS &&
							"fade" != e.settings.mode &&
							(function() {
								var a = document.createElement("div"),
									b = [
										"WebkitPerspective",
										"MozPerspective",
										"OPerspective",
										"msPerspective"
									];
								for (var c in b)
									if (void 0 !== a.style[b[c]])
										return (
											(e.cssPrefix = b[c]
												.replace("Perspective", "")
												.toLowerCase()),
											(e.animProp =
												"-" +
												e.cssPrefix +
												"-transform"),
											!0
										);
								return !1;
							})()),
						"vertical" == e.settings.mode &&
							(e.settings.maxSlides = e.settings.minSlides),
						f.data("origStyle", f.attr("style")),
						f.children(e.settings.slideSelector).each(function() {
							a(this).data("origStyle", a(this).attr("style"));
						}),
						k();
				},
				k = function() {
					f.wrap(
						'<div class="bx-wrapper"><div class="bx-viewport"></div></div>'
					),
						(e.viewport = f.parent()),
						(e.loader = a('<div class="bx-loading" />')),
						e.viewport.prepend(e.loader),
						f.css({
							width:
								"horizontal" == e.settings.mode
									? 100 * e.children.length + 215 + "%"
									: "auto",
							position: "relative"
						}),
						e.usingCSS && e.settings.easing
							? f.css(
									"-" +
										e.cssPrefix +
										"-transition-timing-function",
									e.settings.easing
								)
							: e.settings.easing ||
								(e.settings.easing = "swing"),
						q(),
						e.viewport.css({
							width: "100%",
							overflow: "hidden",
							position: "relative"
						}),
						e.viewport.parent().css({ maxWidth: o() }),
						e.settings.pager ||
							e.viewport.parent().css({ margin: "0 auto 0px" }),
						e.children.css({
							float:
								"horizontal" == e.settings.mode
									? "left"
									: "none",
							listStyle: "none",
							position: "relative"
						}),
						e.children.css("width", p()),
						"horizontal" == e.settings.mode &&
							e.settings.slideMargin > 0 &&
							e.children.css(
								"marginRight",
								e.settings.slideMargin
							),
						"vertical" == e.settings.mode &&
							e.settings.slideMargin > 0 &&
							e.children.css(
								"marginBottom",
								e.settings.slideMargin
							),
						"fade" == e.settings.mode &&
							(e.children.css({
								position: "absolute",
								zIndex: 0,
								display: "none"
							}),
							e.children
								.eq(e.settings.startSlide)
								.css({
									zIndex: e.settings.slideZIndex,
									display: "block"
								})),
						(e.controls.el = a('<div class="bx-controls" />')),
						e.settings.captions && z(),
						(e.active.last = e.settings.startSlide == r() - 1),
						e.settings.video && f.fitVids();
					var b = e.children.eq(e.settings.startSlide);
					"all" == e.settings.preloadImages && (b = e.children),
						e.settings.ticker
							? (e.settings.pager = !1)
							: (e.settings.pager && w(),
								e.settings.controls && x(),
								e.settings.auto && e.settings.autoControls && y(),
								(e.settings.controls ||
									e.settings.autoControls ||
									e.settings.pager) &&
									e.viewport.after(e.controls.el)),
						l(b, m);
				},
				l = function(b, c) {
					var d = b.find("img, iframe").length;
					if (0 == d) return void c();
					var e = 0;
					b.find("img, iframe").each(function() {
						a(this)
							.one("load", function() {
								++e == d && c();
							})
							.each(function() {
								this.complete && a(this).load();
							});
					});
				},
				m = function() {
					if (
						e.settings.infiniteLoop &&
						"fade" != e.settings.mode &&
						!e.settings.ticker
					) {
						var b =
								"vertical" == e.settings.mode
									? e.settings.minSlides
									: e.settings.maxSlides,
							c = e.children
								.slice(0, b)
								.clone()
								.addClass("bx-clone"),
							d = e.children
								.slice(-b)
								.clone()
								.addClass("bx-clone");
						f.append(c).prepend(d);
					}
					e.loader.remove(),
						t(),
						"vertical" == e.settings.mode &&
							(e.settings.adaptiveHeight = !0),
						e.viewport.height(n()),
						f.redrawSlider(),
						e.settings.onSliderLoad(e.active.index),
						(e.initialized = !0),
						e.settings.responsive && a(window).bind("resize", Q),
						e.settings.auto && e.settings.autoStart && J(),
						e.settings.ticker && K(),
						e.settings.pager && F(e.settings.startSlide),
						e.settings.controls && I(),
						e.settings.touchEnabled && !e.settings.ticker && M();
				},
				n = function() {
					var b = 0,
						c = a();
					if (
						"vertical" == e.settings.mode ||
						e.settings.adaptiveHeight
					)
						if (e.carousel) {
							var d =
								1 == e.settings.moveSlides
									? e.active.index
									: e.active.index * s();
							for (
								c = e.children.eq(d), i = 1;
								i <= e.settings.maxSlides - 1;
								i++
							)
								c =
									d + i >= e.children.length
										? c.add(e.children.eq(i - 1))
										: c.add(e.children.eq(d + i));
						} else c = e.children.eq(e.active.index);
					else c = e.children;
					return (
						"vertical" == e.settings.mode
							? (c.each(function() {
									b += a(this).outerHeight();
								}),
								e.settings.slideMargin > 0 &&
									(b +=
										e.settings.slideMargin *
										(e.settings.minSlides - 1)))
							: (b = Math.max.apply(
									Math,
									c
										.map(function() {
											return a(this).outerHeight(!1);
										})
										.get()
								)),
						b
					);
				},
				o = function() {
					var a = "100%";
					return (
						e.settings.slideWidth > 0 &&
							(a =
								"horizontal" == e.settings.mode
									? e.settings.maxSlides *
											e.settings.slideWidth +
										(e.settings.maxSlides - 1) *
											e.settings.slideMargin
									: e.settings.slideWidth),
						a
					);
				},
				p = function() {
					var a = e.settings.slideWidth,
						b = e.viewport.width();
					return (
						0 == e.settings.slideWidth ||
						(e.settings.slideWidth > b && !e.carousel) ||
						"vertical" == e.settings.mode
							? (a = b)
							: e.settings.maxSlides > 1 &&
								"horizontal" == e.settings.mode &&
								(b > e.maxThreshold ||
									(b < e.minThreshold &&
										(a =
											(b -
												e.settings.slideMargin *
													(e.settings.minSlides - 1)) /
											e.settings.minSlides))),
						a
					);
				},
				q = function() {
					var a = 1;
					if (
						"horizontal" == e.settings.mode &&
						e.settings.slideWidth > 0
					)
						if (e.viewport.width() < e.minThreshold)
							a = e.settings.minSlides;
						else if (e.viewport.width() > e.maxThreshold)
							a = e.settings.maxSlides;
						else {
							var b = e.children.first().width();
							a = Math.floor(e.viewport.width() / b);
						}
					else
						"vertical" == e.settings.mode &&
							(a = e.settings.minSlides);
					return a;
				},
				r = function() {
					var a = 0;
					if (e.settings.moveSlides > 0)
						if (e.settings.infiniteLoop)
							a = e.children.length / s();
						else
							for (var b = 0, c = 0; b < e.children.length; )
								++a,
									(b = c + q()),
									(c +=
										e.settings.moveSlides <= q()
											? e.settings.moveSlides
											: q());
					else a = Math.ceil(e.children.length / q());
					return a;
				},
				s = function() {
					return e.settings.moveSlides > 0 &&
						e.settings.moveSlides <= q()
						? e.settings.moveSlides
						: q();
				},
				t = function() {
					if (
						e.children.length > e.settings.maxSlides &&
						e.active.last &&
						!e.settings.infiniteLoop
					) {
						if ("horizontal" == e.settings.mode) {
							var a = e.children.last(),
								b = a.position();
							u(
								-(b.left - (e.viewport.width() - a.width())),
								"reset",
								0
							);
						} else if ("vertical" == e.settings.mode) {
							var c = e.children.length - e.settings.minSlides,
								b = e.children.eq(c).position();
							u(-b.top, "reset", 0);
						}
					} else {
						var b = e.children.eq(e.active.index * s()).position();
						e.active.index == r() - 1 && (e.active.last = !0),
							void 0 != b &&
								("horizontal" == e.settings.mode
									? u(-b.left, "reset", 0)
									: "vertical" == e.settings.mode &&
										u(-b.top, "reset", 0));
					}
				},
				u = function(a, b, c, d) {
					if (e.usingCSS) {
						var g =
							"vertical" == e.settings.mode
								? "translate3d(0, " + a + "px, 0)"
								: "translate3d(" + a + "px, 0, 0)";
						f.css(
							"-" + e.cssPrefix + "-transition-duration",
							c / 1e3 + "s"
						),
							"slide" == b
								? (f.css(e.animProp, g),
									f.bind(
										"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
										function() {
											f.unbind(
												"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"
											),
												G();
										}
									))
								: "reset" == b
									? f.css(e.animProp, g)
									: "ticker" == b &&
										(f.css(
											"-" +
												e.cssPrefix +
												"-transition-timing-function",
											"linear"
										),
										f.css(e.animProp, g),
										f.bind(
											"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
											function() {
												f.unbind(
													"transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"
												),
													u(d.resetValue, "reset", 0),
													L();
											}
										));
					} else {
						var h = {};
						(h[e.animProp] = a),
							"slide" == b
								? f.animate(
										h,
										c,
										e.settings.easing,
										function() {
											G();
										}
									)
								: "reset" == b
									? f.css(e.animProp, a)
									: "ticker" == b &&
										f.animate(h, speed, "linear", function() {
											u(d.resetValue, "reset", 0), L();
										});
					}
				},
				v = function() {
					for (var b = "", c = r(), d = 0; c > d; d++) {
						var f = "";
						e.settings.buildPager &&
						a.isFunction(e.settings.buildPager)
							? ((f = e.settings.buildPager(d)),
								e.pagerEl.addClass("bx-custom-pager"))
							: ((f = d + 1),
								e.pagerEl.addClass("bx-default-pager")),
							(b +=
								'<div class="bx-pager-item"><a href="" data-slide-index="' +
								d +
								'" class="bx-pager-link">' +
								f +
								"</a></div>");
					}
					e.pagerEl.html(b);
				},
				w = function() {
					e.settings.pagerCustom
						? (e.pagerEl = a(e.settings.pagerCustom))
						: ((e.pagerEl = a('<div class="bx-pager" />')),
							e.settings.pagerSelector
								? a(e.settings.pagerSelector).html(e.pagerEl)
								: e.controls.el
										.addClass("bx-has-pager")
										.append(e.pagerEl),
							v()),
						e.pagerEl.on("click", "a", E);
				},
				x = function() {
					(e.controls.next = a(
						'<a class="bx-next" href="">' +
							e.settings.nextText +
							"</a>"
					)),
						(e.controls.prev = a(
							'<a class="bx-prev" href="">' +
								e.settings.prevText +
								"</a>"
						)),
						e.controls.next.bind("click", A),
						e.controls.prev.bind("click", B),
						e.settings.nextSelector &&
							a(e.settings.nextSelector).append(e.controls.next),
						e.settings.prevSelector &&
							a(e.settings.prevSelector).append(e.controls.prev),
						e.settings.nextSelector ||
							e.settings.prevSelector ||
							((e.controls.directionEl = a(
								'<div class="bx-controls-direction" />'
							)),
							e.controls.directionEl
								.append(e.controls.prev)
								.append(e.controls.next),
							e.controls.el
								.addClass("bx-has-controls-direction")
								.append(e.controls.directionEl));
				},
				y = function() {
					(e.controls.start = a(
						'<div class="bx-controls-auto-item"><a class="bx-start" href="">' +
							e.settings.startText +
							"</a></div>"
					)),
						(e.controls.stop = a(
							'<div class="bx-controls-auto-item"><a class="bx-stop" href="">' +
								e.settings.stopText +
								"</a></div>"
						)),
						(e.controls.autoEl = a(
							'<div class="bx-controls-auto" />'
						)),
						e.controls.autoEl.on("click", ".bx-start", C),
						e.controls.autoEl.on("click", ".bx-stop", D),
						e.settings.autoControlsCombine
							? e.controls.autoEl.append(e.controls.start)
							: e.controls.autoEl
									.append(e.controls.start)
									.append(e.controls.stop),
						e.settings.autoControlsSelector
							? a(e.settings.autoControlsSelector).html(
									e.controls.autoEl
								)
							: e.controls.el
									.addClass("bx-has-controls-auto")
									.append(e.controls.autoEl),
						H(e.settings.autoStart ? "stop" : "start");
				},
				z = function() {
					e.children.each(function() {
						var b = a(this)
							.find("img:first")
							.attr("title");
						void 0 != b &&
							("" + b).length &&
							a(this).append(
								'<div class="bx-caption"><span>' +
									b +
									"</span></div>"
							);
					});
				},
				A = function(a) {
					e.settings.auto && f.stopAuto(),
						f.goToNextSlide(),
						a.preventDefault();
				},
				B = function(a) {
					e.settings.auto && f.stopAuto(),
						f.goToPrevSlide(),
						a.preventDefault();
				},
				C = function(a) {
					f.startAuto(), a.preventDefault();
				},
				D = function(a) {
					f.stopAuto(), a.preventDefault();
				},
				E = function(b) {
					e.settings.auto && f.stopAuto();
					var c = a(b.currentTarget),
						d = parseInt(c.attr("data-slide-index"));
					d != e.active.index && f.goToSlide(d), b.preventDefault();
				},
				F = function(b) {
					var c = e.children.length;
					return "short" == e.settings.pagerType
						? (e.settings.maxSlides > 1 &&
								(c = Math.ceil(
									e.children.length / e.settings.maxSlides
								)),
							void e.pagerEl.html(
								b + 1 + e.settings.pagerShortSeparator + c
							))
						: (e.pagerEl.find("a").removeClass("active"),
							void e.pagerEl.each(function(c, d) {
								a(d)
									.find("a")
									.eq(b)
									.addClass("active");
							}));
				},
				G = function() {
					if (e.settings.infiniteLoop) {
						var a = "";
						0 == e.active.index
							? (a = e.children.eq(0).position())
							: e.active.index == r() - 1 && e.carousel
								? (a = e.children.eq((r() - 1) * s()).position())
								: e.active.index == e.children.length - 1 &&
									(a = e.children
										.eq(e.children.length - 1)
										.position()),
							a &&
								("horizontal" == e.settings.mode
									? u(-a.left, "reset", 0)
									: "vertical" == e.settings.mode &&
										u(-a.top, "reset", 0));
					}
					(e.working = !1),
						e.settings.onSlideAfter(
							e.children.eq(e.active.index),
							e.oldIndex,
							e.active.index
						);
				},
				H = function(a) {
					e.settings.autoControlsCombine
						? e.controls.autoEl.html(e.controls[a])
						: (e.controls.autoEl.find("a").removeClass("active"),
							e.controls.autoEl
								.find("a:not(.bx-" + a + ")")
								.addClass("active"));
				},
				I = function() {
					1 == r()
						? (e.controls.prev.addClass("disabled"),
							e.controls.next.addClass("disabled"))
						: !e.settings.infiniteLoop &&
							e.settings.hideControlOnEnd &&
							(0 == e.active.index
								? (e.controls.prev.addClass("disabled"),
									e.controls.next.removeClass("disabled"))
								: e.active.index == r() - 1
									? (e.controls.next.addClass("disabled"),
										e.controls.prev.removeClass("disabled"))
									: (e.controls.prev.removeClass("disabled"),
										e.controls.next.removeClass("disabled")));
				},
				J = function() {
					e.settings.autoDelay > 0
						? setTimeout(f.startAuto, e.settings.autoDelay)
						: f.startAuto(),
						e.settings.autoHover &&
							f.hover(
								function() {
									e.interval &&
										(f.stopAuto(!0), (e.autoPaused = !0));
								},
								function() {
									e.autoPaused &&
										(f.startAuto(!0),
										(e.autoPaused = null));
								}
							);
				},
				K = function() {
					var b = 0;
					if ("next" == e.settings.autoDirection)
						f.append(e.children.clone().addClass("bx-clone"));
					else {
						f.prepend(e.children.clone().addClass("bx-clone"));
						var c = e.children.first().position();
						b = "horizontal" == e.settings.mode ? -c.left : -c.top;
					}
					u(b, "reset", 0),
						(e.settings.pager = !1),
						(e.settings.controls = !1),
						(e.settings.autoControls = !1),
						e.settings.tickerHover &&
							!e.usingCSS &&
							e.viewport.hover(
								function() {
									f.stop();
								},
								function() {
									var b = 0;
									e.children.each(function() {
										b +=
											"horizontal" == e.settings.mode
												? a(this).outerWidth(!0)
												: a(this).outerHeight(!0);
									});
									var c = e.settings.speed / b,
										d =
											"horizontal" == e.settings.mode
												? "left"
												: "top",
										g =
											c *
											(b - Math.abs(parseInt(f.css(d))));
									L(g);
								}
							),
						L();
				},
				L = function(a) {
					speed = a ? a : e.settings.speed;
					var b = { left: 0, top: 0 },
						c = { left: 0, top: 0 };
					"next" == e.settings.autoDirection
						? (b = f
								.find(".bx-clone")
								.first()
								.position())
						: (c = e.children.first().position());
					var d = "horizontal" == e.settings.mode ? -b.left : -b.top,
						g = "horizontal" == e.settings.mode ? -c.left : -c.top,
						h = { resetValue: g };
					u(d, "ticker", speed, h);
				},
				M = function() {
					(e.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }),
						e.viewport.bind("touchstart", N);
				},
				N = function(a) {
					if (e.working) a.preventDefault();
					else {
						e.touch.originalPos = f.position();
						var b = a.originalEvent;
						(e.touch.start.x = b.changedTouches[0].pageX),
							(e.touch.start.y = b.changedTouches[0].pageY),
							e.viewport.bind("touchmove", O),
							e.viewport.bind("touchend", P);
					}
				},
				O = function(a) {
					var b = a.originalEvent,
						c = Math.abs(
							b.changedTouches[0].pageX - e.touch.start.x
						),
						d = Math.abs(
							b.changedTouches[0].pageY - e.touch.start.y
						);
					if (
						(3 * c > d && e.settings.preventDefaultSwipeX
							? a.preventDefault()
							: 3 * d > c &&
								e.settings.preventDefaultSwipeY &&
								a.preventDefault(),
						"fade" != e.settings.mode && e.settings.oneToOneTouch)
					) {
						var f = 0;
						if ("horizontal" == e.settings.mode) {
							var g = b.changedTouches[0].pageX - e.touch.start.x;
							f = e.touch.originalPos.left + g;
						} else {
							var g = b.changedTouches[0].pageY - e.touch.start.y;
							f = e.touch.originalPos.top + g;
						}
						u(f, "reset", 0);
					}
				},
				P = function(a) {
					e.viewport.unbind("touchmove", O);
					var b = a.originalEvent,
						c = 0;
					if (
						((e.touch.end.x = b.changedTouches[0].pageX),
						(e.touch.end.y = b.changedTouches[0].pageY),
						"fade" == e.settings.mode)
					) {
						var d = Math.abs(e.touch.start.x - e.touch.end.x);
						d >= e.settings.swipeThreshold &&
							(e.touch.start.x > e.touch.end.x
								? f.goToNextSlide()
								: f.goToPrevSlide(),
							f.stopAuto());
					} else {
						var d = 0;
						"horizontal" == e.settings.mode
							? ((d = e.touch.end.x - e.touch.start.x),
								(c = e.touch.originalPos.left))
							: ((d = e.touch.end.y - e.touch.start.y),
								(c = e.touch.originalPos.top)),
							!e.settings.infiniteLoop &&
							((0 == e.active.index && d > 0) ||
								(e.active.last && 0 > d))
								? u(c, "reset", 200)
								: Math.abs(d) >= e.settings.swipeThreshold
									? (0 > d
											? f.goToNextSlide()
											: f.goToPrevSlide(),
										f.stopAuto())
									: u(c, "reset", 200);
					}
					e.viewport.unbind("touchend", P);
				},
				Q = function() {
					var b = a(window).width(),
						c = a(window).height();
					(g != b || h != c) &&
						((g = b),
						(h = c),
						f.redrawSlider(),
						e.settings.onSliderResize.call(f, e.active.index));
				};
			return (
				(f.goToSlide = function(b, c) {
					if (!e.working && e.active.index != b)
						if (
							((e.working = !0),
							(e.oldIndex = e.active.index),
							(e.active.index =
								0 > b ? r() - 1 : b >= r() ? 0 : b),
							e.settings.onSlideBefore(
								e.children.eq(e.active.index),
								e.oldIndex,
								e.active.index
							),
							"next" == c
								? e.settings.onSlideNext(
										e.children.eq(e.active.index),
										e.oldIndex,
										e.active.index
									)
								: "prev" == c &&
									e.settings.onSlidePrev(
										e.children.eq(e.active.index),
										e.oldIndex,
										e.active.index
									),
							(e.active.last = e.active.index >= r() - 1),
							e.settings.pager && F(e.active.index),
							e.settings.controls && I(),
							"fade" == e.settings.mode)
						)
							e.settings.adaptiveHeight &&
								e.viewport.height() != n() &&
								e.viewport.animate(
									{ height: n() },
									e.settings.adaptiveHeightSpeed
								),
								e.children
									.filter(":visible")
									.fadeOut(e.settings.speed)
									.css({ zIndex: 0 }),
								e.children
									.eq(e.active.index)
									.css("zIndex", e.settings.slideZIndex + 1)
									.fadeIn(e.settings.speed, function() {
										a(this).css(
											"zIndex",
											e.settings.slideZIndex
										),
											G();
									});
						else {
							e.settings.adaptiveHeight &&
								e.viewport.height() != n() &&
								e.viewport.animate(
									{ height: n() },
									e.settings.adaptiveHeightSpeed
								);
							var d = 0,
								g = { left: 0, top: 0 };
							if (
								!e.settings.infiniteLoop &&
								e.carousel &&
								e.active.last
							)
								if ("horizontal" == e.settings.mode) {
									var h = e.children.eq(
										e.children.length - 1
									);
									(g = h.position()),
										(d =
											e.viewport.width() -
											h.outerWidth());
								} else {
									var i =
										e.children.length -
										e.settings.minSlides;
									g = e.children.eq(i).position();
								}
							else if (
								e.carousel &&
								e.active.last &&
								"prev" == c
							) {
								var j =
										1 == e.settings.moveSlides
											? e.settings.maxSlides - s()
											: (r() - 1) * s() -
												(e.children.length -
													e.settings.maxSlides),
									h = f.children(".bx-clone").eq(j);
								g = h.position();
							} else if ("next" == c && 0 == e.active.index)
								(g = f
									.find("> .bx-clone")
									.eq(e.settings.maxSlides)
									.position()),
									(e.active.last = !1);
							else if (b >= 0) {
								var k = b * s();
								g = e.children.eq(k).position();
							}
							if ("undefined" != typeof g) {
								var l =
									"horizontal" == e.settings.mode
										? -(g.left - d)
										: -g.top;
								u(l, "slide", e.settings.speed);
							}
						}
				}),
				(f.goToNextSlide = function() {
					if (e.settings.infiniteLoop || !e.active.last) {
						var a = parseInt(e.active.index) + 1;
						f.goToSlide(a, "next");
					}
				}),
				(f.goToPrevSlide = function() {
					if (e.settings.infiniteLoop || 0 != e.active.index) {
						var a = parseInt(e.active.index) - 1;
						f.goToSlide(a, "prev");
					}
				}),
				(f.startAuto = function(a) {
					e.interval ||
						((e.interval = setInterval(function() {
							"next" == e.settings.autoDirection
								? f.goToNextSlide()
								: f.goToPrevSlide();
						}, e.settings.pause)),
						e.settings.autoControls && 1 != a && H("stop"));
				}),
				(f.stopAuto = function(a) {
					e.interval &&
						(clearInterval(e.interval),
						(e.interval = null),
						e.settings.autoControls && 1 != a && H("start"));
				}),
				(f.getCurrentSlide = function() {
					return e.active.index;
				}),
				(f.getCurrentSlideElement = function() {
					return e.children.eq(e.active.index);
				}),
				(f.getSlideCount = function() {
					return e.children.length;
				}),
				(f.redrawSlider = function() {
					e.children.add(f.find(".bx-clone")).outerWidth(p()),
						e.viewport.css("height", n()),
						e.settings.ticker || t(),
						e.active.last && (e.active.index = r() - 1),
						e.active.index >= r() && (e.active.last = !0),
						e.settings.pager &&
							!e.settings.pagerCustom &&
							(v(), F(e.active.index));
				}),
				(f.destroySlider = function() {
					e.initialized &&
						((e.initialized = !1),
						a(".bx-clone", this).remove(),
						e.children.each(function() {
							void 0 != a(this).data("origStyle")
								? a(this).attr(
										"style",
										a(this).data("origStyle")
									)
								: a(this).removeAttr("style");
						}),
						void 0 != a(this).data("origStyle")
							? this.attr("style", a(this).data("origStyle"))
							: a(this).removeAttr("style"),
						a(this)
							.unwrap()
							.unwrap(),
						e.controls.el && e.controls.el.remove(),
						e.controls.next && e.controls.next.remove(),
						e.controls.prev && e.controls.prev.remove(),
						e.pagerEl && e.settings.controls && e.pagerEl.remove(),
						a(".bx-caption", this).remove(),
						e.controls.autoEl && e.controls.autoEl.remove(),
						clearInterval(e.interval),
						e.settings.responsive && a(window).unbind("resize", Q));
				}),
				(f.reloadSlider = function(a) {
					void 0 != a && (d = a), f.destroySlider(), j();
				}),
				j(),
				this
			);
		};
	})(jQuery),
	(function() {
		"use strict";
		function a(a, b) {
			if (!a) return this;
			var c = this,
				d = a.toString();
			(c.elmts =
				"[object Array]" === d ||
				"[object NodeList]" === d ||
				"[object HTMLCollection]" === d ||
				"[object Object]" === d
					? a
					: [a]),
				(d = null),
				(c.playing = !1),
				(c.framerate = b.framerate || 25),
				(c.frames = []),
				(c.loop = !1),
				(c.elmtsLength = c.elmts.length),
				(c.stopCallback = b.stopCallback || null),
				(c.firstFrame = 1),
				(c.lastFrame = 1),
				(c._label = ""),
				(c._idx = 0),
				(c._timer = null),
				(c._tmpFrames = []),
				(c._way = 1),
				(c._framesNumber = b.frames_number || 0),
				c.updateFrames(
					b.frames,
					b.direction,
					b.width,
					b.height,
					b.frames_number
				);
		}
		(a.prototype = {
			_render: function() {
				for (var a = this.elmtsLength, b = this; a--; )
					this.elmts[a].style.backgroundPosition = this._tmpFrames[
						this._idx
					];
				if (b.playing)
					if (b._idx >= b.lastFrame - 1) {
						if (!b.loop) return void b.stop();
						b._idx = b.firstFrame - 1;
					} else b._idx++;
			},
			_enterFrame: function() {
				var a = this;
				a._render.call(a),
					a.playing &&
						(a._timer = setTimeout(function() {
							a._enterFrame.call(a);
						}, 1e3 / a.framerate));
			},
			_calculateFrames: function() {
				if (((this._tmpFrames = []), 1 == this._way))
					this._tmpFrames = this.frames;
				else
					for (var a = this.frames.length; a--; )
						this._tmpFrames.push(this.frames[a]);
				(this._framesNumber = this.frames.length),
					this.clearLoopBetween();
			},
			_cacheFrames: function() {
				var a = this.frames,
					b = a.length;
				for (this.frames = []; b--; )
					this.frames[b] = "-" + a[b].x + "px -" + a[b].y + "px";
			},
			updateFrames: function(a, b, c, d, e) {
				if (a)
					return (
						(this.frames = a),
						this._cacheFrames(),
						void this._calculateFrames()
					);
				if (!a && !b)
					throw "JSMovieclip need at least frames array or a direction ";
				if ("v" == b && !d)
					throw "If you want to use a vertical sprite, JSMoviclip need a height";
				if ("h" == b && !c)
					throw "If you want to use a horizontal sprite, JSMoviclip need a width";
				if (!e)
					throw "If you want to use a horizontal of vertical sprite, JSMoviclip need a number of frame";
				for (var f = 0; e > f; f++)
					this.frames.push({
						x: "h" == b ? f * c : 0,
						y: "v" == b ? f * d : 0
					});
				return (
					(f = null),
					this._cacheFrames(),
					this._calculateFrames(),
					this
				);
			},
			getWay: function() {
				return this._way;
			},
			changeWay: function(a, b) {
				return a == this._way
					? this
					: (!!b == !0 &&
							(this._idx = this._framesNumber - this._idx),
						(this._way = a),
						this._calculateFrames(),
						this);
			},
			clearLoopBetween: function() {
				return (
					(this.firstFrame = 1),
					(this.lastFrame = this._framesNumber),
					this
				);
			},
			loopBetween: function(a, b) {
				if (a >= b)
					throw ((a = b),
					"Firstframe and lastframe are equals or inverted");
				return (
					(this.firstFrame = Math.max(a, 1)),
					(this.lastFrame = Math.min(b, this._framesNumber)),
					(this._idx < this.firstFrame - 1 ||
						this._idx > this.lastFrame - 1) &&
						(this._idx = this.firstFrame - 1),
					this
				);
			},
			currentFrame: function() {
				return this._idx + 1;
			},
			prevFrame: function() {
				var a = this.currentFrame();
				return this.gotoAndStop(
					a <= this.firstFrame ? this.lastFrame : a - 1
				);
			},
			nextFrame: function() {
				var a = this.currentFrame();
				return this.gotoAndStop(a >= this.lastFrame ? 1 : a + 1);
			},
			toggle: function(a) {
				return this.playing ? this.stop() : this.play(a);
			},
			play: function(a) {
				return this.playing
					? void 0
					: (this._idx === this.lastFrame - 1 &&
							(this._idx = this.firstFrame - 1),
						(this.playing = !0),
						(this.loop = !!a),
						this._enterFrame(),
						this);
			},
			stop: function() {
				return (
					(this.playing = !1),
					this._timer &&
						(clearTimeout(this._timer), (this._timer = null)),
					this.stopCallback && this.stopCallback(),
					this
				);
			},
			gotoAndPlay: function(a, b) {
				return (
					(this._idx =
						Math.min(Math.max(a, this.firstFrame), this.lastFrame) -
						1),
					this.play(b)
				);
			},
			gotoAndStop: function(a) {
				return (
					(this._idx =
						Math.min(Math.max(a, this.firstFrame), this.lastFrame) -
						1),
					(this.loop = !1),
					(this.playing = !1),
					this._enterFrame(),
					this
				);
			}
		}),
			(window.JSMovieclip = a);
	})(),
	(function(a) {
		var b = !0,
			c = Backbone.Router.extend({
				routes: { "*actions": "all" },
				all: function() {
					var a = Array.prototype.slice.call(arguments, 0),
						c = a.join("");
					this.trigger("GO_TO", c),
						!b && window.ga && ga("send", "pageview", c),
						(b = !1);
				}
			});
		a.F.Router = c;
	})(window),
	(function(a) {
		var b = Backbone.View.extend({
			$wrapper: $("#page"),
			$loading: $("#loader"),
			currentPage: null,
			pages: {},
			isWorking: !1,
			currentUrl: "",
			timerResize: null,
			startLoading: function() {
				this.$loading.addClass("show");
			},
			resize: function(a, b) {
				var c = this;
				this.timerResize &&
					(clearTimeout(this.timerResize), (this.timerResize = null)),
					(this.timerResize = setTimeout(function() {
						_.each(c.pages, function(c) {
							c.view.resize(a, b);
						});
					}, 200));
			},
			endLoading: function() {
				this.$loading.removeClass("show");
			},
			displayPage: function(a) {
				function b() {
					(d.currentUrl = a), e.isLoaded ? c() : e.on("ready", c);
				}
				function c() {
					if (
						(e.view.viewWillAppear(),
						(document.title = e.get("seoTitle") || e.get("title")),
						F.CONFIG.DEBUG &&
							e.get("queries") &&
							console.log(e.get("queries") + " SQL queries"),
						d.currentPage)
					) {
						var a = d.currentPage;
						a.view.viewWillDisappear(),
							a.view.hide(function() {
								a.view.$el.detach(), a.view.viewDidDisappear();
							});
					}
					setTimeout(function() {
						d.$el.html(e.view.$el),
							d.endLoading(),
							(d.currentPage = e),
							e.view.show(function() {
								e.view.viewDidAppear(),
									setTimeout(function() {
										d.isWorking = !1;
									}, 100);
							});
					}, 300);
				}
				var d = this;
				if (!this.isWorking) {
					this.isWorking = !0;
					var e =
						this.pages[a] ||
						new F["abstract"].APageModel({ url: a });
					e.isLoaded ||
						e.fetch({
							success: function() {
								1 != e.get("noJSCache") && (d.pages[a] = e);
								var b = F.PAGES_VIEWS[e.get("pageType")]
										? F.views[
												F.PAGES_VIEWS[e.get("pageType")]
											]
										: F["abstract"].APageView,
									c = new b({ model: e, key: a });
								(e.view = c.render()),
									c.resize(F._.wW, F._.wH),
									e.trigger("ready");
							},
							error: function() {
								console.warn("ERROR 404"),
									Backbone.history.navigate(
										F.CONFIG.PATH_URL,
										{ trigger: !0 }
									);
							}
						}),
						d.currentPage
							? d.currentPage.view.hide(function() {
									d.startLoading(), b();
								})
							: b();
				}
			}
		});
		a.F.NavigationController = b;
	})(window),
	(function(a) {
		a.F["abstract"] = a.F["abstract"] || {};
		var b = Backbone.View.extend({
			tagName: "div",
			needCustomScroll: !1,
			className: "page-item",
			isRender: !1,
			timerScrolling: null,
			isScrolling: !1,
			startY: 0,
			key: "",
			model: null,
			firstAppearance: !0,
			scrollTop: 0,
			_isCurrent: !1,
			initialize: function(a) {
				return this;
			},
			isCurrent: function() {
				return this._isCurrent;
			},
			load: function() {
				return this;
			},
			ready: function() {
				return this;
			},
			render: function() {
				return this.$el.html(this.model.get("content")), this;
			},
			goDown: function() {},
			goUp: function() {},
			keyboardLeft: function() {
				var a = this.$el.find(".nav-x-left").attr("href");
				a &&
					a.length &&
					((a = a.substr(0, a.length - 1)),
					(a = a.substr(a.lastIndexOf("/") + 1)),
					Backbone.history.navigate(F.CONFIG.PATH_URL + a, {
						trigger: !0
					}));
			},
			keyboardRight: function() {
				var a = this.$el.find(".nav-x-right").attr("href");
				a &&
					a.length &&
					((a = a.substr(0, a.length - 1)),
					(a = a.substr(a.lastIndexOf("/") + 1)),
					Backbone.history.navigate(F.CONFIG.PATH_URL + a, {
						trigger: !0
					}));
			},
			keyboardUp: function() {
				this.goUp();
			},
			keyboardDown: function() {
				this.goDown();
			},
			_hoverBtn: function(a) {
				TweenMax.to(this.$el.find(".btn-enter .before"), 0.5, {
					x: 4,
					width: "103%",
					ease: Power1.easeOut
				});
			},
			_leaveBtn: function(a) {
				TweenMax.to(this.$el.find(".btn-enter .before"), 0.3, {
					x: 0,
					width: 10,
					ease: Power2.easeOut
				});
			},
			_scroll: function(a) {
				var b = this;
				this.timerScrolling &&
					(clearTimeout(this.timerScrolling),
					(this.timerScrolling = null)),
					this.isScrolling ||
						(a.deltaY > 0 ? this.goUp() : this.goDown()),
					(this.isScrolling = !0),
					(this.timerScrolling = setTimeout(function() {
						b.isScrolling = !1;
					}, 500));
			},
			_onTouchStart: function(a) {
				this.startY = a.touches[0].pageY;
			},
			_onTouchMove: function(a) {
				var b = a.touches[0].pageY,
					c = Math.abs(b - this.startY);
				c > 100 &&
					(this.isScrolling ||
						(b > this.startY ? this.goUp() : this.goDown()),
					(this.isScrolling = !0));
			},
			_onTouchEnd: function(a) {
				(this.startY = 0), (this.isScrolling = !1);
			},
			show: function(a) {
				return (
					F.UI.Menu().closeMenu(),
					TweenMax.to(this.$el, 1.5, {
						opacity: 1,
						ease: Power3.easeInOut,
						onComplete: a
					}),
					this
				);
			},
			hide: function(a) {
				return (
					TweenMax.to(this.$el, 1, {
						opacity: 0,
						ease: Power3.easeInOut,
						onComplete: a
					}),
					this
				);
			},
			viewWillAppearForFirstTime: function() {},
			resize: function(a, b) {},
			viewWillAppear: function() {
				(this._isCurrent = !0),
					TweenMax.set(this.$el, { opacity: 0 }),
					this.firstAppearance === !0 &&
						this.viewWillAppearForFirstTime(),
					$(".site-logo").fadeIn();
			},
			viewWillDisappear: function() {
				(this._isCurrent = !1), $(".nav-x, h1").fadeOut(100);
			},
			viewWillAppearForFirstTime: function() {},
			viewDidAppearForFirstTime: function() {
				var a = this;
				this.needCustomScroll &&
					Modernizr.touch &&
					(this.$el[0].addEventListener(
						"touchstart",
						function(b) {
							a._onTouchStart(b);
						},
						!1
					),
					this.$el[0].addEventListener(
						"touchmove",
						function(b) {
							a._onTouchMove(b);
						},
						!1
					),
					this.$el[0].addEventListener(
						"touchend",
						function(b) {
							a._onTouchEnd(b);
						},
						!1
					));
			},
			viewDidAppear: function() {
				var a = this;
				this.needCustomScroll &&
					!Modernizr.touch &&
					this.$el.on("mousewheel.page", function(b) {
						a._scroll(b);
					}),
					$(".nav-x, h1").fadeIn(),
					this.firstAppearance === !0 &&
						(this.viewDidAppearForFirstTime(),
						(this.firstAppearance = !1));
			},
			viewDidDisappear: function() {
				this.needCustomScroll &&
					!Modernizr.touch &&
					this.$el.off("mousewheel.page"),
					(this.isScrolling = !1),
					this.timerScrolling &&
						(clearTimeout(this.timerScrolling),
						(this.timerScrolling = null));
			}
		});
		a.F["abstract"].APageView = b;
	})(window),
	(function(a) {
		a.F["abstract"] = a.F["abstract"] || {};
		var b = Backbone.Model.extend({
			url: "",
			defaults: {
				id: null,
				content: null,
				title: null,
				seoTitle: "",
				seoDesc: "",
				bodyClass: "",
				pageType: "",
				data: [],
				noJSCache: !1
			},
			isLoaded: !1,
			isLoading: !0,
			view: null,
			initialize: function(a) {
				return (this.url = F.CONFIG.ROOT_URL + (a.url || "")), this;
			},
			fetch: function(a) {
				var b = this;
				(this.isLoading = !0),
					Backbone.Model.prototype.fetch.call(this, {
						success: function() {
							(b.isLoading = !1),
								(b.isLoaded = !0),
								a.success && a.success();
						},
						error: function() {
							(b.isLoading = !1),
								(b.isLoaded = !0),
								a.error && a.error();
						}
					});
			}
		});
		a.F["abstract"].APageModel = b;
	})(window),
	(function(a) {
		(a.F.views = a.F.views || {}),
			(a.F.views.Home = F["abstract"].APageView.extend({
				events: {
					"click .nav-next": "_slideDown",
					"mouseover .btn-enter": "_hoverBtn",
					"mouseleave .btn-enter": "_leaveBtn"
				},
				render: function() {
					return (
						F["abstract"].APageView.prototype.render.call(this),
						this
					);
				},
				viewWillAppear: function() {
					F["abstract"].APageView.prototype.viewWillAppear.call(this),
						$(".site-logo, .btn-menu").hide(),
						this._leaveBtn(),
						F.UI.Player().stopGlobal();
				},
				viewDidAppear: function() {
					F["abstract"].APageView.prototype.viewDidAppear.call(this);
				},
				viewDidDisappear: function() {
					$(".btn-menu").fadeIn();
				},
				viewDidAppearForFirstTime: function() {
					var a = this;
					TweenMax.set(a.$el.find(".resume, .annonce, .btn"), {
						y: 20,
						opacity: 0
					}),
						TweenMax.to(a.$el.find(".logo_home"), 1, {
							opacity: 1,
							delay: 0,
							ease: Power3.easeIn
						}),
						TweenMax.to(a.$el.find(".resume"), 1, {
							y: 0,
							opacity: 1,
							delay: 1.2,
							ease: Power3.easeOut
						}),
						TweenMax.to(a.$el.find(".annonce"), 1, {
							y: 0,
							opacity: 1,
							delay: 1.5,
							ease: Power3.easeOut
						}),
						TweenMax.to(a.$el.find(".btn"), 1, {
							y: 0,
							opacity: 1,
							delay: 2,
							ease: Power3.easeOut
						});
				},
				_slideDown: function(a) {
					a.preventDefault(),
						this.$el.find("#histoire").css("top", -F._.wH);
				}
			}));
	})(window),
	(function(a) {
		a.F.views = a.F.views || {};
		$(document);
		a.F.views.Histoire = F["abstract"].APageView.extend({
			univers: [
				"Paris sous la neige",
				"Le réveil de Yuma",
				"La cuisine de la grand-mère",
				"Le champ de coquelicots"
			],
			needCustomScroll: !0,
			isScrolling: !1,
			currentUnivers: 1,
			univerStatus: [0, 0, 0, 0],
			events: { "click .nav-next": "goDown" },
			smokeClip: null,
			render: function() {
				return (
					F["abstract"].APageView.prototype.render.call(this),
					Modernizr.touch && this.$el.find("video").remove(),
					this.$el.find(".univers").height(F._.wH),
					this
				);
			},
			resize: function(a, b) {
				this.$el.find(".univers").height(F._.wH);
			},
			goDown: function() {
				this._slideY("down");
			},
			goUp: function() {
				this._slideY("up");
			},
			viewDidAppearForFirstTime: function() {
				F[
					"abstract"
				].APageView.prototype.viewDidAppearForFirstTime.call(this);
				var a = this;
				F.UI.Player().on("end-sound", function() {
					a.isCurrent() && a.goDown();
				});
			},
			viewDidAppear: function() {
				F["abstract"].APageView.prototype.viewDidAppear.call(this),
					$(".player").addClass("visible");
				var a = this;
				F.UI.Player().changeSound($("#song-1"), this.currentUnivers),
					TweenMax.set(this.$el.find(".flocon-big"), {
						y: 0,
						rotation: 0,
						opacity: 1
					}),
					TweenMax.set(this.$el.find(".flocon-s"), {
						y: 0,
						rotation: 0,
						opacity: 1
					}),
					Modernizr.touch ||
						(a.$el.find(".flocon").fadeIn(3e3),
						this._animfloconFat(),
						this._animfloconFat2(),
						this._animfloconFast(),
						this._animfloconFast2(),
						this._animfloconsS(),
						this._animfloconsM(),
						this._animfloconsL(),
						this._animfloconsXl(),
						this._animJournal(),
						this._animFeuilleJaune(),
						this._animFeuilleNav(),
						this._animFeuilleOrangeFloue(),
						this._animFeuilleOrange(),
						this._animFeuilleVerteFloue(),
						this._animFeuilleVerte2(),
						this._animCoqA(),
						this._animCoqB(),
						this._animCoqC(),
						this._animCoqD(),
						this._animCoqE(),
						this._animCoqF(),
						this._animCoqG(),
						this._animCoqH(),
						this._animCoqI(),
						this._animFiole(),
						this._animFiole1(),
						this._animFiole2(),
						this._animTasseFat(),
						this._animParticule(1),
						this._animParticule(2),
						this._animParticule(3),
						this._animParticule(4)),
					this.smokeClip && this.smokeClip.play(!0);
			},
			viewWillAppearForFirstTime: function() {
				var a = this;
				TweenMax.set(a.$el.find(".univers-text"), { opacity: 0 }),
					TweenMax.to(a.$el.find(".univers-text"), 0.5, {
						opacity: 1,
						delay: 1,
						ease: Power4.easeIn,
						onComplete: function() {
							a.isScrolling = !1;
						}
					});
				var b = this.$el
						.find("#video-fond-01")
						.find("video")
						.get(0),
					c = this.$el
						.find("#video-fond-02")
						.find("video")
						.get(0),
					d = this.$el
						.find("#video-fond-03")
						.find("video")
						.get(0),
					e = this.$el
						.find("#video-fond-04")
						.find("video")
						.get(0),
					f = "";
				if (!Modernizr.touch) {
					"probably" == b.canPlayType("video/mp4") ||
					"maybe" == b.canPlayType("video/mp4")
						? (f = "mp4")
						: "probably" == b.canPlayType("video/webm") ||
							"maybe" == b.canPlayType("video/webm")
							? (f = "webm")
							: ("probably" == b.canPlayType("video/ogg") ||
									"maybe" == b.canPlayType("video/ogg")) &&
								(f = "ogg");
					var g =
							this.$el
								.find("#video-fond-01")
								.find("video")
								.attr("data-src") +
							"." +
							f,
						h =
							this.$el
								.find("#video-fond-02")
								.find("video")
								.attr("data-src") +
							"." +
							f,
						i =
							this.$el
								.find("#video-fond-03")
								.find("video")
								.attr("data-src") +
							"." +
							f,
						j =
							this.$el
								.find("#video-fond-04")
								.find("video")
								.attr("data-src") +
							"." +
							f;
					this.$el
						.find("#video-fond-01")
						.find("source")
						.attr("src", g),
						this.$el
							.find("#video-fond-02")
							.find("source")
							.attr("src", h),
						this.$el
							.find("#video-fond-03")
							.find("source")
							.attr("src", i),
						this.$el
							.find("#video-fond-04")
							.find("source")
							.attr("src", j),
						b.load(),
						c.load(),
						d.load(),
						e.load(),
						setTimeout(function() {
							b.play();
						}, 1500),
						(this.smokeClip = new JSMovieclip(
							this.$el.find("#smoke")[0],
							{
								frames: [
									{ x: 0, y: 0 },
									{ x: 620, y: 0 },
									{ x: 0, y: 420 },
									{ x: 620, y: 420 },
									{ x: 0, y: 840 },
									{ x: 620, y: 840 },
									{ x: 0, y: 1260 },
									{ x: 620, y: 1260 },
									{ x: 0, y: 1680 },
									{ x: 620, y: 1680 },
									{ x: 0, y: 2100 },
									{ x: 620, y: 2100 },
									{ x: 0, y: 2520 },
									{ x: 620, y: 2520 },
									{ x: 0, y: 2940 },
									{ x: 620, y: 2940 },
									{ x: 0, y: 3360 },
									{ x: 620, y: 3360 },
									{ x: 0, y: 3780 },
									{ x: 620, y: 3780 },
									{ x: 0, y: 4200 },
									{ x: 620, y: 4200 },
									{ x: 0, y: 4620 },
									{ x: 620, y: 4620 },
									{ x: 0, y: 5040 },
									{ x: 620, y: 5040 },
									{ x: 0, y: 5460 },
									{ x: 620, y: 5460 },
									{ x: 0, y: 5880 },
									{ x: 620, y: 5880 },
									{ x: 0, y: 6300 },
									{ x: 620, y: 6300 },
									{ x: 0, y: 6720 },
									{ x: 620, y: 6720 },
									{ x: 0, y: 7140 },
									{ x: 620, y: 7140 },
									{ x: 0, y: 7560 },
									{ x: 620, y: 7560 }
								],
								framerate: 16
							}
						));
				}
			},
			viewWillAppear: function() {
				F["abstract"].APageView.prototype.viewWillAppear.call(this),
					(this.currentUnivers = 0),
					this._slideY("down"),
					F.UI.Player().stopGlobal();
			},
			viewWillDisappear: function() {
				$(".player").removeClass("visible"),
					this.smokeClip && this.smokeClip.stop(),
					F.UI.Player().playGlobal();
			},
			_slideY: function(a) {
				var b = this;
				if (
					("down" == a &&
						this.currentUnivers >= this.univers.length &&
						(this.currentUnivers = 0),
					F.UI.Player().$mediaPlayer.off("ended.histoire"),
					"down" == a && this.currentUnivers < this.univers.length)
				) {
					this.currentUnivers++,
						F.UI
							.Player()
							.changeSound(
								$("#song-" + this.currentUnivers),
								this.currentUnivers
							);
					var c = this.currentUnivers - 1,
						b = this;
					3 == this.currentUnivers &&
						TweenMax.to(this.$el.find("#smoke"), 2, {
							opacity: 1,
							delay: 1,
							ease: Power0.easeNone
						}),
						TweenMax.to(this.$el.find("#histoire"), 0.5, {
							opacity: 0,
							ease: Power1.easeOut,
							onComplete: function() {
								TweenMax.set(b.$el.find("#histoire"), {
									y: -(c * F._.wH)
								}),
									TweenMax.set(b.$el.find(".univers-text"), {
										opacity: 0
									}),
									TweenMax.to(b.$el.find("#histoire"), 1, {
										opacity: 1,
										ease: Power4.easeInOut,
										onComplete: function() {
											b.isScrolling = !1;
										}
									}),
									TweenMax.to(
										b.$el.find(".univers-text"),
										0.5,
										{
											opacity: 1,
											delay: 1,
											ease: Power4.easeIn
										}
									),
									Modernizr.touch ||
										$("#video-fond-0" + b.currentUnivers)
											.find("video")
											.get(0)
											.play();
							}
						}),
						TweenMax.to(this.$el.find(".nav-univers-title"), 0.5, {
							y: 10 * c,
							ease: Power2.easeOut
						}),
						this.$el
							.find(".nav-univers-title .number")
							.text("0" + this.currentUnivers),
						TweenMax.to(
							this.$el.find(".nav-univers-title .title"),
							0.2,
							{
								opacity: 0,
								ease: Power3.easeOut,
								onComplete: function() {
									b.$el
										.find(".nav-univers-title .title")
										.text(b.univers[c]),
										TweenMax.to(
											b.$el.find(
												".nav-univers-title .title"
											),
											1,
											{ opacity: 1, ease: Power3.easeIn }
										);
								}
							}
						),
						this.$el
							.find(".nav-univers-bullets span")
							.removeClass("activ"),
						this.$el
							.find(
								".nav-univers-bullets span:nth-of-type(" +
									this.currentUnivers +
									")"
							)
							.addClass("activ"),
						this.currentUnivers == this.univers.length &&
							this.$el.find(".nav-next").fadeOut();
				} else if ("up" == a && this.currentUnivers > 1) {
					this.currentUnivers--,
						F.UI
							.Player()
							.changeSound(
								$("#song-" + this.currentUnivers),
								this.currentUnivers
							);
					var c = this.currentUnivers - 1;
					this.$el
						.find(".nav-univers-title .title")
						.text(this.univers[c]),
						TweenMax.set(this.$el.find(".univers-text"), {
							opacity: 0
						}),
						TweenMax.to(this.$el.find("#histoire"), 0.5, {
							opacity: 0,
							ease: Power3.easeOut,
							onComplete: function() {
								TweenMax.set(b.$el.find("#histoire"), {
									y: -(c * F._.wH)
								}),
									TweenMax.to(b.$el.find("#histoire"), 1, {
										opacity: 1,
										ease: Power4.easeInOut,
										onComplete: function() {
											b.isScrolling = !1;
										}
									}),
									Modernizr.touch ||
										$("#video-fond-0" + b.currentUnivers)
											.find("video")
											.get(0)
											.play();
							}
						}),
						TweenMax.to(b.$el.find(".univers-text"), 0.5, {
							opacity: 1,
							delay: 1,
							ease: Power4.easeIn,
							onComplete: function() {}
						}),
						TweenMax.to(this.$el.find(".nav-univers-title"), 0.5, {
							y: 10 * c,
							ease: Power2.easeOut
						}),
						this.$el
							.find(".nav-univers-title .number")
							.text("0" + this.currentUnivers),
						TweenMax.to(
							this.$el.find(".nav-univers-title .title"),
							0.2,
							{
								opacity: 0,
								ease: Power3.easeOut,
								onComplete: function() {
									b.$el
										.find(".nav-univers-title .title")
										.text(b.univers[c]),
										TweenMax.to(
											b.$el.find(
												".nav-univers-title .title"
											),
											1,
											{ opacity: 1, ease: Power3.easeIn }
										);
								}
							}
						),
						this.$el
							.find(".nav-univers-bullets span")
							.removeClass("activ"),
						this.$el
							.find(
								".nav-univers-bullets span:nth-of-type(" +
									this.currentUnivers +
									")"
							)
							.addClass("activ"),
						this.currentUnivers < this.univers.length &&
							this.$el.find(".nav-next").fadeIn();
				}
				F.UI.Player().$mediaPlayer.on(
					"ended.histoire",
					function() {
						F.UI.Player().stopPlayer(), b.goDown();
					},
					!1
				);
			},
			_animfloconFast: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".flocon-fast"), 7, {
					y: F._.wH,
					delay: 3,
					rotation: 10,
					ease: Power0.easeNone
				}),
					TweenMax.to(b.$el.find(".flocon-fast"), 1.5, {
						opacity: 0,
						delay: 6,
						ease: Power0.easeNone,
						onComplete: function() {
							TweenMax.set(b.$el.find(".flocon-fast"), {
								y: -50,
								rotation: 0,
								opacity: 1
							}),
								b.isCurrent() && b._animfloconFast();
						}
					});
			},
			_animfloconFast2: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".flocon-fast-2"), 8, {
					y: F._.wH + 300,
					delay: 3,
					rotation: 10,
					ease: Power0.easeNone
				}),
					TweenMax.to(b.$el.find(".flocon-fast-2"), 2, {
						opacity: 0,
						delay: 4,
						ease: Power0.easeNone,
						onComplete: function() {
							TweenMax.set(b.$el.find(".flocon-fast-2"), {
								y: -50,
								rotation: 0,
								opacity: 1
							}),
								b.isCurrent() && b._animfloconFast2();
						}
					});
			},
			_animfloconFat: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".flocon-fat"), 4, {
					y: F._.wH + 250,
					delay: 0,
					rotation: 20,
					ease: Power0.easeNone,
					onComplete: function() {
						TweenMax.set(b.$el.find(".flocon-fat"), {
							y: -300,
							rotation: 0,
							opacity: 1
						}),
							b.isCurrent() && b._animfloconFat();
					}
				}),
					TweenMax.to(b.$el.find(".flocon-fat"), 0.5, {
						opacity: 0,
						delay: 3,
						ease: Power0.easeNone,
						onComplete: function() {}
					});
			},
			_animfloconFat2: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".flocon-fat-2"), 6, {
					opacity: 1,
					delay: 3,
					ease: Power0.easeNone
				}),
					TweenMax.to(b.$el.find(".flocon-fat-2"), 4, {
						y: F._.wH + 250,
						delay: 3,
						rotation: -40,
						ease: Power0.easeNone,
						onComplete: function() {
							TweenMax.set(b.$el.find(".flocon-fat-2"), {
								y: -300,
								rotation: 0,
								opacity: 1
							}),
								b.isCurrent() && b._animfloconFat2();
						}
					}),
					TweenMax.to(b.$el.find(".flocon-fat-2"), 1.5, {
						opacity: 0,
						delay: 5,
						ease: Power0.easeNone,
						onComplete: function() {}
					});
			},
			_animfloconsXl: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".flocon-xl"), 5, {
					y: F._.wH,
					rotation: 10,
					ease: Power0.easeNone
				}),
					TweenMax.to(b.$el.find(".flocon-xl"), 2, {
						opacity: 0,
						delay: 3,
						ease: Power0.easeNone,
						onComplete: function() {
							TweenMax.set(b.$el.find(".flocon-xl"), {
								y: -50,
								rotation: 0,
								opacity: 1
							}),
								b.isCurrent() && b._animfloconsXl();
						}
					});
			},
			_animfloconsL: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".flocon-l"), 8, {
					y: F._.wH,
					x: 100,
					rotation: 10,
					ease: Power0.easeNone
				}),
					TweenMax.to(b.$el.find(".flocon-l"), 2, {
						opacity: 0,
						delay: 5,
						ease: Power0.easeNone,
						onComplete: function() {
							TweenMax.set(b.$el.find(".flocon-l"), {
								y: -50,
								x: 0,
								rotation: 0
							}),
								b.isCurrent() && b._animfloconsL();
						}
					});
			},
			_animfloconsM: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".flocon-m"), 8, {
					y: F._.wH,
					x: 200,
					rotation: 10,
					ease: Power0.easeNone
				}),
					TweenMax.to(b.$el.find(".flocon-m"), 5, {
						opacity: 0,
						delay: 3,
						ease: Power0.easeNone,
						onComplete: function() {
							TweenMax.set(b.$el.find(".flocon-m"), {
								y: -50,
								x: 0,
								rotation: 0,
								opacity: 1
							}),
								b.isCurrent() && b._animfloconsM();
						}
					});
			},
			_animfloconsS: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".flocon-s"), 10, {
					y: F._.wH,
					rotation: 10,
					ease: Power0.easeNone
				}),
					TweenMax.to(b.$el.find(".flocon-s"), 3, {
						opacity: 0,
						delay: 7,
						ease: Power0.easeNone,
						onComplete: function() {
							TweenMax.set(b.$el.find(".flocon-s"), {
								y: -50,
								rotation: 0,
								opacity: 1
							}),
								b.isCurrent() && b._animfloconsS();
						}
					});
			},
			_animJournal: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".obj-journal"), 3, {
					y: -15,
					x: 35,
					rotation: 10,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(b.$el.find(".obj-journal"), 3, {
							y: 0,
							x: 0,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(b.$el.find(".obj-journal"), 3, {
									y: 20,
									x: 20,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(
											b.$el.find(".obj-journal"),
											3,
											{
												y: 0,
												x: 0,
												rotation: 0,
												ease: Power1.easeInOut,
												onComplete: function() {
													b.isCurrent() &&
														b._animJournal();
												}
											}
										);
									}
								});
							}
						});
					}
				});
			},
			_animFeuilleJaune: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".obj-feuille-jaune"), 3, {
					y: -55,
					x: 50,
					rotation: -20,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(b.$el.find(".obj-feuille-jaune"), 3, {
							y: 30,
							x: 10,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(
									b.$el.find(".obj-feuille-jaune"),
									3,
									{
										y: 5,
										x: 35,
										rotation: 5,
										ease: Power1.easeInOut,
										onComplete: function() {
											TweenMax.to(
												b.$el.find(
													".obj-feuille-jaune"
												),
												3,
												{
													y: 0,
													x: 0,
													rotation: 0,
													ease: Power1.easeInOut,
													onComplete: function() {
														b.isCurrent() &&
															b._animFeuilleJaune();
													}
												}
											);
										}
									}
								);
							}
						});
					}
				});
			},
			_animFeuilleOrangeFloue: function(a) {
				var b = this,
					c = b.$el.find(".obj-feuille-orange-floue");
				TweenMax.to(c, 3, {
					y: -55,
					x: 50,
					rotation: -20,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 30,
							x: 10,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 5,
									x: 35,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() &&
													b._animFeuilleOrangeFloue();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animFeuilleOrange: function(a) {
				var b = this,
					c = b.$el.find(".obj-feuille-orange");
				TweenMax.to(c, 5, {
					y: 55,
					x: 50,
					rotation: 20,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 30,
							x: 10,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 5,
									x: 35,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() &&
													b._animFeuilleOrange();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animFeuilleVerte2: function(a) {
				var b = this,
					c = b.$el.find(".obj-feuille-verte-2");
				TweenMax.to(c, 2, {
					y: -120,
					x: 180,
					rotation: 160,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 5, {
							y: 30,
							x: 170,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: -30,
									x: 90,
									rotation: -50,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 5, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() &&
													b._animFeuilleVerte2();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animFeuilleVerteFloue: function(a) {
				var b = this,
					c = b.$el.find(".obj-feuille-verte-floue");
				TweenMax.to(c, 5, {
					y: 0,
					x: 30,
					rotation: 5,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 5,
							x: 5,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 0,
									x: 20,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() &&
													b._animFeuilleVerteFloue();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animFeuilleNav: function(a) {
				var b = this;
				TweenMax.to(b.$el.find(".obj-feuille-verte-nav"), 3, {
					y: 15,
					x: 30,
					rotation: -10,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(b.$el.find(".obj-feuille-verte-nav"), 3, {
							y: 5,
							x: 15,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(
									b.$el.find(".obj-feuille-verte-nav"),
									3,
									{
										y: 25,
										x: 20,
										rotation: -5,
										ease: Power1.easeInOut,
										onComplete: function() {
											TweenMax.to(
												b.$el.find(
													".obj-feuille-verte-nav"
												),
												3,
												{
													y: 0,
													x: 0,
													rotation: 0,
													ease: Power1.easeInOut,
													onComplete: function() {
														b.isCurrent() &&
															b._animFeuilleNav();
													}
												}
											);
										}
									}
								);
							}
						});
					}
				});
			},
			_animCoqA: function(a) {
				var b = this,
					c = b.$el.find(".obj-a");
				TweenMax.to(c, 3, {
					y: -15,
					x: 35,
					rotation: 10,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 0,
							x: 0,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 20,
									x: 20,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqA();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animCoqB: function(a) {
				var b = this,
					c = b.$el.find(".obj-b");
				TweenMax.to(c, 3, {
					y: -55,
					x: 50,
					rotation: -20,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 30,
							x: 10,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 5,
									x: 35,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqB();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animCoqC: function(a) {
				var b = this,
					c = b.$el.find(".obj-c");
				TweenMax.to(c, 3, {
					y: -20,
					x: 50,
					rotation: -15,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 30,
							x: 10,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 5,
									x: 35,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqC();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animCoqD: function(a) {
				var b = this,
					c = b.$el.find(".obj-d");
				TweenMax.to(c, 5, {
					y: 55,
					x: 50,
					rotation: 20,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 30,
							x: 10,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 5,
									x: 35,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqD();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animCoqE: function(a) {
				var b = this,
					c = b.$el.find(".obj-e");
				TweenMax.to(c, 2, {
					y: -120,
					x: 180,
					rotation: 160,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 5, {
							y: 30,
							x: 170,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: -30,
									x: 90,
									rotation: -50,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 5, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqE();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animCoqF: function(a) {
				var b = this,
					c = b.$el.find(".obj-f");
				TweenMax.to(c, 5, {
					y: 0,
					x: 30,
					rotation: 5,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 5,
							x: 5,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 0,
									x: 20,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqF();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animCoqG: function(a) {
				var b = this,
					c = b.$el.find(".obj-g");
				TweenMax.to(c, 3, {
					y: 15,
					x: 30,
					rotation: -10,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 5,
							x: 15,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 25,
									x: 20,
									rotation: -5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqG();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animCoqH: function(a) {
				var b = this,
					c = b.$el.find(".obj-i");
				TweenMax.to(c, 2, {
					y: -120,
					x: 180,
					rotation: 160,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 5, {
							y: 30,
							x: 170,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: -30,
									x: 90,
									rotation: -50,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 5, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqH();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animCoqI: function(a) {
				var b = this,
					c = b.$el.find(".obj-h");
				TweenMax.to(c, 5, {
					y: 55,
					x: 50,
					rotation: 20,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 30,
							x: 10,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 5,
									x: 35,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animCoqI();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animFiole: function(a) {
				var b = this,
					c = b.$el.find(".obj-fiole");
				TweenMax.to(c, 5, {
					y: 0,
					x: 30,
					rotation: 5,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 5,
							x: 5,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 0,
									x: 20,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() && b._animFiole();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animFiole1: function(a) {
				var b = this,
					c = b.$el.find(".obj-fiole-1");
				TweenMax.to(c, 2 + 6 * Math.random(), {
					y: 5 * Math.random(),
					x: 6 * Math.random() + 20,
					rotation: 0,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 2 + 2 * Math.random(), {
							y: 5 + 5 * Math.random(),
							x: 6 * Math.random(),
							rotation: 7 * Math.random(),
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 2 + 2 * Math.random(), {
									y: 5 * Math.random(),
									x: 6 * Math.random() + 10,
									rotation: 0,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 2 + 2 * Math.random(), {
											y: 0,
											x: 0,
											rotation: 5 * Math.random(),
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() &&
													b._animFiole1();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animFiole2: function(a) {
				var b = this,
					c = b.$el.find(".obj-fiole-2");
				TweenMax.to(c, 3, {
					y: -20,
					x: 50,
					rotation: -10,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 30,
							x: 10,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 5,
									x: 35,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() &&
													b._animFiole2();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animParticule: function(a) {
				var b = this,
					c = b.$el.find(".obj-particule-" + a);
				TweenMax.to(c, 3 * Math.random() + 2, {
					y: -10 - 10 * Math.random(),
					x: 10 * Math.random(),
					rotation: 10 * -Math.random(),
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3 * Math.random() + 2, {
							y: 10 + 20 * Math.random(),
							x: 10 * Math.random(),
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3 * Math.random() + 2, {
									y: 5 * Math.random(),
									x: 20 * Math.random(),
									rotation: 10 * Math.random(),
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3 * Math.random() + 2, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() &&
													b._animParticule(a);
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_animTasseFat: function(a) {
				var b = this,
					c = b.$el.find(".obj-tasse-fat");
				TweenMax.to(c, 5, {
					y: 0,
					x: 30,
					rotation: 5,
					ease: Power1.easeInOut,
					onComplete: function() {
						TweenMax.to(c, 3, {
							y: 5,
							x: 5,
							rotation: 0,
							ease: Power1.easeInOut,
							onComplete: function() {
								TweenMax.to(c, 3, {
									y: 0,
									x: 20,
									rotation: 5,
									ease: Power1.easeInOut,
									onComplete: function() {
										TweenMax.to(c, 3, {
											y: 0,
											x: 0,
											rotation: 0,
											ease: Power1.easeInOut,
											onComplete: function() {
												b.isCurrent() &&
													b._animTasseFat();
											}
										});
									}
								});
							}
						});
					}
				});
			},
			_togglePlayer: function() {}
		});
	})(window),
	(function(a) {
		(a.F.views = a.F.views || {}),
			(a.F.views.Actualites = F["abstract"].APageView.extend({
				events: {
					"mouseover .btn-enter": "_hoverBtn",
					"mouseleave .btn-enter": "_leaveBtn",
					"onStateChange #yt": "player_state_changed"
				},
				$items: null,
				myScroll: null,
				render: function() {
					return (
						F["abstract"].APageView.prototype.render.call(this),
						this.$el.find("#actualites").height(F._.wH),
						this
					);
				},
				resize: function(a, b) {
					this.$el.find("#actualites").height(F._.wH);
				},
				viewWillAppear: function() {
					F["abstract"].APageView.prototype.viewWillAppear.call(this),
						F.UI
							.Player()
							.$mediaGlobalPlayer.animate({ volume: 0 }, 1e3),
						this.myScroll && this.myScroll.scrollTo(0, 0);
				},
				viewDidAppear: function() {
					F["abstract"].APageView.prototype.viewDidAppear.call(this),
						F.UI
							.Player()
							.$mediaGlobalPlayer.animate({ volume: 0 }, 1e3);
					this.$items = [];
					var a = $(".post"),
						b = $.grep(a, function(a) {
							return $(a).position().top < F._.wH;
						});
					$(b).addClass("visible");
				},
				viewWillAppearForFirstTime: function() {
					F[
						"abstract"
					].APageView.prototype.viewWillAppearForFirstTime.call(this);
				},
				viewDidAppearForFirstTime: function() {
					F[
						"abstract"
					].APageView.prototype.viewDidAppearForFirstTime.call(this);
					var a = this,
						b = 0;
					$(".video-wrapper").each(function() {
						b++;
						$(this)
							.find("div")
							.attr("data-id"),
							$(this)
								.find("div")
								.attr("id");
					}),
						this.$el
							.find(".bxslider")
							.bxSlider({
								touchEnabled: !0,
								auto: !0,
								mode: "fade",
								speed: 1e3
							}),
						(a.myScroll = new IScroll(
							a.$el.find("#actualites")[0],
							{ mouseWheel: !0, probeType: 3 }
						)),
						this.myScroll.on("scroll", function() {
							var b = (this.y, $(".post")),
								c = $.grep(b, function(a) {
									return $(a).position().top < F._.wH - 100;
								});
							$(c).addClass("visible"),
								setTimeout(function() {
									a.myScroll.refresh();
								}, 0);
						});
				},
				viewDidDisappear: function() {
					F["abstract"].APageView.prototype.viewDidDisappear.call(
						this
					),
						F.UI
							.Player()
							.$mediaGlobalPlayer.animate({ volume: 1 }, 1e3);
				},
				viewWillDisappear: function() {}
			}));
	})(window),
	(function(a) {
		a.F.views = a.F.views || {};
		var b = 1;
		a.F.views.Galerie = F["abstract"].APageView.extend({
			totalItems: 0,
			cursor: 0,
			events: {},
			myScroll: null,
			render: function() {
				return (
					F["abstract"].APageView.prototype.render.call(this),
					this.$el.find("#galerie").height(F._.wH),
					this
				);
			},
			resize: function(a, b) {
				this.$el.find("#galerie").height(F._.wH);
			},
			viewWillAppear: function() {
				F["abstract"].APageView.prototype.viewWillAppear.call(this),
					this.myScroll && this.myScroll.scrollTo(0, 0);
			},
			viewDidAppearForFirstTime: function() {
				F[
					"abstract"
				].APageView.prototype.viewDidAppearForFirstTime.call(this),
					(this.totalItems = this.$el.find(".grid-item").length);
				var a = this.$el
						.find(".grid:last-child")
						.find(".grid-item:last-child")
						.position().top,
					b = 40 * this.$el.find(".grid").width() / 100;
				this.$el.find(".grid").each(function() {
					(a = $(this)
						.find(".grid-item:last-child")
						.position().top),
						$(this).height(a + b);
				}),
					(this.myScroll = new IScroll("#galerie", {
						mouseWheel: !0,
						probeType: 3
					}));
				var c = $(".grid-item"),
					d = 0,
					e = $.grep(c, function(a) {
						return (
							$(a)
								.parents(".grid")
								.position().top +
								$(a).position().top +
								d <
							F._.wH
						);
					}),
					f = 0,
					g = setInterval(function() {
						$(e)
							.eq(f)
							.removeClass("off"),
							f++,
							f > e.length && clearInterval(g);
					}, 100);
				this.myScroll.on("scroll", function() {
					clearInterval(g);
					var a = (this.y, $(".grid-item")),
						b = this.y,
						c = $.grep(a, function(a) {
							return (
								$(a)
									.parents(".grid")
									.position().top +
									$(a).position().top +
									b <
								F._.wH
							);
						});
					c.length;
					$(c).removeClass("off");
				});
			},
			viewDidAppear: function() {
				F["abstract"].APageView.prototype.viewDidAppear.call(this);
			},
			_slideDown: function(a) {
				a.preventDefault(),
					TweenMax.to(this.$el.find("#auteurs"), 1, {
						y: -(b * F._.wH),
						ease: Power4.easeOut
					}),
					b++;
			},
			_shuffleArray: function(a) {
				for (
					var b, c, d = a.length;
					d;
					b = Math.floor(Math.random() * d),
						c = a[--d],
						a[d] = a[b],
						a[b] = c
				);
				return a;
			}
		});
	})(window),
	(function(a) {
		(a.F.views = a.F.views || {}),
			(a.F.views.Auteurs = F["abstract"].APageView.extend({
				univers: [
					"Annsophie Lombrail",
					"Scott Pennor's",
					"Martin Gamet"
				],
				needCustomScroll: !0,
				isScrolling: !1,
				currentUnivers: 1,
				events: { "click .nav-next": "goDown" },
				render: function() {
					return (
						F["abstract"].APageView.prototype.render.call(this),
						this.$el.find(".auteur").height(F._.wH),
						this
					);
				},
				goDown: function() {
					this._slideY("down");
				},
				goUp: function() {
					this._slideY("up");
				},
				viewWillAppear: function() {
					F["abstract"].APageView.prototype.viewWillAppear.call(this),
						(this.currentUnivers = 0),
						this.goDown(),
						F.UI.Player().stopGlobal();
				},
				viewDidAppear: function() {
					F["abstract"].APageView.prototype.viewDidAppear.call(this),
						(this.needCustomScroll = !0);
				},
				keyboardRight: function() {
					Backbone.history.navigate(
						F.CONFIG.PATH_URL + "actualites",
						{ trigger: !0 }
					);
				},
				keyboardLeft: function() {
					Backbone.history.navigate(
						F.CONFIG.PATH_URL + "les-artistes",
						{ trigger: !0 }
					);
				},
				_slideY: function(a) {
					var b = this;
					if (
						"down" == a &&
						this.currentUnivers < this.univers.length
					) {
						this.currentUnivers++;
						var c = this.currentUnivers - 1;
						TweenMax.to(this.$el.find("#auteurs"), 0.5, {
							opacity: 0,
							ease: Power1.easeOut,
							onComplete: function() {
								TweenMax.set(b.$el.find("#auteurs"), {
									y: -(c * F._.wH)
								}),
									TweenMax.to(b.$el.find("#auteurs"), 1, {
										opacity: 1,
										ease: Power4.easeInOut,
										onComplete: function() {
											b.isScrolling = !1;
										}
									}),
									TweenMax.set(b.$el.find(".presentation"), {
										y: 80
									}),
									TweenMax.to(
										b.$el.find(".presentation"),
										1,
										{ y: 0, ease: Power2.easeOut }
									);
							}
						}),
							this.$el
								.find(".nav-univers-title .number")
								.text("0" + this.currentUnivers),
							TweenMax.to(
								this.$el.find(".nav-univers-title"),
								0.5,
								{ y: 8 * c, ease: Power2.easeOut }
							),
							TweenMax.to(
								this.$el.find(".nav-univers-title .title"),
								0.2,
								{
									opacity: 0,
									ease: Power3.easeOut,
									onComplete: function() {
										b.$el
											.find(".nav-univers-title .title")
											.text(b.univers[c]),
											TweenMax.to(
												b.$el.find(
													".nav-univers-title .title"
												),
												0.8,
												{
													opacity: 1,
													ease: Power3.easeIn
												}
											);
									}
								}
							),
							this.$el
								.find(".nav-univers-bullets span")
								.removeClass("activ"),
							this.$el
								.find(
									".nav-univers-bullets span:nth-of-type(" +
										this.currentUnivers +
										")"
								)
								.addClass("activ"),
							this.currentUnivers == this.univers.length &&
								this.$el.find(".nav-next").fadeOut();
					} else if ("up" == a && this.currentUnivers > 1) {
						this.currentUnivers--;
						var c = this.currentUnivers - 1;
						TweenMax.to(this.$el.find("#auteurs"), 0.5, {
							opacity: 0,
							ease: Power1.easeOut,
							onComplete: function() {
								TweenMax.set(b.$el.find("#auteurs"), {
									y: -(c * F._.wH)
								}),
									TweenMax.to(b.$el.find("#auteurs"), 1, {
										opacity: 1,
										ease: Power4.easeInOut,
										onComplete: function() {
											b.isScrolling = !1;
										}
									}),
									TweenMax.set(b.$el.find(".presentation"), {
										y: 80
									}),
									TweenMax.to(
										b.$el.find(".presentation"),
										1,
										{ y: 0, ease: Power2.easeOut }
									);
							}
						}),
							this.$el
								.find(".nav-univers-title .number")
								.text("0" + this.currentUnivers),
							TweenMax.to(
								this.$el.find(".nav-univers-title"),
								0.5,
								{ y: 8 * c, ease: Power2.easeOut }
							),
							TweenMax.to(
								this.$el.find(".nav-univers-title .title"),
								0.2,
								{
									opacity: 0,
									ease: Power3.easeOut,
									onComplete: function() {
										b.$el
											.find(".nav-univers-title .title")
											.text(b.univers[c]),
											TweenMax.to(
												b.$el.find(
													".nav-univers-title .title"
												),
												0.8,
												{
													opacity: 1,
													ease: Power3.easeIn
												}
											);
									}
								}
							),
							this.$el
								.find(".nav-univers-bullets span")
								.removeClass("activ"),
							this.$el
								.find(
									".nav-univers-bullets span:nth-of-type(" +
										this.currentUnivers +
										")"
								)
								.addClass("activ"),
							this.currentUnivers < this.univers.length &&
								this.$el.find(".nav-next").fadeIn();
					}
				}
			}));
	})(window),
	(function(a) {
		(a.F.views = a.F.views || {}),
			(a.F.views.Personnages = F["abstract"].APageView.extend({
				univers: [
					"Yuma",
					"Zach",
					"Léo",
					"Jimmy",
					"Robert",
					"Mioute",
					"Personnages secondaires"
				],
				needCustomScroll: !0,
				isScrolling: !1,
				currentUnivers: 1,
				events: {
					"click .nav-next": function() {
						this.goDown();
					}
				},
				render: function() {
					return (
						F["abstract"].APageView.prototype.render.call(this),
						this.$el.find(".perso").height(F._.wH),
						this
					);
				},
				resize: function() {
					this.$el.find(".perso").height(F._.wH);
				},
				viewWillAppear: function() {
					F["abstract"].APageView.prototype.viewWillAppear.call(this),
						(this.currentUnivers = 0),
						this.goDown(),
						F.UI.Player().stopGlobal();
				},
				viewDidAppear: function() {
					F["abstract"].APageView.prototype.viewDidAppear.call(this);
				},
				goDown: function() {
					this._slideY("down");
				},
				goUp: function() {
					this._slideY("up");
				},
				_slideY: function(a) {
					var b = this;
					if (
						"down" == a &&
						this.currentUnivers < this.univers.length
					) {
						this.currentUnivers++;
						var c = this.currentUnivers - 1;
						TweenMax.to(this.$el.find("#personnages"), 0.5, {
							opacity: 0,
							ease: Power4.easeOut,
							onComplete: function() {
								TweenMax.set(b.$el.find("#personnages"), {
									y: -(c * F._.wH)
								}),
									TweenMax.set(b.$el.find(".perso-text"), {
										opacity: 0
									}),
									TweenMax.to(b.$el.find("#personnages"), 1, {
										opacity: 1,
										ease: Power4.easeInOut,
										onComplete: function() {
											b.isScrolling = !1;
										}
									}),
									TweenMax.to(
										b.$el.find(".perso-text"),
										0.5,
										{
											opacity: 1,
											delay: 0.3,
											ease: Power4.easeIn
										}
									);
							}
						}),
							this.$el
								.find(".nav-univers-title .number")
								.text("0" + this.currentUnivers),
							TweenMax.to(
								this.$el.find(".nav-univers-title"),
								0.5,
								{ y: 8 * c, ease: Power2.easeOut }
							),
							TweenMax.to(
								this.$el.find(".nav-univers-title .title"),
								0.2,
								{
									opacity: 0,
									ease: Power3.easeOut,
									onComplete: function() {
										b.$el
											.find(".nav-univers-title .title")
											.text(b.univers[c]),
											TweenMax.to(
												b.$el.find(
													".nav-univers-title .title"
												),
												0.8,
												{
													opacity: 1,
													ease: Power3.easeIn
												}
											);
									}
								}
							),
							this.$el
								.find(".nav-univers-bullets span")
								.removeClass("activ"),
							this.$el
								.find(
									".nav-univers-bullets span:nth-of-type(" +
										this.currentUnivers +
										")"
								)
								.addClass("activ"),
							this.currentUnivers == this.univers.length &&
								this.$el.find(".nav-next").fadeOut();
					} else if ("up" == a && this.currentUnivers > 1) {
						this.currentUnivers--;
						var c = this.currentUnivers - 1;
						TweenMax.to(this.$el.find("#personnages"), 0.5, {
							opacity: 0,
							ease: Power4.easeOut,
							onComplete: function() {
								TweenMax.set(b.$el.find("#personnages"), {
									y: -(c * F._.wH)
								}),
									TweenMax.set(b.$el.find(".perso-text"), {
										opacity: 0
									}),
									TweenMax.to(b.$el.find("#personnages"), 1, {
										opacity: 1,
										ease: Power4.easeInOut,
										onComplete: function() {
											b.isScrolling = !1;
										}
									}),
									TweenMax.to(
										b.$el.find(".perso-text"),
										0.5,
										{
											opacity: 1,
											delay: 0.3,
											ease: Power4.easeIn
										}
									);
							}
						}),
							this.$el
								.find(".nav-univers-title .number")
								.text("0" + this.currentUnivers),
							TweenMax.to(
								this.$el.find(".nav-univers-title"),
								0.5,
								{ y: 9 * c, ease: Power2.easeOut }
							),
							TweenMax.to(
								this.$el.find(".nav-univers-title .title"),
								0.2,
								{
									opacity: 0,
									ease: Power3.easeOut,
									onComplete: function() {
										b.$el
											.find(".nav-univers-title .title")
											.text(b.univers[c]),
											TweenMax.to(
												b.$el.find(
													".nav-univers-title .title"
												),
												0.8,
												{
													opacity: 1,
													ease: Power3.easeIn
												}
											);
									}
								}
							),
							this.$el
								.find(".nav-univers-bullets span")
								.removeClass("activ"),
							this.$el
								.find(
									".nav-univers-bullets span:nth-of-type(" +
										this.currentUnivers +
										")"
								)
								.addClass("activ"),
							this.currentUnivers < this.univers.length &&
								this.$el.find(".nav-next").fadeIn();
					}
				}
			}));
	})(window),
	(function(a) {
		(a.F.views = a.F.views || {}),
			(a.F.views.Artistes = F["abstract"].APageView.extend({
				events: {},
				myScroll: null,
				indexAppear: 0,
				$items: null,
				render: function() {
					return (
						F["abstract"].APageView.prototype.render.call(this),
						this.$el.find("#artistes").height(F._.wH),
						this
					);
				},
				resize: function(a, b) {
					this.$el.find("#artistes").height(F._.wH);
				},
				viewDidAppearForFirstTime: function() {
					var a = this;
					F[
						"abstract"
					].APageView.prototype.viewDidAppearForFirstTime.call(this),
						(this.myScroll = new IScroll(
							this.$el.find("#artistes")[0],
							{ mouseWheel: !0, scrollbars: !1, probeType: 3 }
						)),
						this.myScroll.on("scroll", function() {
							for (var b = 0, c = null; (c = a.$items[b]); b++)
								!c.isVisible &&
									c.top < Math.abs(this.y) + F._.wH - 100 &&
									((a.$items[b].isVisible = !0),
									c.$el.addClass("visible"));
							setTimeout(function() {
								a.myScroll.refresh();
							}, 0);
						});
				},
				viewWillAppear: function() {
					F["abstract"].APageView.prototype.viewWillAppear.call(this),
						this.$el.find(".artiste").removeClass("visible"),
						this.myScroll && this.myScroll.scrollTo(0, 0);
				},
				viewDidAppear: function() {
					F["abstract"].APageView.prototype.viewDidAppear.call(this);
					var a = this;
					(this.$items = []),
						this.$el.find(".artiste").each(function() {
							var b = $(this);
							a.$items.push({
								top: b.offset().top,
								$el: b,
								isVisible: !1
							});
						});
					for (var b = 0, c = null; (c = this.$items[b]); b++)
						!c.isVisible &&
							c.top < F._.wH &&
							((this.$items[b].isVisible = !0),
							(function(a, b) {
								setTimeout(function() {
									a.$el.addClass("visible");
								}, 500 * b);
							})(c, b));
				},
				viewWillDisappear: function() {}
			}));
	})(window),
	(function(a) {
		(a.F.views = a.F.views || {}),
			(a.F.views.Boutique = F["abstract"].APageView.extend({
				events: {
					"click .onglet": "_toggleTab",
					"mouseover .btn-enter": "_hoverBtn",
					"mouseleave .btn-enter": "_leaveBtn"
				},
				myScroll: null,
				render: function() {
					return (
						F["abstract"].APageView.prototype.render.call(this),
						this.$el.find("#boutique").height(F._.wH),
						this
					);
				},
				resize: function(a, b) {
					this.$el.find("#boutique").height(F._.wH);
				},
				viewDidAppearForFirstTime: function() {
					F[
						"abstract"
					].APageView.prototype.viewDidAppearForFirstTime.call(this),
						(this.myScroll = new IScroll(
							this.$el.find("#boutique")[0],
							{ mouseWheel: !0, click: !0 }
						));
				},
				viewDidAppear: function() {
					F["abstract"].APageView.prototype.viewDidAppear.call(this);
				},
				_toggleTab: function(a) {
					var b = this;
					this.$el.find(".onglet").removeClass("on"),
						$(a.currentTarget).addClass("on");
					var c = $(a.currentTarget).attr("data-type");
					this.$el.find(".onglet-content").hide(),
						this.$el.find(".onglet-content-" + c).fadeIn(600),
						setTimeout(function() {
							b.myScroll.refresh();
						}, 20);
				}
			}));
	})(window),
	(function() {
		F.UI = F.UI || {};
		var a = null,
			b = Backbone.View.extend({
				$mediaPlayer: null,
				$mediaGlobalPlayer: null,
				$progressBar: null,
				$cursor: null,
				$muteBtn: null,
				percentage: 0,
				univers: 1,
				mute: !1,
				events: { "click .player-btn": "togglePlayPause" },
				initialize: function() {
					var a = this;
					(this.$mediaPlayer = this.$el.find("#song-1")),
						(this.$mediaGlobalPlayer = this.$el.find(
							"#song-global"
						)),
						(this.$mediaPlayer[0].controls = !1),
						this.mute && (a.$mediaPlayer[0].muted = !0),
						this.$mediaPlayer.on("timeupdate.player", function() {
							a.updateProgressBar();
						}),
						(this.$progressBar = this.$el.find(".player-bar")),
						(this.$cursor = this.$progressBar.find(
							".player-cursor"
						)),
						(this.$muteBtn = this.$el.find(".mute"));
				},
				playGlobal: function() {
					var a = this;
					this.$mediaPlayer.animate({ volume: 0 }, 1e3),
						this.$mediaPlayer[0].pause(),
						(this.$mediaPlayer[0].currentTime = 0),
						setTimeout(function() {
							a.$mediaGlobalPlayer[0].pause(),
								(a.$mediaGlobalPlayer[0].currentTime = 0),
								a.updateProgressBar(),
								(a.$mediaGlobalPlayer[0].loop = !0),
								a.mute && (a.$mediaGlobalPlayer[0].muted = !0),
								a.$mediaGlobalPlayer[0].play(),
								a.$mediaGlobalPlayer.animate(
									{ volume: 1 },
									500
								);
						}, 1e3);
				},
				stopGlobal: function() {
					var a = this;
					this.$mediaGlobalPlayer.animate({ volume: 0 }, 500),
						setTimeout(function() {
							a.$mediaGlobalPlayer[0].pause(),
								(a.$mediaGlobalPlayer[0].currentTime = 0);
						}, 500);
				},
				changeSound: function(a, b) {
					var c = this;
					(this.univers = b),
						this.$mediaPlayer.animate({ volume: 0 }, 1500),
						setTimeout(function() {
							c.$mediaPlayer.off("ended.player"),
								c.$mediaPlayer.off("timeupdate.player"),
								c.$mediaPlayer[0].pause(),
								(c.$mediaPlayer[0].currentTime = 0),
								c.updateProgressBar(),
								(c.$mediaPlayer = a),
								(c.$mediaPlayer[0].controls = !1),
								c.$mediaPlayer.on(
									"timeupdate.player",
									function() {
										c.updateProgressBar();
									}
								),
								c.mute && (c.$mediaPlayer[0].muted = !0),
								c.$mediaPlayer.on("ended.player", function() {
									c.stopPlayer(), c.trigger("end-sound");
								}),
								c.$cursor.height(0),
								$(".player-btn").removeClass("pause"),
								c.$mediaPlayer.animate({ volume: 1 }, 200),
								c.$mediaPlayer[0].play();
						}, 2e3);
				},
				togglePlayPause: function() {
					var a = this.$el.find(".player-btn");
					if (
						this.$mediaPlayer[0].paused ||
						this.$mediaPlayer[0].ended
					) {
						a.removeClass("pause");
						var b = this;
						b.$mediaPlayer[0].play(),
							this.$mediaPlayer.animate({ volume: 1 }, 1e3);
					} else a.addClass("pause"), this.$mediaPlayer[0].pause();
				},
				toggleMute: function() {
					this.mute
						? (this.$muteBtn.removeClass("muted"),
							(this.mute = !1),
							this.$mediaPlayer.animate({ volume: 1 }, 300),
							this.$mediaGlobalPlayer.animate({ volume: 1 }, 300))
						: (this.$muteBtn.addClass("muted"),
							(this.mute = !0),
							this.$mediaPlayer.animate({ volume: 0 }, 300),
							this.$mediaGlobalPlayer.animate({ volume: 0 }, 300));
				},
				pausePlayer: function() {
					var a = this.$el.find(".player-btn");
					a.addClass("pause"), this.$mediaPlayer[0].pause();
				},
				playPlayer: function() {
					var a = this.$el.find(".player-btn");
					a.removeClass("pause");
					var b = this;
					setTimeout(function() {
						b.$mediaPlayer.animate({ volume: 1 }, 1e3),
							b.$mediaPlayer[0].play();
					}, 1500);
				},
				updateProgressBar: function() {
					(this.percentage = Math.floor(
						100 /
							this.$mediaPlayer[0].duration *
							this.$mediaPlayer[0].currentTime
					)),
						this.$cursor.height(this.percentage + "%"),
						this.percentage > 90 &&
							4 !== this.univers &&
							this.$mediaPlayer.animate({ volume: 0 }, 500);
				},
				resetPlayer: function() {
					(this.$mediaPlayer.currentTime = 0),
						(this.$progressBar.value = 0);
				},
				stopPlayer: function() {
					var a = this;
					this.$mediaPlayer.animate({ volume: 0 }, 1e3),
						setTimeout(function() {
							a.$el.find(".player-btn").addClass("pause"),
								a.$mediaPlayer[0].pause(),
								(a.$mediaPlayer[0].currentTime = 0),
								a.updateProgressBar();
						}, 1e3);
				}
			});
		F.UI.Player = function() {
			return a || (a = new b({ el: $(".player") })), a;
		};
	})(),
	(function() {
		F.UI = F.UI || {};
		var a = null,
			b = null,
			c = Backbone.View.extend({
				currentSlide: 1,
				myScroll: null,
				snapThreshold: 3,
				navX: 85,
				$scroller: null,
				$items: null,
				events: {
					mousewheel: "_mouseWheel",
					"click .item-content": "_clickItem"
				},
				isMoving: !1,
				timerScroll: null,
				isOpen: !1,
				initialize: function() {
					(this.$scroller = this.$el.find("#scroller")),
						(this.$items = this.$scroller.find(".item")),
						this.resize(F._.wW, F._.wH);
				},
				prev: function() {
					b && b.prev();
				},
				next: function() {
					b && b.next();
				},
				_clickItem: function(a) {
					var c = $(a.currentTarget),
						d = c.parent();
					d.index() != this.getCurrentPage() &&
						(b && b.goToPage(d.index(), 0, 1e3),
						a.stopPropagation(),
						a.preventDefault());
				},
				_mouseWheel: function(a) {
					var c = 0 === a.deltaX ? -1 * a.deltaY : a.deltaX,
						d = this;
					b &&
						!this.isMoving &&
						((this.isMoving = !0),
						c > 0 ? b.next() : 0 > c && b.prev(),
						this.timerScroll &&
							(clearTimeout(this.timerScroll),
							(this.timerScroll = null)),
						(this.timerScroll = setTimeout(function() {
							d.isMoving = !1;
						}, 1500)));
				},
				getCurrentPage: function() {
					return b && b.currentPage ? b.currentPage.pageX : 0;
				},
				openMenu: function() {
					if (!this.isOpen) {
						this.$el.show(), (this.isOpen = !0);
						var a = this;
						TweenMax.set(this.$el, { opacity: 1 }),
							$("#content").addClass("content--hidden"),
							$(".btn-menu").addClass("btn-menu--open"),
							setTimeout(function() {
								$("#menu .close").removeClass("paused");
							}, 100),
							TweenMax.set($(".cursor, .menu-nav"), {
								opacity: 0
							}),
							TweenMax.to($(".cursor, .menu-nav"), 0.8, {
								opacity: 1,
								ease: Power2.easeIn,
								delay: 0.2
							}),
							TweenMax.set(this.$el.find(".menu-main"), {
								opacity: 0
							}),
							TweenMax.to(this.$el.find(".menu-main"), 1.5, {
								scale: 1,
								opacity: 1,
								ease: Elastic.easeOut.config(1, 1),
								onComplete: function() {
									b ||
										((b = new IScroll(".menu-main", {
											scrollX: !0,
											scrollY: !1,
											click: !0,
											momentum: !1,
											snap: ".item",
											keyBindings: !0
										})),
										b.on("scrollStart", function() {
											Modernizr.touch ||
												TweenMax.to(
													a.$el.find("h3"),
													0.3,
													{
														x: 20,
														ease: Power3.easeOut
													}
												);
										}),
										b.on("scrollEnd", function() {
											var b = a.getCurrentPage();
											Modernizr.touch ||
												TweenMax.to(
													a.$el
														.find(".item")
														.eq(b)
														.find("h3"),
													1.5,
													{
														x: 0,
														ease: Power3.easeOut
													}
												),
												a.$el
													.find(".menu-nav span")
													.removeClass("activ"),
												a.$el
													.find(
														'.menu-nav span[data-id="' +
															b +
															'"]'
													)
													.addClass("activ"),
												(a.navX = 14 * b),
												TweenMax.to(
													a.$el.find(".menu-nav"),
													0.8,
													{
														x: -a.navX + "%",
														ease: Elastic.easeOut.config(
															1,
															1
														)
													}
												);
										}));
								}
							});
					}
				},
				closeMenu: function() {
					var a = this;
					this.isOpen &&
						($("#menu .close").addClass("paused"),
						TweenMax.to($(".cursor, .menu-nav"), 0.8, {
							opacity: 0,
							ease: Power2.easeOut
						}),
						setTimeout(function() {
							TweenMax.to(a.$el.find(".menu-main"), 0.5, {
								scale: 1.8,
								opacity: 0,
								ease: Power3.easeIn,
								onComplete: function() {
									$(".btn-menu").removeClass(
										"btn-menu--open"
									),
										$("#content").removeClass(
											"content--hidden"
										),
										TweenMax.to(a.$el, 0.3, {
											opacity: 0,
											ease: Power3.easeOut,
											onComplete: function() {
												TweenMax.set(
													a.$el.find(".menu-main"),
													{ scale: 0, y: "-50%" }
												),
													a.$el.hide(),
													(a.isOpen = !1);
											}
										});
								}
							});
						}, 300));
				},
				resize: function(a, b) {
					this.$scroller
						.width(
							this.$items.width(a / 2).length * (a / 2) + a / 2
						)
						.css({}),
						this.$el.find(".menu-main").css("margin-left", a / 4);
				}
			});
		F.UI.Menu = function() {
			return a || (a = new c({ el: $("#menu") })), a;
		};
	})(),
	(function(a) {
		function b() {
			(F._.wW = a.width()),
				(F._.wH = a.height()),
				_.each(t, function(a) {
					a.resize && a.resize(F._.wW, F._.wH);
				}),
				F.isMobile()
					? $("html").addClass("mobile")
					: $("html").removeClass("mobile");
		}
		function c() {
			var a = $(".erable-xl");
			TweenMax.to(a, 5, {
				y: 55,
				x: 50,
				rotation: 20,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 30,
						x: 10,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 5,
								x: 35,
								rotation: 5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											c();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function d() {
			var a = $(".erable-s");
			TweenMax.to(a, 3, {
				y: -15,
				x: 35,
				rotation: 10,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 0,
						x: 0,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 20,
								x: 20,
								rotation: 5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											d();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function e() {
			var a = $(".allumette-xl");
			TweenMax.to(a, 5, {
				y: 0,
				x: 30,
				rotation: 5,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 5,
						x: 5,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 0,
								x: 20,
								rotation: 5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											e();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function f() {
			var a = $(".allumette-s");
			TweenMax.to(a, 5, {
				y: 55,
				x: 50,
				rotation: 20,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 30,
						x: 10,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 5,
								x: 35,
								rotation: 5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											f();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function g() {
			var a = $(".feuille-floue");
			TweenMax.to(a, 3, {
				y: 15,
				x: 30,
				rotation: -10,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 5,
						x: 15,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 25,
								x: 20,
								rotation: -5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											g();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function h() {
			var a = $(".journal2");
			TweenMax.to(a, 4, {
				y: 30,
				x: 60,
				rotation: -10,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 5, {
						y: 5,
						x: 0,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							h();
						}
					});
				}
			});
		}
		function i() {
			var a = $(".feuille-xl");
			TweenMax.to(a, 3, {
				y: 15,
				x: 30,
				rotation: -10,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 5,
						x: 15,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 25,
								x: 20,
								rotation: -5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											i();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function j() {
			var a = $(".coquelicot-a");
			TweenMax.to(a, 5, {
				y: 55,
				x: 50,
				rotation: 20,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 30,
						x: 10,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 5,
								x: 35,
								rotation: 5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											j();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function k() {
			var a = $(".coquelicot-b");
			TweenMax.to(a, 2, {
				y: -120,
				x: 180,
				rotation: 160,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 5, {
						y: 30,
						x: 170,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: -30,
								x: 90,
								rotation: -50,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 5, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											k();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function l() {
			var a = $(".coquelicot-c");
			TweenMax.to(a, 2, {
				y: -120,
				x: 180,
				rotation: 160,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 5, {
						y: 30,
						x: 170,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: -30,
								x: 90,
								rotation: -50,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 5, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											l();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function m() {
			var a = $(".plume");
			TweenMax.to(a, 5, {
				y: 55,
				x: 50,
				rotation: 20,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 30,
						x: 10,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 5,
								x: 35,
								rotation: 5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											m();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		function n() {
			var a = $(".plume2");
			TweenMax.to(a, 5, {
				y: 55,
				x: 50,
				rotation: 20,
				ease: Power1.easeInOut,
				onComplete: function() {
					TweenMax.to(a, 3, {
						y: 30,
						x: 10,
						rotation: 0,
						ease: Power1.easeInOut,
						onComplete: function() {
							TweenMax.to(a, 3, {
								y: 5,
								x: 35,
								rotation: 5,
								ease: Power1.easeInOut,
								onComplete: function() {
									TweenMax.to(a, 3, {
										y: 0,
										x: 0,
										rotation: 0,
										ease: Power1.easeInOut,
										onComplete: function() {
											n();
										}
									});
								}
							});
						}
					});
				}
			});
		}
		(F._.wW = a.width()),
			(F._.wH = a.height()),
			(F._.scrollTop = a.scrollTop());
		var o = !1,
			p = 1,
			q = !1;
		F._.navDir = "right";
		var r = navigator.userAgent,
			s = navigator.vendor;
		(F.browsers = {
			chrome: /Chrome/.test(r) && /Google Inc/.test(s),
			safari: /Safari/.test(r) && /Apple Computer/.test(s),
			FF: "undefined" != typeof InstallTrigger,
			IE: !!document.documentMode
		}),
			F.isMobile() ||
				document.addEventListener(
					"touchmove",
					function(a) {
						a.preventDefault();
					},
					!1
				);
		var t = [F.UI.Menu()],
			u = [],
			v = 0;
		a
			.on("scroll", function() {
				o
					? window.scrollTo(0, v)
					: ((v = a.scrollTop()), (F._.scrollTop = v));
			})
			.on("resize", b),
			b(),
			$(".mute").on("click", function() {
				F.UI.Player().toggleMute();
			}),
			$(".btn-menu").on("mouseover", function() {
				TweenMax.to($(".btn-menu i").eq(0), 0.1, {
					y: 5,
					ease: Power3.easeOut
				}),
					TweenMax.to($(".btn-menu i").eq(2), 0.1, {
						y: -5,
						ease: Power3.easeOut,
						onComplete: function() {
							TweenMax.to($(".btn-menu i").eq(0), 0.1, {
								rotation: 90,
								x: -6,
								ease: Power3.easeIn
							}),
								TweenMax.to($(".btn-menu i").eq(1), 0.1, {
									rotation: 90,
									x: 0,
									ease: Power3.easeInOut
								}),
								TweenMax.to($(".btn-menu i").eq(2), 0.1, {
									rotation: 90,
									x: 6,
									ease: Power3.easeOut
								});
						}
					});
			}),
			$(".btn-menu").on("mouseleave", function() {
				TweenMax.to($(".btn-menu i").eq(0), 0.2, {
					rotation: 0,
					x: 0,
					y: 0,
					ease: Power3.easeOut
				}),
					TweenMax.to($(".btn-menu i").eq(1), 0.2, {
						rotation: 0,
						x: 0,
						y: 0,
						ease: Power3.easeOut
					}),
					TweenMax.to($(".btn-menu i").eq(2), 0.2, {
						rotation: 0,
						x: 0,
						y: 0,
						ease: Power3.easeOut
					});
			}),
			c(),
			d(),
			e(),
			f(),
			g(),
			h(),
			i(),
			j(),
			k(),
			l(),
			m(),
			n();
		var w = $.ajax;
		$.ajax = function() {
			var a = Array.prototype.slice.call(arguments, 0),
				b = a[0] || {},
				c = b.success || function() {};
			return (
				(b.dataType = ""),
				(b.success = function(a) {
					a && "string" == typeof a
						? ((a = a.replace(
								'<script  type="text/javascript">window.location.reload();</script>',
								""
							)),
							c && c(jQuery.parseJSON(a)))
						: c && c(a);
				}),
				(a[0] = b),
				w.apply($, a)
			);
		};
		var x = new F.Router();
		x.on("GO_TO", function(a) {
			y.displayPage(a);
		});
		var y = new F.NavigationController({ el: $("#content") });
		"/" !== window.location.pathname &&
			"/histoire/" !== window.location.pathname &&
			setTimeout(function() {
				F.UI.Player().playGlobal();
			}, 1e3),
			a.on("load", function() {
				t.push(y),
					u.push(y),
					TweenMax.to($(".loader"), 1, {
						opacity: 0,
						delay: 1,
						ease: Power3.easeOut,
						onComplete: function() {
							$(".loader").hide();
						}
					});
			}),
			F.CONFIG.DISABLE_AJAX
				? y.endLoading()
				: (F.isMobile() ||
						Backbone.history.start({
							pushState: !0,
							root: F.CONFIG.PATH_URL
						}),
					Modernizr.touch ||
						($("html").on("mouseover", ".nav-next", function() {
							TweenMax.to($(".nav-next .s"), 2, {
								y: 20,
								delay: 0,
								ease: Elastic.easeOut.config(1, 0.5)
							}),
								TweenMax.to($(".nav-next .m"), 0.4, {
									y: 15,
									delay: 0.1,
									ease: Elastic.easeOut.config(1, 0.75)
								}),
								TweenMax.to($(".nav-next .l"), 0.3, {
									y: 8,
									delay: 0.2,
									ease: Elastic.easeOut.config(1, 0.75)
								});
						}),
						$("html").on("mouseleave", ".nav-next", function() {
							TweenMax.to($(".nav-next i"), 0.2, {
								y: 0,
								ease: Power2.easeOut
							});
						})),
					$("html").on("click", ".menu-footer a", function(a) {
						a.preventDefault();
						var b = $(this);
						if ($("#menu").hasClass("ss-menu-activ"))
							return (
								TweenMax.to($(".ss-menu-content .content"), 0.5, {
									opacity: 0,
									ease: Power4.easeOut,
									onComplete: function() {
										$(".ss-menu-content .content").hide(),
											$(
												".ss-menu-content .content-" +
													b.attr("data-tab")
											).show(),
											TweenMax.to(
												$(
													".ss-menu-content .content-" +
														b.attr("data-tab")
												),
												0.5,
												{
													opacity: 1,
													ease: Power3.easeIn,
													onComplete: function() {}
												}
											);
									}
								}),
								!1
							);
						if (
							(TweenMax.set($(".menu-footer"), { opacity: 0 }),
							$(".ss-menu-content").show(),
							$(
								".ss-menu-content .content-" + b.attr("data-tab")
							).show(),
							TweenMax.to($(".menu-nav"), 0.5, {
								x: -87,
								width: 0,
								opacity: 0,
								ease: Power3.easeOut,
								onComplete: function() {
									TweenMax.to($(".cursor .a"), 0.3, {
										rotation: 45,
										ease: Power2.easeIn
									}),
										TweenMax.to($(".cursor .b"), 0.3, {
											rotation: -45,
											ease: Power2.easeIn
										}),
										TweenMax.to($(".menu-footer"), 0.3, {
											opacity: 1,
											ease: Power3.easeIn
										}),
										TweenMax.to(
											$(".menu-main, .close"),
											0.3,
											{
												opacity: 0,
												ease: Power3.easeIn,
												onComplete: function() {
													$(".menu-main").hide(),
														$("#menu").addClass(
															"ss-menu-activ"
														);
												}
											}
										),
										TweenMax.to($(".ss-menu-content"), 0.8, {
											opacity: 1,
											ease: Power3.easeIn
										});
								}
							}),
							"mentions" == $(this).attr("data-tab"))
						) {
							new IScroll("#scrollable-mentions", {
								mouseWheel: !0,
								scrollbars: !1,
								probeType: 3
							});
						}
					}),
					$("html").on("click", ".ss-menu-activ .cursor", function(a) {
						a.preventDefault(),
							$(".menu-main").show(),
							TweenMax.to($(".cursor .a"), 0.5, {
								rotation: 0,
								ease: Power2.easeIn
							}),
							TweenMax.to($(".cursor .b"), 0.5, {
								rotation: 0,
								ease: Power2.easeIn,
								onComplete: function() {}
							}),
							TweenMax.to($(".menu-nav"), 0.5, {
								x: 0,
								width: 195,
								scale: 1,
								opacity: 1,
								ease: Power3.easeOut
							}),
							TweenMax.to(
								$(".menu-footer, .ss-menu-content"),
								0.2,
								{
									opacity: 0,
									delay: 0.2,
									ease: Power3.easeIn,
									onComplete: function() {
										$("#menu").removeClass("ss-menu-activ"),
											$(
												".ss-menu-content, .ss-menu-content .content"
											).hide();
									}
								}
							),
							TweenMax.to(
								$(".menu-main, .menu-footer, .close"),
								0.5,
								{ opacity: 1, delay: 0.2, ease: Power3.easeIn }
							);
					}),
					$(".btn-menu").on("click", function(a) {
						a.preventDefault(), (q = !0), F.UI.Menu().openMenu();
					}),
					$("#menu .close").on("click", function(a) {
						a.preventDefault(), (q = !1), F.UI.Menu().closeMenu();
					}),
					$(".menu-nav span").on("click", function() {
						var a = $(this).attr("data-id");
						(p = a), F.UI.Menu().moveSlide(a);
					}),
					$("html").on("click", ".scrolling", function(a) {
						a.preventDefault(), a.stopPropagation();
					}),
					$(document).on("click", "a", function(a) {
						if (!F.CONFIG.DISABLE_AJAX) {
							var b = $(a.currentTarget),
								c = b.attr("href"),
								d = b.attr("target");
							if (!a.metaKey && !a.ctrlKey) {
								if (
									b.hasClass("scrolling") ||
									b.hasClass("bx-prev") ||
									b.hasClass("bx-next") ||
									b.hasClass("bx-pager-link") ||
									b.hasClass("no-link")
								)
									return !1;
								var e = c.replace(F.CONFIG.ROOT_URL, "");
								"/" === e.substring(e.length - 1) &&
									(e = e.substring(0, e.length - 1)),
									"_blank" === d ||
										b.hasClass("no-ajax") ||
										0 === e.indexOf("http://") ||
										0 === e.indexOf("https://") ||
										0 === e.indexOf("www") ||
										(y.isWorking ||
											((e && e.length) || y.currentUrl != e
												? x.navigate(e, { trigger: !0 })
												: y.displayPage("")),
										a.preventDefault());
							}
						}
					})),
			$(".site-logo").on("click", function(a) {
				F.UI.Menu().isOpen &&
					(a.stopPropagation(),
					a.preventDefault(),
					F.UI.Menu().closeMenu());
			}),
			(F.__lockScroll = function() {
				Modernizr.touch || (o = !0);
			}),
			(F.__unlockScroll = function() {
				Modernizr.touch || (o = !1);
			}),
			$(document).on("keydown", function(a) {
				switch (a.keyCode) {
					case 37:
						F.UI.Menu().isOpen ||
							((F._.d = "left"),
							y.currentPage.view.keyboardLeft());
						break;
					case 38:
						F.UI.Menu().isOpen || y.currentPage.view.keyboardUp();
						break;
					case 39:
						F.UI.Menu().isOpen ||
							((F._.d = "right"),
							y.currentPage.view.keyboardRight());
						break;
					case 40:
						F.UI.Menu().isOpen || y.currentPage.view.keyboardDown();
				}
			});
	})($(window));
