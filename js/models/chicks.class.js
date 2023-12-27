class Chicks extends MovableObject {
  height = 55;
  width = 60;
  y = 370;
  constructor() {
    super();
    this.loadImg('./assets/imgs/3_enemies_chicken/chicken_small/1_walk/1_w.png');
    this.x = 250 + Math.random() * 400;
  }
}
