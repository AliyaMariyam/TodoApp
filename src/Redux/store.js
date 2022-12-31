
// store contain all type of reducers
//it contain all the logics too for the tasks

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskSlice'


export default configureStore({
    reducer:{
        tasks: taskReducer
    }
})