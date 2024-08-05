import './App.css'
import { RouterProvider } from 'react-router-dom'
import {router} from "./utils/routers"
import { Suspense } from 'react'

function App() {
  return (
    <div className='App'>
  <RouterProvider router={router} />

    </div>
  )
}

export default App
