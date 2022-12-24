export function authHeader() {
  const token = localStorage.getItem('id_token');
  return (
    token ? { Authorization: `Bearer ${token}` } : {}
  )
}
