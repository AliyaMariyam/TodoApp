import React from "react";
import { FlatList, StyleSheet,Text,TouchableOpacity,View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { nanoid } from "@reduxjs/toolkit";

// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import {deleteTask} from '../Redux/taskSlice';
import { useDispatch } from "react-redux";

const TodoList = () =>{
     
     const dispatch = useDispatch();
     const todos = useSelector((state) => state.tasks);

    

    const onDelete = (id) => {
      dispatch(
        deleteTask({
          id: id,
        })
      );
    };

    //renderItem Function with a delete button

    const renderItem = (e)=>{
        return(
         <View style={styles.item}>
            <Text style={styles.title}>{e.item.name}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDelete(e.item.id)}
            >
             <Ionicons name='trash-outline' size={28} color={'red'} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
            
         </View>
        )
    }


    return(
        <View>
            <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

export default TodoList;

const styles = StyleSheet.create({
   item:{
    flexDirection:'row',
    backgroundColor:"#c9c9c9",
    padding:20,
    height:80,
    marginVertical:8,
     marginHorizontal:16,
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
   },
   title:{
     fontSize:20,
     color:'black',
     marginTop:10,
   },
   delete:{
    fontSize:24,
    color:'red'
   }
})
