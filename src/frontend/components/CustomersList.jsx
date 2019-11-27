import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import tableIcons from './utils/tableIconsByMaterialTable';
import { addToCustomersList, removeFromCustomersList, updateToCustomersList } from '../actions/indexActions';

const CustomersList = (props) => {
  const { customers, modeAdmin } = props;

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
      options={props.optionsPages}
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
          emptyDataSourceMessage: 'Ninguna coincidencia',
          filterRow: {
            filterTooltip: 'Filtrar',
          },
          editRow: {
            deleteText: '¿Estás seguro de eliminar este CLIENTE?',
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
          new Promise((resolve, reject) => {
            if (!modeAdmin) reject(alert('Sin permisos para eliminar'));
            else resolve(props.removeFromCustomersList(deleteData));
          }),
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    customers: state.customersList,
    modeAdmin: state.modeAdmin,
  };
};

const mapDispatchToProps = {
  addToCustomersList,
  removeFromCustomersList,
  updateToCustomersList,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
