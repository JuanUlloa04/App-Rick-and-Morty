import styles from './Form.module.css';
import React, { useState } from 'react';
import Logo from '../img/rick-logo.3bbcddb8c31579019495.png';

function Form(props) {
	const [userData, setUserData] = useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		username: '',
		password: '',
	});

	const validation = ({ username, password }) => {
		let errors = {};
		const regexEmail = /\S+@\S+\.\S+/;
		const regexPass = new RegExp(
			'^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$'
		);

		if (!username) {
			errors.username = 'Add your username';
		} else if (!regexEmail.test(username)) {
			errors.username = 'Name must be a valid email address';
		} else if (username.length > 35) {
			errors.username = 'Max length 35';
		} else if (!password) {
			errors.password = 'Add your password';
		} else if (!regexPass.test(password)) {
			errors.password = 'Add pass 6-10 characters';
		}
		return errors;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
		setErrors(validation({ ...userData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.logIn(userData);
		if (!Object.keys(errors).length) {
			setErrors({
				username: '',
				password: '',
			});
			setUserData({
				username: '',
				password: '',
			});
		} else {
			alert('You must corrrect the errors');
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<img src={Logo} alt="not found" className={styles.logo} />
				<label htmlFor="username">
					<h3>Username:</h3>
				</label>
				<input
					placeholder="juanulloa@gmail.com"
					type="text"
					name="username"
					value={userData.username}
					onChange={(e) => handleInputChange(e)}
					className={errors.username ? styles.warning : styles.input}
				/>
				<p className={styles.danger}>{errors.username}</p>

				<label htmlFor="password">
					<h3>Password:</h3>
				</label>
				<input
					placeholder="password1"
					type="password"
					name="password"
					value={userData.password}
					onChange={(e) => handleInputChange(e)}
					className={errors.password ? styles.warning : styles.input}
				/>
				<p className={styles.danger}>{errors.password}</p>
				<br></br>
				<button type="submit" className={styles.button}>
					Log In →
				</button>
			</form>
		</div>
	);
}

export default Form;
