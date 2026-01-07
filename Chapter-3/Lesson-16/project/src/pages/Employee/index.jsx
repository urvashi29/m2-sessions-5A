import Form from "../../components/Form";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";
import Card  from "../../components/Card";

const index = () => {
  const employees = useSelector((state) => state.employees);

  const employeesList = employees.map((emp) => {
    return <Card user={emp} />;
  });

  return (
    <>
      <Form />
      <h2> Employee List</h2>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {employeesList}
        </Grid>
      </Box>
    </>
  );
};

export default index;
