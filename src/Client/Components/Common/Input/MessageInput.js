import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';

export default class MessageInput extends Component {
  state = {
    value: {},
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
          <Label>Let us know how we can help</Label><P>Required</P><br />
          </Label_Div>
            <Input
              // value={value}
              name="text"
              label="label"
              onChange={this.handleUpdateValue}
              style={{height:this.props.height}}
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
  height: 100%;
  margin-bottom:3em;
`
const Label_Div = styled.div`
  display: flex;
  align-items: flex-end;
`
const Label = styled.label`
  font-size: ${Themes.fontsize.p2}
  font-weight: ${Themes.fontWeight.bold}
  color: ${Themes.colors.blueLight};
  `
const P = styled.p`
  font-size: ${Themes.fontsize.p4}
  font-weight: ${Themes.fontWeight.light}
  color: ${Themes.colors.LightGrey};
  margin: 0;
  margin-left: 10px;
  padding:0;
`
const Input = styled.textarea.attrs({
  maxlength: 500,
  rows:8
})`
  box-sizing:border-box;
  width:100%;
  height:auto;
  background: none;
  border-radius: 5px;
  border: 1px solid ${Themes.colors.formGrey};
  color: ${Themes.colors.formGrey};
  padding:0.5em;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
  /*
  ${breakpoint('xs')`
    width:87vw;
    height:50vw;
  `}
  ${breakpoint('sm')`
    width:87vw;
    height:50vw;
  `}
  ${breakpoint('md')`
    width:59vw;
    height:25vw;
  `}
  ${breakpoint('lg')`
    width:50vw;
    height:10vw;
  `}
  ${breakpoint('xl')`
    width:42vw;
    height:15wv;
  `}
  */
`