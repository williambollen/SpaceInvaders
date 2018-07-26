function Ship() {
  this.x = width/2;
  this.xdir = 0;

  this.show = function() {
    image(drawShip, this.x, height-75, 55, 55);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
    if (this.x > width - 55) {
      this.x = width - 55;
    } else if (this.x < 0) {
      this.x = 0;
    }
  }
}
