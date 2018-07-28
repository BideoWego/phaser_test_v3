import assets from '../assets';


class EnemyAssets {
  static get default() {
    return 'enemy.default';
  }

  static get frames() {
    return [
      'enemy1',
      'enemy2',
      'enemy3',
      'enemy4',
      'enemy5',
      'enemy6',
    ];
  }

  static get images() {
    return this.frames.map(frame => ({
      key: frame,
      url: `${ assets.sprites }${ frame }.png`
    }));
  }

  static get animations() {
    return [
      {
        key: this.default,
        frames: this.frames.map(frame => ({ key: frame })),
        frameRate: 10,
        repeat: -1
      }
    ];
  }

  static frame(num) {
    return this.frames[num];
  }
}


export default EnemyAssets;
