import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./style.css";

export const AppBtn = ({ buttonText, onClick }) => {
  return (
    <>
      <Button onClick={onClick} className="appBtn">
        {buttonText}
      </Button>
    </>
  );
};

export const AppBtnOutLine = ({ buttonText, onClick }) => {
  return (
    <>
      <Button variant="outlined" onClick={onClick} className="appBtnOutline">
        {buttonText}
      </Button>
    </>
  );
};
