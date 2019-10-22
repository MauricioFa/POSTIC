import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { connect } from 'react-redux'

const Inventario = ({ columns, data }) => {
  
  const tableIcons = {
    Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
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
    ))
  };

  return (
    <MaterialTable
      title="Consulta Productos"
      columns={columns}
      data={data}
      icons={tableIcons}
      actions={[
        {
          icon: AddShoppingCartIcon,
          iconProps: {
            color: "secondary"
          },
          tooltip: "Añadir Producto",
          onClick: (event, rowData) => {
            // Do save operation
          }
        }
      ]}
      localization={{
        pagination: {
          labelDisplayedRows: "{from}-{to} de {count}",
          labelRowsSelect: "filas" /*sustituye rows*/,
          nextTooltip: "Siguiente",
          previousTooltip: "Anterior",
          firstTooltip: "Primera Página",
          lastTooltip: "Última página"
        },
        toolbar: {
          nRowsSelected: "{0} fila(s) seleccionada(s)",
          searchTooltip: "Buscar",
          searchPlaceholder: "Buscar"
        },
        header: {
          actions: "Acciones" /*sustituye Actions*/
        },
        body: {
          addTooltip: "Añadir",
          deleteTooltip: "Eliminar",
          editTooltip: "Editar",
          emptyDataSourceMessage: "No se encontraron producto",
          filterRow: {
            filterTooltip: "Filtrar"
          },
          editRow: {
            deleteText: "¿Estás seguro de eliminar este producto?",
            cancelTooltip: "Cancelar",
            saveTooltip: "Confirmar"
          }
        }
      }}
    />
  );
};
const mapStateToProps = state => {
  return {
    data: state.listaProductos.data,
    columns: state.listaProductos.columns,
  };
};

export default connect(mapStateToProps, null)(Inventario)