import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
/** components **/
import Title from '../../../Common/Title/Title';

import FeaturesCarousel from '../../../Common/FeaturesCarousel';

class Section5 extends Component{
    render(){
        return(
            <Section05>
                <Section05__Container>
                    <Section05__Title>Easyforms Features</Section05__Title>
                    <FeaturesCarousel />
                </Section05__Container>
            </Section05>
        )
    }
}

const Section05 = styled.div`
`
const Section05__Container = styled.div`
    margin:0 auto;
    padding: 18% 0 10%;
    ${breakpoint('sm')`
        padding: 18% 8%;
    `}
    ${breakpoint('md')`
        padding: 18% 10%;
    `}
    ${breakpoint('lg')`
        padding: 80px 10%;
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