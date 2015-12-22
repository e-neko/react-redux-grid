import { fromJS } from 'immutable';

import {
    SET_SELECTION
} from '../../../constants/ActionTypes';

const initialState = fromJS({
    selectedRows: fromJS.Map
});

export default function selection(state = initialState, action) {

    switch (action.type) {

    case SET_SELECTION:

        const currentValue = state.get('selectedRows') ? state.get('selectedRows')[action.id] : false; 

    	if (action.clearSelections) {
    		return state.set('selectedRows',
	            {
	                [action.id]: currentValue && action.allowDeselect ? false : true
	            }
	        );
    	}

    	else {
	        return state.set('selectedRows', Object.assign({}, state.get('selectedRows'),
	            {
	                [action.id]: currentValue && action.allowDeselect ? false : true
	            }
	        ));
    	}

    default:
        return state;
    }
}