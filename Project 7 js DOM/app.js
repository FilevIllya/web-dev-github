let paragraphElement = document.body.firstElementChild;

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
}

paragraphElement.addEventListener("click", changeParagraphText);

//input ivent
let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  //let enteredText = inputElement.value; //text inside <input>
  let enteredText = event.target.value; // - same;
  // let enteredText = event.data; -diferent
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
