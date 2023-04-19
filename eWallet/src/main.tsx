import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import App from './App'
import { GlobalStyle } from './pages/Styles/General_CSS';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
