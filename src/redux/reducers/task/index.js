import { TASK_ADD_NEW } from '../../types/TaskTypes';

import * as task from './reducers'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  tasksList: []
})

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case TASK_ADD_NEW:
      return { ...state, tasksList: action.payload}
    default:
      return state
  }
}
