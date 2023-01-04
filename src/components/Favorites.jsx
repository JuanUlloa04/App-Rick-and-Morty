import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../redux/actions';
import Card from './Card';
import styles from './Favorites.module.css';

//    Destructuring props     ↓
export function Favorites({ myFavorites }) {
	const dispatch = useDispatch();

	const handleClick = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'order':
				return dispatch(orderCards(value));
			case 'filter':
				return dispatch(filterCards(value));
			default:
				return 0;
		}
	};

	return (
		<div>
			<div>
				<select name="order" onChange={handleClick}>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<select name="filter" onChange={handleClick}>
					<option value="All">All</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">unknown</option>
				</select>
			</div>
			<div className={styles.cards}>
				{myFavorites.length ? (
					myFavorites.map((c) => {
						return (
							<Card
								id={c.id}
								key={c.id}
								name={c.name}
								species={c.species}
								gender={c.gender}
								image={c.image}
								onClose={null}
							/>
						);
					})
				) : (
					<h1 className={styles.h1}>NO HAY FAVORITOS</h1>
				)}
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	console.log(state.myFavorites);
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, null)(Favorites);
