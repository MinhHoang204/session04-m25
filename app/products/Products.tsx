"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Products() {
    const pathName = usePathname();
    console.log("gia tri pathName", pathName)
  return (
    <div>Products
        <Link className={pathName == "/products/menmen"?"active":""} href={"/products/menmen"}>Men men!</Link>
        
        <Link className={pathName == "/products/iphone"?"active":""} href={"/products/iphone"}>Iphone!</Link>
    </div>
  )
}
