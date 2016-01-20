console.log("Hello World");

var arr = [{name: "Amuro", ms: "Gundam RX-78-2"}, {name: "Char", ms: "Gelgoog"}];

arr.forEach(function(pilot) {
  pilot.greeting = function() {
    console.log("Hello, I'm " + pilot.name + " pilot of the " + pilot.ms);   
  };
});

arr.forEach(function (pilot) {
  pilot.greeting();
});
