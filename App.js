let log = console.log

let grandParent = document.querySelector("#grand-parent")
let parent = document.querySelector("#parent")
let child = document.querySelector("#child")


let grandParentCb = (e) => {
    if (e.target === grandParent) {
        console.log("you banged exactly the grand parent.")
    } else {
        log('not exactly in grand parent')
    }
}
let parentCB = (e) => {
    if (e.target === parent) {
        console.log("you banged exactly the parent.")
    } else {
        log('not exactly in parent')
    }

}
let childCB = (e) => {
    if (e.target === child) {
        console.log("you banged exactly the child")
    } else {
        log('not exactly in child.')
    }
}

grandParent.addEventListener('click', grandParentCb, { once: true, capture: true })
parent.addEventListener('click', parentCB, true)
child.addEventListener('click', childCB, true)
grandParent.addEventListener('click', grandParentCb, false)
parent.addEventListener('click', parentCB, false)
child.addEventListener('click', childCB, false)



// event delegation.

let ul = document.querySelector('ul')

let listIeamEventListener = (e) => {
    // this delegate listner is going to handle for all the list iteam in ul
    if (e.target.matches('li')) {
        console.log(`you're clicking ${e.target.innerText}`)
    }

}

ul.addEventListener('click', listIeamEventListener, { capture: false })

// creating dynamic li

const li = document.createElement('li')
li.innerText = 'li - 5'

ul.appendChild(li)


