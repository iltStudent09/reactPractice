import { useMemo, useState } from 'react'

const catalog = [
  'Apple',
  'Banana',
  'Blueberry',
  'Cherry',
  'Grapes',
  'Mango',
  'Orange',
  'Strawberry',
]

function LiveSearchPractice() {
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return catalog
    }

    return catalog.filter((item) => item.toLowerCase().includes(normalizedQuery))
  }, [query])

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search fruits"
      />

      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {filteredItems.length === 0 && <p>No matches found.</p>}
    </div>
  )
}

export default LiveSearchPractice
