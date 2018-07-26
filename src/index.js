import Phaser from 'phaser';

let graphics;
let circles = [];
const size = { w: 800, h: 600 };

function preload() {
  this.load.setBaseURL('http://localhost:8080');
}

function create() {
  graphics = this.add.graphics();

  for (let i = 0; i < 500; i++) {
    circles.push({
      x: Math.random() * size.w,
      y: Math.random() * size.h,
      r: Math.random() * 5,
      a: Math.random() * Math.PI,
      v: 1
    });
  }

  this.input.on('pointerdown', e => {
    const size = 250;

    const rect = {
      x: e.x - size / 2,
      y: e.y - size / 2,
      w: e.x + size / 2,
      h: e.y + size / 2
    };

    circles.forEach(circle => {
      if ((
        circle.x >= rect.x &&
        circle.x <= rect.w &&
        circle.y >= rect.y &&
        circle.y <= rect.h
      )) {
        const x = e.x - circle.x;
        const y = e.y - circle.y;
        const a = Math.atan2(y, x);
        circle.a = a;
      }
    });
  }, this);
}

function update(delta) {
  graphics.clear();
  graphics.fillStyle(0x9966ff, 1);
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    circle.x += circle.v * Math.cos(circle.a);
    circle.y += circle.v * Math.sin(circle.a);
    (circle.x > 0) || (circle.x = size.w - 1);
    (circle.y > 0) || (circle.y = size.h - 1);
    (circle.x <= size.w) || (circle.x = 0);
    (circle.y <= size.h) || (circle.y = 0);
    graphics.fillCircle(circle.x, circle.y, circle.r);
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
