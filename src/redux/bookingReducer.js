// REDUX REDUCER: Manages state changes for booking
// A reducer is a pure function that takes the current state and an action,
// then returns the new state based on the action type

// Initial state of bookings
const initialState = {
  bookings: [], // Array to store booked movies
};

// Action types - constants for what actions can be performed
export const ACTIONS = {
  ADD_BOOKING: "ADD_BOOKING",       // Action to add a movie to bookings
  REMOVE_BOOKING: "REMOVE_BOOKING", // Action to remove a movie from bookings
  CLEAR_BOOKINGS: "CLEAR_BOOKINGS", // Action to clear all bookings
};

// REDUCER FUNCTION: Takes current state and action, returns new state
// This is pure - no side effects, always same output for same input
const bookingReducer = (state = initialState, action) => {
  // Based on action type, decide what to do with the state
  switch (action.payload) {
    // ADD_BOOKING: Adds a new movie to the bookings array
    case ACTIONS.ADD_BOOKING:
      return {
        ...state, // Spread existing state
        // Add new movie to bookings array (immutable approach)
        bookings: [...state.bookings, action.movie],
      };

    // REMOVE_BOOKING: Removes a movie at specific index
    case ACTIONS.REMOVE_BOOKING:
      return {
        ...state,
        // Filter out the movie at given index
        bookings: state.bookings.filter((_, index) => index !== action.index),
      };

    // CLEAR_BOOKINGS: Empty all bookings
    case ACTIONS.CLEAR_BOOKINGS:
      return {
        ...state,
        bookings: [], // Reset to empty array
      };

    // DEFAULT: Return current state (no change)
    default:
      return state;
  }
};

export default bookingReducer;
