import React from 'react'
import Head from './Components/Head'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './Components/MainContainer'
import WatchPage from './Components/WatchPage'
const App = () => {

 const approuter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>
  },
  {
    path:"/watch",
    element:<WatchPage/>
  }
]
 }])



  return (
    <Provider store={store}>
       <div>
      <Head/>
      <RouterProvider router={approuter}/>

    
    </div>
    </Provider>
  
  )
}

export default App
