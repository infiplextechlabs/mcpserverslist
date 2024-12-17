'use client'

import { trackGithubClick, trackServerClick } from '@/utils/gtag'
import Link from 'next/link'
import styles from './ServerCard.module.css'

export default function ServerCard({ server }) {
  const handleGithubClick = (e) => {
    e.stopPropagation()
    trackGithubClick(server.title, server.githubUrl)
  }

  const handleCardClick = () => {
    trackServerClick(server.title)
  }

  return (
    <Link 
      href={`/servers/${server.id}`} 
      className={styles.card}
      onClick={handleCardClick}
    >
      <h2>{server.title}</h2>
      <div className={styles.categories}>
        {server.category.map((cat) => (
          <span key={cat} className={styles.category}>
            {cat}
          </span>
        ))}
      </div>
      <div className={styles.github}>
        <a 
          href={server.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
          onClick={handleGithubClick}
        >
          View on GitHub →
        </a>
      </div>
    </Link>
  )
} 