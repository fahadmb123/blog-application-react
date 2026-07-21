import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './providers/AuthProvider'


function App() {
  

  return (
    <BrowserRouter>
    <UserProvider>
       <AppRoutes/>
    </UserProvider>
    </BrowserRouter>
  )
}



export default App
