import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';

export default class CompanyNameInput extends Component {
  state = {
    value: 'EasyForms',
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <Label>Company Name </Label><br />
        <Input
          type="text"
          value={value}
          name="input-text"
          label="Company Name "
          onChange={this.handleUpdateValue}
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
  width: 10%
  color: ${Themes.colors.formGrey};
  border: none;
  background: none;
  border-bottom: 1px solid ${Themes.colors.formGrey}
  &:focus {
    outline: none;
  }
`;