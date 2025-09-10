import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SuperAdminRegister from './SuperAdmin/SuperAdminRegister'
import SuperAdminLogin from './SuperAdmin/SuperAdminLogin';
import SuperAdminDashboard from './SuperAdmin/SuperAdminDashboard';


function App() {
  return (
    <>
    <SuperAdminRegister/>
    <SuperAdminLogin></SuperAdminLogin>
    <SuperAdminDashboard/>
    </>
  )
}

export default App
