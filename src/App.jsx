import './App.css'
import CounterPractice from './practice/CounterPractice'
import PrintingGreetings from './practice/printingGreetings'
import InventoryPractice from './practice/InventoryPractice'
import QuizPractice from './practice/QuizPractice'
import TabsPractice from './practice/TabsPractice'
import ShoppingCartPractice from './practice/ShoppingCartPractice'
import LiveSearchPractice from './practice/LiveSearchPractice'

function App() {
  return (
    <main className="app">
      <h1>React Practice Starter</h1>
      <p className="intro">
        Add your practice components in <code>src/practice</code> and render them here.
      </p>

      <section className="practice-list" aria-label="Practice items">
        <article className="practice-card">
          <h2>Counter practice</h2>
          <p>A starter component. Duplicate this pattern for new practice items.</p>
          <CounterPractice />
        </article>
        <article className="practice-card">
          <h2>Printing Greetings</h2>
          <p>A component to practice handling user input and state.</p>
          <PrintingGreetings />
        </article>
        <article className="practice-card">
          <h2>Inventory Practice</h2>
          <p>Uses an array and shows items that are currently in stock.</p>
          <InventoryPractice />
        </article>
        <article className="practice-card">
          <h2>Quiz Practice</h2>
          <p>A mini quiz with question navigation and score tracking.</p>
          <QuizPractice />
        </article>
        <article className="practice-card">
          <h2>Tabs Practice</h2>
          <p>Switch between tabbed sections using component state.</p>
          <TabsPractice />
        </article>
        <article className="practice-card">
          <h2>Shopping Cart Practice</h2>
          <p>Adjust item quantities and calculate a running total.</p>
          <ShoppingCartPractice />
        </article>
        <article className="practice-card">
          <h2>Live Search Practice</h2>
          <p>Filter a list in real time based on typed input.</p>
          <LiveSearchPractice />
        </article>
      </section>
    </main>
  )
}

export default App
