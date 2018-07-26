var ship;
var flowers = [];
var pinks = [];
var blews = [];
var grns = [];
var yellrs = [];
var drops = [];
var bg;
var drawShip;
var purp;
var pink;
var blew;
var grn;
var yellr;


function setup() {
  createCanvas(800, 600);
  ship = new Ship();
  for (var i = 0; i < 11; i++) {
    flowers[i] = new Flower(i*60+100,70);
    pinks[i] = new Pink(i*60+100,115);
    blews[i] = new Blew(i*60+100,160);
    grns[i] = new Grn(i*60+100,205);
    yellrs[i] = new Yellr(i*60+100,250);
  }
  bg = loadImage("images/bg.png");
  drawShip = loadImage("images/ship.png");
  purp = loadImage("images/purp_monster.png");
  pink = loadImage("images/pink_monster.png");
  blew = loadImage("images/pink_monster2.png");
  grn = loadImage("images/green_monster.png");
  yellr = loadImage("images/green_monster2.png")
}

function draw() {
  background(51);
  image(bg,width/2,height/2,800,600);
  ship.show();
  ship.move();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
        flowers[j].die();
        drops[i].evaporate();
      }
    }
    for (j = 0; j < pinks.length; j++) {
      if (drops[i].hits(pinks[j])) {
        pinks[j].die();
        drops[i].evaporate();
      }
    }
    
    for (j = 0; j < blews.length; j++) {
      if (drops[i].hits(blews[j])) {
        blews[j].die();
        drops[i].evaporate();
      }
    }
    
    for (j = 0; j < grns.length; j++) {
      if (drops[i].hits(grns[j])) {
        grns[j].die();
        drops[i].evaporate();
      }
    }
    
    for (j = 0; j < yellrs.length; j++) {
      if (drops[i].hits(yellrs[j])) {
        yellrs[j].die();
        drops[i].evaporate();
      }
    }
  }

  var edge1 = false;

  for (i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x > width-35/2 || flowers[i].x < 35/2) {
      edge1 = true;
    }
  }

  if (edge1) {
    for (i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }
  
  var edge2 = false;

  for (i = 0; i < pinks.length; i++) {
    pinks[i].show();
    pinks[i].move();
    if (pinks[i].x > width-35/2 || pinks[i].x < 35/2) {
      edge2 = true;
    }
  }

  if (edge2) {
    for (i = 0; i < pinks.length; i++) {
      pinks[i].shiftDown();
    }
  }
  
  var edge3 = false;

  for (i = 0; i < blews.length; i++) {
    blews[i].show();
    blews[i].move();
    if (blews[i].x > width-35/2 || blews[i].x < 35/2) {
      edge3 = true;
    }
  }

  if (edge3) {
    for (i = 0; i < blews.length; i++) {
      blews[i].shiftDown();
    }
  }
  
  var edge4 = false;

  for (i = 0; i < grns.length; i++) {
    grns[i].show();
    grns[i].move();
    if (grns[i].x > width-35/2 || grns[i].x < 35/2) {
      edge4 = true;
    }
  }

  if (edge4) {
    for (i = 0; i < grns.length; i++) {
      grns[i].shiftDown();
    }
  }
  
  var edge5 = false;

  for (i = 0; i < yellrs.length; i++) {
    yellrs[i].show();
    yellrs[i].move();
    if (yellrs[i].x > width-35/2 || yellrs[i].x < 35/2) {
      edge5 = true;
    }
  }

  if (edge5) {
    for (i = 0; i < yellrs.length; i++) {
      yellrs[i].shiftDown();
    }
  }

  for (i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
  
  for (i = flowers.length-1; i >= 0; i--) {
    if (flowers[i].toDelete) {
      flowers.splice(i, 1);
    }
  }
  
  for (i = pinks.length-1; i >= 0; i--) {
    if (pinks[i].toDelete) {
      pinks.splice(i, 1);
    }
  }
  
  for (i = blews.length-1; i >= 0; i--) {
    if (blews[i].toDelete) {
      blews.splice(i, 1);
    }
  }
  
  for (i = grns.length-1; i >= 0; i--) {
    if (grns[i].toDelete) {
      grns.splice(i, 1);
    }
  }
  
  for (i = yellrs.length-1; i >= 0; i--) {
    if (yellrs[i].toDelete) {
      yellrs.splice(i, 1);
    }
  }
  
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height-50);
    drops.push(drop);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
