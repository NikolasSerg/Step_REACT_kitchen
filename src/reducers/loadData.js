import { LOAD_ARTICLES } from '../constants/constants';
import {database} from '../components/Firebase/firebase';

export default (loadData = [], action) => {
	const { type } = action;
	var dataRef = null;

	switch (type) {
		case LOAD_ARTICLES:
			console.log(action.reference);
			dataRef = database.ref(action.reference);
			dataRef.on('value', (snapshot) => { loadData.push(snapshot.val()) });
			return loadData;

		default: return loadData;
	}

}