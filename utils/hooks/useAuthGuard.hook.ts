import React from "react";

import { useRouter } from "next/router";

import authContext from "../contexts/auth.context";

import useAuthPersistence from "./useAuthPersistence.hook";

export default function useAuthGuard(authRequired?: boolean): boolean {
  const router = useRouter();

  const [passed, setPassed] = React.useState(false);

  const auth = React.useContext(authContext); // Redux 변경 TODO

  useAuthPersistence(true);

  React.useEffect(() => {
    if (!authRequired || auth.authPayload) {
      setPassed(true);

      return;
    }

    if (authRequired && auth.isLoaded && !auth.authPayload) {
      router.replace(`/user/sign-in?redirectUri=${router.asPath}`);

      return;
    }
  }, [auth, authRequired]);

  return passed;
}
