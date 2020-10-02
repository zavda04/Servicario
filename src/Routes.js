import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from "./pages/Home";
import FaqPage from "./pages/Faq";
import ServicesPage from "./pages/Services";
import ProfilePage from "./pages/Profile";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ServiceDetailPage from "./pages/ServiceDetail";
import SecretPage from './pages/Secret';

import ServiceCreatePage from './pages/services/ServiceCreate';


 const Routes = () => {
    return (
        <Switch>
          <Route path="/secret">
          <SecretPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/services/new">
          <ServiceCreatePage />
        </Route>
        <Route path="/services/:serviceId">
          <ServiceDetailPage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/faq">
          <FaqPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    )
}

export default Routes;
