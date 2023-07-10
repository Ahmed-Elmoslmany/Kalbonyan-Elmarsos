// Task 1
const randomNumber1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber1 > 0.7) alert("Wow! nice");

// Task 2

const hobbies = ["Coding", "Quran", "History"];
for (const i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

for (const hobby in hobbies) {
  console.log(hobby);
}

// Task 3

for (const i = hobbies.length; i >= 0; i--) {
  console.log(hobbies[i]);
}

// Task 4
const randomNumber2 = Math.random();
if (
  (randomNumber1 > 0.7 && randomNumber2 > 0.7) ||
  randomNumber1 < 0.2 ||
  randomNumber2 < 0.2
)
  alert("Wow! great");
