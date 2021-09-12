import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './redux-resucers'


const store = createStore(
    reducers, applyMiddleware(thunkMiddleware)
)


const StoreProvider = ({ children }) => <Provider store={store}>{children}</Provider>

export default StoreProvider