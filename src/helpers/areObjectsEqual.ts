export const areObjectsEqual = (firstObject: any, secondObject: any): boolean => {
  return (
    Object.keys(firstObject).length === Object.keys(secondObject).length &&
    Object.keys(firstObject).every((property) => firstObject[property] === secondObject[property])
  );
};
