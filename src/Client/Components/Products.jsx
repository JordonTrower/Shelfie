import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
	height: 175px;
	margin-top: 25px;
	background: #d34735;
	display: flex;
	border-radius: 16px;
`;

const StyledImage = styled.img`
	width: 35%;
	height: 85%;
	display: flex;
	align-self: center;
	padding-left: 12.5px;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 65%;
	> div > p {
		padding: 8.5px 10px 0 10px;
		margin: 0;
	}
`;

const Button = styled.div`
	color: white;
	background-color: #ed6b5a;
	margin: 12px;
	padding: 5px;
	border-radius: 5px;
`;

const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const Product = props => (
	<Container>
		<StyledImage src={props.img} />
		<InfoContainer>
			<div>
				<p>{props.name}</p>
				<p>${props.price}</p>
			</div>
			<ButtonGroup>
				<Button
					onClick={() => {
						axios.delete(`/api/inventory/${props.id}`).then(res => {
							props.refreshProducts(res.data);
						});
					}}
				>
					Delete
				</Button>
				<Button
					onClick={() => {
						props.history.push(`/create/${props.id}`);
					}}
				>
					Edit
				</Button>
			</ButtonGroup>
		</InfoContainer>
	</Container>
);

Product.propTypes = {
	id: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	refreshProducts: PropTypes.func.isRequired
};

export default withRouter(Product);
