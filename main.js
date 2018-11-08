const cat = document.getElementById("cat-img");
const counter = document.getElementById("counter");
const background = document.getElementById("background");
const perSecondCounter = document.getElementById("per-second-counter");

const goodie1 = document.getElementById("goodie1");
const goodie2 = document.getElementById("goodie2");
const goodie3 = document.getElementById("goodie3");
const goodie4 = document.getElementById("goodie4");


const goodieCounter1 = document.getElementById("goodie-counter1");
const goodieCounter2 = document.getElementById("goodie-counter2");
const goodieCounter3 = document.getElementById("goodie-counter3");
const goodieCounter4 = document.getElementById("goodie-counter4");


let points = 0;
let speed = 0;
let clicks = 0; // here we count the clicks – every 10th click there is a goodie1 coming
let goodie1TimeOut = null; // here we save the timer while the goodie1 is visible
let goodie2TimeOut = null; // here we save the timer while the goodie2 is visible
let goodie3TimeOut = null; // here we save the timer while the goodie3 is visible
let goodie4TimeOut = null; // here we save the timer while the goodie4 is visible

let goodie1ClickCount = 0;
let goodie2ClickCount = 0;
let goodie3ClickCount = 0;
let goodie4ClickCount = 0;

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
  if (points === 5.0) {
    background.classList.add("is-animating");
  } else if (points === 15.0) {
    background.classList.remove("is-animating");
    background.classList.add("is-animating-fast");
  } else if (points === 40.0) {
    background.classList.remove("is-animating-fast");
    background.classList.add("is-animating-even-faster");
  } else if (points === 80.0) {
    background.classList.remove("is-animating-even-faster");
    background.classList.add("is-animating-even-fasterer");
  }

};

//background is animating faster when goodies are collected
  if (speed === 0.2) {
    background.classList.add("is-animating");
  } else if (speed === 3.0) {
    background.classList.remove("is-animating");
    background.classList.add("is-animating-fast");
  } else if (speed === 5.0) {
    background.classList.remove("is-animating-fast");
    background.classList.add("is-animating-even-faster");
  } else if (speed === 8.0) {
    background.classList.remove("is-animating-even-faster");
    background.classList.add("is-animating-even-fasterer");
  }


  //GOODIES
const handleGoodies = function() {
  clicks++; // one more click


  //GOODIE1
  // one out of 8 draws we get a goody
  if (randomMinMax(0, 8) === 0) {
    // only for debug. see dev-console to see when you hit it
    //console.log("goodie is now visibel");

    // the goodies are in the middle randomly move it somewhere
    goodie1.style.transform =
      "translate(" +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vw, " +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vh)";

    // the goodies are visible between 1s and 4s
    let visibelInMs = randomMinMax(1000, 4000);
    console.log("visible for: ", visibelInMs);

    // set the timeout
    goodie1TimeOut = setTimeout(function() {
      goodie1.classList.add("is-hidden");
    }, visibelInMs);

    // show goodie1
    goodie1.classList.remove("is-hidden");
  }


  //GOODIE2
  // one out of 15 draws we get a goody
  if (randomMinMax(0, 18) === 0) {
    // only for debug. see dev-console to see when you hit it
    //console.log("goodie is now visibel");

    // the goodie2 is in the middle randomly move it somewhere
    goodie2.style.transform =
      "translate(" +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vw, " +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vh)";

    // the goodie2 is visible between 1s and 4s
    let visibelInMs = randomMinMax(1000, 4000);
    console.log("visible for: ", visibelInMs);

    // set the timeout
    goodie2TimeOut = setTimeout(function() {
      goodie2.classList.add("is-hidden");
    }, visibelInMs);

    // show goodie2
    goodie2.classList.remove("is-hidden");
  }


  //GOODIE3
  // one out of 20 draws we get a goody
  if (randomMinMax(0, 28) === 0) {
    // only for debug. see dev-console to see when you hit it
    //console.log("goodie is now visibel");

    // the goodie3 is in the middle randomly move it somewhere
    goodie3.style.transform =
      "translate(" +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vw, " +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vh)";

    // the goodie3 is visible between 1s and 4s
    let visibelInMs = randomMinMax(1000, 4000);
    console.log("visible for: ", visibelInMs);

    // set the timeout
    goodie3TimeOut = setTimeout(function() {
      goodie3.classList.add("is-hidden");
    }, visibelInMs);

    // show goodie3
    goodie3.classList.remove("is-hidden");
  }

  //GOODIE4
  // one out of 25 draws we get a goody
  if (randomMinMax(0, 35) === 0) {
    // only for debug. see dev-console to see when you hit it
    //console.log("goodie is now visibel");

    // the goodie4 is in the middle randomly move it somewhere
    goodie4.style.transform =
      "translate(" +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vw, " +
      randomPlusMinus(randomMinMax(20, 45)) +
      "vh)";

    // the goodie4 is visible between 1s and 4s
    let visibelInMs = randomMinMax(1000, 4000);
    console.log("visible for: ", visibelInMs);

    // set the timeout
    goodie4TimeOut = setTimeout(function() {
      goodie4.classList.add("is-hidden");
    }, visibelInMs);

    // show goodie4
    goodie4.classList.remove("is-hidden");
  }

};


