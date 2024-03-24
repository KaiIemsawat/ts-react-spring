"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
let theCoaches = [];
// Same as below
// let theCoaches = [] as Coach[];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
for (let coach of theCoaches) {
    console.log(coach.getDailyWorkout());
}
