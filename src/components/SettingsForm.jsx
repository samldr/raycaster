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

export const SettingsForm = (props) => {
  // renderSettings={renderSettings}
  // setRenderSettings={setRenderSettings}
  // simulationSettings={simulationSettings}
  // setSimulationSettings={setSimulationSettings}
  return (
    <>
      <Box sx={{ padding: 3, minWidth: 300 }}>
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
              defaultValue={props.renderSettings.rayThickness}
              onBlur={(e) => {
                props.setRenderSettings({
                  ...props.renderSettings,
                  rayThickness: e.target.value,
                });
              }}
            />

            <TextField
              id="filled-basic"
              label="Ray alpha"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={props.renderSettings.rayTransparency}
              onBlur={(e) => {
                props.setRenderSettings({
                  ...props.renderSettings,
                  rayTransparency: e.target.value,
                });
                console.log(props.renderSettings.rayTransparency);
              }}
            />

            <FormControlLabel
              label="Draw Scene Objects"
              control={
                <Checkbox
                  sx={{ ml: 1 }}
                  checked={props.renderSettings.drawSceneObjects}
                  onChange={() => {
                    props.setRenderSettings({
                      ...props.renderSettings,
                      drawSceneObjects: !props.renderSettings.drawSceneObjects,
                    });
                  }}
                ></Checkbox>
              }
            ></FormControlLabel>
          </FormGroup>
        </Paper>
        <Paper sx={{ mb: 3 }}>
          <Typography variant="h6" align="center" sx={{ pt: 1 }}>
            Simulation
          </Typography>
          <FormGroup sx={{ padding: 1 }}>
            <FormControlLabel
              control={
                <Slider
                  aria-label="Max Bounces"
                  defaultValue={props.simulationSettings.maxBounces}
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
                  onBlur={(e, value) => {
                    props.setSimulationSettings({
                      ...props.simulationSettings,
                      maxBounces: value,
                    });
                  }}
                />
              }
              label="Max Bounces"
              labelPlacement="top"
            />

            <TextField
              id="filled-basic"
              label="Number of Rays"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={props.simulationSettings.maxRays}
              onBlur={(e) => {
                props.setSimulationSettings({
                  ...props.simulationSettings,
                  maxRays: e.target.value,
                });
              }}
            />

            <TextField
              id="filled-basic"
              label="Source Angle (deg)"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={props.simulationSettings.sourceAngle}
              onBlur={(e) => {
                props.setSimulationSettings({
                  ...props.simulationSettings,
                  sourceAngle: e.target.value,
                });
              }}
            />

            <TextField
              id="filled-basic"
              label="Canvas Width"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={props.simulationSettings.canvasWidth}
              onBlur={(e) => {
                props.setSimulationSettings({
                  ...props.simulationSettings,
                  canvasWidth: e.target.value,
                });
              }}
            />

            <TextField
              id="filled-basic"
              label="Canvas Height"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={props.simulationSettings.canvasHeight}
              onBlur={(e) => {
                props.setSimulationSettings({
                  ...props.simulationSettings,
                  canvasHeight: e.target.value,
                });
              }}
            />

            <FormControlLabel
              label="Fullscreen Canvas"
              control={<Checkbox sx={{ ml: 1 }}></Checkbox>}
              checked={props.simulationSettings.fullscreenCanvas}
              onChange={() => {
                props.setSimulationSettings({
                  ...props.simulationSettings,
                  drawSceneObjects: !props.simulationSettings.fullscreenCanvas,
                });
              }}
            ></FormControlLabel>

            <Button variant="contained" sx={{ m: 1 }}>
              Re-simulate
            </Button>
          </FormGroup>
        </Paper>
      </Box>
    </>
  );
};

export default SettingsForm;
