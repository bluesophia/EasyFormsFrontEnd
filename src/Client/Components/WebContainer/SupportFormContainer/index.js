import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';


import { UploadInput,
    CompanyNameInput,
    EmailInput,
    MessageInput,
    FullNameInput }from '../../../Components/Common/Input';
import Button01 from '../../../Components/Common/Button/Button01';

class SupportFormContainer extends Component {
  constructor(props){
    super(props);
    // this.state = {value: ''};
    this.state = {
      CompanyName: "",
      FullName:"",
      Email: "",
      Message: ""
    }

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    alert('submitted' + this.state.value);
    event.preventDefault();
    var data = {
      CompanyName: this.state.CompanyName,
      FullName:this.state.FullName,
      Email: this.state.Email,
      Message: this.state.Message
  }
  console.log(data)
  fetch("/api/support", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
  }).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
  }).then(function(data) {
      console.log(data)    
      if(data == "success"){
         this.setState({msg: "Thanks for registering"});  
      }
  }).catch(function(err) {
      console.log(err)
  });
    // var data = {
    //   "CompanyName": this.state.valvue,
    //   "FullName":this.state.value,
    //   "Email": this.state.value,
    //   "Message": this.state.value
    // }
    // fetch('/api/support', {
    //   method:'POST',
    //   headers: {'Content-Type':'application/json'},
    //   body: Json.stringfy(data)
    //   )}.then(function(response){
    //     if(response.status>=400) {
    //       throw new Error("Bad response from server")
    //     }
    //     return response.json();
    //   }).then(function(data) {
    //     console.log(data)    
    //     if(data == "success"){
    //        this.setState({msg: "Thanks for registering"});  
    //     }
    // }).catch(function(err) {
    //     console.log(err)
    // });
  }

    render(){
        return(
            <FormDiv>
                    <Form onSubmit={this._handleSubmit} method="POST">
                      <InputDiv>
                        <InputDiv__Left>
                          <CompanyNameInput />
                          <FullNameInput />
                          <EmailInput />
                        </InputDiv__Left>
                        <InputDiv__Right>
                            <MessageInput />
                          <UploadInput />
                        </InputDiv__Right>
                      </InputDiv>
                      <ButtonDiv>
                        <Button01 value="Tell us about Issue"/>
                      </ButtonDiv>      
                    </Form>
                  </FormDiv>
        )
    }
}

const FormDiv = styled.div` 
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    margin:0 -5%;
    ${breakpoint('md')`
    order:3;  
    grid-column:1/3;
    margin:0;
    `}
      ${breakpoint('lg')`
        grid-column:unset;
    `}
`
const Form = styled.form`
  height:auto;
  background-color:white;
  box-shadow:0 0 10px rgba(0,0,0,0.2);
  padding:50px 8% 30px 8%;
  border-radius:25px;
    ${breakpoint('lg')`
    margin-top:30px;
  `}
`
const InputDiv = styled.div`
  margin-bottom:50px;
  display:flex;
  flex-direction:column;
`
const InputDiv__Left = styled.div`
   ${breakpoint('lg')`
        margin-bottom:50px;
 `}
`
const InputDiv__Right = styled.div``

const ButtonDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  ${breakpoint('lg')`
    width:60%;  
    margin:0 auto;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  `}
`
const Form__Text = styled.div`
  margin:25px auto 10px auto;
  color:${Themes.colors.blueLight};
  font-size:${Themes.fontsize.p2};
  font-weight:${Themes.fontWeight.black};
`

export default SupportFormContainer;