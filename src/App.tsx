import Footer from './components/Footer'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactForm from './pages/ContactForm'



function App() {


  return (
    <Router>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>


      </main>
      <Footer />

    </Router>


  )
}

export default App
