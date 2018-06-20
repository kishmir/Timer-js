# Timer
Timer.js is a JS class to help manager your intervals with simplest way ~~or try simplify~~!

# Include the feature
- Import "timer.js" in your project
- Done!

# Using the Feature
First simple way
```javascript
var myFirstTimer = new Timer(); // Nothing happen yet
myFirstTimer.start(); // Now he will show a message in console each 2s
```

Custom some details
- Time
```javascript
var mySecondTimer = new Timer({time:3000}); // Execute each 3s and infinite
```

- Execution code (two ways):
```javascript
var myThirdTimer = new Timer();
/* Own function */
myThirdTimer.execute = function() {
// code something here
};
/* Function already exist */
function showMeSomething() {
console.log("Yes my Lord, I'll show something!");
}
myThridTimer.execute = showMeSomething;
myThirdTimer.start();
```

- Times
```javascript
myForthExample = new Timer({time:2000, times:5});
myForthExample.execute = function() {
// Code here
// IMPORTANT: need adapt here to stop when reaches the limit
// Example: if(this.times < 1) { this.stop(); }
}
```

- Custom values for execute use
```javascript
// Passing the params for him
var myFifthTimer = new Timer({
oneText:"text",
oneNumber:42,
oneList:[5, 10, 15],
oneObject:{ name:"Neku Sakuraba", game:"The World Ends With You", ILoveThis:true }
});
// Each custom attr he storage inside of "val"
myFifthTimer.execute = function() {
  console.log(this.val); // show all custom values storage
  console.log(this.val["oneText"]); // show "text"
  console.log(this.val["oneNumber"]); // show "42"
  console.log(this.val["oneList"]); // show list
  console.log(this.val["oneObject"]); // show obj
  // and so on
  console.log(this.val["oneList"][1]); // show "10"
  console.log(this.val["oneObject"]["name"]); // show "Neku Sakuraba"
};
```

## Methods
> execute => execute (that's it, really! :laughing:);<br />
> start => prepare interval to execute;<br />
> stop => he... well... stop... :sweat_smile:;<br />
> restart => restart the proccess;<br />
> increase => add (standard 1) in "times";<br />
> decrease => rmv (standard 1) in "times";<br />

***Feedbacks (and forks) always welcome!***