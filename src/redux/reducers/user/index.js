const INITIAL_STATE = {
  user: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_GET_PROFILE:
      return { ...state, user: action.payload}
    default:
      return state
  }
}
