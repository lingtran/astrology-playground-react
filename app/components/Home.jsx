const React = require('react')
const ZodiacForm = require('./ZodiacForm')

class Home extends React.Component {
  render () {
    return (
      <div className="Home">
        <p> Hello World </p>
        <div className="ZodiacForm">
          <ZodiacForm />
        </div>
      </div>
    )
  }
}

module.exports = Home
