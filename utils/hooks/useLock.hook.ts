import React from "react"

export default function useLock(
    name?: string
): [boolean, (handler: () => void) => void] {
    
    const [lock, setLock] = React.useState(false);

    // Ref는 변경해도 state 처럼 렌더링 안됨
    // setTimeout은 NodeJS.Timeout 객체를 리턴합니다.
    const ref = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(()=>{
        return () => {
            if (ref.current != null) {
                clearTimeout(ref.current); // setTimeout을 종료합니다
            }
        };
    },[]);

    return [
        !!lock, // boolean 값 리턴
        (handler) => { // (handler) : () => void  => void 타입 리턴
            if (lock) {
                console.log(name, "BLOCKED");

                return;
            }

            setLock(true);

            handler.call(null);

            const timeout = setTimeout(() => {
                setLock(false)
            },300) // 300 이후에 콜백함수 실행

            ref.current = timeout;
        },
    ];
}