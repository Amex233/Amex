# Proyecto Amex

## Descripción del Proyecto

El proyecto Amex es una aplicación de gestión financiera que permite a los usuarios registrar sus gastos y administrar sus cuentas bancarias de manera eficiente. El sistema ofrece funcionalidades como el registro de usuarios, autenticación, gestión de cuentas bancarias y generación de resúmenes de gastos.

## Objetivos del Proyecto

1. **Interfaz de Usuario Amigable**: Diseñar una interfaz intuitiva que facilite la navegación y el uso de la aplicación.
2. **Registro y Autenticación de Usuarios**: Implementar un sistema de registro de usuarios y autenticación segura para proteger la información personal.
3. **Gestión de Cuentas Bancarias**: Permitir a los usuarios agregar y gestionar múltiples cuentas bancarias, facilitando la visualización y el control de sus finanzas.
4. **Resumen de Gastos**: Generar resúmenes de gastos que permitan a los usuarios tener una visión clara de sus finanzas.
5. **Alertas de Presupuesto**: Implementar un sistema de alertas que notifique a los usuarios cuando estén cerca de alcanzar sus límites de presupuesto.

## Cambios Versión 0.3

1. **Integración de Total de Gastos**: Se ha añadido un apartado en el Resumen de Gastos que muestra el total acumulado de todos los gastos registrados, ofreciendo una visión más completa de la situación financiera del usuario.

2. **Pagos Pendientes**: Se ha implementado una sección para listar los pagos pendientes, permitiendo a los usuarios estar al tanto de las obligaciones que deben cumplir.

3. **Historial Crediticio**: Se ha añadido un historial crediticio donde los usuarios pueden visualizar sus transacciones pasadas, mejorando la gestión de sus finanzas a lo largo del tiempo.

4. **Mejoras en la Interfaz**: Se han realizado cambios en el CSS para mejorar la presentación de los componentes, asegurando que la información sea clara y fácil de leer. El total de gastos se ha posicionado al final del resumen, mientras que los pagos pendientes y el historial crediticio se muestran de manera organizada.

## Funcionamiento del Código

El código se ha desarrollado utilizando React para el frontend y Node.js con Express para el backend. Aquí se detallan las principales funcionalidades implementadas:

- **Registro de Usuarios**: Los usuarios pueden registrarse proporcionando su nombre, correo electrónico y contraseña. Esta información se almacena en una base de datos MongoDB.

- **Inicio de Sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña. Se utiliza JSON Web Tokens (JWT) para autenticar las sesiones y proteger las rutas del backend.

- **Agregar Cuentas Bancarias**: La aplicación permite a los usuarios agregar detalles de sus cuentas bancarias, que se guardan en la base de datos y se pueden gestionar fácilmente.

- **Resumen de Gastos**: Los usuarios pueden ver un resumen de sus gastos, calculado automáticamente en función de las transacciones registradas. Esto proporciona una visión clara de sus finanzas.

- **Alertas de Presupuesto**: Los usuarios pueden establecer límites de gasto y recibir notificaciones cuando se acercan a estos límites, ayudando así a mantener el control sobre sus finanzas.

## Conclusión

El proyecto Amex tiene como objetivo ofrecer a los usuarios una herramienta útil y eficiente para la gestión de sus finanzas personales. La implementación de estas funcionalidades no solo ayuda a los usuarios a llevar un mejor control de sus gastos, sino que también proporciona un enfoque proactivo para la gestión del dinero.
