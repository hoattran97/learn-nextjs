import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import DemoImage from './demo-image';
import DemoRouting from './demo-routing'
import { AppProps } from 'next/app';
import DemoRounting3 from './demo-routing3';
import DemoRouting4 from './demo-routing4';
import DemoRouting5 from './demo-routing5';
import DemoProps, { comment } from './demo-props';

const inter = Inter({ subsets: ['latin'] })

export default function Home({Component, pageProps}: AppProps) {
  return (
    <div>
      <div> Hello Next JS</div>
      <ul>
        <li>
          <Link href="/post/abc">Go to pages/post/[pid].js</Link>
        </li>
        <li>
        <Link href="/post/abc?foo=bar">Also goes to pages/post/[pid].js</Link>
      </li>
      <li>
        <Link href="/post/abc/a-comment">
          Go to pages/post/[pid]/[comment].js
        </Link>
      </li>
      </ul>
      <DemoImage />
      {/* <DemoRouting {...pageProps}/> */}
      <DemoRounting3 />
      <DemoRouting4 />
      <DemoRouting5 />
      {/* Demo props */}
      <DemoProps 
        text={comment.text} 
        author={comment.author}
        date={comment.date}
      />
    </div>
  )
}
