// this refers to the object on which we call our function.

//in normal function this refercs to how you called the function (on which onject you called the function. )

//in arrow function ()=> this represent by the scope of the function


var firstName = "Global"

var name = "var"

var secondName = "Variable"


var user1 = {
    firstName: "bhuvi",
    secondName: "Bhuvan"
}

var user2 = {
    firstName: "Mani",
    secondName: "Bharathi",
    functionName: () => {
        console.log(this.name)
    }
}

user2.functionName()


//this arrow function present outer block scope so this will point to the values present in bloack scope.
let printFullNameByCall = (location) => {
    console.log(`${this.firstName} ${this.secondName} is from ${location}`)
    console.log(window.name)
}



// printFullNameByCall.call(user1, "location")