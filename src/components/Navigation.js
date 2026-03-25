// REACT COMPONENT: Navigation
// This component handles top-level navigation between pages
// Uses React Router's Link component for client-side navigation

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// FUNCTIONAL COMPONENT: Navigation
// React Components are JavaScript functions that return JSX
// This component displays navigation links to all pages
function Navigation() {
  // REDUX - useSelector Hook: Accesses Redux store state
  // Gets bookings array from store to show count in navigation
  const bookings = useSelector(state => state.bookings);

  return (
    <nav style={{
      background: '#333',
      color: 'white',
      padding: '15px 20px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        BookMyShow Clone
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* ROUTING - NAVIGATION: Link component for client-side navigation */}
        {/* Link prevents full page reload, uses React Router for navigation */}
        {/* Instead of <a> tag that causes page reload */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
          Home
        </Link>

        {/* ROUTING - NAVIGATION with dynamic count */}
        {/* Bookings count comes from Redux store */}
        <Link to="/bookings" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>
          My Bookings ({bookings.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
