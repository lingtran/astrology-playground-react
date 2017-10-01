const React = require('react')
const QuerentProfile = require('./QuerentProfile')

const Results = () => {
  return (
    <div className="Results container border-bottom">
      ...will figure out how to handle rendering and route
      <div className="row justify-content-around">
        <QuerentProfile />
        <QuerentProfile />
      </div>
    </div>
  )
}

module.exports = Results
