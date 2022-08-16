//   홈페이지 인트로 //
const Intro = () => {
    const houseImg = 'https://d3udu241ivsax2.cloudfront.net/v3/images/brand/main-bg.0c2e95bfd550759a46367d3abb3d05df.png'

    return (
        <>
            <section className="_intro-wrap box-border block pt-16 h-200"> 
                <div className="_section_wrap relative h-full overflow-hidden px-0 my-0 mx-auto bg-repeat bg-cover max-w-screen-2xl" 
                  style={{ backgroundImage: `url(${houseImg})` }}>

                    <div className="_text-wrap  animate-fade-in-down relative mt-20 py-0 px-12">
                        <h1 className="">당신의 일상을 1밀리+ 독서와 무제한 친해지리</h1>
                        <p className="millielibrary">밀리의 서재</p>
                    </div>
                </div>
            </section>
        </>
    )
}
const Best_Post = () => {
    return (
        <>
           <section className="_best_post-wrap bg-gray-100 box-border">
                <div className="_section_wrap p-0 max-w-full overflow-hidden my-0 mx-auto max-w-screen-xl">
                    <div className="_text-wrap p-0 text-center max-w-full max-w-screen-xl">
                        <h2 className="font-bold text-5xl text-gray-900 mb-6 animate-fade-in-down">
                            관심 분야에 있는 책도 {/* opacity-0 도입해서 해봐야될듯 */}
                            <br/>"딱 골라들여요"
                        </h2>
                        <p className="text-xl animate-fade-in-down">
                            <br/>
                            "검색어 순위를 통해 뽑은 인기 분야 책들을 확인해 보세요
                        </p>
                    </div>
                    <div className="_bestSellerList-wrap my-0 mx-auto pt-10 px-0 pb-4 p-0 box-border block max-w-screen-xl">
                        <div className="_filter-overflow overflow-hidden">
                            <div className="_slide-container no-scrollbar -mt-4 py-0 px-6 cursor-grab ">
                                <ul className="_slide-wrapper inline-flex flex-no-wrap whitespace-no-wrap pr-6 mb-1 scrolling-touch pt-4" // 변수화해야함
                                >
                                    <li className="_slider-item">
                                        <button className="_active_btn bg-gray-900 text-white text-sm bg-transparent overflow-hidden cursor-pointer block py-1.5 px-4 border-1 outline-none normal-case rounded-2xl">
                                            주식
                                        </button>
                                    </li>
                                    <li className="_slider-item">
                                        <button className="_active_btn bg-gray-900 text-white text-sm bg-transparent overflow-hidden cursor-pointer block py-1.5 px-4 border-1 outline-none normal-case rounded-2xl">
                                            영어
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="_bestSeller-list pt-4">
                            <div className="_book-shelf-overflow my-0 mx-auto">
                                <div className="_slider-container overflow-hidden cursor-grab -mt-4">
                                    <ul className="_slider-warpper pt-4 pr-6">
                                        <li className="_slider-item cursor-auto ml-6 max-w-xl 2-/15 ml-4"> {/* 도서(post) 리스트  */}
                                            <div className="_millie-book">
                                                <a className="_book-image">
                                                    <div className="_thumbnail">
                                                        <div className="_thumbnail-inner">
                                                            <div className="_book-picture image-loaded">
                                                                <picture>
                                                                    <source srcSet="https://cover.millie.co.kr/service/cover/179491025/e3c210dc19274acfb987968134836a6e.jpg?w=145&f=webp&q=80,
                                                                     https://cover.millie.co.kr/service/cover/179491025/e3c210dc19274acfb987968134836a6e.jpg?w=290&f=webp&q=80 2x"
                                                                        type="image/webp">
                                                                     </source>
                                                                     <img src="https://cover.millie.co.kr/service/cover/179491025/e3c210dc19274acfb987968134836a6e.jpg?w=145&q=80"
                                                                        alt="도서 썸네일" width={145}>
                                                                     </img>
                                                                </picture>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="_book-data">
                                                    <div className="_metadata">
                                                        <p className="_badge"></p>
                                                        <p className="_title">주린이가 가장 알고 싶은 최다  질문 TOP 77</p>
                                                        <p className="_author">원앤원컨텐츠그룹</p>
                                                        <p className="_reading">
                                                            "48 %"
                                                            <span className="_line">|</span>
                                                            " 308 분"
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}



const Landing = () => {
        return (
        <>
            <Intro/>
            <Best_Post/>
        </>
    )
}
export default Landing;