import {
  __toESM,
  require_react
} from "./chunk-5WQJO2FO.js";

// node_modules/react-spinners/esm/BarLoader.js
var React = __toESM(require_react());

// node_modules/react-spinners/esm/helpers/unitConverter.js
var cssUnit = {
  cm: true,
  mm: true,
  in: true,
  px: true,
  pt: true,
  pc: true,
  em: true,
  ex: true,
  ch: true,
  rem: true,
  vw: true,
  vh: true,
  vmin: true,
  vmax: true,
  "%": true
};
function parseLengthAndUnit(size) {
  if (typeof size === "number") {
    return {
      value: size,
      unit: "px"
    };
  }
  var value;
  var valueString = (size.match(/^[0-9.]*/) || "").toString();
  if (valueString.includes(".")) {
    value = parseFloat(valueString);
  } else {
    value = parseInt(valueString, 10);
  }
  var unit = (size.match(/[^0-9]*$/) || "").toString();
  if (cssUnit[unit]) {
    return {
      value,
      unit
    };
  }
  console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
  return {
    value,
    unit: "px"
  };
}
function cssValue(value) {
  var lengthWithunit = parseLengthAndUnit(value);
  return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}

// node_modules/react-spinners/esm/helpers/animation.js
var createAnimation = function(loaderName, frames, suffix) {
  var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
  if (typeof window == "undefined" || !window.document) {
    return animationName;
  }
  var styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  var styleSheet = styleEl.sheet;
  var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
  if (styleSheet) {
    styleSheet.insertRule(keyFrames, 0);
  }
  return animationName;
};

// node_modules/react-spinners/esm/helpers/colors.js
var BasicColors;
(function(BasicColors2) {
  BasicColors2["maroon"] = "#800000";
  BasicColors2["red"] = "#FF0000";
  BasicColors2["orange"] = "#FFA500";
  BasicColors2["yellow"] = "#FFFF00";
  BasicColors2["olive"] = "#808000";
  BasicColors2["green"] = "#008000";
  BasicColors2["purple"] = "#800080";
  BasicColors2["fuchsia"] = "#FF00FF";
  BasicColors2["lime"] = "#00FF00";
  BasicColors2["teal"] = "#008080";
  BasicColors2["aqua"] = "#00FFFF";
  BasicColors2["blue"] = "#0000FF";
  BasicColors2["navy"] = "#000080";
  BasicColors2["black"] = "#000000";
  BasicColors2["gray"] = "#808080";
  BasicColors2["silver"] = "#C0C0C0";
  BasicColors2["white"] = "#FFFFFF";
})(BasicColors || (BasicColors = {}));
var handleRgbColorString = function(color, opacity) {
  if (color.includes("/")) {
    return color.replace("rgb(", "rgba(");
  }
  var rgbValues = color.substring(color.startsWith("rgba(") ? 5 : 4, color.length - 1).trim();
  var splittedByCommas = rgbValues.split(",");
  if (splittedByCommas.length === 4) {
    return color.replace("rgb(", "rgba(");
  }
  if (splittedByCommas.length === 3) {
    return "rgba(".concat(rgbValues, ", ").concat(opacity, ")");
  }
  return "rgba(".concat(rgbValues, " / ").concat(opacity, ")");
};
var calculateRgba = function(color, opacity) {
  if (color.startsWith("rgb")) {
    return handleRgbColorString(color, opacity);
  }
  if (Object.keys(BasicColors).includes(color)) {
    color = BasicColors[color];
  }
  if (color[0] === "#") {
    color = color.slice(1);
  }
  if (color.length === 3) {
    var res_1 = "";
    color.split("").forEach(function(c) {
      res_1 += c;
      res_1 += c;
    });
    color = res_1;
  }
  var rgbValues = (color.match(/.{2}/g) || []).map(function(hex) {
    return parseInt(hex, 16);
  }).join(", ");
  return "rgba(".concat(rgbValues, ", ").concat(opacity, ")");
};

// node_modules/react-spinners/esm/BarLoader.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var long = createAnimation("BarLoader", "0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}", "long");
var short = createAnimation("BarLoader", "0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}", "short");
function BarLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.height, height = _f === void 0 ? 4 : _f, _g = _a.width, width = _g === void 0 ? 100 : _g, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "height", "width"]);
  var wrapper = __assign({ display: "inherit", position: "relative", width: cssValue(width), height: cssValue(height), overflow: "hidden", backgroundColor: calculateRgba(color, 0.2), backgroundClip: "padding-box" }, cssOverride);
  var style = function(i) {
    return {
      position: "absolute",
      height: cssValue(height),
      overflow: "hidden",
      backgroundColor: color,
      backgroundClip: "padding-box",
      display: "block",
      borderRadius: 2,
      willChange: "left, right",
      animationFillMode: "forwards",
      animation: "".concat(i === 1 ? long : short, " ").concat(2.1 / speedMultiplier, "s ").concat(i === 2 ? "".concat(1.15 / speedMultiplier, "s") : "", " ").concat(i === 1 ? "cubic-bezier(0.65, 0.815, 0.735, 0.395)" : "cubic-bezier(0.165, 0.84, 0.44, 1)", " infinite")
    };
  };
  if (!loading) {
    return null;
  }
  return React.createElement(
    "span",
    __assign({ style: wrapper }, additionalprops),
    React.createElement("span", { style: style(1) }),
    React.createElement("span", { style: style(2) })
  );
}
var BarLoader_default = BarLoader;

