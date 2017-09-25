const React = require('react')
const PropTypes = require('prop-types')
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

    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDayChange (selectedDay) {
    this.setState({ selectedDay: selectedDay });
  };

  handleSubmit (event) {
    event.preventDefault();

    this.props.onSubmit(
      this.state.selectedDay
    )
  }

  render () {
    const datePickerProps = {
      enableOutsideDays: true,
    };

    const value = this.state.selectedDay ? this.state.selectedDay.format('DD/MM/YYYY') : '';

    return (
      <div className="DayPicker">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <DayPickerInput
              name="birthday"
              placeholder = "DOB: DD/MM/YYYY"
              format={DAY_FORMAT}
              value={value}
              onDayChange={this.handleDayChange}
            />
          </FormGroup>
          <Button
            className='button'
            type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

ZodiacForm.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

module.exports = ZodiacForm
