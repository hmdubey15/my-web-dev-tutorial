const deepCopy = (obj) => {
  if (obj == null || typeof obj != "object") return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  for (key in obj) if (Object.hasOwn(obj, key)) newObj[key] = deepCopy(obj[key]);
  return newObj;
};
