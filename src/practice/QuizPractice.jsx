import { useMemo, useState } from 'react'

const questions = [
  {
    id: 1,
    prompt: 'What hook is used for local component state?',
    options: ['useEffect', 'useState', 'useMemo'],
    answer: 'useState',
  },
  {
    id: 2,
    prompt: 'Which prop helps React identify list items?',
    options: ['key', 'id', 'name'],
    answer: 'key',
  },
  {
    id: 3,
    prompt: 'Which method creates a new array from each item?',
    options: ['filter', 'reduce', 'map'],
    answer: 'map',
  },
]

function QuizPractice() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentQuestion = questions[currentIndex]

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      return selectedAnswers[question.id] === question.answer ? total + 1 : total
    }, 0)
  }, [selectedAnswers])

  const selectAnswer = (questionId, value) => {
    setSelectedAnswers((previous) => ({
      ...previous,
      [questionId]: value,
    }))
  }

  const nextQuestion = () => {
    setCurrentIndex((previous) => Math.min(previous + 1, questions.length - 1))
  }

  const previousQuestion = () => {
    setCurrentIndex((previous) => Math.max(previous - 1, 0))
  }

  const restartQuiz = () => {
    setCurrentIndex(0)
    setSelectedAnswers({})
    setIsSubmitted(false)
  }

  return (
    <div>
      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>
      <p>{currentQuestion.prompt}</p>

      {currentQuestion.options.map((option) => (
        <label key={option} style={{ display: 'block', marginBottom: '0.35rem' }}>
          <input
            type="radio"
            name={`question-${currentQuestion.id}`}
            value={option}
            checked={selectedAnswers[currentQuestion.id] === option}
            onChange={(event) => selectAnswer(currentQuestion.id, event.target.value)}
            disabled={isSubmitted}
          />
          {' '}
          {option}
        </label>
      ))}

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
        <button type="button" onClick={previousQuestion} disabled={currentIndex === 0 || isSubmitted}>
          Previous
        </button>
        <button
          type="button"
          onClick={nextQuestion}
          disabled={currentIndex === questions.length - 1 || isSubmitted}
        >
          Next
        </button>
        <button type="button" onClick={() => setIsSubmitted(true)} disabled={isSubmitted}>
          Submit
        </button>
        <button type="button" onClick={restartQuiz}>Restart</button>
      </div>

      {isSubmitted && (
        <p>
          Score: {score} / {questions.length}
        </p>
      )}
    </div>
  )
}

export default QuizPractice
