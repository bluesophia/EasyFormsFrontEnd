import React, { Component } from 'react'
import InputField from 'react-input-forms'

export default class SupportTypeInput extends Component {
  state = {
    value: {},
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    const optionList = [
      { label: 'select ...', value: '' },
      { label: 'one', value: '1' },
      { label: 'two', value: '2' },
      { label: 'three', value: '3' },
      { label: 'four', value: '4' },
      { label: 'five', value: '5' },
    ];
    return (
      <div className="container">
        <Input
          type="select"
          value={value}
          options={optionList}
          name="input-select"
          label="label"
          onChange={this.handleUpdateValue}
        />
      </div>
    )
  }
}