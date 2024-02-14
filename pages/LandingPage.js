import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Icon, MD3Colors } from 'react-native-paper';


const Landing = ({ navigation }) => {
 return (
    <SafeAreaView style = {styles.safeArea}>
        
        <View style={styles.container}>
            {/* <Text style={styles.header}>WELCOME!</Text>
            <Text style={styles.title}>Get Started</Text> */}

            <Image
                style={{width: 300, height: 200}}
                source={require('../images/memo.png')}
            />

            <Text style={styles.title}>Instant. Unfolded. Memoir</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('LoginPage')}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('RegistrationPage')}
            >
                <Text style={styles.buttonText}>Registration</Text>
            </TouchableOpacity> */}
        </View>

        {/* <View style={styles.containerB}>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('LoginPage')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('RegistrationPage')}
            >
                <Text style={styles.buttonText}>Registration</Text>
            </TouchableOpacity>
        </View> */}
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
        backgroundColor: '#ffffff',
    },
    // header: {
    //     fontWeight: 'bold',
    //     fontSize: 35,
    //     marginBottom: 10,  
    // },
    title: {
        fontSize: 20,
        marginBottom: 20, //80
        color: '#004AAD'
    },
    button: {
        backgroundColor: '#004AAD',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 50,
        width: 200,
        alignItems: 'center', 
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Landing;