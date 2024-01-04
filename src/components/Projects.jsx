import { Product } from './Project';
//import Title from "./Title";

export const Products = props => {
	return (
		<>
			<div className='products'>
				{props.products.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</>
	);
};
