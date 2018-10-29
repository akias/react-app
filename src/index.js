import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Book from './book'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Error from './error'
import Login from './login'

class Header extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/books/:id' component={Book} />
            <Route path='/error' component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
      
    )
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
