var sportsOne = ["Golf", "Cricket", "Tennis", "Swiming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
console.log("");
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    if (tempSport === "Tennis") {
        console.log(tempSport + " : Not too bad");
    }
    else {
        console.log(tempSport);
    }
}
