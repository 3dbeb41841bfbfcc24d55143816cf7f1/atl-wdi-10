var button = document.querySelector('button')

console.log(button)

button.addEventListener('click', function(event) {
  console.log(event); // The Event Object
  console.log(this); // This is bound to the html element that was clicked
  this.style.color = 'red'
  this.style.textTransform = 'uppercase'
  this.style.fontWeight = 'bold'
})


var container1 = document.querySelector('.container2')
var container2 = document.querySelector('.container3')

container1.addEventListener('click', function(event) {
  event.stopPropagation()
  console.log(this, 'was clicked')
})
container2.addEventListener('click', function(event) {
  event.stopPropagation()

  console.log(this, 'was clicked')
})
