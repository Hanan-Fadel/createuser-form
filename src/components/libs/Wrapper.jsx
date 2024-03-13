import { Box } from "@mui/material";
import React from "react";

export const Wrapper = ({ styles, children }) => {
  return <Box sx={styles}>{children}</Box>;
};
