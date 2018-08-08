import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import Title from '../../../Common/Title/Title';

import Section04BgSm from '../../../../../Assets/Images/easyform-functions_mobile.png';
import Section04BgLg from '../../../../../Assets/Images/easyform-functions_web.png';

class Section4 extends Component{
    render(){
        return(
            <Section04>
                {/* <Section04__TitleDiv>
                    <Section04__Title>Easyforms Function</Section04__Title>
                    <HeaderLine />
                </Section04__TitleDiv> */}
                {/* <Section04__Image src={Section04BgSm} /> */}
            </Section04>
        )
    }
}

/**** Section 04 ****/

const Section04 = styled.div`
    background: url('${Section04BgSm}') no-repeat center bottom;
    background-size:auto 100%;
    min-height:1226px;
    ${breakpoint('md')`
     background: url('${Section04BgLg}') no-repeat;
     background-position: center bottom;
     background-size:cover;
     min-height:910px;
    `}
`
const Section04__TitleDiv = styled.div`
    ${breakpoint('lg')`
        height:30%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
    `}
`
const Section04__Title = styled.div`
   ${Title};
   margin-top:18%;
    ${breakpoint('lg')`
        margin-top:80px;
    `}
`
const Section04__Image = styled.img`
    
`
export default Section4;