import { useState } from 'react'

import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'

import LiveStreamSection from './LiveStreamSection'
import PostSection from './PostSection'

const feedUpdate = () => {
  return (
    <>
      <LiveStreamSection />
      <PostSection />
    </>
  )
}

export default feedUpdate