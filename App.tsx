import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import  axios from 'axios';

type RootStackParamList = {
  Home: undefined;
  ForgotPassword: undefined;
  SignUp: undefined;
};
 
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'Home'> }) {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Hola!</Text>
      <Text style={styles.subTitle}>Servicio de Aseo por horas</Text>
      <Text style={styles.subTitle}>Ingresa a tu cuenta</Text>
      
      <TextInput  
        placeholder='Ingresa tu correo'
        style={styles.textInput}
      />
      
      <View style={styles.passwordContainer}>
        <TextInput  
          placeholder='Ingresa tu contraseña'
          style={styles.textInput}
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
          value={password}
        />
        <Button title={isPasswordVisible ? "Ocultar" : "Mostrar"} onPress={togglePasswordVisibility} />
      </View>

      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Olvidé mi clave</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Soy nuevo</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recuperar Contraseña</Text>
      {/* Aquí puedes agregar los campos y lógica para recuperar la contraseña */}
    </View>
  );
}

function SignUpScreen() {
  const [userType, setUserType] = useState('Cliente');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await axios.post('http://tu-servidor/api/register', {
        userType,
        username,
        email,
        password,
      });

      if (response.status === 201) {
        Alert.alert('Éxito', '¡Usuario registrado correctamente!');
      } else if (response.status === 409) {
        Alert.alert('Error', 'Ya existe un usuario con ese correo electrónico o nombre de usuario.');
      } else {
        Alert.alert('Error', 'Ocurrió un error al registrar al usuario.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Error de conexión al servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Crear Cuenta</Text>
      
      <View style={styles.userTypeContainer}>
        <Button
          title="Cliente"
          onPress={() => setUserType('Cliente')}
          color={userType === 'Cliente' ? 'green' : 'gray'}
        />
        <Button
          title="Profesional de Limpieza"
          onPress={() => setUserType('Profesional de Limpieza')}
          color={userType === 'Profesional de Limpieza' ? 'green' : 'gray'}
        />
      </View>

      <TextInput
        placeholder='Nombre de usuario'
        style={styles.textInput}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder='Correo electrónico'
        style={styles.textInput}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Olvidé mi clave' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Soy nuevo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    color: '#8c2121',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'green',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  link: {
    marginTop: 10,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 30,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
