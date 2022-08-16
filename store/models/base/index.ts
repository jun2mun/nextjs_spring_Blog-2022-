// 공통 모델
export type UUID = String
export type BaseId = string | number | UUID

export interface PaginationArgs {
    limit? : number;
    offset?: number;
}

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