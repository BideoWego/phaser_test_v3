import Phaser from 'phaser';

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('enemy', 'assets/images/sprites/enemy1.png');
}

function create() {
  const rect = new Phaser.Geom.Rectangle(100, 100, 256, 256);
  const group = this.add.group({
    key: 'enemy',
    frameQuantity: 32
  });
  Phaser.Actions.PlaceOnRectangle(group.getChildren(), rect);
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
