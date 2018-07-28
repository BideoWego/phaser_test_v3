import assets from '../assets';


class PlayerAssets {
  static get default() {
    return 'player.default';
  }

  static get frames() {
    return [
      'player1',
      'player2',
      'player3',
      'player4'
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
    ]
  }

  static frame(num) {
    return this.frames[num];
  }
}


export default PlayerAssets;
