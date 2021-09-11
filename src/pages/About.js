import React, { useEffect } from 'react'
import { useCounter } from "../context/UserProvider";


function About() {
    const [count] = useCounter();
    useEffect(() => {
        let callBack = () => console.log('resizeing Window.')
        window.addEventListener('resize', callBack)
        return () => window.removeEventListener('resize', callBack)
    }, [])
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
