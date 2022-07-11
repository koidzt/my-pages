/**
 * @param originArray = [{key1:value1,key2:value2,key3:value3},{key1:value1,key2:value2,key3:value3},...]
 * @requires originArray
 * @returns newArrayObjects = [{key1:value1,key2:value2,key3:value3},{key1:value1,key2:value2,key3:value3},...]
 **/
export const copyArrayObjects = (originArray) => {
  const newArrayObjects = [];
  originArray?.forEach((arrayObject) => {
    newArrayObjects.push({ ...arrayObject });
  });
  return newArrayObjects;
};

/**
 * @param originArray = [{key1:value1,key2:value2,key3:value3},{key1:value1,key2:value2,key3:value3},...]
 * @param keyLabel = 'key1'
 * @param keyValue = 'key2'
 * @requires originArray
 * @requires keyLabel
 * @requires keyValue
 * @returns newArrayObjects = [{key1:value1,key2:value2,key3:value3,label:value1,value:value2},...]
 **/
export const convertArrayToOptionsReactSelectForm = (originArray, keyLabel, keyValue) => {
  const newArrayObjects = [];
  originArray?.forEach((arrayObject) => {
    const newList = { label: arrayObject[keyLabel], value: arrayObject[keyValue] };
    newArrayObjects.push(newList);
  });

  return newArrayObjects;
};

/**
 * @param originArray = [{key1:value1,key2:value2,key3:value3},{key1:value1,key2:value2,key3:value3},...]
 * @param keyLabel = 'key1'
 * @param keyValue = 'key2'
 * @requires originArray
 * @requires keyLabel
 * @requires keyValue
 * @returns newArrayObjects = [{key1:value1,key2:value2,key3:value3,label:value1,value:value2},...]
 **/
export const spreadArrayToOptionsReactSelectForm = (originArray, keyLabel, keyValue) => {
  const newArrayObjects = [];
  originArray?.forEach((arrayObject) => {
    const newList = { ...arrayObject, label: arrayObject[keyLabel], value: arrayObject[keyValue] };
    newArrayObjects.push(newList);
  });

  return newArrayObjects;
};

export const telephoneFormat = (number) => {
  if (!number) return number;

  const phoneNumber = number.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 3) {
    return phoneNumber;
  } else if (phoneNumberLength < 6) {
    return `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 5)}`;
  } else if (phoneNumberLength < 10) {
    return `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 9)}`;
  } else {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }
};
