# MCP Servers Directory

A comprehensive directory of Model Context Protocol (MCP) servers and implementations. This platform helps developers discover and explore various MCP servers for different use cases.

## What is MCP?

Model Context Protocol (MCP) is a protocol that enables AI models to interact with external services and tools in a standardized way. It provides a bridge between Large Language Models (LLMs) and various services, allowing for seamless integration and automation.

## Features

- 🔍 Browse MCP servers by category
- 🏷️ Filter servers by different categories (Browser Automation, Databases, Cloud Platforms, etc.)
- 🔗 Direct links to GitHub repositories
- 📊 Real-time GitHub stats integration

## Categories

- Browser Automation
- Cloud Platforms
- Communication
- Consumer Data Platforms
- Databases
- Developer Tools
- Data Science Tools
- Fintech
- Knowledge + Memory
- Location Services
- Monitoring
- Search
- Security
- Travel
- Version Control
- And more..

## Development

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Adding a new server

Add the server to the `public/mcpserverlist.json` file.

Format:
```json
{
  "category": "Consumer Data Platforms",
  "name": "tinybirdco/mcp-tinybird",
  "link": "https://github.com/tinybirdco/mcp-tinybird",
  "description": "An MCP server to interact with a Tinybird Workspace from any MCP client.",
  "params": ""
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- All the amazing MCP server developers
- The Model Context Protocol community
- Contributors and maintainers

## Contact

For any queries or suggestions, please open an issue in the repository.

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=infiplextechlabs/mcpserverslist&type=Timeline)](https://star-history.com/#infiplextechlabs/mcpserverslist&Timeline)


Made with ❤️ for the MCP community