// React modules
import { useState } from "react";

// Redux modules

// Next.js modules
import { useRouter } from "next/router";
import useAuthenticated from "../../utils/hooks/useAuthenticated.hook";
import useAuthPersistence from "../../utils/hooks/useAuthPersistence.hook";
import useAuthGuard from "../../utils/hooks/useAuthGuard.hook";
import Link from "next/link";

const MenuLayout = () => {
    //(state: UserState ) => state.user) 도 됨
    //const user = useSelector((state: { UserState: UserState})=>state.UserState.user);
   // const dispatch = useDispatch();

    return (
        <>
            <header className="header-section fixed w-full bg-gray-200 h-16 z-10 box-border m-0 p-0 tracking-normal block">
                {/*  header-wrap <-> header-wrap-mobile */}
                <div className="header-wrap py-0 pl-4 pr-3 md:flex md:h-full md:items-center md:justify-between">
                    <h1 className="logo font-bold">
                        <a href="#intro" className="cursor-pointer bg-transparent no-underline">
                            <img 
                                src="https://d3udu241ivsax2.cloudfront.net/v3/images/brand/full-logo.f9246fa0ca04c7cef80a5d0f5409f0be.png"
                                alt="밀리의서재 로고"
                                className="max-w-full align-top border-none pointer-events-none h-6"
                            />
                        </a>
                    </h1>
                    <button type="button" className="btn-nav hidden w-8 h-8 cursor-pointer bg-transparent outline-none text-gray-900 normal-case overflow-visible m-0 normal-case inline-block text-center items-start cursor-default box-border m-0 border-2">
                        <span className="block w-4 h-0 rounded-none overflow-hidden whitespace-no-wrap cursor-pointer bg-transparent outline-none m-0 normal-case text-center cursor-default">
                            메뉴 열기
                        </span>
                    </button>

                    <div className="nav-box flex items-center">
                        <nav className="m-0 p-0 box-border">
                            <ul className="flex justify-center mr-6 block list-none">
                                <li>
                                    <a href="/h4/b2b/" className="px-4 py-6 cursor-pointer bg-transparent no-underline text-base">
                                        블로그
                                    </a>
                                </li>
                                <li>
                                    <a href="/v3/management" className="px-4 py-6 cursor-pointer bg-transparent no-underline text-base">
                                        게시판
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <Link href={"/user/sign-in"}>
                            <a className="brand-login cursor-pointer text-xs leading-4 text-white text-center text-gray-900">로그인</a>
                        </Link>
                    </div>
                </div>
            </header>

        </>
    )
}
export default Header;