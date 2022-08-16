// redux modules
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

// models
import { User, InitUser} from '../models/user';
import { UserState, InitUserState } from "../models/user";

// service(provider)
import { UserProvider } from "../providers/UserProvider";

export const UserReducer = createSlice({
    name: "user",
    initialState: InitUserState,
    reducers : {
        // CRUD //
        UpdateUser: (state: UserState, {payload}: PayloadAction<User>) => {
            state.user = {...payload} //??
        }
    },
    extraReducers: {
        [UserProvider.create.pending.type] : (state) => {
            state.loading = true;
            state.user = InitUser;
            state.error = null;
        },
        // fulfilled시 데이터는 payload로 들어옴
        [UserProvider.create.fulfilled.type] : (state, {payload}: PayloadAction<User>) =>{
            state.loading = false;
            state.user = {...payload};
            state.error = null;
        },
        // rejected 시   에러는  action.error로 들어오며, payload는 undefined됨
        [UserProvider.create.rejected.type] : (state, { payload }: PayloadAction<any>) => {
            state.loading = false;
            state.user = InitUser;
            state.error = payload;
        }
    }

})

export const { UpdateUser } = UserReducer.actions;
export default UserReducer.reducer;