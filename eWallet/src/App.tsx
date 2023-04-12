import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AutheProvider } from "./context/authProvider"
import { ProtectedLayout } from "./components/protectedLayout"

import Profile from "./pages/profile"
import Login from "./pages/login"
import Home from "./pages/home"

function App() {

  return (
    <AutheProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          
          <Route path='/profile' element={<ProtectedLayout><Profile /></ProtectedLayout>}/>

          <Route path='*' element={<Navigate to='/' />}/>
          
        </Routes>
      </BrowserRouter>
    </AutheProvider>
  )
}

export default App