// node_modules/react-spinners/esm/BeatLoader.js
var React2 = __toESM(require_react());
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var beat = createAnimation("BeatLoader", "50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}", "beat");
function BeatLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest2(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
  var wrapper = __assign2({ display: "inherit" }, cssOverride);
  var style = function(i) {
    return {
      display: "inline-block",
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: "100%",
      animation: "".concat(beat, " ").concat(0.7 / speedMultiplier, "s ").concat(i % 2 ? "0s" : "".concat(0.35 / speedMultiplier, "s"), " infinite linear"),
      animationFillMode: "both"
    };
  };
  if (!loading) {
    return null;
  }
  return React2.createElement(
    "span",
    __assign2({ style: wrapper }, additionalprops),
    React2.createElement("span", { style: style(1) }),
    React2.createElement("span", { style: style(2) }),
    React2.createElement("span", { style: style(3) })
  );
}
var BeatLoader_default = BeatLoader;

// node_modules/react-spinners/esm/BounceLoader.js
var React3 = __toESM(require_react());
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var bounce = createAnimation("BounceLoader", "0% {transform: scale(0)} 50% {transform: scale(1.0)} 100% {transform: scale(0)}", "bounce");
function BounceLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 60 : _f, additionalprops = __rest3(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var style = function(i) {
    var animationTiming = i === 1 ? "".concat(1 / speedMultiplier, "s") : "0s";
    return {
      position: "absolute",
      height: cssValue(size),
      width: cssValue(size),
      backgroundColor: color,
      borderRadius: "100%",
      opacity: 0.6,
      top: 0,
      left: 0,
      animationFillMode: "both",
      animation: "".concat(bounce, " ").concat(2.1 / speedMultiplier, "s ").concat(animationTiming, " infinite ease-in-out")
    };
  };
  var wrapper = __assign3({ display: "inherit", position: "relative", width: cssValue(size), height: cssValue(size) }, cssOverride);
  if (!loading) {
    return null;
  }
  return React3.createElement(
    "span",
    __assign3({ style: wrapper }, additionalprops),
    React3.createElement("span", { style: style(1) }),
    React3.createElement("span", { style: style(2) })
  );
}
var BounceLoader_default = BounceLoader;

// node_modules/react-spinners/esm/CircleLoader.js
var React4 = __toESM(require_react());
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var __rest4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var circle = createAnimation("CircleLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(180deg)} 100% {transform: rotate(360deg)}", "circle");
function CircleLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 50 : _f, additionalprops = __rest4(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var wrapper = __assign4({ display: "inherit", position: "relative", width: cssValue(size), height: cssValue(size) }, cssOverride);
  var style = function(i) {
    var _a2 = parseLengthAndUnit(size), value = _a2.value, unit = _a2.unit;
    return {
      position: "absolute",
      height: "".concat(value * (1 - i / 10)).concat(unit),
      width: "".concat(value * (1 - i / 10)).concat(unit),
      borderTop: "1px solid ".concat(color),
      borderBottom: "none",
      borderLeft: "1px solid ".concat(color),
      borderRight: "none",
      borderRadius: "100%",
      transition: "2s",
      top: "".concat(i * 0.7 * 2.5, "%"),
      left: "".concat(i * 0.35 * 2.5, "%"),
      animation: "".concat(circle, " ").concat(1 / speedMultiplier, "s ").concat(i * 0.2 / speedMultiplier, "s infinite linear")
    };
  };
  if (!loading) {
    return null;
  }
  return React4.createElement(
    "span",
    __assign4({ style: wrapper }, additionalprops),
    React4.createElement("span", { style: style(0) }),
    React4.createElement("span", { style: style(1) }),
    React4.createElement("span", { style: style(2) }),
    React4.createElement("span", { style: style(3) }),
    React4.createElement("span", { style: style(4) })
  );
}
var CircleLoader_default = CircleLoader;

// node_modules/react-spinners/esm/ClimbingBoxLoader.js
var React5 = __toESM(require_react());
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var __rest5 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var climbingBox = createAnimation("ClimbingBoxLoader", "0% {transform:translate(0, -1em) rotate(-45deg)}\n  5% {transform:translate(0, -1em) rotate(-50deg)}\n  20% {transform:translate(1em, -2em) rotate(47deg)}\n  25% {transform:translate(1em, -2em) rotate(45deg)}\n  30% {transform:translate(1em, -2em) rotate(40deg)}\n  45% {transform:translate(2em, -3em) rotate(137deg)}\n  50% {transform:translate(2em, -3em) rotate(135deg)}\n  55% {transform:translate(2em, -3em) rotate(130deg)}\n  70% {transform:translate(3em, -4em) rotate(217deg)}\n  75% {transform:translate(3em, -4em) rotate(220deg)}\n  100% {transform:translate(0, -1em) rotate(-225deg)}", "climbingBox");
function ClimbingBoxLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, additionalprops = __rest5(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var container = __assign5({ display: "inherit", position: "relative", width: "7.1em", height: "7.1em" }, cssOverride);
  var wrapper = {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-2.7em",
    marginLeft: "-2.7em",
    width: "5.4em",
    height: "5.4em",
    fontSize: cssValue(size)
  };
  var style = {
    position: "absolute",
    left: "0",
    bottom: "-0.1em",
    height: "1em",
    width: "1em",
    backgroundColor: "transparent",
    borderRadius: "15%",
    border: "0.25em solid ".concat(color),
    transform: "translate(0, -1em) rotate(-45deg)",
    animationFillMode: "both",
    animation: "".concat(climbingBox, " ").concat(2.5 / speedMultiplier, "s infinite cubic-bezier(0.79, 0, 0.47, 0.97)")
  };
  var hill = {
    position: "absolute",
    width: "7.1em",
    height: "7.1em",
    top: "1.7em",
    left: "1.7em",
    borderLeft: "0.25em solid ".concat(color),
    transform: "rotate(45deg)"
  };
  if (!loading) {
    return null;
  }
  return React5.createElement(
    "span",
    __assign5({ style: container }, additionalprops),
    React5.createElement(
      "span",
      { style: wrapper },
      React5.createElement("span", { style }),
      React5.createElement("span", { style: hill })
    )
  );
}
var ClimbingBoxLoader_default = ClimbingBoxLoader;

