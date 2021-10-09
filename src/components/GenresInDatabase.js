import { React, Fragment } from 'react'
import Genre from '../components/Genre'

function GenresInDatabase(props) {
  return (
    <Fragment>
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Genres in database</h5>
      </div>
      <br />
      <div className="row">

        {props.genres.map((g, index) =>

          <Genre genre={g} key={index} />

         ) }


      </div>
    </Fragment>
  )
}

export default GenresInDatabase
