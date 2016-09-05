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
const saveProducts = save('products')
const loadProducts = load('products')

export default {
  saveProducts,
  loadProducts
}
