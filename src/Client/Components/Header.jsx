import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './shelfie_icon.png';

const StlyedDiv = styled.div`
	display: flex;
	width: 100vw;
	height: 10vh;
	background: #ab2a19;
	color: white;

	align-items: center;
	> * {
		padding: 5px;
	}
`;

const StyledLink = styled(Link)`
	color: white;
	background-color: #ed6b5a;
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
`;

const Header = () => (
	<StlyedDiv>
		<img src={logo} alt="Shelfie Logo" />
		<h2>Shelfie</h2>
		<StyledLink to="/">Dashboard</StyledLink>
		<StyledLink to="/create">Create Item</StyledLink>
	</StlyedDiv>
);

export default Header;
