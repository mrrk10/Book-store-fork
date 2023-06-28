import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useSelector } from 'react-redux'
import Home from './home'

import React from 'react'

const Main = () => {

  return (
 <div>
<Home/>
</div>

  
  )
}

export default Main