import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../Assets/Styles/Themes';
// import HeaderLine from '../../Components/Common/HeaderLine';
import Title from '../../Components/Common/Title/Title';


/** Images **/
import HomeSection01BgSm from '../../../Assets/Images/HomeSection01BgSm.svg';

import Section01 from '../../Components/WebContainer/HomeContainer/Section1';
import Section02 from '../../Components/WebContainer/HomeContainer/Section2';
import Section03 from '../../Components/WebContainer/HomeContainer/Section3';
import Section04 from '../../Components/WebContainer/HomeContainer/Section4';
import Section05 from '../../Components/WebContainer/HomeContainer/Section5';
import Section06 from '../../Components/WebContainer/HomeContainer/Section6';
import Section07 from '../../Components/WebContainer/HomeContainer/Section7';

injectGlobal`
  body{
    font-family:Lato;
  }
`
const Text = css`
    font-size:${Themes.fontsize.p3};
    color:${Themes.colors.black};
    text-align:center;
    line-height:20px;
`
const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`

class HomeScreen extends Component{  
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <div>
                    <Section0102>
                        <Section01 />
                        <Section02 />
                    </Section0102>
                    <Section03 />
                    <Section04 />
                    <Section05 />
                    <Section06 />
                    <Section07 />
                </div>
           </ThemeProvider>
        )
    }
}
const Section0102 = styled.div`
    background-color:${Themes.colors.veryLightGrey};
`
export default HomeScreen;