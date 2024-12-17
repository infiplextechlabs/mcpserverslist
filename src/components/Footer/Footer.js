import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            MCP Servers List is a community-driven project to help you find the best MCP servers.
          </p>
          <div className={styles.links}>
            <a
              href="https://github.com/modelcontextprotocol"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className={styles.divider}>•</span>
            <a
              href="https://modelcontextprotocol.io/introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              MCP Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 