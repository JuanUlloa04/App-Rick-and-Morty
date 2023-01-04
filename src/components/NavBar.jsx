import React from 'react';
import SearchBar from './SearchBar';
import headerLogo from '../img/rick-logo.3bbcddb8c31579019495.png';
import styles from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavBar(props) {
	const navigate = useNavigate();

	const go2Home = () => {
		navigate('/home');
	};

	return (
		<div className={styles.contenedor1}>
			<div>
				<img
					className={styles.logo}
					src={headerLogo}
					alt="Logo"
					onClick={go2Home}
				/>
			</div>
			<div className={styles.contenedor2}>
				<div className={styles.searchBar}>
					<SearchBar onSearch={props.onSearch} />
				</div>

				<Link className={styles.links} to="/home">
					Home
				</Link>

				<Link className={styles.links} to="/about">
					About
				</Link>

				<Link className={styles.links} to="/favorites">
					Favorites
				</Link>

				<Link
					className={styles.links}
					to="/"
					onClick={() => {
						props.logOut();
					}}
				>
					Log Out
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
