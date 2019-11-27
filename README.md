# POSTIC: Proyecto final Escuela JS - Platzi 2019

## Datos del grupo

**Temática**: Sistema Punto de Venta (POS - Point Of Sale)

**Integrantes**:

- Jorge Nemogá
- Luis Caraballo
- Mauricio Fajardo

_**Despliegue del proyecto funcional**_:

- Este repositorio corresponde al _Frontend_ de la spa.
- <https://www.nemo1co.xyz>
- Se mantendrá activo con seguridad desde el 2019-11-28 hasta 2019-12-15.

## Sistema _POS_

Un sistema POS o Point Of Sale en este contexto hace referencia a aplicaciones y software destinado a la sistematización del control de ventas e inventarios de un negocio. El objetivo de este sistema es mantener el inventario actualizado de acuerdo con las ventas e ingreso de productos al negocio, optimizar el proceso de facturación para agilizar y mejorar los procesos de negocio, llevar el control de gastos e ingresos del negocio.

## Alcance del proyecto - planteado por Platzi

La descripción al avance en el proyecto se resumirá de la siguiente manera:

1. **V**: para indicar el desarrollo netamente visual.
2. **A**: para indicar el desarrollo e implementación de acciones, algoritmos o resultados dinámicos.
3. Los valores en porcentaje luego de las letras son la medida de completado en cada aspecto.
4. Finalmente, puede existir un simbolo, letra o palabra luego del porcentaje para dar referencia a un comentario extra sobre el alcance o desarrollo de cada objetivo.

### Pantallas mínimas que deben ser implementadas

- Pantalla de Sign in / Sign up / Logout , agregar opción de registro y login con redes sociales.
  - _V 100%_
  - **_A 60% noFake_**
- Pantalla de generación de facturas.
  - _V 100% extra_
  - _A 100% extra_
- Pantalla de Gestión del inventario.
  - _V 100% **noAdmin**_
  - _A 100% **noAdmin**_
- Pantalla de Reportes, administración y gestión de gastos.
  - **_V 10%_**
  - **_A 0%_**

_noFake_: por medio de Firebase se habilita la creación de cuentas e ingreso a la app usando un correo más contraseña o por medio de la cuenta de google.

_extra_: se puede imprimir una factura previa (no importa el tiempo atrás) mientras se pueda encontrar en la lista completa de pedidos.

_noAdmin_: la funcionalidad por el momento es absoluta. Al ser un MVP de plantilla el ingreso es pensado para un único usuario en modo administrador.

### Flujo esperado

1. El cliente llega al punto de venta para realizar el pago de sus productos.
   - _100%_: pos que llegue, hago la factura a mano pero vendo _ja ja ja_.
2. El cajero toma los datos del cliente, en caso de que el cliente no exista debe registrarlo como cliente frecuente para futuras compras.
   - Si el cliente ya existe debe seleccionarlo.
   - En caso de ser necesario el cajero u operador del sistema POS debe poder editar los datos del cliente.
   - _V 100%_
   - _A 100%_
3. El operador del sistema POS selecciona en el sistema cada producto a comprar.
   - _V 100% **noSearch**_
   - _A 100% **noSearch**_
4. El sistema valida la existencia del producto en el inventario.
   - _V 100%_
   - _A 100%_
5. Calcular el costo total de la venta.
   - _V 100%_
   - _A 100%_
6. Se registra el pago y los datos son guardados en el sistema.
   - _V 100%_
   - _A 100%_
7. Se genera la factura.
   - _V 100%_
   - _A 100%_

_noSearch_: el objetivo se cumple perfectamente. Pero sería más comodo agregar un modo de buscar, seleccionar o categorizar más rápido si existen muchos productos.

#### El usuario administrador puede

1. Revisar el total de ventas en un periodo de tiempo.
   - **_V 0%_**
   - **_A 0%_**
2. Validar el inventario. **undefined**
   - **_V 0%_**
   - **_A 0%_**
3. El sistema debe generar alertas sobre productos elegidos para informar que se están agotando.
   - _V 100% **forAll**_
   - _A 100%_
4. Agregar, modificar, eliminar productos del inventario.
   - _V 100%_
   - _A 100%_
5. Generar reportes periódicos sobre ingreso y egreso de productos del inventario.
   - **_V 0%_**
   - **_A 0%_**
6. Administrar las listas de precios, modificar, agregar o eliminar precios a los productos.
   - _V 100%_
   - _A 100%_
7. Consultar facturas asociadas a usuarios.
   - **_V 50%_**
   - **_A 50%_**

#### Requerimientos técnicos adicionales

El sistema debe funcionar en la nube. **_100%_**

- **Frontend:** <https://www.nemo1co.xyz>
- **Backend**: <https://postic.now.sh/api/products>

## Modo de uso

### Instalación

Se trabajo sobre la **versión 10.16.3 de NodeJS**.

1. Clonar el proyecto
2. Instalar la paquetería necesaria.

```sh
npm install
```

### Ejecución

Agregar el archivo `.env` con las variables requeridas como el archivo de ejemplo `.env.example`. Para desarrollo la variable `NODE_ENV` será `development` y producción `production`.

```sh
npm run start:dev
```
