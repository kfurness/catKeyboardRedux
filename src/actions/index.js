export const pickAnimal = output => {
  let type = ''
  switch (output) {
    case 'Cat' :
      type = 'CHANGE_TO_CAT';
      break;
    case 'Dog' :
      type = 'CHANGE_TO_DOG';
      break;
    case 'Bird' :
      type = 'CHANGE_TO_BIRD';
      break;
  }
  return {type};
}
