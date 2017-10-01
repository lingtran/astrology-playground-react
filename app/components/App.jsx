const React = require('react')
const ReactDOM = require('react-dom')
import { BrowserRouter, Route } from 'react-router-dom'
const Main = require('./Main')
const Nav = require('./Nav')
const Footer = require('./Footer')

const App = () => (
    <div>
        <Nav />
        <div className="Application container">
            <BrowserRouter>
              <Route exact path='/' component={Main} />
            </BrowserRouter>
        </div>
        <Footer />
    </div>
)

ReactDOM.render(<App />, document.getElementById('application'))
