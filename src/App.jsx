import './App.css'
import CounterPractice from './practice/CounterPractice'
import PrintingGreetings from './practice/printingGreetings'

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
      </section>
    </main>
  )
}

export default App
