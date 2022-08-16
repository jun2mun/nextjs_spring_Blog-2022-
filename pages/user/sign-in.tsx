// react modules
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../../components/header/Header';

// Components
import SigninForm from '../../components/login/signin-form/SigninForm';
import useAuthenticated from '../../utils/hooks/useAuthenticated.hook';
import useUserAuthSign from '../../utils/hooks/useUserAuthSign.hook';
//import SigninForms from '../../components/login/signin-form/_SigninForm';

// 토큰 저장 방식 //
// refresh-token : local-storage에 저장
// access-token : cookie에 저장하라
// 요청 헤더에 acess token을 넣어라
// access token이 만료됬다고 하면, refresh token을 가져와 새로운 token을 발급받는 요청을 하여 갱신하라


const Signin = () => {
  const router = useRouter();

  const { redirectUri: _redirectUri} = router.query;

  const redirectUri = Array.isArray(_redirectUri)
    ? _redirectUri[0]
    : _redirectUri;

  const isAuthenticated = useAuthenticated();

  const afterSignedin = useUserAuthSign();

  // API 호출 코드

  useEffect(()=>{
    if (isAuthenticated) {
      router.replace(redirectUri || "/");
    }
  }, [isAuthenticated]);

  return (
    
    <>
      <Header/>
      <SigninForm/>
    </>

  )
}
export default Signin;