// page/[slug].js

import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/router'

export default function DemoRounting3(props: any){
    const router = useRouter()
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Page: {router.query.slug}</h1>
            <p>Count: {count} </p>
            <button onClick={()=> setCount(count+1)}>Increase count</button>
            <Link href="/one">one</Link>
            <br/>
            <button type="button" onClick={()=> router.push('/about')}>
                Click me
            </button>
        </div>
    )
}