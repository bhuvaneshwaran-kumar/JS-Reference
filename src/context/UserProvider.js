import { createContext, useContext, useReducer } from 'react'

const userContext = createContext()

function UserProvider({ children, state, reducer }) {
    // const [count, setCount] = useState(0)
    return (
        <userContext.Provider value={useReducer(reducer, state)}>
            {children}
        </userContext.Provider >
    )
}

export const useCounter = () => useContext(userContext)

export default UserProvider
