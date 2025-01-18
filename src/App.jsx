import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from "./components/header/Navbar"
import 'remixicon/fonts/remixicon.css';
import Index from './components/home/Index';
import Footer from './components/footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {

  return (
    <>
      <Navbar />
      <Index />
      <Footer />
    </>
  )
}

export default App
