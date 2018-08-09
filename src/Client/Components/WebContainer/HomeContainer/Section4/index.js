import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import Title from '../../../Common/Title/Title';

import Section04BgSm from '../../../../../Assets/Images/easyform-functions_mobile.png';
import Section04BgLg from '../../../../../Assets/Images/easyform-functions_webBg.png';
import Section04Md from '../../../../../Assets/Images/easyform-functions_tablet.png';
import Section04ImageLg from '../../../../../Assets/Images/easyform-functions_webImage.png';

class Section4 extends Component{
    render(){
        return(
            <Section04>
                <Section04__TitleDiv>
                    <Section04__Title>Easyforms Function</Section04__Title>
                    {/* <HeaderLine /> */}
                </Section04__TitleDiv>
                <Section04__ImageDiv>
                    <Section04__Image src={Section04ImageLg} />
                </Section04__ImageDiv>
            </Section04>
        )
    }
}

/**** Section 04 ****/

const Section04 = styled.div`
    background: url('${Section04BgSm}') no-repeat center bottom;
    background-size:auto 100%;
    height:1226px;
    ${breakpoint('md')`
     background: url('${Section04Md}') no-repeat;
     background-position: center bottom;
     background-size:auto 100%;
     height:845px;
    `}
    ${breakpoint('md')`
    background: url('${Section04BgLg}') no-repeat;
    background-position: center bottom;
    background-size:auto 100%;
    height:768px;
    position:relative;
   `}
`
const Section04__TitleDiv = styled.div`
    ${breakpoint('lg')`
        height:30%;
        display:flex;
        flex-direction:column;
        align-items:center;
        // justify-content:flex-end;
    `}
`
const Section04__Title = styled.div`
   ${Title};
   color:white;
    ${breakpoint('lg')`
        padding-top:150px;
    `}
`
const Section04__ImageDiv = styled.div`
    display:none;
    ${breakpoint('lg')`
        display:block;
        margin:0 auto;
    `}
`
const Section04__Image = styled.img`
    position:absolute;
    bottom:-170px;
    left:50%;
    transform:translateX(-50%);
`
export default Section4;