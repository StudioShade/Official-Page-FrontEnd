'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, store } from '@/app/lib/store'

export default function storeProvider({
    children,
}:{
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
         storeRef.current = store()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}
