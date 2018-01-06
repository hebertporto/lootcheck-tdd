import { applyMiddleware, createStore } from 'redux'
import { autoRehydrate } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './../redux/'

const middleware = []

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware), autoRehydrate())
)

export default store