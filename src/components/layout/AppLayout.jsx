import React from 'react'
import {Outlet} from "react-router-dom";
import {Footers} from "../ui/Footers.jsx"
import {Headers} from "../ui/Headers.jsx"
export const AppLayout=() =>{
  return (
    <div>
      <Headers/>
      <Outlet/>
      <Footers/>
    </div>
  )
}

export default AppLayout
