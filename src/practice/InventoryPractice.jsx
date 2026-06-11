import { useMemo, useState } from 'react'

const inventory = [
  { id: 1, name: 'Apples', inStock: true },
  { id: 2, name: 'Bananas', inStock: false },
  { id: 3, name: 'Oranges', inStock: true },
  { id: 4, name: 'Mangoes', inStock: true },
  { id: 5, name: 'Blueberries', inStock: false },
]

function InventoryPractice() {
  const [showOnlyInStock, setShowOnlyInStock] = useState(true)

  const visibleItems = useMemo(() => {
    if (showOnlyInStock) {
      return inventory.filter((item) => item.inStock)
    }

    return inventory
  }, [showOnlyInStock])

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showOnlyInStock}
          onChange={(event) => setShowOnlyInStock(event.target.checked)}
        />
        {' '}Show only in-stock items
      </label>

      <ul>
        {visibleItems.map((item) => (
          <li key={item.id}>
            {item.name} {item.inStock ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InventoryPractice
