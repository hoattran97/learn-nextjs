import Link from 'next/link'
import { AppProps } from 'next/app';

export default function DemoRouting({posts}) {
    return (
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>
                    <Link 
                        href={{
                            pathname: '/blog/[slug]',
                            query: { slug: post.slug },
                        }}
                    >
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}