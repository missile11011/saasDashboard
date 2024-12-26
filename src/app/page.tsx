"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { useAuth} from '@clerk/nextjs'
import Navbar from './components/Navbar'
import LineChart from './components/LineChart';
import Sidebar from './components/Sidebar';
import React, { useRef, useEffect, useState } from 'react';
import {getAllUsers} from './api/user';
export default function Home() {
  const {isSignedIn} = useAuth()

  const randomData = () => {
    return Array.from({length: 8}, () => Math.floor(Math.random() * 100));
  }
  const [navHeight, setNavHeight] = useState(0);
  const [sideWidth, setSideWidth] = useState(0);
  const navRef = useRef(null)
  const sideRef = useRef(null)
  useEffect(() => {
    if (navRef.current && sideRef.current) {
	  setNavHeight(navRef.current.offsetHeight);
	  setSideWidth(sideRef.current.offsetWidth);
    }
  }, []);  
  const data2 = randomData();
  const data3 = [42,54,32,78,24,56,10,43]
  const data = [data2, data3]
  return (
    <div className='contianer'>
      <div className='fixed top-0 w-full' ref={navRef} >
        <Navbar signedIn={isSignedIn}/>
      </div>
      <div className='fixed top-0 left-0 h-screen w-50' ref={sideRef} style={{marginTop: navHeight}} >
        <Sidebar signedIn={isSignedIn}/>
      </div>
      <main className='top-0 container' style={{marginTop: navHeight, marginLeft: sideWidth}}>
	  <div className='row'>
        <LineChart className='w-50' labels={["January", "February", "March", "April", "May", "June", "July", "August"]} chartNums={data} color={["255, 99, 132",'0,204,102']} label={["Dataset 1", "dataset2"]} chartHeight={"300px"} chartWidth={"40vw"}/>
		<LineChart className='col-4 'labels={["January", "February", "March", "April", "May", "June", "July", "August"]} chartNums={data} color={["255, 99, 132",'0,204,102']} label={["Dataset 1", "dataset2"]}/>
	  </div>
      </main>
    </div>
  )
}
