import useAuthPayload from "./useAuthPayload.hook";

// 유저 권한이 있는지 true/false 반환
export default function useAuthenticated(): boolean {
    const authPayload = useAuthPayload();

    return !!authPayload; // 형변환을 위하여  !! 사용함.
}