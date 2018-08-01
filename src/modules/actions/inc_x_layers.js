import Phaser from 'phaser';

let players;
let enemies;
let move = 0;

function preload() {
  this.load.setBaseURL(window.location.origin);
  this.load.image('player', 'assets/images/sprites/player1.png');
  this.load.image('enemy', 'assets/images/sprites/enemy1.png');
}

function create() {
  players = this.add.group();
  enemies = this.add.group();

  for (let i = 0; i < 100; i++) {
    players.create(
      100 + Math.random() * 600,
      100 + Math.random() * 400,
      'player'
    );
    enemies.create(
      100 + Math.random() * 600,
      100 + Math.random() * 400,
      'enemy'
    );
  }
}

function update() {
  const i = 0.01;
  const p = players.getChildren();
  const e = enemies.getChildren();
  Phaser.Actions.IncX(p, Math.cos(move));
  Phaser.Actions.IncY(p, Math.sin(move));
  Phaser.Actions.Rotate(p, -i);
  Phaser.Actions.IncX(e, -Math.cos(move));
  Phaser.Actions.IncY(e, -Math.sin(move));
  Phaser.Actions.Rotate(e, i);
  move += i;
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);
