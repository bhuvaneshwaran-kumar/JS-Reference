const multiple = (a, b) => console.log(a * b)

const multipleByTwo = multiple.bind(this, 2)

multipleByTwo(10)


// ---------- Another way of doing it.

const multipleWithClosure = (a, b) => {
    return (b) => console.log(a * b)
}

const multipleByTwoClosure = multipleWithClosure(2)

multipleByTwoClosure(10)