import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
import data from "../optics/sceneFile.json";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

/*

dimensions of canvas
number of bounces
rays per source

*/

export const ListView = () => {
  return (
    <Paper sx={{ margin: 3 }}>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <IconButton
                  size="large"
                  aria-label="remove scene object"
                  aria-haspopup="true"
                  color="inherit"
                  //   onClick={handleNewClick}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Information</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.items.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <IconButton
                    size="large"
                    aria-label="remove scene object"
                    aria-haspopup="true"
                    color="inherit"
                    //   onClick={handleNewClick}
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                </TableCell>
                <TableCell>{i}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>
                  {item.type === "mirror" ||
                  item.type === "wall" ||
                  item.type === "dielectric" ? (
                    <p>
                      {"(" +
                        item.endpoint1.toString() +
                        ") ⟶ (" +
                        item.endpoint2.toString() +
                        ")"}
                    </p>
                  ) : (
                    <>
                      <p>{"Center: " + "(" + item.center.toString() + ")"}</p>
                      <p>{"Radius: " + item.radius.toString()}</p>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ListView;
