import { Component } from 'react';
import { data } from './data/data';
import { Filter } from './components/Filter';
import { Products } from './components/Projects';

class App extends Component {
	constructor() {
		super();
		this.state = {
			products: localStorage.getItem('data')
				? JSON.parse(localStorage.getItem('data'))
				: data,
			sort: localStorage.getItem('sort')
				? JSON.parse(localStorage.getItem('sort'))
				: '',
			category: ''
		};
	}

	sorting = e => {
		const sorting = e.target.value;

		const sortOrder = this.state.products.sort((item, pro) => {
			if (sorting === 'all') {
				return item.id > pro.id ? 1 : -1;
			}

			if (sorting === 'low') {
				return item.price.id > pro.price.id ? 1 : -1;
			}

			if (sorting === 'high') {
				return item.price.id < pro.price.id ? 1 : -1;
			}
		});

		this.setState({ sort: sorting, products: sortOrder }, () => {
			localStorage.setItem('sort', JSON.stringify(this.state.sort));
			localStorage.setItem('data', JSON.stringify(this.state.products));
		});
	};

	// filtering by title
	filteringTitle = e => {
		let allCategory = e.target.value;
		if (allCategory === '') {
			this.setState({ category: allCategory, products: data });
		} else {
			this.setState({
				category: allCategory,
				products: data.filter(product => {
					return product.category === e.target.value;
					// return product.category.indexOf(e.target.value) >= 0;
				})
			});
		}
	};

	render() {
		return (
			<div className='App'>
				<h1 className='section-title'>
					<span>Reactjs</span> Projects
				</h1>

				<Filter
					filteringTitle={this.filteringTitle}
					category={this.state.category}
				/>
				<Products products={this.state.products} title='Project' />
			</div>
		);
	}
}

export default App;
