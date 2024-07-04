const OBJ = {
  a: {
    b: {
      c: 1,
    },
    d: {
      e: {
        f: 2,
      },
    },
  },
  g: {
    h: 3,
  },
  i: 4,
};

const func = (obj, k = "") => {
  if (typeof obj != "object") return { [k]: obj };
  let o = {};
  for (key in obj) {
    const combinedKey = k === "" ? k + key : `${k}.${key}`;
    o = { ...o, ...func(obj[key], combinedKey) };
  }
  return o;
};

const flattenedObj = func(OBJ);

console.log(flattenedObj);
