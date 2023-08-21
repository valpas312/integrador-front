import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//importaciones de redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './app/strore.js'
//importacion de react-query
import { QueryClient, QueryClientProvider } from 'react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={new QueryClient()}>
    <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
