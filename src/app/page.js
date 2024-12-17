import ServerGrid from '@/components/ServerGrid/ServerGrid'
import { supabase } from '@/utils/supabase'
import styles from './page.module.css'

// Generate metadata for better SEO
export const metadata = {
  title: 'MCP Servers Directory | Model Context Protocol Implementations',
  description: 'Discover and explore Model Context Protocol (MCP) servers. Browse through a curated list of MCP implementations for browser automation, databases, cloud platforms, and more.',
  keywords: 'MCP, Model Context Protocol, AI tools, LLM integration, automation servers',
  openGraph: {
    title: 'MCP Servers Directory | Model Context Protocol Implementations',
    description: 'Discover and explore Model Context Protocol (MCP) servers. Browse through a curated list of MCP implementations.',
    type: 'website',
    url: 'https://mcpservers.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MCP Servers Directory'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCP Servers Directory',
    description: 'Discover Model Context Protocol (MCP) implementations and servers',
    images: ['/og-image.png']
  }
}

async function getServers() {
  const { data, error } = await supabase
    .from('mcp_servers')
    .select('*')
  
  if (error) {
    console.error('Error fetching servers:', error)
    return []
  }
  
  return data || []
}

export default async function Home() {
  const servers = await getServers()

  // Generate structured data for rich results
  const structuredData = {
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
