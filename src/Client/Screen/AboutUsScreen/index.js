import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';
import BigTitle from '../../Components/Common/Title/BigTitle.js';

const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`
const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`
const BlueBg = css`
  background:linear-gradient(${Themes.colors.blue},${Themes.colors.blueLight});
`
class AboutUsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      about: [] 
    };
  }
  _renderContents = () => {
    const Contents = this.state.about.map((about, index) => {
      if(index === 0) {
        return <Section1 title={about.title} description={about.description}/>
      } else if(index === 1) {
        return <Section2 title={about.title} description={about.description}/>
      } else if(index ===2){
      return <Section3 title={about.title} description={about.description}/>
      }
    });
    return Contents;
  }
  componentDidMount() {
    let self = this;
      var data = {
        id: this.state.id,
        title: this.state.title,   
        description: this.state.description
    }
    
    fetch('/api/about', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({about: data});
    }).catch(err => {
    console.log('caught it!',err);
    })

  } 
  render(){
    const { about } = this.state;
    return(
      <div>
      {this.state.about ? this._renderContents():'Loading'}
      </div>
    )
  }
}

class Section1 extends Component{
  render(){
    const {title, description, index} = this.props;
      return(
        <ThemeProvider theme={Themes}>  
        <Section01>
              <Section01__TitleDiv>
                  <Section01__Title>{this.props.title}</Section01__Title>
                  <HeaderLine />
                  <Section01__Text>{this.props.description}</Section01__Text>
              </Section01__TitleDiv>
        </Section01>  
        </ThemeProvider>     
        )
  }
}

class Section2 extends Component{
  render(){
    const {title, description, index} = this.props;
      return(
         <ThemeProvider theme={Themes}>  
           <Section02>
              <Section__Container>
              
                  <Section__Title>{this.props.title}</Section__Title>
                  <HeaderLine />
                  <Section__Text>{this.props.description}</Section__Text>
              </Section__Container>
          </Section02>
            </ThemeProvider>    
        )
  }
}
class Section3 extends Component{
  render(){
    const {title, description, index} = this.props;
      return(
         <ThemeProvider theme={Themes}> 
           <Section03>
              <Section__Container>
                  <Section__Title>{this.props.title}</Section__Title>
                  <HeaderLine />
                  <Section__Text>{this.props.description}</Section__Text>
              </Section__Container>
          </Section03>
         </ThemeProvider>  
        )
  }
}

const Section01 = styled.div`
  ${BlueBg};
  padding:40px 8%;
    ${breakpoint('lg')`
    padding:100px 15% 70px 15%;
  `}
`
const Section01__TitleDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  margin:0 auto;
    ${breakpoint('lg')`
        max-width: 1366px;
    `}
`
const Section01__Title = styled.div`
  ${BigTitle};
  margin:40px 0 0 0;
`
const Section01__Text = styled.div`
  display:none;
    ${breakpoint('md')`
      display:block;
      ${Text};
      color:white;
      width:90%
      font-weight:300;
    `}
`
const Section02 = styled.div`
  padding:70px 8%;
  ${breakpoint('lg')`
    padding:70px 15%;
  `}
`
const Section03 = styled.div`
  padding:70px 8%;
  ${LightGreyBg};
  ${breakpoint('lg')`
    padding:70px 15%;
  `}
`
const Section__Container = styled.div`
  margin:0 auto;
  ${breakpoint('lg')`
      max-width: 1366px;
  `}
`
const Section__Title = styled.div`
  ${Title}
`
const Section__Text = styled.div`
  ${Text};
  font-size:${Themes.fontsize.p3};
  line-height:23px;
    ${breakpoint('lg')`
    ${Text};
    `}
`

export default AboutUsScreen;