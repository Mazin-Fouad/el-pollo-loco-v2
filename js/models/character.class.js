class Character extends MovableObject {
  y = 230;
  height = 200;
  constructor() {
    super();
    this.loadImg('./assets/imgs/2_character_pepe/2_walk/W-21.png');
  }

  jump() {}
}
