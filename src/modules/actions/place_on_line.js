import Phaser from 'phaser';

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('player', 'assets/images/sprites/player1.png');
}

function create() {
  const line = new Phaser.Geom.Line(100, 200, 600, 400);
  const group = this.add.group({ key: 'player', frameQuantity: 32 });
  Phaser.Actions.PlaceOnLine(group.getChildren(), line);
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
