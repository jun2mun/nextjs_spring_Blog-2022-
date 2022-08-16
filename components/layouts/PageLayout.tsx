import clsx from "clsx";
import { useRouter } from "next/router";
import useAuthenticated from "../../utils/hooks/useAuthenticated.hook";
import useAuthGuard from "../../utils/hooks/useAuthGuard.hook";

export interface PageLayoutProps extends BaseProps {
    readonly loading?: boolean;

    readonly authRequired?: boolean;

    readonly afterLoaded?: boolean;

    readonly bottomSnap?: boolean //??? 의미하는 바를 모르겠음

}

const PageLayout = (props: PageLayoutProps) : JSX.Element =>{
    const {
        className,
        authRequired,
        afterLoaded,
        loading,
        bottomSnap = true, // ?? 
    } = props

    const router = useRouter(); // 라우터 용

    const isAuthenticated = useAuthenticated(); // 페이지 권한 TODO 변수명 재정의 필요(1)
    
    //  const [, , reset] = useAuthPersistence(); // session 유지용

    const passed = useAuthGuard(authRequired); // 변수명 재정의 필요(1) TODO

    //   const [dialogEl] = useGloablDialog(); // 모달창용

    const rendering = afterLoaded ? !loading : true; // 사용해봐야 알듯

    return (
        <>  
            {/* container */}
            <div
                className={clsx(
                    "relative",
                    "w-full min-h-screen min-w-[320px] mx-auto",
                    "flex flex-col justify-between",
                    "scroll-smooth",
                    className
                )}>

            </div>
        </>
    )
}

export default PageLayout;