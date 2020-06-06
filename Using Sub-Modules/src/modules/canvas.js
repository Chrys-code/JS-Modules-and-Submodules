function createCanvas() {
  var wrapper = document.querySelector(".wrapper");
  var canvas = document.createElement("CANVAS");
  wrapper.appendChild(canvas);
}

createCanvas();
export { Box } from "./sub-modules/box.js";
export { Triangle } from "./sub-modules/triangle.js";
export { Circle } from "./sub-modules/circle.js";
