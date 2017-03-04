import { combineReducers } from 'redux';
import { catData, dogData, birdData } from '../animal_data';

export const animalData = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_TO_CAT':
      return catData;
    case 'CHANGE_TO_DOG':
      return dogData;
    case 'CHANGE_TO_BIRD' :
      return birdData;
    default:
      return state;
  }
  return state;
}

export const combinedReducers = combineReducers({
  animalData
})
