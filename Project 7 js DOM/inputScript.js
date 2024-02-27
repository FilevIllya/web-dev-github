const changeNum = document.querySelector("#changingNumber");
const inputElement = document.querySelector("#inputBox input");

//console.log(changeNum);

function checkInputLength(event) {
  let enteredText = event.target.value;
  // console.log(str);
  // console.log(str.length);
  changeNum.textContent = 60 - enteredText.length;
}

inputElement.addEventListener("input", checkInputLength);

// function checkInputLength(event) {
//   let enteredText = event.target.value;
//   // console.log(str);
//   // console.log(str.length);
//   changeNum.textContent = enteredText.length;
// }
