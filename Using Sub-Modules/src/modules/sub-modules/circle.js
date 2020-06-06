class Circle {
  constructor(x, y, r, c, stroke) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = 0;
    this.stroke = 2 * Math.PI;
  }

  draw = function () {
    var canvas = document.querySelector("CANVAS");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.c, this.stroke, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#FCAD85";
    ctx.stroke();
  };
}

export { Circle };
