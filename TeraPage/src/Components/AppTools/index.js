import "./style.css";
import { Box, Typography } from "@mui/material";
import DownArrowIcon from "../../Assets/Images/chevron-down.png";

//images
import searchIcon from "../../Assets/Images/searchIcon.png";
import clockIcon from "../../Assets/Images/clock-light.png";

export const SearchBar = () => {
  return (
    <Box className="searchBar">
      <input placeholder="Search" />
      <img src={searchIcon} />
    </Box>
  );
};

export const Status = ({
  setStatusDrop,
  statusDrop,
  setStatusDropVal,
  statusDropVal,
}) => {
  return (
    <Box onClick={() => setStatusDrop(!statusDrop)} className="statusBox">
      <Typography className="statusLabel">Status: {statusDropVal}</Typography>
      <img
        style={{ rotate: statusDrop ? "180deg" : "0deg" }}
        src={DownArrowIcon}
      />

      <Box sx={{ height: statusDrop ? "auto" : "0px" }} className="statusPop">
        <Box onClick={() => setStatusDropVal("All")} className="statusPopItem">
          <Typography>All</Typography>
        </Box>
        <Box onClick={() => setStatusDropVal("Open")} className="statusPopItem">
          <Typography>Open</Typography>
        </Box>
        <Box
          onClick={() => setStatusDropVal("Closed")}
          className="statusPopItem"
        >
          <Typography>Closed</Typography>
        </Box>
        <Box
          onClick={() => setStatusDropVal("Draft")}
          className="statusPopItem"
        >
          <Typography>Draft</Typography>
        </Box>
        <Box
          onClick={() => setStatusDropVal("Archived")}
          className="statusPopItem"
        >
          <Typography>Archived</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const LatestCreated = ({
  latestCDrop,
  setLatestDrop,
  latestDropVal,
  setLatestDropVal,
}) => {
  return (
    <Box
      onClick={() => setLatestDrop(!latestCDrop)}
      className="statusBox latestCreated"
    >
      <Typography className="statusLabel">Status: {latestDropVal}</Typography>
      <img
        style={{ rotate: latestCDrop ? "180deg" : "0deg" }}
        src={DownArrowIcon}
      />
      <img className="clockIcon" src={clockIcon} />

      <Box sx={{ height: latestCDrop ? "auto" : "0px" }} className="statusPop">
        <Box
          onClick={() => setLatestDropVal("Latest Created")}
          className="statusPopItem"
        >
          <Typography>Latest Created</Typography>
        </Box>
        <Box
          onClick={() => setLatestDropVal("Oldest Created")}
          className="statusPopItem"
        >
          <Typography>Oldest Created</Typography>
        </Box>
        <Box
          onClick={() => setLatestDropVal("Alphabetically")}
          className="statusPopItem"
        >
          <Typography>Alphabetically</Typography>
        </Box>
        <Box
          onClick={() => setLatestDropVal("Reverse Alpha...")}
          className="statusPopItem"
        >
          <Typography>Reverse Alphabetically</Typography>
        </Box>
      </Box>
    </Box>
  );
};
