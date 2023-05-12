import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './styles/css/index.scss';
import App from './components/App';
import createAppStore from './store/config/storeConfig'
import { ThemeProvider } from './context/themeContext'

const appStore = createAppStore()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
