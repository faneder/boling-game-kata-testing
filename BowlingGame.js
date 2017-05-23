'use strict';

class BowlingGame {

  constructor() {
    this.framesNum = 10;
    this.currentFrame = 0;
    this.strikeScore = 10;
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  addFrame(num) {
    this.currentFrame += num;
  }

  isStrike() {
    return this.rolls[this.currentFrame] === this.strikeScore;
  }

  isSpare() {
    return this.rolls[this.currentFrame] + this.rolls[this.currentFrame+1] === 10;
  }

  strikeBonus() {
    let s1 = 0;
    let s2 = 0;

    if (this.rolls[this.currentFrame+1]) {
      s1 = this.rolls[this.currentFrame+1];
    }

    if (this.rolls[this.currentFrame+2]) {
      s2 = this.rolls[this.currentFrame+2];
    }
    return 10 + s1 + s2;
  }

  spareBonus() {
    let s1 = 0;
    
    if (this.rolls[this.currentFrame+2]) {
      s1 = this.rolls[this.currentFrame+2];
    }
    return 10 + s1;
  }

  sumBasicScore() {
    let s1 = 0;
    let s2 = 0;

    if (this.rolls[this.currentFrame]) {
      s1 = this.rolls[this.currentFrame];
    }

    if (this.rolls[this.currentFrame+1]) {
      s2 = this.rolls[this.currentFrame+1];
    }

    return s1 + s2;
  }

  get score() {
    let score = 0;

    for (let i = 0; i < this.framesNum; i++) {
      if (this.isStrike()) {
        score += this.strikeBonus();
        this.addFrame(1);
      } else if (this.isSpare()) {
        score += this.spareBonus();
        this.addFrame(2);
      } else {
        score += this.sumBasicScore();
        this.addFrame(2);
     }
    }
    return score;
  }
}

module.exports = BowlingGame;
