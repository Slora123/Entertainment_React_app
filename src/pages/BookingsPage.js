// Uses Redux to get bookings from store and dispatch remove action

import { useSelector, useDispatch } from 'react-redux';
import { removeBooking, clearBookings } from '../redux/bookingActions';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BookingsPage() {
  // REDUX - useSelector: Read bookings from Redux store
  const bookings = useSelector(state => state.bookings);
  
  // REDUX - useDispatch: Get dispatch function to trigger Redux actions
  const dispatch = useDispatch();

  // ROUTING - QUERY PARAMETERS: useSearchParams hook gets URL search params
  // Example URL: /bookings?sort=price&filter=pending
  // Query parameters are optional filters/settings passed in URL
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || 'default'; // Get sort param

  // REDUX action: Remove booking at specific index
  function handleRemoveBooking(index) {
    dispatch(removeBooking(index));
  }

  // REDUX action: Clear all bookings
  function handleClearAll() {
    dispatch(clearBookings());
  }

  // Calculate total amount
  const totalAmount = bookings.reduce((sum, movie) => sum + movie.price, 0);

  return (
    <div style={{ padding: '20px', background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ background: '#222', color: 'white', padding: '15px', marginBottom: '20px' }}>
        <h2>Your Bookings</h2>
        <p>Total Tickets: {bookings.length}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        {/* ROUTING - NAVIGATION: Link component for client-side navigation */}
        {/* Link prevents full page reload and uses React Router for navigation */}
        <Link to="/" style={{ marginRight: '15px', padding: '10px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Back to Movies
        </Link>
        <button onClick={handleClearAll} style={{ padding: '10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Clear All Bookings
        </button>
      </div>

      {/* Display bookings or empty message */}
      {bookings.length === 0 ? (
        <p>No tickets booked</p>
      ) : (
        <div>
          {bookings.map((movie, index) => (
            <div key={index} style={{ background: 'white', padding: '15px', marginBottom: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                {/* ROUTING - PATH PARAMETER: /movie/:id links to detail page */}
                {/* :id is a path parameter that identifies the resource */}
                <Link to={`/movie/${movie.id}`} style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>
                  {movie.title}
                </Link>
                <p>Price: ₹{movie.price}</p>
              </div>
              <button onClick={() => handleRemoveBooking(index)} style={{ padding: '8px 15px', background: '#ff6b6b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Remove
              </button>
            </div>
          ))}
          <div style={{ background: 'white', padding: '15px', marginTop: '20px', borderRadius: '5px', textAlign: 'right', fontSize: '20px', fontWeight: 'bold' }}>
            Total Amount: ₹{totalAmount}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingsPage;
