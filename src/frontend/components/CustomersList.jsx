import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import tableIcons from './utils/tableIconsByMaterialTable';
import { addToCustomersList, removeFromCustomersList, updateToCustomersList } from '../actions/indexActions';

const CustomersList = (props) => {
  const { customers } = props;

  const columns = [
    {
      title: 'Tipo Identificación',
      field: 'idType',
      lookup: { null: 'undefined', RC: 'RC', TI: 'TI', CC: 'CC', Other: 'Otro' },
    },
    { title: 'Número Identificación', field: 'id' },
    { title: 'Nombres', field: 'name' },
    { title: 'Apellidos', field: 'surname' },
    { title: 'Teléfono', field: 'phone', emptyValue: '' },
    { title: 'Email', field: 'email', emptyValue: '' },
    {
      title: 'Promociones por email',
      field: 'authorizeEmail',
      lookup: { no: 'No', yes: 'Sí' },
      emptyValue: '',
    },
  ];

  return (
    <MaterialTable
      title='Clientes'
      columns={columns}
      data={customers}
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
          new Promise((resolve, reject) => {
            if (newData.idType === undefined || newData.id === undefined) {
              reject(alert('Debe agregar un ID y tipo de ID validos'));
            } else if (newData.name === undefined || newData.surname === undefined) {
              reject(alert('Debe agregar un Nombre y un Apellido valido'));
            } else {
              resolve(props.addToCustomersList(newData));
            }
          }),
        onRowUpdate: (updateData, oldData) =>
          new Promise((resolve) => resolve(props.updateToCustomersList({ oldData, updateData }))),
        onRowDelete: (deleteData) =>
          new Promise((resolve) => resolve(props.removeFromCustomersList(deleteData))),
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    customers: state.customersList,
  };
};

const mapDispatchToProps = {
  addToCustomersList,
  removeFromCustomersList,
  updateToCustomersList,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
