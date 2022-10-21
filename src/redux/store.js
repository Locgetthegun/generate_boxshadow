import {configureStore} from '@reduxjs/toolkit';
import { boxSetting } from './boxsetting';
export const store = configureStore({
    reducer:boxSetting.reducer,
});