import { useRouter } from "next/router";

function ActiveLink({children, href}) {
    const router = useRouter()
    const style = {

    }

    const handleClick = (e: any) => {
        // the event.preventDefault() stops the <form> element from refreshing the entire page
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children} 
        </a>
    )
}

export default ActiveLink