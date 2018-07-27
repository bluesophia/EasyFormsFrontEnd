import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import Title from '../../../Common/Title/Title';

import Section06BgSm from '../../../../../Assets/Images/easyform-functions_mobile.png';
import Section06BgLg from '../../../../../Assets/Images/easyform-functions_web.png';

class Section6 extends Component{
    render(){
        return(
                <Section06>
                    <Section06__TitleDiv>
                        <Section06__Title>Easyforms Function</Section06__Title>
                        <HeaderLine />
                    </Section06__TitleDiv>
                    <Section06__Image />
                </Section06>
        )
    }
}

/**** Section 06 ****/

const Section06 = styled.div`
    padding: 0 8%;
    background: url('${Section06BgSm}') no-repeat center;
    height:983px;
    ${breakpoint('lg')`
     background: url('${Section06BgLg}') no-repeat;
     background-position: center bottom;
     background-size:contain;
     padding:0;
     height:768px;
    `}
`
const Section06__TitleDiv = styled.div`
    ${breakpoint('lg')`
        height:30%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
    `}
`
const Section06__Title = styled.div`
   ${Title};
   margin-top:18%;
    ${breakpoint('lg')`
        margin-top:80px;
    `}
`
const Section06__Image = styled.div`

`
export default Section6;