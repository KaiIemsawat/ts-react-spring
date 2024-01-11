let sportArr: string[] = ["Golf", "Cricket", "Tennis", "Swiming"];

for (let i = 0; i < sportArr.length; i++) {
    console.log(sportArr[i]);
}
console.log("");
for (let tempSport of sportArr) {
    console.log(tempSport);
}
console.log("");
for (let tempSport of sportArr) {
    if (tempSport === "Tennis") {
        console.log(tempSport + " : Not too bad");
    } else {
        console.log(tempSport);
    }
}
