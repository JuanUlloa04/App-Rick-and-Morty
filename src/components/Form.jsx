import styles from './Form.module.css';
import React, { useState } from 'react';

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

		!regexEmail.test(username) &&
			(errors.username = 'Name must be a valid email address');
		!username && (errors.username = 'Add your name');
		username.length > 35 && (errors.username = 'Max length 35');
		!regexPass.test(password) && (errors.password = 'Add pass 6-10 characters');

		return errors;
	};

	const handleInputChange = (e) => {
		const property = e.target.name;
		const value = e.target.value;
		setUserData({ ...userData, [property]: value });
		setErrors(validation({ ...userData, [property]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.login(userData);
		if (!Object.keys(errors).length) {
			setErrors({
				username: '',
				password: '',
			});
			setUserData({
				username: '',
				password: '',
			});
			alert('Complete Data');
		} else {
			alert('You must corrrect the errors');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					value={userData.username}
					onChange={handleInputChange}
					className={errors.username && styles.warning}
				/>
				{errors.username && <p className={styles.danger}>{errors.username}</p>}
				<br></br>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					value={userData.password}
					onChange={handleInputChange}
					className={errors.password && styles.warning}
				/>
				{errors.password && <p className={styles.danger}>{errors.password}</p>}
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Form;
