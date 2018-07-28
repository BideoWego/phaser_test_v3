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
    return 5;
  }

  static preload(scene) {
    this.anims.images.forEach(image => scene.load.image(image));
  }

  static create(scene, x=400, y=300) {
    this.anims.list.forEach(anim => scene.anims.create(anim));
    const player = new Player(scene, x, y);
    return scene.add.existing(player).play(Player.anims.default);
  }
}


export default Player;
