import React, { useState, useEffect } from 'react';
import './App.css';
import Detail from './components/Detail';
import About from './components/About';
import Cards from './components/Cards.jsx';
import Video from './components/Video';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {
	const [characters, setCharacters] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const [access, setAccess] = useState(false);

	const username = 'juanulloa148@gmail.com';
	const password = '1password';

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	function login(userData) {
		if (userData.password === password && userData.username === username) {
			setAccess(true);
			navigate('/home');
		}
	}

	function onSearch(id) {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
					let exist = characters.find((e) => e.id === data.id);
					if (exist) {
						alert('El personaje ya existe');
					} else {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
	}

	function onClose(id) {
		setCharacters((data) => {
			// data es igual a characters -> [1,2,4]
			return data.filter((e) => e.id !== id); // id 2     [1,4]
		});
	}

	return (
		<div className="App">
			<Video />
			{location.pathname !== '/' && <NavBar onSearch={onSearch} />}
			<Routes>
				<Route path="/" element={<Form login={login} />} />
				<Route
					path="/home"
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/detail/:detailId" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
