import PlayerBlast from './player_blast';


class PlayerBlastGroup {
  constructor(group) {
    this.delay = 0;
    this.group = group;
  }

  static preload(scene) {
    PlayerBlast.preload(scene);
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


export default PlayerBlastGroup;
