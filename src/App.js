import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingsPage from './pages/BookingsPage';
import MovieDetailPage from './pages/MovieDetailPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
