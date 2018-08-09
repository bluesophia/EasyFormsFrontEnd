import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import Title from '../../../Common/Title/Title';

import Section04BgSm from '../../../../../Assets/Images/easyform-functions_mobileBg.png';
import Section04BgLg from '../../../../../Assets/Images/easyform-functions_webBg.png';
import Section04Md from '../../../../../Assets/Images/easyform-functions_tablet.png';
import Section04ImageSm from '../../../../../Assets/Images/easyform-functions_mobileImage.png';
import Section04ImageMd from '../../../../../Assets/Images/easyform-functions_tabletImage.png';
import Section04ImageLg from '../../../../../Assets/Images/easyform-functions_webImage.png';

class Section4 extends Component{
    render(){
        return(
            <Section04>
                <Section04__TitleDiv>
                    <Section04__Title>Easyforms Function</Section04__Title>
                </Section04__TitleDiv>
                <Section04__ImageDiv>
                    <Section04__ImageSm src={Section04ImageSm} />
                    <Section04__ImageMd src={Section04ImageMd} />
                    <Section04__ImageLg src={Section04ImageLg} />
                </Section04__ImageDiv>
            </Section04>
        )
    }
}

/**** Section 04 ****/

const Section04 = styled.div`
    background: url('${Section04BgSm}') no-repeat center bottom;
    background-size:100% 100%;
    height:1100px;
    position:relative;
    ${breakpoint('md')`
     height:720px;
    `}
    ${breakpoint('lg')`
    background: url('${Section04BgLg}') no-repeat;
    background-position: center bottom;
    background-size:auto 100%;
    height:768px;
   `}
`
const Section04__TitleDiv = styled.div`
    ${breakpoint('lg')`
        height:30%;
        display:flex;
        flex-direction:column;
        align-items:center;
    `}
`
const Section04__Title = styled.div`
   ${Title};
   color:white;
   padding-top:100px;
    ${breakpoint('lg')`
        padding-top:150px;
    `}
`
const Section04__ImageDiv = styled.div`
    margin:0 auto;
`
const Section04__ImageSm = styled.img`
    display:block;
    position:absolute;
    bottom:-170px;
    left:50%;
    transform:translateX(-50%);
    ${breakpoint('md')`
        display:none;
    `}
`
const Section04__ImageMd = styled.img`
    display:none;
    ${breakpoint('md')`
        display:block;
        position:absolute;
        bottom:-170px;
        left:50%;
        transform:translateX(-50%);   
    `}
    ${breakpoint('lg')`
        display:none;
    `}
`
const Section04__ImageLg = styled.img`
    display:none;
    ${breakpoint('lg')`
        display:block;
        position:absolute;
        bottom:-170px;
        left:50%;
        transform:translateX(-50%);   
    `}
`
export default Section4;