import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../../Assets/Styles/Themes';
import Button from '../../../Common/Button';
import { Link } from 'react-router-dom';

/** Images **/
import HomeSection01BgSm from '../../../../../Assets/Images/HomeSection01BgSm.png';
import HomeSection01BgMd from '../../../../../Assets/Images/HomeSection01BgMd.png';
import ClusterImg from '../../../../../Assets/Images/cluster.png';
import FacebookIcon from '../../../../../Assets/Images/facebook.png';
import TwitterIcon from '../../../../../Assets/Images/twitter.png';
import LinkedinIcon from '../../../../../Assets/Images/linkedin.png';

class Section1 extends Component{
    render(){
        return(
            
               <Section01>
                    <Container>
                        <Section01__Image><Cluster src={ClusterImg}/></Section01__Image>
                        <Section01__TitleDiv>
                            <BigTitle>Job Management and WorkFlow Processes Made Easy</BigTitle>
                            <Section01__Text>We are a cloud-based solution offering end-to-end job 
                                and workflow management software industry standard 
                                health and safety management and much more.
                            </Section01__Text>
                            <ButtonDiv>
                                <ButtonLink to='/contact'>
                                    <Button value={'Contact our Software Experts'}/>
                                </ButtonLink>
                            </ButtonDiv>
                        </Section01__TitleDiv>
                    </Container>
                </Section01> 
           
        )
    }
}
/**** Section 01 ****/

const Section01 = styled.div`
    padding:18% 8%;
    background: url('${HomeSection01BgSm}');
    background-position:center top;
    background-repeat:no-repeat;
    background-size:100% 100%;
    ${breakpoint('md')`
    padding: 100px 8%;
    `}
    ${breakpoint('lg')`
        background: url('${HomeSection01BgMd}');
        background-position:center top;
        background-repeat:no-repeat;
        background-size:100% 100%;
    `}
`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    ${breakpoint('lg')`
        max-width: 1366px;
        justify-content:space-between;
        flex-direction:row;
    `}
`
const Section01__Image = styled.div`
    margin:0 auto;
        ${breakpoint('lg')`
            margin-left:0;
            width:90%;
        `}
`
const Cluster = styled.img`
    width:100%;
    height:auto;
`
const Section01__TitleDiv = styled.div`
    ${breakpoint('lg')`
        margin-left:4em;
        width:85%;
    `}
    ${breakpoint('xl')`
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        height:250px;
    `}
`;
const BigTitle = styled.div`
        font-size: 28px;
        margin: 1em 0;
        color:${Themes.colors.white};
        text-align:center;
        ${breakpoint('md')`
            font-size:35px;
        `}
        ${breakpoint('lg')`
            text-align:right;
            margin:0;
        `}
    `
const Section01__Text = styled.div`
    display:none;
        ${breakpoint('lg')`
            display:block;
            color:#E2E2E2;
            font-size:${Themes.fontsize.p2};
            line-height:25px;
            text-align:right;
            margin-top:15px;
            margin-bottom:15px;
            font-weight:300;
        `}
`
const ButtonDiv = styled.div`
        width:100%;
        margin:0 auto;
            ${breakpoint('lg')`
                width:80%;
                margin-right:0;
            `}
`
const ButtonLink = styled(Link)`
        cursor:'pointer';
`
// const buttonDiv = {
//     width:'100%',
//     marginTop:0,
//     marginBottom:0,
//     marginRight:'auto',
//     marginLeft:'auto'
// }

// const buttonLink = {
//     cursor:'pointer'
// }

const SubTitle = styled.p`
        font-size:${Themes.fontsize.h3};
        color:${Themes.colors.white};
        text-align:center;
        font-weight:${Themes.fontWeight.regular};
        margin-top:60px;
            ${breakpoint('lg')`
            text-align:right;
        `}
    `

const SnsIcons = styled.div`
    display:flex;
    justify-content: center;
        ${breakpoint('lg')`
        margin-right:0;
        text-align:right;
        justify-content: flex-end;
    `}
`
const SnsLink = styled.a`
`
const Facebook = styled.div`
    background-image:url(${FacebookIcon});
    width:58px;
    height:58px;
    margin-right:15px;
`
const Twitter = styled.div`
    background-image:url(${TwitterIcon});  
    width:58px;
    height:58px;  
    margin-right:15px; 
`
const Linkedin = styled.div`
    background-image:url(${LinkedinIcon});   
    width:58px;
    height:58px;   
`

export default Section1;