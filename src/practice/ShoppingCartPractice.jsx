import { useMemo, useState } from 'react'

const products = [
  { id: 1, name: 'Notebook', price: 5.5 },
  { id: 2, name: 'Pen', price: 1.25 },
  { id: 3, name: 'Backpack', price: 32.0 },
]

function ShoppingCartPractice() {
  const [cartQuantities, setCartQuantities] = useState({
    1: 1,
    2: 2,
    3: 0,
  })

  const increaseQuantity = (productId) => {
    setCartQuantities((previous) => ({
      ...previous,
      [productId]: (previous[productId] ?? 0) + 1,
    }))
  }

  const decreaseQuantity = (productId) => {
    setCartQuantities((previous) => {
      const currentQuantity = previous[productId] ?? 0

      return {
        ...previous,
        [productId]: Math.max(currentQuantity - 1, 0),
      }
    })
  }

  const total = useMemo(() => {
    return products.reduce((sum, product) => {
      const quantity = cartQuantities[product.id] ?? 0
      return sum + quantity * product.price
    }, 0)
  }, [cartQuantities])

  return (
    <div>
      <ul>
        {products.map((product) => {
          const quantity = cartQuantities[product.id] ?? 0

          return (
            <li key={product.id} style={{ marginBottom: '0.65rem' }}>
              <strong>{product.name}</strong> (${product.price.toFixed(2)})
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.35rem' }}>
                <button type="button" onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>Qty: {quantity}</span>
                <button type="button" onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
            </li>
          )
        })}
      </ul>
      <p>
        Total: <strong>${total.toFixed(2)}</strong>
      </p>
    </div>
  )
}

export default ShoppingCartPractice
