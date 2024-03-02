import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Box, Typography, useScrollTrigger } from '@mui/material'
import "./style.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import HomeIcon from "../../Assets/Images/homeIcon.png"
import Clogo from "../../Assets/Images/Frame 243811.png";
import AiIcon from "../../Assets/Images/AdAiIcon2 (1).png";
import PestIcon from "../../Assets/Images/AdPestIcon.png";
import PhoneIcon from "../../Assets/Images/calendar.png";
import FolderIcon from "../../Assets/Images/AdFolderIcon.png";
import ArrowIcon from "../../Assets/Images/AdArrowIcon.png";
import SetingIcon from "../../Assets/Images/AdSettingIcon.png";
import slideIcon from "../../Assets/Images/sidebar-panel-collapse-icon 1.png"

import AdminBG from "../../Assets/Images/Add files-cuate 2.png"


//Data
import { Workspace } from '../../Assets/Data';
//components
import { AppBtn } from "../../Components/AppButton"
import WorkspacePop from '../../Components/WorkspacePop';
import WorkspaceList from "../../Components/WorkspaceList"

export default function AdminHome() {
  const Navigate = useNavigate()
  const [slideMenu, setSlideMenu] = useState(true)
  const [sideTabe, setSideTebe] = useState(0)
  const [workSpacePop, setWorkSpacePop] = useState(false)

  return (
    <>
      <Box className="AdminHomeContainer">
        <Box sx={{ width: slideMenu ? "400px" : "0px" }} className="sideMenu">
          <Box onClick={() => Navigate("/admin")} className="clogBox">
            <img src={Clogo} />
          </Box>

          <Box onClick={() => setSideTebe(0)} className={sideTabe === 0 ? "AdSideMenuItem AdSideMenuItemActive" : "AdSideMenuItem"}>
            <img src={HomeIcon} />
            <Typography>Workspace Management</Typography>
          </Box>

          <Box onClick={() => setSideTebe(1)} className={sideTabe === 1 ? "AdSideMenuItem AdSideMenuItemActive" : "AdSideMenuItem"}>
            <img src={AiIcon} />
            <Typography>AI Integration</Typography>
          </Box>

          <Box onClick={() => setSideTebe(2)} className={sideTabe === 2 ? "AdSideMenuItem AdSideMenuItemActive" : "AdSideMenuItem"}>
            <img src={PestIcon} />
            <Typography>Reports & Publications</Typography>
          </Box>

          <Box onClick={() => setSideTebe(3)} className={sideTabe === 3 ? "AdSideMenuItem AdSideMenuItemActive" : "AdSideMenuItem"}>
            <img src={PhoneIcon} />
            <Typography>User Directory</Typography>
          </Box>

          <Box onClick={() => setSideTebe(4)} className={sideTabe === 4 ? "AdSideMenuItem AdSideMenuItemActive" : "AdSideMenuItem"}>
            <img src={FolderIcon} />
            <Typography>Templates</Typography>
          </Box>

          <Box onClick={() => setSideTebe(5)} className={sideTabe === 5 ? "AdSideMenuItem AdSideMenuItemActive" : "AdSideMenuItem"}>
            <img src={ArrowIcon} />
            <Typography>Direct Message</Typography>
          </Box>

          <Box onClick={() => setSideTebe(6)} className={sideTabe === 6 ? "AdSideMenuItem AdSideMenuItemActive" : "AdSideMenuItem"}>
            <img src={SetingIcon} />
            <Typography>System Settings</Typography>
          </Box>



        </Box>

        <Box className="adminMainSection">
          <Box className="adminNavBar">
            <img style={{ rotate: slideMenu ? "0deg" : "-180deg" }} onClick={() => setSlideMenu(!slideMenu)} src={slideIcon} />

            {sideTabe === 0 ? <AppBtn onClick={() => setWorkSpacePop(true)} buttonText="Create Workspace" /> : null}



          </Box>

          <Box sx={{ display: sideTabe === 0 ? "flex" : "none" }} className="adminMainBox">
            {Workspace.length <= 0 ?
              <>
                <Box className="adminWorkSBG">
                  <img src={AdminBG} />
                </Box>
                <Box className="adminBGTextBox">
                  <Typography className='adminHeaderText'>Welcome to Terapage!</Typography>
                  <Typography className='adminSubHeaderText'>It seems like you have not created any workspace in the dashboard yet.
                    Please create to proceed further.</Typography>
                  <AppBtn onClick={() => setWorkSpacePop(true)} buttonText="Create Workspace" />
                </Box>
                <WorkspacePop workSpacePop={workSpacePop} setWorkSpacePop={setWorkSpacePop} />

              </>
              :
              <Box className="workSpaceListBox">
                <WorkspacePop workSpacePop={workSpacePop} setWorkSpacePop={setWorkSpacePop} />
                <WorkspaceList />
              </Box>
            }





          </Box>





        </Box>

      </Box>
    </>
  )
}
