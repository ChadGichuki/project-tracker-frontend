import React, { useEffect, useState,  } from 'react'
// import { Modal } from 'react-bootstrap'
import {
  Menu,
  MenuItem,
  // SidebarHeader,
  // SidebarFooter,
  // SidebarContent,
} from "react-pro-sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import './dashboard.css';

 function Dashboard () {
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };



const token = localStorage.getItem('token')

// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);

useEffect(()=> {
   fetch('https://project-tracker-phase5.herokuapp.com/projects',{
   method: "GET",
   headers: {
    Authorization:`Bearer ${token}`,
   }
})
   .then((res) => res.json())
  .then((data) => console.log(data)
 )
}, []);



return (
   <>
    <div id="dashboard">
      <ProSidebarProvider collapsed={menuCollapse}>
        {/* <SidebarHeader> */}
        <div className="header">
            <p>{menuCollapse ? "DashBoard" : "My DashBoard"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? (
              <FiArrowRightCircle/>
            ) : (
              <FiArrowLeftCircle/>
            )}
          </div>
        {/* </SidebarHeader> */}
        {/* <SidebarContent> */}
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />}>
              Home
            </MenuItem>
            <MenuItem icon={<FaList />}>Add Projects</MenuItem>
            <MenuItem icon={<FaRegHeart />}>Update Project</MenuItem>
            <MenuItem icon={<RiPencilLine />}>Delete Project</MenuItem>
            <MenuItem icon={<BiCog />}>Add Members</MenuItem>
          </Menu>
        {/* </SidebarContent> */}
        {/* <SidebarFooter> */}
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        {/* </SidebarFooter> */}
      </ProSidebarProvider>
    </div>
  </>
);
};

   
   
   
  export default Dashboard;