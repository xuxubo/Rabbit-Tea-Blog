const $64$moonbitlang$47$core$47$builtin$46$Json$Null = { $tag: 0, $name: "Null" };
const $64$moonbitlang$47$core$47$builtin$46$Json$True = { $tag: 1, $name: "True" };
const $64$moonbitlang$47$core$47$builtin$46$Json$False = { $tag: 2, $name: "False" };
function $64$moonbitlang$47$core$47$builtin$46$Json$Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Number.prototype.$tag = 3;
$64$moonbitlang$47$core$47$builtin$46$Json$Number.prototype.$name = "Number";
function $64$moonbitlang$47$core$47$builtin$46$Json$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$String.prototype.$tag = 4;
$64$moonbitlang$47$core$47$builtin$46$Json$String.prototype.$name = "String";
function $64$moonbitlang$47$core$47$builtin$46$Json$Array(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Array.prototype.$tag = 5;
$64$moonbitlang$47$core$47$builtin$46$Json$Array.prototype.$name = "Array";
function $64$moonbitlang$47$core$47$builtin$46$Json$Object(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$Json$Object.prototype.$tag = 6;
$64$moonbitlang$47$core$47$builtin$46$Json$Object.prototype.$name = "Object";
const $1L = { hi: 0, lo: 1 };
const $0L = { hi: 0, lo: 0 };
const $1000000000000000000L = { hi: 232830643, lo: -1486618624 };
const $10L = { hi: 0, lo: 10 };
const $100L = { hi: 0, lo: 100 };
const $1000L = { hi: 0, lo: 1000 };
const $10000L = { hi: 0, lo: 10000 };
const $100000L = { hi: 0, lo: 100000 };
const $1000000L = { hi: 0, lo: 1000000 };
const $10000000L = { hi: 0, lo: 10000000 };
const $100000000L = { hi: 0, lo: 100000000 };
const $1000000000L = { hi: 0, lo: 1000000000 };
const $10000000000L = { hi: 2, lo: 1410065408 };
const $100000000000L = { hi: 23, lo: 1215752192 };
const $1000000000000L = { hi: 232, lo: -727379968 };
const $10000000000000L = { hi: 2328, lo: 1316134912 };
const $100000000000000L = { hi: 23283, lo: 276447232 };
const $1000000000000000L = { hi: 232830, lo: -1530494976 };
const $22L = { hi: 0, lo: 22 };
const $37L = { hi: 0, lo: 37 };
const $_22L = { hi: -1, lo: -22 };
const $_1L = { hi: -1, lo: -1 };
const $_4503599627370496L = { hi: -1048576, lo: 0 };
const $9221120237041090561L = { hi: 2146959360, lo: 1 };
const $9218868437227405312L = { hi: 2146435072, lo: 0 };
const $2L = { hi: 0, lo: 2 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
Result$Err$0$.prototype.$name = "Err";
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
Result$Ok$0$.prototype.$name = "Ok";
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 5;
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$name = "moonbitlang/core/strconv.StrConvError.StrConvError";
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar.prototype.$tag = 4;
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar.prototype.$name = "moonbitlang/core/json.ParseError.InvalidChar";
const Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof = { $tag: 3, $name: "moonbitlang/core/json.ParseError.InvalidEof" };
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber.prototype.$tag = 2;
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidNumber.prototype.$name = "moonbitlang/core/json.ParseError.InvalidNumber";
function Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidIdentEscape(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidIdentEscape.prototype.$tag = 1;
Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidIdentEscape.prototype.$name = "moonbitlang/core/json.ParseError.InvalidIdentEscape";
function Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$tag = 0;
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$name = "moonbitlang/core/builtin.Failure.Failure";
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
Result$Err$1$.prototype.$name = "Err";
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
Result$Ok$1$.prototype.$name = "Ok";
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
Result$Err$2$.prototype.$name = "Err";
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
Result$Ok$2$.prototype.$name = "Ok";
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
Result$Err$3$.prototype.$name = "Err";
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
Result$Ok$3$.prototype.$name = "Ok";
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
Result$Err$4$.prototype.$name = "Err";
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
Result$Ok$4$.prototype.$name = "Ok";
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
Result$Err$5$.prototype.$name = "Err";
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
Result$Ok$5$.prototype.$name = "Ok";
function $makebytes(a, b) {
  const arr = new Uint8Array(a);
  if (b !== 0) {
    arr.fill(b);
  }
  return arr;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const moonbitlang$core$builtin$$MyInt64$convert_to_double_u = (a) => (a.hi >>> 0) * 4294967296.0 + (a.lo >>> 0);
const moonbitlang$core$builtin$$MyInt64$reinterpret_as_double = function f(a) {
  let view = f._view;
  if (view === undefined) {
    view = f._view = new DataView(new ArrayBuffer(8));
  }
  view.setUint32(0, a.hi);
  view.setUint32(4, a.lo);
  return view.getFloat64(0);
};
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$6$ = { $tag: 0, $name: "Continue" };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$6$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$6$.prototype.$name = "Break";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$.prototype.$tag = 2;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$6$.prototype.$name = "Return";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$6$.prototype.$tag = 3;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$6$.prototype.$name = "Error";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$6$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$6$.prototype.$tag = 4;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$6$.prototype.$name = "JumpOuter";
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {
  if (f._exports) return f._exports;
  return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
};
const moonbitlang$core$builtin$$MyInt64$compare = (a, b) => {
  const ahi = a.hi;
  const bhi = b.hi;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const moonbitlang$core$builtin$$MyInt64$compare_u = (a, b) => {
  const ahi = a.hi >>> 0;
  const bhi = b.hi >>> 0;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
const moonbitlang$core$builtin$$MyInt64$convert_to_double = (a) => a.hi * 4294967296.0 + (a.lo >>> 0);
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
Result$Err$7$.prototype.$name = "Err";
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
Result$Ok$7$.prototype.$name = "Ok";
function Result$Err$8$(param0) {
  this._0 = param0;
}
Result$Err$8$.prototype.$tag = 0;
Result$Err$8$.prototype.$name = "Err";
function Result$Ok$8$(param0) {
  this._0 = param0;
}
Result$Ok$8$.prototype.$tag = 1;
Result$Ok$8$.prototype.$name = "Ok";
function Result$Err$9$(param0) {
  this._0 = param0;
}
Result$Err$9$.prototype.$tag = 0;
Result$Err$9$.prototype.$name = "Err";
function Result$Ok$9$(param0) {
  this._0 = param0;
}
Result$Ok$9$.prototype.$tag = 1;
Result$Ok$9$.prototype.$name = "Ok";
function Result$Err$10$(param0) {
  this._0 = param0;
}
Result$Err$10$.prototype.$tag = 0;
Result$Err$10$.prototype.$name = "Err";
function Result$Ok$10$(param0) {
  this._0 = param0;
}
Result$Ok$10$.prototype.$tag = 1;
Result$Ok$10$.prototype.$name = "Ok";
function Result$Err$11$(param0) {
  this._0 = param0;
}
Result$Err$11$.prototype.$tag = 0;
Result$Err$11$.prototype.$name = "Err";
function Result$Ok$11$(param0) {
  this._0 = param0;
}
Result$Ok$11$.prototype.$tag = 1;
Result$Ok$11$.prototype.$name = "Ok";
const $9007199254740991L = { hi: 2097151, lo: -1 };
const $_9007199254740991L = { hi: -2097152, lo: 1 };
function Result$Err$12$(param0) {
  this._0 = param0;
}
Result$Err$12$.prototype.$tag = 0;
Result$Err$12$.prototype.$name = "Err";
function Result$Ok$12$(param0) {
  this._0 = param0;
}
Result$Ok$12$.prototype.$tag = 1;
Result$Ok$12$.prototype.$name = "Ok";
function Result$Err$13$(param0) {
  this._0 = param0;
}
Result$Err$13$.prototype.$tag = 0;
Result$Err$13$.prototype.$name = "Err";
function Result$Ok$13$(param0) {
  this._0 = param0;
}
Result$Ok$13$.prototype.$tag = 1;
Result$Ok$13$.prototype.$name = "Ok";
function Result$Err$14$(param0) {
  this._0 = param0;
}
Result$Err$14$.prototype.$tag = 0;
Result$Err$14$.prototype.$name = "Err";
function Result$Ok$14$(param0) {
  this._0 = param0;
}
Result$Ok$14$.prototype.$tag = 1;
Result$Ok$14$.prototype.$name = "Ok";
const $64$moonbitlang$47$core$47$json$46$Token$Null = { $tag: 0, $name: "Null" };
const $64$moonbitlang$47$core$47$json$46$Token$True = { $tag: 1, $name: "True" };
const $64$moonbitlang$47$core$47$json$46$Token$False = { $tag: 2, $name: "False" };
function $64$moonbitlang$47$core$47$json$46$Token$Number(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$json$46$Token$Number.prototype.$tag = 3;
$64$moonbitlang$47$core$47$json$46$Token$Number.prototype.$name = "Number";
function $64$moonbitlang$47$core$47$json$46$Token$String(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$json$46$Token$String.prototype.$tag = 4;
$64$moonbitlang$47$core$47$json$46$Token$String.prototype.$name = "String";
const $64$moonbitlang$47$core$47$json$46$Token$LBrace = { $tag: 5, $name: "LBrace" };
const $64$moonbitlang$47$core$47$json$46$Token$RBrace = { $tag: 6, $name: "RBrace" };
const $64$moonbitlang$47$core$47$json$46$Token$LBracket = { $tag: 7, $name: "LBracket" };
const $64$moonbitlang$47$core$47$json$46$Token$RBracket = { $tag: 8, $name: "RBracket" };
const $64$moonbitlang$47$core$47$json$46$Token$Comma = { $tag: 9, $name: "Comma" };
const $64$moonbitlang$47$core$47$list$46$List$Empty$15$ = { $tag: 0, $name: "Empty" };
function $64$moonbitlang$47$core$47$list$46$List$More$15$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$15$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$list$46$List$More$15$.prototype.$name = "More";
const $64$moonbitlang$47$core$47$list$46$List$Empty$16$ = { $tag: 0, $name: "Empty" };
function $64$moonbitlang$47$core$47$list$46$List$More$16$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$16$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$list$46$List$More$16$.prototype.$name = "More";
const $64$moonbitlang$47$core$47$list$46$List$Empty$17$ = { $tag: 0, $name: "Empty" };
function $64$moonbitlang$47$core$47$list$46$List$More$17$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$17$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$list$46$List$More$17$.prototype.$name = "More";
const $64$moonbitlang$47$core$47$list$46$List$Empty$18$ = { $tag: 0, $name: "Empty" };
function $64$moonbitlang$47$core$47$list$46$List$More$18$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$moonbitlang$47$core$47$list$46$List$More$18$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$list$46$List$More$18$.prototype.$name = "More";
function Result$Err$19$(param0) {
  this._0 = param0;
}
Result$Err$19$.prototype.$tag = 0;
Result$Err$19$.prototype.$name = "Err";
function Result$Ok$19$(param0) {
  this._0 = param0;
}
Result$Ok$19$.prototype.$tag = 1;
Result$Ok$19$.prototype.$name = "Ok";
function Result$Err$20$(param0) {
  this._0 = param0;
}
Result$Err$20$.prototype.$tag = 0;
Result$Err$20$.prototype.$name = "Err";
function Result$Ok$20$(param0) {
  this._0 = param0;
}
Result$Ok$20$.prototype.$tag = 1;
Result$Ok$20$.prototype.$name = "Ok";
function Result$Err$21$(param0) {
  this._0 = param0;
}
Result$Err$21$.prototype.$tag = 0;
Result$Err$21$.prototype.$name = "Err";
function Result$Ok$21$(param0) {
  this._0 = param0;
}
Result$Ok$21$.prototype.$tag = 1;
Result$Ok$21$.prototype.$name = "Ok";
function Result$Err$22$(param0) {
  this._0 = param0;
}
Result$Err$22$.prototype.$tag = 0;
Result$Err$22$.prototype.$name = "Err";
function Result$Ok$22$(param0) {
  this._0 = param0;
}
Result$Ok$22$.prototype.$tag = 1;
Result$Ok$22$.prototype.$name = "Ok";
function Result$Err$23$(param0) {
  this._0 = param0;
}
Result$Err$23$.prototype.$tag = 0;
Result$Err$23$.prototype.$name = "Err";
function Result$Ok$23$(param0) {
  this._0 = param0;
}
Result$Ok$23$.prototype.$tag = 1;
Result$Ok$23$.prototype.$name = "Ok";
function Result$Err$24$(param0) {
  this._0 = param0;
}
Result$Err$24$.prototype.$tag = 0;
Result$Err$24$.prototype.$name = "Err";
function Result$Ok$24$(param0) {
  this._0 = param0;
}
Result$Ok$24$.prototype.$tag = 1;
Result$Ok$24$.prototype.$name = "Ok";
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
const $65536L = { hi: 0, lo: 65536 };
const Option$None$25$ = { $tag: 0, $name: "None" };
function Option$Some$25$(param0) {
  this._0 = param0;
}
Option$Some$25$.prototype.$tag = 1;
Option$Some$25$.prototype.$name = "Some";
function Result$Err$26$(param0) {
  this._0 = param0;
}
Result$Err$26$.prototype.$tag = 0;
Result$Err$26$.prototype.$name = "Err";
function Result$Ok$26$(param0) {
  this._0 = param0;
}
Result$Ok$26$.prototype.$tag = 1;
Result$Ok$26$.prototype.$name = "Ok";
const $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Http = { $tag: 0, $name: "Http" };
const $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Https = { $tag: 1, $name: "Https" };
function $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other.prototype.$name = "Other";
function Result$Err$27$(param0) {
  this._0 = param0;
}
Result$Err$27$.prototype.$tag = 0;
Result$Err$27$.prototype.$name = "Err";
function Result$Ok$27$(param0) {
  this._0 = param0;
}
Result$Ok$27$.prototype.$tag = 1;
Result$Ok$27$.prototype.$name = "Ok";
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
const Option$None$28$ = { $tag: 0, $name: "None" };
function Option$Some$28$(param0) {
  this._0 = param0;
}
Option$Some$28$.prototype.$tag = 1;
Option$Some$28$.prototype.$name = "Some";
const Option$None$29$ = { $tag: 0, $name: "None" };
function Option$Some$29$(param0) {
  this._0 = param0;
}
Option$Some$29$.prototype.$tag = 1;
Option$Some$29$.prototype.$name = "Some";
const Option$None$30$ = { $tag: 0, $name: "None" };
function Option$Some$30$(param0) {
  this._0 = param0;
}
Option$Some$30$.prototype.$tag = 1;
Option$Some$30$.prototype.$name = "Some";
const Option$None$31$ = { $tag: 0, $name: "None" };
function Option$Some$31$(param0) {
  this._0 = param0;
}
Option$Some$31$.prototype.$tag = 1;
Option$Some$31$.prototype.$name = "Some";
const Yoorkin$rabbit$45$tea$dom$$Window$current_url = (self) => { return self.location.href; };
const Yoorkin$rabbit$45$tea$dom$$window = () => window;
const Yoorkin$rabbit$45$tea$dom$$Window$to_event_target = (x) => x;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_ui_event = (x) => x instanceof UIEvent ? x : null;
const Yoorkin$rabbit$45$tea$dom$$ffi_append_child = (p,c) => p.appendChild(c);
const Yoorkin$rabbit$45$tea$dom$$ffi_remove_child = (p,c) => p.removeChild(c);
const Yoorkin$rabbit$45$tea$dom$$ffi_replace_child = (p,n,o) => p.replaceChild(n,o);
const Yoorkin$rabbit$45$tea$dom$$insert_before = (p,value,before) => p.insertBefore(value,before);
const Yoorkin$rabbit$45$tea$dom$$ffi_nth_child = (x,i) => { 
   const r = x.childNodes[i]; 
   if (r === undefined) throw new Error(`nth_child: index ${i} out of bounds, length=${x.childNodes.length}`);
   return r;
 };
const Yoorkin$rabbit$45$tea$dom$$ffi_count_child = (x) => x.childNodes.length;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event = (e) => e instanceof MouseEvent ? e : null;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_ctrl_key = (e) => e.ctrlKey;
const Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_meta_key = (e) => e.metaKey;
const Yoorkin$rabbit$45$tea$dom$$ffi_to_html_element = (x) => x instanceof HTMLElement ? x : null;
const Yoorkin$rabbit$45$tea$dom$$ffi_html_element_get_style = (s) => s.style;
const Yoorkin$rabbit$45$tea$dom$$console_log = (x) => console.log(x);
const Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener = (target, type, listener) => target.addEventListener(type, listener);
const Yoorkin$rabbit$45$tea$dom$$ffi_remove_event_listener = (target, type, listener) => target.removeEventListener(type, listener);
const Yoorkin$rabbit$45$tea$dom$$ffi_to_element = (x) => x.nodeType===1 ? x : null;
const Yoorkin$rabbit$45$tea$dom$$ffi_event_prevent_default = (self) => self.preventDefault();
const Yoorkin$rabbit$45$tea$dom$$ffi_event_stop_propagation = (self) => self.stopPropagation();
const Yoorkin$rabbit$45$tea$dom$$ffi_element_set_attribute = (self,attr,value) => self.setAttribute(attr, value);
const Yoorkin$rabbit$45$tea$dom$$ffi_element_remove_attribute = (self,attr) => self.removeAttribute(attr);
const Yoorkin$rabbit$45$tea$dom$$ffi_element_set_property = (self,prop,value) => self[prop] = value;
const Yoorkin$rabbit$45$tea$dom$$ffi_element_get_property = (self,prop) => self[prop];
const Yoorkin$rabbit$45$tea$dom$$ffi_element_remove_property = (self,prop) => delete self[prop];
const Yoorkin$rabbit$45$tea$dom$$ffi_element_set_inner_html = (self,html) => self.innerHTML = html;
const Yoorkin$rabbit$45$tea$dom$$CSSStyleDeclaration$set_property = (self, property, value) => self.setProperty(property, value);
const Yoorkin$rabbit$45$tea$dom$$CSSStyleDeclaration$remove_property = (self, property) => self.removeProperty(property);
const Yoorkin$rabbit$45$tea$dom$$document = () => document;
const Yoorkin$rabbit$45$tea$dom$$Document$create_element = (doc,tag) => doc.createElement(tag);
const Yoorkin$rabbit$45$tea$dom$$Document$create_element_ns$46$inner = (doc,namespace,qualifiedName) => doc.createElementNS(namespace, qualifiedName);
const Yoorkin$rabbit$45$tea$dom$$Document$create_text_node = (doc,str) => doc.createTextNode(str);
const Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id = (doc,id) => doc.getElementById(id);
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$32$(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$32$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$32$.prototype.$name = "Node";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$32$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$32$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$32$.prototype.$name = "ExternalNode";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$32$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$32$.prototype.$name = "Text";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$32$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$32$.prototype.$name = "AttrEvent";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$32$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$32$.prototype.$name = "AttrStyle";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$32$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$32$.prototype.$name = "AttrString";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$32$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$32$.prototype.$name = "AttrProperty";
function $64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$Internal(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$Internal.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$Internal.prototype.$name = "Internal";
function $64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$External(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$External.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$External.prototype.$name = "External";
const Option$None$33$ = { $tag: 0, $name: "None" };
function Option$Some$33$(param0) {
  this._0 = param0;
}
Option$Some$33$.prototype.$tag = 1;
Option$Some$33$.prototype.$name = "Some";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$32$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$32$.prototype.$name = "AttrRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$32$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$32$.prototype.$name = "AttrAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$32$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$32$.prototype.$name = "StyleAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$32$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$32$.prototype.$name = "StyleRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$32$.prototype.$tag = 4;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$32$.prototype.$name = "PropertyAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$32$.prototype.$tag = 5;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$32$.prototype.$name = "PropertyRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$32$.prototype.$tag = 6;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$32$.prototype.$name = "EventRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$32$.prototype.$tag = 7;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$32$.prototype.$name = "EventAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$32$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$32$.prototype.$name = "Drop";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$32$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$32$.prototype.$name = "Remove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$32$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$32$.prototype.$name = "Replace";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$32$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$32$.prototype.$name = "InsertBefore";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$32$.prototype.$tag = 4;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$32$.prototype.$name = "Append";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$32$.prototype.$tag = 5;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$32$.prototype.$name = "Update";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$32$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$32$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$32$.prototype.$name = "UpdateNode";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$32$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$32$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$32$.prototype.$name = "UpdateText";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$32$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$32$.prototype.$name = "Normal";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$32$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$32$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$32$.prototype.$name = "HandleEvent";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$32$(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$32$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$32$.prototype.$name = "Custom";
const Yoorkin$rabbit$45$tea$http$$js_request = (url,method,contentType,body,hasBody,succeed,failed) => {
   var config = { method: method, headers: { 'Content-Type': contentType } }; 
   if (hasBody) { config.body = body };
   fetch(url, config)
     .then(response => response.text())
     .then(json => succeed(json))
     .catch(error => {
       failed(error.toString())
     })
 };
function Result$Err$34$(param0) {
  this._0 = param0;
}
Result$Err$34$.prototype.$tag = 0;
Result$Err$34$.prototype.$name = "Err";
function Result$Ok$34$(param0) {
  this._0 = param0;
}
Result$Ok$34$.prototype.$tag = 1;
Result$Ok$34$.prototype.$name = "Ok";
function Result$Err$35$(param0) {
  this._0 = param0;
}
Result$Err$35$.prototype.$tag = 0;
Result$Err$35$.prototype.$name = "Err";
function Result$Ok$35$(param0) {
  this._0 = param0;
}
Result$Ok$35$.prototype.$tag = 1;
Result$Ok$35$.prototype.$name = "Ok";
function $64$Yoorkin$47$rabbit$45$tea$47$http$46$Body$Json(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$http$46$Body$Json.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$http$46$Body$Json.prototype.$name = "Json";
function $64$Yoorkin$47$rabbit$45$tea$47$http$46$Body$Text(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$http$46$Body$Text.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$http$46$Body$Text.prototype.$name = "Text";
const $64$Yoorkin$47$rabbit$45$tea$47$http$46$Body$Empty = { $tag: 2, $name: "Empty" };
function $64$Yoorkin$47$rabbit$45$tea$47$http$46$Expecting$Json$36$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$http$46$Expecting$Json$36$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$http$46$Expecting$Json$36$.prototype.$name = "Json";
function $64$Yoorkin$47$rabbit$45$tea$47$http$46$Expecting$Text$36$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$http$46$Expecting$Text$36$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$http$46$Expecting$Text$36$.prototype.$name = "Text";
function ArticleMsg$ListLoaded(param0) {
  this._0 = param0;
}
ArticleMsg$ListLoaded.prototype.$tag = 1;
ArticleMsg$ListLoaded.prototype.$name = "ListLoaded";
function ArticleMsg$LoadOne(param0) {
  this._0 = param0;
}
ArticleMsg$LoadOne.prototype.$tag = 2;
ArticleMsg$LoadOne.prototype.$name = "LoadOne";
function ArticleMsg$OneLoaded(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
ArticleMsg$OneLoaded.prototype.$tag = 3;
ArticleMsg$OneLoaded.prototype.$name = "OneLoaded";
const ArticleMsg$LoadMore = { $tag: 4, $name: "LoadMore" };
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$37$ = { $tag: 0, $name: "Continue" };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$37$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$37$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$37$.prototype.$name = "Break";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$37$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$37$.prototype.$tag = 2;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$37$.prototype.$name = "Return";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$37$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$37$.prototype.$tag = 3;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$37$.prototype.$name = "Error";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$37$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$37$.prototype.$tag = 4;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$37$.prototype.$name = "JumpOuter";
function Result$Err$38$(param0) {
  this._0 = param0;
}
Result$Err$38$.prototype.$tag = 0;
Result$Err$38$.prototype.$name = "Err";
function Result$Ok$38$(param0) {
  this._0 = param0;
}
Result$Ok$38$.prototype.$tag = 1;
Result$Ok$38$.prototype.$name = "Ok";
const Option$None$39$ = { $tag: 0, $name: "None" };
function Option$Some$39$(param0) {
  this._0 = param0;
}
Option$Some$39$.prototype.$tag = 1;
Option$Some$39$.prototype.$name = "Some";
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$40$ = { $tag: 0, $name: "Continue" };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$40$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$40$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$40$.prototype.$name = "Break";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$40$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$40$.prototype.$tag = 2;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$40$.prototype.$name = "Return";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$40$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$40$.prototype.$tag = 3;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$40$.prototype.$name = "Error";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$40$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$40$.prototype.$tag = 4;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$40$.prototype.$name = "JumpOuter";
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$41$ = { $tag: 0, $name: "Continue" };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$41$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$41$.prototype.$tag = 1;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$41$.prototype.$name = "Break";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$41$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$41$.prototype.$tag = 2;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$41$.prototype.$name = "Return";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$41$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$41$.prototype.$tag = 3;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$41$.prototype.$name = "Error";
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$41$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$41$.prototype.$tag = 4;
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$41$.prototype.$name = "JumpOuter";
const moonbitlang$core$builtin$$null = $64$moonbitlang$47$core$47$builtin$46$Json$Null;
const moonbitlang$core$json$$lex_number_end$46$42$bind$124$1025 = ".";
const moonbitlang$core$json$$lex_number_end$46$42$bind$124$1026 = "e";
const moonbitlang$core$json$$lex_number_end$46$42$bind$124$1027 = "E";
const moonbitlang$core$strconv$$base_err_str = "invalid base";
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
const moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$610 = "";
const moonbitlang$core$strconv$$min_19digit_int = $1000000000000000000L;
const moonbitlang$core$strconv$$parse_scientific$46$exp_num$124$311 = $0L;
const moonbitlang$core$strconv$$parse_number$46$exp_number$124$290 = $0L;
const moonbitlang$core$strconv$$double_info = { mantissa_bits: 52, exponent_bits: 11, bias: -1023 };
const moonbitlang$core$strconv$$powtab = [1, 3, 6, 9, 13, 16, 19, 23, 26, 29, 33, 36, 39, 43, 46, 49, 53, 56, 59];
const moonbitlang$core$strconv$$left_shift_cheats = [{ _0: 0, _1: "" }, { _0: 1, _1: "5" }, { _0: 1, _1: "25" }, { _0: 1, _1: "125" }, { _0: 2, _1: "625" }, { _0: 2, _1: "3125" }, { _0: 2, _1: "15625" }, { _0: 3, _1: "78125" }, { _0: 3, _1: "390625" }, { _0: 3, _1: "1953125" }, { _0: 4, _1: "9765625" }, { _0: 4, _1: "48828125" }, { _0: 4, _1: "244140625" }, { _0: 4, _1: "1220703125" }, { _0: 5, _1: "6103515625" }, { _0: 5, _1: "30517578125" }, { _0: 5, _1: "152587890625" }, { _0: 6, _1: "762939453125" }, { _0: 6, _1: "3814697265625" }, { _0: 6, _1: "19073486328125" }, { _0: 7, _1: "95367431640625" }, { _0: 7, _1: "476837158203125" }, { _0: 7, _1: "2384185791015625" }, { _0: 7, _1: "11920928955078125" }, { _0: 8, _1: "59604644775390625" }, { _0: 8, _1: "298023223876953125" }, { _0: 8, _1: "1490116119384765625" }, { _0: 9, _1: "7450580596923828125" }, { _0: 9, _1: "37252902984619140625" }, { _0: 9, _1: "186264514923095703125" }, { _0: 10, _1: "931322574615478515625" }, { _0: 10, _1: "4656612873077392578125" }, { _0: 10, _1: "23283064365386962890625" }, { _0: 10, _1: "116415321826934814453125" }, { _0: 11, _1: "582076609134674072265625" }, { _0: 11, _1: "2910383045673370361328125" }, { _0: 11, _1: "14551915228366851806640625" }, { _0: 12, _1: "72759576141834259033203125" }, { _0: 12, _1: "363797880709171295166015625" }, { _0: 12, _1: "1818989403545856475830078125" }, { _0: 13, _1: "9094947017729282379150390625" }, { _0: 13, _1: "45474735088646411895751953125" }, { _0: 13, _1: "227373675443232059478759765625" }, { _0: 13, _1: "1136868377216160297393798828125" }, { _0: 14, _1: "5684341886080801486968994140625" }, { _0: 14, _1: "28421709430404007434844970703125" }, { _0: 14, _1: "142108547152020037174224853515625" }, { _0: 15, _1: "710542735760100185871124267578125" }, { _0: 15, _1: "3552713678800500929355621337890625" }, { _0: 15, _1: "17763568394002504646778106689453125" }, { _0: 16, _1: "88817841970012523233890533447265625" }, { _0: 16, _1: "444089209850062616169452667236328125" }, { _0: 16, _1: "2220446049250313080847263336181640625" }, { _0: 16, _1: "11102230246251565404236316680908203125" }, { _0: 17, _1: "55511151231257827021181583404541015625" }, { _0: 17, _1: "277555756156289135105907917022705078125" }, { _0: 17, _1: "1387778780781445675529539585113525390625" }, { _0: 18, _1: "6938893903907228377647697925567626953125" }, { _0: 18, _1: "34694469519536141888238489627838134765625" }, { _0: 18, _1: "173472347597680709441192448139190673828125" }, { _0: 19, _1: "867361737988403547205962240695953369140625" }];
const moonbitlang$core$strconv$$int_pow10 = [$1L, $10L, $100L, $1000L, $10000L, $100000L, $1000000L, $10000000L, $100000000L, $1000000000L, $10000000000L, $100000000000L, $1000000000000L, $10000000000000L, $100000000000000L, $1000000000000000L];
const moonbitlang$core$strconv$$max_exponent_fast_path = $22L;
const moonbitlang$core$strconv$$table = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1e+012, 1e+013, 1e+014, 1e+015, 1e+016, 1e+017, 1e+018, 1e+019, 1e+020, 1e+021, 1e+022, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const moonbitlang$core$strconv$$max_exponent_disguised_fast_path = $37L;
const moonbitlang$core$strconv$$min_exponent_fast_path = $_22L;
const moonbitlang$core$uint64$$max_value = $_1L;
const moonbitlang$core$json$$non_ascii_whitespace = moonbitlang$core$json$$CharClass$of([{ _0: 160, _1: 160 }, { _0: 5760, _1: 5760 }, { _0: 8192, _1: 8202 }, { _0: 8232, _1: 8233 }, { _0: 8239, _1: 8239 }, { _0: 8287, _1: 8287 }, { _0: 12288, _1: 12288 }, { _0: 65279, _1: 65279 }]);
const moonbitlang$core$double$$neg_infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($_4503599627370496L);
const moonbitlang$core$double$$not_a_number = moonbitlang$core$int64$$Int64$reinterpret_as_double($9221120237041090561L);
const moonbitlang$core$double$$infinity = moonbitlang$core$int64$$Int64$reinterpret_as_double($9218868437227405312L);
const moonbitlang$core$strconv$$max_mantissa_fast_path = moonbitlang$core$builtin$$Shl$shl$0$($2L, 52);
function moonbitlang$core$abort$$abort$1$(msg) {
  $panic();
}
function moonbitlang$core$abort$$abort$2$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$5$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$6$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$7$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$8$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$9$(msg) {
  return $panic();
}
function moonbitlang$core$json$$Json$array(array) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Array(array);
}
function moonbitlang$core$builtin$$op_ge$10$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$10$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$op_ge$0$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$0$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$op_le$10$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$10$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_le$0$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$0$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$op_lt$10$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$10$(self_, other) < 0;
}
function moonbitlang$core$builtin$$op_lt$0$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$0$(self_, other) < 0;
}
function moonbitlang$core$array$$FixedArray$unsafe_blit$11$(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        $bound_check(src, _tmp$3);
        $bound_check(dst, _tmp$2);
        dst[_tmp$2] = src[_tmp$3];
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$12$(dst, dst_offset, src, src_offset, len) {
  moonbitlang$core$array$$FixedArray$unsafe_blit$11$(dst, dst_offset, src, src_offset, len);
}
function moonbitlang$core$builtin$$ignore$13$(t) {}
function moonbitlang$core$builtin$$ignore$14$(t) {}
function moonbitlang$core$builtin$$ignore$15$(t) {}
function moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$StringBuilder$to_string(self) {
  return self.val;
}
function moonbitlang$core$builtin$$Logger$write_char$16$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_gt$10$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$10$(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_gt$0$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$0$(self_, other) > 0;
}
function moonbitlang$core$int$$Int$is_leading_surrogate(self) {
  return 55296 <= self && self <= 56319;
}
function moonbitlang$core$int$$Int$is_trailing_surrogate(self) {
  return 56320 <= self && self <= 57343;
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$unsafe_char_at(self, index) {
  const c1 = self.charCodeAt(index);
  if (moonbitlang$core$int$$Int$is_leading_surrogate(c1)) {
    const _tmp = index + 1 | 0;
    const c2 = self.charCodeAt(_tmp);
    return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
  } else {
    return c1;
  }
}
function moonbitlang$core$builtin$$op_notequal$2$(x, y) {
  return !(x === y);
}
function moonbitlang$core$builtin$$op_notequal$17$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$17$(x, y);
}
function moonbitlang$core$builtin$$op_notequal$4$(x, y) {
  return !moonbitlang$core$builtin$$Eq$equal$4$(x, y);
}
function moonbitlang$core$array$$Array$at$4$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$18$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$7$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$at$19$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$16$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$2$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$2$(value, self);
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hasher$new$46$inner(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function moonbitlang$core$builtin$$Hash$hash$20$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new$46$inner(0);
  moonbitlang$core$builtin$$Hasher$combine$2$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$21$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  moonbitlang$core$builtin$$Show$output$22$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$builtin$$MyInt64$to_int(self) {
  return self.lo;
}
function moonbitlang$core$int64$$Int64$to_int(self) {
  return moonbitlang$core$builtin$$MyInt64$to_int(self);
}
function moonbitlang$core$builtin$$output$46$inner$46$abs$124$1912(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  if (radix === 0) {
    $panic();
  }
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, num2);
  }
  if (radix === 0) {
    $panic();
  }
  const _tmp = moonbitlang$core$builtin$$output$46$inner$46$abs$124$1912(num % radix | 0);
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output$46$inner(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: radix, _1: logger };
  moonbitlang$core$builtin$$output$46$inner$46$write_digits$124$1914(_env, moonbitlang$core$builtin$$output$46$inner$46$abs$124$1912(self));
}
function moonbitlang$core$int$$Int$output_size_hint$46$inner(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$7$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string$46$inner(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(moonbitlang$core$int$$Int$output_size_hint$46$inner(radix));
  moonbitlang$core$int$$Int$output$46$inner(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ }, radix);
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$Show$to_string$7$(self) {
  return moonbitlang$core$int$$Int$to_string$46$inner(self, 10);
}
function moonbitlang$core$uint64$$UInt64$to_int(self) {
  return moonbitlang$core$builtin$$MyInt64$to_int(self);
}
function moonbitlang$core$builtin$$fail$23$(msg, loc) {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${moonbitlang$core$builtin$$Show$to_string$21$(loc)} FAILED: ${moonbitlang$core$builtin$$Show$to_string$2$(msg)}`));
}
function moonbitlang$core$builtin$$fail$24$(msg, loc) {
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${moonbitlang$core$builtin$$Show$to_string$21$(loc)} FAILED: ${moonbitlang$core$builtin$$Show$to_string$2$(msg)}`));
}
function moonbitlang$core$builtin$$fail$25$(msg, loc) {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${moonbitlang$core$builtin$$Show$to_string$21$(loc)} FAILED: ${moonbitlang$core$builtin$$Show$to_string$2$(msg)}`));
}
function moonbitlang$core$builtin$$fail$26$(msg, loc) {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${moonbitlang$core$builtin$$Show$to_string$21$(loc)} FAILED: ${moonbitlang$core$builtin$$Show$to_string$2$(msg)}`));
}
function moonbitlang$core$builtin$$fail$27$(msg, loc) {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${moonbitlang$core$builtin$$Show$to_string$21$(loc)} FAILED: ${moonbitlang$core$builtin$$Show$to_string$2$(msg)}`));
}
function moonbitlang$core$builtin$$fail$28$(msg, loc) {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`${moonbitlang$core$builtin$$Show$to_string$21$(loc)} FAILED: ${moonbitlang$core$builtin$$Show$to_string$2$(msg)}`));
}
function moonbitlang$core$builtin$$Default$default$29$() {
  return 0;
}
function moonbitlang$core$string$$String$substring$46$inner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    end$2 = _Some;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$16$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring$46$inner(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$StringBuilder$write_object$30$(self, obj) {
  moonbitlang$core$builtin$$Show$output$30$(obj, { self: self, method_0: moonbitlang$core$builtin$$Logger$write_string$16$, method_1: moonbitlang$core$builtin$$Logger$write_substring$16$, method_2: moonbitlang$core$builtin$$Logger$write_char$16$ });
}
function moonbitlang$core$builtin$$Show$to_string$2$(self) {
  return self;
}
function moonbitlang$core$builtin$$Iter$new$2$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$31$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$4$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$32$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$33$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$34$(f) {
  return f;
}
function moonbitlang$core$array$$Array$iter$34$(self) {
  return moonbitlang$core$builtin$$Iter$new$34$((yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$builtin$$Eq$equal$35$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function moonbitlang$core$option$$Option$unwrap$2$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$option$$Option$unwrap$36$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$37$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$15$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$option$$Option$unwrap$38$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$39$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function moonbitlang$core$option$$Option$unwrap$40$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$option$$Option$unwrap$41$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$option$$Option$unwrap$42$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function moonbitlang$core$builtin$$calc_grow_threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function moonbitlang$core$int$$Int$next_power_of_two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Map$new$46$inner$43$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$new$46$inner$44$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$array$$Array$each$45$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$46$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$47$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$43$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$41$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$44$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    moonbitlang$core$option$$Option$unwrap$42$(_tmp[_bind]).next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$43$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set_entry$44$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$43$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$43$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$43$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$push_away$44$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$44$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$44$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set_with_hash$43$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$43$(self);
  }
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$43$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$43$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$set_with_hash$44$(self, key, value, hash) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$44$(self);
  }
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$44$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$44$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$43$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$43$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$44$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      moonbitlang$core$builtin$$Map$set_with_hash$44$(self, _key, _value, _hash);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$set$43$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$43$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$set$44$(self, key, value) {
  moonbitlang$core$builtin$$Map$set_with_hash$44$(self, key, value, moonbitlang$core$builtin$$Hash$hash$20$(key));
}
function moonbitlang$core$builtin$$Map$from_array$43$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$46$inner$43$(arr.length);
  moonbitlang$core$array$$Array$each$47$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$43$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$get$43$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$43$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$20$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$is_empty$44$(self) {
  return self.size === 0;
}
function moonbitlang$core$builtin$$Iter2$new$43$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter2$new$44$(f) {
  return f;
}
function moonbitlang$core$builtin$$Map$iter2$43$(self) {
  return moonbitlang$core$builtin$$Iter2$new$43$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind = yield_(_key, _value);
        if (_bind === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$iter2$44$(self) {
  return moonbitlang$core$builtin$$Iter2$new$44$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _next = _x.next;
        const _bind = yield_(_key, _value);
        if (_bind === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$from_iter$43$(iter) {
  const m = moonbitlang$core$builtin$$Map$from_array$43$([]);
  iter((e) => {
    moonbitlang$core$builtin$$Map$set$43$(m, e._0, e._1);
    return 1;
  });
  return m;
}
function moonbitlang$core$json$$Json$number(number, repr) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Number(number, repr);
}
function moonbitlang$core$json$$Json$string(string) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$String(string);
}
function moonbitlang$core$json$$Json$boolean(boolean) {
  return boolean ? $64$moonbitlang$47$core$47$builtin$46$Json$True : $64$moonbitlang$47$core$47$builtin$46$Json$False;
}
function moonbitlang$core$json$$Json$object(object) {
  return new $64$moonbitlang$47$core$47$builtin$46$Json$Object(object);
}
function moonbitlang$core$builtin$$MyInt64$extend_i32_u(value) {
  return { hi: 0, lo: value };
}
function moonbitlang$core$uint64$$UInt64$extend_uint(value) {
  return moonbitlang$core$builtin$$MyInt64$extend_i32_u(value);
}
function moonbitlang$core$double$$Double$convert_uint64(value) {
  return moonbitlang$core$builtin$$MyInt64$convert_to_double_u(value);
}
function moonbitlang$core$int64$$Int64$reinterpret_as_double(self) {
  return moonbitlang$core$builtin$$MyInt64$reinterpret_as_double(self);
}
function moonbitlang$core$array$$Array$map$48$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$49$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$ArrayView$length$4$(self) {
  return self.len;
}
function moonbitlang$core$array$$ArrayView$length$9$(self) {
  return self.len;
}
function moonbitlang$core$array$$ArrayView$length$2$(self) {
  return self.len;
}
function moonbitlang$core$array$$Array$push$50$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$31$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$4$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$51$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$12$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$52$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$34$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$53$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$8$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iter$run$4$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$run$34$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$each$54$(self, f) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$6$ };
  self((a) => {
    f(a);
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function moonbitlang$core$builtin$$Iter$map$55$(self, f) {
  return (yield_) => moonbitlang$core$builtin$$Iter$run$4$(self, (a) => yield_(f(a)));
}
function moonbitlang$core$builtin$$Iter$map$56$(self, f) {
  return (yield_) => moonbitlang$core$builtin$$Iter$run$34$(self, (a) => yield_(f(a)));
}
function moonbitlang$core$builtin$$Iter$to_array$4$(self) {
  const result = [];
  self((e) => {
    moonbitlang$core$array$$Array$push$4$(result, e);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$collect$4$(self) {
  const result = [];
  moonbitlang$core$builtin$$Iter$each$54$(self, (e) => {
    moonbitlang$core$array$$Array$push$4$(result, e);
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$join(self, sep) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const first = { val: true };
  self((str) => {
    if (first.val) {
      first.val = false;
    } else {
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, sep);
    }
    moonbitlang$core$builtin$$Logger$write_string$16$(buf, str);
    return 1;
  });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$uint64$$UInt64$to_byte(self) {
  return moonbitlang$core$uint64$$UInt64$to_int(self) & 255;
}
function moonbitlang$core$byte$$Byte$to_int64(self) {
  return moonbitlang$core$int$$Int$to_int64(self);
}
function moonbitlang$core$builtin$$Neg$neg$57$(self) {
  return self.lo === 0 ? { hi: ~self.hi + 1 | 0, lo: 0 } : { hi: ~self.hi, lo: ~self.lo + 1 | 0 };
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$add$57$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$sub$57$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$mul$57$(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$Div$div$57$(self, other) {
  const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const _func = exports.div_s;
  const lo = _func(_alo, _ahi, _blo, _bhi);
  const _func$2 = exports.get_high;
  const hi = _func$2();
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$MyInt64$div_u(self, other) {
  const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const _func = exports.div_u;
  const lo = _func(_alo, _ahi, _blo, _bhi);
  const _func$2 = exports.get_high;
  const hi = _func$2();
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$MyInt64$land(self, other) {
  return { hi: self.hi & other.hi, lo: self.lo & other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lor(self, other) {
  return { hi: self.hi | other.hi, lo: self.lo | other.lo };
}
function moonbitlang$core$builtin$$MyInt64$lsl(self, shift) {
  const shift$2 = shift & 63;
  if (shift$2 === 0) {
    return self;
  } else {
    if (shift$2 < 32) {
      const _hi = self.hi;
      const _lo = self.lo;
      const hi = _hi;
      const lo = _lo;
      const hi$2 = hi << shift$2 | (lo >>> (32 - shift$2 | 0) | 0);
      const lo$2 = lo << shift$2;
      return { hi: hi$2, lo: lo$2 };
    } else {
      return { hi: self.lo << (shift$2 - 32 | 0), lo: 0 };
    }
  }
}
function moonbitlang$core$builtin$$MyInt64$lsr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >>> shift$2 | 0, lo: self.lo >>> shift$2 | 0 | self.hi << (32 - shift$2 | 0) } : { hi: 0, lo: self.hi >>> (shift$2 - 32 | 0) | 0 };
}
function moonbitlang$core$builtin$$MyInt64$asr(self, shift) {
  const shift$2 = shift & 63;
  return shift$2 === 0 ? self : shift$2 < 32 ? { hi: self.hi >> shift$2, lo: self.lo >>> shift$2 | 0 | self.hi << (32 - shift$2 | 0) } : { hi: self.hi >> 31, lo: self.hi >> (shift$2 - 32 | 0) };
}
function moonbitlang$core$builtin$$MyInt64$clz(self) {
  return self.hi !== 0 ? Math.clz32(self.hi) : 32 + Math.clz32(self.lo) | 0;
}
function moonbitlang$core$builtin$$Eq$equal$57$(self, other) {
  return self.hi === other.hi && self.lo === other.lo;
}
function moonbitlang$core$builtin$$Neg$neg$10$(self) {
  return moonbitlang$core$builtin$$Neg$neg$57$(self);
}
function moonbitlang$core$builtin$$Add$add$10$(self, other) {
  return moonbitlang$core$builtin$$Add$add$57$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$10$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$57$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$10$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$57$(self, other);
}
function moonbitlang$core$builtin$$Div$div$10$(self, other) {
  return moonbitlang$core$builtin$$Div$div$57$(self, other);
}
function moonbitlang$core$builtin$$BitAnd$land$10$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$BitOr$lor$10$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lor(self, other);
}
function moonbitlang$core$builtin$$Shr$shr$10$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$asr(self, other);
}
function moonbitlang$core$builtin$$Shl$shl$10$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$10$(self, other) {
  return moonbitlang$core$builtin$$Eq$equal$57$(self, other);
}
function moonbitlang$core$builtin$$Compare$compare$10$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
}
function moonbitlang$core$double$$Double$convert_int64(value) {
  return moonbitlang$core$builtin$$MyInt64$convert_to_double(value);
}
function moonbitlang$core$int64$$Int64$to_double(self) {
  return moonbitlang$core$double$$Double$convert_int64(self);
}
function moonbitlang$core$builtin$$Add$add$0$(self, other) {
  return moonbitlang$core$builtin$$Add$add$57$(self, other);
}
function moonbitlang$core$builtin$$Sub$sub$0$(self, other) {
  return moonbitlang$core$builtin$$Sub$sub$57$(self, other);
}
function moonbitlang$core$builtin$$Mul$mul$0$(self, other) {
  return moonbitlang$core$builtin$$Mul$mul$57$(self, other);
}
function moonbitlang$core$builtin$$Div$div$0$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$div_u(self, other);
}
function moonbitlang$core$builtin$$Compare$compare$0$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare_u(self, other);
}
function moonbitlang$core$builtin$$Eq$equal$0$(self, other) {
  return moonbitlang$core$builtin$$Eq$equal$57$(self, other);
}
function moonbitlang$core$builtin$$BitAnd$land$0$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$land(self, other);
}
function moonbitlang$core$builtin$$Shl$shl$0$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsl(self, shift);
}
function moonbitlang$core$builtin$$Shr$shr$0$(self, shift) {
  return moonbitlang$core$builtin$$MyInt64$lsr(self, shift);
}
function moonbitlang$core$uint64$$UInt64$clz(self) {
  return moonbitlang$core$builtin$$MyInt64$clz(self);
}
function moonbitlang$core$builtin$$rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  self.acc = Math.imul(moonbitlang$core$builtin$$rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end875 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end875) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$2$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$Eq$equal$29$(self, that) {
  return self === that;
}
function moonbitlang$core$builtin$$Show$output$22$(self, logger) {
  logger.method_0(logger.self, self);
}
function moonbitlang$core$array$$ArrayView$at$9$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$abort$$abort$9$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$7$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$7$(index)}`);
  }
}
function moonbitlang$core$array$$Array$sub$46$inner$4$(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$abort$$abort$3$("View index out of bounds");
}
function moonbitlang$core$array$$Array$makei$58$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = new Array(length);
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < length) {
        array[i] = value(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$builtin$$Add$add$59$(self, other) {
  const result = new Array(self.length + other.length | 0);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$12$(result, 0, self, 0, self.length);
  moonbitlang$core$builtin$$UninitializedArray$unsafe_blit$12$(result, self.length, other, 0, other.length);
  return result;
}
function moonbitlang$core$array$$Array$is_empty$8$(self) {
  return self.length === 0;
}
function moonbitlang$core$array$$ArrayView$iter$4$(self) {
  return moonbitlang$core$builtin$$Iter$new$4$((yield_) => {
    const _len = moonbitlang$core$array$$ArrayView$length$4$(self);
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self.buf[self.start + _i | 0];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$array$$ArrayView$map$60$(self, f) {
  if (moonbitlang$core$array$$ArrayView$length$9$(self) === 0) {
    return [];
  }
  return moonbitlang$core$array$$Array$makei$58$(moonbitlang$core$array$$ArrayView$length$9$(self), (i) => f(moonbitlang$core$array$$ArrayView$at$9$(self, i)));
}
function moonbitlang$core$array$$ArrayView$join$2$(self, separator) {
  if (self.len === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _bind = self.buf;
    const _bind$2 = 1 + self.start | 0;
    const _some = self.len;
    const _bind$3 = _some - 1 | 0;
    const _x = { buf: _bind, start: _bind$2, len: _bind$3 };
    const hd = moonbitlang$core$string$$ToStringView$to_string_view$2$(_hd);
    let size_hint = moonbitlang$core$string$$StringView$length(hd);
    const _len = moonbitlang$core$array$$ArrayView$length$2$(_x);
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const s = _bind[_bind$2 + _i | 0];
        size_hint = size_hint + (moonbitlang$core$string$$StringView$length(moonbitlang$core$string$$ToStringView$to_string_view$2$(s)) + moonbitlang$core$string$$StringView$length(separator) | 0) | 0;
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    size_hint = size_hint << 1;
    const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(size_hint);
    moonbitlang$core$builtin$$Logger$write_substring$16$(buf, moonbitlang$core$string$$StringView$data(hd), moonbitlang$core$string$$StringView$start_offset(hd), moonbitlang$core$string$$StringView$length(hd));
    if (moonbitlang$core$string$$String$char_length_eq$46$inner(separator.str, 0, separator.start, separator.end)) {
      const _len$2 = moonbitlang$core$array$$ArrayView$length$2$(_x);
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind[_bind$2 + _i | 0];
          const s$2 = moonbitlang$core$string$$ToStringView$to_string_view$2$(s);
          moonbitlang$core$builtin$$Logger$write_substring$16$(buf, moonbitlang$core$string$$StringView$data(s$2), moonbitlang$core$string$$StringView$start_offset(s$2), moonbitlang$core$string$$StringView$length(s$2));
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _len$2 = moonbitlang$core$array$$ArrayView$length$2$(_x);
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind[_bind$2 + _i | 0];
          const s$2 = moonbitlang$core$string$$ToStringView$to_string_view$2$(s);
          moonbitlang$core$builtin$$Logger$write_substring$16$(buf, moonbitlang$core$string$$StringView$data(separator), moonbitlang$core$string$$StringView$start_offset(separator), moonbitlang$core$string$$StringView$length(separator));
          moonbitlang$core$builtin$$Logger$write_substring$16$(buf, moonbitlang$core$string$$StringView$data(s$2), moonbitlang$core$string$$StringView$start_offset(s$2), moonbitlang$core$string$$StringView$length(s$2));
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
  }
}
function moonbitlang$core$array$$Array$push_iter$31$(self, iter) {
  iter((x) => {
    moonbitlang$core$array$$Array$push$31$(self, x);
    return 1;
  });
}
function moonbitlang$core$array$$Array$join$2$(self, separator) {
  return moonbitlang$core$array$$ArrayView$join$2$({ buf: self, start: 0, len: self.length }, separator);
}
function moonbitlang$core$builtin$$Show$output$30$(self, logger) {
  logger.method_0(logger.self, String(self));
}
function moonbitlang$core$builtin$$Show$to_string$33$(self) {
  return String.fromCodePoint(self);
}
function moonbitlang$core$char$$Char$utf16_len(self) {
  const code = self;
  return code <= 65535 ? 1 : 2;
}
function moonbitlang$core$json$$offset_to_position(input, offset) {
  let line = 1;
  let column = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < offset) {
      if (input.charCodeAt(i) === 10) {
        line = line + 1 | 0;
        column = 0;
      } else {
        column = column + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { line: line, column: column };
}
function moonbitlang$core$json$$ParseContext$invalid_char$46$inner$8$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(moonbitlang$core$json$$offset_to_position(ctx.input, offset), moonbitlang$core$option$$Option$unwrap_or$33$(moonbitlang$core$string$$String$get_char(ctx.input, offset), 65533)));
}
function moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new Result$Err$8$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(moonbitlang$core$json$$offset_to_position(ctx.input, offset), moonbitlang$core$option$$Option$unwrap_or$33$(moonbitlang$core$string$$String$get_char(ctx.input, offset), 65533)));
}
function moonbitlang$core$json$$ParseContext$invalid_char$46$inner$61$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new Result$Err$9$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(moonbitlang$core$json$$offset_to_position(ctx.input, offset), moonbitlang$core$option$$Option$unwrap_or$33$(moonbitlang$core$string$$String$get_char(ctx.input, offset), 65533)));
}
function moonbitlang$core$json$$ParseContext$invalid_char$46$inner$62$(ctx, shift) {
  const offset = ctx.offset + shift | 0;
  return new Result$Err$10$(new Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidChar(moonbitlang$core$json$$offset_to_position(ctx.input, offset), moonbitlang$core$option$$Option$unwrap_or$33$(moonbitlang$core$string$$String$get_char(ctx.input, offset), 65533)));
}
function moonbitlang$core$json$$CharClass$of(array) {
  return array;
}
function moonbitlang$core$json$$CharClass$contains(self, c) {
  const _self = self;
  let _tmp = 0;
  let _tmp$2 = _self.length;
  while (true) {
    const left = _tmp;
    const right = _tmp$2;
    if (left < right) {
      if (2 === 0) {
        $panic();
      }
      const middle = (left + right | 0) / 2 | 0;
      const _bind = moonbitlang$core$array$$Array$at$18$(_self, middle);
      const _min = _bind._0;
      const _max = _bind._1;
      if (c < _min) {
        _tmp$2 = middle;
        continue;
      } else {
        if (c > _max) {
          _tmp = middle + 1 | 0;
          continue;
        } else {
          return true;
        }
      }
    } else {
      return false;
    }
  }
}
function moonbitlang$core$json$$ParseContext$read_char(ctx) {
  if (ctx.offset < ctx.end_offset) {
    const _tmp = ctx.input;
    const _tmp$2 = ctx.offset;
    const c1 = _tmp.charCodeAt(_tmp$2);
    ctx.offset = ctx.offset + 1 | 0;
    if (c1 >= 55296 && c1 <= 56319) {
      if (ctx.offset < ctx.end_offset) {
        const _tmp$3 = ctx.input;
        const _tmp$4 = ctx.offset;
        const c2 = _tmp$3.charCodeAt(_tmp$4);
        if (c2 >= 56320 && c2 <= 57343) {
          ctx.offset = ctx.offset + 1 | 0;
          const c3 = ((c1 << 10) + c2 | 0) - 56613888 | 0;
          return c3;
        }
      }
    }
    return c1;
  } else {
    return -1;
  }
}
function moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx) {
  _L: while (true) {
    _L$2: {
      _L$3: {
        const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
        if (_bind === -1) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 9: {
              break _L$3;
            }
            case 32: {
              break _L$3;
            }
            case 10: {
              break _L$3;
            }
            case 13: {
              break _L$3;
            }
            default: {
              if (_x > 127 && moonbitlang$core$json$$CharClass$contains(moonbitlang$core$json$$non_ascii_whitespace, _x)) {
                break _L$2;
              }
              ctx.offset = ctx.offset - 1 | 0;
              break _L;
            }
          }
        }
      }
      break _L$2;
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$make(input) {
  return { offset: 0, input: input, end_offset: input.length };
}
function moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, c) {
  if (ctx.offset < ctx.end_offset) {
    const _tmp = ctx.input;
    const _tmp$2 = ctx.offset;
    const c1 = _tmp.charCodeAt(_tmp$2);
    ctx.offset = ctx.offset + 1 | 0;
    return c !== c1 ? moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1) : new Result$Ok$8$(undefined);
  } else {
    return new Result$Err$8$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  }
}
function moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, end) {
  const s = ctx.input.substring(start, end);
  if (!moonbitlang$core$string$$String$contains(s, { str: moonbitlang$core$json$$lex_number_end$46$42$bind$124$1025, start: 0, end: moonbitlang$core$json$$lex_number_end$46$42$bind$124$1025.length }) && (!moonbitlang$core$string$$String$contains(s, { str: moonbitlang$core$json$$lex_number_end$46$42$bind$124$1026, start: 0, end: moonbitlang$core$json$$lex_number_end$46$42$bind$124$1026.length }) && !moonbitlang$core$string$$String$contains(s, { str: moonbitlang$core$json$$lex_number_end$46$42$bind$124$1027, start: 0, end: moonbitlang$core$json$$lex_number_end$46$42$bind$124$1027.length }))) {
    let parsed_int;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$strconv$$parse_int64$46$inner({ str: s, start: 0, end: s.length }, 0);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          const _tmp$2 = _err._0;
          _try_err = _tmp$2;
          break _L$2;
        }
        parsed_int = new Result$Ok$11$(_tmp);
        break _L;
      }
      parsed_int = new Result$Err$11$(_try_err);
    }
    _L$2: {
      if (parsed_int.$tag === 1) {
        const _Ok = parsed_int;
        const _i = _Ok._0;
        if (moonbitlang$core$builtin$$op_le$10$(_i, $9007199254740991L) && moonbitlang$core$builtin$$op_ge$10$(_i, $_9007199254740991L)) {
          return { _0: moonbitlang$core$int64$$Int64$to_double(_i), _1: undefined };
        } else {
          break _L$2;
        }
      } else {
        break _L$2;
      }
    }
    _L$3: {
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(s, 1, 0, s.length)) {
        const _x = s.charCodeAt(0);
        if (_x === 45) {
          return { _0: moonbitlang$core$double$$neg_infinity, _1: s };
        } else {
          break _L$3;
        }
      } else {
        break _L$3;
      }
    }
    return { _0: moonbitlang$core$double$$infinity, _1: s };
  } else {
    let parsed_double;
    let _try_err;
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$strconv$$parse_double({ str: s, start: 0, end: s.length });
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          const _err = _bind;
          const _tmp$2 = _err._0;
          _try_err = _tmp$2;
          break _L$2;
        }
        parsed_double = new Result$Ok$12$(_tmp);
        break _L;
      }
      parsed_double = new Result$Err$12$(_try_err);
    }
    if (parsed_double.$tag === 1) {
      const _Ok = parsed_double;
      const _d = _Ok._0;
      return { _0: _d, _1: undefined };
    } else {
      _L$2: {
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(s, 1, 0, s.length)) {
          const _x = s.charCodeAt(0);
          if (_x === 45) {
            return { _0: moonbitlang$core$double$$neg_infinity, _1: s };
          } else {
            break _L$2;
          }
        } else {
          break _L$2;
        }
      }
      return { _0: moonbitlang$core$double$$infinity, _1: s };
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_exponent_integer(ctx, start) {
  while (true) {
    _L: {
      const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
      if (_bind === -1) {
        return moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 48 && _c <= 57) {
          break _L;
        }
        ctx.offset = ctx.offset - 1 | 0;
        return moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset);
      }
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_exponent_sign(ctx, start) {
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$9$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    if (_c >= 48 && _c <= 57) {
      return new Result$Ok$9$(moonbitlang$core$json$$ParseContext$lex_decimal_exponent_integer(ctx, start));
    }
    ctx.offset = ctx.offset - 1 | 0;
    return moonbitlang$core$json$$ParseContext$invalid_char$46$inner$61$(ctx, 0);
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_exponent(ctx, start) {
  _L: {
    const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
    if (_bind === -1) {
      return new Result$Err$9$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 43: {
          break _L;
        }
        case 45: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            return new Result$Ok$9$(moonbitlang$core$json$$ParseContext$lex_decimal_exponent_integer(ctx, start));
          }
          ctx.offset = ctx.offset - 1 | 0;
          return moonbitlang$core$json$$ParseContext$invalid_char$46$inner$61$(ctx, 0);
        }
      }
    }
  }
  const _bind = moonbitlang$core$json$$ParseContext$lex_decimal_exponent_sign(ctx, start);
  let _tmp;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp = _ok._0;
  } else {
    return _bind;
  }
  return new Result$Ok$9$(_tmp);
}
function moonbitlang$core$json$$ParseContext$lex_decimal_fraction(ctx, start) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
        if (_bind === -1) {
          return new Result$Ok$9$(moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset));
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 101: {
              break _L$2;
            }
            case 69: {
              break _L$2;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              return new Result$Ok$9$(moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset));
            }
          }
        }
      }
      const _bind = moonbitlang$core$json$$ParseContext$lex_decimal_exponent(ctx, start);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new Result$Ok$9$(_tmp);
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_point(ctx, start) {
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$9$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _c = _Some;
    return _c >= 48 && _c <= 57 ? moonbitlang$core$json$$ParseContext$lex_decimal_fraction(ctx, start) : moonbitlang$core$json$$ParseContext$invalid_char$46$inner$61$(ctx, -1);
  }
}
function moonbitlang$core$json$$ParseContext$lex_decimal_integer(ctx, start) {
  while (true) {
    _L: {
      _L$2: {
        const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
        if (_bind === -1) {
          return new Result$Ok$9$(moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset));
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case 46: {
              const _bind$2 = moonbitlang$core$json$$ParseContext$lex_decimal_point(ctx, start);
              let _tmp;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp = _ok._0;
              } else {
                return _bind$2;
              }
              return new Result$Ok$9$(_tmp);
            }
            case 101: {
              break _L$2;
            }
            case 69: {
              break _L$2;
            }
            default: {
              if (_x >= 48 && _x <= 57) {
                break _L;
              }
              ctx.offset = ctx.offset - 1 | 0;
              return new Result$Ok$9$(moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset));
            }
          }
        }
      }
      const _bind = moonbitlang$core$json$$ParseContext$lex_decimal_exponent(ctx, start);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new Result$Ok$9$(_tmp);
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$lex_hex_digits(ctx, n) {
  let r = 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
      if (_bind === -1) {
        return new Result$Err$13$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
      } else {
        const _Some = _bind;
        const _c = _Some;
        if (_c >= 65) {
          const d = ((_c & ~32) - 65 | 0) + 10 | 0;
          if (d > 15) {
            const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          r = r << 4 | d;
        } else {
          if (_c >= 48) {
            const d = _c - 48 | 0;
            if (d > 9) {
              const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _ok._0;
              } else {
                return _bind$2;
              }
            }
            r = r << 4 | d;
          } else {
            const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$13$(r);
}
function moonbitlang$core$json$$lex_string$46$flush$124$247(_env, end) {
  const start = _env._2;
  const ctx = _env._1;
  const buf = _env._0;
  if (start.val > 0 && end > start.val) {
    moonbitlang$core$builtin$$Logger$write_substring$16$(buf, ctx.input, start.val, end - start.val | 0);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$json$$ParseContext$lex_string(ctx) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const start = { val: ctx.offset };
  const _env = { _0: buf, _1: ctx, _2: start };
  _L: while (true) {
    _L$2: {
      _L$3: {
        _L$4: {
          const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
          if (_bind === -1) {
            return new Result$Err$14$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
          } else {
            const _Some = _bind;
            const _x = _Some;
            switch (_x) {
              case 34: {
                moonbitlang$core$json$$lex_string$46$flush$124$247(_env, ctx.offset - 1 | 0);
                break _L;
              }
              case 10: {
                break _L$4;
              }
              case 13: {
                break _L$4;
              }
              case 92: {
                moonbitlang$core$json$$lex_string$46$flush$124$247(_env, ctx.offset - 1 | 0);
                const _bind$2 = moonbitlang$core$json$$ParseContext$read_char(ctx);
                if (_bind$2 === -1) {
                  return new Result$Err$14$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
                } else {
                  const _Some$2 = _bind$2;
                  const _x$2 = _Some$2;
                  switch (_x$2) {
                    case 98: {
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 8);
                      break;
                    }
                    case 102: {
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 12);
                      break;
                    }
                    case 110: {
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 10);
                      break;
                    }
                    case 114: {
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 13);
                      break;
                    }
                    case 116: {
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 9);
                      break;
                    }
                    case 34: {
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 34);
                      break;
                    }
                    case 92: {
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 92);
                      break;
                    }
                    case 47: {
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 47);
                      break;
                    }
                    case 117: {
                      const _bind$3 = moonbitlang$core$json$$ParseContext$lex_hex_digits(ctx, 4);
                      let c;
                      if (_bind$3.$tag === 1) {
                        const _ok = _bind$3;
                        c = _ok._0;
                      } else {
                        return _bind$3;
                      }
                      moonbitlang$core$builtin$$Logger$write_char$16$(buf, c);
                      break;
                    }
                    default: {
                      const _bind$4 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
                      if (_bind$4.$tag === 1) {
                        const _ok = _bind$4;
                        _ok._0;
                      } else {
                        return _bind$4;
                      }
                    }
                  }
                }
                start.val = ctx.offset;
                break;
              }
              default: {
                if (_x < 32) {
                  const _bind$3 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _ok._0;
                  } else {
                    return _bind$3;
                  }
                } else {
                  break _L$2;
                }
              }
            }
          }
          break _L$3;
        }
        const _bind = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _ok._0;
        } else {
          return _bind;
        }
      }
      break _L$2;
    }
    continue;
  }
  return new Result$Ok$14$(moonbitlang$core$builtin$$StringBuilder$to_string(buf));
}
function moonbitlang$core$json$$ParseContext$lex_zero(ctx, start) {
  _L: {
    const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
    if (_bind === -1) {
      return new Result$Ok$9$(moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset));
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case 46: {
          return moonbitlang$core$json$$ParseContext$lex_decimal_point(ctx, start);
        }
        case 101: {
          break _L;
        }
        case 69: {
          break _L;
        }
        default: {
          if (_x >= 48 && _x <= 57) {
            ctx.offset = ctx.offset - 1 | 0;
            const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, 0);
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              _ok._0;
            } else {
              return _bind$2;
            }
          }
          ctx.offset = ctx.offset - 1 | 0;
          return new Result$Ok$9$(moonbitlang$core$json$$ParseContext$lex_number_end(ctx, start, ctx.offset));
        }
      }
    }
  }
  return moonbitlang$core$json$$ParseContext$lex_decimal_exponent(ctx, start);
}
function moonbitlang$core$json$$ParseContext$lex_value(ctx, allow_rbracket) {
  while (true) {
    _L: {
      _L$2: {
        _L$3: {
          const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
          if (_bind === -1) {
            return new Result$Err$10$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
          } else {
            const _Some = _bind;
            const _x = _Some;
            if (_x === 9) {
              break _L$3;
            } else {
              if (_x === 32) {
                break _L$3;
              } else {
                if (_x === 10) {
                  break _L$3;
                } else {
                  if (_x === 13) {
                    break _L$3;
                  } else {
                    if (_x === 123) {
                      return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$LBrace);
                    } else {
                      if (_x === 91) {
                        return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$LBracket);
                      } else {
                        if (_x === 93) {
                          if (allow_rbracket) {
                            return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$RBracket);
                          } else {
                            const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
                            if (_bind$2.$tag === 1) {
                              const _ok = _bind$2;
                              _ok._0;
                            } else {
                              return _bind$2;
                            }
                          }
                        } else {
                          if (_x === 110) {
                            const _bind$2 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 117);
                            if (_bind$2.$tag === 1) {
                              const _ok = _bind$2;
                              _ok._0;
                            } else {
                              return _bind$2;
                            }
                            const _bind$3 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 108);
                            if (_bind$3.$tag === 1) {
                              const _ok = _bind$3;
                              _ok._0;
                            } else {
                              return _bind$3;
                            }
                            const _bind$4 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 108);
                            if (_bind$4.$tag === 1) {
                              const _ok = _bind$4;
                              _ok._0;
                            } else {
                              return _bind$4;
                            }
                            return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$Null);
                          } else {
                            if (_x === 116) {
                              const _bind$2 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 114);
                              if (_bind$2.$tag === 1) {
                                const _ok = _bind$2;
                                _ok._0;
                              } else {
                                return _bind$2;
                              }
                              const _bind$3 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 117);
                              if (_bind$3.$tag === 1) {
                                const _ok = _bind$3;
                                _ok._0;
                              } else {
                                return _bind$3;
                              }
                              const _bind$4 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 101);
                              if (_bind$4.$tag === 1) {
                                const _ok = _bind$4;
                                _ok._0;
                              } else {
                                return _bind$4;
                              }
                              return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$True);
                            } else {
                              if (_x === 102) {
                                const _bind$2 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 97);
                                if (_bind$2.$tag === 1) {
                                  const _ok = _bind$2;
                                  _ok._0;
                                } else {
                                  return _bind$2;
                                }
                                const _bind$3 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 108);
                                if (_bind$3.$tag === 1) {
                                  const _ok = _bind$3;
                                  _ok._0;
                                } else {
                                  return _bind$3;
                                }
                                const _bind$4 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 115);
                                if (_bind$4.$tag === 1) {
                                  const _ok = _bind$4;
                                  _ok._0;
                                } else {
                                  return _bind$4;
                                }
                                const _bind$5 = moonbitlang$core$json$$ParseContext$expect_ascii_char(ctx, 101);
                                if (_bind$5.$tag === 1) {
                                  const _ok = _bind$5;
                                  _ok._0;
                                } else {
                                  return _bind$5;
                                }
                                return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$False);
                              } else {
                                if (_x === 45) {
                                  const _bind$2 = moonbitlang$core$json$$ParseContext$read_char(ctx);
                                  if (_bind$2 === -1) {
                                    return new Result$Err$10$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
                                  } else {
                                    const _Some$2 = _bind$2;
                                    const _x$2 = _Some$2;
                                    if (_x$2 === 48) {
                                      const _bind$3 = moonbitlang$core$json$$ParseContext$lex_zero(ctx, ctx.offset - 2 | 0);
                                      let _bind$4;
                                      if (_bind$3.$tag === 1) {
                                        const _ok = _bind$3;
                                        _bind$4 = _ok._0;
                                      } else {
                                        return _bind$3;
                                      }
                                      const _n = _bind$4._0;
                                      const _repr = _bind$4._1;
                                      return new Result$Ok$10$(new $64$moonbitlang$47$core$47$json$46$Token$Number(_n, _repr));
                                    } else {
                                      if (_x$2 >= 49 && _x$2 <= 57) {
                                        const _bind$3 = moonbitlang$core$json$$ParseContext$lex_decimal_integer(ctx, ctx.offset - 2 | 0);
                                        let _bind$4;
                                        if (_bind$3.$tag === 1) {
                                          const _ok = _bind$3;
                                          _bind$4 = _ok._0;
                                        } else {
                                          return _bind$3;
                                        }
                                        const _n = _bind$4._0;
                                        const _repr = _bind$4._1;
                                        return new Result$Ok$10$(new $64$moonbitlang$47$core$47$json$46$Token$Number(_n, _repr));
                                      }
                                      const _bind$3 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
                                      if (_bind$3.$tag === 1) {
                                        const _ok = _bind$3;
                                        _ok._0;
                                      } else {
                                        return _bind$3;
                                      }
                                    }
                                  }
                                } else {
                                  if (_x === 48) {
                                    const _bind$2 = moonbitlang$core$json$$ParseContext$lex_zero(ctx, ctx.offset - 1 | 0);
                                    let _bind$3;
                                    if (_bind$2.$tag === 1) {
                                      const _ok = _bind$2;
                                      _bind$3 = _ok._0;
                                    } else {
                                      return _bind$2;
                                    }
                                    const _n = _bind$3._0;
                                    const _repr = _bind$3._1;
                                    return new Result$Ok$10$(new $64$moonbitlang$47$core$47$json$46$Token$Number(_n, _repr));
                                  } else {
                                    if (_x >= 49 && _x <= 57) {
                                      const _bind$2 = moonbitlang$core$json$$ParseContext$lex_decimal_integer(ctx, ctx.offset - 1 | 0);
                                      let _bind$3;
                                      if (_bind$2.$tag === 1) {
                                        const _ok = _bind$2;
                                        _bind$3 = _ok._0;
                                      } else {
                                        return _bind$2;
                                      }
                                      const _n = _bind$3._0;
                                      const _repr = _bind$3._1;
                                      return new Result$Ok$10$(new $64$moonbitlang$47$core$47$json$46$Token$Number(_n, _repr));
                                    } else {
                                      if (_x === 34) {
                                        const _bind$2 = moonbitlang$core$json$$ParseContext$lex_string(ctx);
                                        let s;
                                        if (_bind$2.$tag === 1) {
                                          const _ok = _bind$2;
                                          s = _ok._0;
                                        } else {
                                          return _bind$2;
                                        }
                                        return new Result$Ok$10$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
                                      } else {
                                        if (_x > 127 && moonbitlang$core$json$$CharClass$contains(moonbitlang$core$json$$non_ascii_whitespace, _x)) {
                                          break _L;
                                        }
                                        const shift = -moonbitlang$core$char$$Char$utf16_len(_x) | 0;
                                        const _bind$2 = moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, shift);
                                        if (_bind$2.$tag === 1) {
                                          const _ok = _bind$2;
                                          _ok._0;
                                        } else {
                                          return _bind$2;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          break _L$2;
        }
        break _L;
      }
      break _L;
    }
    continue;
  }
}
function moonbitlang$core$json$$ParseContext$lex_after_array_value(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$10$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 93: {
        return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$RBracket);
      }
      case 44: {
        return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$Comma);
      }
      default: {
        return moonbitlang$core$json$$ParseContext$invalid_char$46$inner$62$(ctx, -1);
      }
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_after_object_value(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$10$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$RBrace);
      }
      case 44: {
        return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$Comma);
      }
      default: {
        return moonbitlang$core$json$$ParseContext$invalid_char$46$inner$62$(ctx, -1);
      }
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_after_property_name(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$8$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 58) {
      return new Result$Ok$8$(undefined);
    } else {
      return moonbitlang$core$json$$ParseContext$invalid_char$46$inner$1$(ctx, -1);
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_property_name(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$10$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    switch (_x) {
      case 125: {
        return new Result$Ok$10$($64$moonbitlang$47$core$47$json$46$Token$RBrace);
      }
      case 34: {
        const _bind$2 = moonbitlang$core$json$$ParseContext$lex_string(ctx);
        let s;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          s = _ok._0;
        } else {
          return _bind$2;
        }
        return new Result$Ok$10$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
      }
      default: {
        return moonbitlang$core$json$$ParseContext$invalid_char$46$inner$62$(ctx, -1);
      }
    }
  }
}
function moonbitlang$core$json$$ParseContext$lex_property_name2(ctx) {
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  const _bind = moonbitlang$core$json$$ParseContext$read_char(ctx);
  if (_bind === -1) {
    return new Result$Err$10$(Error$moonbitlang$47$core$47$json$46$ParseError$46$InvalidEof);
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === 34) {
      const _bind$2 = moonbitlang$core$json$$ParseContext$lex_string(ctx);
      let s;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        s = _ok._0;
      } else {
        return _bind$2;
      }
      return new Result$Ok$10$(new $64$moonbitlang$47$core$47$json$46$Token$String(s));
    } else {
      return moonbitlang$core$json$$ParseContext$invalid_char$46$inner$62$(ctx, -1);
    }
  }
}
function moonbitlang$core$json$$ParseContext$parse_value(ctx) {
  const _bind = moonbitlang$core$json$$ParseContext$lex_value(ctx, false);
  let tok;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    tok = _ok._0;
  } else {
    return _bind;
  }
  return moonbitlang$core$json$$ParseContext$parse_value2(ctx, tok);
}
function moonbitlang$core$json$$ParseContext$parse_value2(ctx, tok) {
  _L: {
    switch (tok.$tag) {
      case 0: {
        return new Result$Ok$7$(moonbitlang$core$builtin$$null);
      }
      case 1: {
        return new Result$Ok$7$(moonbitlang$core$json$$Json$boolean(true));
      }
      case 2: {
        return new Result$Ok$7$(moonbitlang$core$json$$Json$boolean(false));
      }
      case 3: {
        const _Number = tok;
        const _n = _Number._0;
        const _repr = _Number._1;
        return new Result$Ok$7$(moonbitlang$core$json$$Json$number(_n, _repr));
      }
      case 4: {
        const _String = tok;
        const _s = _String._0;
        return new Result$Ok$7$(moonbitlang$core$json$$Json$string(_s));
      }
      case 5: {
        return moonbitlang$core$json$$ParseContext$parse_object(ctx);
      }
      case 7: {
        return moonbitlang$core$json$$ParseContext$parse_array(ctx);
      }
      case 8: {
        break _L;
      }
      case 6: {
        break _L;
      }
      default: {
        break _L;
      }
    }
  }
  return new Result$Ok$7$(moonbitlang$core$abort$$abort$8$("unreachable"));
}
function moonbitlang$core$json$$ParseContext$parse_array(ctx) {
  const vec = [];
  let _tmp;
  const _bind = moonbitlang$core$json$$ParseContext$lex_value(ctx, true);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const _param = _tmp$3;
    if (_param.$tag === 8) {
      _tmp = moonbitlang$core$json$$Json$array(vec);
      break;
    } else {
      const _bind$2 = moonbitlang$core$json$$ParseContext$parse_value2(ctx, _param);
      let _tmp$4;
      if (_bind$2.$tag === 1) {
        const _ok = _bind$2;
        _tmp$4 = _ok._0;
      } else {
        return _bind$2;
      }
      moonbitlang$core$array$$Array$push$8$(vec, _tmp$4);
      const _bind$3 = moonbitlang$core$json$$ParseContext$lex_after_array_value(ctx);
      let tok2;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        tok2 = _ok._0;
      } else {
        return _bind$3;
      }
      switch (tok2.$tag) {
        case 9: {
          const _bind$4 = moonbitlang$core$json$$ParseContext$lex_value(ctx, false);
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp$3 = _ok._0;
          } else {
            return _bind$4;
          }
          continue _L;
        }
        case 8: {
          _tmp = moonbitlang$core$json$$Json$array(vec);
          break _L;
        }
        default: {
          _tmp = moonbitlang$core$abort$$abort$8$("unreachable");
          break _L;
        }
      }
    }
  }
  return new Result$Ok$7$(_tmp);
}
function moonbitlang$core$json$$ParseContext$parse_object(ctx) {
  const map = moonbitlang$core$builtin$$Map$new$46$inner$44$(8);
  let _tmp;
  const _bind = moonbitlang$core$json$$ParseContext$lex_property_name(ctx);
  let _tmp$2;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _tmp$2 = _ok._0;
  } else {
    return _bind;
  }
  let _tmp$3 = _tmp$2;
  _L: while (true) {
    const _param = _tmp$3;
    switch (_param.$tag) {
      case 6: {
        _tmp = moonbitlang$core$json$$Json$object(map);
        break _L;
      }
      case 4: {
        const _String = _param;
        const _name = _String._0;
        const _bind$2 = moonbitlang$core$json$$ParseContext$lex_after_property_name(ctx);
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _ok._0;
        } else {
          return _bind$2;
        }
        const _bind$3 = moonbitlang$core$json$$ParseContext$parse_value(ctx);
        let _tmp$4;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$4 = _ok._0;
        } else {
          return _bind$3;
        }
        moonbitlang$core$builtin$$Map$set$44$(map, _name, _tmp$4);
        const _bind$4 = moonbitlang$core$json$$ParseContext$lex_after_object_value(ctx);
        let _bind$5;
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$5 = _ok._0;
        } else {
          return _bind$4;
        }
        switch (_bind$5.$tag) {
          case 9: {
            const _bind$6 = moonbitlang$core$json$$ParseContext$lex_property_name2(ctx);
            if (_bind$6.$tag === 1) {
              const _ok = _bind$6;
              _tmp$3 = _ok._0;
            } else {
              return _bind$6;
            }
            continue _L;
          }
          case 6: {
            _tmp = moonbitlang$core$json$$Json$object(map);
            break _L;
          }
          default: {
            _tmp = moonbitlang$core$abort$$abort$8$("unreachable");
            break _L;
          }
        }
      }
      default: {
        _tmp = moonbitlang$core$abort$$abort$8$("unreachable");
        break _L;
      }
    }
  }
  return new Result$Ok$7$(_tmp);
}
function moonbitlang$core$json$$parse(input) {
  const ctx = moonbitlang$core$json$$ParseContext$make(input);
  const _bind = moonbitlang$core$json$$ParseContext$parse_value(ctx);
  let val;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    val = _ok._0;
  } else {
    return _bind;
  }
  moonbitlang$core$json$$ParseContext$lex_skip_whitespace(ctx);
  return ctx.offset >= ctx.end_offset ? new Result$Ok$7$(val) : moonbitlang$core$json$$ParseContext$invalid_char$46$inner$8$(ctx, 0);
}
function moonbitlang$core$json$$escape$46$to_hex_digit$124$110(i) {
  return i < 10 ? 48 + i | 0 : 97 + (i - 10 | 0) | 0;
}
function moonbitlang$core$json$$escape(str, escape_slash) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(str.length);
  const _bind = moonbitlang$core$string$$String$iter(str);
  _bind((c) => {
    switch (c) {
      case 34: {
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\\"");
        break;
      }
      case 92: {
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\\\");
        break;
      }
      case 47: {
        if (escape_slash) {
          moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\/");
        } else {
          moonbitlang$core$builtin$$Logger$write_char$16$(buf, c);
        }
        break;
      }
      case 10: {
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\n");
        break;
      }
      case 13: {
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\r");
        break;
      }
      case 8: {
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\b");
        break;
      }
      case 9: {
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\t");
        break;
      }
      default: {
        const code = c;
        if (code === 12) {
          moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\f");
        } else {
          if (code < 32) {
            moonbitlang$core$builtin$$Logger$write_string$16$(buf, "\\u00");
            if (16 === 0) {
              $panic();
            }
            moonbitlang$core$builtin$$Logger$write_char$16$(buf, moonbitlang$core$json$$escape$46$to_hex_digit$124$110(code / 16 | 0));
            if (16 === 0) {
              $panic();
            }
            moonbitlang$core$builtin$$Logger$write_char$16$(buf, moonbitlang$core$json$$escape$46$to_hex_digit$124$110(code % 16 | 0));
          } else {
            moonbitlang$core$builtin$$Logger$write_char$16$(buf, c);
          }
        }
      }
    }
    return 1;
  });
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$json$$indent_str(level, indent) {
  return indent === 0 ? "" : `\n${moonbitlang$core$string$$String$repeat(" ", Math.imul(indent, level) | 0)}`;
}
function moonbitlang$core$json$$stringify$46$inner$46$stringify_inner$124$119(_env, value, level) {
  const indent = _env._2;
  const escape_slash = _env._1;
  const buf = _env._0;
  switch (value.$tag) {
    case 6: {
      const _Object = value;
      const _members = _Object._0;
      if (moonbitlang$core$builtin$$Map$is_empty$44$(_members)) {
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, "{}");
        return undefined;
      }
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 123);
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, moonbitlang$core$json$$indent_str(level + 1 | 0, indent));
      const first = { val: true };
      const _bind = moonbitlang$core$builtin$$Map$iter2$44$(_members);
      _bind((k, v) => {
        if (first.val) {
          first.val = false;
        } else {
          moonbitlang$core$builtin$$Logger$write_char$16$(buf, 44);
          moonbitlang$core$builtin$$Logger$write_string$16$(buf, moonbitlang$core$json$$indent_str(level + 1 | 0, indent));
        }
        moonbitlang$core$builtin$$Logger$write_char$16$(buf, 34);
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, moonbitlang$core$json$$escape(k, escape_slash));
        moonbitlang$core$builtin$$Logger$write_char$16$(buf, 34);
        if (indent === 0) {
          moonbitlang$core$builtin$$Logger$write_char$16$(buf, 58);
        } else {
          moonbitlang$core$builtin$$Logger$write_string$16$(buf, ": ");
        }
        moonbitlang$core$json$$stringify$46$inner$46$stringify_inner$124$119(_env, v, level + 1 | 0);
        return 1;
      });
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, moonbitlang$core$json$$indent_str(level, indent));
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 125);
      return;
    }
    case 5: {
      const _Array = value;
      const _arr = _Array._0;
      if (moonbitlang$core$array$$Array$is_empty$8$(_arr)) {
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, "[]");
        return undefined;
      }
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 91);
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, moonbitlang$core$json$$indent_str(level + 1 | 0, indent));
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const v = _arr[_i];
          if (_i > 0) {
            moonbitlang$core$builtin$$Logger$write_char$16$(buf, 44);
            moonbitlang$core$builtin$$Logger$write_string$16$(buf, moonbitlang$core$json$$indent_str(level + 1 | 0, indent));
          }
          moonbitlang$core$json$$stringify$46$inner$46$stringify_inner$124$119(_env, v, level + 1 | 0);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, moonbitlang$core$json$$indent_str(level, indent));
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 93);
      return;
    }
    case 4: {
      const _String = value;
      const _s = _String._0;
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 34);
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, moonbitlang$core$json$$escape(_s, escape_slash));
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, 34);
      return;
    }
    case 3: {
      const _Number = value;
      const _n = _Number._0;
      const _repr = _Number._1;
      if (_repr === undefined) {
        moonbitlang$core$builtin$$StringBuilder$write_object$30$(buf, _n);
        return;
      } else {
        const _Some = _repr;
        const _r = _Some;
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, _r);
        return;
      }
    }
    case 1: {
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, "true");
      return;
    }
    case 2: {
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, "false");
      return;
    }
    default: {
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, "null");
      return;
    }
  }
}
function moonbitlang$core$json$$Json$stringify$46$inner(self, escape_slash, indent) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(0);
  const _env = { _0: buf, _1: escape_slash, _2: indent };
  moonbitlang$core$json$$stringify$46$inner$46$stringify_inner$124$119(_env, self, 0);
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$list$$List$prepend$2$(self, head) {
  return new $64$moonbitlang$47$core$47$list$46$List$More$15$(head, self);
}
function moonbitlang$core$list$$List$prepend$32$(self, head) {
  return new $64$moonbitlang$47$core$47$list$46$List$More$16$(head, self);
}
function moonbitlang$core$list$$List$prepend$51$(self, head) {
  return new $64$moonbitlang$47$core$47$list$46$List$More$17$(head, self);
}
function moonbitlang$core$list$$List$iter$2$(self) {
  return moonbitlang$core$builtin$$Iter$new$2$((yield_) => {
    let _tmp = self;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        return 1;
      } else {
        const _More = _param;
        const _head = _More._0;
        const _tail = _More._1;
        const _bind = yield_(_head);
        if (_bind === 0) {
          return 0;
        }
        _tmp = _tail;
        continue;
      }
    }
  });
}
function moonbitlang$core$list$$List$iter$31$(self) {
  return moonbitlang$core$builtin$$Iter$new$31$((yield_) => {
    let _tmp = self;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        return 1;
      } else {
        const _More = _param;
        const _head = _More._0;
        const _tail = _More._1;
        const _bind = yield_(_head);
        if (_bind === 0) {
          return 0;
        }
        _tmp = _tail;
        continue;
      }
    }
  });
}
function moonbitlang$core$list$$List$iter$32$(self) {
  return moonbitlang$core$builtin$$Iter$new$32$((yield_) => {
    let _tmp = self;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        return 1;
      } else {
        const _More = _param;
        const _head = _More._0;
        const _tail = _More._1;
        const _bind = yield_(_head);
        if (_bind === 0) {
          return 0;
        }
        _tmp = _tail;
        continue;
      }
    }
  });
}
function moonbitlang$core$list$$List$length$2$(self) {
  let _tmp = self;
  let _tmp$2 = 0;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    if (_param_0.$tag === 0) {
      return _param_1;
    } else {
      const _More = _param_0;
      const _rest = _More._1;
      _tmp = _rest;
      _tmp$2 = _param_1 + 1 | 0;
      continue;
    }
  }
}
function moonbitlang$core$list$$List$map$63$(self, f) {
  if (self.$tag === 0) {
    return $64$moonbitlang$47$core$47$list$46$List$Empty$18$;
  } else {
    const _More = self;
    const _hd = _More._0;
    const _tail = _More._1;
    const dest = new $64$moonbitlang$47$core$47$list$46$List$More$18$(f(_hd), $64$moonbitlang$47$core$47$list$46$List$Empty$18$);
    let _tmp = dest;
    let _tmp$2 = _tail;
    while (true) {
      const _param_0 = _tmp;
      const _param_1 = _tmp$2;
      if (_param_1.$tag === 0) {
        break;
      } else {
        if (_param_0.$tag === 1) {
          const _More$2 = _param_0;
          const _More$3 = _param_1;
          const _hd$2 = _More$3._0;
          const _tail$2 = _More$3._1;
          _More$2._1 = new $64$moonbitlang$47$core$47$list$46$List$More$18$(f(_hd$2), $64$moonbitlang$47$core$47$list$46$List$Empty$18$);
          _tmp = _More$2._1;
          _tmp$2 = _tail$2;
          continue;
        } else {
          $panic();
          break;
        }
      }
    }
    return dest;
  }
}
function moonbitlang$core$list$$List$to_array$51$(self) {
  if (self.$tag === 0) {
    return [];
  } else {
    const _More = self;
    const _x = _More._0;
    const _xs = _More._1;
    const arr = [_x];
    let _tmp = _xs;
    while (true) {
      const _param = _tmp;
      if (_param.$tag === 0) {
        break;
      } else {
        const _More$2 = _param;
        const _x$2 = _More$2._0;
        const _xs$2 = _More$2._1;
        moonbitlang$core$array$$Array$push$51$(arr, _x$2);
        _tmp = _xs$2;
        continue;
      }
    }
    return arr;
  }
}
function moonbitlang$core$list$$List$unsafe_head$2$(self) {
  if (self.$tag === 0) {
    return moonbitlang$core$abort$$abort$2$("head of empty list");
  } else {
    const _More = self;
    return _More._0;
  }
}
function moonbitlang$core$list$$List$unsafe_nth$2$(self, n) {
  let _tmp = self;
  let _tmp$2 = n;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    if (_param_0.$tag === 0) {
      return moonbitlang$core$abort$$abort$2$("nth: index out of bounds");
    } else {
      const _More = _param_0;
      const _head = _More._0;
      const _x = _More._1;
      if (_param_1 === 0) {
        return _head;
      } else {
        _tmp = _x;
        _tmp$2 = _param_1 - 1 | 0;
        continue;
      }
    }
  }
}
function moonbitlang$core$list$$List$of$2$(arr) {
  let _tmp = arr.length - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$15$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      $bound_check(arr, i);
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$15$(arr[i], list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$list$$List$of$32$(arr) {
  let _tmp = arr.length - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$16$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      $bound_check(arr, i);
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$16$(arr[i], list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$list$$List$of$51$(arr) {
  let _tmp = arr.length - 1 | 0;
  let _tmp$2 = $64$moonbitlang$47$core$47$list$46$List$Empty$17$;
  while (true) {
    const i = _tmp;
    const list = _tmp$2;
    if (i >= 0) {
      _tmp = i - 1 | 0;
      $bound_check(arr, i);
      _tmp$2 = new $64$moonbitlang$47$core$47$list$46$List$More$17$(arr[i], list);
      continue;
    } else {
      return list;
    }
  }
}
function moonbitlang$core$option$$Option$unwrap_or$33$(self, default_) {
  return self === -1 ? default_ : self;
}
function moonbitlang$core$option$$Option$is_some$2$(self) {
  return !(self === undefined);
}
function moonbitlang$core$option$$Option$is_none$2$(self) {
  return self === undefined;
}
function moonbitlang$core$strconv$$base_err$64$() {
  return new Result$Err$19$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$base_err_str));
}
function moonbitlang$core$strconv$$check_and_consume_base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(view.str, 2, view.start, view.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _tmp$4 = view.str;
                    const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$5;
                    if (_bind$2 === undefined) {
                      _tmp$5 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _tmp$7 = view.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$3 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _tmp$10 = view.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$4 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _tmp$13 = view.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$14;
                    if (_bind$5 === undefined) {
                      _tmp$14 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$6 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$19$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$19$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$19$({ _0: 2, _1: rest, _2: true });
    }
    return new Result$Ok$19$({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(view.str, 2, view.start, view.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp = view.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$2;
                    if (_bind === undefined) {
                      _tmp$2 = view.end;
                    } else {
                      const _Some = _bind;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _tmp$4 = view.str;
                    const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$5;
                    if (_bind$2 === undefined) {
                      _tmp$5 = view.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _tmp$7 = view.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$8;
                    if (_bind$3 === undefined) {
                      _tmp$8 = view.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _tmp$10 = view.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$4 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _tmp$13 = view.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$14;
                    if (_bind$5 === undefined) {
                      _tmp$14 = view.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$6 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new Result$Ok$19$({ _0: 16, _1: rest$3, _2: true });
        }
        return new Result$Ok$19$({ _0: 8, _1: rest$2, _2: true });
      }
      return new Result$Ok$19$({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new Result$Ok$19$({ _0: base, _1: view, _2: false }) : moonbitlang$core$strconv$$base_err$64$();
  }
}
function moonbitlang$core$strconv$$range_err$1$() {
  return new Result$Err$20$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$range_err$10$() {
  return new Result$Err$11$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$syntax_err$7$() {
  return new Result$Err$21$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$10$() {
  return new Result$Err$11$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$1$() {
  return new Result$Err$20$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$65$() {
  return new Result$Err$22$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$4$() {
  return new Result$Err$23$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$66$() {
  return new Result$Err$24$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$overflow_threshold(base, neg) {
  return !neg ? (base === 10 ? moonbitlang$core$builtin$$Add$add$10$(moonbitlang$core$builtin$$Div$div$10$($9223372036854775807L, $10L), $1L) : base === 16 ? moonbitlang$core$builtin$$Add$add$10$(moonbitlang$core$builtin$$Div$div$10$($9223372036854775807L, $16L), $1L) : moonbitlang$core$builtin$$Add$add$10$(moonbitlang$core$builtin$$Div$div$10$($9223372036854775807L, moonbitlang$core$int$$Int$to_int64(base)), $1L)) : base === 10 ? moonbitlang$core$builtin$$Div$div$10$($_9223372036854775808L, $10L) : base === 16 ? moonbitlang$core$builtin$$Div$div$10$($_9223372036854775808L, $16L) : moonbitlang$core$builtin$$Div$div$10$($_9223372036854775808L, moonbitlang$core$int$$Int$to_int64(base));
}
function moonbitlang$core$strconv$$parse_int64$46$inner(str, base) {
  if (moonbitlang$core$builtin$$op_notequal$4$(str, { str: moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$610, start: 0, end: moonbitlang$core$strconv$$parse_int64$46$inner$46$42$bind$124$610.length })) {
    let _bind;
    let rest;
    _L: {
      _L$2: {
        const _bind$2 = moonbitlang$core$string$$StringView$view$46$inner(str, 0, undefined);
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 0, _bind$2.start, _bind$2.end));
          switch (_x) {
            case 43: {
              const _tmp = _bind$2.str;
              const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$2;
              if (_bind$3 === undefined) {
                _tmp$2 = _bind$2.end;
              } else {
                const _Some = _bind$3;
                _tmp$2 = _Some;
              }
              const _tmp$3 = _tmp$2;
              const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$2.end };
              _bind = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _tmp$4 = _bind$2.str;
              const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$5;
              if (_bind$4 === undefined) {
                _tmp$5 = _bind$2.end;
              } else {
                const _Some = _bind$4;
                _tmp$5 = _Some;
              }
              const _tmp$6 = _tmp$5;
              const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind$2.end };
              _bind = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest = _bind$2;
          break _L$2;
        }
        break _L;
      }
      _bind = { _0: false, _1: rest };
    }
    const _neg = _bind._0;
    const _rest = _bind._1;
    const _bind$2 = moonbitlang$core$strconv$$check_and_consume_base(_rest, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _num_base = _bind$3._0;
    const _rest$2 = _bind$3._1;
    const _allow_underscore = _bind$3._2;
    const overflow_threshold = moonbitlang$core$strconv$$overflow_threshold(_num_base, _neg);
    let has_digit;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_rest$2.str, 1, _rest$2.start, _rest$2.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest$2.str, 0, _rest$2.start, _rest$2.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(_rest$2.str, 2, _rest$2.start, _rest$2.end)) {
              if (_x === 95) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_rest$2.str, 1, _rest$2.start, _rest$2.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest$2;
      let _tmp$3 = $0L;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const _param_0 = _tmp$2;
        const _param_1 = _tmp$3;
        const _param_2 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param_0.str, 1, _param_0.start, _param_0.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
            if (_x === 95) {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$10$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            } else {
              const _tmp$5 = _param_0.str;
              const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$6;
              if (_bind$4 === undefined) {
                _tmp$6 = _param_0.end;
              } else {
                const _Some = _bind$4;
                _tmp$6 = _Some;
              }
              const _tmp$7 = _tmp$6;
              const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
              acc = _param_1;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param_0.str, 1, _param_0.start, _param_0.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
              if (_x === 95) {
                if (_param_2 === false) {
                  const _bind$4 = moonbitlang$core$strconv$$syntax_err$10$();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$4;
                  }
                } else {
                  const _tmp$5 = _param_0.str;
                  const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
                  let _tmp$6;
                  if (_bind$4 === undefined) {
                    _tmp$6 = _param_0.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$6 = _Some;
                  }
                  const _tmp$7 = _tmp$6;
                  const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
                  _tmp$2 = _x$2;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _tmp$5 = _param_0.str;
                const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
                let _tmp$6;
                if (_bind$4 === undefined) {
                  _tmp$6 = _param_0.end;
                } else {
                  const _Some = _bind$4;
                  _tmp$6 = _Some;
                }
                const _tmp$7 = _tmp$6;
                const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param_0.end };
                acc = _param_1;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp = _param_1;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$7$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
        if (d < _num_base) {
          if (_neg) {
            if (moonbitlang$core$builtin$$op_ge$10$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Sub$sub$10$(moonbitlang$core$builtin$$Mul$mul$10$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_le$10$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$10$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$10$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          } else {
            if (moonbitlang$core$builtin$$op_lt$10$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Add$add$10$(moonbitlang$core$builtin$$Mul$mul$10$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_ge$10$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$10$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$10$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          }
        } else {
          const _bind$4 = moonbitlang$core$strconv$$syntax_err$10$();
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$4;
          }
        }
      }
      return new Result$Ok$11$(_tmp);
    } else {
      return moonbitlang$core$strconv$$syntax_err$10$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$10$();
  }
}
function moonbitlang$core$strconv$$parse_int$46$inner(str, base) {
  const _bind = moonbitlang$core$strconv$$parse_int64$46$inner(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (moonbitlang$core$builtin$$op_lt$10$(n, moonbitlang$core$int$$Int$to_int64(-2147483648)) || moonbitlang$core$builtin$$op_gt$10$(n, moonbitlang$core$int$$Int$to_int64(2147483647))) {
    const _bind$2 = moonbitlang$core$strconv$$range_err$1$();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new Result$Ok$21$(moonbitlang$core$int64$$Int64$to_int(n));
}
function moonbitlang$core$strconv$$check_underscore(str) {
  let rest;
  if (moonbitlang$core$string$$String$char_length_ge$46$inner(str.str, 1, str.start, str.end)) {
    const _x = moonbitlang$core$string$$String$unsafe_char_at(str.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 0, str.start, str.end));
    switch (_x) {
      case 43: {
        const _tmp = str.str;
        const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 1, str.start, str.end);
        let _tmp$2;
        if (_bind === undefined) {
          _tmp$2 = str.end;
        } else {
          const _Some = _bind;
          _tmp$2 = _Some;
        }
        const _tmp$3 = _tmp$2;
        const _x$2 = { str: _tmp, start: _tmp$3, end: str.end };
        rest = _x$2;
        break;
      }
      case 45: {
        const _tmp$4 = str.str;
        const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 1, str.start, str.end);
        let _tmp$5;
        if (_bind$2 === undefined) {
          _tmp$5 = str.end;
        } else {
          const _Some = _bind$2;
          _tmp$5 = _Some;
        }
        const _tmp$6 = _tmp$5;
        const _x$3 = { str: _tmp$4, start: _tmp$6, end: str.end };
        rest = _x$3;
        break;
      }
      default: {
        rest = str;
      }
    }
  } else {
    rest = str;
  }
  let _bind;
  let rest$2;
  _L: {
    _L$2: {
      let rest$3;
      _L$3: {
        _L$4: {
          let rest$4;
          _L$5: {
            _L$6: {
              let rest$5;
              _L$7: {
                if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest.str, 2, rest.start, rest.end)) {
                  const _x = moonbitlang$core$string$$String$unsafe_char_at(rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 0, rest.start, rest.end));
                  if (_x === 48) {
                    const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(rest.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 1, rest.start, rest.end));
                    switch (_x$2) {
                      case 120: {
                        const _tmp = rest.str;
                        const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$2;
                        if (_bind$2 === undefined) {
                          _tmp$2 = rest.end;
                        } else {
                          const _Some = _bind$2;
                          _tmp$2 = _Some;
                        }
                        const _tmp$3 = _tmp$2;
                        const _x$3 = { str: _tmp, start: _tmp$3, end: rest.end };
                        rest$5 = _x$3;
                        break _L$7;
                      }
                      case 88: {
                        const _tmp$4 = rest.str;
                        const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$5;
                        if (_bind$3 === undefined) {
                          _tmp$5 = rest.end;
                        } else {
                          const _Some = _bind$3;
                          _tmp$5 = _Some;
                        }
                        const _tmp$6 = _tmp$5;
                        const _x$4 = { str: _tmp$4, start: _tmp$6, end: rest.end };
                        rest$5 = _x$4;
                        break _L$7;
                      }
                      case 111: {
                        const _tmp$7 = rest.str;
                        const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$8;
                        if (_bind$4 === undefined) {
                          _tmp$8 = rest.end;
                        } else {
                          const _Some = _bind$4;
                          _tmp$8 = _Some;
                        }
                        const _tmp$9 = _tmp$8;
                        const _x$5 = { str: _tmp$7, start: _tmp$9, end: rest.end };
                        rest$4 = _x$5;
                        break _L$6;
                      }
                      case 79: {
                        const _tmp$10 = rest.str;
                        const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$11;
                        if (_bind$5 === undefined) {
                          _tmp$11 = rest.end;
                        } else {
                          const _Some = _bind$5;
                          _tmp$11 = _Some;
                        }
                        const _tmp$12 = _tmp$11;
                        const _x$6 = { str: _tmp$10, start: _tmp$12, end: rest.end };
                        rest$4 = _x$6;
                        break _L$6;
                      }
                      case 98: {
                        const _tmp$13 = rest.str;
                        const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$14;
                        if (_bind$6 === undefined) {
                          _tmp$14 = rest.end;
                        } else {
                          const _Some = _bind$6;
                          _tmp$14 = _Some;
                        }
                        const _tmp$15 = _tmp$14;
                        const _x$7 = { str: _tmp$13, start: _tmp$15, end: rest.end };
                        rest$3 = _x$7;
                        break _L$4;
                      }
                      case 66: {
                        const _tmp$16 = rest.str;
                        const _bind$7 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest.str, 2, rest.start, rest.end);
                        let _tmp$17;
                        if (_bind$7 === undefined) {
                          _tmp$17 = rest.end;
                        } else {
                          const _Some = _bind$7;
                          _tmp$17 = _Some;
                        }
                        const _tmp$18 = _tmp$17;
                        const _x$8 = { str: _tmp$16, start: _tmp$18, end: rest.end };
                        rest$3 = _x$8;
                        break _L$4;
                      }
                      default: {
                        rest$2 = rest;
                        break _L$2;
                      }
                    }
                  } else {
                    rest$2 = rest;
                    break _L$2;
                  }
                } else {
                  rest$2 = rest;
                  break _L$2;
                }
              }
              _bind = { _0: rest$5, _1: true, _2: true };
              break _L$5;
            }
            _bind = { _0: rest$4, _1: true, _2: false };
          }
          break _L$3;
        }
        _bind = { _0: rest$3, _1: true, _2: false };
      }
      break _L;
    }
    _bind = { _0: rest$2, _1: false, _2: false };
  }
  const _rest = _bind._0;
  const _allow_underscore = _bind._1;
  const _hex = _bind._2;
  let _tmp = _rest;
  let _tmp$2 = _allow_underscore;
  let _tmp$3 = false;
  while (true) {
    const _param_0 = _tmp;
    const _param_1 = _tmp$2;
    const _param_2 = _tmp$3;
    let rest$3;
    let c;
    let follow_underscore;
    _L$2: {
      if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param_0.str, 0, _param_0.start, _param_0.end)) {
        return true;
      } else {
        if (moonbitlang$core$string$$String$char_length_eq$46$inner(_param_0.str, 1, _param_0.start, _param_0.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
          if (_x === 95) {
            return false;
          } else {
            const _tmp$4 = _param_0.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = _param_0.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param_0.end };
            rest$3 = _x$2;
            c = _x;
            follow_underscore = _param_2;
            break _L$2;
          }
        } else {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_param_0.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 0, _param_0.start, _param_0.end));
          if (_x === 95) {
            if (_param_1 === false) {
              return false;
            } else {
              const _tmp$4 = _param_0.str;
              const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$5;
              if (_bind$2 === undefined) {
                _tmp$5 = _param_0.end;
              } else {
                const _Some = _bind$2;
                _tmp$5 = _Some;
              }
              const _tmp$6 = _tmp$5;
              const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param_0.end };
              _tmp = _x$2;
              _tmp$2 = false;
              _tmp$3 = true;
              continue;
            }
          } else {
            const _tmp$4 = _param_0.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param_0.str, 1, _param_0.start, _param_0.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = _param_0.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$2 = { str: _tmp$4, start: _tmp$6, end: _param_0.end };
            rest$3 = _x$2;
            c = _x;
            follow_underscore = _param_2;
            break _L$2;
          }
        }
      }
    }
    if (c >= 48 && c <= 57 ? true : _hex && (c >= 97 && c <= 102 ? true : c >= 65 && c <= 70)) {
      _tmp = rest$3;
      _tmp$2 = true;
      _tmp$3 = false;
      continue;
    } else {
      if (follow_underscore) {
        return false;
      } else {
        _tmp = rest$3;
        _tmp$2 = false;
        _tmp$3 = false;
        continue;
      }
    }
  }
}
function moonbitlang$core$strconv$$Decimal$new_priv() {
  return { digits: $makebytes(800, moonbitlang$core$builtin$$Default$default$29$()), digits_num: 0, decimal_point: 0, negative: false, truncated: false };
}
function moonbitlang$core$strconv$$Decimal$trim(self) {
  while (true) {
    let _tmp;
    if (self.digits_num > 0) {
      const _tmp$2 = self.digits;
      const _tmp$3 = self.digits_num - 1 | 0;
      $bound_check(_tmp$2, _tmp$3);
      _tmp = moonbitlang$core$builtin$$Eq$equal$29$(_tmp$2[_tmp$3], 0);
    } else {
      _tmp = false;
    }
    if (_tmp) {
      self.digits_num = self.digits_num - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (self.digits_num === 0) {
    self.decimal_point = 0;
    return;
  } else {
    return;
  }
}
function moonbitlang$core$strconv$$parse_decimal_from_view(str) {
  const d = moonbitlang$core$strconv$$Decimal$new_priv();
  let has_dp = false;
  let has_digits = false;
  let rest;
  _L: {
    _L$2: {
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(str.str, 1, str.start, str.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(str.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 0, str.start, str.end));
        switch (_x) {
          case 45: {
            const _tmp = str.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 1, str.start, str.end);
            let _tmp$2;
            if (_bind === undefined) {
              _tmp$2 = str.end;
            } else {
              const _Some = _bind;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: str.end };
            d.negative = true;
            rest = _x$2;
            break;
          }
          case 43: {
            const _tmp$4 = str.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(str.str, 1, str.start, str.end);
            let _tmp$5;
            if (_bind$2 === undefined) {
              _tmp$5 = str.end;
            } else {
              const _Some = _bind$2;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            rest = { str: _tmp$4, start: _tmp$6, end: str.end };
            break;
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    rest = str;
  }
  let rest$2;
  let _tmp = rest;
  while (true) {
    const _param = _tmp;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param.str, 1, _param.start, _param.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 0, _param.start, _param.end));
      if (_x === 95) {
        const _tmp$2 = _param.str;
        const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
        let _tmp$3;
        if (_bind === undefined) {
          _tmp$3 = _param.end;
        } else {
          const _Some = _bind;
          _tmp$3 = _Some;
        }
        const _tmp$4 = _tmp$3;
        const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
        _tmp = _x$2;
        continue;
      } else {
        if (_x === 46) {
          const _tmp$2 = _param.str;
          const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _tmp$4 = _tmp$3;
          const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
          if (!has_dp) {
            has_dp = true;
            d.decimal_point = d.digits_num;
            _tmp = _x$2;
            continue;
          } else {
            const _bind$2 = moonbitlang$core$strconv$$syntax_err$4$();
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              rest$2 = _ok._0;
              break;
            } else {
              return _bind$2;
            }
          }
        } else {
          if (_x >= 48 && _x <= 57) {
            const _tmp$2 = _param.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = _param.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _tmp$4 = _tmp$3;
            const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
            has_digits = true;
            if (_x === 48 && d.digits_num === 0) {
              d.decimal_point = d.decimal_point - 1 | 0;
              _tmp = _x$2;
              continue;
            }
            if (d.digits_num < d.digits.length) {
              const _tmp$5 = d.digits;
              const _tmp$6 = d.digits_num;
              $bound_check(_tmp$5, _tmp$6);
              _tmp$5[_tmp$6] = (_x - 48 | 0) & 255;
              d.digits_num = d.digits_num + 1 | 0;
            } else {
              if (_x !== 48) {
                d.truncated = true;
              }
            }
            _tmp = _x$2;
            continue;
          } else {
            rest$2 = _param;
            break;
          }
        }
      }
    } else {
      rest$2 = _param;
      break;
    }
  }
  if (has_digits) {
    if (!has_dp) {
      d.decimal_point = d.digits_num;
    }
    let rest$3;
    let rest$4;
    _L$2: {
      _L$3: {
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest$2.str, 1, rest$2.start, rest$2.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 0, rest$2.start, rest$2.end));
          switch (_x) {
            case 101: {
              const _tmp$2 = rest$2.str;
              const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$3;
              if (_bind === undefined) {
                _tmp$3 = rest$2.end;
              } else {
                const _Some = _bind;
                _tmp$3 = _Some;
              }
              const _tmp$4 = _tmp$3;
              const _x$2 = { str: _tmp$2, start: _tmp$4, end: rest$2.end };
              rest$4 = _x$2;
              break _L$3;
            }
            case 69: {
              const _tmp$5 = rest$2.str;
              const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 1, rest$2.start, rest$2.end);
              let _tmp$6;
              if (_bind$2 === undefined) {
                _tmp$6 = rest$2.end;
              } else {
                const _Some = _bind$2;
                _tmp$6 = _Some;
              }
              const _tmp$7 = _tmp$6;
              const _x$3 = { str: _tmp$5, start: _tmp$7, end: rest$2.end };
              rest$4 = _x$3;
              break _L$3;
            }
            default: {
              rest$3 = rest$2;
            }
          }
        } else {
          rest$3 = rest$2;
        }
        break _L$2;
      }
      let exp_sign = 1;
      let rest$5;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest$4.str, 1, rest$4.start, rest$4.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$4.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$4.str, 0, rest$4.start, rest$4.end));
        switch (_x) {
          case 43: {
            const _tmp$2 = rest$4.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = rest$4.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _tmp$4 = _tmp$3;
            rest$5 = { str: _tmp$2, start: _tmp$4, end: rest$4.end };
            break;
          }
          case 45: {
            const _tmp$5 = rest$4.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$4.str, 1, rest$4.start, rest$4.end);
            let _tmp$6;
            if (_bind$2 === undefined) {
              _tmp$6 = rest$4.end;
            } else {
              const _Some = _bind$2;
              _tmp$6 = _Some;
            }
            const _tmp$7 = _tmp$6;
            const _x$2 = { str: _tmp$5, start: _tmp$7, end: rest$4.end };
            exp_sign = -1;
            rest$5 = _x$2;
            break;
          }
          default: {
            rest$5 = rest$4;
          }
        }
      } else {
        rest$5 = rest$4;
      }
      _L$4: {
        _L$5: {
          if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest$5.str, 1, rest$5.start, rest$5.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$5.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$5.str, 0, rest$5.start, rest$5.end));
            if (_x >= 48 && _x <= 57) {
              let exp = 0;
              let rest$6;
              let _tmp$2 = rest$5;
              while (true) {
                const _param = _tmp$2;
                if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param.str, 1, _param.start, _param.end)) {
                  const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 0, _param.start, _param.end));
                  if (_x$2 === 95) {
                    const _tmp$3 = _param.str;
                    const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
                    let _tmp$4;
                    if (_bind === undefined) {
                      _tmp$4 = _param.end;
                    } else {
                      const _Some = _bind;
                      _tmp$4 = _Some;
                    }
                    const _tmp$5 = _tmp$4;
                    const _x$3 = { str: _tmp$3, start: _tmp$5, end: _param.end };
                    _tmp$2 = _x$3;
                    continue;
                  } else {
                    if (_x$2 >= 48 && _x$2 <= 57) {
                      const _tmp$3 = _param.str;
                      const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
                      let _tmp$4;
                      if (_bind === undefined) {
                        _tmp$4 = _param.end;
                      } else {
                        const _Some = _bind;
                        _tmp$4 = _Some;
                      }
                      const _tmp$5 = _tmp$4;
                      const _x$3 = { str: _tmp$3, start: _tmp$5, end: _param.end };
                      exp = (Math.imul(exp, 10) | 0) + (_x$2 - 48 | 0) | 0;
                      _tmp$2 = _x$3;
                      continue;
                    } else {
                      rest$6 = _param;
                      break;
                    }
                  }
                } else {
                  rest$6 = _param;
                  break;
                }
              }
              d.decimal_point = d.decimal_point + (Math.imul(exp_sign, exp) | 0) | 0;
              rest$3 = rest$6;
            } else {
              break _L$5;
            }
          } else {
            break _L$5;
          }
          break _L$4;
        }
        const _bind = moonbitlang$core$strconv$$syntax_err$4$();
        if (_bind.$tag === 1) {
          const _ok = _bind;
          rest$3 = _ok._0;
        } else {
          return _bind;
        }
      }
    }
    if (moonbitlang$core$string$$String$char_length_eq$46$inner(rest$3.str, 0, rest$3.start, rest$3.end)) {
      moonbitlang$core$strconv$$Decimal$trim(d);
      return new Result$Ok$24$(d);
    } else {
      return moonbitlang$core$strconv$$syntax_err$66$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$66$();
  }
}
function moonbitlang$core$strconv$$parse_decimal_priv(str) {
  return moonbitlang$core$strconv$$parse_decimal_from_view(str);
}
function moonbitlang$core$strconv$$parse_inf_nan(s) {
  let s$2 = s;
  let pos = true;
  let len = 0;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind = s$2;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
        switch (_x) {
          case 45: {
            const _tmp = _bind.str;
            const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
            let _tmp$2;
            if (_bind$2 === undefined) {
              _tmp$2 = _bind.end;
            } else {
              const _Some = _bind$2;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: _bind.end };
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 43: {
            const _tmp$4 = _bind.str;
            const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
            let _tmp$5;
            if (_bind$3 === undefined) {
              _tmp$5 = _bind.end;
            } else {
              const _Some = _bind$3;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind.end };
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    pos = ch === 43;
    s$2 = rest;
    len = len + 1 | 0;
  }
  _L$2: {
    _L$3: {
      const _bind = s$2;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 3, _bind.start, _bind.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
        switch (_x) {
          case 110: {
            const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end));
            switch (_x$2) {
              case 97: {
                const _x$3 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 2, _bind.start, _bind.end));
                switch (_x$3) {
                  case 110: {
                    break _L$3;
                  }
                  case 78: {
                    break _L$3;
                  }
                  default: {
                    break _L$2;
                  }
                }
              }
              case 65: {
                const _x$4 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 2, _bind.start, _bind.end));
                switch (_x$4) {
                  case 110: {
                    break _L$3;
                  }
                  case 78: {
                    break _L$3;
                  }
                  default: {
                    break _L$2;
                  }
                }
              }
              default: {
                break _L$2;
              }
            }
          }
          case 78: {
            const _x$5 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end));
            switch (_x$5) {
              case 97: {
                const _x$6 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 2, _bind.start, _bind.end));
                switch (_x$6) {
                  case 110: {
                    break _L$3;
                  }
                  case 78: {
                    break _L$3;
                  }
                  default: {
                    break _L$2;
                  }
                }
              }
              case 65: {
                const _x$7 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 2, _bind.start, _bind.end));
                switch (_x$7) {
                  case 110: {
                    break _L$3;
                  }
                  case 78: {
                    break _L$3;
                  }
                  default: {
                    break _L$2;
                  }
                }
              }
              default: {
                break _L$2;
              }
            }
          }
          default: {
            break _L$2;
          }
        }
      } else {
        break _L$2;
      }
    }
    return { _0: moonbitlang$core$double$$not_a_number, _1: len + 3 | 0 };
  }
  _L$3: {
    let rest$2;
    _L$4: {
      const _bind = s$2;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 3, _bind.start, _bind.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
        switch (_x) {
          case 105: {
            const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end));
            switch (_x$2) {
              case 110: {
                const _x$3 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 2, _bind.start, _bind.end));
                switch (_x$3) {
                  case 102: {
                    const _tmp = _bind.str;
                    const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 3, _bind.start, _bind.end);
                    let _tmp$2;
                    if (_bind$2 === undefined) {
                      _tmp$2 = _bind.end;
                    } else {
                      const _Some = _bind$2;
                      _tmp$2 = _Some;
                    }
                    const _tmp$3 = _tmp$2;
                    const _x$4 = { str: _tmp, start: _tmp$3, end: _bind.end };
                    rest$2 = _x$4;
                    break _L$4;
                  }
                  case 70: {
                    const _tmp$4 = _bind.str;
                    const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 3, _bind.start, _bind.end);
                    let _tmp$5;
                    if (_bind$3 === undefined) {
                      _tmp$5 = _bind.end;
                    } else {
                      const _Some = _bind$3;
                      _tmp$5 = _Some;
                    }
                    const _tmp$6 = _tmp$5;
                    const _x$5 = { str: _tmp$4, start: _tmp$6, end: _bind.end };
                    rest$2 = _x$5;
                    break _L$4;
                  }
                  default: {
                    break _L$3;
                  }
                }
              }
              case 78: {
                const _x$6 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 2, _bind.start, _bind.end));
                switch (_x$6) {
                  case 102: {
                    const _tmp$7 = _bind.str;
                    const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 3, _bind.start, _bind.end);
                    let _tmp$8;
                    if (_bind$4 === undefined) {
                      _tmp$8 = _bind.end;
                    } else {
                      const _Some = _bind$4;
                      _tmp$8 = _Some;
                    }
                    const _tmp$9 = _tmp$8;
                    const _x$7 = { str: _tmp$7, start: _tmp$9, end: _bind.end };
                    rest$2 = _x$7;
                    break _L$4;
                  }
                  case 70: {
                    const _tmp$10 = _bind.str;
                    const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 3, _bind.start, _bind.end);
                    let _tmp$11;
                    if (_bind$5 === undefined) {
                      _tmp$11 = _bind.end;
                    } else {
                      const _Some = _bind$5;
                      _tmp$11 = _Some;
                    }
                    const _tmp$12 = _tmp$11;
                    const _x$8 = { str: _tmp$10, start: _tmp$12, end: _bind.end };
                    rest$2 = _x$8;
                    break _L$4;
                  }
                  default: {
                    break _L$3;
                  }
                }
              }
              default: {
                break _L$3;
              }
            }
          }
          case 73: {
            const _x$9 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end));
            switch (_x$9) {
              case 110: {
                const _x$10 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 2, _bind.start, _bind.end));
                switch (_x$10) {
                  case 102: {
                    const _tmp$13 = _bind.str;
                    const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 3, _bind.start, _bind.end);
                    let _tmp$14;
                    if (_bind$6 === undefined) {
                      _tmp$14 = _bind.end;
                    } else {
                      const _Some = _bind$6;
                      _tmp$14 = _Some;
                    }
                    const _tmp$15 = _tmp$14;
                    const _x$11 = { str: _tmp$13, start: _tmp$15, end: _bind.end };
                    rest$2 = _x$11;
                    break _L$4;
                  }
                  case 70: {
                    const _tmp$16 = _bind.str;
                    const _bind$7 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 3, _bind.start, _bind.end);
                    let _tmp$17;
                    if (_bind$7 === undefined) {
                      _tmp$17 = _bind.end;
                    } else {
                      const _Some = _bind$7;
                      _tmp$17 = _Some;
                    }
                    const _tmp$18 = _tmp$17;
                    const _x$12 = { str: _tmp$16, start: _tmp$18, end: _bind.end };
                    rest$2 = _x$12;
                    break _L$4;
                  }
                  default: {
                    break _L$3;
                  }
                }
              }
              case 78: {
                const _x$13 = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 2, _bind.start, _bind.end));
                switch (_x$13) {
                  case 102: {
                    const _tmp$19 = _bind.str;
                    const _bind$8 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 3, _bind.start, _bind.end);
                    let _tmp$20;
                    if (_bind$8 === undefined) {
                      _tmp$20 = _bind.end;
                    } else {
                      const _Some = _bind$8;
                      _tmp$20 = _Some;
                    }
                    const _tmp$21 = _tmp$20;
                    const _x$14 = { str: _tmp$19, start: _tmp$21, end: _bind.end };
                    rest$2 = _x$14;
                    break _L$4;
                  }
                  case 70: {
                    const _tmp$22 = _bind.str;
                    const _bind$9 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 3, _bind.start, _bind.end);
                    let _tmp$23;
                    if (_bind$9 === undefined) {
                      _tmp$23 = _bind.end;
                    } else {
                      const _Some = _bind$9;
                      _tmp$23 = _Some;
                    }
                    const _tmp$24 = _tmp$23;
                    const _x$15 = { str: _tmp$22, start: _tmp$24, end: _bind.end };
                    rest$2 = _x$15;
                    break _L$4;
                  }
                  default: {
                    break _L$3;
                  }
                }
              }
              default: {
                break _L$3;
              }
            }
          }
          default: {
            break _L$3;
          }
        }
      } else {
        break _L$3;
      }
    }
    len = len + 3 | 0;
    _L$5: {
      _L$6: {
        if (moonbitlang$core$string$$String$char_length_ge$46$inner(rest$2.str, 5, rest$2.start, rest$2.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 0, rest$2.start, rest$2.end));
          switch (_x) {
            case 105: {
              const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 1, rest$2.start, rest$2.end));
              switch (_x$2) {
                case 110: {
                  const _x$3 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 2, rest$2.start, rest$2.end));
                  switch (_x$3) {
                    case 105: {
                      const _x$4 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 3, rest$2.start, rest$2.end));
                      switch (_x$4) {
                        case 116: {
                          const _x$5 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$5) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                        case 84: {
                          const _x$6 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$6) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                    case 73: {
                      const _x$7 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 3, rest$2.start, rest$2.end));
                      switch (_x$7) {
                        case 116: {
                          const _x$8 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$8) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                        case 84: {
                          const _x$9 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$9) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                  }
                  break;
                }
                case 78: {
                  const _x$10 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 2, rest$2.start, rest$2.end));
                  switch (_x$10) {
                    case 105: {
                      const _x$11 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 3, rest$2.start, rest$2.end));
                      switch (_x$11) {
                        case 116: {
                          const _x$12 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$12) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                        case 84: {
                          const _x$13 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$13) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                    case 73: {
                      const _x$14 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 3, rest$2.start, rest$2.end));
                      switch (_x$14) {
                        case 116: {
                          const _x$15 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$15) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                        case 84: {
                          const _x$16 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$16) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                  }
                  break;
                }
              }
              break;
            }
            case 73: {
              const _x$17 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 1, rest$2.start, rest$2.end));
              switch (_x$17) {
                case 110: {
                  const _x$18 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 2, rest$2.start, rest$2.end));
                  switch (_x$18) {
                    case 105: {
                      const _x$19 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 3, rest$2.start, rest$2.end));
                      switch (_x$19) {
                        case 116: {
                          const _x$20 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$20) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                        case 84: {
                          const _x$21 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$21) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                    case 73: {
                      const _x$22 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 3, rest$2.start, rest$2.end));
                      switch (_x$22) {
                        case 116: {
                          const _x$23 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$23) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                        case 84: {
                          const _x$24 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$24) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                  }
                  break;
                }
                case 78: {
                  const _x$25 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 2, rest$2.start, rest$2.end));
                  switch (_x$25) {
                    case 105: {
                      const _x$26 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 3, rest$2.start, rest$2.end));
                      switch (_x$26) {
                        case 116: {
                          const _x$27 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$27) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                        case 84: {
                          const _x$28 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$28) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                    case 73: {
                      const _x$29 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 3, rest$2.start, rest$2.end));
                      switch (_x$29) {
                        case 116: {
                          const _x$30 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$30) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                        case 84: {
                          const _x$31 = moonbitlang$core$string$$String$unsafe_char_at(rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(rest$2.str, 4, rest$2.start, rest$2.end));
                          switch (_x$31) {
                            case 121: {
                              break _L$6;
                            }
                            case 89: {
                              break _L$6;
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                  }
                  break;
                }
              }
              break;
            }
          }
        }
        break _L$5;
      }
      len = len + 5 | 0;
    }
    return pos ? { _0: moonbitlang$core$double$$infinity, _1: len } : { _0: moonbitlang$core$double$$neg_infinity, _1: len };
  }
  return undefined;
}
function $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$fold_digits$0$(self, init, f) {
  let ret = init;
  let len = 0;
  let str = self;
  while (true) {
    const _bind = str;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
      const _ch = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
      const _tmp = _bind.str;
      const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
      let _tmp$2;
      if (_bind$2 === undefined) {
        _tmp$2 = _bind.end;
      } else {
        const _Some = _bind$2;
        _tmp$2 = _Some;
      }
      const _tmp$3 = _tmp$2;
      const _x = { str: _tmp, start: _tmp$3, end: _bind.end };
      if (_ch >= 48 && _ch <= 57) {
        len = len + 1 | 0;
        ret = f(_ch - 48 | 0, ret);
      } else {
        if (_ch !== 95) {
          break;
        }
      }
      str = _x;
      continue;
    } else {
      break;
    }
  }
  return { _0: str, _1: ret, _2: len };
}
function $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$fold_digits$10$(self, init, f) {
  let ret = init;
  let len = 0;
  let str = self;
  while (true) {
    const _bind = str;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
      const _ch = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
      const _tmp = _bind.str;
      const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
      let _tmp$2;
      if (_bind$2 === undefined) {
        _tmp$2 = _bind.end;
      } else {
        const _Some = _bind$2;
        _tmp$2 = _Some;
      }
      const _tmp$3 = _tmp$2;
      const _x = { str: _tmp, start: _tmp$3, end: _bind.end };
      if (_ch >= 48 && _ch <= 57) {
        len = len + 1 | 0;
        ret = f(_ch - 48 | 0, ret);
      } else {
        if (_ch !== 95) {
          break;
        }
      }
      str = _x;
      continue;
    } else {
      break;
    }
  }
  return { _0: str, _1: ret, _2: len };
}
function moonbitlang$core$strconv$$parse_digits(s, x) {
  return $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$fold_digits$0$(s, x, (digit, acc) => moonbitlang$core$builtin$$Add$add$0$(moonbitlang$core$builtin$$Mul$mul$0$(acc, $10L), moonbitlang$core$uint64$$UInt64$extend_uint(digit)));
}
function $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$step(self, step) {
  let step$2 = step;
  let str = self;
  while (true) {
    const _bind = str;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
      const _ch = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
      const _tmp = _bind.str;
      const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
      let _tmp$2;
      if (_bind$2 === undefined) {
        _tmp$2 = _bind.end;
      } else {
        const _Some = _bind$2;
        _tmp$2 = _Some;
      }
      const _tmp$3 = _tmp$2;
      const _x = { str: _tmp, start: _tmp$3, end: _bind.end };
      if (step$2 > 0) {
        if (_ch !== 95) {
          step$2 = step$2 - 1 | 0;
        }
        str = _x;
        continue;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  return step$2 === 0 ? str : undefined;
}
function moonbitlang$core$strconv$$parse_scientific(s) {
  const _bind = $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$step(s, 1);
  let s$2;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    s$2 = _Some;
  }
  let neg_exp = false;
  let rest;
  let ch;
  _L: {
    _L$2: {
      const _bind$2 = s$2;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 0, _bind$2.start, _bind$2.end));
        switch (_x) {
          case 43: {
            const _tmp = _bind$2.str;
            const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
            let _tmp$2;
            if (_bind$3 === undefined) {
              _tmp$2 = _bind$2.end;
            } else {
              const _Some = _bind$3;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$2.end };
            rest = _x$2;
            ch = _x;
            break _L$2;
          }
          case 45: {
            const _tmp$4 = _bind$2.str;
            const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
            let _tmp$5;
            if (_bind$4 === undefined) {
              _tmp$5 = _bind$2.end;
            } else {
              const _Some = _bind$4;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind$2.end };
            rest = _x$3;
            ch = _x;
            break _L$2;
          }
        }
      }
      break _L;
    }
    neg_exp = ch === 45;
    s$2 = rest;
  }
  _L$2: {
    const _bind$2 = s$2;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 0, _bind$2.start, _bind$2.end));
      if (_x >= 48 && _x <= 57) {
        const _bind$3 = $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$fold_digits$10$(s$2, moonbitlang$core$strconv$$parse_scientific$46$exp_num$124$311, (digit, exp_num) => moonbitlang$core$builtin$$op_lt$10$(exp_num, $65536L) ? moonbitlang$core$builtin$$Add$add$10$(moonbitlang$core$builtin$$Mul$mul$10$($10L, exp_num), moonbitlang$core$int$$Int$to_int64(digit)) : exp_num);
        const _s = _bind$3._0;
        const _exp_num = _bind$3._1;
        return neg_exp ? { _0: _s, _1: moonbitlang$core$builtin$$Neg$neg$10$(_exp_num) } : { _0: _s, _1: _exp_num };
      } else {
        break _L$2;
      }
    } else {
      break _L$2;
    }
  }
  return undefined;
}
function moonbitlang$core$strconv$$try_parse_19digits(s, x) {
  let x$2 = x;
  let len = 0;
  let _tmp = s;
  while (true) {
    const _param = _tmp;
    let s$2;
    _L: {
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_param.str, 1, _param.start, _param.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 0, _param.start, _param.end));
        if (_x >= 48 && _x <= 57) {
          const _tmp$2 = _param.str;
          const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
          let _tmp$3;
          if (_bind === undefined) {
            _tmp$3 = _param.end;
          } else {
            const _Some = _bind;
            _tmp$3 = _Some;
          }
          const _tmp$4 = _tmp$3;
          const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
          if (moonbitlang$core$builtin$$op_lt$0$(x$2, moonbitlang$core$strconv$$min_19digit_int)) {
            len = len + 1 | 0;
            x$2 = moonbitlang$core$builtin$$Add$add$0$(moonbitlang$core$builtin$$Mul$mul$0$(x$2, $10L), moonbitlang$core$uint64$$UInt64$extend_uint(_x - 48 | 0));
            _tmp = _x$2;
            continue;
          } else {
            s$2 = _param;
            break _L;
          }
        } else {
          if (_x === 95) {
            const _tmp$2 = _param.str;
            const _bind = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_param.str, 1, _param.start, _param.end);
            let _tmp$3;
            if (_bind === undefined) {
              _tmp$3 = _param.end;
            } else {
              const _Some = _bind;
              _tmp$3 = _Some;
            }
            const _tmp$4 = _tmp$3;
            const _x$2 = { str: _tmp$2, start: _tmp$4, end: _param.end };
            _tmp = _x$2;
            continue;
          } else {
            s$2 = _param;
            break _L;
          }
        }
      } else {
        s$2 = _param;
        break _L;
      }
    }
    return { _0: s$2, _1: x$2, _2: len };
  }
}
function moonbitlang$core$strconv$$parse_number(s) {
  let s$2 = s;
  const start = s$2;
  let negative = false;
  _L: {
    _L$2: {
      const _bind = s$2;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
        if (_x === 45) {
          const _tmp = _bind.str;
          const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
          let _tmp$2;
          if (_bind$2 === undefined) {
            _tmp$2 = _bind.end;
          } else {
            const _Some = _bind$2;
            _tmp$2 = _Some;
          }
          const _tmp$3 = _tmp$2;
          const _x$2 = { str: _tmp, start: _tmp$3, end: _bind.end };
          negative = true;
          s$2 = _x$2;
        } else {
          break _L$2;
        }
      } else {
        break _L$2;
      }
      break _L;
    }
    const _bind = s$2;
    if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind.str, 1, _bind.start, _bind.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 0, _bind.start, _bind.end));
      if (_x === 43) {
        const _tmp = _bind.str;
        const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind.str, 1, _bind.start, _bind.end);
        let _tmp$2;
        if (_bind$2 === undefined) {
          _tmp$2 = _bind.end;
        } else {
          const _Some = _bind$2;
          _tmp$2 = _Some;
        }
        const _tmp$3 = _tmp$2;
        const _x$2 = { str: _tmp, start: _tmp$3, end: _bind.end };
        s$2 = _x$2;
      }
    }
  }
  if (moonbitlang$core$string$$StringView$is_empty(s$2)) {
    return undefined;
  }
  const _bind = moonbitlang$core$strconv$$parse_digits(s$2, $0L);
  const _s = _bind._0;
  const _mantissa = _bind._1;
  const _consumed = _bind._2;
  let mantissa = _mantissa;
  let s$3 = _s;
  let n_digits = _consumed;
  let n_after_dot = 0;
  let exponent = $0L;
  const _bind$2 = s$3;
  if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
    const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$2.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 0, _bind$2.start, _bind$2.end));
    if (_x === 46) {
      const _tmp = _bind$2.str;
      const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$2.str, 1, _bind$2.start, _bind$2.end);
      let _tmp$2;
      if (_bind$3 === undefined) {
        _tmp$2 = _bind$2.end;
      } else {
        const _Some = _bind$3;
        _tmp$2 = _Some;
      }
      const _tmp$3 = _tmp$2;
      const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$2.end };
      s$3 = _x$2;
      const _bind$4 = moonbitlang$core$strconv$$parse_digits(s$3, mantissa);
      const _new_s = _bind$4._0;
      const _new_mantissa = _bind$4._1;
      const _consumed_digit = _bind$4._2;
      s$3 = _new_s;
      mantissa = _new_mantissa;
      n_after_dot = _consumed_digit;
      exponent = moonbitlang$core$builtin$$Neg$neg$10$(moonbitlang$core$int$$Int$to_int64(n_after_dot));
    }
  }
  n_digits = n_digits + n_after_dot | 0;
  if (n_digits === 0) {
    return undefined;
  }
  _L$2: {
    _L$3: {
      const _bind$3 = s$3;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$3.str, 1, _bind$3.start, _bind$3.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$3.str, 0, _bind$3.start, _bind$3.end));
        switch (_x) {
          case 101: {
            break _L$3;
          }
          case 69: {
            break _L$3;
          }
        }
      }
      break _L$2;
    }
    const _bind$3 = moonbitlang$core$strconv$$parse_scientific(s$3);
    let _bind$4;
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      _bind$4 = _Some;
    }
    const _new_s = _bind$4._0;
    const _exp_number = _bind$4._1;
    s$3 = _new_s;
    exponent = moonbitlang$core$builtin$$Add$add$10$(exponent, _exp_number);
  }
  const len = moonbitlang$core$string$$StringView$length(start) - moonbitlang$core$string$$StringView$length(s$3) | 0;
  if (n_digits <= 19) {
    return { _0: { exponent: exponent, mantissa: mantissa, negative: negative, many_digits: false }, _1: len };
  }
  n_digits = n_digits - 19 | 0;
  let many_digits = false;
  let p = start;
  _L$3: while (true) {
    let rest;
    let ch;
    _L$4: {
      const _bind$3 = p;
      if (moonbitlang$core$string$$String$char_length_ge$46$inner(_bind$3.str, 1, _bind$3.start, _bind$3.end)) {
        const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$3.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$3.str, 0, _bind$3.start, _bind$3.end));
        switch (_x) {
          case 48: {
            const _tmp = _bind$3.str;
            const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$3.str, 1, _bind$3.start, _bind$3.end);
            let _tmp$2;
            if (_bind$4 === undefined) {
              _tmp$2 = _bind$3.end;
            } else {
              const _Some = _bind$4;
              _tmp$2 = _Some;
            }
            const _tmp$3 = _tmp$2;
            const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$3.end };
            rest = _x$2;
            ch = _x;
            break _L$4;
          }
          case 46: {
            const _tmp$4 = _bind$3.str;
            const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_bind$3.str, 1, _bind$3.start, _bind$3.end);
            let _tmp$5;
            if (_bind$5 === undefined) {
              _tmp$5 = _bind$3.end;
            } else {
              const _Some = _bind$5;
              _tmp$5 = _Some;
            }
            const _tmp$6 = _tmp$5;
            const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind$3.end };
            rest = _x$3;
            ch = _x;
            break _L$4;
          }
          default: {
            break _L$3;
          }
        }
      } else {
        break;
      }
    }
    const _tmp = n_digits;
    if (2 === 0) {
      $panic();
    }
    n_digits = _tmp - ((ch - 46 | 0) / 2 | 0) | 0;
    p = rest;
    continue;
  }
  let mantissa$2 = mantissa;
  if (n_digits > 0) {
    many_digits = true;
    mantissa$2 = $0L;
    const _bind$3 = moonbitlang$core$strconv$$try_parse_19digits(start, mantissa$2);
    const _s$2 = _bind$3._0;
    const _new_mantissa = _bind$3._1;
    const _consumed_digit = _bind$3._2;
    mantissa$2 = _new_mantissa;
    let _tmp;
    if (moonbitlang$core$builtin$$op_ge$0$(mantissa$2, moonbitlang$core$strconv$$min_19digit_int)) {
      _tmp = _consumed_digit;
    } else {
      const _bind$4 = $moonbitlang$core$strconv$$moonbitlang$core$string$$StringView$step(_s$2, 1);
      let s$4;
      if (_bind$4 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$4;
        s$4 = _Some;
      }
      const _bind$5 = moonbitlang$core$strconv$$try_parse_19digits(s$4, mantissa$2);
      const _new_mantissa$2 = _bind$5._1;
      const _consumed_digit$2 = _bind$5._2;
      mantissa$2 = _new_mantissa$2;
      _tmp = _consumed_digit$2;
    }
    exponent = moonbitlang$core$int$$Int$to_int64(_tmp);
    exponent = moonbitlang$core$builtin$$Add$add$10$(exponent, moonbitlang$core$strconv$$parse_number$46$exp_number$124$290);
  }
  return { _0: { exponent: exponent, mantissa: mantissa$2, negative: negative, many_digits: many_digits }, _1: len };
}
function moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, negative) {
  const biased_exp = exponent - moonbitlang$core$strconv$$double_info.bias | 0;
  let bits = moonbitlang$core$builtin$$BitAnd$land$10$(mantissa, moonbitlang$core$builtin$$Sub$sub$10$(moonbitlang$core$builtin$$Shl$shl$10$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits), $1L));
  const exp_bits = moonbitlang$core$int$$Int$to_int64(biased_exp & ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0));
  bits = moonbitlang$core$builtin$$BitOr$lor$10$(bits, moonbitlang$core$builtin$$Shl$shl$10$(exp_bits, moonbitlang$core$strconv$$double_info.mantissa_bits));
  if (negative) {
    bits = moonbitlang$core$builtin$$BitOr$lor$10$(bits, moonbitlang$core$builtin$$Shl$shl$10$(moonbitlang$core$builtin$$Shl$shl$10$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits), moonbitlang$core$strconv$$double_info.exponent_bits));
  }
  return bits;
}
function moonbitlang$core$strconv$$Decimal$should_round_up(self, d) {
  if (d < 0 || d >= self.digits_num) {
    return false;
  }
  let _tmp;
  const _tmp$2 = self.digits;
  $bound_check(_tmp$2, d);
  if (_tmp$2[d] === 5) {
    _tmp = (d + 1 | 0) === self.digits_num;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    if (self.truncated) {
      return true;
    }
    let _tmp$3;
    if (d > 0) {
      const _tmp$4 = self.digits;
      const _tmp$5 = d - 1 | 0;
      $bound_check(_tmp$4, _tmp$5);
      if (2 === 0) {
        $panic();
      }
      _tmp$3 = (_tmp$4[_tmp$5] % 2 | 0) !== 0;
    } else {
      _tmp$3 = false;
    }
    return _tmp$3;
  }
  const _tmp$3 = self.digits;
  $bound_check(_tmp$3, d);
  return _tmp$3[d] >= 5;
}
function moonbitlang$core$strconv$$Decimal$rounded_integer(self) {
  if (self.decimal_point > 20) {
    return $_1L;
  }
  let n = $0L;
  let i = 0;
  while (true) {
    if (i < self.decimal_point && i < self.digits_num) {
      const _tmp = moonbitlang$core$builtin$$Mul$mul$10$(n, $10L);
      const _tmp$2 = self.digits;
      const _tmp$3 = i;
      $bound_check(_tmp$2, _tmp$3);
      n = moonbitlang$core$builtin$$Add$add$10$(_tmp, moonbitlang$core$byte$$Byte$to_int64(_tmp$2[_tmp$3]));
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (i < self.decimal_point) {
      n = moonbitlang$core$builtin$$Mul$mul$10$(n, $10L);
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (moonbitlang$core$strconv$$Decimal$should_round_up(self, self.decimal_point)) {
    n = moonbitlang$core$builtin$$Add$add$10$(n, $1L);
  }
  return n;
}
function moonbitlang$core$strconv$$Decimal$new_digits(self, s) {
  const new_digits = moonbitlang$core$array$$Array$at$19$(moonbitlang$core$strconv$$left_shift_cheats, s)._0;
  const cheat_num = moonbitlang$core$array$$Array$at$19$(moonbitlang$core$strconv$$left_shift_cheats, s)._1;
  let less = false;
  const _end73 = cheat_num.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end73) {
      if (i >= self.digits_num) {
        less = true;
        break;
      }
      const d = cheat_num.charCodeAt(i) - 48 | 0;
      const _tmp$2 = self.digits;
      $bound_check(_tmp$2, i);
      if (_tmp$2[i] !== d) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, i);
        less = _tmp$3[i] < d;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return less ? new_digits - 1 | 0 : new_digits;
}
function moonbitlang$core$strconv$$Decimal$left_shift(self, s) {
  const new_digits = moonbitlang$core$strconv$$Decimal$new_digits(self, s);
  let read_index = self.digits_num;
  let write_index = self.digits_num + new_digits | 0;
  let acc = $0L;
  read_index = read_index - 1 | 0;
  while (true) {
    if (read_index >= 0) {
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = moonbitlang$core$byte$$Byte$to_int64(_tmp[_tmp$2]);
      acc = moonbitlang$core$builtin$$Add$add$10$(acc, moonbitlang$core$builtin$$Shl$shl$10$(d, s));
      const quo = moonbitlang$core$builtin$$Div$div$10$(acc, $10L);
      const rem = moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$builtin$$Sub$sub$10$(acc, moonbitlang$core$builtin$$Mul$mul$10$(quo, $10L)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp$3 = self.digits;
        const _tmp$4 = write_index;
        $bound_check(_tmp$3, _tmp$4);
        _tmp$3[_tmp$4] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      read_index = read_index - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (moonbitlang$core$builtin$$op_gt$10$(acc, $0L)) {
      const quo = moonbitlang$core$builtin$$Div$div$10$(acc, $10L);
      const rem = moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$builtin$$Sub$sub$10$(acc, moonbitlang$core$builtin$$Mul$mul$10$($10L, quo)));
      write_index = write_index - 1 | 0;
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = rem & 255;
      } else {
        if (rem !== 0) {
          self.truncated = true;
        }
      }
      acc = quo;
      continue;
    } else {
      break;
    }
  }
  self.digits_num = self.digits_num + new_digits | 0;
  if (self.digits_num > self.digits.length) {
    self.digits_num = self.digits.length;
  }
  self.decimal_point = self.decimal_point + new_digits | 0;
  moonbitlang$core$strconv$$Decimal$trim(self);
}
function moonbitlang$core$strconv$$Decimal$right_shift(self, s) {
  let read_index = 0;
  let write_index = 0;
  let acc = $0L;
  while (true) {
    if (moonbitlang$core$builtin$$Eq$equal$0$(moonbitlang$core$builtin$$Shr$shr$0$(acc, s), $0L)) {
      if (read_index >= self.digits_num) {
        while (true) {
          if (moonbitlang$core$builtin$$Eq$equal$0$(moonbitlang$core$builtin$$Shr$shr$0$(acc, s), $0L)) {
            acc = moonbitlang$core$builtin$$Mul$mul$0$(acc, $10L);
            read_index = read_index + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break;
      }
      const _tmp = self.digits;
      const _tmp$2 = read_index;
      $bound_check(_tmp, _tmp$2);
      const d = _tmp[_tmp$2];
      acc = moonbitlang$core$builtin$$Add$add$0$(moonbitlang$core$builtin$$Mul$mul$0$(acc, $10L), moonbitlang$core$byte$$Byte$to_int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  self.decimal_point = self.decimal_point - (read_index - 1 | 0) | 0;
  const mask = moonbitlang$core$builtin$$Sub$sub$0$(moonbitlang$core$builtin$$Shl$shl$0$($1L, s), $1L);
  while (true) {
    if (read_index < self.digits_num) {
      const out = moonbitlang$core$builtin$$Shr$shr$0$(acc, s);
      const _tmp = self.digits;
      const _tmp$2 = write_index;
      $bound_check(_tmp, _tmp$2);
      _tmp[_tmp$2] = moonbitlang$core$uint64$$UInt64$to_byte(out);
      write_index = write_index + 1 | 0;
      acc = moonbitlang$core$builtin$$BitAnd$land$0$(acc, mask);
      const _tmp$3 = self.digits;
      const _tmp$4 = read_index;
      $bound_check(_tmp$3, _tmp$4);
      const d = _tmp$3[_tmp$4];
      acc = moonbitlang$core$builtin$$Add$add$0$(moonbitlang$core$builtin$$Mul$mul$0$(acc, $10L), moonbitlang$core$byte$$Byte$to_int64(d));
      read_index = read_index + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (moonbitlang$core$builtin$$op_gt$0$(acc, $0L)) {
      const out = moonbitlang$core$builtin$$Shr$shr$0$(acc, s);
      if (write_index < self.digits.length) {
        const _tmp = self.digits;
        const _tmp$2 = write_index;
        $bound_check(_tmp, _tmp$2);
        _tmp[_tmp$2] = moonbitlang$core$uint64$$UInt64$to_byte(out);
        write_index = write_index + 1 | 0;
      } else {
        if (moonbitlang$core$builtin$$op_gt$0$(out, $0L)) {
          self.truncated = true;
        }
      }
      acc = moonbitlang$core$builtin$$BitAnd$land$0$(acc, mask);
      acc = moonbitlang$core$builtin$$Mul$mul$0$(acc, $10L);
      continue;
    } else {
      break;
    }
  }
  self.digits_num = write_index;
  moonbitlang$core$strconv$$Decimal$trim(self);
}
function moonbitlang$core$strconv$$Decimal$shift_priv(self, s) {
  if (self.digits_num === 0) {
    return undefined;
  }
  let s$2 = s;
  if (s$2 > 0) {
    while (true) {
      if (s$2 > 59) {
        moonbitlang$core$strconv$$Decimal$left_shift(self, 59);
        s$2 = s$2 - 59 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$strconv$$Decimal$left_shift(self, s$2);
  }
  if (s$2 < 0) {
    while (true) {
      if (s$2 < -59) {
        moonbitlang$core$strconv$$Decimal$right_shift(self, 59);
        s$2 = s$2 + 59 | 0;
        continue;
      } else {
        break;
      }
    }
    moonbitlang$core$strconv$$Decimal$right_shift(self, -s$2 | 0);
    return;
  } else {
    return;
  }
}
function moonbitlang$core$strconv$$Decimal$to_double_priv(self) {
  let exponent = 0;
  let mantissa = $0L;
  if (self.digits_num === 0 || self.decimal_point < -330) {
    mantissa = $0L;
    exponent = moonbitlang$core$strconv$$double_info.bias;
    const bits = moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, self.negative);
    return new Result$Ok$12$(moonbitlang$core$int64$$Int64$reinterpret_as_double(bits));
  }
  if (self.decimal_point > 310) {
    const _bind = moonbitlang$core$strconv$$range_err$1$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  while (true) {
    if (self.decimal_point > 0) {
      let n = 0;
      if (self.decimal_point >= moonbitlang$core$strconv$$powtab.length) {
        n = 60;
      } else {
        n = moonbitlang$core$array$$Array$at$7$(moonbitlang$core$strconv$$powtab, self.decimal_point);
      }
      moonbitlang$core$strconv$$Decimal$shift_priv(self, -n | 0);
      exponent = exponent + n | 0;
      continue;
    } else {
      break;
    }
  }
  while (true) {
    let _tmp;
    if (self.decimal_point < 0) {
      _tmp = true;
    } else {
      let _tmp$2;
      if (self.decimal_point === 0) {
        const _tmp$3 = self.digits;
        $bound_check(_tmp$3, 0);
        _tmp$2 = _tmp$3[0] < 5;
      } else {
        _tmp$2 = false;
      }
      _tmp = _tmp$2;
    }
    if (_tmp) {
      let n = 0;
      if ((-self.decimal_point | 0) >= moonbitlang$core$strconv$$powtab.length) {
        n = 60;
      } else {
        n = moonbitlang$core$array$$Array$at$7$(moonbitlang$core$strconv$$powtab, -self.decimal_point | 0);
      }
      moonbitlang$core$strconv$$Decimal$shift_priv(self, n);
      exponent = exponent - n | 0;
      continue;
    } else {
      break;
    }
  }
  exponent = exponent - 1 | 0;
  if (exponent < (moonbitlang$core$strconv$$double_info.bias + 1 | 0)) {
    const n = (moonbitlang$core$strconv$$double_info.bias + 1 | 0) - exponent | 0;
    moonbitlang$core$strconv$$Decimal$shift_priv(self, -n | 0);
    exponent = exponent + n | 0;
  }
  if ((exponent - moonbitlang$core$strconv$$double_info.bias | 0) >= ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0)) {
    const _bind = moonbitlang$core$strconv$$range_err$1$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  moonbitlang$core$strconv$$Decimal$shift_priv(self, moonbitlang$core$strconv$$double_info.mantissa_bits + 1 | 0);
  mantissa = moonbitlang$core$strconv$$Decimal$rounded_integer(self);
  if (moonbitlang$core$builtin$$Eq$equal$10$(mantissa, moonbitlang$core$builtin$$Shl$shl$10$($2L, moonbitlang$core$strconv$$double_info.mantissa_bits))) {
    mantissa = moonbitlang$core$builtin$$Shr$shr$10$(mantissa, 1);
    exponent = exponent + 1 | 0;
    if ((exponent - moonbitlang$core$strconv$$double_info.bias | 0) >= ((1 << moonbitlang$core$strconv$$double_info.exponent_bits) - 1 | 0)) {
      const _bind = moonbitlang$core$strconv$$range_err$1$();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  if (moonbitlang$core$builtin$$Eq$equal$10$(moonbitlang$core$builtin$$BitAnd$land$10$(mantissa, moonbitlang$core$builtin$$Shl$shl$10$($1L, moonbitlang$core$strconv$$double_info.mantissa_bits)), $0L)) {
    exponent = moonbitlang$core$strconv$$double_info.bias;
  }
  const bits = moonbitlang$core$strconv$$assemble_bits(mantissa, exponent, self.negative);
  return new Result$Ok$12$(moonbitlang$core$int64$$Int64$reinterpret_as_double(bits));
}
function moonbitlang$core$strconv$$checked_mul(a, b) {
  if (moonbitlang$core$builtin$$Eq$equal$0$(a, $0L) || moonbitlang$core$builtin$$Eq$equal$0$(b, $0L)) {
    return $0L;
  }
  if (moonbitlang$core$builtin$$Eq$equal$0$(a, $1L)) {
    return b;
  }
  if (moonbitlang$core$builtin$$Eq$equal$0$(b, $1L)) {
    return a;
  }
  if (moonbitlang$core$uint64$$UInt64$clz(b) === 0 || moonbitlang$core$uint64$$UInt64$clz(a) === 0) {
    return undefined;
  }
  const quotient = moonbitlang$core$builtin$$Div$div$0$(moonbitlang$core$uint64$$max_value, b);
  if (moonbitlang$core$builtin$$op_gt$0$(a, quotient)) {
    return undefined;
  }
  return moonbitlang$core$builtin$$Mul$mul$0$(a, b);
}
function moonbitlang$core$strconv$$pow10_fast_path(exponent) {
  const _tmp = exponent & 31;
  $bound_check(moonbitlang$core$strconv$$table, _tmp);
  return moonbitlang$core$strconv$$table[_tmp];
}
function moonbitlang$core$strconv$$Number$is_fast_path(self) {
  return moonbitlang$core$builtin$$op_le$10$(moonbitlang$core$strconv$$min_exponent_fast_path, self.exponent) && (moonbitlang$core$builtin$$op_le$10$(self.exponent, moonbitlang$core$strconv$$max_exponent_disguised_fast_path) && (moonbitlang$core$builtin$$op_le$0$(self.mantissa, moonbitlang$core$strconv$$max_mantissa_fast_path) && !self.many_digits));
}
function moonbitlang$core$strconv$$Number$try_fast_path(self) {
  if (moonbitlang$core$strconv$$Number$is_fast_path(self)) {
    let value;
    if (moonbitlang$core$builtin$$op_le$10$(self.exponent, moonbitlang$core$strconv$$max_exponent_fast_path)) {
      const value$2 = moonbitlang$core$double$$Double$convert_uint64(self.mantissa);
      value = moonbitlang$core$builtin$$op_lt$10$(self.exponent, $0L) ? value$2 / moonbitlang$core$strconv$$pow10_fast_path(-moonbitlang$core$int64$$Int64$to_int(self.exponent) | 0) : value$2 * moonbitlang$core$strconv$$pow10_fast_path(moonbitlang$core$int64$$Int64$to_int(self.exponent));
    } else {
      const shift = moonbitlang$core$builtin$$Sub$sub$10$(self.exponent, moonbitlang$core$strconv$$max_exponent_fast_path);
      const _tmp = self.mantissa;
      const _tmp$2 = moonbitlang$core$int64$$Int64$to_int(shift);
      $bound_check(moonbitlang$core$strconv$$int_pow10, _tmp$2);
      const _bind = moonbitlang$core$strconv$$checked_mul(_tmp, moonbitlang$core$strconv$$int_pow10[_tmp$2]);
      let mantissa;
      if (_bind === undefined) {
        return Option$None$25$;
      } else {
        const _Some = _bind;
        mantissa = _Some;
      }
      if (moonbitlang$core$builtin$$op_gt$0$(mantissa, moonbitlang$core$strconv$$max_mantissa_fast_path)) {
        return Option$None$25$;
      }
      value = moonbitlang$core$double$$Double$convert_uint64(mantissa) * moonbitlang$core$strconv$$pow10_fast_path(moonbitlang$core$int64$$Int64$to_int(moonbitlang$core$strconv$$max_exponent_fast_path));
    }
    if (self.negative) {
      value = -value;
    }
    return new Option$Some$25$(value);
  } else {
    return Option$None$25$;
  }
}
function moonbitlang$core$strconv$$parse_double(str) {
  if (moonbitlang$core$string$$StringView$length(str) === 0) {
    const _bind = moonbitlang$core$strconv$$syntax_err$1$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  if (!moonbitlang$core$strconv$$check_underscore(str)) {
    const _bind = moonbitlang$core$strconv$$syntax_err$1$();
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      return _bind;
    }
  }
  const _bind = moonbitlang$core$strconv$$parse_number(str);
  let _bind$2;
  if (_bind === undefined) {
    const _bind$3 = moonbitlang$core$strconv$$parse_inf_nan(str);
    if (_bind$3 === undefined) {
      const _bind$4 = moonbitlang$core$strconv$$syntax_err$65$();
      if (_bind$4.$tag === 1) {
        const _ok = _bind$4;
        _bind$2 = _ok._0;
      } else {
        return _bind$4;
      }
    } else {
      const _Some = _bind$3;
      const _x = _Some;
      const _num = _x._0;
      const _consumed = _x._1;
      if (moonbitlang$core$string$$StringView$length(str) !== _consumed) {
        const _bind$4 = moonbitlang$core$strconv$$syntax_err$65$();
        if (_bind$4.$tag === 1) {
          const _ok = _bind$4;
          _bind$2 = _ok._0;
        } else {
          return _bind$4;
        }
      } else {
        return new Result$Ok$12$(_num);
      }
    }
  } else {
    const _Some = _bind;
    _bind$2 = _Some;
  }
  const _num = _bind$2._0;
  const _consumed = _bind$2._1;
  if (moonbitlang$core$string$$StringView$length(str) !== _consumed) {
    const _bind$3 = moonbitlang$core$strconv$$syntax_err$1$();
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      _ok._0;
    } else {
      return _bind$3;
    }
  }
  const _bind$3 = moonbitlang$core$strconv$$Number$try_fast_path(_num);
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _value = _Some._0;
    return new Result$Ok$12$(_value);
  } else {
    const _bind$4 = moonbitlang$core$strconv$$parse_decimal_priv(str);
    let ret;
    if (_bind$4.$tag === 1) {
      const _ok = _bind$4;
      ret = _ok._0;
    } else {
      return _bind$4;
    }
    return moonbitlang$core$strconv$$Decimal$to_double_priv(ret);
  }
}
function moonbitlang$core$result$$Result$bind$67$(self, g) {
  if (self.$tag === 1) {
    const _Ok = self;
    const _value = _Ok._0;
    return g(_value);
  } else {
    const _Err = self;
    const _err = _Err._0;
    return new Result$Err$26$(_err);
  }
}
function moonbitlang$core$string$$StringView$length(self) {
  return self.end - self.start | 0;
}
function moonbitlang$core$string$$StringView$data(self) {
  return self.str;
}
function moonbitlang$core$string$$StringView$start_offset(self) {
  return self.start;
}
function moonbitlang$core$string$$String$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$abort$$abort$4$("Invalid index for View");
}
function moonbitlang$core$string$$StringView$view$46$inner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = moonbitlang$core$string$$StringView$length(self);
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= moonbitlang$core$string$$StringView$length(self)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : moonbitlang$core$abort$$abort$4$("Invalid index for View");
}
function moonbitlang$core$string$$String$offset_of_nth_char_backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const _tmp = utf16_offset - 1 | 0;
      const c = self.charCodeAt(_tmp);
      if (moonbitlang$core$int$$Int$is_trailing_surrogate(c)) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function moonbitlang$core$string$$String$offset_of_nth_char_forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const _tmp = utf16_offset;
        const c = self.charCodeAt(_tmp);
        if (moonbitlang$core$int$$Int$is_leading_surrogate(c)) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
  } else {
    return moonbitlang$core$abort$$abort$6$("Invalid start index");
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char$46$inner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? moonbitlang$core$string$$String$offset_of_nth_char_forward(self, i, start_offset, end_offset$2) : moonbitlang$core$string$$String$offset_of_nth_char_backward(self, -i | 0, start_offset, end_offset$2);
}
function moonbitlang$core$string$$StringView$unsafe_charcode_at(self, index) {
  const _tmp = self.str;
  const _tmp$2 = self.start + index | 0;
  return _tmp.charCodeAt(_tmp$2);
}
function moonbitlang$core$string$$String$char_length_eq$46$inner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (moonbitlang$core$int$$Int$is_leading_surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (moonbitlang$core$int$$Int$is_trailing_surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$abort$$abort$1$("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function moonbitlang$core$string$$String$char_length_ge$46$inner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (moonbitlang$core$int$$Int$is_leading_surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (moonbitlang$core$int$$Int$is_trailing_surrogate(c2)) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$abort$$abort$1$("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return self.str.substring(self.start, self.end);
}
function moonbitlang$core$string$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$StringView$iter(self) {
  return moonbitlang$core$builtin$$Iter$new$33$((yield_) => {
    const _start500 = self.start;
    const _end501 = self.end;
    let _tmp = _start500;
    while (true) {
      const index = _tmp;
      if (index < _end501) {
        const _tmp$2 = self.str;
        const c1 = _tmp$2.charCodeAt(index);
        if (moonbitlang$core$int$$Int$is_leading_surrogate(c1) && (index + 1 | 0) < self.end) {
          const _tmp$3 = self.str;
          const _tmp$4 = index + 1 | 0;
          const c2 = _tmp$3.charCodeAt(_tmp$4);
          if (moonbitlang$core$int$$Int$is_trailing_surrogate(c2)) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind = yield_(c1);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$builtin$$Eq$equal$4$(self, other) {
  const len = moonbitlang$core$string$$StringView$length(self);
  if (len === moonbitlang$core$string$$StringView$length(other)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = self.str;
        const _tmp$3 = self.start + i | 0;
        const _tmp$4 = _tmp$2.charCodeAt(_tmp$3);
        const _tmp$5 = other.str;
        const _tmp$6 = other.start + i | 0;
        if (_tmp$4 === _tmp$5.charCodeAt(_tmp$6)) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function moonbitlang$core$string$$ToStringView$to_string_view$2$(self) {
  return { str: self, start: 0, end: self.length };
}
function moonbitlang$core$string$$String$iter(self) {
  return moonbitlang$core$builtin$$Iter$new$33$((yield_) => {
    const len = self.length;
    let _tmp = 0;
    while (true) {
      const index = _tmp;
      if (index < len) {
        const c1 = self.charCodeAt(index);
        if (moonbitlang$core$int$$Int$is_leading_surrogate(c1) && (index + 1 | 0) < len) {
          const _tmp$2 = index + 1 | 0;
          const c2 = self.charCodeAt(_tmp$2);
          if (moonbitlang$core$int$$Int$is_trailing_surrogate(c2)) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind = yield_(c1);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$string$$boyer_moore_horspool_find(haystack, needle) {
  const haystack_len = moonbitlang$core$string$$StringView$length(haystack);
  const needle_len = moonbitlang$core$string$$StringView$length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _end314 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end314) {
          const _tmp$2 = moonbitlang$core$string$$StringView$unsafe_charcode_at(needle, i) & 255;
          $bound_check(skip_table, _tmp$2);
          skip_table[_tmp$2] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end320 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end320) {
              if (moonbitlang$core$string$$StringView$unsafe_charcode_at(haystack, i + j | 0) !== moonbitlang$core$string$$StringView$unsafe_charcode_at(needle, j)) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _tmp$4 = moonbitlang$core$string$$StringView$unsafe_charcode_at(haystack, (i + needle_len | 0) - 1 | 0) & 255;
          $bound_check(skip_table, _tmp$4);
          _tmp$2 = i + skip_table[_tmp$4] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return 0;
  }
}
function moonbitlang$core$string$$brute_force_find(haystack, needle) {
  const haystack_len = moonbitlang$core$string$$StringView$length(haystack);
  const needle_len = moonbitlang$core$string$$StringView$length(needle);
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const needle_first = moonbitlang$core$string$$StringView$unsafe_charcode_at(needle, 0);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            if (i <= forward_len && moonbitlang$core$string$$StringView$unsafe_charcode_at(haystack, i) !== needle_first) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp = 1;
            while (true) {
              const j = _tmp;
              if (j < needle_len) {
                if (moonbitlang$core$string$$StringView$unsafe_charcode_at(haystack, i + j | 0) !== moonbitlang$core$string$$StringView$unsafe_charcode_at(needle, j)) {
                  break;
                }
                _tmp = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return 0;
  }
}
function moonbitlang$core$string$$StringView$find(self, str) {
  return moonbitlang$core$string$$StringView$length(str) <= 4 ? moonbitlang$core$string$$brute_force_find(self, str) : moonbitlang$core$string$$boyer_moore_horspool_find(self, str);
}
function moonbitlang$core$string$$String$find(self, str) {
  return moonbitlang$core$string$$StringView$find({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$String$repeat(self, n) {
  if (n <= 0) {
    return "";
  } else {
    if (n === 1) {
      return self;
    } else {
      const len = self.length;
      const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(Math.imul(len, n) | 0);
      const str = self;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < n) {
          moonbitlang$core$builtin$$Logger$write_string$16$(buf, str);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
    }
  }
}
function moonbitlang$core$string$$StringView$contains(self, str) {
  const _bind = moonbitlang$core$string$$StringView$find(self, str);
  return !(_bind === undefined);
}
function moonbitlang$core$string$$String$contains(self, str) {
  return moonbitlang$core$string$$StringView$contains({ str: self, start: 0, end: self.length }, str);
}
function moonbitlang$core$string$$StringView$is_empty(self) {
  return moonbitlang$core$string$$StringView$length(self) === 0;
}
function moonbitlang$core$string$$StringView$split(self, sep) {
  const sep_len = moonbitlang$core$string$$StringView$length(sep);
  if (sep_len === 0) {
    const _bind = moonbitlang$core$string$$StringView$iter(self);
    return (_p) => _bind((_p$2) => _p(moonbitlang$core$string$$String$view$46$inner(moonbitlang$core$builtin$$Show$to_string$33$(_p$2), 0, undefined)));
  }
  return moonbitlang$core$builtin$$Iter$new$4$((yield_) => {
    let view = self;
    while (true) {
      const _bind = moonbitlang$core$string$$StringView$find(view, sep);
      if (_bind === undefined) {
        return yield_(view);
      } else {
        const _Some = _bind;
        const _end = _Some;
        const _bind$2 = yield_(moonbitlang$core$string$$StringView$view$46$inner(view, 0, _end));
        if (_bind$2 === 1) {
          view = moonbitlang$core$string$$StringView$view$46$inner(view, _end + sep_len | 0, undefined);
        } else {
          return 0;
        }
        continue;
      }
    }
  });
}
function moonbitlang$core$string$$String$split(self, sep) {
  return moonbitlang$core$string$$StringView$split({ str: self, start: 0, end: self.length }, sep);
}
function moonbitlang$core$string$$StringView$replace_all(self, old, new_) {
  const len = moonbitlang$core$string$$StringView$length(self);
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(len);
  const old_len = moonbitlang$core$string$$StringView$length(old);
  const new$2 = moonbitlang$core$builtin$$Show$to_string$4$(new_);
  if (old_len === 0) {
    moonbitlang$core$builtin$$Logger$write_string$16$(buf, new$2);
    const _bind = moonbitlang$core$string$$StringView$iter(self);
    _bind((c) => {
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, c);
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, new$2);
      return 1;
    });
    const _bind$2 = moonbitlang$core$builtin$$StringBuilder$to_string(buf);
    return { str: _bind$2, start: 0, end: _bind$2.length };
  } else {
    const first_end = moonbitlang$core$string$$StringView$find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = self;
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = moonbitlang$core$string$$StringView$view$46$inner(view, 0, end);
        moonbitlang$core$builtin$$Logger$write_substring$16$(buf, moonbitlang$core$string$$StringView$data(seg), moonbitlang$core$string$$StringView$start_offset(seg), moonbitlang$core$string$$StringView$length(seg));
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = moonbitlang$core$string$$StringView$view$46$inner(view, end + old_len | 0, undefined);
          const _bind = moonbitlang$core$string$$StringView$find(next_view, old);
          if (_bind === undefined) {
            moonbitlang$core$builtin$$Logger$write_substring$16$(buf, moonbitlang$core$string$$StringView$data(next_view), moonbitlang$core$string$$StringView$start_offset(next_view), moonbitlang$core$string$$StringView$length(next_view));
            break;
          } else {
            const _Some$2 = _bind;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      const _bind = moonbitlang$core$builtin$$StringBuilder$to_string(buf);
      return { str: _bind, start: 0, end: _bind.length };
    }
  }
}
function moonbitlang$core$string$$String$replace_all(self, old, new_) {
  const len = self.length;
  const buf = moonbitlang$core$builtin$$StringBuilder$new$46$inner(len);
  const old_len = moonbitlang$core$string$$StringView$length(old);
  const new$2 = moonbitlang$core$builtin$$Show$to_string$4$(new_);
  if (old_len === 0) {
    moonbitlang$core$builtin$$Logger$write_string$16$(buf, new$2);
    const _bind = moonbitlang$core$string$$String$iter(self);
    _bind((c) => {
      moonbitlang$core$builtin$$Logger$write_char$16$(buf, c);
      moonbitlang$core$builtin$$Logger$write_string$16$(buf, new$2);
      return 1;
    });
    return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
  } else {
    const first_end = moonbitlang$core$string$$String$find(self, old);
    if (first_end === undefined) {
      return self;
    } else {
      const _Some = first_end;
      const _end = _Some;
      let _tmp = { str: self, start: 0, end: self.length };
      let _tmp$2 = _end;
      while (true) {
        const view = _tmp;
        const end = _tmp$2;
        const seg = moonbitlang$core$string$$StringView$view$46$inner(view, 0, end);
        moonbitlang$core$builtin$$Logger$write_substring$16$(buf, moonbitlang$core$string$$StringView$data(seg), moonbitlang$core$string$$StringView$start_offset(seg), moonbitlang$core$string$$StringView$length(seg));
        moonbitlang$core$builtin$$Logger$write_string$16$(buf, new$2);
        if ((end + old_len | 0) <= len) {
          const next_view = moonbitlang$core$string$$StringView$view$46$inner(view, end + old_len | 0, undefined);
          const _bind = moonbitlang$core$string$$StringView$find(next_view, old);
          if (_bind === undefined) {
            moonbitlang$core$builtin$$Logger$write_substring$16$(buf, moonbitlang$core$string$$StringView$data(next_view), moonbitlang$core$string$$StringView$start_offset(next_view), moonbitlang$core$string$$StringView$length(next_view));
            break;
          } else {
            const _Some$2 = _bind;
            const _next_end = _Some$2;
            _tmp = next_view;
            _tmp$2 = _next_end;
            continue;
          }
        } else {
          break;
        }
      }
      return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
    }
  }
}
function moonbitlang$core$string$$String$get_char(self, idx) {
  if (idx >= 0 && idx < self.length) {
    const c = self.charCodeAt(idx);
    if (moonbitlang$core$int$$Int$is_leading_surrogate(c)) {
      if ((idx + 1 | 0) < self.length) {
        const _tmp = idx + 1 | 0;
        const next = self.charCodeAt(_tmp);
        return moonbitlang$core$int$$Int$is_trailing_surrogate(next) ? moonbitlang$core$string$$code_point_of_surrogate_pair(c, next) : -1;
      } else {
        return -1;
      }
    } else {
      return moonbitlang$core$int$$Int$is_trailing_surrogate(c) ? -1 : c;
    }
  } else {
    return -1;
  }
}
function moonbitlang$core$builtin$$Eq$equal$68$(_x_111, _x_112) {
  let _x0_113;
  let _y0_114;
  _L: {
    switch (_x_111.$tag) {
      case 0: {
        if (_x_112.$tag === 0) {
          return true;
        } else {
          return false;
        }
      }
      case 1: {
        if (_x_112.$tag === 1) {
          return true;
        } else {
          return false;
        }
      }
      default: {
        const _Other = _x_111;
        const _$42$x0_113 = _Other._0;
        if (_x_112.$tag === 2) {
          const _Other$2 = _x_112;
          const _$42$y0_114 = _Other$2._0;
          _x0_113 = _$42$x0_113;
          _y0_114 = _$42$y0_114;
          break _L;
        } else {
          return false;
        }
      }
    }
  }
  return _x0_113 === _y0_114;
}
function Yoorkin$rabbit$45$tea$url$$parse(url) {
  let protocol;
  let remain;
  _L: {
    let _bind;
    let remain$2;
    _L$2: {
      _L$3: {
        let x;
        let remain$3;
        _L$4: {
          _L$5: {
            let remain$4;
            _L$6: {
              _L$7: {
                let remain$5;
                _L$8: {
                  _L$9: {
                    const _bind$2 = "://";
                    const _bind$3 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$String$split(url, { str: _bind$2, start: 0, end: _bind$2.length }));
                    if (_bind$3.length === 2) {
                      const _x = _bind$3[0];
                      if (moonbitlang$core$string$$String$char_length_eq$46$inner(_x.str, 4, _x.start, _x.end)) {
                        const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 0, _x.start, _x.end));
                        if (_x$2 === 104) {
                          const _x$3 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 1, _x.start, _x.end));
                          if (_x$3 === 116) {
                            const _x$4 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 2, _x.start, _x.end));
                            if (_x$4 === 116) {
                              const _x$5 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 3, _x.start, _x.end));
                              if (_x$5 === 112) {
                                const _remain = _bind$3[1];
                                remain$5 = _remain;
                                break _L$9;
                              } else {
                                const _remain = _bind$3[1];
                                x = _x;
                                remain$3 = _remain;
                                break _L$5;
                              }
                            } else {
                              const _remain = _bind$3[1];
                              x = _x;
                              remain$3 = _remain;
                              break _L$5;
                            }
                          } else {
                            const _remain = _bind$3[1];
                            x = _x;
                            remain$3 = _remain;
                            break _L$5;
                          }
                        } else {
                          const _remain = _bind$3[1];
                          x = _x;
                          remain$3 = _remain;
                          break _L$5;
                        }
                      } else {
                        if (moonbitlang$core$string$$String$char_length_eq$46$inner(_x.str, 5, _x.start, _x.end)) {
                          const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 0, _x.start, _x.end));
                          if (_x$2 === 104) {
                            const _x$3 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 1, _x.start, _x.end));
                            if (_x$3 === 116) {
                              const _x$4 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 2, _x.start, _x.end));
                              if (_x$4 === 116) {
                                const _x$5 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 3, _x.start, _x.end));
                                if (_x$5 === 112) {
                                  const _x$6 = moonbitlang$core$string$$String$unsafe_char_at(_x.str, moonbitlang$core$string$$String$offset_of_nth_char$46$inner(_x.str, 4, _x.start, _x.end));
                                  if (_x$6 === 115) {
                                    const _remain = _bind$3[1];
                                    remain$4 = _remain;
                                    break _L$7;
                                  } else {
                                    const _remain = _bind$3[1];
                                    x = _x;
                                    remain$3 = _remain;
                                    break _L$5;
                                  }
                                } else {
                                  const _remain = _bind$3[1];
                                  x = _x;
                                  remain$3 = _remain;
                                  break _L$5;
                                }
                              } else {
                                const _remain = _bind$3[1];
                                x = _x;
                                remain$3 = _remain;
                                break _L$5;
                              }
                            } else {
                              const _remain = _bind$3[1];
                              x = _x;
                              remain$3 = _remain;
                              break _L$5;
                            }
                          } else {
                            const _remain = _bind$3[1];
                            x = _x;
                            remain$3 = _remain;
                            break _L$5;
                          }
                        } else {
                          const _remain = _bind$3[1];
                          x = _x;
                          remain$3 = _remain;
                          break _L$5;
                        }
                      }
                    } else {
                      if (_bind$3.length === 1) {
                        const _remain = _bind$3[0];
                        remain$2 = _remain;
                        break _L$3;
                      } else {
                        const _bind$4 = moonbitlang$core$builtin$$fail$28$("Invalid protocol", "E:\\MoonBit\\Rabbit-Tea Blog Demo\\rabbit-tea-template\\.mooncakes\\Yoorkin\\rabbit-tea\\src\\url\\url.mbt:66:10-66:34");
                        if (_bind$4.$tag === 1) {
                          const _ok = _bind$4;
                          _bind = _ok._0;
                        } else {
                          return _bind$4;
                        }
                      }
                    }
                    break _L$8;
                  }
                  _bind = { _0: $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Http, _1: remain$5 };
                }
                break _L$6;
              }
              _bind = { _0: $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Https, _1: remain$4 };
            }
            break _L$4;
          }
          _bind = { _0: new $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(moonbitlang$core$builtin$$Show$to_string$4$(x)), _1: remain$3 };
        }
        break _L$2;
      }
      _bind = { _0: new $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(""), _1: remain$2 };
    }
    const _protocol = _bind._0;
    const _remain = _bind._1;
    protocol = _protocol;
    remain = _remain;
    break _L;
  }
  let mid;
  let query_and_fragment;
  _L$2: {
    let _bind;
    let mid$2;
    _L$3: {
      _L$4: {
        let mid$3;
        let remain$2;
        _L$5: {
          _L$6: {
            const _bind$2 = "?";
            const _bind$3 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$StringView$split(remain, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 2) {
              const _mid = _bind$3[0];
              const _remain = _bind$3[1];
              mid$3 = _mid;
              remain$2 = _remain;
              break _L$6;
            } else {
              if (_bind$3.length === 1) {
                const _mid = _bind$3[0];
                mid$2 = _mid;
                break _L$4;
              } else {
                const _bind$4 = moonbitlang$core$builtin$$fail$27$("Invalid host", "E:\\MoonBit\\Rabbit-Tea Blog Demo\\rabbit-tea-template\\.mooncakes\\Yoorkin\\rabbit-tea\\src\\url\\url.mbt:71:10-71:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$5;
          }
          _bind = { _0: mid$3, _1: remain$2 };
        }
        break _L$3;
      }
      const _bind$2 = "";
      _bind = { _0: mid$2, _1: { str: _bind$2, start: 0, end: _bind$2.length } };
    }
    const _mid = _bind._0;
    const _query_and_fragment = _bind._1;
    mid = _mid;
    query_and_fragment = _query_and_fragment;
    break _L$2;
  }
  let mid_part;
  let fragment1;
  _L$3: {
    let _bind;
    let mid$2;
    _L$4: {
      _L$5: {
        let mid$3;
        let fragment;
        _L$6: {
          _L$7: {
            const _bind$2 = "#";
            const _bind$3 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$StringView$split(mid, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 2) {
              const _mid = _bind$3[0];
              const _fragment = _bind$3[1];
              mid$3 = _mid;
              fragment = _fragment;
              break _L$7;
            } else {
              if (_bind$3.length === 1) {
                const _mid = _bind$3[0];
                mid$2 = _mid;
                break _L$5;
              } else {
                const _bind$4 = moonbitlang$core$builtin$$fail$26$("Invalid fragment", "E:\\MoonBit\\Rabbit-Tea Blog Demo\\rabbit-tea-template\\.mooncakes\\Yoorkin\\rabbit-tea\\src\\url\\url.mbt:76:10-76:34");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$6;
          }
          _bind = { _0: mid$3, _1: fragment };
        }
        break _L$4;
      }
      _bind = { _0: mid$2, _1: undefined };
    }
    const _mid_part = _bind._0;
    const _fragment1 = _bind._1;
    mid_part = _mid_part;
    fragment1 = _fragment1;
    break _L$3;
  }
  let mid$2;
  let path;
  _L$4: {
    let _bind;
    let paths;
    let mid$3;
    _L$5: {
      _L$6: {
        let mid$4;
        _L$7: {
          _L$8: {
            const _bind$2 = "/";
            const _bind$3 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$StringView$split(mid_part, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 1) {
              const _mid = _bind$3[0];
              mid$4 = _mid;
              break _L$8;
            } else {
              if (_bind$3.length >= 1) {
                const _mid = _bind$3[0];
                const _x = moonbitlang$core$array$$Array$sub$46$inner$4$(_bind$3, 1, _bind$3.length);
                paths = _x;
                mid$3 = _mid;
                break _L$6;
              } else {
                const _bind$4 = moonbitlang$core$builtin$$fail$25$("Invalid host", "E:\\MoonBit\\Rabbit-Tea Blog Demo\\rabbit-tea-template\\.mooncakes\\Yoorkin\\rabbit-tea\\src\\url\\url.mbt:82:10-82:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$7;
          }
          _bind = { _0: mid$4, _1: "" };
        }
        break _L$5;
      }
      _bind = { _0: mid$3, _1: moonbitlang$core$builtin$$Iter$join(moonbitlang$core$builtin$$Iter$map$55$(moonbitlang$core$array$$ArrayView$iter$4$(paths), moonbitlang$core$builtin$$Show$to_string$4$), "/") };
    }
    const _mid = _bind._0;
    const _path = _bind._1;
    mid$2 = _mid;
    path = _path;
    break _L$4;
  }
  let host;
  let port;
  _L$5: {
    let _bind;
    let host$2;
    _L$6: {
      _L$7: {
        let host$3;
        let port$2;
        _L$8: {
          _L$9: {
            const _bind$2 = ":";
            const _bind$3 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$StringView$split(mid$2, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 2) {
              const _host = _bind$3[0];
              const _port = _bind$3[1];
              host$3 = _host;
              port$2 = _port;
              break _L$9;
            } else {
              if (_bind$3.length === 1) {
                const _host = _bind$3[0];
                host$2 = _host;
                break _L$7;
              } else {
                const _bind$4 = moonbitlang$core$builtin$$fail$24$("Invalid host", "E:\\MoonBit\\Rabbit-Tea Blog Demo\\rabbit-tea-template\\.mooncakes\\Yoorkin\\rabbit-tea\\src\\url\\url.mbt:94:10-94:30");
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _bind = _ok._0;
                } else {
                  return _bind$4;
                }
              }
            }
            break _L$8;
          }
          let port$3;
          let _try_err;
          _L$10: {
            _L$11: {
              const _bind$2 = moonbitlang$core$builtin$$Show$to_string$4$(port$2);
              const _bind$3 = moonbitlang$core$strconv$$parse_int$46$inner({ str: _bind$2, start: 0, end: _bind$2.length }, 0);
              let _bind$4;
              if (_bind$3.$tag === 1) {
                const _ok = _bind$3;
                _bind$4 = _ok._0;
              } else {
                const _err = _bind$3;
                const _tmp = _err._0;
                _try_err = _tmp;
                break _L$11;
              }
              const number = _bind$4;
              port$3 = number;
              break _L$10;
            }
            port$3 = undefined;
          }
          _bind = { _0: moonbitlang$core$builtin$$Show$to_string$4$(host$3), _1: port$3 };
        }
        break _L$6;
      }
      _bind = { _0: moonbitlang$core$builtin$$Show$to_string$4$(host$2), _1: undefined };
    }
    const _host = _bind._0;
    const _port = _bind._1;
    host = _host;
    port = _port;
    break _L$5;
  }
  let query;
  let fragment2;
  _L$6: {
    let _bind;
    let query$2;
    _L$7: {
      _L$8: {
        let query$3;
        let fragment;
        _L$9: {
          _L$10: {
            const _bind$2 = "#";
            const _bind$3 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$StringView$split(query_and_fragment, { str: _bind$2, start: 0, end: _bind$2.length }));
            if (_bind$3.length === 2) {
              const _query = _bind$3[0];
              const _fragment = _bind$3[1];
              query$3 = _query;
              fragment = _fragment;
              break _L$10;
            } else {
              if (_bind$3.length === 1) {
                const _query = _bind$3[0];
                query$2 = _query;
                break _L$8;
              } else {
                if (_bind$3.length === 0) {
                  _bind = { _0: undefined, _1: undefined };
                } else {
                  const _bind$4 = moonbitlang$core$builtin$$fail$23$("Invalid query", "E:\\MoonBit\\Rabbit-Tea Blog Demo\\rabbit-tea-template\\.mooncakes\\Yoorkin\\rabbit-tea\\src\\url\\url.mbt:105:10-105:31");
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _bind = _ok._0;
                  } else {
                    return _bind$4;
                  }
                }
              }
            }
            break _L$9;
          }
          _bind = { _0: moonbitlang$core$builtin$$Show$to_string$4$(query$3), _1: fragment };
        }
        break _L$7;
      }
      _bind = moonbitlang$core$string$$StringView$is_empty(query$2) ? { _0: undefined, _1: undefined } : { _0: moonbitlang$core$builtin$$Show$to_string$4$(query$2), _1: undefined };
    }
    const _query = _bind._0;
    const _fragment2 = _bind._1;
    query = _query;
    fragment2 = _fragment2;
    break _L$6;
  }
  let fragment;
  let f;
  _L$7: {
    _L$8: {
      let f$2;
      _L$9: {
        _L$10: {
          let f1;
          let f2;
          _L$11: {
            _L$12: {
              if (fragment1 === undefined) {
                if (fragment2 === undefined) {
                  fragment = undefined;
                } else {
                  const _Some = fragment2;
                  const _f = _Some;
                  f = _f;
                  break _L$8;
                }
              } else {
                const _Some = fragment1;
                const _f1 = _Some;
                if (fragment2 === undefined) {
                  f$2 = _f1;
                  break _L$10;
                } else {
                  const _Some$2 = fragment2;
                  const _f2 = _Some$2;
                  f1 = _f1;
                  f2 = _f2;
                  break _L$12;
                }
              }
              break _L$11;
            }
            fragment = `${moonbitlang$core$builtin$$Show$to_string$4$(f1)}#${moonbitlang$core$builtin$$Show$to_string$4$(f2)}`;
          }
          break _L$9;
        }
        fragment = moonbitlang$core$builtin$$Show$to_string$4$(f$2);
      }
      break _L$7;
    }
    fragment = moonbitlang$core$builtin$$Show$to_string$4$(f);
  }
  return new Result$Ok$27$({ protocol: protocol, host: host, port: port, path: path, query: query, fragment: fragment });
}
function rami3l$js$45$ffi$js$$Nullable$is_null$36$(self) {
  return rami3l$js$45$ffi$js$$Value$is_null(self);
}
function rami3l$js$45$ffi$js$$Nullable$unwrap$36$(self) {
  if (rami3l$js$45$ffi$js$$Nullable$is_null$36$(self)) {
    moonbitlang$core$abort$$abort$1$("Cannot unwrap a null value");
  }
  return self;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$36$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$28$(self) : Option$None$28$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$37$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$29$(self) : Option$None$29$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$38$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$30$(self) : Option$None$30$;
}
function rami3l$js$45$ffi$js$$Nullable$to_option$39$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$31$(self) : Option$None$31$;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$69$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$70$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$71$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$72$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$73$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$74$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$75$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$76$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$77$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$js_identity$78$(a) {
  return a;
}
function Yoorkin$rabbit$45$tea$dom$$IsNode$as_node$79$(s) {
  return Yoorkin$rabbit$45$tea$dom$$js_identity$71$(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsNode$append_child$80$(s, child) {
  Yoorkin$rabbit$45$tea$dom$$ffi_append_child(Yoorkin$rabbit$45$tea$dom$$js_identity$70$(s), child);
}
function Yoorkin$rabbit$45$tea$dom$$IsNode$append_child$79$(s, child) {
  Yoorkin$rabbit$45$tea$dom$$ffi_append_child(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s), child);
}
function Yoorkin$rabbit$45$tea$dom$$IsNode$remove_child$80$(s, child) {
  Yoorkin$rabbit$45$tea$dom$$ffi_remove_child(Yoorkin$rabbit$45$tea$dom$$js_identity$70$(s), child);
}
function Yoorkin$rabbit$45$tea$dom$$IsNode$replace_child$80$(s, new_, old) {
  Yoorkin$rabbit$45$tea$dom$$ffi_replace_child(Yoorkin$rabbit$45$tea$dom$$js_identity$70$(s), new_, old);
}
function Yoorkin$rabbit$45$tea$dom$$IsNode$insert_before$80$(s, value, before) {
  Yoorkin$rabbit$45$tea$dom$$insert_before(Yoorkin$rabbit$45$tea$dom$$js_identity$70$(s), value, before);
}
function Yoorkin$rabbit$45$tea$dom$$IsNode$get_child$80$(s, index) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_nth_child(Yoorkin$rabbit$45$tea$dom$$js_identity$70$(s), index);
}
function Yoorkin$rabbit$45$tea$dom$$IsNode$get_child_count$80$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_count_child(Yoorkin$rabbit$45$tea$dom$$js_identity$70$(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_ctrl_key$81$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_ctrl_key(Yoorkin$rabbit$45$tea$dom$$js_identity$78$(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_meta_key$81$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_mouse_event_meta_key(Yoorkin$rabbit$45$tea$dom$$js_identity$78$(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsHtmlElement$as_html_element$82$(s) {
  return Yoorkin$rabbit$45$tea$dom$$js_identity$75$(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsHtmlElement$get_style$82$(s) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_html_element_get_style(Yoorkin$rabbit$45$tea$dom$$IsHtmlElement$as_html_element$82$(s));
}
function Yoorkin$rabbit$45$tea$dom$$default_exception_handler$83$(exception) {
  Yoorkin$rabbit$45$tea$dom$$console_log(exception);
  return $panic();
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$79$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s), type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$84$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_add_event_listener(Yoorkin$rabbit$45$tea$dom$$js_identity$72$(s), type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$remove_event_listener$84$(s, type_, callback) {
  Yoorkin$rabbit$45$tea$dom$$ffi_remove_event_listener(Yoorkin$rabbit$45$tea$dom$$js_identity$72$(s), type_, callback);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$as_event_target$79$(s) {
  return Yoorkin$rabbit$45$tea$dom$$js_identity$73$(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_element$80$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$36$(Yoorkin$rabbit$45$tea$dom$$ffi_to_element(Yoorkin$rabbit$45$tea$dom$$js_identity$70$(s)));
}
function Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_element$79$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$37$(Yoorkin$rabbit$45$tea$dom$$ffi_to_html_element(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s)));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$prevent_default$85$(s) {
  Yoorkin$rabbit$45$tea$dom$$ffi_event_prevent_default(Yoorkin$rabbit$45$tea$dom$$IsEvent$as_event$85$(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$stop_propagation$85$(s) {
  Yoorkin$rabbit$45$tea$dom$$ffi_event_stop_propagation(Yoorkin$rabbit$45$tea$dom$$IsEvent$as_event$85$(s));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$as_event$85$(s) {
  return Yoorkin$rabbit$45$tea$dom$$js_identity$74$(s);
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_ui_event$85$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$39$(Yoorkin$rabbit$45$tea$dom$$ffi_to_ui_event(Yoorkin$rabbit$45$tea$dom$$js_identity$77$(s)));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$86$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$38$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(Yoorkin$rabbit$45$tea$dom$$js_identity$76$(s)));
}
function Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$85$(s) {
  return rami3l$js$45$ffi$js$$Nullable$to_option$38$(Yoorkin$rabbit$45$tea$dom$$ffi_to_mouse_event(Yoorkin$rabbit$45$tea$dom$$js_identity$77$(s)));
}
function Yoorkin$rabbit$45$tea$dom$$IsElement$set_attribute$79$(s, attr, value) {
  Yoorkin$rabbit$45$tea$dom$$ffi_element_set_attribute(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s), attr, value);
}
function Yoorkin$rabbit$45$tea$dom$$IsElement$remove_attribute$79$(s, attr) {
  Yoorkin$rabbit$45$tea$dom$$ffi_element_remove_attribute(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s), attr);
}
function Yoorkin$rabbit$45$tea$dom$$IsElement$set_property$79$(s, prop, value) {
  Yoorkin$rabbit$45$tea$dom$$ffi_element_set_property(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s), prop, value);
}
function Yoorkin$rabbit$45$tea$dom$$IsElement$get_property$79$(s, prop) {
  return Yoorkin$rabbit$45$tea$dom$$ffi_element_get_property(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s), prop);
}
function Yoorkin$rabbit$45$tea$dom$$IsElement$remove_property$79$(s, prop) {
  Yoorkin$rabbit$45$tea$dom$$ffi_element_remove_property(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s), prop);
}
function Yoorkin$rabbit$45$tea$dom$$IsElement$set_inner_html$79$(s, html) {
  Yoorkin$rabbit$45$tea$dom$$ffi_element_set_inner_html(Yoorkin$rabbit$45$tea$dom$$js_identity$69$(s), html);
}
function Yoorkin$rabbit$45$tea$dom$$Document$create_element_ns(self, namespace_uri, qualified_name, on_namespace_error$46$opt, on_invalid_character_error$46$opt) {
  let on_namespace_error;
  if (on_namespace_error$46$opt === undefined) {
    on_namespace_error = Yoorkin$rabbit$45$tea$dom$$default_exception_handler$83$;
  } else {
    const _Some = on_namespace_error$46$opt;
    on_namespace_error = _Some;
  }
  let on_invalid_character_error;
  if (on_invalid_character_error$46$opt === undefined) {
    on_invalid_character_error = Yoorkin$rabbit$45$tea$dom$$default_exception_handler$83$;
  } else {
    const _Some = on_invalid_character_error$46$opt;
    on_invalid_character_error = _Some;
  }
  return Yoorkin$rabbit$45$tea$dom$$Document$create_element_ns$46$inner(self, namespace_uri, qualified_name, on_namespace_error, on_invalid_character_error);
}
function Yoorkin$rabbit$45$tea$cmd$$Events$new$87$(on_url_changed, on_url_request, on_update) {
  return { on_url_changed: on_url_changed, on_url_request: on_url_request, on_update: on_update };
}
function Yoorkin$rabbit$45$tea$cmd$$Events$trigger_update$87$(self, msg) {
  const _func = self.on_update;
  _func(msg);
}
function Yoorkin$rabbit$45$tea$cmd$$none$87$() {
  return moonbitlang$core$builtin$$ignore$15$;
}
function Yoorkin$rabbit$45$tea$cmd$$batch$87$(xs) {
  return (events) => {
    moonbitlang$core$array$$Array$each$46$(xs, (cmd) => {
      const _func = cmd;
      _func(events);
    });
  };
}
function Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$get_on_url_request$88$(self) {
  return self.on_url_request;
}
function Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$launch$88$(self, cmd) {
  const f = cmd;
  f(moonbitlang$core$option$$Option$unwrap$15$(self.predefined));
}
function Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(self, message) {
  let cmd;
  let model;
  _L: {
    const _func = self.update;
    const _bind = _func(message, self.model);
    const _cmd = _bind._0;
    const _model = _bind._1;
    cmd = _cmd;
    model = _model;
    break _L;
  }
  self.model = model;
  const _func = self.view;
  const view = _func(self.model);
  const _func$2 = self.after_update;
  _func$2(view);
  Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$launch$88$(self, cmd);
}
function Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$refresh$88$(self) {
  const _func = self.view;
  const view = _func(self.model);
  const _func$2 = self.after_update;
  _func$2(view);
}
function Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$new$89$(model, update, view, after_update, url_changed, url_request) {
  const sandbox = { model: model, update: update, view: view, after_update: after_update, on_url_changed: url_changed, on_url_request: url_request, predefined: undefined };
  let on_url_changed;
  let f;
  _L: {
    _L$2: {
      if (url_changed === undefined) {
        on_url_changed = moonbitlang$core$builtin$$ignore$13$;
      } else {
        const _Some = url_changed;
        const _f = _Some;
        f = _f;
        break _L$2;
      }
      break _L;
    }
    on_url_changed = (url) => {
      Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, f(url));
    };
  }
  let on_url_request;
  let f$2;
  _L$2: {
    _L$3: {
      if (url_request === undefined) {
        on_url_request = moonbitlang$core$builtin$$ignore$14$;
      } else {
        const _Some = url_request;
        const _f = _Some;
        f$2 = _f;
        break _L$3;
      }
      break _L$2;
    }
    on_url_request = (url) => {
      Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, f$2(url));
    };
  }
  Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$84$(Yoorkin$rabbit$45$tea$dom$$Window$to_event_target(Yoorkin$rabbit$45$tea$dom$$window()), "popstate", (_discard_) => {
    let url;
    _L$3: {
      let _bind;
      let _try_err;
      _L$4: {
        _L$5: {
          const _bind$2 = Yoorkin$rabbit$45$tea$url$$parse(Yoorkin$rabbit$45$tea$dom$$Window$current_url(Yoorkin$rabbit$45$tea$dom$$window()));
          let _tmp;
          if (_bind$2.$tag === 1) {
            const _ok = _bind$2;
            _tmp = _ok._0;
          } else {
            const _err = _bind$2;
            const _tmp$2 = _err._0;
            _try_err = _tmp$2;
            break _L$5;
          }
          _bind = new Result$Ok$27$(_tmp);
          break _L$4;
        }
        _bind = new Result$Err$27$(_try_err);
      }
      if (_bind.$tag === 1) {
        const _Ok = _bind;
        const _url = _Ok._0;
        url = _url;
        break _L$3;
      } else {
        $panic();
        return;
      }
    }
    on_url_changed(url);
  });
  sandbox.predefined = Yoorkin$rabbit$45$tea$cmd$$Events$new$87$(on_url_changed, on_url_request, (_hole18) => {
    Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, _hole18);
  });
  return sandbox;
}
function moonbitlang$core$builtin$$Eq$equal$17$(_x_33, _x_34) {
  let _x0_41;
  let _y0_42;
  _L: {
    let _x0_39;
    let _y0_40;
    _L$2: {
      let _x0_37;
      let _y0_38;
      _L$3: {
        let _x0_35;
        let _y0_36;
        _L$4: {
          switch (_x_33.$tag) {
            case 0: {
              const _Boolean = _x_33;
              const _$42$x0_35 = _Boolean._0;
              if (_x_34.$tag === 0) {
                const _Boolean$2 = _x_34;
                const _$42$y0_36 = _Boolean$2._0;
                _x0_35 = _$42$x0_35;
                _y0_36 = _$42$y0_36;
                break _L$4;
              } else {
                return false;
              }
            }
            case 1: {
              const _Integer = _x_33;
              const _$42$x0_37 = _Integer._0;
              if (_x_34.$tag === 1) {
                const _Integer$2 = _x_34;
                const _$42$y0_38 = _Integer$2._0;
                _x0_37 = _$42$x0_37;
                _y0_38 = _$42$y0_38;
                break _L$3;
              } else {
                return false;
              }
            }
            case 2: {
              const _Floating = _x_33;
              const _$42$x0_39 = _Floating._0;
              if (_x_34.$tag === 2) {
                const _Floating$2 = _x_34;
                const _$42$y0_40 = _Floating$2._0;
                _x0_39 = _$42$x0_39;
                _y0_40 = _$42$y0_40;
                break _L$2;
              } else {
                return false;
              }
            }
            default: {
              const _String = _x_33;
              const _$42$x0_41 = _String._0;
              if (_x_34.$tag === 3) {
                const _String$2 = _x_34;
                const _$42$y0_42 = _String$2._0;
                _x0_41 = _$42$x0_41;
                _y0_42 = _$42$y0_42;
                break _L;
              } else {
                return false;
              }
            }
          }
        }
        return _x0_35 === _y0_36;
      }
      return _x0_37 === _y0_38;
    }
    return _x0_39 === _y0_40;
  }
  return _x0_41 === _y0_42;
}
function Yoorkin$rabbit$45$tea$internal$vdom$$node$87$(tag, attrs, children) {
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$32$(tag, undefined, attrs, children, []);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$link$46$inner$87$(attrs, children, escape) {
  const tag = escape ? "RABBIT-TEA-ESCAPED-LINK" : "a";
  return Yoorkin$rabbit$45$tea$internal$vdom$$node$87$(tag, attrs, children);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$text$87$(value) {
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$32$(value);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$is_same_type$87$(x, y) {
  switch (x.$tag) {
    case 0: {
      if (y.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (y.$tag === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (y.$tag === 3) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (y.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function Yoorkin$rabbit$45$tea$internal$vdom$$Attribute$inner$87$(self) {
  return { _0: self._0, _1: self._1 };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$on$87$(event, handler) {
  return { _0: event, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$32$(handler) };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$attribute$87$(key, value) {
  return { _0: key, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$32$(value) };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$variant_to_js_value(value) {
  let value$2;
  _L: {
    let value$3;
    _L$2: {
      let value$4;
      _L$3: {
        let value$5;
        _L$4: {
          switch (value.$tag) {
            case 3: {
              const _String = value;
              const _value = _String._0;
              value$5 = _value;
              break _L$4;
            }
            case 2: {
              const _Floating = value;
              const _value$2 = _Floating._0;
              value$4 = _value$2;
              break _L$3;
            }
            case 1: {
              const _Integer = value;
              const _value$3 = _Integer._0;
              value$3 = _value$3;
              break _L$2;
            }
            default: {
              const _Boolean = value;
              const _value$4 = _Boolean._0;
              value$2 = _value$4;
              break _L;
            }
          }
        }
        return value$5;
      }
      return value$4;
    }
    return value$3;
  }
  return value$2;
}
function Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$88$(self, sandbox) {
  const attach_attrs = (attrs, element, generated_listeners) => {
    moonbitlang$core$array$$Array$each$45$(attrs, (x) => {
      let key;
      let value;
      _L: {
        let key$2;
        let value$2;
        _L$2: {
          let key$3;
          let value$3;
          _L$3: {
            let event;
            let handler;
            _L$4: {
              const _event = x._0;
              const _x = x._1;
              switch (_x.$tag) {
                case 0: {
                  const _AttrEvent = _x;
                  const _handler = _AttrEvent._0;
                  event = _event;
                  handler = _handler;
                  break _L$4;
                }
                case 2: {
                  const _AttrString = _x;
                  const _value = _AttrString._0;
                  key$3 = _event;
                  value$3 = _value;
                  break _L$3;
                }
                case 1: {
                  const _AttrStyle = _x;
                  const _value$2 = _AttrStyle._0;
                  key$2 = _event;
                  value$2 = _value$2;
                  break _L$2;
                }
                default: {
                  const _AttrProperty = _x;
                  const _value$3 = _AttrProperty._0;
                  key = _event;
                  value = _value$3;
                  break _L;
                }
              }
            }
            let listener;
            let stop_propagation;
            let msg;
            let prevent_default;
            _L$5: {
              _L$6: {
                let f;
                _L$7: {
                  _L$8: {
                    let msg$2;
                    _L$9: {
                      switch (handler.$tag) {
                        case 0: {
                          const _Normal = handler;
                          const _msg = _Normal._0;
                          msg$2 = _msg;
                          break _L$9;
                        }
                        case 1: {
                          const _HandleEvent = handler;
                          const _f = _HandleEvent._0;
                          f = _f;
                          break _L$8;
                        }
                        default: {
                          const _Custom = handler;
                          const _msg$2 = _Custom._0;
                          const _stop_propagation = _Custom._1;
                          const _prevent_default = _Custom._2;
                          stop_propagation = _stop_propagation;
                          msg = _msg$2;
                          prevent_default = _prevent_default;
                          break _L$6;
                        }
                      }
                    }
                    listener = (_discard_) => {
                      Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, msg$2);
                    };
                    break _L$7;
                  }
                  listener = (event$2) => {
                    Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, f(event$2));
                  };
                }
                break _L$5;
              }
              listener = (event$2) => {
                if (stop_propagation) {
                  Yoorkin$rabbit$45$tea$dom$$IsEvent$stop_propagation$85$(event$2);
                }
                if (prevent_default) {
                  Yoorkin$rabbit$45$tea$dom$$IsEvent$prevent_default$85$(event$2);
                }
                Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, msg);
              };
            }
            Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$79$(element, event, listener);
            moonbitlang$core$array$$Array$push$50$(generated_listeners, { _0: event, _1: listener });
            return;
          }
          Yoorkin$rabbit$45$tea$dom$$IsElement$set_attribute$79$(element, key$3, value$3);
          return;
        }
        Yoorkin$rabbit$45$tea$dom$$CSSStyleDeclaration$set_property(Yoorkin$rabbit$45$tea$dom$$IsHtmlElement$get_style$82$(moonbitlang$core$option$$Option$unwrap$37$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_element$79$(element))), key$2, value$2);
        return;
      }
      Yoorkin$rabbit$45$tea$dom$$IsElement$set_property$79$(element, key, Yoorkin$rabbit$45$tea$internal$vdom$$variant_to_js_value(value));
    });
  };
  let value;
  _L: {
    let width;
    let node;
    let attrs;
    let height;
    _L$2: {
      let listeners;
      let attrs$2;
      let tag;
      let children;
      let namespace_uri;
      _L$3: {
        switch (self.$tag) {
          case 0: {
            const _Node = self;
            const _tag = _Node._0;
            const _attrs = _Node._2;
            const _children = _Node._3;
            const _listeners = _Node._4;
            const _namespace_uri = _Node._1;
            listeners = _listeners;
            attrs$2 = _attrs;
            tag = _tag;
            children = _children;
            namespace_uri = _namespace_uri;
            break _L$3;
          }
          case 1: {
            const _ExternalNode = self;
            const _node = _ExternalNode._0;
            const _attrs$2 = _ExternalNode._1;
            const _width = _ExternalNode._2;
            const _height = _ExternalNode._3;
            width = _width;
            node = _node;
            attrs = _attrs$2;
            height = _height;
            break _L$2;
          }
          case 2: {
            const _Text = self;
            const _value = _Text._0;
            value = _value;
            break _L;
          }
          default: {
            return Yoorkin$rabbit$45$tea$dom$$IsNode$as_node$79$(Yoorkin$rabbit$45$tea$dom$$Document$create_text_node(Yoorkin$rabbit$45$tea$dom$$document(), ""));
          }
        }
      }
      let element;
      _L$4: {
        _L$5: {
          _L$6: {
            _L$7: {
              let url_request;
              _L$8: {
                _L$9: {
                  let ns;
                  _L$10: {
                    const _bind = Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$get_on_url_request$88$(sandbox);
                    if (namespace_uri === undefined) {
                      if (_bind === undefined) {
                        if (tag === "RABBIT-TEA-ESCAPED-LINK") {
                          break _L$7;
                        } else {
                          break _L$5;
                        }
                      } else {
                        const _Some = _bind;
                        const _url_request = _Some;
                        switch (tag) {
                          case "a": {
                            url_request = _url_request;
                            break _L$9;
                          }
                          case "RABBIT-TEA-ESCAPED-LINK": {
                            break _L$7;
                          }
                          default: {
                            break _L$5;
                          }
                        }
                      }
                    } else {
                      const _Some = namespace_uri;
                      const _ns = _Some;
                      ns = _ns;
                      break _L$10;
                    }
                  }
                  const element$2 = Yoorkin$rabbit$45$tea$dom$$Document$create_element_ns(Yoorkin$rabbit$45$tea$dom$$document(), ns, tag, undefined, undefined);
                  attach_attrs(attrs$2, element$2, listeners);
                  element = element$2;
                  break _L$8;
                }
                const element$2 = Yoorkin$rabbit$45$tea$dom$$Document$create_element(Yoorkin$rabbit$45$tea$dom$$document(), tag);
                attach_attrs(attrs$2, element$2, listeners);
                Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$79$(element$2, "click", (event) => {
                  const mouse_event = moonbitlang$core$option$$Option$unwrap$38$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$86$(moonbitlang$core$option$$Option$unwrap$39$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_ui_event$85$(event))));
                  if (!(Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_meta_key$81$(mouse_event) || Yoorkin$rabbit$45$tea$dom$$IsMouseEvent$get_ctrl_key$81$(mouse_event))) {
                    Yoorkin$rabbit$45$tea$dom$$IsEvent$prevent_default$85$(event);
                    const href = Yoorkin$rabbit$45$tea$dom$$IsElement$get_property$79$(element$2, "href");
                    let curr;
                    _L$10: {
                      let _bind;
                      let _try_err;
                      _L$11: {
                        _L$12: {
                          const _bind$2 = Yoorkin$rabbit$45$tea$url$$parse(Yoorkin$rabbit$45$tea$dom$$Window$current_url(Yoorkin$rabbit$45$tea$dom$$window()));
                          let _tmp;
                          if (_bind$2.$tag === 1) {
                            const _ok = _bind$2;
                            _tmp = _ok._0;
                          } else {
                            const _err = _bind$2;
                            const _tmp$2 = _err._0;
                            _try_err = _tmp$2;
                            break _L$12;
                          }
                          _bind = new Result$Ok$27$(_tmp);
                          break _L$11;
                        }
                        _bind = new Result$Err$27$(_try_err);
                      }
                      if (_bind.$tag === 1) {
                        const _Ok = _bind;
                        const _curr = _Ok._0;
                        curr = _curr;
                        break _L$10;
                      } else {
                        $panic();
                        return;
                      }
                    }
                    let next;
                    _L$11: {
                      let _bind;
                      let _try_err;
                      _L$12: {
                        _L$13: {
                          const _bind$2 = Yoorkin$rabbit$45$tea$url$$parse(href);
                          let _tmp;
                          if (_bind$2.$tag === 1) {
                            const _ok = _bind$2;
                            _tmp = _ok._0;
                          } else {
                            const _err = _bind$2;
                            const _tmp$2 = _err._0;
                            _try_err = _tmp$2;
                            break _L$13;
                          }
                          _bind = new Result$Ok$27$(_tmp);
                          break _L$12;
                        }
                        _bind = new Result$Err$27$(_try_err);
                      }
                      if (_bind.$tag === 1) {
                        const _Ok = _bind;
                        const _next = _Ok._0;
                        next = _next;
                        break _L$11;
                      } else {
                        $panic();
                        return;
                      }
                    }
                    const request = moonbitlang$core$builtin$$Eq$equal$68$(curr.protocol, next.protocol) && (curr.host === next.host && moonbitlang$core$builtin$$Eq$equal$35$(curr.port, next.port)) ? new $64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$Internal(next) : new $64$Yoorkin$47$rabbit$45$tea$47$url$46$UrlRequest$External(href);
                    Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, url_request(request));
                    return;
                  } else {
                    return;
                  }
                });
                element = element$2;
              }
              break _L$6;
            }
            const element$2 = Yoorkin$rabbit$45$tea$dom$$Document$create_element(Yoorkin$rabbit$45$tea$dom$$document(), "a");
            attach_attrs(attrs$2, element$2, listeners);
            element = element$2;
          }
          break _L$4;
        }
        const element$2 = Yoorkin$rabbit$45$tea$dom$$Document$create_element(Yoorkin$rabbit$45$tea$dom$$document(), tag);
        attach_attrs(attrs$2, element$2, listeners);
        element = element$2;
      }
      const _arr = children;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const child = _arr[_i];
          Yoorkin$rabbit$45$tea$dom$$IsNode$append_child$79$(element, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$88$(child, sandbox));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return Yoorkin$rabbit$45$tea$dom$$IsNode$as_node$79$(element);
    }
    let xs;
    _L$3: {
      _L$4: {
        const _bind = attrs.val;
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _xs = _Some._0;
          xs = _xs;
          break _L$4;
        }
        break _L$3;
      }
      attach_attrs(xs, moonbitlang$core$option$$Option$unwrap$36$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_element$80$(node)), []);
      attrs.val = Option$None$33$;
    }
    const element = Yoorkin$rabbit$45$tea$dom$$Document$create_element(Yoorkin$rabbit$45$tea$dom$$document(), "div");
    const _self = Yoorkin$rabbit$45$tea$dom$$IsHtmlElement$get_style$82$(moonbitlang$core$option$$Option$unwrap$37$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_element$79$(element)));
    Yoorkin$rabbit$45$tea$dom$$CSSStyleDeclaration$set_property(_self, "width", moonbitlang$core$int$$Int$to_string$46$inner(width, 10));
    Yoorkin$rabbit$45$tea$dom$$CSSStyleDeclaration$set_property(_self, "height", moonbitlang$core$int$$Int$to_string$46$inner(height, 10));
    Yoorkin$rabbit$45$tea$dom$$IsNode$append_child$79$(element, node);
    return Yoorkin$rabbit$45$tea$dom$$IsNode$as_node$79$(element);
  }
  return Yoorkin$rabbit$45$tea$dom$$IsNode$as_node$79$(Yoorkin$rabbit$45$tea$dom$$Document$create_text_node(Yoorkin$rabbit$45$tea$dom$$document(), value));
}
function Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$87$(old, new_, listeners) {
  const old_map = moonbitlang$core$builtin$$Map$from_iter$43$(moonbitlang$core$builtin$$Iter$map$56$(moonbitlang$core$array$$Array$iter$34$(old), (_hole29) => Yoorkin$rabbit$45$tea$internal$vdom$$Attribute$inner$87$(_hole29)));
  const new_map = moonbitlang$core$builtin$$Map$from_iter$43$(moonbitlang$core$builtin$$Iter$map$56$(moonbitlang$core$array$$Array$iter$34$(new_), (_hole32) => Yoorkin$rabbit$45$tea$internal$vdom$$Attribute$inner$87$(_hole32)));
  const result = [];
  const _arr = listeners;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const x = _arr[_i];
      moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$32$(x._0, x._1));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind = moonbitlang$core$builtin$$Map$iter2$43$(old_map);
  _bind((key, value) => {
    let value$2;
    _L: {
      _L$2: {
        let value$3;
        _L$3: {
          _L$4: {
            let value$4;
            _L$5: {
              _L$6: {
                switch (value.$tag) {
                  case 0: {
                    break;
                  }
                  case 1: {
                    const _AttrStyle = value;
                    const _value = _AttrStyle._0;
                    value$4 = _value;
                    break _L$6;
                  }
                  case 2: {
                    const _AttrString = value;
                    const _value$2 = _AttrString._0;
                    value$3 = _value$2;
                    break _L$4;
                  }
                  default: {
                    const _AttrProperty = value;
                    const _value$3 = _AttrProperty._0;
                    value$2 = _value$3;
                    break _L$2;
                  }
                }
                break _L$5;
              }
              if (moonbitlang$core$builtin$$Map$contains$43$(new_map, key)) {
                let value_new;
                _L$7: {
                  _L$8: {
                    const _bind$2 = moonbitlang$core$option$$Option$unwrap$40$(moonbitlang$core$builtin$$Map$get$43$(new_map, key));
                    if (_bind$2.$tag === 1) {
                      const _AttrStyle = _bind$2;
                      const _value_new = _AttrStyle._0;
                      value_new = _value_new;
                      break _L$8;
                    } else {
                      $panic();
                    }
                    break _L$7;
                  }
                  if (moonbitlang$core$builtin$$op_notequal$2$(value$4, value_new)) {
                    moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$32$(key, value_new));
                  }
                }
              } else {
                moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$32$(key));
              }
            }
            break _L$3;
          }
          if (moonbitlang$core$builtin$$Map$contains$43$(new_map, key)) {
            let value_new;
            _L$5: {
              _L$6: {
                const _bind$2 = moonbitlang$core$option$$Option$unwrap$40$(moonbitlang$core$builtin$$Map$get$43$(new_map, key));
                if (_bind$2.$tag === 2) {
                  const _AttrString = _bind$2;
                  const _value_new = _AttrString._0;
                  value_new = _value_new;
                  break _L$6;
                } else {
                  $panic();
                }
                break _L$5;
              }
              if (moonbitlang$core$builtin$$op_notequal$2$(value$3, value_new)) {
                moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$32$(key, value_new));
              }
            }
          } else {
            moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$32$(key));
          }
        }
        break _L;
      }
      if (moonbitlang$core$builtin$$Map$contains$43$(new_map, key)) {
        let value_new;
        _L$3: {
          _L$4: {
            const _bind$2 = moonbitlang$core$option$$Option$unwrap$40$(moonbitlang$core$builtin$$Map$get$43$(new_map, key));
            if (_bind$2.$tag === 3) {
              const _AttrProperty = _bind$2;
              const _value_new = _AttrProperty._0;
              value_new = _value_new;
              break _L$4;
            } else {
              $panic();
            }
            break _L$3;
          }
          if (moonbitlang$core$builtin$$op_notequal$17$(value$2, value_new)) {
            moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$32$(key, value_new));
          }
        }
      } else {
        moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$32$(key));
      }
    }
    return 1;
  });
  const _bind$2 = moonbitlang$core$builtin$$Map$iter2$43$(new_map);
  _bind$2((key, value) => {
    let value$2;
    _L: {
      _L$2: {
        let value$3;
        _L$3: {
          _L$4: {
            let value$4;
            _L$5: {
              _L$6: {
                let handler;
                _L$7: {
                  switch (value.$tag) {
                    case 0: {
                      const _AttrEvent = value;
                      const _handler = _AttrEvent._0;
                      handler = _handler;
                      break _L$7;
                    }
                    case 1: {
                      const _AttrStyle = value;
                      const _value = _AttrStyle._0;
                      value$4 = _value;
                      break _L$6;
                    }
                    case 2: {
                      const _AttrString = value;
                      const _value$2 = _AttrString._0;
                      value$3 = _value$2;
                      break _L$4;
                    }
                    default: {
                      const _AttrProperty = value;
                      const _value$3 = _AttrProperty._0;
                      value$2 = _value$3;
                      break _L$2;
                    }
                  }
                }
                moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$32$(key, handler));
                break _L$5;
              }
              if (!moonbitlang$core$builtin$$Map$contains$43$(old_map, key)) {
                moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$32$(key, value$4));
              }
            }
            break _L$3;
          }
          if (!moonbitlang$core$builtin$$Map$contains$43$(old_map, key)) {
            moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$32$(key, value$3));
          }
        }
        break _L;
      }
      if (!moonbitlang$core$builtin$$Map$contains$43$(old_map, key)) {
        moonbitlang$core$array$$Array$push$52$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$32$(key, value$2));
      }
    }
    return 1;
  });
  return result;
}
function Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$87$(old, new_) {
  let children_old;
  if (old.$tag === 0) {
    const _Node = old;
    const _children = _Node._3;
    children_old = _children;
  } else {
    children_old = moonbitlang$core$abort$$abort$5$("old is not a node or fragment");
  }
  let children_new;
  if (new_.$tag === 0) {
    const _Node = new_;
    const _children = _Node._3;
    children_new = _children;
  } else {
    children_new = moonbitlang$core$abort$$abort$5$("new is not a node or fragment");
  }
  return children_old.length === 0 && children_new.length === 0 ? [] : Yoorkin$rabbit$45$tea$internal$vdom$$diff_without_key$87$(children_old, children_new);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$diff_without_key$87$(old, new_) {
  const aux = (xs, ys, patches, index) => {
    let _tmp = xs;
    let _tmp$2 = ys;
    let _tmp$3 = patches;
    let _tmp$4 = index;
    while (true) {
      const xs$2 = _tmp;
      const ys$2 = _tmp$2;
      const patches$2 = _tmp$3;
      const index$2 = _tmp$4;
      let x;
      let tl1;
      let tl2;
      let y;
      _L: {
        let l;
        _L$2: {
          let tl;
          _L$3: {
            if (xs$2.len === 0) {
              if (ys$2.len === 0) {
                return;
              } else {
                tl = ys$2;
                break _L$3;
              }
            } else {
              if (ys$2.len === 0) {
                l = xs$2;
                break _L$2;
              } else {
                const _x = xs$2.buf[xs$2.start];
                const _bind = 1;
                const _tmp$5 = xs$2.buf;
                const _tmp$6 = _bind + xs$2.start | 0;
                const _some = xs$2.len;
                const _x$2 = { buf: _tmp$5, start: _tmp$6, len: _some - _bind | 0 };
                const _y = ys$2.buf[ys$2.start];
                const _bind$2 = 1;
                const _tmp$7 = ys$2.buf;
                const _tmp$8 = _bind$2 + ys$2.start | 0;
                const _some$2 = ys$2.len;
                const _x$3 = { buf: _tmp$7, start: _tmp$8, len: _some$2 - _bind$2 | 0 };
                x = _x;
                tl1 = _x$2;
                tl2 = _x$3;
                y = _y;
                break _L;
              }
            }
          }
          moonbitlang$core$array$$Array$push$53$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$32$(moonbitlang$core$array$$ArrayView$map$60$(tl, (x$2) => x$2)));
          return;
        }
        moonbitlang$core$array$$Array$push$53$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$32$(index$2, moonbitlang$core$array$$ArrayView$length$9$(l)));
        return;
      }
      if (Yoorkin$rabbit$45$tea$internal$vdom$$is_same_type$87$(x, y)) {
        let value_a;
        let value_b;
        _L$2: {
          _L$3: {
            let listeners;
            let taga;
            let xattrs;
            let yattrs;
            let tagb;
            let new_listeners;
            _L$4: {
              _L$5: {
                switch (x.$tag) {
                  case 0: {
                    const _Node = x;
                    const _taga = _Node._0;
                    const _xattrs = _Node._2;
                    const _listeners = _Node._4;
                    if (y.$tag === 0) {
                      const _Node$2 = y;
                      const _tagb = _Node$2._0;
                      const _yattrs = _Node$2._2;
                      const _new_listeners = _Node$2._4;
                      listeners = _listeners;
                      taga = _taga;
                      xattrs = _xattrs;
                      yattrs = _yattrs;
                      tagb = _tagb;
                      new_listeners = _new_listeners;
                      break _L$5;
                    }
                    break;
                  }
                  case 1: {
                    if (y.$tag === 1) {
                      moonbitlang$core$array$$Array$push$53$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$32$(index$2, y));
                    }
                    break;
                  }
                  case 2: {
                    const _Text = x;
                    const _value_a = _Text._0;
                    if (y.$tag === 2) {
                      const _Text$2 = y;
                      const _value_b = _Text$2._0;
                      value_a = _value_a;
                      value_b = _value_b;
                      break _L$3;
                    }
                    break;
                  }
                }
                break _L$4;
              }
              if (taga === tagb) {
                const attrs_patches = Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$87$(xattrs, yattrs, listeners);
                const childs_patches = Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$87$(x, y);
                if (attrs_patches.length > 0 || childs_patches.length > 0) {
                  moonbitlang$core$array$$Array$push$53$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$32$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$32$(index$2, attrs_patches, childs_patches, new_listeners)));
                }
              } else {
                moonbitlang$core$array$$Array$push$53$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$32$(index$2, y));
              }
            }
            break _L$2;
          }
          if (moonbitlang$core$builtin$$op_notequal$2$(value_a, value_b)) {
            moonbitlang$core$array$$Array$push$53$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$32$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$32$(index$2, value_b)));
          }
        }
      } else {
        moonbitlang$core$array$$Array$push$53$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$32$(index$2, y));
      }
      _tmp = tl1;
      _tmp$2 = tl2;
      _tmp$4 = index$2 + 1 | 0;
      continue;
    }
  };
  const patches = [];
  aux({ buf: old, start: 0, len: old.length }, { buf: new_, start: 0, len: new_.length }, patches, 0);
  return patches;
}
function Yoorkin$rabbit$45$tea$internal$vdom$$diff$87$(root_old, root_new) {
  let attrs_old;
  let listeners;
  _L: {
    if (root_old.$tag === 0) {
      const _Node = root_old;
      const _attrs_old = _Node._2;
      const _listeners = _Node._4;
      attrs_old = _attrs_old;
      listeners = _listeners;
      break _L;
    } else {
      return $panic();
    }
  }
  let attrs_new;
  _L$2: {
    if (root_new.$tag === 0) {
      const _Node = root_new;
      const _attrs_new = _Node._2;
      attrs_new = _attrs_new;
      break _L$2;
    } else {
      return $panic();
    }
  }
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$32$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$32$(0, Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$87$(attrs_old, attrs_new, listeners), Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$87$(root_old, root_new), []));
}
function Yoorkin$rabbit$45$tea$internal$vdom$$Node$patch$88$(self, old, sandbox, mount) {
  const patches = Yoorkin$rabbit$45$tea$internal$vdom$$diff$87$(old, self);
  const aux = (patches$2, current) => {
    let update;
    _L: {
      let nodes;
      _L$2: {
        let index;
        let node;
        _L$3: {
          let index$2;
          let node$2;
          _L$4: {
            let index$3;
            _L$5: {
              let index$4;
              let length;
              _L$6: {
                switch (patches$2.$tag) {
                  case 0: {
                    const _Drop = patches$2;
                    const _index = _Drop._0;
                    const _length = _Drop._1;
                    index$4 = _index;
                    length = _length;
                    break _L$6;
                  }
                  case 1: {
                    const _Remove = patches$2;
                    const _index$2 = _Remove._0;
                    index$3 = _index$2;
                    break _L$5;
                  }
                  case 2: {
                    const _Replace = patches$2;
                    const _index$3 = _Replace._0;
                    const _node = _Replace._1;
                    index$2 = _index$3;
                    node$2 = _node;
                    break _L$4;
                  }
                  case 3: {
                    const _InsertBefore = patches$2;
                    const _index$4 = _InsertBefore._0;
                    const _node$2 = _InsertBefore._1;
                    index = _index$4;
                    node = _node$2;
                    break _L$3;
                  }
                  case 4: {
                    const _Append = patches$2;
                    const _nodes = _Append._0;
                    nodes = _nodes;
                    break _L$2;
                  }
                  default: {
                    const _Update = patches$2;
                    const _update = _Update._0;
                    update = _update;
                    break _L;
                  }
                }
              }
              const _start81 = 0;
              const _end82 = length;
              let _tmp = _start81;
              while (true) {
                const i = _tmp;
                if (i < _end82) {
                  Yoorkin$rabbit$45$tea$dom$$IsNode$remove_child$80$(current, Yoorkin$rabbit$45$tea$dom$$IsNode$get_child$80$(current, index$4));
                  _tmp = i + 1 | 0;
                  continue;
                } else {
                  return;
                }
              }
            }
            Yoorkin$rabbit$45$tea$dom$$IsNode$remove_child$80$(current, Yoorkin$rabbit$45$tea$dom$$IsNode$get_child$80$(current, index$3));
            return;
          }
          Yoorkin$rabbit$45$tea$dom$$IsNode$replace_child$80$(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$88$(node$2, sandbox), Yoorkin$rabbit$45$tea$dom$$IsNode$get_child$80$(current, index$2));
          return;
        }
        if (Yoorkin$rabbit$45$tea$dom$$IsNode$get_child_count$80$(current) === 0) {
          Yoorkin$rabbit$45$tea$dom$$IsNode$append_child$80$(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$88$(node, sandbox));
          return;
        } else {
          Yoorkin$rabbit$45$tea$dom$$IsNode$insert_before$80$(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$88$(node, sandbox), Yoorkin$rabbit$45$tea$dom$$IsNode$get_child$80$(current, index));
          return;
        }
      }
      const _arr = nodes;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const node = _arr[_i];
          Yoorkin$rabbit$45$tea$dom$$IsNode$append_child$80$(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$88$(node, sandbox));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    let index;
    let value;
    _L$2: {
      let childs_patches;
      let index$2;
      let attrs_patches;
      let new_listeners;
      _L$3: {
        if (update.$tag === 0) {
          const _UpdateNode = update;
          const _index = _UpdateNode._0;
          const _attrs_patches = _UpdateNode._1;
          const _childs_patches = _UpdateNode._2;
          const _new_listeners = _UpdateNode._3;
          childs_patches = _childs_patches;
          index$2 = _index;
          attrs_patches = _attrs_patches;
          new_listeners = _new_listeners;
          break _L$3;
        } else {
          const _UpdateText = update;
          const _index = _UpdateText._0;
          const _value = _UpdateText._1;
          index = _index;
          value = _value;
          break _L$2;
        }
      }
      const node = Yoorkin$rabbit$45$tea$dom$$IsNode$get_child$80$(current, index$2);
      const element = moonbitlang$core$option$$Option$unwrap$36$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_element$80$(node));
      const _arr = attrs_patches;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const patch = _arr[_i];
          let key;
          let handler;
          _L$4: {
            _L$5: {
              let key$2;
              let listener;
              _L$6: {
                _L$7: {
                  let key$3;
                  _L$8: {
                    _L$9: {
                      let key$4;
                      let value$2;
                      _L$10: {
                        _L$11: {
                          let key$5;
                          _L$12: {
                            _L$13: {
                              let key$6;
                              let value$3;
                              _L$14: {
                                _L$15: {
                                  let key$7;
                                  let value$4;
                                  _L$16: {
                                    _L$17: {
                                      let key$8;
                                      _L$18: {
                                        switch (patch.$tag) {
                                          case 0: {
                                            const _AttrRemove = patch;
                                            const _key = _AttrRemove._0;
                                            key$8 = _key;
                                            break _L$18;
                                          }
                                          case 1: {
                                            const _AttrAdd = patch;
                                            const _key$2 = _AttrAdd._0;
                                            const _value = _AttrAdd._1;
                                            key$7 = _key$2;
                                            value$4 = _value;
                                            break _L$17;
                                          }
                                          case 2: {
                                            const _StyleAdd = patch;
                                            const _key$3 = _StyleAdd._0;
                                            const _value$2 = _StyleAdd._1;
                                            key$6 = _key$3;
                                            value$3 = _value$2;
                                            break _L$15;
                                          }
                                          case 3: {
                                            const _StyleRemove = patch;
                                            const _key$4 = _StyleRemove._0;
                                            key$5 = _key$4;
                                            break _L$13;
                                          }
                                          case 4: {
                                            const _PropertyAdd = patch;
                                            const _key$5 = _PropertyAdd._0;
                                            const _value$3 = _PropertyAdd._1;
                                            key$4 = _key$5;
                                            value$2 = _value$3;
                                            break _L$11;
                                          }
                                          case 5: {
                                            const _PropertyRemove = patch;
                                            const _key$6 = _PropertyRemove._0;
                                            key$3 = _key$6;
                                            break _L$9;
                                          }
                                          case 6: {
                                            const _EventRemove = patch;
                                            const _key$7 = _EventRemove._0;
                                            const _listener = _EventRemove._1;
                                            key$2 = _key$7;
                                            listener = _listener;
                                            break _L$7;
                                          }
                                          default: {
                                            const _EventAdd = patch;
                                            const _key$8 = _EventAdd._0;
                                            const _handler = _EventAdd._1;
                                            key = _key$8;
                                            handler = _handler;
                                            break _L$5;
                                          }
                                        }
                                      }
                                      Yoorkin$rabbit$45$tea$dom$$IsElement$remove_attribute$79$(element, key$8);
                                      break _L$16;
                                    }
                                    Yoorkin$rabbit$45$tea$dom$$IsElement$set_attribute$79$(element, key$7, value$4);
                                  }
                                  break _L$14;
                                }
                                const element$2 = moonbitlang$core$option$$Option$unwrap$37$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_element$79$(element));
                                Yoorkin$rabbit$45$tea$dom$$CSSStyleDeclaration$set_property(Yoorkin$rabbit$45$tea$dom$$IsHtmlElement$get_style$82$(element$2), key$6, value$3);
                              }
                              break _L$12;
                            }
                            const element$2 = moonbitlang$core$option$$Option$unwrap$37$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$to_html_element$79$(element));
                            Yoorkin$rabbit$45$tea$dom$$CSSStyleDeclaration$remove_property(Yoorkin$rabbit$45$tea$dom$$IsHtmlElement$get_style$82$(element$2), key$5);
                          }
                          break _L$10;
                        }
                        Yoorkin$rabbit$45$tea$dom$$IsElement$set_property$79$(element, key$4, Yoorkin$rabbit$45$tea$internal$vdom$$variant_to_js_value(value$2));
                      }
                      break _L$8;
                    }
                    Yoorkin$rabbit$45$tea$dom$$IsElement$remove_property$79$(element, key$3);
                  }
                  break _L$6;
                }
                Yoorkin$rabbit$45$tea$dom$$IsEventTarget$remove_event_listener$84$(Yoorkin$rabbit$45$tea$dom$$IsEventTarget$as_event_target$79$(element), key$2, listener);
              }
              break _L$4;
            }
            let listener;
            let stop_propagation;
            let msg;
            let prevent_default;
            _L$6: {
              _L$7: {
                let f;
                _L$8: {
                  _L$9: {
                    let msg$2;
                    _L$10: {
                      switch (handler.$tag) {
                        case 0: {
                          const _Normal = handler;
                          const _msg = _Normal._0;
                          msg$2 = _msg;
                          break _L$10;
                        }
                        case 1: {
                          const _HandleEvent = handler;
                          const _f = _HandleEvent._0;
                          f = _f;
                          break _L$9;
                        }
                        default: {
                          const _Custom = handler;
                          const _msg$2 = _Custom._0;
                          const _stop_propagation = _Custom._1;
                          const _prevent_default = _Custom._2;
                          stop_propagation = _stop_propagation;
                          msg = _msg$2;
                          prevent_default = _prevent_default;
                          break _L$7;
                        }
                      }
                    }
                    listener = (_discard_) => {
                      Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, msg$2);
                    };
                    break _L$8;
                  }
                  listener = (event) => {
                    Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, f(event));
                  };
                }
                break _L$6;
              }
              listener = (event) => {
                if (stop_propagation) {
                  Yoorkin$rabbit$45$tea$dom$$IsEvent$stop_propagation$85$(event);
                }
                if (prevent_default) {
                  Yoorkin$rabbit$45$tea$dom$$IsEvent$prevent_default$85$(event);
                }
                Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$update$88$(sandbox, msg);
              };
            }
            Yoorkin$rabbit$45$tea$dom$$IsEventTarget$add_event_listener$79$(element, key, listener);
            moonbitlang$core$array$$Array$push$50$(new_listeners, { _0: key, _1: listener });
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _arr$2 = childs_patches;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const patch = _arr$2[_i];
          aux(patch, node);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    const text_node = Yoorkin$rabbit$45$tea$dom$$Document$create_text_node(Yoorkin$rabbit$45$tea$dom$$document(), value);
    Yoorkin$rabbit$45$tea$dom$$IsNode$replace_child$80$(current, Yoorkin$rabbit$45$tea$dom$$IsNode$as_node$79$(text_node), Yoorkin$rabbit$45$tea$dom$$IsNode$get_child$80$(current, index));
  };
  const root = Yoorkin$rabbit$45$tea$dom$$IsNode$as_node$79$(rami3l$js$45$ffi$js$$Nullable$unwrap$36$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), mount)));
  aux(patches, root);
}
function Yoorkin$rabbit$45$tea$html$$node$87$(tag, attributes, children) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$node$87$(tag, moonbitlang$core$array$$Array$map$48$(attributes, (_hole402) => _hole402), moonbitlang$core$array$$Array$map$49$(children, (_hole404) => _hole404));
}
function Yoorkin$rabbit$45$tea$html$$Html$to_virtual_dom$87$(self) {
  return Yoorkin$rabbit$45$tea$html$$node$87$("root", [], [self]);
}
function Yoorkin$rabbit$45$tea$html$$attribute$87$(key, value) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$attribute$87$(key, value);
}
function Yoorkin$rabbit$45$tea$html$$common_node$46$inner$87$(style, id, class_, tag, attributes, children) {
  const attrs = [];
  if (style.length > 0) {
    const _bind = ";";
    moonbitlang$core$array$$Array$push$12$(attrs, Yoorkin$rabbit$45$tea$html$$attribute$87$("style", moonbitlang$core$array$$Array$join$2$(style, { str: _bind, start: 0, end: _bind.length })));
  }
  let class$2;
  _L: {
    _L$2: {
      if (class_ === undefined) {
      } else {
        const _Some = class_;
        const _class = _Some;
        class$2 = _class;
        break _L$2;
      }
      break _L;
    }
    moonbitlang$core$array$$Array$push$12$(attrs, Yoorkin$rabbit$45$tea$html$$attribute$87$("class", class$2));
  }
  let id$2;
  _L$2: {
    _L$3: {
      if (id === undefined) {
      } else {
        const _Some = id;
        const _id = _Some;
        id$2 = _id;
        break _L$3;
      }
      break _L$2;
    }
    moonbitlang$core$array$$Array$push$12$(attrs, Yoorkin$rabbit$45$tea$html$$attribute$87$("id", id$2));
  }
  return Yoorkin$rabbit$45$tea$html$$node$87$(tag, moonbitlang$core$builtin$$Add$add$59$(attributes, attrs), children);
}
function Yoorkin$rabbit$45$tea$html$$on_mouse$87$(event, msg) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$on$87$(event, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$32$((event$2) => msg(moonbitlang$core$option$$Option$unwrap$38$(Yoorkin$rabbit$45$tea$dom$$IsEvent$to_mouse_event$85$(event$2)))));
}
function Yoorkin$rabbit$45$tea$html$$on_click$87$(msg) {
  return Yoorkin$rabbit$45$tea$html$$on_mouse$87$("click", msg);
}
function Yoorkin$rabbit$45$tea$html$$button$46$inner$87$(style, id, class_, click, children) {
  const attrs = [];
  let click$2;
  _L: {
    _L$2: {
      if (click === undefined) {
      } else {
        const _Some = click;
        const _click = _Some;
        click$2 = _click;
        break _L$2;
      }
      break _L;
    }
    moonbitlang$core$array$$Array$push$12$(attrs, Yoorkin$rabbit$45$tea$html$$on_click$87$((_discard_) => click$2));
  }
  return Yoorkin$rabbit$45$tea$html$$common_node$46$inner$87$(style, id, class_, "button", attrs, children);
}
function Yoorkin$rabbit$45$tea$html$$button$87$(style$46$opt, id, class_, click, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return Yoorkin$rabbit$45$tea$html$$button$46$inner$87$(style, id, class_, click, children);
}
function Yoorkin$rabbit$45$tea$html$$div$46$inner$87$(style, id, class_, click, children) {
  const attrs = [];
  let click$2;
  _L: {
    _L$2: {
      if (click === undefined) {
      } else {
        const _Some = click;
        const _click = _Some;
        click$2 = _click;
        break _L$2;
      }
      break _L;
    }
    moonbitlang$core$array$$Array$push$12$(attrs, Yoorkin$rabbit$45$tea$html$$on_click$87$((_discard_) => click$2));
  }
  return Yoorkin$rabbit$45$tea$html$$common_node$46$inner$87$(style, id, class_, "div", attrs, children);
}
function Yoorkin$rabbit$45$tea$html$$div$87$(style$46$opt, id, class_, click, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return Yoorkin$rabbit$45$tea$html$$div$46$inner$87$(style, id, class_, click, children);
}
function Yoorkin$rabbit$45$tea$html$$p$46$inner$87$(style, id, class_, children) {
  return Yoorkin$rabbit$45$tea$html$$common_node$46$inner$87$(style, id, class_, "p", [], children);
}
function Yoorkin$rabbit$45$tea$html$$p$87$(style$46$opt, id, class_, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return Yoorkin$rabbit$45$tea$html$$p$46$inner$87$(style, id, class_, children);
}
function Yoorkin$rabbit$45$tea$html$$span$46$inner$87$(style, id, class_, children) {
  return Yoorkin$rabbit$45$tea$html$$common_node$46$inner$87$(style, id, class_, "span", [], children);
}
function Yoorkin$rabbit$45$tea$html$$span$87$(style$46$opt, id, class_, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return Yoorkin$rabbit$45$tea$html$$span$46$inner$87$(style, id, class_, children);
}
function Yoorkin$rabbit$45$tea$html$$Target$to_string(self) {
  if (self === 0) {
    return "_self";
  } else {
    return "_blank";
  }
}
function Yoorkin$rabbit$45$tea$html$$a$46$inner$87$(style, id, class_, href, target, children, escape) {
  const attrs = [Yoorkin$rabbit$45$tea$internal$vdom$$attribute$87$("href", href), Yoorkin$rabbit$45$tea$internal$vdom$$attribute$87$("target", Yoorkin$rabbit$45$tea$html$$Target$to_string(target))];
  if (style.length > 0) {
    const _bind = ";";
    moonbitlang$core$array$$Array$push$34$(attrs, Yoorkin$rabbit$45$tea$internal$vdom$$attribute$87$("style", moonbitlang$core$array$$Array$join$2$(style, { str: _bind, start: 0, end: _bind.length })));
  }
  let class$2;
  _L: {
    _L$2: {
      if (class_ === undefined) {
      } else {
        const _Some = class_;
        const _class = _Some;
        class$2 = _class;
        break _L$2;
      }
      break _L;
    }
    moonbitlang$core$array$$Array$push$34$(attrs, Yoorkin$rabbit$45$tea$internal$vdom$$attribute$87$("class", class$2));
  }
  let id$2;
  _L$2: {
    _L$3: {
      if (id === undefined) {
      } else {
        const _Some = id;
        const _id = _Some;
        id$2 = _id;
        break _L$3;
      }
      break _L$2;
    }
    moonbitlang$core$array$$Array$push$34$(attrs, Yoorkin$rabbit$45$tea$internal$vdom$$attribute$87$("id", id$2));
  }
  return Yoorkin$rabbit$45$tea$internal$vdom$$link$46$inner$87$(attrs, moonbitlang$core$array$$Array$map$49$(children, (_hole326) => _hole326), escape);
}
function Yoorkin$rabbit$45$tea$html$$a$87$(style$46$opt, id, class_, href, target$46$opt, children, escape$46$opt) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  let target;
  if (target$46$opt === undefined) {
    target = 0;
  } else {
    const _Some = target$46$opt;
    target = _Some;
  }
  const escape = escape$46$opt === -1 ? false : escape$46$opt;
  return Yoorkin$rabbit$45$tea$html$$a$46$inner$87$(style, id, class_, href, target, children, escape);
}
function Yoorkin$rabbit$45$tea$html$$text$87$(str) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$text$87$(str);
}
function Yoorkin$rabbit$45$tea$$application$46$inner$90$(initialize, update, view, url_changed, url_request, mount) {
  Yoorkin$rabbit$45$tea$dom$$IsElement$set_inner_html$79$(rami3l$js$45$ffi$js$$Nullable$unwrap$36$(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), mount)), "<div></div>");
  const sandbox_ref = { val: undefined };
  const curr_dom = { val: Yoorkin$rabbit$45$tea$internal$vdom$$node$87$("div", [], []) };
  const after_update = (html) => {
    let sandbox;
    _L: {
      const _bind = sandbox_ref.val;
      if (_bind === undefined) {
        $panic();
        return;
      } else {
        const _Some = _bind;
        const _sandbox = _Some;
        sandbox = _sandbox;
        break _L;
      }
    }
    const new_dom = Yoorkin$rabbit$45$tea$html$$Html$to_virtual_dom$87$(html);
    Yoorkin$rabbit$45$tea$internal$vdom$$Node$patch$88$(new_dom, curr_dom.val, sandbox, mount);
    curr_dom.val = new_dom;
  };
  let url;
  _L: {
    let _bind;
    let _try_err;
    _L$2: {
      _L$3: {
        const _bind$2 = Yoorkin$rabbit$45$tea$url$$parse(Yoorkin$rabbit$45$tea$dom$$Window$current_url(Yoorkin$rabbit$45$tea$dom$$window()));
        let _tmp;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp = _ok._0;
        } else {
          const _err = _bind$2;
          const _tmp$2 = _err._0;
          _try_err = _tmp$2;
          break _L$3;
        }
        _bind = new Result$Ok$27$(_tmp);
        break _L$2;
      }
      _bind = new Result$Err$27$(_try_err);
    }
    if (_bind.$tag === 1) {
      const _Ok = _bind;
      const _url = _Ok._0;
      url = _url;
      break _L;
    } else {
      $panic();
      return;
    }
  }
  let cmd;
  let model;
  _L$2: {
    const _bind = initialize(url);
    const _cmd = _bind._0;
    const _model = _bind._1;
    cmd = _cmd;
    model = _model;
    break _L$2;
  }
  const sandbox = Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$new$89$(model, update, view, after_update, url_changed, url_request);
  sandbox_ref.val = sandbox;
  Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$launch$88$(sandbox, cmd);
  Yoorkin$rabbit$45$tea$internal$browser$$Sandbox$refresh$88$(sandbox);
}
function Yoorkin$rabbit$45$tea$http$$Body$content_type(self) {
  switch (self.$tag) {
    case 0: {
      return "application/json";
    }
    case 1: {
      return "text/plain";
    }
    default: {
      return "text/plain";
    }
  }
}
function Yoorkin$rabbit$45$tea$http$$Body$stringfiy(self) {
  let json;
  _L: {
    switch (self.$tag) {
      case 0: {
        const _Json = self;
        const _json = _Json._0;
        json = _json;
        break _L;
      }
      case 1: {
        const _Text = self;
        const _text = _Text._0;
        return _text;
      }
      default: {
        return "";
      }
    }
  }
  return moonbitlang$core$json$$Json$stringify$46$inner(json, false, 0);
}
function Yoorkin$rabbit$45$tea$http$$request$91$(url, http_method, expect, body) {
  const launch = (events) => {
    let has_body;
    if (body.$tag === 2) {
      has_body = false;
    } else {
      has_body = true;
    }
    const content_type = Yoorkin$rabbit$45$tea$http$$Body$content_type(body);
    const body$2 = Yoorkin$rabbit$45$tea$http$$Body$stringfiy(body);
    let f;
    _L: {
      let f$2;
      let decoder;
      _L$2: {
        if (expect.$tag === 0) {
          const _Json = expect;
          const _f = _Json._0;
          const _decoder = _Json._1;
          f$2 = _f;
          decoder = _decoder;
          break _L$2;
        } else {
          const _Text = expect;
          const _f = _Text._0;
          f = _f;
          break _L;
        }
      }
      Yoorkin$rabbit$45$tea$http$$js_request(url, http_method, content_type, body$2, has_body, (str) => {
        let result;
        let _try_err;
        _L$3: {
          _L$4: {
            const _bind = moonbitlang$core$json$$parse(str);
            let _tmp;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp = _ok._0;
            } else {
              const _err = _bind;
              const _tmp$2 = _err._0;
              _try_err = _tmp$2;
              break _L$4;
            }
            result = new Result$Ok$34$(_tmp);
            break _L$3;
          }
          result = new Result$Err$34$("Json parse error");
        }
        Yoorkin$rabbit$45$tea$cmd$$Events$trigger_update$87$(events, f$2(moonbitlang$core$result$$Result$bind$67$(result, decoder)));
      }, (msg) => {
        Yoorkin$rabbit$45$tea$cmd$$Events$trigger_update$87$(events, f$2(new Result$Err$26$(`Http request failed:${moonbitlang$core$builtin$$Show$to_string$2$(msg)}`)));
      });
      return;
    }
    Yoorkin$rabbit$45$tea$http$$js_request(url, http_method, content_type, body$2, has_body, (str) => {
      Yoorkin$rabbit$45$tea$cmd$$Events$trigger_update$87$(events, f(new Result$Ok$35$(str)));
    }, (msg) => {
      Yoorkin$rabbit$45$tea$cmd$$Events$trigger_update$87$(events, f(new Result$Err$35$(`Http request failed:${moonbitlang$core$builtin$$Show$to_string$2$(msg)}`)));
    });
  };
  return launch;
}
function Yoorkin$rabbit$45$tea$http$$get$91$(url, expect) {
  return Yoorkin$rabbit$45$tea$http$$request$91$(url, "GET", expect, $64$Yoorkin$47$rabbit$45$tea$47$http$46$Body$Empty);
}
function username$rabbit$45$tea$45$tailwind$articles$$article_src_url(name) {
  return `https://gitcode.com/weixin_41992365/MoonBitBlog/blob/main/articles/${name}`;
}
function username$rabbit$45$tea$45$tailwind$articles$$trim_simple(s) {
  const start = { val: 0 };
  const end = { val: s.length };
  while (true) {
    if (start.val < end.val) {
      const _tmp = start.val;
      $bound_check(s, _tmp);
      const c = s.charCodeAt(_tmp);
      if (c === 32 || (c === 9 || (c === 13 || c === 10))) {
        start.val = start.val + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  while (true) {
    if (end.val > start.val) {
      const _tmp = end.val - 1 | 0;
      $bound_check(s, _tmp);
      const c = s.charCodeAt(_tmp);
      if (c === 32 || (c === 9 || (c === 13 || c === 10))) {
        end.val = end.val - 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return s.substring(start.val, end.val);
}
function username$rabbit$45$tea$45$tailwind$articles$$starts_with_str(s, prefix) {
  if (prefix.length > s.length) {
    return false;
  }
  return s.substring(0, prefix.length) === prefix;
}
function username$rabbit$45$tea$45$tailwind$articles$$getArticleDetailBy(name) {
  const path = `/raw/main/articles/${name}`;
  return Yoorkin$rabbit$45$tea$http$$get$91$(path, new $64$Yoorkin$47$rabbit$45$tea$47$http$46$Expecting$Text$36$((res) => new ArticleMsg$OneLoaded(name, res)));
}
function username$rabbit$45$tea$45$tailwind$articles$$batchLoadRange(names, start, count) {
  const total = moonbitlang$core$list$$List$length$2$(names);
  if (start >= total || count <= 0) {
    return { _0: Yoorkin$rabbit$45$tea$cmd$$none$87$(), _1: 0 };
  }
  const cmds = { val: moonbitlang$core$list$$List$of$51$([]) };
  const i = { val: 0 };
  const taken = { val: 0 };
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$37$ };
  const _bind = moonbitlang$core$list$$List$iter$2$(names);
  _bind((name) => {
    if (i.val >= start && taken.val < count) {
      cmds.val = moonbitlang$core$list$$List$prepend$51$(cmds.val, username$rabbit$45$tea$45$tailwind$articles$$getArticleDetailBy(name));
      taken.val = taken.val + 1 | 0;
    }
    i.val = i.val + 1 | 0;
    if (taken.val >= count) {
      _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$37$(undefined);
      return 0;
    }
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      break;
    }
    default: {
      $panic();
    }
  }
  const batch = Yoorkin$rabbit$45$tea$cmd$$batch$87$(moonbitlang$core$list$$List$to_array$51$(cmds.val));
  return { _0: batch, _1: taken.val };
}
function username$rabbit$45$tea$45$tailwind$articles$$split_lines(text) {
  const acc = { val: moonbitlang$core$list$$List$of$2$([]) };
  const i = { val: 0 };
  const n = text.length;
  const line_start = { val: 0 };
  while (true) {
    if (i.val < n) {
      const _tmp = i.val;
      $bound_check(text, _tmp);
      const ch = text.charCodeAt(_tmp);
      if (ch === 10) {
        acc.val = moonbitlang$core$list$$List$prepend$2$(acc.val, text.substring(line_start.val, i.val));
        i.val = i.val + 1 | 0;
        line_start.val = i.val;
      } else {
        if (ch === 13) {
          acc.val = moonbitlang$core$list$$List$prepend$2$(acc.val, text.substring(line_start.val, i.val));
          let _tmp$2;
          if ((i.val + 1 | 0) < n) {
            const _tmp$3 = i.val + 1 | 0;
            $bound_check(text, _tmp$3);
            _tmp$2 = text.charCodeAt(_tmp$3) === 10;
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            i.val = i.val + 2 | 0;
          } else {
            i.val = i.val + 1 | 0;
          }
          line_start.val = i.val;
        } else {
          i.val = i.val + 1 | 0;
        }
      }
      continue;
    } else {
      break;
    }
  }
  if (line_start.val <= n) {
    acc.val = moonbitlang$core$list$$List$prepend$2$(acc.val, text.substring(line_start.val, n));
  }
  return acc.val;
}
function username$rabbit$45$tea$45$tailwind$articles$$getArticleNamesText() {
  return Yoorkin$rabbit$45$tea$http$$get$91$("/raw/main/articels.config", new $64$Yoorkin$47$rabbit$45$tea$47$http$46$Expecting$Text$36$((res) => {
    let e;
    _L: {
      let t;
      _L$2: {
        if (res.$tag === 1) {
          const _Ok = res;
          const _t = _Ok._0;
          t = _t;
          break _L$2;
        } else {
          const _Err = res;
          const _e = _Err._0;
          e = _e;
          break _L;
        }
      }
      const lines = username$rabbit$45$tea$45$tailwind$articles$$split_lines(t);
      const names = { val: moonbitlang$core$list$$List$of$2$([]) };
      const _bind = moonbitlang$core$list$$List$iter$2$(lines);
      _bind((line) => {
        const s = username$rabbit$45$tea$45$tailwind$articles$$trim_simple(line);
        if (moonbitlang$core$builtin$$op_notequal$2$(s, "") && !username$rabbit$45$tea$45$tailwind$articles$$starts_with_str(s, "#")) {
          names.val = moonbitlang$core$list$$List$prepend$2$(names.val, s);
        }
        return 1;
      });
      return new ArticleMsg$ListLoaded(new Result$Ok$38$(names.val));
    }
    return new ArticleMsg$ListLoaded(new Result$Err$38$(e));
  }));
}
function username$rabbit$45$tea$45$tailwind$articles$$renderCard(card) {
  const content = card.content;
  const _bind = "\n";
  const lines = moonbitlang$core$builtin$$Iter$to_array$4$(moonbitlang$core$string$$String$split(content, { str: _bind, start: 0, end: _bind.length }));
  let title;
  if (lines.length > 0) {
    const _tmp = moonbitlang$core$array$$Array$at$4$(lines, 0);
    const _bind$2 = "#";
    const _tmp$2 = { str: _bind$2, start: 0, end: _bind$2.length };
    const _bind$3 = "";
    title = moonbitlang$core$string$$StringView$replace_all(_tmp, _tmp$2, { str: _bind$3, start: 0, end: _bind$3.length });
  } else {
    const _bind$2 = "标题";
    title = { str: _bind$2, start: 0, end: _bind$2.length };
  }
  let subtitle;
  if (lines.length > 1) {
    const _tmp = moonbitlang$core$array$$Array$at$4$(lines, 1);
    const _bind$2 = "#";
    const _tmp$2 = { str: _bind$2, start: 0, end: _bind$2.length };
    const _bind$3 = "";
    subtitle = moonbitlang$core$string$$StringView$replace_all(_tmp, _tmp$2, { str: _bind$3, start: 0, end: _bind$3.length });
  } else {
    const _bind$2 = "副标题";
    subtitle = { str: _bind$2, start: 0, end: _bind$2.length };
  }
  const _tmp = card.name;
  const _bind$2 = ".md";
  const _tmp$2 = { str: _bind$2, start: 0, end: _bind$2.length };
  const _bind$3 = "";
  return Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-card", undefined, [Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-content", undefined, [Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-image", undefined, [Yoorkin$rabbit$45$tea$html$$text$87$(moonbitlang$core$string$$String$replace_all(_tmp, _tmp$2, { str: _bind$3, start: 0, end: _bind$3.length }))]), Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-meta", undefined, [Yoorkin$rabbit$45$tea$html$$span$87$(Option$None$39$, undefined, undefined, [Yoorkin$rabbit$45$tea$html$$text$87$("📅 今日")]), Yoorkin$rabbit$45$tea$html$$span$87$(Option$None$39$, undefined, undefined, [Yoorkin$rabbit$45$tea$html$$text$87$(`⏱️ ${moonbitlang$core$int$$Int$to_string$46$inner(card.minutes, 10)}分钟阅读`)])]), Yoorkin$rabbit$45$tea$html$$a$87$(Option$None$39$, undefined, "article-title", "#", undefined, [Yoorkin$rabbit$45$tea$html$$text$87$(moonbitlang$core$builtin$$Show$to_string$4$(title))], -1), Yoorkin$rabbit$45$tea$html$$p$87$(Option$None$39$, undefined, "article-excerpt", [Yoorkin$rabbit$45$tea$html$$text$87$(moonbitlang$core$builtin$$Show$to_string$4$(subtitle))]), Yoorkin$rabbit$45$tea$html$$a$87$(new Option$Some$39$(["margin-top:auto;align-self:flex-start;display:inline-block;color:#667eea;text-decoration:none;font-weight:600;transition:color 0.3s ease;"]), undefined, "read-more", username$rabbit$45$tea$45$tailwind$articles$$article_src_url(card.name), undefined, [Yoorkin$rabbit$45$tea$html$$text$87$("阅读全文")], -1)])]);
}
function username$rabbit$45$tea$45$tailwind$articles$$get_card(items, name) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$40$ };
  const _bind = moonbitlang$core$list$$List$iter$32$(items);
  _bind((it) => {
    if (it.name === name) {
      _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$40$(it);
      return 0;
    }
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      break;
    }
    default: {
      $panic();
    }
  }
  return undefined;
}
function username$rabbit$45$tea$45$tailwind$articles$$articleListView(model) {
  let _tmp;
  if (model.phase === "list" && model.loading) {
    _tmp = Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, undefined, undefined, [Yoorkin$rabbit$45$tea$html$$text$87$("正在加载文章列表...")]);
  } else {
    if (moonbitlang$core$option$$Option$is_some$2$(model.error)) {
      _tmp = Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, undefined, undefined, [Yoorkin$rabbit$45$tea$html$$text$87$(moonbitlang$core$option$$Option$unwrap$2$(model.error))]);
    } else {
      const _self = [];
      moonbitlang$core$array$$Array$push_iter$31$(_self, moonbitlang$core$list$$List$iter$31$(moonbitlang$core$list$$List$map$63$(model.names, (name) => {
        const c = username$rabbit$45$tea$45$tailwind$articles$$get_card(model.items, name);
        let card;
        _L: {
          if (c === undefined) {
            return Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, undefined, undefined, []);
          } else {
            const _Some = c;
            const _card = _Some;
            card = _card;
            break _L;
          }
        }
        return card.loaded && moonbitlang$core$option$$Option$is_none$2$(card.error) ? username$rabbit$45$tea$45$tailwind$articles$$renderCard(card) : card.loaded ? Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-card", undefined, [Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-image", undefined, [Yoorkin$rabbit$45$tea$html$$text$87$(card.name)]), Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-content", undefined, [Yoorkin$rabbit$45$tea$html$$p$87$(Option$None$39$, undefined, "article-excerpt", [Yoorkin$rabbit$45$tea$html$$text$87$("加载失败")]), Yoorkin$rabbit$45$tea$html$$button$87$(Option$None$39$, undefined, undefined, new ArticleMsg$LoadOne(card.name), [Yoorkin$rabbit$45$tea$html$$text$87$("重试")])])]) : Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-card", undefined, [Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "article-content", undefined, [Yoorkin$rabbit$45$tea$html$$p$87$(Option$None$39$, undefined, "article-excerpt", [Yoorkin$rabbit$45$tea$html$$text$87$("加载中...")])])]);
      })));
      _tmp = Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, undefined, undefined, [Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "articles-grid", undefined, _self), moonbitlang$core$list$$List$length$2$(model.names) > model.loaded_count ? Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, "load-more-wrap", undefined, [Yoorkin$rabbit$45$tea$html$$button$87$(Option$None$39$, undefined, "load-more-btn", ArticleMsg$LoadMore, [Yoorkin$rabbit$45$tea$html$$text$87$(model.loading ? "加载中..." : "加载更多")])]) : Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, undefined, undefined, [Yoorkin$rabbit$45$tea$html$$text$87$("已到底部")])]);
    }
  }
  return Yoorkin$rabbit$45$tea$html$$div$87$(Option$None$39$, undefined, undefined, undefined, [_tmp]);
}
function username$rabbit$45$tea$45$tailwind$articles$$initArticles() {
  return { _0: username$rabbit$45$tea$45$tailwind$articles$$getArticleNamesText(), _1: { phase: "list", loading: true, error: undefined, names: moonbitlang$core$list$$List$of$2$([]), items: moonbitlang$core$list$$List$of$32$([]), page_size: 6, loaded_count: 0 } };
}
function username$rabbit$45$tea$45$tailwind$articles$$upsert_card(items, card) {
  const found = { val: false };
  const out = { val: moonbitlang$core$list$$List$of$32$([]) };
  const _bind = moonbitlang$core$list$$List$iter$32$(items);
  _bind((it) => {
    if (it.name === card.name) {
      out.val = moonbitlang$core$list$$List$prepend$32$(out.val, card);
      found.val = true;
    } else {
      out.val = moonbitlang$core$list$$List$prepend$32$(out.val, it);
    }
    return 1;
  });
  if (!found.val) {
    out.val = moonbitlang$core$list$$List$prepend$32$(out.val, card);
  }
  return out.val;
}
function username$rabbit$45$tea$45$tailwind$articles$$articleUpdate(msg, model) {
  let name;
  _L: {
    let name$2;
    let result;
    _L$2: {
      let result$2;
      _L$3: {
        switch (msg.$tag) {
          case 0: {
            return { _0: username$rabbit$45$tea$45$tailwind$articles$$getArticleNamesText(), _1: { ...model, phase: "list", loading: true, error: undefined, loaded_count: 0 } };
          }
          case 1: {
            const _ListLoaded = msg;
            const _result = _ListLoaded._0;
            result$2 = _result;
            break _L$3;
          }
          case 4: {
            const start = model.loaded_count;
            let batch;
            let taken;
            _L$4: {
              const _bind = username$rabbit$45$tea$45$tailwind$articles$$batchLoadRange(model.names, start, model.page_size);
              const _batch = _bind._0;
              const _taken = _bind._1;
              batch = _batch;
              taken = _taken;
              break _L$4;
            }
            return taken === 0 ? { _0: Yoorkin$rabbit$45$tea$cmd$$none$87$(), _1: { ...model, loading: false } } : { _0: batch, _1: { ...model, loading: true, loaded_count: start + taken | 0 } };
          }
          case 3: {
            const _OneLoaded = msg;
            const _name = _OneLoaded._0;
            const _result$2 = _OneLoaded._1;
            name$2 = _name;
            result = _result$2;
            break _L$2;
          }
          case 2: {
            const _LoadOne = msg;
            const _name$2 = _LoadOne._0;
            name = _name$2;
            break _L;
          }
          default: {
            return { _0: Yoorkin$rabbit$45$tea$cmd$$none$87$(), _1: model };
          }
        }
      }
      let e;
      _L$4: {
        let names;
        _L$5: {
          if (result$2.$tag === 1) {
            const _Ok = result$2;
            const _names = _Ok._0;
            names = _names;
            break _L$5;
          } else {
            const _Err = result$2;
            const _e = _Err._0;
            e = _e;
            break _L$4;
          }
        }
        let batch;
        let taken;
        _L$6: {
          const _bind = username$rabbit$45$tea$45$tailwind$articles$$batchLoadRange(names, 0, model.page_size);
          const _batch = _bind._0;
          const _taken = _bind._1;
          batch = _batch;
          taken = _taken;
          break _L$6;
        }
        return { _0: batch, _1: { ...model, names: names, loading: true, phase: "items", error: undefined, loaded_count: taken } };
      }
      return { _0: Yoorkin$rabbit$45$tea$cmd$$none$87$(), _1: { ...model, loading: false, error: `列表加载失败: ${e}` } };
    }
    let e;
    _L$3: {
      let md;
      _L$4: {
        if (result.$tag === 1) {
          const _Ok = result;
          const _md = _Ok._0;
          md = _md;
          break _L$4;
        } else {
          const _Err = result;
          const _e = _Err._0;
          e = _e;
          break _L$3;
        }
      }
      const lines = username$rabbit$45$tea$45$tailwind$articles$$split_lines(md);
      if (800 === 0) {
        $panic();
      }
      const minutes = { val: (md.length / 800 | 0) + 1 | 0 };
      if (minutes.val < 1) {
        minutes.val = 1;
      }
      let title;
      if (moonbitlang$core$list$$List$length$2$(lines) > 0) {
        const _tmp = moonbitlang$core$list$$List$unsafe_head$2$(lines);
        const _bind = "#";
        const _tmp$2 = { str: _bind, start: 0, end: _bind.length };
        const _bind$2 = "";
        title = username$rabbit$45$tea$45$tailwind$articles$$trim_simple(moonbitlang$core$string$$String$replace_all(_tmp, _tmp$2, { str: _bind$2, start: 0, end: _bind$2.length }));
      } else {
        title = "未命名文章";
      }
      let subtitle;
      if (moonbitlang$core$list$$List$length$2$(lines) > 1) {
        const _tmp = moonbitlang$core$list$$List$unsafe_nth$2$(lines, 1);
        const _bind = "#";
        const _tmp$2 = { str: _bind, start: 0, end: _bind.length };
        const _bind$2 = "";
        subtitle = username$rabbit$45$tea$45$tailwind$articles$$trim_simple(moonbitlang$core$string$$String$replace_all(_tmp, _tmp$2, { str: _bind$2, start: 0, end: _bind$2.length }));
      } else {
        subtitle = "";
      }
      const new_card = { name: name$2, title: title === "" ? "未命名文章" : title, subtitle: subtitle, minutes: minutes.val, content: md, loaded: true, error: undefined };
      const items2 = username$rabbit$45$tea$45$tailwind$articles$$upsert_card(model.items, new_card);
      const done = { val: true };
      const i = { val: 0 };
      const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$41$ };
      const _bind = moonbitlang$core$list$$List$iter$2$(model.names);
      _bind((n) => {
        if (i.val >= model.loaded_count) {
          _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$41$(undefined);
          return 0;
        }
        const c = username$rabbit$45$tea$45$tailwind$articles$$get_card(items2, n);
        let card;
        _L$5: {
          _L$6: {
            if (c === undefined) {
              done.val = false;
            } else {
              const _Some = c;
              const _card = _Some;
              card = _card;
              break _L$6;
            }
            break _L$5;
          }
          if (!card.loaded) {
            done.val = false;
          }
        }
        i.val = i.val + 1 | 0;
        return 1;
      });
      const _tmp = _foreach_result.val;
      switch (_tmp.$tag) {
        case 0: {
          break;
        }
        case 1: {
          const _break = _tmp;
          _break._0;
          break;
        }
        case 2: {
          const _return = _tmp;
          return _return._0;
        }
        case 3: {
          $panic();
          break;
        }
        default: {
          $panic();
        }
      }
      const _tmp$2 = Yoorkin$rabbit$45$tea$cmd$$none$87$();
      const _tmp$3 = !done.val;
      done.val;
      return { _0: _tmp$2, _1: { ...model, items: items2, loading: _tmp$3, phase: "items" } };
    }
    const new_card = { name: name$2, title: "", subtitle: "", minutes: 1, content: "", loaded: true, error: e };
    const items2 = username$rabbit$45$tea$45$tailwind$articles$$upsert_card(model.items, new_card);
    return { _0: Yoorkin$rabbit$45$tea$cmd$$none$87$(), _1: { ...model, items: items2 } };
  }
  return { _0: username$rabbit$45$tea$45$tailwind$articles$$getArticleDetailBy(name), _1: { ...model, loading: true } };
}
function username$rabbit$45$tea$45$tailwind$articles$$startArticlesApp() {
  const initialize = (url) => username$rabbit$45$tea$45$tailwind$articles$$initArticles();
  Yoorkin$rabbit$45$tea$$application$46$inner$90$(initialize, username$rabbit$45$tea$45$tailwind$articles$$articleUpdate, username$rabbit$45$tea$45$tailwind$articles$$articleListView, undefined, undefined, "articlesContainer");
}
(() => {
  username$rabbit$45$tea$45$tailwind$articles$$startArticlesApp();
})();
//# sourceMappingURL=articles.js.map
