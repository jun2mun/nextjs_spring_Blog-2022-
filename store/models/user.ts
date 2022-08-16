// 타입 체크에 있어서 ts의 지향점은 값의 형태에 기반하여
export interface User {
    pk : number;
    email?: string;
    username? : string;
    profile? : string | null;
    updated? : string
    authority? : [] | null
}

export const InitUser : User = {
    pk : 0,
    email: "",
    username : "",
    profile : "",
    updated : "",
    authority : null
}

export interface UserState {
    user: User;
    error: any;
    loading : boolean
}

export const InitUserState : UserState = {
    user: InitUser,
    error : null,
    loading : false
}
