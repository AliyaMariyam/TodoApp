import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/taskSlice";


const TodoHeader = () => {

    const dispatch = useDispatch();
    const [todo, setTodo] = useState("")

    const onSubmitTask = () => {
        if (todo.trim().length === 0) {
            alert("You need to enter a task");
            setTodo("");
            return;
        }
        dispatch(
            addTask({
                task: todo
            })


        )

        setTodo("");
    }

    return (
        <View>
            <Text style={styles.text}>Todo List</Text>

            <View style={styles.textinputView}>
                {/* Text Input */}
                <TextInput
                    style={styles.textInput}
                    placeholder="Add Todo"
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                />
                {/* Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={onSubmitTask}
                >
                    <Text style={{ color: 'white' }}>Add</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default TodoHeader

const styles = StyleSheet.create({
    
     mainscreen:{
       flex:1,
       backgroundColor:'white',
     },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: 'black'
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: '80%',
        borderRadius: 5,
    },
    textinputView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        width: '80%',
        borderRadius: 5,
        alignItems: 'center'
    }

})