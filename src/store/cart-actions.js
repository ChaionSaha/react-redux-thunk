import { toast } from 'react-toastify';
import { cartActions } from './cart';

const fetchCart = () => {
	return async (dispatch) => {
		const response = await toast.promise(
			fetch(
				'https://ema-john-simple-928c9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
			),
			{
				pending: 'Cart data is fetching.',
				success: 'Cart data fetched successfully.',
				error: 'Cart data fetching unsuccessful.',
			}
		);
		if (!response.ok) {
			console.log(response.statusText);
			return;
		}
		const data = await response.json();
		dispatch(
			cartActions.replaceCart({
				items: data.items || [],
				totalQuantity: data.totalQuantity,
			})
		);
	};
};

export default fetchCart;
