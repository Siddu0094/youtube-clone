import React from 'react'
import Head from './Components/Head'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
const App = () => {
  return (
    <Provider store={store}>
       <div>
      <Head/>
      <Body/>
    </div>
    </Provider>
  
  )
}

export default App
