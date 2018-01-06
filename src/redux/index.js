import { combineReducers } from 'redux'

import TaskReducer from './reducers/task/'

const rootReducer = combineReducers({
  task: TaskReducer
})

export default rootReducer
