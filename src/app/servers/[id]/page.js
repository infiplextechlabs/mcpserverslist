import { getRepoData } from '@/utils/github'
import { servers } from '@/utils/servers'
import ServerPageClient from './ServerPageClient'

async function getServer(id) {
  const server = servers.find(s => encodeURIComponent(s.id) === id)
  if (!server) return null
  return server
}

export default async function ServerPage({ params }) {
  const server = await getServer(params.id)
  const githubData = server ? await getRepoData(server.githubUrl) : null
  return <ServerPageClient server={server} githubData={githubData} />
} 