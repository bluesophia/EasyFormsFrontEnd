import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import InputField from 'react-input-forms'

export default class FullNameInput extends Component {
  state = {
    value: '',
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="container">
      <ThemeProvider theme={Themes}>
        <InputField
          type="text"
          value={value}
          name="input-text"
          label="label"
          onChange={this.handleUpdateValue}
        />
        </ThemeProvider>
      </div>
    )
  }
}