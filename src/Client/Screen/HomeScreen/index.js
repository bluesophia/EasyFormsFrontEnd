import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';

/** Images **/
import CustomerStoriesBg from '../../../Assets/Images/customer-stories.jpg';
import Section06BgSm from '../../../Assets/Images/easyform-functions_mobile.png';
import Section06BgLg from '../../../Assets/Images/easyform-functions_web.png';
import Section07Icon01 from '../../../Assets/Images/in-the-office.png';
import Section07Icon02 from '../../../Assets/Images/on-the-go.png';
import Section07Icon03 from '../../../Assets/Images/for-management.png';

/** Logos **/
import Logo01 from '../../../Assets/Images/ak_council.jpg';
import Logo02 from '../../../Assets/Images/passrite.gif';
import Logo03 from '../../../Assets/Images/toyota.gif';
import Logo04 from '../../../Assets/Images/sharp.gif';
import Logo05 from '../../../Assets/Images/ncc.gif';
import Logo06 from '../../../Assets/Images/uoa.gif';
import Logo07 from '../../../Assets/Images/asb.gif';

import CardCarousel from '../../Components/Common/CardCarousel';
import Section1 from '../../Components/WebContainer/HomeContainer/Section1';
import Section2 from '../../Components/WebContainer/HomeContainer/Section2';
import FeaturesCarousel from '../../Components/Common/FeaturesCarousel';

injectGlobal`
  body{
    margin:0;
    padding:0;
    font-family:Lato;
  }
`
const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
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

const HomeContainer =() => (
            <ThemeProvider theme={Themes}>
            <Home>
            <Section0102>
                <Section1 />
                <Section2 />
            </Section0102>
                <Section0304>
                        <Section03__Title>
                            Customer Stories
                        </Section03__Title>
                        <StyledCarousel/>
                        <Section04__TitleDiv>
                            <Section04__Title>
                                Here Are Just a Few of the Clients <br />We Work With:
                            </Section04__Title>
                        </Section04__TitleDiv>
                        <Section04>
                            <Section04__Logos>
                                <Section04__Logo src={Logo01}/>
                                <Section04__Logo src={Logo02}/>
                                <Section04__Logo src={Logo03}/>
                                <Section04__Logo src={Logo04}/>
                                <Section04__Logo src={Logo05}/>
                                <Section04__Logo src={Logo06}/>
                                <Section04__Logo src={Logo07}/>
                            </Section04__Logos>
                        </Section04>
                </Section0304>
                <Section05>
                    <Section05__Container>
                            <Section05__Title>Easyforms Features</Section05__Title>
                            <HeaderLine />
                        <FeaturesCarousel />
                    </Section05__Container>
                </Section05>
                <Section06>
                    <Section06__TitleDiv>
                        <Section06__Title>Easyforms Function</Section06__Title>
                        <HeaderLine />
                    </Section06__TitleDiv>
                </Section06>
                <Section07>
                    <div>
                    <Section07__Title>We work in all business environments</Section07__Title>
                    <HeaderLine />
                    <Section07__Text>EasyForms can offer solutions to a wide range of businesses and industries.</Section07__Text>
                    </div>
                    <Section07__Contents>
                        <Section07__ContentDiv>
                            <Section07__Icon src={Section07Icon01} />
                            <Section07__SubTitle>In The Office</Section07__SubTitle>
                        </Section07__ContentDiv>
                        <Section07__ContentDiv>
                            <Section07__Icon src={Section07Icon02} />
                            <Section07__SubTitle>On The Go</Section07__SubTitle> 
                        </Section07__ContentDiv> 
                        <Section07__ContentDiv>                     
                            <Section07__Icon src={Section07Icon03} />    
                            <Section07__SubTitle>For Management</Section07__SubTitle> 
                        </Section07__ContentDiv>    
                    </Section07__Contents>                                   
                </Section07>
            </Home>
            </ThemeProvider>
        )

const Home = styled.div`
`

