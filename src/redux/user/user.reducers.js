import { userTypes } from './user.types';

const INIT_STATE = {
    currentUser: null
};

const userReducers = (state = INIT_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducers;