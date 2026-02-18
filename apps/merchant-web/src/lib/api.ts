const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api'

export async function checkApiHealth() {
  const response = await fetch(`${baseUrl}/health`)
  if (!response.ok) {
    throw new Error(`health check failed with status ${response.status}`)
  }
  const data = (await response.json()) as { ok: boolean }
  return data.ok
}
