// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

function  increment () {
    console.log("The button was clicked")
}


function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}


countdown()


function num() {
    console.log(42)
}

num()


let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapTime() {

    let lapTime = lap1 + lap2 +lap3
    console.log(lapTime)
}

lapTime()

let lapsCompleted = 0 

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
    
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)

   



let count = 0

let countEl = document.getElementById("count-el")
console.log(countEl)


function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}





let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}






//string

let username = "per"

let message = "You have a new notification"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)

let greeting = "Hi,"

let name = "Philemon"

let myGreeting = (greeting + " " + name + "!")

console.log(myGreeting)


//strings vs numbers

let point = 4
let bonusPoint = 20

let totalPoint = point + bonusPoint

console.log(point+bonusPoint)

//Render a Welcome Message