const clicker = function(e) {
  // Increment points on click by 1
  incrementPoints();
  handleGoodies(); // on each click we look if we deserve new goodies

};

// function called when goodie1 is clicked
const goodie1Click = function(e) {
  goodie1ClickCount += 1;

  goodieCounter1.innerHTML = goodie1ClickCount+"×";


  speed += 0.2;
  clearTimeout(goodie1TimeOut); // stop the timeout since we clicked before the timeout
  const goodie1Content = goodie1.innerHTML;
  goodie1.innerHTML = "+0.2 km pro Sekunde";



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
  goodie2ClickCount += 1;

  goodieCounter2.innerHTML = goodie2ClickCount+"×";

  speed += 1;
  clearTimeout(goodie2TimeOut); // stop the timeout since we clicked before the timeout
  const goodie2Content = goodie2.innerHTML;
  goodie2.innerHTML = "+1 km pro Sekunde";

  // back to image of goodie2 and hide goodie2
  // all this after 1.5s
  setTimeout(function() {
    goodie2.innerHTML = goodie2Content;
    goodie2.classList.add("is-hidden");
  }, 1500);

  perSecondCounter.innerHTML = speed.toFixed(1);
};

// function called when goodie3 is clicked
const goodie3Click = function(e) {
  goodie3ClickCount += 1;

  goodieCounter3.innerHTML = goodie3ClickCount+"×";

  speed += 3;
  clearTimeout(goodie3TimeOut); // stop the timeout since we clicked before the timeout
  const goodie3Content = goodie3.innerHTML;
  goodie3.innerHTML = "+3 km pro Sekunde";

  // back to image of goodie3 and hide goodie3
  // all this after 1.5s
  setTimeout(function() {
    goodie3.innerHTML = goodie3Content;
    goodie3.classList.add("is-hidden");
  }, 1500);

  perSecondCounter.innerHTML = speed.toFixed(1);
};


// function called when goodie4 is clicked
const goodie4Click = function(e) {
  goodie4ClickCount += 1;

  goodieCounter4.innerHTML = goodie4ClickCount+"×";

  speed += 8;
  clearTimeout(goodie4TimeOut); // stop the timeout since we clicked before the timeout
  const goodie4Content = goodie4.innerHTML;
  goodie4.innerHTML = "+8 km pro Sekunde";

  // back to image of goodie4 and hide goodie4
  // all this after 1.5s
  setTimeout(function() {
    goodie4.innerHTML = goodie4Content;
    goodie4.classList.add("is-hidden");
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
goodie3.addEventListener("click", goodie3Click);
goodie4.addEventListener("click", goodie4Click);
