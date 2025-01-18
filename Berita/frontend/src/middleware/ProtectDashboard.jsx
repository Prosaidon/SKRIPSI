import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectDashboard = () => {

    const userInfo={
        name: "Rizky",
        role: "admin"
    }

    if (userInfo){
        return <Outlet/>
    } else {
        return <Navigate to="/gagal"/>
    }

   
}

export default ProtectDashboard
