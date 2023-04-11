import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AutheProvider } from "./context/authProvider"

function App() {

  return (
    <AutheProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/home' />
          <Route path='/login' />
          <Route path='/profile' />
          
        </Routes>
      </BrowserRouter>
    </AutheProvider>
  )
}

export default App
