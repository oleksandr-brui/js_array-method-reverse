'use strict';

numbers.reverse = function() {
  // write code here
  this.length *= 2;

  for (let i = 0; i < this.length; i++) {
    this[this.length - 1 - i] = this[i];
  }

  for (let j = 0; j < this.length / 2; j++) {
    this[j] = this[j + this.length / 2];
  }

  this.length = this.length / 2;

  return this;
};
