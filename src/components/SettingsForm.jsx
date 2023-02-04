import React from "react";
import {
  Slider,
  TextField,
  FormGroup,
  FormControlLabel,
  Typography,
  Grid,
  Box,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";

/*

dimensions of canvas
number of bounces
rays per source

*/

export const SettingsForm = () => {
  return (
    <>
      <Box sx={{ padding: 3 }}>
        <Paper sx={{ mb: 3 }}>
          <Typography variant="h6" align="center" sx={{ pt: 1 }}>
            Simulation
          </Typography>
          <FormGroup sx={{ padding: 1 }}>
            <FormControlLabel
              control={
                <Slider
                  aria-label="Max Bounces"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  step={1}
                  min={1}
                  max={15}
                  marks={[
                    { value: 1, label: 1 },
                    { value: 2 },
                    { value: 3 },
                    { value: 4 },
                    { value: 5, label: 5 },
                    { value: 6 },
                    { value: 7 },
                    { value: 8 },
                    { value: 9 },
                    { value: 10, label: 10 },
                    { value: 11 },
                    { value: 12 },
                    { value: 13 },
                    { value: 14 },
                    { value: 15, label: 15 },
                  ]}
                  sx={{ margin: 1, mb: 3 }}
                />
              }
              label="Max Bounces"
              labelPlacement="top"
            />

            <TextField
              id="filled-basic"
              label="Rays per Source"
              variant="filled"
              sx={{ margin: 1 }}
            />

            <TextField
              id="filled-basic"
              label="Source Angle"
              variant="filled"
              sx={{ margin: 1 }}
            />

            <TextField
              id="filled-basic"
              label="Canvas X"
              variant="filled"
              sx={{ margin: 1 }}
            />

            <TextField
              id="filled-basic"
              label="Canvas Y"
              variant="filled"
              sx={{ margin: 1 }}
            />

            <Button variant="contained" sx={{ m: 1 }}>
              Re-simulate
            </Button>
          </FormGroup>
        </Paper>

        <Paper sx={{ mb: 3 }}>
          <Typography variant="h6" align="center" sx={{ pt: 1 }}>
            Rendering
          </Typography>
          <FormGroup sx={{ padding: 1 }}>
            <TextField
              id="filled-basic"
              label="Ray thickness"
              variant="filled"
              sx={{ margin: 1 }}
            />

            <TextField
              id="filled-basic"
              label="Ray alpha"
              variant="filled"
              sx={{ margin: 1 }}
            />

            <FormControlLabel
              label="Draw Scene Objects"
              control={<Checkbox sx={{ ml: 1 }}></Checkbox>}
            ></FormControlLabel>
          </FormGroup>
        </Paper>
      </Box>
    </>
  );
};

export default SettingsForm;
