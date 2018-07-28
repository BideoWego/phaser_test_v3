import Phaser from 'phaser';
import assets from '../assets';


class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.setTexture('enemy1');
    this.setPosition(x, y);
  }

  static preload(scene) {
    scene.load.image('enemy1', `${ assets.sprites }enemy1.png`);
  }

  static create(scene, x=100, y=300) {
    const enemy = new Enemy(scene, x, y);
    return scene.add.existing(enemy);
  }
}


export default Enemy;
