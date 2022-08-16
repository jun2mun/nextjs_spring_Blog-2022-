import React from "react";
import { useCookies } from "react-cookie";

// custom types
import { BearerAuthPayload } from "../types/generated";

// 
import authContext from "../contexts/auth.context";

export default function useAuthPersistence(
    shouldLoad?: boolean
): [
    Pick<BearerAuthPayload, "accessToken" | "refreshToken">,
    (
        authPayload : Pick<BearerAuthPayload, "accessToken" | "refreshToken">
    ) => void,
    () => void
] {
    const [cookie, setCookie, removeCookie] = useCookies(["Test"]);

    const {loadAuthPayload} = React.useContext(authContext);

    React.useEffect(() => {
        if (shouldLoad){
            loadAuthPayload(cookie["Test"]?.authPayload);
        }
    },[shouldLoad]);

    return [
        cookie["Test"],
        (authPayload) => {
            setCookie(
                "Test",
                {
                    authPayload : {
                        accessToken: authPayload.accessToken,
                        refreshToken: authPayload.refreshToken,
                    },
                },
                {path: "/"}
            );
        },
        () => {
            removeCookie("Test", {path:"/"})
        },
    ];

}
