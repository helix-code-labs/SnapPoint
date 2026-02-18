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
      <h1>Customer LIFF App</h1>
      <p>Entry app for LINE LIFF customer journey.</p>
      <div className="card">
        <p>LIFF ID: {import.meta.env.VITE_LIFF_ID || 'not-configured'}</p>
        <button onClick={checkHealth} type="button">
          Check API Health
        </button>
        <p>Status: {status}</p>
      </div>
    </main>
  )
}

export default App
