import React, { useEffect, useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import DownArrowIcon from "../../Assets/Images/chevron-down.png";

import "./style.css"
import varticalDor from "../../Assets/Images/more-vertical.png"
import horizontalDor from "../../Assets/Images/more-horizontal.png"
import arrow from "../../Assets/Images/arrow.png"

import { SearchBar, Status, LatestCreated } from "../AppTools"

import { Workspace } from "../../Assets/Data"
import { editIconWhite, editIconBlack, xCircleWhite, xCircleBlack, archiveWhite, archiveBlack, trashWhite, trashBlack } from "../../Assets/Data"

export default function WorkspaceList() {
  const popupRef = useRef(null);
  const [statusDrop, setStatusDrop] = useState(false);
  const [statusDropVal, setStatusDropVal] = useState("All");

  const [latestCDrop, setLatestDrop] = useState(false);
  const [latestDropVal, setLatestDropVal] = useState("Latest Created");
  const [optionIndex, setOptionIndex] = useState()
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionIndex = (i) => {
    setOptionIndex(i)
    console.log(optionIndex);
  }
  console.log(optionIndex);

  let newArrayData;
  function printItemsByState(array, state) {
    let startIndex = state * 8;
    let endIndex = (state + 1) * 8;
    let itemsToPrint = array.slice(startIndex, endIndex);
    if (itemsToPrint.length > 0) {
      // console.log(itemsToPrint);
      newArrayData = itemsToPrint
    } else {
      console.log("No items to print for the given state.");
    }
  }

  let pageNumver = 0

  const handleNext = () => {
    pageNumver = pageNumver + 1
    printItemsByState(Workspace, pageNumver)
  }
  const handlePrev = () => {

    if (pageNumver < 0) {
      console.log(pageNumver);
      pageNumver = pageNumver - 1
    }
    printItemsByState(Workspace, pageNumver)

  }

  console.log(pageNumver);
  printItemsByState(Workspace, pageNumver)



  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Box className="workspaceListBox">
        <Box className="workListNav">
          <Box className="workListNavItem workListheader">
            <Typography>All Workspaces</Typography>
          </Box>
          <Box className="workListNavItem workListSearchBar">
            <SearchBar />
          </Box>
          <Box className="workListNavItem workshotList">
            <Status setStatusDrop={setStatusDrop} statusDrop={statusDrop} setStatusDropVal={setStatusDropVal} statusDropVal={statusDropVal} />
          </Box>
          <Box className="workListNavItem workLatest">
            <LatestCreated setLatestDrop={setLatestDrop} latestCDrop={latestCDrop} setLatestDropVal={setLatestDropVal} latestDropVal={latestDropVal} />
          </Box>
        </Box>

        <Box className="workListBox">
          <Box className="haderRow">
            <Box className="Tabelsel navFsel">
              <Typography>Workspaces</Typography>
            </Box>
            <Box className="Tabelsel">
              <Typography>Projects</Typography>
            </Box>
            <Box className="Tabelsel">
              <Typography>Researchers</Typography>
            </Box>
            <Box className="Tabelsel">
              <Typography>Collaborators</Typography>
            </Box>
            <Box className="Tabelsel">
              <Typography>Observers</Typography>
            </Box>
            <Box className="Tabelsel">
              <Typography>Participants</Typography>
            </Box>
            <Box className="Tabelsel">
              <Typography>Status</Typography>
            </Box>
          </Box>
          {newArrayData &&
            newArrayData?.map((el, index) => (
              <Box key={index} className="TabelRow">
                <Box className="Tabelsel navFsel">
                  <Box onClick={() => {
                    setOptionIndex(index)
                    setIsOpen(!isOpen)
                  }} className="dot">
                    {
                      isOpen && (
                        <Box sx={{ height: index === optionIndex ? "auto" : "0px" }} className="optionPop" ref={popupRef}>
                          <Box className="optionPopItem">
                            {editIconBlack}
                            <Typography>Edit Workspace</Typography>
                          </Box>
                          <Box className="optionPopItem">
                            {xCircleBlack}
                            <Typography>Close Workspace</Typography>
                          </Box>
                          <Box className="optionPopItem">
                            {archiveBlack}
                            <Typography>Archive Workspace</Typography>
                          </Box>
                          <Box className="optionPopItem">
                            {trashBlack}
                            <Typography>Delete Workspace</Typography>
                          </Box>
                        </Box>
                      )
                    }
                  </Box>
                  <Box onClick={() => handleOptionIndex(index)} className="tabelAvatar">
                    <img src={el.img} />
                  </Box>
                  <Typography>{el.title}</Typography>
                </Box>
                <Box className="Tabelsel">
                  <Typography>{el.projects}</Typography>
                </Box>
                <Box className="Tabelsel">
                  <Typography>{el.researchers}</Typography>
                </Box>
                <Box className="Tabelsel">
                  <Typography>{el.collaborators}</Typography>
                </Box>
                <Box className="Tabelsel">
                  <Typography>{el.observers}</Typography>
                </Box>
                <Box className="Tabelsel">
                  <Typography>{el.participants}</Typography>
                </Box>
                <Box className="Tabelsel">
                  <Typography>{el.status}</Typography>
                </Box>
              </Box>
            ))
          }
        </Box>

        <Box className="pagenation">

          <Box onClick={handlePrev} className="tabelBtn">
            <img src={arrow} />
            <Typography>Previous</Typography>
          </Box>

          <Box className="pageNumberBox">
            <Box className="pageNumber pageNumberActive"><p>1</p></Box>
            <Box className="pageNumber"><p>2</p></Box>
            <Box className="pageNumber"><p>3</p></Box>
            <Box className="pageNumber"><p>4</p></Box>
            <Box className="pageNumber"><p>5</p></Box>
          </Box>

          <Box onClick={handleNext} className="tabelBtn">
            <Typography>Next</Typography>
            <img style={{ rotate: "180deg" }} src={arrow} />
          </Box>

        </Box>
      </Box>
    </>
  )
}
