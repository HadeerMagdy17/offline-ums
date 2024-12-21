import { CgProfile } from "react-icons/cg";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHome, FaUserPlus } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
export default function SideBar() {
let navigate=useNavigate()
  let {userData}:any=useContext(AuthContext)
  let[isCollapsed,setIsCollapsed]=useState(false)

let logout=()=>{
 navigate("/login")
}

   let toggleCollapse =()=>{

   setIsCollapsed( !isCollapsed)
   }

  return (
   
    <div className="sidebarContainer  vh-100">
    <Sidebar collapsed={isCollapsed} className="vh-100">
      <div className="title text-center my-4 ">
        <div>
          {/* ternary operator */}
          {isCollapsed ? <FaArrowAltCircleRight onClick={toggleCollapse}  size={25} />
            :
            <FaArrowAltCircleLeft onClick={toggleCollapse}  size={25} />
          }
            </div>
    
        <img className="rounded-circle w-50" src={userData?.image} alt="person"/>
        <h6 className="my-2">{userData?.firstName} {userData?.lastName}</h6>
        <h6 className="text-warning">Admin</h6>
      </div>
      <Menu>
        <MenuItem icon={<FaHome />} component={<Link to="/dashboard" />}>
        
          Home
        </MenuItem>
        <MenuItem icon={<FaUsersGear />} component={<Link to="/dashboard/users-list" />}> Users</MenuItem>
        <MenuItem icon={<FaUserPlus />} component={<Link to="/dashboard/add" />}> Add user</MenuItem>
        <MenuItem icon={<CgProfile />} component={<Link to="/dashboard/profile" />}> Profile</MenuItem>
        <MenuItem onClick={logout} icon={<RiLogoutCircleLine />} component={<Link to="" />}> Logout</MenuItem>
      </Menu>
    </Sidebar>
    </div>
  );
}
