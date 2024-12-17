'use client'

import { useState } from 'react'
import SearchAndFilters from '../SearchAndFilters/SearchAndFilters'
import ServerCard from '../ServerCard/ServerCard'
import styles from './ServerGrid.module.css'

export default function ServerGrid({ servers }) {
  const [filteredServers, setFilteredServers] = useState(servers)
  
  // Get unique categories
  const categories = [...new Set(servers.flatMap(server => server.category))]

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredServers(servers)
      return
    }

    const term = searchTerm.toLowerCase()
    const filtered = servers.filter(server => 
      server.title.toLowerCase().includes(term) 
      // ||
      // server.category.some(cat => cat.toLowerCase().includes(term))
    )
    setFilteredServers(filtered)
  }

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredServers(servers)
      return
    }

    const filtered = servers.filter(server => 
      server.category.includes(category)
    )
    setFilteredServers(filtered)
  }

  return (
    <>
      <SearchAndFilters 
        categories={categories}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />
      <div className={styles.grid}>
        {filteredServers.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>
    </>
  )
} 