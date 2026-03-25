# Entertainment App
A concise React demo for browsing movies and managing simple bookings (Redux + React Router).

Features

- Browse movies, view details, add/remove bookings.
- Booking state managed with Redux so the cart is available across pages.
- Client-side routing with React Router.

Quick start

```bash
npm install
npm start        # development
npm run build    # production bundle (used by Vercel)
```


Useful scripts

- `npm start` — run locally

Minimal structure

- `src/` — app source (see `src/App.js`, `src/index.js`, `src/redux/store.js`)
- `public/` — static assets

Tech

- React, React Router, Redux, react-scripts (Create React App)

React features (short)

- Function components and hooks (`useState`, `useEffect`) for component logic.
- Component composition and props for reusable UI (`MovieCard`, `MovieList`).
- Client-side routing with `react-router-dom` (v6) for pages and navigation.
- Redux via `react-redux` for predictable global booking state.

License

- No license specified. Add `LICENSE` to declare one.




