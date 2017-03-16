import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles video related actions
// The idea is to return an updated copy of the state depending on the action type.
export default function (stateVideos = initialState.videos, action) {
  switch (action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...stateVideos, action.videos];
    case types.SELECTED_VIDEO:
      return { ...stateVideos, selectedVideo: action.video };
    default:
      return stateVideos;
  }
}