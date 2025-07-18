let homeScore = 0
let guestScore = 0

let homeScoreBoard = document.getElementById("home-score")
let guestScoreBoard = document.getElementById("guest-score")

function updateScore(number, id) {
  if(id === "home"){
    homeScore += number
    console.log(homeScore)
    homeScoreBoard.textContent = homeScore
  }else if (id === "guest"){
    guestScore += number
    guestScoreBoard.textContent = guestScore

  }
}