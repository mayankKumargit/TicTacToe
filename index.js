console.log("Welcome to tic-tac toe")
let music = new Audio('music.mp3')
let audioTurn = new Audio('ting.mp3')
let myTurn = "X"
let gameOver = false

// function to change the turn
const changeTurn = () => {
    return myTurn === "X" ? "0" : "X"
}

// function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxtext");
    //console.log(boxText)
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        //console.log(e)
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) { 
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won"
            gameOver = true
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box")
//console.log(boxes)
/*
for (box of boxes)
{
    console.log(box)
}*/

Array.from(boxes).forEach(element => {
    //console.log(element)
    let boxText = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        if (boxText.innerText === '') {
            boxText.innerText = myTurn;
            myTurn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + myTurn
            }    
        }
    })
})

//music.play()

// ass onclick listener to reset button
let reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    let boxText = document.querySelectorAll(".boxtext")
    Array.from(boxText).forEach(element => {
        element.innerText = ""
    })
    myTurn = "X"
    gameOver = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + myTurn
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0"
})