import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';

export default class FullNameInput extends Component {
  constructor(props){
    super(props);
    this.state = {value: 'John Doe'};

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    this.setState({[event.target.name]: event.target.value});  
  }

  render() {
    // const { value } = this.state;
    return (
      <ThemeProvider theme={Themes}>
      <Container>
      <Label_Div>  
      <Label>Your Name</Label><P>Required</P><br />
      </Label_Div> 
        <Input
          value={this.state.value}
          name="FullName"
          label="Company Name"
          onChange={this._handleChange}
        />
      </Container>
      </ThemeProvider>
    )
  }
}
const Container = styled.div`
  padding-left: 0;
  margin-top: 0;
  width: 100%;
  height: auto;
  margin-bottom:50px;
`
const Label_Div = styled.div`
  display: flex;
  align-items: flex-end;
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
  padding:0;
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  box-sizing:border-box;
  width:100%;
  height:30px;
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
  ${breakpoint('lg')`
  width:70%;
  `}
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
  width:25vw;
  height:30px;
  `}
  ${breakpoint('xl')`
  width:25vw;
  height:30px;
  `}
  */
`