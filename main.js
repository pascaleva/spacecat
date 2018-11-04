const cat = document.getElementById("cat-img")
const counter = document.getElementById("counter")
const bag = document.getElementById("bag")
const background = document.getElementById("background")
const perSecondCounter = document.getElementById("per-second-counter")
let points = 0
let speed = 0

const incrementPoints = function() {
  points++
  counter.innerHTML = points.toFixed(1);
  // cat.style.transform = 'rotate(' + (points * 10) + 'deg)';

  // transform scale: value only between 0 and 1!!!
  // cat.style.transform += 'scale(' + (1 / points) + ')';

  // achtung bei .style.transform –> wird immer nur eines genommen, ausser man addiert mit +=
  // cat.style.transform += 'blabla'


  if(points <= 20) {
    cat.style.transform = 'translateY(' + (points * -10) + 'px)';
    cat.style.transform += 'rotate(' + (points * 5 * (Math.random())) + 'deg)';
  } else {
    cat.style.transform = 'rotate(' + (points * 5 * (Math.random())) + 'deg)';
  }

  if(points === 10) {
    background.classList.add('is-animating');
  } else if (points === 20) {
    background.classList.remove('is-animating');
    background.classList.add('is-animating-fast');
  } else if (points === 40) {
    background.classList.remove('is-animating-fast');
    background.classList.add('is-animating-even-faster');
  } else if (points === 80) {
    background.classList.remove('is-animating-even-faster');
    background.classList.add('is-animating-even-fasterer');
  }

  if (points >= 100) {
    cat.style.transform = 'scale(4)';
    cat.style.transform += 'rotate(30deg)';
    background.classList.remove('is-animating-even-fasterer');
  }


}

// controll clicker with key P
//document.addEventListener('keydown', function(e) {
  // console.log(e)
//  if (e.keyCode === 80) {
//    incrementPoints()
//    console.log('1 bims, ein P')
//  }
//})

const clicker = function(e) {
  // Increment points on click by 1
  incrementPoints()

  if(points % 10 === 0) {
    bag.classList.remove("is-hidden");
  } else {
    bag.classList.add("is-hidden");
  }
}

const baggy = function(e) {
  speed += 0.2
  perSecondCounter.innerHTML = speed;
}

window.setInterval(function() {
  // console.log('i bims, der points: ', points)
  // console.log('i bims, der speed: ', speed)
  points += speed;
  Math.round( points * 10 ) / 10;
  if(points % 10 === 0) {
    bag.classList.remove("is-hidden");
  } else {
    bag.classList.add("is-hidden");
  }
  counter.innerHTML = points.toFixed(1);
}, 1000)

cat.addEventListener("click", clicker);
bag.addEventListener("click", baggy);
