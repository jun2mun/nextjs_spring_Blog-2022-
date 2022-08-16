// redux modules
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


// models
import { User, InitUser} from '../models/user';
import { UserState, InitUserState } from "../models/user";

// service(provider)
import { AuthProvider } from "../providers/AuthProvider";

export const AuthReducer = createSlice({
    name: "user", // slice 이름 지정
    initialState: InitUserState, // 초기값 설정
    reducers : { 
        // CRUD //
        // action에 전달하면 // payload로 전달하면-> redux toolkit에서만
        // (dispatch({"type":...}))  || dispatch(authreducer.xxx)
        UpdateAuth: (state: UserState, {payload}: PayloadAction<User>) => {
            state.user = {...payload} //??
        }
    },
    extraReducers: {
        [AuthProvider.create.pending.type] : (state) => {
            state.loading = true;
            state.user = InitUser;
            state.error = null;
        },
        // fulfilled시 데이터는 payload로 들어옴
        [AuthProvider.create.fulfilled.type] : (state, {payload}: PayloadAction<User>) =>{
            state.loading = false;
            state.user = {...payload};
            state.error = null;
        },
        // rejected 시   에러는  action.error로 들어오며, payload는 undefined됨
        [AuthProvider.create.rejected.type] : (state, { payload }: PayloadAction<any>) => {
            state.loading = false;
            state.user = InitUser;
            state.error = payload;
        }
    }

})

export const { UpdateAuth } = AuthReducer.actions;
export default AuthReducer.reducer; //호출하려면 .reucer를 붙여야??