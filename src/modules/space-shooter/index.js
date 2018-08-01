import Phaser from 'phaser';
import Player from './lib/player';
import Enemy from './lib/enemy';
import Controller from './lib/controller';

let _player;
let _enemy;
let _controller;

function preload() {
  this.load.setBaseURL(window.location.origin);

  Player.preload(this);
  Enemy.preload(this);
}

function create() {
  _player = Player.create(this);
  _enemy = Enemy.create(this);
  _controller = Controller.create(this);
}

function update(time, delta) {
  _player.update(time, delta, _controller);
  _enemy.update(time, delta);
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
    create,
    update
  }
});
