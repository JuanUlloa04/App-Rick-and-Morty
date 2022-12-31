import React from 'react';
import RickAndMorty from '../img/Universe 4k-(1080p).mp4';
import styled from 'styled-components';

const Contain = styled.div`
	position: fixed;
	z-index: -1;
`;

const Play = styled.video`
	position: fixed;
	width: 100%;
	height: 100%;
	object-fit: fill;
`;

export default function Video() {
	return (
		<Contain>
			<Play autoPlay loop muted>
				<source src={RickAndMorty} type="video/mp4" />
			</Play>
		</Contain>
	);
}
