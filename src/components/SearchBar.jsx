import React from 'react';
import styles from './SearchBar.module.css';
import styled from 'styled-components';
import { useState } from 'react';

const Contain = styled.div`
	padding: 15px;
`;

export default function SearchBar(props) {
	const [character, setCharacter] = useState('');

	function handleInput(event) {
		setCharacter(event.target.value);
	}

	return (
		<Contain>
			<input
				className={styles.input}
				placeholder="Write here"
				type="text"
				name="search"
				id=""
				onChange={(e) => handleInput(e)}
				value={character}
			/>
			<button
				className={styles.btn}
				onClick={() => {
					props.onSearch(character);
					setCharacter('');
				}}
			>
				Agregar
			</button>
		</Contain>
	);
}
