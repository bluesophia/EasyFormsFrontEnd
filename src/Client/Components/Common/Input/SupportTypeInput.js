import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';

export default class SupportTypeInput extends Component {
  state = {
    value: {},
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <Label>Support Type</Label><br />
      <Input
        value={value}
        options={optionList}
        name="input-select"
        label="label"
        onChange={this.handleUpdateValue}
      />
      </Container>
      </ThemeProvider>
    )
  }
}
const optionList = [
  { label: 'select ...', value: '' },
  { label: 'one', value: '1' },
  { label: 'two', value: '2' },
  { label: 'three', value: '3' },
  { label: 'four', value: '4' },
  { label: 'five', value: '5' },
];

const Container = styled.div`
  padding-left: 0.5em;
  margin-top: 3em;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.bold}
  color: ${Themes.colors.blueLight};
  `;

const Input = styled.input.attrs({
  type: 'select',
  size: props => props.small ? 3 : 8
})`
  background: none;
  border-radius: 5px;
  border: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  //padding: ${props => props.padding}
  padding: 0.5em;
  margin-top: 10px;
  width: 600px;
  height: 40px;
  &:focus {
    outline: none;
  }
`;