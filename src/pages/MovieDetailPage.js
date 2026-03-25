// PAGE COMPONENT: MovieDetailPage shows details of a single movie
// Examples: PATH PARAMETERS, URL parameters, Routing navigation

import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addBooking } from '../redux/bookingActions';

function MovieDetailPage() {
  // ROUTING - PATH PARAMETERS: useParams hook extracts URL parameters
  // URL format: /movie/:id
  // :id is a PATH PARAMETER - a variable part of the URL
  // Values passed through the URL path itself
  const { id } = useParams();

  // REDUX - useSelector: Get bookings from Redux store
  const bookings = useSelector(state => state.bookings);
  
  // REDUX - useDispatch: Get dispatch function for Redux actions
  const dispatch = useDispatch();

  // Sample movies - in real app, would fetch from database using id
  const movies = [
    { id: 1, title: "Avengers", price: 300, description: "Superhero action film", year: 2022 },
    { id: 2, title: "Batman", price: 250, description: "Dark Knight returns", year: 2023 },
    { id: 3, title: "Jawan", price: 200, description: "Bollywood action thriller", year: 2023 },
    { id: 4, title: "Inception", price: 280, description: "Mind-bending sci-fi", year: 2023 }
  ];

  // Find movie by id from PATH PARAMETER
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  // REDUX action: Add movie to bookings
  function handleBooking() {
    dispatch(addBooking(movie));
  }

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ background: '#222', color: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h1>{movie.title}</h1>
        <p><strong>Price:</strong> ₹{movie.price}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Description:</strong> {movie.description}</p>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleBooking} style={{ padding: '12px 25px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
          Book This Movie
        </button>
        
        {/* ROUTING - NAVIGATION: Link for client-side navigation */}
        {/* Link component is used instead of <a> to prevent full page reload */}
        <Link to="/bookings" style={{ padding: '12px 25px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', textDecoration: 'none', fontSize: '16px' }}>
          View My Bookings ({bookings.length})
        </Link>
        
        <Link to="/" style={{ padding: '12px 25px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', textDecoration: 'none', fontSize: '16px' }}>
          Back to Movies
        </Link>
      </div>
    </div>
  );
}

export default MovieDetailPage;
