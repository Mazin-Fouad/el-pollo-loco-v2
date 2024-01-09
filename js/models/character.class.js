class Character extends MovableObject {
  y = 210;
  height = 220;
  IMAGES_WALKING = [
    './assets/imgs/2_character_pepe/2_walk/W-21.png',
    './assets/imgs/2_character_pepe/2_walk/W-22.png',
    './assets/imgs/2_character_pepe/2_walk/W-23.png',
    './assets/imgs/2_character_pepe/2_walk/W-24.png',
    './assets/imgs/2_character_pepe/2_walk/W-25.png',
    './assets/imgs/2_character_pepe/2_walk/W-26.png',
  ];
  world;
  speed = 8;
  walking_sound = new Audio('./assets/audio/footstep.mp3');
  constructor() {
    super();
    this.loadImg('./assets/imgs/2_character_pepe/2_walk/W-21.png');
    this.loadImgs(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    this.walking_sound.pause();
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.walking_sound.play();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 50);
  }

  jump() {}
}
