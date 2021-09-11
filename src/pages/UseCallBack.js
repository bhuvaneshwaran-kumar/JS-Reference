import React, { useState, useCallback } from 'react'
import Button from '../context/forUseCallBack/Button'
import Count from '../context/forUseCallBack/Count'
import Title from '../context/forUseCallBack/Title'

function UseCallBack() {
    const [age, setAge] = useState(12)
    const [sal, setSal] = useState(15000)
    const incrementAge = useCallback(() => setAge(prev => prev + 1), [age])
    const incrementSalary = useCallback(() => setSal(prev => prev + 1000), [sal])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={sal} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default UseCallBack
