import { apiSlice } from "../../services/apiSlice";

export const destinationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDestinations: builder.query({
      query: () => `/destinations`,
    }),
    providesTags: ["Destinations"],
  }),
});

export const { useGetDestinationsQuery } = destinationApiSlice;
