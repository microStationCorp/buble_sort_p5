let width = 600;
let height = 600;
let data = [];
let w = 10;
let nums = 0;
let start = 0;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

function setup() {
  createCanvas(width, height);
  // frameRate(10);
  nums = floor(width / w);
  for (let i = 0; i < nums; i++) {
    data.push(floor(random(1) * height));
  }
}

function draw() {
  for_draw().then(() => loop());
  noLoop();
}

async function for_draw() {
  for (let j = start + 1; j < nums; j++) {
    if (data[start] > data[j]) {
      temp = data[j];
      data[j] = data[start];
      data[start] = temp;
      draw_bar(start, j);
      await timer(10);
    }
  }
  start++;
}

function draw_bar(s, j) {
  background(51);
  for (let i = 0; i < nums; i++) {
    if (i == s) {
      fill(255, 0, 0);
    } else if (i == j) {
      fill(0, 255, 0);
    } else {
      fill(255);
    }
    rect(i * w, height - data[i], w, data[i]);
  }
}
