var SONICL_TRIG = A0;
var SONICL_ECHO = B8;
var SONICR_TRIG = A1;
var SONICR_ECHO = B9;
var LDR = [A5,A6,A7,B1];
var SERVO = [B13,B14];

var SERVO_ONE = [B10, B13];
var SERVO_TWO = [B14, B15];

//var clockwise = [0,5,0.5,0,1];
//var anticlockwise = [0.5,0.5,1,0];

//setInterval(function() {
//  for (var i in SERVO_ONE)
//    digitalPulse(SERVO_ONE[i], 1, 1+clockwise[i]);
//}, 20);

//setInterval(function() {
//  for (var i in SERVO_TWO)
//    digitalPulse(SERVO_TWO[i], 1, 1+anticlockwise[i]);
//}, 20);


// Servos
var pos = [0.5,0.5,0.5,0.5];
setInterval(function() {
  for (var i in SERVO)
    digitalPulse(SERVO[i], 1, 1+pos[i]);
}, 20);
// Now set pos[x] to any values between 0 and 1
// eg.
//function forward() { pos=[0.5,0.5,0,1]; }

//function back() { pos=[0.5,0.5,1,0]; }
//
//forward();
pos=[0,1];
