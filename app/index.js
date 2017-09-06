require('./main')

const React = require('react')
const ReactDOM = require('react-dom')

class HelloWorld extends React.Component {
  render () {
    return (
      <div className="Greeting">
        <p> Hello World </p>
      </div>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('application'))
