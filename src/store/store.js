import {configureStore} from '@reduxjs/toolkit';
import counterslice from '../slice/couterslice'
import todoslice from '../slice/todoslice'
import todolistnew from '../slice/todolistnew'
import createSagaMiddleware from "@redux-saga/core"; 
import rootSaga from '../saga/rootsaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        counter: counterslice,
        todolist: todoslice,
        newtodolist:todolistnew
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);
export default store;