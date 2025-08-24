import { gsap } from 'gsap';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function getTweenTarget({
  targetContainer,
  ref
}) {
  if (targetContainer.target) {
    if (targetContainer.target && typeof targetContainer.target === "object" && "current" in targetContainer.target) {
      return targetContainer.target.current;
    } else {
      return targetContainer.target;
    }
  } else if (ref) {
    return ref.current;
  } else {
    return null;
  }
}
function buildDeclarativeTween(_a) {
  var _b = _a, {
    op,
    id,
    target,
    duration,
    paused
  } = _b, timelineAndPosition = __objRest(_b, [
    "op",
    "id",
    "target",
    "duration",
    "paused"
  ]);
  var _a2;
  const data = {
    id,
    type: "animation",
    rootId: (_a2 = timelineAndPosition.timeline) == null ? void 0 : _a2.data.id,
    isScrollytellingTween: true
  };
  if ("to" in op) {
    if (timelineAndPosition.timeline) {
      timelineAndPosition.timeline.to(
        target,
        __spreadProps(__spreadValues({}, op.to), {
          id,
          duration,
          paused,
          data
        }),
        timelineAndPosition.position
      );
    } else {
      gsap.to(target, __spreadProps(__spreadValues({}, op.to), { id, duration, paused }));
    }
  } else if ("from" in op) {
    if (timelineAndPosition.timeline) {
      timelineAndPosition.timeline.from(
        target,
        __spreadProps(__spreadValues({}, op.from), { id, duration, paused, data }),
        timelineAndPosition.position
      );
    } else {
      gsap.from(target, __spreadProps(__spreadValues({}, op.from), { id, duration, paused }));
    }
  } else if ("fromTo" in op) {
    if (timelineAndPosition.timeline) {
      timelineAndPosition.timeline.fromTo(
        target,
        __spreadValues({}, op.fromTo[0]),
        __spreadProps(__spreadValues({}, op.fromTo[1]), { id, duration, paused, data }),
        timelineAndPosition.position
      );
    } else {
      gsap.fromTo(
        target,
        __spreadValues({}, op.fromTo[0]),
        __spreadProps(__spreadValues({}, op.fromTo[1]), { id, duration, paused })
      );
    }
  } else
    throw new Error("Invalid TweenOp");
  return () => {
    var _a3;
    (_a3 = gsap.getById(id)) == null ? void 0 : _a3.revert();
  };
}
var clsx = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
var isDev = process.env.NODE_ENV === "development";

// src/util/emmiter.ts
var Emitter = class {
  constructor() {
    this.events = {};
  }
  emit(event, ...args) {
    var _a;
    const callbacks = this.events[event] || [];
    for (let i = 0, length = callbacks.length; i < length; i++) {
      (_a = callbacks[i]) == null ? void 0 : _a.call(callbacks, ...args);
    }
  }
  on(event, cb) {
    var _a;
    ((_a = this.events[event]) == null ? void 0 : _a.push(cb)) || (this.events[event] = [cb]);
    return () => {
      this.off(event, cb);
    };
  }
  off(event, cb) {
    var _a, _b;
    this.events[event] = (_b = (_a = this.events[event]) == null ? void 0 : _a.filter((i) => cb !== i)) != null ? _b : [];
  }
  destroy() {
    this.events = {};
  }
};

// src/util/internal-event-emmiter.ts
var internalEventEmmiter = new Emitter();

export { __async, __objRest, __spreadProps, __spreadValues, buildDeclarativeTween, clsx, getTweenTarget, internalEventEmmiter, isDev };
