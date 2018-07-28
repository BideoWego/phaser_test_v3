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
      if (this.y < 100) {
        this.destroy();
      }
    }
  }
}


class PlayerBlastGroup {
  constructor(group) {
    this.delay = 0;
    this.group = group;
  }

  static create(scene, maxSize=100) {
     const group = scene.add.group({
      classType: PlayerBlast,
      runChildUpdate: true,
      maxSize
    });

    return new PlayerBlastGroup(group);
  }

  update(time, delta, controller, player) {
    if (controller.space.isDown) {
      if (this.delay <= 0) {
        const playerBlast = this.group.get(player.x, player.y);
        playerBlast.setActive(true);
        this.delay = 100;
      } else {
        this.delay -= delta;
      }
    }
  }
}

export { PlayerBlastGroup };
export default PlayerBlast;
