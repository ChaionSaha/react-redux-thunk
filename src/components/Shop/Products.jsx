import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		title: 'Product 1',
		price: 6,
		description: 'This is product 1',
	},
	{
		id: 'p2',
		title: 'Product 2',
		price: 8,
		description: 'This is product 2',
	},
	{
		id: 'p3',
		title: 'Product 3',
		price: 4,
		description: 'This is product 3',
	},
	{
		id: 'p4',
		title: 'Product 4',
		price: 5,
		description: 'This is product 4',
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((d, i) => (
					<ProductItem
						key={i}
						title={d.title}
						price={d.price}
						description={d.description}
						id={d.id}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
