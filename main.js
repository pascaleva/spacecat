const cat = document.getElementById("cat-img");
const counter = document.getElementById("counter");
const bag = document.getElementById("bag");
const background = document.getElementById("background");
const perSecondCounter = document.getElementById("per-second-counter");
let points = 0;
let speed = 0;
let clicks = 0; // here we count the clicks – every 10th click there is a bag comming
let bagTimeOut = null; // here we save the timer while the bag is visible

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// min and max included
const randomMinMax = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomPlusMinus = function(number) {
  let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  return number * plusOrMinus;
};

const incrementPoints = function() {
  points++;
  counter.innerHTML = points.toFixed(1);
  // cat.style.transform = 'rotate(' + (points * 10) + 'deg)';

  // transform scale: value only between 0 and 1!!!
  // cat.style.transform += 'scale(' + (1 / points) + ')';

  // achtung bei .style.transform –> wird immer nur eines genommen, ausser man addiert mit +=
  // cat.style.transform += 'blabla'

  if (points <= 20) {
    cat.style.transform = "translateY(" + points * -10 + "px)";
    cat.style.transform += "rotate(" + points * 5 * Math.random() + "deg)";
  } else {
    cat.style.transform = "rotate(" + points * 5 * Math.random() + "deg)";
  }

  if (points === 10) {
    background.classList.add("is-animating");
  } else if (points === 20) {
    background.classList.remove("is-animating");
    background.classList.add("is-animating-fast");
  } else if (points === 40) {
    background.classList.remove("is-animating-fast");
    background.classList.add("is-animating-even-faster");
  } else if (points === 80) {
    background.classList.remove("is-animating-even-faster");
    background.classList.add("is-animating-even-fasterer");
  }

};

const handleGoodies = function() {
  clicks++; // one more click

  // one out of 15 draws we get a goody
  if (randomMinMax(0, 5) === 0) {
    // only for debug. see dev-console to see when you hit it
    //console.log("goodie is now visibel");

    // the goody is in the middle randomly move it somewhere
    bag.style.transform =
      "translate(" +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vw, " +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vh)";

    // the bag is visible between 0.8s and 3s
    let visibelInMs = randomMinMax(800, 3000);
    console.log("visible for: ", visibelInMs);

    // set the timeout
    bagTimeOut = setTimeout(function() {
      bag.classList.add("is-hidden");
    }, visibelInMs);

    // show bag
    bag.classList.remove("is-hidden");
  }
};



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
  incrementPoints();
  handleGoodies(); // on each click we look if we deserve new goodies

};

// function called when bag is clicked
const baggy = function(e) {
  speed += 0.2;
  clearTimeout(bagTimeOut); // stop the timeout since we clicked before the timeout
  const bagContent = bag.innerHTML;
  bag.innerHTML = "+0.2 km pro Sekunde";

  // back to image of bag and hide bag
  // all this after 1.5s
  setTimeout(function() {
    bag.innerHTML = bagContent;
    bag.classList.add("is-hidden");
  }, 1500);

  perSecondCounter.innerHTML = speed.toFixed(1);
};

window.setInterval(function() {
  // console.log('i bims, der points: ', points)
  // console.log('i bims, der speed: ', speed)
  points += speed;
  counter.innerHTML = points.toFixed(1);
}, 1000);

cat.addEventListener("click", clicker);
bag.addEventListener("click", baggy);
