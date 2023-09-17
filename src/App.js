import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route to="/" />
          <Route to="/signup" />
          <Route to="/forgot-password" />
          <Route to="/verification-code" />
          <Route to="/reset-password" />
          <Route to="/accept" />
          <Route to="/login" />
        </Routes>
      </div>
    )
  }
}

export default App;
