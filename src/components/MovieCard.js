// REACT COMPONENT: MovieCard
// Displays a single movie card with booking button
// PROPS: Receives movie object and booking callback function

// FUNCTIONAL COMPONENT: MovieCard
// PROPS destructuring: { movie, onBook } are props passed from parent
// movie - An object containing movie details (id, title, price)
// onBook - A callback function called when "Book Now" button is clicked
function MovieCard({ movie, onBook }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px", borderRadius: "5px", width: "250px" }}>
      <h3>{movie.title}</h3>
      <p>Price per Ticket: ₹{movie.price}</p>
      {/* 
        PROPS: onBook is a function prop passed from parent
        onClick handler calls the function when button is clicked 
      */}
      <button 
        onClick={() => onBook(movie)}
        style={{ padding: "10px 20px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Book Now
      </button>
    </div>
  );
}

export default MovieCard;
