import Phaser from 'phaser';
import assets from '../assets';


class PlayerBlast extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.setTexture('player-blast');
  }

  static get speed() {
    return 7;
  }

  static preload(scene) {
    scene.load.image('player-blast', `${ assets.sprites }player-blast.png`);
  }

  static createGroup(scene, maxSize=100) {
    return scene.add.group({
      classType: this,
      maxSize
    });
  }

  update() {
    if (this.active) {
      this.y -= PlayerBlast.speed;
      if (this.y < -10) {
        this.destroy();
      }
    }
  }
}


export default PlayerBlast;
