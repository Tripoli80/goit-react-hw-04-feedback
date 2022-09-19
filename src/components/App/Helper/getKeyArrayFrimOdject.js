export const getKeyArrayFrimOdject = (obj) => {
  const keyNames = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      keyNames.push(key);
    }
  }
  return keyNames;
};
