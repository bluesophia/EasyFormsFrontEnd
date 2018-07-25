import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import Title from '../../../Common/Title/Title';

import Section07Icon01 from '../../../../../Assets/Images/in-the-office.png';
import Section07Icon02 from '../../../../../Assets/Images/on-the-go.png';
import Section07Icon03 from '../../../../../Assets/Images/for-management.png';

const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`
class Section7 extends Component{
    render(){
        return(
            <Section07>
                <div>
                <Section07__Title>We work in all business environments</Section07__Title>
                <HeaderLine />
                <Section07__Text>EasyForms can offer solutions to a wide range of businesses and industries.</Section07__Text>
                </div>
                <Section07__Contents>
                    <Section07__ContentDiv>
                        <Section07__Icon src={Section07Icon01} />
                        <Section07__SubTitle>In The Office</Section07__SubTitle>
                    </Section07__ContentDiv>
                    <Section07__ContentDiv>
                        <Section07__Icon src={Section07Icon02} />
                        <Section07__SubTitle>On The Go</Section07__SubTitle> 
                    </Section07__ContentDiv> 
                    <Section07__ContentDiv>                     
                        <Section07__Icon src={Section07Icon03} />    
                        <Section07__SubTitle>For Management</Section07__SubTitle> 
                    </Section07__ContentDiv>    
                </Section07__Contents>                                   
            </Section07>
        )
    }
}

/**** Section 07 ****/

const Section07 = styled.div`
    padding: 60px 8%; 
    box-sizing: border-box;
    ${LightGreyBg};
        ${breakpoint('lg')`
           padding: 100px 20%; 
           height:768px;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
    `} 
        ${breakpoint('xl')`
   //     height:80vh;
        `}  
`
const Section07__Title = styled.p`
    ${Title};
`
const Section07__Text = styled.div`  
    display:none;
        ${breakpoint('md')`
            display:block;
            font-size:${Themes.fontsize.p1};
            color:${Themes.colors.black};
            text-align:center;
        `}   
`
const Section07__Contents = styled.div`
    margin:0 auto;
        ${breakpoint('md')`
        display:flex;
        justify-content:space-around;
        align-item:center;
        margin-top:40px;
        `} 
`
const Section07__ContentDiv = styled.div`
    margin:50px auto 0 auto;
    ${breakpoint('md')`
      width:220px;
    `} 
`
const Section07__Icon = styled.img`
    width:110px;
    height:auto;
    display:block;
    margin:0 auto;
`
const Section07__SubTitle = styled.p`
    ${Title};
    font-size:${Themes.fontsize.h3}; 
    font-weight:${Themes.fontsize.bold};
    letter-spacing:normal;
`

export default Section7;