import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './providers/AuthProvider'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Suspense } from 'react'


function App() {
  

  return (
    <BrowserRouter>
    <UserProvider>
      <ToastContainer/>
      <Suspense fallback={<h1>Load...</h1>}><AppRoutes/></Suspense>
    </UserProvider>
    </BrowserRouter>
  )
}



export default App
