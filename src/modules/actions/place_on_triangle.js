import Phaser from 'phaser';

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('enemy', 'assets/images/sprites/enemy1.png');
  this.load.image('player', 'assets/images/sprites/player1.png');
}

function create() {
  const eq = new Phaser.Geom.Triangle.BuildEquilateral(400, 100, 380);
  const right = new Phaser.Geom.Triangle.BuildRight(200, 400, 300, 200);
  const enemies = this.add.group({ key: 'enemy', frameQuantity: 64 });
  const players = this.add.group({ key: 'player', frameQuantity: 64 });
  Phaser.Actions.PlaceOnTriangle(enemies.getChildren(), eq);
  Phaser.Actions.PlaceOnTriangle(players.getChildren(), right);
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create
  }
});
