function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
function Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$tag = 1;
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 0;
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $1L = { hi: 0, lo: 1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
const $0L = { hi: 0, lo: 0 };
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = b;
  }
  return arr;
}
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {   if (f._exports) return f._exports;   return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports; };
const moonbitlang$core$builtin$$MyInt64$compare = (a, b) => {   const ahi = a.hi;   const bhi = b.hi;   if (ahi < bhi) {     return -1;   }   if (ahi > bhi) {     return 1;   }   const alo = a.lo >>> 0;   const blo = b.lo >>> 0;   if (alo < blo) {     return -1;   }   if (alo > blo) {     return 1;   }   return 0; };
const $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Http = { $tag: 0 };
const $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Https = { $tag: 1 };
function $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other.prototype.$tag = 2;
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_attribute = (self,attr,value) => self.setAttribute(attr, value);
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_property = (self,prop,value) => self[prop] = value;
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$remove_property = (self,prop) => delete self[prop];
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$get_property = (self,prop) => self[prop];
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_style = (self,key,value) => self.style[key] = value;
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$remove_style = (self,key) => self.style[key] = '';
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$remove_attribute = (self,attr) => self.removeAttribute(attr);
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$add_event_listener = (self,event,callback) => self.addEventListener(event, callback);
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$remove_event_listener = (self,event,callback) => self.removeEventListener(event, callback);
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_inner_html = (self,html) => self.innerHTML = html;
const Yoorkin$rabbit$45$tea$internal$ffi$$Window$current_url = (self) => { return self.location.href; };
const Yoorkin$rabbit$45$tea$internal$ffi$$window = () => window;
const Yoorkin$rabbit$45$tea$internal$ffi$$Window$add_event_listener = (self,event,callback) => self.addEventListener(event, callback);
const Yoorkin$rabbit$45$tea$internal$ffi$$document = () => document;
const Yoorkin$rabbit$45$tea$internal$ffi$$Document$get_element_by_id = (doc,id) => doc.getElementById(id);
const Yoorkin$rabbit$45$tea$internal$ffi$$Document$create_element = (doc,tag) => doc.createElement(tag);
const Yoorkin$rabbit$45$tea$internal$ffi$$Document$create_text_node = (doc,str) => doc.createTextNode(str);
const Yoorkin$rabbit$45$tea$internal$ffi$$Node$to_element = (x) => { if(x.nodeType===1) { return x; } else { throw new Error(`${x} (${x.nodeType}) not an ELEMENT_NODE`) }; };
const Yoorkin$rabbit$45$tea$internal$ffi$$Element$to_node = (x) => x;
const Yoorkin$rabbit$45$tea$internal$ffi$$Event$prevent_default = (self) => self.preventDefault();
const Yoorkin$rabbit$45$tea$internal$ffi$$Event$stop_propagation = (self) => self.stopPropagation();
const Yoorkin$rabbit$45$tea$internal$ffi$$Node$append_child = (p,c) => p.appendChild(c);
const Yoorkin$rabbit$45$tea$internal$ffi$$Node$remove_child = (p,c) => p.removeChild(c);
const Yoorkin$rabbit$45$tea$internal$ffi$$Node$replace_child = (p,n,o) => p.replaceChild(n,o);
const Yoorkin$rabbit$45$tea$internal$ffi$$Node$insert_before = (p,value,before) => p.insertBefore(value,before);
const Yoorkin$rabbit$45$tea$internal$ffi$$Node$nth_child = (x,i) => {     const r = x.childNodes[i];     if (r === undefined) throw new Error(`nth_child: index ${i} out of bounds`);    return r;  };
const Yoorkin$rabbit$45$tea$internal$ffi$$Node$count_child = (x) => x.childNodes.length;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$8$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$8$.prototype.$tag = 0;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$8$.prototype.$tag = 1;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$8$.prototype.$tag = 0;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$8$.prototype.$tag = 1;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$8$.prototype.$tag = 2;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$8$.prototype.$tag = 3;
function $64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$Internal(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$Internal.prototype.$tag = 0;
function $64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$External(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$External.prototype.$tag = 1;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$8$.prototype.$tag = 0;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$8$.prototype.$tag = 1;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$8$.prototype.$tag = 2;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$8$.prototype.$tag = 3;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$8$.prototype.$tag = 4;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$8$.prototype.$tag = 5;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$8$.prototype.$tag = 6;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$8$.prototype.$tag = 7;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$8$.prototype.$tag = 0;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$8$.prototype.$tag = 1;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$8$.prototype.$tag = 2;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$8$.prototype.$tag = 3;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$8$.prototype.$tag = 4;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$8$.prototype.$tag = 5;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$8$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$8$.prototype.$tag = 0;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$8$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$8$.prototype.$tag = 1;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$8$.prototype.$tag = 0;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$8$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$8$.prototype.$tag = 1;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$8$(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$8$.prototype.$tag = 2;
const moonbitlang$core$strconv$$base_err_str = "invalid base";
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
const username$rabbit$45$tea$45$tailwind$main$$button$46$class$0$ = "p-4 bg-pink-200 w-24 rounded-lg select-none text-center hover:-translate-y-1 hover:shadow-lg active:bg-pink-300 active:shadow-sm transition-all";
function moonbitlang$core$strconv$$base_err$1$() {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$base_err_str));
}
function moonbitlang$core$strconv$$check_underscore(str) {
  let s = str;
  let last_char = 33;
  if (s.length > 1 && (s.charCodeAt(0) === 45 || s.charCodeAt(0) === 43)) {
    s = moonbitlang$core$string$$String$substring(s, 1, undefined);
  }
  let hex = false;
  if (s.length >= 2 && (s.charCodeAt(0) === 48 && (s.charCodeAt(1) === 98 || (s.charCodeAt(1) === 66 || (s.charCodeAt(1) === 111 || (s.charCodeAt(1) === 79 || (s.charCodeAt(1) === 120 || s.charCodeAt(1) === 88))))))) {
    last_char = 48;
    hex = s.charCodeAt(1) === 120 || s.charCodeAt(1) === 88;
    s = moonbitlang$core$string$$String$substring(s, 2, undefined);
  }
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < s.length) {
      _L: {
        if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
          last_char = 48;
          break _L;
        }
        if (hex && (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 102) || 65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 70) {
          last_char = 48;
          break _L;
        }
        if (s.charCodeAt(i) === 95) {
          if (last_char !== 48) {
            return false;
          }
          last_char = 95;
          break _L;
        }
        if (last_char === 95) {
          return false;
        }
        last_char = 33;
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return last_char !== 95;
}
function moonbitlang$core$strconv$$determine_base(s) {
  if (s.length < 2) {
    return 10;
  }
  const _bind = moonbitlang$core$string$$String$substring(s, moonbitlang$core$string$$String$substring$46$start$46$default(), 2);
  switch (_bind) {
    case "0x": {
      return 16;
    }
    case "0X": {
      return 16;
    }
    case "0o": {
      return 8;
    }
    case "0O": {
      return 8;
    }
    case "0b": {
      return 2;
    }
    case "0B": {
      return 2;
    }
    default: {
      return 10;
    }
  }
}
function moonbitlang$core$strconv$$overflow_threshold(base, neg) {
  return !neg ? (base === 10 ? moonbitlang$core$int64$$Int64$op_add(moonbitlang$core$int64$$Int64$op_div($9223372036854775807L, $10L), $1L) : base === 16 ? moonbitlang$core$int64$$Int64$op_add(moonbitlang$core$int64$$Int64$op_div($9223372036854775807L, $16L), $1L) : moonbitlang$core$int64$$Int64$op_add(moonbitlang$core$int64$$Int64$op_div($9223372036854775807L, moonbitlang$core$int$$Int$to_int64(base)), $1L)) : base === 10 ? moonbitlang$core$int64$$Int64$op_div($_9223372036854775808L, $10L) : base === 16 ? moonbitlang$core$int64$$Int64$op_div($_9223372036854775808L, $16L) : moonbitlang$core$int64$$Int64$op_div($_9223372036854775808L, moonbitlang$core$int$$Int$to_int64(base));
}
function moonbitlang$core$strconv$$range_err$1$() {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$syntax_err$1$() {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$parse_int64(str, base) {
  if (str === "") {
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
  let s = str;
  let neg = false;
  if (s.charCodeAt(0) === 43 || s.charCodeAt(0) === 45) {
    neg = s.charCodeAt(0) === 45;
    s = moonbitlang$core$string$$String$substring(s, 1, undefined);
  }
  let num_base = 10;
  if (base === 0) {
    num_base = moonbitlang$core$strconv$$determine_base(s);
    if (num_base !== 10) {
      s = moonbitlang$core$string$$String$substring(s, 2, undefined);
    }
  } else {
    if (2 <= base && base <= 36) {
      num_base = base;
    } else {
      const _bind = moonbitlang$core$strconv$$base_err$1$();
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _ok._0;
      } else {
        return _bind;
      }
    }
  }
  const overflow_threshold = moonbitlang$core$strconv$$overflow_threshold(num_base, neg);
  let n = $0L;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < s.length) {
      _L: {
        const c = s.charCodeAt(i);
        let d = 0;
        if (c === 95) {
          break _L;
        } else {
          if (48 <= c && c <= 57) {
            d = moonbitlang$core$char$$Char$op_sub(c, 48);
          } else {
            if (97 <= c && c <= 122) {
              d = moonbitlang$core$char$$Char$op_sub(c, 97) + 10 | 0;
            } else {
              if (65 <= c && c <= 90) {
                d = moonbitlang$core$char$$Char$op_sub(c, 65) + 10 | 0;
              } else {
                const _bind = moonbitlang$core$strconv$$syntax_err$1$();
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _ok._0;
                } else {
                  return _bind;
                }
              }
            }
          }
        }
        if (d >= num_base) {
          const _bind = moonbitlang$core$strconv$$syntax_err$1$();
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _ok._0;
          } else {
            return _bind;
          }
        }
        if (neg && moonbitlang$core$builtin$$op_lt$2$(n, overflow_threshold) || !neg && moonbitlang$core$builtin$$op_ge$2$(n, overflow_threshold)) {
          const _bind = moonbitlang$core$strconv$$range_err$1$();
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _ok._0;
          } else {
            return _bind;
          }
        }
        n = moonbitlang$core$int64$$Int64$op_mul(n, moonbitlang$core$int$$Int$to_int64(num_base));
        if (neg) {
          const n1 = moonbitlang$core$int64$$Int64$op_sub(n, moonbitlang$core$int$$Int$to_int64(d));
          if (moonbitlang$core$builtin$$op_gt$2$(n1, n)) {
            const _bind = moonbitlang$core$strconv$$range_err$1$();
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              return _bind;
            }
          }
          n = n1;
        } else {
          const n1 = moonbitlang$core$int64$$Int64$op_add(n, moonbitlang$core$int$$Int$to_int64(d));
          if (moonbitlang$core$builtin$$op_lt$2$(n1, n)) {
            const _bind = moonbitlang$core$strconv$$range_err$1$();
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _ok._0;
            } else {
              return _bind;
            }
          }
          n = n1;
        }
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new Result$Ok$1$(n);
}
function moonbitlang$core$strconv$$parse_int(str, base) {
  const _bind = moonbitlang$core$strconv$$parse_int64(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (moonbitlang$core$builtin$$op_lt$2$(n, moonbitlang$core$int$$Int$to_int64(-2147483648)) || moonbitlang$core$builtin$$op_gt$2$(n, moonbitlang$core$int$$Int$to_int64(2147483647))) {
    const _bind$2 = moonbitlang$core$strconv$$range_err$1$();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new Result$Ok$2$(moonbitlang$core$int64$$Int64$to_int(n));
}
function moonbitlang$core$strconv$$parse_int$46$base$46$default() {
  return 0;
}
function moonbitlang$core$string$$is_leading_surrogate(c) {
  return 55296 <= c && c <= 56319;
}
function moonbitlang$core$string$$is_trailing_surrogate(c) {
  return 56320 <= c && c <= 57343;
}
function moonbitlang$core$string$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$concat(strings, separator) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  if (separator === "") {
    const _len = strings.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const s = strings[_i];
        moonbitlang$core$builtin$$StringBuilder$write_string(buf, s);
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    if (strings.length === 0) {
    } else {
      const _x = moonbitlang$core$array$$Array$op_get$3$(strings, 0);
      const _x$2 = moonbitlang$core$array$$Array$op_as_view$3$(strings, 1, strings.length - 0 | 0);
      moonbitlang$core$builtin$$StringBuilder$write_string(buf, _x);
      const _len = moonbitlang$core$array$$ArrayView$length$3$(_x$2);
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const s = _x$2.buf[_x$2.start + _i | 0];
          moonbitlang$core$builtin$$StringBuilder$write_string(buf, separator);
          moonbitlang$core$builtin$$StringBuilder$write_string(buf, s);
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
  }
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$string$$String$iter(self) {
  return moonbitlang$core$builtin$$Iter$new$4$((yield_) => {
    const len = self.length;
    let _tmp = 0;
    while (true) {
      const index = _tmp;
      if (index < len) {
        const c1 = self.charCodeAt(index);
        if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < len) {
          const c2 = self.charCodeAt(index + 1 | 0);
          if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return _bind;
            }
          }
        }
        const _bind = yield_(c1);
        if (_bind === 1) {
        } else {
          return _bind;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$string$$String$index_of(self, str, from) {
  const from$2 = from < 0 ? 0 : from >= self.length ? self.length - 1 | 0 : from;
  const len = self.length;
  const sub_len = str.length;
  const max_idx = len - sub_len | 0;
  if (sub_len === 0) {
    return 0;
  }
  if (sub_len > len) {
    return -1;
  }
  const first = str.charCodeAt(0);
  let i = from$2;
  while (true) {
    if (i <= max_idx) {
      while (true) {
        if (i < len && self.charCodeAt(i) !== first) {
          i = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (i <= max_idx) {
        let j = i + 1 | 0;
        let k = 1;
        const end = (j + sub_len | 0) - 1 | 0;
        while (true) {
          if (j < end && self.charCodeAt(j) === str.charCodeAt(k)) {
            j = j + 1 | 0;
            k = k + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j === end) {
          return i;
        }
      }
      i = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function moonbitlang$core$string$$String$split(self, seperator) {
  const len = self.length;
  const sep_len = seperator.length;
  if (sep_len === 0) {
    const _bind = moonbitlang$core$string$$String$iter(self);
    return (_p) => _bind((_p$2) => _p(String.fromCodePoint(_p$2)));
  }
  return moonbitlang$core$builtin$$Iter$new$3$((yield_) => {
    let start = 0;
    while (true) {
      if (start < len) {
        const end = moonbitlang$core$string$$String$index_of(self, seperator, start);
        if (end < 0) {
          if (moonbitlang$core$builtin$$Eq$op_equal$5$(yield_(moonbitlang$core$string$$String$substring(self, start, undefined)), 0)) {
            return 0;
          }
          return 1;
        }
        if (moonbitlang$core$builtin$$Eq$op_equal$5$(yield_(moonbitlang$core$string$$String$substring(self, start, end)), 0)) {
          return 0;
        }
        start = end + sep_len | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$array$$Array$push_iter$6$(self, iter) {
  iter((x) => {
    moonbitlang$core$array$$Array$push$6$(self, x);
    return 1;
  });
}
function moonbitlang$core$math$$maximum$7$(x, y) {
  return x > y ? x : y;
}
function moonbitlang$core$option$$Option$map$8$(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    return f(_x);
  }
}
function moonbitlang$core$builtin$$abort$9$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$10$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function moonbitlang$core$builtin$$op_ge$2$(self_, other) {
  return moonbitlang$core$int64$$Int64$compare(self_, other) >= 0;
}
function moonbitlang$core$builtin$$StringBuilder$new(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$StringBuilder$to_string(self) {
  return self.val;
}
function moonbitlang$core$builtin$$fail$11$(msg, loc) {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${loc} ${msg}`));
}
function moonbitlang$core$builtin$$fail$12$(msg, loc) {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${loc} ${msg}`));
}
function moonbitlang$core$builtin$$fail$13$(msg, loc) {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${loc} ${msg}`));
}
function moonbitlang$core$builtin$$fail$14$(msg, loc) {
  return new Result$Err$6$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${loc} ${msg}`));
}
function moonbitlang$core$builtin$$op_notequal$3$(x, y) {
  return !(x === y);
}
function moonbitlang$core$builtin$$op_lt$2$(self_, other) {
  return moonbitlang$core$int64$$Int64$compare(self_, other) < 0;
}
function moonbitlang$core$array$$Array$op_get$3$(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function moonbitlang$core$builtin$$StringBuilder$write_char(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$StringBuilder$write_string(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$string$$String$substring(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _x = _Some;
    end$2 = _x;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$string$$String$substring$46$start$46$default() {
  return 0;
}
function moonbitlang$core$char$$Char$op_sub(self, that) {
  return self - that | 0;
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _x = self.hi;
  const _x$2 = self.lo;
  const lo = _x$2 + blo | 0;
  const s = lo >> 31;
  const as_ = _x$2 >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_x + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$MyInt64$op_add(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$int64$$Int64$op_add(self, other) {
  return moonbitlang$core$builtin$$MyInt64$op_add(self, other);
}
function moonbitlang$core$builtin$$op_gt$2$(self_, other) {
  return moonbitlang$core$int64$$Int64$compare(self_, other) > 0;
}
function moonbitlang$core$builtin$$Hasher$combine$3$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$3$(value, self);
}
function moonbitlang$core$builtin$$power_2_above(x, n) {
  let _tmp = x;
  while (true) {
    const i = _tmp;
    if (i >= n) {
      return i;
    }
    const next = i << 1;
    if (next < 0) {
      return i;
    }
    _tmp = next;
    continue;
  }
}
function moonbitlang$core$builtin$$calc_grow_threshold(capacity) {
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function moonbitlang$core$builtin$$Map$new$15$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$16$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$17$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$builtin$$Map$new$18$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  return { entries: $make_array_len_and_init(capacity$2, undefined), list: $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined }), size: 0, capacity: capacity$2, capacity_mask: capacity$2 - 1 | 0, growAt: moonbitlang$core$builtin$$calc_grow_threshold(capacity$2), head: undefined, tail: undefined };
}
function moonbitlang$core$array$$Array$each$19$(self, f) {
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
function moonbitlang$core$array$$Array$each$20$(self, f) {
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
function moonbitlang$core$array$$Array$each$13$(self, f) {
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
function moonbitlang$core$array$$Array$each$21$(self, f) {
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
function moonbitlang$core$array$$Array$each$22$(self, f) {
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
function moonbitlang$core$array$$Array$each$23$(self, f) {
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
function moonbitlang$core$builtin$$Map$add_entry_to_tail$15$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$16$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$17$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _x = _Some;
    self.list[_x.idx].next = entry;
    self.list[entry.idx].prev = _x;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set$15$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$15$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$24$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$15$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$16$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$16$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$24$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$16$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$17$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$17$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$24$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$17$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$18$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$18$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$24$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _bind = self.entries[_param$2];
    if (_bind === undefined) {
      self.entries[_param$2] = _param$3;
      self.list[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$18$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const curr_node = self.list[_x.idx];
      if (_x.hash === _param$3.hash && _x.key === _param$3.key) {
        _x.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _x.psl) {
        self.entries[_param$2] = _param$3;
        self.list[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _x.psl = _x.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        _tmp$3 = _x;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$5 = _param + 1 | 0;
        const _tmp$6 = _param$2 + 1 & self.capacity_mask;
        _tmp = _tmp$5;
        _tmp$2 = _tmp$6;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$15$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$15$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$16$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$16$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$18$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$18$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$17$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.idx;
      const _x$3 = _x.key;
      const _x$4 = _x.value;
      moonbitlang$core$builtin$$Map$set$17$(self, _x$3, _x$4);
      _tmp = old_list[_x$2].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$from_array$15$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$15$(arr.length);
  moonbitlang$core$array$$Array$each$19$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$15$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$16$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$16$(arr.length);
  moonbitlang$core$array$$Array$each$20$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$16$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$18$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$18$(arr.length);
  moonbitlang$core$array$$Array$each$21$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$18$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$17$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$17$(arr.length);
  moonbitlang$core$array$$Array$each$13$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$17$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$get$15$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$24$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x.hash === hash && _x.key === key) {
        return _x.value;
      }
      if (i > _x.psl) {
        return undefined;
      }
      const _tmp$3 = i + 1 | 0;
      const _tmp$4 = idx + 1 & self.capacity_mask;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$15$(self, key) {
  const _bind = moonbitlang$core$builtin$$Map$get$15$(self, key);
  return !(_bind === undefined);
}
function moonbitlang$core$option$$Option$unwrap$25$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$26$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$27$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$builtin$$to_string$46$write_digits$28$(buf, num) {
  const num2 = num / 10 | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$to_string$46$write_digits$28$(buf, num2);
  }
  const n = num % 10 | 0;
  moonbitlang$core$builtin$$StringBuilder$write_char(buf, (n < 0 ? 0 - n | 0 : n) + 48 | 0);
}
function moonbitlang$core$int$$Int$to_string(self) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  if (self < 0) {
    moonbitlang$core$builtin$$StringBuilder$write_char(buf, 45);
  }
  moonbitlang$core$builtin$$to_string$46$write_digits$28$(buf, self);
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$builtin$$Map$each$18$(self, f) {
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.key;
      const _x$3 = _x.value;
      const _x$4 = _x.idx;
      f(_x$2, _x$3);
      _tmp = self.list[_x$4].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$each$16$(self, f) {
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.key;
      const _x$3 = _x.value;
      const _x$4 = _x.idx;
      f(_x$2, _x$3);
      _tmp = self.list[_x$4].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Iter$new$22$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$4$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$6$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$3$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter2$new$15$(f) {
  return f;
}
function moonbitlang$core$builtin$$Map$iter2$15$(self) {
  return moonbitlang$core$builtin$$Iter2$new$15$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _x$2 = _x.key;
        const _x$3 = _x.value;
        const _x$4 = _x.idx;
        if (moonbitlang$core$builtin$$Eq$op_equal$5$(yield_(_x$2, _x$3), 0)) {
          return 0;
        } else {
          _tmp = self.list[_x$4].next;
          continue;
        }
      }
    }
  });
}
function moonbitlang$core$array$$Array$new$13$(capacity) {
  return [];
}
function moonbitlang$core$array$$Array$push$29$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$30$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$13$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$3$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$6$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$31$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Map$to_array$17$(self) {
  const arr = moonbitlang$core$array$$Array$new$13$(self.size);
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _x$2 = _x.key;
      const _x$3 = _x.value;
      const _x$4 = _x.idx;
      moonbitlang$core$array$$Array$push$13$(arr, { _0: _x$2, _1: _x$3 });
      _tmp = self.list[_x$4].next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Map$from_iter$15$(iter) {
  const m = moonbitlang$core$builtin$$Map$from_array$15$([]);
  iter((e) => {
    moonbitlang$core$builtin$$Map$set$15$(m, e._0, e._1);
    return 1;
  });
  return m;
}
function moonbitlang$core$array$$ArrayView$length$32$(self) {
  return self.len;
}
function moonbitlang$core$array$$ArrayView$length$3$(self) {
  return self.len;
}
function moonbitlang$core$array$$Array$op_as_view$3$(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _x = _Some;
    end$2 = _x < 0 ? len + _x | 0 : _x;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$builtin$$abort$10$("View index out of bounds");
}
function moonbitlang$core$array$$ArrayView$iter$3$(self) {
  return moonbitlang$core$builtin$$Iter$new$3$((yield_) => {
    const _len = moonbitlang$core$array$$ArrayView$length$3$(self);
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self.buf[self.start + _i | 0];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return _bind;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$array$$ArrayView$map$33$(self, f) {
  if (moonbitlang$core$array$$ArrayView$length$32$(self) === 0) {
    return [];
  }
  const arr = new Array(moonbitlang$core$array$$ArrayView$length$32$(self));
  const _len = moonbitlang$core$array$$ArrayView$length$32$(self);
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self.buf[self.start + _i | 0];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Hasher$new(seed) {
  return { acc: seed + 374761393 | 0 };
}
function moonbitlang$core$builtin$$Hasher$new$46$seed$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  self.acc = Math.imul(moonbitlang$core$builtin$$rotl(self.acc + (Math.imul(input, -1028477379) | 0) | 0, 17), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_int(self, value) {
  self.acc = self.acc + 4 | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$MyInt64$to_int(self) {
  return self.lo;
}
function moonbitlang$core$int64$$Int64$to_int(self) {
  return moonbitlang$core$builtin$$MyInt64$to_int(self);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < value.length) {
      moonbitlang$core$builtin$$Hasher$combine_int(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
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
function moonbitlang$core$builtin$$Hash$hash_combine$3$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$MyInt64$op_div(self, other) {
  const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
  const _x = self.hi;
  const _x$2 = self.lo;
  const _x$3 = other.hi;
  const _x$4 = other.lo;
  const _func = exports.div_s;
  const lo = _func(_x$2, _x, _x$4, _x$3);
  const _func$2 = exports.get_high;
  const hi = _func$2();
  return { hi: hi, lo: lo };
}
function moonbitlang$core$int64$$Int64$op_div(self, other) {
  return moonbitlang$core$builtin$$MyInt64$op_div(self, other);
}
function moonbitlang$core$builtin$$MyInt64$op_sub(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$int64$$Int64$op_sub(self, other) {
  return moonbitlang$core$builtin$$MyInt64$op_sub(self, other);
}
function moonbitlang$core$array$$Array$map$34$(self, f) {
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
function moonbitlang$core$array$$Array$map$35$(self, f) {
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
function moonbitlang$core$array$$Array$map$36$(self, f) {
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
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$array$$Array$iter$22$(self) {
  return moonbitlang$core$builtin$$Iter$new$22$((yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return _bind;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$array$$Array$iter$6$(self) {
  return moonbitlang$core$builtin$$Iter$new$6$((yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return _bind;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$builtin$$Hash$hash$24$(self) {
  const hasher = moonbitlang$core$builtin$$Hasher$new(moonbitlang$core$builtin$$Hasher$new$46$seed$46$default());
  moonbitlang$core$builtin$$Hasher$combine$3$(hasher, self);
  return moonbitlang$core$builtin$$Hasher$finalize(hasher);
}
function moonbitlang$core$builtin$$MyInt64$op_mul(self, other) {
  const _x = self.hi;
  const _x$2 = self.lo;
  const _x$3 = other.hi;
  const _x$4 = other.lo;
  const ahi = _x;
  const alo = _x$2;
  const bhi = _x$3;
  const blo = _x$4;
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
function moonbitlang$core$int64$$Int64$op_mul(self, other) {
  return moonbitlang$core$builtin$$MyInt64$op_mul(self, other);
}
function moonbitlang$core$int64$$Int64$compare(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
}
function moonbitlang$core$option$$Option$op_equal$7$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _x$2 = _Some$2;
      return _x === _x$2;
    }
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$5$(_x_154, _x_155) {
  if (_x_154 === 0) {
    if (_x_155 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_155 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$Iter$collect$3$(self) {
  const result = [];
  self((_p) => {
    moonbitlang$core$array$$Array$push$3$(result, _p);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Eq$op_equal$37$(_x_47, _x_48) {
  switch (_x_47.$tag) {
    case 0: {
      if (_x_48.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_48.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      const _Other = _x_47;
      const _x = _Other._0;
      if (_x_48.$tag === 2) {
        const _Other$2 = _x_48;
        const _x$2 = _Other$2._0;
        return _x === _x$2;
      } else {
        return false;
      }
    }
  }
}
function Yoorkin$rabbit$45$tea$url$$parse(url) {
  const _bind = moonbitlang$core$builtin$$Iter$collect$3$(moonbitlang$core$string$$String$split(url, "://"));
  let _bind$2;
  if (_bind.length === 2) {
    const _x = moonbitlang$core$array$$Array$op_get$3$(_bind, 0);
    switch (_x) {
      case "http": {
        const _x$2 = moonbitlang$core$array$$Array$op_get$3$(_bind, 1);
        _bind$2 = { _0: $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Http, _1: _x$2 };
        break;
      }
      case "https": {
        const _x$3 = moonbitlang$core$array$$Array$op_get$3$(_bind, 1);
        _bind$2 = { _0: $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Https, _1: _x$3 };
        break;
      }
      default: {
        const _x$4 = moonbitlang$core$array$$Array$op_get$3$(_bind, 1);
        _bind$2 = { _0: new $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(_x), _1: _x$4 };
      }
    }
  } else {
    if (_bind.length === 1) {
      const _x = moonbitlang$core$array$$Array$op_get$3$(_bind, 0);
      _bind$2 = { _0: new $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(""), _1: _x };
    } else {
      const _bind$3 = moonbitlang$core$builtin$$fail$14$("Invalid protocol", "/Users/yorkin/source/moonbit/rabbit-tea/rabbit-tea-tailwind/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:56:10-56:35");
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        _bind$2 = _ok._0;
      } else {
        return _bind$3;
      }
    }
  }
  const _x = _bind$2._0;
  const _x$2 = _bind$2._1;
  const _bind$3 = moonbitlang$core$builtin$$Iter$collect$3$(moonbitlang$core$string$$String$split(_x$2, "?"));
  let _bind$4;
  if (_bind$3.length === 2) {
    const _x$3 = moonbitlang$core$array$$Array$op_get$3$(_bind$3, 0);
    const _x$4 = moonbitlang$core$array$$Array$op_get$3$(_bind$3, 1);
    _bind$4 = { _0: _x$3, _1: _x$4 };
  } else {
    if (_bind$3.length === 1) {
      const _x$3 = moonbitlang$core$array$$Array$op_get$3$(_bind$3, 0);
      _bind$4 = { _0: _x$3, _1: "" };
    } else {
      const _bind$5 = moonbitlang$core$builtin$$fail$13$("Invalid host", "/Users/yorkin/source/moonbit/rabbit-tea/rabbit-tea-tailwind/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:61:10-61:31");
      if (_bind$5.$tag === 1) {
        const _ok = _bind$5;
        _bind$4 = _ok._0;
      } else {
        return _bind$5;
      }
    }
  }
  const _x$3 = _bind$4._0;
  const _x$4 = _bind$4._1;
  const _bind$5 = moonbitlang$core$builtin$$Iter$collect$3$(moonbitlang$core$string$$String$split(_x$3, "/"));
  let _bind$6;
  if (_bind$5.length === 1) {
    const _x$5 = moonbitlang$core$array$$Array$op_get$3$(_bind$5, 0);
    _bind$6 = { _0: _x$5, _1: "" };
  } else {
    if (_bind$5.length >= 1) {
      const _x$5 = moonbitlang$core$array$$Array$op_get$3$(_bind$5, 0);
      const _x$6 = moonbitlang$core$array$$Array$op_as_view$3$(_bind$5, 1, _bind$5.length - 0 | 0);
      _bind$6 = { _0: _x$5, _1: moonbitlang$core$string$$String$concat(moonbitlang$core$builtin$$Iter$collect$3$(moonbitlang$core$array$$ArrayView$iter$3$(_x$6)), "/") };
    } else {
      const _bind$7 = moonbitlang$core$builtin$$fail$13$("Invalid host", "/Users/yorkin/source/moonbit/rabbit-tea/rabbit-tea-tailwind/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:67:10-67:31");
      if (_bind$7.$tag === 1) {
        const _ok = _bind$7;
        _bind$6 = _ok._0;
      } else {
        return _bind$7;
      }
    }
  }
  const _x$5 = _bind$6._0;
  const _x$6 = _bind$6._1;
  const _bind$7 = moonbitlang$core$builtin$$Iter$collect$3$(moonbitlang$core$string$$String$split(_x$5, ":"));
  let _bind$8;
  if (_bind$7.length === 2) {
    const _x$7 = moonbitlang$core$array$$Array$op_get$3$(_bind$7, 0);
    const _x$8 = moonbitlang$core$array$$Array$op_get$3$(_bind$7, 1);
    let port;
    let _try_err;
    _L: {
      _L$2: {
        const _bind$9 = moonbitlang$core$strconv$$parse_int(_x$8, moonbitlang$core$strconv$$parse_int$46$base$46$default());
        let _bind$10;
        if (_bind$9.$tag === 1) {
          const _ok = _bind$9;
          _bind$10 = _ok._0;
        } else {
          const _err = _bind$9;
          const _tmp = _err._0;
          _try_err = _tmp;
          break _L$2;
        }
        port = _bind$10;
        break _L;
      }
      port = undefined;
    }
    _bind$8 = { _0: _x$7, _1: port };
  } else {
    if (_bind$7.length === 1) {
      const _x$7 = moonbitlang$core$array$$Array$op_get$3$(_bind$7, 0);
      _bind$8 = { _0: _x$7, _1: undefined };
    } else {
      const _bind$9 = moonbitlang$core$builtin$$fail$12$("Invalid host", "/Users/yorkin/source/moonbit/rabbit-tea/rabbit-tea-tailwind/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:81:10-81:31");
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _bind$8 = _ok._0;
      } else {
        return _bind$9;
      }
    }
  }
  const _x$7 = _bind$8._0;
  const _x$8 = _bind$8._1;
  const _bind$9 = moonbitlang$core$builtin$$Iter$collect$3$(moonbitlang$core$string$$String$split(_x$4, "#"));
  let _bind$10;
  if (_bind$9.length === 2) {
    const _x$9 = moonbitlang$core$array$$Array$op_get$3$(_bind$9, 0);
    const _x$10 = moonbitlang$core$array$$Array$op_get$3$(_bind$9, 1);
    _bind$10 = { _0: _x$9, _1: _x$10 };
  } else {
    if (_bind$9.length === 1) {
      const _x$9 = moonbitlang$core$array$$Array$op_get$3$(_bind$9, 0);
      _bind$10 = { _0: _x$9, _1: undefined };
    } else {
      if (_bind$9.length === 0) {
        _bind$10 = { _0: undefined, _1: undefined };
      } else {
        const _bind$11 = moonbitlang$core$builtin$$fail$11$("Invalid query", "/Users/yorkin/source/moonbit/rabbit-tea/rabbit-tea-tailwind/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:87:10-87:32");
        if (_bind$11.$tag === 1) {
          const _ok = _bind$11;
          _bind$10 = _ok._0;
        } else {
          return _bind$11;
        }
      }
    }
  }
  const _x$9 = _bind$10._0;
  const _x$10 = _bind$10._1;
  return new Result$Ok$7$({ protocol: _x, host: _x$7, port: _x$8, path: _x$6, query: _x$9, fragment: _x$10 });
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$get_on_url_request$38$(self) {
  return self.on_url_request;
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(self, message) {
  const _func = self.update;
  const _bind = _func(message, self.model);
  const _x = _bind._0;
  const _x$2 = _bind._1;
  self.model = _x$2;
  const _func$2 = self.view;
  const view = _func$2(self.model);
  const _func$3 = self.after_update;
  _func$3(view);
  Yoorkin$rabbit$45$tea$browser$$Sandbox$launch$38$(self, _x);
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$launch$38$(self, cmd) {
  const f = cmd;
  const update = (m) => {
    Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(self, m);
  };
  f(moonbitlang$core$option$$Option$unwrap$26$(self.predefined), update);
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$refersh$38$(self) {
  const _func = self.view;
  const view = _func(self.model);
  const _func$2 = self.after_update;
  _func$2(view);
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$new$39$(model, update, view, after_update, url_changed, url_request) {
  const sandbox = { model: model, update: update, view: view, after_update: after_update, on_url_changed: url_changed, on_url_request: url_request, predefined: undefined };
  let on_url_changed;
  if (url_changed === undefined) {
    on_url_changed = (_x) => {
    };
  } else {
    const _Some = url_changed;
    const _x = _Some;
    on_url_changed = (url) => {
      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x(url));
    };
  }
  let on_url_request;
  if (url_request === undefined) {
    on_url_request = (_x) => {
    };
  } else {
    const _Some = url_request;
    const _x = _Some;
    on_url_request = (url) => {
      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x(url));
    };
  }
  Yoorkin$rabbit$45$tea$internal$ffi$$Window$add_event_listener(Yoorkin$rabbit$45$tea$internal$ffi$$window(), "popstate", (_event) => {
    const _bind = Yoorkin$rabbit$45$tea$url$$parse(Yoorkin$rabbit$45$tea$internal$ffi$$Window$current_url(Yoorkin$rabbit$45$tea$internal$ffi$$window()));
    if (_bind.$tag === 1) {
      const _Ok = _bind;
      const _x = _Ok._0;
      on_url_changed(_x);
      return;
    } else {
      $panic();
      return;
    }
  });
  sandbox.predefined = { on_url_changed: on_url_changed, on_url_request: on_url_request };
  return sandbox;
}
function Yoorkin$rabbit$45$tea$browser$$none$40$() {
  return (_param1, _param2) => {
  };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$node$40$(tag, attrs, childrens) {
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$8$(tag, attrs, childrens, []);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$text$40$(value) {
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$8$(value);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$is_same_type$40$(x, y) {
  switch (x.$tag) {
    case 0: {
      if (y.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (y.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (y.$tag === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function Yoorkin$rabbit$45$tea$internal$vdom$$on$40$(event, handler) {
  return { _0: event, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$8$(handler) };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$attribute$40$(key, value) {
  return { _0: key, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$8$(value) };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$38$(self, sandbox) {
  switch (self.$tag) {
    case 0: {
      const _Node = self;
      const _x = _Node._0;
      const _x$2 = _Node._1;
      const _x$3 = _Node._2;
      const element = Yoorkin$rabbit$45$tea$internal$ffi$$Document$create_element(Yoorkin$rabbit$45$tea$internal$ffi$$document(), _x);
      moonbitlang$core$array$$Array$each$22$(_x$2, (_param1) => {
        const _x$4 = _param1;
        const _x$5 = _x$4._0;
        const _x$6 = _x$4._1;
        switch (_x$6.$tag) {
          case 0: {
            const _AttrEvent = _x$6;
            const _x$7 = _AttrEvent._0;
            let listener;
            switch (_x$7.$tag) {
              case 0: {
                const _Normal = _x$7;
                const _x$8 = _Normal._0;
                listener = (_event) => {
                  Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x$8);
                };
                break;
              }
              case 1: {
                const _HandleEvent = _x$7;
                const _x$9 = _HandleEvent._0;
                listener = (event) => {
                  Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x$9(event));
                };
                break;
              }
              default: {
                const _Custom = _x$7;
                const _x$10 = _Custom._0;
                const _x$11 = _Custom._1;
                const _x$12 = _Custom._2;
                listener = (event) => {
                  if (_x$11) {
                    Yoorkin$rabbit$45$tea$internal$ffi$$Event$stop_propagation(event);
                  }
                  if (_x$12) {
                    Yoorkin$rabbit$45$tea$internal$ffi$$Event$prevent_default(event);
                  }
                  Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x$10);
                };
              }
            }
            Yoorkin$rabbit$45$tea$internal$ffi$$Element$add_event_listener(element, _x$5, listener);
            moonbitlang$core$array$$Array$push$31$(_Node._3, { _0: _x$5, _1: listener });
            return;
          }
          case 2: {
            const _AttrString = _x$6;
            const _x$13 = _AttrString._0;
            Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_attribute(element, _x$5, _x$13);
            return;
          }
          case 1: {
            const _AttrStyle = _x$6;
            const _x$14 = _AttrStyle._0;
            Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_style(element, _x$5, _x$14);
            return;
          }
          default: {
            const _AttrProperty = _x$6;
            const _x$15 = _AttrProperty._0;
            Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_property(element, _x$5, _x$15);
            return;
          }
        }
      });
      const _bind = Yoorkin$rabbit$45$tea$browser$$Sandbox$get_on_url_request$38$(sandbox);
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _x$4 = _Some;
        if (_x === "a") {
          Yoorkin$rabbit$45$tea$internal$ffi$$Element$add_event_listener(element, "click", (event) => {
            Yoorkin$rabbit$45$tea$internal$ffi$$Event$prevent_default(event);
            const href = Yoorkin$rabbit$45$tea$internal$ffi$$Element$get_property(element, "href");
            const _bind$2 = Yoorkin$rabbit$45$tea$url$$parse(Yoorkin$rabbit$45$tea$internal$ffi$$Window$current_url(Yoorkin$rabbit$45$tea$internal$ffi$$window()));
            if (_bind$2.$tag === 1) {
              const _Ok = _bind$2;
              const _x$5 = _Ok._0;
              const _bind$3 = Yoorkin$rabbit$45$tea$url$$parse(href);
              if (_bind$3.$tag === 1) {
                const _Ok$2 = _bind$3;
                const _x$6 = _Ok$2._0;
                const request = moonbitlang$core$builtin$$Eq$op_equal$37$(_x$5.protocol, _x$6.protocol) && (_x$5.host === _x$6.host && moonbitlang$core$option$$Option$op_equal$7$(_x$5.port, _x$6.port)) ? new $64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$Internal(_x$6) : new $64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$External(href);
                Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x$4(request));
                return;
              } else {
                $panic();
                return;
              }
            } else {
              $panic();
              return;
            }
          });
        }
      }
      const _len = _x$3.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const child = _x$3[_i];
          Yoorkin$rabbit$45$tea$internal$ffi$$Node$append_child(Yoorkin$rabbit$45$tea$internal$ffi$$Element$to_node(element), Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$38$(child, sandbox));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return Yoorkin$rabbit$45$tea$internal$ffi$$Element$to_node(element);
    }
    case 1: {
      const _Text = self;
      const _x$4 = _Text._0;
      return Yoorkin$rabbit$45$tea$internal$ffi$$Element$to_node(Yoorkin$rabbit$45$tea$internal$ffi$$Document$create_text_node(Yoorkin$rabbit$45$tea$internal$ffi$$document(), _x$4));
    }
    default: {
      return Yoorkin$rabbit$45$tea$internal$ffi$$Element$to_node(Yoorkin$rabbit$45$tea$internal$ffi$$Document$create_text_node(Yoorkin$rabbit$45$tea$internal$ffi$$document(), ""));
    }
  }
}
function Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$40$(old, new_, listeners) {
  const _bind = moonbitlang$core$array$$Array$iter$22$(old);
  const old_map = moonbitlang$core$builtin$$Map$from_iter$15$((_p) => _bind((_p$2) => _p(_p$2)));
  const _bind$2 = moonbitlang$core$array$$Array$iter$22$(new_);
  const new_map = moonbitlang$core$builtin$$Map$from_iter$15$((_p) => _bind$2((_p$2) => _p(_p$2)));
  const result = [];
  const _len = listeners.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const x = listeners[_i];
      moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$8$(x._0, x._1));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = moonbitlang$core$builtin$$Map$iter2$15$(old_map);
  _bind$3((key, value) => {
    switch (value.$tag) {
      case 0: {
        break;
      }
      case 1: {
        const _AttrStyle = value;
        const _x = _AttrStyle._0;
        if (moonbitlang$core$builtin$$Map$contains$15$(new_map, key)) {
          const _bind$4 = moonbitlang$core$option$$Option$unwrap$25$(moonbitlang$core$builtin$$Map$get$15$(new_map, key));
          if (_bind$4.$tag === 1) {
            const _AttrStyle$2 = _bind$4;
            const _x$2 = _AttrStyle$2._0;
            if (moonbitlang$core$builtin$$op_notequal$3$(_x, _x$2)) {
              moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$8$(key, _x$2));
            }
          } else {
            $panic();
          }
        } else {
          moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$8$(key));
        }
        break;
      }
      case 2: {
        const _AttrString = value;
        const _x$2 = _AttrString._0;
        if (moonbitlang$core$builtin$$Map$contains$15$(new_map, key)) {
          const _bind$4 = moonbitlang$core$option$$Option$unwrap$25$(moonbitlang$core$builtin$$Map$get$15$(new_map, key));
          if (_bind$4.$tag === 2) {
            const _AttrString$2 = _bind$4;
            const _x$3 = _AttrString$2._0;
            if (moonbitlang$core$builtin$$op_notequal$3$(_x$2, _x$3)) {
              moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$8$(key, _x$3));
            }
          } else {
            $panic();
          }
        } else {
          moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$8$(key));
        }
        break;
      }
      default: {
        const _AttrProperty = value;
        const _x$3 = _AttrProperty._0;
        if (moonbitlang$core$builtin$$Map$contains$15$(new_map, key)) {
          const _bind$4 = moonbitlang$core$option$$Option$unwrap$25$(moonbitlang$core$builtin$$Map$get$15$(new_map, key));
          if (_bind$4.$tag === 3) {
            const _AttrProperty$2 = _bind$4;
            const _x$4 = _AttrProperty$2._0;
            if (moonbitlang$core$builtin$$op_notequal$3$(_x$3, _x$4)) {
              moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$8$(key, _x$4));
            }
          } else {
            $panic();
          }
        } else {
          moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$8$(key));
        }
      }
    }
    return 1;
  });
  const _bind$4 = moonbitlang$core$builtin$$Map$iter2$15$(new_map);
  _bind$4((key, value) => {
    switch (value.$tag) {
      case 0: {
        const _AttrEvent = value;
        const _x = _AttrEvent._0;
        moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$8$(key, _x));
        break;
      }
      case 1: {
        const _AttrStyle = value;
        const _x$2 = _AttrStyle._0;
        if (!moonbitlang$core$builtin$$Map$contains$15$(old_map, key)) {
          moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$8$(key, _x$2));
        }
        break;
      }
      case 2: {
        const _AttrString = value;
        const _x$3 = _AttrString._0;
        if (!moonbitlang$core$builtin$$Map$contains$15$(old_map, key)) {
          moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$8$(key, _x$3));
        }
        break;
      }
      default: {
        const _AttrProperty = value;
        const _x$4 = _AttrProperty._0;
        if (!moonbitlang$core$builtin$$Map$contains$15$(old_map, key)) {
          moonbitlang$core$array$$Array$push$30$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$8$(key, _x$4));
        }
      }
    }
    return 1;
  });
  return result;
}
function Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$40$(old, new_) {
  let childrens_old;
  if (old.$tag === 0) {
    const _Node = old;
    const _x = _Node._2;
    childrens_old = _x;
  } else {
    childrens_old = moonbitlang$core$builtin$$abort$9$("old is not a node or fragment");
  }
  let childrens_new;
  if (new_.$tag === 0) {
    const _Node = new_;
    const _x = _Node._2;
    childrens_new = _x;
  } else {
    childrens_new = moonbitlang$core$builtin$$abort$9$("new is not a node or fragment");
  }
  return childrens_old.length === 0 && childrens_new.length === 0 ? [] : Yoorkin$rabbit$45$tea$internal$vdom$$diff_without_key$40$(childrens_old, childrens_new);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$diff_without_key$40$(old, new_) {
  const patches = [];
  Yoorkin$rabbit$45$tea$internal$vdom$$diff_without_key$46$aux$47$845({ buf: old, start: 0, len: old.length }, { buf: new_, start: 0, len: new_.length }, patches, 0);
  return patches;
}
function Yoorkin$rabbit$45$tea$internal$vdom$$diff_without_key$46$aux$47$845(xs, ys, patches, index) {
  let _tmp = xs;
  let _tmp$2 = ys;
  let _tmp$3 = patches;
  let _tmp$4 = index;
  while (true) {
    const xs$2 = _tmp;
    const ys$2 = _tmp$2;
    const patches$2 = _tmp$3;
    const index$2 = _tmp$4;
    if (xs$2.len === 0) {
      if (ys$2.len === 0) {
        return;
      } else {
        moonbitlang$core$array$$Array$push$29$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$8$(moonbitlang$core$array$$ArrayView$map$33$(ys$2, (x) => x)));
        return;
      }
    } else {
      if (ys$2.len === 0) {
        moonbitlang$core$array$$Array$push$29$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$8$(index$2, moonbitlang$core$array$$ArrayView$length$32$(xs$2)));
        return;
      } else {
        const _x = xs$2.buf[xs$2.start + 0 | 0];
        const _tmp$5 = xs$2.buf;
        const _tmp$6 = 1 + xs$2.start | 0;
        const _some = xs$2.len - 0 | 0;
        const _x$2 = { buf: _tmp$5, start: _tmp$6, len: _some - 1 | 0 };
        const _x$3 = ys$2.buf[ys$2.start + 0 | 0];
        const _tmp$7 = ys$2.buf;
        const _tmp$8 = 1 + ys$2.start | 0;
        const _some$2 = ys$2.len - 0 | 0;
        const _x$4 = { buf: _tmp$7, start: _tmp$8, len: _some$2 - 1 | 0 };
        if (Yoorkin$rabbit$45$tea$internal$vdom$$is_same_type$40$(_x, _x$3)) {
          switch (_x.$tag) {
            case 0: {
              const _Node = _x;
              const _x$5 = _Node._0;
              const _x$6 = _Node._1;
              const _x$7 = _Node._3;
              if (_x$3.$tag === 0) {
                const _Node$2 = _x$3;
                const _x$8 = _Node$2._0;
                const _x$9 = _Node$2._1;
                const _x$10 = _Node$2._3;
                if (_x$5 === _x$8) {
                  const attrs_patches = Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$40$(_x$6, _x$9, _x$7);
                  const childs_patches = Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$40$(_x, _x$3);
                  if (attrs_patches.length > 0 || childs_patches.length > 0) {
                    moonbitlang$core$array$$Array$push$29$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$8$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$8$(index$2, attrs_patches, childs_patches, _x$10)));
                  }
                } else {
                  moonbitlang$core$array$$Array$push$29$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$8$(index$2, _x$3));
                }
              }
              break;
            }
            case 1: {
              const _Text = _x;
              const _x$8 = _Text._0;
              if (_x$3.$tag === 1) {
                const _Text$2 = _x$3;
                const _x$9 = _Text$2._0;
                if (moonbitlang$core$builtin$$op_notequal$3$(_x$8, _x$9)) {
                  moonbitlang$core$array$$Array$push$29$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$8$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$8$(index$2, _x$9)));
                }
              }
              break;
            }
          }
        } else {
          moonbitlang$core$array$$Array$push$29$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$8$(index$2, _x$3));
        }
        const _tmp$9 = index$2 + 1 | 0;
        _tmp = _x$2;
        _tmp$2 = _x$4;
        _tmp$4 = _tmp$9;
        continue;
      }
    }
  }
}
function Yoorkin$rabbit$45$tea$internal$vdom$$diff$40$(root_old, root_new) {
  if (root_old.$tag === 0) {
    const _Node = root_old;
    const _x = _Node._1;
    const _x$2 = _Node._3;
    if (root_new.$tag === 0) {
      const _Node$2 = root_new;
      const _x$3 = _Node$2._1;
      return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$8$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$8$(0, Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$40$(_x, _x$3, _x$2), Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$40$(root_old, root_new), []));
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function Yoorkin$rabbit$45$tea$internal$vdom$$Node$patch$38$(self, old, sandbox, mount) {
  const patches = Yoorkin$rabbit$45$tea$internal$vdom$$diff$40$(old, self);
  const root = Yoorkin$rabbit$45$tea$internal$ffi$$Element$to_node(Yoorkin$rabbit$45$tea$internal$ffi$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$internal$ffi$$document(), mount));
  Yoorkin$rabbit$45$tea$internal$vdom$$patch$46$aux$47$886(sandbox, patches, root);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$patch$46$aux$47$886(sandbox, patches, current) {
  switch (patches.$tag) {
    case 0: {
      const _Drop = patches;
      const _x = _Drop._0;
      const _x$2 = _Drop._1;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _x$2) {
          Yoorkin$rabbit$45$tea$internal$ffi$$Node$remove_child(current, Yoorkin$rabbit$45$tea$internal$ffi$$Node$nth_child(current, _x));
          _tmp = i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    case 1: {
      const _Remove = patches;
      const _x$3 = _Remove._0;
      Yoorkin$rabbit$45$tea$internal$ffi$$Node$remove_child(current, Yoorkin$rabbit$45$tea$internal$ffi$$Node$nth_child(current, _x$3));
      return;
    }
    case 2: {
      const _Replace = patches;
      const _x$4 = _Replace._0;
      const _x$5 = _Replace._1;
      Yoorkin$rabbit$45$tea$internal$ffi$$Node$replace_child(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$38$(_x$5, sandbox), Yoorkin$rabbit$45$tea$internal$ffi$$Node$nth_child(current, _x$4));
      return;
    }
    case 3: {
      const _InsertBefore = patches;
      const _x$6 = _InsertBefore._0;
      const _x$7 = _InsertBefore._1;
      if (Yoorkin$rabbit$45$tea$internal$ffi$$Node$count_child(current) === 0) {
        Yoorkin$rabbit$45$tea$internal$ffi$$Node$append_child(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$38$(_x$7, sandbox));
        return;
      } else {
        Yoorkin$rabbit$45$tea$internal$ffi$$Node$insert_before(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$38$(_x$7, sandbox), Yoorkin$rabbit$45$tea$internal$ffi$$Node$nth_child(current, _x$6));
        return;
      }
    }
    case 4: {
      const _Append = patches;
      const _x$8 = _Append._0;
      const _len = _x$8.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len) {
          const node = _x$8[_i];
          Yoorkin$rabbit$45$tea$internal$ffi$$Node$append_child(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$38$(node, sandbox));
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    default: {
      const _Update = patches;
      const _x$9 = _Update._0;
      if (_x$9.$tag === 0) {
        const _UpdateNode = _x$9;
        const _x$10 = _UpdateNode._0;
        const _x$11 = _UpdateNode._1;
        const _x$12 = _UpdateNode._2;
        const _x$13 = _UpdateNode._3;
        const node = Yoorkin$rabbit$45$tea$internal$ffi$$Node$nth_child(current, _x$10);
        const element = Yoorkin$rabbit$45$tea$internal$ffi$$Node$to_element(node);
        const _len$2 = _x$11.length;
        let _tmp$3 = 0;
        while (true) {
          const _i = _tmp$3;
          if (_i < _len$2) {
            const patch = _x$11[_i];
            switch (patch.$tag) {
              case 0: {
                const _AttrRemove = patch;
                const _x$14 = _AttrRemove._0;
                Yoorkin$rabbit$45$tea$internal$ffi$$Element$remove_attribute(element, _x$14);
                break;
              }
              case 1: {
                const _AttrAdd = patch;
                const _x$15 = _AttrAdd._0;
                const _x$16 = _AttrAdd._1;
                Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_attribute(element, _x$15, _x$16);
                break;
              }
              case 2: {
                const _StyleAdd = patch;
                const _x$17 = _StyleAdd._0;
                const _x$18 = _StyleAdd._1;
                Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_style(element, _x$17, _x$18);
                break;
              }
              case 3: {
                const _StyleRemove = patch;
                const _x$19 = _StyleRemove._0;
                Yoorkin$rabbit$45$tea$internal$ffi$$Element$remove_style(element, _x$19);
                break;
              }
              case 4: {
                const _PropertyAdd = patch;
                const _x$20 = _PropertyAdd._0;
                const _x$21 = _PropertyAdd._1;
                Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_property(element, _x$20, _x$21);
                break;
              }
              case 5: {
                const _PropertyRemove = patch;
                const _x$22 = _PropertyRemove._0;
                Yoorkin$rabbit$45$tea$internal$ffi$$Element$remove_property(element, _x$22);
                break;
              }
              case 6: {
                const _EventRemove = patch;
                const _x$23 = _EventRemove._0;
                const _x$24 = _EventRemove._1;
                Yoorkin$rabbit$45$tea$internal$ffi$$Element$remove_event_listener(element, _x$23, _x$24);
                break;
              }
              default: {
                const _EventAdd = patch;
                const _x$25 = _EventAdd._0;
                const _x$26 = _EventAdd._1;
                let listener;
                switch (_x$26.$tag) {
                  case 0: {
                    const _Normal = _x$26;
                    const _x$27 = _Normal._0;
                    listener = (_event) => {
                      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x$27);
                    };
                    break;
                  }
                  case 1: {
                    const _HandleEvent = _x$26;
                    const _x$28 = _HandleEvent._0;
                    listener = (event) => {
                      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x$28(event));
                    };
                    break;
                  }
                  default: {
                    const _Custom = _x$26;
                    const _x$29 = _Custom._0;
                    const _x$30 = _Custom._1;
                    const _x$31 = _Custom._2;
                    listener = (event) => {
                      if (_x$30) {
                        Yoorkin$rabbit$45$tea$internal$ffi$$Event$stop_propagation(event);
                      }
                      if (_x$31) {
                        Yoorkin$rabbit$45$tea$internal$ffi$$Event$prevent_default(event);
                      }
                      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$38$(sandbox, _x$29);
                    };
                  }
                }
                Yoorkin$rabbit$45$tea$internal$ffi$$Element$add_event_listener(element, _x$25, listener);
                moonbitlang$core$array$$Array$push$31$(_x$13, { _0: _x$25, _1: listener });
              }
            }
            _tmp$3 = _i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _len$3 = _x$12.length;
        let _tmp$4 = 0;
        while (true) {
          const _i = _tmp$4;
          if (_i < _len$3) {
            const patch = _x$12[_i];
            Yoorkin$rabbit$45$tea$internal$vdom$$patch$46$aux$47$886(sandbox, patch, node);
            _tmp$4 = _i + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      } else {
        const _UpdateText = _x$9;
        const _x$10 = _UpdateText._0;
        const _x$11 = _UpdateText._1;
        const text_node = Yoorkin$rabbit$45$tea$internal$ffi$$Document$create_text_node(Yoorkin$rabbit$45$tea$internal$ffi$$document(), _x$11);
        Yoorkin$rabbit$45$tea$internal$ffi$$Node$replace_child(current, Yoorkin$rabbit$45$tea$internal$ffi$$Element$to_node(text_node), Yoorkin$rabbit$45$tea$internal$ffi$$Node$nth_child(current, _x$10));
        return;
      }
    }
  }
}
function Yoorkin$rabbit$45$tea$html$$node$40$(tag, attributes, childrens) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$node$40$(tag, moonbitlang$core$array$$Array$map$36$(attributes, (x) => x), moonbitlang$core$array$$Array$map$35$(childrens, (x) => x));
}
function Yoorkin$rabbit$45$tea$html$$T$to_virtual_dom$40$(self) {
  return Yoorkin$rabbit$45$tea$html$$node$40$("root", [], [self]);
}
function Yoorkin$rabbit$45$tea$html$$attribute$40$(key, value) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$attribute$40$(key, value);
}
function Yoorkin$rabbit$45$tea$html$$new$40$(tag, attrs, style, class_, id, optional_attrs, attributes, optional_attributes, events, childrens) {
  const attrs$2 = moonbitlang$core$array$$Array$map$34$(moonbitlang$core$builtin$$Map$to_array$17$(attrs), (p) => Yoorkin$rabbit$45$tea$html$$attribute$40$(p._0, p._1));
  moonbitlang$core$array$$Array$push_iter$6$(attrs$2, moonbitlang$core$array$$Array$iter$6$(attributes));
  moonbitlang$core$array$$Array$each$23$(optional_attributes, (_param1) => {
    if (_param1 === undefined) {
      return;
    } else {
      const _Some = _param1;
      const _x = _Some;
      moonbitlang$core$array$$Array$push$6$(attrs$2, _x);
      return;
    }
  });
  moonbitlang$core$builtin$$Map$each$16$(optional_attrs, (_param2, _param3) => {
    if (_param3 === undefined) {
      return;
    } else {
      const _Some = _param3;
      const _x = _Some;
      moonbitlang$core$array$$Array$push$6$(attrs$2, Yoorkin$rabbit$45$tea$html$$attribute$40$(_param2, _x));
      return;
    }
  });
  if (style === undefined) {
  } else {
    const _Some = style;
    const _x = _Some;
    moonbitlang$core$array$$Array$push$6$(attrs$2, Yoorkin$rabbit$45$tea$html$$attribute$40$("style", moonbitlang$core$string$$String$concat(_x, ";")));
  }
  if (class_ === undefined) {
  } else {
    const _Some = class_;
    const _x = _Some;
    moonbitlang$core$array$$Array$push$6$(attrs$2, Yoorkin$rabbit$45$tea$html$$attribute$40$("class", _x));
  }
  if (id === undefined) {
  } else {
    const _Some = id;
    const _x = _Some;
    moonbitlang$core$array$$Array$push$6$(attrs$2, Yoorkin$rabbit$45$tea$html$$attribute$40$("id", _x));
  }
  moonbitlang$core$builtin$$Map$each$18$(events, (_param4, _param5) => {
    if (_param5 === undefined) {
      return;
    } else {
      const _Some = _param5;
      const _x = _Some;
      moonbitlang$core$array$$Array$push$6$(attrs$2, Yoorkin$rabbit$45$tea$internal$vdom$$on$40$(_param4, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$8$(_x)));
      return;
    }
  });
  return Yoorkin$rabbit$45$tea$html$$node$40$(tag, attrs$2, childrens);
}
function Yoorkin$rabbit$45$tea$html$$new$46$optional_attrs$46$default$40$() {
  return moonbitlang$core$builtin$$Map$from_array$16$([]);
}
function Yoorkin$rabbit$45$tea$html$$new$46$attributes$46$default$40$() {
  return [];
}
function Yoorkin$rabbit$45$tea$html$$new$46$optional_attributes$46$default$40$() {
  return [];
}
function Yoorkin$rabbit$45$tea$html$$new$46$events$46$default$40$() {
  return moonbitlang$core$builtin$$Map$from_array$18$([]);
}
function Yoorkin$rabbit$45$tea$html$$h1$40$(style, id, class_, childrens) {
  return Yoorkin$rabbit$45$tea$html$$new$40$("h1", moonbitlang$core$builtin$$Map$from_array$17$([]), style, class_, id, Yoorkin$rabbit$45$tea$html$$new$46$optional_attrs$46$default$40$(), Yoorkin$rabbit$45$tea$html$$new$46$attributes$46$default$40$(), Yoorkin$rabbit$45$tea$html$$new$46$optional_attributes$46$default$40$(), Yoorkin$rabbit$45$tea$html$$new$46$events$46$default$40$(), childrens);
}
function Yoorkin$rabbit$45$tea$html$$h1$46$style$46$default$40$() {
  return [];
}
function Yoorkin$rabbit$45$tea$html$$div$40$(style, id, class_, click, childrens) {
  return Yoorkin$rabbit$45$tea$html$$new$40$("div", moonbitlang$core$builtin$$Map$from_array$17$([]), style, class_, id, Yoorkin$rabbit$45$tea$html$$new$46$optional_attrs$46$default$40$(), Yoorkin$rabbit$45$tea$html$$new$46$attributes$46$default$40$(), Yoorkin$rabbit$45$tea$html$$new$46$optional_attributes$46$default$40$(), moonbitlang$core$builtin$$Map$from_array$18$([{ _0: "click", _1: moonbitlang$core$option$$Option$map$8$(click, (m) => m) }]), childrens);
}
function Yoorkin$rabbit$45$tea$html$$div$46$style$46$default$40$() {
  return [];
}
function Yoorkin$rabbit$45$tea$html$$text$40$(str) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$text$40$(str);
}
function Yoorkin$rabbit$45$tea$$none$40$() {
  return Yoorkin$rabbit$45$tea$browser$$none$40$();
}
function Yoorkin$rabbit$45$tea$$startup$41$(model, update, view, mount) {
  Yoorkin$rabbit$45$tea$internal$ffi$$Element$set_inner_html(Yoorkin$rabbit$45$tea$internal$ffi$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$internal$ffi$$document(), mount), "<div></div>");
  const sandbox = { val: undefined };
  const curr_dom = { val: Yoorkin$rabbit$45$tea$internal$vdom$$node$40$("div", [], []) };
  const after_update = (html) => {
    const _bind = sandbox.val;
    if (_bind === undefined) {
      $panic();
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const new_dom = Yoorkin$rabbit$45$tea$html$$T$to_virtual_dom$40$(html);
      Yoorkin$rabbit$45$tea$internal$vdom$$Node$patch$38$(new_dom, curr_dom.val, _x, mount);
      curr_dom.val = new_dom;
      return;
    }
  };
  sandbox.val = Yoorkin$rabbit$45$tea$browser$$Sandbox$new$39$(model, update, view, after_update, undefined, undefined);
  Yoorkin$rabbit$45$tea$browser$$Sandbox$refersh$38$(moonbitlang$core$option$$Option$unwrap$27$(sandbox.val));
}
function Yoorkin$rabbit$45$tea$$startup$46$mount$46$default$41$() {
  return "app";
}
function username$rabbit$45$tea$45$tailwind$main$$update(msg, model) {
  if (msg === 0) {
    return { _0: Yoorkin$rabbit$45$tea$$none$40$(), _1: { count: model.count + 1 | 0 } };
  } else {
    return { _0: Yoorkin$rabbit$45$tea$$none$40$(), _1: { count: moonbitlang$core$math$$maximum$7$(0, model.count - 1 | 0) } };
  }
}
function username$rabbit$45$tea$45$tailwind$main$$button(value, msg) {
  return Yoorkin$rabbit$45$tea$html$$div$40$(Yoorkin$rabbit$45$tea$html$$div$46$style$46$default$40$(), undefined, username$rabbit$45$tea$45$tailwind$main$$button$46$class$0$, msg, [Yoorkin$rabbit$45$tea$html$$text$40$(value)]);
}
function username$rabbit$45$tea$45$tailwind$main$$view(model) {
  return Yoorkin$rabbit$45$tea$html$$div$40$(Yoorkin$rabbit$45$tea$html$$div$46$style$46$default$40$(), undefined, "w-[600px] h-[100px] m-10", undefined, [Yoorkin$rabbit$45$tea$html$$h1$40$(Yoorkin$rabbit$45$tea$html$$h1$46$style$46$default$40$(), undefined, "text-2xl font-bold text-center select-none", [Yoorkin$rabbit$45$tea$html$$text$40$(moonbitlang$core$int$$Int$to_string(model.count))]), Yoorkin$rabbit$45$tea$html$$div$40$(Yoorkin$rabbit$45$tea$html$$div$46$style$46$default$40$(), undefined, "flex justify-center gap-8 m-8", undefined, [username$rabbit$45$tea$45$tailwind$main$$button("+", 0), username$rabbit$45$tea$45$tailwind$main$$button("-", 1)])]);
}
(() => {
  const model = { count: 0 };
  Yoorkin$rabbit$45$tea$$startup$41$(model, username$rabbit$45$tea$45$tailwind$main$$update, username$rabbit$45$tea$45$tailwind$main$$view, Yoorkin$rabbit$45$tea$$startup$46$mount$46$default$41$());
})();
