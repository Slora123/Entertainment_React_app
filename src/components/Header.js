// REACT COMPONENT: Header
// PROPS: This component receives totalTickets as a prop from parent
// PROPS are read-only data passed from parent component to child component

// FUNCTIONAL COMPONENT with PROPS
// Function parameters define what PROPS this component accepts
// { totalTickets } - Destructured PROPS from parent
function Header({ totalTickets }) {
  return (
    <div style={{ background: "#222", color: "white", padding: "15px" }}>
      <h2>BookMyShow Clone</h2>
      {/* Props are accessed by their name - here we use totalTickets prop */}
      <p>Total Tickets Booked: {totalTickets}</p>
    </div>
  );
}

export default Header;
