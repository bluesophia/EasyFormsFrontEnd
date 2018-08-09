import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';

/** components **/
import Title from '../../../Common/Title/Title';

/** Logos **/
import Logo01 from '../../../../../Assets/Images/auckland.gif';
import Logo02 from '../../../../../Assets/Images/passrite.gif';
import Logo03 from '../../../../../Assets/Images/toyota.gif';
import Logo04 from '../../../../../Assets/Images/sharp.gif';
import Logo05 from '../../../../../Assets/Images/ncc.gif';
import Logo06 from '../../../../../Assets/Images/uoa.gif';
import Logo07 from '../../../../../Assets/Images/asb.gif';

class Section5 extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section05>
                    <Section05__Title>
                        Here Are Just a Few of the Clients <br />We Work With
                    </Section05__Title>
                    <Section05__Logos>
                        <Section05__LogosDiv01>
                            <Section05__Logo src={Logo01}/>
                            <Section05__Logo src={Logo07}/>
                            <Section05__Logo src={Logo02}/>
                            <Section05__Logo src={Logo03}/>
                        </Section05__LogosDiv01>
                        <Section05__LogosDiv02>
                            <Section05__Logo src={Logo04}/>
                            <Section05__Logo src={Logo05}/>
                            <Section05__Logo src={Logo06}/>
                        </Section05__LogosDiv02>
                    </Section05__Logos>
                </Section05>
            </ThemeProvider>
        )
    }
}

/**** Section 05 ****/

const Section05 = styled.div`
    padding:18% 8%;
    ${breakpoint('md')`
        padding:18% 18% 10% 18%;
    `}
    ${breakpoint('lg')`
       max-width:1366px;
    `}
`
const Section05__Title = styled.div` 
    ${Title};
`
const Section05__Logos = styled.div`
    display:flex;
    justify-content:space-around;
    padding-top:50px;
    margin:0 auto;
    ${breakpoint('lg')`
        flex-direction:column;
    `}
`
const Section05__LogosDiv01 = styled.div`
    display:flex;
    flex-direction:column;
        ${breakpoint('lg')`
            flex-direction:row;
            align-items:center;
        `}
`
const Section05__LogosDiv02 = styled.div`
    display:flex;
    flex-direction:column;
        ${breakpoint('lg')`
            flex-direction:row;
            align-items:flex-start;
        `}
`

const Section05__Logo = styled.img`
    width:100px;
    height:auto;
    margin:30px auto; 
    ${breakpoint('sm')`
        width:146px;
    `}
`

export default Section5;