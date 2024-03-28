import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from './pages/landingPage';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import LoginSignupPage from './pages/loginsignup';
import ConnectPage from './pages/connectpage';
import DoctorForm from './pages/connect/inputform';
import PractoInputPage from './pages/connect/practo';
import UserProfile from './pages/userprofile';
import LinkedInURL from './pages/connect/linkedin';
import DoctorList from './pages/viewAllPages';
import LinkedInUserProfile from './pages/profile';
import MapViewer from './pages/mapview';


function App() {
  return (
    <div className='index'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<AboutPage/>} /> 
          <Route path="/contact" element={<ContactPage/>} /> 
          <Route path="/loginsignup" element={<LoginSignupPage/>}/>
          <Route path="/connect" element={<ConnectPage/>}/>
          <Route path="/connect/inputform" element={<DoctorForm/>}/>
          <Route path="/connect/practo" element={<PractoInputPage/>}/>
          <Route path="/user/:userId" element={<UserProfile/>} />
          <Route path="/connect/linkedin" element={<LinkedInURL/>} />
          <Route path="/viewall" element={<DoctorList/>} />
          <Route path="/profile/:userId" element={<LinkedInUserProfile/>} />
          <Route path="/map" element={<MapViewer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
