// REDUX ACTIONS: Functions that describe what happened
// Actions are plain objects that tell the reducer what to do
// They have a type and may include additional data (payload)

import { ACTIONS } from "./bookingReducer";

// ACTION CREATOR: Function that returns an action object
// addBooking - Add a movie to bookings
export const addBooking = (movie) => ({
  type: ACTIONS.ADD_BOOKING,
  payload: ACTIONS.ADD_BOOKING,
  movie: movie, // The movie object being booked
});

// ACTION CREATOR: removeBooking - Remove a movie from bookings by index
export const removeBooking = (index) => ({
  type: ACTIONS.REMOVE_BOOKING,
  payload: ACTIONS.REMOVE_BOOKING,
  index: index, // Index of movie to remove
});

// ACTION CREATOR: clearBookings - Clear all bookings
export const clearBookings = () => ({
  type: ACTIONS.CLEAR_BOOKINGS,
  payload: ACTIONS.CLEAR_BOOKINGS,
});
