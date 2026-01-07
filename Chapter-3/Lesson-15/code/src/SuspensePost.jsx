import React, { Suspense } from "react";
import Post from "./Post";

const SuspensePost = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Post />
      </Suspense>
    </>
  );
};

export default SuspensePost;
