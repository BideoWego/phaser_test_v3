import { Input } from 'phaser';
const { Keyboard: { KeyCodes } } = Input;


let _keys


class Controller {
  constructor(scene) {
    this.scene = scene;
  }

  static get keys() {
    return _keys;
  }

  static create(scene) {
    _keys = {
      up: scene.input.keyboard.addKey(KeyCodes.UP),
      down: scene.input.keyboard.addKey(KeyCodes.DOWN),
      left: scene.input.keyboard.addKey(KeyCodes.LEFT),
      right: scene.input.keyboard.addKey(KeyCodes.RIGHT),
      space: scene.input.keyboard.addKey(KeyCodes.SPACE)
    };

    return new Controller(scene);
  }

  get up() { return _keys.up; }
  get down() { return _keys.down; }
  get left() { return _keys.left; }
  get right() { return _keys.right; }
  get space() { return _keys.space }
}


export default Controller;
