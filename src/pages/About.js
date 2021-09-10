import React from 'react'
import { useCounter } from "../context/UserProvider";


function About() {
    const [count] = useCounter();

    return (
        <div>
            <center>
                About Page.
                Hey This Bhuvan and I am {count} years old.
            </center>
        </div>
    )
}

export default About
