import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../Assets/Styles/Themes';
// import HeaderLine from '../../Components/Common/HeaderLine';
import Title from '../../Components/Common/Title/Title';


/** Images **/
import CustomerStoriesBg from '../../../Assets/Images/customer-stories.jpg';
import HomeSection01BgSm from '../../../Assets/Images/HomeSection01BgSm.svg';


/** Logos **/
import Logo01 from '../../../Assets/Images/auckland.gif';
import Logo02 from '../../../Assets/Images/passrite.gif';
import Logo03 from '../../../Assets/Images/toyota.gif';
import Logo04 from '../../../Assets/Images/sharp.gif';
import Logo05 from '../../../Assets/Images/ncc.gif';
import Logo06 from '../../../Assets/Images/uoa.gif';
import Logo07 from '../../../Assets/Images/asb.gif';

import CardCarousel from '../../Components/Common/CardCarousel';
import Section01 from '../../Components/WebContainer/HomeContainer/Section1';
import Section02 from '../../Components/WebContainer/HomeContainer/Section2';
import Section03 from '../../Components/WebContainer/HomeContainer/Section3';
import Section06 from '../../Components/WebContainer/HomeContainer/Section6';
import Section07 from '../../Components/WebContainer/HomeContainer/Section7';

injectGlobal`
  body{
    font-family:Lato;
  }
`
const Text = css`
    font-size:${Themes.fontsize.p3};
    color:${Themes.colors.black};
    text-align:center;
    line-height:20px;
`
const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`

class HomeScreen extends Component{  
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <div>
                    <Section0102>
                        <Section01 />
                        <Section02 />
                    </Section0102>
                    <Section03 />
                    <Section06 />
                    <Section0304>
                        <Section04>
                            <Section04__TitleDiv>
                                <Section04__Title>
                                    Here Are Just a Few of the Clients <br />We Work With:
                                </Section04__Title>
                            </Section04__TitleDiv>
                                <Section04__LogosDiv>
                                    <Section04__Logos>
                                        <Section04__Logo src={Logo01}/>
                                        <Section04__Logo src={Logo02}/>
                                        <Section04__Logo src={Logo03}/>
                                        <Section04__Logo src={Logo04}/>
                                        <Section04__Logo src={Logo05}/>
                                        <Section04__Logo src={Logo06}/>
                                        <Section04__Logo src={Logo07}/>
                                    </Section04__Logos>
                                </Section04__LogosDiv>
                        </Section04>
                        <Section05>
                            <Section05__Div>
                                <Section05__Title>
                                    Customer Stories
                                </Section05__Title>
                                <StyledCarousel />
                            </Section05__Div>
                        </Section05>

                    </Section0304>
                    

                    <Section07 />
                </div>
           </ThemeProvider>
        )
    }
}
const Section0102 = styled.div`
    background-color:${Themes.colors.veryLightGrey};
`

const Section0304 = styled.div`
    ${breakpoint('md')`
        display:flex;
        flex-direction:row;
    `}
    ${breakpoint('lg')`
    `}
    `
const Section05 = styled.div`
    min-width: 0px;
    background: 
    linear-gradient(
        rgba(8,39,90,0.75), rgba(8,39,90,0.75)
    ),
    url(${CustomerStoriesBg});
    background-size:100% cover;
    background-repeat:no-repeat;
    background-position:center top;
    padding-bottom:40px;
        ${breakpoint('md')`
            width:50%;
        `}
`
const Section05__Div = styled.div`
    margin:0 auto;
    max-width:600px;
    ${breakpoint('xl')`
        margin-right:50px;
    `}    
`
const Section05__Title = styled.div`
    ${Title};
    color:white;
    padding:60px 37px;
        ${breakpoint('md')`
        padding-top:80px;
        padding-bottom:80px;
        margin:0 auto;
        `}
`
const StyledCarousel = styled(CardCarousel)`
   min-width: 0px;
`
/**** Section 04 ****/

const Section04 = styled.div`
    min-width: 0px;
    ${breakpoint('md')`
        width:50%;
    `}
`
const Section04__TitleDiv = styled.div`
`
const Section04__Title = styled.div` 
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.bold};
    text-align:center;
    line-height:30px;
    padding-top:60px;
    padding-right:5%;
    padding-left:5%;
    margin-top:30px;
        ${breakpoint('md')`
        margin-top:0;
        padding-top:80px; 
        padding-bottom:10px;  
        `}
        ${breakpoint('lg')`
        max-width:400px;
        margin:0 auto;
        `}
        ${breakpoint('xl')`
        margin-left:50px;
        `} 
`
const Section04__LogosDiv = styled.div`
    padding: 20px 8% 40px 8%;
`
const Section04__Logos = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5%;
    margin: auto;
    padding-top:50px;
    ${breakpoint('lg')`
    max-width:400px;
    margin:0 auto;
    `}
    ${breakpoint('xl')`
    margin-left:50px;
    `} 
`
const Section04__Logo = styled.img`
    width:100px;
    height:auto;
    margin:20px auto 40px auto;  
    ${breakpoint('sm')`
        width:146px;
    `}

`
export default HomeScreen;