import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)

export default App
