import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
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

const Section1 = () => (
            <ThemeProvider theme={Themes}>
                <Section01>
                    <Section01__Image><Cluster src={ClusterImg}/></Section01__Image>
                    <Section01__TitleDiv>
                        <BigTitle>Job Management and WorkFlow Processes Made Easy</BigTitle>
                        <Section01__Text>We are a cloud-based solution offering end-to-end job 
                            and workflow management software industry standard 
                            health and safety management and much more.
                        </Section01__Text>
                        <ButtonDiv>
                            <ButtonLink to='/contact'>
                                <Button value={'contact our software experts'}/>
                            </ButtonLink>
                        </ButtonDiv>
                        <SubTitle>Follow Us On Social Network</SubTitle>
                        <SnsIcons>
                            <SnsLink href="https://www.facebook.com/EasyFormsNZ/?ref=aymt_homepage_panel"><Facebook /></SnsLink>
                            <SnsLink href="https://twitter.com/EasyFormsNZ"><Twitter /></SnsLink>
                            <SnsLink href="https://www.linkedin.com/company/easy-forms/"><Linkedin /></SnsLink>
                        </SnsIcons>
                    </Section01__TitleDiv>
                </Section01>
            </ThemeProvider>
        )
/**** Section 01 ****/

const Section01 = styled.div`
    display:flex;
    padding:100px 8%;
    flex-direction:column;
    background: url('${HomeSection01BgSm}');
    background-position:center top;
    background-repeat:no-repeat;
    background-size:100% 100%;
    ${breakpoint('lg')`
        padding:100px 10% 80px 8%;
        justify-content:space-between;
        flex-direction:row;
        background: url('${HomeSection01BgMd}');
        background-position:center top;
        background-repeat:no-repeat;
        background-size:100% 100%;
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
        margin-left:60px;
        width:85%;
    `}
`;

const BigTitle = styled.div`
        font-size:35px;
        margin:40px 0;
        color:${Themes.colors.white};
        text-align:center;
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
            margin-bottom:20px;
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
`
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