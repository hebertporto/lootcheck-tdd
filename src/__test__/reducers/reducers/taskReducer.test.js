import reducerTask from '../../../redux/reducers/task'

const initialState = {
  tasksList: []
}

describe('store/topics/reducer', () => {
  it('should have initial state', () => {
    expect(reducerTask()).toEqual(initialState)
  })
})
