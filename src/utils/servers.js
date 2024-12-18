import mcpServers from '../../public/mcpserverlist.json';

// Transform the JSON data to match our schema
export const servers = mcpServers.map(server => ({
  id: encodeURIComponent(server.link),
  title: server.name,
  githubUrl: server.link,
  category: [server.category],
  description: server.description
})); 