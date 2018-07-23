import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import { Link } from 'react-router-dom';

/** Images **/
import CustomerStoriesBg from '../../../Assets/Images/customer-stories.jpg';

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
import Section05 from '../../Components/WebContainer/HomeContainer/Section5';
import Section06 from '../../Components/WebContainer/HomeContainer/Section6';
import Section07 from '../../Components/WebContainer/HomeContainer/Section7';

injectGlobal`
  body{
    font-family:Lato;
  }
`
const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
    ${breakpoint('lg')`
    font-size:${Themes.fontsize.h2};
    `}
`

// const Text = css`
//     font-size:${Themes.fontsize.p3};
//     color:${Themes.colors.black};
//     text-align:center;
//     line-height:20px;
// `
// const LightGreyBg = css`
//   background-color:rgba(238,238,238,0.6);
// `

class HomeScreen extends Component{  
    render(){
        return(

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
                    <Box>
                    <StyledCarousel />
                    </Box>
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
                <Section05 />
                <Section06 />
                <Section07 />
            </Home>
        </ThemeProvider>
        )
    }
}
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
    background-size:50% 100%;
        display:grid;
        grid-gap: 0;
        padding-left: 20px;
        grid-template-columns: 50% 50%;
        grid-template-rows: 140px 1fr;
        grid-template-areas: "a b"
                             "c d";
    `}
    ${breakpoint('lg')`
        grid-template-columns: 1fr 590px 590px 1fr;
        grid-gap: 0;
        grid-template-rows: 140px 1fr;
        grid-template-areas: "e a b f"
                             "g c d h";

    `}
    ${breakpoint('xl')`
        grid-template-columns: 1fr 683px 683px 1fr;
        grid-gap: 0;
        grid-template-rows: 140px 1fr;
        grid-template-areas: "e a b f"
                             "g c d h";

    `}
`
const Section03__Title = styled.div`
    ${Title};
    color:white;
    padding: 18% 10% 10%;
    ${breakpoint('md')`
    grid-area: a;
    padding-top:80px;
    padding-bottom:10px;
    margin:0;
    `}
    ${breakpoint('xl')`
    max-width: 683px;
    `}
`
const StyledCarousel = styled(CardCarousel)`
    margin-bottom:30px;
    margin:auto;
`
const Box= styled.div`
//  max-width: 683px;
${breakpoint('md')`
    // max-width: 530px;
    grid-area: c;
    `}
    ${breakpoint('lg')`
    max-width: 590px;
    `}
    ${breakpoint('xl')`
    max-width: 673px;
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
    padding-top:18%;
    padding-right:5%;
    padding-left:5%;
    // margin-top:30px;
    ${breakpoint('md')`
    margin-top:0;
    padding: 80px 0 10px;
    `}
    ${breakpoint('lg')`
    max-width:400px;
    margin:0 auto;
    `}
`
const Section04 = styled.div`
    padding: 2% 8% 40px 8%;
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
    padding-top:5%;
    ${breakpoint('lg')`
    max-width:400px;
    margin:0 auto;
    `}
`
const Section04__Logo = styled.img`
    width:40%;
    height:auto;
    margin:20px auto 40px auto;  
    ${breakpoint('sm')`
        width:146px;
    `}

`
export default HomeScreen;