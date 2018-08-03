import Phaser from 'phaser';

let group;
let rect;
let i = 0;

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('enemy', 'assets/images/sprites/enemy1.png');
}

function create() {
  rect = new Phaser.Geom.Rectangle(16, 16, 128, 512);
  group = this.add.group({ key: 'enemy', frame: 0, frameQuantity: 20 });
  this.tweens.add({
    targets: rect,
    x: 200,
    y: 200,
    width: 512,
    height: 128,
    delay: 2000,
    duration: 3000,
    ease: 'Sine.easeInOut',
    repeat: -1,
    yoyo: true
  });
}

function update() {
  Phaser.Actions.PlaceOnRectangle(group.getChildren(), rect, i);
  i++;
  if (i === group.length) {
    i = 0;
  }
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
