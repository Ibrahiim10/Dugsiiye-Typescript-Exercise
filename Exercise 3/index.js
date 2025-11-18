// #1
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Ibrahim", "Buthul"));
// #2
function registerUser(username, isAdmin, language) {
    if (language === void 0) { language = "en"; }
    console.log("Username:", username);
    console.log("Is Admin:", isAdmin);
    console.log("Language:", language);
}
registerUser("Ibrahim", true, "sw");
// #3
function average() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(average(3, 5));
