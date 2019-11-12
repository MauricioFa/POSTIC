import React, { forwardRef } from 'react';
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
import { connect } from 'react-redux';

const ListProductos = ({ columns, data }) => {
  const [state, setState] = React.useState({
    columns,
    data,
  });

  const tableIcons = {
    Delete: forwardRef((props, ref) => (
      <DeleteOutlineIcon {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
    Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => (
      <FirstPageIcon {...props} ref={ref} />
    )),
    LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeftIcon {...props} ref={ref} />
    )),
    NextPage: forwardRef((props, ref) => (
      <ChevronRightIcon {...props} ref={ref} />
    )),
  };

  return (
    <MaterialTable
      title='Productos'
      columns={state.columns}
      data={state.data}
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
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.listaProductos.data,
    columns: state.listaProductos.columns,
  };
};

export default connect(mapStateToProps, null)(ListProductos);
