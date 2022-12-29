const addToLocalStorage = (item) => {
  let shoppingCart = [];

  // get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  const exist = shoppingCart.find((product) => product._id === item._id);
  if (exist) {
    exist.quantity = exist.quantity + item.quantity;
  } else {
    shoppingCart.push(item);
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const addFinalCaltulate = (estimate) => {
  const finalCalculation = estimate;
  localStorage.setItem("final-calculation", JSON.stringify(finalCalculation));
};

const getStoredCart = () => {
  let shoppingCart = [];

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const getCalculation = () => {
  let finalCalculation = {};

  //Get the Final Calculating from local storage
  const storedCalculation = localStorage.getItem("final-calculation");
  if (storedCalculation) {
    finalCalculation = JSON.parse(storedCalculation);
  }
  return finalCalculation;
};

const removeFromLocalStorage = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    const remainingProducts = shoppingCart.filter(
      (product) => product._id !== id
    );
    localStorage.setItem("shopping-cart", JSON.stringify(remainingProducts));
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
  localStorage.removeItem("final-calculation");
};

export {
  addToLocalStorage,
  getStoredCart,
  addFinalCaltulate,
  getCalculation,
  removeFromLocalStorage,
  deleteShoppingCart,
};
