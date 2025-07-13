import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import Paste from './componenets/paste'
import Viewpage from './componenets/viewpage'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: '/pastes',
      element:
        <div>
          <Navbar />
          <Paste />
        </div>
    },
    {
      path: '/pastes/:id',
      element:
        <div>
          <Navbar />
          <Viewpage/>
        </div>
    }
  ]
)


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
