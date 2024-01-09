class Level {
  chickens;
  chicks;
  clouds;
  backgroundObjects;
  bottles;
  coins;
  level_end_x = 3650;
  constructor(chickens, chicks, clouds, backgroundObjects, bottles, coins) {
    this.chickens = chickens;
    this.chicks = chicks;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.bottles = bottles;
    this.coins = coins;
  }
}
