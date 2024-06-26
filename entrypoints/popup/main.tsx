import './style.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
)
