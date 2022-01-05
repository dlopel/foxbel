import './App.css'
import MainHeader from './MainHeader'
import Main from './Main'
import Player from './Player'
import React from 'react'
import { AppContext } from '../context/AppContext'
import { getTrucksByAlbumAndSong, getArtistById } from '../api/search'
import CarouselAlbumItem from '../dto/CarouselAlbumItem'
import PlayerTruck from '../dto/PlayerTruck'
import ResultItem from '../dto/ResultItem'

export default function App() {
  const initState = {
    carouselItems: [],
    resultItems: [],
    playerTrucks: [],
    truckListLength: 0
  }
  const [appData, setAppData] = React.useState(initState)

  const [isLoading, setIsLoading] = React.useState(false)
  const [isFirstRendered, setIsFirstRendered] = React.useState(true)
  const [truckIndexToPlay, setTruckIndexToPlay] = React.useState(-1)

  const getTrucksByTitle = async (title) => {
    setIsFirstRendered(false)
    setIsLoading(true)
    //solo un limite de 40 canciones por busqueda
    const response = await getTrucksByAlbumAndSong(title, 40)

    const originalList = response.data
    console.log(originalList)
    if (originalList.length) {
      const dataForCarousel = await getDataForCarousel(originalList)
      const dataForResults = getDataForResults(originalList)
      const dataForPlayer = getDataForPlayer(originalList)

      setAppData({
        carouselItems: dataForCarousel,
        resultItems: dataForResults,
        playerTrucks: dataForPlayer,
        truckListLength: originalList.length
      })
      setIsLoading(false)
      setTruckIndexToPlay(0)
    } else {
      //cuando ya no es el 1er render de la app,
      //es posible que haya resultado vacio
      setAppData((prevState) => (
        {
          ...prevState,
          truckListLength: 0
        }
      ))
      setIsLoading(false)
      setTruckIndexToPlay(-1)
    }

  }

  const getDataForCarousel = async (originalList) => {
    //solo los 3 primeros album
    //se agrega la propiedad nb_fans al objeto artista de la lista original
    const carouselItems = []
    const trucksSlice = originalList.slice(0, 3)
    for (let i = 0; i < trucksSlice.length; i++) {
      const artist = await getArtistById(trucksSlice[i].artist.id)
      //no encontre el objeto de donde sale la informacion biografica del artista. sorry :C
      const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
      carouselItems.push(
        new CarouselAlbumItem(
          trucksSlice[i].album.cover_medium,
          trucksSlice[i].album.cover_big,
          trucksSlice[i].artist.name,
          trucksSlice[i].artist.picture_xl,
          trucksSlice[i].album.title,
          artist.nb_fan,
          description
        )
      )
    }
    return carouselItems
  }

  const getDataForResults = (originalList) => {
    let newList = originalList.map(truck =>
      new ResultItem(
        truck.album.cover_medium,
        truck.artist.name,
        truck.album.title
      )
    )
    return newList
  }

  const getDataForPlayer = (originalList) => {
    let newList = originalList.map(truck =>
      new PlayerTruck(
        truck.album.cover_medium,
        truck.artist.name,
        truck.album.title,
        truck.title_short,
        truck.preview
      )
    )
    return newList
  }

  return (
    <AppContext.Provider value={
      {
        carouselItems: appData.carouselItems,
        resultItems: appData.resultItems,
        getTrucksByTitle,
        setTruckIndexToPlay
      }}>
      <MainHeader />
      <Main
        trucksLength={appData.truckListLength}
        isLoading={isLoading}
        isFirstRendered={isFirstRendered} />
      <Player
        trucks={appData.playerTrucks}
        indexToPlay={truckIndexToPlay} />
    </AppContext.Provider>
  )
}