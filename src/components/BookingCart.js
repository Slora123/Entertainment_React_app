// REACT COMPONENT: BookingCart
// PROPS: Receives bookings array from parent component
// Displays all booked tickets and calculates total amount

// FUNCTIONAL COMPONENT: BookingCart
// PROPS destructuring: { bookings }
// bookings - Array of booked movie objects
function BookingCart({ bookings }) {

  // Calculates total amount using reduce() array method
  // reduce() accumulates values: takes each movie price and adds to sum
  const totalAmount = bookings.reduce((sum, movie) => sum + movie.price, 0);
  
  return (
    <div style={{ background: '#f5f5f5', padding: '20px', marginTop: '20px', borderRadius: '5px' }}>
      <h2>Your Bookings</h2>

      {/* Conditional rendering: Show message if no bookings */}
      {bookings.length === 0 && <p>No tickets booked yet</p>}

      {/* 
        React renders multiple elements using .map()
        PROPS are used: each movie comes from bookings array (passed as prop)
      */}
      {bookings.map((movie, index) => (
        <div key={index} style={{ background: 'white', padding: '10px', marginBottom: '10px', borderRadius: '3px' }}>
          <p><strong>{movie.title}</strong> - ₹{movie.price}</p>
        </div>
      ))}

      {/* Display total if there are bookings */}
      {bookings.length > 0 && (
        <h3 style={{ marginTop: '15px', textAlign: 'right' }}>Total Amount: ₹{totalAmount}</h3>
      )}
    </div>
  );
}

export default BookingCart;
