const React = require('react')
import { BrowserRouter, Route } from 'react-router-dom'
const Home = require('./Home')

const Main = () => (
  <main>
    <BrowserRouter>
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  </main>
)

module.exports = Main
