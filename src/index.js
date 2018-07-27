import Phaser from 'phaser';

let _player;
const _playerSpeed = 2;
let _playerBlasts;
let _playerBlastTime = 0;
let _keys = {};

function preload() {
  this.load.setBaseURL('http://localhost:8080');

  this.load.image('player1', 'assets/images/sprites/player1.png');
  this.load.image('player2', 'assets/images/sprites/player2.png');
  this.load.image('player3', 'assets/images/sprites/player3.png');
  this.load.image('player4', 'assets/images/sprites/player4.png');

  this.load.image('player-blast', 'assets/images/sprites/player-blast.png');
}

function create() {
  this.anims.create({
    key: 'player.default',
    frames: [
      { key: 'player1' },
      { key: 'player2' },
      { key: 'player3' },
      { key: 'player4' }
    ],
    frameRate: 10,
    repeat: -1
  });

  _player = this.make.sprite({
    x: 400,
    y: 300,
    key: 'player1'
  }).play('player.default');

  _playerBlasts = this.add.group({
    defaultKey: 'player-blast',
    maxSize: 100
  });

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

  _playerBlasts.getChildren().forEach(blast => {
    if (blast.active) {
      blast.y -= 3;
    }

    if (blast.y < 0) {
      blast.destroy();
    }
  });
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
