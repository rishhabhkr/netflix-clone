import React from 'react'
import './App.css'
import Row from './Components/Row'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import requests from './requests'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
