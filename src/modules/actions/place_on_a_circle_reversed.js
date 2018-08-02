import Phaser from 'phaser';

const groups = {};
const circles = {};

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('player', 'assets/images/sprites/player1.png');
}

function create() {
  groups.a = this.add.group({ key: 'player', frameQuantity: 36 });
  groups.b = this.add.group({ key: 'player', frameQuantity: 32 });
  groups.c = this.add.group({ key: 'player', frameQuantity: 26 });
  groups.d = this.add.group({ key: 'player', frameQuantity: 16 });

  circles.a = new Phaser.Geom.Circle(400, 300, 200);
  circles.b = new Phaser.Geom.Circle(400, 300, 160);
  circles.c = new Phaser.Geom.Circle(400, 300, 120);
  circles.d = new Phaser.Geom.Circle(400, 300, 80);

  Phaser.Actions.PlaceOnCircle(groups.a.getChildren(), circles.a);
  Phaser.Actions.PlaceOnCircle(groups.b.getChildren(), circles.b);
  Phaser.Actions.PlaceOnCircle(groups.c.getChildren(), circles.c);
  Phaser.Actions.PlaceOnCircle(groups.d.getChildren(), circles.d);
}

function update() {
  Phaser.Actions.RotateAroundDistance(groups.a.getChildren(), circles.a, -0.030, circles.a.radius);
  Phaser.Actions.RotateAroundDistance(groups.b.getChildren(), circles.b, 0.025, circles.b.radius);
  Phaser.Actions.RotateAroundDistance(groups.c.getChildren(), circles.c, -0.020, circles.c.radius);
  Phaser.Actions.RotateAroundDistance(groups.d.getChildren(), circles.d, 0.015, circles.d.radius);
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
