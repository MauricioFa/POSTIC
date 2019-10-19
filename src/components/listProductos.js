import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ClearIcon from "@material-ui/icons/Clear";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CheckIcon from "@material-ui/icons/Check";

export default function ListProductos() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Producto", field: "name" },
      { title: "SKU", field: "sku" },
      { title: "Presentación", field: "description" },
      { title: "Categoría", field: "categoria" },
      { title: "Valor unitario", field: "unitValue", type: "currency" },
      { title: "Unidades Disponibles", field: "inventario", type: "numeric" }
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
    ))
  };

  return (
    <MaterialTable
      title="Productos"
      columns={state.columns}
      data={state.data}
      icons={tableIcons}
      /*traducción*/
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
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}
