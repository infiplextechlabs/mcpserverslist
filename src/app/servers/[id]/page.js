import { getRepoData } from '@/utils/github'
import { dummyServers } from '@/utils/supabase'
import ServerPageClient from './ServerPageClient'

async function getServer(id) {
  const serverId = typeof id === 'string' ? parseInt(id) : id
  const server = dummyServers.find(s => s.id === serverId)
  if (!server) return null
  return server
}

export default async function ServerPage({ params: paramsPromise }) {
  const params = await paramsPromise;
  const server = await getServer(params.id)
  const githubData = server ? await getRepoData(server.githubUrl) : null
  return <ServerPageClient server={server} githubData={githubData} />
} 