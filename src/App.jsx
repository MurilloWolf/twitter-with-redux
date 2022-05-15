import React from 'react';
import './App.css';
import Form from './components/Form';
import Tweets from './components/Tweets';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Tweets />
      </div>
    );
  }
}

export default App;
