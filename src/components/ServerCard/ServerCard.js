'use client'

import { trackGithubClick } from '@/utils/gtag'
import styles from './ServerCard.module.css'

export default function ServerCard({ server }) {
  const handleClick = (e) => {
    trackGithubClick(server.title, server.githubUrl)
  }

  const displayTitle = server.title.includes('/') 
    ? server.title.split('/').pop() 
    : server.title

  return (
    <a 
      href={server.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      onClick={handleClick}
    >
      <h2>{displayTitle}</h2>
      <div className={styles.categories}>
        {server.category.map((cat) => (
          <span key={cat} className={styles.category}>
            {cat}
          </span>
        ))}
      </div>
      <div className={styles.github}>
        <span className={styles.githubLink}>
          View on GitHub →
        </span>
      </div>
    </a>
  )
} 