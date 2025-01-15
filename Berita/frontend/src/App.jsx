import { useState } from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<MainLayout/>}>
            <Route path='' element={<Navigate to='/dashboard/admin'/>}>
              <Route path='admin' element={<AdminIndex/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
