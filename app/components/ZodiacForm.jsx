const React = require('react')
import { Button, Form, FormGroup, Label } from 'reactstrap'
import { moment } from 'moment'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import "react-day-picker/lib/style.css"

const DAY_FORMAT = "DD/MM/YYYY"

class ZodiacForm extends React.Component {
  constructor () {
    super();
    this.state = {
      selectedDay: undefined
    }
  }

  handleDayChange (selectedDay) {
    this.setState({ selectedDay: selectedDay });
  };

  render () {
    const datePickerProps = {
      enableOutsideDays: true,
    };

    const value = this.state.selectedDay ? this.state.selectedDay.format('DD/MM/YYYY') : '';

    return (
      <div className="DayPicker">
        <Form>
          <FormGroup>
            <DayPickerInput
              name="birthday"
              placeholder = "DOB: DD/MM/YYYY"
              format={DAY_FORMAT}
              value={value}
              onDayChange={this.handleDayChange}
            />
          </FormGroup>
          {' '}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

module.exports = ZodiacForm
