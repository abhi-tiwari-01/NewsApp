import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,  // Import Routes instead of Switch
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className='bg-dark'>
        <Router>
          <Navbar />
          <Routes>  {/* Use Routes instead of Switch */}
            <Route exact path="/" element={<News key ="general" pageSize={9} country="us" category='general' />} />
            <Route exact path="/business" element={<News key ="business" pageSize={9} country="us" category='business' />} />
            <Route exact path="/technology" element={<News key ="technology" pageSize={9} country="us" category='technology' />} />
            <Route exact path="/entertainment" element={<News key ="entertainment" pageSize={9} country="us" category='entertainment' />} />
            <Route exact path="/health" element={<News key ="health" pageSize={9} country="us" category='health' />} />
            <Route exact path="/science" element={<News key ="science" pageSize={9} country="us" category='science' />} />
            <Route exact path="/sports" element={<News key ="sports" pageSize={9} country="us" category='sports' />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
