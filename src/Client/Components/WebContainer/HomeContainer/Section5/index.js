import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';

import FeaturesCarousel from '../../../Common/FeaturesCarousel';

const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`
const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`

class Section5 extends Component{
    render(){
        return(
            <Section05>
                <Section05__Container>
                    <Section05__Title>Easyforms Features</Section05__Title>
                    <HeaderLine />
                    <FeaturesCarousel />
                </Section05__Container>
            </Section05>
        )
    }
}

/**** Section 05 ****/

const Section05 = styled.div`
    ${LightGreyBg};

`
const Section05__Container = styled.div`
    margin:0 auto;
    padding: 60px 0;
    ${breakpoint('sm')`
        padding: 60px 8%;
    `}
    ${breakpoint('md')`
        padding: 60px 10%;
    `}
    ${breakpoint('lg')`
        padding: 100px 10%;
       height:768px;
        max-width: 1366px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `}
    ${breakpoint('xl')`
 //      height:80vh;
    `}
`
const Section05__Title = styled.div`
    ${Title};
`

export default Section5;