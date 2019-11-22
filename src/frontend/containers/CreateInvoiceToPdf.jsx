import React from 'react';

const createInvoiceToPdf = () => {
  const key = sessionStorage.getItem('currentOrderNumber');
  console.log(key);
  return <h1>Esto si es vida</h1>;
};

export default createInvoiceToPdf;
