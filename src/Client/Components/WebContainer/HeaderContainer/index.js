import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';
import Logo from '../../../../Assets/Images/logo.png';
// class HeaderContainer extends Component {
//     render() {
//       return (
//         <div className="HeaderContainer">
//           <p>hello</p>
//         </div>
//       );
//     }
//   }
  const HeaderContainer = () => ({
          render: function() {
            return (
			<ThemeProvider theme={Themes}>
				<Nav>
				<Link to='/'><LogoImg src={Logo}/></Link>
				{/* <Link to='/'><img src={logo} width="120" style={styledLogo}/></Link> */}
				<NavWide>
					<WideDiv>
						<StyledLink to='/'>Home</StyledLink>
						<StyledLink to='/about'>About</StyledLink>
						<StyledLink to='/support'>Support</StyledLink>
						<StyledLink to='/blog'>Blog</StyledLink>
						<StyledLink to='/contact'>Contact Us</StyledLink>
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
					</NarrowLinks>
				</NavNarrow>

				</Nav>
			</ThemeProvider>
            );
					},
					burgerToggle: function() {
						let linksEl = document.querySelector('.narrowLinks');
						if (linksEl.style.display === 'block') {
							linksEl.style.display = 'none';
						} else {
							linksEl.style.display = 'block';
						}
					}
});
// const styledLogo = {
// 	float:'left',
// };

const LogoImg = styled.img`
	width:120px;
	float:left;
	${breakpoint('lg')`
		width:160px;
	`}
`
const Nav = styled.div`
	background-color: ${Themes.colors.blue};
	overflow: hidden;
	padding: 1em;
	display:block;
	display:flex;
	justify-content:space-between;
	 
	padding: 3.25em 10% 0.625em 10%;

	a {
		color: #FFF;
	};
	a:visited {
		color: #FFF;
	}
		${breakpoint('md')`
			padding: 3.25em 10% 0.625em 10%;
			display:flex;
			justify-content:space-between;
			align-items:center;
			flex-direction:row;
		`}
	`

const NavNarrow = styled.div`
		display: block;
		@media (min-width: 46.0625em) {
  		display: none;
		}
`;

 const NavWide = styled.div`
    display: none;
		@media (min-width: 46.0625em) {
			display: flex;
			justify-content:flex-end;
		}
 `;

const WideDiv = styled.div`
`;

const icon = {
	float:'right',
	clear: 'right',
	// display: 'inline-block',
	cursor: 'pointer',
	color: '#FFF',
};

const StyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
padding: 1em;
}
`;

const NarrowLinks = styled.div`
		position: relative;
		top: 40px;
		text-align: center;
		display: none;
		margin:0 auto;
		height: 293px;
`;

const NarrowStyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
padding: 1em;
display:block;
text-align: center;
`;
// const Nav = styled.div`
// 	background-color: ${Themes.colors.blue};
// 	overflow:hidden;
// 	position:relative;
// 	display:flex;
// 	justify-content:space-between;
// 	align-items:center;
// 	a {
// 		color: #FFF;
// 	};
// 	a:visited {
// 		color: #FFF;
// 	};
// 	padding: 3.25em 8% 0.625em 8%;
// 		${breakpoint('md')`
// 			padding: 3.25em 10% 0.625em 10%;
// 			display:flex;
// 			justify-content:space-between;
// 			align-items:center;
// 			flex-direction:row;
// 		`}
// 	`

// const LogoImg = styled.img`
// 	width:120px;
// 	float:left;
// 	${breakpoint('lg')`
// 		width:160px;
// 	`}
// `
// // const NavNarrow = styled.div`
// // 	display: block;
// // 	@media (min-width: 46.0625em) {
// // 	display: none;
// // 	}
// // `;
// const NavNarrow = styled.div`
// 	display:block;
// 	width:100%;
// 		${breakpoint('md')`
// 			display:none;
// 		`}
// 	`;

// const NavWide = styled.div`
//     display: none;
// 		@media (min-width: 46.0625em) {
// 			display: flex;
// 			justify-content:flex-end;
// 		}
//  `;

// const WideDiv = styled.div`
// `;

// const icon = {
// 	float:'right',
// 	clear: 'right',
// 	// display: 'inline-block',
// 	cursor: 'pointer',
// 	color: '#FFF'
// };

// const StyledLink = styled(Link)`
// text-decoration: none;
// color: ${Themes.colors.lightGrey};
// font-size: 1em;
// padding: 1em;
// }
// `;

// const NarrowLinks = styled.div`
// 	display: none;
// 	position: relative;
// 	top: 30px;
// 	text-align:center;
// 	@media (min-width: 46.0625em) {		
// 		display:flex;
// 		align-items:center;
// 		}
// `;

// const NarrowStyledLink = styled(Link)`
// 	text-decoration: none;
// 	color: ${Themes.colors.lightGrey};
// 	font-size: 1em;
// 	padding: 1em;
// 	display:block;
// 	text-align: center;
// 	width:100%;
// `;
  export default HeaderContainer;