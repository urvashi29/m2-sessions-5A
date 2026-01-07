import React from "react";
import {
  useGetAllPostsQuery,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
} from "../../slices/userSlice";

const index = () => {
  const userResponse = useGetAllUsersQuery();
  const postResponse = useGetAllPostsQuery();
  const specificUser = useGetUserByIdQuery(2);
  console.log(userResponse);
  console.log(postResponse);
  console.log(specificUser);

  const userList = !userResponse.isLoading ? (
    userResponse.data.map((user) => <p>{user.email}</p>)
  ) : (
    <p>No Post Yet!</p>
  );
  return <>{userList}</>;
};

export default index;
