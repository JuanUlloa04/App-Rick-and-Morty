import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './actions';

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {
				...state,
				myFavorites: [...state.allCharacters, action.payload],
				allCharacters: [...state.allCharacters, action.payload],
			};
		case DELETE_FAVORITE:
			return {
				...state,
				myFavorites: state.myFavorites.filter((el) => {
					return el.id !== action.payload;
				}),
			};
		case FILTER:
			const filterCopy = [...state.allCharacters];
			let filter = filterCopy.filter((el) => el.gender === action.payload);
			if (action.payload === 'All') {
				filter = filterCopy;
			}
			return {
				...state,
				myFavorites: filter,
			};
		case ORDER:
			const orderCopy = [...state.allCharacters];
			const order = orderCopy.sort((a, b) => {
				if (action.payload === 'Ascendente') {
					return a.id - b.id;
				}
				if (action.payload === 'Descendente') {
					return b.id - a.id;
				} else return 0;
			});
			return {
				...state,
				myFavorites: order,
			};
		default:
			return { ...state };
	}
};

export default reducer;
