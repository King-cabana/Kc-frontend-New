import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar  from "./components/navbar/Navbar";
import GlobalStyle from './globalStyles'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/landingPage/Home'
import Sponsors from './pages/sponsors/Sponsors'
import Organizers from './pages/organizers/Organizers'
import ContactUs from './pages/contactUs/ContactUs'
import AboutUs from './pages/aboutUs/AboutUs'
import NoPage from './pages/noPage/NoPage'
import SignIn from "./pages/authentication/signIn/SignIn";
import Register from "./pages/authentication/register/Register"
import ForgotPassword from "./pages/authentication/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/authentication/resetPassword/ResetPassword"
import ResetSignIn from "./pages/authentication/resetPassword/ResetSignIn";
import ResetSuccessful from "./pages/authentication/resetPassword/ResetSuccessful";
import EventReport from "./pages/event/EventReport";
import EventCategories from "./pages/event/EventCategories";
import GoToTop from "./GoToTop"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
      <>
        <GoToTop/>
        <GlobalStyle/>
        <App />
      </>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/organizers" element={<Organizers />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/logIn" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/resetPasswordNew" element={<ResetSignIn/>} />
            <Route path="/resetSuccessful" element={<ResetSuccessful/>} />
            <Route path="/eventreportupload" element={<EventReport/>} />
            <Route path="/eventcategories" element={<EventCategories/>} />
            <Route path="*" element={<NoPage />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

