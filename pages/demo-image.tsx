import Image from 'next/image'
import profilePic from '../public/vnpay-image.png'

export default function DemoImage () {
    return (
        <>
            <h1>My Homepage</h1>
            <Image
                src={profilePic}
                alt="vnpay.vn"
                width={100}
                height={100}
            />
        </>
    )
}