const cat = document.getElementById("cat")
const counter = document.getElementById("counter")
const bag = document.getElementById("bag")
let points = 0

const incrementPoints = function() {
  points++
  counter.innerHTML = points;

  //if(points >= 10) {
//    document.getElementById("cat").classList.remove("jumping");
//  }


}

// controll clicker with key P
//document.addEventListener('keydown', function(e) {
  // console.log(e)
//  if (e.keyCode === 80) {
//    incrementPoints()
//    console.log('1 bims, ein P')
//  }
//})

// window.setInterval(function() {
//   incrementPoints()
// }, 1000);

const clicker = function(e) {
  // Increment points on click by 1
  incrementPoints()

  if(points % 10 === 0) {
    bag.classList.remove("is-hidden");
  } else {
    bag.classList.add("is-hidden");
  }

}

cat.addEventListener("click", clicker);
