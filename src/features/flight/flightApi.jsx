import { apiSlice } from "../../app/api/authApi"

const flightApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllFlight'],
  endpoints: (builder) => ({
    getAllFlight: builder.query({
      query: (query) =>  ({
        url: "flights"
      }),

      providesTags: ['getAllFlight'],
      transformResponse: (response, meta, args) => response
    }),

    getFlightById: builder.query({
      query: (id) =>  ({
        url: `flights/${id}`
      }),

      providesTags: ['getFlightById'],
      transformResponse: (response, meta, args) => response
    }),

    getFlightByIdAirline: builder.query({
      query: (id) =>  ({
        url: `flights/airlines/${id}`
      }),

      providesTags: ['getFlightById'],
      transformResponse: (response, meta, args) => response
    }),

    createFlight: builder.mutation({
      query: (data) =>  ({
        url: "flights",
        method: "POST",
        body: data
      }),

      invalidatesTags: ['getAllFlight'],
      transformResponse: (response, meta, args) => response.data
    }),

    updateFlightById: builder.mutation({
      query: ({id, data}) =>  ({
        url: `flights/${id}`,
        method: "PUT",
        body: data
      }),

      invalidatesTags: ['getAllFlight'],
      transformResponse: (response, meta, args) => response.data
    }),

    deleteFlightById: builder.mutation({
      query: (id) =>  ({
        url: `flights/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ['getAllFlight'],
      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useGetAllFlightQuery, useGetFlightByIdQuery ,useUpdateFlightByIdMutation, useDeleteFlightByIdMutation, useCreateFlightMutation } = flightApi 