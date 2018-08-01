import Phaser from 'phaser';

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('player', 'assets/images/sprites/player1.png');
}

function create() {
  const group = this.add.group({
    key: 'player',
    frame: 0,
    frameQuantity: 100
  });

  Phaser.Actions.GridAlign(group.getChildren(), {
    width: 10,
    height: 10,
    cellWidth: 32,
    cellHeight: 32,
    x: 100,
    y: 100
  });
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create
  }
};

const game = new Phaser.Game(config);
