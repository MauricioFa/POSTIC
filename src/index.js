import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/index_reducer'

const initialState = {
    listaCarrito: [],
    listaProductos: {
        columns: [
            { title: "Producto", field: "name" },
            { title: "SKU", field: "sku" },
            { title: "Presentación", field: "description" },
            { title: "Categoría", field: "categoria" },
            { title: "Valor unitario", field: "unitValue", type: "currency" }
        ],
        data: [
            {
                name: "Ariel con Downy",
                sku: "89ER5",
                description: "Bolsa x 850g",
                categoria: "Detergentes",
                unitValue: 7800,
                inventario: 200
            },
            {
                name: "Chocolate SOL Vainilla",
                sku: "E2589",
                description: "Pack por 12 unidades",
                categoria: "Chocolates",
                unitValue: 6800,
                inventario: 400
            },
            {
                name: "Chocolate SOL Tradicional",
                sku: "897KL44",
                description: "Pack por 12 unidades",
                categoria: "Chocolates",
                unitValue: 5900,
                inventario: 400
            },
            {
                name: "Aceite Oleocali",
                sku: "E2589",
                description: "Botella por 3 litros",
                categoria: "Aceites",
                unitValue: 15800,
                inventario: 100
            }
        ]
    },
    listaGrafico: [
        { time: "00:00", amount: 0 },
        { time: "03:00", amount: 1200 },
        { time: "06:00", amount: 600 },
        { time: "09:00", amount: 800 },
        { time: "12:00", amount: 1500 },
        { time: "15:00", amount: 2000 },
        { time: "18:00", amount: 2400 },
        { time: "21:00", amount: 2400 },
        { time: "24:00", amount: undefined }
    ],
    Clientes: {
        columns: [
            { title: "Nombres", field: "name" },
            { title: "Apellidos", field: "surname" },
            { title: "Teléfono", field: "telefono" },
            { title: "Email", field: "email" },
            {
                title: "Autoriza promociones por email",
                field: "autorizaEmail",
                lookup: { 1: "Sí", 2: "No" }
            }
        ],
        data: [
            {
                name: "Freddy",
                surname: "Vega",
                telefono: 3135263232,
                email: "freddier@platzi.com",
                autorizaEmail: 1
            },
            {
                name: "Elvis",
                surname: "Ko",
                telefono: 3175235663,
                email: "elviskohermoso@hotmail.com",
                autorizaEmail: 1
            },
            {
                name: "Paulo",
                surname: "Veinteañero",
                telefono: 3245263636,
                email: "paulo@gmail.com",
                autorizaEmail: 2
            },
            {
                name: "Que",
                surname: "Tomás",
                telefono: 3015268585,
                email: "Ktomas@yahoo.com",
                autorizaEmail: 1
            }
        ]
    },
    Pedidos: {
        columns: [
            { id: "order", label: "#Orden", minWidth: 170 },
            { id: "date", label: "Fecha", minWidth: 170, type: "date" },
            { id: "cliente", label: "Cliente", minWidth: 170 },
            { id: "valor", label: "Valor", minWidth: 170, type: "currency" }
        ],
        rows: [
            { order: 0, date: "16 Oct, 2019", cliente: "Elvis Ko", valor: 64000 },
            { order: 1, date: "16 Oct, 2019", cliente: "Paulo Veinteañero", valor: 32500 },
            { order: 2, date: "16 Oct, 2019", cliente: "Que Tomás", valor: 100800 },
            { order: 3, date: "16 Oct, 2019", cliente: "Maicol Fernando", valor: 37000 },
            { order: 4, date: "15 Oct, 2019", cliente: "Freddy Vega", valor: 21000 },
            { order: 5, date: "15 Oct, 2019", cliente: "Elvis Ko", valor: 8800 },
            { order: 6, date: "15 Oct, 2019", cliente: "Paulo Veinteañero", valor: 196500 },
            { order: 7, date: "12 Oct, 2019", cliente: "Que Tomás", valor: 58000 },
            { order: 8, date: "11 Oct, 2019", cliente: "Maicol Fernando", valor: 29000 },
            { order: 9, date: "10 Oct, 2019", cliente: "Freddy Vega", valor: 500 }
        ]
    }
}

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
