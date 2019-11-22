import React, { forwardRef } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ClearIcon from '@material-ui/icons/Clear';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CheckIcon from '@material-ui/icons/Check';
import { updateProductsList } from '../actions/indexActions';
import useProduct from '../hooks/useProduct';

const axios = require('axios');

const columns = [
  { title: 'Producto', field: 'name' },
  { title: 'SKU', field: 'sku' },
  { title: 'Presentación', field: 'description' },
  { title: 'Categoría', field: 'categories' },
  { title: 'Valor unitario', field: 'sellingPrice', type: 'currency' },
];

const API_URL = 'https://postic.now.sh/api/products';

const ProductsList = (props) => {

  const { products } = props;
  const productsDB = useProduct(API_URL, products);
  props.updateProductsList(productsDB);


  const tableIcons = {
    Delete: forwardRef((props, ref) => <DeleteOutlineIcon {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
    Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
  };

  return (
    <MaterialTable
      title='Productos'
      columns={columns}
      data={products}
      icons={tableIcons}
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
          emptyDataSourceMessage: 'No se encontraron producto',
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
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              axios.post(API_URL, newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.productsList];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              axios.delete(`${API_URL}/${oldData._id}`);
              /* const data = [...state.productsList];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data }); */
            }, 600);
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
  updateProductsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
