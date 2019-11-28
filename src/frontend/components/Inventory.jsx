import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import tableIcons from './utils/tableIconsByMaterialTable';
import { registerProduct, deleteProduct, editProduct } from '../actions/indexActions';

const columns = [
  { title: 'SKU', field: 'sku', editable: 'onAdd' },
  { title: 'Producto', field: 'name' },
  { title: 'Descripción', field: 'description', emptyValue: 'Sin descripción' },
  { title: 'Categoría', field: 'categories', emptyValue: 'Sin categoría' },
  { title: 'Valor compra und', field: 'buyingPrice', type: 'numeric' },
  { title: 'Valor venda und', field: 'sellingPrice', type: 'numeric' },
  { title: 'Inventario', field: 'inStock', type: 'numeric' },
  { title: 'Alerta límite', field: 'limitInStock', type: 'numeric' },
];

const ProductsList = (props) => {
  const { products, modeAdmin, urlApiProducts } = props;
  const productsLimitInStock = products.filter((item) => item.inStock <= item.limitInStock).length;
  const [showProdsLimitInStock, setShowProdsLimitInStock] = useState(false);
  const [productsList, setProductsList] = useState(products);

  useEffect(() => {
    let arrayTemp = products.map((item) => ({
      ...item,
      categories: item.categories[0],
    }));
    if (showProdsLimitInStock && productsLimitInStock) {
      arrayTemp = arrayTemp.filter((item) => item.inStock <= item.limitInStock);
    }
    setProductsList(arrayTemp);
  }, [showProdsLimitInStock, products, modeAdmin]);

  return (
    <>
      {productsLimitInStock > 0 && (
        <Button
          variant='outlined'
          color='secondary'
          onClick={() => setShowProdsLimitInStock(!showProdsLimitInStock)}
        >
          {showProdsLimitInStock ? 'Ver todo' : 'Ver inventario bajo'}
        </Button>
      )}
      <MaterialTable
        title='Productos'
        columns={columns}
        data={productsList}
        icons={tableIcons}
        options={{
          pageSize: 10,
          pageSizeOptions: [10, 20, 40],
        }}
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsSelect: 'filas',
            nextTooltip: 'Siguiente',
            previousTooltip: 'Anterior',
            firstTooltip: 'Primera Página',
            lastTooltip: 'Última página',
          },
          toolbar: {
            nRowsSelected: '{0} fila(s) seleccionada(s)',
            searchTooltip: 'Buscar',
            searchPlaceholder: 'Buscar',
          },
          header: {
            actions: 'Acciones',
          },
          body: {
            addTooltip: 'Añadir',
            deleteTooltip: 'Eliminar',
            editTooltip: 'Editar',
            emptyDataSourceMessage: 'No se encontró producto',
            filterRow: {
              filterTooltip: 'Filtrar',
            },
            editRow: {
              deleteText: '¿Estás seguro de eliminar este producto?',
              cancelTooltip: 'Cancelar',
              saveTooltip: 'Confirmar',
            },
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              if (newData.sku === undefined || newData.name === undefined) {
                reject(alert('Debe agregar un SKU y nombre de Producto validos'));
              } else if (newData.buyingPrice === undefined || newData.sellingPrice === undefined) {
                reject(alert('Debe agregar Precios de compra y venta validos'));
              } else {
                console.log(newData);
                resolve(
                  props.registerProduct({
                    newData: {
                      ...newData,
                      categories: [newData.categories],
                      buyingPrice: Number(newData.buyingPrice),
                      sellingPrice: Number(newData.sellingPrice),
                      inStock: newData.inStock !== undefined ? Number(newData.inStock) : 0,
                      limitInStock: newData.limitInStock !== undefined ? Number(newData.limitInStock) : 0,
                    },
                    urlApiProducts,
                  })
                );
              }
            }),
          onRowUpdate: (updateData, oldData) =>
            new Promise((resolve, reject) => {
              if (!modeAdmin) reject(alert('Sin permisos para editar'));
              else if (updateData.sku === '' || updateData.name === '') {
                reject(alert('Debe agregar un SKU y nombre de Producto validos'));
              } else if (updateData.buyingPrice === '' || updateData.sellingPrice === '') {
                reject(alert('Debe agregar Precios de compra y venta validos'));
              } else {
                const ary = products.filter((item) => item.sku === updateData.sku)[0].categories;
                ary[0] = updateData.categories;
                console.log(updateData);
                resolve(
                  props.editProduct({
                    updateData: {
                      ...updateData,
                      categories: ary,
                      buyingPrice: Number(updateData.buyingPrice),
                      sellingPrice: Number(updateData.sellingPrice),
                      inStock: updateData.inStock === '' ? 0 : Number(updateData.inStock),
                      limitInStock: updateData.limitInStock === '' ? 0 : Number(updateData.limitInStock),
                    },
                    oldData,
                    urlApiProducts,
                  })
                );
              }
            }),
          onRowDelete: (deleteData) =>
            new Promise((resolve, reject) => {
              if (!modeAdmin) reject(alert('Sin permisos para eliminar'));
              else resolve(props.deleteProduct({ _id: deleteData._id, urlApiProducts }));
            }),
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    modeAdmin: state.modeAdmin,
    urlApiProducts: state.urlApiProducts,
  };
};

const mapDispatchToProps = {
  registerProduct,
  deleteProduct,
  editProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
