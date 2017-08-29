function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  var cat = {
    name: name,
    age: age,
    meow: function() {
      console.log('Meow!');
    }
  };
  return cat;
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  object[method]();
}

// var bernie = makeCat('bernie', 5);
// console.log(bernie);
// invokeMethod(bernie, 'meow');
//console.log(invokeMethod(bernie, 'meow'));

var user = {
  name: 'neil',
  email: 'test',
  password: 'yup'
};

// console.log(user.dog);
function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  return object[property] != undefined;
}

console.log(hasProperty(user,'moose'));