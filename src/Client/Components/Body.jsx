import React, { Component } from 'react';
import styled from 'styled-components';
import Product from './Products';
import AddProduct from './Add';
import axios from 'axios';

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 50px;
	display: flex;
	justify-content: space-around;
`;

const ProductContainer = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	height: 100%;
`;

class Body extends Component {
	constructor() {
		super();

		this.state = {
			products: []
		};
		this.RefreshProducts = this.RefreshProducts.bind(this);
	}

	componentDidMount() {
		axios.get('/api/inventory').then(res => {
			this.setState({ products: res.data });
		});
	}

	RefreshProducts(data) {
		console.log(data);
		this.setState({ products: data });
	}

	render() {
		return (
			<Container>
				<ProductContainer>
					{this.state.products.map(product => (
						<Product
							key={product.id}
							{...product}
							refreshProducts={this.RefreshProducts}
						/>
					))}
				</ProductContainer>
				<AddProduct refreshProducts={this.RefreshProducts} />
			</Container>
		);
	}
}

export default Body;
