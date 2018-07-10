import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';

export default class EmailInput extends Component {
  state = {
    value: 'EasyForms@gmail.com',
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <Label>Email</Label><br />
        <Input
          type="email"
          value={value}
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          label="Email"
          onChange={this.handleUpdateValue}
          required
        />
      </Container>
      </ThemeProvider>
    )
  }
}
const Container = styled.div`
  padding-left: 0.5em;
`

const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.bold}
  color: ${Themes.colors.blueLight};
  `;

const Input = styled.input`
  padding: 0.5em;
  margin: 0;
  width: 14%;
  color: ${Themes.colors.formGrey};
  border: none;
  background: none;
  border-bottom: 1px solid ${Themes.colors.formGrey}
  &:focus {
    outline: none;
  }
`;