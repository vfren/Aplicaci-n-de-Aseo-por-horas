> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
Aplicación nM-vil
Esta es una APP que vincula a Profesionales de limpieza con Usuarios que requieren sus servicios por horas. Aplicación móvil que permite vincular a profesionales de limpieza con clientes que requieren sus servicios por horas de forma esporádica.

Descripción Esta aplicación móvil permite a los usuarios registrarse y buscar profesionales de limpieza cercanos a su domicilio. Los profesionales pueden ofrecer sus servicios, y los usuarios pueden calificarlos y agendar citas. La aplicación está desarrollada en React Native y utiliza SQLite para la gestión de la base de datos local.

Características Registro de Usuarios y Profesionales: Los usuarios pueden registrarse y crear perfiles de manera independiente. Geolocalización: La aplicación utiliza geolocalización para vincular usuarios con profesionales cercanos. Gestión de Anuncios: Los usuarios pueden publicar Anuncios y asignarlas a profesionales quienes a su vez pueden tomar o rechazar el requerimiento. Calificaciones y Reseñas: Los usuarios pueden calificar y dejar comentarios sobre los profesionales. Agendamiento de Citas: Los usuarios pueden agendar citas con los profesionales directamente desde la aplicación.

Instrucciones para desarrolladores

Prerrequisitos:

Node.js y npm instalados. React Native CLI instalado. Android Studio (para emular en Android) o Xcode (para emular en iOS). Clave API de Google Maps para la funcionalidad de mapas.

Instalación

Clonar el repositorio:
clon git https://github.com/tu-usuario/nombre-del-repositorio.git

cd nombre-del-repositorio

Instalar las dependencias:
Instalación de npm

Configure las variables de entorno:
Crea un archivo .env en la raíz del proyecto y agrega tu clave de API de Google Maps:

REACT_NATIVE_GOOGLE_MAPS_API_KEY=clave-api-tu

Instale las dependencias específicas para iOS (si está desarrollando en iOS):
cd ios pod instalar cd ..

Ejecución

Para Android:

Ejecutar npx react-native-Android

Para iOS:

Ejecutar ios de npx react-native

Estructura del proyecto

src/: Contiene todo el código fuente de la aplicación. componentes/: Componentes reutilizables de la interfaz de usuario. screens/: Pantallas principales de la aplicación. navegación/: Configuración de la navegación entre pantallas. base de datos/: Gestión de la base de datos SQLite. servicios/: Lógica de negocio, incluyendo la integración con la API de Google Maps.

Base de datos

La aplicación utiliza SQLite para la gestión local de datos. Aquí está el esquema básico de las tablas:

usuarios: Información sobre los usuarios. profesionales: Información sobre los profesionales. Tareas: Tareas disponibles. anuncios: Anuncios publicados pro los usuarios. ad_tasks: Relación entre anuncios y tareas. ratings: Calificaciones de los usuarios a los profesionales. citas: Citas agendadas entre usuarios y profesionales.

Instalación Descargue la aplicación desde el código QR que se pondrá a disposición cuando la APP esté disponible para su uso.

Registro: Al abrir la aplicación por primera vez, puedes registrarte como usuario o profesional.

Uso de la aplicación:

Buscar Profesionales: Ingresa tu ubicación y selecciona la tarea que deseas realizar. La aplicación mostrará profesionales cercanos.

Contratar Profesionales: Selecciona un profesional y agenda una cita para el servicio.

Calificar Servicio: Después de que el profesional complete el servicio, puedes dejar una calificación y un comentario.

Soporte Si tienes algún problema o pregunta, puedes escribir directamente a mi correo electróncio v.frenaraneda@uandresbello.edu
