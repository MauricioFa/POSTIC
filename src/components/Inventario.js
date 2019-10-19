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

export default function Inventario() {
  const [state, setState] = React.useState({
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
  });

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
      columns={state.columns}
      data={state.data}
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
}
