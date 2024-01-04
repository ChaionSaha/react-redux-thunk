import { useDispatch, useSelector } from 'react-redux';
import { cartShowActions } from '../../store/cart-show-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const quantity = useSelector((state) => state.cart.totalQuantity);
	return (
		<button
			onClick={() => {
				dispatch(cartShowActions.toggle());
			}}
			className={classes.button}
		>
			<span>My Cart</span>
			<span className={classes.badge}>{quantity}</span>
		</button>
	);
};

export default CartButton;
