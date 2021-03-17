let width = 600;
let height = 600;
let data = [];
let w = 10;
let nums = 0;
// let start = 0;
let loop_through = false;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

function setup() {
  createCanvas(width, height);
  nums = floor(width / w);
  for (let i = 0; i < nums; i++) {
    data.push(floor(random(1) * height));
  }
  bs();
}

function draw() {
  draw_bar();
}

async function bs() {
  for (let i = 0; i < nums; i++) {
    for (let j = i + 1; j < nums; j++) {
      if (data[i] > data[j]) {
        await swap(i, j);
      }
    }
  }
}

async function swap(i, j) {
  await timer(100);
  let temp = data[j];
  data[j] = data[i];
  data[i] = temp;
}

function draw_bar() {
  background(51);
  for (let i = 0; i < nums; i++) {
    rect(i * w, height - data[i], w, data[i]);
  }
}
