import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./style.css"

//img
import plassIcon from "../../Assets/Images/plassIcon.png";
import InputcalendarIcon from "../../Assets/Images/InputcalendarIcon.png";
import clockIcon from "../../Assets/Images/clock-light.png";
import searchIcon from "../../Assets/Images/search.png"
import DownArrowIcon from "../../Assets/Images/chevron-down.png"
import check from "../../Assets/Images/check.png"
import chackBox from "../../Assets/Images/Checkbox.png"




import { AppBtn, AppBtnOutLine } from '../AppButton';

//component 
import ReferenceDateUsingValue from "../../Components/DatePicker"
import ReferenceDateExplicitTimePicker from "../../Components/TimePicker"

export default function WorkspacePop({ setWorkSpacePop, workSpacePop }) {
  const [settingTabe, setSettingTabe] = useState(0)

  const [categoryDrop, setCategoryDrop] = useState(false)
  const [categoryDropVal, setCategoryDropVal] = useState("")

  const [researcherDrop, setresearcherDrop] = useState(false)
  const [image, setImage] = useState(null);
  const [chackVal, setChackVal] = useState([])
  const [monthDrop, setMonthDrop] = useState(false)
  const [monthDropVal, setMonthDropVal] = useState("Month")

  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check4, setCheck4] = useState(false)
  const [check5, setCheck5] = useState(false)
  const [check6, setCheck6] = useState(false)
  const [check7, setCheck7] = useState(false)
  const [check8, setCheck8] = useState(false)
  const [check9, setCheck9] = useState(false)


  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const pushData = (string) => {
    setChackVal((prev) => [...prev, string]);
  }
  const deleteAllCheckData = () => setChackVal([])
  const selectAllCheckData = () => {
    setChackVal([
      "Richard Han",
      "Lucy Hutten",
      "Lorem Ipsum",
      "Dolor Amet"
    ])
  }




  return (
    <>
      <Box sx={{ display: workSpacePop ? "flex" : "none" }} className="workspacePop">
        <Box sx={{ display: workSpacePop ? "flex" : "none" }} className="workspaceContaint">
          <Typography className='workspaceHeader'>Create New Workspace</Typography>
          <Typography className='workspaceLabel'>Workspace Name</Typography>
          <input className='workspaceInput workspaceInputName' placeholder="Type a name for the new Workspace" />

          <Box className="workspaceSettingNav">
            <Box onClick={() => setSettingTabe(0)} className={settingTabe === 0 ? "workSetNavTabe workSetNavTabeActive" : "workSetNavTabe"}>
              <Typography>Basic Settings</Typography>
            </Box>
            <Box onClick={() => setSettingTabe(1)} className={settingTabe === 1 ? "workSetNavTabe workSetNavTabeActive" : "workSetNavTabe"}>
              <Typography>Customizations</Typography>
            </Box>
          </Box>

          <Box sx={{ display: settingTabe === 0 ? "flex" : "none" }} className="settingBox">
            <Typography mb={1} className='workspaceLabel'>Workspace cover image</Typography>

            <Box
              className="fileInputBox upload-area"
              onClick={() => { document.getElementById("fileInput").click(); }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <img src={plassIcon} alt="Upload" />
              <input
                id="fileInput"
                style={{ display: "none" }}
                type="file"
                onChange={handleFileInputChange}
              />
            </Box>
            <Typography className='fileInputLabel'>Click or drag image to this area to upload</Typography>
            <Box className="basicBox">
              <Box>
                <Typography mb={1} className='workspaceLabel'>Start Date</Typography>
                <Box className="pickerBox">
                  <ReferenceDateUsingValue />
                </Box>
                <Box className="pickerBox">
                  <ReferenceDateExplicitTimePicker />
                </Box>
              </Box>

              <Box>
                <Typography mb={1} className='workspaceLabel'>End Date</Typography>
                <Box className="pickerBox">
                  <ReferenceDateUsingValue />
                </Box>
                <Box className="pickerBox">
                  <ReferenceDateExplicitTimePicker />
                </Box>
              </Box>
            </Box>

            <Box >
              <Typography mb={1} className='workspaceLabel'>Assign a Researcher</Typography>
              <Box className="basicBox lastBasicBox">

                <Box className="inputBox">
                  <input onClick={() => setCategoryDrop(!categoryDrop)} value={categoryDropVal} className='workspaceInput categoryInput' placeholder="Choose a Category" />
                  <img style={{ rotate: categoryDrop ? "180deg" : "0deg" }} onClick={() => setCategoryDrop(!categoryDrop)} className='downArrow' src={DownArrowIcon} />

                  <Box sx={{ height: categoryDrop ? "auto" : "0px" }} className="categoryDrop">
                    <Box onClick={() => {
                      setCategoryDropVal("Company")
                      setCategoryDrop(false)
                    }} className="categoryDropItem">
                      <Typography>Company</Typography>
                    </Box>
                    <Box onClick={() => {
                      setCategoryDropVal("Individual")
                      setCategoryDrop(false)
                    }} className="categoryDropItem">
                      <Typography>Individual</Typography>
                    </Box>
                  </Box>

                </Box>

                <Box className="inputBox">
                  <input className='workspaceInput' placeholder="Choose a Researcher" onClick={() => setresearcherDrop(!researcherDrop)} />
                  <img className='rightIcon' src={searchIcon} />
                  <img style={{ rotate: researcherDrop ? "180deg" : "0deg" }} className='downArrow' src={DownArrowIcon} onClick={() => setresearcherDrop(!researcherDrop)} />

                  <Box sx={{ height: researcherDrop ? "auto" : "0px" }} className="categoryDrop researcherDrop">
                    <Box className="researchDropTopLabel">
                      <Typography onClick={selectAllCheckData}>Select All</Typography>
                      <Typography onClick={deleteAllCheckData}>Deselect All</Typography>
                    </Box>

                    <Box onClick={() => pushData("Richard Han")}
                      className="categoryDropItem">
                      <Box className="chackBox">
                        <img className='chackBoxImg' src={chackBox} />
                        <img style={{ display: chackVal.includes("Richard Han") ? "block" : "none" }} className='chack' src={check} />
                      </Box>
                      <Typography>Richard Han</Typography>
                    </Box>

                    <Box onClick={() => pushData("Lucy Hutten")}
                      className="categoryDropItem">
                      <Box className="chackBox">
                        <img className='chackBoxImg' src={chackBox} />
                        <img style={{ display: chackVal.includes("Lucy Hutten") ? "block" : "none" }} className='chack' src={check} />
                      </Box>
                      <Typography>Lucy Hutten</Typography>
                    </Box>


                    <Box onClick={() => pushData("Lorem Ipsum")}
                      className="categoryDropItem">
                      <Box className="chackBox">
                        <img className='chackBoxImg' src={chackBox} />
                        <img style={{ display: chackVal.includes("Lorem Ipsum") ? "block" : "none" }} className='chack' src={check} />
                      </Box>
                      <Typography>Lorem Ipsum</Typography>
                    </Box>


                    <Box onClick={() => pushData("Dolor Amet")}
                      className="categoryDropItem">
                      <Box className="chackBox">
                        <img className='chackBoxImg' src={chackBox} />
                        <img style={{ display: chackVal.includes("Dolor Amet") ? "block" : "none" }} className='chack' src={check} />
                      </Box>
                      <Typography>Dolor Amet</Typography>
                    </Box>

                  </Box>
                </Box>
              </Box>

            </Box>
            <Typography className='researcherLink'>Add New Researcher</Typography>
          </Box>



          <Box sx={{ display: settingTabe === 1 ? "flex" : "none" }} className="settingBox">
            <Typography className='cusHeaderLabel'>Setup Limits</Typography>
            <Box onClick={() => setCheck1(!check1)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check1 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of Site Pages</Typography>
            </Box>

            <Box onClick={() => setCheck2(!check2)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check2 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of open Projects per Site Page</Typography>
            </Box>

            <Box onClick={() => setCheck3(!check3)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check3 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of total open Projects</Typography>
            </Box>

            <Box className="subInputBox">
              <input value="200" className='CSPInput workspaceInput' type="text" />
              <Typography>Projects</Typography>
            </Box>

            <Box onClick={() => setCheck4(!check4)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check4 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of video minutes for all activities in total</Typography>
            </Box>

            <Box onClick={() => setCheck5(!check5)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check5 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of activities for all projects in total</Typography>
            </Box>

            <Box className="subInputBox">
              <input value="50" className='CSPInput workspaceInput' type="text" />
              <Typography>activities per</Typography>



              <Box onClick={() => setMonthDrop(!monthDrop)} className="CSmonthDrop">
                <Typography>{monthDropVal}</Typography>
                <img style={{ rotate: monthDrop ? "180deg" : "0deg" }} className='MdownArrow' src={DownArrowIcon} onClick={() => setMonthDrop(!monthDrop)} />
                <Box sx={{ height: monthDrop ? "auto" : "0px" }} className="monDropIbox">
                  <Box onClick={() => setMonthDropVal("Week")} className="monDropItem">
                    <Typography>Week</Typography>
                  </Box>
                  <Box onClick={() => setMonthDropVal("2 Week")} className="monDropItem">
                    <Typography>2 Week</Typography>
                  </Box>
                  <Box onClick={() => setMonthDropVal("3 Week")} className="monDropItem">
                    <Typography>3 Week</Typography>
                  </Box>
                  <Box onClick={() => setMonthDropVal("Month")} className="monDropItem">
                    <Typography>Month</Typography>
                  </Box>
                </Box>
              </Box>


            </Box>
            <Typography className='cusHeaderLabel'>User Limits</Typography>
            <Box onClick={() => setCheck6(!check6)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check6 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of Researchers</Typography>
            </Box>

            <Box onClick={() => setCheck7(!check7)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check7 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of Collaborators</Typography>
            </Box>

            <Box onClick={() => setCheck8(!check8)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check8 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of Observers</Typography>
            </Box>

            <Box onClick={() => setCheck9(!check9)} className="checkBox">
              <Box className="chackBox">
                <img className='chackBoxImg' src={chackBox} />
                <img style={{ display: check9 ? "block" : "none" }} className='chack' src={check} />
              </Box>
              <Typography>Limit maximum number of Participants</Typography>
            </Box>

          </Box>
          <Box className="workPupBtnBox">
            <AppBtnOutLine buttonText="Cancel" onClick={() => setWorkSpacePop(false)} />
            <AppBtnOutLine buttonText="Save as Draft" />
            <AppBtn buttonText="Create" />
          </Box>

        </Box>

      </Box>
    </>
  )
}
