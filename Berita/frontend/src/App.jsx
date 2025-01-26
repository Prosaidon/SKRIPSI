import { useState } from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'
import Unable from './dashboard/pages/unable'
import AddWriter from './dashboard/pages/AddWriter'
import Writers from './dashboard/pages/Writers'
import News from './dashboard/pages/News'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<ProtectDashboard/>}>
            <Route path='' element={<MainLayout/>}>
            <Route path='' element={<Navigate to='/dashboard/admin'/>}/>
            <Route path='unable-access' element={<Unable/>}/>
            <Route path='news' element={<News/>}/>
              <Route path='' element={<ProtectRole role='admin'/>}>
                <Route path='admin' element={<AdminIndex/>}/>
                <Route path='writer/add' element={<AddWriter/>}/>
                <Route path='writers' element={<Writers/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
