import mcpServers from '../../public/mcpserverlist.json';

// Transform the JSON data to match our schema
export const dummyServers = mcpServers.map(server => ({
  id: encodeURIComponent(server.link),
  title: server.name,
  githubUrl: server.link,
  category: [server.category],
  description: server.description
}));

// Mock Supabase client
export const supabase = {
  from: () => ({
    select: () => ({
      data: dummyServers,
      error: null
    }),
    eq: () => ({
      single: () => ({
        // Find server by encoded URL
        data: dummyServers.find(s => encodeURIComponent(s.id) === arguments[1]),
        error: null
      })
    })
  })
}; 