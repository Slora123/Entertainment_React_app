// REACT COMPONENT: MovieList
// PROPS: Receives movies array and addBooking callback function
// Uses .map() to create multiple MovieCard components

import MovieCard from "./MovieCard";

// FUNCTIONAL COMPONENT: MovieList
// PROPS destructuring: { movies, addBooking }
// movies - Array of movie objects to display
// addBooking - Callback function to handle bookings
function MovieList({ movies, addBooking }) {
  return (
    <div>
      <h2>Now Showing</h2>
      {/* 
        React renders multiple components using .map()
        .map() iterates over movies array and creates MovieCard for each
        PROPS DRILLING: Passing props down to child components
      */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          // REACT COMPONENT: Each MovieCard is a reusable component
          // KEY: unique identifier helps React identify which items changed
          // PROPS: Passing movie object and callback function as props
          <MovieCard
            key={movie.id}
            movie={movie}
            addBooking={addBooking}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
