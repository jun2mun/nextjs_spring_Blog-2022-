import clsx from "clsx";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            {/* bottom */}
            <div>
                {/*<div className={clsx(bottomSnap && "snap-start")} />*/}
                <div className="pt-10 lg:pt-8 pb-[60px] lg:pb-10 px-10 lg:px-[116px] text-white bg-blue-200">
                <div className="max-w-screen-4xl mx-auto">
                    <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-8 lg:space-x-5 mb-5 lg:mb-4">
                        <div className="">
                        <div className="lg:hidden w-[110px]">
                            <img src="/logos/logo-gkjeomju-text-secondary.png" />
                        </div>
                        <div className="hidden lg:block w-[150px]">
                            <img src="/logos/logo-gkjeomju-text-secondary.png" />
                        </div>
                        </div>
                        <div>
                        <span className="whitespace-nowrap sans text-[13px] lg:text-lg">
                            오디세이랩
                        </span>
                        </div>
                    </div>
                    <div className="flex space-x-1.5 lg:space-x-2">
                        <a href="http://pf.kakao.com/_mGRKb" target="_blank">
                        <img src="/images/kakaotalk.png" className="w-6 lg:w-8" />
                        </a>
                        <a
                        href="https://www.instagram.com/changup_shield/"
                        target="_blank"
                        >
                        <img src="/images/instagram.png" className="w-6 lg:w-8" />
                        </a>
                        <a
                        href="https://blog.naver.com/odysseylab"
                        target="_blank"
                        className="!ml-1 !lg:ml-1.5"
                        >
                        <img src="/images/nblog.png" className="w-6 lg:w-8" />
                        </a>
                    </div>
                    </div>

                    <div className="sans text-[11px] lg:text-[13px]">
                    {/* business info */}
                    <div className="lg:flex">
                        <div>
                        대표자 : 박성연<span>&nbsp;|&nbsp;</span>사업자 번호 :
                        618-17-91289
                        </div>
                        <span className="hidden lg:inline">&nbsp;|&nbsp;</span>
                        <div>이메일 : gkjeomju@gmail.com</div>
                    </div>
                    <br className="lg:hidden" />

                    <div>
                        카카오톡 채널&nbsp;
                        <Link href="http://pf.kakao.com/_mGRKb" target="_blank">
                        @지켜점주
                        </Link>
                        &nbsp;
                        <br className="lg:hidden" />
                        고객센터 운영시간 10:00 ~ 20:00 (점심시간 : 12:00 ~ 13:00)
                    </div>
                    <br />
                    <br className="lg:hidden" />

                    {/* terms */}
                    <div className="">
                        <Link href="/terms/service">지켜점주 이용약관</Link>
                        <span>&nbsp;|&nbsp;</span>
                        <Link href="/terms/privacy">개인정보 처리방침</Link>
                    </div>

                    {/* copyright */}
                    <div className="">
                        <span>©️2021. OdysseyLab Inc. All rights reserved.</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer;