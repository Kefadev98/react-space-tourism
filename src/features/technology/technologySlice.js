import { apiSlice } from "../../services/apiSlice";

export const technologyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTechnology: builder.query({
      query: () => `/technology`,
    }),
    providesTags: ["Technology"],
  }),
});

export const { useGetTechnologyQuery } = technologyApiSlice;
