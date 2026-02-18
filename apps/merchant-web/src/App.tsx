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
      <h1>Merchant Web App</h1>
      <p>Merchant dashboard shell for loyalty operations.</p>
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
