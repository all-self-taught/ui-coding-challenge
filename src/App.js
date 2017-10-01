import React, { Component } from 'react';
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import FieldList from './Containers/FieldList'

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <FieldList />
      </div>
    );
  }
}

export default App;
