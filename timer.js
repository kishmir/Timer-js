class Timer {
  constructor() {
    var obj = this;
    obj.time = 2000;
    obj.times = -1;
    obj.initialTimes = obj.times;
    obj.val = {};

    var args = arguments[0];

    if (typeof args == 'object') {
      for (var key in args) {
        if (obj[key] !== undefined) {
          obj[key] = args[key];
        } else {
          obj.val[key] = args[key];
        }
      }
    }
  }

  execute() {
    switch (this.times) {
      case -1:
      console.log('I will repeat infinite times in ' + this.time + 'ms until someone stop me!');
      break;

      case 0:
      console.log('I will no repeat more!');
      this.stop();
      break;

      default:
      console.log('I will repeat ' + this.times + ' time(s) in ' + this.time + 'ms');
      this.decrease();
    }
  }

  start() {
    var obj = this;
    obj.stop();
    obj.timer = setInterval(function() { obj.execute(); }, obj.time);
  }

  stop() { clearInterval(this.timer); }

  restart() {
    this.stop();
    this.times = this.initialTimes;
    this.start();
  }

  increase(v=1) { this.times +=v; }
  decrease(v=1) { this.times -=v; }
}