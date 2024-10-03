# Proyecto Amex

## Descripción del Proyecto

El proyecto Amex es una aplicación de gestión financiera que permite a los usuarios registrar sus gastos y administrar sus cuentas bancarias de manera eficiente. El sistema ofrece funcionalidades como el registro de usuarios, autenticación, gestión de cuentas bancarias y generación de resúmenes de gastos.

## Objetivos del Proyecto

1. **Interfaz de Usuario Amigable**: Diseñar una interfaz intuitiva que facilite la navegación y el uso de la aplicación.
2. **Registro y Autenticación de Usuarios**: Implementar un sistema de registro de usuarios y autenticación segura para proteger la información personal.
3. **Gestión de Cuentas Bancarias**: Permitir a los usuarios agregar y gestionar múltiples cuentas bancarias, facilitando la visualización y el control de sus finanzas.
4. **Resumen de Gastos**: Generar resúmenes de gastos que permitan a los usuarios tener una visión clara de sus finanzas.
5. **Alertas de Presupuesto**: Implementar un sistema de alertas que notifique a los usuarios cuando estén cerca de alcanzar sus límites de presupuesto.

## Funcionamiento del Código

El código se ha desarrollado utilizando React para el frontend y Node.js con Express para el backend. Aquí se detallan las principales funcionalidades implementadas:

- **Registro de Usuarios**: Los usuarios pueden registrarse proporcionando su nombre, correo electrónico y contraseña. Esta información se almacena en una base de datos MongoDB.
  
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña. Se utiliza JSON Web Tokens (JWT) para autenticar las sesiones y proteger las rutas del backend.

- **Agregar Cuentas Bancarias**: La aplicación permite a los usuarios agregar detalles de sus cuentas bancarias, que se guardan en la base de datos y se pueden gestionar fácilmente.

- **Resumen de Gastos**: Los usuarios pueden ver un resumen de sus gastos, calculado automáticamente en función de las transacciones registradas. Esto proporciona una visión clara de sus finanzas.

- **Alertas de Presupuesto**: Los usuarios pueden establecer límites de gasto y recibir notificaciones cuando se acercan a estos límites, ayudando así a mantener el control sobre sus finanzas.

## Conclusión

El proyecto Amex tiene como objetivo ofrecer a los usuarios una herramienta útil y eficiente para la gestión de sus finanzas personales. La implementación de estas funcionalidades no solo ayuda a los usuarios a llevar un mejor control de sus gastos, sino que también proporciona un enfoque proactivo para la gestión del dinero.
