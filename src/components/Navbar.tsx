import { Box, Button, Typography } from "@mui/material";
import logo from "../assets/ivf-pulse-logo@2x.png";
import "./navbar.css";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box className="nav-container">
        <Box className="logo-box">
          <img className="logo" src={logo} alt="logo" />
        </Box>
        <Box className="items">
          <Typography className="text">Donor Programme</Typography>
          <Typography className="text">Fertility Preservation</Typography>
          <Typography className="text">Advance Treatments</Typography>
          <Typography className="text">Infertility Treatments</Typography>
          <Typography className="text">IVF Testing</Typography>
          <Typography className="text">About us</Typography>
          <Button className="nav-btn">Talk to Us</Button>
        </Box>
      </Box>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
