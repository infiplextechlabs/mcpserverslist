import ServerGrid from '@/components/ServerGrid/ServerGrid'
import { supabase } from '@/utils/supabase'
import styles from './page.module.css'

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

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>MCP Servers List</h1>
        <p>Browse and discover Awesome MCP Servers</p>
      </header>
      {servers.length > 0 ? (
        <ServerGrid servers={servers} />
      ) : (
        <div className={styles.empty}>
          <p>No MCP servers found. Check back later!</p>
        </div>
      )}
    </div>
  )
}
