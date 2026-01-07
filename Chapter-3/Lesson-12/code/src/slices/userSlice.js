import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    getAllPosts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    postAllPosts: builder.query({
      query: (obj) => ({
        url: "posts",
        method: "POST",
        body: obj,
      }),
    }),

    getUserById: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `users/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

// use{endpoints}Query
export const { useGetAllUsersQuery, useGetAllPostsQuery, useGetUserByIdQuery } =
  postApi;
