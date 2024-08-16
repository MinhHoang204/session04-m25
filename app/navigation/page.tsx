import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>menu thanh đièu hướng!
        <Link href={"/navigition/about"}>about</Link>
        <Link href={"/navigation/news"}>news</Link>
    </div>
  )
}
