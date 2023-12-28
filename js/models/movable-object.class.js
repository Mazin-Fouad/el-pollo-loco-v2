class MovableObject {
  x = 120;
  y = 250;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currentImage = 0;

  loadImg(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImgs(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveRight() {
    console.log('moveRight');
  }

  moveLeft() {}
}
