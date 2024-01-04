import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import fetchCart from './store/cart-actions';

let isInitial = true;

function App() {
	const cartShowState = useSelector((state) => state.cartShow.isShown);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			dispatch(fetchCart());
			return;
		}

		const run = async () => {
			await toast.promise(
				fetch(`${import.meta.env.VITE_firebaseLink}/products.json`, {
					method: 'PUT',
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity,
					}),
				}),
				{
					success: 'Cart Upload Successful',
					pending: 'Cart is uploading',
					error: 'Cart Upload Failed',
				}
			);
		};
		if (cart.isChanged) run();
	}, [cart]);

	return (
		<Layout>
			{cartShowState && <Cart />}
			<Products />
			<ToastContainer
				position='top-right'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme='light'
			/>
		</Layout>
	);
}

export default App;
