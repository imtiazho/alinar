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

const getStoredCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
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
};

export {
  addToLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
  deleteShoppingCart,
};
