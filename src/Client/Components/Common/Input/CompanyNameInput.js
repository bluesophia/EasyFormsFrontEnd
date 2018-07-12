import React, { Component } from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';

export default class CompanyNameInput extends Component {
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
<<<<<<< HEAD
      <Label>Your Company Name</Label><br />
        <Input
          value={value}
          name="input-text"
          label="Company Name"
          onChange={this.handleUpdateValue}
        />
=======
      <Label>Your name</Label><br />
      <Input
        value={value}
        label="name"
        onChange={this.handleUpdateValue}
        required
      />
>>>>>>> 347a3a9c7f5fd62af1211ed6425fa636c9b49393
      </Container>
      </ThemeProvider>
    )
  }
}

const Container = styled.div`
  padding-left: 0.5em;
  margin-top: 3em;
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
  height:100vh;
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
<<<<<<< HEAD
  ${breakpoint('xs')`
    width:87vw;
    height:20px;
  `}
=======
  
>>>>>>> 347a3a9c7f5fd62af1211ed6425fa636c9b49393
  ${breakpoint('sm')`
    width:87vw;
    height:20px;
  `}
  ${breakpoint('md')`
  width:59vw;
  height:25px;
  `}
  ${breakpoint('lg')`
<<<<<<< HEAD
  width:25vw;
  height:30px;
  `}
  ${breakpoint('xl')`
  width:25vw;
  height:30px;
  `}
`
=======
  width:59vw;
  height:30px;
  `}
  ${breakpoint('xl')`
  width:61vw;
  height:30px;
  `}

`;
>>>>>>> 347a3a9c7f5fd62af1211ed6425fa636c9b49393
