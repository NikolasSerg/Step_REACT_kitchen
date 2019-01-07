import { LOAD_ARTICLES } from '../constants';
import {database} from '../firebase/firebase';

export default (state = [], action) => {
	const { type } = action;
	var dataRef = null;

	switch (type) {
		case LOAD_ARTICLES:
			dataRef = database.ref(action.reference);
			dataRef.on('value', (snapshot) => { state.push(snapshot.val()) });
			return state;

		default: return state;
	}

}