import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import EmptyImage from '../empty.png';

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 50px;
	display: flex;
	justify-content: space-around;
`;

const AddContainer = styled.div`
	height: 500px;
	width: 35%;
	margin-top: 25px;
	background: #3ad886;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 16px;
`;

const StyledImage = styled.img`
	padding: 12px;
	width: 250px;
	height: 200px;
`;

const InputContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	> p {
		align-self: flex-start;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;
`;

const Button = styled.div`
	color: white;
	background-color: #ed6b5a;
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
`;

class Add extends Component {
	constructor() {
		super();

		this.state = {
			imageUrl: '',
			productName: '',
			productPrice: 0,
			url: '/api/inventory',
			method: 'post'
		};
	}

	componentDidMount() {
		const editId = this.props.match.params.id;
		console.log(editId, this.props.match);
		if (editId) {
			axios.get(`/api/inventory/${editId}`).then(res => {
				const product = res.data[0];
				this.setState({
					url: `${this.state.url}/${editId}`,
					imageUrl: product.img,
					productName: product.name,
					productPrice: Number(product.price),
					method: 'put'
				});
			});
		}
	}

	render() {
		return (
			<Container>
				<AddContainer>
					<StyledImage
						src={
							this.state.imageUrl !== ''
								? this.state.imageUrl
								: EmptyImage
						}
						alt="Preview"
					/>
					<InputContainer>
						<p>Image Url:</p>
						<input
							type="text"
							name="image"
							id="image"
							value={this.state.imageUrl}
							onChange={e => {
								this.setState({ imageUrl: e.target.value });
							}}
						/>
						<p>Product Name:</p>
						<input
							type="text"
							name="name"
							id="name"
							value={this.state.productName}
							onChange={e => {
								this.setState({ productName: e.target.value });
							}}
						/>
						<p>Price:</p>
						<input
							type="number"
							name="price"
							id="price"
							value={this.state.productPrice}
							onChange={e => {
								this.setState({ productPrice: e.target.value });
							}}
						/>
						<ButtonContainer>
							<Button
								onClick={() => {
									this.setState({
										imageUrl: '',
										productName: '',
										productPrice: 0
									});
								}}
							>
								Cancel
							</Button>
							<Button
								onClick={() => {
									axios({
										url: this.state.url,
										method: this.state.method,
										data: {
											name: this.state.productName,
											price: this.state.productPrice,
											img: this.state.imageUrl
										}
									}).then(res => {
										console.log(res);
										this.setState({
											imageUrl: '',
											productName: '',
											productPrice: 0
										});
										this.props.history.push('/');
									});
								}}
							>
								{this.state.method === 'post' ? 'Add to Inventory' : 'Edit Product'}
							</Button>
						</ButtonContainer>
					</InputContainer>
				</AddContainer>
			</Container>
		);
	}
}

export default Add;
