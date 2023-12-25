class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;

  constructor(imagePath, x) {
    super();
    this.loadImg(imagePath);
    this.x = x;
    this.y = canvasHeight - this.height;
  }
}
