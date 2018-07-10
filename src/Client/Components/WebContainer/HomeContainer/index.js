import React, { Component } from 'react';
import styled, { injectGlobal, css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../Assets/Styles/Themes';
import Button from '../../Common/Button/'
import HeaderLine from '../../Common/HeaderLine';
import FullNameInput from '../../Common/Input/FullNameInput'
import CompanyNameInput from '../../Common/Input/CompanyNameInput'
import EmailInput from '../../Common/Input/EmailInput'
import PhoneNumberInput from '../../Common/Input/PhoneNumberInput'

/** Images **/
import HomeSection01BgSm from '../../../../Assets/Images/HomeSection01BgSm.png';
import HomeSection01BgMd from '../../../../Assets/Images/HomeSection01BgMd.png';
import ClusterImg from '../../../../Assets/Images/cluster.png';
import FacebookIcon from '../../../../Assets/Images/facebook.png';
import TwitterIcon from '../../../../Assets/Images/twitter.png';
import LinkedinIcon from '../../../../Assets/Images/linkedin.png';
import WhyUs01 from '../../../../Assets/Images/whyus_1.png';
import WhyUs02 from '../../../../Assets/Images/whyus_2.png';
import WhyUs03 from '../../../../Assets/Images/whyus_3.png';
import CustomerStoriesBg from '../../../../Assets/Images/customer-stories.jpg';
import DoubleQuatationMark from '../../../../Assets/Images/double-quatation-mark.png';
import Section06Bg from '../../../../Assets/Images/easyform-functions_mobile.png';
import Section07Icon01 from '../../../../Assets/Images/in-the-office.png';
import Section07Icon02 from '../../../../Assets/Images/on-the-go.png';
import Section07Icon03 from '../../../../Assets/Images/for-management.png';

/** Logos **/
import Logo01 from '../../../../Assets/Images/ak_council.jpg';
import Logo02 from '../../../../Assets/Images/passrite.gif';
import Logo03 from '../../../../Assets/Images/toyota.gif';
import Logo04 from '../../../../Assets/Images/sharp.gif';
import Logo05 from '../../../../Assets/Images/ncc.gif';
import Logo06 from '../../../../Assets/Images/uoa.gif';
import Logo07 from '../../../../Assets/Images/asb.gif';


injectGlobal`
  body{
    margin:0;
    padding:0;
    font-family:Lato;
  }
`
const Title = css`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
    text-transform:uppercase;
    letter-spacing:5px;
`
const Text = css`
    font-size:${Themes.fontsize.p3};
    color:${Themes.colors.black};
    text-align:center;
    line-height:20px;
`
const LightGreyBg = css`
  background-color:${Themes.colors.veryLightGrey};
`
const IconCircle = css`
  border-radius:50%;
  background:linear-gradient(${Themes.colors.blueLight},${Themes.colors.blue});
`
const Shadow = css`
    box-shadow : 0 0 8px rgba(50, 50, 93, 0.23);
`

class HomeContainer extends Component {
    render(){
        return (
            <ThemeProvider theme={Themes}>
            <Home>
                <Section01>
                    <div><Cluster src={ClusterImg}/></div>
                    <Section01__TitleDiv>
                        <BigTitle>Finish your working process in one application</BigTitle>
                        <Section01__Text>Our forms can be accessed through both iOS and Android devices. 
                            Our Easy WorkFlow Management System/web portal can be accessed 
                            via your PC, laptop or tablet/iPad.</Section01__Text>
                        <Button />
                    <SubTitle>Follow Us On Social Network</SubTitle>
                    <SnsIcons>
                        <Facebook />
                        <Twitter />
                        <Linkedin />
                        
                    </SnsIcons>
                    </Section01__TitleDiv>
                </Section01>
                <Section02>
                    <Section02__TitleDiv>
                        <Section02__Title>Why Easyforms?</Section02__Title>
                    </Section02__TitleDiv>
                    <Section02__Contents>
                        {/* input */}
                    <Input__Div>
                    <FullNameInput />
                    <CompanyNameInput />
                    <EmailInput />
                    <PhoneNumberInput />
                    </Input__Div>
                        <Section02__ContentDiv>
                            <Section02__Image src={WhyUs01} />
                            <Section02__Subtitle>Customised to your needs</Section02__Subtitle>
                            <Section02__Text>Our solutions can be designed 
                            specifically to your business needs. </Section02__Text>
                        </Section02__ContentDiv>
                        <Section02__ContentDiv>
                            <Section02__Image src={WhyUs02} />
                            <Section02__Subtitle>Streamline your processes</Section02__Subtitle>
                            <Section02__Text>Our app-based solution means 
                            you can wave goodbye to stacks of paperwork, 
                            inefficiencies, double handling + much more.</Section02__Text>
                        </Section02__ContentDiv>
                        <Section02__ContentDiv>
                            <Section02__Image src={WhyUs03} />
                            <Section02__Subtitle>User friendly designs</Section02__Subtitle>
                            <Section02__Text>Our solutions are easy-to-use and user friendly.</Section02__Text>
                        </Section02__ContentDiv>
                    </Section02__Contents>
                </Section02>
                <Section0304>
                    <Section03>
                        <Section03__Title>Customer Stories</Section03__Title>
                            <Section03__Card>
                                    <Section03__CardLogo src={Logo01}></Section03__CardLogo>
                                    <Section03__CardName>Daniel Hadfield</Section03__CardName>
                                    <Section03__CardCompanyName>Licensing & Compliance Division, Auckland Council</Section03__CardCompanyName>
                                    <Section03__CardQuatation src={DoubleQuatationMark}/>
                                    <Section03__CardText>
                                        EasyForms have been a key factor in helping us 
                                        to become a smarter, more mobile workforce and 
                                        have worked alongside us to help move from 
                                        a manual, paper based process, to an intelligent 
                                        digital process.
                                    </Section03__CardText>
                            </Section03__Card>
                    </Section03>
                    <Section04>
                        <Section04__Title>Here Are Just a Few of the Clients We Work With:
                        </Section04__Title>
                        <Section04__Logos>
                            <Section04__Logo src={Logo01}/>
                            <Section04__Logo src={Logo02}/>
                            <Section04__Logo src={Logo03}/>
                            <Section04__Logo src={Logo04}/>
                            <Section04__Logo src={Logo05}/>
                            <Section04__Logo src={Logo06}/>
                            <Section04__Logo src={Logo07}/>
                        </Section04__Logos>
                    </Section04>
                </Section0304>
                <Section05>
                    <Section05__TitleDiv>
                        <Section05__Title>Easyforms Features</Section05__Title>
                        <HeaderLine />
                    </Section05__TitleDiv>
                    <Section05__Card>
                        <Section05__CardCircle>
                            {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} size={46}/> */}
                            {/* <FontAwesomeIcon icon={['far','fa-paper-plane']}/> */}
                        </Section05__CardCircle>
                        <Section05__CardTitle>Replace Paper Forms and Processes</Section05__CardTitle>
                        <Section05__CardText>Eliminate stacks of paper, double handling and errors. 
                            <br /><br />
                        EasyForms can automate your paper forms and processes into an easy-to-use app-based 
                        solution, streamlining your existing processes 
                        while mobilising your business effortlessly.</Section05__CardText>
                    </Section05__Card> 
                </Section05>
                <Section06>
                    <Section06__Title>Easyforms Function</Section06__Title>
                    <HeaderLine />
                </Section06>
                <Section07>
                    <div>
                    <Section07__Title>We work in all business environments</Section07__Title>
                    <HeaderLine />
                    </div>
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
                </Section07>
            </Home>
            </ThemeProvider>
        );
    }
}

