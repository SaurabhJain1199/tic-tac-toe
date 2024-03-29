let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turn0 = true;
  enablebox();
  msgcontainer.classList.add("hide")
};
const disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations! winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        disablebox();
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

newbtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
