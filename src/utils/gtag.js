export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Custom events
export const trackServerClick = (serverTitle) => {
  event({
    action: 'click',
    category: 'Server',
    label: serverTitle,
  })
}

export const trackGithubClick = (serverTitle, githubUrl) => {
  event({
    action: 'click',
    category: 'GitHub',
    label: `${serverTitle} - ${githubUrl}`,
  })
}

export const trackCategoryFilter = (category) => {
  event({
    action: 'filter',
    category: 'Category',
    label: category,
  })
}

export const trackSearch = (searchTerm) => {
  event({
    action: 'search',
    category: 'Search',
    label: searchTerm,
  })
} 