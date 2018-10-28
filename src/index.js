import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Title from './title';
import LikeButton from './likeButton'
import { BrowserRouter, Route } from 'react-router-dom'

class Header extends Component {
  render () {
    // const word = 'new app'
    return (
      <BrowserRouter>
        <div>
          {/* <Title /> */}
          <Route path='/books/:id' component={LikeButton} />
          <App />
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
