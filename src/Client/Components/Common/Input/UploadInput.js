import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';

export default class UploadInput extends Component {
  state = {
    value: 'John Doe',
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <Label>Upload a screenshot</Label><br />
        <Input
          value={value}
          name="input-text"
          label="Company Name"
          onChange={this.handleUpdateValue}
        />
      </Container>
      </ThemeProvider>
    )
  }
}
const Container = styled.div`
  padding-left: 0.5em;
  margin-top: 1.5vw;
  width: 100%;
  height: 100%;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.bold}
  color: ${Themes.colors.blueLight};
  `;

const Input = styled.input.attrs({
  type: 'text',
})`
  width:100%;
  height:auto;
  background: none;
  border-radius: 5px;
  border: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  //padding: ${props => props.padding}
  padding: 0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  /*
  ${breakpoint('xs')`
    width:87vw;
    height:20px;
  `}
  ${breakpoint('sm')`
    width:87vw;
    height:20px;
  `}
  ${breakpoint('md')`
    width:59vw;
    height:25px;
  `}
  ${breakpoint('lg')`
    width:50vw;
    height:30px;
  `}
  ${breakpoint('xl')`
    width:42vw;
    height:30px;
  `}
  */
`