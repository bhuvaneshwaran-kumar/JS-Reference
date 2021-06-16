// for window resize.. reference from youtube akshay Shani 😍😍

let timeConsumingComputation = () => {

    console.log(`${window.innerWidth}x , ${window.innerHeight}y `)

}

let throttlingFunction = (timeConsumingComputation, delay) => {

    let flag = true

    return () => {

        if (flag) {
            timeConsumingComputation()
            flag = false
            setTimeout(() => {
                flag = true
            }, delay)
        }

    }

}

window.addEventListener('resize', throttlingFunction(timeConsumingComputation, 1000))


// for button click event reference from geeks for geeks 😎😎.

let button = document.querySelector("#button")
let number = 0

let heavyTaskButtonOperation = () => {
    console.log("performing some time consuming computation.", number++)
}



let throttingButton = (heavyTaskButtonOperation, delay) => {
    let prev = 0
    return () => {
        let now = Date.now()

        console.log(`clicking the button.`)

        if (now - prev > delay) {
            prev = Date.now()
            heavyTaskButtonOperation()
        }

    }
}



button.addEventListener("click", throttingButton(heavyTaskButtonOperation, 1000))

