const React = require('react')
const ReactDOM = require('react-dom')
import { BrowserRouter, Route } from 'react-router-dom'
const Main = require('./Main')
const Nav = require('./Nav')

const App = () => (
  <div className="Application container">
    <Nav />
    <BrowserRouter>
      <Route exact path='/' component={Main} />
    </BrowserRouter>
  </div>
)

ReactDOM.render(<App />, document.getElementById('application'))
