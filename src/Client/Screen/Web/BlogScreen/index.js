import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import HeaderLine from '../../../Components/Common/HeaderLine';
import Text from '../../../Components/Common/Text';
import BigTitle from '../../../Components/Common/Title/BigTitle.js';
import Section01Bg from '../../../../Assets/Images/blog_1.jpg';
import BlogToggleContainer from '../../../Components/WebContainer/BlogToggleContainer';

const BlogScreen = () => (
  <ThemeProvider theme={Themes}>
    <Container>
      <BlogToggleContainer 
        title={'Is Timesheet Theft Giving You a Constant Headache?'}
        bg={'../../../../Assets/Images/blog_1.jpg'}/>   
      <BlogToggleContainer 
        title={'Are Mountains of Paperwork Dragging Your Business Down?'}
        bg={'../../../../Assets/Images/blog_2.jpg'}/>   
    </Container>
  </ThemeProvider>
)

const Container = styled.div``

export default BlogScreen;