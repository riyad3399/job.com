import { getShoppingCart } from "./fakeDb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("datas.json");
  const products = await loadedProducts.json();

  const storedCart = getShoppingCart();

  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  // if you raturn two things
  // return [savedCart, products]
  // another option:
  // return {products, cart: savedCart}
  return savedCart;
};

export { cartProductsLoader };
