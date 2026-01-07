import React, { useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import Card from "../../components/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const index = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* data */}
        </Grid>
      </Box>
    </>
  );
};

export default index;
