import { useEffect, useState } from 'react';

const useProduct = (API, preloadedProducts) => {
  const [baseProducts, setProducts] = useState(preloadedProducts);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
    setProducts(preloadedProducts);
  }, []);

  return baseProducts;
};

export default useProduct;
