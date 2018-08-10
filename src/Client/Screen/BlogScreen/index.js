import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../Assets/Styles/Themes';
import HeaderLine from '../../Components/Common/HeaderLine';
import BigTitle from '../../Components/Common/Title/BigTitle.js';
import SectionBg01 from '../../../Assets/Images/blog_1.jpg';
import SectionBg02 from '../../../Assets/Images/blog_2.jpg';
import { BlogToggleSec1, BlogToggleSec2 } from '../../Components/WebContainer/BlogToggleContainer';

class BlogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      blogCategory: [] 
    };
  }
  _renderContents = () => {
    const Contents = this.state.blogCategory.map((blogCategory, index) => {
      if(index === 0){
        return <Section1 title={blogCategory.title}/>
      } else if(index === 1) {
        return <Section2 title={blogCategory.title}/>
      }
      })
    return Contents;
  }

  componentDidMount() {
    let self = this;
      var data = {
        id: this.state.id,
        title: this.state.title,   
    }

    fetch('/api/blog', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({blogCategory: data});
    }).catch(err => {
    console.log('caught it!',err);
    })
  }
  render(){
    const { data } = this.state;
    return(
        <ThemeProvider theme={Themes}>
        <Container>
         {this.state.blogCategory ? this._renderContents(): 'Loading'}
        </Container>
      </ThemeProvider>
    )
  }
}

class Section1 extends Component{
  render(){
    const { title } = this.props;
      return(
        <Section>
            <Section__Header01>
              {/* Title */}
              <Section__TitleDiv>
                <Section__Title>{this.props.title}</Section__Title>
                <HeaderLine />
              </Section__TitleDiv>
            </Section__Header01>
              {/* Contents */}
              <Section__FirstBlog>
              </Section__FirstBlog>
              <Section__Contents>
                <BlogToggleSec1 /> 
              </Section__Contents>
        </Section>
        )
  }
}

class Section2 extends Component {
  render(){
    const { title } = this.props;
    return(
      <Section>
            <Section__Header02>
              {/* Title */}
              <Section__TitleDiv>
                <Section__Title>{this.props.title}</Section__Title>
                <HeaderLine />
              </Section__TitleDiv>
            </Section__Header02>
              {/* Contents */}
              <Section__FirstBlog>
              </Section__FirstBlog>
              <Section__Contents>
                <BlogToggleSec2 /> 
              </Section__Contents>
          </Section>
    )
  }
}

const Container = styled.div`
    position:relative;
`
const Section = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  ${breakpoint('md')`
  `}
`
const Section__Header01 = styled.div`
  display:flex;
  justify-content:center;
  flex-direaction:coulmn;
  background:linear-gradient(rgba(8,39,90), rgba(8,39,90,0.4)), url(${SectionBg01});
  background-size:cover;
  padding-top:100px;
  padding-bottom:80px;
  position:relative;
  ${breakpoint('md')`
    padding-top:180px;
    width:100%;
    background-position:center-top;
  `}
`
const Section__Header02 = styled.div`
  display:flex;
  justify-content:center;
  flex-direaction:coulmn;
  background:linear-gradient(rgba(8,39,90), rgba(8,39,90,0.4)), url(${SectionBg02});
  background-size:cover;
  padding-top:100px;
  padding-bottom:80px;
  position:relative;
  ${breakpoint('md')`
    padding-top:180px;
    width:100%;
    background-position:center-top;
  `}
`
const Section__TitleDiv = styled.div`
  padding-right:8%;
  padding-left:8%;
  ${breakpoint('md')`
    margin-bottom:40px;
  `}
`
const Section__Title = styled.div`
  ${BigTitle};
  font-size:30px;
  ${breakpoint('md')`
    ${BigTitle};
    font-size:35px;
  `}
`
const Section__FirstBlog = styled.div`
  width:100%;
  padding:0;
  margin-bottom:-4px;
  position:absolute;
  bottom:0;
    ${breakpoint('md')`
    padding:0 20%;
    width:60%;
  `}
`
const Section__Contents = styled.div`
   box-sizing:border-box;
   width:100%;
   margin:-96px auto 0 auto;
    ${breakpoint('md')`
    padding:0 20% 100px 20%;
     `}
 `

export default BlogScreen;