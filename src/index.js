import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './components/App';
import store from './components/store/store';
const root = createRoot(document.getElementById('root'))
root.render(
<Provider store={store}>
    <App />
  </Provider>
  )