// node_modules/react-spinners/esm/ClipLoader.js
var React6 = __toESM(require_react());
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var __rest6 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var clip = createAnimation("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
function ClipLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 35 : _f, additionalprops = __rest6(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var style = __assign6({ background: "transparent !important", width: cssValue(size), height: cssValue(size), borderRadius: "100%", border: "2px solid", borderTopColor: color, borderBottomColor: "transparent", borderLeftColor: color, borderRightColor: color, display: "inline-block", animation: "".concat(clip, " ").concat(0.75 / speedMultiplier, "s 0s infinite linear"), animationFillMode: "both" }, cssOverride);
  if (!loading) {
    return null;
  }
  return React6.createElement("span", __assign6({ style }, additionalprops));
}
var ClipLoader_default = ClipLoader;

// node_modules/react-spinners/esm/ClockLoader.js
var React7 = __toESM(require_react());
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var __rest7 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var rotate = createAnimation("ClockLoader", "100% { transform: rotate(360deg) }", "rotate");
function ClockLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 50 : _f, additionalprops = __rest7(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var _g = parseLengthAndUnit(size), value = _g.value, unit = _g.unit;
  var wrapper = __assign7({ display: "inherit", position: "relative", width: "".concat(value).concat(unit), height: "".concat(value).concat(unit), backgroundColor: "transparent", boxShadow: "inset 0px 0px 0px 2px ".concat(color), borderRadius: "50%" }, cssOverride);
  var minute = {
    position: "absolute",
    backgroundColor: color,
    width: "".concat(value / 3, "px"),
    height: "2px",
    top: "".concat(value / 2 - 1, "px"),
    left: "".concat(value / 2 - 1, "px"),
    transformOrigin: "1px 1px",
    animation: "".concat(rotate, " ").concat(8 / speedMultiplier, "s linear infinite")
  };
  var hour = {
    position: "absolute",
    backgroundColor: color,
    width: "".concat(value / 2.4, "px"),
    height: "2px",
    top: "".concat(value / 2 - 1, "px"),
    left: "".concat(value / 2 - 1, "px"),
    transformOrigin: "1px 1px",
    animation: "".concat(rotate, " ").concat(2 / speedMultiplier, "s linear infinite")
  };
  if (!loading) {
    return null;
  }
  return React7.createElement(
    "span",
    __assign7({ style: wrapper }, additionalprops),
    React7.createElement("span", { style: hour }),
    React7.createElement("span", { style: minute })
  );
}
var ClockLoader_default = ClockLoader;

// node_modules/react-spinners/esm/DotLoader.js
var React8 = __toESM(require_react());
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var __rest8 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var rotate2 = createAnimation("DotLoader", "100% {transform: rotate(360deg)}", "rotate");
var bounce2 = createAnimation("DotLoader", "0%, 100% {transform: scale(0)} 50% {transform: scale(1.0)}", "bounce");
function DotLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 60 : _f, additionalprops = __rest8(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var wrapper = __assign8({ display: "inherit", position: "relative", width: cssValue(size), height: cssValue(size), animationFillMode: "forwards", animation: "".concat(rotate2, " ").concat(2 / speedMultiplier, "s 0s infinite linear") }, cssOverride);
  var style = function(i) {
    var _a2 = parseLengthAndUnit(size), value = _a2.value, unit = _a2.unit;
    return {
      position: "absolute",
      top: i % 2 ? "0" : "auto",
      bottom: i % 2 ? "auto" : "0",
      height: "".concat(value / 2).concat(unit),
      width: "".concat(value / 2).concat(unit),
      backgroundColor: color,
      borderRadius: "100%",
      animationFillMode: "forwards",
      animation: "".concat(bounce2, " ").concat(2 / speedMultiplier, "s ").concat(i === 2 ? "1s" : "0s", " infinite linear")
    };
  };
  if (!loading) {
    return null;
  }
  return React8.createElement(
    "span",
    __assign8({ style: wrapper }, additionalprops),
    React8.createElement("span", { style: style(1) }),
    React8.createElement("span", { style: style(2) })
  );
}
var DotLoader_default = DotLoader;

// node_modules/react-spinners/esm/FadeLoader.js
var React9 = __toESM(require_react());
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var __rest9 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var fade = createAnimation("FadeLoader", "50% {opacity: 0.3} 100% {opacity: 1}", "fade");
function FadeLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.height, height = _f === void 0 ? 15 : _f, _g = _a.width, width = _g === void 0 ? 5 : _g, _h = _a.radius, radius = _h === void 0 ? 2 : _h, _j = _a.margin, margin = _j === void 0 ? 2 : _j, additionalprops = __rest9(_a, ["loading", "color", "speedMultiplier", "cssOverride", "height", "width", "radius", "margin"]);
  var value = parseLengthAndUnit(margin).value;
  var radiusValue = value + 18;
  var quarter = radiusValue / 2 + radiusValue / 5.5;
  var wrapper = __assign9({ display: "inherit", position: "relative", fontSize: "0", top: radiusValue, left: radiusValue, width: "".concat(radiusValue * 3, "px"), height: "".concat(radiusValue * 3, "px") }, cssOverride);
  var style = function(i) {
    return {
      position: "absolute",
      width: cssValue(width),
      height: cssValue(height),
      margin: cssValue(margin),
      backgroundColor: color,
      borderRadius: cssValue(radius),
      transition: "2s",
      animationFillMode: "both",
      animation: "".concat(fade, " ").concat(1.2 / speedMultiplier, "s ").concat(i * 0.12, "s infinite ease-in-out")
    };
  };
  var a = __assign9(__assign9({}, style(1)), { top: "".concat(radiusValue, "px"), left: "0" });
  var b = __assign9(__assign9({}, style(2)), { top: "".concat(quarter, "px"), left: "".concat(quarter, "px"), transform: "rotate(-45deg)" });
  var c = __assign9(__assign9({}, style(3)), { top: "0", left: "".concat(radiusValue, "px"), transform: "rotate(90deg)" });
  var d = __assign9(__assign9({}, style(4)), { top: "".concat(-1 * quarter, "px"), left: "".concat(quarter, "px"), transform: "rotate(45deg)" });
  var e = __assign9(__assign9({}, style(5)), { top: "".concat(-1 * radiusValue, "px"), left: "0" });
  var f = __assign9(__assign9({}, style(6)), { top: "".concat(-1 * quarter, "px"), left: "".concat(-1 * quarter, "px"), transform: "rotate(-45deg)" });
  var g = __assign9(__assign9({}, style(7)), { top: "0", left: "".concat(-1 * radiusValue, "px"), transform: "rotate(90deg)" });
  var h = __assign9(__assign9({}, style(8)), { top: "".concat(quarter, "px"), left: "".concat(-1 * quarter, "px"), transform: "rotate(45deg)" });
  if (!loading) {
    return null;
  }
  return React9.createElement(
    "span",
    __assign9({ style: wrapper }, additionalprops),
    React9.createElement("span", { style: a }),
    React9.createElement("span", { style: b }),
    React9.createElement("span", { style: c }),
    React9.createElement("span", { style: d }),
    React9.createElement("span", { style: e }),
    React9.createElement("span", { style: f }),
    React9.createElement("span", { style: g }),
    React9.createElement("span", { style: h })
  );
}
var FadeLoader_default = FadeLoader;

