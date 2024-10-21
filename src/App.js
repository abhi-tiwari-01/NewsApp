import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div className='bg-dark'>
        <Navbar/>
        <News pageSize={9} country="us" category='sports'/>
      </div>
    )
  }
}
