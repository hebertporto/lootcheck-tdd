import reducerTask from '../../../redux/reducers/task'

const initialState = {
  taskList: []
}

describe('Check Initial State of Task Reducer', () => {
  it('should have initial state', () => {
    expect(reducerTask()).toEqual(initialState)
  })
})

describe('Check Action Updadte', () => {

});

// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from '../../actions/TodoActions'
// import * as types from '../../constants/ActionTypes'
// import fetchMock from 'fetch-mock'
// import expect from 'expect' // You can use any testing library

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.reset()
//     fetchMock.restore()
//   })

//   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     fetchMock
//       .getOnce('/todos', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })


//     const expectedActions = [
//       { type: types.FETCH_TODOS_REQUEST },
//       { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
//     ]
//     const store = mockStore({ todos: [] })

//     return store.dispatch(actions.fetchTodos()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })