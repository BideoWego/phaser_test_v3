import Phaser from 'phaser';
import Player from './lib/player';
import PlayerBlast from './lib/player_blast';

let _player;
const _playerSpeed = 2;
let _playerBlasts;
let _playerBlastTime = 0;
let _keys = {};

function preload() {
  this.load.setBaseURL('http://localhost:8080');

  Player.preload(this);
  PlayerBlast.preload(this);
}

function create() {
  _player = Player.create(this);
  _playerBlasts = PlayerBlast.createGroup(this);

  const keyCodes = Phaser.Input.Keyboard.KeyCodes;
  _keys = {
    up: this.input.keyboard.addKey(keyCodes.UP),
    down: this.input.keyboard.addKey(keyCodes.DOWN),
    left: this.input.keyboard.addKey(keyCodes.LEFT),
    right: this.input.keyboard.addKey(keyCodes.RIGHT),
    space: this.input.keyboard.addKey(keyCodes.SPACE)
  }
}

function update(time, delta) {
  if (_keys.up.isDown) {
    _player.y -= _playerSpeed;
  }

  if (_keys.down.isDown) {
    _player.y += _playerSpeed;
  }

  if (_keys.left.isDown) {
    _player.x -= _playerSpeed;
  }

  if (_keys.right.isDown) {
    _player.x += _playerSpeed;
  }

  if (_keys.space.isDown) {
    if (_playerBlastTime <= 0) {
      _playerBlasts.get(_player.x, _player.y);
      _playerBlastTime = 100;
    } else {
      _playerBlastTime -= delta;
    }
  }
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
