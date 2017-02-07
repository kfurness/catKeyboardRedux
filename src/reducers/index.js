import { combineReducers } from 'redux';
import { catData, dogData } from '../animal_data';

// const catData = {
//   a: {
//     img: 'cat0',
//     sound: 'cat0 sound'
//   },
//   s: {
//     img: 'cat1',
//     sound: 'cat1 sound'
//   },
//   d: {
//     img: 'cat2',
//     sound: 'cat2 sound'
//   },
//   f: {
//     img: 'cat3',
//     sound: 'cat3 sound'
//   }
// }
//
// const dogData = {
//     a: {
//       img: 'dog0',
//       sound: 'dog0 sound'
//     },
//     s: {
//       img: 'dog1',
//       sound: 'dog1 sound'
//     },
//     d: {
//       img: 'dog2',
//       sound: 'dog2 sound'
//     },
//     f: {
//       img: 'dog3',
//       sound: 'dog3 sound'
//     }
// }

export const animalData = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_TO_CAT':
      return catData;
      break;
    case 'CHANGE_TO_DOG':
      return dogData;
      break;
    default:

  }
  return state;
}

export const combinedReducers = combineReducers({
  animalData
})
