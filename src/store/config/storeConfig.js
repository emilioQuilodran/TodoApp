import { legacy_createStore } from 'redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'

 const createAppStore = () => {
    const store = legacy_createStore(rootReducer, composeWithDevTools())
    return store
}

export default createAppStore
