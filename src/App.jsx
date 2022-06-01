import React from 'react';
import './App.css';
import Form from './components/Form';
import TimeLine from './components/TimeLine';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <TimeLine />
      </div>
    );
  }
}

export default App;
