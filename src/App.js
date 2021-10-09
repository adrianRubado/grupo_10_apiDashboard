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



function App() {

  /* const [games, setGames] = useState([])
  const [users, setUsers] = useState([])
  const [genres, setGenres] = useState([]) */

  const [games, setGames] = useState([])
  const [users, setUsers] = useState([])
  const [genres, setGenres] = useState([])


  useEffect( async () =>{



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

     },[])










  const style = {
    width : '40rem'

  };
  const cards = [
    {
      line : 'card border-left-primary shadow h-100 py-2',
      color : 'text-xs font-weight-bold text-primary text-uppercase mb-1',
      title : 'Games in database',
      icon : 'fas fa-film fa-2x text-gray-300',
      card : games


    },
    {
      line : 'card border-left-success shadow h-100 py-2',
      color : 'text-xs font-weight-bold text-success text-uppercase mb-1',
      title : 'Genres',
      icon : 'fas fa-award fa-2x text-gray-300',
      card : genres


    },
    {
      line : 'card border-left-warning shadow h-100 py-2',
      color : 'text-xs font-weight-bold text-warning text-uppercase mb-1',
      title : 'Users',
      icon : 'fas fa-user fa-2x text-gray-300',
      card : users


    }
  ]

  return (
    <Fragment>
    <div className="App">
    <div id="wrapper">
    <Sidebar/>

    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <Navbar/>

    <div className="container-fluid">

    <AppDashboard/>
    <div className="row">

    {cards.map((c,index) =>
    <Card key = {c + index}
    line = {c.line}
    color = {c.color}
    title = {c.title}
    icon = {c.icon}
    quantity = {c.card.count}/>)}

    <Container>
    <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last game in Data Base</h5>
                </div>
    <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={style} src={games.games ? games.games[5].Image : ''} alt=" Star Wars - Mandalorian "/>
                </div>
                <p>{games.games ? games.games[5].Description : ''}</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View game detail</a>
    </Container>

    <Container>
    <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in database</h5>
                </div>
    <br/>
    <div className="row">

            {genres.genres ? cards[1].card.genres.map((g,index) =>
            <div key = {g+index} className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													{g.name}
												</div>
											</div>
										</div>) : ''}


									</div>

    </Container>

    </div>


    </div>



    </div>
    </div>




    </div>



    </div>
    <Footer/>



    </Fragment>



  );
}

export default App;
