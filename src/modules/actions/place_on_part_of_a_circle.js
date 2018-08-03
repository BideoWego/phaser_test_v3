import Phaser from 'phaser';

let groups = {};

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('player', 'assets/images/sprites/player1.png');
}

function create() {
  groups.a = this.add.group({ key: 'player', frameQuantity: 16 });
  groups.b = this.add.group({ key: 'player', frameQuantity: 16 });
  groups.c = this.add.group({ key: 'player', frameQuantity: 16 });
  groups.d = this.add.group({ key: 'player', frameQuantity: 16 });
  Phaser.Actions.PlaceOnCircle(groups.a.getChildren(), { x: 400, y: 300, radius: 200 });
  Phaser.Actions.PlaceOnCircle(groups.b.getChildren(), { x: 400, y: 300, radius: 160 });
  Phaser.Actions.PlaceOnCircle(groups.c.getChildren(), { x: 400, y: 300, radius: 120 });
  Phaser.Actions.PlaceOnCircle(groups.d.getChildren(), { x: 400, y: 300, radius: 80 });
}

function update() {
  Phaser.Actions.RotateAroundDistance(groups.a.getChildren(), { x: 400, y: 300 }, 0.02, 200);
  Phaser.Actions.RotateAroundDistance(groups.b.getChildren(), { x: 400, y: 300 }, 0.02, 160);
  Phaser.Actions.RotateAroundDistance(groups.c.getChildren(), { x: 400, y: 300 }, 0.02, 120);
  Phaser.Actions.RotateAroundDistance(groups.d.getChildren(), { x: 400, y: 300 }, 0.02, 80);
}


const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update
  }
});
