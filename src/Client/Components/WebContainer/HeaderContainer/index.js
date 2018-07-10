import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import breakpoint from 'styled-components-breakpoint';
import Themes from '../../../../Assets/Styles/Themes';
import { Link } from 'react-router-dom';
import logo from '../../../../Assets/Images/logo.png';
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
            <Nav>
							<Link to='/'><img src={logo} width="120" style={styledLogo}/></Link>
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
const styledLogo = {
	float:'left',
};

const Nav = styled.div`
	background-color: ${Themes.colors.blue};
	overflow: hidden;
	padding: 1em;
	display:block;
	justify-content:space-between;

	a {
		color: #FFF;
	}

	a:visited {
		color: #FFF;
	}`;

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
			margin: 0 auto;
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
		display: none;
		position: relative;
		top: 30px;
		text-align: center;
`;

const NarrowStyledLink = styled(Link)`
text-decoration: none;
color: ${Themes.colors.lightGrey};
font-size: 1em;
padding: 1em;
display:block;
text-align: center;
}
`;
  export default HeaderContainer;