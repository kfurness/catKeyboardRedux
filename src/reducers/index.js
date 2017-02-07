import { combineReducers } from 'redux';
import { catData, dogData, birdData } from '../animal_data';

export const animalData = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_TO_CAT':
      return catData;
      break;
    case 'CHANGE_TO_DOG':
      return dogData;
      break;
    case 'CHANGE_TO_BIRD' :
      return birdData;
      break;
    default:
      return state;
  }
  return state;
}

export const combinedReducers = combineReducers({
  animalData
})
