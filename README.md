# 📧 API para Envío de Correos

## 📌 Descripción
Esta es una **API construida con Node.js y Express** que permite el envío de correos electrónicos utilizando la librería **Nodemailer**. Los usuarios pueden enviar correos especificando el destinatario, asunto y contenido del correo mediante una solicitud HTTP POST.

## 🎯 Características
- ✉️ **Envío de correos electrónicos** de manera sencilla.
- 🔒 **Manejo seguro de credenciales** utilizando `dotenv`.
- 🚀 **Fácil integración** en cualquier aplicación web.

## 🛠️ Tecnologías utilizadas
- 🟢 **Node.js**
- 🔵 **Express.js**
- 📧 **Nodemailer**
- 🔐 **Dotenv** para variables de entorno

## 🚀 Instalación y Configuración
1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/api-envio-correos.git
   ```
2. Ingresa al directorio del proyecto:
   ```sh
   cd api-envio-correos
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   EMAIL_USER=tu_correo@gmail.com
   EMAIL_PASS=tu_contraseña
   ```
5. Inicia el servidor:
   ```sh
   node server.js
   ```
6. Envía una solicitud POST a `http://localhost:3000/send-email` con el siguiente formato JSON:
   ```json
   {
      "to": "destinatario@example.com",
      "subject": "Asunto del correo",
      "text": "Contenido del mensaje"
   }
   ```

