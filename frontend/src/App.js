import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import User from './pages/User';
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <NavBar />
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="admin" element={<Admin />} />
            <Route path="user/:username" element={<User />} />
            <Route path="user" element={<User />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

