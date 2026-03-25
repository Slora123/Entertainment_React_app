import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Redux Provider: Connects Redux store to React app
// This allows all components to access the Redux state
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider wraps all components to provide Redux store access */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);