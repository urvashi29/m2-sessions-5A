import React, { useEffect, useState } from "react";

// custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // axios can also be used
    fetchurl(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
