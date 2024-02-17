//1
let courseName = "Headlight School Unity";
let coursePrice = 7000;
let goals = ["Learn to work with Unity", "Learn basic C#", "Make your game"];
//2
alert(courseName);
alert(coursePrice);
alert(goals);
//3
let courseInfo = {
  courseName,
  coursePrice,
  goals,
};

alert(courseInfo.courseName);
alert(courseInfo.coursePrice);
alert(courseInfo.goals);

//4

alert(courseInfo.goals[1]);

//5

function getListItem(array, index) {
  return (arrayElement = array[index]);
}
//6

let result = getListItem(courseInfo.goals, 1);
alert(result);

//
