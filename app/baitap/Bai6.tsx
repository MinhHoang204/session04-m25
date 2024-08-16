import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./bai6.module.css"
export default function Bai6() {
    const router = useRouter();
  return (
    <nav>
      <ul>
        <li className={router.pathname === '/' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={router.pathname === '/about' ? styles.active : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname === '/login' ? styles.active : ''}>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
