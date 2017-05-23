'use strict';

const BowlingGame = require('./BowlingGame');

const assert = require('assert');

describe('Bowling Game', function() {

  const _this = this;

  beforeEach(() => {
  		_this.BowlingGame = new BowlingGame();
	});

  it('should consists of 10 frames', () => {
    const expected = 10;

    assert.equal(expected, _this.BowlingGame.framesNum);
  });

  it('should deal with strike', () => {
    const expected = 14;
    const rollNums = 17;

    _this.BowlingGame.roll(10);
    _this.BowlingGame.roll(1);
    _this.BowlingGame.roll(1);

    for (var i = 0; i < rollNums; i++) {
      _this.BowlingGame.roll(0);
    }

    assert.equal(expected, _this.BowlingGame.score);
  });

  it('should deal with spare', () => {
    const expected = 16;
    const rollNums = 17;

    _this.BowlingGame.roll(8);
    _this.BowlingGame.roll(2);
    _this.BowlingGame.roll(3);

    for (var i = 0; i < rollNums; i++) {
      _this.BowlingGame.roll(0);
    }

    assert.equal(expected, _this.BowlingGame.score);
  });

  it('should deal two frames with strike and spare', () => {
    const expected = 30;
    const rollNums = 17;

    _this.BowlingGame.roll(10);
    _this.BowlingGame.roll(7);
    _this.BowlingGame.roll(3);

    for (var i = 0; i < rollNums; i++) {
      _this.BowlingGame.roll(0);
    }

    assert.equal(expected, _this.BowlingGame.score);
  });

  it('should return 300 when it is a perfect game', () => {
    const expected = 300;
    const frames   = 12;

    for (let i = 0; i < frames; i++) {
      _this.BowlingGame.roll(10);
    }

    assert.equal(expected, _this.BowlingGame.score);
  });

  it('should return 200 when it is a STRIKE-SPARE GAME', () => {
    const expected = 200;
    const rolls = [10, 9, 1, 10, 2, 8, 10, 9, 1, 10, 9, 1, 10, 1, 9, 10];

    for (let roll of rolls) {
      _this.BowlingGame.roll(roll);
    }

    assert.equal(expected, _this.BowlingGame.score);
  });

  it('should clean game, no miss each frame', () => {
    const expected = 178;
    const rolls = [5,5,8,2,6,4,7,3,7,3,9,1,5,5,8,2,9,1,9,1,10];

    for (let roll of rolls) {
      _this.BowlingGame.roll(roll);
    }

    assert.equal(expected, _this.BowlingGame.score);
  });

  it('should all miss game without tenth round', () => {
    const expected = 73;
    const rolls = [5,0,8,0,6,0,0,7,7,0,0,9,5,0,8,0,0,9,9,0];

    for (let roll of rolls) {
      _this.BowlingGame.roll(roll);
    }

    assert.equal(expected, _this.BowlingGame.score);
  });
});
