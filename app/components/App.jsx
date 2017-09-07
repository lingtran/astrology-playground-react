const React = require('react')
const ReactDOM = require('react-dom')
const Main = require('./Main')
const Header = require('./Header')

const App = () => (
  <div className="Application">
    <Header />
    <Main />
  </div>
)

ReactDOM.render(<App />, document.getElementById('application'))
