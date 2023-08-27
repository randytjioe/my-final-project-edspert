const storageKey = "reactViteJS";

const setItem = (value) => {
  const valueToString = JSON.stringify(value);
  localStorage.setItem(storageKey, valueToString);
};

const getItem = (value) => {
  const data = localStorage.getItem(storageKey);
  if (data) {
    return JSON.parse(data);
  }
};

const storeManager = { set: setItem };

export default storeManager;
