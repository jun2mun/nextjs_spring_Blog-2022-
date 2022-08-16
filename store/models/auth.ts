import { BearerAuthPayload } from "./base";

export interface AuthPayload {
    readonly isLoaded?: boolean;

    readonly authPayload?: Pick<
        BearerAuthPayload,
        "accessToken" | "refreshToken"  
        // BeaerAuthPayload에서 둘중 하나 가져옴
    >

    readonly loadAuthPayload : (
        authPayload: Pick<BearerAuthPayload,"accessToken" | "refreshToken">
    ) => void;

    readonly resetAuthPayload?: () => void;
}