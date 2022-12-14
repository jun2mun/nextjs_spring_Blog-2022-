/*
import {
    PropsWithChildren,
    ReactElement,
    ReactNode,
    Suspense,
    useCallback,
  } from 'react'
import { useQueryErrorResetBoundary } from 'react-query'
import ErrorBoundary from './ErrorBoundary';


interface Props {
    errorFallback: ReactElement;
    children: ReactElement;
}

const AsyncBoundary = ({
    suspenseFallback,
    errorFallback,
    children,
    }: PropsWithChildren<Props>) => {
    const { reset } = useQueryErrorResetBoundary()
    const resetHandler = useCallback(() => {
        reset()
    }, [reset])

    return (
        <ErrorBoundary resetQuery={resetHandler} errorFallback={errorFallback}>
        <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
    )
}

export default AsyncBoundary
*/
export {}