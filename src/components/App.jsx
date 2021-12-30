import './App.css'
import MainHeader from './MainHeader'
import Main from './Main'
import Player from './Player'
import React from 'react'
import { AppContext } from '../context/AppContext'
import { getTrucksByAlbumAndSong } from '../api/search'

export default function App() {
  const [truckList, setTruckList] = React.useState([])

  const getTrucksByTitle = React.useCallback((title) => {
    getTrucksByAlbumAndSong(title, 10)
      .then(data => {
        setTruckList(data.data)
      })
  }, [truckList])

  return (
    <AppContext.Provider value={{ getTrucksByTitle }}>
      <MainHeader />
      <Main trucks={truckList}/>
      <Player />
    </AppContext.Provider>
  )
}