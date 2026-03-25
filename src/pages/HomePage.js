// Uses Redux to get bookings state and dispatch actions

import { useSelector, useDispatch } from 'react-redux';
import { addBooking } from '../redux/bookingActions';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import MovieCard from '../components/MovieCard';

function HomePage() {
  // REDUX - useSelector Hook: Accesses Redux store state
  // Gets the bookings array from Redux store
  const bookings = useSelector(state => state.bookings);
  
  // REDUX - useDispatch Hook: Gets dispatch function to trigger actions
  // Will be used to dispatch addBooking action
  const dispatch = useDispatch();
  const movies = [
    { id: 1, title: "Avengers", price: 300 },
    { id: 2, title: "Batman", price: 250 },
    { id: 3, title: "Jawan", price: 200 },
    { id: 4, title: "Inception", price: 280 }
  ];

  // REDUX action dispatcher: Called when movie is booked
  // Dispatches addBooking action to add movie to Redux store
  function handleBooking(movie) {
    dispatch(addBooking(movie));
  }

  return (
    <div>
      {/* PROPS: Passing totalTickets as a prop to Header component */}
      {/* Props are read-only data passed from parent to child component */}
      <Header totalTickets={bookings.length} />
      
      {/* PROPS: Passing movies array and handler function as props */}
      <h2>Now Showing</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* REACT COMPONENT: MovieCard is a reusable component */}
        {movies.map((movie) => (
          // PROPS: Each MovieCard receives movie object and click handler
          <MovieCard
            key={movie.id}
            movie={movie}
            onBook={() => handleBooking(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
