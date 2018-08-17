class Timer {
  constructor() {
    this.time = 2000;
    this.times = -1;
    this.initialTimes = this.times;
    this.val = {};

    var args = arguments[0];

    if (typeof args == 'object') {
      for (var key in args) {
        if (this[key] !== undefined) {
          this[key] = args[key];
        } else {
          this.val[key] = args[key];
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
    this.stop();
    this.timer = setInterval( ()=>this.execute(), this.time);
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