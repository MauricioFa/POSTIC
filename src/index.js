import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
    cart: [],
    products: [
      {
        "id": "1",
        "image": "https://arepa.s3.amazonaws.com/camiseta.png",
        "title": "Camiseta",
        "price": 25,
        "description": "bla bla bla bla bla"
      },
      {
        "id": "3",
        "image": "https://arepa.s3.amazonaws.com/mug.png",
        "title": "Mug",
        "price": 10,
        "description": "bla bla bla bla bla"
      },
      {
        "id": "4",
        "image": "https://arepa.s3.amazonaws.com/pin.png",
        "title": "Pin",
        "price": 4,
        "description": "bla bla bla bla bla"
      },
      {
        "id": "5",
        "image": "https://arepa.s3.amazonaws.com/stickers1.png",
        "title": "Stickers",
        "price": 2,
        "description": "bla bla bla bla bla"
      },
      {
        "id": "6",
        "image": "https://arepa.s3.amazonaws.com/stickers2.png",
        "title": "Stickers",
        "price": 2,
        "description": "bla bla bla bla bla"
      },
      {
        "id": "7",
        "image": "https://arepa.s3.amazonaws.com/hoodie.png",
        "title": "Hoodie",
        "price": 35,
        "description": "bla bla bla bla bla"
      },
  
    ],
    checkOutTotal : 0,
  };

const store = createStore(reducer, initialState);


ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,
    document.getElementById("root")
);
