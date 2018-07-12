import React, { Component } from 'react'
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
      <Label_Div>  
      <Label>Your Company Name</Label><P>( Required )</P><br />
      </Label_Div> 
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
  margin-top: 3em;
  width: 100%;
  height: 100%;
`
const Label_Div = styled.div`
  display: flex;
  align-items: center;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.bold}
  color: ${Themes.colors.blueLight};
  `;

const P = styled.p`
  font-size: ${Themes.fontsize.p4}
  font-weight: ${Themes.fontWeight.light}
  color: ${Themes.colors.LightGrey};
  margin: 0;
  margin-left: 10px;
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  width:100%;
  height:100vh;
  background: none;
  border: 0px;
  border-bottom: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  //padding: ${props => props.padding}
  padding: 0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
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
  width:25vw;
  height:30px;
  `}
  ${breakpoint('xl')`
  width:25vw;
  height:30px;
  `}
`
