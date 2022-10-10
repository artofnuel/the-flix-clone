import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Now Playing' fetchURL={requests.requestNowPlaying} />
        <Row rowID='2' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='3' title='Popular' fetchURL={requests.requestPopular} />
    </div>
  )
}

export default Home