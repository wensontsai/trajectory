import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
// import About from '../about'

const App = () => (
  <div  className="App">
    <header className="App-header">
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
    </main>

      <h1 className="App-title">Welcome to React</h1>

    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>

    <div style={{ textAlign: "center" }}>
      {/*<button onClick={() => this.send()}>Change Color</button>*/}
    </div>
  </div>
)


export default App;