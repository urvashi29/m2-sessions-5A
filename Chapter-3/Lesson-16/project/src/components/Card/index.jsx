import React from "react";
import Grid from "@mui/material/Grid2";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { deleteEmp } from "../../action";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "teal",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const index = ({ user }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteEmp(id));
  };

  return (
    <>
      <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
        <Item>
          <p>{user.name}</p>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </Item>
      </Grid>
    </>
  );
};

export default index;
