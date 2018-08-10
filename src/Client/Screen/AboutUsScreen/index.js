import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import Text from '../../Components/Common/Text';

/** Images **/
import AboutSection01BgMd from '../../../Assets/Images/AboutSection01Bg.png';
import HomeSection01BgSm from '../../../Assets/Images/HomeSection01BgSm.png';
import mainImage from '../../../Assets/Images/AboutSection01Image.png';

/** components **/
import Title from '../../Components/Common/Title/Title';
import BigTitle from '../../Components/Common/Title/BigTitle';

class AboutUsScreen extends Component {
    //contructor
    constructor(props) {
      super(props);
      this.state = { 
        about: [] 
      };
    }
    //render function
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
    
    //data fetch
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
              <Section01__Container>             
                <Section01__TitleDiv>
                    <Section01__Title>{this.props.title}</Section01__Title>
                    <Section01__Text>{this.props.description}</Section01__Text>
                </Section01__TitleDiv>
                <Section01__Image><MainImage src={mainImage}/></Section01__Image> 
              </Section01__Container>
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
                    <Section__Title>{this.props.title}</Section__Title>
                    <Section__Text>{this.props.description}</Section__Text>
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
                  <Section__Title>{this.props.title}</Section__Title>
                  <Section__Text>{this.props.description}</Section__Text>
            </Section03>
         </ThemeProvider>  
        )
  }
}
  
// const Section0102 = styled.div`
//     background-color:${Themes.colors.veryLightGrey};
// `
const Section01 = styled.div`
  margin:0;
  background: url('${HomeSection01BgSm}');
  background-position:center top;
  background-repeat:no-repeat;
  background-size:100% 100%;
  ${breakpoint('md')`
      background: url('${AboutSection01BgMd}');
      background-position:left top;
      background-repeat:no-repeat;
      background-size:100% 100%;     
  `}
  ${breakpoint('lg')`
      background-size:100% 90%;
  `}
`
const Section01__Container = styled.div`
  padding:18% 8% 10% 8%;
  display:flex;
  flex-direction:column;
  align-items:center;
      ${breakpoint('md')`
          padding:5% 10% 8% 10%;
          justify-content:space-between;
          flex-direction:row;
          align-items:flex-start;           
      `}
      ${breakpoint('lg')`
          max-width: 1366px;
          margin:0 auto;
          padding: 70px 8% 30px 8%;
          align-items:flex-start; 
      `}
`
const Section01__Image = styled.div`
    width:100%;
        ${breakpoint('md')`
            margin-left:0;
        `}
`
const MainImage = styled.img`
    width:inherit;
    height:auto;
`
const Section01__TitleDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  margin:0 auto;
    ${breakpoint('md')`
      align-items:flex-start;
      width:100%;
      margin:0 40px 0 0;
    `}
    ${breakpoint('lg')`
      margin-top:50px;
    `}
`
const Section01__Title = styled.div`
  ${BigTitle};
  color:white;
  text-align:center;
  margin:0 10% 40px 10%;
    ${breakpoint('md')`
        text-align:left;
        margin:0px 20px 20px 0px;     
    `}
    ${breakpoint('lg')`
    `}
`
const Section01__Text = styled.div`
  display:none;
    ${breakpoint('md')`
      display:block;
      ${Text};
      font-size:${Themes.fontsize.p2} !important;
      line-height:22px !important;
      color:white;
      font-weight:${Themes.fontWeight.light};
    `}
    ${breakpoint('lg')`
      font-size:${Themes.fontsize.p1} !important;
      line-height:28px !important;  
    `}
`
const Section02 = styled.div`
  padding:70px 8%;
  ${breakpoint('lg')`
    padding:70px 15%;
    display:grid;
    grid-template-columns:25% 75%;
    max-width: 1366px;
  `}
`
const Section03 = styled.div`
  padding:70px 8%;
  background-color:${Themes.colors.veryLightGrey};
  ${breakpoint('lg')`
    padding:70px 15%;
    display:grid;
    grid-template-columns:25% 75%;
    max-width: 1366px;
  `}
`
const Section__Title = styled.div`
  ${Title};
  margin-bottom:40px;
  ${breakpoint('lg')`
    text-align:left;
  `}
`
const Section__Text = styled.div`
  ${Text};
  font-size:${Themes.fontsize.p3};
  line-height:23px;
`

export default AboutUsScreen;