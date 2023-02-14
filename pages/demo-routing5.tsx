import { useEffect } from "react";
import { useRouter } from 'next/router'

const useUser = () => ({user: null, loading: true})
export default function DemoRouting5() {
    const { user, loading } = useUser()
    const router = useRouter()

    useEffect(()=>{
        if(!(user || loading)) {
            router.push('/login')
        }
    }, [user, loading])

    return (
        <>
            <p>Redirecting...</p>
            <h2>it is {new Date().toLocaleDateString()}.</h2>
        </>
    )
}