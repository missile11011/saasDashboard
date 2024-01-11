"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { useAuth} from '@clerk/nextjs'
import Navbar from './components/Navbar'

export default function Home() {
  const {isSignedIn} = useAuth()
  
  return (
    <div className=''>
        <Navbar signedIn={isSignedIn}/>
    </div>
  )
}