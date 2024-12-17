'use client'

import { trackGithubClick } from '@/utils/gtag'
import styles from './page.module.css'

export default function ServerPageClient({ server, githubData }) {
  if (!server) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h1>Server not found</h1>
          <p>The requested MCP server could not be found.</p>
        </div>
      </div>
    )
  }

  const handleGithubClick = () => {
    trackGithubClick(server.title, server.githubUrl)
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{server.title}</h1>
          <div className={styles.categories}>
            {server.category.map((cat) => (
              <span key={cat} className={styles.category}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.statsCard}>
            <div className={styles.statHeader}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <h3>GitHub Stats</h3>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{githubData?.stars || 0}</span>
                <span className={styles.statLabel}>Stars</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>{githubData?.language || 'N/A'}</span>
                <span className={styles.statLabel}>Language</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  {githubData?.lastUpdated 
                    ? new Date(githubData.lastUpdated).toLocaleDateString()
                    : 'N/A'}
                </span>
                <span className={styles.statLabel}>Last Updated</span>
              </div>
            </div>
          </div>

          <div className={styles.descriptionCard}>
            <div className={styles.statHeader}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <h3>About</h3>
            </div>
            <p className={styles.description}>
              {githubData?.description || 'No description available'}
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href={server.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            onClick={handleGithubClick}
          >
            <svg className={styles.githubIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
          <a
            href={`${server.githubUrl}/issues`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.issuesLink}
          >
            Report Issues
          </a>
        </div>
      </main>
    </div>
  )
} 