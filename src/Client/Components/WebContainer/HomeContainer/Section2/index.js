import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import BigTitle from '../../../Common/Title/BigTitle';

/** Images **/
import HomeSection02BgMd from '../../../../../Assets/Images/HomeSection02BgMd.png';
import HomeSection02Image from '../../../../../Assets/Images/HomeSection02Image.png';
import WhyUs01 from '../../../../../Assets/Images/whyicon01.png';
import WhyUs02 from '../../../../../Assets/Images/whyicon02.png';
import WhyUs03 from '../../../../../Assets/Images/whyicon03.png';
import { _breakpoint } from 'styled-components-breakpoint/dist/cjs/core';

/** Components **/
import Text from '../../../Common/Text';

const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`
class Section2 extends Component{
    render(){
        return(
            <Section02>
                <Container>
                    <Section02__LeftDiv>
                        {/* <Section02__LeftDivContainer> */}
                        <Section02__TitleDiv>
                            <Section02__Title>Why Easyforms?</Section02__Title>
                        </Section02__TitleDiv>
                        <Section02__Contents>
                            <Section02__ContentDiv>
                                <Section02__Image src={WhyUs01} />
                                <div>
                                    <Section02__Subtitle>Customised to your needs</Section02__Subtitle>
                                    <Section02__Text>Our solutions can be designed 
                                    specifically to your business needs. </Section02__Text>
                                </div>
                            </Section02__ContentDiv>
                            <Section02__ContentDiv>
                                <Section02__Image src={WhyUs02} />
                                <div>
                                    <Section02__Subtitle>Streamline your processes</Section02__Subtitle>
                                    <Section02__Text>Our app-based solution means 
                                    you can wave goodbye to stacks of paperwork, 
                                    inefficiencies, double handling + much more.</Section02__Text>
                                </div>
                            </Section02__ContentDiv>
                            <Section02__ContentDiv>
                                <Section02__Image src={WhyUs03} />
                                <div>
                                <Section02__Subtitle>User friendly designs</Section02__Subtitle>
                                <Section02__Text>Our solutions are easy-to-use and user friendly.</Section02__Text>
                                </div>
                            </Section02__ContentDiv>
                        </Section02__Contents>
                        {/* </Section02__LeftDivContainer> */}
                    </Section02__LeftDiv>
                </Container>
                <Section02__RightDiv>
                    {/* <Section02__RightDivImage src={HomeSection02Image} /> */}
                </Section02__RightDiv>
            </Section02>
        )
    }
}

/**** Section 02 ****/

const Section02 = styled.div`
    padding: 18% 8% 60px;
    ${breakpoint('md')`
    padding: 60px 20%;
    `}
    ${breakpoint('lg')`
        padding:0;
        background:url(${HomeSection02BgMd}) no-repeat right bottom;
        background-size:100%;
        height:768px;
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-column-gap:40px;
    `}
`
const Container = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        margin:auto 0 auto auto;
        // max-width:683px;
        // display:flex;
        // justify-contents:space-between;
        // flex-direction:row;
    `}
`
const Section02__LeftDiv = styled.div`
    ${breakpoint('lg')`
        // max-width: 623px;
        margin-right:0;
        // display:flex;
        // justify-contents:space-between;
        // align-items:center;
        // flex-direction:column;
    `}
    ${breakpoint('xl')`
        width:683px;
    `}
`
const Section02__LeftDivContainer = styled.div`

`
const Section02__TitleDiv = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        margin-left:auto;
        margin-bottom:100px;
    `}
`
const Section02__Title = styled.div`
    ${BigTitle};
    color:${Themes.colors.blue};
    ${breakpoint('lg')`
        text-align:left;
    `}
`

const Section02__Contents = styled.div`
    ${breakpoint('md')`
        // display:grid;
        // grid-template-columns:1fr 1fr 1fr;
        // grid-column-gap:10px;
    `}
    ${breakpoint('lg')`
        // grid-template-rows:1fr 1fr 1fr;
    `}
`
const Section02__ContentDiv = styled.div`
    margin:60px auto 0 auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
        ${breakpoint('lg')`
        // margin:60px auto 0 auto;
        flex-direction:row;
        align-items:flex-start;
`}

`
const Section02__Image = styled.img`
    ${breakpoint('lg')`
        width:60px;
        heigh:auto;
    `}
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
      margin: 0 0 0 35px;   
      line-height:30px;
      text-align:left;    
    `}
`
const Section02__Text = styled.div`
    margin-top:9px;
    ${Text};
    color:${Themes.colors.grey};
    text-align:center;
        ${breakpoint('lg')`
            text-align:left;
            max-width:400px;
            margin: 9px 0 0 35px;
            font-size:${Themes.fontsize.p2}
            line-height:20px;
        `}
`
const Section02__RightDiv = styled.div`
    display:none;
    ${breakpoint('lg')`
        display:block;
        background:url(${HomeSection02Image}) no-repeat left bottom;
    `}
`
const Section02__RightDivImage = styled.img`
    // display:none;
    // ${breakpoint('lg')`
    //     display:block;
    //     postion:absolute;
    //     left:0;
    //     bottom:0;
    // `}
`
export default Section2;