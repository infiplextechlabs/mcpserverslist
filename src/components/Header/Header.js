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
        <div className={styles.actions}>
          <a
            href="https://github.com/infiplextechlabs/mcpserverslist/issues/new?assignees=pulkonet&labels=submission&projects=&template=submit-mcp.md"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.addButton}
          >
            <svg className={styles.plusIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add MCP Server
          </a>
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
      </div>
    </header>
  )
} 