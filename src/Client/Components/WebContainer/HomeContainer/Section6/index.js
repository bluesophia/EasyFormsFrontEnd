import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';

import Section06BgSm from '../../../../../Assets/Images/easyform-functions_mobile.png';
import Section06BgLg from '../../../../../Assets/Images/easyform-functions_web.png';

const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`

class Section6 extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section06>
                    <Section06__TitleDiv>
                        <Section06__Title>Easyforms Function</Section06__Title>
                        <HeaderLine />
                    </Section06__TitleDiv>
                </Section06>
            </ThemeProvider>
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
     height:100vh;
    `}
    // ${breakpoint('xl')`
    //     height:80vh;
    // `}
`
const Section06__TitleDiv = styled.div`
    ${breakpoint('lg')`
 //       background-color: white;
        height:30%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
    `}
    // ${breakpoint('xl')`
    //      height:25%;
    // `}
`
const Section06__Title = styled.div`
    padding-top:2em;
    ${Title};
`
export default Section6;