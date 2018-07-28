import Phaser from 'phaser';
import Player from './lib/player';
import PlayerBlast, { PlayerBlastGroup } from './lib/player_blast';
import Controller from './lib/controller';

let _player;
const _playerSpeed = 2;
let _playerBlasts;
let _playerBlastTime = 0;
let _keys = {};
let _controller;

function preload() {
  this.load.setBaseURL('http://localhost:8080');

  Player.preload(this);
  PlayerBlast.preload(this);
}

function create() {
  _player = Player.create(this);
  _playerBlasts = PlayerBlastGroup.create(this, _player);
  _controller = Controller.create(this);
}

function update(time, delta) {
  _player.update(time, delta, _controller);
  _playerBlasts.update(time, delta, _controller, _player);
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
