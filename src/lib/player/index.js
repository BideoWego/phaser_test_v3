import Phaser from 'phaser';
import PlayerAssets from './player_assets';
import PlayerBlastGroup from './player_blast_group';


class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.setTexture(PlayerAssets.frame(0));
    this.setPosition(x, y);

    this.blasts = PlayerBlastGroup.create(scene);
  }

  static get assets() {
    return PlayerAssets;
  }

  static get speed() {
    return 5;
  }

  static preload(scene) {
    this.assets.images.forEach(image => scene.load.image(image));

    PlayerBlastGroup.preload(scene);
  }

  static create(scene, x=400, y=300) {
    this.assets.animations.forEach(anim => scene.anims.create(anim));
    const player = new Player(scene, x, y);
    return scene.add.existing(player).play(Player.assets.default);
  }

  update(time, delta, controller) {
    if (controller.up.isDown) {
      this.y -= Player.speed;
    }

    if (controller.down.isDown) {
      this.y += Player.speed;
    }

    if (controller.left.isDown) {
      this.x -= Player.speed;
    }

    if (controller.right.isDown) {
      this.x += Player.speed;
    }

    this.blasts.update(time, delta, controller, this);
  }
}


export default Player;
