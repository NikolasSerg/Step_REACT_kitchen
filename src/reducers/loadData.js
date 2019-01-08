import { LOAD_ARTICLES } from '../constants';
import {database} from '../firebase/firebase';

export default (loadData = [], action) => {
	const { type } = action;
	var dataRef = null;

	switch (type) {
		case LOAD_ARTICLES:
			dataRef = database.ref(action.reference);
			dataRef.on('value', (snapshot) => { loadData.push(snapshot.val()) });
			return loadData;

		default: return loadData;
	}

}