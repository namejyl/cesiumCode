/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/geotiff@2.1.3/dist-browser/geotiff.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (A, e) {
  'object' == typeof exports && 'undefined' != typeof module ? e(exports) : 'function' == typeof define && define.amd ? define(['exports'], e) : e(((A = 'undefined' != typeof globalThis ? globalThis : A || self).GeoTIFF = {}));
})(this, function (A) {
  'use strict';
  function e(A, e, t) {
    return e in A ? Object.defineProperty(A, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (A[e] = t), A;
  }
  function t(A) {
    if (Array.isArray(A)) return A;
  }
  function r(A, e) {
    (null == e || e > A.length) && (e = A.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
    return r;
  }
  function n(A, e) {
    if (A) {
      if ('string' == typeof A) return r(A, e);
      var t = Object.prototype.toString.call(A).slice(8, -1);
      return 'Object' === t && A.constructor && (t = A.constructor.name), 'Map' === t || 'Set' === t ? Array.from(A) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(A, e) : void 0;
    }
  }
  function i() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
  }
  function a(A, e) {
    return (
      t(A) ||
      (function (A, e) {
        var t = null == A ? null : ('undefined' != typeof Symbol && A[Symbol.iterator]) || A['@@iterator'];
        if (null != t) {
          var r,
            n,
            i = [],
            a = !0,
            o = !1;
          try {
            for (t = t.call(A); !(a = (r = t.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
          } catch (A) {
            (o = !0), (n = A);
          } finally {
            try {
              a || null == t.return || t.return();
            } finally {
              if (o) throw n;
            }
          }
          return i;
        }
      })(A, e) ||
      n(A, e) ||
      i()
    );
  }
  function o(A, e, t, r, n, i, a) {
    try {
      var o = A[i](a),
        g = o.value;
    } catch (A) {
      return void t(A);
    }
    o.done ? e(g) : Promise.resolve(g).then(r, n);
  }
  function g(A) {
    return function () {
      var e = this,
        t = arguments;
      return new Promise(function (r, n) {
        var i = A.apply(e, t);
        function a(A) {
          o(i, r, n, a, g, 'next', A);
        }
        function g(A) {
          o(i, r, n, a, g, 'throw', A);
        }
        a(void 0);
      });
    };
  }
  function I(A, e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t];
      (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(A, r.key, r);
    }
  }
  function s(A, e, t) {
    return e && I(A.prototype, e), t && I(A, t), A;
  }
  function B(A, e) {
    return (
      (B =
        Object.setPrototypeOf ||
        function (A, e) {
          return (A.__proto__ = e), A;
        }),
      B(A, e)
    );
  }
  function c(A, e) {
    if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
    (A.prototype = Object.create(e && e.prototype, { constructor: { value: A, writable: !0, configurable: !0 } })), e && B(A, e);
  }
  function f(A) {
    return (
      (f =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (A) {
              return typeof A;
            }
          : function (A) {
              return A && 'function' == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? 'symbol' : typeof A;
            }),
      f(A)
    );
  }
  function C(A) {
    if (void 0 === A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function u(A, e) {
    if (e && ('object' === f(e) || 'function' == typeof e)) return e;
    if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
    return C(A);
  }
  function Q(A) {
    return (
      (Q = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (A) {
            return A.__proto__ || Object.getPrototypeOf(A);
          }),
      Q(A)
    );
  }
  function E() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (A) {
      return !1;
    }
  }
  function l(A, e, t) {
    return (
      (l = E()
        ? Reflect.construct
        : function (A, e, t) {
            var r = [null];
            r.push.apply(r, e);
            var n = new (Function.bind.apply(A, r))();
            return t && B(n, t.prototype), n;
          }),
      l.apply(null, arguments)
    );
  }
  function h(A) {
    var e = 'function' == typeof Map ? new Map() : void 0;
    return (
      (h = function (A) {
        if (null === A || ((t = A), -1 === Function.toString.call(t).indexOf('[native code]'))) return A;
        var t;
        if ('function' != typeof A) throw new TypeError('Super expression must either be null or a function');
        if (void 0 !== e) {
          if (e.has(A)) return e.get(A);
          e.set(A, r);
        }
        function r() {
          return l(A, arguments, Q(this).constructor);
        }
        return (r.prototype = Object.create(A.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), B(r, A);
      }),
      h(A)
    );
  }
  function d(A, e) {
    if (!(A instanceof e)) throw new TypeError('Cannot call a class as a function');
  }
  var w = { exports: {} };
  !(function (A) {
    var e = (function (A) {
      var e,
        t = Object.prototype,
        r = t.hasOwnProperty,
        n = 'function' == typeof Symbol ? Symbol : {},
        i = n.iterator || '@@iterator',
        a = n.asyncIterator || '@@asyncIterator',
        o = n.toStringTag || '@@toStringTag';
      function g(A, e, t) {
        return Object.defineProperty(A, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }), A[e];
      }
      try {
        g({}, '');
      } catch (A) {
        g = function (A, e, t) {
          return (A[e] = t);
        };
      }
      function I(A, e, t, r) {
        var n = e && e.prototype instanceof E ? e : E,
          i = Object.create(n.prototype),
          a = new G(r || []);
        return (
          (i._invoke = (function (A, e, t) {
            var r = B;
            return function (n, i) {
              if (r === C) throw new Error('Generator is already running');
              if (r === u) {
                if ('throw' === n) throw i;
                return F();
              }
              for (t.method = n, t.arg = i; ; ) {
                var a = t.delegate;
                if (a) {
                  var o = m(a, t);
                  if (o) {
                    if (o === Q) continue;
                    return o;
                  }
                }
                if ('next' === t.method) t.sent = t._sent = t.arg;
                else if ('throw' === t.method) {
                  if (r === B) throw ((r = u), t.arg);
                  t.dispatchException(t.arg);
                } else 'return' === t.method && t.abrupt('return', t.arg);
                r = C;
                var g = s(A, e, t);
                if ('normal' === g.type) {
                  if (((r = t.done ? u : c), g.arg === Q)) continue;
                  return { value: g.arg, done: t.done };
                }
                'throw' === g.type && ((r = u), (t.method = 'throw'), (t.arg = g.arg));
              }
            };
          })(A, t, a)),
          i
        );
      }
      function s(A, e, t) {
        try {
          return { type: 'normal', arg: A.call(e, t) };
        } catch (A) {
          return { type: 'throw', arg: A };
        }
      }
      A.wrap = I;
      var B = 'suspendedStart',
        c = 'suspendedYield',
        C = 'executing',
        u = 'completed',
        Q = {};
      function E() {}
      function l() {}
      function h() {}
      var d = {};
      g(d, i, function () {
        return this;
      });
      var w = Object.getPrototypeOf,
        y = w && w(w(S([])));
      y && y !== t && r.call(y, i) && (d = y);
      var p = (h.prototype = E.prototype = Object.create(d));
      function D(A) {
        ['next', 'throw', 'return'].forEach(function (e) {
          g(A, e, function (A) {
            return this._invoke(e, A);
          });
        });
      }
      function k(A, e) {
        function t(n, i, a, o) {
          var g = s(A[n], A, i);
          if ('throw' !== g.type) {
            var I = g.arg,
              B = I.value;
            return B && 'object' === f(B) && r.call(B, '__await')
              ? e.resolve(B.__await).then(
                  function (A) {
                    t('next', A, a, o);
                  },
                  function (A) {
                    t('throw', A, a, o);
                  }
                )
              : e.resolve(B).then(
                  function (A) {
                    (I.value = A), a(I);
                  },
                  function (A) {
                    return t('throw', A, a, o);
                  }
                );
          }
          o(g.arg);
        }
        var n;
        this._invoke = function (A, r) {
          function i() {
            return new e(function (e, n) {
              t(A, r, e, n);
            });
          }
          return (n = n ? n.then(i, i) : i());
        };
      }
      function m(A, t) {
        var r = A.iterator[t.method];
        if (r === e) {
          if (((t.delegate = null), 'throw' === t.method)) {
            if (A.iterator.return && ((t.method = 'return'), (t.arg = e), m(A, t), 'throw' === t.method)) return Q;
            (t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return Q;
        }
        var n = s(r, A.iterator, t.arg);
        if ('throw' === n.type) return (t.method = 'throw'), (t.arg = n.arg), (t.delegate = null), Q;
        var i = n.arg;
        return i ? (i.done ? ((t[A.resultName] = i.value), (t.next = A.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = e)), (t.delegate = null), Q) : i) : ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), Q);
      }
      function v(A) {
        var e = { tryLoc: A[0] };
        1 in A && (e.catchLoc = A[1]), 2 in A && ((e.finallyLoc = A[2]), (e.afterLoc = A[3])), this.tryEntries.push(e);
      }
      function b(A) {
        var e = A.completion || {};
        (e.type = 'normal'), delete e.arg, (A.completion = e);
      }
      function G(A) {
        (this.tryEntries = [{ tryLoc: 'root' }]), A.forEach(v, this), this.reset(!0);
      }
      function S(A) {
        if (A) {
          var t = A[i];
          if (t) return t.call(A);
          if ('function' == typeof A.next) return A;
          if (!isNaN(A.length)) {
            var n = -1,
              a = function t() {
                for (; ++n < A.length; ) if (r.call(A, n)) return (t.value = A[n]), (t.done = !1), t;
                return (t.value = e), (t.done = !0), t;
              };
            return (a.next = a);
          }
        }
        return { next: F };
      }
      function F() {
        return { value: e, done: !0 };
      }
      return (
        (l.prototype = h),
        g(p, 'constructor', h),
        g(h, 'constructor', l),
        (l.displayName = g(h, o, 'GeneratorFunction')),
        (A.isGeneratorFunction = function (A) {
          var e = 'function' == typeof A && A.constructor;
          return !!e && (e === l || 'GeneratorFunction' === (e.displayName || e.name));
        }),
        (A.mark = function (A) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(A, h) : ((A.__proto__ = h), g(A, o, 'GeneratorFunction')), (A.prototype = Object.create(p)), A;
        }),
        (A.awrap = function (A) {
          return { __await: A };
        }),
        D(k.prototype),
        g(k.prototype, a, function () {
          return this;
        }),
        (A.AsyncIterator = k),
        (A.async = function (e, t, r, n, i) {
          void 0 === i && (i = Promise);
          var a = new k(I(e, t, r, n), i);
          return A.isGeneratorFunction(t)
            ? a
            : a.next().then(function (A) {
                return A.done ? A.value : a.next();
              });
        }),
        D(p),
        g(p, o, 'Generator'),
        g(p, i, function () {
          return this;
        }),
        g(p, 'toString', function () {
          return '[object Generator]';
        }),
        (A.keys = function (A) {
          var e = [];
          for (var t in A) e.push(t);
          return (
            e.reverse(),
            function t() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in A) return (t.value = r), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (A.values = S),
        (G.prototype = {
          constructor: G,
          reset: function (A) {
            if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = e), this.tryEntries.forEach(b), !A)) for (var t in this) 't' === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = e);
          },
          stop: function () {
            this.done = !0;
            var A = this.tryEntries[0].completion;
            if ('throw' === A.type) throw A.arg;
            return this.rval;
          },
          dispatchException: function (A) {
            if (this.done) throw A;
            var t = this;
            function n(r, n) {
              return (o.type = 'throw'), (o.arg = A), (t.next = r), n && ((t.method = 'next'), (t.arg = e)), !!n;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                o = a.completion;
              if ('root' === a.tryLoc) return n('end');
              if (a.tryLoc <= this.prev) {
                var g = r.call(a, 'catchLoc'),
                  I = r.call(a, 'finallyLoc');
                if (g && I) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                } else if (g) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                } else {
                  if (!I) throw new Error('try statement without catch or finally');
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (A, e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc <= this.prev && r.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
                var i = n;
                break;
              }
            }
            i && ('break' === A || 'continue' === A) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return (a.type = A), (a.arg = e), i ? ((this.method = 'next'), (this.next = i.finallyLoc), Q) : this.complete(a);
          },
          complete: function (A, e) {
            if ('throw' === A.type) throw A.arg;
            return 'break' === A.type || 'continue' === A.type ? (this.next = A.arg) : 'return' === A.type ? ((this.rval = this.arg = A.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === A.type && e && (this.next = e), Q;
          },
          finish: function (A) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var t = this.tryEntries[e];
              if (t.finallyLoc === A) return this.complete(t.completion, t.afterLoc), b(t), Q;
            }
          },
          catch: function (A) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var t = this.tryEntries[e];
              if (t.tryLoc === A) {
                var r = t.completion;
                if ('throw' === r.type) {
                  var n = r.arg;
                  b(t);
                }
                return n;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (A, t, r) {
            return (this.delegate = { iterator: S(A), resultName: t, nextLoc: r }), 'next' === this.method && (this.arg = e), Q;
          }
        }),
        A
      );
    })(A.exports);
    try {
      regeneratorRuntime = e;
    } catch (A) {
      'object' === ('undefined' == typeof globalThis ? 'undefined' : f(globalThis)) ? (globalThis.regeneratorRuntime = e) : Function('r', 'regeneratorRuntime = r')(e);
    }
  })(w);
  var y = w.exports;
  function p(A) {
    if (('undefined' != typeof Symbol && null != A[Symbol.iterator]) || null != A['@@iterator']) return Array.from(A);
  }
  function D(A) {
    return (
      (function (A) {
        if (Array.isArray(A)) return r(A);
      })(A) ||
      p(A) ||
      n(A) ||
      (function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      })()
    );
  }
  for (var k = new ArrayBuffer(4), m = new Float32Array(k), v = new Uint32Array(k), b = new Uint32Array(512), G = new Uint32Array(512), S = 0; S < 256; ++S) {
    var F = S - 127;
    F < -27
      ? ((b[S] = 0), (b[256 | S] = 32768), (G[S] = 24), (G[256 | S] = 24))
      : F < -14
      ? ((b[S] = 1024 >> (-F - 14)), (b[256 | S] = (1024 >> (-F - 14)) | 32768), (G[S] = -F - 1), (G[256 | S] = -F - 1))
      : F <= 15
      ? ((b[S] = (F + 15) << 10), (b[256 | S] = ((F + 15) << 10) | 32768), (G[S] = 13), (G[256 | S] = 13))
      : F < 128
      ? ((b[S] = 31744), (b[256 | S] = 64512), (G[S] = 24), (G[256 | S] = 24))
      : ((b[S] = 31744), (b[256 | S] = 64512), (G[S] = 13), (G[256 | S] = 13));
  }
  var R = new Uint32Array(2048),
    x = new Uint32Array(64),
    U = new Uint32Array(64);
  R[0] = 0;
  for (var L = 1; L < 1024; ++L) {
    for (var M = L << 13, N = 0; 0 == (8388608 & M); ) (N -= 8388608), (M <<= 1);
    (M &= -8388609), (N += 947912704), (R[L] = M | N);
  }
  for (var q = 1024; q < 2048; ++q) R[q] = 939524096 + ((q - 1024) << 13);
  x[0] = 0;
  for (var J = 1; J < 31; ++J) x[J] = J << 23;
  (x[31] = 1199570944), (x[32] = 2147483648);
  for (var O = 33; O < 63; ++O) x[O] = 2147483648 + ((O - 32) << 23);
  (x[63] = 3347054592), (U[0] = 0);
  for (var Y = 1; Y < 64; ++Y) U[Y] = 32 === Y ? 0 : 1024;
  function H(A) {
    var e = A >> 10;
    return (v[0] = R[U[e] + (1023 & A)] + x[e]), m[0];
  }
  var P = Reflect.getPrototypeOf(Uint8Array).prototype,
    K = Reflect.getOwnPropertyDescriptor(P, Symbol.toStringTag).get;
  var T = Object.prototype.toString;
  function V(A) {
    return (
      !!ArrayBuffer.isView(A) &&
      !(function (A) {
        return void 0 !== K.call(A);
      })(A) &&
      '[object DataView]' === T.call(A)
    );
  }
  function _(A, e) {
    if (!V(A)) throw new TypeError('First argument to getFloat16 function must be a DataView');
    for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++) r[n - 2] = arguments[n];
    return H(A.getUint16.apply(A, [e].concat(r)));
  }
  var j = function (A, e, t) {
    var r = (t && t.debug) || !1;
    r && console.log('getting ' + e + ' in ' + A);
    var n = 'object' === f(A) ? A.outer : A,
      i = ''.concat(e, '\\="([^"]*)"');
    r && console.log('pattern:', i);
    var a = new RegExp(i).exec(n);
    if ((r && console.log('match:', a), a)) return a[1];
  };
  var X = function (A, e, t) {
    var r = new RegExp(e).exec(A.slice(t));
    return r ? t + r.index : -1;
  };
  var W = function (A, e, t) {
    var r = (t && t.debug) || !1,
      n = (t && t.startIndex) || 0;
    r && console.log('starting findTagByName with', e, ' and ', t);
    var i = X(A, '<'.concat(e, '[ >]'), n);
    if ((r && console.log('start:', i), -1 !== i)) {
      var a = A.slice(i + e.length),
        o = X(a, '[ /]' + e + '>', 0),
        g = -1 === o;
      g && (o = X(a, '[ /]>', 0));
      var I = i + e.length + o + 1 + (g ? 0 : e.length) + 1;
      if ((r && console.log('end:', I), -1 !== I)) {
        var s = A.slice(i, I);
        return { inner: g ? null : s.slice(s.indexOf('>') + 1, s.lastIndexOf('<')), outer: s, start: i, end: I };
      }
    }
  };
  var Z = function (A, e, t) {
      for (var r, n = [], i = (t && t.debug) || !1, a = (t && t.startIndex) || 0; (r = W(A, e, { debug: i, startIndex: a })); ) (a = r.end), n.push(r);
      return i && console.log('findTagsByName found', n.length, 'tags'), n;
    },
    z = {
      315: 'Artist',
      258: 'BitsPerSample',
      265: 'CellLength',
      264: 'CellWidth',
      320: 'ColorMap',
      259: 'Compression',
      33432: 'Copyright',
      306: 'DateTime',
      338: 'ExtraSamples',
      266: 'FillOrder',
      289: 'FreeByteCounts',
      288: 'FreeOffsets',
      291: 'GrayResponseCurve',
      290: 'GrayResponseUnit',
      316: 'HostComputer',
      270: 'ImageDescription',
      257: 'ImageLength',
      256: 'ImageWidth',
      271: 'Make',
      281: 'MaxSampleValue',
      280: 'MinSampleValue',
      272: 'Model',
      254: 'NewSubfileType',
      274: 'Orientation',
      262: 'PhotometricInterpretation',
      284: 'PlanarConfiguration',
      296: 'ResolutionUnit',
      278: 'RowsPerStrip',
      277: 'SamplesPerPixel',
      305: 'Software',
      279: 'StripByteCounts',
      273: 'StripOffsets',
      255: 'SubfileType',
      263: 'Threshholding',
      282: 'XResolution',
      283: 'YResolution',
      326: 'BadFaxLines',
      327: 'CleanFaxData',
      343: 'ClipPath',
      328: 'ConsecutiveBadFaxLines',
      433: 'Decode',
      434: 'DefaultImageColor',
      269: 'DocumentName',
      336: 'DotRange',
      321: 'HalftoneHints',
      346: 'Indexed',
      347: 'JPEGTables',
      285: 'PageName',
      297: 'PageNumber',
      317: 'Predictor',
      319: 'PrimaryChromaticities',
      532: 'ReferenceBlackWhite',
      339: 'SampleFormat',
      340: 'SMinSampleValue',
      341: 'SMaxSampleValue',
      559: 'StripRowCounts',
      330: 'SubIFDs',
      292: 'T4Options',
      293: 'T6Options',
      325: 'TileByteCounts',
      323: 'TileLength',
      324: 'TileOffsets',
      322: 'TileWidth',
      301: 'TransferFunction',
      318: 'WhitePoint',
      344: 'XClipPathUnits',
      286: 'XPosition',
      529: 'YCbCrCoefficients',
      531: 'YCbCrPositioning',
      530: 'YCbCrSubSampling',
      345: 'YClipPathUnits',
      287: 'YPosition',
      37378: 'ApertureValue',
      40961: 'ColorSpace',
      36868: 'DateTimeDigitized',
      36867: 'DateTimeOriginal',
      34665: 'Exif IFD',
      36864: 'ExifVersion',
      33434: 'ExposureTime',
      41728: 'FileSource',
      37385: 'Flash',
      40960: 'FlashpixVersion',
      33437: 'FNumber',
      42016: 'ImageUniqueID',
      37384: 'LightSource',
      37500: 'MakerNote',
      37377: 'ShutterSpeedValue',
      37510: 'UserComment',
      33723: 'IPTC',
      34675: 'ICC Profile',
      700: 'XMP',
      42112: 'GDAL_METADATA',
      42113: 'GDAL_NODATA',
      34377: 'Photoshop',
      33550: 'ModelPixelScale',
      33922: 'ModelTiepoint',
      34264: 'ModelTransformation',
      34735: 'GeoKeyDirectory',
      34736: 'GeoDoubleParams',
      34737: 'GeoAsciiParams',
      50674: 'LercParameters'
    },
    $ = {};
  for (var AA in z) z.hasOwnProperty(AA) && ($[z[AA]] = parseInt(AA, 10));
  var eA = {
      256: 'SHORT',
      257: 'SHORT',
      258: 'SHORT',
      259: 'SHORT',
      262: 'SHORT',
      273: 'LONG',
      274: 'SHORT',
      277: 'SHORT',
      278: 'LONG',
      279: 'LONG',
      282: 'RATIONAL',
      283: 'RATIONAL',
      284: 'SHORT',
      286: 'SHORT',
      287: 'RATIONAL',
      296: 'SHORT',
      297: 'SHORT',
      305: 'ASCII',
      306: 'ASCII',
      338: 'SHORT',
      339: 'SHORT',
      513: 'LONG',
      514: 'LONG',
      1024: 'SHORT',
      1025: 'SHORT',
      2048: 'SHORT',
      2049: 'ASCII',
      3072: 'SHORT',
      3073: 'ASCII',
      33550: 'DOUBLE',
      33922: 'DOUBLE',
      34264: 'DOUBLE',
      34665: 'LONG',
      34735: 'SHORT',
      34736: 'DOUBLE',
      34737: 'ASCII',
      42113: 'ASCII'
    },
    tA = [$.BitsPerSample, $.ExtraSamples, $.SampleFormat, $.StripByteCounts, $.StripOffsets, $.StripRowCounts, $.TileByteCounts, $.TileOffsets, $.SubIFDs],
    rA = { 1: 'BYTE', 2: 'ASCII', 3: 'SHORT', 4: 'LONG', 5: 'RATIONAL', 6: 'SBYTE', 7: 'UNDEFINED', 8: 'SSHORT', 9: 'SLONG', 10: 'SRATIONAL', 11: 'FLOAT', 12: 'DOUBLE', 13: 'IFD', 16: 'LONG8', 17: 'SLONG8', 18: 'IFD8' },
    nA = {};
  for (var iA in rA) rA.hasOwnProperty(iA) && (nA[rA[iA]] = parseInt(iA, 10));
  var aA = { WhiteIsZero: 0, BlackIsZero: 1, RGB: 2, Palette: 3, TransparencyMask: 4, CMYK: 5, YCbCr: 6, CIELab: 8, ICCLab: 9 },
    oA = { Unspecified: 0, Assocalpha: 1, Unassalpha: 2 },
    gA = { Version: 0, AddCompression: 1 },
    IA = { None: 0, Deflate: 1, Zstandard: 2 },
    sA = {
      1024: 'GTModelTypeGeoKey',
      1025: 'GTRasterTypeGeoKey',
      1026: 'GTCitationGeoKey',
      2048: 'GeographicTypeGeoKey',
      2049: 'GeogCitationGeoKey',
      2050: 'GeogGeodeticDatumGeoKey',
      2051: 'GeogPrimeMeridianGeoKey',
      2052: 'GeogLinearUnitsGeoKey',
      2053: 'GeogLinearUnitSizeGeoKey',
      2054: 'GeogAngularUnitsGeoKey',
      2055: 'GeogAngularUnitSizeGeoKey',
      2056: 'GeogEllipsoidGeoKey',
      2057: 'GeogSemiMajorAxisGeoKey',
      2058: 'GeogSemiMinorAxisGeoKey',
      2059: 'GeogInvFlatteningGeoKey',
      2060: 'GeogAzimuthUnitsGeoKey',
      2061: 'GeogPrimeMeridianLongGeoKey',
      2062: 'GeogTOWGS84GeoKey',
      3072: 'ProjectedCSTypeGeoKey',
      3073: 'PCSCitationGeoKey',
      3074: 'ProjectionGeoKey',
      3075: 'ProjCoordTransGeoKey',
      3076: 'ProjLinearUnitsGeoKey',
      3077: 'ProjLinearUnitSizeGeoKey',
      3078: 'ProjStdParallel1GeoKey',
      3079: 'ProjStdParallel2GeoKey',
      3080: 'ProjNatOriginLongGeoKey',
      3081: 'ProjNatOriginLatGeoKey',
      3082: 'ProjFalseEastingGeoKey',
      3083: 'ProjFalseNorthingGeoKey',
      3084: 'ProjFalseOriginLongGeoKey',
      3085: 'ProjFalseOriginLatGeoKey',
      3086: 'ProjFalseOriginEastingGeoKey',
      3087: 'ProjFalseOriginNorthingGeoKey',
      3088: 'ProjCenterLongGeoKey',
      3089: 'ProjCenterLatGeoKey',
      3090: 'ProjCenterEastingGeoKey',
      3091: 'ProjCenterNorthingGeoKey',
      3092: 'ProjScaleAtNatOriginGeoKey',
      3093: 'ProjScaleAtCenterGeoKey',
      3094: 'ProjAzimuthAngleGeoKey',
      3095: 'ProjStraightVertPoleLongGeoKey',
      3096: 'ProjRectifiedGridAngleGeoKey',
      4096: 'VerticalCSTypeGeoKey',
      4097: 'VerticalCitationGeoKey',
      4098: 'VerticalDatumGeoKey',
      4099: 'VerticalUnitsGeoKey'
    },
    BA = {};
  for (var cA in sA) sA.hasOwnProperty(cA) && (BA[sA[cA]] = parseInt(cA, 10));
  var fA = Object.freeze({ __proto__: null, fieldTagNames: z, fieldTags: $, fieldTagTypes: eA, arrayFields: tA, fieldTypeNames: rA, fieldTypes: nA, photometricInterpretations: aA, ExtraSamplesValues: oA, LercParameters: gA, LercAddCompression: IA, geoKeyNames: sA, geoKeys: BA });
  function CA(A, e) {
    for (var t, r = A.width, n = A.height, i = new Uint8Array(r * n * 3), a = 0, o = 0; a < A.length; ++a, o += 3) (t = 256 - (A[a] / e) * 256), (i[o] = t), (i[o + 1] = t), (i[o + 2] = t);
    return i;
  }
  function uA(A, e) {
    for (var t, r = A.width, n = A.height, i = new Uint8Array(r * n * 3), a = 0, o = 0; a < A.length; ++a, o += 3) (t = (A[a] / e) * 256), (i[o] = t), (i[o + 1] = t), (i[o + 2] = t);
    return i;
  }
  function QA(A, e) {
    for (var t = A.width, r = A.height, n = new Uint8Array(t * r * 3), i = e.length / 3, a = (e.length / 3) * 2, o = 0, g = 0; o < A.length; ++o, g += 3) {
      var I = A[o];
      (n[g] = (e[I] / 65536) * 256), (n[g + 1] = (e[I + i] / 65536) * 256), (n[g + 2] = (e[I + a] / 65536) * 256);
    }
    return n;
  }
  function EA(A) {
    for (var e = A.width, t = A.height, r = new Uint8Array(e * t * 3), n = 0, i = 0; n < A.length; n += 4, i += 3) {
      var a = A[n],
        o = A[n + 1],
        g = A[n + 2],
        I = A[n + 3];
      (r[i] = ((255 - a) / 256) * 255 * ((255 - I) / 256)), (r[i + 1] = ((255 - o) / 256) * 255 * ((255 - I) / 256)), (r[i + 2] = ((255 - g) / 256) * 255 * ((255 - I) / 256));
    }
    return r;
  }
  function lA(A) {
    for (var e = A.width, t = A.height, r = new Uint8ClampedArray(e * t * 3), n = 0, i = 0; n < A.length; n += 3, i += 3) {
      var a = A[n],
        o = A[n + 1],
        g = A[n + 2];
      (r[i] = a + 1.402 * (g - 128)), (r[i + 1] = a - 0.34414 * (o - 128) - 0.71414 * (g - 128)), (r[i + 2] = a + 1.772 * (o - 128));
    }
    return r;
  }
  function hA(A) {
    for (var e = A.width, t = A.height, r = new Uint8Array(e * t * 3), n = 0, i = 0; n < A.length; n += 3, i += 3) {
      var a = (A[n + 0] + 16) / 116,
        o = ((A[n + 1] << 24) >> 24) / 500 + a,
        g = a - ((A[n + 2] << 24) >> 24) / 200,
        I = void 0,
        s = void 0,
        B = void 0;
      (s = -0.9689 * (o = 0.95047 * (o * o * o > 0.008856 ? o * o * o : (o - 16 / 116) / 7.787)) + 1.8758 * (a = 1 * (a * a * a > 0.008856 ? a * a * a : (a - 16 / 116) / 7.787)) + 0.0415 * (g = 1.08883 * (g * g * g > 0.008856 ? g * g * g : (g - 16 / 116) / 7.787))),
        (B = 0.0557 * o + -0.204 * a + 1.057 * g),
        (I = (I = 3.2406 * o + -1.5372 * a + -0.4986 * g) > 0.0031308 ? 1.055 * Math.pow(I, 1 / 2.4) - 0.055 : 12.92 * I),
        (s = s > 0.0031308 ? 1.055 * Math.pow(s, 1 / 2.4) - 0.055 : 12.92 * s),
        (B = B > 0.0031308 ? 1.055 * Math.pow(B, 1 / 2.4) - 0.055 : 12.92 * B),
        (r[i] = 255 * Math.max(0, Math.min(1, I))),
        (r[i + 1] = 255 * Math.max(0, Math.min(1, s))),
        (r[i + 2] = 255 * Math.max(0, Math.min(1, B)));
    }
    return r;
  }
  var dA = Object.freeze({ __proto__: null, fromWhiteIsZero: CA, fromBlackIsZero: uA, fromPalette: QA, fromCMYK: EA, fromYCbCr: lA, fromCIELab: hA }),
    wA = new Map();
  function yA(A, e) {
    Array.isArray(A) || (A = [A]),
      A.forEach(function (A) {
        return wA.set(A, e);
      });
  }
  function pA(A) {
    return DA.apply(this, arguments);
  }
  function DA() {
    return (DA = g(
      y.mark(function A(e) {
        var t, r;
        return y.wrap(function (A) {
          for (;;)
            switch ((A.prev = A.next)) {
              case 0:
                if ((t = wA.get(e.Compression))) {
                  A.next = 3;
                  break;
                }
                throw new Error('Unknown compression method identifier: '.concat(e.Compression));
              case 3:
                return (A.next = 5), t();
              case 5:
                return (r = A.sent), A.abrupt('return', new r(e));
              case 7:
              case 'end':
                return A.stop();
            }
        }, A);
      })
    )).apply(this, arguments);
  }
  function kA(A, e, t) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    return new (Object.getPrototypeOf(A).constructor)(e * t * r);
  }
  function mA(A, e, t, r, n) {
    var i = e / r,
      a = t / n;
    return A.map(function (A) {
      for (var o = kA(A, r, n), g = 0; g < n; ++g)
        for (var I = Math.min(Math.round(a * g), t - 1), s = 0; s < r; ++s) {
          var B = Math.min(Math.round(i * s), e - 1),
            c = A[I * e + B];
          o[g * r + s] = c;
        }
      return o;
    });
  }
  function vA(A, e, t) {
    return (1 - t) * A + t * e;
  }
  function bA(A, e, t, r, n) {
    var i = e / r,
      a = t / n;
    return A.map(function (A) {
      for (var o = kA(A, r, n), g = 0; g < n; ++g)
        for (var I = a * g, s = Math.floor(I), B = Math.min(Math.ceil(I), t - 1), c = 0; c < r; ++c) {
          var f = i * c,
            C = f % 1,
            u = Math.floor(f),
            Q = Math.min(Math.ceil(f), e - 1),
            E = A[s * e + u],
            l = A[s * e + Q],
            h = A[B * e + u],
            d = A[B * e + Q],
            w = vA(vA(E, l, C), vA(h, d, C), I % 1);
          o[g * r + c] = w;
        }
      return o;
    });
  }
  function GA(A, e, t, r, n) {
    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 'nearest';
    switch (i.toLowerCase()) {
      case 'nearest':
        return mA(A, e, t, r, n);
      case 'bilinear':
      case 'linear':
        return bA(A, e, t, r, n);
      default:
        throw new Error("Unsupported resampling method: '".concat(i, "'"));
    }
  }
  function SA(A, e, t, r, n, i) {
    for (var a = e / r, o = t / n, g = kA(A, r, n, i), I = 0; I < n; ++I)
      for (var s = Math.min(Math.round(o * I), t - 1), B = 0; B < r; ++B)
        for (var c = Math.min(Math.round(a * B), e - 1), f = 0; f < i; ++f) {
          var C = A[s * e * i + c * i + f];
          g[I * r * i + B * i + f] = C;
        }
    return g;
  }
  function FA(A, e, t, r, n, i) {
    for (var a = e / r, o = t / n, g = kA(A, r, n, i), I = 0; I < n; ++I)
      for (var s = o * I, B = Math.floor(s), c = Math.min(Math.ceil(s), t - 1), f = 0; f < r; ++f)
        for (var C = a * f, u = C % 1, Q = Math.floor(C), E = Math.min(Math.ceil(C), e - 1), l = 0; l < i; ++l) {
          var h = A[B * e * i + Q * i + l],
            d = A[B * e * i + E * i + l],
            w = A[c * e * i + Q * i + l],
            y = A[c * e * i + E * i + l],
            p = vA(vA(h, d, u), vA(w, y, u), s % 1);
          g[I * r * i + f * i + l] = p;
        }
    return g;
  }
  function RA(A, e, t, r, n, i) {
    var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 'nearest';
    switch (a.toLowerCase()) {
      case 'nearest':
        return SA(A, e, t, r, n, i);
      case 'bilinear':
      case 'linear':
        return FA(A, e, t, r, n, i);
      default:
        throw new Error("Unsupported resampling method: '".concat(a, "'"));
    }
  }
  function xA(A, e, t) {
    for (var r = 0, n = e; n < t; ++n) r += A[n];
    return r;
  }
  function UA(A, e, t) {
    switch (A) {
      case 1:
        if (e <= 8) return new Uint8Array(t);
        if (e <= 16) return new Uint16Array(t);
        if (e <= 32) return new Uint32Array(t);
        break;
      case 2:
        if (8 === e) return new Int8Array(t);
        if (16 === e) return new Int16Array(t);
        if (32 === e) return new Int32Array(t);
        break;
      case 3:
        switch (e) {
          case 16:
          case 32:
            return new Float32Array(t);
          case 64:
            return new Float64Array(t);
        }
    }
    throw Error('Unsupported data format/bitsPerSample');
  }
  function LA(A, e) {
    return ((1 !== A && 2 !== A) || !(e <= 32) || e % 8 != 0) && (3 !== A || (16 !== e && 32 !== e && 64 !== e));
  }
  function MA(A, e, t, r, n, i, a) {
    var o = new DataView(A),
      g = 2 === t ? 1 : r,
      I = UA(e, n, 2 === t ? a * i : a * i * r),
      s = parseInt('1'.repeat(n), 2);
    if (1 === e) {
      var B = i * (1 === t ? r * n : n);
      0 != (7 & B) && (B = (B + 7) & -8);
      for (var c = 0; c < a; ++c)
        for (var f = c * B, C = 0; C < i; ++C)
          for (var u = f + C * g * n, Q = 0; Q < g; ++Q) {
            var E = u + Q * n,
              l = (c * i + C) * g + Q,
              h = Math.floor(E / 8),
              d = E % 8;
            if (d + n <= 8) I[l] = (o.getUint8(h) >> (8 - n - d)) & s;
            else if (d + n <= 16) I[l] = (o.getUint16(h) >> (16 - n - d)) & s;
            else if (d + n <= 24) {
              var w = (o.getUint16(h) << 8) | o.getUint8(h + 2);
              I[l] = (w >> (24 - n - d)) & s;
            } else I[l] = (o.getUint32(h) >> (32 - n - d)) & s;
          }
    }
    return I.buffer;
  }
  yA([void 0, 1], function () {
    return Promise.resolve()
      .then(function () {
        return Yt;
      })
      .then(function (A) {
        return A.default;
      });
  }),
    yA(5, function () {
      return Promise.resolve()
        .then(function () {
          return Vt;
        })
        .then(function (A) {
          return A.default;
        });
    }),
    yA(6, function () {
      throw new Error('old style JPEG compression is not supported.');
    }),
    yA(7, function () {
      return Promise.resolve()
        .then(function () {
          return gr;
        })
        .then(function (A) {
          return A.default;
        });
    }),
    yA([8, 32946], function () {
      return Promise.resolve()
        .then(function () {
          return hn;
        })
        .then(function (A) {
          return A.default;
        });
    }),
    yA(32773, function () {
      return Promise.resolve()
        .then(function () {
          return yn;
        })
        .then(function (A) {
          return A.default;
        });
    }),
    yA(34887, function () {
      return Promise.resolve()
        .then(function () {
          return Un;
        })
        .then(
          (function () {
            var A = g(
              y.mark(function A(e) {
                return y.wrap(function (A) {
                  for (;;)
                    switch ((A.prev = A.next)) {
                      case 0:
                        return (A.next = 2), e.zstd.init();
                      case 2:
                        return A.abrupt('return', e);
                      case 3:
                      case 'end':
                        return A.stop();
                    }
                }, A);
              })
            );
            return function (e) {
              return A.apply(this, arguments);
            };
          })()
        )
        .then(function (A) {
          return A.default;
        });
    }),
    yA(50001, function () {
      return Promise.resolve()
        .then(function () {
          return Nn;
        })
        .then(function (A) {
          return A.default;
        });
    });
  var NA = (function () {
      function A(e, t, r, n, i, a) {
        d(this, A), (this.fileDirectory = e), (this.geoKeys = t), (this.dataView = r), (this.littleEndian = n), (this.tiles = i ? {} : null), (this.isTiled = !e.StripOffsets);
        var o = e.PlanarConfiguration;
        if (((this.planarConfiguration = void 0 === o ? 1 : o), 1 !== this.planarConfiguration && 2 !== this.planarConfiguration)) throw new Error('Invalid planar configuration.');
        this.source = a;
      }
      var e, t, r, n;
      return (
        s(A, [
          {
            key: 'getFileDirectory',
            value: function () {
              return this.fileDirectory;
            }
          },
          {
            key: 'getGeoKeys',
            value: function () {
              return this.geoKeys;
            }
          },
          {
            key: 'getWidth',
            value: function () {
              return this.fileDirectory.ImageWidth;
            }
          },
          {
            key: 'getHeight',
            value: function () {
              return this.fileDirectory.ImageLength;
            }
          },
          {
            key: 'getSamplesPerPixel',
            value: function () {
              return void 0 !== this.fileDirectory.SamplesPerPixel ? this.fileDirectory.SamplesPerPixel : 1;
            }
          },
          {
            key: 'getTileWidth',
            value: function () {
              return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
            }
          },
          {
            key: 'getTileHeight',
            value: function () {
              return this.isTiled ? this.fileDirectory.TileLength : void 0 !== this.fileDirectory.RowsPerStrip ? Math.min(this.fileDirectory.RowsPerStrip, this.getHeight()) : this.getHeight();
            }
          },
          {
            key: 'getBlockWidth',
            value: function () {
              return this.getTileWidth();
            }
          },
          {
            key: 'getBlockHeight',
            value: function (A) {
              return this.isTiled || (A + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - A * this.getTileHeight();
            }
          },
          {
            key: 'getBytesPerPixel',
            value: function () {
              for (var A = 0, e = 0; e < this.fileDirectory.BitsPerSample.length; ++e) A += this.getSampleByteSize(e);
              return A;
            }
          },
          {
            key: 'getSampleByteSize',
            value: function (A) {
              if (A >= this.fileDirectory.BitsPerSample.length) throw new RangeError('Sample index '.concat(A, ' is out of range.'));
              return Math.ceil(this.fileDirectory.BitsPerSample[A] / 8);
            }
          },
          {
            key: 'getReaderForSample',
            value: function (A) {
              var e = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[A] : 1,
                t = this.fileDirectory.BitsPerSample[A];
              switch (e) {
                case 1:
                  if (t <= 8) return DataView.prototype.getUint8;
                  if (t <= 16) return DataView.prototype.getUint16;
                  if (t <= 32) return DataView.prototype.getUint32;
                  break;
                case 2:
                  if (t <= 8) return DataView.prototype.getInt8;
                  if (t <= 16) return DataView.prototype.getInt16;
                  if (t <= 32) return DataView.prototype.getInt32;
                  break;
                case 3:
                  switch (t) {
                    case 16:
                      return function (A, e) {
                        return _(this, A, e);
                      };
                    case 32:
                      return DataView.prototype.getFloat32;
                    case 64:
                      return DataView.prototype.getFloat64;
                  }
              }
              throw Error('Unsupported data format/bitsPerSample');
            }
          },
          {
            key: 'getSampleFormat',
            value: function () {
              var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[A] : 1;
            }
          },
          {
            key: 'getBitsPerSample',
            value: function () {
              var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              return this.fileDirectory.BitsPerSample[A];
            }
          },
          {
            key: 'getArrayForSample',
            value: function (A, e) {
              return UA(this.getSampleFormat(A), this.getBitsPerSample(A), e);
            }
          },
          {
            key: 'getTileOrStrip',
            value:
              ((n = g(
                y.mark(function A(e, t, r, n, i) {
                  var a,
                    o,
                    I,
                    s,
                    B,
                    c,
                    f,
                    C,
                    u = this;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (
                              (a = Math.ceil(this.getWidth() / this.getTileWidth())),
                              (o = Math.ceil(this.getHeight() / this.getTileHeight())),
                              (s = this.tiles),
                              1 === this.planarConfiguration ? (I = t * a + e) : 2 === this.planarConfiguration && (I = r * a * o + t * a + e),
                              this.isTiled ? ((B = this.fileDirectory.TileOffsets[I]), (c = this.fileDirectory.TileByteCounts[I])) : ((B = this.fileDirectory.StripOffsets[I]), (c = this.fileDirectory.StripByteCounts[I])),
                              (A.next = 7),
                              this.source.fetch([{ offset: B, length: c }], i)
                            );
                          case 7:
                            return (
                              (f = A.sent[0]),
                              null !== s && s[I]
                                ? (C = s[I])
                                : ((C = g(
                                    y.mark(function A() {
                                      var e, r, i;
                                      return y.wrap(function (A) {
                                        for (;;)
                                          switch ((A.prev = A.next)) {
                                            case 0:
                                              return (A.next = 2), n.decode(u.fileDirectory, f);
                                            case 2:
                                              return (e = A.sent), (r = u.getSampleFormat()), (i = u.getBitsPerSample()), LA(r, i) && (e = MA(e, r, u.planarConfiguration, u.getSamplesPerPixel(), i, u.getTileWidth(), u.getBlockHeight(t))), A.abrupt('return', e);
                                            case 7:
                                            case 'end':
                                              return A.stop();
                                          }
                                      }, A);
                                    })
                                  )()),
                                  null !== s && (s[I] = C)),
                              (A.t0 = e),
                              (A.t1 = t),
                              (A.t2 = r),
                              (A.next = 14),
                              C
                            );
                          case 14:
                            return (A.t3 = A.sent), A.abrupt('return', { x: A.t0, y: A.t1, sample: A.t2, data: A.t3 });
                          case 16:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function (A, e, t, r, i) {
                return n.apply(this, arguments);
              })
          },
          {
            key: '_readRaster',
            value:
              ((r = g(
                y.mark(function A(e, t, r, n, i, a, o, g, I) {
                  var s,
                    B,
                    c,
                    f,
                    C,
                    u,
                    Q,
                    E,
                    l,
                    h,
                    d,
                    w,
                    p,
                    D,
                    k,
                    m,
                    v,
                    b,
                    G,
                    S,
                    F,
                    R = this;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            for (
                              s = this.getTileWidth(),
                                B = this.getTileHeight(),
                                c = this.getWidth(),
                                f = this.getHeight(),
                                C = Math.max(Math.floor(e[0] / s), 0),
                                u = Math.min(Math.ceil(e[2] / s), Math.ceil(c / s)),
                                Q = Math.max(Math.floor(e[1] / B), 0),
                                E = Math.min(Math.ceil(e[3] / B), Math.ceil(f / B)),
                                l = e[2] - e[0],
                                h = this.getBytesPerPixel(),
                                d = [],
                                w = [],
                                p = 0;
                              p < t.length;
                              ++p
                            )
                              1 === this.planarConfiguration ? d.push(xA(this.fileDirectory.BitsPerSample, 0, t[p]) / 8) : d.push(0), w.push(this.getReaderForSample(t[p]));
                            for (D = [], k = this.littleEndian, m = Q; m < E; ++m)
                              for (v = C; v < u; ++v)
                                for (
                                  b = void 0,
                                    1 === this.planarConfiguration && (b = this.getTileOrStrip(v, m, 0, i, I)),
                                    G = function (A) {
                                      var a = A,
                                        o = t[A];
                                      2 === R.planarConfiguration && ((h = R.getSampleByteSize(o)), (b = R.getTileOrStrip(v, m, o, i, I)));
                                      var g = b.then(function (A) {
                                        for (var i = A.data, o = new DataView(i), g = R.getBlockHeight(A.y), I = A.y * B, C = A.x * s, u = I + g, Q = (A.x + 1) * s, E = w[a], y = Math.min(g, g - (u - e[3]), f - I), p = Math.min(s, s - (Q - e[2]), c - C), D = Math.max(0, e[1] - I); D < y; ++D)
                                          for (var m = Math.max(0, e[0] - C); m < p; ++m) {
                                            var v = (D * s + m) * h,
                                              b = E.call(o, v + d[a], k),
                                              G = void 0;
                                            n ? ((G = (D + I - e[1]) * l * t.length + (m + C - e[0]) * t.length + a), (r[G] = b)) : ((G = (D + I - e[1]) * l + m + C - e[0]), (r[a][G] = b));
                                          }
                                      });
                                      D.push(g);
                                    },
                                    S = 0;
                                  S < t.length;
                                  ++S
                                )
                                  G(S);
                            return (A.next = 18), Promise.all(D);
                          case 18:
                            if (!((a && e[2] - e[0] !== a) || (o && e[3] - e[1] !== o))) {
                              A.next = 23;
                              break;
                            }
                            return ((F = n ? RA(r, e[2] - e[0], e[3] - e[1], a, o, t.length, g) : GA(r, e[2] - e[0], e[3] - e[1], a, o, g)).width = a), (F.height = o), A.abrupt('return', F);
                          case 23:
                            return (r.width = a || e[2] - e[0]), (r.height = o || e[3] - e[1]), A.abrupt('return', r);
                          case 26:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function (A, e, t, n, i, a, o, g, I) {
                return r.apply(this, arguments);
              })
          },
          {
            key: 'readRasters',
            value:
              ((t = g(
                y.mark(function A() {
                  var e,
                    t,
                    r,
                    n,
                    i,
                    a,
                    o,
                    g,
                    I,
                    s,
                    B,
                    c,
                    f,
                    C,
                    u,
                    Q,
                    E,
                    l,
                    h,
                    d,
                    w,
                    p,
                    D,
                    k,
                    m,
                    v,
                    b = arguments;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            if (
                              ((e = b.length > 0 && void 0 !== b[0] ? b[0] : {}),
                              (t = e.window),
                              (r = e.samples),
                              (n = void 0 === r ? [] : r),
                              (i = e.interleave),
                              (a = e.pool),
                              (o = void 0 === a ? null : a),
                              (g = e.width),
                              (I = e.height),
                              (s = e.resampleMethod),
                              (B = e.fillValue),
                              (c = e.signal),
                              !((f = t || [0, 0, this.getWidth(), this.getHeight()])[0] > f[2] || f[1] > f[3]))
                            ) {
                              A.next = 4;
                              break;
                            }
                            throw new Error('Invalid subsets');
                          case 4:
                            if (((C = f[2] - f[0]), (u = f[3] - f[1]), (Q = C * u), (E = this.getSamplesPerPixel()), n && n.length)) {
                              A.next = 12;
                              break;
                            }
                            for (l = 0; l < E; ++l) n.push(l);
                            A.next = 19;
                            break;
                          case 12:
                            h = 0;
                          case 13:
                            if (!(h < n.length)) {
                              A.next = 19;
                              break;
                            }
                            if (!(n[h] >= E)) {
                              A.next = 16;
                              break;
                            }
                            return A.abrupt('return', Promise.reject(new RangeError("Invalid sample index '".concat(n[h], "'."))));
                          case 16:
                            ++h, (A.next = 13);
                            break;
                          case 19:
                            if (i) (w = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1), (p = Math.max.apply(null, this.fileDirectory.BitsPerSample)), (d = UA(w, p, Q * n.length)), B && d.fill(B);
                            else for (d = [], D = 0; D < n.length; ++D) (k = this.getArrayForSample(n[D], Q)), Array.isArray(B) && D < B.length ? k.fill(B[D]) : B && !Array.isArray(B) && k.fill(B), d.push(k);
                            if (((A.t0 = o), A.t0)) {
                              A.next = 25;
                              break;
                            }
                            return (A.next = 24), pA(this.fileDirectory);
                          case 24:
                            A.t0 = A.sent;
                          case 25:
                            return (m = A.t0), (A.next = 28), this._readRaster(f, n, d, i, m, g, I, s, c);
                          case 28:
                            return (v = A.sent), A.abrupt('return', v);
                          case 30:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              })
          },
          {
            key: 'readRGB',
            value:
              ((e = g(
                y.mark(function A() {
                  var e,
                    t,
                    r,
                    n,
                    i,
                    a,
                    o,
                    g,
                    I,
                    s,
                    B,
                    c,
                    f,
                    C,
                    u,
                    Q,
                    E,
                    l,
                    h,
                    d,
                    w,
                    p,
                    D,
                    k,
                    m,
                    v,
                    b,
                    G = arguments;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            if (
                              ((e = G.length > 0 && void 0 !== G[0] ? G[0] : {}),
                              (t = e.window),
                              (r = e.interleave),
                              (n = void 0 === r || r),
                              (i = e.pool),
                              (a = void 0 === i ? null : i),
                              (o = e.width),
                              (g = e.height),
                              (I = e.resampleMethod),
                              (s = e.enableAlpha),
                              (B = void 0 !== s && s),
                              (c = e.signal),
                              !((f = t || [0, 0, this.getWidth(), this.getHeight()])[0] > f[2] || f[1] > f[3]))
                            ) {
                              A.next = 4;
                              break;
                            }
                            throw new Error('Invalid subsets');
                          case 4:
                            if ((C = this.fileDirectory.PhotometricInterpretation) !== aA.RGB) {
                              A.next = 9;
                              break;
                            }
                            if (((u = [0, 1, 2]), this.fileDirectory.ExtraSamples !== oA.Unspecified && B)) for (u = [], Q = 0; Q < this.fileDirectory.BitsPerSample.length; Q += 1) u.push(Q);
                            return A.abrupt('return', this.readRasters({ window: t, interleave: n, samples: u, pool: a, width: o, height: g, resampleMethod: I, signal: c }));
                          case 9:
                            (A.t0 = C), (A.next = A.t0 === aA.WhiteIsZero || A.t0 === aA.BlackIsZero || A.t0 === aA.Palette ? 12 : A.t0 === aA.CMYK ? 14 : A.t0 === aA.YCbCr || A.t0 === aA.CIELab ? 16 : 18);
                            break;
                          case 12:
                            return (E = [0]), A.abrupt('break', 19);
                          case 14:
                            return (E = [0, 1, 2, 3]), A.abrupt('break', 19);
                          case 16:
                            return (E = [0, 1, 2]), A.abrupt('break', 19);
                          case 18:
                            throw new Error('Invalid or unsupported photometric interpretation.');
                          case 19:
                            return (l = { window: f, interleave: !0, samples: E, pool: a, width: o, height: g, resampleMethod: I, signal: c }), (h = this.fileDirectory), (A.next = 23), this.readRasters(l);
                          case 23:
                            (d = A.sent), (w = Math.pow(2, this.fileDirectory.BitsPerSample[0])), (A.t1 = C), (A.next = A.t1 === aA.WhiteIsZero ? 28 : A.t1 === aA.BlackIsZero ? 30 : A.t1 === aA.Palette ? 32 : A.t1 === aA.CMYK ? 34 : A.t1 === aA.YCbCr ? 36 : A.t1 === aA.CIELab ? 38 : 40);
                            break;
                          case 28:
                            return (p = CA(d, w)), A.abrupt('break', 41);
                          case 30:
                            return (p = uA(d, w)), A.abrupt('break', 41);
                          case 32:
                            return (p = QA(d, h.ColorMap)), A.abrupt('break', 41);
                          case 34:
                            return (p = EA(d)), A.abrupt('break', 41);
                          case 36:
                            return (p = lA(d)), A.abrupt('break', 41);
                          case 38:
                            return (p = hA(d)), A.abrupt('break', 41);
                          case 40:
                            throw new Error('Unsupported photometric interpretation.');
                          case 41:
                            if (!n) {
                              for (D = new Uint8Array(p.length / 3), k = new Uint8Array(p.length / 3), m = new Uint8Array(p.length / 3), v = 0, b = 0; v < p.length; v += 3, ++b) (D[b] = p[v]), (k[b] = p[v + 1]), (m[b] = p[v + 2]);
                              p = [D, k, m];
                            }
                            return (p.width = d.width), (p.height = d.height), A.abrupt('return', p);
                          case 45:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          },
          {
            key: 'getTiePoints',
            value: function () {
              if (!this.fileDirectory.ModelTiepoint) return [];
              for (var A = [], e = 0; e < this.fileDirectory.ModelTiepoint.length; e += 6)
                A.push({ i: this.fileDirectory.ModelTiepoint[e], j: this.fileDirectory.ModelTiepoint[e + 1], k: this.fileDirectory.ModelTiepoint[e + 2], x: this.fileDirectory.ModelTiepoint[e + 3], y: this.fileDirectory.ModelTiepoint[e + 4], z: this.fileDirectory.ModelTiepoint[e + 5] });
              return A;
            }
          },
          {
            key: 'getGDALMetadata',
            value: function () {
              var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                e = {};
              if (!this.fileDirectory.GDAL_METADATA) return null;
              var t = this.fileDirectory.GDAL_METADATA,
                r = Z(t, 'Item');
              r =
                null === A
                  ? r.filter(function (A) {
                      return void 0 === j(A, 'sample');
                    })
                  : r.filter(function (e) {
                      return Number(j(e, 'sample')) === A;
                    });
              for (var n = 0; n < r.length; ++n) {
                var i = r[n];
                e[j(i, 'name')] = i.inner;
              }
              return e;
            }
          },
          {
            key: 'getGDALNoData',
            value: function () {
              if (!this.fileDirectory.GDAL_NODATA) return null;
              var A = this.fileDirectory.GDAL_NODATA;
              return Number(A.substring(0, A.length - 1));
            }
          },
          {
            key: 'getOrigin',
            value: function () {
              var A = this.fileDirectory.ModelTiepoint,
                e = this.fileDirectory.ModelTransformation;
              if (A && 6 === A.length) return [A[3], A[4], A[5]];
              if (e) return [e[3], e[7], e[11]];
              throw new Error('The image does not have an affine transformation.');
            }
          },
          {
            key: 'getResolution',
            value: function () {
              var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                e = this.fileDirectory.ModelPixelScale,
                t = this.fileDirectory.ModelTransformation;
              if (e) return [e[0], -e[1], e[2]];
              if (t) return 0 === t[1] && 0 === t[4] ? [t[0], -t[5], t[10]] : [Math.sqrt(t[0] * t[0] + t[4] * t[4]), -Math.sqrt(t[1] * t[1] + t[5] * t[5]), t[10]];
              if (A) {
                var r = A.getResolution(),
                  n = a(r, 3),
                  i = n[0],
                  o = n[1],
                  g = n[2];
                return [(i * A.getWidth()) / this.getWidth(), (o * A.getHeight()) / this.getHeight(), (g * A.getWidth()) / this.getWidth()];
              }
              throw new Error('The image does not have an affine transformation.');
            }
          },
          {
            key: 'pixelIsArea',
            value: function () {
              return 1 === this.geoKeys.GTRasterTypeGeoKey;
            }
          },
          {
            key: 'getBoundingBox',
            value: function () {
              var A = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.getHeight(),
                t = this.getWidth();
              if (this.fileDirectory.ModelTransformation && !A) {
                var r = a(this.fileDirectory.ModelTransformation, 8),
                  n = r[0],
                  i = r[1];
                r[2];
                var o = r[3],
                  g = r[4],
                  I = r[5];
                r[6];
                var s = r[7],
                  B = [
                    [0, 0],
                    [0, e],
                    [t, 0],
                    [t, e]
                  ],
                  c = B.map(function (A) {
                    var e = a(A, 2),
                      t = e[0],
                      r = e[1];
                    return [o + n * t + i * r, s + g * t + I * r];
                  }),
                  f = c.map(function (A) {
                    return A[0];
                  }),
                  C = c.map(function (A) {
                    return A[1];
                  });
                return [Math.min.apply(Math, D(f)), Math.min.apply(Math, D(C)), Math.max.apply(Math, D(f)), Math.max.apply(Math, D(C))];
              }
              var u = this.getOrigin(),
                Q = this.getResolution(),
                E = u[0],
                l = u[1],
                h = E + Q[0] * t,
                d = l + Q[1] * e;
              return [Math.min(E, h), Math.min(l, d), Math.max(E, h), Math.max(l, d)];
            }
          }
        ]),
        A
      );
    })(),
    qA = NA,
    JA = (function () {
      function A(e) {
        d(this, A), (this._dataView = new DataView(e));
      }
      return (
        s(A, [
          {
            key: 'buffer',
            get: function () {
              return this._dataView.buffer;
            }
          },
          {
            key: 'getUint64',
            value: function (A, e) {
              var t,
                r = this.getUint32(A, e),
                n = this.getUint32(A + 4, e);
              if (e) {
                if (((t = r + Math.pow(2, 32) * n), !Number.isSafeInteger(t))) throw new Error(''.concat(t, ' exceeds MAX_SAFE_INTEGER. ') + 'Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues');
                return t;
              }
              if (((t = Math.pow(2, 32) * r + n), !Number.isSafeInteger(t))) throw new Error(''.concat(t, ' exceeds MAX_SAFE_INTEGER. ') + 'Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues');
              return t;
            }
          },
          {
            key: 'getInt64',
            value: function (A, e) {
              for (var t = 0, r = (128 & this._dataView.getUint8(A + (e ? 7 : 0))) > 0, n = !0, i = 0; i < 8; i++) {
                var a = this._dataView.getUint8(A + (e ? i : 7 - i));
                r && (n ? 0 !== a && ((a = 255 & ~(a - 1)), (n = !1)) : (a = 255 & ~a)), (t += a * Math.pow(256, i));
              }
              return r && (t = -t), t;
            }
          },
          {
            key: 'getUint8',
            value: function (A, e) {
              return this._dataView.getUint8(A, e);
            }
          },
          {
            key: 'getInt8',
            value: function (A, e) {
              return this._dataView.getInt8(A, e);
            }
          },
          {
            key: 'getUint16',
            value: function (A, e) {
              return this._dataView.getUint16(A, e);
            }
          },
          {
            key: 'getInt16',
            value: function (A, e) {
              return this._dataView.getInt16(A, e);
            }
          },
          {
            key: 'getUint32',
            value: function (A, e) {
              return this._dataView.getUint32(A, e);
            }
          },
          {
            key: 'getInt32',
            value: function (A, e) {
              return this._dataView.getInt32(A, e);
            }
          },
          {
            key: 'getFloat16',
            value: function (A, e) {
              return _(this._dataView, A, e);
            }
          },
          {
            key: 'getFloat32',
            value: function (A, e) {
              return this._dataView.getFloat32(A, e);
            }
          },
          {
            key: 'getFloat64',
            value: function (A, e) {
              return this._dataView.getFloat64(A, e);
            }
          }
        ]),
        A
      );
    })(),
    OA = (function () {
      function A(e, t, r, n) {
        d(this, A), (this._dataView = new DataView(e)), (this._sliceOffset = t), (this._littleEndian = r), (this._bigTiff = n);
      }
      return (
        s(A, [
          {
            key: 'sliceOffset',
            get: function () {
              return this._sliceOffset;
            }
          },
          {
            key: 'sliceTop',
            get: function () {
              return this._sliceOffset + this.buffer.byteLength;
            }
          },
          {
            key: 'littleEndian',
            get: function () {
              return this._littleEndian;
            }
          },
          {
            key: 'bigTiff',
            get: function () {
              return this._bigTiff;
            }
          },
          {
            key: 'buffer',
            get: function () {
              return this._dataView.buffer;
            }
          },
          {
            key: 'covers',
            value: function (A, e) {
              return this.sliceOffset <= A && this.sliceTop >= A + e;
            }
          },
          {
            key: 'readUint8',
            value: function (A) {
              return this._dataView.getUint8(A - this._sliceOffset, this._littleEndian);
            }
          },
          {
            key: 'readInt8',
            value: function (A) {
              return this._dataView.getInt8(A - this._sliceOffset, this._littleEndian);
            }
          },
          {
            key: 'readUint16',
            value: function (A) {
              return this._dataView.getUint16(A - this._sliceOffset, this._littleEndian);
            }
          },
          {
            key: 'readInt16',
            value: function (A) {
              return this._dataView.getInt16(A - this._sliceOffset, this._littleEndian);
            }
          },
          {
            key: 'readUint32',
            value: function (A) {
              return this._dataView.getUint32(A - this._sliceOffset, this._littleEndian);
            }
          },
          {
            key: 'readInt32',
            value: function (A) {
              return this._dataView.getInt32(A - this._sliceOffset, this._littleEndian);
            }
          },
          {
            key: 'readFloat32',
            value: function (A) {
              return this._dataView.getFloat32(A - this._sliceOffset, this._littleEndian);
            }
          },
          {
            key: 'readFloat64',
            value: function (A) {
              return this._dataView.getFloat64(A - this._sliceOffset, this._littleEndian);
            }
          },
          {
            key: 'readUint64',
            value: function (A) {
              var e,
                t = this.readUint32(A),
                r = this.readUint32(A + 4);
              if (this._littleEndian) {
                if (((e = t + Math.pow(2, 32) * r), !Number.isSafeInteger(e))) throw new Error(''.concat(e, ' exceeds MAX_SAFE_INTEGER. ') + 'Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues');
                return e;
              }
              if (((e = Math.pow(2, 32) * t + r), !Number.isSafeInteger(e))) throw new Error(''.concat(e, ' exceeds MAX_SAFE_INTEGER. ') + 'Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues');
              return e;
            }
          },
          {
            key: 'readInt64',
            value: function (A) {
              for (var e = 0, t = (128 & this._dataView.getUint8(A + (this._littleEndian ? 7 : 0))) > 0, r = !0, n = 0; n < 8; n++) {
                var i = this._dataView.getUint8(A + (this._littleEndian ? n : 7 - n));
                t && (r ? 0 !== i && ((i = 255 & ~(i - 1)), (r = !1)) : (i = 255 & ~i)), (e += i * Math.pow(256, n));
              }
              return t && (e = -e), e;
            }
          },
          {
            key: 'readOffset',
            value: function (A) {
              return this._bigTiff ? this.readUint64(A) : this.readUint32(A);
            }
          }
        ]),
        A
      );
    })(),
    YA = ('undefined' != typeof navigator && navigator.hardwareConcurrency) || 2,
    HA = (function () {
      function A() {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YA,
          r = arguments.length > 1 ? arguments[1] : void 0;
        d(this, A),
          (this.workers = null),
          (this._awaitingDecoder = null),
          (this.size = t),
          (this.messageId = 0),
          t &&
            ((this._awaitingDecoder = r
              ? Promise.resolve(r)
              : new Promise(function (A) {
                  Promise.resolve()
                    .then(function () {
                      return Jn;
                    })
                    .then(function (e) {
                      A(e.create);
                    });
                })),
            this._awaitingDecoder.then(function (A) {
              (e._awaitingDecoder = null), (e.workers = []);
              for (var r = 0; r < t; r++) e.workers.push({ worker: A(), idle: !0 });
            }));
      }
      var e;
      return (
        s(A, [
          {
            key: 'decode',
            value:
              ((e = g(
                y.mark(function A(e, t) {
                  var r = this;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            if (!this._awaitingDecoder) {
                              A.next = 3;
                              break;
                            }
                            return (A.next = 3), this._awaitingDecoder;
                          case 3:
                            return A.abrupt(
                              'return',
                              0 === this.size
                                ? pA(e).then(function (A) {
                                    return A.decode(e, t);
                                  })
                                : new Promise(function (A) {
                                    var n =
                                      r.workers.find(function (A) {
                                        return A.idle;
                                      }) || r.workers[Math.floor(Math.random() * r.size)];
                                    n.idle = !1;
                                    var i = r.messageId++;
                                    n.worker.addEventListener('message', function e(t) {
                                      t.data.id === i && ((n.idle = !0), A(t.data.decoded), n.worker.removeEventListener('message', e));
                                    }),
                                      n.worker.postMessage({ fileDirectory: e, buffer: t, id: i }, [t]);
                                  })
                            );
                          case 4:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function (A, t) {
                return e.apply(this, arguments);
              })
          },
          {
            key: 'destroy',
            value: function () {
              this.workers &&
                (this.workers.forEach(function (A) {
                  A.worker.terminate();
                }),
                (this.workers = null));
            }
          }
        ]),
        A
      );
    })(),
    PA = HA;
  function KA(A, e) {
    if (null == A) return {};
    var t,
      r,
      n = (function (A, e) {
        if (null == A) return {};
        var t,
          r,
          n = {},
          i = Object.keys(A);
        for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = A[t]);
        return n;
      })(A, e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(A);
      for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(A, t) && (n[t] = A[t]));
    }
    return n;
  }
  function TA(A, e) {
    var t = ('undefined' != typeof Symbol && A[Symbol.iterator]) || A['@@iterator'];
    if (!t) {
      if (
        Array.isArray(A) ||
        (t = (function (A, e) {
          if (!A) return;
          if ('string' == typeof A) return VA(A, e);
          var t = Object.prototype.toString.call(A).slice(8, -1);
          'Object' === t && A.constructor && (t = A.constructor.name);
          if ('Map' === t || 'Set' === t) return Array.from(A);
          if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return VA(A, e);
        })(A)) ||
        (e && A && 'number' == typeof A.length)
      ) {
        t && (A = t);
        var r = 0,
          n = function () {};
        return {
          s: n,
          n: function () {
            return r >= A.length ? { done: !0 } : { done: !1, value: A[r++] };
          },
          e: function (A) {
            throw A;
          },
          f: n
        };
      }
      throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var i,
      a = !0,
      o = !1;
    return {
      s: function () {
        t = t.call(A);
      },
      n: function () {
        var A = t.next();
        return (a = A.done), A;
      },
      e: function (A) {
        (o = !0), (i = A);
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (o) throw i;
        }
      }
    };
  }
  function VA(A, e) {
    (null == e || e > A.length) && (e = A.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
    return r;
  }
  var _A = '\r\n\r\n';
  function jA(A) {
    if (void 0 !== Object.fromEntries) return Object.fromEntries(A);
    var e,
      t = {},
      r = TA(A);
    try {
      for (r.s(); !(e = r.n()).done; ) {
        var n = a(e.value, 2),
          i = n[0],
          o = n[1];
        t[i.toLowerCase()] = o;
      }
    } catch (A) {
      r.e(A);
    } finally {
      r.f();
    }
    return t;
  }
  function XA(A) {
    return jA(
      A.split('\r\n').map(function (A) {
        var e = A.split(':').map(function (A) {
          return A.trim();
        });
        return (e[0] = e[0].toLowerCase()), e;
      })
    );
  }
  function WA(A) {
    var e,
      r = A.split(';').map(function (A) {
        return A.trim();
      }),
      a = t((e = r)) || p(e) || n(e) || i();
    return {
      type: a[0],
      params: jA(
        a.slice(1).map(function (A) {
          return A.split('=');
        })
      )
    };
  }
  function ZA(A) {
    var e, t, r;
    if (A) {
      var n = a(A.match(/bytes (\d+)-(\d+)\/(\d+)/), 4);
      (e = n[1]), (t = n[2]), (r = n[3]), (e = parseInt(e, 10)), (t = parseInt(t, 10)), (r = parseInt(r, 10));
    }
    return { start: e, end: t, total: r };
  }
  function zA(A, e) {
    for (var t = null, r = new TextDecoder('ascii'), n = [], i = '--'.concat(e), a = ''.concat(i, '--'), o = 0; o < 10; ++o) {
      r.decode(new Uint8Array(A, o, i.length)) === i && (t = o);
    }
    if (null === t) throw new Error('Could not find initial boundary');
    for (; t < A.byteLength; ) {
      var g = r.decode(new Uint8Array(A, t, Math.min(i.length + 1024, A.byteLength - t)));
      if (0 === g.length || g.startsWith(a)) break;
      if (!g.startsWith(i)) throw new Error('Part does not start with boundary');
      var I = g.substr(i.length + 2);
      if (0 === I.length) break;
      var s = I.indexOf(_A),
        B = XA(I.substr(0, s)),
        c = ZA(B['content-range']),
        f = c.start,
        C = c.end,
        u = c.total,
        Q = t + i.length + s + _A.length,
        E = parseInt(C, 10) + 1 - parseInt(f, 10);
      n.push({ headers: B, data: A.slice(Q, Q + E), offset: f, length: E, fileSize: u }), (t = Q + E + 4);
    }
    return n;
  }
  var $A = (function () {
    function A() {
      d(this, A);
    }
    var e, t, r;
    return (
      s(A, [
        {
          key: 'fetch',
          value:
            ((r = g(
              y.mark(function A(e) {
                var t,
                  r = this,
                  n = arguments;
                return y.wrap(function (A) {
                  for (;;)
                    switch ((A.prev = A.next)) {
                      case 0:
                        return (
                          (t = n.length > 1 && void 0 !== n[1] ? n[1] : void 0),
                          A.abrupt(
                            'return',
                            Promise.all(
                              e.map(function (A) {
                                return r.fetchSlice(A, t);
                              })
                            )
                          )
                        );
                      case 2:
                      case 'end':
                        return A.stop();
                    }
                }, A);
              })
            )),
            function (A) {
              return r.apply(this, arguments);
            })
        },
        {
          key: 'fetchSlice',
          value:
            ((t = g(
              y.mark(function A(e) {
                return y.wrap(function (A) {
                  for (;;)
                    switch ((A.prev = A.next)) {
                      case 0:
                        throw new Error('fetching of slice '.concat(e, ' not possible, not implemented'));
                      case 1:
                      case 'end':
                        return A.stop();
                    }
                }, A);
              })
            )),
            function (A) {
              return t.apply(this, arguments);
            })
        },
        {
          key: 'fileSize',
          get: function () {
            return null;
          }
        },
        {
          key: 'close',
          value:
            ((e = g(
              y.mark(function A() {
                return y.wrap(function (A) {
                  for (;;)
                    switch ((A.prev = A.next)) {
                      case 0:
                      case 'end':
                        return A.stop();
                    }
                }, A);
              })
            )),
            function () {
              return e.apply(this, arguments);
            })
        }
      ]),
      A
    );
  })();
  function Ae(A, e) {
    var t = ('undefined' != typeof Symbol && A[Symbol.iterator]) || A['@@iterator'];
    if (!t) {
      if (
        Array.isArray(A) ||
        (t = (function (A, e) {
          if (!A) return;
          if ('string' == typeof A) return ee(A, e);
          var t = Object.prototype.toString.call(A).slice(8, -1);
          'Object' === t && A.constructor && (t = A.constructor.name);
          if ('Map' === t || 'Set' === t) return Array.from(A);
          if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ee(A, e);
        })(A)) ||
        (e && A && 'number' == typeof A.length)
      ) {
        t && (A = t);
        var r = 0,
          n = function () {};
        return {
          s: n,
          n: function () {
            return r >= A.length ? { done: !0 } : { done: !1, value: A[r++] };
          },
          e: function (A) {
            throw A;
          },
          f: n
        };
      }
      throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var i,
      a = !0,
      o = !1;
    return {
      s: function () {
        t = t.call(A);
      },
      n: function () {
        var A = t.next();
        return (a = A.done), A;
      },
      e: function (A) {
        (o = !0), (i = A);
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (o) throw i;
        }
      }
    };
  }
  function ee(A, e) {
    (null == e || e > A.length) && (e = A.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
    return r;
  }
  function te(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var re = (function (A, e, t) {
    c(n, A);
    var r = te(n);
    function n() {
      var A,
        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if ((d(this, n), (A = r.call(this)), !(e.maxSize && e.maxSize > 0))) throw new TypeError('`maxSize` must be a number greater than 0');
      if ('number' == typeof e.maxAge && 0 === e.maxAge) throw new TypeError('`maxAge` must be a number greater than 0');
      return (A.maxSize = e.maxSize), (A.maxAge = e.maxAge || Number.POSITIVE_INFINITY), (A.onEviction = e.onEviction), (A.cache = new Map()), (A.oldCache = new Map()), (A._size = 0), A;
    }
    return (
      s(n, [
        {
          key: '_emitEvictions',
          value: function (A) {
            if ('function' == typeof this.onEviction) {
              var e,
                t = Ae(A);
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var r = a(e.value, 2),
                    n = r[0],
                    i = r[1];
                  this.onEviction(n, i.value);
                }
              } catch (A) {
                t.e(A);
              } finally {
                t.f();
              }
            }
          }
        },
        {
          key: '_deleteIfExpired',
          value: function (A, e) {
            return 'number' == typeof e.expiry && e.expiry <= Date.now() && ('function' == typeof this.onEviction && this.onEviction(A, e.value), this.delete(A));
          }
        },
        {
          key: '_getOrDeleteIfExpired',
          value: function (A, e) {
            if (!1 === this._deleteIfExpired(A, e)) return e.value;
          }
        },
        {
          key: '_getItemValue',
          value: function (A, e) {
            return e.expiry ? this._getOrDeleteIfExpired(A, e) : e.value;
          }
        },
        {
          key: '_peek',
          value: function (A, e) {
            var t = e.get(A);
            return this._getItemValue(A, t);
          }
        },
        {
          key: '_set',
          value: function (A, e) {
            this.cache.set(A, e), this._size++, this._size >= this.maxSize && ((this._size = 0), this._emitEvictions(this.oldCache), (this.oldCache = this.cache), (this.cache = new Map()));
          }
        },
        {
          key: '_moveToRecent',
          value: function (A, e) {
            this.oldCache.delete(A), this._set(A, e);
          }
        },
        {
          key: '_entriesAscending',
          value: y.mark(function A() {
            var e, t, r, n, i, o, g, I, s, B, c, f;
            return y.wrap(
              function (A) {
                for (;;)
                  switch ((A.prev = A.next)) {
                    case 0:
                      (e = Ae(this.oldCache)), (A.prev = 1), e.s();
                    case 3:
                      if ((t = e.n()).done) {
                        A.next = 13;
                        break;
                      }
                      if (((r = t.value), (n = a(r, 2)), (i = n[0]), (o = n[1]), this.cache.has(i))) {
                        A.next = 11;
                        break;
                      }
                      if (!1 !== this._deleteIfExpired(i, o)) {
                        A.next = 11;
                        break;
                      }
                      return (A.next = 11), r;
                    case 11:
                      A.next = 3;
                      break;
                    case 13:
                      A.next = 18;
                      break;
                    case 15:
                      (A.prev = 15), (A.t0 = A.catch(1)), e.e(A.t0);
                    case 18:
                      return (A.prev = 18), e.f(), A.finish(18);
                    case 21:
                      (g = Ae(this.cache)), (A.prev = 22), g.s();
                    case 24:
                      if ((I = g.n()).done) {
                        A.next = 33;
                        break;
                      }
                      if (((s = I.value), (B = a(s, 2)), (c = B[0]), (f = B[1]), !1 !== this._deleteIfExpired(c, f))) {
                        A.next = 31;
                        break;
                      }
                      return (A.next = 31), s;
                    case 31:
                      A.next = 24;
                      break;
                    case 33:
                      A.next = 38;
                      break;
                    case 35:
                      (A.prev = 35), (A.t1 = A.catch(22)), g.e(A.t1);
                    case 38:
                      return (A.prev = 38), g.f(), A.finish(38);
                    case 41:
                    case 'end':
                      return A.stop();
                  }
              },
              A,
              this,
              [
                [1, 15, 18, 21],
                [22, 35, 38, 41]
              ]
            );
          })
        },
        {
          key: 'get',
          value: function (A) {
            if (this.cache.has(A)) {
              var e = this.cache.get(A);
              return this._getItemValue(A, e);
            }
            if (this.oldCache.has(A)) {
              var t = this.oldCache.get(A);
              if (!1 === this._deleteIfExpired(A, t)) return this._moveToRecent(A, t), t.value;
            }
          }
        },
        {
          key: 'set',
          value: function (A, e) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = t.maxAge,
              n = void 0 === r ? this.maxAge : r,
              i = 'number' == typeof n && n !== Number.POSITIVE_INFINITY ? Date.now() + n : void 0;
            this.cache.has(A) ? this.cache.set(A, { value: e, expiry: i }) : this._set(A, { value: e, expiry: i });
          }
        },
        {
          key: 'has',
          value: function (A) {
            return this.cache.has(A) ? !this._deleteIfExpired(A, this.cache.get(A)) : !!this.oldCache.has(A) && !this._deleteIfExpired(A, this.oldCache.get(A));
          }
        },
        {
          key: 'peek',
          value: function (A) {
            return this.cache.has(A) ? this._peek(A, this.cache) : this.oldCache.has(A) ? this._peek(A, this.oldCache) : void 0;
          }
        },
        {
          key: 'delete',
          value: function (A) {
            var e = this.cache.delete(A);
            return e && this._size--, this.oldCache.delete(A) || e;
          }
        },
        {
          key: 'clear',
          value: function () {
            this.cache.clear(), this.oldCache.clear(), (this._size = 0);
          }
        },
        {
          key: 'resize',
          value: function (A) {
            if (!(A && A > 0)) throw new TypeError('`maxSize` must be a number greater than 0');
            var e = D(this._entriesAscending()),
              t = e.length - A;
            t < 0 ? ((this.cache = new Map(e)), (this.oldCache = new Map()), (this._size = e.length)) : (t > 0 && this._emitEvictions(e.slice(0, t)), (this.oldCache = new Map(e.slice(t))), (this.cache = new Map()), (this._size = 0)), (this.maxSize = A);
          }
        },
        {
          key: 'keys',
          value: y.mark(function A() {
            var e, t, r, n;
            return y.wrap(
              function (A) {
                for (;;)
                  switch ((A.prev = A.next)) {
                    case 0:
                      (e = Ae(this)), (A.prev = 1), e.s();
                    case 3:
                      if ((t = e.n()).done) {
                        A.next = 9;
                        break;
                      }
                      return (r = a(t.value, 1)), (n = r[0]), (A.next = 7), n;
                    case 7:
                      A.next = 3;
                      break;
                    case 9:
                      A.next = 14;
                      break;
                    case 11:
                      (A.prev = 11), (A.t0 = A.catch(1)), e.e(A.t0);
                    case 14:
                      return (A.prev = 14), e.f(), A.finish(14);
                    case 17:
                    case 'end':
                      return A.stop();
                  }
              },
              A,
              this,
              [[1, 11, 14, 17]]
            );
          })
        },
        {
          key: 'values',
          value: y.mark(function A() {
            var e, t, r, n;
            return y.wrap(
              function (A) {
                for (;;)
                  switch ((A.prev = A.next)) {
                    case 0:
                      (e = Ae(this)), (A.prev = 1), e.s();
                    case 3:
                      if ((t = e.n()).done) {
                        A.next = 9;
                        break;
                      }
                      return (r = a(t.value, 2)), (n = r[1]), (A.next = 7), n;
                    case 7:
                      A.next = 3;
                      break;
                    case 9:
                      A.next = 14;
                      break;
                    case 11:
                      (A.prev = 11), (A.t0 = A.catch(1)), e.e(A.t0);
                    case 14:
                      return (A.prev = 14), e.f(), A.finish(14);
                    case 17:
                    case 'end':
                      return A.stop();
                  }
              },
              A,
              this,
              [[1, 11, 14, 17]]
            );
          })
        },
        {
          key: e,
          value: y.mark(function () {
            var A, e, t, r, n, i, o, g, I, s, B, c;
            return y.wrap(
              function (f) {
                for (;;)
                  switch ((f.prev = f.next)) {
                    case 0:
                      (A = Ae(this.cache)), (f.prev = 1), A.s();
                    case 3:
                      if ((e = A.n()).done) {
                        f.next = 12;
                        break;
                      }
                      if (((t = e.value), (r = a(t, 2)), (n = r[0]), (i = r[1]), !1 !== this._deleteIfExpired(n, i))) {
                        f.next = 10;
                        break;
                      }
                      return (f.next = 10), [n, i.value];
                    case 10:
                      f.next = 3;
                      break;
                    case 12:
                      f.next = 17;
                      break;
                    case 14:
                      (f.prev = 14), (f.t0 = f.catch(1)), A.e(f.t0);
                    case 17:
                      return (f.prev = 17), A.f(), f.finish(17);
                    case 20:
                      (o = Ae(this.oldCache)), (f.prev = 21), o.s();
                    case 23:
                      if ((g = o.n()).done) {
                        f.next = 33;
                        break;
                      }
                      if (((I = g.value), (s = a(I, 2)), (B = s[0]), (c = s[1]), this.cache.has(B))) {
                        f.next = 31;
                        break;
                      }
                      if (!1 !== this._deleteIfExpired(B, c)) {
                        f.next = 31;
                        break;
                      }
                      return (f.next = 31), [B, c.value];
                    case 31:
                      f.next = 23;
                      break;
                    case 33:
                      f.next = 38;
                      break;
                    case 35:
                      (f.prev = 35), (f.t1 = f.catch(21)), o.e(f.t1);
                    case 38:
                      return (f.prev = 38), o.f(), f.finish(38);
                    case 41:
                    case 'end':
                      return f.stop();
                  }
              },
              i,
              this,
              [
                [1, 14, 17, 20],
                [21, 35, 38, 41]
              ]
            );
          })
        },
        {
          key: 'entriesDescending',
          value: y.mark(function A() {
            var e, t, r, n, i, o, g, I, s, B, c;
            return y.wrap(
              function (A) {
                for (;;)
                  switch ((A.prev = A.next)) {
                    case 0:
                      (e = D(this.cache)), (t = e.length - 1);
                    case 2:
                      if (!(t >= 0)) {
                        A.next = 12;
                        break;
                      }
                      if (((r = e[t]), (n = a(r, 2)), (i = n[0]), (o = n[1]), !1 !== this._deleteIfExpired(i, o))) {
                        A.next = 9;
                        break;
                      }
                      return (A.next = 9), [i, o.value];
                    case 9:
                      --t, (A.next = 2);
                      break;
                    case 12:
                      (e = D(this.oldCache)), (g = e.length - 1);
                    case 14:
                      if (!(g >= 0)) {
                        A.next = 25;
                        break;
                      }
                      if (((I = e[g]), (s = a(I, 2)), (B = s[0]), (c = s[1]), this.cache.has(B))) {
                        A.next = 22;
                        break;
                      }
                      if (!1 !== this._deleteIfExpired(B, c)) {
                        A.next = 22;
                        break;
                      }
                      return (A.next = 22), [B, c.value];
                    case 22:
                      --g, (A.next = 14);
                      break;
                    case 25:
                    case 'end':
                      return A.stop();
                  }
              },
              A,
              this
            );
          })
        },
        {
          key: 'entriesAscending',
          value: y.mark(function A() {
            var e, t, r, n, i;
            return y.wrap(
              function (A) {
                for (;;)
                  switch ((A.prev = A.next)) {
                    case 0:
                      (e = Ae(this._entriesAscending())), (A.prev = 1), e.s();
                    case 3:
                      if ((t = e.n()).done) {
                        A.next = 9;
                        break;
                      }
                      return (r = a(t.value, 2)), (n = r[0]), (i = r[1]), (A.next = 7), [n, i.value];
                    case 7:
                      A.next = 3;
                      break;
                    case 9:
                      A.next = 14;
                      break;
                    case 11:
                      (A.prev = 11), (A.t0 = A.catch(1)), e.e(A.t0);
                    case 14:
                      return (A.prev = 14), e.f(), A.finish(14);
                    case 17:
                    case 'end':
                      return A.stop();
                  }
              },
              A,
              this,
              [[1, 11, 14, 17]]
            );
          })
        },
        {
          key: 'size',
          get: function () {
            if (!this._size) return this.oldCache.size;
            var A,
              e = 0,
              t = Ae(this.oldCache.keys());
            try {
              for (t.s(); !(A = t.n()).done; ) {
                var r = A.value;
                this.cache.has(r) || e++;
              }
            } catch (A) {
              t.e(A);
            } finally {
              t.f();
            }
            return Math.min(this._size + e, this.maxSize);
          }
        },
        {
          key: 'entries',
          value: function () {
            return this.entriesAscending();
          }
        },
        {
          key: 'forEach',
          value: function (A) {
            var e,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
              r = Ae(this.entriesAscending());
            try {
              for (r.s(); !(e = r.n()).done; ) {
                var n = a(e.value, 2),
                  i = n[0],
                  o = n[1];
                A.call(t, o, i, this);
              }
            } catch (A) {
              r.e(A);
            } finally {
              r.f();
            }
          }
        },
        {
          key: t,
          get: function () {
            return JSON.stringify(D(this.entriesAscending()));
          }
        }
      ]),
      n
    );
  })(h(Map), Symbol.iterator, Symbol.toStringTag);
  function ne(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  function ie(A, e) {
    for (var t in e) e.hasOwnProperty(t) && (A[t] = e[t]);
  }
  function ae(A, e) {
    return !(A.length < e.length) && A.substr(A.length - e.length) === e;
  }
  function oe(A) {
    var e = {};
    for (var t in A) {
      if (A.hasOwnProperty(t)) e[A[t]] = t;
    }
    return e;
  }
  function ge(A, e) {
    for (var t = [], r = 0; r < A; r++) t.push(e(r));
    return t;
  }
  function Ie(A) {
    return se.apply(this, arguments);
  }
  function se() {
    return (se = g(
      y.mark(function A(e) {
        return y.wrap(function (A) {
          for (;;)
            switch ((A.prev = A.next)) {
              case 0:
                return A.abrupt(
                  'return',
                  new Promise(function (A) {
                    return setTimeout(A, e);
                  })
                );
              case 1:
              case 'end':
                return A.stop();
            }
        }, A);
      })
    )).apply(this, arguments);
  }
  function Be(A, e) {
    var t = Array.isArray(A) ? A : Array.from(A),
      r = Array.isArray(e) ? e : Array.from(e);
    return t.map(function (A, e) {
      return [A, r[e]];
    });
  }
  var ce = (function (A) {
      c(t, A);
      var e = ne(t);
      function t(A) {
        var r;
        return d(this, t), (r = e.call(this, A)), Error.captureStackTrace && Error.captureStackTrace(C(r), t), (r.name = 'AbortError'), r;
      }
      return t;
    })(h(Error)),
    fe = (function (A) {
      c(t, A);
      var e = ne(t);
      function t(A, r) {
        var n;
        return d(this, t), ((n = e.call(this, r)).errors = A), (n.message = r), (n.name = 'AggregateError'), n;
      }
      return t;
    })(h(Error));
  function Ce(A, e) {
    var t = ('undefined' != typeof Symbol && A[Symbol.iterator]) || A['@@iterator'];
    if (!t) {
      if (
        Array.isArray(A) ||
        (t = (function (A, e) {
          if (!A) return;
          if ('string' == typeof A) return ue(A, e);
          var t = Object.prototype.toString.call(A).slice(8, -1);
          'Object' === t && A.constructor && (t = A.constructor.name);
          if ('Map' === t || 'Set' === t) return Array.from(A);
          if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ue(A, e);
        })(A)) ||
        (e && A && 'number' == typeof A.length)
      ) {
        t && (A = t);
        var r = 0,
          n = function () {};
        return {
          s: n,
          n: function () {
            return r >= A.length ? { done: !0 } : { done: !1, value: A[r++] };
          },
          e: function (A) {
            throw A;
          },
          f: n
        };
      }
      throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var i,
      a = !0,
      o = !1;
    return {
      s: function () {
        t = t.call(A);
      },
      n: function () {
        var A = t.next();
        return (a = A.done), A;
      },
      e: function (A) {
        (o = !0), (i = A);
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (o) throw i;
        }
      }
    };
  }
  function ue(A, e) {
    (null == e || e > A.length) && (e = A.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
    return r;
  }
  function Qe(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var Ee = (function () {
      function A(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        d(this, A), (this.offset = e), (this.length = t), (this.data = r);
      }
      return (
        s(A, [
          {
            key: 'top',
            get: function () {
              return this.offset + this.length;
            }
          }
        ]),
        A
      );
    })(),
    le = function A(e, t, r) {
      d(this, A), (this.offset = e), (this.length = t), (this.blockIds = r);
    },
    he = (function (A) {
      c(r, A);
      var e,
        t = Qe(r);
      function r(A) {
        var e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = n.blockSize,
          a = void 0 === i ? 65536 : i,
          o = n.cacheSize,
          g = void 0 === o ? 100 : o;
        return (
          d(this, r),
          ((e = t.call(this)).source = A),
          (e.blockSize = a),
          (e.blockCache = new re({
            maxSize: g,
            onEviction: function (A, t) {
              e.evictedBlocks.set(A, t);
            }
          })),
          (e.evictedBlocks = new Map()),
          (e.blockRequests = new Map()),
          (e.blockIdsToFetch = new Set()),
          (e.abortedBlockIds = new Set()),
          e
        );
      }
      return (
        s(r, [
          {
            key: 'fileSize',
            get: function () {
              return this.source.fileSize;
            }
          },
          {
            key: 'fetch',
            value:
              ((e = g(
                y.mark(function A(e, t) {
                  var r,
                    n,
                    i,
                    a,
                    o,
                    g,
                    I,
                    s,
                    B,
                    c,
                    f,
                    C,
                    u,
                    Q,
                    E,
                    l,
                    h,
                    d,
                    w,
                    p,
                    D,
                    k,
                    m,
                    v,
                    b,
                    G,
                    S = this;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            (r = []), (n = []), (i = []), this.evictedBlocks.clear(), (a = Ce(e));
                            try {
                              for (a.s(); !(o = a.n()).done; )
                                for (g = o.value, I = g.offset, s = g.length, B = I + s, null !== (c = this.fileSize) && (B = Math.min(B, c)), f = Math.floor(I / this.blockSize) * this.blockSize, C = f; C < B; C += this.blockSize)
                                  (u = Math.floor(C / this.blockSize)), this.blockCache.has(u) || this.blockRequests.has(u) || (this.blockIdsToFetch.add(u), n.push(u)), this.blockRequests.has(u) && r.push(this.blockRequests.get(u)), i.push(u);
                            } catch (A) {
                              a.e(A);
                            } finally {
                              a.f();
                            }
                            return (A.next = 8), Ie();
                          case 8:
                            for (this.fetchBlocks(t), Q = [], E = 0, l = n; E < l.length; E++) (h = l[E]), this.blockRequests.has(h) && Q.push(this.blockRequests.get(h));
                            return (A.next = 13), Promise.allSettled(r);
                          case 13:
                            return (A.next = 15), Promise.allSettled(Q);
                          case 15:
                            if (
                              ((d = []),
                              (w = i.filter(function (A) {
                                return S.abortedBlockIds.has(A) || !S.blockCache.has(A);
                              })).forEach(function (A) {
                                return S.blockIdsToFetch.add(A);
                              }),
                              !(w.length > 0 && t) || t.aborted)
                            ) {
                              A.next = 41;
                              break;
                            }
                            this.fetchBlocks(null), (p = Ce(w)), (A.prev = 21), p.s();
                          case 23:
                            if ((D = p.n()).done) {
                              A.next = 31;
                              break;
                            }
                            if (((k = D.value), (m = this.blockRequests.get(k)))) {
                              A.next = 28;
                              break;
                            }
                            throw new Error('Block '.concat(k, ' is not in the block requests'));
                          case 28:
                            d.push(m);
                          case 29:
                            A.next = 23;
                            break;
                          case 31:
                            A.next = 36;
                            break;
                          case 33:
                            (A.prev = 33), (A.t0 = A.catch(21)), p.e(A.t0);
                          case 36:
                            return (A.prev = 36), p.f(), A.finish(36);
                          case 39:
                            return (A.next = 41), Promise.allSettled(d);
                          case 41:
                            if (!t || !t.aborted) {
                              A.next = 43;
                              break;
                            }
                            throw new ce('Request was aborted');
                          case 43:
                            if (
                              ((v = i.map(function (A) {
                                return S.blockCache.get(A) || S.evictedBlocks.get(A);
                              })),
                              (b = v.filter(function (A) {
                                return !A;
                              })),
                              !b.length)
                            ) {
                              A.next = 47;
                              break;
                            }
                            throw new fe(b, 'Request failed');
                          case 47:
                            return (G = new Map(Be(i, v))), A.abrupt('return', this.readSliceData(e, G));
                          case 49:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this,
                    [[21, 33, 36, 39]]
                  );
                })
              )),
              function (A, t) {
                return e.apply(this, arguments);
              })
          },
          {
            key: 'fetchBlocks',
            value: function (A) {
              var e = this;
              this.blockIdsToFetch.size > 0 &&
                (function () {
                  for (
                    var t = e.groupBlocks(e.blockIdsToFetch),
                      r = e.source.fetch(t, A),
                      n = function (n) {
                        var i,
                          a = Ce(t[n].blockIds);
                        try {
                          var o = function () {
                            var t = i.value;
                            e.blockRequests.set(
                              t,
                              g(
                                y.mark(function i() {
                                  var a, o, g, I, s, B;
                                  return y.wrap(
                                    function (i) {
                                      for (;;)
                                        switch ((i.prev = i.next)) {
                                          case 0:
                                            return (i.prev = 0), (i.next = 3), r;
                                          case 3:
                                            (i.t0 = n),
                                              (a = i.sent[i.t0]),
                                              (o = t * e.blockSize),
                                              (g = o - a.offset),
                                              (I = Math.min(g + e.blockSize, a.data.byteLength)),
                                              (s = a.data.slice(g, I)),
                                              (B = new Ee(o, s.byteLength, s, t)),
                                              e.blockCache.set(t, B),
                                              e.abortedBlockIds.delete(t),
                                              (i.next = 23);
                                            break;
                                          case 14:
                                            if (((i.prev = 14), (i.t1 = i.catch(0)), 'AbortError' !== i.t1.name)) {
                                              i.next = 22;
                                              break;
                                            }
                                            (i.t1.signal = A), e.blockCache.delete(t), e.abortedBlockIds.add(t), (i.next = 23);
                                            break;
                                          case 22:
                                            throw i.t1;
                                          case 23:
                                            return (i.prev = 23), e.blockRequests.delete(t), i.finish(23);
                                          case 26:
                                          case 'end':
                                            return i.stop();
                                        }
                                    },
                                    i,
                                    null,
                                    [[0, 14, 23, 26]]
                                  );
                                })
                              )()
                            );
                          };
                          for (a.s(); !(i = a.n()).done; ) o();
                        } catch (A) {
                          a.e(A);
                        } finally {
                          a.f();
                        }
                      },
                      i = 0;
                    i < t.length;
                    ++i
                  )
                    n(i);
                  e.blockIdsToFetch.clear();
                })();
            }
          },
          {
            key: 'groupBlocks',
            value: function (A) {
              var e = Array.from(A).sort(function (A, e) {
                return A - e;
              });
              if (0 === e.length) return [];
              var t,
                r = [],
                n = null,
                i = [],
                a = Ce(e);
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var o = t.value;
                  null === n || n + 1 === o ? (r.push(o), (n = o)) : (i.push(new le(r[0] * this.blockSize, r.length * this.blockSize, r)), (r = [o]), (n = o));
                }
              } catch (A) {
                a.e(A);
              } finally {
                a.f();
              }
              return i.push(new le(r[0] * this.blockSize, r.length * this.blockSize, r)), i;
            }
          },
          {
            key: 'readSliceData',
            value: function (A, e) {
              var t = this;
              return A.map(function (A) {
                var r = A.offset + A.length;
                null !== t.fileSize && (r = Math.min(t.fileSize, r));
                for (var n = Math.floor(A.offset / t.blockSize), i = Math.floor(r / t.blockSize), a = new ArrayBuffer(A.length), o = new Uint8Array(a), g = n; g <= i; ++g) {
                  var I = e.get(g),
                    s = I.offset - A.offset,
                    B = 0,
                    c = 0,
                    f = void 0;
                  s < 0 ? (B = -s) : s > 0 && (c = s), (f = I.top - r < 0 ? I.length - B : r - I.offset - B);
                  var C = new Uint8Array(I.data, B, f);
                  o.set(C, c);
                }
                return a;
              });
            }
          }
        ]),
        r
      );
    })($A),
    de = (function () {
      function A() {
        d(this, A);
      }
      var e;
      return (
        s(A, [
          {
            key: 'ok',
            get: function () {
              return this.status >= 200 && this.status <= 299;
            }
          },
          {
            key: 'status',
            get: function () {
              throw new Error('not implemented');
            }
          },
          {
            key: 'getHeader',
            value: function (A) {
              throw new Error('not implemented');
            }
          },
          {
            key: 'getData',
            value:
              ((e = g(
                y.mark(function A() {
                  return y.wrap(function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          throw new Error('not implemented');
                        case 1:
                        case 'end':
                          return A.stop();
                      }
                  }, A);
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        A
      );
    })(),
    we = (function () {
      function A(e) {
        d(this, A), (this.url = e);
      }
      var e;
      return (
        s(A, [
          {
            key: 'request',
            value:
              ((e = g(
                y.mark(function A() {
                  return y.wrap(function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          throw new Error('request is not implemented');
                        case 2:
                        case 'end':
                          return A.stop();
                      }
                  }, A);
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        A
      );
    })();
  function ye(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var pe = (function (A) {
      c(r, A);
      var e,
        t = ye(r);
      function r(A) {
        var e;
        return d(this, r), ((e = t.call(this)).response = A), e;
      }
      return (
        s(r, [
          {
            key: 'status',
            get: function () {
              return this.response.status;
            }
          },
          {
            key: 'getHeader',
            value: function (A) {
              return this.response.headers.get(A);
            }
          },
          {
            key: 'getData',
            value:
              ((e = g(
                y.mark(function A() {
                  var e;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            if (!this.response.arrayBuffer) {
                              A.next = 6;
                              break;
                            }
                            return (A.next = 3), this.response.arrayBuffer();
                          case 3:
                            (A.t0 = A.sent), (A.next = 9);
                            break;
                          case 6:
                            return (A.next = 8), this.response.buffer();
                          case 8:
                            A.t0 = A.sent.buffer;
                          case 9:
                            return (e = A.t0), A.abrupt('return', e);
                          case 11:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        r
      );
    })(de),
    De = (function (A) {
      c(r, A);
      var e,
        t = ye(r);
      function r(A, e) {
        var n;
        return d(this, r), ((n = t.call(this, A)).credentials = e), n;
      }
      return (
        s(r, [
          {
            key: 'request',
            value:
              ((e = g(
                y.mark(function A() {
                  var e,
                    t,
                    r,
                    n,
                    i = arguments;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (e = i.length > 0 && void 0 !== i[0] ? i[0] : {}), (t = e.headers), (r = e.signal), (A.next = 3), fetch(this.url, { headers: t, credentials: this.credentials, signal: r });
                          case 3:
                            return (n = A.sent), A.abrupt('return', new pe(n));
                          case 5:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        r
      );
    })(we);
  function ke(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var me = (function (A) {
      c(r, A);
      var e,
        t = ke(r);
      function r(A, e) {
        var n;
        return d(this, r), ((n = t.call(this)).xhr = A), (n.data = e), n;
      }
      return (
        s(r, [
          {
            key: 'status',
            get: function () {
              return this.xhr.status;
            }
          },
          {
            key: 'getHeader',
            value: function (A) {
              return this.xhr.getResponseHeader(A);
            }
          },
          {
            key: 'getData',
            value:
              ((e = g(
                y.mark(function A() {
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return A.abrupt('return', this.data);
                          case 1:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        r
      );
    })(de),
    ve = (function (A) {
      c(r, A);
      var e,
        t = ke(r);
      function r() {
        return d(this, r), t.apply(this, arguments);
      }
      return (
        s(r, [
          {
            key: 'constructRequest',
            value: function (A, e) {
              var t = this;
              return new Promise(function (r, n) {
                var i = new XMLHttpRequest();
                i.open('GET', t.url), (i.responseType = 'arraybuffer');
                for (var o = 0, g = Object.entries(A); o < g.length; o++) {
                  var I = a(g[o], 2),
                    s = I[0],
                    B = I[1];
                  i.setRequestHeader(s, B);
                }
                (i.onload = function () {
                  var A = i.response;
                  r(new me(i, A));
                }),
                  (i.onerror = n),
                  (i.onabort = function () {
                    return n(new ce('Request aborted'));
                  }),
                  i.send(),
                  e &&
                    (e.aborted && i.abort(),
                    e.addEventListener('abort', function () {
                      return i.abort();
                    }));
              });
            }
          },
          {
            key: 'request',
            value:
              ((e = g(
                y.mark(function A() {
                  var e,
                    t,
                    r,
                    n,
                    i = arguments;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (e = i.length > 0 && void 0 !== i[0] ? i[0] : {}), (t = e.headers), (r = e.signal), (A.next = 3), this.constructRequest(t, r);
                          case 3:
                            return (n = A.sent), A.abrupt('return', n);
                          case 5:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        r
      );
    })(we),
    be = {};
  function Ge(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(A);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(A, e).enumerable;
        })),
        t.push.apply(t, r);
    }
    return t;
  }
  function Se(A) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Ge(Object(r), !0).forEach(function (t) {
            e(A, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(r))
        : Ge(Object(r)).forEach(function (e) {
            Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return A;
  }
  function Fe(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var Re = (function (A) {
      c(r, A);
      var e,
        t = Fe(r);
      function r(A, e) {
        var n;
        return d(this, r), ((n = t.call(this)).response = A), (n.dataPromise = e), n;
      }
      return (
        s(r, [
          {
            key: 'status',
            get: function () {
              return this.response.statusCode;
            }
          },
          {
            key: 'getHeader',
            value: function (A) {
              return this.response.headers[A];
            }
          },
          {
            key: 'getData',
            value:
              ((e = g(
                y.mark(function A() {
                  var e;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (A.next = 2), this.dataPromise;
                          case 2:
                            return (e = A.sent), A.abrupt('return', e);
                          case 4:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        r
      );
    })(de),
    xe = (function (A) {
      c(r, A);
      var e,
        t = Fe(r);
      function r(A) {
        var e;
        return d(this, r), ((e = t.call(this, A)).parsedUrl = be.parse(e.url)), (e.httpApi = (e.parsedUrl.protocol, be)), e;
      }
      return (
        s(r, [
          {
            key: 'constructRequest',
            value: function (A, e) {
              var t = this;
              return new Promise(function (r, n) {
                var i = t.httpApi.get(Se(Se({}, t.parsedUrl), {}, { headers: A }), function (A) {
                  var e = new Promise(function (e) {
                    var t = [];
                    A.on('data', function (A) {
                      t.push(A);
                    }),
                      A.on('end', function () {
                        var A = Buffer.concat(t).buffer;
                        e(A);
                      }),
                      A.on('error', n);
                  });
                  r(new Re(A, e));
                });
                i.on('error', n),
                  e &&
                    (e.aborted && i.destroy(new ce('Request aborted')),
                    e.addEventListener('abort', function () {
                      return i.destroy(new ce('Request aborted'));
                    }));
              });
            }
          },
          {
            key: 'request',
            value:
              ((e = g(
                y.mark(function A() {
                  var e,
                    t,
                    r,
                    n,
                    i = arguments;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (e = i.length > 0 && void 0 !== i[0] ? i[0] : {}), (t = e.headers), (r = e.signal), (A.next = 3), this.constructRequest(t, r);
                          case 3:
                            return (n = A.sent), A.abrupt('return', n);
                          case 5:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        r
      );
    })(we),
    Ue = ['headers', 'credentials', 'maxRanges', 'allowFullFile'],
    Le = ['headers', 'maxRanges', 'allowFullFile'],
    Me = ['headers', 'maxRanges', 'allowFullFile'],
    Ne = ['headers', 'maxRanges', 'allowFullFile'],
    qe = ['forceXHR'];
  function Je(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(A);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(A, e).enumerable;
        })),
        t.push.apply(t, r);
    }
    return t;
  }
  function Oe(A) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Je(Object(r), !0).forEach(function (t) {
            e(A, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(r))
        : Je(Object(r)).forEach(function (e) {
            Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return A;
  }
  function Ye(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var He = (function (A) {
    c(i, A);
    var e,
      t,
      r,
      n = Ye(i);
    function i(A, e, t, r) {
      var a;
      return d(this, i), ((a = n.call(this)).client = A), (a.headers = e), (a.maxRanges = t), (a.allowFullFile = r), (a._fileSize = null), a;
    }
    return (
      s(i, [
        {
          key: 'fetch',
          value:
            ((r = g(
              y.mark(function A(e, t) {
                var r = this;
                return y.wrap(
                  function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          if (!(this.maxRanges >= e.length)) {
                            A.next = 4;
                            break;
                          }
                          return A.abrupt('return', this.fetchSlices(e, t));
                        case 4:
                          this.maxRanges > 0 && e.length;
                        case 5:
                          return A.abrupt(
                            'return',
                            Promise.all(
                              e.map(function (A) {
                                return r.fetchSlice(A, t);
                              })
                            )
                          );
                        case 6:
                        case 'end':
                          return A.stop();
                      }
                  },
                  A,
                  this
                );
              })
            )),
            function (A, e) {
              return r.apply(this, arguments);
            })
        },
        {
          key: 'fetchSlices',
          value:
            ((t = g(
              y.mark(function A(e, t) {
                var r,
                  n,
                  i,
                  a,
                  o,
                  g,
                  I,
                  s,
                  B,
                  c,
                  f,
                  C,
                  u,
                  Q = this;
                return y.wrap(
                  function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          return (
                            (A.next = 2),
                            this.client.request({
                              headers: Oe(
                                Oe({}, this.headers),
                                {},
                                {
                                  Range: 'bytes='.concat(
                                    e
                                      .map(function (A) {
                                        var e = A.offset,
                                          t = A.length;
                                        return ''.concat(e, '-').concat(e + t);
                                      })
                                      .join(',')
                                  )
                                }
                              ),
                              signal: t
                            })
                          );
                        case 2:
                          if ((r = A.sent).ok) {
                            A.next = 7;
                            break;
                          }
                          throw new Error('Error fetching data.');
                        case 7:
                          if (206 !== r.status) {
                            A.next = 32;
                            break;
                          }
                          if (((n = WA(r.getHeader('content-type'))), (i = n.type), (a = n.params), 'multipart/byteranges' !== i)) {
                            A.next = 18;
                            break;
                          }
                          return (A.t0 = zA), (A.next = 13), r.getData();
                        case 13:
                          return (A.t1 = A.sent), (A.t2 = a.boundary), (o = (0, A.t0)(A.t1, A.t2)), (this._fileSize = o[0].fileSize || null), A.abrupt('return', o);
                        case 18:
                          return (A.next = 20), r.getData();
                        case 20:
                          if (((g = A.sent), (I = ZA(r.getHeader('content-range'))), (s = I.start), (B = I.end), (c = I.total), (this._fileSize = c || null), (f = [{ data: g, offset: s, length: B - s }]), !(e.length > 1))) {
                            A.next = 29;
                            break;
                          }
                          return (
                            (A.next = 27),
                            Promise.all(
                              e.slice(1).map(function (A) {
                                return Q.fetchSlice(A, t);
                              })
                            )
                          );
                        case 27:
                          return (C = A.sent), A.abrupt('return', f.concat(C));
                        case 29:
                          return A.abrupt('return', f);
                        case 32:
                          if (this.allowFullFile) {
                            A.next = 34;
                            break;
                          }
                          throw new Error('Server responded with full file');
                        case 34:
                          return (A.next = 36), r.getData();
                        case 36:
                          return (u = A.sent), (this._fileSize = u.byteLength), A.abrupt('return', [{ data: u, offset: 0, length: u.byteLength }]);
                        case 39:
                        case 'end':
                          return A.stop();
                      }
                  },
                  A,
                  this
                );
              })
            )),
            function (A, e) {
              return t.apply(this, arguments);
            })
        },
        {
          key: 'fetchSlice',
          value:
            ((e = g(
              y.mark(function A(e, t) {
                var r, n, i, a, o, g, I;
                return y.wrap(
                  function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          return (r = e.offset), (n = e.length), (A.next = 3), this.client.request({ headers: Oe(Oe({}, this.headers), {}, { Range: 'bytes='.concat(r, '-').concat(r + n) }), signal: t });
                        case 3:
                          if ((i = A.sent).ok) {
                            A.next = 8;
                            break;
                          }
                          throw new Error('Error fetching data.');
                        case 8:
                          if (206 !== i.status) {
                            A.next = 17;
                            break;
                          }
                          return (A.next = 11), i.getData();
                        case 11:
                          return (a = A.sent), (o = ZA(i.getHeader('content-range'))), (g = o.total), (this._fileSize = g || null), A.abrupt('return', { data: a, offset: r, length: n });
                        case 17:
                          if (this.allowFullFile) {
                            A.next = 19;
                            break;
                          }
                          throw new Error('Server responded with full file');
                        case 19:
                          return (A.next = 21), i.getData();
                        case 21:
                          return (I = A.sent), (this._fileSize = I.byteLength), A.abrupt('return', { data: I, offset: 0, length: I.byteLength });
                        case 24:
                        case 'end':
                          return A.stop();
                      }
                  },
                  A,
                  this
                );
              })
            )),
            function (A, t) {
              return e.apply(this, arguments);
            })
        },
        {
          key: 'fileSize',
          get: function () {
            return this._fileSize;
          }
        }
      ]),
      i
    );
  })($A);
  function Pe(A, e) {
    var t = e.blockSize,
      r = e.cacheSize;
    return null === t ? A : new he(A, { blockSize: t, cacheSize: r });
  }
  function Ke(A) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = e.headers,
      r = void 0 === t ? {} : t,
      n = e.credentials,
      i = e.maxRanges,
      a = void 0 === i ? 0 : i,
      o = e.allowFullFile,
      g = void 0 !== o && o,
      I = KA(e, Ue),
      s = new De(A, n),
      B = new He(s, r, a, g);
    return Pe(B, I);
  }
  function Te(A) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = e.headers,
      r = void 0 === t ? {} : t,
      n = e.maxRanges,
      i = void 0 === n ? 0 : n,
      a = e.allowFullFile,
      o = void 0 !== a && a,
      g = KA(e, Le),
      I = new ve(A),
      s = new He(I, r, i, o);
    return Pe(s, g);
  }
  function Ve(A) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = e.headers,
      r = void 0 === t ? {} : t,
      n = e.maxRanges,
      i = void 0 === n ? 0 : n,
      a = e.allowFullFile,
      o = void 0 !== a && a,
      g = KA(e, Me),
      I = new xe(A),
      s = new He(I, r, i, o);
    return Pe(s, g);
  }
  function _e(A) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = e.headers,
      r = void 0 === t ? {} : t,
      n = e.maxRanges,
      i = void 0 === n ? 0 : n,
      a = e.allowFullFile,
      o = void 0 !== a && a,
      g = KA(e, Ne),
      I = new He(A, r, i, o);
    return Pe(I, g);
  }
  function je(A) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = e.forceXHR,
      r = void 0 !== t && t,
      n = KA(e, qe);
    return 'function' != typeof fetch || r ? ('undefined' != typeof XMLHttpRequest ? Te(A, n) : Ve(A, n)) : Ke(A, n);
  }
  function Xe(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var We = (function (A) {
    c(t, A);
    var e = Xe(t);
    function t(A) {
      var r;
      return d(this, t), ((r = e.call(this)).arrayBuffer = A), r;
    }
    return (
      s(t, [
        {
          key: 'fetchSlice',
          value: function (A, e) {
            if (e && e.aborted) throw new ce('Request aborted');
            return this.arrayBuffer.slice(A.offset, A.offset + A.length);
          }
        }
      ]),
      t
    );
  })($A);
  function Ze(A) {
    return new We(A);
  }
  function ze(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var $e = (function (A) {
    c(r, A);
    var e,
      t = ze(r);
    function r(A) {
      var e;
      return d(this, r), ((e = t.call(this)).file = A), e;
    }
    return (
      s(r, [
        {
          key: 'fetchSlice',
          value:
            ((e = g(
              y.mark(function A(e, t) {
                var r = this;
                return y.wrap(function (A) {
                  for (;;)
                    switch ((A.prev = A.next)) {
                      case 0:
                        return A.abrupt(
                          'return',
                          new Promise(function (A, n) {
                            var i = r.file.slice(e.offset, e.offset + e.length),
                              a = new FileReader();
                            (a.onload = function (e) {
                              return A(e.target.result);
                            }),
                              (a.onerror = n),
                              (a.onabort = n),
                              a.readAsArrayBuffer(i),
                              t &&
                                t.addEventListener('abort', function () {
                                  return a.abort();
                                });
                          })
                        );
                      case 1:
                      case 'end':
                        return A.stop();
                    }
                }, A);
              })
            )),
            function (A, t) {
              return e.apply(this, arguments);
            })
        }
      ]),
      r
    );
  })($A);
  function At(A) {
    return new $e(A);
  }
  function et(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  function tt(A) {
    return new Promise(function (e, t) {
      be.close(A, function (A) {
        A ? t(A) : e();
      });
    });
  }
  function rt() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return new Promise(function (A, t) {
      be.read.apply(
        be,
        e.concat([
          function (e, r, n) {
            e ? t(e) : A({ bytesRead: r, buffer: n });
          }
        ])
      );
    });
  }
  var nt = (function (A) {
    c(n, A);
    var e,
      t,
      r = et(n);
    function n(A) {
      var e;
      return (
        d(this, n),
        ((e = r.call(this)).path = A),
        (e.openRequest = (function (A, e) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          return new Promise(function (r, n) {
            be.open(A, e, t, function (A, e) {
              A ? n(A) : r(e);
            });
          });
        })(A, 'r')),
        e
      );
    }
    return (
      s(n, [
        {
          key: 'fetchSlice',
          value:
            ((t = g(
              y.mark(function A(e) {
                var t, r, n;
                return y.wrap(
                  function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          return (A.next = 2), this.openRequest;
                        case 2:
                          return (t = A.sent), (A.next = 5), rt(t, Buffer.alloc(e.length), 0, e.length, e.offset);
                        case 5:
                          return (r = A.sent), (n = r.buffer), A.abrupt('return', n.buffer);
                        case 8:
                        case 'end':
                          return A.stop();
                      }
                  },
                  A,
                  this
                );
              })
            )),
            function (A) {
              return t.apply(this, arguments);
            })
        },
        {
          key: 'close',
          value:
            ((e = g(
              y.mark(function A() {
                var e;
                return y.wrap(
                  function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          return (A.next = 2), this.openRequest;
                        case 2:
                          return (e = A.sent), (A.next = 5), tt(e);
                        case 5:
                        case 'end':
                          return A.stop();
                      }
                  },
                  A,
                  this
                );
              })
            )),
            function () {
              return e.apply(this, arguments);
            })
        }
      ]),
      n
    );
  })($A);
  function it(A) {
    return new nt(A);
  }
  function at(A, e) {
    var t = ('undefined' != typeof Symbol && A[Symbol.iterator]) || A['@@iterator'];
    if (!t) {
      if (
        Array.isArray(A) ||
        (t = (function (A, e) {
          if (!A) return;
          if ('string' == typeof A) return ot(A, e);
          var t = Object.prototype.toString.call(A).slice(8, -1);
          'Object' === t && A.constructor && (t = A.constructor.name);
          if ('Map' === t || 'Set' === t) return Array.from(A);
          if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ot(A, e);
        })(A)) ||
        (e && A && 'number' == typeof A.length)
      ) {
        t && (A = t);
        var r = 0,
          n = function () {};
        return {
          s: n,
          n: function () {
            return r >= A.length ? { done: !0 } : { done: !1, value: A[r++] };
          },
          e: function (A) {
            throw A;
          },
          f: n
        };
      }
      throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var i,
      a = !0,
      o = !1;
    return {
      s: function () {
        t = t.call(A);
      },
      n: function () {
        var A = t.next();
        return (a = A.done), A;
      },
      e: function (A) {
        (o = !0), (i = A);
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (o) throw i;
        }
      }
    };
  }
  function ot(A, e) {
    (null == e || e > A.length) && (e = A.length);
    for (var t = 0, r = new Array(e); t < e; t++) r[t] = A[t];
    return r;
  }
  var gt = oe(z),
    It = oe(sA),
    st = {};
  ie(st, gt), ie(st, It);
  var Bt = oe(rA),
    ct = 1e3,
    ft = {
      nextZero: function (A, e) {
        for (var t = e; 0 !== A[t]; ) t++;
        return t;
      },
      readUshort: function (A, e) {
        return (A[e] << 8) | A[e + 1];
      },
      readShort: function (A, e) {
        var t = ft.ui8;
        return (t[0] = A[e + 1]), (t[1] = A[e + 0]), ft.i16[0];
      },
      readInt: function (A, e) {
        var t = ft.ui8;
        return (t[0] = A[e + 3]), (t[1] = A[e + 2]), (t[2] = A[e + 1]), (t[3] = A[e + 0]), ft.i32[0];
      },
      readUint: function (A, e) {
        var t = ft.ui8;
        return (t[0] = A[e + 3]), (t[1] = A[e + 2]), (t[2] = A[e + 1]), (t[3] = A[e + 0]), ft.ui32[0];
      },
      readASCII: function (A, e, t) {
        return t
          .map(function (t) {
            return String.fromCharCode(A[e + t]);
          })
          .join('');
      },
      readFloat: function (A, e) {
        var t = ft.ui8;
        return (
          ge(4, function (r) {
            t[r] = A[e + 3 - r];
          }),
          ft.fl32[0]
        );
      },
      readDouble: function (A, e) {
        var t = ft.ui8;
        return (
          ge(8, function (r) {
            t[r] = A[e + 7 - r];
          }),
          ft.fl64[0]
        );
      },
      writeUshort: function (A, e, t) {
        (A[e] = (t >> 8) & 255), (A[e + 1] = 255 & t);
      },
      writeUint: function (A, e, t) {
        (A[e] = (t >> 24) & 255), (A[e + 1] = (t >> 16) & 255), (A[e + 2] = (t >> 8) & 255), (A[e + 3] = (t >> 0) & 255);
      },
      writeASCII: function (A, e, t) {
        ge(t.length, function (r) {
          A[e + r] = t.charCodeAt(r);
        });
      },
      ui8: new Uint8Array(8)
    };
  (ft.fl64 = new Float64Array(ft.ui8.buffer)),
    (ft.writeDouble = function (A, e, t) {
      (ft.fl64[0] = t),
        ge(8, function (t) {
          A[e + t] = ft.ui8[7 - t];
        });
    });
  var Ct = function (A) {
      var e = new Uint8Array(ct),
        t = 4,
        r = ft;
      (e[0] = 77), (e[1] = 77), (e[3] = 42);
      var n = 8;
      if (
        (r.writeUint(e, t, n),
        (t += 4),
        A.forEach(function (t, i) {
          var a = (function (A, e, t, r) {
            var n = t,
              i = Object.keys(r).filter(function (A) {
                return null != A && 'undefined' !== A;
              });
            A.writeUshort(e, n, i.length);
            var a,
              o = (n += 2) + 12 * i.length + 4,
              g = at(i);
            try {
              var I = function () {
                var t = a.value,
                  i = null;
                'number' == typeof t ? (i = t) : 'string' == typeof t && (i = parseInt(t, 10));
                var g = eA[i],
                  I = Bt[g];
                if (null == g || void 0 === g || void 0 === g) throw new Error('unknown type of tag: '.concat(i));
                var s = r[t];
                if (void 0 === s) throw new Error('failed to get value for key '.concat(t));
                'ASCII' === g && 'string' == typeof s && !1 === ae(s, '\0') && (s += '\0');
                var B = s.length;
                A.writeUshort(e, n, i), (n += 2), A.writeUshort(e, n, I), (n += 2), A.writeUint(e, n, B);
                var c = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][I] * B,
                  f = (n += 4);
                c > 4 && (A.writeUint(e, n, o), (f = o)),
                  'ASCII' === g
                    ? A.writeASCII(e, f, s)
                    : 'SHORT' === g
                    ? ge(B, function (t) {
                        A.writeUshort(e, f + 2 * t, s[t]);
                      })
                    : 'LONG' === g
                    ? ge(B, function (t) {
                        A.writeUint(e, f + 4 * t, s[t]);
                      })
                    : 'RATIONAL' === g
                    ? ge(B, function (t) {
                        A.writeUint(e, f + 8 * t, Math.round(1e4 * s[t])), A.writeUint(e, f + 8 * t + 4, 1e4);
                      })
                    : 'DOUBLE' === g &&
                      ge(B, function (t) {
                        A.writeDouble(e, f + 8 * t, s[t]);
                      }),
                  c > 4 && (o += c += 1 & c),
                  (n += 4);
              };
              for (g.s(); !(a = g.n()).done; ) I();
            } catch (A) {
              g.e(A);
            } finally {
              g.f();
            }
            return [n, o];
          })(r, e, n, t);
          (n = a[1]), i < A.length - 1 && r.writeUint(e, a[0], n);
        }),
        e.slice)
      )
        return e.slice(0, n).buffer;
      for (var i = new Uint8Array(n), a = 0; a < n; a++) i[a] = e[a];
      return i.buffer;
    },
    ut = [
      ['Compression', 1],
      ['PlanarConfiguration', 1],
      ['ExtraSamples', 0]
    ];
  function Qt(A, e) {
    var t, r, n, i;
    'number' == typeof A[0]
      ? ((t = e.height || e.ImageLength), (n = e.width || e.ImageWidth), (r = A.length / (t * n)), (i = A))
      : ((r = A.length),
        (t = A[0].length),
        (n = A[0][0].length),
        (i = []),
        ge(t, function (e) {
          ge(n, function (t) {
            ge(r, function (r) {
              i.push(A[r][e][t]);
            });
          });
        })),
      (e.ImageLength = t),
      delete e.height,
      (e.ImageWidth = n),
      delete e.width,
      e.BitsPerSample ||
        (e.BitsPerSample = ge(r, function () {
          return 8;
        })),
      ut.forEach(function (A) {
        var t = A[0];
        if (!e[t]) {
          var r = A[1];
          e[t] = r;
        }
      }),
      e.PhotometricInterpretation || (e.PhotometricInterpretation = 3 === e.BitsPerSample.length ? 2 : 1),
      e.SamplesPerPixel || (e.SamplesPerPixel = [r]),
      e.StripByteCounts || (e.StripByteCounts = [r * t * n]),
      e.ModelPixelScale || (e.ModelPixelScale = [360 / n, 180 / t, 0]),
      e.SampleFormat ||
        (e.SampleFormat = ge(r, function () {
          return 1;
        })),
      e.hasOwnProperty('GeographicTypeGeoKey') || e.hasOwnProperty('ProjectedCSTypeGeoKey') || ((e.GeographicTypeGeoKey = 4326), (e.ModelTiepoint = [0, 0, 0, -180, 90, 0]), (e.GeogCitationGeoKey = 'WGS 84'), (e.GTModelTypeGeoKey = 2));
    var a = Object.keys(e)
      .filter(function (A) {
        return ae(A, 'GeoKey');
      })
      .sort(function (A, e) {
        return st[A] - st[e];
      });
    if (!e.GeoAsciiParams) {
      var o = '';
      a.forEach(function (A) {
        var t = Number(st[A]);
        'ASCII' === eA[t] && (o += ''.concat(e[A].toString(), '\0'));
      }),
        o.length > 0 && (e.GeoAsciiParams = o);
    }
    if (!e.GeoKeyDirectory) {
      var g = [1, 1, 0, a.length];
      a.forEach(function (A) {
        var t,
          r,
          n,
          i = Number(st[A]);
        g.push(i), 'SHORT' === eA[i] ? ((t = 1), (r = 0), (n = e[A])) : 'GeogCitationGeoKey' === A ? ((t = e.GeoAsciiParams.length), (r = Number(st.GeoAsciiParams)), (n = 0)) : console.log("[geotiff.js] couldn't get TIFFTagLocation for ".concat(A)), g.push(r), g.push(t), g.push(n);
      }),
        (e.GeoKeyDirectory = g);
    }
    var I,
      s = at(a);
    try {
      for (s.s(); !(I = s.n()).done; ) {
        var B = I.value;
        e.hasOwnProperty(B) && delete e[B];
      }
    } catch (A) {
      s.e(A);
    } finally {
      s.f();
    }
    [
      'Compression',
      'ExtraSamples',
      'GeographicTypeGeoKey',
      'GTModelTypeGeoKey',
      'GTRasterTypeGeoKey',
      'ImageLength',
      'ImageWidth',
      'Orientation',
      'PhotometricInterpretation',
      'ProjectedCSTypeGeoKey',
      'PlanarConfiguration',
      'ResolutionUnit',
      'SamplesPerPixel',
      'XPosition',
      'YPosition',
      'RowsPerStrip'
    ].forEach(function (A) {
      var t;
      e[A] && (e[A] = ((t = e[A]), Array.isArray(t) ? t : [t]));
    });
    var c = (function (A) {
        var e = {};
        for (var t in A) 'StripOffsets' !== t && (st[t] || console.error(t, 'not in name2code:', Object.keys(st)), (e[st[t]] = A[t]));
        return e;
      })(e),
      f = (function (A, e, t, r) {
        if (null == t) throw new Error('you passed into encodeImage a width of type '.concat(t));
        if (null == e) throw new Error('you passed into encodeImage a width of type '.concat(e));
        var n = { 256: [e], 257: [t], 273: [ct], 278: [t], 305: 'geotiff.js' };
        if (r) for (var i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
        var a = new Uint8Array(Ct([n])),
          o = new Uint8Array(A),
          g = n[277],
          I = new Uint8Array(ct + e * t * g);
        return (
          ge(a.length, function (A) {
            I[A] = a[A];
          }),
          (function (A, e) {
            for (var t = A.length, r = 0; r < t; r++) e(A[r], r);
          })(o, function (A, e) {
            I[ct + e] = A;
          }),
          I.buffer
        );
      })(i, n, t, c);
    return f;
  }
  var Et = (function () {
    function A() {
      d(this, A);
    }
    return (
      s(A, [
        { key: 'log', value: function () {} },
        { key: 'debug', value: function () {} },
        { key: 'info', value: function () {} },
        { key: 'warn', value: function () {} },
        { key: 'error', value: function () {} },
        { key: 'time', value: function () {} },
        { key: 'timeEnd', value: function () {} }
      ]),
      A
    );
  })();
  function lt(A, e) {
    var t = A.length - e,
      r = 0;
    do {
      for (var n = e; n > 0; n--) (A[r + e] += A[r]), r++;
      t -= e;
    } while (t > 0);
  }
  function ht(A, e, t) {
    for (var r = 0, n = A.length, i = n / t; n > e; ) {
      for (var a = e; a > 0; --a) (A[r + e] += A[r]), ++r;
      n -= e;
    }
    for (var o = A.slice(), g = 0; g < i; ++g) for (var I = 0; I < t; ++I) A[t * g + I] = o[(t - I - 1) * i + g];
  }
  function dt(A, e, t, r, n, i) {
    if (!e || 1 === e) return A;
    for (var a = 0; a < n.length; ++a) {
      if (n[a] % 8 != 0) throw new Error('When decoding with predictor, only multiple of 8 bits are supported.');
      if (n[a] !== n[0]) throw new Error('When decoding with predictor, all samples must have the same size.');
    }
    for (var o = n[0] / 8, g = 2 === i ? 1 : n.length, I = 0; I < r && !(I * g * t * o >= A.byteLength); ++I) {
      var s = void 0;
      if (2 === e) {
        switch (n[0]) {
          case 8:
            s = new Uint8Array(A, I * g * t * o, g * t * o);
            break;
          case 16:
            s = new Uint16Array(A, I * g * t * o, (g * t * o) / 2);
            break;
          case 32:
            s = new Uint32Array(A, I * g * t * o, (g * t * o) / 4);
            break;
          default:
            throw new Error('Predictor 2 not allowed with '.concat(n[0], ' bits per sample.'));
        }
        lt(s, g);
      } else 3 === e && ht((s = new Uint8Array(A, I * g * t * o, g * t * o)), g, o);
    }
    return A;
  }
  new Et();
  var wt = (function () {
    function A() {
      d(this, A);
    }
    var e;
    return (
      s(A, [
        {
          key: 'decode',
          value:
            ((e = g(
              y.mark(function A(e, t) {
                var r, n, i, a, o;
                return y.wrap(
                  function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          return (A.next = 2), this.decodeBlock(t);
                        case 2:
                          if (((r = A.sent), 1 === (n = e.Predictor || 1))) {
                            A.next = 9;
                            break;
                          }
                          return (i = !e.StripOffsets), (a = i ? e.TileWidth : e.ImageWidth), (o = i ? e.TileLength : e.RowsPerStrip || e.ImageLength), A.abrupt('return', dt(r, n, a, o, e.BitsPerSample, e.PlanarConfiguration));
                        case 9:
                          return A.abrupt('return', r);
                        case 10:
                        case 'end':
                          return A.stop();
                      }
                  },
                  A,
                  this
                );
              })
            )),
            function (A, t) {
              return e.apply(this, arguments);
            })
        }
      ]),
      A
    );
  })();
  function yt(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(A);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(A, e).enumerable;
        })),
        t.push.apply(t, r);
    }
    return t;
  }
  function pt(A) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? yt(Object(r), !0).forEach(function (t) {
            e(A, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(r))
        : yt(Object(r)).forEach(function (e) {
            Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return A;
  }
  function Dt(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  function kt(A) {
    switch (A) {
      case nA.BYTE:
      case nA.ASCII:
      case nA.SBYTE:
      case nA.UNDEFINED:
        return 1;
      case nA.SHORT:
      case nA.SSHORT:
        return 2;
      case nA.LONG:
      case nA.SLONG:
      case nA.FLOAT:
      case nA.IFD:
        return 4;
      case nA.RATIONAL:
      case nA.SRATIONAL:
      case nA.DOUBLE:
      case nA.LONG8:
      case nA.SLONG8:
      case nA.IFD8:
        return 8;
      default:
        throw new RangeError('Invalid field type: '.concat(A));
    }
  }
  function mt(A) {
    var e = A.GeoKeyDirectory;
    if (!e) return null;
    for (var t = {}, r = 4; r <= 4 * e[3]; r += 4) {
      var n = sA[e[r]],
        i = e[r + 1] ? z[e[r + 1]] : null,
        a = e[r + 2],
        o = e[r + 3],
        g = null;
      if (i) {
        if (null == (g = A[i])) throw new Error("Could not get value of geoKey '".concat(n, "'."));
        'string' == typeof g ? (g = g.substring(o, o + a - 1)) : g.subarray && ((g = g.subarray(o, o + a)), 1 === a && (g = g[0]));
      } else g = o;
      t[n] = g;
    }
    return t;
  }
  function vt(A, e, t, r) {
    var n = null,
      i = null,
      a = kt(e);
    switch (e) {
      case nA.BYTE:
      case nA.ASCII:
      case nA.UNDEFINED:
        (n = new Uint8Array(t)), (i = A.readUint8);
        break;
      case nA.SBYTE:
        (n = new Int8Array(t)), (i = A.readInt8);
        break;
      case nA.SHORT:
        (n = new Uint16Array(t)), (i = A.readUint16);
        break;
      case nA.SSHORT:
        (n = new Int16Array(t)), (i = A.readInt16);
        break;
      case nA.LONG:
      case nA.IFD:
        (n = new Uint32Array(t)), (i = A.readUint32);
        break;
      case nA.SLONG:
        (n = new Int32Array(t)), (i = A.readInt32);
        break;
      case nA.LONG8:
      case nA.IFD8:
        (n = new Array(t)), (i = A.readUint64);
        break;
      case nA.SLONG8:
        (n = new Array(t)), (i = A.readInt64);
        break;
      case nA.RATIONAL:
        (n = new Uint32Array(2 * t)), (i = A.readUint32);
        break;
      case nA.SRATIONAL:
        (n = new Int32Array(2 * t)), (i = A.readInt32);
        break;
      case nA.FLOAT:
        (n = new Float32Array(t)), (i = A.readFloat32);
        break;
      case nA.DOUBLE:
        (n = new Float64Array(t)), (i = A.readFloat64);
        break;
      default:
        throw new RangeError('Invalid field type: '.concat(e));
    }
    if (e !== nA.RATIONAL && e !== nA.SRATIONAL) for (var o = 0; o < t; ++o) n[o] = i.call(A, r + o * a);
    else for (var g = 0; g < t; g += 2) (n[g] = i.call(A, r + g * a)), (n[g + 1] = i.call(A, r + (g * a + 4)));
    return e === nA.ASCII ? new TextDecoder('utf-8').decode(n) : n;
  }
  var bt = function A(e, t, r) {
      d(this, A), (this.fileDirectory = e), (this.geoKeyDirectory = t), (this.nextIFDByteOffset = r);
    },
    Gt = (function (A) {
      c(t, A);
      var e = Dt(t);
      function t(A) {
        var r;
        return d(this, t), ((r = e.call(this, 'No image at index '.concat(A))).index = A), r;
      }
      return t;
    })(h(Error)),
    St = (function () {
      function A() {
        d(this, A);
      }
      var e;
      return (
        s(A, [
          {
            key: 'readRasters',
            value:
              ((e = g(
                y.mark(function A() {
                  var e,
                    t,
                    r,
                    n,
                    i,
                    o,
                    g,
                    I,
                    s,
                    B,
                    c,
                    f,
                    C,
                    u,
                    Q,
                    E,
                    l,
                    h,
                    d,
                    w,
                    p,
                    D,
                    k,
                    m,
                    v,
                    b,
                    G,
                    S,
                    F,
                    R,
                    x,
                    U,
                    L,
                    M,
                    N,
                    q,
                    J,
                    O,
                    Y,
                    H = arguments;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (e = H.length > 0 && void 0 !== H[0] ? H[0] : {}), (t = e.window), (r = e.width), (n = e.height), (i = e.resX), (o = e.resY), (g = e.bbox), (A.next = 5), this.getImage();
                          case 5:
                            return (I = A.sent), (s = I), (A.next = 9), this.getImageCount();
                          case 9:
                            if (((B = A.sent), (c = I.getBoundingBox()), !t || !g)) {
                              A.next = 13;
                              break;
                            }
                            throw new Error('Both "bbox" and "window" passed.');
                          case 13:
                            if (!r && !n) {
                              A.next = 24;
                              break;
                            }
                            if ((t && ((f = I.getOrigin()), (C = a(f, 2)), (u = C[0]), (Q = C[1]), (E = I.getResolution()), (l = a(E, 2)), (h = l[0]), (d = l[1]), (g = [u + t[0] * h, Q + t[1] * d, u + t[2] * h, Q + t[3] * d])), (w = g || c), !r)) {
                              A.next = 20;
                              break;
                            }
                            if (!i) {
                              A.next = 19;
                              break;
                            }
                            throw new Error('Both width and resX passed');
                          case 19:
                            i = (w[2] - w[0]) / r;
                          case 20:
                            if (!n) {
                              A.next = 24;
                              break;
                            }
                            if (!o) {
                              A.next = 23;
                              break;
                            }
                            throw new Error('Both width and resY passed');
                          case 23:
                            o = (w[3] - w[1]) / n;
                          case 24:
                            if (!i && !o) {
                              A.next = 48;
                              break;
                            }
                            (p = []), (D = 0);
                          case 27:
                            if (!(D < B)) {
                              A.next = 36;
                              break;
                            }
                            return (A.next = 30), this.getImage(D);
                          case 30:
                            (k = A.sent), (m = k.fileDirectory), (v = m.SubfileType), (b = m.NewSubfileType), (0 === D || 2 === v || 1 & b) && p.push(k);
                          case 33:
                            ++D, (A.next = 27);
                            break;
                          case 36:
                            p.sort(function (A, e) {
                              return A.getWidth() - e.getWidth();
                            }),
                              (G = 0);
                          case 38:
                            if (!(G < p.length)) {
                              A.next = 48;
                              break;
                            }
                            if (((S = p[G]), (F = (c[2] - c[0]) / S.getWidth()), (R = (c[3] - c[1]) / S.getHeight()), (s = S), !((i && i > F) || (o && o > R)))) {
                              A.next = 45;
                              break;
                            }
                            return A.abrupt('break', 48);
                          case 45:
                            ++G, (A.next = 38);
                            break;
                          case 48:
                            return (
                              (x = t),
                              g &&
                                ((U = I.getOrigin()),
                                (L = a(U, 2)),
                                (M = L[0]),
                                (N = L[1]),
                                (q = s.getResolution(I)),
                                (J = a(q, 2)),
                                (O = J[0]),
                                (Y = J[1]),
                                (x = [Math.round((g[0] - M) / O), Math.round((g[1] - N) / Y), Math.round((g[2] - M) / O), Math.round((g[3] - N) / Y)]),
                                (x = [Math.min(x[0], x[2]), Math.min(x[1], x[3]), Math.max(x[0], x[2]), Math.max(x[1], x[3])])),
                              A.abrupt('return', s.readRasters(pt(pt({}, e), {}, { window: x })))
                            );
                          case 51:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        A
      );
    })(),
    Ft = (function (A) {
      c(f, A);
      var e,
        t,
        r,
        n,
        i,
        o,
        I,
        B = Dt(f);
      function f(A, e, t, r) {
        var n,
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return d(this, f), ((n = B.call(this)).source = A), (n.littleEndian = e), (n.bigTiff = t), (n.firstIFDOffset = r), (n.cache = i.cache || !1), (n.ifdRequests = []), (n.ghostValues = null), n;
      }
      return (
        s(
          f,
          [
            {
              key: 'getSlice',
              value:
                ((I = g(
                  y.mark(function A(e, t) {
                    var r;
                    return y.wrap(
                      function (A) {
                        for (;;)
                          switch ((A.prev = A.next)) {
                            case 0:
                              return (r = this.bigTiff ? 4048 : 1024), (A.t0 = OA), (A.next = 4), this.source.fetch([{ offset: e, length: void 0 !== t ? t : r }]);
                            case 4:
                              return (A.t1 = A.sent[0]), (A.t2 = e), (A.t3 = this.littleEndian), (A.t4 = this.bigTiff), A.abrupt('return', new A.t0(A.t1, A.t2, A.t3, A.t4));
                            case 9:
                            case 'end':
                              return A.stop();
                          }
                      },
                      A,
                      this
                    );
                  })
                )),
                function (A, e) {
                  return I.apply(this, arguments);
                })
            },
            {
              key: 'parseFileDirectoryAt',
              value:
                ((o = g(
                  y.mark(function A(e) {
                    var t, r, n, i, a, o, g, I, s, B, c, f, C, u, Q, E, l, h, d, w;
                    return y.wrap(
                      function (A) {
                        for (;;)
                          switch ((A.prev = A.next)) {
                            case 0:
                              return (t = this.bigTiff ? 20 : 12), (r = this.bigTiff ? 8 : 2), (A.next = 4), this.getSlice(e);
                            case 4:
                              if (((n = A.sent), (i = this.bigTiff ? n.readUint64(e) : n.readUint16(e)), (a = i * t + (this.bigTiff ? 16 : 6)), n.covers(e, a))) {
                                A.next = 11;
                                break;
                              }
                              return (A.next = 10), this.getSlice(e, a);
                            case 10:
                              n = A.sent;
                            case 11:
                              (o = {}), (g = e + (this.bigTiff ? 8 : 2)), (I = 0);
                            case 14:
                              if (!(I < i)) {
                                A.next = 41;
                                break;
                              }
                              if (((s = n.readUint16(g)), (B = n.readUint16(g + 2)), (c = this.bigTiff ? n.readUint64(g + 4) : n.readUint32(g + 4)), (f = void 0), (C = void 0), (u = kt(B)), (Q = g + (this.bigTiff ? 12 : 8)), !(u * c <= (this.bigTiff ? 8 : 4)))) {
                                A.next = 26;
                                break;
                              }
                              (f = vt(n, B, c, Q)), (A.next = 36);
                              break;
                            case 26:
                              if (((E = n.readOffset(Q)), (l = kt(B) * c), !n.covers(E, l))) {
                                A.next = 32;
                                break;
                              }
                              (f = vt(n, B, c, E)), (A.next = 36);
                              break;
                            case 32:
                              return (A.next = 34), this.getSlice(E, l);
                            case 34:
                              (h = A.sent), (f = vt(h, B, c, E));
                            case 36:
                              (C = 1 === c && -1 === tA.indexOf(s) && B !== nA.RATIONAL && B !== nA.SRATIONAL ? f[0] : f), (o[z[s]] = C);
                            case 38:
                              (g += t), ++I, (A.next = 14);
                              break;
                            case 41:
                              return (d = mt(o)), (w = n.readOffset(e + r + t * i)), A.abrupt('return', new bt(o, d, w));
                            case 44:
                            case 'end':
                              return A.stop();
                          }
                      },
                      A,
                      this
                    );
                  })
                )),
                function (A) {
                  return o.apply(this, arguments);
                })
            },
            {
              key: 'requestIFD',
              value:
                ((i = g(
                  y.mark(function A(e) {
                    var t = this;
                    return y.wrap(
                      function (A) {
                        for (;;)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (!this.ifdRequests[e]) {
                                A.next = 4;
                                break;
                              }
                              return A.abrupt('return', this.ifdRequests[e]);
                            case 4:
                              if (0 !== e) {
                                A.next = 9;
                                break;
                              }
                              return (this.ifdRequests[e] = this.parseFileDirectoryAt(this.firstIFDOffset)), A.abrupt('return', this.ifdRequests[e]);
                            case 9:
                              if (this.ifdRequests[e - 1]) {
                                A.next = 19;
                                break;
                              }
                              (A.prev = 10), (this.ifdRequests[e - 1] = this.requestIFD(e - 1)), (A.next = 19);
                              break;
                            case 14:
                              if (((A.prev = 14), (A.t0 = A.catch(10)), !(A.t0 instanceof Gt))) {
                                A.next = 18;
                                break;
                              }
                              throw new Gt(e);
                            case 18:
                              throw A.t0;
                            case 19:
                              return (
                                (this.ifdRequests[e] = g(
                                  y.mark(function A() {
                                    var r;
                                    return y.wrap(function (A) {
                                      for (;;)
                                        switch ((A.prev = A.next)) {
                                          case 0:
                                            return (A.next = 2), t.ifdRequests[e - 1];
                                          case 2:
                                            if (0 !== (r = A.sent).nextIFDByteOffset) {
                                              A.next = 5;
                                              break;
                                            }
                                            throw new Gt(e);
                                          case 5:
                                            return A.abrupt('return', t.parseFileDirectoryAt(r.nextIFDByteOffset));
                                          case 6:
                                          case 'end':
                                            return A.stop();
                                        }
                                    }, A);
                                  })
                                )()),
                                A.abrupt('return', this.ifdRequests[e])
                              );
                            case 21:
                            case 'end':
                              return A.stop();
                          }
                      },
                      A,
                      this,
                      [[10, 14]]
                    );
                  })
                )),
                function (A) {
                  return i.apply(this, arguments);
                })
            },
            {
              key: 'getImage',
              value:
                ((n = g(
                  y.mark(function A() {
                    var e,
                      t,
                      r = arguments;
                    return y.wrap(
                      function (A) {
                        for (;;)
                          switch ((A.prev = A.next)) {
                            case 0:
                              return (e = r.length > 0 && void 0 !== r[0] ? r[0] : 0), (A.next = 3), this.requestIFD(e);
                            case 3:
                              return (t = A.sent), A.abrupt('return', new qA(t.fileDirectory, t.geoKeyDirectory, this.dataView, this.littleEndian, this.cache, this.source));
                            case 5:
                            case 'end':
                              return A.stop();
                          }
                      },
                      A,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                })
            },
            {
              key: 'getImageCount',
              value:
                ((r = g(
                  y.mark(function A() {
                    var e, t;
                    return y.wrap(
                      function (A) {
                        for (;;)
                          switch ((A.prev = A.next)) {
                            case 0:
                              (e = 0), (t = !0);
                            case 2:
                              if (!t) {
                                A.next = 18;
                                break;
                              }
                              return (A.prev = 3), (A.next = 6), this.requestIFD(e);
                            case 6:
                              ++e, (A.next = 16);
                              break;
                            case 9:
                              if (((A.prev = 9), (A.t0 = A.catch(3)), !(A.t0 instanceof Gt))) {
                                A.next = 15;
                                break;
                              }
                              (t = !1), (A.next = 16);
                              break;
                            case 15:
                              throw A.t0;
                            case 16:
                              A.next = 2;
                              break;
                            case 18:
                              return A.abrupt('return', e);
                            case 19:
                            case 'end':
                              return A.stop();
                          }
                      },
                      A,
                      this,
                      [[3, 9]]
                    );
                  })
                )),
                function () {
                  return r.apply(this, arguments);
                })
            },
            {
              key: 'getGhostValues',
              value:
                ((t = g(
                  y.mark(function A() {
                    var e,
                      t,
                      r,
                      n,
                      i,
                      o,
                      g,
                      I,
                      s = this;
                    return y.wrap(
                      function (A) {
                        for (;;)
                          switch ((A.prev = A.next)) {
                            case 0:
                              if (((e = this.bigTiff ? 16 : 8), !this.ghostValues)) {
                                A.next = 3;
                                break;
                              }
                              return A.abrupt('return', this.ghostValues);
                            case 3:
                              return (r = (t = 'GDAL_STRUCTURAL_METADATA_SIZE=').length + 100), (A.next = 7), this.getSlice(e, r);
                            case 7:
                              if (((n = A.sent), t !== vt(n, nA.ASCII, t.length, e))) {
                                A.next = 19;
                                break;
                              }
                              if (((i = vt(n, nA.ASCII, r, e)), (o = i.split('\n')[0]), !((g = Number(o.split('=')[1].split(' ')[0]) + o.length) > r))) {
                                A.next = 16;
                                break;
                              }
                              return (A.next = 15), this.getSlice(e, g);
                            case 15:
                              n = A.sent;
                            case 16:
                              (I = vt(n, nA.ASCII, g, e)),
                                (this.ghostValues = {}),
                                I.split('\n')
                                  .filter(function (A) {
                                    return A.length > 0;
                                  })
                                  .map(function (A) {
                                    return A.split('=');
                                  })
                                  .forEach(function (A) {
                                    var e = a(A, 2),
                                      t = e[0],
                                      r = e[1];
                                    s.ghostValues[t] = r;
                                  });
                            case 19:
                              return A.abrupt('return', this.ghostValues);
                            case 20:
                            case 'end':
                              return A.stop();
                          }
                      },
                      A,
                      this
                    );
                  })
                )),
                function () {
                  return t.apply(this, arguments);
                })
            },
            {
              key: 'close',
              value: function () {
                return 'function' == typeof this.source.close && this.source.close();
              }
            }
          ],
          [
            {
              key: 'fromSource',
              value:
                ((e = g(
                  y.mark(function A(e, t, r) {
                    var n, i, a, o, g, I, s;
                    return y.wrap(function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (A.next = 2), e.fetch([{ offset: 0, length: 1024 }], r);
                          case 2:
                            if (((n = A.sent[0]), (i = new JA(n)), 18761 !== (a = i.getUint16(0, 0)))) {
                              A.next = 9;
                              break;
                            }
                            (o = !0), (A.next = 14);
                            break;
                          case 9:
                            if (19789 !== a) {
                              A.next = 13;
                              break;
                            }
                            (o = !1), (A.next = 14);
                            break;
                          case 13:
                            throw new TypeError('Invalid byte order value.');
                          case 14:
                            if (42 !== (g = i.getUint16(2, o))) {
                              A.next = 19;
                              break;
                            }
                            (I = !1), (A.next = 27);
                            break;
                          case 19:
                            if (43 !== g) {
                              A.next = 26;
                              break;
                            }
                            if (((I = !0), 8 === i.getUint16(4, o))) {
                              A.next = 24;
                              break;
                            }
                            throw new Error('Unsupported offset byte-size.');
                          case 24:
                            A.next = 27;
                            break;
                          case 26:
                            throw new TypeError('Invalid magic number.');
                          case 27:
                            return (s = I ? i.getUint64(8, o) : i.getUint32(4, o)), A.abrupt('return', new f(e, o, I, s, t));
                          case 29:
                          case 'end':
                            return A.stop();
                        }
                    }, A);
                  })
                )),
                function (A, t, r) {
                  return e.apply(this, arguments);
                })
            }
          ]
        ),
        f
      );
    })(St),
    Rt = (function (A) {
      c(i, A);
      var e,
        t,
        r,
        n = Dt(i);
      function i(A, e) {
        var t;
        return d(this, i), ((t = n.call(this)).mainFile = A), (t.overviewFiles = e), (t.imageFiles = [A].concat(e)), (t.fileDirectoriesPerFile = null), (t.fileDirectoriesPerFileParsing = null), (t.imageCount = null), t;
      }
      return (
        s(i, [
          {
            key: 'parseFileDirectoriesPerFile',
            value:
              ((r = g(
                y.mark(function A() {
                  var e;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (
                              (e = [this.mainFile.parseFileDirectoryAt(this.mainFile.firstIFDOffset)].concat(
                                this.overviewFiles.map(function (A) {
                                  return A.parseFileDirectoryAt(A.firstIFDOffset);
                                })
                              )),
                              (A.next = 3),
                              Promise.all(e)
                            );
                          case 3:
                            return (this.fileDirectoriesPerFile = A.sent), A.abrupt('return', this.fileDirectoriesPerFile);
                          case 5:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return r.apply(this, arguments);
              })
          },
          {
            key: 'getImage',
            value:
              ((t = g(
                y.mark(function A() {
                  var e,
                    t,
                    r,
                    n,
                    i,
                    a,
                    o,
                    g = arguments;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            return (e = g.length > 0 && void 0 !== g[0] ? g[0] : 0), (A.next = 3), this.getImageCount();
                          case 3:
                            return (A.next = 5), this.parseFileDirectoriesPerFile();
                          case 5:
                            (t = 0), (r = 0), (n = 0);
                          case 8:
                            if (!(n < this.imageFiles.length)) {
                              A.next = 26;
                              break;
                            }
                            (i = this.imageFiles[n]), (a = 0);
                          case 11:
                            if (!(a < this.imageCounts[n])) {
                              A.next = 22;
                              break;
                            }
                            if (e !== t) {
                              A.next = 17;
                              break;
                            }
                            return (A.next = 15), i.requestIFD(r);
                          case 15:
                            return (o = A.sent), A.abrupt('return', new qA(o.fileDirectory, o.geoKeyDirectory, i.dataView, i.littleEndian, i.cache, i.source));
                          case 17:
                            t++, r++;
                          case 19:
                            a++, (A.next = 11);
                            break;
                          case 22:
                            r = 0;
                          case 23:
                            n++, (A.next = 8);
                            break;
                          case 26:
                            throw new RangeError('Invalid image index');
                          case 27:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              })
          },
          {
            key: 'getImageCount',
            value:
              ((e = g(
                y.mark(function A() {
                  var e;
                  return y.wrap(
                    function (A) {
                      for (;;)
                        switch ((A.prev = A.next)) {
                          case 0:
                            if (null === this.imageCount) {
                              A.next = 2;
                              break;
                            }
                            return A.abrupt('return', this.imageCount);
                          case 2:
                            return (
                              (e = [this.mainFile.getImageCount()].concat(
                                this.overviewFiles.map(function (A) {
                                  return A.getImageCount();
                                })
                              )),
                              (A.next = 5),
                              Promise.all(e)
                            );
                          case 5:
                            return (
                              (this.imageCounts = A.sent),
                              (this.imageCount = this.imageCounts.reduce(function (A, e) {
                                return A + e;
                              }, 0)),
                              A.abrupt('return', this.imageCount)
                            );
                          case 8:
                          case 'end':
                            return A.stop();
                        }
                    },
                    A,
                    this
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })
          }
        ]),
        i
      );
    })(St);
  function xt() {
    return (
      (xt = g(
        y.mark(function A(e) {
          var t,
            r,
            n = arguments;
          return y.wrap(function (A) {
            for (;;)
              switch ((A.prev = A.next)) {
                case 0:
                  return (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}), (r = n.length > 2 ? n[2] : void 0), A.abrupt('return', Ft.fromSource(je(e, t), r));
                case 3:
                case 'end':
                  return A.stop();
              }
          }, A);
        })
      )),
      xt.apply(this, arguments)
    );
  }
  function Ut() {
    return (
      (Ut = g(
        y.mark(function A(e) {
          var t,
            r,
            n = arguments;
          return y.wrap(function (A) {
            for (;;)
              switch ((A.prev = A.next)) {
                case 0:
                  return (t = n.length > 1 && void 0 !== n[1] ? n[1] : {}), (r = n.length > 2 ? n[2] : void 0), A.abrupt('return', Ft.fromSource(_e(e, t), r));
                case 3:
                case 'end':
                  return A.stop();
              }
          }, A);
        })
      )),
      Ut.apply(this, arguments)
    );
  }
  function Lt() {
    return (Lt = g(
      y.mark(function A(e, t) {
        return y.wrap(function (A) {
          for (;;)
            switch ((A.prev = A.next)) {
              case 0:
                return A.abrupt('return', Ft.fromSource(Ze(e), t));
              case 1:
              case 'end':
                return A.stop();
            }
        }, A);
      })
    )).apply(this, arguments);
  }
  function Mt() {
    return (Mt = g(
      y.mark(function A(e, t) {
        return y.wrap(function (A) {
          for (;;)
            switch ((A.prev = A.next)) {
              case 0:
                return A.abrupt('return', Ft.fromSource(it(e), t));
              case 1:
              case 'end':
                return A.stop();
            }
        }, A);
      })
    )).apply(this, arguments);
  }
  function Nt() {
    return (Nt = g(
      y.mark(function A(e, t) {
        return y.wrap(function (A) {
          for (;;)
            switch ((A.prev = A.next)) {
              case 0:
                return A.abrupt('return', Ft.fromSource(At(e), t));
              case 1:
              case 'end':
                return A.stop();
            }
        }, A);
      })
    )).apply(this, arguments);
  }
  function qt() {
    return (
      (qt = g(
        y.mark(function A(e) {
          var t,
            r,
            n,
            i,
            a,
            o = arguments;
          return y.wrap(function (A) {
            for (;;)
              switch ((A.prev = A.next)) {
                case 0:
                  return (t = o.length > 1 && void 0 !== o[1] ? o[1] : []), (r = o.length > 2 && void 0 !== o[2] ? o[2] : {}), (n = o.length > 3 ? o[3] : void 0), (A.next = 5), Ft.fromSource(je(e, r), n);
                case 5:
                  return (
                    (i = A.sent),
                    (A.next = 8),
                    Promise.all(
                      t.map(function (A) {
                        return Ft.fromSource(je(A, r));
                      })
                    )
                  );
                case 8:
                  return (a = A.sent), A.abrupt('return', new Rt(i, a));
                case 10:
                case 'end':
                  return A.stop();
              }
          }, A);
        })
      )),
      qt.apply(this, arguments)
    );
  }
  function Jt(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var Ot = (function (A) {
      c(t, A);
      var e = Jt(t);
      function t() {
        return d(this, t), e.apply(this, arguments);
      }
      return (
        s(t, [
          {
            key: 'decodeBlock',
            value: function (A) {
              return A;
            }
          }
        ]),
        t
      );
    })(wt),
    Yt = Object.freeze({ __proto__: null, default: Ot });
  function Ht(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  function Pt(A, e) {
    for (var t = e.length - 1; t >= 0; t--) A.push(e[t]);
    return A;
  }
  function Kt(A) {
    for (var e = new Uint16Array(4093), t = new Uint8Array(4093), r = 0; r <= 257; r++) (e[r] = 4096), (t[r] = r);
    var n = 258,
      i = 9,
      a = 0;
    function o() {
      (n = 258), (i = 9);
    }
    function g(A) {
      var e = (function (A, e, t) {
        var r = e % 8,
          n = Math.floor(e / 8),
          i = 8 - r,
          a = e + t - 8 * (n + 1),
          o = 8 * (n + 2) - (e + t),
          g = 8 * (n + 2) - e;
        if (((o = Math.max(0, o)), n >= A.length)) return console.warn('ran off the end of the buffer before finding EOI_CODE (end on input code)'), 257;
        var I = A[n] & (Math.pow(2, 8 - r) - 1),
          s = (I <<= t - i);
        if (n + 1 < A.length) {
          var B = A[n + 1] >>> o;
          s += B <<= Math.max(0, t - g);
        }
        if (a > 8 && n + 2 < A.length) {
          var c = 8 * (n + 3) - (e + t);
          s += A[n + 2] >>> c;
        }
        return s;
      })(A, a, i);
      return (a += i), e;
    }
    function I(A, r) {
      return (t[n] = r), (e[n] = A), ++n - 1;
    }
    function s(A) {
      for (var r = [], n = A; 4096 !== n; n = e[n]) r.push(t[n]);
      return r;
    }
    var B = [];
    o();
    for (var c, f = new Uint8Array(A), C = g(f); 257 !== C; ) {
      if (256 === C) {
        for (o(), C = g(f); 256 === C; ) C = g(f);
        if (257 === C) break;
        if (C > 256) throw new Error('corrupted code at scanline '.concat(C));
        Pt(B, s(C)), (c = C);
      } else if (C < n) {
        var u = s(C);
        Pt(B, u), I(c, u[u.length - 1]), (c = C);
      } else {
        var Q = s(c);
        if (!Q) throw new Error('Bogus entry. Not in dictionary, '.concat(c, ' / ').concat(n, ', position: ').concat(a));
        Pt(B, Q), B.push(Q[Q.length - 1]), I(c, Q[Q.length - 1]), (c = C);
      }
      n + 1 >= Math.pow(2, i) && (12 === i ? (c = void 0) : i++), (C = g(f));
    }
    return new Uint8Array(B);
  }
  var Tt = (function (A) {
      c(t, A);
      var e = Ht(t);
      function t() {
        return d(this, t), e.apply(this, arguments);
      }
      return (
        s(t, [
          {
            key: 'decodeBlock',
            value: function (A) {
              return Kt(A).buffer;
            }
          }
        ]),
        t
      );
    })(wt),
    Vt = Object.freeze({ __proto__: null, default: Tt });
  function _t(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var jt = new Int32Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]),
    Xt = 4017,
    Wt = 799,
    Zt = 3406,
    zt = 2276,
    $t = 1567,
    Ar = 3784,
    er = 5793,
    tr = 2896;
  function rr(A, e) {
    for (var t = 0, r = [], n = 16; n > 0 && !A[n - 1]; ) --n;
    r.push({ children: [], index: 0 });
    for (var i, a = r[0], o = 0; o < n; o++) {
      for (var g = 0; g < A[o]; g++) {
        for ((a = r.pop()).children[a.index] = e[t]; a.index > 0; ) a = r.pop();
        for (a.index++, r.push(a); r.length <= o; ) r.push((i = { children: [], index: 0 })), (a.children[a.index] = i.children), (a = i);
        t++;
      }
      o + 1 < n && (r.push((i = { children: [], index: 0 })), (a.children[a.index] = i.children), (a = i));
    }
    return r[0].children;
  }
  function nr(A, e, t, r, n, i, a, o, g) {
    var I = t.mcusPerLine,
      s = t.progressive,
      B = e,
      c = e,
      C = 0,
      u = 0;
    function Q() {
      if (u > 0) return u--, (C >> u) & 1;
      if (255 === (C = A[c++])) {
        var e = A[c++];
        if (e) throw new Error('unexpected marker: '.concat(((C << 8) | e).toString(16)));
      }
      return (u = 7), C >>> 7;
    }
    function E(A) {
      for (var e, t = A; null !== (e = Q()); ) {
        if ('number' == typeof (t = t[e])) return t;
        if ('object' !== f(t)) throw new Error('invalid huffman sequence');
      }
      return null;
    }
    function l(A) {
      for (var e = A, t = 0; e > 0; ) {
        var r = Q();
        if (null === r) return;
        (t = (t << 1) | r), --e;
      }
      return t;
    }
    function h(A) {
      var e = l(A);
      return e >= 1 << (A - 1) ? e : e + (-1 << A) + 1;
    }
    var d = 0;
    var w,
      y = 0;
    function p(A, e, t, r, n) {
      var i = t % I,
        a = ((t / I) | 0) * A.v + r,
        o = i * A.h + n;
      e(A, A.blocks[a][o]);
    }
    function D(A, e, t) {
      var r = (t / A.blocksPerLine) | 0,
        n = t % A.blocksPerLine;
      e(A, A.blocks[r][n]);
    }
    var k,
      m,
      v,
      b,
      G,
      S,
      F = r.length;
    S = s
      ? 0 === i
        ? 0 === o
          ? function (A, e) {
              var t = E(A.huffmanTableDC),
                r = 0 === t ? 0 : h(t) << g;
              (A.pred += r), (e[0] = A.pred);
            }
          : function (A, e) {
              e[0] |= Q() << g;
            }
        : 0 === o
        ? function (A, e) {
            if (d > 0) d--;
            else
              for (var t = i, r = a; t <= r; ) {
                var n = E(A.huffmanTableAC),
                  o = 15 & n,
                  I = n >> 4;
                if (0 === o) {
                  if (I < 15) {
                    d = l(I) + (1 << I) - 1;
                    break;
                  }
                  t += 16;
                } else (e[jt[(t += I)]] = h(o) * (1 << g)), t++;
              }
          }
        : function (A, e) {
            for (var t = i, r = a, n = 0; t <= r; ) {
              var o = jt[t],
                I = e[o] < 0 ? -1 : 1;
              switch (y) {
                case 0:
                  var s = E(A.huffmanTableAC),
                    B = 15 & s;
                  if (((n = s >> 4), 0 === B)) n < 15 ? ((d = l(n) + (1 << n)), (y = 4)) : ((n = 16), (y = 1));
                  else {
                    if (1 !== B) throw new Error('invalid ACn encoding');
                    (w = h(B)), (y = n ? 2 : 3);
                  }
                  continue;
                case 1:
                case 2:
                  e[o] ? (e[o] += (Q() << g) * I) : 0 == --n && (y = 2 === y ? 3 : 0);
                  break;
                case 3:
                  e[o] ? (e[o] += (Q() << g) * I) : ((e[o] = w << g), (y = 0));
                  break;
                case 4:
                  e[o] && (e[o] += (Q() << g) * I);
              }
              t++;
            }
            4 === y && 0 == --d && (y = 0);
          }
      : function (A, e) {
          var t = E(A.huffmanTableDC),
            r = 0 === t ? 0 : h(t);
          (A.pred += r), (e[0] = A.pred);
          for (var n = 1; n < 64; ) {
            var i = E(A.huffmanTableAC),
              a = 15 & i,
              o = i >> 4;
            if (0 === a) {
              if (o < 15) break;
              n += 16;
            } else (e[jt[(n += o)]] = h(a)), n++;
          }
        };
    var R,
      x,
      U = 0;
    x = 1 === F ? r[0].blocksPerLine * r[0].blocksPerColumn : I * t.mcusPerColumn;
    for (var L = n || x; U < x; ) {
      for (m = 0; m < F; m++) r[m].pred = 0;
      if (((d = 0), 1 === F)) for (k = r[0], G = 0; G < L; G++) D(k, S, U), U++;
      else
        for (G = 0; G < L; G++) {
          for (m = 0; m < F; m++) {
            var M = (k = r[m]),
              N = M.h,
              q = M.v;
            for (v = 0; v < q; v++) for (b = 0; b < N; b++) p(k, S, U, v, b);
          }
          if (++U === x) break;
        }
      if (((u = 0), (R = (A[c] << 8) | A[c + 1]) < 65280)) throw new Error('marker was not found');
      if (!(R >= 65488 && R <= 65495)) break;
      c += 2;
    }
    return c - B;
  }
  function ir(A, e) {
    var t = [],
      r = e.blocksPerLine,
      n = e.blocksPerColumn,
      i = r << 3,
      a = new Int32Array(64),
      o = new Uint8Array(64);
    function g(A, t, r) {
      var n,
        i,
        a,
        o,
        g,
        I,
        s,
        B,
        c,
        f,
        C = e.quantizationTable,
        u = r;
      for (f = 0; f < 64; f++) u[f] = A[f] * C[f];
      for (f = 0; f < 8; ++f) {
        var Q = 8 * f;
        0 !== u[1 + Q] || 0 !== u[2 + Q] || 0 !== u[3 + Q] || 0 !== u[4 + Q] || 0 !== u[5 + Q] || 0 !== u[6 + Q] || 0 !== u[7 + Q]
          ? ((n = (er * u[0 + Q] + 128) >> 8),
            (i = (er * u[4 + Q] + 128) >> 8),
            (a = u[2 + Q]),
            (o = u[6 + Q]),
            (g = (tr * (u[1 + Q] - u[7 + Q]) + 128) >> 8),
            (B = (tr * (u[1 + Q] + u[7 + Q]) + 128) >> 8),
            (I = u[3 + Q] << 4),
            (s = u[5 + Q] << 4),
            (c = (n - i + 1) >> 1),
            (n = (n + i + 1) >> 1),
            (i = c),
            (c = (a * Ar + o * $t + 128) >> 8),
            (a = (a * $t - o * Ar + 128) >> 8),
            (o = c),
            (c = (g - s + 1) >> 1),
            (g = (g + s + 1) >> 1),
            (s = c),
            (c = (B + I + 1) >> 1),
            (I = (B - I + 1) >> 1),
            (B = c),
            (c = (n - o + 1) >> 1),
            (n = (n + o + 1) >> 1),
            (o = c),
            (c = (i - a + 1) >> 1),
            (i = (i + a + 1) >> 1),
            (a = c),
            (c = (g * zt + B * Zt + 2048) >> 12),
            (g = (g * Zt - B * zt + 2048) >> 12),
            (B = c),
            (c = (I * Wt + s * Xt + 2048) >> 12),
            (I = (I * Xt - s * Wt + 2048) >> 12),
            (s = c),
            (u[0 + Q] = n + B),
            (u[7 + Q] = n - B),
            (u[1 + Q] = i + s),
            (u[6 + Q] = i - s),
            (u[2 + Q] = a + I),
            (u[5 + Q] = a - I),
            (u[3 + Q] = o + g),
            (u[4 + Q] = o - g))
          : ((c = (er * u[0 + Q] + 512) >> 10), (u[0 + Q] = c), (u[1 + Q] = c), (u[2 + Q] = c), (u[3 + Q] = c), (u[4 + Q] = c), (u[5 + Q] = c), (u[6 + Q] = c), (u[7 + Q] = c));
      }
      for (f = 0; f < 8; ++f) {
        var E = f;
        0 !== u[8 + E] || 0 !== u[16 + E] || 0 !== u[24 + E] || 0 !== u[32 + E] || 0 !== u[40 + E] || 0 !== u[48 + E] || 0 !== u[56 + E]
          ? ((n = (er * u[0 + E] + 2048) >> 12),
            (i = (er * u[32 + E] + 2048) >> 12),
            (a = u[16 + E]),
            (o = u[48 + E]),
            (g = (tr * (u[8 + E] - u[56 + E]) + 2048) >> 12),
            (B = (tr * (u[8 + E] + u[56 + E]) + 2048) >> 12),
            (I = u[24 + E]),
            (s = u[40 + E]),
            (c = (n - i + 1) >> 1),
            (n = (n + i + 1) >> 1),
            (i = c),
            (c = (a * Ar + o * $t + 2048) >> 12),
            (a = (a * $t - o * Ar + 2048) >> 12),
            (o = c),
            (c = (g - s + 1) >> 1),
            (g = (g + s + 1) >> 1),
            (s = c),
            (c = (B + I + 1) >> 1),
            (I = (B - I + 1) >> 1),
            (B = c),
            (c = (n - o + 1) >> 1),
            (n = (n + o + 1) >> 1),
            (o = c),
            (c = (i - a + 1) >> 1),
            (i = (i + a + 1) >> 1),
            (a = c),
            (c = (g * zt + B * Zt + 2048) >> 12),
            (g = (g * Zt - B * zt + 2048) >> 12),
            (B = c),
            (c = (I * Wt + s * Xt + 2048) >> 12),
            (I = (I * Xt - s * Wt + 2048) >> 12),
            (s = c),
            (u[0 + E] = n + B),
            (u[56 + E] = n - B),
            (u[8 + E] = i + s),
            (u[48 + E] = i - s),
            (u[16 + E] = a + I),
            (u[40 + E] = a - I),
            (u[24 + E] = o + g),
            (u[32 + E] = o - g))
          : ((c = (er * r[f + 0] + 8192) >> 14), (u[0 + E] = c), (u[8 + E] = c), (u[16 + E] = c), (u[24 + E] = c), (u[32 + E] = c), (u[40 + E] = c), (u[48 + E] = c), (u[56 + E] = c));
      }
      for (f = 0; f < 64; ++f) {
        var l = 128 + ((u[f] + 8) >> 4);
        t[f] = l < 0 ? 0 : l > 255 ? 255 : l;
      }
    }
    for (var I = 0; I < n; I++) {
      for (var s = I << 3, B = 0; B < 8; B++) t.push(new Uint8Array(i));
      for (var c = 0; c < r; c++) {
        g(e.blocks[I][c], o, a);
        for (var f = 0, C = c << 3, u = 0; u < 8; u++) for (var Q = t[s + u], E = 0; E < 8; E++) Q[C + E] = o[f++];
      }
    }
    return t;
  }
  var ar = (function () {
      function A() {
        d(this, A), (this.jfif = null), (this.adobe = null), (this.quantizationTables = []), (this.huffmanTablesAC = []), (this.huffmanTablesDC = []), this.resetFrames();
      }
      return (
        s(A, [
          {
            key: 'resetFrames',
            value: function () {
              this.frames = [];
            }
          },
          {
            key: 'parse',
            value: function (A) {
              var e = 0;
              function t() {
                var t = (A[e] << 8) | A[e + 1];
                return (e += 2), t;
              }
              function r(A) {
                var e,
                  t,
                  r = 0,
                  n = 0;
                for (t in A.components) A.components.hasOwnProperty(t) && (r < (e = A.components[t]).h && (r = e.h), n < e.v && (n = e.v));
                var i = Math.ceil(A.samplesPerLine / 8 / r),
                  a = Math.ceil(A.scanLines / 8 / n);
                for (t in A.components)
                  if (A.components.hasOwnProperty(t)) {
                    e = A.components[t];
                    for (var o = Math.ceil((Math.ceil(A.samplesPerLine / 8) * e.h) / r), g = Math.ceil((Math.ceil(A.scanLines / 8) * e.v) / n), I = i * e.h, s = a * e.v, B = [], c = 0; c < s; c++) {
                      for (var f = [], C = 0; C < I; C++) f.push(new Int32Array(64));
                      B.push(f);
                    }
                    (e.blocksPerLine = o), (e.blocksPerColumn = g), (e.blocks = B);
                  }
                (A.maxH = r), (A.maxV = n), (A.mcusPerLine = i), (A.mcusPerColumn = a);
              }
              var n,
                i,
                a = t();
              if (65496 !== a) throw new Error('SOI not found');
              for (a = t(); 65497 !== a; ) {
                switch (a) {
                  case 65280:
                    break;
                  case 65504:
                  case 65505:
                  case 65506:
                  case 65507:
                  case 65508:
                  case 65509:
                  case 65510:
                  case 65511:
                  case 65512:
                  case 65513:
                  case 65514:
                  case 65515:
                  case 65516:
                  case 65517:
                  case 65518:
                  case 65519:
                  case 65534:
                    var o = ((n = void 0), (i = void 0), (n = t()), (i = A.subarray(e, e + n - 2)), (e += i.length), i);
                    65504 === a &&
                      74 === o[0] &&
                      70 === o[1] &&
                      73 === o[2] &&
                      70 === o[3] &&
                      0 === o[4] &&
                      (this.jfif = { version: { major: o[5], minor: o[6] }, densityUnits: o[7], xDensity: (o[8] << 8) | o[9], yDensity: (o[10] << 8) | o[11], thumbWidth: o[12], thumbHeight: o[13], thumbData: o.subarray(14, 14 + 3 * o[12] * o[13]) }),
                      65518 === a && 65 === o[0] && 100 === o[1] && 111 === o[2] && 98 === o[3] && 101 === o[4] && 0 === o[5] && (this.adobe = { version: o[6], flags0: (o[7] << 8) | o[8], flags1: (o[9] << 8) | o[10], transformCode: o[11] });
                    break;
                  case 65499:
                    for (var g = t() + e - 2; e < g; ) {
                      var I = A[e++],
                        s = new Int32Array(64);
                      if (I >> 4 == 0)
                        for (var B = 0; B < 64; B++) {
                          s[jt[B]] = A[e++];
                        }
                      else {
                        if (I >> 4 != 1) throw new Error('DQT: invalid table spec');
                        for (var c = 0; c < 64; c++) {
                          s[jt[c]] = t();
                        }
                      }
                      this.quantizationTables[15 & I] = s;
                    }
                    break;
                  case 65472:
                  case 65473:
                  case 65474:
                    t();
                    for (var f = { extended: 65473 === a, progressive: 65474 === a, precision: A[e++], scanLines: t(), samplesPerLine: t(), components: {}, componentsOrder: [] }, C = A[e++], u = void 0, Q = 0; Q < C; Q++) {
                      u = A[e];
                      var E = A[e + 1] >> 4,
                        l = 15 & A[e + 1],
                        h = A[e + 2];
                      f.componentsOrder.push(u), (f.components[u] = { h: E, v: l, quantizationIdx: h }), (e += 3);
                    }
                    r(f), this.frames.push(f);
                    break;
                  case 65476:
                    for (var d = t(), w = 2; w < d; ) {
                      for (var y = A[e++], p = new Uint8Array(16), D = 0, k = 0; k < 16; k++, e++) (p[k] = A[e]), (D += p[k]);
                      for (var m = new Uint8Array(D), v = 0; v < D; v++, e++) m[v] = A[e];
                      (w += 17 + D), y >> 4 == 0 ? (this.huffmanTablesDC[15 & y] = rr(p, m)) : (this.huffmanTablesAC[15 & y] = rr(p, m));
                    }
                    break;
                  case 65501:
                    t(), (this.resetInterval = t());
                    break;
                  case 65498:
                    t();
                    for (var b = A[e++], G = [], S = this.frames[0], F = 0; F < b; F++) {
                      var R = S.components[A[e++]],
                        x = A[e++];
                      (R.huffmanTableDC = this.huffmanTablesDC[x >> 4]), (R.huffmanTableAC = this.huffmanTablesAC[15 & x]), G.push(R);
                    }
                    var U = A[e++],
                      L = A[e++],
                      M = A[e++],
                      N = nr(A, e, S, G, this.resetInterval, U, L, M >> 4, 15 & M);
                    e += N;
                    break;
                  case 65535:
                    255 !== A[e] && e--;
                    break;
                  default:
                    if (255 === A[e - 3] && A[e - 2] >= 192 && A[e - 2] <= 254) {
                      e -= 3;
                      break;
                    }
                    throw new Error('unknown JPEG marker '.concat(a.toString(16)));
                }
                a = t();
              }
            }
          },
          {
            key: 'getResult',
            value: function () {
              var A = this.frames;
              if (0 === this.frames.length) throw new Error('no frames were decoded');
              this.frames.length > 1 && console.warn('more than one frame is not supported');
              for (var e = 0; e < this.frames.length; e++)
                for (var t = this.frames[e].components, r = 0, n = Object.keys(t); r < n.length; r++) {
                  var i = n[r];
                  (t[i].quantizationTable = this.quantizationTables[t[i].quantizationIdx]), delete t[i].quantizationIdx;
                }
              for (var a = A[0], o = a.components, g = a.componentsOrder, I = [], s = a.samplesPerLine, B = a.scanLines, c = 0; c < g.length; c++) {
                var f = o[g[c]];
                I.push({ lines: ir(0, f), scaleX: f.h / a.maxH, scaleY: f.v / a.maxV });
              }
              for (var C = new Uint8Array(s * B * I.length), u = 0, Q = 0; Q < B; ++Q)
                for (var E = 0; E < s; ++E)
                  for (var l = 0; l < I.length; ++l) {
                    var h = I[l];
                    (C[u] = h.lines[0 | (Q * h.scaleY)][0 | (E * h.scaleX)]), ++u;
                  }
              return C;
            }
          }
        ]),
        A
      );
    })(),
    or = (function (A) {
      c(t, A);
      var e = _t(t);
      function t(A) {
        var r;
        return d(this, t), ((r = e.call(this)).reader = new ar()), A.JPEGTables && r.reader.parse(A.JPEGTables), r;
      }
      return (
        s(t, [
          {
            key: 'decodeBlock',
            value: function (A) {
              return this.reader.resetFrames(), this.reader.parse(new Uint8Array(A)), this.reader.getResult().buffer;
            }
          }
        ]),
        t
      );
    })(wt),
    gr = Object.freeze({ __proto__: null, default: or });
  function Ir(A) {
    for (var e = A.length; --e >= 0; ) A[e] = 0;
  }
  Ir(new Array(576)), Ir(new Array(60)), Ir(new Array(512)), Ir(new Array(256)), Ir(new Array(29)), Ir(new Array(30));
  var sr = function (A, e, t, r) {
      for (var n = (65535 & A) | 0, i = ((A >>> 16) & 65535) | 0, a = 0; 0 !== t; ) {
        t -= a = t > 2e3 ? 2e3 : t;
        do {
          i = (i + (n = (n + e[r++]) | 0)) | 0;
        } while (--a);
        (n %= 65521), (i %= 65521);
      }
      return n | (i << 16) | 0;
    },
    Br = new Uint32Array(
      (function () {
        for (var A, e = [], t = 0; t < 256; t++) {
          A = t;
          for (var r = 0; r < 8; r++) A = 1 & A ? 3988292384 ^ (A >>> 1) : A >>> 1;
          e[t] = A;
        }
        return e;
      })()
    ),
    cr = function (A, e, t, r) {
      var n = Br,
        i = r + t;
      A ^= -1;
      for (var a = r; a < i; a++) A = (A >>> 8) ^ n[255 & (A ^ e[a])];
      return -1 ^ A;
    },
    fr = { 2: 'need dictionary', 1: 'stream end', 0: '', '-1': 'file error', '-2': 'stream error', '-3': 'data error', '-4': 'insufficient memory', '-5': 'buffer error', '-6': 'incompatible version' },
    Cr = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    },
    ur = function (A, e) {
      return Object.prototype.hasOwnProperty.call(A, e);
    },
    Qr = function (A) {
      for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
        var t = e.shift();
        if (t) {
          if ('object' !== f(t)) throw new TypeError(t + 'must be non-object');
          for (var r in t) ur(t, r) && (A[r] = t[r]);
        }
      }
      return A;
    },
    Er = function (A) {
      for (var e = 0, t = 0, r = A.length; t < r; t++) e += A[t].length;
      for (var n = new Uint8Array(e), i = 0, a = 0, o = A.length; i < o; i++) {
        var g = A[i];
        n.set(g, a), (a += g.length);
      }
      return n;
    },
    lr = !0;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (A) {
    lr = !1;
  }
  for (var hr = new Uint8Array(256), dr = 0; dr < 256; dr++) hr[dr] = dr >= 252 ? 6 : dr >= 248 ? 5 : dr >= 240 ? 4 : dr >= 224 ? 3 : dr >= 192 ? 2 : 1;
  hr[254] = hr[254] = 1;
  var wr = function (A) {
      if ('function' == typeof TextEncoder && TextEncoder.prototype.encode) return new TextEncoder().encode(A);
      var e,
        t,
        r,
        n,
        i,
        a = A.length,
        o = 0;
      for (n = 0; n < a; n++) 55296 == (64512 & (t = A.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (r = A.charCodeAt(n + 1))) && ((t = 65536 + ((t - 55296) << 10) + (r - 56320)), n++), (o += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4);
      for (e = new Uint8Array(o), i = 0, n = 0; i < o; n++)
        55296 == (64512 & (t = A.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (r = A.charCodeAt(n + 1))) && ((t = 65536 + ((t - 55296) << 10) + (r - 56320)), n++),
          t < 128
            ? (e[i++] = t)
            : t < 2048
            ? ((e[i++] = 192 | (t >>> 6)), (e[i++] = 128 | (63 & t)))
            : t < 65536
            ? ((e[i++] = 224 | (t >>> 12)), (e[i++] = 128 | ((t >>> 6) & 63)), (e[i++] = 128 | (63 & t)))
            : ((e[i++] = 240 | (t >>> 18)), (e[i++] = 128 | ((t >>> 12) & 63)), (e[i++] = 128 | ((t >>> 6) & 63)), (e[i++] = 128 | (63 & t)));
      return e;
    },
    yr = function (A, e) {
      var t,
        r,
        n = e || A.length;
      if ('function' == typeof TextDecoder && TextDecoder.prototype.decode) return new TextDecoder().decode(A.subarray(0, e));
      var i = new Array(2 * n);
      for (r = 0, t = 0; t < n; ) {
        var a = A[t++];
        if (a < 128) i[r++] = a;
        else {
          var o = hr[a];
          if (o > 4) (i[r++] = 65533), (t += o - 1);
          else {
            for (a &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && t < n; ) (a = (a << 6) | (63 & A[t++])), o--;
            o > 1 ? (i[r++] = 65533) : a < 65536 ? (i[r++] = a) : ((a -= 65536), (i[r++] = 55296 | ((a >> 10) & 1023)), (i[r++] = 56320 | (1023 & a)));
          }
        }
      }
      return (function (A, e) {
        if (e < 65534 && A.subarray && lr) return String.fromCharCode.apply(null, A.length === e ? A : A.subarray(0, e));
        for (var t = '', r = 0; r < e; r++) t += String.fromCharCode(A[r]);
        return t;
      })(i, r);
    },
    pr = function (A, e) {
      (e = e || A.length) > A.length && (e = A.length);
      for (var t = e - 1; t >= 0 && 128 == (192 & A[t]); ) t--;
      return t < 0 || 0 === t ? e : t + hr[A[t]] > e ? t : e;
    };
  var Dr = function () {
      (this.input = null), (this.next_in = 0), (this.avail_in = 0), (this.total_in = 0), (this.output = null), (this.next_out = 0), (this.avail_out = 0), (this.total_out = 0), (this.msg = ''), (this.state = null), (this.data_type = 2), (this.adler = 0);
    },
    kr = function (A, e) {
      var t,
        r,
        n,
        i,
        a,
        o,
        g,
        I,
        s,
        B,
        c,
        f,
        C,
        u,
        Q,
        E,
        l,
        h,
        d,
        w,
        y,
        p,
        D,
        k,
        m = A.state;
      (t = A.next_in),
        (D = A.input),
        (r = t + (A.avail_in - 5)),
        (n = A.next_out),
        (k = A.output),
        (i = n - (e - A.avail_out)),
        (a = n + (A.avail_out - 257)),
        (o = m.dmax),
        (g = m.wsize),
        (I = m.whave),
        (s = m.wnext),
        (B = m.window),
        (c = m.hold),
        (f = m.bits),
        (C = m.lencode),
        (u = m.distcode),
        (Q = (1 << m.lenbits) - 1),
        (E = (1 << m.distbits) - 1);
      A: do {
        f < 15 && ((c += D[t++] << f), (f += 8), (c += D[t++] << f), (f += 8)), (l = C[c & Q]);
        e: for (;;) {
          if (((c >>>= h = l >>> 24), (f -= h), 0 === (h = (l >>> 16) & 255))) k[n++] = 65535 & l;
          else {
            if (!(16 & h)) {
              if (0 == (64 & h)) {
                l = C[(65535 & l) + (c & ((1 << h) - 1))];
                continue e;
              }
              if (32 & h) {
                m.mode = 12;
                break A;
              }
              (A.msg = 'invalid literal/length code'), (m.mode = 30);
              break A;
            }
            (d = 65535 & l), (h &= 15) && (f < h && ((c += D[t++] << f), (f += 8)), (d += c & ((1 << h) - 1)), (c >>>= h), (f -= h)), f < 15 && ((c += D[t++] << f), (f += 8), (c += D[t++] << f), (f += 8)), (l = u[c & E]);
            t: for (;;) {
              if (((c >>>= h = l >>> 24), (f -= h), !(16 & (h = (l >>> 16) & 255)))) {
                if (0 == (64 & h)) {
                  l = u[(65535 & l) + (c & ((1 << h) - 1))];
                  continue t;
                }
                (A.msg = 'invalid distance code'), (m.mode = 30);
                break A;
              }
              if (((w = 65535 & l), f < (h &= 15) && ((c += D[t++] << f), (f += 8) < h && ((c += D[t++] << f), (f += 8))), (w += c & ((1 << h) - 1)) > o)) {
                (A.msg = 'invalid distance too far back'), (m.mode = 30);
                break A;
              }
              if (((c >>>= h), (f -= h), w > (h = n - i))) {
                if ((h = w - h) > I && m.sane) {
                  (A.msg = 'invalid distance too far back'), (m.mode = 30);
                  break A;
                }
                if (((y = 0), (p = B), 0 === s)) {
                  if (((y += g - h), h < d)) {
                    d -= h;
                    do {
                      k[n++] = B[y++];
                    } while (--h);
                    (y = n - w), (p = k);
                  }
                } else if (s < h) {
                  if (((y += g + s - h), (h -= s) < d)) {
                    d -= h;
                    do {
                      k[n++] = B[y++];
                    } while (--h);
                    if (((y = 0), s < d)) {
                      d -= h = s;
                      do {
                        k[n++] = B[y++];
                      } while (--h);
                      (y = n - w), (p = k);
                    }
                  }
                } else if (((y += s - h), h < d)) {
                  d -= h;
                  do {
                    k[n++] = B[y++];
                  } while (--h);
                  (y = n - w), (p = k);
                }
                for (; d > 2; ) (k[n++] = p[y++]), (k[n++] = p[y++]), (k[n++] = p[y++]), (d -= 3);
                d && ((k[n++] = p[y++]), d > 1 && (k[n++] = p[y++]));
              } else {
                y = n - w;
                do {
                  (k[n++] = k[y++]), (k[n++] = k[y++]), (k[n++] = k[y++]), (d -= 3);
                } while (d > 2);
                d && ((k[n++] = k[y++]), d > 1 && (k[n++] = k[y++]));
              }
              break;
            }
          }
          break;
        }
      } while (t < r && n < a);
      (t -= d = f >> 3), (c &= (1 << (f -= d << 3)) - 1), (A.next_in = t), (A.next_out = n), (A.avail_in = t < r ? r - t + 5 : 5 - (t - r)), (A.avail_out = n < a ? a - n + 257 : 257 - (n - a)), (m.hold = c), (m.bits = f);
    },
    mr = 15,
    vr = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
    br = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
    Gr = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
    Sr = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]),
    Fr = function (A, e, t, r, n, i, a, o) {
      var g,
        I,
        s,
        B,
        c,
        f,
        C,
        u,
        Q,
        E = o.bits,
        l = 0,
        h = 0,
        d = 0,
        w = 0,
        y = 0,
        p = 0,
        D = 0,
        k = 0,
        m = 0,
        v = 0,
        b = null,
        G = 0,
        S = new Uint16Array(16),
        F = new Uint16Array(16),
        R = null,
        x = 0;
      for (l = 0; l <= mr; l++) S[l] = 0;
      for (h = 0; h < r; h++) S[e[t + h]]++;
      for (y = E, w = mr; w >= 1 && 0 === S[w]; w--);
      if ((y > w && (y = w), 0 === w)) return (n[i++] = 20971520), (n[i++] = 20971520), (o.bits = 1), 0;
      for (d = 1; d < w && 0 === S[d]; d++);
      for (y < d && (y = d), k = 1, l = 1; l <= mr; l++) if (((k <<= 1), (k -= S[l]) < 0)) return -1;
      if (k > 0 && (0 === A || 1 !== w)) return -1;
      for (F[1] = 0, l = 1; l < mr; l++) F[l + 1] = F[l] + S[l];
      for (h = 0; h < r; h++) 0 !== e[t + h] && (a[F[e[t + h]]++] = h);
      if ((0 === A ? ((b = R = a), (f = 19)) : 1 === A ? ((b = vr), (G -= 257), (R = br), (x -= 257), (f = 256)) : ((b = Gr), (R = Sr), (f = -1)), (v = 0), (h = 0), (l = d), (c = i), (p = y), (D = 0), (s = -1), (B = (m = 1 << y) - 1), (1 === A && m > 852) || (2 === A && m > 592))) return 1;
      for (;;) {
        (C = l - D), a[h] < f ? ((u = 0), (Q = a[h])) : a[h] > f ? ((u = R[x + a[h]]), (Q = b[G + a[h]])) : ((u = 96), (Q = 0)), (g = 1 << (l - D)), (d = I = 1 << p);
        do {
          n[c + (v >> D) + (I -= g)] = (C << 24) | (u << 16) | Q | 0;
        } while (0 !== I);
        for (g = 1 << (l - 1); v & g; ) g >>= 1;
        if ((0 !== g ? ((v &= g - 1), (v += g)) : (v = 0), h++, 0 == --S[l])) {
          if (l === w) break;
          l = e[t + a[h]];
        }
        if (l > y && (v & B) !== s) {
          for (0 === D && (D = y), c += d, k = 1 << (p = l - D); p + D < w && !((k -= S[p + D]) <= 0); ) p++, (k <<= 1);
          if (((m += 1 << p), (1 === A && m > 852) || (2 === A && m > 592))) return 1;
          n[(s = v & B)] = (y << 24) | (p << 16) | (c - i) | 0;
        }
      }
      return 0 !== v && (n[c + v] = ((l - D) << 24) | (64 << 16) | 0), (o.bits = y), 0;
    },
    Rr = Cr.Z_FINISH,
    xr = Cr.Z_BLOCK,
    Ur = Cr.Z_TREES,
    Lr = Cr.Z_OK,
    Mr = Cr.Z_STREAM_END,
    Nr = Cr.Z_NEED_DICT,
    qr = Cr.Z_STREAM_ERROR,
    Jr = Cr.Z_DATA_ERROR,
    Or = Cr.Z_MEM_ERROR,
    Yr = Cr.Z_BUF_ERROR,
    Hr = Cr.Z_DEFLATED,
    Pr = 12,
    Kr = 30,
    Tr = function (A) {
      return ((A >>> 24) & 255) + ((A >>> 8) & 65280) + ((65280 & A) << 8) + ((255 & A) << 24);
    };
  function Vr() {
    (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new Uint16Array(320)),
      (this.work = new Uint16Array(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  var _r,
    jr,
    Xr = function (A) {
      if (!A || !A.state) return qr;
      var e = A.state;
      return (
        (A.total_in = A.total_out = e.total = 0),
        (A.msg = ''),
        e.wrap && (A.adler = 1 & e.wrap),
        (e.mode = 1),
        (e.last = 0),
        (e.havedict = 0),
        (e.dmax = 32768),
        (e.head = null),
        (e.hold = 0),
        (e.bits = 0),
        (e.lencode = e.lendyn = new Int32Array(852)),
        (e.distcode = e.distdyn = new Int32Array(592)),
        (e.sane = 1),
        (e.back = -1),
        Lr
      );
    },
    Wr = function (A) {
      if (!A || !A.state) return qr;
      var e = A.state;
      return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), Xr(A);
    },
    Zr = function (A, e) {
      var t;
      if (!A || !A.state) return qr;
      var r = A.state;
      return e < 0 ? ((t = 0), (e = -e)) : ((t = 1 + (e >> 4)), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? qr : (null !== r.window && r.wbits !== e && (r.window = null), (r.wrap = t), (r.wbits = e), Wr(A));
    },
    zr = function (A, e) {
      if (!A) return qr;
      var t = new Vr();
      (A.state = t), (t.window = null);
      var r = Zr(A, e);
      return r !== Lr && (A.state = null), r;
    },
    $r = !0,
    An = function (A) {
      if ($r) {
        (_r = new Int32Array(512)), (jr = new Int32Array(32));
        for (var e = 0; e < 144; ) A.lens[e++] = 8;
        for (; e < 256; ) A.lens[e++] = 9;
        for (; e < 280; ) A.lens[e++] = 7;
        for (; e < 288; ) A.lens[e++] = 8;
        for (Fr(1, A.lens, 0, 288, _r, 0, A.work, { bits: 9 }), e = 0; e < 32; ) A.lens[e++] = 5;
        Fr(2, A.lens, 0, 32, jr, 0, A.work, { bits: 5 }), ($r = !1);
      }
      (A.lencode = _r), (A.lenbits = 9), (A.distcode = jr), (A.distbits = 5);
    },
    en = function (A, e, t, r) {
      var n,
        i = A.state;
      return (
        null === i.window && ((i.wsize = 1 << i.wbits), (i.wnext = 0), (i.whave = 0), (i.window = new Uint8Array(i.wsize))),
        r >= i.wsize
          ? (i.window.set(e.subarray(t - i.wsize, t), 0), (i.wnext = 0), (i.whave = i.wsize))
          : ((n = i.wsize - i.wnext) > r && (n = r), i.window.set(e.subarray(t - r, t - r + n), i.wnext), (r -= n) ? (i.window.set(e.subarray(t - r, t), 0), (i.wnext = r), (i.whave = i.wsize)) : ((i.wnext += n), i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += n))),
        0
      );
    },
    tn = {
      inflateReset: Wr,
      inflateReset2: Zr,
      inflateResetKeep: Xr,
      inflateInit: function (A) {
        return zr(A, 15);
      },
      inflateInit2: zr,
      inflate: function (A, e) {
        var t,
          r,
          n,
          i,
          a,
          o,
          g,
          I,
          s,
          B,
          c,
          f,
          C,
          u,
          Q,
          E,
          l,
          h,
          d,
          w,
          y,
          p,
          D,
          k,
          m = 0,
          v = new Uint8Array(4),
          b = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (!A || !A.state || !A.output || (!A.input && 0 !== A.avail_in)) return qr;
        (t = A.state).mode === Pr && (t.mode = 13), (a = A.next_out), (n = A.output), (g = A.avail_out), (i = A.next_in), (r = A.input), (o = A.avail_in), (I = t.hold), (s = t.bits), (B = o), (c = g), (p = Lr);
        A: for (;;)
          switch (t.mode) {
            case 1:
              if (0 === t.wrap) {
                t.mode = 13;
                break;
              }
              for (; s < 16; ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              if (2 & t.wrap && 35615 === I) {
                (t.check = 0), (v[0] = 255 & I), (v[1] = (I >>> 8) & 255), (t.check = cr(t.check, v, 2, 0)), (I = 0), (s = 0), (t.mode = 2);
                break;
              }
              if (((t.flags = 0), t.head && (t.head.done = !1), !(1 & t.wrap) || (((255 & I) << 8) + (I >> 8)) % 31)) {
                (A.msg = 'incorrect header check'), (t.mode = Kr);
                break;
              }
              if ((15 & I) !== Hr) {
                (A.msg = 'unknown compression method'), (t.mode = Kr);
                break;
              }
              if (((s -= 4), (y = 8 + (15 & (I >>>= 4))), 0 === t.wbits)) t.wbits = y;
              else if (y > t.wbits) {
                (A.msg = 'invalid window size'), (t.mode = Kr);
                break;
              }
              (t.dmax = 1 << t.wbits), (A.adler = t.check = 1), (t.mode = 512 & I ? 10 : Pr), (I = 0), (s = 0);
              break;
            case 2:
              for (; s < 16; ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              if (((t.flags = I), (255 & t.flags) !== Hr)) {
                (A.msg = 'unknown compression method'), (t.mode = Kr);
                break;
              }
              if (57344 & t.flags) {
                (A.msg = 'unknown header flags set'), (t.mode = Kr);
                break;
              }
              t.head && (t.head.text = (I >> 8) & 1), 512 & t.flags && ((v[0] = 255 & I), (v[1] = (I >>> 8) & 255), (t.check = cr(t.check, v, 2, 0))), (I = 0), (s = 0), (t.mode = 3);
            case 3:
              for (; s < 32; ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              t.head && (t.head.time = I), 512 & t.flags && ((v[0] = 255 & I), (v[1] = (I >>> 8) & 255), (v[2] = (I >>> 16) & 255), (v[3] = (I >>> 24) & 255), (t.check = cr(t.check, v, 4, 0))), (I = 0), (s = 0), (t.mode = 4);
            case 4:
              for (; s < 16; ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              t.head && ((t.head.xflags = 255 & I), (t.head.os = I >> 8)), 512 & t.flags && ((v[0] = 255 & I), (v[1] = (I >>> 8) & 255), (t.check = cr(t.check, v, 2, 0))), (I = 0), (s = 0), (t.mode = 5);
            case 5:
              if (1024 & t.flags) {
                for (; s < 16; ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                (t.length = I), t.head && (t.head.extra_len = I), 512 & t.flags && ((v[0] = 255 & I), (v[1] = (I >>> 8) & 255), (t.check = cr(t.check, v, 2, 0))), (I = 0), (s = 0);
              } else t.head && (t.head.extra = null);
              t.mode = 6;
            case 6:
              if (
                1024 & t.flags &&
                ((f = t.length) > o && (f = o),
                f && (t.head && ((y = t.head.extra_len - t.length), t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(r.subarray(i, i + f), y)), 512 & t.flags && (t.check = cr(t.check, r, f, i)), (o -= f), (i += f), (t.length -= f)),
                t.length)
              )
                break A;
              (t.length = 0), (t.mode = 7);
            case 7:
              if (2048 & t.flags) {
                if (0 === o) break A;
                f = 0;
                do {
                  (y = r[i + f++]), t.head && y && t.length < 65536 && (t.head.name += String.fromCharCode(y));
                } while (y && f < o);
                if ((512 & t.flags && (t.check = cr(t.check, r, f, i)), (o -= f), (i += f), y)) break A;
              } else t.head && (t.head.name = null);
              (t.length = 0), (t.mode = 8);
            case 8:
              if (4096 & t.flags) {
                if (0 === o) break A;
                f = 0;
                do {
                  (y = r[i + f++]), t.head && y && t.length < 65536 && (t.head.comment += String.fromCharCode(y));
                } while (y && f < o);
                if ((512 & t.flags && (t.check = cr(t.check, r, f, i)), (o -= f), (i += f), y)) break A;
              } else t.head && (t.head.comment = null);
              t.mode = 9;
            case 9:
              if (512 & t.flags) {
                for (; s < 16; ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                if (I !== (65535 & t.check)) {
                  (A.msg = 'header crc mismatch'), (t.mode = Kr);
                  break;
                }
                (I = 0), (s = 0);
              }
              t.head && ((t.head.hcrc = (t.flags >> 9) & 1), (t.head.done = !0)), (A.adler = t.check = 0), (t.mode = Pr);
              break;
            case 10:
              for (; s < 32; ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              (A.adler = t.check = Tr(I)), (I = 0), (s = 0), (t.mode = 11);
            case 11:
              if (0 === t.havedict) return (A.next_out = a), (A.avail_out = g), (A.next_in = i), (A.avail_in = o), (t.hold = I), (t.bits = s), Nr;
              (A.adler = t.check = 1), (t.mode = Pr);
            case Pr:
              if (e === xr || e === Ur) break A;
            case 13:
              if (t.last) {
                (I >>>= 7 & s), (s -= 7 & s), (t.mode = 27);
                break;
              }
              for (; s < 3; ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              switch (((t.last = 1 & I), (s -= 1), 3 & (I >>>= 1))) {
                case 0:
                  t.mode = 14;
                  break;
                case 1:
                  if ((An(t), (t.mode = 20), e === Ur)) {
                    (I >>>= 2), (s -= 2);
                    break A;
                  }
                  break;
                case 2:
                  t.mode = 17;
                  break;
                case 3:
                  (A.msg = 'invalid block type'), (t.mode = Kr);
              }
              (I >>>= 2), (s -= 2);
              break;
            case 14:
              for (I >>>= 7 & s, s -= 7 & s; s < 32; ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              if ((65535 & I) != ((I >>> 16) ^ 65535)) {
                (A.msg = 'invalid stored block lengths'), (t.mode = Kr);
                break;
              }
              if (((t.length = 65535 & I), (I = 0), (s = 0), (t.mode = 15), e === Ur)) break A;
            case 15:
              t.mode = 16;
            case 16:
              if ((f = t.length)) {
                if ((f > o && (f = o), f > g && (f = g), 0 === f)) break A;
                n.set(r.subarray(i, i + f), a), (o -= f), (i += f), (g -= f), (a += f), (t.length -= f);
                break;
              }
              t.mode = Pr;
              break;
            case 17:
              for (; s < 14; ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              if (((t.nlen = 257 + (31 & I)), (I >>>= 5), (s -= 5), (t.ndist = 1 + (31 & I)), (I >>>= 5), (s -= 5), (t.ncode = 4 + (15 & I)), (I >>>= 4), (s -= 4), t.nlen > 286 || t.ndist > 30)) {
                (A.msg = 'too many length or distance symbols'), (t.mode = Kr);
                break;
              }
              (t.have = 0), (t.mode = 18);
            case 18:
              for (; t.have < t.ncode; ) {
                for (; s < 3; ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                (t.lens[b[t.have++]] = 7 & I), (I >>>= 3), (s -= 3);
              }
              for (; t.have < 19; ) t.lens[b[t.have++]] = 0;
              if (((t.lencode = t.lendyn), (t.lenbits = 7), (D = { bits: t.lenbits }), (p = Fr(0, t.lens, 0, 19, t.lencode, 0, t.work, D)), (t.lenbits = D.bits), p)) {
                (A.msg = 'invalid code lengths set'), (t.mode = Kr);
                break;
              }
              (t.have = 0), (t.mode = 19);
            case 19:
              for (; t.have < t.nlen + t.ndist; ) {
                for (; (E = ((m = t.lencode[I & ((1 << t.lenbits) - 1)]) >>> 16) & 255), (l = 65535 & m), !((Q = m >>> 24) <= s); ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                if (l < 16) (I >>>= Q), (s -= Q), (t.lens[t.have++] = l);
                else {
                  if (16 === l) {
                    for (k = Q + 2; s < k; ) {
                      if (0 === o) break A;
                      o--, (I += r[i++] << s), (s += 8);
                    }
                    if (((I >>>= Q), (s -= Q), 0 === t.have)) {
                      (A.msg = 'invalid bit length repeat'), (t.mode = Kr);
                      break;
                    }
                    (y = t.lens[t.have - 1]), (f = 3 + (3 & I)), (I >>>= 2), (s -= 2);
                  } else if (17 === l) {
                    for (k = Q + 3; s < k; ) {
                      if (0 === o) break A;
                      o--, (I += r[i++] << s), (s += 8);
                    }
                    (s -= Q), (y = 0), (f = 3 + (7 & (I >>>= Q))), (I >>>= 3), (s -= 3);
                  } else {
                    for (k = Q + 7; s < k; ) {
                      if (0 === o) break A;
                      o--, (I += r[i++] << s), (s += 8);
                    }
                    (s -= Q), (y = 0), (f = 11 + (127 & (I >>>= Q))), (I >>>= 7), (s -= 7);
                  }
                  if (t.have + f > t.nlen + t.ndist) {
                    (A.msg = 'invalid bit length repeat'), (t.mode = Kr);
                    break;
                  }
                  for (; f--; ) t.lens[t.have++] = y;
                }
              }
              if (t.mode === Kr) break;
              if (0 === t.lens[256]) {
                (A.msg = 'invalid code -- missing end-of-block'), (t.mode = Kr);
                break;
              }
              if (((t.lenbits = 9), (D = { bits: t.lenbits }), (p = Fr(1, t.lens, 0, t.nlen, t.lencode, 0, t.work, D)), (t.lenbits = D.bits), p)) {
                (A.msg = 'invalid literal/lengths set'), (t.mode = Kr);
                break;
              }
              if (((t.distbits = 6), (t.distcode = t.distdyn), (D = { bits: t.distbits }), (p = Fr(2, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, D)), (t.distbits = D.bits), p)) {
                (A.msg = 'invalid distances set'), (t.mode = Kr);
                break;
              }
              if (((t.mode = 20), e === Ur)) break A;
            case 20:
              t.mode = 21;
            case 21:
              if (o >= 6 && g >= 258) {
                (A.next_out = a), (A.avail_out = g), (A.next_in = i), (A.avail_in = o), (t.hold = I), (t.bits = s), kr(A, c), (a = A.next_out), (n = A.output), (g = A.avail_out), (i = A.next_in), (r = A.input), (o = A.avail_in), (I = t.hold), (s = t.bits), t.mode === Pr && (t.back = -1);
                break;
              }
              for (t.back = 0; (E = ((m = t.lencode[I & ((1 << t.lenbits) - 1)]) >>> 16) & 255), (l = 65535 & m), !((Q = m >>> 24) <= s); ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              if (E && 0 == (240 & E)) {
                for (h = Q, d = E, w = l; (E = ((m = t.lencode[w + ((I & ((1 << (h + d)) - 1)) >> h)]) >>> 16) & 255), (l = 65535 & m), !(h + (Q = m >>> 24) <= s); ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                (I >>>= h), (s -= h), (t.back += h);
              }
              if (((I >>>= Q), (s -= Q), (t.back += Q), (t.length = l), 0 === E)) {
                t.mode = 26;
                break;
              }
              if (32 & E) {
                (t.back = -1), (t.mode = Pr);
                break;
              }
              if (64 & E) {
                (A.msg = 'invalid literal/length code'), (t.mode = Kr);
                break;
              }
              (t.extra = 15 & E), (t.mode = 22);
            case 22:
              if (t.extra) {
                for (k = t.extra; s < k; ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                (t.length += I & ((1 << t.extra) - 1)), (I >>>= t.extra), (s -= t.extra), (t.back += t.extra);
              }
              (t.was = t.length), (t.mode = 23);
            case 23:
              for (; (E = ((m = t.distcode[I & ((1 << t.distbits) - 1)]) >>> 16) & 255), (l = 65535 & m), !((Q = m >>> 24) <= s); ) {
                if (0 === o) break A;
                o--, (I += r[i++] << s), (s += 8);
              }
              if (0 == (240 & E)) {
                for (h = Q, d = E, w = l; (E = ((m = t.distcode[w + ((I & ((1 << (h + d)) - 1)) >> h)]) >>> 16) & 255), (l = 65535 & m), !(h + (Q = m >>> 24) <= s); ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                (I >>>= h), (s -= h), (t.back += h);
              }
              if (((I >>>= Q), (s -= Q), (t.back += Q), 64 & E)) {
                (A.msg = 'invalid distance code'), (t.mode = Kr);
                break;
              }
              (t.offset = l), (t.extra = 15 & E), (t.mode = 24);
            case 24:
              if (t.extra) {
                for (k = t.extra; s < k; ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                (t.offset += I & ((1 << t.extra) - 1)), (I >>>= t.extra), (s -= t.extra), (t.back += t.extra);
              }
              if (t.offset > t.dmax) {
                (A.msg = 'invalid distance too far back'), (t.mode = Kr);
                break;
              }
              t.mode = 25;
            case 25:
              if (0 === g) break A;
              if (((f = c - g), t.offset > f)) {
                if ((f = t.offset - f) > t.whave && t.sane) {
                  (A.msg = 'invalid distance too far back'), (t.mode = Kr);
                  break;
                }
                f > t.wnext ? ((f -= t.wnext), (C = t.wsize - f)) : (C = t.wnext - f), f > t.length && (f = t.length), (u = t.window);
              } else (u = n), (C = a - t.offset), (f = t.length);
              f > g && (f = g), (g -= f), (t.length -= f);
              do {
                n[a++] = u[C++];
              } while (--f);
              0 === t.length && (t.mode = 21);
              break;
            case 26:
              if (0 === g) break A;
              (n[a++] = t.length), g--, (t.mode = 21);
              break;
            case 27:
              if (t.wrap) {
                for (; s < 32; ) {
                  if (0 === o) break A;
                  o--, (I |= r[i++] << s), (s += 8);
                }
                if (((c -= g), (A.total_out += c), (t.total += c), c && (A.adler = t.check = t.flags ? cr(t.check, n, c, a - c) : sr(t.check, n, c, a - c)), (c = g), (t.flags ? I : Tr(I)) !== t.check)) {
                  (A.msg = 'incorrect data check'), (t.mode = Kr);
                  break;
                }
                (I = 0), (s = 0);
              }
              t.mode = 28;
            case 28:
              if (t.wrap && t.flags) {
                for (; s < 32; ) {
                  if (0 === o) break A;
                  o--, (I += r[i++] << s), (s += 8);
                }
                if (I !== (4294967295 & t.total)) {
                  (A.msg = 'incorrect length check'), (t.mode = Kr);
                  break;
                }
                (I = 0), (s = 0);
              }
              t.mode = 29;
            case 29:
              p = Mr;
              break A;
            case Kr:
              p = Jr;
              break A;
            case 31:
              return Or;
            default:
              return qr;
          }
        return (
          (A.next_out = a),
          (A.avail_out = g),
          (A.next_in = i),
          (A.avail_in = o),
          (t.hold = I),
          (t.bits = s),
          (t.wsize || (c !== A.avail_out && t.mode < Kr && (t.mode < 27 || e !== Rr))) && en(A, A.output, A.next_out, c - A.avail_out),
          (B -= A.avail_in),
          (c -= A.avail_out),
          (A.total_in += B),
          (A.total_out += c),
          (t.total += c),
          t.wrap && c && (A.adler = t.check = t.flags ? cr(t.check, n, c, A.next_out - c) : sr(t.check, n, c, A.next_out - c)),
          (A.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Pr ? 128 : 0) + (20 === t.mode || 15 === t.mode ? 256 : 0)),
          ((0 === B && 0 === c) || e === Rr) && p === Lr && (p = Yr),
          p
        );
      },
      inflateEnd: function (A) {
        if (!A || !A.state) return qr;
        var e = A.state;
        return e.window && (e.window = null), (A.state = null), Lr;
      },
      inflateGetHeader: function (A, e) {
        if (!A || !A.state) return qr;
        var t = A.state;
        return 0 == (2 & t.wrap) ? qr : ((t.head = e), (e.done = !1), Lr);
      },
      inflateSetDictionary: function (A, e) {
        var t,
          r = e.length;
        return A && A.state ? (0 !== (t = A.state).wrap && 11 !== t.mode ? qr : 11 === t.mode && sr(1, e, r, 0) !== t.check ? Jr : en(A, e, r, r) ? ((t.mode = 31), Or) : ((t.havedict = 1), Lr)) : qr;
      },
      inflateInfo: 'pako inflate (from Nodeca project)'
    };
  var rn = function () {
      (this.text = 0), (this.time = 0), (this.xflags = 0), (this.os = 0), (this.extra = null), (this.extra_len = 0), (this.name = ''), (this.comment = ''), (this.hcrc = 0), (this.done = !1);
    },
    nn = Object.prototype.toString,
    an = Cr.Z_NO_FLUSH,
    on = Cr.Z_FINISH,
    gn = Cr.Z_OK,
    In = Cr.Z_STREAM_END,
    sn = Cr.Z_NEED_DICT,
    Bn = Cr.Z_STREAM_ERROR,
    cn = Cr.Z_DATA_ERROR,
    fn = Cr.Z_MEM_ERROR;
  function Cn(A) {
    this.options = Qr({ chunkSize: 65536, windowBits: 15, to: '' }, A || {});
    var e = this.options;
    e.raw && e.windowBits >= 0 && e.windowBits < 16 && ((e.windowBits = -e.windowBits), 0 === e.windowBits && (e.windowBits = -15)),
      !(e.windowBits >= 0 && e.windowBits < 16) || (A && A.windowBits) || (e.windowBits += 32),
      e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
      (this.err = 0),
      (this.msg = ''),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Dr()),
      (this.strm.avail_out = 0);
    var t = tn.inflateInit2(this.strm, e.windowBits);
    if (t !== gn) throw new Error(fr[t]);
    if (
      ((this.header = new rn()),
      tn.inflateGetHeader(this.strm, this.header),
      e.dictionary && ('string' == typeof e.dictionary ? (e.dictionary = wr(e.dictionary)) : '[object ArrayBuffer]' === nn.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (t = tn.inflateSetDictionary(this.strm, e.dictionary)) !== gn))
    )
      throw new Error(fr[t]);
  }
  function un(A, e) {
    var t = new Cn(e);
    if ((t.push(A), t.err)) throw t.msg || fr[t.err];
    return t.result;
  }
  (Cn.prototype.push = function (A, e) {
    var t,
      r,
      n,
      i = this.strm,
      a = this.options.chunkSize,
      o = this.options.dictionary;
    if (this.ended) return !1;
    for (r = e === ~~e ? e : !0 === e ? on : an, '[object ArrayBuffer]' === nn.call(A) ? (i.input = new Uint8Array(A)) : (i.input = A), i.next_in = 0, i.avail_in = i.input.length; ; ) {
      for (
        0 === i.avail_out && ((i.output = new Uint8Array(a)), (i.next_out = 0), (i.avail_out = a)), (t = tn.inflate(i, r)) === sn && o && ((t = tn.inflateSetDictionary(i, o)) === gn ? (t = tn.inflate(i, r)) : t === cn && (t = sn));
        i.avail_in > 0 && t === In && i.state.wrap > 0 && 0 !== A[i.next_in];

      )
        tn.inflateReset(i), (t = tn.inflate(i, r));
      switch (t) {
        case Bn:
        case cn:
        case sn:
        case fn:
          return this.onEnd(t), (this.ended = !0), !1;
      }
      if (((n = i.avail_out), i.next_out && (0 === i.avail_out || t === In)))
        if ('string' === this.options.to) {
          var g = pr(i.output, i.next_out),
            I = i.next_out - g,
            s = yr(i.output, g);
          (i.next_out = I), (i.avail_out = a - I), I && i.output.set(i.output.subarray(g, g + I), 0), this.onData(s);
        } else this.onData(i.output.length === i.next_out ? i.output : i.output.subarray(0, i.next_out));
      if (t !== gn || 0 !== n) {
        if (t === In) return (t = tn.inflateEnd(this.strm)), this.onEnd(t), (this.ended = !0), !0;
        if (0 === i.avail_in) break;
      }
    }
    return !0;
  }),
    (Cn.prototype.onData = function (A) {
      this.chunks.push(A);
    }),
    (Cn.prototype.onEnd = function (A) {
      A === gn && ('string' === this.options.to ? (this.result = this.chunks.join('')) : (this.result = Er(this.chunks))), (this.chunks = []), (this.err = A), (this.msg = this.strm.msg);
    });
  var Qn = {
    Inflate: Cn,
    inflate: un,
    inflateRaw: function (A, e) {
      return ((e = e || {}).raw = !0), un(A, e);
    },
    ungzip: un,
    constants: Cr
  }.inflate;
  function En(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var ln = (function (A) {
      c(t, A);
      var e = En(t);
      function t() {
        return d(this, t), e.apply(this, arguments);
      }
      return (
        s(t, [
          {
            key: 'decodeBlock',
            value: function (A) {
              return Qn(new Uint8Array(A)).buffer;
            }
          }
        ]),
        t
      );
    })(wt),
    hn = Object.freeze({ __proto__: null, default: ln });
  function dn(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var wn = (function (A) {
      c(t, A);
      var e = dn(t);
      function t() {
        return d(this, t), e.apply(this, arguments);
      }
      return (
        s(t, [
          {
            key: 'decodeBlock',
            value: function (A) {
              for (var e = new DataView(A), t = [], r = 0; r < A.byteLength; ++r) {
                var n = e.getInt8(r);
                if (n < 0) {
                  var i = e.getUint8(r + 1);
                  n = -n;
                  for (var a = 0; a <= n; ++a) t.push(i);
                  r += 1;
                } else {
                  for (var o = 0; o <= n; ++o) t.push(e.getUint8(r + o + 1));
                  r += n + 1;
                }
              }
              return new Uint8Array(t).buffer;
            }
          }
        ]),
        t
      );
    })(wt),
    yn = Object.freeze({ __proto__: null, default: wn }),
    pn = { exports: {} };
  !(function (A) {
    /* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */
    !(function () {
      var e,
        t,
        r,
        n,
        i,
        a,
        o,
        g,
        I =
          ((e = {
            defaultNoDataValue: -34027999387901484e22,
            decode: function (A, a) {
              var o = (a = a || {}).encodedMaskData || null === a.encodedMaskData,
                g = i(A, a.inputOffset || 0, o),
                I = null !== a.noDataValue ? a.noDataValue : e.defaultNoDataValue,
                s = t(g, a.pixelType || Float32Array, a.encodedMaskData, I, a.returnMask),
                B = { width: g.width, height: g.height, pixelData: s.resultPixels, minValue: s.minValue, maxValue: g.pixels.maxValue, noDataValue: I };
              return s.resultMask && (B.maskData = s.resultMask), a.returnEncodedMask && g.mask && (B.encodedMaskData = g.mask.bitset ? g.mask.bitset : null), a.returnFileInfo && ((B.fileInfo = r(g)), a.computeUsedBitDepths && (B.fileInfo.bitDepths = n(g))), B;
            }
          }),
          (t = function (A, e, t, r, n) {
            var i,
              o,
              g,
              I = 0,
              s = A.pixels.numBlocksX,
              B = A.pixels.numBlocksY,
              c = Math.floor(A.width / s),
              f = Math.floor(A.height / B),
              C = 2 * A.maxZError,
              u = Number.MAX_VALUE;
            (t = t || (A.mask ? A.mask.bitset : null)), (o = new e(A.width * A.height)), n && t && (g = new Uint8Array(A.width * A.height));
            for (var Q, E, l = new Float32Array(c * f), h = 0; h <= B; h++) {
              var d = h !== B ? f : A.height % B;
              if (0 !== d)
                for (var w = 0; w <= s; w++) {
                  var y = w !== s ? c : A.width % s;
                  if (0 !== y) {
                    var p,
                      D,
                      k,
                      m,
                      v = h * A.width * f + w * c,
                      b = A.width - y,
                      G = A.pixels.blocks[I];
                    if ((G.encoding < 2 ? (0 === G.encoding ? (p = G.rawData) : (a(G.stuffedData, G.bitsPerPixel, G.numValidPixels, G.offset, C, l, A.pixels.maxValue), (p = l)), (D = 0)) : (k = 2 === G.encoding ? 0 : G.offset), t))
                      for (E = 0; E < d; E++) {
                        for (7 & v && ((m = t[v >> 3]), (m <<= 7 & v)), Q = 0; Q < y; Q++) 7 & v || (m = t[v >> 3]), 128 & m ? (g && (g[v] = 1), (u = u > (i = G.encoding < 2 ? p[D++] : k) ? i : u), (o[v++] = i)) : (g && (g[v] = 0), (o[v++] = r)), (m <<= 1);
                        v += b;
                      }
                    else if (G.encoding < 2)
                      for (E = 0; E < d; E++) {
                        for (Q = 0; Q < y; Q++) (u = u > (i = p[D++]) ? i : u), (o[v++] = i);
                        v += b;
                      }
                    else
                      for (u = u > k ? k : u, E = 0; E < d; E++) {
                        for (Q = 0; Q < y; Q++) o[v++] = k;
                        v += b;
                      }
                    if (1 === G.encoding && D !== G.numValidPixels) throw 'Block and Mask do not match';
                    I++;
                  }
                }
            }
            return { resultPixels: o, resultMask: g, minValue: u };
          }),
          (r = function (A) {
            return {
              fileIdentifierString: A.fileIdentifierString,
              fileVersion: A.fileVersion,
              imageType: A.imageType,
              height: A.height,
              width: A.width,
              maxZError: A.maxZError,
              eofOffset: A.eofOffset,
              mask: A.mask ? { numBlocksX: A.mask.numBlocksX, numBlocksY: A.mask.numBlocksY, numBytes: A.mask.numBytes, maxValue: A.mask.maxValue } : null,
              pixels: { numBlocksX: A.pixels.numBlocksX, numBlocksY: A.pixels.numBlocksY, numBytes: A.pixels.numBytes, maxValue: A.pixels.maxValue, noDataValue: A.noDataValue }
            };
          }),
          (n = function (A) {
            for (var e = A.pixels.numBlocksX * A.pixels.numBlocksY, t = {}, r = 0; r < e; r++) {
              var n = A.pixels.blocks[r];
              0 === n.encoding ? (t.float32 = !0) : 1 === n.encoding ? (t[n.bitsPerPixel] = !0) : (t[0] = !0);
            }
            return Object.keys(t);
          }),
          (i = function (A, e, t) {
            var r = {},
              n = new Uint8Array(A, e, 10);
            if (((r.fileIdentifierString = String.fromCharCode.apply(null, n)), 'CntZImage' !== r.fileIdentifierString.trim())) throw 'Unexpected file identifier string: ' + r.fileIdentifierString;
            e += 10;
            var i = new DataView(A, e, 24);
            if (((r.fileVersion = i.getInt32(0, !0)), (r.imageType = i.getInt32(4, !0)), (r.height = i.getUint32(8, !0)), (r.width = i.getUint32(12, !0)), (r.maxZError = i.getFloat64(16, !0)), (e += 24), !t))
              if (((i = new DataView(A, e, 16)), (r.mask = {}), (r.mask.numBlocksY = i.getUint32(0, !0)), (r.mask.numBlocksX = i.getUint32(4, !0)), (r.mask.numBytes = i.getUint32(8, !0)), (r.mask.maxValue = i.getFloat32(12, !0)), (e += 16), r.mask.numBytes > 0)) {
                var a = new Uint8Array(Math.ceil((r.width * r.height) / 8)),
                  o = (i = new DataView(A, e, r.mask.numBytes)).getInt16(0, !0),
                  g = 2,
                  I = 0;
                do {
                  if (o > 0) for (; o--; ) a[I++] = i.getUint8(g++);
                  else {
                    var s = i.getUint8(g++);
                    for (o = -o; o--; ) a[I++] = s;
                  }
                  (o = i.getInt16(g, !0)), (g += 2);
                } while (g < r.mask.numBytes);
                if (-32768 !== o || I < a.length) throw 'Unexpected end of mask RLE encoding';
                (r.mask.bitset = a), (e += r.mask.numBytes);
              } else 0 == (r.mask.numBytes | r.mask.numBlocksY | r.mask.maxValue) && (r.mask.bitset = new Uint8Array(Math.ceil((r.width * r.height) / 8)));
            (i = new DataView(A, e, 16)), (r.pixels = {}), (r.pixels.numBlocksY = i.getUint32(0, !0)), (r.pixels.numBlocksX = i.getUint32(4, !0)), (r.pixels.numBytes = i.getUint32(8, !0)), (r.pixels.maxValue = i.getFloat32(12, !0)), (e += 16);
            var B = r.pixels.numBlocksX,
              c = r.pixels.numBlocksY,
              f = B + (r.width % B > 0 ? 1 : 0),
              C = c + (r.height % c > 0 ? 1 : 0);
            r.pixels.blocks = new Array(f * C);
            for (var u = 0, Q = 0; Q < C; Q++)
              for (var E = 0; E < f; E++) {
                var l = 0,
                  h = A.byteLength - e;
                i = new DataView(A, e, Math.min(10, h));
                var d = {};
                r.pixels.blocks[u++] = d;
                var w = i.getUint8(0);
                if ((l++, (d.encoding = 63 & w), d.encoding > 3)) throw 'Invalid block encoding (' + d.encoding + ')';
                if (2 !== d.encoding) {
                  if (0 !== w && 2 !== w) {
                    if (((w >>= 6), (d.offsetType = w), 2 === w)) (d.offset = i.getInt8(1)), l++;
                    else if (1 === w) (d.offset = i.getInt16(1, !0)), (l += 2);
                    else {
                      if (0 !== w) throw 'Invalid block offset type';
                      (d.offset = i.getFloat32(1, !0)), (l += 4);
                    }
                    if (1 === d.encoding)
                      if (((w = i.getUint8(l)), l++, (d.bitsPerPixel = 63 & w), (w >>= 6), (d.numValidPixelsType = w), 2 === w)) (d.numValidPixels = i.getUint8(l)), l++;
                      else if (1 === w) (d.numValidPixels = i.getUint16(l, !0)), (l += 2);
                      else {
                        if (0 !== w) throw 'Invalid valid pixel count type';
                        (d.numValidPixels = i.getUint32(l, !0)), (l += 4);
                      }
                  }
                  var y;
                  if (((e += l), 3 !== d.encoding))
                    if (0 === d.encoding) {
                      var p = (r.pixels.numBytes - 1) / 4;
                      if (p !== Math.floor(p)) throw 'uncompressed block has invalid length';
                      (y = new ArrayBuffer(4 * p)), new Uint8Array(y).set(new Uint8Array(A, e, 4 * p));
                      var D = new Float32Array(y);
                      (d.rawData = D), (e += 4 * p);
                    } else if (1 === d.encoding) {
                      var k = Math.ceil((d.numValidPixels * d.bitsPerPixel) / 8),
                        m = Math.ceil(k / 4);
                      (y = new ArrayBuffer(4 * m)), new Uint8Array(y).set(new Uint8Array(A, e, k)), (d.stuffedData = new Uint32Array(y)), (e += k);
                    }
                } else e++;
              }
            return (r.eofOffset = e), r;
          }),
          (a = function (A, e, t, r, n, i, a) {
            var o,
              g,
              I,
              s = (1 << e) - 1,
              B = 0,
              c = 0,
              f = Math.ceil((a - r) / n),
              C = 4 * A.length - Math.ceil((e * t) / 8);
            for (A[A.length - 1] <<= 8 * C, o = 0; o < t; o++) {
              if ((0 === c && ((I = A[B++]), (c = 32)), c >= e)) (g = (I >>> (c - e)) & s), (c -= e);
              else {
                var u = e - c;
                (g = ((I & s) << u) & s), (g += (I = A[B++]) >>> (c = 32 - u));
              }
              i[o] = g < f ? r + g * n : a;
            }
            return i;
          }),
          e),
        s = (function () {
          var A = function (A, e, t, r, n, i, a, o) {
              var g,
                I,
                s,
                B,
                c,
                f = (1 << t) - 1,
                C = 0,
                u = 0,
                Q = 4 * A.length - Math.ceil((t * r) / 8);
              if (((A[A.length - 1] <<= 8 * Q), n)) for (g = 0; g < r; g++) 0 === u && ((s = A[C++]), (u = 32)), u >= t ? ((I = (s >>> (u - t)) & f), (u -= t)) : ((I = ((s & f) << (B = t - u)) & f), (I += (s = A[C++]) >>> (u = 32 - B))), (e[g] = n[I]);
              else for (c = Math.ceil((o - i) / a), g = 0; g < r; g++) 0 === u && ((s = A[C++]), (u = 32)), u >= t ? ((I = (s >>> (u - t)) & f), (u -= t)) : ((I = ((s & f) << (B = t - u)) & f), (I += (s = A[C++]) >>> (u = 32 - B))), (e[g] = I < c ? i + I * a : o);
            },
            e = function (A, e, t, r, n, i) {
              var a,
                o = (1 << e) - 1,
                g = 0,
                I = 0,
                s = 0,
                B = 0,
                c = 0,
                f = [],
                C = 4 * A.length - Math.ceil((e * t) / 8);
              A[A.length - 1] <<= 8 * C;
              var u = Math.ceil((i - r) / n);
              for (I = 0; I < t; I++) 0 === B && ((a = A[g++]), (B = 32)), B >= e ? ((c = (a >>> (B - e)) & o), (B -= e)) : ((c = ((a & o) << (s = e - B)) & o), (c += (a = A[g++]) >>> (B = 32 - s))), (f[I] = c < u ? r + c * n : i);
              return f.unshift(r), f;
            },
            t = function (A, e, t, r, n, i, a, o) {
              var g,
                I,
                s,
                B,
                c = (1 << t) - 1,
                f = 0,
                C = 0,
                u = 0;
              if (n) for (g = 0; g < r; g++) 0 === C && ((s = A[f++]), (C = 32), (u = 0)), C >= t ? ((I = (s >>> u) & c), (C -= t), (u += t)) : ((I = (s >>> u) & c), (C = 32 - (B = t - C)), (I |= ((s = A[f++]) & ((1 << B) - 1)) << (t - B)), (u = B)), (e[g] = n[I]);
              else {
                var Q = Math.ceil((o - i) / a);
                for (g = 0; g < r; g++) 0 === C && ((s = A[f++]), (C = 32), (u = 0)), C >= t ? ((I = (s >>> u) & c), (C -= t), (u += t)) : ((I = (s >>> u) & c), (C = 32 - (B = t - C)), (I |= ((s = A[f++]) & ((1 << B) - 1)) << (t - B)), (u = B)), (e[g] = I < Q ? i + I * a : o);
              }
              return e;
            },
            r = function (A, e, t, r, n, i) {
              var a,
                o = (1 << e) - 1,
                g = 0,
                I = 0,
                s = 0,
                B = 0,
                c = 0,
                f = 0,
                C = [],
                u = Math.ceil((i - r) / n);
              for (I = 0; I < t; I++) 0 === B && ((a = A[g++]), (B = 32), (f = 0)), B >= e ? ((c = (a >>> f) & o), (B -= e), (f += e)) : ((c = (a >>> f) & o), (B = 32 - (s = e - B)), (c |= ((a = A[g++]) & ((1 << s) - 1)) << (e - s)), (f = s)), (C[I] = c < u ? r + c * n : i);
              return C.unshift(r), C;
            },
            n = function (A, e, t, r) {
              var n,
                i,
                a,
                o,
                g = (1 << t) - 1,
                I = 0,
                s = 0,
                B = 4 * A.length - Math.ceil((t * r) / 8);
              for (A[A.length - 1] <<= 8 * B, n = 0; n < r; n++) 0 === s && ((a = A[I++]), (s = 32)), s >= t ? ((i = (a >>> (s - t)) & g), (s -= t)) : ((i = ((a & g) << (o = t - s)) & g), (i += (a = A[I++]) >>> (s = 32 - o))), (e[n] = i);
              return e;
            },
            i = function (A, e, t, r) {
              var n,
                i,
                a,
                o,
                g = (1 << t) - 1,
                I = 0,
                s = 0,
                B = 0;
              for (n = 0; n < r; n++) 0 === s && ((a = A[I++]), (s = 32), (B = 0)), s >= t ? ((i = (a >>> B) & g), (s -= t), (B += t)) : ((i = (a >>> B) & g), (s = 32 - (o = t - s)), (i |= ((a = A[I++]) & ((1 << o) - 1)) << (t - o)), (B = o)), (e[n] = i);
              return e;
            },
            a = {
              HUFFMAN_LUT_BITS_MAX: 12,
              computeChecksumFletcher32: function (A) {
                for (var e = 65535, t = 65535, r = A.length, n = Math.floor(r / 2), i = 0; n; ) {
                  var a = n >= 359 ? 359 : n;
                  n -= a;
                  do {
                    (e += A[i++] << 8), (t += e += A[i++]);
                  } while (--a);
                  (e = (65535 & e) + (e >>> 16)), (t = (65535 & t) + (t >>> 16));
                }
                return 1 & r && (t += e += A[i] << 8), (((t = (65535 & t) + (t >>> 16)) << 16) | (e = (65535 & e) + (e >>> 16))) >>> 0;
              },
              readHeaderInfo: function (A, e) {
                var t = e.ptr,
                  r = new Uint8Array(A, t, 6),
                  n = {};
                if (((n.fileIdentifierString = String.fromCharCode.apply(null, r)), 0 !== n.fileIdentifierString.lastIndexOf('Lerc2', 0))) throw 'Unexpected file identifier string (expect Lerc2 ): ' + n.fileIdentifierString;
                t += 6;
                var i,
                  a = new DataView(A, t, 8),
                  o = a.getInt32(0, !0);
                if (
                  ((n.fileVersion = o),
                  (t += 4),
                  o >= 3 && ((n.checksum = a.getUint32(4, !0)), (t += 4)),
                  (a = new DataView(A, t, 12)),
                  (n.height = a.getUint32(0, !0)),
                  (n.width = a.getUint32(4, !0)),
                  (t += 8),
                  o >= 4 ? ((n.numDims = a.getUint32(8, !0)), (t += 4)) : (n.numDims = 1),
                  (a = new DataView(A, t, 40)),
                  (n.numValidPixel = a.getUint32(0, !0)),
                  (n.microBlockSize = a.getInt32(4, !0)),
                  (n.blobSize = a.getInt32(8, !0)),
                  (n.imageType = a.getInt32(12, !0)),
                  (n.maxZError = a.getFloat64(16, !0)),
                  (n.zMin = a.getFloat64(24, !0)),
                  (n.zMax = a.getFloat64(32, !0)),
                  (t += 40),
                  (e.headerInfo = n),
                  (e.ptr = t),
                  o >= 3 && ((i = o >= 4 ? 52 : 48), this.computeChecksumFletcher32(new Uint8Array(A, t - i, n.blobSize - 14)) !== n.checksum))
                )
                  throw 'Checksum failed.';
                return !0;
              },
              checkMinMaxRanges: function (A, e) {
                var t = e.headerInfo,
                  r = this.getDataTypeArray(t.imageType),
                  n = t.numDims * this.getDataTypeSize(t.imageType),
                  i = this.readSubArray(A, e.ptr, r, n),
                  a = this.readSubArray(A, e.ptr + n, r, n);
                e.ptr += 2 * n;
                var o,
                  g = !0;
                for (o = 0; o < t.numDims; o++)
                  if (i[o] !== a[o]) {
                    g = !1;
                    break;
                  }
                return (t.minValues = i), (t.maxValues = a), g;
              },
              readSubArray: function (A, e, t, r) {
                var n;
                if (t === Uint8Array) n = new Uint8Array(A, e, r);
                else {
                  var i = new ArrayBuffer(r);
                  new Uint8Array(i).set(new Uint8Array(A, e, r)), (n = new t(i));
                }
                return n;
              },
              readMask: function (A, e) {
                var t,
                  r,
                  n = e.ptr,
                  i = e.headerInfo,
                  a = i.width * i.height,
                  o = i.numValidPixel,
                  g = new DataView(A, n, 4),
                  I = {};
                if (((I.numBytes = g.getUint32(0, !0)), (n += 4), (0 === o || a === o) && 0 !== I.numBytes)) throw 'invalid mask';
                if (0 === o) (t = new Uint8Array(Math.ceil(a / 8))), (I.bitset = t), (r = new Uint8Array(a)), (e.pixels.resultMask = r), (n += I.numBytes);
                else if (I.numBytes > 0) {
                  t = new Uint8Array(Math.ceil(a / 8));
                  var s = (g = new DataView(A, n, I.numBytes)).getInt16(0, !0),
                    B = 2,
                    c = 0,
                    f = 0;
                  do {
                    if (s > 0) for (; s--; ) t[c++] = g.getUint8(B++);
                    else for (f = g.getUint8(B++), s = -s; s--; ) t[c++] = f;
                    (s = g.getInt16(B, !0)), (B += 2);
                  } while (B < I.numBytes);
                  if (-32768 !== s || c < t.length) throw 'Unexpected end of mask RLE encoding';
                  r = new Uint8Array(a);
                  var C = 0,
                    u = 0;
                  for (u = 0; u < a; u++) 7 & u ? ((C = t[u >> 3]), (C <<= 7 & u)) : (C = t[u >> 3]), 128 & C && (r[u] = 1);
                  (e.pixels.resultMask = r), (I.bitset = t), (n += I.numBytes);
                }
                return (e.ptr = n), (e.mask = I), !0;
              },
              readDataOneSweep: function (A, e, t, r) {
                var n,
                  i = e.ptr,
                  o = e.headerInfo,
                  g = o.numDims,
                  I = o.width * o.height,
                  s = o.imageType,
                  B = o.numValidPixel * a.getDataTypeSize(s) * g,
                  c = e.pixels.resultMask;
                if (t === Uint8Array) n = new Uint8Array(A, i, B);
                else {
                  var f = new ArrayBuffer(B);
                  new Uint8Array(f).set(new Uint8Array(A, i, B)), (n = new t(f));
                }
                if (n.length === I * g) e.pixels.resultPixels = r ? a.swapDimensionOrder(n, I, g, t, !0) : n;
                else {
                  e.pixels.resultPixels = new t(I * g);
                  var C = 0,
                    u = 0,
                    Q = 0,
                    E = 0;
                  if (g > 1) {
                    if (r) {
                      for (u = 0; u < I; u++) if (c[u]) for (E = u, Q = 0; Q < g; Q++, E += I) e.pixels.resultPixels[E] = n[C++];
                    } else for (u = 0; u < I; u++) if (c[u]) for (E = u * g, Q = 0; Q < g; Q++) e.pixels.resultPixels[E + Q] = n[C++];
                  } else for (u = 0; u < I; u++) c[u] && (e.pixels.resultPixels[u] = n[C++]);
                }
                return (i += B), (e.ptr = i), !0;
              },
              readHuffmanTree: function (A, e) {
                var t = this.HUFFMAN_LUT_BITS_MAX,
                  r = new DataView(A, e.ptr, 16);
                if (((e.ptr += 16), r.getInt32(0, !0) < 2)) throw 'unsupported Huffman version';
                var n = r.getInt32(4, !0),
                  i = r.getInt32(8, !0),
                  g = r.getInt32(12, !0);
                if (i >= g) return !1;
                var I = new Uint32Array(g - i);
                a.decodeBits(A, e, I);
                var s,
                  B,
                  c,
                  f,
                  C = [];
                for (s = i; s < g; s++) C[(B = s - (s < n ? 0 : n))] = { first: I[s - i], second: null };
                var u = A.byteLength - e.ptr,
                  Q = Math.ceil(u / 4),
                  E = new ArrayBuffer(4 * Q);
                new Uint8Array(E).set(new Uint8Array(A, e.ptr, u));
                var l,
                  h = new Uint32Array(E),
                  d = 0,
                  w = 0;
                for (l = h[0], s = i; s < g; s++) (f = C[(B = s - (s < n ? 0 : n))].first) > 0 && ((C[B].second = (l << d) >>> (32 - f)), 32 - d >= f ? 32 === (d += f) && ((d = 0), (l = h[++w])) : ((d += f - 32), (l = h[++w]), (C[B].second |= l >>> (32 - d))));
                var y = 0,
                  p = 0,
                  D = new o();
                for (s = 0; s < C.length; s++) void 0 !== C[s] && (y = Math.max(y, C[s].first));
                p = y >= t ? t : y;
                var k,
                  m,
                  v,
                  b,
                  G,
                  S = [];
                for (s = i; s < g; s++)
                  if ((f = C[(B = s - (s < n ? 0 : n))].first) > 0)
                    if (((k = [f, B]), f <= p)) for (m = C[B].second << (p - f), v = 1 << (p - f), c = 0; c < v; c++) S[m | c] = k;
                    else for (m = C[B].second, G = D, b = f - 1; b >= 0; b--) (m >>> b) & 1 ? (G.right || (G.right = new o()), (G = G.right)) : (G.left || (G.left = new o()), (G = G.left)), 0 !== b || G.val || (G.val = k[1]);
                return { decodeLut: S, numBitsLUTQick: p, numBitsLUT: y, tree: D, stuffedData: h, srcPtr: w, bitPos: d };
              },
              readHuffman: function (A, e, t, r) {
                var n,
                  i,
                  o,
                  g,
                  I,
                  s,
                  B,
                  c,
                  f,
                  C = e.headerInfo.numDims,
                  u = e.headerInfo.height,
                  Q = e.headerInfo.width,
                  E = Q * u,
                  l = this.readHuffmanTree(A, e),
                  h = l.decodeLut,
                  d = l.tree,
                  w = l.stuffedData,
                  y = l.srcPtr,
                  p = l.bitPos,
                  D = l.numBitsLUTQick,
                  k = l.numBitsLUT,
                  m = 0 === e.headerInfo.imageType ? 128 : 0,
                  v = e.pixels.resultMask,
                  b = 0;
                p > 0 && (y++, (p = 0));
                var G,
                  S = w[y],
                  F = 1 === e.encodeMode,
                  R = new t(E * C),
                  x = R;
                if (C < 2 || F) {
                  for (G = 0; G < C; G++)
                    if ((C > 1 && ((x = new t(R.buffer, E * G, E)), (b = 0)), e.headerInfo.numValidPixel === Q * u))
                      for (c = 0, s = 0; s < u; s++)
                        for (B = 0; B < Q; B++, c++) {
                          if (((i = 0), (I = g = (S << p) >>> (32 - D)), 32 - p < D && (I = g |= w[y + 1] >>> (64 - p - D)), h[I])) (i = h[I][1]), (p += h[I][0]);
                          else
                            for (I = g = (S << p) >>> (32 - k), 32 - p < k && (I = g |= w[y + 1] >>> (64 - p - k)), n = d, f = 0; f < k; f++)
                              if (!(n = (g >>> (k - f - 1)) & 1 ? n.right : n.left).left && !n.right) {
                                (i = n.val), (p = p + f + 1);
                                break;
                              }
                          p >= 32 && ((p -= 32), (S = w[++y])), (o = i - m), F ? ((o += B > 0 ? b : s > 0 ? x[c - Q] : b), (o &= 255), (x[c] = o), (b = o)) : (x[c] = o);
                        }
                    else
                      for (c = 0, s = 0; s < u; s++)
                        for (B = 0; B < Q; B++, c++)
                          if (v[c]) {
                            if (((i = 0), (I = g = (S << p) >>> (32 - D)), 32 - p < D && (I = g |= w[y + 1] >>> (64 - p - D)), h[I])) (i = h[I][1]), (p += h[I][0]);
                            else
                              for (I = g = (S << p) >>> (32 - k), 32 - p < k && (I = g |= w[y + 1] >>> (64 - p - k)), n = d, f = 0; f < k; f++)
                                if (!(n = (g >>> (k - f - 1)) & 1 ? n.right : n.left).left && !n.right) {
                                  (i = n.val), (p = p + f + 1);
                                  break;
                                }
                            p >= 32 && ((p -= 32), (S = w[++y])), (o = i - m), F ? (B > 0 && v[c - 1] ? (o += b) : s > 0 && v[c - Q] ? (o += x[c - Q]) : (o += b), (o &= 255), (x[c] = o), (b = o)) : (x[c] = o);
                          }
                } else
                  for (c = 0, s = 0; s < u; s++)
                    for (B = 0; B < Q; B++)
                      if (((c = s * Q + B), !v || v[c]))
                        for (G = 0; G < C; G++, c += E) {
                          if (((i = 0), (I = g = (S << p) >>> (32 - D)), 32 - p < D && (I = g |= w[y + 1] >>> (64 - p - D)), h[I])) (i = h[I][1]), (p += h[I][0]);
                          else
                            for (I = g = (S << p) >>> (32 - k), 32 - p < k && (I = g |= w[y + 1] >>> (64 - p - k)), n = d, f = 0; f < k; f++)
                              if (!(n = (g >>> (k - f - 1)) & 1 ? n.right : n.left).left && !n.right) {
                                (i = n.val), (p = p + f + 1);
                                break;
                              }
                          p >= 32 && ((p -= 32), (S = w[++y])), (o = i - m), (x[c] = o);
                        }
                (e.ptr = e.ptr + 4 * (y + 1) + (p > 0 ? 4 : 0)), (e.pixels.resultPixels = R), C > 1 && !r && (e.pixels.resultPixels = a.swapDimensionOrder(R, E, C, t));
              },
              decodeBits: function (a, o, g, I, s) {
                var B = o.headerInfo,
                  c = B.fileVersion,
                  f = 0,
                  C = a.byteLength - o.ptr >= 5 ? 5 : a.byteLength - o.ptr,
                  u = new DataView(a, o.ptr, C),
                  Q = u.getUint8(0);
                f++;
                var E = Q >> 6,
                  l = 0 === E ? 4 : 3 - E,
                  h = (32 & Q) > 0,
                  d = 31 & Q,
                  w = 0;
                if (1 === l) (w = u.getUint8(f)), f++;
                else if (2 === l) (w = u.getUint16(f, !0)), (f += 2);
                else {
                  if (4 !== l) throw 'Invalid valid pixel count type';
                  (w = u.getUint32(f, !0)), (f += 4);
                }
                var y,
                  p,
                  D,
                  k,
                  m,
                  v,
                  b,
                  G,
                  S,
                  F = 2 * B.maxZError,
                  R = B.numDims > 1 ? B.maxValues[s] : B.zMax;
                if (h) {
                  for (o.counter.lut++, G = u.getUint8(f), f++, k = Math.ceil(((G - 1) * d) / 8), m = Math.ceil(k / 4), p = new ArrayBuffer(4 * m), D = new Uint8Array(p), o.ptr += f, D.set(new Uint8Array(a, o.ptr, k)), b = new Uint32Array(p), o.ptr += k, S = 0; (G - 1) >>> S; ) S++;
                  (k = Math.ceil((w * S) / 8)),
                    (m = Math.ceil(k / 4)),
                    (p = new ArrayBuffer(4 * m)),
                    (D = new Uint8Array(p)).set(new Uint8Array(a, o.ptr, k)),
                    (y = new Uint32Array(p)),
                    (o.ptr += k),
                    (v = c >= 3 ? r(b, d, G - 1, I, F, R) : e(b, d, G - 1, I, F, R)),
                    c >= 3 ? t(y, g, S, w, v) : A(y, g, S, w, v);
                } else
                  o.counter.bitstuffer++,
                    (S = d),
                    (o.ptr += f),
                    S > 0 &&
                      ((k = Math.ceil((w * S) / 8)),
                      (m = Math.ceil(k / 4)),
                      (p = new ArrayBuffer(4 * m)),
                      (D = new Uint8Array(p)).set(new Uint8Array(a, o.ptr, k)),
                      (y = new Uint32Array(p)),
                      (o.ptr += k),
                      c >= 3 ? (null == I ? i(y, g, S, w) : t(y, g, S, w, !1, I, F, R)) : null == I ? n(y, g, S, w) : A(y, g, S, w, !1, I, F, R));
              },
              readTiles: function (A, e, t, r) {
                var n = e.headerInfo,
                  i = n.width,
                  o = n.height,
                  g = i * o,
                  I = n.microBlockSize,
                  s = n.imageType,
                  B = a.getDataTypeSize(s),
                  c = Math.ceil(i / I),
                  f = Math.ceil(o / I);
                (e.pixels.numBlocksY = f), (e.pixels.numBlocksX = c), (e.pixels.ptr = 0);
                var C,
                  u,
                  Q,
                  E,
                  l,
                  h,
                  d,
                  w,
                  y,
                  p,
                  D = 0,
                  k = 0,
                  m = 0,
                  v = 0,
                  b = 0,
                  G = 0,
                  S = 0,
                  F = 0,
                  R = 0,
                  x = 0,
                  U = 0,
                  L = 0,
                  M = 0,
                  N = 0,
                  q = 0,
                  J = new t(I * I),
                  O = o % I || I,
                  Y = i % I || I,
                  H = n.numDims,
                  P = e.pixels.resultMask,
                  K = e.pixels.resultPixels,
                  T = n.fileVersion >= 5 ? 14 : 15,
                  V = n.zMax;
                for (m = 0; m < f; m++)
                  for (b = m !== f - 1 ? I : O, v = 0; v < c; v++)
                    for (x = m * i * I + v * I, U = i - (G = v !== c - 1 ? I : Y), w = 0; w < H; w++) {
                      if (
                        (H > 1 ? ((p = K), (x = m * i * I + v * I), (K = new t(e.pixels.resultPixels.buffer, g * w * B, g)), (V = n.maxValues[w])) : (p = null),
                        (S = A.byteLength - e.ptr),
                        (u = {}),
                        (q = 0),
                        (F = (C = new DataView(A, e.ptr, Math.min(10, S))).getUint8(0)),
                        q++,
                        (y = n.fileVersion >= 5 ? 4 & F : 0),
                        (R = (F >> 6) & 255),
                        ((F >> 2) & T) !== (((v * I) >> 3) & T))
                      )
                        throw 'integrity issue';
                      if (y && 0 === w) throw 'integrity issue';
                      if ((l = 3 & F) > 3) throw ((e.ptr += q), 'Invalid block encoding (' + l + ')');
                      if (2 !== l)
                        if (0 === l) {
                          if (y) throw 'integrity issue';
                          if ((e.counter.uncompressed++, (e.ptr += q), (L = (L = b * G * B) < (M = A.byteLength - e.ptr) ? L : M), (Q = new ArrayBuffer(L % B == 0 ? L : L + B - (L % B))), new Uint8Array(Q).set(new Uint8Array(A, e.ptr, L)), (E = new t(Q)), (N = 0), P))
                            for (D = 0; D < b; D++) {
                              for (k = 0; k < G; k++) P[x] && (K[x] = E[N++]), x++;
                              x += U;
                            }
                          else
                            for (D = 0; D < b; D++) {
                              for (k = 0; k < G; k++) K[x++] = E[N++];
                              x += U;
                            }
                          e.ptr += N * B;
                        } else if (((h = a.getDataTypeUsed(y && s < 6 ? 4 : s, R)), (d = a.getOnePixel(u, q, h, C)), (q += a.getDataTypeSize(h)), 3 === l))
                          if (((e.ptr += q), e.counter.constantoffset++, P))
                            for (D = 0; D < b; D++) {
                              for (k = 0; k < G; k++) P[x] && (K[x] = y ? Math.min(V, p[x] + d) : d), x++;
                              x += U;
                            }
                          else
                            for (D = 0; D < b; D++) {
                              for (k = 0; k < G; k++) (K[x] = y ? Math.min(V, p[x] + d) : d), x++;
                              x += U;
                            }
                        else if (((e.ptr += q), a.decodeBits(A, e, J, d, w), (q = 0), y))
                          if (P)
                            for (D = 0; D < b; D++) {
                              for (k = 0; k < G; k++) P[x] && (K[x] = J[q++] + p[x]), x++;
                              x += U;
                            }
                          else
                            for (D = 0; D < b; D++) {
                              for (k = 0; k < G; k++) (K[x] = J[q++] + p[x]), x++;
                              x += U;
                            }
                        else if (P)
                          for (D = 0; D < b; D++) {
                            for (k = 0; k < G; k++) P[x] && (K[x] = J[q++]), x++;
                            x += U;
                          }
                        else
                          for (D = 0; D < b; D++) {
                            for (k = 0; k < G; k++) K[x++] = J[q++];
                            x += U;
                          }
                      else {
                        if (y)
                          if (P) for (D = 0; D < b; D++) for (k = 0; k < G; k++) P[x] && (K[x] = p[x]), x++;
                          else for (D = 0; D < b; D++) for (k = 0; k < G; k++) (K[x] = p[x]), x++;
                        e.counter.constant++, (e.ptr += q);
                      }
                    }
                H > 1 && !r && (e.pixels.resultPixels = a.swapDimensionOrder(e.pixels.resultPixels, g, H, t));
              },
              formatFileInfo: function (A) {
                return {
                  fileIdentifierString: A.headerInfo.fileIdentifierString,
                  fileVersion: A.headerInfo.fileVersion,
                  imageType: A.headerInfo.imageType,
                  height: A.headerInfo.height,
                  width: A.headerInfo.width,
                  numValidPixel: A.headerInfo.numValidPixel,
                  microBlockSize: A.headerInfo.microBlockSize,
                  blobSize: A.headerInfo.blobSize,
                  maxZError: A.headerInfo.maxZError,
                  pixelType: a.getPixelType(A.headerInfo.imageType),
                  eofOffset: A.eofOffset,
                  mask: A.mask ? { numBytes: A.mask.numBytes } : null,
                  pixels: { numBlocksX: A.pixels.numBlocksX, numBlocksY: A.pixels.numBlocksY, maxValue: A.headerInfo.zMax, minValue: A.headerInfo.zMin, noDataValue: A.noDataValue }
                };
              },
              constructConstantSurface: function (A, e) {
                var t = A.headerInfo.zMax,
                  r = A.headerInfo.zMin,
                  n = A.headerInfo.maxValues,
                  i = A.headerInfo.numDims,
                  a = A.headerInfo.height * A.headerInfo.width,
                  o = 0,
                  g = 0,
                  I = 0,
                  s = A.pixels.resultMask,
                  B = A.pixels.resultPixels;
                if (s)
                  if (i > 1) {
                    if (e) for (o = 0; o < i; o++) for (I = o * a, t = n[o], g = 0; g < a; g++) s[g] && (B[I + g] = t);
                    else for (g = 0; g < a; g++) if (s[g]) for (I = g * i, o = 0; o < i; o++) B[I + i] = n[o];
                  } else for (g = 0; g < a; g++) s[g] && (B[g] = t);
                else if (i > 1 && r !== t)
                  if (e) for (o = 0; o < i; o++) for (I = o * a, t = n[o], g = 0; g < a; g++) B[I + g] = t;
                  else for (g = 0; g < a; g++) for (I = g * i, o = 0; o < i; o++) B[I + o] = n[o];
                else for (g = 0; g < a * i; g++) B[g] = t;
              },
              getDataTypeArray: function (A) {
                var e;
                switch (A) {
                  case 0:
                    e = Int8Array;
                    break;
                  case 1:
                    e = Uint8Array;
                    break;
                  case 2:
                    e = Int16Array;
                    break;
                  case 3:
                    e = Uint16Array;
                    break;
                  case 4:
                    e = Int32Array;
                    break;
                  case 5:
                    e = Uint32Array;
                    break;
                  case 6:
                  default:
                    e = Float32Array;
                    break;
                  case 7:
                    e = Float64Array;
                }
                return e;
              },
              getPixelType: function (A) {
                var e;
                switch (A) {
                  case 0:
                    e = 'S8';
                    break;
                  case 1:
                    e = 'U8';
                    break;
                  case 2:
                    e = 'S16';
                    break;
                  case 3:
                    e = 'U16';
                    break;
                  case 4:
                    e = 'S32';
                    break;
                  case 5:
                    e = 'U32';
                    break;
                  case 6:
                  default:
                    e = 'F32';
                    break;
                  case 7:
                    e = 'F64';
                }
                return e;
              },
              isValidPixelValue: function (A, e) {
                if (null == e) return !1;
                var t;
                switch (A) {
                  case 0:
                    t = e >= -128 && e <= 127;
                    break;
                  case 1:
                    t = e >= 0 && e <= 255;
                    break;
                  case 2:
                    t = e >= -32768 && e <= 32767;
                    break;
                  case 3:
                    t = e >= 0 && e <= 65536;
                    break;
                  case 4:
                    t = e >= -2147483648 && e <= 2147483647;
                    break;
                  case 5:
                    t = e >= 0 && e <= 4294967296;
                    break;
                  case 6:
                    t = e >= -34027999387901484e22 && e <= 34027999387901484e22;
                    break;
                  case 7:
                    t = e >= -17976931348623157e292 && e <= 17976931348623157e292;
                    break;
                  default:
                    t = !1;
                }
                return t;
              },
              getDataTypeSize: function (A) {
                var e = 0;
                switch (A) {
                  case 0:
                  case 1:
                    e = 1;
                    break;
                  case 2:
                  case 3:
                    e = 2;
                    break;
                  case 4:
                  case 5:
                  case 6:
                    e = 4;
                    break;
                  case 7:
                    e = 8;
                    break;
                  default:
                    e = A;
                }
                return e;
              },
              getDataTypeUsed: function (A, e) {
                var t = A;
                switch (A) {
                  case 2:
                  case 4:
                    t = A - e;
                    break;
                  case 3:
                  case 5:
                    t = A - 2 * e;
                    break;
                  case 6:
                    t = 0 === e ? A : 1 === e ? 2 : 1;
                    break;
                  case 7:
                    t = 0 === e ? A : A - 2 * e + 1;
                    break;
                  default:
                    t = A;
                }
                return t;
              },
              getOnePixel: function (A, e, t, r) {
                var n = 0;
                switch (t) {
                  case 0:
                    n = r.getInt8(e);
                    break;
                  case 1:
                    n = r.getUint8(e);
                    break;
                  case 2:
                    n = r.getInt16(e, !0);
                    break;
                  case 3:
                    n = r.getUint16(e, !0);
                    break;
                  case 4:
                    n = r.getInt32(e, !0);
                    break;
                  case 5:
                    n = r.getUInt32(e, !0);
                    break;
                  case 6:
                    n = r.getFloat32(e, !0);
                    break;
                  case 7:
                    n = r.getFloat64(e, !0);
                    break;
                  default:
                    throw 'the decoder does not understand this pixel type';
                }
                return n;
              },
              swapDimensionOrder: function (A, e, t, r, n) {
                var i = 0,
                  a = 0,
                  o = 0,
                  g = 0,
                  I = A;
                if (t > 1)
                  if (((I = new r(e * t)), n)) for (i = 0; i < e; i++) for (g = i, o = 0; o < t; o++, g += e) I[g] = A[a++];
                  else for (i = 0; i < e; i++) for (g = i, o = 0; o < t; o++, g += e) I[a++] = A[g];
                return I;
              }
            },
            o = function (A, e, t) {
              (this.val = A), (this.left = e), (this.right = t);
            },
            g = {
              decode: function (A, e) {
                var t = (e = e || {}).noDataValue,
                  r = 0,
                  n = {};
                (n.ptr = e.inputOffset || 0), (n.pixels = {}), a.readHeaderInfo(A, n);
                var i = n.headerInfo,
                  o = i.fileVersion,
                  g = a.getDataTypeArray(i.imageType);
                if (o > 5) throw 'unsupported lerc version 2.' + o;
                a.readMask(A, n), i.numValidPixel === i.width * i.height || n.pixels.resultMask || (n.pixels.resultMask = e.maskData);
                var I = i.width * i.height;
                (n.pixels.resultPixels = new g(I * i.numDims)), (n.counter = { onesweep: 0, uncompressed: 0, lut: 0, bitstuffer: 0, constant: 0, constantoffset: 0 });
                var s,
                  B = !e.returnPixelInterleavedDims;
                if (0 !== i.numValidPixel)
                  if (i.zMax === i.zMin) a.constructConstantSurface(n, B);
                  else if (o >= 4 && a.checkMinMaxRanges(A, n)) a.constructConstantSurface(n, B);
                  else {
                    var c = new DataView(A, n.ptr, 2),
                      f = c.getUint8(0);
                    if ((n.ptr++, f)) a.readDataOneSweep(A, n, g, B);
                    else if (o > 1 && i.imageType <= 1 && Math.abs(i.maxZError - 0.5) < 1e-5) {
                      var C = c.getUint8(1);
                      if ((n.ptr++, (n.encodeMode = C), C > 2 || (o < 4 && C > 1))) throw 'Invalid Huffman flag ' + C;
                      C ? a.readHuffman(A, n, g, B) : a.readTiles(A, n, g, B);
                    } else a.readTiles(A, n, g, B);
                  }
                (n.eofOffset = n.ptr), e.inputOffset ? ((s = n.headerInfo.blobSize + e.inputOffset - n.ptr), Math.abs(s) >= 1 && (n.eofOffset = e.inputOffset + n.headerInfo.blobSize)) : ((s = n.headerInfo.blobSize - n.ptr), Math.abs(s) >= 1 && (n.eofOffset = n.headerInfo.blobSize));
                var u = { width: i.width, height: i.height, pixelData: n.pixels.resultPixels, minValue: i.zMin, maxValue: i.zMax, validPixelCount: i.numValidPixel, dimCount: i.numDims, dimStats: { minValues: i.minValues, maxValues: i.maxValues }, maskData: n.pixels.resultMask };
                if (n.pixels.resultMask && a.isValidPixelValue(i.imageType, t)) {
                  var Q = n.pixels.resultMask;
                  for (r = 0; r < I; r++) Q[r] || (u.pixelData[r] = t);
                  u.noDataValue = t;
                }
                return (n.noDataValue = t), e.returnFileInfo && (u.fileInfo = a.formatFileInfo(n)), u;
              },
              getBandCount: function (A) {
                for (var e = 0, t = 0, r = { ptr: 0, pixels: {} }; t < A.byteLength - 58; ) a.readHeaderInfo(A, r), (t += r.headerInfo.blobSize), e++, (r.ptr = t);
                return e;
              }
            };
          return g;
        })(),
        B = ((o = new ArrayBuffer(4)), (g = new Uint8Array(o)), (new Uint32Array(o)[0] = 1), 1 === g[0]),
        c = {
          decode: function (A, e) {
            if (!B) throw 'Big endian system is not supported.';
            var t,
              r,
              n = (e = e || {}).inputOffset || 0,
              i = new Uint8Array(A, n, 10),
              a = String.fromCharCode.apply(null, i);
            if ('CntZImage' === a.trim()) (t = I), (r = 1);
            else {
              if ('Lerc2' !== a.substring(0, 5)) throw 'Unexpected file identifier string: ' + a;
              (t = s), (r = 2);
            }
            for (var o, g, c, f, C, u, Q = 0, E = A.byteLength - 10, l = [], h = { width: 0, height: 0, pixels: [], pixelType: e.pixelType, mask: null, statistics: [] }, d = 0; n < E; ) {
              var w = t.decode(A, { inputOffset: n, encodedMaskData: o, maskData: c, returnMask: 0 === Q, returnEncodedMask: 0 === Q, returnFileInfo: !0, returnPixelInterleavedDims: e.returnPixelInterleavedDims, pixelType: e.pixelType || null, noDataValue: e.noDataValue || null });
              (n = w.fileInfo.eofOffset),
                (c = w.maskData),
                0 === Q && ((o = w.encodedMaskData), (h.width = w.width), (h.height = w.height), (h.dimCount = w.dimCount || 1), (h.pixelType = w.pixelType || w.fileInfo.pixelType), (h.mask = c)),
                r > 1 && (c && l.push(c), w.fileInfo.mask && w.fileInfo.mask.numBytes > 0 && d++),
                Q++,
                h.pixels.push(w.pixelData),
                h.statistics.push({ minValue: w.minValue, maxValue: w.maxValue, noDataValue: w.noDataValue, dimStats: w.dimStats });
            }
            if (r > 1 && d > 1) {
              for (u = h.width * h.height, h.bandMasks = l, (c = new Uint8Array(u)).set(l[0]), f = 1; f < l.length; f++) for (g = l[f], C = 0; C < u; C++) c[C] = c[C] & g[C];
              h.maskData = c;
            }
            return h;
          }
        };
      A.exports ? (A.exports = c) : (this.Lerc = c);
    })();
  })(pn);
  var Dn,
    kn,
    mn,
    vn = pn.exports,
    bn = {
      env: {
        emscripten_notify_memory_growth: function (A) {
          mn = new Uint8Array(kn.exports.memory.buffer);
        }
      }
    },
    Gn = (function () {
      function A() {
        d(this, A);
      }
      return (
        s(A, [
          {
            key: 'init',
            value: function () {
              return (
                Dn ||
                (Dn =
                  'undefined' != typeof fetch
                    ? fetch('data:application/wasm;base64,' + Sn)
                        .then(function (A) {
                          return A.arrayBuffer();
                        })
                        .then(function (A) {
                          return WebAssembly.instantiate(A, bn);
                        })
                        .then(this._init)
                    : WebAssembly.instantiate(Buffer.from(Sn, 'base64'), bn).then(this._init))
              );
            }
          },
          {
            key: '_init',
            value: function (A) {
              (kn = A.instance), bn.env.emscripten_notify_memory_growth(0);
            }
          },
          {
            key: 'decode',
            value: function (A) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              if (!kn) throw new Error('ZSTDDecoder: Await .init() before decoding.');
              var t = A.byteLength,
                r = kn.exports.malloc(t);
              mn.set(A, r), (e = e || Number(kn.exports.ZSTD_findDecompressedSize(r, t)));
              var n = kn.exports.malloc(e),
                i = kn.exports.ZSTD_decompress(n, e, r, t),
                a = mn.slice(n, n + i);
              return kn.exports.free(r), kn.exports.free(n), a;
            }
          }
        ]),
        A
      );
    })(),
    Sn =
      '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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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';
  function Fn(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var Rn = new Gn(),
    xn = (function (A) {
      c(t, A);
      var e = Fn(t);
      function t(A) {
        var r;
        return d(this, t), ((r = e.call(this)).planarConfiguration = void 0 !== A.PlanarConfiguration ? A.PlanarConfiguration : 1), (r.samplesPerPixel = void 0 !== A.SamplesPerPixel ? A.SamplesPerPixel : 1), (r.addCompression = A.LercParameters[gA.AddCompression]), r;
      }
      return (
        s(t, [
          {
            key: 'decodeBlock',
            value: function (A) {
              switch (this.addCompression) {
                case IA.None:
                  break;
                case IA.Deflate:
                  A = Qn(new Uint8Array(A)).buffer;
                  break;
                case IA.Zstandard:
                  A = Rn.decode(new Uint8Array(A)).buffer;
                  break;
                default:
                  throw new Error('Unsupported LERC additional compression method identifier: '.concat(this.addCompression));
              }
              return vn.decode(A, { returnPixelInterleavedDims: 1 === this.planarConfiguration }).pixels[0].buffer;
            }
          }
        ]),
        t
      );
    })(wt),
    Un = Object.freeze({ __proto__: null, zstd: Rn, default: xn });
  function Ln(A) {
    var e = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (A) {
        return !1;
      }
    })();
    return function () {
      var t,
        r = Q(A);
      if (e) {
        var n = Q(this).constructor;
        t = Reflect.construct(r, arguments, n);
      } else t = r.apply(this, arguments);
      return u(this, t);
    };
  }
  var Mn = (function (A) {
      c(r, A);
      var e,
        t = Ln(r);
      function r() {
        var A;
        if ((d(this, r), (A = t.call(this)), 'undefined' == typeof createImageBitmap)) throw new Error('Cannot decode WebImage as `createImageBitmap` is not available');
        if ('undefined' == typeof document && 'undefined' == typeof OffscreenCanvas) throw new Error('Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available');
        return A;
      }
      return (
        s(r, [
          {
            key: 'decode',
            value:
              ((e = g(
                y.mark(function A(e, t) {
                  var r, n, i, a;
                  return y.wrap(function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                          return (r = new Blob([t])), (A.next = 3), createImageBitmap(r);
                        case 3:
                          return (
                            (n = A.sent),
                            'undefined' != typeof document ? (((i = document.createElement('canvas')).width = n.width), (i.height = n.height)) : (i = new OffscreenCanvas(n.width, n.height)),
                            (a = i.getContext('2d')).drawImage(n, 0, 0),
                            A.abrupt('return', a.getImageData(0, 0, n.width, n.height).data.buffer)
                          );
                        case 8:
                        case 'end':
                          return A.stop();
                      }
                  }, A);
                })
              )),
              function (A, t) {
                return e.apply(this, arguments);
              })
          }
        ]),
        r
      );
    })(wt),
    Nn = Object.freeze({ __proto__: null, default: Mn }),
    qn = Worker;
  var Jn = Object.freeze({
    __proto__: null,
    create: function () {
      var A =
        'function A(A,e,t,i,r,I,g){try{var n=A[I](g),a=n.value}catch(A){return void t(A)}n.done?e(a):Promise.resolve(a).then(i,r)}function e(e){return function(){var t=this,i=arguments;return new Promise((function(r,I){var g=e.apply(t,i);function n(e){A(g,r,I,n,a,"next",e)}function a(e){A(g,r,I,n,a,"throw",e)}n(void 0)}))}}function t(A){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},t(A)}var i={exports:{}};!function(A){var e=function(A){var e,i=Object.prototype,r=i.hasOwnProperty,I="function"==typeof Symbol?Symbol:{},g=I.iterator||"@@iterator",n=I.asyncIterator||"@@asyncIterator",a=I.toStringTag||"@@toStringTag";function o(A,e,t){return Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),A[e]}try{o({},"")}catch(A){o=function(A,e,t){return A[e]=t}}function B(A,e,t,i){var r=e&&e.prototype instanceof h?e:h,I=Object.create(r.prototype),g=new S(i||[]);return I._invoke=function(A,e,t){var i=Q;return function(r,I){if(i===s)throw new Error("Generator is already running");if(i===f){if("throw"===r)throw I;return R()}for(t.method=r,t.arg=I;;){var g=t.delegate;if(g){var n=m(g,t);if(n){if(n===c)continue;return n}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(i===Q)throw i=f,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i=s;var a=C(A,e,t);if("normal"===a.type){if(i=t.done?f:E,a.arg===c)continue;return{value:a.arg,done:t.done}}"throw"===a.type&&(i=f,t.method="throw",t.arg=a.arg)}}}(A,t,g),I}function C(A,e,t){try{return{type:"normal",arg:A.call(e,t)}}catch(A){return{type:"throw",arg:A}}}A.wrap=B;var Q="suspendedStart",E="suspendedYield",s="executing",f="completed",c={};function h(){}function l(){}function u(){}var w={};o(w,g,(function(){return this}));var d=Object.getPrototypeOf,D=d&&d(d(v([])));D&&D!==i&&r.call(D,g)&&(w=D);var y=u.prototype=h.prototype=Object.create(w);function k(A){["next","throw","return"].forEach((function(e){o(A,e,(function(A){return this._invoke(e,A)}))}))}function p(A,e){function i(I,g,n,a){var o=C(A[I],A,g);if("throw"!==o.type){var B=o.arg,Q=B.value;return Q&&"object"===t(Q)&&r.call(Q,"__await")?e.resolve(Q.__await).then((function(A){i("next",A,n,a)}),(function(A){i("throw",A,n,a)})):e.resolve(Q).then((function(A){B.value=A,n(B)}),(function(A){return i("throw",A,n,a)}))}a(o.arg)}var I;this._invoke=function(A,t){function r(){return new e((function(e,r){i(A,t,e,r)}))}return I=I?I.then(r,r):r()}}function m(A,t){var i=A.iterator[t.method];if(i===e){if(t.delegate=null,"throw"===t.method){if(A.iterator.return&&(t.method="return",t.arg=e,m(A,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a \'throw\' method")}return c}var r=C(i,A.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,c;var I=r.arg;return I?I.done?(t[A.resultName]=I.value,t.next=A.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,c):I:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function G(A){var e={tryLoc:A[0]};1 in A&&(e.catchLoc=A[1]),2 in A&&(e.finallyLoc=A[2],e.afterLoc=A[3]),this.tryEntries.push(e)}function F(A){var e=A.completion||{};e.type="normal",delete e.arg,A.completion=e}function S(A){this.tryEntries=[{tryLoc:"root"}],A.forEach(G,this),this.reset(!0)}function v(A){if(A){var t=A[g];if(t)return t.call(A);if("function"==typeof A.next)return A;if(!isNaN(A.length)){var i=-1,I=function t(){for(;++i<A.length;)if(r.call(A,i))return t.value=A[i],t.done=!1,t;return t.value=e,t.done=!0,t};return I.next=I}}return{next:R}}function R(){return{value:e,done:!0}}return l.prototype=u,o(y,"constructor",u),o(u,"constructor",l),l.displayName=o(u,a,"GeneratorFunction"),A.isGeneratorFunction=function(A){var e="function"==typeof A&&A.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},A.mark=function(A){return Object.setPrototypeOf?Object.setPrototypeOf(A,u):(A.__proto__=u,o(A,a,"GeneratorFunction")),A.prototype=Object.create(y),A},A.awrap=function(A){return{__await:A}},k(p.prototype),o(p.prototype,n,(function(){return this})),A.AsyncIterator=p,A.async=function(e,t,i,r,I){void 0===I&&(I=Promise);var g=new p(B(e,t,i,r),I);return A.isGeneratorFunction(t)?g:g.next().then((function(A){return A.done?A.value:g.next()}))},k(y),o(y,a,"Generator"),o(y,g,(function(){return this})),o(y,"toString",(function(){return"[object Generator]"})),A.keys=function(A){var e=[];for(var t in A)e.push(t);return e.reverse(),function t(){for(;e.length;){var i=e.pop();if(i in A)return t.value=i,t.done=!1,t}return t.done=!0,t}},A.values=v,S.prototype={constructor:S,reset:function(A){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!A)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var A=this.tryEntries[0].completion;if("throw"===A.type)throw A.arg;return this.rval},dispatchException:function(A){if(this.done)throw A;var t=this;function i(i,r){return n.type="throw",n.arg=A,t.next=i,r&&(t.method="next",t.arg=e),!!r}for(var I=this.tryEntries.length-1;I>=0;--I){var g=this.tryEntries[I],n=g.completion;if("root"===g.tryLoc)return i("end");if(g.tryLoc<=this.prev){var a=r.call(g,"catchLoc"),o=r.call(g,"finallyLoc");if(a&&o){if(this.prev<g.catchLoc)return i(g.catchLoc,!0);if(this.prev<g.finallyLoc)return i(g.finallyLoc)}else if(a){if(this.prev<g.catchLoc)return i(g.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return i(g.finallyLoc)}}}},abrupt:function(A,e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var I=i;break}}I&&("break"===A||"continue"===A)&&I.tryLoc<=e&&e<=I.finallyLoc&&(I=null);var g=I?I.completion:{};return g.type=A,g.arg=e,I?(this.method="next",this.next=I.finallyLoc,c):this.complete(g)},complete:function(A,e){if("throw"===A.type)throw A.arg;return"break"===A.type||"continue"===A.type?this.next=A.arg:"return"===A.type?(this.rval=this.arg=A.arg,this.method="return",this.next="end"):"normal"===A.type&&e&&(this.next=e),c},finish:function(A){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===A)return this.complete(t.completion,t.afterLoc),F(t),c}},catch:function(A){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===A){var i=t.completion;if("throw"===i.type){var r=i.arg;F(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(A,t,i){return this.delegate={iterator:v(A),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=e),c}},A}(A.exports);try{regeneratorRuntime=e}catch(A){"object"===("undefined"==typeof globalThis?"undefined":t(globalThis))?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}(i);var r=i.exports,I=new Map;function g(A,e){Array.isArray(A)||(A=[A]),A.forEach((function(A){return I.set(A,e)}))}function n(A){return a.apply(this,arguments)}function a(){return(a=e(r.mark((function A(e){var t,i;return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(t=I.get(e.Compression)){A.next=3;break}throw new Error("Unknown compression method identifier: ".concat(e.Compression));case 3:return A.next=5,t();case 5:return i=A.sent,A.abrupt("return",new i(e));case 7:case"end":return A.stop()}}),A)})))).apply(this,arguments)}g([void 0,1],(function(){return Promise.resolve().then((function(){return y})).then((function(A){return A.default}))})),g(5,(function(){return Promise.resolve().then((function(){return F})).then((function(A){return A.default}))})),g(6,(function(){throw new Error("old style JPEG compression is not supported.")})),g(7,(function(){return Promise.resolve().then((function(){return N})).then((function(A){return A.default}))})),g([8,32946],(function(){return Promise.resolve().then((function(){return OA})).then((function(A){return A.default}))})),g(32773,(function(){return Promise.resolve().then((function(){return _A})).then((function(A){return A.default}))})),g(34887,(function(){return Promise.resolve().then((function(){return le})).then(function(){var A=e(r.mark((function A(e){return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e.zstd.init();case 2:return A.abrupt("return",e);case 3:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()).then((function(A){return A.default}))})),g(50001,(function(){return Promise.resolve().then((function(){return de})).then((function(A){return A.default}))}));var o=globalThis;function B(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function C(A,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(A,i.key,i)}}function Q(A,e,t){return e&&C(A.prototype,e),t&&C(A,t),A}function E(A,e){return E=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A},E(A,e)}function s(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&E(A,e)}function f(A,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(A){if(void 0===A)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return A}(A)}function c(A){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)},c(A)}function h(A,e){var t=A.length-e,i=0;do{for(var r=e;r>0;r--)A[i+e]+=A[i],i++;t-=e}while(t>0)}function l(A,e,t){for(var i=0,r=A.length,I=r/t;r>e;){for(var g=e;g>0;--g)A[i+e]+=A[i],++i;r-=e}for(var n=A.slice(),a=0;a<I;++a)for(var o=0;o<t;++o)A[t*a+o]=n[(t-o-1)*I+a]}function u(A,e,t,i,r,I){if(!e||1===e)return A;for(var g=0;g<r.length;++g){if(r[g]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(r[g]!==r[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var n=r[0]/8,a=2===I?1:r.length,o=0;o<i&&!(o*a*t*n>=A.byteLength);++o){var B=void 0;if(2===e){switch(r[0]){case 8:B=new Uint8Array(A,o*a*t*n,a*t*n);break;case 16:B=new Uint16Array(A,o*a*t*n,a*t*n/2);break;case 32:B=new Uint32Array(A,o*a*t*n,a*t*n/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(r[0]," bits per sample."))}h(B,a)}else 3===e&&l(B=new Uint8Array(A,o*a*t*n,a*t*n),a,n)}return A}o.addEventListener("message",function(){var A=e(r.mark((function A(e){var t,i,I,g,a,B;return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=e.data,i=t.id,I=t.fileDirectory,g=t.buffer,A.next=3,n(I);case 3:return a=A.sent,A.next=6,a.decode(I,g);case 6:B=A.sent,o.postMessage({decoded:B,id:i},[B]);case 8:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}());var w=function(){function A(){B(this,A)}var t;return Q(A,[{key:"decode",value:(t=e(r.mark((function A(e,t){var i,I,g,n,a;return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,this.decodeBlock(t);case 2:if(i=A.sent,1===(I=e.Predictor||1)){A.next=9;break}return g=!e.StripOffsets,n=g?e.TileWidth:e.ImageWidth,a=g?e.TileLength:e.RowsPerStrip||e.ImageLength,A.abrupt("return",u(i,I,n,a,e.BitsPerSample,e.PlanarConfiguration));case 9:return A.abrupt("return",i);case 10:case"end":return A.stop()}}),A,this)}))),function(A,e){return t.apply(this,arguments)})}]),A}();function d(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var D=function(A){s(t,w);var e=d(t);function t(){return B(this,t),e.apply(this,arguments)}return Q(t,[{key:"decodeBlock",value:function(A){return A}}]),t}(),y=Object.freeze({__proto__:null,default:D});function k(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}function p(A,e){for(var t=e.length-1;t>=0;t--)A.push(e[t]);return A}function m(A){for(var e=new Uint16Array(4093),t=new Uint8Array(4093),i=0;i<=257;i++)e[i]=4096,t[i]=i;var r=258,I=9,g=0;function n(){r=258,I=9}function a(A){var e=function(A,e,t){var i=e%8,r=Math.floor(e/8),I=8-i,g=e+t-8*(r+1),n=8*(r+2)-(e+t),a=8*(r+2)-e;if(n=Math.max(0,n),r>=A.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;var o=A[r]&Math.pow(2,8-i)-1,B=o<<=t-I;if(r+1<A.length){var C=A[r+1]>>>n;B+=C<<=Math.max(0,t-a)}if(g>8&&r+2<A.length){var Q=8*(r+3)-(e+t);B+=A[r+2]>>>Q}return B}(A,g,I);return g+=I,e}function o(A,i){return t[r]=i,e[r]=A,++r-1}function B(A){for(var i=[],r=A;4096!==r;r=e[r])i.push(t[r]);return i}var C=[];n();for(var Q,E=new Uint8Array(A),s=a(E);257!==s;){if(256===s){for(n(),s=a(E);256===s;)s=a(E);if(257===s)break;if(s>256)throw new Error("corrupted code at scanline ".concat(s));p(C,B(s)),Q=s}else if(s<r){var f=B(s);p(C,f),o(Q,f[f.length-1]),Q=s}else{var c=B(Q);if(!c)throw new Error("Bogus entry. Not in dictionary, ".concat(Q," / ").concat(r,", position: ").concat(g));p(C,c),C.push(c[c.length-1]),o(Q,c[c.length-1]),Q=s}r+1>=Math.pow(2,I)&&(12===I?Q=void 0:I++),s=a(E)}return new Uint8Array(C)}var G=function(A){s(t,w);var e=k(t);function t(){return B(this,t),e.apply(this,arguments)}return Q(t,[{key:"decodeBlock",value:function(A){return m(A).buffer}}]),t}(),F=Object.freeze({__proto__:null,default:G});function S(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var v=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);function R(A,e){for(var t=0,i=[],r=16;r>0&&!A[r-1];)--r;i.push({children:[],index:0});for(var I,g=i[0],n=0;n<r;n++){for(var a=0;a<A[n];a++){for((g=i.pop()).children[g.index]=e[t];g.index>0;)g=i.pop();for(g.index++,i.push(g);i.length<=n;)i.push(I={children:[],index:0}),g.children[g.index]=I.children,g=I;t++}n+1<r&&(i.push(I={children:[],index:0}),g.children[g.index]=I.children,g=I)}return i[0].children}function U(A,e,i,r,I,g,n,a,o){var B=i.mcusPerLine,C=i.progressive,Q=e,E=e,s=0,f=0;function c(){if(f>0)return f--,s>>f&1;if(255===(s=A[E++])){var e=A[E++];if(e)throw new Error("unexpected marker: ".concat((s<<8|e).toString(16)))}return f=7,s>>>7}function h(A){for(var e,i=A;null!==(e=c());){if("number"==typeof(i=i[e]))return i;if("object"!==t(i))throw new Error("invalid huffman sequence")}return null}function l(A){for(var e=A,t=0;e>0;){var i=c();if(null===i)return;t=t<<1|i,--e}return t}function u(A){var e=l(A);return e>=1<<A-1?e:e+(-1<<A)+1}var w=0;var d,D=0;function y(A,e,t,i,r){var I=t%B,g=(t/B|0)*A.v+i,n=I*A.h+r;e(A,A.blocks[g][n])}function k(A,e,t){var i=t/A.blocksPerLine|0,r=t%A.blocksPerLine;e(A,A.blocks[i][r])}var p,m,G,F,S,R,U=r.length;R=C?0===g?0===a?function(A,e){var t=h(A.huffmanTableDC),i=0===t?0:u(t)<<o;A.pred+=i,e[0]=A.pred}:function(A,e){e[0]|=c()<<o}:0===a?function(A,e){if(w>0)w--;else for(var t=g,i=n;t<=i;){var r=h(A.huffmanTableAC),I=15&r,a=r>>4;if(0===I){if(a<15){w=l(a)+(1<<a)-1;break}t+=16}else e[v[t+=a]]=u(I)*(1<<o),t++}}:function(A,e){for(var t=g,i=n,r=0;t<=i;){var I=v[t],a=e[I]<0?-1:1;switch(D){case 0:var B=h(A.huffmanTableAC),C=15&B;if(r=B>>4,0===C)r<15?(w=l(r)+(1<<r),D=4):(r=16,D=1);else{if(1!==C)throw new Error("invalid ACn encoding");d=u(C),D=r?2:3}continue;case 1:case 2:e[I]?e[I]+=(c()<<o)*a:0==--r&&(D=2===D?3:0);break;case 3:e[I]?e[I]+=(c()<<o)*a:(e[I]=d<<o,D=0);break;case 4:e[I]&&(e[I]+=(c()<<o)*a)}t++}4===D&&0==--w&&(D=0)}:function(A,e){var t=h(A.huffmanTableDC),i=0===t?0:u(t);A.pred+=i,e[0]=A.pred;for(var r=1;r<64;){var I=h(A.huffmanTableAC),g=15&I,n=I>>4;if(0===g){if(n<15)break;r+=16}else e[v[r+=n]]=u(g),r++}};var L,b,M=0;b=1===U?r[0].blocksPerLine*r[0].blocksPerColumn:B*i.mcusPerColumn;for(var N=I||b;M<b;){for(m=0;m<U;m++)r[m].pred=0;if(w=0,1===U)for(p=r[0],S=0;S<N;S++)k(p,R,M),M++;else for(S=0;S<N;S++){for(m=0;m<U;m++){var x=p=r[m],J=x.h,q=x.v;for(G=0;G<q;G++)for(F=0;F<J;F++)y(p,R,M,G,F)}if(++M===b)break}if(f=0,(L=A[E]<<8|A[E+1])<65280)throw new Error("marker was not found");if(!(L>=65488&&L<=65495))break;E+=2}return E-Q}function L(A,e){var t=[],i=e.blocksPerLine,r=e.blocksPerColumn,I=i<<3,g=new Int32Array(64),n=new Uint8Array(64);function a(A,t,i){var r,I,g,n,a,o,B,C,Q,E,s=e.quantizationTable,f=i;for(E=0;E<64;E++)f[E]=A[E]*s[E];for(E=0;E<8;++E){var c=8*E;0!==f[1+c]||0!==f[2+c]||0!==f[3+c]||0!==f[4+c]||0!==f[5+c]||0!==f[6+c]||0!==f[7+c]?(r=5793*f[0+c]+128>>8,I=5793*f[4+c]+128>>8,g=f[2+c],n=f[6+c],a=2896*(f[1+c]-f[7+c])+128>>8,C=2896*(f[1+c]+f[7+c])+128>>8,o=f[3+c]<<4,Q=r-I+1>>1,r=r+I+1>>1,I=Q,Q=3784*g+1567*n+128>>8,g=1567*g-3784*n+128>>8,n=Q,Q=a-(B=f[5+c]<<4)+1>>1,a=a+B+1>>1,B=Q,Q=C+o+1>>1,o=C-o+1>>1,C=Q,Q=r-n+1>>1,r=r+n+1>>1,n=Q,Q=I-g+1>>1,I=I+g+1>>1,g=Q,Q=2276*a+3406*C+2048>>12,a=3406*a-2276*C+2048>>12,C=Q,Q=799*o+4017*B+2048>>12,o=4017*o-799*B+2048>>12,B=Q,f[0+c]=r+C,f[7+c]=r-C,f[1+c]=I+B,f[6+c]=I-B,f[2+c]=g+o,f[5+c]=g-o,f[3+c]=n+a,f[4+c]=n-a):(Q=5793*f[0+c]+512>>10,f[0+c]=Q,f[1+c]=Q,f[2+c]=Q,f[3+c]=Q,f[4+c]=Q,f[5+c]=Q,f[6+c]=Q,f[7+c]=Q)}for(E=0;E<8;++E){var h=E;0!==f[8+h]||0!==f[16+h]||0!==f[24+h]||0!==f[32+h]||0!==f[40+h]||0!==f[48+h]||0!==f[56+h]?(r=5793*f[0+h]+2048>>12,I=5793*f[32+h]+2048>>12,g=f[16+h],n=f[48+h],a=2896*(f[8+h]-f[56+h])+2048>>12,C=2896*(f[8+h]+f[56+h])+2048>>12,o=f[24+h],Q=r-I+1>>1,r=r+I+1>>1,I=Q,Q=3784*g+1567*n+2048>>12,g=1567*g-3784*n+2048>>12,n=Q,Q=a-(B=f[40+h])+1>>1,a=a+B+1>>1,B=Q,Q=C+o+1>>1,o=C-o+1>>1,C=Q,Q=r-n+1>>1,r=r+n+1>>1,n=Q,Q=I-g+1>>1,I=I+g+1>>1,g=Q,Q=2276*a+3406*C+2048>>12,a=3406*a-2276*C+2048>>12,C=Q,Q=799*o+4017*B+2048>>12,o=4017*o-799*B+2048>>12,B=Q,f[0+h]=r+C,f[56+h]=r-C,f[8+h]=I+B,f[48+h]=I-B,f[16+h]=g+o,f[40+h]=g-o,f[24+h]=n+a,f[32+h]=n-a):(Q=5793*i[E+0]+8192>>14,f[0+h]=Q,f[8+h]=Q,f[16+h]=Q,f[24+h]=Q,f[32+h]=Q,f[40+h]=Q,f[48+h]=Q,f[56+h]=Q)}for(E=0;E<64;++E){var l=128+(f[E]+8>>4);t[E]=l<0?0:l>255?255:l}}for(var o=0;o<r;o++){for(var B=o<<3,C=0;C<8;C++)t.push(new Uint8Array(I));for(var Q=0;Q<i;Q++){a(e.blocks[o][Q],n,g);for(var E=0,s=Q<<3,f=0;f<8;f++)for(var c=t[B+f],h=0;h<8;h++)c[s+h]=n[E++]}}return t}var b=function(){function A(){B(this,A),this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}return Q(A,[{key:"resetFrames",value:function(){this.frames=[]}},{key:"parse",value:function(A){var e=0;function t(){var t=A[e]<<8|A[e+1];return e+=2,t}function i(A){var e,t,i=0,r=0;for(t in A.components)A.components.hasOwnProperty(t)&&(i<(e=A.components[t]).h&&(i=e.h),r<e.v&&(r=e.v));var I=Math.ceil(A.samplesPerLine/8/i),g=Math.ceil(A.scanLines/8/r);for(t in A.components)if(A.components.hasOwnProperty(t)){e=A.components[t];for(var n=Math.ceil(Math.ceil(A.samplesPerLine/8)*e.h/i),a=Math.ceil(Math.ceil(A.scanLines/8)*e.v/r),o=I*e.h,B=g*e.v,C=[],Q=0;Q<B;Q++){for(var E=[],s=0;s<o;s++)E.push(new Int32Array(64));C.push(E)}e.blocksPerLine=n,e.blocksPerColumn=a,e.blocks=C}A.maxH=i,A.maxV=r,A.mcusPerLine=I,A.mcusPerColumn=g}var r,I,g=t();if(65496!==g)throw new Error("SOI not found");for(g=t();65497!==g;){switch(g){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var n=(r=void 0,I=void 0,r=t(),I=A.subarray(e,e+r-2),e+=I.length,I);65504===g&&74===n[0]&&70===n[1]&&73===n[2]&&70===n[3]&&0===n[4]&&(this.jfif={version:{major:n[5],minor:n[6]},densityUnits:n[7],xDensity:n[8]<<8|n[9],yDensity:n[10]<<8|n[11],thumbWidth:n[12],thumbHeight:n[13],thumbData:n.subarray(14,14+3*n[12]*n[13])}),65518===g&&65===n[0]&&100===n[1]&&111===n[2]&&98===n[3]&&101===n[4]&&0===n[5]&&(this.adobe={version:n[6],flags0:n[7]<<8|n[8],flags1:n[9]<<8|n[10],transformCode:n[11]});break;case 65499:for(var a=t()+e-2;e<a;){var o=A[e++],B=new Int32Array(64);if(o>>4==0)for(var C=0;C<64;C++){B[v[C]]=A[e++]}else{if(o>>4!=1)throw new Error("DQT: invalid table spec");for(var Q=0;Q<64;Q++){B[v[Q]]=t()}}this.quantizationTables[15&o]=B}break;case 65472:case 65473:case 65474:t();for(var E={extended:65473===g,progressive:65474===g,precision:A[e++],scanLines:t(),samplesPerLine:t(),components:{},componentsOrder:[]},s=A[e++],f=void 0,c=0;c<s;c++){f=A[e];var h=A[e+1]>>4,l=15&A[e+1],u=A[e+2];E.componentsOrder.push(f),E.components[f]={h:h,v:l,quantizationIdx:u},e+=3}i(E),this.frames.push(E);break;case 65476:for(var w=t(),d=2;d<w;){for(var D=A[e++],y=new Uint8Array(16),k=0,p=0;p<16;p++,e++)y[p]=A[e],k+=y[p];for(var m=new Uint8Array(k),G=0;G<k;G++,e++)m[G]=A[e];d+=17+k,D>>4==0?this.huffmanTablesDC[15&D]=R(y,m):this.huffmanTablesAC[15&D]=R(y,m)}break;case 65501:t(),this.resetInterval=t();break;case 65498:t();for(var F=A[e++],S=[],L=this.frames[0],b=0;b<F;b++){var M=L.components[A[e++]],N=A[e++];M.huffmanTableDC=this.huffmanTablesDC[N>>4],M.huffmanTableAC=this.huffmanTablesAC[15&N],S.push(M)}var x=A[e++],J=A[e++],q=A[e++],Y=U(A,e,L,S,this.resetInterval,x,J,q>>4,15&q);e+=Y;break;case 65535:255!==A[e]&&e--;break;default:if(255===A[e-3]&&A[e-2]>=192&&A[e-2]<=254){e-=3;break}throw new Error("unknown JPEG marker ".concat(g.toString(16)))}g=t()}}},{key:"getResult",value:function(){var A=this.frames;if(0===this.frames.length)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(var e=0;e<this.frames.length;e++)for(var t=this.frames[e].components,i=0,r=Object.keys(t);i<r.length;i++){var I=r[i];t[I].quantizationTable=this.quantizationTables[t[I].quantizationIdx],delete t[I].quantizationIdx}for(var g=A[0],n=g.components,a=g.componentsOrder,o=[],B=g.samplesPerLine,C=g.scanLines,Q=0;Q<a.length;Q++){var E=n[a[Q]];o.push({lines:L(0,E),scaleX:E.h/g.maxH,scaleY:E.v/g.maxV})}for(var s=new Uint8Array(B*C*o.length),f=0,c=0;c<C;++c)for(var h=0;h<B;++h)for(var l=0;l<o.length;++l){var u=o[l];s[f]=u.lines[0|c*u.scaleY][0|h*u.scaleX],++f}return s}}]),A}(),M=function(A){s(t,w);var e=S(t);function t(A){var i;return B(this,t),(i=e.call(this)).reader=new b,A.JPEGTables&&i.reader.parse(A.JPEGTables),i}return Q(t,[{key:"decodeBlock",value:function(A){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(A)),this.reader.getResult().buffer}}]),t}(),N=Object.freeze({__proto__:null,default:M});function x(A){for(var e=A.length;--e>=0;)A[e]=0}x(new Array(576)),x(new Array(60)),x(new Array(512)),x(new Array(256)),x(new Array(29)),x(new Array(30));var J=function(A,e,t,i){for(var r=65535&A|0,I=A>>>16&65535|0,g=0;0!==t;){t-=g=t>2e3?2e3:t;do{I=I+(r=r+e[i++]|0)|0}while(--g);r%=65521,I%=65521}return r|I<<16|0},q=new Uint32Array(function(){for(var A,e=[],t=0;t<256;t++){A=t;for(var i=0;i<8;i++)A=1&A?3988292384^A>>>1:A>>>1;e[t]=A}return e}()),Y=function(A,e,t,i){var r=q,I=i+t;A^=-1;for(var g=i;g<I;g++)A=A>>>8^r[255&(A^e[g])];return-1^A},K={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},H={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},O=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},P=function(A){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var i=e.shift();if(i){if("object"!==t(i))throw new TypeError(i+"must be non-object");for(var r in i)O(i,r)&&(A[r]=i[r])}}return A},T=function(A){for(var e=0,t=0,i=A.length;t<i;t++)e+=A[t].length;for(var r=new Uint8Array(e),I=0,g=0,n=A.length;I<n;I++){var a=A[I];r.set(a,g),g+=a.length}return r},V=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(A){V=!1}for(var _=new Uint8Array(256),X=0;X<256;X++)_[X]=X>=252?6:X>=248?5:X>=240?4:X>=224?3:X>=192?2:1;_[254]=_[254]=1;var Z=function(A){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(A);var e,t,i,r,I,g=A.length,n=0;for(r=0;r<g;r++)55296==(64512&(t=A.charCodeAt(r)))&&r+1<g&&56320==(64512&(i=A.charCodeAt(r+1)))&&(t=65536+(t-55296<<10)+(i-56320),r++),n+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(n),I=0,r=0;I<n;r++)55296==(64512&(t=A.charCodeAt(r)))&&r+1<g&&56320==(64512&(i=A.charCodeAt(r+1)))&&(t=65536+(t-55296<<10)+(i-56320),r++),t<128?e[I++]=t:t<2048?(e[I++]=192|t>>>6,e[I++]=128|63&t):t<65536?(e[I++]=224|t>>>12,e[I++]=128|t>>>6&63,e[I++]=128|63&t):(e[I++]=240|t>>>18,e[I++]=128|t>>>12&63,e[I++]=128|t>>>6&63,e[I++]=128|63&t);return e},j=function(A,e){var t,i,r=e||A.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(A.subarray(0,e));var I=new Array(2*r);for(i=0,t=0;t<r;){var g=A[t++];if(g<128)I[i++]=g;else{var n=_[g];if(n>4)I[i++]=65533,t+=n-1;else{for(g&=2===n?31:3===n?15:7;n>1&&t<r;)g=g<<6|63&A[t++],n--;n>1?I[i++]=65533:g<65536?I[i++]=g:(g-=65536,I[i++]=55296|g>>10&1023,I[i++]=56320|1023&g)}}}return function(A,e){if(e<65534&&A.subarray&&V)return String.fromCharCode.apply(null,A.length===e?A:A.subarray(0,e));for(var t="",i=0;i<e;i++)t+=String.fromCharCode(A[i]);return t}(I,i)},W=function(A,e){(e=e||A.length)>A.length&&(e=A.length);for(var t=e-1;t>=0&&128==(192&A[t]);)t--;return t<0||0===t?e:t+_[A[t]]>e?t:e};var z=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},$=function(A,e){var t,i,r,I,g,n,a,o,B,C,Q,E,s,f,c,h,l,u,w,d,D,y,k,p,m=A.state;t=A.next_in,k=A.input,i=t+(A.avail_in-5),r=A.next_out,p=A.output,I=r-(e-A.avail_out),g=r+(A.avail_out-257),n=m.dmax,a=m.wsize,o=m.whave,B=m.wnext,C=m.window,Q=m.hold,E=m.bits,s=m.lencode,f=m.distcode,c=(1<<m.lenbits)-1,h=(1<<m.distbits)-1;A:do{E<15&&(Q+=k[t++]<<E,E+=8,Q+=k[t++]<<E,E+=8),l=s[Q&c];e:for(;;){if(Q>>>=u=l>>>24,E-=u,0===(u=l>>>16&255))p[r++]=65535&l;else{if(!(16&u)){if(0==(64&u)){l=s[(65535&l)+(Q&(1<<u)-1)];continue e}if(32&u){m.mode=12;break A}A.msg="invalid literal/length code",m.mode=30;break A}w=65535&l,(u&=15)&&(E<u&&(Q+=k[t++]<<E,E+=8),w+=Q&(1<<u)-1,Q>>>=u,E-=u),E<15&&(Q+=k[t++]<<E,E+=8,Q+=k[t++]<<E,E+=8),l=f[Q&h];t:for(;;){if(Q>>>=u=l>>>24,E-=u,!(16&(u=l>>>16&255))){if(0==(64&u)){l=f[(65535&l)+(Q&(1<<u)-1)];continue t}A.msg="invalid distance code",m.mode=30;break A}if(d=65535&l,E<(u&=15)&&(Q+=k[t++]<<E,(E+=8)<u&&(Q+=k[t++]<<E,E+=8)),(d+=Q&(1<<u)-1)>n){A.msg="invalid distance too far back",m.mode=30;break A}if(Q>>>=u,E-=u,d>(u=r-I)){if((u=d-u)>o&&m.sane){A.msg="invalid distance too far back",m.mode=30;break A}if(D=0,y=C,0===B){if(D+=a-u,u<w){w-=u;do{p[r++]=C[D++]}while(--u);D=r-d,y=p}}else if(B<u){if(D+=a+B-u,(u-=B)<w){w-=u;do{p[r++]=C[D++]}while(--u);if(D=0,B<w){w-=u=B;do{p[r++]=C[D++]}while(--u);D=r-d,y=p}}}else if(D+=B-u,u<w){w-=u;do{p[r++]=C[D++]}while(--u);D=r-d,y=p}for(;w>2;)p[r++]=y[D++],p[r++]=y[D++],p[r++]=y[D++],w-=3;w&&(p[r++]=y[D++],w>1&&(p[r++]=y[D++]))}else{D=r-d;do{p[r++]=p[D++],p[r++]=p[D++],p[r++]=p[D++],w-=3}while(w>2);w&&(p[r++]=p[D++],w>1&&(p[r++]=p[D++]))}break}}break}}while(t<i&&r<g);t-=w=E>>3,Q&=(1<<(E-=w<<3))-1,A.next_in=t,A.next_out=r,A.avail_in=t<i?i-t+5:5-(t-i),A.avail_out=r<g?g-r+257:257-(r-g),m.hold=Q,m.bits=E},AA=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),eA=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),tA=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),iA=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),rA=function(A,e,t,i,r,I,g,n){var a,o,B,C,Q,E,s,f,c,h=n.bits,l=0,u=0,w=0,d=0,D=0,y=0,k=0,p=0,m=0,G=0,F=null,S=0,v=new Uint16Array(16),R=new Uint16Array(16),U=null,L=0;for(l=0;l<=15;l++)v[l]=0;for(u=0;u<i;u++)v[e[t+u]]++;for(D=h,d=15;d>=1&&0===v[d];d--);if(D>d&&(D=d),0===d)return r[I++]=20971520,r[I++]=20971520,n.bits=1,0;for(w=1;w<d&&0===v[w];w++);for(D<w&&(D=w),p=1,l=1;l<=15;l++)if(p<<=1,(p-=v[l])<0)return-1;if(p>0&&(0===A||1!==d))return-1;for(R[1]=0,l=1;l<15;l++)R[l+1]=R[l]+v[l];for(u=0;u<i;u++)0!==e[t+u]&&(g[R[e[t+u]]++]=u);if(0===A?(F=U=g,E=19):1===A?(F=AA,S-=257,U=eA,L-=257,E=256):(F=tA,U=iA,E=-1),G=0,u=0,l=w,Q=I,y=D,k=0,B=-1,C=(m=1<<D)-1,1===A&&m>852||2===A&&m>592)return 1;for(;;){s=l-k,g[u]<E?(f=0,c=g[u]):g[u]>E?(f=U[L+g[u]],c=F[S+g[u]]):(f=96,c=0),a=1<<l-k,w=o=1<<y;do{r[Q+(G>>k)+(o-=a)]=s<<24|f<<16|c|0}while(0!==o);for(a=1<<l-1;G&a;)a>>=1;if(0!==a?(G&=a-1,G+=a):G=0,u++,0==--v[l]){if(l===d)break;l=e[t+g[u]]}if(l>D&&(G&C)!==B){for(0===k&&(k=D),Q+=w,p=1<<(y=l-k);y+k<d&&!((p-=v[y+k])<=0);)y++,p<<=1;if(m+=1<<y,1===A&&m>852||2===A&&m>592)return 1;r[B=G&C]=D<<24|y<<16|Q-I|0}}return 0!==G&&(r[Q+G]=l-k<<24|64<<16|0),n.bits=D,0},IA=H.Z_FINISH,gA=H.Z_BLOCK,nA=H.Z_TREES,aA=H.Z_OK,oA=H.Z_STREAM_END,BA=H.Z_NEED_DICT,CA=H.Z_STREAM_ERROR,QA=H.Z_DATA_ERROR,EA=H.Z_MEM_ERROR,sA=H.Z_BUF_ERROR,fA=H.Z_DEFLATED,cA=function(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)};function hA(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}var lA,uA,wA=function(A){if(!A||!A.state)return CA;var e=A.state;return A.total_in=A.total_out=e.total=0,A.msg="",e.wrap&&(A.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,aA},dA=function(A){if(!A||!A.state)return CA;var e=A.state;return e.wsize=0,e.whave=0,e.wnext=0,wA(A)},DA=function(A,e){var t;if(!A||!A.state)return CA;var i=A.state;return e<0?(t=0,e=-e):(t=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?CA:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,dA(A))},yA=function(A,e){if(!A)return CA;var t=new hA;A.state=t,t.window=null;var i=DA(A,e);return i!==aA&&(A.state=null),i},kA=!0,pA=function(A){if(kA){lA=new Int32Array(512),uA=new Int32Array(32);for(var e=0;e<144;)A.lens[e++]=8;for(;e<256;)A.lens[e++]=9;for(;e<280;)A.lens[e++]=7;for(;e<288;)A.lens[e++]=8;for(rA(1,A.lens,0,288,lA,0,A.work,{bits:9}),e=0;e<32;)A.lens[e++]=5;rA(2,A.lens,0,32,uA,0,A.work,{bits:5}),kA=!1}A.lencode=lA,A.lenbits=9,A.distcode=uA,A.distbits=5},mA=function(A,e,t,i){var r,I=A.state;return null===I.window&&(I.wsize=1<<I.wbits,I.wnext=0,I.whave=0,I.window=new Uint8Array(I.wsize)),i>=I.wsize?(I.window.set(e.subarray(t-I.wsize,t),0),I.wnext=0,I.whave=I.wsize):((r=I.wsize-I.wnext)>i&&(r=i),I.window.set(e.subarray(t-i,t-i+r),I.wnext),(i-=r)?(I.window.set(e.subarray(t-i,t),0),I.wnext=i,I.whave=I.wsize):(I.wnext+=r,I.wnext===I.wsize&&(I.wnext=0),I.whave<I.wsize&&(I.whave+=r))),0},GA={inflateReset:dA,inflateReset2:DA,inflateResetKeep:wA,inflateInit:function(A){return yA(A,15)},inflateInit2:yA,inflate:function(A,e){var t,i,r,I,g,n,a,o,B,C,Q,E,s,f,c,h,l,u,w,d,D,y,k,p,m=0,G=new Uint8Array(4),F=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!A||!A.state||!A.output||!A.input&&0!==A.avail_in)return CA;12===(t=A.state).mode&&(t.mode=13),g=A.next_out,r=A.output,a=A.avail_out,I=A.next_in,i=A.input,n=A.avail_in,o=t.hold,B=t.bits,C=n,Q=a,y=aA;A:for(;;)switch(t.mode){case 1:if(0===t.wrap){t.mode=13;break}for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(2&t.wrap&&35615===o){t.check=0,G[0]=255&o,G[1]=o>>>8&255,t.check=Y(t.check,G,2,0),o=0,B=0,t.mode=2;break}if(t.flags=0,t.head&&(t.head.done=!1),!(1&t.wrap)||(((255&o)<<8)+(o>>8))%31){A.msg="incorrect header check",t.mode=30;break}if((15&o)!==fA){A.msg="unknown compression method",t.mode=30;break}if(B-=4,D=8+(15&(o>>>=4)),0===t.wbits)t.wbits=D;else if(D>t.wbits){A.msg="invalid window size",t.mode=30;break}t.dmax=1<<t.wbits,A.adler=t.check=1,t.mode=512&o?10:12,o=0,B=0;break;case 2:for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(t.flags=o,(255&t.flags)!==fA){A.msg="unknown compression method",t.mode=30;break}if(57344&t.flags){A.msg="unknown header flags set",t.mode=30;break}t.head&&(t.head.text=o>>8&1),512&t.flags&&(G[0]=255&o,G[1]=o>>>8&255,t.check=Y(t.check,G,2,0)),o=0,B=0,t.mode=3;case 3:for(;B<32;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.head&&(t.head.time=o),512&t.flags&&(G[0]=255&o,G[1]=o>>>8&255,G[2]=o>>>16&255,G[3]=o>>>24&255,t.check=Y(t.check,G,4,0)),o=0,B=0,t.mode=4;case 4:for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.head&&(t.head.xflags=255&o,t.head.os=o>>8),512&t.flags&&(G[0]=255&o,G[1]=o>>>8&255,t.check=Y(t.check,G,2,0)),o=0,B=0,t.mode=5;case 5:if(1024&t.flags){for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.length=o,t.head&&(t.head.extra_len=o),512&t.flags&&(G[0]=255&o,G[1]=o>>>8&255,t.check=Y(t.check,G,2,0)),o=0,B=0}else t.head&&(t.head.extra=null);t.mode=6;case 6:if(1024&t.flags&&((E=t.length)>n&&(E=n),E&&(t.head&&(D=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(I,I+E),D)),512&t.flags&&(t.check=Y(t.check,i,E,I)),n-=E,I+=E,t.length-=E),t.length))break A;t.length=0,t.mode=7;case 7:if(2048&t.flags){if(0===n)break A;E=0;do{D=i[I+E++],t.head&&D&&t.length<65536&&(t.head.name+=String.fromCharCode(D))}while(D&&E<n);if(512&t.flags&&(t.check=Y(t.check,i,E,I)),n-=E,I+=E,D)break A}else t.head&&(t.head.name=null);t.length=0,t.mode=8;case 8:if(4096&t.flags){if(0===n)break A;E=0;do{D=i[I+E++],t.head&&D&&t.length<65536&&(t.head.comment+=String.fromCharCode(D))}while(D&&E<n);if(512&t.flags&&(t.check=Y(t.check,i,E,I)),n-=E,I+=E,D)break A}else t.head&&(t.head.comment=null);t.mode=9;case 9:if(512&t.flags){for(;B<16;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(o!==(65535&t.check)){A.msg="header crc mismatch",t.mode=30;break}o=0,B=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),A.adler=t.check=0,t.mode=12;break;case 10:for(;B<32;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}A.adler=t.check=cA(o),o=0,B=0,t.mode=11;case 11:if(0===t.havedict)return A.next_out=g,A.avail_out=a,A.next_in=I,A.avail_in=n,t.hold=o,t.bits=B,BA;A.adler=t.check=1,t.mode=12;case 12:if(e===gA||e===nA)break A;case 13:if(t.last){o>>>=7&B,B-=7&B,t.mode=27;break}for(;B<3;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}switch(t.last=1&o,B-=1,3&(o>>>=1)){case 0:t.mode=14;break;case 1:if(pA(t),t.mode=20,e===nA){o>>>=2,B-=2;break A}break;case 2:t.mode=17;break;case 3:A.msg="invalid block type",t.mode=30}o>>>=2,B-=2;break;case 14:for(o>>>=7&B,B-=7&B;B<32;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if((65535&o)!=(o>>>16^65535)){A.msg="invalid stored block lengths",t.mode=30;break}if(t.length=65535&o,o=0,B=0,t.mode=15,e===nA)break A;case 15:t.mode=16;case 16:if(E=t.length){if(E>n&&(E=n),E>a&&(E=a),0===E)break A;r.set(i.subarray(I,I+E),g),n-=E,I+=E,a-=E,g+=E,t.length-=E;break}t.mode=12;break;case 17:for(;B<14;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(t.nlen=257+(31&o),o>>>=5,B-=5,t.ndist=1+(31&o),o>>>=5,B-=5,t.ncode=4+(15&o),o>>>=4,B-=4,t.nlen>286||t.ndist>30){A.msg="too many length or distance symbols",t.mode=30;break}t.have=0,t.mode=18;case 18:for(;t.have<t.ncode;){for(;B<3;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.lens[F[t.have++]]=7&o,o>>>=3,B-=3}for(;t.have<19;)t.lens[F[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,k={bits:t.lenbits},y=rA(0,t.lens,0,19,t.lencode,0,t.work,k),t.lenbits=k.bits,y){A.msg="invalid code lengths set",t.mode=30;break}t.have=0,t.mode=19;case 19:for(;t.have<t.nlen+t.ndist;){for(;h=(m=t.lencode[o&(1<<t.lenbits)-1])>>>16&255,l=65535&m,!((c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(l<16)o>>>=c,B-=c,t.lens[t.have++]=l;else{if(16===l){for(p=c+2;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(o>>>=c,B-=c,0===t.have){A.msg="invalid bit length repeat",t.mode=30;break}D=t.lens[t.have-1],E=3+(3&o),o>>>=2,B-=2}else if(17===l){for(p=c+3;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}B-=c,D=0,E=3+(7&(o>>>=c)),o>>>=3,B-=3}else{for(p=c+7;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}B-=c,D=0,E=11+(127&(o>>>=c)),o>>>=7,B-=7}if(t.have+E>t.nlen+t.ndist){A.msg="invalid bit length repeat",t.mode=30;break}for(;E--;)t.lens[t.have++]=D}}if(30===t.mode)break;if(0===t.lens[256]){A.msg="invalid code -- missing end-of-block",t.mode=30;break}if(t.lenbits=9,k={bits:t.lenbits},y=rA(1,t.lens,0,t.nlen,t.lencode,0,t.work,k),t.lenbits=k.bits,y){A.msg="invalid literal/lengths set",t.mode=30;break}if(t.distbits=6,t.distcode=t.distdyn,k={bits:t.distbits},y=rA(2,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,k),t.distbits=k.bits,y){A.msg="invalid distances set",t.mode=30;break}if(t.mode=20,e===nA)break A;case 20:t.mode=21;case 21:if(n>=6&&a>=258){A.next_out=g,A.avail_out=a,A.next_in=I,A.avail_in=n,t.hold=o,t.bits=B,$(A,Q),g=A.next_out,r=A.output,a=A.avail_out,I=A.next_in,i=A.input,n=A.avail_in,o=t.hold,B=t.bits,12===t.mode&&(t.back=-1);break}for(t.back=0;h=(m=t.lencode[o&(1<<t.lenbits)-1])>>>16&255,l=65535&m,!((c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(h&&0==(240&h)){for(u=c,w=h,d=l;h=(m=t.lencode[d+((o&(1<<u+w)-1)>>u)])>>>16&255,l=65535&m,!(u+(c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}o>>>=u,B-=u,t.back+=u}if(o>>>=c,B-=c,t.back+=c,t.length=l,0===h){t.mode=26;break}if(32&h){t.back=-1,t.mode=12;break}if(64&h){A.msg="invalid literal/length code",t.mode=30;break}t.extra=15&h,t.mode=22;case 22:if(t.extra){for(p=t.extra;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.length+=o&(1<<t.extra)-1,o>>>=t.extra,B-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=23;case 23:for(;h=(m=t.distcode[o&(1<<t.distbits)-1])>>>16&255,l=65535&m,!((c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(0==(240&h)){for(u=c,w=h,d=l;h=(m=t.distcode[d+((o&(1<<u+w)-1)>>u)])>>>16&255,l=65535&m,!(u+(c=m>>>24)<=B);){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}o>>>=u,B-=u,t.back+=u}if(o>>>=c,B-=c,t.back+=c,64&h){A.msg="invalid distance code",t.mode=30;break}t.offset=l,t.extra=15&h,t.mode=24;case 24:if(t.extra){for(p=t.extra;B<p;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}t.offset+=o&(1<<t.extra)-1,o>>>=t.extra,B-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){A.msg="invalid distance too far back",t.mode=30;break}t.mode=25;case 25:if(0===a)break A;if(E=Q-a,t.offset>E){if((E=t.offset-E)>t.whave&&t.sane){A.msg="invalid distance too far back",t.mode=30;break}E>t.wnext?(E-=t.wnext,s=t.wsize-E):s=t.wnext-E,E>t.length&&(E=t.length),f=t.window}else f=r,s=g-t.offset,E=t.length;E>a&&(E=a),a-=E,t.length-=E;do{r[g++]=f[s++]}while(--E);0===t.length&&(t.mode=21);break;case 26:if(0===a)break A;r[g++]=t.length,a--,t.mode=21;break;case 27:if(t.wrap){for(;B<32;){if(0===n)break A;n--,o|=i[I++]<<B,B+=8}if(Q-=a,A.total_out+=Q,t.total+=Q,Q&&(A.adler=t.check=t.flags?Y(t.check,r,Q,g-Q):J(t.check,r,Q,g-Q)),Q=a,(t.flags?o:cA(o))!==t.check){A.msg="incorrect data check",t.mode=30;break}o=0,B=0}t.mode=28;case 28:if(t.wrap&&t.flags){for(;B<32;){if(0===n)break A;n--,o+=i[I++]<<B,B+=8}if(o!==(4294967295&t.total)){A.msg="incorrect length check",t.mode=30;break}o=0,B=0}t.mode=29;case 29:y=oA;break A;case 30:y=QA;break A;case 31:return EA;default:return CA}return A.next_out=g,A.avail_out=a,A.next_in=I,A.avail_in=n,t.hold=o,t.bits=B,(t.wsize||Q!==A.avail_out&&t.mode<30&&(t.mode<27||e!==IA))&&mA(A,A.output,A.next_out,Q-A.avail_out),C-=A.avail_in,Q-=A.avail_out,A.total_in+=C,A.total_out+=Q,t.total+=Q,t.wrap&&Q&&(A.adler=t.check=t.flags?Y(t.check,r,Q,A.next_out-Q):J(t.check,r,Q,A.next_out-Q)),A.data_type=t.bits+(t.last?64:0)+(12===t.mode?128:0)+(20===t.mode||15===t.mode?256:0),(0===C&&0===Q||e===IA)&&y===aA&&(y=sA),y},inflateEnd:function(A){if(!A||!A.state)return CA;var e=A.state;return e.window&&(e.window=null),A.state=null,aA},inflateGetHeader:function(A,e){if(!A||!A.state)return CA;var t=A.state;return 0==(2&t.wrap)?CA:(t.head=e,e.done=!1,aA)},inflateSetDictionary:function(A,e){var t,i=e.length;return A&&A.state?0!==(t=A.state).wrap&&11!==t.mode?CA:11===t.mode&&J(1,e,i,0)!==t.check?QA:mA(A,e,i,i)?(t.mode=31,EA):(t.havedict=1,aA):CA},inflateInfo:"pako inflate (from Nodeca project)"};var FA=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},SA=Object.prototype.toString,vA=H.Z_NO_FLUSH,RA=H.Z_FINISH,UA=H.Z_OK,LA=H.Z_STREAM_END,bA=H.Z_NEED_DICT,MA=H.Z_STREAM_ERROR,NA=H.Z_DATA_ERROR,xA=H.Z_MEM_ERROR;function JA(A){this.options=P({chunkSize:65536,windowBits:15,to:""},A||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||A&&A.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new z,this.strm.avail_out=0;var t=GA.inflateInit2(this.strm,e.windowBits);if(t!==UA)throw new Error(K[t]);if(this.header=new FA,GA.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Z(e.dictionary):"[object ArrayBuffer]"===SA.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=GA.inflateSetDictionary(this.strm,e.dictionary))!==UA))throw new Error(K[t])}function qA(A,e){var t=new JA(e);if(t.push(A),t.err)throw t.msg||K[t.err];return t.result}JA.prototype.push=function(A,e){var t,i,r,I=this.strm,g=this.options.chunkSize,n=this.options.dictionary;if(this.ended)return!1;for(i=e===~~e?e:!0===e?RA:vA,"[object ArrayBuffer]"===SA.call(A)?I.input=new Uint8Array(A):I.input=A,I.next_in=0,I.avail_in=I.input.length;;){for(0===I.avail_out&&(I.output=new Uint8Array(g),I.next_out=0,I.avail_out=g),(t=GA.inflate(I,i))===bA&&n&&((t=GA.inflateSetDictionary(I,n))===UA?t=GA.inflate(I,i):t===NA&&(t=bA));I.avail_in>0&&t===LA&&I.state.wrap>0&&0!==A[I.next_in];)GA.inflateReset(I),t=GA.inflate(I,i);switch(t){case MA:case NA:case bA:case xA:return this.onEnd(t),this.ended=!0,!1}if(r=I.avail_out,I.next_out&&(0===I.avail_out||t===LA))if("string"===this.options.to){var a=W(I.output,I.next_out),o=I.next_out-a,B=j(I.output,a);I.next_out=o,I.avail_out=g-o,o&&I.output.set(I.output.subarray(a,a+o),0),this.onData(B)}else this.onData(I.output.length===I.next_out?I.output:I.output.subarray(0,I.next_out));if(t!==UA||0!==r){if(t===LA)return t=GA.inflateEnd(this.strm),this.onEnd(t),this.ended=!0,!0;if(0===I.avail_in)break}}return!0},JA.prototype.onData=function(A){this.chunks.push(A)},JA.prototype.onEnd=function(A){A===UA&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=T(this.chunks)),this.chunks=[],this.err=A,this.msg=this.strm.msg};var YA={Inflate:JA,inflate:qA,inflateRaw:function(A,e){return(e=e||{}).raw=!0,qA(A,e)},ungzip:qA,constants:H}.inflate;function KA(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var HA=function(A){s(t,w);var e=KA(t);function t(){return B(this,t),e.apply(this,arguments)}return Q(t,[{key:"decodeBlock",value:function(A){return YA(new Uint8Array(A)).buffer}}]),t}(),OA=Object.freeze({__proto__:null,default:HA});function PA(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var TA,VA=function(A){s(t,w);var e=PA(t);function t(){return B(this,t),e.apply(this,arguments)}return Q(t,[{key:"decodeBlock",value:function(A){for(var e=new DataView(A),t=[],i=0;i<A.byteLength;++i){var r=e.getInt8(i);if(r<0){var I=e.getUint8(i+1);r=-r;for(var g=0;g<=r;++g)t.push(I);i+=1}else{for(var n=0;n<=r;++n)t.push(e.getUint8(i+n+1));i+=r+1}}return new Uint8Array(t).buffer}}]),t}(),_A=Object.freeze({__proto__:null,default:VA}),XA={exports:{}};TA=XA,\n/* Copyright 2015-2021 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */\nfunction(){var A,e,t,i,r,I,g,n,a,o,B,C,Q,E,s,f,c=(A={defaultNoDataValue:-34027999387901484e22,decode:function(I,g){var n=(g=g||{}).encodedMaskData||null===g.encodedMaskData,a=r(I,g.inputOffset||0,n),o=null!==g.noDataValue?g.noDataValue:A.defaultNoDataValue,B=e(a,g.pixelType||Float32Array,g.encodedMaskData,o,g.returnMask),C={width:a.width,height:a.height,pixelData:B.resultPixels,minValue:B.minValue,maxValue:a.pixels.maxValue,noDataValue:o};return B.resultMask&&(C.maskData=B.resultMask),g.returnEncodedMask&&a.mask&&(C.encodedMaskData=a.mask.bitset?a.mask.bitset:null),g.returnFileInfo&&(C.fileInfo=t(a),g.computeUsedBitDepths&&(C.fileInfo.bitDepths=i(a))),C}},e=function(A,e,t,i,r){var g,n,a,o=0,B=A.pixels.numBlocksX,C=A.pixels.numBlocksY,Q=Math.floor(A.width/B),E=Math.floor(A.height/C),s=2*A.maxZError,f=Number.MAX_VALUE;t=t||(A.mask?A.mask.bitset:null),n=new e(A.width*A.height),r&&t&&(a=new Uint8Array(A.width*A.height));for(var c,h,l=new Float32Array(Q*E),u=0;u<=C;u++){var w=u!==C?E:A.height%C;if(0!==w)for(var d=0;d<=B;d++){var D=d!==B?Q:A.width%B;if(0!==D){var y,k,p,m,G=u*A.width*E+d*Q,F=A.width-D,S=A.pixels.blocks[o];if(S.encoding<2?(0===S.encoding?y=S.rawData:(I(S.stuffedData,S.bitsPerPixel,S.numValidPixels,S.offset,s,l,A.pixels.maxValue),y=l),k=0):p=2===S.encoding?0:S.offset,t)for(h=0;h<w;h++){for(7&G&&(m=t[G>>3],m<<=7&G),c=0;c<D;c++)7&G||(m=t[G>>3]),128&m?(a&&(a[G]=1),f=f>(g=S.encoding<2?y[k++]:p)?g:f,n[G++]=g):(a&&(a[G]=0),n[G++]=i),m<<=1;G+=F}else if(S.encoding<2)for(h=0;h<w;h++){for(c=0;c<D;c++)f=f>(g=y[k++])?g:f,n[G++]=g;G+=F}else for(f=f>p?p:f,h=0;h<w;h++){for(c=0;c<D;c++)n[G++]=p;G+=F}if(1===S.encoding&&k!==S.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:n,resultMask:a,minValue:f}},t=function(A){return{fileIdentifierString:A.fileIdentifierString,fileVersion:A.fileVersion,imageType:A.imageType,height:A.height,width:A.width,maxZError:A.maxZError,eofOffset:A.eofOffset,mask:A.mask?{numBlocksX:A.mask.numBlocksX,numBlocksY:A.mask.numBlocksY,numBytes:A.mask.numBytes,maxValue:A.mask.maxValue}:null,pixels:{numBlocksX:A.pixels.numBlocksX,numBlocksY:A.pixels.numBlocksY,numBytes:A.pixels.numBytes,maxValue:A.pixels.maxValue,noDataValue:A.noDataValue}}},i=function(A){for(var e=A.pixels.numBlocksX*A.pixels.numBlocksY,t={},i=0;i<e;i++){var r=A.pixels.blocks[i];0===r.encoding?t.float32=!0:1===r.encoding?t[r.bitsPerPixel]=!0:t[0]=!0}return Object.keys(t)},r=function(A,e,t){var i={},r=new Uint8Array(A,e,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==i.fileIdentifierString.trim())throw"Unexpected file identifier string: "+i.fileIdentifierString;e+=10;var I=new DataView(A,e,24);if(i.fileVersion=I.getInt32(0,!0),i.imageType=I.getInt32(4,!0),i.height=I.getUint32(8,!0),i.width=I.getUint32(12,!0),i.maxZError=I.getFloat64(16,!0),e+=24,!t)if(I=new DataView(A,e,16),i.mask={},i.mask.numBlocksY=I.getUint32(0,!0),i.mask.numBlocksX=I.getUint32(4,!0),i.mask.numBytes=I.getUint32(8,!0),i.mask.maxValue=I.getFloat32(12,!0),e+=16,i.mask.numBytes>0){var g=new Uint8Array(Math.ceil(i.width*i.height/8)),n=(I=new DataView(A,e,i.mask.numBytes)).getInt16(0,!0),a=2,o=0;do{if(n>0)for(;n--;)g[o++]=I.getUint8(a++);else{var B=I.getUint8(a++);for(n=-n;n--;)g[o++]=B}n=I.getInt16(a,!0),a+=2}while(a<i.mask.numBytes);if(-32768!==n||o<g.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=g,e+=i.mask.numBytes}else 0==(i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue)&&(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));I=new DataView(A,e,16),i.pixels={},i.pixels.numBlocksY=I.getUint32(0,!0),i.pixels.numBlocksX=I.getUint32(4,!0),i.pixels.numBytes=I.getUint32(8,!0),i.pixels.maxValue=I.getFloat32(12,!0),e+=16;var C=i.pixels.numBlocksX,Q=i.pixels.numBlocksY,E=C+(i.width%C>0?1:0),s=Q+(i.height%Q>0?1:0);i.pixels.blocks=new Array(E*s);for(var f=0,c=0;c<s;c++)for(var h=0;h<E;h++){var l=0,u=A.byteLength-e;I=new DataView(A,e,Math.min(10,u));var w={};i.pixels.blocks[f++]=w;var d=I.getUint8(0);if(l++,w.encoding=63&d,w.encoding>3)throw"Invalid block encoding ("+w.encoding+")";if(2!==w.encoding){if(0!==d&&2!==d){if(d>>=6,w.offsetType=d,2===d)w.offset=I.getInt8(1),l++;else if(1===d)w.offset=I.getInt16(1,!0),l+=2;else{if(0!==d)throw"Invalid block offset type";w.offset=I.getFloat32(1,!0),l+=4}if(1===w.encoding)if(d=I.getUint8(l),l++,w.bitsPerPixel=63&d,d>>=6,w.numValidPixelsType=d,2===d)w.numValidPixels=I.getUint8(l),l++;else if(1===d)w.numValidPixels=I.getUint16(l,!0),l+=2;else{if(0!==d)throw"Invalid valid pixel count type";w.numValidPixels=I.getUint32(l,!0),l+=4}}var D;if(e+=l,3!==w.encoding)if(0===w.encoding){var y=(i.pixels.numBytes-1)/4;if(y!==Math.floor(y))throw"uncompressed block has invalid length";D=new ArrayBuffer(4*y),new Uint8Array(D).set(new Uint8Array(A,e,4*y));var k=new Float32Array(D);w.rawData=k,e+=4*y}else if(1===w.encoding){var p=Math.ceil(w.numValidPixels*w.bitsPerPixel/8),m=Math.ceil(p/4);D=new ArrayBuffer(4*m),new Uint8Array(D).set(new Uint8Array(A,e,p)),w.stuffedData=new Uint32Array(D),e+=p}}else e++}return i.eofOffset=e,i},I=function(A,e,t,i,r,I,g){var n,a,o,B=(1<<e)-1,C=0,Q=0,E=Math.ceil((g-i)/r),s=4*A.length-Math.ceil(e*t/8);for(A[A.length-1]<<=8*s,n=0;n<t;n++){if(0===Q&&(o=A[C++],Q=32),Q>=e)a=o>>>Q-e&B,Q-=e;else{var f=e-Q;a=(o&B)<<f&B,a+=(o=A[C++])>>>(Q=32-f)}I[n]=a<E?i+a*r:g}return I},A),h=(g=function(A,e,t,i,r,I,g,n){var a,o,B,C,Q,E=(1<<t)-1,s=0,f=0,c=4*A.length-Math.ceil(t*i/8);if(A[A.length-1]<<=8*c,r)for(a=0;a<i;a++)0===f&&(B=A[s++],f=32),f>=t?(o=B>>>f-t&E,f-=t):(o=(B&E)<<(C=t-f)&E,o+=(B=A[s++])>>>(f=32-C)),e[a]=r[o];else for(Q=Math.ceil((n-I)/g),a=0;a<i;a++)0===f&&(B=A[s++],f=32),f>=t?(o=B>>>f-t&E,f-=t):(o=(B&E)<<(C=t-f)&E,o+=(B=A[s++])>>>(f=32-C)),e[a]=o<Q?I+o*g:n},n=function(A,e,t,i,r,I){var g,n=(1<<e)-1,a=0,o=0,B=0,C=0,Q=0,E=[],s=4*A.length-Math.ceil(e*t/8);A[A.length-1]<<=8*s;var f=Math.ceil((I-i)/r);for(o=0;o<t;o++)0===C&&(g=A[a++],C=32),C>=e?(Q=g>>>C-e&n,C-=e):(Q=(g&n)<<(B=e-C)&n,Q+=(g=A[a++])>>>(C=32-B)),E[o]=Q<f?i+Q*r:I;return E.unshift(i),E},a=function(A,e,t,i,r,I,g,n){var a,o,B,C,Q=(1<<t)-1,E=0,s=0,f=0;if(r)for(a=0;a<i;a++)0===s&&(B=A[E++],s=32,f=0),s>=t?(o=B>>>f&Q,s-=t,f+=t):(o=B>>>f&Q,s=32-(C=t-s),o|=((B=A[E++])&(1<<C)-1)<<t-C,f=C),e[a]=r[o];else{var c=Math.ceil((n-I)/g);for(a=0;a<i;a++)0===s&&(B=A[E++],s=32,f=0),s>=t?(o=B>>>f&Q,s-=t,f+=t):(o=B>>>f&Q,s=32-(C=t-s),o|=((B=A[E++])&(1<<C)-1)<<t-C,f=C),e[a]=o<c?I+o*g:n}return e},o=function(A,e,t,i,r,I){var g,n=(1<<e)-1,a=0,o=0,B=0,C=0,Q=0,E=0,s=[],f=Math.ceil((I-i)/r);for(o=0;o<t;o++)0===C&&(g=A[a++],C=32,E=0),C>=e?(Q=g>>>E&n,C-=e,E+=e):(Q=g>>>E&n,C=32-(B=e-C),Q|=((g=A[a++])&(1<<B)-1)<<e-B,E=B),s[o]=Q<f?i+Q*r:I;return s.unshift(i),s},B=function(A,e,t,i){var r,I,g,n,a=(1<<t)-1,o=0,B=0,C=4*A.length-Math.ceil(t*i/8);for(A[A.length-1]<<=8*C,r=0;r<i;r++)0===B&&(g=A[o++],B=32),B>=t?(I=g>>>B-t&a,B-=t):(I=(g&a)<<(n=t-B)&a,I+=(g=A[o++])>>>(B=32-n)),e[r]=I;return e},C=function(A,e,t,i){var r,I,g,n,a=(1<<t)-1,o=0,B=0,C=0;for(r=0;r<i;r++)0===B&&(g=A[o++],B=32,C=0),B>=t?(I=g>>>C&a,B-=t,C+=t):(I=g>>>C&a,B=32-(n=t-B),I|=((g=A[o++])&(1<<n)-1)<<t-n,C=n),e[r]=I;return e},Q={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(A){for(var e=65535,t=65535,i=A.length,r=Math.floor(i/2),I=0;r;){var g=r>=359?359:r;r-=g;do{e+=A[I++]<<8,t+=e+=A[I++]}while(--g);e=(65535&e)+(e>>>16),t=(65535&t)+(t>>>16)}return 1&i&&(t+=e+=A[I]<<8),((t=(65535&t)+(t>>>16))<<16|(e=(65535&e)+(e>>>16)))>>>0},readHeaderInfo:function(A,e){var t=e.ptr,i=new Uint8Array(A,t,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,i),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;t+=6;var I,g=new DataView(A,t,8),n=g.getInt32(0,!0);if(r.fileVersion=n,t+=4,n>=3&&(r.checksum=g.getUint32(4,!0),t+=4),g=new DataView(A,t,12),r.height=g.getUint32(0,!0),r.width=g.getUint32(4,!0),t+=8,n>=4?(r.numDims=g.getUint32(8,!0),t+=4):r.numDims=1,g=new DataView(A,t,40),r.numValidPixel=g.getUint32(0,!0),r.microBlockSize=g.getInt32(4,!0),r.blobSize=g.getInt32(8,!0),r.imageType=g.getInt32(12,!0),r.maxZError=g.getFloat64(16,!0),r.zMin=g.getFloat64(24,!0),r.zMax=g.getFloat64(32,!0),t+=40,e.headerInfo=r,e.ptr=t,n>=3&&(I=n>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(A,t-I,r.blobSize-14))!==r.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(A,e){var t=e.headerInfo,i=this.getDataTypeArray(t.imageType),r=t.numDims*this.getDataTypeSize(t.imageType),I=this.readSubArray(A,e.ptr,i,r),g=this.readSubArray(A,e.ptr+r,i,r);e.ptr+=2*r;var n,a=!0;for(n=0;n<t.numDims;n++)if(I[n]!==g[n]){a=!1;break}return t.minValues=I,t.maxValues=g,a},readSubArray:function(A,e,t,i){var r;if(t===Uint8Array)r=new Uint8Array(A,e,i);else{var I=new ArrayBuffer(i);new Uint8Array(I).set(new Uint8Array(A,e,i)),r=new t(I)}return r},readMask:function(A,e){var t,i,r=e.ptr,I=e.headerInfo,g=I.width*I.height,n=I.numValidPixel,a=new DataView(A,r,4),o={};if(o.numBytes=a.getUint32(0,!0),r+=4,(0===n||g===n)&&0!==o.numBytes)throw"invalid mask";if(0===n)t=new Uint8Array(Math.ceil(g/8)),o.bitset=t,i=new Uint8Array(g),e.pixels.resultMask=i,r+=o.numBytes;else if(o.numBytes>0){t=new Uint8Array(Math.ceil(g/8));var B=(a=new DataView(A,r,o.numBytes)).getInt16(0,!0),C=2,Q=0,E=0;do{if(B>0)for(;B--;)t[Q++]=a.getUint8(C++);else for(E=a.getUint8(C++),B=-B;B--;)t[Q++]=E;B=a.getInt16(C,!0),C+=2}while(C<o.numBytes);if(-32768!==B||Q<t.length)throw"Unexpected end of mask RLE encoding";i=new Uint8Array(g);var s=0,f=0;for(f=0;f<g;f++)7&f?(s=t[f>>3],s<<=7&f):s=t[f>>3],128&s&&(i[f]=1);e.pixels.resultMask=i,o.bitset=t,r+=o.numBytes}return e.ptr=r,e.mask=o,!0},readDataOneSweep:function(A,e,t,i){var r,I=e.ptr,g=e.headerInfo,n=g.numDims,a=g.width*g.height,o=g.imageType,B=g.numValidPixel*Q.getDataTypeSize(o)*n,C=e.pixels.resultMask;if(t===Uint8Array)r=new Uint8Array(A,I,B);else{var E=new ArrayBuffer(B);new Uint8Array(E).set(new Uint8Array(A,I,B)),r=new t(E)}if(r.length===a*n)e.pixels.resultPixels=i?Q.swapDimensionOrder(r,a,n,t,!0):r;else{e.pixels.resultPixels=new t(a*n);var s=0,f=0,c=0,h=0;if(n>1){if(i){for(f=0;f<a;f++)if(C[f])for(h=f,c=0;c<n;c++,h+=a)e.pixels.resultPixels[h]=r[s++]}else for(f=0;f<a;f++)if(C[f])for(h=f*n,c=0;c<n;c++)e.pixels.resultPixels[h+c]=r[s++]}else for(f=0;f<a;f++)C[f]&&(e.pixels.resultPixels[f]=r[s++])}return I+=B,e.ptr=I,!0},readHuffmanTree:function(A,e){var t=this.HUFFMAN_LUT_BITS_MAX,i=new DataView(A,e.ptr,16);if(e.ptr+=16,i.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=i.getInt32(4,!0),I=i.getInt32(8,!0),g=i.getInt32(12,!0);if(I>=g)return!1;var n=new Uint32Array(g-I);Q.decodeBits(A,e,n);var a,o,B,C,s=[];for(a=I;a<g;a++)s[o=a-(a<r?0:r)]={first:n[a-I],second:null};var f=A.byteLength-e.ptr,c=Math.ceil(f/4),h=new ArrayBuffer(4*c);new Uint8Array(h).set(new Uint8Array(A,e.ptr,f));var l,u=new Uint32Array(h),w=0,d=0;for(l=u[0],a=I;a<g;a++)(C=s[o=a-(a<r?0:r)].first)>0&&(s[o].second=l<<w>>>32-C,32-w>=C?32===(w+=C)&&(w=0,l=u[++d]):(w+=C-32,l=u[++d],s[o].second|=l>>>32-w));var D=0,y=0,k=new E;for(a=0;a<s.length;a++)void 0!==s[a]&&(D=Math.max(D,s[a].first));y=D>=t?t:D;var p,m,G,F,S,v=[];for(a=I;a<g;a++)if((C=s[o=a-(a<r?0:r)].first)>0)if(p=[C,o],C<=y)for(m=s[o].second<<y-C,G=1<<y-C,B=0;B<G;B++)v[m|B]=p;else for(m=s[o].second,S=k,F=C-1;F>=0;F--)m>>>F&1?(S.right||(S.right=new E),S=S.right):(S.left||(S.left=new E),S=S.left),0!==F||S.val||(S.val=p[1]);return{decodeLut:v,numBitsLUTQick:y,numBitsLUT:D,tree:k,stuffedData:u,srcPtr:d,bitPos:w}},readHuffman:function(A,e,t,i){var r,I,g,n,a,o,B,C,E,s=e.headerInfo.numDims,f=e.headerInfo.height,c=e.headerInfo.width,h=c*f,l=this.readHuffmanTree(A,e),u=l.decodeLut,w=l.tree,d=l.stuffedData,D=l.srcPtr,y=l.bitPos,k=l.numBitsLUTQick,p=l.numBitsLUT,m=0===e.headerInfo.imageType?128:0,G=e.pixels.resultMask,F=0;y>0&&(D++,y=0);var S,v=d[D],R=1===e.encodeMode,U=new t(h*s),L=U;if(s<2||R){for(S=0;S<s;S++)if(s>1&&(L=new t(U.buffer,h*S,h),F=0),e.headerInfo.numValidPixel===c*f)for(C=0,o=0;o<f;o++)for(B=0;B<c;B++,C++){if(I=0,a=n=v<<y>>>32-k,32-y<k&&(a=n|=d[D+1]>>>64-y-k),u[a])I=u[a][1],y+=u[a][0];else for(a=n=v<<y>>>32-p,32-y<p&&(a=n|=d[D+1]>>>64-y-p),r=w,E=0;E<p;E++)if(!(r=n>>>p-E-1&1?r.right:r.left).left&&!r.right){I=r.val,y=y+E+1;break}y>=32&&(y-=32,v=d[++D]),g=I-m,R?(g+=B>0?F:o>0?L[C-c]:F,g&=255,L[C]=g,F=g):L[C]=g}else for(C=0,o=0;o<f;o++)for(B=0;B<c;B++,C++)if(G[C]){if(I=0,a=n=v<<y>>>32-k,32-y<k&&(a=n|=d[D+1]>>>64-y-k),u[a])I=u[a][1],y+=u[a][0];else for(a=n=v<<y>>>32-p,32-y<p&&(a=n|=d[D+1]>>>64-y-p),r=w,E=0;E<p;E++)if(!(r=n>>>p-E-1&1?r.right:r.left).left&&!r.right){I=r.val,y=y+E+1;break}y>=32&&(y-=32,v=d[++D]),g=I-m,R?(B>0&&G[C-1]?g+=F:o>0&&G[C-c]?g+=L[C-c]:g+=F,g&=255,L[C]=g,F=g):L[C]=g}}else for(C=0,o=0;o<f;o++)for(B=0;B<c;B++)if(C=o*c+B,!G||G[C])for(S=0;S<s;S++,C+=h){if(I=0,a=n=v<<y>>>32-k,32-y<k&&(a=n|=d[D+1]>>>64-y-k),u[a])I=u[a][1],y+=u[a][0];else for(a=n=v<<y>>>32-p,32-y<p&&(a=n|=d[D+1]>>>64-y-p),r=w,E=0;E<p;E++)if(!(r=n>>>p-E-1&1?r.right:r.left).left&&!r.right){I=r.val,y=y+E+1;break}y>=32&&(y-=32,v=d[++D]),g=I-m,L[C]=g}e.ptr=e.ptr+4*(D+1)+(y>0?4:0),e.pixels.resultPixels=U,s>1&&!i&&(e.pixels.resultPixels=Q.swapDimensionOrder(U,h,s,t))},decodeBits:function(A,e,t,i,r){var I=e.headerInfo,Q=I.fileVersion,E=0,s=A.byteLength-e.ptr>=5?5:A.byteLength-e.ptr,f=new DataView(A,e.ptr,s),c=f.getUint8(0);E++;var h=c>>6,l=0===h?4:3-h,u=(32&c)>0,w=31&c,d=0;if(1===l)d=f.getUint8(E),E++;else if(2===l)d=f.getUint16(E,!0),E+=2;else{if(4!==l)throw"Invalid valid pixel count type";d=f.getUint32(E,!0),E+=4}var D,y,k,p,m,G,F,S,v,R=2*I.maxZError,U=I.numDims>1?I.maxValues[r]:I.zMax;if(u){for(e.counter.lut++,S=f.getUint8(E),E++,p=Math.ceil((S-1)*w/8),m=Math.ceil(p/4),y=new ArrayBuffer(4*m),k=new Uint8Array(y),e.ptr+=E,k.set(new Uint8Array(A,e.ptr,p)),F=new Uint32Array(y),e.ptr+=p,v=0;S-1>>>v;)v++;p=Math.ceil(d*v/8),m=Math.ceil(p/4),y=new ArrayBuffer(4*m),(k=new Uint8Array(y)).set(new Uint8Array(A,e.ptr,p)),D=new Uint32Array(y),e.ptr+=p,G=Q>=3?o(F,w,S-1,i,R,U):n(F,w,S-1,i,R,U),Q>=3?a(D,t,v,d,G):g(D,t,v,d,G)}else e.counter.bitstuffer++,v=w,e.ptr+=E,v>0&&(p=Math.ceil(d*v/8),m=Math.ceil(p/4),y=new ArrayBuffer(4*m),(k=new Uint8Array(y)).set(new Uint8Array(A,e.ptr,p)),D=new Uint32Array(y),e.ptr+=p,Q>=3?null==i?C(D,t,v,d):a(D,t,v,d,!1,i,R,U):null==i?B(D,t,v,d):g(D,t,v,d,!1,i,R,U))},readTiles:function(A,e,t,i){var r=e.headerInfo,I=r.width,g=r.height,n=I*g,a=r.microBlockSize,o=r.imageType,B=Q.getDataTypeSize(o),C=Math.ceil(I/a),E=Math.ceil(g/a);e.pixels.numBlocksY=E,e.pixels.numBlocksX=C,e.pixels.ptr=0;var s,f,c,h,l,u,w,d,D,y,k=0,p=0,m=0,G=0,F=0,S=0,v=0,R=0,U=0,L=0,b=0,M=0,N=0,x=0,J=0,q=new t(a*a),Y=g%a||a,K=I%a||a,H=r.numDims,O=e.pixels.resultMask,P=e.pixels.resultPixels,T=r.fileVersion>=5?14:15,V=r.zMax;for(m=0;m<E;m++)for(F=m!==E-1?a:Y,G=0;G<C;G++)for(L=m*I*a+G*a,b=I-(S=G!==C-1?a:K),d=0;d<H;d++){if(H>1?(y=P,L=m*I*a+G*a,P=new t(e.pixels.resultPixels.buffer,n*d*B,n),V=r.maxValues[d]):y=null,v=A.byteLength-e.ptr,f={},J=0,R=(s=new DataView(A,e.ptr,Math.min(10,v))).getUint8(0),J++,D=r.fileVersion>=5?4&R:0,U=R>>6&255,(R>>2&T)!=(G*a>>3&T))throw"integrity issue";if(D&&0===d)throw"integrity issue";if((l=3&R)>3)throw e.ptr+=J,"Invalid block encoding ("+l+")";if(2!==l)if(0===l){if(D)throw"integrity issue";if(e.counter.uncompressed++,e.ptr+=J,M=(M=F*S*B)<(N=A.byteLength-e.ptr)?M:N,c=new ArrayBuffer(M%B==0?M:M+B-M%B),new Uint8Array(c).set(new Uint8Array(A,e.ptr,M)),h=new t(c),x=0,O)for(k=0;k<F;k++){for(p=0;p<S;p++)O[L]&&(P[L]=h[x++]),L++;L+=b}else for(k=0;k<F;k++){for(p=0;p<S;p++)P[L++]=h[x++];L+=b}e.ptr+=x*B}else if(u=Q.getDataTypeUsed(D&&o<6?4:o,U),w=Q.getOnePixel(f,J,u,s),J+=Q.getDataTypeSize(u),3===l)if(e.ptr+=J,e.counter.constantoffset++,O)for(k=0;k<F;k++){for(p=0;p<S;p++)O[L]&&(P[L]=D?Math.min(V,y[L]+w):w),L++;L+=b}else for(k=0;k<F;k++){for(p=0;p<S;p++)P[L]=D?Math.min(V,y[L]+w):w,L++;L+=b}else if(e.ptr+=J,Q.decodeBits(A,e,q,w,d),J=0,D)if(O)for(k=0;k<F;k++){for(p=0;p<S;p++)O[L]&&(P[L]=q[J++]+y[L]),L++;L+=b}else for(k=0;k<F;k++){for(p=0;p<S;p++)P[L]=q[J++]+y[L],L++;L+=b}else if(O)for(k=0;k<F;k++){for(p=0;p<S;p++)O[L]&&(P[L]=q[J++]),L++;L+=b}else for(k=0;k<F;k++){for(p=0;p<S;p++)P[L++]=q[J++];L+=b}else{if(D)if(O)for(k=0;k<F;k++)for(p=0;p<S;p++)O[L]&&(P[L]=y[L]),L++;else for(k=0;k<F;k++)for(p=0;p<S;p++)P[L]=y[L],L++;e.counter.constant++,e.ptr+=J}}H>1&&!i&&(e.pixels.resultPixels=Q.swapDimensionOrder(e.pixels.resultPixels,n,H,t))},formatFileInfo:function(A){return{fileIdentifierString:A.headerInfo.fileIdentifierString,fileVersion:A.headerInfo.fileVersion,imageType:A.headerInfo.imageType,height:A.headerInfo.height,width:A.headerInfo.width,numValidPixel:A.headerInfo.numValidPixel,microBlockSize:A.headerInfo.microBlockSize,blobSize:A.headerInfo.blobSize,maxZError:A.headerInfo.maxZError,pixelType:Q.getPixelType(A.headerInfo.imageType),eofOffset:A.eofOffset,mask:A.mask?{numBytes:A.mask.numBytes}:null,pixels:{numBlocksX:A.pixels.numBlocksX,numBlocksY:A.pixels.numBlocksY,maxValue:A.headerInfo.zMax,minValue:A.headerInfo.zMin,noDataValue:A.noDataValue}}},constructConstantSurface:function(A,e){var t=A.headerInfo.zMax,i=A.headerInfo.zMin,r=A.headerInfo.maxValues,I=A.headerInfo.numDims,g=A.headerInfo.height*A.headerInfo.width,n=0,a=0,o=0,B=A.pixels.resultMask,C=A.pixels.resultPixels;if(B)if(I>1){if(e)for(n=0;n<I;n++)for(o=n*g,t=r[n],a=0;a<g;a++)B[a]&&(C[o+a]=t);else for(a=0;a<g;a++)if(B[a])for(o=a*I,n=0;n<I;n++)C[o+I]=r[n]}else for(a=0;a<g;a++)B[a]&&(C[a]=t);else if(I>1&&i!==t)if(e)for(n=0;n<I;n++)for(o=n*g,t=r[n],a=0;a<g;a++)C[o+a]=t;else for(a=0;a<g;a++)for(o=a*I,n=0;n<I;n++)C[o+n]=r[n];else for(a=0;a<g*I;a++)C[a]=t},getDataTypeArray:function(A){var e;switch(A){case 0:e=Int8Array;break;case 1:e=Uint8Array;break;case 2:e=Int16Array;break;case 3:e=Uint16Array;break;case 4:e=Int32Array;break;case 5:e=Uint32Array;break;case 6:default:e=Float32Array;break;case 7:e=Float64Array}return e},getPixelType:function(A){var e;switch(A){case 0:e="S8";break;case 1:e="U8";break;case 2:e="S16";break;case 3:e="U16";break;case 4:e="S32";break;case 5:e="U32";break;case 6:default:e="F32";break;case 7:e="F64"}return e},isValidPixelValue:function(A,e){if(null==e)return!1;var t;switch(A){case 0:t=e>=-128&&e<=127;break;case 1:t=e>=0&&e<=255;break;case 2:t=e>=-32768&&e<=32767;break;case 3:t=e>=0&&e<=65536;break;case 4:t=e>=-2147483648&&e<=2147483647;break;case 5:t=e>=0&&e<=4294967296;break;case 6:t=e>=-34027999387901484e22&&e<=34027999387901484e22;break;case 7:t=e>=-17976931348623157e292&&e<=17976931348623157e292;break;default:t=!1}return t},getDataTypeSize:function(A){var e=0;switch(A){case 0:case 1:e=1;break;case 2:case 3:e=2;break;case 4:case 5:case 6:e=4;break;case 7:e=8;break;default:e=A}return e},getDataTypeUsed:function(A,e){var t=A;switch(A){case 2:case 4:t=A-e;break;case 3:case 5:t=A-2*e;break;case 6:t=0===e?A:1===e?2:1;break;case 7:t=0===e?A:A-2*e+1;break;default:t=A}return t},getOnePixel:function(A,e,t,i){var r=0;switch(t){case 0:r=i.getInt8(e);break;case 1:r=i.getUint8(e);break;case 2:r=i.getInt16(e,!0);break;case 3:r=i.getUint16(e,!0);break;case 4:r=i.getInt32(e,!0);break;case 5:r=i.getUInt32(e,!0);break;case 6:r=i.getFloat32(e,!0);break;case 7:r=i.getFloat64(e,!0);break;default:throw"the decoder does not understand this pixel type"}return r},swapDimensionOrder:function(A,e,t,i,r){var I=0,g=0,n=0,a=0,o=A;if(t>1)if(o=new i(e*t),r)for(I=0;I<e;I++)for(a=I,n=0;n<t;n++,a+=e)o[a]=A[g++];else for(I=0;I<e;I++)for(a=I,n=0;n<t;n++,a+=e)o[g++]=A[a];return o}},E=function(A,e,t){this.val=A,this.left=e,this.right=t},{decode:function(A,e){var t=(e=e||{}).noDataValue,i=0,r={};r.ptr=e.inputOffset||0,r.pixels={},Q.readHeaderInfo(A,r);var I=r.headerInfo,g=I.fileVersion,n=Q.getDataTypeArray(I.imageType);if(g>5)throw"unsupported lerc version 2."+g;Q.readMask(A,r),I.numValidPixel===I.width*I.height||r.pixels.resultMask||(r.pixels.resultMask=e.maskData);var a=I.width*I.height;r.pixels.resultPixels=new n(a*I.numDims),r.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0};var o,B=!e.returnPixelInterleavedDims;if(0!==I.numValidPixel)if(I.zMax===I.zMin)Q.constructConstantSurface(r,B);else if(g>=4&&Q.checkMinMaxRanges(A,r))Q.constructConstantSurface(r,B);else{var C=new DataView(A,r.ptr,2),E=C.getUint8(0);if(r.ptr++,E)Q.readDataOneSweep(A,r,n,B);else if(g>1&&I.imageType<=1&&Math.abs(I.maxZError-.5)<1e-5){var s=C.getUint8(1);if(r.ptr++,r.encodeMode=s,s>2||g<4&&s>1)throw"Invalid Huffman flag "+s;s?Q.readHuffman(A,r,n,B):Q.readTiles(A,r,n,B)}else Q.readTiles(A,r,n,B)}r.eofOffset=r.ptr,e.inputOffset?(o=r.headerInfo.blobSize+e.inputOffset-r.ptr,Math.abs(o)>=1&&(r.eofOffset=e.inputOffset+r.headerInfo.blobSize)):(o=r.headerInfo.blobSize-r.ptr,Math.abs(o)>=1&&(r.eofOffset=r.headerInfo.blobSize));var f={width:I.width,height:I.height,pixelData:r.pixels.resultPixels,minValue:I.zMin,maxValue:I.zMax,validPixelCount:I.numValidPixel,dimCount:I.numDims,dimStats:{minValues:I.minValues,maxValues:I.maxValues},maskData:r.pixels.resultMask};if(r.pixels.resultMask&&Q.isValidPixelValue(I.imageType,t)){var c=r.pixels.resultMask;for(i=0;i<a;i++)c[i]||(f.pixelData[i]=t);f.noDataValue=t}return r.noDataValue=t,e.returnFileInfo&&(f.fileInfo=Q.formatFileInfo(r)),f},getBandCount:function(A){for(var e=0,t=0,i={ptr:0,pixels:{}};t<A.byteLength-58;)Q.readHeaderInfo(A,i),t+=i.headerInfo.blobSize,e++,i.ptr=t;return e}}),l=(s=new ArrayBuffer(4),f=new Uint8Array(s),new Uint32Array(s)[0]=1,1===f[0]),u={decode:function(A,e){if(!l)throw"Big endian system is not supported.";var t,i,r=(e=e||{}).inputOffset||0,I=new Uint8Array(A,r,10),g=String.fromCharCode.apply(null,I);if("CntZImage"===g.trim())t=c,i=1;else{if("Lerc2"!==g.substring(0,5))throw"Unexpected file identifier string: "+g;t=h,i=2}for(var n,a,o,B,C,Q,E=0,s=A.byteLength-10,f=[],u={width:0,height:0,pixels:[],pixelType:e.pixelType,mask:null,statistics:[]},w=0;r<s;){var d=t.decode(A,{inputOffset:r,encodedMaskData:n,maskData:o,returnMask:0===E,returnEncodedMask:0===E,returnFileInfo:!0,returnPixelInterleavedDims:e.returnPixelInterleavedDims,pixelType:e.pixelType||null,noDataValue:e.noDataValue||null});r=d.fileInfo.eofOffset,o=d.maskData,0===E&&(n=d.encodedMaskData,u.width=d.width,u.height=d.height,u.dimCount=d.dimCount||1,u.pixelType=d.pixelType||d.fileInfo.pixelType,u.mask=o),i>1&&(o&&f.push(o),d.fileInfo.mask&&d.fileInfo.mask.numBytes>0&&w++),E++,u.pixels.push(d.pixelData),u.statistics.push({minValue:d.minValue,maxValue:d.maxValue,noDataValue:d.noDataValue,dimStats:d.dimStats})}if(i>1&&w>1){for(Q=u.width*u.height,u.bandMasks=f,(o=new Uint8Array(Q)).set(f[0]),B=1;B<f.length;B++)for(a=f[B],C=0;C<Q;C++)o[C]=o[C]&a[C];u.maskData=o}return u}};TA.exports?TA.exports=u:this.Lerc=u}();var ZA,jA,WA,zA=XA.exports,$A={env:{emscripten_notify_memory_growth:function(A){WA=new Uint8Array(jA.exports.memory.buffer)}}},Ae=function(){function A(){B(this,A)}return Q(A,[{key:"init",value:function(){return ZA||(ZA="undefined"!=typeof fetch?fetch("data:application/wasm;base64,"+ee).then((function(A){return A.arrayBuffer()})).then((function(A){return WebAssembly.instantiate(A,$A)})).then(this._init):WebAssembly.instantiate(Buffer.from(ee,"base64"),$A).then(this._init))}},{key:"_init",value:function(A){jA=A.instance,$A.env.emscripten_notify_memory_growth(0)}},{key:"decode",value:function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!jA)throw new Error("ZSTDDecoder: Await .init() before decoding.");var t=A.byteLength,i=jA.exports.malloc(t);WA.set(A,i),e=e||Number(jA.exports.ZSTD_findDecompressedSize(i,t));var r=jA.exports.malloc(e),I=jA.exports.ZSTD_decompress(r,e,i,t),g=WA.slice(r,r+I);return jA.exports.free(i),jA.exports.free(r),g}}]),A}(),ee="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",te={315:"Artist",258:"BitsPerSample",265:"CellLength",264:"CellWidth",320:"ColorMap",259:"Compression",33432:"Copyright",306:"DateTime",338:"ExtraSamples",266:"FillOrder",289:"FreeByteCounts",288:"FreeOffsets",291:"GrayResponseCurve",290:"GrayResponseUnit",316:"HostComputer",270:"ImageDescription",257:"ImageLength",256:"ImageWidth",271:"Make",281:"MaxSampleValue",280:"MinSampleValue",272:"Model",254:"NewSubfileType",274:"Orientation",262:"PhotometricInterpretation",284:"PlanarConfiguration",296:"ResolutionUnit",278:"RowsPerStrip",277:"SamplesPerPixel",305:"Software",279:"StripByteCounts",273:"StripOffsets",255:"SubfileType",263:"Threshholding",282:"XResolution",283:"YResolution",326:"BadFaxLines",327:"CleanFaxData",343:"ClipPath",328:"ConsecutiveBadFaxLines",433:"Decode",434:"DefaultImageColor",269:"DocumentName",336:"DotRange",321:"HalftoneHints",346:"Indexed",347:"JPEGTables",285:"PageName",297:"PageNumber",317:"Predictor",319:"PrimaryChromaticities",532:"ReferenceBlackWhite",339:"SampleFormat",340:"SMinSampleValue",341:"SMaxSampleValue",559:"StripRowCounts",330:"SubIFDs",292:"T4Options",293:"T6Options",325:"TileByteCounts",323:"TileLength",324:"TileOffsets",322:"TileWidth",301:"TransferFunction",318:"WhitePoint",344:"XClipPathUnits",286:"XPosition",529:"YCbCrCoefficients",531:"YCbCrPositioning",530:"YCbCrSubSampling",345:"YClipPathUnits",287:"YPosition",37378:"ApertureValue",40961:"ColorSpace",36868:"DateTimeDigitized",36867:"DateTimeOriginal",34665:"Exif IFD",36864:"ExifVersion",33434:"ExposureTime",41728:"FileSource",37385:"Flash",40960:"FlashpixVersion",33437:"FNumber",42016:"ImageUniqueID",37384:"LightSource",37500:"MakerNote",37377:"ShutterSpeedValue",37510:"UserComment",33723:"IPTC",34675:"ICC Profile",700:"XMP",42112:"GDAL_METADATA",42113:"GDAL_NODATA",34377:"Photoshop",33550:"ModelPixelScale",33922:"ModelTiepoint",34264:"ModelTransformation",34735:"GeoKeyDirectory",34736:"GeoDoubleParams",34737:"GeoAsciiParams",50674:"LercParameters"},ie={};for(var re in te)te.hasOwnProperty(re)&&(ie[te[re]]=parseInt(re,10));ie.BitsPerSample,ie.ExtraSamples,ie.SampleFormat,ie.StripByteCounts,ie.StripOffsets,ie.StripRowCounts,ie.TileByteCounts,ie.TileOffsets,ie.SubIFDs;var Ie={1:"BYTE",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",6:"SBYTE",7:"UNDEFINED",8:"SSHORT",9:"SLONG",10:"SRATIONAL",11:"FLOAT",12:"DOUBLE",13:"IFD",16:"LONG8",17:"SLONG8",18:"IFD8"},ge={};for(var ne in Ie)Ie.hasOwnProperty(ne)&&(ge[Ie[ne]]=parseInt(ne,10));var ae=1,oe=0,Be=1,Ce=2,Qe={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"},Ee={};for(var se in Qe)Qe.hasOwnProperty(se)&&(Ee[Qe[se]]=parseInt(se,10));function fe(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var ce=new Ae,he=function(A){s(t,w);var e=fe(t);function t(A){var i;return B(this,t),(i=e.call(this)).planarConfiguration=void 0!==A.PlanarConfiguration?A.PlanarConfiguration:1,i.samplesPerPixel=void 0!==A.SamplesPerPixel?A.SamplesPerPixel:1,i.addCompression=A.LercParameters[ae],i}return Q(t,[{key:"decodeBlock",value:function(A){switch(this.addCompression){case oe:break;case Be:A=YA(new Uint8Array(A)).buffer;break;case Ce:A=ce.decode(new Uint8Array(A)).buffer;break;default:throw new Error("Unsupported LERC additional compression method identifier: ".concat(this.addCompression))}return zA.decode(A,{returnPixelInterleavedDims:1===this.planarConfiguration}).pixels[0].buffer}}]),t}(),le=Object.freeze({__proto__:null,zstd:ce,default:he});function ue(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}();return function(){var t,i=c(A);if(e){var r=c(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return f(this,t)}}var we=function(A){s(I,w);var t,i=ue(I);function I(){var A;if(B(this,I),A=i.call(this),"undefined"==typeof createImageBitmap)throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if("undefined"==typeof document&&"undefined"==typeof OffscreenCanvas)throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");return A}return Q(I,[{key:"decode",value:(t=e(r.mark((function A(e,t){var i,I,g,n;return r.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return i=new Blob([t]),A.next=3,createImageBitmap(i);case 3:return I=A.sent,"undefined"!=typeof document?((g=document.createElement("canvas")).width=I.width,g.height=I.height):g=new OffscreenCanvas(I.width,I.height),(n=g.getContext("2d")).drawImage(I,0,0),A.abrupt("return",n.getImageData(0,0,I.width,I.height).data.buffer);case 8:case"end":return A.stop()}}),A)}))),function(A,e){return t.apply(this,arguments)})}]),I}(),de=Object.freeze({__proto__:null,default:we});';
      return new qn('undefined' != typeof Buffer ? 'data:application/javascript;base64,' + Buffer.from(A, 'binary').toString('base64') : URL.createObjectURL(new Blob([A], { type: 'application/javascript' })));
    }
  });
  (A.BaseClient = we),
    (A.BaseDecoder = wt),
    (A.BaseResponse = de),
    (A.GeoTIFF = Ft),
    (A.GeoTIFFImage = qA),
    (A.MultiGeoTIFF = Rt),
    (A.Pool = PA),
    (A.addDecoder = yA),
    (A.default = Ft),
    (A.fromArrayBuffer = function (A, e) {
      return Lt.apply(this, arguments);
    }),
    (A.fromBlob = function (A, e) {
      return Nt.apply(this, arguments);
    }),
    (A.fromCustomClient = function (A) {
      return Ut.apply(this, arguments);
    }),
    (A.fromFile = function (A, e) {
      return Mt.apply(this, arguments);
    }),
    (A.fromUrl = function (A) {
      return xt.apply(this, arguments);
    }),
    (A.fromUrls = function (A) {
      return qt.apply(this, arguments);
    }),
    (A.getDecoder = pA),
    (A.globals = fA),
    (A.rgb = dA),
    (A.setLogger = function () {
      (arguments.length > 0 && void 0 !== arguments[0]) || new Et();
    }),
    (A.writeArrayBuffer = function (A, e) {
      return Qt(A, e);
    }),
    Object.defineProperty(A, '__esModule', { value: !0 });
});
//# sourceMappingURL=geotiff.js.map