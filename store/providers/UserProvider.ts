// Redux modules
import { createAsyncThunk } from "@reduxjs/toolkit"; // 액션 타입 문자열,프로미스를 반환하는 비동기 함순

// 외부 modules
import axios from "axios";

// 모델
import { User } from '../models/user';

export const UserProvider = {
    // CRUD 구현 //
    create: createAsyncThunk(
        'user/create',
        async (user: User, {rejectWithValue}) =>{
            try {
                // TODO //
                //////////
            const resp = await axios.post(`/user/`,user);
            return resp.data
            } catch (error: any) {
                console.log(error);
                return rejectWithValue(error.reponse.data) //??
            }
        }
    )
}