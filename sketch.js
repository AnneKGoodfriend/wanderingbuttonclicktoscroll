var myContainer;
var divx = 0;
var divy = 0;
var x;
var buttonnumber = 0;
var buttoncounter = 1;
var offset = 0;
var changeOffset = 50;
var col;
var message = ["hello", "can", "you", "keep", "clicking", "the", "buttons", "?", "keep", "clicking", "the", "buttons", "!", "click", "me", "!", "if",
  "you", "can", "!"
];

function setup() {
  createCanvas(windowWidth, 220);;
  x = windowWidth/3;
  background(240);
  myContainer = createDiv('');
  // myContainer.style("background-color", "#AAA");
  firstclick();
}

function draw() {
  myContainer.position(divx, divy);
}

function firstclick() {

  col = color(255, noise(offset) * 255, 0)
  offset += changeOffset;

  var h = randomGaussian(150, 5);
  
  button = createButton(message[buttonnumber]);
  button.position(x, h);
  button.mousePressed(buttonclick);
  // button.style("width", "50px");
  button.style("background-color", col);
  button.parent(myContainer);
}


function buttonclick() {

  var h = randomGaussian(150, 5);
  buttonnumber++;

  if (buttonnumber >= message.length - 1) {
    buttonnumber = 0;
  }

  col = color(255, noise(offset) * 255, 0);
  offset += changeOffset;
  x += 90;
  h = h;

  button = createButton(message[buttonnumber]);
  button.position(x, h);
  button.mousePressed(buttonclick);
  // button.style("width", "50px");
  button.style("background-color", col);
  button.parent(myContainer);
  
  divx = divx - 80;
}