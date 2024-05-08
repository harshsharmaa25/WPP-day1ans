var today = new Date();
var day = today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];

console.log("Toady is :"+daylist[day]+".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
document.querySelector (".time").innerHTML = "Current Time: " + hour + prepand + " : " + minute + " : " + second;
// console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second);


console.log(moment().format("MMM Do YY"));
