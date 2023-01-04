import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../redux/actions';

export function Card(props) {
	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			props.deleteFavorite(props.id);
		} else {
			setIsFav(true);
			props.addFavorite(props);
		}
	};

	useEffect(() => {
		props.myFavorites?.forEach((fav) => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [props.myFavorites]);

	return (
		<div className={styles.card}>
			<div className={styles.circle} />
			<div className={styles.circle} />
			<div className={styles.card_inner}>
				<div className={styles.data}>
					<div className={styles.buttonContainer}>
						{isFav ? (
							<button onClick={handleFavorite}>❤️</button>
						) : (
							<button onClick={handleFavorite}>🤍</button>
						)}
						{props.onClose ? (
							<button className={styles.button} onClick={props.onClose}>
								X
							</button>
						) : null}
					</div>
					<Link className={styles.name} to={'/detail/' + props.id}>
						{props.name}
					</Link>

					<img className={styles.img} src={props.image} alt={props.name} />
					<div className={styles.info}>
						<div>{props.gender}</div>
						<div>{props.species}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addFavorite: (character) => {
			dispatch(addFavorite(character));
		},
		deleteFavorite: (id) => {
			dispatch(deleteFavorite(id));
		},
	};
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
