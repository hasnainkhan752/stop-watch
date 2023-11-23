// console.log("HELLO WORLD 1")


// setTimeout(function () {
//     console.log("HELLO WORLD 2") //
// }, 5000)




// console.log("HELLO WORLD 1")

// setTimeout(function () {
//     console.log("function call ")
// })

// console.log("HELLO WORLD 3")

// setInterval(function () {
//     console.log("function call")
// }, 2000)




// var counter = 1
// var interval = setInterval(function () {
//     counter++
//     console.log("function call")
//     console.log(counter)
//     if (counter === 10) {
//         clearInterval(interval)
//     }


// }, 1000)





//stop watch


var minsElement = document.getElementById("minElement")
var secsElement = document.getElementById("secElement")
var msecsElement = document.getElementById("msecElement")
var startBtn = document.getElementById("startBtn")
var stopBtn = document.getElementById("stopBtn")
var btn = document.querySelector(".btn")


var min = 0
var sec = 0
var msec = 0


var interval;

function time(){
    console.log(msec++)
    msecsElement.innerHTML = msec
if (msec >=100){
    sec++
    secsElement.innerHTML = sec
    msec = 0
}else if(sec >= 60){
    min++
    minsElement.innerHTML = min
    sec = 0
}

}


function stoptime(){
    clearInterval(interval)
    startBtn.style.display ="block"
    //startBtn.style.display ="flex"
btn.style.display ="flex"
}


function reset(){
    clearInterval(interval)
msec = 0
sec = 0
min = 0
msecsElement.innerHTML = "00"
secsElement.innerHTML = "00"
minsElement.innerHTML = "00"

}



function startTime(){

interval = setInterval(time, 10)
startBtn.style.display ="none"

// (function(){
//     msec++
//     msecsElement.innerHTML = msec
// }, 10)


    //console.log("startTime()")
}