// node_modules/react-spinners/esm/GridLoader.js
var React10 = __toESM(require_react());
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var __rest10 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var grid = createAnimation("GridLoader", "0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}", "grid");
var random = function(top) {
  return Math.random() * top;
};
function GridLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest10(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
  var sizeWithUnit = parseLengthAndUnit(size);
  var marginWithUnit = parseLengthAndUnit(margin);
  var width = parseFloat(sizeWithUnit.value.toString()) * 3 + parseFloat(marginWithUnit.value.toString()) * 6;
  var wrapper = __assign10({ width: "".concat(width).concat(sizeWithUnit.unit), fontSize: 0, display: "inline-block" }, cssOverride);
  var style = function(rand) {
    return {
      display: "inline-block",
      backgroundColor: color,
      width: "".concat(cssValue(size)),
      height: "".concat(cssValue(size)),
      margin: cssValue(margin),
      borderRadius: "100%",
      animationFillMode: "both",
      animation: "".concat(grid, " ").concat((rand / 100 + 0.6) / speedMultiplier, "s ").concat(rand / 100 - 0.2, "s infinite ease")
    };
  };
  if (!loading) {
    return null;
  }
  return React10.createElement(
    "span",
    __assign10({ style: wrapper }, additionalprops, { ref: function(node) {
      if (node) {
        node.style.setProperty("width", "".concat(width).concat(sizeWithUnit.unit), "important");
      }
    } }),
    React10.createElement("span", { style: style(random(100)) }),
    React10.createElement("span", { style: style(random(100)) }),
    React10.createElement("span", { style: style(random(100)) }),
    React10.createElement("span", { style: style(random(100)) }),
    React10.createElement("span", { style: style(random(100)) }),
    React10.createElement("span", { style: style(random(100)) }),
    React10.createElement("span", { style: style(random(100)) }),
    React10.createElement("span", { style: style(random(100)) }),
    React10.createElement("span", { style: style(random(100)) })
  );
}
var GridLoader_default = GridLoader;

