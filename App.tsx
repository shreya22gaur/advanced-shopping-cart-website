import{Routes,Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import {Home} from "./pages1/Home"
import {Store} from "./pages1/store"
import {About} from "./pages1/about"
import {Navbar} from "./components/navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
function App() {
  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
    
  <Container className="md-4">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </Container>
  </ShoppingCartProvider>
  </>
  )
}

export default App
