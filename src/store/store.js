import {configureStore} from '@reduxjs/toolkit';
import counterslice from '../slice/couterslice'

const store = configureStore({
    reducer: {
        counter: counterslice
    }
});
export default store;