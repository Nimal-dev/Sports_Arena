import React from 'react'
import Addtournament from './Tournament/Addtournament'
import Admin_Header from '../Common/Admin_Header'
import Admin_Sidebar from '../Common/Admin_Sidebar'
import Tournamentdetails from './Tournament/Tournamentdetails'
import Turf_List from '../HomeComponents/Tables/Turf_List'

function TournamentHome() {
  return (
    <>
   <Admin_Sidebar />
      <div class="content">
        <Admin_Header />
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <Tournamentdetails/>
            <Turf_List/>
    </div>
        </div>
      </div>
    </>
  )
}

export default TournamentHome