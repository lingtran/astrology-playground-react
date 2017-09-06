const React = require('react')
const ReactDOM = require('react-dom')
const ZodiacForm = require('./ZodiacForm')

class HelloWorld extends React.Component {
  render () {
    return (
      <div className="Greeting">
        <p> Hello World </p>
        <div className="ZodiacForm">
          <ZodiacForm />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('application'))
