// RegistrationPage.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegistrationPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <Image
          style={{width: 300, height: 200}}
          source={require('../images/melogo.png')}
        />
        <Text style={styles.header}>Sign Up Now</Text>
        <Text style={styles.title}>Please fil the details and create account</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Email or Mobile Number"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.REG_Button}
          onPress={() => navigation.navigate('HomePage')}
        >
          <Text style={styles.REG_BText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={styles.existAcc}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 100

  },
  header:{
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 10,
    color: '#004AAD',

  },
  title: {
    fontSize: 15,
    marginBottom: 16,
    color: '#004AAD',

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
  REG_Button: {
    backgroundColor: '#004AAD',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: 200,
    alignItems: 'center', 
  },
  REG_BText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  existAcc: {
    marginTop: 16,
    color: '#004080',
    fontSize: 16,
},
});

export default RegistrationPage;


