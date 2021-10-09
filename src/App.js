import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppDashboard from './components/AppDashboard';
import Card from './components/Card'
import Container from './components/Container'
import mando from './assets/images/mandalorian.jpg'
import Footer from './components/Footer'
import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import LastGame from './components/LastGame'
import GenresInDatabase from './components/GenresInDatabase'



function App() {

  /* const [games, setGames] = useState([])
  const [users, setUsers] = useState([])
  const [genres, setGenres] = useState([]) */

  const [games, setGames] = useState([])
  const [users, setUsers] = useState([])
  const [genres, setGenres] = useState([])


  useEffect(async () => {



    let one = "/api/products"
    let two = "/api/genres"
    let three = "/api/users"


    const requestOne = await axios.get(one);
    const requestTwo = await axios.get(two);
    const requestThree = await axios.get(three);

    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responseThree = responses[2]

      console.log(responseOne)
      console.log(responseTwo)
      console.log(responseThree)

      setGames(responseOne.data)
      setGenres(responseTwo.data)
      setUsers(responseThree.data)

    }))

  }, [])


  const cards = [
    {
      line: 'card border-left-primary shadow h-100 py-2',
      color: 'text-xs font-weight-bold text-primary text-uppercase mb-1',
      title: 'Games in database',
      icon: 'fas fa-film fa-2x text-gray-300',
      card: games


    },
    {
      line: 'card border-left-success shadow h-100 py-2',
      color: 'text-xs font-weight-bold text-success text-uppercase mb-1',
      title: 'Genres',
      icon: 'fas fa-award fa-2x text-gray-300',
      card: genres


    },
    {
      line: 'card border-left-warning shadow h-100 py-2',
      color: 'text-xs font-weight-bold text-warning text-uppercase mb-1',
      title: 'Users',
      icon: 'fas fa-user fa-2x text-gray-300',
      card: users


    }
  ]

  return (
    <Fragment>
      <div className="App">
        <div id="wrapper">
          <Sidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />

              <div className="container-fluid">

                <AppDashboard />
                <div className="row">

                  {cards.map((c, index) =>
                    <Card key={c + index}
                      line={c.line}
                      color={c.color}
                      title={c.title}
                      icon={c.icon}
                      quantity={c.card.count} />)}

                  <Container>
                    {games.games ?
                      <LastGame
                        image={games.games[1].Image}
                        name={games.games[1].Name}
                        description={games.games[1].Description}
                        link={games.games[1].Detail} />
                      : ''}
                  </Container>

                  <Container>

                    {genres.genres ? <GenresInDatabase genres={genres.genres} /> : ''}
                  </Container>

                </div>


              </div>



            </div>
          </div>




        </div>



      </div>
      <Footer />



    </Fragment>



  );
}

export default App;
