import { TWEETAR, DELETE_TWEET } from '../actions/actionTypes';

const initialState = {
  tweets: [{
    name: 'Murillo Wolf', message: 'first', username: '@wolf', date: '15 May',
  }],
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEETAR:
      return {
        tweets: [
          ...state.tweets,
          {
            name: action.payload.name,
            message: action.payload.message,
            username: action.payload.username,
            date: action.payload.date,
          },
        ],
      };

    case DELETE_TWEET:
      return {};

    default:
      return state;
  }
};

export default timelineReducer;
