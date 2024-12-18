import ServerGrid from '@/components/ServerGrid/ServerGrid'
import { servers } from '@/utils/servers'
import styles from './page.module.css'

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: servers.map((server, index) => ({
              '@type': 'SoftwareApplication',
              '@id': server.githubUrl,
              position: index + 1,
              name: server.title,
              description: server.description,
              applicationCategory: server.category[0],
              url: server.githubUrl,
              operatingSystem: 'Any',
              softwareVersion: '1.0'
            }))
          }) 
        }}
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Model Context Protocol Directory</h1>
          <p>
            Explore a comprehensive collection of Model Context Protocol (MCP) servers 
            and implementations. Find tools for browser automation, database integration, 
            cloud platforms, and more.
          </p>
        </header>
        <main>
          {servers.length > 0 ? (
            <article>
              <section className={styles.intro}>
                <h2>Browse MCP Servers</h2>
                <p>
                  Discover MCP servers that enable AI models to interact with various 
                  services and platforms. Each implementation follows the Model Context 
                  Protocol specification for seamless integration.
                </p>
              </section>
              <ServerGrid servers={servers} />
            </article>
          ) : (
            <div className={styles.empty}>
              <p>No MCP servers found. Please check back later!</p>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
