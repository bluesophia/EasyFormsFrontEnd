import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';

/** components **/
import Title from '../../../Common/Title/Title';
import CardCarousel from '../../../Common/CardCarousel';

/** Images **/
import CustomerStoriesBg from '../../../../../Assets/Images/customer-stories.png';

class Section6 extends Component{
    render(){
        return(
            <ThemeProvider theme={Themes}>
                <Section06>
                    <Section06__Div>
                        <Section06__Title>
                            Customer Stories
                        </Section06__Title>
                        <CarouselDiv>
                            <StyledCarousel />
                        </CarouselDiv>
                    </Section06__Div>
                </Section06>
            </ThemeProvider>
        )
    }
}

const Section06 = styled.div`
    background:
    // linear-gradient(${Themes.colors.green},${Themes.colors.blueLight}) 
    url(${CustomerStoriesBg});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center top;
    padding-top:18%;
    padding-bottom:40px;
    ${breakpoint('md')`
        padding-top:10%;
        padding-bottom:8%;
    `}
`
const Section06__Div = styled.div`
    margin:0 auto;
    max-width:1366px;
`
const Section06__Title = styled.div`
    ${Title};
    color:white;
    padding-bottom:60px;
        ${breakpoint('md')`
        margin:0 auto;
        `}
`
const StyledCarousel = styled(CardCarousel)`
    margin:0 auto;
`
const CarouselDiv = styled.div`
    margin:0 auto;
    ${breakpoint('lg')`
        width:1000px;
    `}
`
export default Section6;