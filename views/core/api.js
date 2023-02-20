const api = async ({ url, method = "GET" }) => {
  const response = await fetch(`${process.env.ATLASSIAN_URL}/rest/api/3/search${url}`, {
    method: method,
    headers: {
      'Authorization': `Basic ${Buffer.from(
          `${process.env.ATLASSIAN_USERNAME}:${process.env.ATLASSIAN_API_KEY}`
      ).toString('base64')}`,
      'Accept': 'application/json'
    }
  })

  return response.json()
}

export default api