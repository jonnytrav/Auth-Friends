import {
  LOGIN_START,
  FETCHING_FRIENDS,
  FETCH_FRIENDS_SUCCESS
} from "../actions";

const initialState = () => {
  return {
    friends: [],
    loggingIn: false,
    fetching: false
  };
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetching: true
      };
    case FETCH_FRIENDS_SUCCESS:
      //   console.log(action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
};
