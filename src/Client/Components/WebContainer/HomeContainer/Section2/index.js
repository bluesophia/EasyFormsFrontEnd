import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import Title from '../../../Common/Title/Title';

/** Images **/
import HomeSection02BgMd from '../../../../../Assets/Images/HomeSection02BgMd.png';
import WhyUs01 from '../../../../../Assets/Images/whyus_1.jpg';
import WhyUs02 from '../../../../../Assets/Images/whyus_2.jpg';
import WhyUs03 from '../../../../../Assets/Images/whyus_3.jpg';
import { _breakpoint } from 'styled-components-breakpoint/dist/cjs/core';

const Text = css`
    font-size:${Themes.fontsize.p3};
    color:${Themes.colors.black};
    text-align:center;
    line-height:20px;
`
const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
class Section2 extends Component{
    render(){
        return(
            <Section02>
            <Container>
                <Section02__TitleDiv>
                    <Section02__Title>Why Easyforms?</Section02__Title>
                    <HeaderLine />
                </Section02__TitleDiv>
                <Section02__Contents>
                    <Section02__ContentDiv>
                        <Section02__Image src={WhyUs01} />
                        <Section02__Subtitle>Customised to your needs</Section02__Subtitle>
                        <Section02__Text>Our solutions can be designed 
                        specifically to your business needs. </Section02__Text>
                    </Section02__ContentDiv>
                    <Section02__ContentDiv>
                        <Section02__Image src={WhyUs02} />
                        <Section02__Subtitle>Streamline your processes</Section02__Subtitle>
                        <Section02__Text>Our app-based solution means 
                        you can wave goodbye to stacks of paperwork, 
                        inefficiencies, double handling + much more.</Section02__Text>
                    </Section02__ContentDiv>
                    <Section02__ContentDiv>
                        <Section02__Image src={WhyUs03} />
                        <Section02__Subtitle>User friendly designs</Section02__Subtitle>
                        <Section02__Text>Our solutions are easy-to-use and user friendly.</Section02__Text>
                    </Section02__ContentDiv>
                </Section02__Contents>
            </Container>
            </Section02>
        )
    }
}

/**** Section 02 ****/

const Section02 = styled.div`
    padding: 18% 8% 60px;
    ${breakpoint('md')`
    padding: 60px 8%;
    `}
    ${breakpoint('lg')`
        padding: 150px 8%;
        background:url(${HomeSection02BgMd}) no-repeat center bottom;
        background-size:100% 80%;
    `}
`
const Container = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        max-width: 1366px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `}
`
const Section02__TitleDiv = styled.div`
        
`
const Section02__Title = styled.p`
    ${Title};
`

const Section02__Contents = styled.div`
    ${breakpoint('md')`
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        grid-column-gap:10px;
    `}
`
const Section02__ContentDiv = styled.div`
    margin:60px auto 0 auto;
    width:100%;
    ${breakpoint('lg')`
    width:300px;
    margin:60px auto 0 auto;
`}

`
const Section02__Image = styled.img`
    width:100%;
    ${Shadow};
`
const Section02__Subtitle = styled.p`
    margin-top:20px;
    margin-bottom:0;
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.bold};
    text-align:center;
    padding:0;
    ${breakpoint('lg')`
      margin-top:37px;
      font-size:${Themes.fontsize.h2};    
      line-height:30px;    
    `}
`
const Section02__Text = styled.div`
    margin-top:9px;
    ${Text};
`

export default Section2;