let obj1 = {
    name: "bhuvi"
}

let obj2 = {
    name: "mani"
}


function printNameByCall(location) {
    console.log(`${this.name} is from ${location}`)
}

function printNameByApply(location) {
    console.log(`${this.name} has ${location.length} childreen`)
}


printNameByCall.call(obj1, "kodaikkal mottur")

// in apply we need to pass an array

printNameByApply.call(obj2, [1, 2, 3, 4, 5])


// Bind
let printMyName = printNameByCall.bind(obj1, "kodaikkal")
// it return a function by binding  printNameByCall and obj1
printMyName()

