import React, { forwardRef } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CheckIcon from '@material-ui/icons/Check';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import SearchIcon from '@material-ui/icons/Search';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { addToInventory, removeFromInventory, updateToInventory } from '../actions/indexActions';

const ProductsList = (props) => {
  const { products, addToInventory, updateToInventory, removeFromInventory } = props;

  const productsList = products.map((item) => ({
    ...item,
    categories: item.categories[0],
  }));

  const columns = [
    { title: 'SKU', field: 'sku' },
    { title: 'Producto', field: 'name' },
    { title: 'Descripción', field: 'description', emptyValue: 'Sin descripción' },
    { title: 'Categoría', field: 'categories', emptyValue: 'Sin categoría' },
    { title: 'Valor compra und', field: 'buyingPrice', type: 'numeric' },
    { title: 'Valor venda und', field: 'sellingPrice', type: 'numeric' },
    { title: 'Inventario', field: 'inStock', type: 'numeric' },
  ];

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutlineIcon {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpwardIcon {...props} ref={ref} />),
  };

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
                addToInventory({
                  ...newData,
                  categories: [newData.categories],
                  buyingPrice: Number(newData.buyingPrice),
                  sellingPrice: Number(newData.sellingPrice),
                  inStock: newData.inStock ? Number(newData.inStock) : 0,
                })
              );
            }
          }),
        onRowUpdate: (updateData) =>
          new Promise((resolve) => {
            const ary = products.filter((item) => item.sku === updateData.sku)[0].categories;
            ary[0] = updateData.categories;
            resolve(
              updateToInventory({
                ...updateData,
                categories: ary,
                buyingPrice: Number(updateData.buyingPrice),
                sellingPrice: Number(updateData.sellingPrice),
                inStock: Number(updateData.inStock),
              })
            );
          }),
        onRowDelete: (deleteData) =>
          new Promise((resolve) => {
            resolve(removeFromInventory(deleteData.sku));
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
