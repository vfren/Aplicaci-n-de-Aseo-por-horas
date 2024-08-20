import { login } from './dataAccessLayer'; // Capa de Datos
import * as SQLite from 'react-native-sqlite-storage';

const handleLogin = async (email, password) => {
  try {
    const user = await login(email, password);
    if (user) {
      // Usuario autenticado, navegar a la pantalla principal
    } else {
      // Error: credenciales incorrectas
    }
  } catch (error) {
    console.error(error);
  }
};

export const login = async (email, password) => {
  try {
    const results = await db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (tx, results) => results.rows._array[0]
      );
    });
    return results;
  } catch (error) {
    console.error(error);
    throw error; // Re-lanza el error para que lo maneje la pantalla de inicio de sesión
  }
};
