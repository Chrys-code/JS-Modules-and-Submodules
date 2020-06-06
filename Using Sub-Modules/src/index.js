import { Triangle, Box, Circle } from "./modules/canvas.js";

const input = document.querySelectorAll("input");

input[2].addEventListener("click", () => {
  var height = input[0].value;
  var width = input[1].value;

  // Define box size (x,y) and color
  var box1 = new Box(height, width);
  // Draw quare into canvas
  box1.draw();
});

input[9].addEventListener("click", () => {
  var angleX = input[3].value;
  var angleY = input[4].value;

  var angle1X = input[5].value;
  var angle1Y = input[6].value;

  var angle2X = input[7].value;
  var angle2Y = input[8].value;

  // Triangle is defined
  var tri1 = new Triangle(angleX, angleY, angle1X, angle1Y, angle2X, angle2Y);
  // Draw triangle into canvas
  tri1.draw();
});

input[13].addEventListener("click", () => {
  var height = input[10].value;
  var width = input[11].value;
  var radius = input[12].value;

  // Define circle pos (x,y) and radius
  let circ1 = new Circle(height, width, radius);
  // Draw circle into canvas
  circ1.draw();
});
