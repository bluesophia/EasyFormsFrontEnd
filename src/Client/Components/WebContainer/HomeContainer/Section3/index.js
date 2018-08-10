import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Common/HeaderLine';
/** components **/
import Title from '../../../Common/Title/Title';

import FeaturesCarousel from '../../../Common/FeaturesCarousel';

class Section3 extends Component{
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
        return(
            <Section03>
                <Section03__Container>
                {this.state.home.map((home, index) => {
                    if(index === 4){
                    return (
                        <Section03__Title>{home.title}</Section03__Title>
                    )}
                    return null
                })}
                    <FeaturesCarousel />
                </Section03__Container>
            </Section03>
        )
    }
}

const Section03 = styled.div`
`
const Section03__Container = styled.div`
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
const Section03__Title = styled.div`
    ${Title};
    padding:0 8%;
    margin-bottom:60px;
`

export default Section3;