import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideos: [],
  addToSavedVideos: () => {},
  theme: 'light',
  changeTheme: () => {},
})

export default SavedVideosContext
