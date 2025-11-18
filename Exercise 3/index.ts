// #1
function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(fullName("Ibrahim", "Buthul"));

// #2
function registerUser(username: string, isAdmin?: boolean, language: string = "en") {
  console.log("Username:", username);
  console.log("Is Admin:", isAdmin);
  console.log("Language:", language);
}

registerUser("Ibrahim", true, "sw");


// #3
function average(...scores: number[]): number {
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

console.log(average(3, 5)); 
