import { Input } from 'phaser';
const { Keyboard: { KeyCodes } } = Input;

class Controller {
  static create(scene) {
    return {
      up: scene.input.keyboard.addKey(KeyCodes.UP),
      down: scene.input.keyboard.addKey(KeyCodes.DOWN),
      left: scene.input.keyboard.addKey(KeyCodes.LEFT),
      right: scene.input.keyboard.addKey(KeyCodes.RIGHT),
      space: scene.input.keyboard.addKey(KeyCodes.SPACE)
    };
  }
}

export default Controller;
