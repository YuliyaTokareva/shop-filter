export const dataCheckbox = {
  samsung: false,
  apple: false,
  huawei: false,
  pocco: false,
  lenovo: false
};
export const startRange = 150;
export const endRange = 3000;
export const fillColor = (func, minValue, maxValue) => {
  const percent1 = (minValue / endRange) * 100;
  const percent2 = (maxValue / endRange) * 100;
  func([percent1, percent2]);
};

export const brandToFilter = (obj) => {
  return Object.keys(obj).filter((key) => obj[key] === true);
};
