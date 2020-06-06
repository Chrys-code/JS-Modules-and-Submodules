class Box {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw = function () {
    var canvas = document.querySelector("CANVAS");
    var ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, this.x, this.y);
    ctx.fillStyle = "#FCAD85";
  };
}

export { Box };
