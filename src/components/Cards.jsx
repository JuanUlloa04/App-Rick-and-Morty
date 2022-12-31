import React from 'react';
import Card from './Card';

export default function Cards(props) {
	const { characters, onClose } = props;
	return (
		<div
			style={{
				marginTop: '15px',
				display: 'flex',
				justifyContent: 'space-evenly',
				flexWrap: 'wrap',
			}}
		>
			{characters.map((c) => (
				<Card
					id={c.id}
					key={c.id}
					name={c.name}
					species={c.species}
					gender={c.gender}
					image={c.image}
					onClose={() => onClose(c.id)}
				/>
			))}
		</div>
	);
}
