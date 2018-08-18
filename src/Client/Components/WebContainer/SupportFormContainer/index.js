import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';


import { UploadInput,
    EmailInput,
    MessageInput,
    FullNameInput }from '../../../Components/Common/Input';
import Button01 from '../../../Components/Common/Button/Button01';

class SupportFormContainer extends Component {
    state = {
        CompanyName: "",
        Fullname: "",
        Email:"",
        Message:""
      }
      
    _handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    // this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
        CompanyName: '',
        Fullname: "",
        Email:"",
        Message:""
    })
    
    var data = {
      CompanyName: this.state.CompanyName,
      FullName:this.state.FullName,
      Email: this.state.Email,
      Message: this.state.Message
        }
    console.log(data)
    fetch("/api/supportform", {
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
}

      _handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      

//     event.preventDefault();
//     var data = {
//       CompanyName: this.state.CompanyName,
//       FullName:this.state.FullName,
//       Email: this.state.Email,
//       Message: this.state.Message
//   }
//   console.log(data)
//   fetch("/api/support", {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(data)
//   }).then(function(response) {
//       if (response.status >= 400) {
//         throw new Error("Bad response from server");
//       }
//       return response.json();
//   }).then(function(data) {
//       console.log(data)    
//       if(data == "success"){
//          this.setState({msg: "Thanks for registering"});  
//       }
//   }).catch(function(err) {
//       console.log(err)
//   });
//   constructor(props){
//     super(props);
//     // this.state = {value: ''};
//     this.state = {
//       CompanyName: "",
//       FullName:"",
//       Email: "",
//       Message: ""
//     }

//     this._handleSubmit = this._handleSubmit.bind(this);
//   }

//   _handleSubmit(event) {
//     alert('submitted' + this.state.value);
//     event.preventDefault();
//     var data = {
//       CompanyName: this.state.CompanyName,
//       FullName:this.state.FullName,
//       Email: this.state.Email,
//       Message: this.state.Message
//   }
//   console.log(data)
//   fetch("/api/support", {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(data)
//   }).then(function(response) {
//       if (response.status >= 400) {
//         throw new Error("Bad response from server");
//       }
//       return response.json();
//   }).then(function(data) {
//       console.log(data)    
//       if(data == "success"){
//          this.setState({msg: "Thanks for registering"});  
//       }
//   }).catch(function(err) {
//       console.log(err)
//   });
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
  
    render(){
        return(
            <ThemeProvider theme={Themes}>
            <FormDiv>
                    <Form onSubmit={this._handleSubmit} method="POST">
                      <InputDiv>
                        <InputDiv__Left>
                        
                        <Container>
                        <Label_Div>  
                        {/* companyname */}
                        <Label>Your Company Name</Label><P>Required</P><br />
                        </Label_Div> 
                            <Input
                            value={this.state.value}
                            name="CompanyName"
                            label="Company Name"
                            placeholder="EasyForms"
                            onChange={this._handleChange}
                            />
                        </Container>
                        {/* fullname */}
                        <Container>
                        <Label_Div>  
                        <Label>Your Name</Label><P>Required</P><br />
                        </Label_Div> 
                            <Input
                            value={this.state.value}
                            name="FullName"
                            label="Company Name"
                            placeholder="John Doe"
                            onChange={this._handleChange}
                            />
                        </Container>
                        {/* email */}
                        <Container>
                        <Label_Div>  
                        <Label>Your Contact Email</Label><P>Required</P><br />
                        </Label_Div> 
                            <Input
                            value={this.state.value}
                            name="Email"
                            label="Email"
                            onChange={this._handleChange}
                            placeholder="EasyForms@gmail.com"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                            required
                            />
                        </Container>
                        </InputDiv__Left>
                        <InputDiv__Right>
                        {/* message */}
                        <Container>
                        <Label_Div>  
                        <Label>Let us know how we can help</Label><P>Required</P><br />
                        </Label_Div>
                            <Input
                            value={this.state.value}
                            name="Message"
                            label="label"
                            onChange={this._handleChange}
                            style={{height:this.props.height}}
                            />
                        </Container>
                          <UploadInput />
                        </InputDiv__Right>
                      </InputDiv>
                      <ButtonDiv>
                        <Button01 value="Tell us about Issue"/>
                      </ButtonDiv>      
                    </Form>
                  </FormDiv>
                  </ThemeProvider>
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
//companyInput
const Container = styled.div`
  padding-left: 0;
  margin-top: 0;
  width: 100%;
  height: 100%;
  margin-bottom:50px;
  ${breakpoint('lg')`
  width:70%;
  `}
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
  font-size: ${Themes.fontsize.p4};
  font-weight: ${Themes.fontWeight.light};
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
  padding-left:0.5em;
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
  width:25vw;
  height:30px;
  `}
  ${breakpoint('xl')`
  width:25vw;
  height:30px;
  `}
  */
`


export default SupportFormContainer;