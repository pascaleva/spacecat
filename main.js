const cat = document.getElementById("cat-img");
const counter = document.getElementById("counter");
const goodie1 = document.getElementById("goodie1");
const goodie2 = document.getElementById("goodie2");
const background = document.getElementById("background");
const perSecondCounter = document.getElementById("per-second-counter");
let points = 0;
let speed = 0; //add 0.2km/s
let clicks = 0; // here we count the clicks – every 10th click there is a goodie1 (bag) coming
let goodie1TimeOut = null; // here we save the timer while the goodie1 is visible
let goodie2TimeOut = null; // here we save the timer while the goodie2 is visible


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


  if (points <= 20) {
    cat.style.transform = "translateY(" + points * -10 + "px)";
    cat.style.transform += "rotate(" + points * 0.2 * Math.random() + "deg)";
  } else {
    cat.style.transform = "rotate(" + points * 0.2 * Math.random() + "deg)";
  }

//background is animating when cat is clicked x times
  if (points === 10.0) {
    background.classList.add("is-animating");
  } else if (points === 20.0) {
    background.classList.remove("is-animating");
    background.classList.add("is-animating-fast");
  } else if (points === 40.0) {
    background.classList.remove("is-animating-fast");
    background.classList.add("is-animating-even-faster");
  } else if (points === 150.0) {
    background.classList.remove("is-animating-even-faster");
    background.classList.add("is-animating-even-fasterer");
  }

};

const handleGoodies = function() {
  clicks++; // one more click

  // one out of 8 draws we get a goody
  if (randomMinMax(0, 8) === 0) {
    // only for debug. see dev-console to see when you hit it
    //console.log("goodie is now visibel");

    // the goodie1 is in the middle randomly move it somewhere
    goodie1.style.transform =
      "translate(" +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vw, " +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vh)";

    // the goodie1 is visible between 0.8s and 3s
    let visibelInMs = randomMinMax(1000, 4000);
    console.log("visible for: ", visibelInMs);

    // set the timeout
    goodie1TimeOut = setTimeout(function() {
      goodie1.classList.add("is-hidden");
    }, visibelInMs);

    // show goodie1
    goodie1.classList.remove("is-hidden");
  }

  // one out of 20 draws we get a goody
  if (randomMinMax(0, 20) === 0) {
    // only for debug. see dev-console to see when you hit it
    //console.log("goodie is now visibel");

    // the goodie2 is in the middle randomly move it somewhere
    goodie2.style.transform =
      "translate(" +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vw, " +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vh)";

    // the goodie2 is visible between 0.8s and 3s
    let visibelInMs = randomMinMax(1000, 4000);
    console.log("visible for: ", visibelInMs);

    // set the timeout
    goodie2TimeOut = setTimeout(function() {
      goodie2.classList.add("is-hidden");
    }, visibelInMs);

    // show goodie1
    goodie2.classList.remove("is-hidden");
  }

};


const clicker = function(e) {
  // Increment points on click by 1
  incrementPoints();
  handleGoodies(); // on each click we look if we deserve new goodies

};

// function called when goodie1 is clicked
const goodie1Click = function(e) {
  speed += 0.2;
  clearTimeout(goodie1TimeOut); // stop the timeout since we clicked before the timeout
  const goodie1Content = goodie1.innerHTML;
  goodie1.innerHTML = "+0.2 km pro Sekunde";

//background is animating faster when goodies are collected too
  if (speed === 0.2) {
    background.classList.add("is-animating");
  } else if (speed === 0.6) {
    background.classList.remove("is-animating");
    background.classList.add("is-animating-fast");
  } else if (speed === 0.8) {
    background.classList.remove("is-animating-fast");
    background.classList.add("is-animating-even-faster");
  } else if (speed === 1.6) {
    background.classList.remove("is-animating-even-faster");
    background.classList.add("is-animating-even-fasterer");
  }

  // back to image of goodie1 and hide goodie1
  // all this after 1.5s
  setTimeout(function() {
    goodie1.innerHTML = goodie1Content;
    goodie1.classList.add("is-hidden");
  }, 1500);

  perSecondCounter.innerHTML = speed.toFixed(1);
};


// function called when goodie2 is clicked
const goodie2Click = function(e) {
  speed += 0.3;
  clearTimeout(goodie2TimeOut); // stop the timeout since we clicked before the timeout
  const goodie2Content = goodie2.innerHTML;
  goodie2.innerHTML = "+0.3 km pro Sekunde";

  // back to image of goodie2 and hide goodie2
  // all this after 1.5s
  setTimeout(function() {
    goodie2.innerHTML = goodie2Content;
    goodie2.classList.add("is-hidden");
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
goodie1.addEventListener("click", goodie1Click);
goodie2.addEventListener("click", goodie2Click);
