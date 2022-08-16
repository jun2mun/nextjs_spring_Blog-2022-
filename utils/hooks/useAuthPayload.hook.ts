import React from "react";
import { BearerAuthPayload, Scalars } from "../types/generated";

export default function useAuthPayload(): BearerAuthPayload | undefined {
    const auth = undefined // TODO
    // auth 값을 accessToken, refreshToken 둘 중 하나로 가져오면 됨.
    return auth;
}