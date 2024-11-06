import toast from 'react-hot-toast'

// get all gadgets from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem('favorites')

  if (all) {
    const favorites = JSON.parse(all)
    return favorites
  } 
  else {
    return []
  }
}

// add a coffee to local storage
const addFavorite = gadget => {
  // get all previously saved gadget data
  const favorites = getAllFavorites()
  const isExist = favorites.find(item => item.product_id == gadget.product_id)
  if (isExist) return toast.error('Gadget already exists!')

  favorites.push(gadget)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  toast.success('Successfully added!')
}

// remove a coffee from local storage
const removeFavorite = id => {
  // get all previously saved gadget data
  const favorites = getAllFavorites()
  const remaining = favorites.filter(gadget => gadget.product_id != id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  toast.success('Successfully Removed!')
}

export { addFavorite, getAllFavorites, removeFavorite }