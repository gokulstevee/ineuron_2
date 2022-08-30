const prompt = require("prompt-sync")();

const marks = prompt("Enter the mark");

function grade(marks) {
  marks = Number(marks);

  switch (true) {
    case 90 <= marks && marks <= 100:
      console.log("S grade");
      break;
    case 80 <= marks && marks <= 90:
      console.log("A grade");
      break;
    case 70 <= marks && marks <= 80:
      console.log("B grade");
      break;
    case 60 <= marks && marks <= 70:
      console.log("C grade");
      break;
    case 50 <= marks && marks <= 60:
      console.log("D grade");
      break;
    case 40 <= marks && marks <= 50:
      console.log("E grade");
      break;
    case 0 <= marks && marks <= 40:
      console.log("Student has Failed");
      break;
    default:
      console.log("Invalid Marks");
      break;
  }
}

grade(marks);
