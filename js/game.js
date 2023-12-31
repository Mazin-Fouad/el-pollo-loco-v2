let canvas;
let world;
let canvasWidth = 720;
let canvasHeight = 480;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);

  console.log('My character:', world.character);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    keyboard.LEFT = true;
  }

  if (event.key === 'ArrowRight') {
    keyboard.RIGHT = true;
  }

  if (event.key === 'ArrowUp') {
    keyboard.UP = true;
  }

  if (event.key === 'ArrowDown') {
    keyboard.DOWN = true;
  }

  if (event.key === ' ') {
    keyboard.SPACE = true;
  }

  console.log('Keydown', keyboard);
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft') {
    keyboard.LEFT = false;
  }

  if (event.key === 'ArrowRight') {
    keyboard.RIGHT = false;
  }

  if (event.key === 'ArrowUp') {
    keyboard.UP = false;
  }

  if (event.key === 'ArrowDown') {
    keyboard.DOWN = false;
  }

  if (event.key === ' ') {
    keyboard.SPACE = false;
  }

  console.log('Keyup', keyboard);
});
