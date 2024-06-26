import React from "react";
import Admin_Sidebar from "../Common/Admin_Sidebar";
import Turf_List from "../HomeComponents/Tables/Turf_List";
import Admin_Header from "../Common/Admin_Header";
import SocialMedia_List from "../HomeComponents/Tables/SocialMedia_List";
import Users_List from "../HomeComponents/Tables/Users_List";

function AdminHome() {
  return (
    <>
      <Admin_Sidebar />
      <div class="content">
        <Admin_Header />
        <div class="container-fluid pt-4 px-4">
          <div class="row g-4">
            <Turf_List />
            <SocialMedia_List/>
            <Users_List/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
