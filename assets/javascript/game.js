//document.onkeyup = function(event) {
    
//Variables=============================== 
var ranNum = getRandomArbitrary()
var gemNumArray = []
var theirNum = 0
var wins = 0
var loses = 0

//Functions===============================   
//Create random number to match
function getRandomArbitrary() {
return Math.floor(Math.random() * (120 - 19)) + 19;
}
//Prints random 
$("#number").text(ranNum);
console.log(ranNum)

//Create random numbers for the gems
function getRanGemNum() {
    for(var i = 1; i<=4; i++) {
    var random = Math.floor(Math.random() * (12 - 1)) + 1;
    gemNumArray.push(random)
}
console.log(random)
} 
console.log(gemNumArray)
//Function to reset
function reset() {
    theirNum = 0
    $("#result").text(theirNum)
    ranNum = Math.floor(Math.random() * (120 - 19)) + 19
    $("#number").text(ranNum);
    gemNumArray = []
    getRanGemNum()
}

getRanGemNum()
getRandomArbitrary()
//Main Process==============================   
$("#button-1").on("click", function() {

if (ranNum === theirNum) {
    alert("winner")
    wins++
    $("#win").text(wins)
    reset()
}
else if (ranNum > theirNum) {
    theirNum = gemNumArray[0] + theirNum
    $("#result").text(theirNum);
    console.log(theirNum)
}
else if (theirNum > ranNum) {
    alert("loser")
    loses++
    $("#loss").text(loses)
    reset()
}
})
$("#button-2").on("click", function() {

if (ranNum === theirNum) {
    alert("winner")
    wins++
    $("#win").text(wins)
    reset()
}
else if (ranNum > theirNum) {
    theirNum = gemNumArray[1] + theirNum
    $("#result").text(theirNum);
    console.log(theirNum)
}
else if (theirNum > ranNum) {
    alert("loser")
    loses++
    $("#loss").text(loses)
    reset()
}
})
$("#button-3").on("click", function() {
    if (ranNum === theirNum) {
    alert("winner")
    wins++
    $("#win").text(wins)
    reset()
}
else if (ranNum > theirNum) {
    theirNum = gemNumArray[2] + theirNum
    $("#result").text(theirNum);
    console.log(theirNum)
}
else if (theirNum > ranNum) {
    alert("loser")
    loses++
    $("#loss").text(loses)
    reset()
}
})
$("#button-4").on("click", function() { 
    if (ranNum === theirNum) {
    alert("winner")
    wins++
    $("#win").text(wins)
    reset()
}
else if (ranNum > theirNum) {
    theirNum = gemNumArray[3] + theirNum
    $("#result").text(theirNum);
    console.log(theirNum)
}
else if (theirNum > ranNum) {
    alert("loser")
    loses++
    $("#loss").text(loses)
    reset()
}
})
$("#button-reset").on("click", function() {
reset()
})


//  $("#random-number").text(ranArray.join(' '));



  