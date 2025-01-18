import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectRole = ({role}) => {
    const userInfo={
        name: "Rizky",
        role: "admins"
    }

    if (userInfo.role === role){
        return <Outlet/>
    } else {
        return <Navigate to="/dashboard/gagal"/>
    }r
}

export default ProtectRole
