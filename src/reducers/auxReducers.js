const auxAddToCart = (cart, productToCart) => {
  let exist = false;
  const { sku, name, sellingPrice } = productToCart;

  let newCart = cart.map((item) => {
    const newItem = { ...item };
    if (newItem.sku === productToCart.sku) {
      newItem.amount += 1;
      newItem.checkoutPartial = Math.ceil(newItem.amount * newItem.sellingPrice * 100) / 100;
      exist = true;
    }
    return newItem;
  });

  if (!exist) {
    newCart = [
      ...newCart,
      {
        sku,
        name,
        sellingPrice,
        amount: 1,
        checkoutPartial: sellingPrice,
      },
    ];
  }

  return newCart;
};

export default auxAddToCart;
