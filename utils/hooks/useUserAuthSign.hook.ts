import React from "react";
import { useRouter } from "next/router";

import { BearerAuthPayload } from "../types/generated";

import authContext from "../contexts/auth.context";

import useAuthPersistence from "./useAuthPersistence.hook";

export default function useUserAuthSign(): (
    authPayload: Pick<BearerAuthPayload,"accessToken" | "refreshToken">,
    redirectUri?: string
) => void {
    const router = useRouter()

    const [_authPayload, persistAuthPayload] = useAuthPersistence();

    const { loadAuthPayload } = React.useContext(authContext);

    return (authPayload,redirectUri) => {
        loadAuthPayload(authPayload);

        persistAuthPayload(authPayload);

        router.replace(redirectUri || "/");
    }
}