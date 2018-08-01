import Phaser from 'phaser';
import EnemyAssets from './enemy_assets';


class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.direction = 1;
    this.setTexture(EnemyAssets.frame(0));
    this.setPosition(x, y);
  }

  static get assets() {
    return EnemyAssets;
  }

  static get speed() {
    return 3;
  }

  static preload(scene) {
    this.assets.images.forEach(image => scene.load.image(image));
  }

  static create(scene, x=400, y=32) {
    this.assets.animations.forEach(anim => scene.anims.create(anim));
    const enemy = new Enemy(scene, x, y);
    return scene.add.existing(enemy).play(EnemyAssets.default);
  }

  update() {
    if (this.x <= 0) {
      this.direction = 1;
    } else if (this.x >= 800) {
      this.direction = -1;
    }

    this.x += Enemy.speed * this.direction;
  }
}


export default Enemy;
