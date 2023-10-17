

// User Input 

let playGame = confirm("Shall we play rock, paper, or scissors?")

if (playGame) {
    // play the game 
    let playerChoice = prompt("Please enter rock, paper, or scissors")
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLocaleLowerCase()

        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1)

            let computer =
                computerChoice === 1 ? "rock" :
                    computerChoice === 2 ? "paper" : "scissors"

            let result = playerOne === computer ? "Tie Game!"
                : playerOne === "rock" && computer === "paper" ?
                    `palyerOne ${playerOne}\n
                computer ${computer}\n
                computer wins!`
                    : playerOne === "paper" && computer === "scissors" ?
                        `palyerOne ${playerOne}\n
                computer ${computer}\n
                computer wins!`
                        : playerOne === "scissors" && computer === "rock" ?
                            `palyerOne ${playerOne}\n
                computer ${computer}\n
                computer wins!`
                            : `palyerOne ${playerOne}\n
                computer ${computer}\n
                palyerOne wins!`

            alert(result)
            let playAgin = confirm("Play again?")
            playAgin ? location.reload() : alert("Ok thanks for playing")
        }
        else {
            let tryAgain = confirm("Your input is wrong!, do you want to try again?")
            tryAgain ? location.reload() : alert("Ok, maybe next time")
        }

    } else if (playerChoice === "") {

        let tryAgain = confirm("To play you must enter rock, paper, or scissors, do you want to try again?")
        tryAgain ? location.reload() : alert("Ok, maybe next time")
    } else {
        alert("I guess you chanaged you mind, maybe next time!")
    }

} else {
    alert("Ok, maybe next time!")
}