import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Header extends Component {
  renderGoodWord (goodWord, badWord) {
    const isGoodWord = true
    return isGoodWord ? goodWord : badWord
  }

  render () {
    const word = 'new app'
    return (
      <div>
        <h1>
          React {word}
          {this.renderGoodWord(
          <strong> is good</strong>,
          <span> is not good</span>
        )}
        </h1>
      </div>
    )
  }
}
ReactDOM.render(<Header />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
