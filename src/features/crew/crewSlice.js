import { apiSlice } from "../../services/apiSlice";

export const crewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCrew: builder.query({
      query: () => `/crew`,
    }),
    providesTags: ["Crew"],
  }),
});

export const { useGetCrewQuery } = crewApiSlice;
