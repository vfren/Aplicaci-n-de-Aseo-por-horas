import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'database.db',
        location: 'assets', // aqui debo poner la ubicacion de la carpeta
    },                       //ahora configurar la navegacion
    () => {
        console.log('Database opened');
    },
    error => {
        console.log('Error: ' + error);
    }
);

db.transaction(tx => {
    // Tabla de Usuarios con Geolocalización
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        phone_number TEXT,
        latitude REAL,
        longitude REAL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        role TEXT
      )`
    );
  
    // Tabla de Profesionales con Geolocalización
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS professionals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        specialty TEXT,
        availability TEXT,
        rating_average REAL,
        latitude REAL,
        longitude REAL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`
    );
  
    // Tabla de Tareas Disponibles
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
      )`
    );
  
    // Tabla de Anuncios con relación a Tareas
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        title TEXT,
        description TEXT,
        price REAL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`
    );
  
    // Relación entre Anuncios y Tareas
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ad_tasks (
        ad_id INTEGER,
        task_id INTEGER,
        FOREIGN KEY (ad_id) REFERENCES ads(id),
        FOREIGN KEY (task_id) REFERENCES tasks(id)
      )`
    );
  
    // Tabla de Calificaciones
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ratings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        professional_id INTEGER,
        rating INTEGER,
        comment TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (professional_id) REFERENCES professionals(id)
      )`
    );
  
    // Tabla de Citas de Limpieza
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        professional_id INTEGER,
        date DATETIME,
        status TEXT,
        address TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (professional_id) REFERENCES professionals(id)
      )`
    );
  });
  