import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './providers/AuthProvider'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



function App() {
  

  return (
    <BrowserRouter>
    <UserProvider>
      <ToastContainer/>
       <AppRoutes/>
    </UserProvider>
    </BrowserRouter>
  )
}



export default App
