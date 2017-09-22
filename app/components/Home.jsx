const React = require('react')
const Querent = require('./Querent')

class Home extends React.Component {
  render () {
    return (
      <div className="Home container">
        <div className="Querent">
          <Querent header="ME"/>
        </div>

        <div className="Querent">
          <Querent header="MY BOO THANG"/>
        </div>
      </div>
    )
  }
}

module.exports = Home;
