const result = document.querySelector('#result')
const score = document.querySelector('#score')

const choices = ['Rock', 'Paper', 'Scissor']
let computerScore = 0
let humanScore = 0
let draw = 0

function playGame(){
  function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3)
    return choices[randomNumber]
  }

  function getHumanChoice(){
    const humanNumber = prompt('Digite 0(Rock), 1(Paper) ou 2(Scissor)')
    return choices[humanNumber]
  }

  function playRound(computerPlayer, humanPlayer){
    if(computerPlayer === 'Rock' && humanPlayer === 'Rock'){
      alert('Tie: '+`${computerPlayer} - ${humanPlayer}`)
      draw++
    }
    else if(computerPlayer === 'Rock' && humanPlayer === 'Paper'){
      alert('Paper Win: '+`${computerPlayer} - ${humanPlayer}`)
      humanScore++
    }
    else if(computerPlayer === 'Rock' && humanPlayer === 'Scissor'){
      alert('Rock Win: '+`${computerPlayer} - ${humanPlayer}`)
      computerScore++
    }
    else if(computerPlayer === 'Paper' && humanPlayer === 'Paper'){
      alert('Tie: '+`${computerPlayer} - ${humanPlayer}`)
      draw++
    }
    else if(computerPlayer === 'Paper' && humanPlayer === 'Rock'){
      alert('Paper Win: '+`${computerPlayer} - ${humanPlayer}`)
      humanScore++
    }
    else if(computerPlayer === 'Paper' && humanPlayer === 'Rock'){
      alert('Rock Win: '+`${computerPlayer} - ${humanPlayer}`)
      computerScore++
    }
    else if(computerPlayer === 'Scissor' && humanPlayer === 'Scissor'){
      alert('Tie: '+`${computerPlayer} - ${humanPlayer}`)
      draw++
    }
    else if(computerPlayer === 'Scissor' && humanPlayer === 'Rock'){
      alert('Paper Win: '+`${computerPlayer} - ${humanPlayer}`)
      humanScore++
    }
    else if(computerPlayer === 'Scissor' && humanPlayer === 'Paper'){
      alert('Rock Win: '+`${computerPlayer} - ${humanPlayer}`)
      computerScore++
    }

    score.innerHTML = `Computer: ${computerScore} - Human: ${humanScore} - Draw: ${draw}`
  }

  for(let i = 1; i <= 5; i++){
    playRound(getComputerChoice(), getHumanChoice())
  }
}

playGame()





