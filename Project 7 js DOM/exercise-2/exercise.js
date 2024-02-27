// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

const firstBtn = document.body.children[2].children[4];
//console.log(document.body.children[2].children[4]);
const secondBtn = document.querySelector("#second-button");
console.log(secondBtn);

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

firstBtn.addEventListener("click", removeP);
document.body.children[2].children[6].addEventListener("click", blueBack);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const firstP = document.body.children[2].children[1];
const thirdP = document.body.children[2].children[3];
console.log(firstP);
console.log(thirdP);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function removeP(event) {
  //console.dir(event.target);
  thirdP.parentElement.removeChild(thirdP);
}

function blueBack(event) {
  //console.dir(event.target);
  //   firstP.style.backgroundColor = "Blue";
  firstP.className = "blueBackground";
}

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

// 5) Розв’яжіть (4) як шляхом зміни «вбудованих стилів», так і шляхом додавання класів CSS
// Примітка: спершу вам доведеться додати ці класи до файлу styles.css!
