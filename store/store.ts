// redux 모듈
import { configureStore, ThunkAction, Action, applyMiddleware } from "@reduxjs/toolkit" 
// ConfigureStore는 Reducer에서 반환된 새로운 state를 store라는 객체로 정리해 관리하는 곳.
import thunk, {ThunkMiddleware} from "redux-thunk" // 리덕스에서 비동기 작업을 처리 할 때 
// 가장 많이 사용하는 미들웨어 -> 액션 객체가 아닌 함수를 디스패치 할 수 있다. ???
import logger from 'redux-logger'
import UserReducer from "./reducers/UserReducer"
import AuthReducer from "./reducers/AuthReducer"

// Reducers

export const store = configureStore({ //redux toolkit -> createslice 모아서 씀
    reducer: { // reducer는 필수로 있어야함.
        UserState : UserReducer,
        AuthState : AuthReducer,
        // reducer 작성
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools : true
    //devTools : process.env.NODE_ENV !== 'production',
    //preloadedState,  //스토어의 초기값을 설정할 수 있습니다.
    //enhancers: [reduxBat] //??
})


//export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;