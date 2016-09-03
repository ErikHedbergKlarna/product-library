const save = (key) => {
  return (data) => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }
}

const load = (key) => {
  return () => {
    return JSON.parse(window.localStorage.getItem(key)) || undefined
  }
}
const saveState = save('state')
const loadState = load('state')

export default {
  saveState,
  loadState
}
