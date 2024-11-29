import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./calculator.css";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{
          position: "absolute",
          top: "125px",
          left: "120px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "black",
            fontSize: "16px",
            fontWeight: "300",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            color: "black",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          IVF Success Rate Calculator
        </Typography>
      </Breadcrumbs>

      <Box className="form">
        <Typography className="question">
          Which age range applies to you?
        </Typography>
        <Box className="radio">
          <FormControl>
            <RadioGroup value={value} onChange={handleChange} row>
              <FormControlLabel
                className="custom-label"
                value="30"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="Under 30"
              />
              <FormControlLabel
                className="custom-label"
                value="34"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="Between 30-34"
              />
              <FormControlLabel
                className="custom-label"
                value="37"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="Between 35-37"
              />
              <FormControlLabel
                className="custom-label"
                value="40"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="Between 38-40"
              />
              <FormControlLabel
                className="custom-label"
                value="43"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="Between 41-43"
              />
              <FormControlLabel
                className="custom-label"
                value="44"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="Above 43"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Typography className="question">Number of IVF Cycle?</Typography>
        <Box className="slider" sx={{ width: 372 }}>
          <Slider
            sx={{
              color: "#F48265", // Set the default slider color
              "& .MuiSlider-thumb": {
                backgroundColor: "#F48265", // Set the thumb color
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#F1F1F1", // Optional: Set the rail color (inactive part)
              },
              "& .MuiSlider-track": {
                backgroundColor: "#F48265", // Set the track color (active part)
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "#F48265", // Set the background color of the value label
                color: "white", // Set the text color of the value label
              },
              marginTop: "30px",
            }}
            aria-label="Always visible"
            defaultValue={0}
            min={0} // Set minimum value to 0
            max={4} // Set maximum value to 4
            step={1} // Step size between values
            marks={[
              { value: 0 },
              { value: 1 },
              { value: 2 },
              { value: 3 },
              { value: 4 },
            ]}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => value} // No text (like °C) on value label
          />
        </Box>
        <Typography className="question">
          Have you undergone these procedures before?
        </Typography>
        <Box
          sx={{
            height: "32px",
            width: "774px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Typography className="label">ICSI Procedure:</Typography>
            <Box sx={{ display: "flex", gap: "18px" }}>
              <FormControlLabel
                className="custom-label"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                className="custom-label"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="No"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Typography className="label">RGT Testing:</Typography>
            <Box sx={{ display: "flex", gap: "18px" }}>
              <FormControlLabel
                className="custom-label"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                className="custom-label"
                control={
                  <Radio
                    sx={{
                      color: "#F48265",
                      "&.Mui-checked": { color: "#F48265" },
                    }}
                  />
                }
                label="No"
              />
            </Box>
          </Box>
        </Box>
        <Typography className="question">
          Do you have any of these medical conditions?
        </Typography>
        <Box
          sx={{
            height: "36",
            width: "973px",
            display: "flex",
            gap: "48px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormControlLabel
            className="checkbox-label"
            control={
              <Checkbox
                sx={{ color: "#F48265", "&.Mui-checked": { color: "#F48265" } }}
              />
            }
            label="PCOS"
          />
          <FormControlLabel
            className="checkbox-label"
            control={
              <Checkbox
                sx={{ color: "#F48265", "&.Mui-checked": { color: "#F48265" } }}
              />
            }
            label="Endometriosis"
          />
          <FormControlLabel
            className="checkbox-label"
            control={
              <Checkbox
                sx={{ color: "#F48265", "&.Mui-checked": { color: "#F48265" } }}
              />
            }
            label="Low Ovarian Reserve"
          />
          <FormControlLabel
            className="checkbox-label"
            control={
              <Checkbox
                sx={{ color: "#F48265", "&.Mui-checked": { color: "#F48265" } }}
              />
            }
            label="Male Factor Infertility"
          />
        </Box>
        <Button
          sx={{
            height: "47px",
            width: "147px",
            backgroundColor: "#D75555",
            color: "white",
            marginTop: "30px",
          }}
          onClick={(event) => {
            event.preventDefault();
            navigate("/result");
          }}
        >
          Calculate
        </Button>
      </Box>
    </Container>
  );
};

export default Calculator;
