import NavBar  from "./components/navbar/Navbar";
import GlobalStyle from './globalStyles'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/landingPage/Home'
import Sponsors from './pages/sponsors/Sponsors'
import Organizers from './pages/organizers/Organizers'
import ContactUs from './pages/contactUs/ContactUs'
import AboutUs from './pages/aboutUs/AboutUs'
import NoPage from './pages/noPage/NoPage'
import React, {Fragment} from 'react'
import SignIn from "./pages/authentication/signIn/SignIn";


function App() {
  return (
    <BrowserRouter>
    
      <Fragment>
        <GlobalStyle/>
        <NavBar/>
      </Fragment>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/organizers" element={<Organizers />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/logIn" element={<SignIn />} />
            <Route path="*" element={<NoPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
