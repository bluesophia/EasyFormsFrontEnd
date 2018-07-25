import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import Title from '../../../Common/Title/Title';

import FeaturesCarousel from '../../../Common/FeaturesCarousel';

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

const Section05 = styled.div`
    ${LightGreyBg};
`
const Section05__Container = styled.div`
    margin:0 auto;
    padding: 18% 0 10%;
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
`
const Section05__Title = styled.div`
    ${Title};
    padding:0 8%;
`

export default Section5;