let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");

let homeScore = 0;
let guestScore = 0;

function homeAddOne() {
  homeScore += 1;
  homeCount.textContent = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  homeCount.textContent = homeScore;
}

function homeAddThree() {
  homeScore += 3;
  homeCount.textContent = homeScore;
}

function guestAddOne() {
  guestScore += 1;
  guestCount.textContent = guestScore;
}

function guestAddTwo() {
  guestScore += 2;
  guestCount.textContent = guestScore;
}

function guestAddThree() {
  guestScore += 3;
  guestCount.textContent = guestScore;
}

let reset = document.getElementById("reset");

function resetGame() {
  if (homeScore > guestScore) {
    document.getElementById("headingHome").style.color = "#4ade80";
    document.getElementById("headingGuest").style.color = "white";
  } else {
    document.getElementById("headingGuest").style.color = "#4ade80";
    document.getElementById("headingHome").style.color = "white";
  }

  homeScore = 0;
  guestScore = 0;
  homeCount.textContent = 0;
  guestCount.textContent = 0;
}
