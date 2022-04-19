const digest = async (data, algorithm = 'SHA-256') => {
  const msgUint8 = new TextEncoder().encode(data)
  const hashBuffer = await crypto.subtle.digest(algorithm, msgUint8)
  const hashArray = Array.from(new Uint8Array(hashBuffer))

  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export default digest
