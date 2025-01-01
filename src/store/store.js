import {configureStore} from '@reduxjs/toolkit';
import counterslice from '../slice/couterslice'
import todoslice from '../slice/todoslice'
 const store = configureStore({
    reducer: {
        counter: counterslice,
        todolist: todoslice
    }
});
export default store;