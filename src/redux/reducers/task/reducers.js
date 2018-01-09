export function updateTaskList(state, { payload }) {
  const list = state.tasksList
  list.push(payload)
  return state.merge({
    tasksList: list
  })
}