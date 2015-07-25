var SERVO_ONE = B13;
var SERVO_TWO = B14;

var pos = [0,1];

setInterval(function() {

  digitalPulse(SERVO_ONE, 1, 1+pos[0]);
  digitalPulse(SERVO_TWO, 1, 1+pos[1]);
}, 20);
