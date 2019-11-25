import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import tableIcons from './utils/tableIconsByMaterialTable';
import { addToInventory, removeFromInventory, updateToInventory } from '../actions/indexActions';

const columns = [
  { title: 'SKU', field: 'sku' },
  { title: 'Producto', field: 'name' },
  { title: 'Descripción', field: 'description', emptyValue: 'Sin descripción' },
  { title: 'Categoría', field: 'categories', emptyValue: 'Sin categoría' },
  { title: 'Valor compra und', field: 'buyingPrice', type: 'numeric' },
  { title: 'Valor venda und', field: 'sellingPrice', type: 'numeric' },
  { title: 'Inventario', field: 'inStock', type: 'numeric' },
  { title: 'Alerta límite', field: 'limitInStock', type: 'numeric' },
];

const ProductsList = (props) => {
  const { products } = props;

  const productsList = products.map((item) => ({
    ...item,
    categories: item.categories[0],
  }));

  return (
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
              resolve(
                props.addToInventory({
                  ...newData,
                  categories: [newData.categories],
                  buyingPrice: Number(newData.buyingPrice),
                  sellingPrice: Number(newData.sellingPrice),
                  inStock: Number(newData.inStock),
                  limitInStock: Number(newData.limitInStock),
                })
              );
            }
          }),
        onRowUpdate: (updateData, oldData) =>
          new Promise((resolve, reject) => {
            if (updateData.sku === '' || updateData.name === '') {
              reject(alert('Debe agregar un SKU y nombre de Producto validos'));
            } else if (updateData.buyingPrice === '' || updateData.sellingPrice === '') {
              reject(alert('Debe agregar Precios de compra y venta validos'));
            } else {
              const ary = products.filter((item) => item.sku === updateData.sku)[0].categories;
              ary[0] = updateData.categories;
              resolve(
                props.updateToInventory({
                  updateData: {
                    ...updateData,
                    categories: ary,
                    buyingPrice: Number(updateData.buyingPrice),
                    sellingPrice: Number(updateData.sellingPrice),
                    inStock: Number(updateData.inStock),
                    limitInStock: Number(updateData.limitInStock),
                  },
                  oldData,
                })
              );
            }
          }),
        onRowDelete: (deleteData) =>
          new Promise((resolve) => {
            resolve(props.removeFromInventory(deleteData.sku));
          }),
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToInventory,
  removeFromInventory,
  updateToInventory,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
