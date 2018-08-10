import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Themes from '../../../../../Assets/Styles/Themes';
import Button01 from '../../../Common/Button/Button01';
import { Link } from 'react-router-dom';

/** Images **/
import HomeSection01BgSm from '../../../../../Assets/Images/HomeSection01BgSm.png';
import HomeSection01BgMd from '../../../../../Assets/Images/HomeSection01BgMd.png';
import mainImage from '../../../../../Assets/Images/mainImage.svg';

/** components **/
import Title from '../../../Common/Title/Title';
import BigTitle from '../../../Common/Title/BigTitle';
import { isRegExp } from 'util';

class Section1 extends Component{
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            home: []
        };
    }

    componentDidMount() {
        let self = this;
          var data = {
            id: this.state.id,
            title: this.state.title,   
            descriptionlg: this.state.descriptionlg,
            descriptionmid: this.state.descriptionmd,
            descriptionsm: this.state.descriptionsm
        }

    //data fetch
    fetch('/api/', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({home: data});
    }).catch(err => {
    console.log('caught it!',err);
    })
    }
    render(){
        const { home } = this.state;
        return(
               <Section01>
                    <Container>
                        <Section01__Image><MainImage src={mainImage}/></Section01__Image>
                        <Section01__TitleDiv>
                            {this.state.home.map((home, index) => {
                                if(index === 0){
                                return (
                                    <StyledTitle>{home.title}</StyledTitle>
                                )}
                                return null
                            })}
                            {this.state.home.map((home, index) => {
                                if(index === 0){
                                return (
                                    <Section01__Text id={1}>{home.descriptionlg}</Section01__Text>
                                )}
                                return null
                            })}
                            <ButtonDiv>
                                <ButtonLink to='/contact'>
                                    <Button01 value={'Contact our Software Experts'}/>
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
    margin:0;
    background: url('${HomeSection01BgSm}');
    background-position:center top;
    background-repeat:no-repeat;
    background-size:100% 100%;
    ${breakpoint('md')`
        background: url('${HomeSection01BgMd}');
        background-position:center top;
        background-repeat:no-repeat;
        background-size:100% 100%;
    `}
`
const Container = styled.div`
    padding:18% 5%;
    display:flex;
    flex-direction:column;
    align-items:center;
        ${breakpoint('md')`
            padding: 70px 8%;
            justify-content:space-between;
            flex-direction:row;
            align-items:flex-start;
        `}
        ${breakpoint('lg')`
            max-width: 1366px;
            margin:0 auto;
            padding: 70px 8% 30px 8%;
        `}
`
const Section01__Image = styled.div`
    width:100%;
        ${breakpoint('md')`
            margin-left:0;
            width:90%;
        `}
`
const MainImage = styled.img`
    width:inherit;
    height:auto;
`
const Section01__TitleDiv = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
    ${breakpoint('md')`
        width:85%;
        align-items:flex-start;
    `}
    ${breakpoint('lg')`
        margin-left:2em;
        height:250px;
    `}
`;
const StyledTitle = styled.div`
        ${BigTitle};
        color:white;
        margin: 1em 0;
        text-align:center;
        ${breakpoint('md')`
            text-align:left;
            margin:0;
        `}
        ${breakpoint('lg')`
            margin: 0 25% 0 0;
        `}
    `
const Section01__Text = styled.div`
    display:none;
    font-weight:${Themes.fontWeight.light};
    color:${Themes.colors.veryLightGrey};
    text-align:left;
    margin-top:20px;
    margin-bottom:20px;
    line-height:26px;
    font-size:${Themes.fontsize.p1};
        ${breakpoint('md')`
            display:block;
        `}
        ${breakpoint('lg')`
           margin: 20px 15% 20px 0;
        `}
`
const ButtonDiv = styled.div`
    width:100%;
    ${breakpoint('md')`
        margin-left:-5px;
    `}
    ${breakpoint('lg')`
        width:70%;
        // margin-left:0;
    `}
`
const ButtonLink = styled(Link)`
        cursor:'pointer';
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

export default Section1;