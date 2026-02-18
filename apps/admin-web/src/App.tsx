import { useState } from 'react'
import { checkApiHealth } from './lib/api'

function App() {
  const [status, setStatus] = useState('idle')

  const checkHealth = async () => {
    setStatus('loading')
    try {
      const ok = await checkApiHealth()
      setStatus(ok ? 'healthy' : 'unhealthy')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      <h1>Admin Web App</h1>
      <p>Admin console shell for platform control and analytics.</p>
      <div className="card">
        <button onClick={checkHealth} type="button">
          Check API Health
        </button>
        <p>Status: {status}</p>
      </div>
    </main>
  )
}

export default App
