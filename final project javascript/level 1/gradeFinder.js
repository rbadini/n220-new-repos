// Grading scale array
const gradingScale = ["A", 90, 100, "B", 80, 89, "C", 70, 79, "D", 60, 69, "F", 59, "lower"];
// Reference to the tbody element where rows will be added
const tbody = document.getElementById('tbody');
// Array to keep track of the created rows
var rows = [];
// Maximum grade value
const maxGrade = 500;

// Function to calculate the grade
function calculate() {
  const grade = parseInt(document.getElementById("grade").value);
  if (!requireNumber(grade, "grade")) return;
  const ulList = document.getElementById("ul-list");
  const percentage = grade / maxGrade * 100.0;

  // Corrected to use string literals
  const inputString = `<li>Input: ${grade}</li>`;
  const resultString = `<li>Result: Grade Average: ${percentage.toFixed(2)}%</li>`;
  ulList.innerHTML = inputString + resultString;

  createGradeTable(percentage);
}

// Function to create and update the grade table
function createGradeTable(percentage) {
  // Clear existing rows from the table
  rows.forEach(row => tbody.removeChild(row));
  rows = [];

  // Create new rows based on the grading scale
  for (let index = 0; index < gradingScale.length; index += 3) {
    const grade = gradingScale[index];
    const min = gradingScale[index + 1];
    const max = gradingScale[index + 2] === "lower" ? gradingScale[index + 1] : gradingScale[index + 2];

    const row = document.createElement('tr');
    rows.push(row);
    const gradeCell = document.createElement('td');
    gradeCell.textContent = grade;
    const scaleCell = document.createElement('td');
    scaleCell.textContent = `${min}-${max === "lower" ? "" : max}`;
    row.appendChild(gradeCell);
    row.appendChild(scaleCell);
    tbody.appendChild(row);

    // Apply the highlight if the percentage is within the current grade range
    if ((max === "lower" && percentage <= min) || (percentage >= min && percentage <= max)) {
      row.style.background = "crimson";
    }
  }
}

// Function to validate the number input
function requireNumber(num, name) {
  if (isNaN(num) || num < 0 || num > maxGrade) {
    alert(`${name} input is invalid. Enter a number between 0 and ${maxGrade}.`);
    return false;
  }
  return true;
}
