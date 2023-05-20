var rules = document.getElementById("rules")
var step1 = document.getElementById("step1")
var step2 = document.getElementById("step2")
var step3 = document.getElementById("step3")
window.onload = function(){
    document.body.classList.remove('hidden');
    rules.classList.add('hidden')
    step2.classList.add('hidden')
    step3.classList.add('hidden')
}

function openRules(){
    rules.classList.remove('hidden');
}

function closeRules(){
    rules.classList.add('hidden')
}

const scissors = document.querySelector("#Scissors");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const youPickedDiv = document.querySelector(".youPicked");
const theyPickedDiv = document.querySelector('.theyPicked');

paper.addEventListener("click", function() {
  playRound(paper);
});

scissors.addEventListener("click", function() {
  playRound(scissors);
});

rock.addEventListener("click", function() {
  playRound(rock);
});

var randomIndex;
const plays = document.querySelectorAll('.play');

function playRound(element) {
  randomIndex = Math.floor(Math.random() * plays.length);
  const randomPlayDiv = plays[randomIndex].cloneNode(true);
  const theyPickedDivs = document.querySelectorAll('.theyPicked');
  theyPickedDivs.forEach(function(div) {
    div.innerHTML = "";
    const clonedPlayDiv = randomPlayDiv.cloneNode(true);
    div.appendChild(clonedPlayDiv);
    setRelativePosition(clonedPlayDiv);
  });

  const clonedDiv = element.cloneNode(true);
  const youPickedDivs = document.querySelectorAll('.youPicked');
  youPickedDivs.forEach(function(div) {
    div.innerHTML = ""
    const clonedPlayDiv = clonedDiv.cloneNode(true);
    div.appendChild(clonedPlayDiv);
    setRelativePosition(clonedPlayDiv);
  })

  Animate()
  Comparing(element , randomIndex);
}

function setRelativePosition(element) {
  element.style.position = 'relative'
  element.style.left = '0'
  element.style.top = '0'
}

function Animate(){
  step1.classList.add('hidden')
  step2.classList.remove('hidden')
  step2.style.opacity = 0;
  step2.style.scale = 0.8
  // Trigger reflow to apply the initial opacity and scale change
  step2.getBoundingClientRect(); 
  step2.style.transition = 'opacity 0.3s ease-in'
  step2.style.transition = 'scale 0.3s'
  step2.style.opacity = 1
  step2.style.scale = 1
  
  setTimeout(function() {
    step2.classList.add('hidden')
    step3.classList.remove('hidden')
    step3.style.opacity = 0.3
    step3.getBoundingClientRect()
    step3.style.transition = 'opacity 0.3s ease-in'
    step3.style.opacity = 1
  }, 1500)
  
}

function Comparing(element , randomIndex){
  const elementIndex = Array.from(plays).indexOf(element);
  var score = document.getElementById("score")
  var result = document.querySelector(".result");
  if (
    (elementIndex === 0 && randomIndex === 2) ||
    (elementIndex === 1 && randomIndex === 0) ||
    (elementIndex === 2 && randomIndex === 1)
    ) {
      console.log("You won");
      setTimeout(function() {
        score.innerHTML = parseInt(score.innerHTML) + 1;
        }, 1500)  
    result.innerHTML = "YOU WIN";
  } else if (
    (elementIndex === 0 && randomIndex === 1) ||
    (elementIndex === 1 && randomIndex === 2) ||
    (elementIndex === 2 && randomIndex === 0)
    ) {
      console.log("You lost")
      setTimeout(function() {
      score.innerHTML = Math.max(parseInt(score.innerHTML) - 1, 0);
      }, 1500)
      result.innerHTML = "YOU LOST"
    } else {
      console.log("Draw")
      result.innerHTML = "DRAW"
    }
  }


  function playAgain(){
    step1.classList.remove('hidden')
    step3.classList.add('hidden')
  }