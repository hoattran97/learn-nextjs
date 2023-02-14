import { useRouter } from "next/router";

export default function DemoRouting4() {
    const router = useRouter()

    return (
        <button type="button" onClick={()=>router.push('/post/abc')}>
            Click me
        </button>
    )
}