import Phaser from 'phaser';

let group;
let tween;

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('player', 'assets/images/sprites/player1.png');
}

function create() {
  const circle = new Phaser.Geom.Circle(400, 300, 220);
  group = this.add.group({
    key: 'player',
    frame: 0,
    repeat: 10
  });
  Phaser.Actions.PlaceOnCircle(group.getChildren(), circle);
  tween = this.tweens.addCounter({
    from: 220,
    to: 100,
    duration: 3000,
    delay: 2000,
    ease: 'Sine.easeInOut',
    repeat: -1,
    yoyo: true
  });
}

function update() {
  const children = group.getChildren();
  const p = { x: 400, y: 300 };
  const amount = 0.02;
  const t = tween.getValue();
  Phaser.Actions.RotateAroundDistance(children, p, amount, t);
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