const Section0102 = styled.div`
        background-color:#E2E2E2;
`
const Section0304 = styled.div`
border:0;
background: 
linear-gradient(
    rgba(8,39,90,0.8), rgba(8,39,90,0.8)
),
url(${CustomerStoriesBg});
background-size:cover;
background-repeat:no-repeat;
background-position:left top;
display:flex;
flex-direction:column;
    ${breakpoint('md')`
        display:grid;
        grid-gap: 0 20px;
        padding-left: 20px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 140px 1fr;
        grid-template-areas: "a b"
                             "c d";
    `}
`
const Section03__Title = styled.div`
    ${Title};
    color:white;
    padding: 70px 37px;
    ${breakpoint('md')`
    grid-area: a;
    padding-top:80px;
    padding-bottom:10px;
    margin:0;
    `}
`
const StyledCarousel = styled(CardCarousel)`
    ${breakpoint('md')`
    grid-area: c;
    `}
`
/**** Section 04 ****/


const Section04__TitleDiv = styled.div`
    background-color:white; 
    ${breakpoint('md')`
    grid-area: b;
    `}
`
const Section04__Title = styled.div` 
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.bold};
    text-align:center;
    line-height:30px;
    padding-top:80px;
    margin-top: 30px;
    ${breakpoint('md')`
    margin-top:0;
    padding-top:80px; 
    padding-bottom:10px;  
    `}
    ${breakpoint('lg')`
    max-width:400px;
    margin:0 auto;
    `}
`
const Section04 = styled.div`
    padding: 20px 8% 40px 8%;
    background-color:white;
    ${breakpoint('md')`
    grid-area: d;
    `}
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
`
const Section04__Logo = styled.img`
    max-width:146px;
    height:auto;
    margin:20px auto 40px auto;
`
/**** Section 05 ****/

const Section05 = styled.div`
    ${LightGreyBg};
`
const Section05__Container = styled.div`
    margin:0 auto;
    padding: 60px 8%;
    ${breakpoint('md')`
        padding: 60px 10%;
    `}
    ${breakpoint('lg')`
        padding: 100px 10%;
        height:100vh;
        max-width: 1366px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `}
    ${breakpoint('xl')`
       height:80vh;
    `}
`
const Section05__Title = styled.div`
    ${Title};
`
/**** Section 06 ****/

const Section06 = styled.div`
    padding: 0 8%;
    background: url('${Section06BgSm}') no-repeat center;
    height:983px;
    ${breakpoint('lg')`
     background: url('${Section06BgLg}') no-repeat;
     background-position: center bottom;
     background-size:auto;
     padding:0;
     height:100vh;
    `}
    ${breakpoint('xl')`
    height:80vh;
    `}
`
const Section06__TitleDiv = styled.div`
    ${breakpoint('lg')`
        background-color: white;
        height:35%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
    `}
`
const Section06__Title = styled.div`
    padding-top:2em;
    ${Title};
`

/**** Section 07 ****/

const Section07 = styled.div`
    padding: 60px 8%; 
    box-sizing: border-box;
    ${LightGreyBg};
        ${breakpoint('lg')`
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    `} 
    ${breakpoint('xl')`
    height:80vh;
    `}  
`
const Section07__Title = styled.p`
    ${Title};
`
const Section07__Text = styled.div`  
    display:none;
        ${breakpoint('md')`
            display:block;
            font-size:${Themes.fontsize.p1};
            color:${Themes.colors.black};
            text-align:center;
        `}   
`
const Section07__Contents = styled.div`
    margin:0 auto;
        ${breakpoint('md')`
        display:flex;
        justify-content:space-around;
        align-item:center;
        margin-top:10vh;
        `} 
`
const Section07__ContentDiv = styled.div`
    margin:50px auto 0 auto;
    ${breakpoint('md')`
      width:240px;
    `} 
`
const Section07__Icon = styled.img`
    width:120px;
    height:auto;
    display:block;
    margin:0 auto;
`
const Section07__SubTitle = styled.p`
    ${Title};
    font-size:${Themes.fontsize.h3}; 
    font-weight:${Themes.fontsize.bold};
    letter-spacing:normal;
`

export default HomeContainer;