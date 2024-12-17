// Dummy data for development
export const dummyServers = [
  {
    id: 1,
    title: "MCProtocol.js",
    githubUrl: "https://github.com/PrismarineJS/node-minecraft-protocol",
    category: ["JavaScript", "Node.js", "Network"]
  },
  {
    id: 2,
    title: "Minestom",
    githubUrl: "https://github.com/Minestom/Minestom",
    category: ["Java", "Performance", "API"]
  },
  {
    id: 3,
    title: "MCProtocolLib",
    githubUrl: "https://github.com/GeyserMC/MCProtocolLib",
    category: ["Java", "Network", "Library"]
  }
];

// Mock Supabase client
export const supabase = {
  from: () => ({
    select: () => ({
      data: dummyServers,
      error: null
    }),
    eq: () => ({
      single: () => ({
        data: dummyServers[0],
        error: null
      })
    })
  })
}; 