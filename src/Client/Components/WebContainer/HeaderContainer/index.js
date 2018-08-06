import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';
import Logo from '../../../../Assets/Images/logo.png';

class HeaderContainer extends Component {
	render(){
		return (
			<ThemeProvider theme={Themes}>
				<Nav>
				<Container>
				<LinkedLogo to='/'><LogoImg src={Logo}/></LinkedLogo>
				<NavWide>
					<WideDiv>
						<StyledLink to='/'>Home</StyledLink>
						<StyledLink to='/about'>About</StyledLink>
						<StyledLink to='/support'>Support</StyledLink>
						<StyledLink to='/blog'>Blog</StyledLink>
						<StyledLink to='/contact'>Contact Us</StyledLink>
						<StyledLink to='/login'>Log In</StyledLink>
						<Box>
                           <Sns href="https://www.facebook.com/EasyFormsNZ/?ref=aymt_homepage_panel">
                               <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                           </Sns>
                           <Sns href="https://twitter.com/EasyFormsNZ">
                               <FontAwesomeIcon icon={['fab', 'twitter']} />
                           </Sns>
                           <Sns href="https://www.linkedin.com/company/easy-forms/">
                               <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                           </Sns>
                       </Box>
					</WideDiv>
				</NavWide>
				<NavNarrow>
				<FontAwesomeIcon style={icon} icon='bars' onClick={this.burgerToggle} size="2x"/>
					<NarrowLinks className="narrowLinks">
						<NarrowStyledLink onClick={this.burgerToggle} to='/'>Home</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/about'>About</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/support'>Support</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/blog'>Blog</NarrowStyledLink>
						<NarrowStyledLink onClick={this.burgerToggle} to='/contact'>Contact Us</NarrowStyledLink>
						<Box>
                           <Sns href="https://www.facebook.com/EasyFormsNZ/?ref=aymt_homepage_panel">
                               <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                           </Sns>
                           <Sns href="https://twitter.com/EasyFormsNZ">
                               <FontAwesomeIcon icon={['fab', 'twitter']} />
                           </Sns>
                           <Sns href="https://www.linkedin.com/company/easy-forms/">
                               <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                           </Sns>
                       </Box>
					</NarrowLinks>
				</NavNarrow>
				</Container>
				</Nav>
			</ThemeProvider>
            );
	}
	burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'flex') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'flex';
			linksEl.style.justifyContent = 'center';
			linksEl.style.flexDirection = 'column';
		}
	}
}

const Box = styled.div`
    display: flex;
	justify-content:center;

	${breakpoint('md')`
	align-items: flex-end;
	padding:0;
		`}
		${breakpoint('lg')`
		align-items: flex-end;
		padding: 1em 0 1em 1em;
	`}
`;

const Sns = styled.a`
	color: ${Themes.colors.white};
	font-size: 1em;
	padding: 1em;
	${breakpoint('md')`
		padding: 1em 0.5em;
		&:last-child {
			padding: 1em 0 1em 0.5em;
		}
		`}
	${breakpoint('lg')`
	padding: 0 1em;
	&:last-child {
		padding: 1em 0 0 1em;
	  }
	`}
`

const LogoImg = styled.img`
	width:120px;
	float:left;
	position:absolute;
	${breakpoint('lg')`
		width:160px;
	`}
`
const LinkedLogo = styled(Link)`
	height:32px;
`
// const LinkedLogo = styled(Link)`
// //	height:32px;
// 	width:120px;
// 	height:auto;
// 	cursor:'pointer';
// 	background-image:url(${Logo});
// 	background-size:100% auto;
// 	background-repeat:no-repeat;
// 	${breakpoint('lg')`
// 		width:160px;
// 	`}
// `

const Nav = styled.div`
//	z-index:1;
	background-color: ${Themes.colors.blue};
	overflow: hidden;
//	display:flex;
//	justify-content:space-between;
	padding: 1.25em 10% 0.625em;
	a {
		color: #FFF;
	};
	a:visited {
		color: #FFF;
	}
		${breakpoint('md')`
			padding: 3.25em 10% 0.625em;
			// display:flex;
			// justify-content:space-between;
			// align-items:center;
			// flex-direction:row;
		`}
	`
const Container = styled.div`
	margin:0 auto;
	display:flex;
	justify-content:space-between;
	${breakpoint('md')`	
		display:flex;
		justify-content:space-between;
		align-items:center;
		flex-direction:row;
	`}
    ${breakpoint('lg')`
		max-width: 1366px;
    `}
`
const NavNarrow = styled.div`
		display: block;
		position:relative;
		top: 100;
		width:100%;
		margin:0;
		@media (min-width: 768px) {
  		display: none;
		}
`;

 const NavWide = styled.div`
	display: none;
		@media (min-width: 768px) {
			display: flex;
			justify-content:flex-end;
		}
 `;

const WideDiv = styled.div`
display:flex;
align-items: flex-end;
`;

const icon = {
	float:'right',
	clear: 'right',
	cursor: 'pointer',
	color: '#FFF',
	height: 'auto'
};

const StyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
padding: 1em;
text-transform: uppercase;
font-weight: ${Themes.fontWeight.regular};
cursor:'pointer';
${breakpoint('md')`
padding: 1em 0.5em;
	`}
}
`;

const NarrowLinks = styled.div`
		position: static;
		display: none;
		margin: 3.5em 0 0;
`;

const NarrowStyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
font-weight: ${Themes.fontWeight.regular};
padding: 1em;
display:block;
text-align: center;
text-transform: uppercase;
border-bottom: 0.1px solid ${Themes.colors.lightGrey};
`;

  export default HeaderContainer;