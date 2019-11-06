const nameA = "Alfa";
const nameB = "Beta";
const nameCompared = nameA === nameB;

console.log(nameA);
console.log(nameB);
console.log(nameCompared);

// Feel free to have some experiments with comparisons

const ageA = 18;
const ageB = 24;

if (ageA > ageB) {
  console.log("...");
} else if (ageA < ageB) {
  console.log("...");
} else {
  console.log("...");
}

// Feel free to have some experiments with comparisons

const personA = {
  name: "Alfa",
  age: 18
};

const personB = {
  name: "Betty",
  age: 24
};

switch (personA.age > personB.age) {
  case true:
    console.log("...");
    break;

  case false:
    console.log("...");
    break;

  default:
    console.log("...");
}

// Feel free to have some experiments with comparisons
