# API para Envío de Correos

Esta es una API construida con Node.js y Express que permite el envío de correos electrónicos utilizando la librería Nodemailer. Los usuarios pueden enviar correos especificando el destinatario, asunto y contenido del correo mediante una solicitud HTTP POST.

## Características

- **Enviar correos electrónicos** mediante una solicitud POST.
- Manejo seguro de credenciales utilizando **dotenv**.
- Fácil de integrar en cualquier proyecto.

## Requisitos

- Node.js v12 o superior.
- Una cuenta de Gmail para el envío de correos.

## Instalación

Instala las dependencias necesarias:

```bash
npm install express nodemailer dotenv
