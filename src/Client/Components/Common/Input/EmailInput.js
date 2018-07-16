import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';

export default class EmailInput extends Component {
  state = {
    value: 'EasyForms@gmail.com',
  }

  handleUpdateValue = (value) => {
    this.setState({ value: value });
  }

  render() {
    // const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <Label_Div>  
      <Label>Your Contact Email</Label><P>( Required )</P><br />
      </Label_Div> 
        <Input
          // value={value}
          name="email"
          label="Email"
          onChange={this.handleUpdateValue}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          required
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
  type: 'Email',
})`
  width:100%;
  height: auto;
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