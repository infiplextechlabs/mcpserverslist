'use client'

import { trackCategoryFilter, trackSearch } from '@/utils/gtag'
import { useState } from 'react'
import styles from './SearchAndFilters.module.css'

export default function SearchAndFilters({ categories, onSearch, onFilter }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const handleSearch = (e) => {
    const value = e.target.value
    onSearch(value)
    if (value.length > 2) {
      trackSearch(value)
    }
  }

  const handleFilter = (category) => {
    setActiveCategory(category)
    onFilter(category)
    trackCategoryFilter(category)
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search servers..."
          onChange={handleSearch}
        />
      </div>
      <div className={styles.categories}>
        <button
          className={`${styles.category} ${activeCategory === 'all' ? styles.active : ''}`}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.category} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
} 