import {React,Fragment} from 'react'

function LastGame(props) {


  const style = {
    width: '25rem'

  };
    return (
        <Fragment>
        <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Last game in Data Base</h5>
      </div>
      <div className="text-center">
        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={style} src={props.image} alt={props.name}/>
      </div>
      <p>{ props.description}</p>
      <a className="btn btn-danger" target="_blank" rel="nofollow" href={props.link}>View game detail</a>
      </Fragment>
    )
}

export default LastGame
