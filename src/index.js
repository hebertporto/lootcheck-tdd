import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './modules/App'
import store from './config/reduxStore'

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
