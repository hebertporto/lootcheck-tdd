import { combineReducers } from 'redux'

import TaskReducer from './reducers/task/'
import UserReducer from './reducers/user/'

const rootReducer = combineReducers({
  task: TaskReducer,
  user: UserReducer
})

export default rootReducer
