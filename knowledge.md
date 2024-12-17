# Project Structure

## Pages
- src/app/page.js (Main page with Model Context Protocol servers)
- src/app/servers/[id]/page.js (Individual server page with GitHub data)

## Components
- src/components/Header/Header.js
- src/components/Header/Header.module.css
- src/components/SearchAndFilters/SearchAndFilters.js
- src/components/SearchAndFilters/SearchAndFilters.module.css
- src/components/ServerCard/ServerCard.js
- src/components/ServerCard/ServerCard.module.css
- src/components/ServerGrid/ServerGrid.js
- src/components/ServerGrid/ServerGrid.module.css

## Utils
- src/utils/supabase.js (Database client for MCP server data)
- src/utils/github.js (GitHub API integration for repository data)
- src/utils/gtag.js (Google Analytics event tracking)
- src/utils/analytics.js (Analytics component for page views)

## Environment Variables
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- GITHUB_ACCESS_TOKEN
- NEXT_PUBLIC_GA_ID (Google Analytics tracking ID)

## Database Schema
Table: mcp_servers
- id (uuid)
- title (text)
- githubUrl (text)
- category (text[])

The application serves as a directory for Model Context Protocol (MCP) implementations and servers, providing a centralized location to discover and learn about different MCP solutions.