class Character extends MovableObject {
  y = 80;
  height = 220;
  IMAGES_WALKING = [
    './assets/imgs/2_character_pepe/2_walk/W-21.png',
    './assets/imgs/2_character_pepe/2_walk/W-22.png',
    './assets/imgs/2_character_pepe/2_walk/W-23.png',
    './assets/imgs/2_character_pepe/2_walk/W-24.png',
    './assets/imgs/2_character_pepe/2_walk/W-25.png',
    './assets/imgs/2_character_pepe/2_walk/W-26.png',
  ];
  IMAGES_JUMPING = [
    './assets/imgs/2_character_pepe/3_jump/J-31.png',
    './assets/imgs/2_character_pepe/3_jump/J-32.png',
    './assets/imgs/2_character_pepe/3_jump/J-33.png',
    './assets/imgs/2_character_pepe/3_jump/J-34.png',
    './assets/imgs/2_character_pepe/3_jump/J-35.png',
    './assets/imgs/2_character_pepe/3_jump/J-36.png',
    './assets/imgs/2_character_pepe/3_jump/J-37.png',
    './assets/imgs/2_character_pepe/3_jump/J-38.png',
    './assets/imgs/2_character_pepe/3_jump/J-39.png',
  ];

  IMAGES_IDLE = [
    './assets/imgs/2_character_pepe/1_idle/idle/I-1.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-2.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-3.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-4.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-5.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-6.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-7.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-8.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-9.png',
    './assets/imgs/2_character_pepe/1_idle/idle/I-10.png',
  ];
  IMAGES_DEAD = [
    './assets/imgs/2_character_pepe/5_dead/D-51.png',
    './assets/imgs/2_character_pepe/5_dead/D-52.png',
    './assets/imgs/2_character_pepe/5_dead/D-53.png',
    './assets/imgs/2_character_pepe/5_dead/D-54.png',
    './assets/imgs/2_character_pepe/5_dead/D-55.png',
    './assets/imgs/2_character_pepe/5_dead/D-56.png',
    './assets/imgs/2_character_pepe/5_dead/D-57.png',
  ];
  world;
  speed = 8;
  walking_sound = new Audio('./assets/audio/footstep.mp3');
  jumping_sound = new Audio('./assets/audio/jumping.mp3');

  constructor() {
    super();
    this.loadImg('./assets/imgs/2_character_pepe/2_walk/W-21.png');
    this.loadImgs(this.IMAGES_WALKING);
    this.loadImgs(this.IMAGES_JUMPING);
    this.loadImgs(this.IMAGES_IDLE);
    this.animate();
    this.applyGravity();
  }

  animate() {
    this.walking_sound.pause();
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.otherDirection = false;
        this.moveRight();
        this.walking_sound.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.otherDirection = true;

        this.moveToLeft();
        this.walking_sound.play();
      }

      if (this.world.keyboard.SPACE || this.world.keyboard.UP) {
        this.jump();
        this.playJumpingSound();
      }

      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.IMAGES_WALKING);
      }

      if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      }
    }, 50);
  }

  playJumpingSound() {
    if (!this.isAboveGround()) {
      this.jumping_sound.play();
    }
  }
}
