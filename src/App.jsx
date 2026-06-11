import './App.css'
import CounterPractice from './practice/CounterPractice'

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
      </section>
    </main>
  )
}

export default App
