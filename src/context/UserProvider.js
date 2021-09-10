import { createContext, useContext, useState } from 'react'

const userContext = createContext()

function UserProvider({ children }) {
    const [count, setCount] = useState(0)
    return (
        <userContext.Provider value={[count, setCount]}>
            {children}
        </userContext.Provider>
    )
}

export const useCounter = () => useContext(userContext)

export default UserProvider
