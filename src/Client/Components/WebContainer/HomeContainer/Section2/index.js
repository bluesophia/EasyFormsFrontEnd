import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine'

/** Images **/
import HomeSection02BgMd from '../../../../../Assets/Images/HomeSection02BgMd.png';
import WhyUs01 from '../../../../../Assets/Images/whyus_1.png';
import WhyUs02 from '../../../../../Assets/Images/whyus_2.png';
import WhyUs03 from '../../../../../Assets/Images/whyus_3.png';

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
const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`

const Section2 =() => (
            <ThemeProvider theme={Themes}>
                <Section02>
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
                </Section02>
            </ThemeProvider>
        )

/**** Section 02 ****/

const Section02 = styled.div`
    padding: 80px 8% 60px 8%;
    ${breakpoint('md')`
        height:100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background:url(${HomeSection02BgMd}) no-repeat center bottom;
        background-size:contain;
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
    margin-top:37px;
    margin-bottom:0;
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.bold};
    text-align:center;
    line-height:30px;
`
const Section02__Text = styled.div`
    margin-top:9px;
    ${Text};
`

export default Section2;