// node_modules/react-spinners/esm/HashLoader.js
var React11 = __toESM(require_react());
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var __rest11 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function HashLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 50 : _f, additionalprops = __rest11(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var _g = parseLengthAndUnit(size), value = _g.value, unit = _g.unit;
  var wrapper = __assign11({ display: "inherit", position: "relative", width: cssValue(size), height: cssValue(size), transform: "rotate(165deg)" }, cssOverride);
  var thickness = value / 5;
  var lat = (value - thickness) / 2;
  var offset = lat - thickness;
  var colorValue = calculateRgba(color, 0.75);
  var before = createAnimation("HashLoader", "0% {width: ".concat(thickness, "px; box-shadow: ").concat(lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(-lat, "px ").concat(offset, "px ").concat(colorValue, "}\n    35% {width: ").concat(cssValue(size), "; box-shadow: 0 ").concat(-offset, "px ").concat(colorValue, ", 0 ").concat(offset, "px ").concat(colorValue, "}\n    70% {width: ").concat(thickness, "px; box-shadow: ").concat(-lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(lat, "px ").concat(offset, "px ").concat(colorValue, "}\n    100% {box-shadow: ").concat(lat, "px ").concat(-offset, "px ").concat(colorValue, ", ").concat(-lat, "px ").concat(offset, "px ").concat(colorValue, "}"), "before");
  var after = createAnimation("HashLoader", "0% {height: ".concat(thickness, "px; box-shadow: ").concat(offset, "px ").concat(lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(-lat, "px ").concat(color, "}\n    35% {height: ").concat(cssValue(size), "; box-shadow: ").concat(offset, "px 0 ").concat(color, ", ").concat(-offset, "px 0 ").concat(color, "}\n    70% {height: ").concat(thickness, "px; box-shadow: ").concat(offset, "px ").concat(-lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(lat, "px ").concat(color, "}\n    100% {box-shadow: ").concat(offset, "px ").concat(lat, "px ").concat(color, ", ").concat(-offset, "px ").concat(-lat, "px ").concat(color, "}"), "after");
  var style = function(i) {
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      display: "block",
      width: "".concat(value / 5).concat(unit),
      height: "".concat(value / 5).concat(unit),
      borderRadius: "".concat(value / 10).concat(unit),
      transform: "translate(-50%, -50%)",
      animationFillMode: "none",
      animation: "".concat(i === 1 ? before : after, " ").concat(2 / speedMultiplier, "s infinite")
    };
  };
  if (!loading) {
    return null;
  }
  return React11.createElement(
    "span",
    __assign11({ style: wrapper }, additionalprops),
    React11.createElement("span", { style: style(1) }),
    React11.createElement("span", { style: style(2) })
  );
}
var HashLoader_default = HashLoader;

// node_modules/react-spinners/esm/MoonLoader.js
var React12 = __toESM(require_react());
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var __rest12 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var moon = createAnimation("MoonLoader", "100% {transform: rotate(360deg)}", "moon");
function MoonLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 60 : _f, additionalprops = __rest12(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var _g = parseLengthAndUnit(size), value = _g.value, unit = _g.unit;
  var moonSize = Math.round(value / 7);
  var wrapper = __assign12({ display: "inherit", position: "relative", width: "".concat("".concat(value + moonSize * 2).concat(unit)), height: "".concat("".concat(value + moonSize * 2).concat(unit)), animation: "".concat(moon, " ").concat(0.6 / speedMultiplier, "s 0s infinite linear"), animationFillMode: "forwards" }, cssOverride);
  var ballStyle = function(size2) {
    return {
      width: cssValue(size2),
      height: cssValue(size2),
      borderRadius: "100%"
    };
  };
  var ball = __assign12(__assign12({}, ballStyle(moonSize)), { backgroundColor: "".concat(color), opacity: "0.8", position: "absolute", top: "".concat("".concat(value / 2 - moonSize / 2).concat(unit)), animation: "".concat(moon, " ").concat(0.6 / speedMultiplier, "s 0s infinite linear"), animationFillMode: "forwards" });
  var circle2 = __assign12(__assign12({}, ballStyle(value)), { border: "".concat(moonSize, "px solid ").concat(color), opacity: "0.1", boxSizing: "content-box", position: "absolute" });
  if (!loading) {
    return null;
  }
  return React12.createElement(
    "span",
    __assign12({ style: wrapper }, additionalprops),
    React12.createElement("span", { style: ball }),
    React12.createElement("span", { style: circle2 })
  );
}
var MoonLoader_default = MoonLoader;

// node_modules/react-spinners/esm/PacmanLoader.js
var React13 = __toESM(require_react());
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var __rest13 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var pacman = [
  createAnimation("PacmanLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(-44deg)}", "pacman-1"),
  createAnimation("PacmanLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(44deg)}", "pacman-2")
];
function PacmanLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 25 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest13(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
  var _h = parseLengthAndUnit(size), value = _h.value, unit = _h.unit;
  var wrapper = __assign13({ display: "inherit", position: "relative", fontSize: 0, height: "".concat(value * 2).concat(unit), width: "".concat(value * 2).concat(unit) }, cssOverride);
  var ball = createAnimation("PacmanLoader", "75% {opacity: 0.7}\n    100% {transform: translate(".concat("".concat(-4 * value).concat(unit), ", ").concat("".concat(-value / 4).concat(unit), ")}"), "ball");
  var ballStyle = function(i) {
    return {
      width: "".concat(value / 3).concat(unit),
      height: "".concat(value / 3).concat(unit),
      backgroundColor: color,
      margin: cssValue(margin),
      borderRadius: "100%",
      transform: "translate(0, ".concat("".concat(-value / 4).concat(unit), ")"),
      position: "absolute",
      top: "".concat(value).concat(unit),
      left: "".concat(value * 4).concat(unit),
      animation: "".concat(ball, " ").concat(1 / speedMultiplier, "s ").concat(i * 0.25, "s infinite linear"),
      animationFillMode: "both"
    };
  };
  var s1 = "".concat(cssValue(size), " solid transparent");
  var s2 = "".concat(cssValue(size), " solid ").concat(color);
  var pacmanStyle = function(i) {
    return {
      width: 0,
      height: 0,
      borderRight: s1,
      borderTop: i === 0 ? s1 : s2,
      borderLeft: s2,
      borderBottom: i === 0 ? s2 : s1,
      borderRadius: cssValue(size),
      position: "absolute",
      animation: "".concat(pacman[i], " ").concat(0.8 / speedMultiplier, "s infinite ease-in-out"),
      animationFillMode: "both"
    };
  };
  var pac = pacmanStyle(0);
  var man = pacmanStyle(1);
  if (!loading) {
    return null;
  }
  return React13.createElement(
    "span",
    __assign13({ style: wrapper }, additionalprops),
    React13.createElement("span", { style: pac }),
    React13.createElement("span", { style: man }),
    React13.createElement("span", { style: ballStyle(2) }),
    React13.createElement("span", { style: ballStyle(3) }),
    React13.createElement("span", { style: ballStyle(4) }),
    React13.createElement("span", { style: ballStyle(5) })
  );
}
var PacmanLoader_default = PacmanLoader;

// node_modules/react-spinners/esm/PropagateLoader.js
var React14 = __toESM(require_react());
var __assign14 = function() {
  __assign14 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign14.apply(this, arguments);
};
var __rest14 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var distance = [1, 3, 5];
var propagate = [
  createAnimation("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(-").concat(distance[2], "rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-0"),
  createAnimation("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(-").concat(distance[1], "rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-1"),
  createAnimation("PropagateLoader", "25% {transform: translateX(-".concat(distance[0], "rem) scale(0.75)}\n    75% {transform: translateX(-").concat(distance[0], "rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-2"),
  createAnimation("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    75% {transform: translateX(").concat(distance[0], "rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-3"),
  createAnimation("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-4"),
  createAnimation("PropagateLoader", "25% {transform: translateX(".concat(distance[0], "rem) scale(0.75)}\n    50% {transform: translateX(").concat(distance[1], "rem) scale(0.6)}\n    75% {transform: translateX(").concat(distance[2], "rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"), "propogate-5")
];
function PropagateLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, additionalprops = __rest14(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var _g = parseLengthAndUnit(size), value = _g.value, unit = _g.unit;
  var wrapper = __assign14({ display: "inherit", position: "relative" }, cssOverride);
  var style = function(i) {
    return {
      position: "absolute",
      fontSize: "".concat(value / 3).concat(unit),
      width: "".concat(value).concat(unit),
      height: "".concat(value).concat(unit),
      background: color,
      borderRadius: "50%",
      animation: "".concat(propagate[i], " ").concat(1.5 / speedMultiplier, "s infinite"),
      animationFillMode: "forwards"
    };
  };
  if (!loading) {
    return null;
  }
  return React14.createElement(
    "span",
    __assign14({ style: wrapper }, additionalprops),
    React14.createElement("span", { style: style(0) }),
    React14.createElement("span", { style: style(1) }),
    React14.createElement("span", { style: style(2) }),
    React14.createElement("span", { style: style(3) }),
    React14.createElement("span", { style: style(4) }),
    React14.createElement("span", { style: style(5) })
  );
}
var PropagateLoader_default = PropagateLoader;

// node_modules/react-spinners/esm/PulseLoader.js
var React15 = __toESM(require_react());
var __assign15 = function() {
  __assign15 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign15.apply(this, arguments);
};
var __rest15 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var pulse = createAnimation("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function PulseLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest15(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
  var wrapper = __assign15({ display: "inherit" }, cssOverride);
  var style = function(i) {
    return {
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(pulse, " ").concat(0.75 / speedMultiplier, "s ").concat(i * 0.12 / speedMultiplier, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  if (!loading) {
    return null;
  }
  return React15.createElement(
    "span",
    __assign15({ style: wrapper }, additionalprops),
    React15.createElement("span", { style: style(1) }),
    React15.createElement("span", { style: style(2) }),
    React15.createElement("span", { style: style(3) })
  );
}
var PulseLoader_default = PulseLoader;

// node_modules/react-spinners/esm/PuffLoader.js
var React16 = __toESM(require_react());
var __assign16 = function() {
  __assign16 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign16.apply(this, arguments);
};
var __rest16 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var puff = [
  createAnimation("PuffLoader", "0% {transform: scale(0)} 100% {transform: scale(1.0)}", "puff-1"),
  createAnimation("PuffLoader", "0% {opacity: 1} 100% {opacity: 0}", "puff-2")
];
function PuffLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 60 : _f, additionalprops = __rest16(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var wrapper = __assign16({ display: "inherit", position: "relative", width: cssValue(size), height: cssValue(size) }, cssOverride);
  var style = function(i) {
    return {
      position: "absolute",
      height: cssValue(size),
      width: cssValue(size),
      border: "thick solid ".concat(color),
      borderRadius: "50%",
      opacity: "1",
      top: "0",
      left: "0",
      animationFillMode: "both",
      animation: "".concat(puff[0], ", ").concat(puff[1]),
      animationDuration: "".concat(2 / speedMultiplier, "s"),
      animationIterationCount: "infinite",
      animationTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1)",
      animationDelay: i === 1 ? "-1s" : "0s"
    };
  };
  if (!loading) {
    return null;
  }
  return React16.createElement(
    "span",
    __assign16({ style: wrapper }, additionalprops),
    React16.createElement("span", { style: style(1) }),
    React16.createElement("span", { style: style(2) })
  );
}
var PuffLoader_default = PuffLoader;

// node_modules/react-spinners/esm/RingLoader.js
var React17 = __toESM(require_react());
var __assign17 = function() {
  __assign17 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign17.apply(this, arguments);
};
var __rest17 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var right = createAnimation("RingLoader", "0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}", "right");
var left = createAnimation("RingLoader", "0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}", "left");
function RingLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 60 : _f, additionalprops = __rest17(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var _g = parseLengthAndUnit(size), value = _g.value, unit = _g.unit;
  var wrapper = __assign17({ display: "inherit", width: cssValue(size), height: cssValue(size), position: "relative" }, cssOverride);
  var style = function(i) {
    return {
      position: "absolute",
      top: "0",
      left: "0",
      width: "".concat(value).concat(unit),
      height: "".concat(value).concat(unit),
      border: "".concat(value / 10).concat(unit, " solid ").concat(color),
      opacity: "0.4",
      borderRadius: "100%",
      animationFillMode: "forwards",
      perspective: "800px",
      animation: "".concat(i === 1 ? right : left, " ").concat(2 / speedMultiplier, "s 0s infinite linear")
    };
  };
  if (!loading) {
    return null;
  }
  return React17.createElement(
    "span",
    __assign17({ style: wrapper }, additionalprops),
    React17.createElement("span", { style: style(1) }),
    React17.createElement("span", { style: style(2) })
  );
}
var RingLoader_default = RingLoader;

// node_modules/react-spinners/esm/RiseLoader.js
var React18 = __toESM(require_react());
var __assign18 = function() {
  __assign18 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign18.apply(this, arguments);
};
var __rest18 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function RiseLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest18(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
  var wrapper = __assign18({ display: "inherit" }, cssOverride);
  var even = createAnimation("RiseLoader", "0% {transform: scale(1.1)}\n    25% {transform: translateY(-".concat(size, "px)}\n    50% {transform: scale(0.4)}\n    75% {transform: translateY(").concat(size, "px)}\n    100% {transform: translateY(0) scale(1.0)}"), "even");
  var odd = createAnimation("RiseLoader", "0% {transform: scale(0.4)}\n    25% {transform: translateY(".concat(size, "px)}\n    50% {transform: scale(1.1)}\n    75% {transform: translateY(").concat(-size, "px)}\n    100% {transform: translateY(0) scale(0.75)}"), "odd");
  var style = function(i) {
    return {
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(i % 2 === 0 ? even : odd, " ").concat(1 / speedMultiplier, "s 0s infinite cubic-bezier(0.15, 0.46, 0.9, 0.6)"),
      animationFillMode: "both"
    };
  };
  if (!loading) {
    return null;
  }
  return React18.createElement(
    "span",
    __assign18({ style: wrapper }, additionalprops),
    React18.createElement("span", { style: style(1) }),
    React18.createElement("span", { style: style(2) }),
    React18.createElement("span", { style: style(3) }),
    React18.createElement("span", { style: style(4) }),
    React18.createElement("span", { style: style(5) })
  );
}
var RiseLoader_default = RiseLoader;

// node_modules/react-spinners/esm/RotateLoader.js
var React19 = __toESM(require_react());
var __assign19 = function() {
  __assign19 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign19.apply(this, arguments);
};
var __rest19 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var rotate3 = createAnimation("RotateLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(180deg)} 100% {transform: rotate(360deg)}", "rotate");
function RotateLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest19(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
  var _h = parseLengthAndUnit(margin), value = _h.value, unit = _h.unit;
  var ball = {
    backgroundColor: color,
    width: cssValue(size),
    height: cssValue(size),
    borderRadius: "100%"
  };
  var wrapper = __assign19(__assign19(__assign19({}, ball), { display: "inline-block", position: "relative", animationFillMode: "both", animation: "".concat(rotate3, " ").concat(1 / speedMultiplier, "s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86)") }), cssOverride);
  var style = function(i) {
    var left2 = (i % 2 ? -1 : 1) * (26 + value);
    return {
      opacity: "0.8",
      position: "absolute",
      top: "0",
      left: "".concat(left2).concat(unit)
    };
  };
  if (!loading) {
    return null;
  }
  return React19.createElement(
    "span",
    __assign19({ style: wrapper }, additionalprops),
    React19.createElement("span", { style: __assign19(__assign19({}, ball), style(1)) }),
    React19.createElement("span", { style: __assign19(__assign19({}, ball), style(2)) })
  );
}
var RotateLoader_default = RotateLoader;

// node_modules/react-spinners/esm/ScaleLoader.js
var React20 = __toESM(require_react());
var __assign20 = function() {
  __assign20 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign20.apply(this, arguments);
};
var __rest20 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var scale = createAnimation("ScaleLoader", "0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}", "scale");
function ScaleLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.height, height = _f === void 0 ? 35 : _f, _g = _a.width, width = _g === void 0 ? 4 : _g, _h = _a.radius, radius = _h === void 0 ? 2 : _h, _j = _a.margin, margin = _j === void 0 ? 2 : _j, _k = _a.barCount, barCount = _k === void 0 ? 5 : _k, additionalprops = __rest20(_a, ["loading", "color", "speedMultiplier", "cssOverride", "height", "width", "radius", "margin", "barCount"]);
  var wrapper = __assign20({ display: "inherit" }, cssOverride);
  var style = function(i) {
    return {
      backgroundColor: color,
      width: cssValue(width),
      height: cssValue(height),
      margin: cssValue(margin),
      borderRadius: cssValue(radius),
      display: "inline-block",
      animation: "".concat(scale, " ").concat(1 / speedMultiplier, "s ").concat(i * 0.1, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  if (!loading) {
    return null;
  }
  return React20.createElement("span", __assign20({ style: wrapper }, additionalprops), __spreadArray([], Array(barCount), true).map(function(_, i) {
    return React20.createElement("span", { key: i, style: style(i + 1) });
  }));
}
var ScaleLoader_default = ScaleLoader;

// node_modules/react-spinners/esm/SkewLoader.js
var React21 = __toESM(require_react());
var __assign21 = function() {
  __assign21 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign21.apply(this, arguments);
};
var __rest21 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var skew = createAnimation("SkewLoader", "25% {transform: perspective(100px) rotateX(180deg) rotateY(0)} 50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)} 75% {transform: perspective(100px) rotateX(0) rotateY(180deg)} 100% {transform: perspective(100px) rotateX(0) rotateY(0)}", "skew");
function SkewLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 20 : _f, additionalprops = __rest21(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var style = __assign21({ width: "0", height: "0", borderLeft: "".concat(cssValue(size), " solid transparent"), borderRight: "".concat(cssValue(size), " solid transparent"), borderBottom: "".concat(cssValue(size), " solid ").concat(color), display: "inline-block", animation: "".concat(skew, " ").concat(3 / speedMultiplier, "s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)"), animationFillMode: "both" }, cssOverride);
  if (!loading) {
    return null;
  }
  return React21.createElement("span", __assign21({ style }, additionalprops));
}
var SkewLoader_default = SkewLoader;

// node_modules/react-spinners/esm/SquareLoader.js
var React22 = __toESM(require_react());
var __assign22 = function() {
  __assign22 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign22.apply(this, arguments);
};
var __rest22 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var square = createAnimation("SquareLoader", "25% {transform: rotateX(180deg) rotateY(0)}\n  50% {transform: rotateX(180deg) rotateY(180deg)} \n  75% {transform: rotateX(0) rotateY(180deg)} \n  100% {transform: rotateX(0) rotateY(0)}", "square");
function SquareLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 50 : _f, additionalprops = __rest22(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size"]);
  var style = __assign22({ backgroundColor: color, width: cssValue(size), height: cssValue(size), display: "inline-block", animation: "".concat(square, " ").concat(3 / speedMultiplier, "s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9)"), animationFillMode: "both" }, cssOverride);
  if (!loading) {
    return null;
  }
  return React22.createElement("span", __assign22({ style }, additionalprops));
}
var SquareLoader_default = SquareLoader;

// node_modules/react-spinners/esm/SyncLoader.js
var React23 = __toESM(require_react());
var __assign23 = function() {
  __assign23 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign23.apply(this, arguments);
};
var __rest23 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var sync = createAnimation("SyncLoader", "33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}", "sync");
function SyncLoader(_a) {
  var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest23(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
  var wrapper = __assign23({ display: "inherit" }, cssOverride);
  var style = function(i) {
    return {
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(sync, " ").concat(0.6 / speedMultiplier, "s ").concat(i * 0.07, "s infinite ease-in-out"),
      animationFillMode: "both"
    };
  };
  if (!loading) {
    return null;
  }
  return React23.createElement(
    "span",
    __assign23({ style: wrapper }, additionalprops),
    React23.createElement("span", { style: style(1) }),
    React23.createElement("span", { style: style(2) }),
    React23.createElement("span", { style: style(3) })
  );
}
var SyncLoader_default = SyncLoader;
export {
  BarLoader_default as BarLoader,
  BeatLoader_default as BeatLoader,
  BounceLoader_default as BounceLoader,
  CircleLoader_default as CircleLoader,
  ClimbingBoxLoader_default as ClimbingBoxLoader,
  ClipLoader_default as ClipLoader,
  ClockLoader_default as ClockLoader,
  DotLoader_default as DotLoader,
  FadeLoader_default as FadeLoader,
  GridLoader_default as GridLoader,
  HashLoader_default as HashLoader,
  MoonLoader_default as MoonLoader,
  PacmanLoader_default as PacmanLoader,
  PropagateLoader_default as PropagateLoader,
  PuffLoader_default as PuffLoader,
  PulseLoader_default as PulseLoader,
  RingLoader_default as RingLoader,
  RiseLoader_default as RiseLoader,
  RotateLoader_default as RotateLoader,
  ScaleLoader_default as ScaleLoader,
  SkewLoader_default as SkewLoader,
  SquareLoader_default as SquareLoader,
  SyncLoader_default as SyncLoader
};
//# sourceMappingURL=react-spinners.js.map
