//1
let h1Dril = document.body.children[0];
console.log(h1Dril);
//2

let parentBody = h1Dril.parentElement;
console.log(parentBody);

//2.bonus

let sibling = h1Dril.nextElementSibling;
console.log(sibling);

//3

let h1IDFound = document.getElementById("H1-element");
console.log(h1IDFound);

//4
let pNew = document.querySelector("#pNew");
console.log(pNew);

//5
pNew.textContent = "Its my text, not your!";
