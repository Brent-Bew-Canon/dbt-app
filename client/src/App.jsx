import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import './App.css'
import SkillsProvider from './context/Context.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer';
import Profile from './pages/Profile.jsx'
import SkillsCoach from './pages/SkillsCoach';
import Signup from './pages/Signup';

function App() {

  return (
    <>
      < SkillsProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/coach" element={<SkillsCoach />} />
          </Routes>
          <Footer />
        </Router>
      </SkillsProvider>
    </>
  )
}

export default App
