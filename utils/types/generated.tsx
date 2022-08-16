export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float : number;
    DateTime: any;
    JSONObject: any;
}

export type BearerAuthPayload = {
    __typename?: 'BearerAuthPayload';
    accessToken: Scalars['String'];
    refreshToken: Scalars['String'];
};

export type SigninUserLocalInput = {
    password: Scalars['String'];
    username: Scalars['String'];
}