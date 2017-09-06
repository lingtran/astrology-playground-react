const React = require('react')
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class ZodiacForm extends React.Component {
  render () {
    return (
      <Form inline>
        <FormGroup>
          <Label for="test" hidden>Test</Label>
          <Input type="test" name="test" id="testInput" placeholder="Test" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    )
  }
}

module.exports = ZodiacForm
