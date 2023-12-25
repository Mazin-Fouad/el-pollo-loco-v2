class BackgroundObject extends MovableObject {
  width = 720;
  height = 400;

  constructor(imagePath, x) {
    console.log(canvasHeight);
    super();
    this.loadImg(imagePath);
    this.x = x;
    this.y = canvasHeight - this.height;
  }
}
