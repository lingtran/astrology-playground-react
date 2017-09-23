const React = require('react')
const ZodiacForm = require('./ZodiacForm')

const Querent = (props) => {
  return (
    <div className="col">
      <h3>{props.header}</h3>
      <div className="ZodiacForm">
        <ZodiacForm />
      </div>
    </div>
  )
}

module.exports = Querent
