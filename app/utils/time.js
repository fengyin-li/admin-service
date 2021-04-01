'use strict';

module.exports = {
  newTime() {
    const time = new Date();
    return time.getFullYear() + '-' + this.addZero(time.getMonth() + 1) + '-' + this.addZero(time.getDate()) + ' ' + this.addZero(time.getHours()) + ':' + this.addZero(time.getMinutes()) + ':' + this.addZero(time.getSeconds());
  },
  addZero(val) {
    return Number(val) < 10 ? '0' + String(val) : val;
  },
};
