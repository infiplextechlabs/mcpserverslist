'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MCP Servers List
        </Link>
        {!isHome && (
          <Link href="/" className={styles.back}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Directory
          </Link>
        )}
      </div>
    </header>
  )
} 