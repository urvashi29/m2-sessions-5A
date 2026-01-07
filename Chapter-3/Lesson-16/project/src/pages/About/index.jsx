import React from "react";
import Banner from "../../components/Banner";
import PieChart from "../../components/PieChart";

const index = () => {
  return (
    <>
      <Banner
        type="About"
        bgURL="https://img.freepik.com/free-vector/cute-silver-floral-pattern-white-background_1017-4614.jpg"
      />
      <PieChart />
    </>
  );
};

export default index;
