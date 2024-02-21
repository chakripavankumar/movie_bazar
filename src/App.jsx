import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-500'>
      <h1 className='text-3xl'>Vite + React</h1>
      <div className="pt-40">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
