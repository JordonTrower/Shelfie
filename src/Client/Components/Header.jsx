import React from 'react';
import styled from 'styled-components';
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

const Header = () => (
	<StlyedDiv>
		<img src={logo} alt="Shelfie Logo" />
		<h2>Shelfie</h2>
	</StlyedDiv>
);

export default Header;
