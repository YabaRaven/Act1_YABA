import { Icon, MD3Colors } from 'react-native-paper';

import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    FlatList, 
    StyleSheet, 
} from "react-native"; 
  
const HomePage = ({navigation}) => { 
    const [text, setText] = useState(""); 
    const [tasks, setTasks] = useState([]); 
    const [editIndex, setEditIndex] = useState(-1); 
  
    const AddTask = () => { 
        if (text) { 
            if (editIndex !== -1) { 
                // Edit existing task 
                const updatedTasks = [...tasks]; 
                updatedTasks[editIndex] = text; 
                setTasks(updatedTasks); 
                setEditIndex(-1); 
            } else { 
                // Add new task 
                setTasks([...tasks, text]); 
            } 
            setText(""); 
        }
    }; 
  
    const EditTask = (index) => { 
        const taskToEdit = tasks[index]; 
        setText(taskToEdit); 
        setEditIndex(index); 
    }; 
  
    const DeleteTask = (index) => { 
        const updatedTasks = [...tasks]; 
        updatedTasks.splice(index, 1); 
        setTasks(updatedTasks); 
    };
    
    const clearAllTodos = () => {
        setTasks([]);
    };

  
    const renderItem = ({ item, index }) => ( 
        <View style={styles.task}> 
            <Text 
                style={styles.itemList}>{item}</Text> 
            <View 
                style={styles.taskButtons}> 
                <TouchableOpacity 
                    onPress={() => EditTask(index)}> 
                    <Text 
                        style={styles.editButton}>  +  </Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    onPress={() => DeleteTask(index)}> 
                    <Text 
                        style={styles.deleteButton}>  X  </Text> 
                </TouchableOpacity> 
            </View> 
            
        </View> 
    ); 
  
    return ( 
      <SafeAreaView style={styles.safeArea}>

        <View style={styles.container}> 
            <Text style={styles.header}>My Day</Text>
             
            <TextInput 
                style={styles.input} 
                placeholder="What's on your mind?"
                value={text} 
                onChangeText={(text) => setText(text)} 
            /> 
            <TouchableOpacity
               style={styles.logoutButton}
               onPress={() => navigation.navigate('LandingPage')}
            >
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={AddTask}> 
                <Text style={styles.addButtonText}> 
                    {editIndex !== -1 ? "Update Day" : "Post Day"} 
                </Text> 
            </TouchableOpacity> 

            <FlatList 
                data={tasks} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()} 
            /> 
            
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
        marginTop: 5,
        padding: 16,
        marginBottom: 100
    }, 
    header: { 
        fontSize: 35, 
        fontWeight: "bold", 
        marginBottom: 10, 
        color: "#004AAD", 
        textAlign: "center",
        padding: 25,
    }, 
    input: { 
        height: 60,
        borderColor: '#dcdfe6',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 12,
        padding: 10,
        width: 300,
        margin: 10,
        alignItems: 'center',  
    }, 
    addButton: { //change button 
        backgroundColor: "#004AAD", 
        padding: 10,
        // width: 50, 
        // borderRadius: 10, 
        // marginBottom: 25,
        // position: "absolute",
        // bottom: 0,
        // right: 16,
        
        // borderWidth: 1,
        // borderRadius: 15,
        // marginBottom: 12,
        // margin: 7,
        borderRadius: 15, 
        margin: 7,
        width: 'auto',
    }, 
    addButtonText: { //change 
        textAlign: "center", 
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }, 
    task: { 
        // flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 7,
        marginTop: 7, 
        // margin: 5,
        fontSize: 18,
        padding: 10,
        borderWidth: 1, 
        borderRadius: 10,
        borderColor: '#004AAD',
        width: '100%'        
    }, 
    itemList: { 
        fontSize: 20, 
        borderRadius: 10,
        

    }, 
    taskButtons: { 
        flexDirection: "row",
        justifyContent: 'space-between'
    }, 
    editButton: { 
        marginRight: 10, 
        color: "#009900", 
        fontWeight: "bold", 
        fontSize: 20,  
    }, 
    deleteButton: { 
        color: "#990000", 
        fontWeight: "bold", 
        fontSize: 20,  
    },
   logoutButton: {
        width: '100%',
        borderColor: '#004AAD', 
        alignItems: 'center',
        justifyContent: 'left',
        position: 'absolute',
        top: 55,
        left: 170,
   },
   logoutButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
   },
}); 
  

export default HomePage;