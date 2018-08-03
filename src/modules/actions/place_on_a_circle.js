import Phaser from 'phaser';

let group;
let tween;

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('player', 'assets/images/sprites/player1.png');
}

function create() {
  const circle = new Phaser.Geom.Circle(400, 300, 260);
  group = this.add.group({ key: 'player', frameQuantity: 32 });
  Phaser.Actions.PlaceOnCircle(group.getChildren(), circle);
  tween = this.tweens.addCounter({
    from: 260,
    to: 0,
    duration: 3000,
    delay: 2000,
    ease: 'Sine.easeInOut',
    repeat: -1,
    yoyo: true
  });
}

function update() {
  Phaser.Actions.RotateAroundDistance(
    group.getChildren(),
    { x: 400, y: 300, },
    0.02,
    tween.getValue()
  );
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
