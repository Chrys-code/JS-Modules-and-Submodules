class Triangle {
  constructor(x1, y1, x2, y2, x3, y3) {
    this.moveTo = x1;
    this.moveTo1 = y1;

    this.lineTo = x2;
    this.lineTo1 = y2;

    this.lineTo2 = x3;
    this.lineTo3 = y3;
  }

  draw = function () {
    var canvas = document.querySelector("CANVAS");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(this.moveTo, this.moveTo1);
    ctx.lineTo(this.lineTo, this.lineTo1);
    ctx.lineTo(this.lineTo2, this.lineTo3);
    ctx.fill();
    ctx.fillStyle = "#FCAD85";
  };
}

export { Triangle };
