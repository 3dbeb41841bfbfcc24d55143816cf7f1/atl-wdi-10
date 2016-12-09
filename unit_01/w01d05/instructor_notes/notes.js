// var person = {
//   age: 26,
//   name: 'Colin',
//   hello: function() {
//     console.log('hello my name is Colin')
//   }
// }


// the keyword this is `self referential`
var person = {
  age: 25,
  name: 'Mike Curry',
  helloMyNameIs: function(){
      var age = "IM SUPER AGEY"
      console.log(`Hello my name is ${this.name}`);
      console.log(this)
  },
  hello: function(name){
    console.log(`Hello ${name}`);
    age
    this.myNameIs();
  },
  myNameIs: function(){
    console.log(`My name is ${this.name}`);
  }
}
