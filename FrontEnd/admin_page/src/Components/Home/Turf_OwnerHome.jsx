import React from 'react'
import Admin_Sidebar from '../Common/Admin_Sidebar'
import Admin_Header from '../Common/Admin_Header'
import Tournamentdetails from './Tournament/Tournamentdetails'
import Tournament_View from '../HomeComponents/Tables/Tournament_View'


function Turf_OwnerHome() {
  return (
    <>
    <Admin_Sidebar />
       <div class="content">
         <Admin_Header />
         <div class="container-fluid pt-4 px-4">
           <div class="row g-4">
             <Tournament_View/>
             
     </div>
         </div>
       </div>
     </>
  )
}

export default Turf_OwnerHome