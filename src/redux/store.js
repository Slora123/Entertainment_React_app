// REDUX STORE: Central place to store application state
// Store holds the entire state tree of the application
// All components can access this single source of truth

import { createStore } from "redux";
import bookingReducer from "./bookingReducer";

// Create Redux store with bookingReducer
// The store manages state, enables dispatch of actions to update state,
// and allows components to subscribe to state changes
const store = createStore(bookingReducer);

export default store;
