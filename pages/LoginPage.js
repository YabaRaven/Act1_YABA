// LoginPage.js

import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Image
          style={{width: 300, height: 200}}
          source={require('../images/melogo.png')}
        />
        <Text style={styles.header}>LOGIN</Text>
        <Text style={styles.title}>Please login to continue using our app</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
        />
        <TextInput
          mode="outline"
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('RecoveryPage')}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.LOG_Button}
          onPress={() => navigation.navigate('HomePage')}
        >
          <Text style={styles.LOG_BText}>Log In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrationPage')}
        >
          <Text style={styles.noAcc}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff', // Background color of safe area
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 100
        // backgroundColor: '#F5F5DC'
    },
    header:{
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 10,  
        color: '#004AAD'
    },
    title: {
        fontSize: 15,
        marginBottom: 16,
        color: '#004AAD'
    },
    input: {
        height: 60,
        borderColor: '#004AAD',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 12,
        padding: 10,
        width: 300,
        alignItems: 'center', 
    },
    LOG_Button: {
        backgroundColor: '#004AAD',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 20,
        width: 200,
        alignItems: 'center', 
    },
    LOG_BText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    forgotPassword: {
        marginTop: 10,
        color: '#004AAD',
        fontSize: 16,
        left: 100,
    },
    noAcc: {
      marginTop: 16,
      color: '#004AAD',
      fontSize: 16,
  },
});

export default LoginPage;
