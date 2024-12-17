import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN
})

export async function getRepoData(githubUrl) {
  try {
    const [owner, repo] = githubUrl.replace('https://github.com/', '').split('/')
    const { data } = await octokit.rest.repos.get({
      owner,
      repo,
    })
    
    return {
      stars: data.stargazers_count,
      lastUpdated: data.updated_at,
      description: data.description,
      language: data.language,
    }
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    return null
  }
} 