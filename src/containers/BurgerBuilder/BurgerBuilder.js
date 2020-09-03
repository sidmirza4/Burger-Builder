import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';
import axios from '../../axios-orders';

import * as burgerBuilderActions from '../../store/actions/index';

class BurgerBuilder extends Component {
	// constructor(props){
	//     super(props);
	//     this.state = { ...}
	// }

	state = {
		purchasing: false
	};

	componentDidMount() {
		this.props.onInitIngredients();
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		return sum > 0;
	}

	// addIngredientHandler = (type) => {
	// 	const oldCount = this.state.ingredients[type];
	// 	const updatedCount = oldCount + 1;
	// 	const updatedIngredient = {
	// 		...this.state.ingredients,
	// 	};

	// 	updatedIngredient[type] = updatedCount;
	// 	const priceAddition = INGREDIENT_PRICES[type];
	// 	const oldPrice = this.state.totalPrice;
	// 	const newPrice = oldPrice + priceAddition;

	// 	this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
	// 	this.updatePurchaseState(updatedIngredient);
	// };

	// removeIngredientHandler = (type) => {
	// 	const oldCount = this.state.ingredients[type];
	// 	if (oldCount <= 0) {
	// 		return;
	// 	}
	// 	const updatedCount = oldCount - 1;
	// 	const updatedIngredient = {
	// 		...this.state.ingredients,
	// 	};

	// 	updatedIngredient[type] = updatedCount;
	// 	const priceDeduction = INGREDIENT_PRICES[type];
	// 	const oldPrice = this.state.totalPrice;
	// 	const newPrice = oldPrice - priceDeduction;

	// 	this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
	// 	this.updatePurchaseState(updatedIngredient);
	// };

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		// 	const queryParams = [];
		// 	for (let i in this.state.ingredients) {
		// 		queryParams.push(
		// 			encodeURIComponent(i) +
		// 				'=' +
		// 				encodeURIComponent(this.state.ingredients[i])
		// 		);
		// 	}

		// 	queryParams.push(`price=${this.props.price}`);
		// 	const queryString = queryParams.join('&');
		// 	this.props.history.push({
		// 		pathname: '/checkout',
		// 		search: '?' + queryString,
		// 	});

		this.props.history.push('/checkout');
	};

	render() {
		const disabledInfo = {
			...this.props.ings,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.props.error ? (
			<p> Ingredients cannot be loaded </p>
		) : (
			<Spinner />
		);

		if (this.props.ings) {
			burger = (
				<Aux>
					<Burger ingredients={this.props.ings} />
					<BuildControls
						ingredientAdded={this.props.onIngredientAdded}
						ingredientRemoved={this.props.onIngredientRemove}
						disabled={disabledInfo}
						purchaseable={this.updatePurchaseState(this.props.ings)}
						price={this.props.price}
						ordered={this.purchaseHandler}
					/>
				</Aux>
			);

			orderSummary = (
				<OrderSummary
					ingredients={this.props.ings}
					price={this.props.price}
					purchaseCancelled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
				/>
			);
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ings: state.ingredients,
		price: state.totalPrice,
		error: state.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIngredientAdded: (ingName) =>
			dispatch(burgerBuilderActions.addIngredient(ingName)),
		
		onIngredientRemove: (ingName) =>
			dispatch(burgerBuilderActions.removeIngredient(ingName)),
		
		onInitIngredients: () =>
			dispatch(burgerBuilderActions.initIngredients())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
