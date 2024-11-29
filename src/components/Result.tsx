import { Box, Breadcrumbs, Typography } from "@mui/material";
import "./result.css";
import Img from "../assets/black-white-portrait-woman-expecting-baby (3).png";
import { Circle } from "rc-progress";
const Result = () => {
  return (
    <Box className="result-box">
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{
          color: "white",
          position: "absolute",
          top: "125px",
          left: "120px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "300",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          IVF Success Rate Calculator
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          Result
        </Typography>
      </Breadcrumbs>
      <Typography
        sx={{
          position: "absolute",
          left: "176px",
          top: "222px",
          fontSize: "44px",
          fontFamily: 500,
        }}
      >
        Your estimated IVF Success Rate is
      </Typography>
      <Box className="image-container">
        <Box className="image-wrapper">
          <img src={Img} alt="Image" className="bg-image" />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "100px",
          left: "855px",
          background:
            "radial-gradient(circle, rgba(91, 212, 137, 0.8), rgba(91, 212, 137, 0) 50%)",
          height: "600px",
          width: "600px",
        }}
      ></Box>

      <Box
        sx={{
          textAlign: "center",
          width: "292px",
          height: "292px",
          position: "absolute",
          top: "300px",
          left: "316px",
        }}
      >
        <Circle
          percent={64}
          strokeColor="#5BD489"
          strokeWidth={17}
          trailColor="#355E3B"
          trailWidth={18}
          strokeLinecap="square"
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "198px",
            width: "198px",
            backgroundColor: "#032706",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Text Inside Inner Circle */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "74px",
              fontWeight: 500,
              color: "white",
            }}
          >
            64%
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: "400" }}
          >
            With 1 IVF Cycle
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
