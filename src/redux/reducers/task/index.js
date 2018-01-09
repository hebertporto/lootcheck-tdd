import * as type from '../../types/TaskTypes';

import * as selectors from './reducers'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  taskList: []
})

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case type.TASK_ADD_NEW:
      return selectors.updateTaskList(state, action)
    default:
      return state
  }
}
