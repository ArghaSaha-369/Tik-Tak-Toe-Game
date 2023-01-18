//Constants & Variables
let refBtn = document.querySelectorAll(".option");
let popupBtn = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let notification = document.getElementById("notify");

//Winning Array
let winArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//Player X plays first
let turnX = true;
let count = 0;

//Disable Buttons
const disableBtns = () => {
    refBtn.forEach((element)=>{element.disabled = true});
    popupBtn.classList.remove("hide");
}

//Enable Buttons
const enableBtns = () => {
    refBtn.forEach((element) =>{
        element.innerText = "";
        element.disabled = false;
    })
    popupBtn.classList.add("hide");
}

//New game
newgameBtn.addEventListener("click", ()=>{
    count = 0;
    enableBtns();
})

restartBtn.addEventListener("click", ()=>{
    count = 0;
    enableBtns();
})

//Win Function
const winFunction = (letter) => {
    disableBtns();
    if(letter == "X"){
        notification.innerHTML = "X WINS";
    }
    else {
        notification.innerHTML = "O WINS";
    }
}

//Draw Function
const drawFunction = () => {
    disableBtns();
    notification.innerHTML = "It's a Draw";
}

//Winning Logic
const winCheck = () => {
    for(let i of winArr){
        let [element1, element2, element3] = [refBtn[i[0]].innerText, refBtn[i[1]].innerText, refBtn[i[2]].innerText];

        if ((element1 != "") && (element2 != "") && (element3 != "")){
            if ((element1 == element2) && (element2 == element3)){
                winFunction(element1);
            }
        }
    }
}

//Display X or O on click
refBtn.forEach((element) => {
    element.addEventListener("click", ()=> {
        if (turnX) {
            turnX = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else{
            turnX = true;
            element.innerText = "O";
            element.disabled = true;
        }
        //Count increment
        count += 1;
        if (count == 9){
            //Draw Match
            drawFunction();
        }
        //Win Check in every click
        winCheck();
    })
})

//Enable buttons & disable popup on page load
window.onload = enableBtns;
