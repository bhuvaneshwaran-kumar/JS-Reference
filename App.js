let input = document.querySelector('input')


function fetchFromApi() {
    console.log(input.value)
}

const debouncing = (fetchFromApi, delay) => {
    let timer // closure a function along with it's lexical environment.
    return function () {
        clearTimeout(timer) // clearing it from the webApi environment.
        timer = setTimeout(() => {
            fetchFromApi() // only fires when user give 400ms delay while inputing the element.
        }, delay)
    }
}



input.addEventListener('keydown', debouncing(fetchFromApi, 400))


