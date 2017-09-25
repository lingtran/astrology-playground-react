const React = require('react')
const Querent = require('./Querent')

class Home extends React.Component {
  render () {
    return (
      <div className="Home container">
        <div className="Querents row justify-content-around">
          <Querent header="ME"/>
          <Querent header="MY BOO THANG"/>
        </div>
      </div>
    )
  }
}

module.exports = Home