const Home = styled.div``

/**** Section 01 ****/


const Input__Div = styled.div`
    // display:flex;
    margin-left:3px;
`

const Section01 = styled.div`
    display:flex;
    background-image:url(${HomeSection01BgSm});
    padding:95px 37px;
    flex-direction:column;
        ${breakpoint('md')`
        background-image:url(${HomeSection01BgMd});
        justify-content:space-between;
        flex-direction:row;
        `}

    background-repeat:no-repeat;
    background-size:cover;
`
const Cluster = styled.img`
    width:100%;
    ${breakpoint('lg')`
    width:560px;
    `}
    height:auto;
`
const Section01__TitleDiv = styled.div``;
    const BigTitle = styled.p`
        font-size:38px;
        ${breakpoint('md')`
        font-size:${Themes.fontsize.h1};
        `}
        color:${Themes.colors.white};
        text-align:center;
    `
    const SubTitle = styled.p`
        font-size:${Themes.fontsize.h3};
        color:${Themes.colors.white};
        text-align:center;
        font-weight:${Themes.fontWeight.bold};
        margin-top:60px;
    `
    const Section01__Text = styled.div`
        display:none;
        ${breakpoint('md')`
        display:block;
        font-size:${Themes.fontsize.p1};
        `}
    `
const SnsIcons = styled.div`
    display:flex;
    justify-content: center;
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

/**** Section 02 ****/

const Section02 = styled.div`
    padding: 80px 37px 60px 37px;
    ${LightGreyBg};
    displey:flex;
