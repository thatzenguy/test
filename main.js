var gameData = {
    points: 0,
    pointsPerClick: 1,
    pointsPerClickCost: 15
  }

function addPoints() {
    gameData.points += gameData.pointsPerClick
    document.getElementById("pointsGotten").innerHTML = gameData.points + " Points"
}

function buyUpgrade() {
    if (gameData.points >= gameData.pointsPerClickCost) {
        gameData.points -= gameData.pointsPerClickCost
        gameData.pointsPerClick = gameData.pointsPerClick * 1.1 + 5
        gameData.pointsPerClickCost *= 1.2
        document.getElementById("pointsGotten").innerHTML = gameData.points + " Points"
        document.getElementById("pointsPerClick").innerHTML = gameData.pointsPerClick + " Points Per Click"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Points Per Click"
    }
}