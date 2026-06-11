import { useState } from 'react'

const tabItems = [
  {
    id: 'overview',
    label: 'Overview',
    content: 'This is a simple tabs component using state to switch visible content.',
  },
  {
    id: 'features',
    label: 'Features',
    content: 'Each tab uses shared data and conditional rendering to show active content.',
  },
  {
    id: 'notes',
    label: 'Notes',
    content: 'You can add more tabs by appending objects to the tabItems array.',
  },
]

function TabsPractice() {
  const [activeTabId, setActiveTabId] = useState(tabItems[0].id)

  const activeTab = tabItems.find((tab) => tab.id === activeTabId)

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTabId(tab.id)}
            aria-pressed={activeTabId === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p style={{ marginTop: '0.75rem' }}>{activeTab?.content}</p>
    </div>
  )
}

export default TabsPractice
