import { React, useRef, useState } from "react";
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

  //state values of simulation settings
  //these are stored locally, then passed to the parent when the button is pressed
  const [maxBounces, setMaxBounces] = useState(5);
  const [maxRays, setMaxRays] = useState(1000);
  const [sourceAngle, setSourceAngle] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [fullscreenCanvas, setFullscreenCanvas] = useState(false);

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
                  defaultValue={maxBounces}
                  onChangeCommitted={(e, value) => {
                    setMaxBounces(value);
                  }}
                  on
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
              label="Number of Rays"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={maxRays}
              onBlur={(e, value) => {
                setMaxRays(value);
              }}
            />

            <TextField
              id="filled-basic"
              label="Source Angle (deg)"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={sourceAngle}
              onBlur={(e, value) => {
                setSourceAngle(value);
              }}
            />

            <TextField
              id="filled-basic"
              label="Canvas Width"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={canvasWidth}
              onBlur={(e, value) => {
                setCanvasWidth(value);
              }}
            />

            <TextField
              id="filled-basic"
              label="Canvas Height"
              variant="filled"
              sx={{ margin: 1 }}
              defaultValue={canvasHeight}
              onBlur={(e, value) => {
                setCanvasHeight(value);
              }}
            />

            <FormControlLabel
              label="Fullscreen Canvas"
              control={<Checkbox sx={{ ml: 1 }}></Checkbox>}
              checked={fullscreenCanvas}
              onChange={(e, value) => {
                setFullscreenCanvas(value);
              }}
            ></FormControlLabel>

            <Button
              variant="contained"
              onClick={() => {
                props.setSimulationSettings({
                  maxBounces: maxBounces,
                  maxRays: maxRays,
                  sourceAngle: sourceAngle,
                  canvasWidth: canvasWidth,
                  canvasHeight: canvasHeight,
                  fullScreenCanvas: fullscreenCanvas,
                });
                console.log(props.simulationSettings);
              }}
              sx={{ m: 1 }}
            >
              Re-simulate
            </Button>
          </FormGroup>
        </Paper>
      </Box>
    </>
  );
};

export default SettingsForm;
