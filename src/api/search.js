import fetchJsonp from 'fetch-jsonp'

export const getTrucksByAlbumAndSong = async (title, limit) => {
    const url = `https://api.deezer.com/search?q=album:"${title}" track:"${title}"&index=0&limit=${limit.toString()}&output=jsonp`

    try {
        const response = await fetchJsonp(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getArtistById = async (id) => {
    const url = `https://api.deezer.com/artist/${id.toString()}&output=jsonp`

    try {
        const response = await fetchJsonp(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}