`
const Section02__TitleDiv = styled.div`
`
const Section02__Title = styled.p`
    ${Title};
`

const Section02__Contents = styled.div`
 
`
const Section02__ContentDiv = styled.div`
    margin-top:60px;
`
const Section02__Image = styled.img`
    width:300px;
`
const Section02__Subtitle = styled.p`
    margin-top:37px;
    margin-bottom:0;
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
`
const Section02__Text = styled.div`
    margin-top:9px;
    ${Text};
`

const Section0304 = styled.div``


/**** Section 03 ****/

const Section03 = styled.div`
    background: 
        rgba(8,39,90,0.8) 
        url(${CustomerStoriesBg});
    padding: 70px 0 40px 0;
`;
const Section03__Title = styled.p`
    ${Title};
    color:white;
    padding: 0 37px;
`
const Section03__Card = styled.div`
    background-color: white;
    width:100%;
    padding:60px 0;
    text-align:center;
`

const Section03__CardLogo = styled.img`
`

const Section03__CardName = styled.p`
    font-size:${Themes.fontsize.h3};
    font-weight:${Themes.fontWeight.black};
    color:${Themes.colors.blue};
    margin-bottom:0;
`
const Section03__CardCompanyName = styled.p`
    font-size:${Themes.fontsize.p2};
    color:${Themes.colors.grey};
    line-height:20px;
    margin:6px 0 0 0;
    padding:0 55px;
`
const Section03__CardQuatation = styled.img`
    margin: 30px 0 18px 0;
`
const Section03__CardText = styled.div`
    ${Text};
    padding:0 55px;
    color:${Themes.colors.grey};    
`

/**** Section 04 ****/

const Section04 = styled.div`
    padding: 60px 37px 20px 37px;
`
const Section04__Title = styled.p`  
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.h2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    line-height:30px;
`
const Section04__Logos = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top:40px;
`
const Section04__Logo = styled.img`
    width:146px;
    height:auto;
    margin-bottom:40px;
`


/**** Section 05 ****/

const Section05 = styled.div`
    padding: 60px 37px;
    ${LightGreyBg};
`
const Section05__TitleDiv = styled.div`

`
const Section05__Title = styled.div`
    ${Title};
`
const Section05__Card = styled.div`
    width:264px;
    height:400px;
    background-color:white;
    margin:auto;
    margin-top:20px;
    padding: 35px 20px;
    box-sizing: border-box;
    ${Shadow}
`
const Section05__CardCircle = styled.div`
    width:87px;
    height:87px;
    ${IconCircle};
    margin:auto;    
`
const Section05__CardTitle = styled.p`
    color:${Themes.colors.blue};
    font-size:${Themes.fontsize.p2};
    font-weight:${Themes.fontWeight.black};
    text-align:center;
    margin:20px 0 30px 0;
    line-height:23px;
`
const Section05__CardText = styled.p`
    color:${Themes.colors.black};
    font-size:${Themes.fontsize.p4};
    text-align:center;
    line-height:15px;
`

/**** Section 06 ****/

const Section06 = styled.div`
    padding: 0 37px;
    background: url('${Section06Bg}') no-repeat;
    height:983px;
`
const Section06__Title = styled.p`
    padding-top:60px;
    ${Title};
`

/**** Section 07 ****/

const Section07 = styled.div`
    padding: 60px 37px; 
    ${LightGreyBg};      
`
const Section07__Title = styled.p`
    ${Title};
`
const Section07__Icon = styled.img`
    width:120px;
    height:auto;
    display:block;
    margin:auto;
`
const Section07__SubTitle = styled.p`
    ${Title};
    letter-spacing:normal;
`
const Section07__ContentDiv = styled.div`
    margin-top:50px;
`
export default HomeContainer;