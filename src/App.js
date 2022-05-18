import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomeScreen, NotFoundScreen, RegisterScreen, LoginScreen } from './screens/screens.js';
import { Header, Footer, Navigation } from './components/components.js';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Navigation />
          <Header />
           <Routes>
               <Route path="/" element={<HomeScreen />}/>
               <Route path="/register" element={<RegisterScreen />}/>
               <Route path="/login" element={<LoginScreen />}/>
               <Route path="/*" element={<NotFoundScreen />}/>
           </Routes>
           <Navigation />
           <Footer />
        </div>
    </Router>
  );
}

export default App;
