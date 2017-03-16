import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (stateImages = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...stateImages, action.images];
    case types.SELECTED_IMAGE:
      return { ...stateImages, selectedImage: action.image };
    default:
      return stateImages;
  }
}