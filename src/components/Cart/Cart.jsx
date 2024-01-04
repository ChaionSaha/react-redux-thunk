import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartState = useSelector((state) => state.cart.items);
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartState.map((c, i) => (
					<CartItem
						key={i}
						item={{
							title: c.title,
							quantity: c.quantity,
							total: c.totalPrice,
							price: c.price,
							id: c.id,
						}}
					/>
				))}
			</ul>
		</Card>
	);
};

export default Cart;
