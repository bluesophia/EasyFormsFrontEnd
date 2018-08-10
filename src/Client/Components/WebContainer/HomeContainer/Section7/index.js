import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
import BigTitle from '../../../Common/Title/BigTitle';
import Title from '../../../Common/Title/Title';

/** Images **/
import Section07Bg from '../../../../../Assets/Images/HomeSection07Bg.png';
import Section07Icon01 from '../../../../../Assets/Images/in-the-office.svg';
import Section07Icon02 from '../../../../../Assets/Images/on-the-go.svg';
import Section07Icon03 from '../../../../../Assets/Images/for-management.svg';

const LightGreyBg = css`
  background-color:rgba(238,238,238,0.6);
`
class Section7 extends Component{
    constructor(props){
        super(props);
        this.state={ 
            home:[]
        };
    }

    componentDidMount(){
        let self=this;
        var data = {
            id: this.state.id,
            title: this.state.title,
            descriptionlg: this.state.descriptionlg
        }

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
        return(
            <Section07>
                <div>
                {this.state.home.map((home, index) => {
                    if(index === 8){
                    return (
                        <Section07__Title>{home.title}</Section07__Title>
                    )}
                    })}
                {this.state.home.map((home, index) => {
                    if(index === 8){
                    return (
                        <Section07__Text>{home.descriptionlg}</Section07__Text>
                    )}
                    })}    
                
                {/* <HeaderLine /> */}
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
    padding: 18% 8%; 
    box-sizing: border-box;
    ${LightGreyBg};
        ${breakpoint('md')`
            padding: 18% 15%; 
            background:url('${Section07Bg}') no-repeat bottom
            background-size:100% 50%;
        `}
        ${breakpoint('lg')`
           padding: 10% 20% 10% 20%; 
            // display:flex;
            // justify-content:center;
            // align-items:center;
            // flex-direction:column;

    `} 
`
const Section07__Title = styled.p`
    ${BigTitle};
`
const Section07__Text = styled.div`  
    display:none;
        ${breakpoint('md')`
            display:block;
            font-size:${Themes.fontsize.p2};
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
        max-width:900px;
        `} 
`
const Section07__ContentDiv = styled.div`
    margin:50px auto 0 auto;
    display:flex;
    flex-direction:column;
`
const Section07__Icon = styled.img`
    height:200px;
    width:auto;
    margin:0 auto;
    ${breakpoint('md')`
        height:180px;
        width:auto;
    `}
`
const Section07__SubTitle = styled.p`
    ${Title};
    font-size:${Themes.fontsize.h3}; 
    font-weight:${Themes.fontsize.black};
    letter-spacing:normal;
    margin-top:15px;
    margin-bottom:0;
    ${breakpoint('md')`
        font-size:${Themes.fontsize.h3};
    `}
`
export default Section7;