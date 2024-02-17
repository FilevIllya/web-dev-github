// let greetingText = "Hi, my name is Max";
// let userage = 32;
// alert(greetingText);
// alert(greetingText);
// greetingText = "Hi, my name isIllya";
// alert(greetingText);
// alert(userage);

let age = 32;
let userName = "Illiya";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  plase: "New York",
  salary: 50000,
};

// alert(hobbies[1]);
// alert(job.plase);

let totalAdultsYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultsYears = calculateAdultYears(age);
console.log(totalAdultsYears);

age = 45;
totalAdultsYears = calculateAdultYears(age);
console.log(totalAdultsYears);

//
let person = {
  name: "Max",
  greet() {
    console.log("Hello!");
  },
};

person.greet();

//
