import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
	const { detailId } = useParams();

	const [character, setCharacter] = useState('');

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			})
			.catch((err) => {
				window.alert('Ups I did it again');
			});
		return setCharacter({});
	}, [detailId]);

	return (
		<div>
			<h1>{character.name}</h1>
			<img src={character.image} alt={character.name} />
			<h1>{character.status}</h1>
			<h1>{character.species}</h1>
			<h1>{character.gender}</h1>
			<h1>{character.origin?.name}</h1>
			{/* puse ? porque no todos los personajes tienen un origin en los datos de la api , si lo encuentra se renderizara y sino no se mostrara */}
		</div>
	);
}

export default Detail;
