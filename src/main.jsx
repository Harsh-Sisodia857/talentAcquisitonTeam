import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormState from './Context/FormState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormState>
        <App />    
    </FormState>

  </React.StrictMode>,
)
