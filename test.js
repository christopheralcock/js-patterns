// you can actually just say "var" once, as long as you string all the statements together with commas
function func() {
  var a = 1,
  b = 2,
  sum = a + b,
  myobject = {},
  i,
  j;
 // function body...
};


//is scope as simple as making sure things just happen in the same function?
//hoisting is where you have issues arising from the order of your shiiiiit in function - get your vars declared up top

// That’s why a better pattern for for loops is to cache the length of the array (or collection)
// you’re iterating over, as shown in the following example:
for (var i = 0, max = myarray.length; i < max; i++) {
 // do something with myarray[i]
}
// This way you retrieve the value of length only once and use it during the whole loop.




// if we have this man object
var man = {
  hands: 2,
  legs: 2,
  heads: 1
};

//this is bad as it brings up some inherited characteristics that we don't care about

for (var i in man) {
  console.log(i, ":", man[i]);
}

//instead go

for (var i in man) {
  if (man.hasOwnProperty(i)) {
    console.log(i, ":", man[i]);
  }
}

//the hasOwnProperty thing just shows the relevant stuff
