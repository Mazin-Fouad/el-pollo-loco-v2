class Character extends MovableObject {
  y = 210;
  height = 220;
  constructor() {
    super();
    this.loadImg('./assets/imgs/2_character_pepe/2_walk/W-21.png');
  }

  jump() {}
}
