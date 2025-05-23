import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './redux/store/store.ts'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position='bottom'/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
