/* eslint-disable import/prefer-default-export */
import { TWEETAR } from './actionTypes';

export const actCreatorNewTweet = (payload) => ({
  type: TWEETAR,
  payload,
});
