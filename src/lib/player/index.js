import Phaser from 'phaser';
import PlayerAnims from './player_anims';


class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.setTexture(PlayerAnims.frame(0));
    this.setPosition(x, y);
  }

  static get anims() {
    return PlayerAnims;
  }

  static get speed() {
    return 3;
  }

  static preload(scene) {
    this.anims.images.forEach(image => scene.load.image(image));
  }

  static create(scene) {
    this.anims.list.forEach(anim => scene.anims.create(anim));
  }
}


export default Player;
