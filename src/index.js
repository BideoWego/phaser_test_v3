import Phaser from 'phaser';

function preload() {
  this.load.setBaseURL('http://localhost:8080');
  this.load.image('logo', '/assets/images/bw.png');
}

function create() {
  this.add.image(400 - 8, 300 - 8, 'logo');
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload,
    create
  }
});
