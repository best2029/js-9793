function upScore(upDownScore){
    const scoreId = `score${upDownScore}`
    const scoreElment = document.getElementById(scoreId)

    let score = parseInt(scoreElment.textContent)

    scoreElment.textContent = ++score
}

function downScore(upDownScore){
    const scoreId = `score${upDownScore}`
    const scoreElment = document.getElementById(scoreId)

    let score = parseInt(scoreElment.textContent)

   if(score > 0){
    scoreElment.textContent = --score
   }else{
    alert("Telefona Bakma Sayısı Eksiye İndirelemez")
   }
}

