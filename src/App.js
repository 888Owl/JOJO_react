import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainNavigation from './Navigation/MainNavigation';
import Info from './Pages/Info';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Contact from './Pages/Contact';
import Store from './Pages/Store';
import Footer from './UI/Footer';


const App = () => {
  return (
    <Router>
    <MainNavigation />
    <main>
    <Route path='/' exact={true}>
    <Home />
    </Route>
    <Route path='/contact' exact={true}>
    <Contact />
    </Route>
    <Route path='/info' exact={true}>
    <Info />
    </Route>
    <Route path='/jobs' exact={true}>
    <Jobs />
    </Route>
    <Route path='/store' exact={true}>
    <Store />
    </Route>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
