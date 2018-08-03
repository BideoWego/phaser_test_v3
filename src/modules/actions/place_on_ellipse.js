import Phaser from 'phaser';

let group;
let ellipse;

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('player', 'assets/images/sprites/player1.png');
}

function create() {
  ellipse = new Phaser.Geom.Ellipse(400, 300, 200, 500);
  group = this.add.group({ key: 'player', frameQuantity: 48 });
  Phaser.Actions.PlaceOnEllipse(group.getChildren(), ellipse);
  this.tweens.add({
    targets: ellipse,
    width: 700,
    height: 100,
    delay: 1000,
    duration: 2000,
    ease: 'Sine.easeInOut',
    repeat: -1,
    yoyo: true
  });
}

function update() {
  Phaser.Actions.PlaceOnEllipse(group.getChildren(), ellipse);
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
