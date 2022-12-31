import React from 'react';
import SearchBar from './SearchBar';
import headerLogo from '../img/Rick_and_Morty.svg.png';
import styles from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar(props) {
	const navigate = useNavigate();

	const go2Home = () => {
		navigate('/home');
	};

	return (
		<div className={styles.contenedor}>
			<div>
				<Link to="/about">About</Link>
			</div>

			<div>
				<img
					className={styles.img1}
					src={headerLogo}
					alt="Logo"
					onClick={go2Home}
				/>
			</div>

			<div>
				<Link to="/favorites">Favorites</Link>
			</div>

			<div className={styles.searchBar}>
				<SearchBar onSearch={props.onSearch} />
			</div>
		</div>
	);
}

export default NavBar;
