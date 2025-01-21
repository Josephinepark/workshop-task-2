let hearts = [];
let growthSpeed = 3; 

function setup() {
  createCanvas(400, 400);
  noStroke();

  setTimeout(() => {
    makeHeart();
    setInterval(makeHeart, 500); 
  }, 3000);
}

function draw() {
  background(0);
  
  for (let i = hearts.length - 1; i >= 0; i--) {
    let heart = hearts[i];

    heart.size += growthSpeed;

    fill(255, 100, 100);
    heartShape(heart.x, heart.y, heart.size);

  
    if (heart.size > 250) {
      hearts.splice(i, 1);
    }
  }
}

function makeHeart() {
  let newHeart = {
    x: random(width),
    y: random(height),
    size: 10,
    hue: random(360) 
  };
  hearts.push(newHeart);
}

function heartShape(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}