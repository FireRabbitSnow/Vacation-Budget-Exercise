var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function (){ //this is a function
  var totalBudget= Number(prompt("What is your total budget for this trip? "));
   var accomodation= Number(prompt("What are your accomodation costs"));
   var numDays= Number(prompt("how many days is this trip?"));

   calculateDailyBudget(totalBudget, accomodation, numDays);
 };

 var calculateDailyBudget= function (totalBudget, accomodation, numDays) {
   var daily = ((totalBudget - accomodation) / numDays).toFixed(2);
   dailyBudget.innetText = `You can spend $${daily} on food and fun`;

 };

 tripInfoButton.addEventListener("click", tripInfo);
